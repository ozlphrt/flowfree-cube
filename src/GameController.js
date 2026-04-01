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
    
    this.initLevel();
  }

  initLevel() {
    // Clear old state
    this.plates.forEach(p => this.grid.group.remove(p.mesh));
    this.stubs.forEach(s => s.meshes.forEach(m => this.grid.group.remove(m)));
    this.completedPaths.forEach(p => p.meshes.forEach(m => this.grid.group.remove(m)));
    
    this.plates = [];
    this.stubs = [];
    this.completedPaths = [];

    const puzzle = PuzzleGenerator.generate(this.grid, this.currentLevel);
    if (!puzzle || puzzle.length === 0) {
      console.error(`Sovereign Generator: Failed to produce Level ${this.currentLevel}. Retrying...`);
      // Fallback: Try a slightly lower level difficulty if it absolutely fails
      const fallbackPuzzle = PuzzleGenerator.generate(this.grid, Math.max(1, this.currentLevel - 1));
      if (fallbackPuzzle && fallbackPuzzle.length > 0) {
        fallbackPuzzle.forEach(pair => {
            this.addPlate(pair.points[0], pair.color, pair.label);
            this.addPlate(pair.points[1], pair.color, pair.label);
        });
      }
    } else {
        puzzle.forEach(pair => {
            this.addPlate(pair.points[0], pair.color, pair.label);
            this.addPlate(pair.points[1], pair.color, pair.label);
        });
    }

    if (this.onUpdate) this.onUpdate();
  }

  nextLevel() {
    this.currentLevel++;
    localStorage.setItem(SAVE_KEY, this.currentLevel);
    this.initLevel();
  }

  addPlate(coord, color, label) {
    const { f, u, v } = coord;
    const mesh = this.grid.addPlate(f, u, v, color);
    
    const texture = TextureHelper.createLabeledTexture(color, label);
    mesh.material.map = texture;
    mesh.material.emissiveMap = texture;
    mesh.material.emissiveIntensity = 0.5;
    mesh.material.needsUpdate = true;

    this.plates.push({ f, u, v, color, label, mesh });
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
    if (plate.mesh) {
      plate.mesh.material.emissiveIntensity = highlighted ? 1.0 : 0.5;
    }
  }
}
