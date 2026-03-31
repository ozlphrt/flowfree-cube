import * as THREE from 'three';

export class TextureHelper {
  static createLabeledTexture(colorHex, label) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // 1. Force DARK numbers for all colors per user request
    const textColor = 'black';
    // Subtle white glow to make black text pop off dark backgrounds
    const strokeColor = 'rgba(255,255,255,0.7)';

    // 2. Background color
    const color = new THREE.Color(colorHex);
    ctx.fillStyle = `#${color.getHexString()}`;
    ctx.fillRect(0, 0, 512, 512);

    // 3. Draw Ultra-Bold Massive Label
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Using a heavier, impactful font
    ctx.font = '900 440px "Arial Black", Impact, sans-serif'; 

    // 4. Heavy white outer stroke (the "Glow")
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 35;
    ctx.strokeText(label, 256, 256);

    // 5. Main Black Fill
    ctx.fillStyle = textColor;
    ctx.fillText(label, 256, 256);

    const texture = new THREE.CanvasTexture(canvas);
    texture.name = `${colorHex}_${label}`;
    
    // High-Quality Filtering
    texture.anisotropy = 16;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.needsUpdate = true;

    return texture;
  }
}
