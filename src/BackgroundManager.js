import * as THREE from 'three';

export class BackgroundManager {
    constructor(scene, topColor, bottomColor) {
        this.scene = scene;
        this.intensity = 1.0;
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        
        // Base sizes for high resolution
        this.canvas.width = 1024;
        this.canvas.height = 1024;
        
        this.texture = new THREE.CanvasTexture(this.canvas);
        
        // Grid properties (Restored for 3D)
        this.gridColor = 'rgba(255,255,255,0.05)'; // Darker, more subtle grid
        this.topColor = topColor || '#050505';
        this.bottomColor = bottomColor || '#151515';
        
        this.init();
        if (this.scene) this.scene.background = this.texture;
        
        window.addEventListener('resize', () => {
            this.draw();
        });
    }

    init() {
        this.draw();
    }

    draw() {
        const ctx = this.context;
        // Ensure canvas matches window aspect for perfect squares
        const w = window.innerWidth;
        const h = window.innerHeight;
        this.canvas.width = w;
        this.canvas.height = h;

        // 1. Radial Gradient Background (Full Screen)
        const grad = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, Math.max(w, h));
        grad.addColorStop(0, this.topColor);
        grad.addColorStop(1, this.bottomColor);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        // 2. High-Precision Square Grid (Looping across screen)
        const gridSize = 12.5; 
        ctx.strokeStyle = this.gridColor;
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        
        // Vertical lines
        for (let x = gridSize; x < w - 1; x += gridSize) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
        }
        // Horizontal lines
        for (let y = gridSize; y < h - 1; y += gridSize) {
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
        }
        ctx.stroke();

        this.texture.needsUpdate = true;
    }

    updateAspect() {
        // Redundant with new draw logic
    }

    setColors(top, bottom) {
        if (top) this.topColor = top;
        if (bottom) this.bottomColor = bottom;
        this.draw();
    }

    setTheme(mode, isEco = false) {
        if (mode === 'dark') {
            this.gridColor = 'rgba(255,255,255,0.08)'; // Slightly more subtle for desaturated BG
            this.topColor = '#1e1e22';    // Desaturated Slate Top
            this.bottomColor = '#0d0d0f'; // Neutral Obsidian Bottom
            document.body.classList.add('dark-theme');
        } else {
            this.gridColor = isEco ? 'rgba(0,0,0,0.15)' : 'rgba(0,0,0,0.25)';
            this.topColor = isEco ? '#888888' : '#d8d8d8';
            this.bottomColor = isEco ? '#666666' : '#b0b0b0';
            document.body.classList.remove('dark-theme');
        }
        this.draw();
    }

    setIntensity(val) {
        this.intensity = val;
        if (this.scene) this.scene.backgroundIntensity = val;
    }

    update() {
        // Managed by texture wrapping/repeating
    }
}
