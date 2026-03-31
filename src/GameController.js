import { PuzzleGenerator } from './PuzzleGenerator.js';
import { TextureHelper } from './TextureHelper.js';

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
    
    this.initLevel();
  }

  initLevel() {
    const puzzle = PuzzleGenerator.generate(this.grid);
    if (!puzzle || puzzle.length === 0) return;

    puzzle.forEach(pair => {
      // Each pair now has color AND label
      this.addPlate(pair.points[0], pair.color, pair.label);
      this.addPlate(pair.points[1], pair.color, pair.label);
    });
  }

  addPlate(coord, color, label) {
    const { f, u, v } = coord;
    const mesh = this.grid.addPlate(f, u, v, color);
    
    // Use the new TextureHelper to put a number on the plate
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

  addStub(stub) {
    this.stubs.push(stub);
  }

  addCompletedPath(path) {
    this.completedPaths.push(path);
  }

  // Merges two independent stubs of the same color AND same label into one completed path
  mergePaths(pathA, pathB, intersect) {
    const idxB = pathB.cells.findIndex(c => c.f === intersect.f && c.u === intersect.u && c.v === intersect.v);
    if (idxB === -1) return null;
    const cellsB = pathB.cells.slice(0, idxB + 1);
    const cellsA = [...pathA.cells];
    cellsA.pop();
    cellsA.reverse();
    const mergedCells = [...cellsB, ...cellsA];
    
    this.deletePathByPlate(pathA.startPlate.f, pathA.startPlate.u, pathA.startPlate.v);
    this.deletePathByPlate(pathB.startPlate.f, pathB.startPlate.u, pathB.startPlate.v);
    
    const mergedPath = {
      color: pathA.color,
      label: pathA.label, // Preserve label
      startPlate: pathB.startPlate,
      cells: mergedCells,
      meshesByCell: {},
      meshes: [],
      isCompleted: true
    };
    
    this.completedPaths.push(mergedPath);
    return mergedPath;
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
      return true;
    }
    return false;
  }

  // Returns the whole path object for the occupant so we can check both color and label
  getCellOccupant(f, u, v) {
    return this.stubs.find(s => s.cells.some(c => c.f === f && c.u === u && c.v === v)) ||
           this.completedPaths.find(p => p.cells.some(c => c.f === f && c.u === u && c.v === v));
  }

  canStartPathAt(f, u, v) {
    const plate = this.getPlateAt(f, u, v);
    if (!plate) return null;
    return plate;
  }

  getPlates(color, label) {
    return this.plates.filter(p => p.color === color && p.label === label);
  }

  setPlateHighlight(plate, highlighted) {
    if (plate.mesh) {
      plate.mesh.material.emissiveIntensity = highlighted ? 1.0 : 0.5;
    }
  }
}
