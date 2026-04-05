import { COLORS } from './Constants.js';
import { SeedRandom } from './SeedRandom.js';

export class PuzzleGenerator {
  static generate(grid, level = 1) {
    const startTime = Date.now();
    const rng = new SeedRandom(level * 48271); // Use level as seed with a multiplier
    const totalCells = grid.size * grid.size * 6;
    const targetDensity = (level < 35) ? 0.6 : 0.8; // Target 80% for high levels
    const colors = Object.values(COLORS);
    
    // 1. Difficulty Curve Parameters
    const forceFaceCrossingProb = level < 35 ? 0.3 : 0.95; // Hard-enforce corners for level 35+
    const maxPathLen = Math.max(10, Math.floor(totalCells / 5)); // Allow winding paths

    // 2. Recursive Generation State
    const occupied = new Set();
    const resultPairs = [];
    const allTerminals = [];
    let colorIdx = 0;

    // Solver loop: Keep adding pairs until density or timeout
    const generatePuzzle = () => {
        let attempts = 0;
        const maxAttempts = 100;
        
        const minPairs = grid.size <= 3 ? 2 : 1;
        while ((occupied.size < totalCells * targetDensity || resultPairs.length < minPairs) && attempts < maxAttempts) {
            if (Date.now() - startTime > 2500) break; // Hard safety
            
            const color = colors[colorIdx % colors.length];
            const label = Math.floor(colorIdx / colors.length) + 1;
            
            const candidates = this.getStartEndCandidates(grid, occupied, allTerminals, level > 35, rng);
            if (candidates.length === 0) { attempts++; continue; }
            
            // Focus on long-distance corner-crossing candidates
            const bestCandidates = candidates.filter(can => {
                if (level < 35) return true;
                const isSameFace = can.start.f === can.end.f;
                return !isSameFace || rng.next() > forceFaceCrossingProb;
            });
            
            if (bestCandidates.length === 0) { attempts++; continue; }
            const candidate = bestCandidates[Math.floor(rng.next() * bestCandidates.length)];

            // Find a WINDING path
            const path = this.findWindingPath(grid, candidate.start, candidate.end, occupied, maxPathLen, rng);
            if (path) {
                path.forEach(p => occupied.add(`${p.f},${p.u},${p.v}`));
                allTerminals.push(candidate.start, candidate.end);
                resultPairs.push({ color, label, points: [candidate.start, candidate.end], path: path });
                colorIdx++;
                attempts = 0; // Reset on success
            } else {
                attempts++;
            }
        }
    };

    generatePuzzle();
    console.log(`Sovereign Seeded Generator v1.163: Level ${level} Generated in ${Date.now() - startTime}ms (Density: ${(occupied.size/totalCells).toFixed(2)})`);
    return resultPairs;
  }

  static getStartEndCandidates(grid, occupied, existingTerminals, highDiff, rng) {
    const freeCells = [];
    for (let f = 0; f < 6; f++) {
      for (let u = 0; u < grid.size; u++) {
        for (let v = 0; v < grid.size; v++) {
          const key = `${f},${u},${v}`;
          if (!occupied.has(key)) {
            // High difficulty extra spacing
            if (highDiff) {
              const tooNear = existingTerminals.some(t => t.f === f && Math.abs(t.u - u) + Math.abs(t.v - v) <= 2);
              if (tooNear) continue;
            }
            freeCells.push({ f, u, v });
          }
        }
      }
    }

    if (freeCells.length < 2) return [];

    const candidates = [];
    const shuffle = rng.shuffle(freeCells);
    const count = Math.min(shuffle.length, 30);
    
    for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
            candidates.push({ start: shuffle[i], end: shuffle[j] });
        }
    }
    return candidates;
  }

  // STOCHASTIC BFS: Finds winding, obstructive paths to fill grid space
  static findWindingPath(grid, start, end, globalOccupied, maxLen, rng) {
    const queue = [[start]];
    const visited = new Set();
    visited.add(`${start.f},${start.u},${start.v}`);

    while (queue.length > 0) {
        // Stochastic pull: instead of just shift(), occasionally pull from middle to create variability
        const idx = (rng.next() < 0.4) ? Math.floor(rng.next() * queue.length) : 0;
        const path = queue.splice(idx, 1)[0];
        const current = path[path.length - 1];

        if (current.f === end.f && current.u === end.u && current.v === end.v) {
            return path;
        }

        if (path.length >= maxLen) continue;

        const neighbors = grid.getNeighborCells(current);
        // Randomize neighbor exploration to prevent straight-line BFS behavior
        const shuffledNeighbors = rng.shuffle(neighbors);

        for (const n of shuffledNeighbors) {
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
