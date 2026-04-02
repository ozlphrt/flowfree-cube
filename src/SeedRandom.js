export class SeedRandom {
    constructor(seed = 0) {
        this.seed = seed;
    }

    // Mulberry32: A fast, simple 32-bit PRNG
    next() {
        let t = this.seed += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }

    // Range [0, count-1]
    nextInt(count) {
        return Math.floor(this.next() * count);
    }

    // Helper to shuffle an array deterministically
    shuffle(array) {
        const result = [...array];
        for (let i = result.length - 1; i > 0; i--) {
            const j = this.nextInt(i + 1);
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    }
}
