import './style.css';
import * as THREE from 'three';
import { CubeGrid } from './CubeGrid.js';
import { GameController } from './GameController.js';
import { InteractionManager } from './InteractionManager.js';
import { SettingsPanel } from './SettingsPanel.js';
import { DebugManager } from './DebugManager.js';
import { BackgroundManager } from './BackgroundManager.js';
import { soundManager } from './SoundManager.js';
import { registerSW } from 'virtual:pwa-register';

// Keep SW registered for offline caching only
registerSW({ onOfflineReady() {} });

// VERSION CHECK - Reliable fetch-based update detection
// This bypasses the service worker cache entirely.
const CURRENT_VERSION = '1.187.7';
const VERSION_URL = '/flowfree-cube/version.json';

async function checkForUpdate() {
  try {
    // 1. Grace Period: If we just reloaded to update, don't nag again for 5 mins
    const lastReload = localStorage.getItem('lastUpdateReload');
    if (lastReload && (Date.now() - parseInt(lastReload) < 5 * 60 * 1000)) {
        return; 
    }

    const res = await fetch(`${VERSION_URL}?t=${Date.now()}`, { cache: 'no-store' });
    if (!res.ok) return;
    const { version } = await res.json();
    if (version && version !== CURRENT_VERSION) {
      showUpdateModal();
    }
  } catch (e) {
    // Offline — silently ignore
  }
}

function showUpdateModal() {
  const banner = document.getElementById('update-banner');
  if (!banner || !banner.classList.contains('hidden')) return;
  
  // Suppression: If they just saw it and didn't want it, don't nag until reload
  if (sessionStorage.getItem('dismissedUpdate')) return;

  banner.classList.remove('hidden');

  const reloadBtn = document.getElementById('reload-btn');
  const dismissBtn = document.getElementById('dismiss-update-btn');

  if (reloadBtn) reloadBtn.onclick = () => {
    // Definitive Update: Mark the action and purge the cache
    localStorage.setItem('lastUpdateReload', Date.now().toString());

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(registrations => {
            for (let reg of registrations) reg.unregister();
            window.location.href = window.location.origin + window.location.pathname + '?v=' + Date.now();
        });
    } else {
        window.location.reload(true);
    }
  };
  
  if (dismissBtn) dismissBtn.onclick = () => {
    sessionStorage.setItem('dismissedUpdate', 'true');
    banner.classList.add('hidden');
  };
}

// 1. Check immediately on load
checkForUpdate();
// 2. Periodic check every 60 seconds
setInterval(checkForUpdate, 60 * 1000);
// 3. Check on tab focus (user returns after being away)
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') checkForUpdate();
});

// 1. Setup Scene, Camera, Renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd); // Initial Light Theme BG
// Background is now handled by CSS to ensure square gridlines

const renderer = new THREE.WebGLRenderer({ 
    antialias: true, 
    powerPreference: "default",
    alpha: false 
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0); // Start as transparent

// Adaptive DPR: Cap at 1.5 for performance (Sovereign Optimal)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
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

/**
 * SOVEREIGN DYNAMIC FRAMING: Perfectly fits the cube to the viewport.
 * Leaves minimal padding regardless of grid size (2x2 to 9x9).
 */
function fitCameraToCube(size) {
    if (!size) size = grid.size;
    
    const vFov = (camera.fov * Math.PI) / 180;
    const aspect = camera.aspect;
    
    // 1. Calculate Bounding Radius (Comfortable fit)
    const cubeWorldSize = size * 1.0; 
    const boundingRadius = cubeWorldSize * 0.75; 
    
    // 2. Padding — extra breathing room on desktop
    const isDesktop = window.innerWidth > 768;
    const paddingMultiplier = isDesktop ? 1.75 : 1.10;
    const viewRadius = boundingRadius * paddingMultiplier;
    
    // 3. Calculate distance for horizontal & vertical fitting
    const hFov = 2 * Math.atan(Math.tan(vFov / 2) * aspect);
    
    const distVertical = viewRadius / Math.tan(vFov / 2);
    const distHorizontal = viewRadius / Math.tan(hFov / 2);
    
    // We choose the maximum of the two to ensure it fits both ways
    const distance = Math.max(distVertical, distHorizontal);
    
    // 4. Update InteractionManager zoom state to prevent overrides
    try {
        if (window.interactionManager) {
            window.interactionManager.targetCameraDistance = distance;
            window.interactionManager.currentCameraDistance = distance; 
        }
    } catch (e) {
        // Still initializing...
    }
    
    const currentDir = camera.position.clone().normalize();
    camera.position.copy(currentDir).multiplyScalar(distance);
    camera.updateProjectionMatrix();
}
window.fitCameraToCube = fitCameraToCube;

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
window.interactionManager = interactionManager;
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
        backgroundManager.setTheme('dark');
        renderer.toneMappingExposure = 0.7; // NEW DARK DEFAULT
        scene.environmentIntensity = 0.6;   // NEW DARK DEFAULT
        ambientLight.intensity = 0.8;       // NEW DARK DEFAULT
        
        // Material Physics (Sovereign Quality)
        grid.coreMat.roughness = 0.40;
        grid.coreMat.ior = 1.71;
        
        // Lights & Effects
        pointLight1.intensity = 1.0;
        pointLight2.intensity = 0.5;
        
        // Grid visibility
        if (grid.barMat) {
            grid.barMat.color.set(0xffffff);
            grid.barMat.opacity = 0.1; 
        }
    } else {
        backgroundManager.setTheme('light');
        renderer.toneMappingExposure = 0.9; // LIGHT DEFAULT
        scene.environmentIntensity = 0.6;   // LIGHT DEFAULT
        ambientLight.intensity = 0.0;       // LIGHT DEFAULT
        
        // Material Physics (Sovereign Quality)
        grid.coreMat.roughness = 0.30;
        grid.coreMat.ior = 1.62;
        
        // Lights & Effects
        pointLight1.intensity = 4.5;
        pointLight2.intensity = 1.0;

        // Grid visibility
        if (grid.barMat) {
            grid.barMat.color.set(0x000000);
            grid.barMat.opacity = 0.07;
        }
    }
}

const settingsPanel = new SettingsPanel(applySettings);
settingsPanel.onRefill = () => gameController.refillLives();

// 4. UI Hookups
const victoryModal = document.getElementById('victory-modal');
const nextLevelBtn = document.getElementById('next-level-btn');
// HUD button events and contextmenu are now handled centrally within InteractionManager.js using pointerdown


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

// Fetch version.json on load to populate window.appVersion for the version modal
(async () => {
    try {
        const r = await fetch('/flowfree-cube/version.json?t=' + Date.now(), { cache: 'no-store' });
        if (r.ok) window.appVersion = await r.json();
    } catch (e) {}
})();

// Version Modal Logic
window.showVersionModal = () => {
    const modal = document.getElementById('version-modal');
    const data = window.appVersion || {
  "version": "1.169.0",
  "commit": "8f2a91b",
  "buildDate": "2026-04-02",
  "env": "production"
};
    document.getElementById('v-num').innerText = data.version;
    document.getElementById('v-commit').innerText = data.commit;
    document.getElementById('v-date').innerText = data.buildDate;
    
    modal.classList.remove('hidden');
};

// Modal Initialization
function initModals() {
    const vClose = document.getElementById('v-close-btn');
    if (vClose) vClose.onclick = () => document.getElementById('version-modal').classList.add('hidden');
    
    const vCopy = document.getElementById('v-copy-btn');
    if (vCopy) vCopy.onclick = () => {
        const data = window.appVersion || { version: '1.169.0', commit: '8f2a91b', buildDate: '2026-04-02' };
        const text = `Sovereign Cube\nVersion: ${data.version}\nCommit: ${data.commit}\nDate: ${data.buildDate}`;
        navigator.clipboard.writeText(text);
        const btn = document.getElementById('v-copy-btn');
        if (btn) {
            const prev = btn.innerText;
            btn.innerText = "COPIED!";
            setTimeout(() => btn.innerText = prev, 2000);
        }
    };

    const lCancel = document.getElementById('level-cancel-btn');
    if (lCancel) lCancel.onclick = () => document.getElementById('level-modal').classList.add('hidden');
    
    const lJump = document.getElementById('level-jump-btn');
    if (lJump) lJump.onclick = () => {
        const input = document.getElementById('level-input');
        const lvl = parseInt(input.value, 10);
        if (!isNaN(lvl) && lvl > 0) {
            gameController.currentLevel = lvl;
            gameController.initLevel();
            document.getElementById('level-modal').classList.add('hidden');
            if (window.interactionManager) window.interactionManager.resetOrientation();
        }
    };
}

// Level Modal Logic
window.showLevelModal = () => {
    const modal = document.getElementById('level-modal');
    const input = document.getElementById('level-input');
    if (modal && input) {
        input.value = gameController.currentLevel;
        modal.classList.remove('hidden');
        input.focus();
        input.select();
    }
};

initModals(); // SOVEREIGN UI INIT



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
    fitCameraToCube(); // Re-frame on resize
    requestRender();
});

loop();
fitCameraToCube(); // SOVEREIGN: Mandatory initial framing call
console.log('3D FlowFree Sovereign Restoration Complete. Battery Optimized v1.185.2');
