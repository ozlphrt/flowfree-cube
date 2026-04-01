import { COLORS } from './Constants.js';

export class PuzzleGenerator {
  static generate(grid, level = 1) {
    const occupied = new Set();
    const resultPairs = [];
    const colors = Object.values(COLORS);
    
    // SOVEREIGN SIMPLICITY: level = number of pairs
    // Cap at a reasonable maximum for the 5x5 cube grid to ensure success
    const maxPairs = 18;
    const targetPairs = Math.min(level, maxPairs);

    // Dynamic Distribution of Labels
    const colorsToLabels = [];
    let allocated = 0;
    let colorIdx = 0;
    while (allocated < targetPairs) {
        const c = colors[colorIdx % colors.length];
        const group = colorsToLabels.find(g => g.color === c);
        if (group) {
            group.labels.push(group.labels.length + 1);
        } else {
            colorsToLabels.push({ color: c, labels: [1] });
        }
        allocated++;
        colorIdx++;
    }

    let success = false;
    let globalAttempts = 0;
    const maxAttempts = 600; // INCREASED FOR HIGH DENSITY PUZZLES
    
    while (!success && globalAttempts < maxAttempts) { 
      occupied.clear();
      resultPairs.length = 0;
      let possible = true;
      const allTerminals = [];

      // RELAXATION: Gradually lower constraints as failures increase
      const relaxation = Math.floor(globalAttempts / 50); 
      const minPathLen = Math.max(2, 6 - relaxation); // FASTER PROGRESSION
      const useStrictSpacing = relaxation < 3;

      for (const group of colorsToLabels) {
        for (const label of group.labels) {
          // Label-based path length: Higher labels get shorter "filler" lengths
          const baseLen = (label >= 3) ? 12 : 6;
          const targetLen = baseLen + Math.floor(Math.random() * 8);

          const path = this.findComplexPath(grid, occupied, allTerminals, targetLen, minPathLen, useStrictSpacing);
          if (!path) {
            possible = false;
            break;
          }
          path.forEach(pt => occupied.add(`${pt.f},${pt.u},${pt.v}`));
          const p1 = path[0];
          const p2 = path[path.length - 1];
          allTerminals.push(p1, p2);
          
          resultPairs.push({
            color: group.color,
            label: label,
            points: [p1, p2]
          });
        }
        if (!possible) break;
      }

      if (possible && resultPairs.length === targetPairs) success = true;
      globalAttempts++;
    }

    if (!success) {
      console.warn(`Failed to generate level ${level} after ${globalAttempts} attempts.`);
      return []; 
    }

    return resultPairs;
  }

  static findComplexPath(grid, occupied, existingTerminals, targetLen, minAllowedLen, useStrictSpacing) {
    const allCells = [];
    for (let f = 0; f < 6; f++) {
      for (let u = 0; u < grid.size; u++) {
        for (let v = 0; v < grid.size; v++) {
          const key = `${f},${u},${v}`;
          if (!occupied.has(key)) {
            if (useStrictSpacing) {
              const tooNear = existingTerminals.some(t => t.f === f && Math.abs(t.u - u) + Math.abs(t.v - v) <= 1);
              if (tooNear) continue;
            }
            allCells.push({ f, u, v });
          }
        }
      }
    }

    if (allCells.length === 0) return null;
    
    // Increased seeding for more exhaustive search
    const startCandidates = allCells.sort(() => Math.random() - 0.5).slice(0, 50);
    
    for (const start of startCandidates) {
      const path = this.backtrackPath(grid, start, targetLen, occupied, [start]);
      
      if (path && path.length >= minAllowedLen) {
        const startPoint = path[0];
        const endPoint = path[path.length - 1];
        
        // FACE DIVERSITY: End must be on a different surface than start
        if (startPoint.f === endPoint.f) continue;

        if (useStrictSpacing) {
          const tooNear = existingTerminals.some(t => t.f === endPoint.f && Math.abs(t.u - endPoint.u) + Math.abs(t.v - endPoint.v) <= 1);
          if (tooNear) continue;
        }

        return path;
      }
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
