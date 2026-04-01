import { COLORS } from './Constants.js';

export class PuzzleGenerator {
  static generate(grid, level = 1) {
    const startTime = Date.now();
    const maxPairs = 40; // High limit now that we have recursive solver and 7x7 scaling
    const targetPairs = Math.min(level, maxPairs);
    const colors = Object.values(COLORS);
    
    // 1. Difficulty Curve Parameters
    const isHighDensity = (level >= 11);
    const gridDensity = targetPairs / (grid.size * grid.size * 6);
    
    // Adaptive Constraints
    const forceFaceCrossingProb = level < 11 ? 1.0 : 0.65;
    const useStrictSpacing = level < 11;
    const maxPathLen = level < 11 ? 25 : Math.max(6, Math.floor(150 / targetPairs * 1.5));

    // 2. Pair Allocation
    const pairsToSolve = [];
    let colorIdx = 0;
    while (pairsToSolve.length < targetPairs) {
        const c = colors[colorIdx % colors.length];
        const label = Math.floor(colorIdx / colors.length) + 1;
        pairsToSolve.push({ color: c, label });
        colorIdx++;
    }

    // 3. Recursive Solver
    const occupied = new Set();
    const resultPairs = [];
    const allTerminals = [];

    const solve = (pairIdx) => {
        if (pairIdx === targetPairs) return true;
        if (Date.now() - startTime > 3000) return false; // Safety timeout

        const pairInfo = pairsToSolve[pairIdx];
        const candidates = this.getStartEndCandidates(grid, occupied, allTerminals, useStrictSpacing);
        
        // Shuffle candidates for variety
        candidates.sort(() => Math.random() - 0.5).slice(0, 30);

        for (const candidate of candidates) {
            // Respect Face Crossing Prob
            const isSameFace = candidate.start.f === candidate.end.f;
            if (isSameFace && Math.random() < forceFaceCrossingProb) continue;

            const path = this.findPathBetween(grid, candidate.start, candidate.end, occupied, maxPathLen);
            if (path) {
                // Apply Path
                path.forEach(p => occupied.add(`${p.f},${p.u},${p.v}`));
                allTerminals.push(candidate.start, candidate.end);
                resultPairs.push({ color: pairInfo.color, label: pairInfo.label, points: [candidate.start, candidate.end] });

                // Recurse
                if (solve(pairIdx + 1)) return true;

                // Backtrack
                resultPairs.pop();
                allTerminals.pop(); allTerminals.pop();
                path.forEach(p => occupied.delete(`${p.f},${p.u},${p.v}`));
            }
        }
        return false;
    };

    if (solve(0)) {
        console.log(`Sovereign Generator: Generated Level ${level} in ${Date.now() - startTime}ms`);
        return resultPairs;
    }

    console.warn(`Sovereign Generator: Failed Level ${level} after ${Date.now() - startTime}ms`);
    return [];
  }

  static getStartEndCandidates(grid, occupied, existingTerminals, strictSpacing) {
    const freeCells = [];
    for (let f = 0; f < 6; f++) {
      for (let u = 0; u < grid.size; u++) {
        for (let v = 0; v < grid.size; v++) {
          const key = `${f},${u},${v}`;
          if (!occupied.has(key)) {
            if (strictSpacing) {
              const tooNear = existingTerminals.some(t => t.f === f && Math.abs(t.u - u) + Math.abs(t.v - v) <= 1);
              if (tooNear) continue;
            }
            freeCells.push({ f, u, v });
          }
        }
      }
    }

    const candidates = [];
    const count = Math.min(freeCells.length, 60);
    const shuffled = freeCells.sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
            candidates.push({ start: shuffled[i], end: shuffled[j] });
        }
    }
    return candidates.slice(0, 100);
  }

  static findPathBetween(grid, start, end, globalOccupied, maxLen) {
    const queue = [[start]];
    const visited = new Set();
    visited.add(`${start.f},${start.u},${start.v}`);

    // BFS for shortest path (Sovereign Efficiency)
    while (queue.length > 0) {
        const path = queue.shift();
        const current = path[path.length - 1];

        if (current.f === end.f && current.u === end.u && current.v === end.v) {
            if (path.length <= maxLen) return path;
            continue;
        }

        if (path.length >= maxLen) continue;

        const neighbors = grid.getNeighborCells(current);
        for (const n of neighbors) {
            const key = `${n.f},${n.u},${n.v}`;
            if (!visited.has(key) && !globalOccupied.has(key)) {
                visited.add(key);
                queue.push([...path, n]);
            }
        }
    }
    return null;
  }
}
