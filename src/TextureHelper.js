import * as THREE from 'three';

export class TextureHelper {
  static labelCache = new Map();

  static createLabeledTexture(colorHex, label) {
    const key = `${colorHex}_${label}`;
    if (this.labelCache.has(key)) return this.labelCache.get(key);

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    const textColor = 'white';
    const strokeColor = 'black';

    // 1. Transparent Background (No fillRect)
    ctx.clearRect(0, 0, 512, 512);

    // 2. Draw Ultra-Bold Massive Label
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '900 380px "Lexend", sans-serif'; // SOVEREIGN REFINEMENT: HIGH-LEGIBILITY GEOMETRIC FONT

    // Heavy black outer stroke
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 45;
    ctx.strokeText(label, 256, 256);

    // Main White Fill
    ctx.fillStyle = textColor;
    ctx.fillText(label, 256, 256);

    const texture = new THREE.CanvasTexture(canvas);
    texture.name = `label_${label}`;
    texture.anisotropy = 16;
    texture.needsUpdate = true;

    this.labelCache.set(key, texture);
    return texture;
  }

  static createFlowTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    // 1. Transparent Background
    ctx.clearRect(0, 0, 128, 128);

    // 2. Draw 2-3 chevrons (>>>)
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 15;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const drawChevron = (yOffset) => {
        ctx.beginPath();
        ctx.moveTo(32, 20 + yOffset);
        ctx.lineTo(96, 64 + yOffset);
        ctx.lineTo(32, 108 + yOffset);
        ctx.stroke();
    };

    drawChevron(0);
    // Overlapping for smooth tiling
    drawChevron(128);
    drawChevron(-128);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);
    texture.needsUpdate = true;

    return texture;
  }
}
