export class DebugManager {
    constructor(gameController, scene, renderer, cubeGrid, interactionManager, backgroundManager) {
        this.gameController = gameController;
        this.scene = scene;
        this.renderer = renderer;
        this.cubeGrid = cubeGrid;
        this.interactionManager = interactionManager;
        this.backgroundManager = backgroundManager;
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
            if (obj.isAmbientLight) ambient = obj;
            if (obj.isPointLight) {
                if (!p1) p1 = obj;
                else if (!p2) p2 = obj;
            }
        });

        // Theme Toggle Section
        const themeRow = document.createElement('div');
        themeRow.className = 'debug-row';
        const themeBtn = document.createElement('button');
        themeBtn.innerText = 'TOGGLE THEME (DARK/LIGHT)';
        themeBtn.style.width = '100%';
        themeBtn.style.padding = '8px';
        themeBtn.style.background = 'rgba(0,0,0,0.5)';
        themeBtn.style.color = '#fff';
        themeBtn.style.border = '1px solid #444';
        themeBtn.style.cursor = 'pointer';
        
        let currentTheme = 'dark';
        themeBtn.onclick = () => {
            currentTheme = (currentTheme === 'dark' ? 'light' : 'dark');
            this.backgroundManager.setTheme(currentTheme);
            // Auto-adjust lights for theme
            if (currentTheme === 'light') {
                if (ambient) ambient.intensity = 0.0;
                this.scene.environmentIntensity = 0.5;
                if (p1) p1.intensity = 4.5;
                if (p2) p2.intensity = 1.0;
                this.renderer.toneMappingExposure = 0.7;
                this.backgroundManager.setIntensity(1.5);
            } else {
                if (ambient) ambient.intensity = 0.1;
                this.scene.environmentIntensity = 1.0;
                if (p1) p1.intensity = 4.0;
                this.renderer.toneMappingExposure = 1.0;
                this.backgroundManager.setIntensity(1.0);
            }
            // Update UI sliders if they exist
            this.refreshControls();
        };
        themeRow.appendChild(themeBtn);
        this.panel.appendChild(themeRow);

        const controls = [
            { id: 'ambient', label: 'Ambient', min: 0, max: 2, step: 0.1, val: ambient?.intensity || 0, cb: (v) => { if (ambient) ambient.intensity = v; } },
            { id: 'env', label: 'Env Intensity', min: 0, max: 5, step: 0.1, val: this.scene.environmentIntensity, cb: (v) => { this.scene.environmentIntensity = v; } },
            { id: 'bg-int', label: 'BG Intensity', min: 0, max: 5, step: 0.1, val: this.backgroundManager.intensity, cb: (v) => { this.backgroundManager.setIntensity(v); } },
            { id: 'p1', label: 'Point 1', min: 0, max: 20, step: 0.5, val: p1?.intensity || 0, cb: (v) => { if (p1) p1.intensity = v; } },
            { id: 'p2', label: 'Point 2', min: 0, max: 10, step: 0.5, val: p2?.intensity || 0, cb: (v) => { if (p2) p2.intensity = v; } },
            { id: 'exposure', label: 'Exposure', min: 0.1, max: 3, step: 0.1, val: this.renderer.toneMappingExposure, cb: (v) => { this.renderer.toneMappingExposure = v; } },
            { id: 'roughness', label: 'Roughness', min: 0, max: 1, step: 0.05, val: this.cubeGrid.coreMesh.material.roughness, cb: (v) => { 
                this.cubeGrid.coreMesh.material.roughness = v; 
                window.activePipeRoughness = v;
                this.interactionManager.updatePipeMaterials(v, undefined);
            } },
            { id: 'ior', label: 'IOR', min: 1, max: 2, step: 0.01, val: this.cubeGrid.coreMesh.material.ior, cb: (v) => { 
                this.cubeGrid.coreMesh.material.ior = v; 
                window.activePipeIOR = v;
                this.interactionManager.updatePipeMaterials(undefined, v);
            } },
            { id: 'opacity', label: 'Pipe Opacity', min: 0.1, max: 1, step: 0.05, val: window.activePipeOpacity || 0.50, cb: (v) => { 
                window.activePipeOpacity = v; 
                if (this.interactionManager.activePath) {
                    this.interactionManager.redrawEntirePath(this.interactionManager.activePath);
                }
            } }
        ];

        this.controlMap = {};

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

            this.controlMap[c.id] = { slider, valDisplay };

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

        // Background Color Pickers
        const colorRow = document.createElement('div');
        colorRow.className = 'debug-row';
        colorRow.style.display = 'flex';
        colorRow.style.justifyContent = 'space-between';
        colorRow.style.marginTop = '10px';

        const createPicker = (labelStr, initial, onPick) => {
            const container = document.createElement('div');
            const lbl = document.createElement('div');
            lbl.innerText = labelStr;
            lbl.style.fontSize = '10px';
            const pick = document.createElement('input');
            pick.type = 'color';
            pick.value = initial;
            pick.oninput = () => onPick(pick.value);
            container.appendChild(lbl);
            container.appendChild(pick);
            return container;
        };

        const pick1 = createPicker('BG Top', '#050505', (c) => this.backgroundManager.setColors(c, undefined));
        const pick2 = createPicker('BG Bottom', '#151515', (c) => this.backgroundManager.setColors(undefined, c));
        
        colorRow.appendChild(pick1);
        colorRow.appendChild(pick2);
        this.panel.appendChild(colorRow);

        document.body.appendChild(this.panel);
    }

    refreshControls() {
        if (!this.controlMap) return;
        
        const ambient = this.scene.children.find(c => c.isAmbientLight);
        if (ambient && this.controlMap.ambient) {
            this.controlMap.ambient.slider.value = ambient.intensity;
            this.controlMap.ambient.valDisplay.innerText = ambient.intensity.toFixed(2);
        }
        
        if (this.controlMap.env) {
            this.controlMap.env.slider.value = this.scene.environmentIntensity;
            this.controlMap.env.valDisplay.innerText = this.scene.environmentIntensity.toFixed(2);
        }

        if (this.controlMap['bg-int']) {
            this.controlMap['bg-int'].slider.value = this.backgroundManager.intensity;
            this.controlMap['bg-int'].valDisplay.innerText = this.backgroundManager.intensity.toFixed(2);
        }
    }
}

