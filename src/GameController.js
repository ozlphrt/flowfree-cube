import * as THREE from 'three';
import { soundManager } from './SoundManager.js';
import { PuzzleGenerator } from './PuzzleGenerator.js';
import { TextureHelper } from './TextureHelper.js';

const SAVE_KEY = 'sovereign_cube_level';

export class GameController {
  constructor(grid) {
    this.grid = grid;
    if (!this.grid) {
      console.error('GameController: Grid is missing!');
      return;
    }
    this.plates = [];
    this.stubs = [];
    this.completedPaths = [];
    this.onUpdate = null;
    
    // Load persisted level or default to 1
    const savedLevel = localStorage.getItem(SAVE_KEY);
    this.currentLevel = savedLevel ? parseInt(savedLevel, 10) : 1;
    
    this.loader = document.getElementById('loader-overlay');
    this.lvlDisplay = document.getElementById('level-val');
    this.livesDisplay = document.getElementById('lives-val');

    // Load persisted lives or default to 3
    const savedLives = localStorage.getItem('sovereign_lives');
    this.lives = savedLives !== null ? parseInt(savedLives, 10) : 3;
    if (this.livesDisplay) this.livesDisplay.innerText = this.lives;
    
    this.isSolving = false; // GUARD: Prevent double-execution
    this.initLevel();
  }

  calculateTargetSize(level) {
    if (level < 6)   return 2;   // 2x2x2: Intro         (levels 1-5)
    if (level < 16)  return 3;   // 3x3x3: Learning       (levels 6-15)
    if (level < 36)  return 4;   // 4x4x4: Intermediate   (levels 16-35)
    if (level < 66)  return 5;   // 5x5x5: Core           (levels 36-65)
    if (level < 116) return 6;   // 6x6x6: Expansion      (levels 66-115)
    if (level < 201) return 7;   // 7x7x7: High Difficulty (levels 116-200)
    if (level < 351) return 8;   // 8x8x8: Advanced       (levels 201-350)
    return 9;                    // 9x9x9: Sovereign Max   (levels 351+)
  }

  initLevel() {
    // 1. Show UI Loader
    if (this.loader) this.loader.classList.remove('hidden');
    if (this.lvlDisplay) this.lvlDisplay.innerText = this.currentLevel;

    // 2. Handle Dynamic Scaling
    const targetSize = this.calculateTargetSize(this.currentLevel);
    if (this.grid.size !== targetSize) {
        this.grid.rebuild(targetSize);
    }
    if (window.fitCameraToCube) window.fitCameraToCube(targetSize);

    // 3. Clear old state
    this.plates.forEach(p => {
        this.grid.group.remove(p.mesh);
        if (p.labelMesh) this.grid.group.remove(p.labelMesh);
    });
    this.stubs.forEach(s => s.meshes.forEach(m => this.grid.group.remove(m)));
    this.completedPaths.forEach(p => p.meshes.forEach(m => this.grid.group.remove(m)));
    
    this.plates = [];
    this.stubs = [];
    this.completedPaths = [];

    // 4. Heavy Generation (Async for UI reactivity)
    setTimeout(() => {
        const puzzle = PuzzleGenerator.generate(this.grid, this.currentLevel);
        this.currentPuzzle = puzzle; // SOVEREIGN MEMORY: Store for the Auto Solver
        
        if (puzzle && puzzle.length > 0) {
            puzzle.forEach(pair => {
                this.addPlate(pair.points[0], pair.color, pair.label);
                this.addPlate(pair.points[1], pair.color, pair.label);
            });
        } else {
            console.error(`Sovereign Generator: Failed Level ${this.currentLevel}`);
        }

        if (this.loader) this.loader.classList.add('hidden');
        if (this.onUpdate) this.onUpdate();
    }, 100);
  }

  nextLevel() {
    this.currentLevel++;
    localStorage.setItem(SAVE_KEY, this.currentLevel);
    this.initLevel();
  }

  addPlate(coord, color, label) {
    const { f, u, v } = coord;
    const { plate, label: labelMesh } = this.grid.addPlate(f, u, v, color);
    
    // Apply texture to the TOP TRANSPARENT LABEL MESH
    const texture = TextureHelper.createLabeledTexture(color, label);
    labelMesh.material.map = texture;
    labelMesh.material.needsUpdate = true;

    this.plates.push({ f, u, v, color, label, mesh: plate, labelMesh });
  }

  refillLives() {
    this.lives = 3;
    localStorage.setItem('sovereign_lives', this.lives);
    if (this.livesDisplay) this.livesDisplay.innerText = this.lives;
    soundManager.playLock(); // Tactical confirmation sound
  }

  getPlateAt(f, u, v) {
    return this.plates.find(p => p.f === f && p.u === u && p.v === v);
  }

  getCompletedPathByPlate(f, u, v) {
    return this.completedPaths.find(p => p.cells.some(c => c.f === f && c.u === u && c.v === v));
  }

  removeCompletedPath(path) {
    this.completedPaths = this.completedPaths.filter(p => p !== path);
    if (this.stubs.indexOf(path) === -1) this.stubs.push(path);
    if (this.onUpdate) this.onUpdate();
  }

  addStub(stub) {
    if (this.stubs.indexOf(stub) === -1) this.stubs.push(stub);
    if (this.onUpdate) this.onUpdate();
  }

  addCompletedPath(path) {
    if (!this.completedPaths.includes(path)) {
      this.completedPaths.push(path);
      path.isCompleted = true;
    }
    this.stats = { completed: 0, total: 0 };
    if (this.onUpdate) this.onUpdate();

    // Check for Level Victory
    if (this.completedPaths.length === this.plates.length / 2) {
        soundManager.playVictory();
    }
  }

  clearPath(path) {
    if (path.meshes) {
      path.meshes.forEach(m => this.grid.group.remove(m));
      path.meshes = [];
      path.meshesByCell = {};
    }
    
    path.isCompleted = false;
    const idx = this.completedPaths.indexOf(path);
    if (idx !== -1) this.completedPaths.splice(idx, 1);
  }

  deletePathByPlate(f, u, v) {
    const pathObj = this.stubs.find(s => s.cells.some(c => c.f === f && c.u === u && c.v === v)) ||
                   this.completedPaths.find(p => p.cells.some(c => c.f === f && c.u === u && c.v === v));
    
    if (pathObj) {
      this.clearPath(pathObj);
      this.stubs = this.stubs.filter(p => p !== pathObj);
      this.completedPaths = this.completedPaths.filter(p => p !== pathObj);
      if (this.onUpdate) this.onUpdate();
      return true;
    }
    return false;
  }

  clearPathsByColor(color, label) {
    const toClear = [
        ...this.stubs.filter(s => s.color === color && s.label === label),
        ...this.completedPaths.filter(p => p.color === color && p.label === label)
    ];

    toClear.forEach(path => {
        this.clearPath(path);
        this.stubs = this.stubs.filter(s => s !== path);
        this.completedPaths = this.completedPaths.filter(p => p !== path);
    });

    if (toClear.length > 0) {
        soundManager.playVent();
        if (this.onUpdate) this.onUpdate();
    }
  }

  getCellOccupant(f, u, v) {
    return this.stubs.find(s => s.cells.some(c => c.f === f && c.u === u && c.v === v)) ||
           this.completedPaths.find(p => p.cells.some(c => c.f === f && c.u === u && c.v === v));
  }

  getStats() {
    return {
      completed: this.completedPaths.length,
      total: this.plates.length / 2
    };
  }

  resetLevel() {
    this.initLevel();
  }

  setPlateHighlight(plate, highlighted) {
    if (plate.labelMesh) {
      plate.labelMesh.material.emissiveIntensity = highlighted ? 1.0 : 0.0;
    }
  }

  async solveBoard() {
    // 1. Guard Clause: Logic check (Is solving currently in progress?)
    if (!this.currentPuzzle || this.lives <= 0 || this.isSolving) return;
    this.isSolving = true;

    try {
        // 2. Resource Consumption & Sync
        this.lives--;
        localStorage.setItem('sovereign_lives', this.lives);
        if (this.livesDisplay) this.livesDisplay.innerText = this.lives;

        // 3. Clear existing paths/stubs to prevent collision artifacts
        this.stubs.forEach(s => s.meshes.forEach(m => this.grid.group.remove(m)));
        this.completedPaths.forEach(p => p.meshes.forEach(m => this.grid.group.remove(m)));
        this.stubs = [];
        this.completedPaths = [];

        // 4. SOVEREIGN TRACING: Reveal every cell and corner-wrap individually
        for (const item of this.currentPuzzle) {
            soundManager.playVent(); // Strategic click for new path start

            const pathObj = {
                color: item.color,
                label: item.label,
                startPlate: this.getPlateAt(item.path[0].f, item.path[0].u, item.path[0].v),
                cells: [...item.path],
                meshes: [],
                meshesByCell: {}, // TRACKING: Essential for stable v1.185.3
                isCompleted: true
            };

            const points = this.grid.getPathPoints(pathObj.cells);
            const pipeR = 0.18;
            const mat = new THREE.MeshPhysicalMaterial({
                color: new THREE.Color(item.color),
                roughness: 0.2, metalness: 0.1,
                emissive: 0x000000, emissiveIntensity: 0.0, // ABSOLUTE GLOW PURGE
                clearcoat: 0.0
            });

            const jointGeo = new THREE.SphereGeometry(pipeR, 12, 12);

            this.addCompletedPath(pathObj);

            // CINEMATIC TRACE LOOP
            for (let i = 0; i < points.length; i++) {
                const p = points[i].pos;
                const cellIdx = points[i].cellIdx;
                
                // 1. Manifest the Joint
                const joint = new THREE.Mesh(jointGeo, mat);
                joint.position.copy(p);
                joint.renderOrder = 60;
                this.grid.group.add(joint);
                pathObj.meshes.push(joint);
                if (!pathObj.meshesByCell[cellIdx]) pathObj.meshesByCell[cellIdx] = [];
                pathObj.meshesByCell[cellIdx].push(joint);

                // 2. Manifest Segment to PREVIOUS (if exists)
                if (i > 0) {
                    const pPrev = points[i-1].pos;
                    const dist = p.distanceTo(pPrev);
                    if (dist > 0.001) {
                        const geo = new THREE.CylinderGeometry(pipeR, pipeR, dist, 12);
                        const mesh = new THREE.Mesh(geo, mat);
                        mesh.position.copy(p).add(pPrev).multiplyScalar(0.5);
                        mesh.lookAt(p);
                        mesh.rotateX(Math.PI / 2);
                        mesh.renderOrder = 60;
                        this.grid.group.add(mesh);
                        pathObj.meshes.push(mesh);
                        pathObj.meshesByCell[cellIdx].push(mesh);
                    }
                }

                // WAKE UP ENGINE
                if (window.requestSovereignFrame) window.requestSovereignFrame();

                // ORGANIC CADENCE: Cell-by-cell feel (~40ms)
                await new Promise(r => setTimeout(r, 40));
                soundManager.playTick(i); // Escalating pitch for the trace
            }
        }
    } finally {
        this.isSolving = false;
        // 5. Final update hook
        if (this.onUpdate) this.onUpdate();
    }
  }
}
