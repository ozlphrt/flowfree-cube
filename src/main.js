import './style.css';
import * as THREE from 'three';
import { CubeGrid } from './CubeGrid.js';
import { GameController } from './GameController.js';
import { InteractionManager } from './InteractionManager.js';
import { SettingsPanel } from './SettingsPanel.js';
import { DebugManager } from './DebugManager.js';
import { BackgroundManager } from './BackgroundManager.js';
import { soundManager } from './SoundManager.js';

// 1. Setup Scene, Camera, Renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd); // RESTORE LIGHT GREY

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "default" });
renderer.setSize(window.innerWidth, window.innerHeight);

// Adaptive DPR: Cap at 1.5 for mobile (battery priority)
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2.0));
renderer.shadowMap.enabled = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.90; // SOVEREIGN SIGNATURE EXPOSURE
document.body.appendChild(renderer.domElement);
scene.environmentIntensity = 0.60; // SOVEREIGN SIGNATURE ENV INTENSITY

// 2. Environment (RoomEnvironment for Sovereign Reflections)
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
const pmremGenerator = new THREE.PMREMGenerator(renderer);
scene.environment = pmremGenerator.fromScene(new RoomEnvironment(renderer), 0.04).texture;

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(7, 6, 7);
camera.lookAt(0, 0, 0);

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.0); // SOVEREIGN SIGNATURE AMBIENCE
scene.add(ambientLight);

const pointLight1 = new THREE.PointLight(0xffffff, 4.5); // 4.5x POINT LIGHT (LIGHT THEME DEFAULT)
pointLight1.position.set(20, 20, 20);
scene.add(pointLight1);
const pointLight2 = new THREE.PointLight(0xffffff, 1.0); // 1.0x FILL LIGHT
pointLight2.position.set(-20, -10, -20);
scene.add(pointLight2);

// 3. Game Components
const grid = new CubeGrid(scene, 5);
const gameController = new GameController(grid);
window.gameController = gameController;
const interactionManager = new InteractionManager(camera, grid, renderer, gameController, scene);
const backgroundManager = new BackgroundManager(scene);

// 5. Sovereign Debug Panel (CTRL+Shift+Alt+D)
const debugManager = new DebugManager(gameController, scene, renderer, grid, interactionManager, backgroundManager);

// 6. Settings Management
function applySettings(settings) {
    // 1. Level Jump
    if (settings.levelJump) {
        gameController.currentLevel = settings.levelJump;
        gameController.initLevel();
        localStorage.setItem('sovereign_cube_level', settings.levelJump);
    }
    
    // 2. Audio
    soundManager.setMuted(!settings.audioEnabled);
    
    // 3. Theme
    if (settings.darkMode) {
        scene.background = new THREE.Color(0x050505);
        renderer.toneMappingExposure = 0.7; // NEW DARK DEFAULT
        scene.environmentIntensity = 0.6;   // NEW DARK DEFAULT
        ambientLight.intensity = 0.8;       // NEW DARK DEFAULT
        
        // Material Physics (Sovereign Quality)
        grid.coreMat.roughness = 0.40;
        grid.coreMat.ior = 1.71;
        
        // Lights & Effects
        pointLight1.intensity = 1.0;
        pointLight2.intensity = 0.5;
        document.body.classList.add('dark-theme');
        
        // Grid visibility
        if (grid.barMat) {
            grid.barMat.color.set(0xffffff);
            grid.barMat.opacity = 0.1; 
        }
    } else {
        scene.background = new THREE.Color(0xdddddd);
        renderer.toneMappingExposure = 0.9; // LIGHT DEFAULT
        scene.environmentIntensity = 0.6;   // LIGHT DEFAULT
        ambientLight.intensity = 0.0;       // LIGHT DEFAULT
        
        // Material Physics (Sovereign Quality)
        grid.coreMat.roughness = 0.30;
        grid.coreMat.ior = 1.62;
        
        // Lights & Effects
        pointLight1.intensity = 4.5;
        pointLight2.intensity = 1.0;
        document.body.classList.remove('dark-theme');

        // Grid visibility
        if (grid.barMat) {
            grid.barMat.color.set(0x000000);
            grid.barMat.opacity = 0.07;
        }
    }
}

const settingsPanel = new SettingsPanel(applySettings);

// 4. UI Hookups
const victoryModal = document.getElementById('victory-modal');
const nextLevelBtn = document.getElementById('next-level-btn');
const compassBtn = document.getElementById('compass-btn');
const restartBtn = document.getElementById('restart-btn');

if (compassBtn) {
    compassBtn.onclick = () => interactionManager.resetOrientation();
}

if (restartBtn) {
    restartBtn.onclick = () => {
        gameController.initLevel();
        interactionManager.resetOrientation();
    };
}

function updateHUD() {
    const { completed, total } = gameController.getStats();
    const levelVal = document.getElementById('level-val');
    if (levelVal) {
        levelVal.textContent = gameController.currentLevel;
    }

    if (completed === total && total > 0 && !interactionManager.isVictorious) {
        victoryModal.classList.remove('hidden');
        interactionManager.setVictory(true); // START TUMBLE
    }
}

gameController.onUpdate = updateHUD;
updateHUD();

nextLevelBtn.onclick = () => {
    victoryModal.classList.add('hidden');
    interactionManager.setVictory(false); // STOP TUMBLE & RESET
    gameController.nextLevel();
};

// PWA Update Engine
const updateBanner = document.getElementById('update-banner');
const reloadBtn = document.getElementById('reload-btn');
let updateDetected = false;

async function checkVersion() {
    if (updateDetected) return;
    try {
        const response = await fetch('/flowfree-cube/version.json?t=' + Date.now());
        const data = await response.json();
        if (data.version) {
            const lastVersion = localStorage.getItem('flow_build_id');
            if (lastVersion && lastVersion !== data.version) {
                updateDetected = true;
                updateBanner.classList.remove('hidden');
            } else {
                localStorage.setItem('flow_build_id', data.version);
            }
        }
    } catch (e) {}
}

reloadBtn.onclick = async () => {
    if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (const registration of registrations) {
            await registration.unregister();
        }
    }
    localStorage.removeItem('flow_build_id');
    window.location.reload();
};

setInterval(checkVersion, 30000);
checkVersion();

// 5. Battery Optimization Engine
let renderRequested = true;
let lastRequestTime = Date.now();
const RENDER_TIMEOUT = 2000; // Keep rendering 2s after any activity for lerps and animations

function requestRender() {
    renderRequested = true;
    lastRequestTime = Date.now();
}

// Global hook for other managers to trigger frames
window.requestSovereignFrame = requestRender;

// Visibility API
let isVisible = true;
document.addEventListener('visibilitychange', () => {
    isVisible = (document.visibilityState === 'visible');
    if (isVisible) requestRender();
});

// 6. Main Loop
function loop() {
    requestAnimationFrame(loop);
    if (!isVisible) return;

    // Check if we need to render
    const now = Date.now();
    const interactionActive = interactionManager.isDragging || 
                              interactionManager.isResetting || 
                              interactionManager.isVictorious || 
                              (now - lastRequestTime < RENDER_TIMEOUT);

    if (renderRequested || interactionActive) {
        interactionManager.update();
        grid.update(camera);
        renderer.render(scene, camera);
        renderRequested = false;
    }
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    requestRender();
});

loop();
console.log('3D FlowFree Sovereign Restoration Complete. Battery Optimized v1.161.0');
