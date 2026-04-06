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
const CURRENT_VERSION = '1.191.0'; // SOVEREIGN ENGINE SYNC
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
const fullEnvironment = pmremGenerator.fromScene(new RoomEnvironment(renderer), 0.04).texture;
scene.environment = fullEnvironment;

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

// SOVEREIGN MASTER LIGHT: Provides 3D sculpting and highlights
const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
dirLight.position.set(10, 20, 10);
scene.add(dirLight);

// 3. Game Components (Wait for Font for correct Label Rendering)
let grid, gameController, interactionManager, backgroundManager, debugManager;

document.fonts.ready.then(() => {
    grid = new CubeGrid(scene, 5);
    gameController = new GameController(grid);
    window.gameController = gameController;
    interactionManager = new InteractionManager(camera, grid, renderer, gameController, scene);
    window.interactionManager = interactionManager;
    backgroundManager = new BackgroundManager(scene, '#020202', '#0a0a0a'); 
    debugManager = new DebugManager(gameController, scene, renderer, grid, interactionManager, backgroundManager);
    
    // Initial UI Setup
    initModals();
    const settingsPanel = new SettingsPanel(applySettings);
    settingsPanel.onRefill = () => gameController.refillLives();
    
    updateHUD();
    gameController.onUpdate = updateHUD;

    nextLevelBtn.onclick = () => {
        victoryModal.classList.add('hidden');
        interactionManager.setVictory(false); // STOP TUMBLE & RESET
        gameController.nextLevel();
    };
    
    fitCameraToCube();
    
    console.log('Sovereign Hub: Lexend Font Loaded & UI Restored.');
});

// 6. Settings Management
function applySettings(settings) {
    if (!grid || !gameController || !backgroundManager) return;

    // 1. Level Jump
    if (settings.levelJump) {
        gameController.currentLevel = settings.levelJump;
        gameController.initLevel();
        localStorage.setItem('sovereign_cube_level', settings.levelJump);
    }
    
    // 4. Eco Mode (Extreme Performance)
    const isEco = !!settings.ecoMode;
    document.body.classList.toggle('eco-mode', isEco);
    window.currentRenderTimeout = isEco ? 500 : 2000;

    // A. RESOLUTION SCALING (Extreme Eco)
    const targetDPR = isEco ? 1.0 : Math.min(window.devicePixelRatio, 1.5);
    if (renderer.getPixelRatio() !== targetDPR) {
        renderer.setPixelRatio(targetDPR);
        // Resize to apply new DPR
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // B. ENVIRONMENT & LIGHT PURGE (Extreme Eco)
    scene.environment = isEco ? null : (window.fullEnvironment || null);
    pointLight1.visible = !isEco;
    pointLight2.visible = !isEco;
    dirLight.visible = !isEco; // SOVEREIGN 3D DEPTH: TOGGLE MASTER LIGHT
    ambientLight.intensity = isEco ? 1.5 : 0.8; 

    if (isEco) {
        // FLAT PERFORMANCE SETTINGS
        if (grid.coreMat) {
            grid.coreMat.roughness = 1.0;
            grid.coreMat.metalness = 0.0;
            grid.coreMat.clearcoat = 0.0;
            grid.coreMat.transmission = 0.0; // BATTERY WIN: DISABLE REFRACTION
            grid.coreMat.opacity = settings.darkMode ? 0.70 : 0.60; // SOVEREIGN REFINEMENT: SLIGHTLY MORE TRANSLUCENT
            grid.coreMat.color.set(0xffffff); // PURE WHITE IN BOTH THEMES
            grid.coreMat.emissive.set(0xffffff); // SOVEREIGN GLOW: PREVENT DARKNESS
            grid.coreMat.emissiveIntensity = settings.darkMode ? 0.05 : 0.40; // SIGNIFICANTLY BRIGHTER IN LIGHT THEME
            grid.isEco = true; 
        }
    } else {
        // HIGH FIDELITY SOVEREIGN SETTINGS
        if (grid.coreMat) {
            grid.coreMat.roughness = settings.darkMode ? 0.40 : 0.30;
            grid.coreMat.metalness = 0.05;
            grid.coreMat.clearcoat = 1.0;
            grid.coreMat.transmission = 0.95; // RESTORE SOVEREIGN GLASS
            grid.coreMat.opacity = 1.0;
            grid.coreMat.ior = settings.darkMode ? 1.71 : 1.62;
            grid.coreMat.emissiveIntensity = 0.0;
            grid.isEco = false;
        }
    }

    // C. PLATE UPDATES (Dynamic Stylistic Sync)
    gameController.plates.forEach(p => {
        const isDark = settings.darkMode;
        const vibrantColor = new THREE.Color(p.color);
        p.mesh.material.color.copy(vibrantColor);
        p.mesh.material.emissive.copy(vibrantColor);
        p.mesh.material.emissiveIntensity = isEco ? (isDark ? 0.3 : 0.8) : 0.2;
    });

    // 3. Theme
    if (settings.darkMode) {
        backgroundManager.setTheme('dark', isEco);
        renderer.toneMappingExposure = 0.7;
        scene.environmentIntensity = isEco ? 0.0 : 1.5; // SOVEREIGN BOOST: SHINY REFLECTIONS
        ambientLight.intensity = 0.8;
        
        if (!isEco) {
            grid.coreMat.roughness = 0.40;
            grid.coreMat.ior = 1.71;
        }
        
        pointLight1.intensity = 1.0;
        pointLight2.intensity = 0.5;
        
        if (grid.barMat) {
            grid.barMat.color.set(0xffffff);
            grid.barMat.opacity = 0.1; 
        }
    } else {
        backgroundManager.setTheme('light', isEco);
        renderer.toneMappingExposure = 0.95; // SOVEREIGN BOOST: VIBRANT REFLECTIONS
        scene.environmentIntensity = isEco ? 0.0 : 1.5; // SOVEREIGN BOOST: SHINY REFLECTIONS
        ambientLight.intensity = 0.0;
        
        if (!isEco) {
            grid.coreMat.roughness = 0.30;
            grid.coreMat.ior = 1.62;
        }
        
        pointLight1.intensity = 4.5;
        pointLight2.intensity = 1.0;

        if (grid.barMat) {
            grid.barMat.color.set(0x000000);
            grid.barMat.opacity = 0.07;
        }
    }
}

// Moved to document.fonts.ready block
// const settingsPanel = new SettingsPanel(applySettings);
// settingsPanel.onRefill = () => gameController.refillLives();

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

// Moved to document.fonts.ready block
// gameController.onUpdate = updateHUD;
// updateHUD();

// nextLevelBtn.onclick = () => {
//     victoryModal.classList.add('hidden');
//     interactionManager.setVictory(false); // STOP TUMBLE & RESET
//     gameController.nextLevel();
// };

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

// Moved to document.fonts.ready block
// initModals(); 



// 5. Battery Optimization Engine
let renderRequested = true;
let lastRequestTime = Date.now();
window.currentRenderTimeout = 2000; 
let lastFrameTime = 0;
const ECO_FPS = 30;
const MIN_FRAME_MS = 1000 / ECO_FPS;

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

    const now = Date.now();
    const isEco = document.body.classList.contains('eco-mode');

    // ECO CAP: 30 FPS LIMIT
    if (isEco) {
        const delta = now - lastFrameTime;
        if (delta < MIN_FRAME_MS) return;
    }

    // Check if we need to render
    // Wait for components to initialize
    if (!interactionManager || !grid) return;

    const interactionActive = interactionManager.isDragging || 
                              interactionManager.isResetting || 
                              interactionManager.isVictorious || 
                              (now - lastRequestTime < window.currentRenderTimeout);

    if (renderRequested || interactionActive) {
        lastFrameTime = now;
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
// Moved to document.fonts.ready block
// fitCameraToCube(); 
console.log('Sovereign Restoration Complete. Awaiting Font Load...');
