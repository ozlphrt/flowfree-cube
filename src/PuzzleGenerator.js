import { COLORS } from './Constants.js';

export class PuzzleGenerator {
  static generate(grid, colorCount = 5, totalPairs = 12) {
    const size = grid.size;
    const occupied = new Set();
    const resultPairs = [];
    const colors = Object.values(COLORS);
    
    let success = false;
    let globalAttempts = 0;
    
    const colorsToLabels = [
      { color: colors[0], labels: [1, 2, 3] }, // Red 1, 2, 3
      { color: colors[1], labels: [1, 2, 3] }, // Blue 1, 2, 3
      { color: colors[2], labels: [1, 2] },    // Green 1, 2
      { color: colors[3], labels: [1, 2] },    // Yellow 1, 2
      { color: colors[4], labels: [1, 2] }     // Orange 1, 2
      // Total: 3+3+2+2+2 = 12 pairs
    ];

    while (!success && globalAttempts < 100) { 
      occupied.clear();
      resultPairs.length = 0;
      let possible = true;

      for (const group of colorsToLabels) {
        for (const label of group.labels) {
          const path = this.findComplexPath(grid, occupied);
          if (!path) {
            possible = false;
            break;
          }
          path.forEach(pt => occupied.add(`${pt.f},${pt.u},${pt.v}`));
          resultPairs.push({
            color: group.color,
            label: label,
            points: [path[0], path[path.length - 1]]
          });
        }
        if (!possible) break;
      }

      if (possible && resultPairs.length === totalPairs) success = true;
      globalAttempts++;
    }

    if (!success) {
      console.warn('Failed to generate labeled 12-pair puzzle, falling back...');
      return []; 
    }

    return resultPairs;
  }

  static findComplexPath(grid, occupied) {
    const allCells = [];
    for (let f = 0; f < 6; f++) {
      for (let u = 0; u < grid.size; u++) {
        for (let v = 0; v < grid.size; v++) {
          if (!occupied.has(`${f},${u},${v}`)) allCells.push({ f, u, v });
        }
      }
    }

    if (allCells.length === 0) return null;
    
    const startCandidates = allCells.sort(() => Math.random() - 0.5).slice(0, 25);
    
    for (const start of startCandidates) {
      const targetLen = 8 + Math.floor(Math.random() * 15);
      const path = this.backtrackPath(grid, start, targetLen, occupied, [start]);
      if (path && path.length >= 6) return path;
    }
    return null;
  }

  static backtrackPath(grid, current, targetLen, globalOccupied, currentPath) {
    if (currentPath.length >= targetLen) return currentPath;
    
    const neighbors = grid.getNeighborCells(current);
    const valid = neighbors.filter(n => {
      const key = `${n.f},${n.u},${n.v}`;
      if (globalOccupied.has(key)) return false;
      if (currentPath.some(pt => pt.f === n.f && pt.u === n.u && pt.v === n.v)) return false;
      return true;
    });

    if (valid.length === 0) {
      return currentPath.length >= 6 ? currentPath : null;
    }

    const shuffled = valid.sort(() => Math.random() - 0.5);
    
    for (const next of shuffled) {
      const result = this.backtrackPath(grid, next, targetLen, globalOccupied, [...currentPath, next]);
      if (result) return result;
    }

    return currentPath.length >= 6 ? currentPath : null;
  }
}
