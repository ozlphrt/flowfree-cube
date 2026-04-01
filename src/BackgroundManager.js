import * as THREE from 'three';

export class BackgroundManager {
    constructor(scene) {
        this.scene = scene;
        this.canvas = document.createElement('canvas');
        this.canvas.width = 256; // Low res is fine for gradients
        this.canvas.height = 256;
        this.ctx = this.canvas.getContext('2d');
        
        this.texture = new THREE.CanvasTexture(this.canvas);
        this.texture.colorSpace = THREE.SRGBColorSpace;
        
        this.topColor = '#dddddd';
        this.bottomColor = '#ffffff';
        this.intensity = 0.70;
        
        this.update();
    }

    setColors(top, bottom) {
        this.topColor = top;
        this.bottomColor = bottom;
        this.update();
    }

    setTheme(mode) {
        if (mode === 'dark') {
            this.setColors('#050505', '#151515');
        } else {
            this.setColors('#dddddd', '#ffffff');
        }
    }

    setIntensity(val) {
        this.intensity = val;
        if (this.scene) {
            this.scene.backgroundIntensity = val;
        }
    }

    update() {
        const grd = this.ctx.createLinearGradient(0, 0, 0, 256);
        grd.addColorStop(0, this.topColor);
        grd.addColorStop(1, this.bottomColor);
        
        this.ctx.fillStyle = grd;
        this.ctx.fillRect(0, 0, 256, 256);
        
        this.texture.needsUpdate = true;
        if (this.scene) {
            this.scene.background = this.texture;
            this.scene.backgroundIntensity = this.intensity;
        }
    }
}
