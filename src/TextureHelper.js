import * as THREE from 'three';

export class TextureHelper {
  static createLabeledTexture(colorHex, label) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    const textColor = 'black';
    const strokeColor = 'white';

    // 1. Transparent Background (No fillRect)
    ctx.clearRect(0, 0, 512, 512);

    // 2. Draw Ultra-Bold Massive Label
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '900 440px "Arial Black", Impact, sans-serif'; 

    // Heavy white outer stroke
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 45;
    ctx.strokeText(label, 256, 256);

    // Main Black Fill
    ctx.fillStyle = textColor;
    ctx.fillText(label, 256, 256);

    const texture = new THREE.CanvasTexture(canvas);
    texture.name = `label_${label}`;
    texture.anisotropy = 16;
    texture.needsUpdate = true;

    return texture;
  }
}
