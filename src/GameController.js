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
    
    // TEMP RESET: Force level 1 and clear mastery for the new system (One-time sync)
    if (localStorage.getItem('sovereign_sync_v1.187.7') !== 'done') {
        localStorage.setItem(SAVE_KEY, '1');
        localStorage.setItem('sovereign_total_mastery', '0');
        localStorage.setItem('sovereign_sync_v1.187.7', 'done');
        console.log('Sovereign: One-time Reset for Scoring Synchronization (v1.187.7)');
    }
    
    // Load persisted level or default to 1
    const savedLevel = localStorage.getItem(SAVE_KEY);
    this.currentLevel = savedLevel ? parseInt(savedLevel, 10) : 1;
    
    this.loader = document.getElementById('loader-overlay');
    this.lvlDisplay = document.getElementById('level-val');
    this.livesDisplay = document.getElementById('lives-val');
    this.cellsDisplay = document.getElementById('cells-val');
    this.scoreDisplay = document.getElementById('score-val');
    this.masteryContainer = document.querySelector('.cells-mastery-container');
    this.masteryRing = document.getElementById('cells-progress');
    this.targetOccupiedCells = 0;

    // Load persisted lives or default to 3
    const savedLives = localStorage.getItem('sovereign_lives');
    this.lives = savedLives !== null ? parseInt(savedLives, 10) : 3;
    if (this.livesDisplay) this.livesDisplay.innerText = this.lives;

    // Load persistent Mastery Score
    const savedMastery = localStorage.getItem('sovereign_total_mastery');
    this.totalMastery = savedMastery !== null ? parseInt(savedMastery, 10) : 0;
    if (this.scoreDisplay) this.scoreDisplay.innerText = this.totalMastery;
    
    this.isSolving = false; // GUARD: Prevent double-execution
    this.initLevel();
  }

  calculateTargetSize(level) {
    if (level < 6)   return 2;   // 2x2x2: Intro         (levels 1-5)
    if (level < 26)  return 3;   // 3x3x3: Mastery       (levels 6-25)
    if (level < 56)  return 4;   // 4x4x4: Core           (levels 26-55)
    if (level < 101) return 5;   // 5x5x5: Expansion      (levels 56-100)
    if (level < 201) return 6;   // 6x6x6: High Diff      (levels 101-200)
    if (level < 401) return 7;   // 7x7x7: Advanced       (levels 201-400)
    if (level < 701) return 8;   // 8x8x8: Sovereign      (levels 401-700)
    return 9;                    // 9x9x9: Sovereign Max   (levels 701+)
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
        const result = PuzzleGenerator.generate(this.grid, this.currentLevel);
        const puzzle = result.pairs;
        this.targetOccupiedCells = result.targetOccupied;
        this.currentPuzzle = puzzle; // SOVEREIGN MEMORY: Store for the Auto Solver
        
        if (puzzle && puzzle.length > 0) {
            puzzle.forEach(pair => {
                this.addPlate(pair.points[0], pair.color, pair.label);
                this.addPlate(pair.points[1], pair.color, pair.label);
            });
        } else {
            console.error(`Sovereign Generator: Failed Level ${this.currentLevel}`);
        }

        this.updateCellCounter();

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
    this.updateCellCounter();
  }

  updateCellCounter() {
    if (!this.cellsDisplay) return;
    
    // COUNT CONDUITS (Unified Logic: Count every cell that is NOT a terminal plate)
    let currentOccupied = 0;
    const allPaths = [...this.stubs, ...this.completedPaths];
    const uniqueCells = new Set();
    
    allPaths.forEach(path => {
        path.cells.forEach(cell => {
            const isPlate = this.plates.some(p => p.f === cell.f && p.u === cell.u && p.v === cell.v);
            if (!isPlate) {
                uniqueCells.add(`${cell.f},${cell.u},${cell.v}`);
            }
        });
    });

    currentOccupied = uniqueCells.size;

    console.log(`[SOVEREIGN AUDIT] Unified Conduits: ${currentOccupied} (AI Budget ${this.targetOccupiedCells})`);

    const remaining = this.targetOccupiedCells - currentOccupied;
    this.cellsDisplay.innerText = Math.abs(remaining);
    
    // Mastery Ring Animation
    if (this.masteryRing && this.masteryContainer) {
        const total = this.targetOccupiedCells;
        const percent = Math.min(1.5, currentOccupied / total);
        const circumference = 113.1; // 2 * pi * 18
        this.masteryRing.style.strokeDashoffset = circumference * (1 - percent);

        // State Feedback: Traffic Light Progress (Remaining Budget Logic)
        this.masteryContainer.classList.remove('mastery-perfect', 'mastery-over', 'mastery-low', 'mastery-mid', 'mastery-high');
        
        if (remaining === 0) {
            this.masteryContainer.classList.add('mastery-perfect');
            const perfectLabel = document.getElementById('perfect-label');
            if (perfectLabel) {
                perfectLabel.classList.remove('hidden');
                setTimeout(() => perfectLabel.classList.add('hidden'), 1000);
            }
        } else if (remaining < 0) {
            this.masteryContainer.classList.add('mastery-over'); // Inefficient Red
        } else {
            // "Budget" logic: Green at start, Yellow when tight
            const budgetRemaining = remaining / total;
            if (budgetRemaining > 0.25) {
                this.masteryContainer.classList.add('mastery-high'); // Plenty left: Green
            } else {
                this.masteryContainer.classList.add('mastery-mid'); // Almost out: Yellow
            }
        }
    }

    // Aesthetic: Subtle pulse on change
    this.cellsDisplay.style.transform = 'scale(1.2)';
    setTimeout(() => { this.cellsDisplay.style.transform = 'scale(1)'; }, 100);
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
    if (!this.stubs.includes(path)) this.stubs.push(path);
    this.updateCellCounter();
    if (this.onUpdate) this.onUpdate();
  }

  addStub(stub) {
    if (this.stubs.indexOf(stub) === -1) this.stubs.push(stub);
    this.updateCellCounter();
    if (this.onUpdate) this.onUpdate();
  }

  addCompletedPath(path) {
    if (!this.completedPaths.includes(path)) {
      this.completedPaths.push(path);
      path.isCompleted = true;
      // MUTUAL EXCLUSIVITY: Remove from stubs when completed
      this.stubs = this.stubs.filter(s => s !== path);
    }
    this.stats = { completed: 0, total: 0 };
    this.updateCellCounter();
    if (this.onUpdate) this.onUpdate();

    // Check for Level Victory
    if (this.completedPaths.length === this.plates.length / 2) {
        soundManager.playVictory();
        
        // Final Mastery Score Calculation (Budget Balance)
        const conduits = this.calculateCurrentConduits();
        const masteryGain = this.targetOccupiedCells - conduits;
        
        this.updateTotalMastery(masteryGain);
    }
  }

  calculateCurrentConduits() {
    const allPaths = [...this.stubs, ...this.completedPaths];
    const uniqueCells = new Set();
    allPaths.forEach(path => {
        path.cells.forEach(cell => {
            const isPlate = this.plates.some(p => p.f === cell.f && p.u === cell.u && p.v === cell.v);
            if (!isPlate) uniqueCells.add(`${cell.f},${cell.u},${cell.v}`);
        });
    });
    return uniqueCells.size;
  }

  updateTotalMastery(val) {
    if (val === 0) return; // No change for perfect (optional: show 'PERFECT' text instead)
    
    this.totalMastery += val;
    localStorage.setItem('sovereign_total_mastery', this.totalMastery);
    
    // Animate HUD change
    if (this.scoreDisplay) {
        this.scoreDisplay.innerText = this.totalMastery;
        this.showMasteryPopup(val);
    }
  }

  showMasteryPopup(val) {
    if (!this.masteryContainer) return;
    
    const popup = document.createElement('div');
    const isPos = val > 0;
    popup.className = `mastery-popup animate ${isPos ? 'positive' : 'negative'}`;
    popup.innerText = (isPos ? '+' : '') + val;
    
    this.masteryContainer.appendChild(popup);
    
    // Auto-cleanup
    setTimeout(() => popup.remove(), 1500);
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
    this.updateCellCounter();
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
