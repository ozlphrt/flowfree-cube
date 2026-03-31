import './style.css';
import * as THREE from 'three';
import { CubeGrid } from './CubeGrid.js';
import { GameController } from './GameController.js';
import { InteractionManager } from './InteractionManager.js';
import { SettingsPanel } from './SettingsPanel.js';

// Setup Scene, Camera, Renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color('#44444a'); // Lighter dark-grey background

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(15, 15, 20);
camera.lookAt(0, 0, 0); // Point camera directly at the center of the grid

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
document.body.appendChild(renderer.domElement);

// Environment Setup (Crucial for Glass Transmission)
const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();
// Use the background as the environment map
const envScene = new THREE.Scene();
envScene.background = scene.background;
scene.environment = pmremGenerator.fromScene(envScene).texture;

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4); 
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 2.5);
dirLight.position.set(10, 20, 10);
scene.add(dirLight);

// Grid and Game Logic
const grid = new CubeGrid(scene, 9, 1.0);
const gameController = new GameController(grid);
const interactionManager = new InteractionManager(camera, grid, renderer, gameController, scene);

// Initialize Settings
const settings = new SettingsPanel((val) => {
  interactionManager.setSensitivity(val);
});

// Resize handling
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  
  interactionManager.update();
  grid.update();
  
  renderer.render(scene, camera);
}
animate();

console.log('3D FlowFree initialized.');
