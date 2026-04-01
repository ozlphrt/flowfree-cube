import './style.css';
import * as THREE from 'three';
import { CubeGrid } from './CubeGrid.js';
import { GameController } from './GameController.js';
import { InteractionManager } from './InteractionManager.js';
import { SettingsPanel } from './SettingsPanel.js';
import { DebugManager } from './DebugManager.js';
import { BackgroundManager } from './BackgroundManager.js';

// 1. Setup Scene, Camera, Renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd); // RESTORE LIGHT GREY

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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

// 4. UI Hookups
const victoryModal = document.getElementById('victory-modal');
const nextLevelBtn = document.getElementById('next-level-btn');

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

// 5. Main Loop
function animate() {
    requestAnimationFrame(animate);
    interactionManager.update();
    grid.update();
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
console.log('3D FlowFree Sovereign Restoration Complete.');
