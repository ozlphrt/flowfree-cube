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
    
    this.initLevel();
  }

  calculateTargetSize(level) {
    if (level < 20) return 5;
    if (level < 35) return 6;
    return 7;
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
    this.stubs = this.stubs.filter(p => p !== path);
    if (this.completedPaths.indexOf(path) === -1) this.completedPaths.push(path);
    if (this.onUpdate) this.onUpdate();

    // Check for Level Victory
    if (this.completedPaths.length === this.plates.length / 2) {
        soundManager.playVictory();
    }
  }

  deletePathByPlate(f, u, v) {
    const pathObj = this.stubs.find(s => s.cells.some(c => c.f === f && c.u === u && c.v === v)) ||
                   this.completedPaths.find(p => p.cells.some(c => c.f === f && c.u === u && c.v === v));
    
    if (pathObj) {
      if (pathObj.meshes) {
        pathObj.meshes.forEach(m => this.grid.group.remove(m));
      }
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
        if (path.meshes) {
            path.meshes.forEach(m => this.grid.group.remove(m));
        }
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
}
