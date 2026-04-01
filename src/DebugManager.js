export class DebugManager {
    constructor(gameController, scene, renderer, cubeGrid, interactionManager) {
        this.gameController = gameController;
        this.scene = scene;
        this.renderer = renderer;
        this.cubeGrid = cubeGrid;
        this.interactionManager = interactionManager;
        this.visible = false;
        this.panel = null;

        this.init();
    }

    init() {
        window.addEventListener('keydown', (e) => {
            // CTRL + Shift + Alt + D
            if (e.ctrlKey && e.shiftKey && e.altKey && (e.key.toLowerCase() === 'd' || e.code === 'KeyD')) {
                e.preventDefault(); 
                this.toggle();
            }
        });
    }

    toggle() {
        this.visible = !this.visible;
        if (this.visible && !this.panel) {
            this.createPanel();
        }
        if (this.panel) {
            this.panel.classList.toggle('hidden', !this.visible);
            console.log('Sovereign Debug Panel toggled:', this.visible);
        }
    }

    createPanel() {
        this.panel = document.createElement('div');
        this.panel.id = 'sovereign-debug-panel';
        this.panel.className = 'hidden'; 
        
        // Prevent interaction with the cube while using the panel
        this.panel.addEventListener('pointerdown', (e) => e.stopPropagation());
        this.panel.addEventListener('mousedown', (e) => e.stopPropagation());
        this.panel.addEventListener('touchstart', (e) => e.stopPropagation());

        const title = document.createElement('h3');
        title.innerText = 'SOVEREIGN DEBUG';
        this.panel.appendChild(title);

        // Robust Light Detection
        let ambient = null;
        let p1 = null;
        let p2 = null;
        this.scene.traverse(obj => {
            if (obj.intensity !== undefined) {
                if (obj.type === 'AmbientLight') ambient = obj;
                if (obj.type === 'PointLight') {
                    if (!p1) p1 = obj;
                    else if (!p2) p2 = obj;
                }
            }
        });

        const controls = [
            { label: 'Ambient', min: 0, max: 2, step: 0.1, val: ambient?.intensity || 0, cb: (v) => { if (ambient) ambient.intensity = v; } },
            { label: 'Point 1', min: 0, max: 20, step: 0.5, val: p1?.intensity || 0, cb: (v) => { if (p1) p1.intensity = v; } },
            { label: 'Point 2', min: 0, max: 10, step: 0.5, val: p2?.intensity || 0, cb: (v) => { if (p2) p2.intensity = v; } },
            { label: 'Exposure', min: 0.1, max: 3, step: 0.1, val: this.renderer.toneMappingExposure, cb: (v) => { this.renderer.toneMappingExposure = v; } },
            { label: 'Roughness', min: 0, max: 1, step: 0.05, val: this.cubeGrid.coreMesh.material.roughness, cb: (v) => { this.cubeGrid.coreMesh.material.roughness = v; } },
            { label: 'IOR', min: 1, max: 2, step: 0.01, val: this.cubeGrid.coreMesh.material.ior, cb: (v) => { this.cubeGrid.coreMesh.material.ior = v; } },
            { label: 'Pipe Opacity (Active)', min: 0.1, max: 1, step: 0.05, val: 0.50, cb: (v) => { 
                window.activePipeOpacity = v; 
                if (this.interactionManager.activePath) {
                    this.interactionManager.redrawEntirePath(this.interactionManager.activePath);
                }
            } }
        ];

        window.activePipeOpacity = 0.50; // SOVEREIGN SIGNATURE DEFAULT

        controls.forEach(c => {
            const row = document.createElement('div');
            row.className = 'debug-row';
            
            const label = document.createElement('label');
            label.innerText = c.label;
            
            const slider = document.createElement('input');
            slider.type = 'range';
            slider.min = c.min;
            slider.max = c.max;
            slider.step = c.step;
            slider.value = c.val;
            
            const valDisplay = document.createElement('span');
            valDisplay.className = 'debug-val';
            valDisplay.innerText = c.val.toFixed(2);

            slider.addEventListener('input', () => {
                const v = parseFloat(slider.value);
                valDisplay.innerText = v.toFixed(2);
                c.cb(v);
            });

            row.appendChild(label);
            row.appendChild(slider);
            row.appendChild(valDisplay);
            this.panel.appendChild(row);
        });

        document.body.appendChild(this.panel);
    }
}
