import * as THREE from 'three';
import { soundManager } from './SoundManager.js';
import { TextureHelper } from './TextureHelper.js';

export class InteractionManager {
  constructor(camera, grid, renderer, gameController, scene) {
    this.camera = camera;
    this.grid = grid;
    this.renderer = renderer;
    this.gameController = gameController;
    this.scene = scene;

    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();

    this.isDragging = false;
    this.lastPointer = new THREE.Vector2();
    this.dragStartPoint = new THREE.Vector2();
    this.currentDragVector = new THREE.Vector2();
    
    // Game state tracking
    this.activePath = null;
    this.activeColor = null;
    this.activeLabel = null;
    this.lastCell = null;
    this.currentSegmentAxis = null;

    // Selective Interaction (Sovereign Dial)
    this.longPressTimer = null;
    this.longPressStartTime = 0;
    this.LONG_PRESS_DURATION = 600; // ms
    this.dialEl = document.getElementById('long-press-dial');
    this.dialProgressEl = this.dialEl?.querySelector('.progress');
    this.isLongPress = false;

    // Rotation parameters
    this.currentRotationVelocity = 0;
    this.targetRotationVelocity = 0;
    this.lerpFactor = 0.25; // SNAPPIER MOVEMENT
    this.sensitivityFactor = 1.0; 
    this.lockedLocalAxis = null; 
    this.axisSign = 1; 
    this.lockedDragDir = null;
    this.sensitivityFactor = 1.0; 
    
    // Compass Animation
    this.isResetting = false;
    this.identityQuaternion = new THREE.Quaternion();
    
    // Victory State
    this.isVictorious = false;
    this.victoryTime = 0;

    // Zoom state
    this.baseCameraDistance = 11.5;
    this.targetCameraDistance = 11.5;
    this.currentCameraDistance = 11.5;
    this.minDistance = 1.5; // SOVEREIGN: UNRESTRICTED CLOSE ZOOM
    this.maxDistance = 25;
    
    // Pinch state
    this.activePointers = new Map();
    this.initialPinchDistance = 0;

    // Victory / Celebration
    this.isVictorious = false;
    this.lastNudgeTime = 0;
    this.nudgeInterval = 1500; // ms
    this.victoryAxis = new THREE.Vector3(0, 1, 0);

    this.initEvents();
  }

  initEvents() {
    const canvas = this.renderer.domElement;
    this.compassBtn = document.getElementById('compass-btn');
    if (this.compassBtn) {
        this.compassBtn.addEventListener('pointerdown', (e) => { 
            e.stopPropagation(); 
            this.resetOrientation(); 
        });
    }

    // SOVEREIGN UTILITY: Hook up the Wrench Pill
    this.solveBtn = document.getElementById('solve-btn');
    if (this.solveBtn) {
        this.solveBtn.addEventListener('pointerdown', (e) => { 
            e.stopPropagation(); 
            this.gameController.solveBoard(); 
        });
    }
    canvas.addEventListener('pointerdown', this.onPointerDown.bind(this));
    window.addEventListener('pointermove', this.onPointerMove.bind(this));
    window.addEventListener('pointerup', this.onPointerUp.bind(this));
    window.addEventListener('pointercancel', this.onPointerUp.bind(this));
    
    // Zoom / Wheel event
    canvas.addEventListener('wheel', this.onWheel.bind(this), { passive: false });
  }

  onWheel(event) {
    event.preventDefault();
    const zoomSpeed = 0.5;
    const delta = Math.sign(event.deltaY);
    this.targetCameraDistance = THREE.MathUtils.clamp(
      this.targetCameraDistance + delta * zoomSpeed,
      this.minDistance,
      this.maxDistance
    );
    if (window.requestSovereignFrame) window.requestSovereignFrame();
  }

  updatePointer(event) {
    this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  onPointerDown(event) {
    this.activePointers.set(event.pointerId, event);

    if (this.activePointers.size === 2) {
        const points = Array.from(this.activePointers.values());
        this.initialPinchDistance = Math.hypot(
            points[0].clientX - points[1].clientX,
            points[0].clientY - points[1].clientY
        );
        this.startPinchZoom = this.targetCameraDistance;
        return; 
    }

    if (this.isVictorious) {
        this.isDragging = true;
        this.updatePointer(event);
        this.lastPointer.copy(this.pointer);
        this.dragStartPoint.set(event.clientX, event.clientY);
        if (window.requestSovereignFrame) window.requestSovereignFrame();
        return; 
    }

    this.isDragging = true;
    this.isResetting = false; // Cancel any active compass reset
    this.updatePointer(event);
    this.lastPointer.copy(this.pointer);
    this.dragStartPoint.set(event.clientX, event.clientY);
    this.lockedLocalAxis = null;
    this.lockedDragDir = null;
    if (window.requestSovereignFrame) window.requestSovereignFrame();
    
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const cellMeshes = this.grid.cells.map(c => c.mesh);
    const cellHit = this.raycaster.intersectObjects(cellMeshes, false)[0]; // CRITICAL FIX: NO RECURSIVE (Ignore Lines)
    
    if (cellHit) {
      const data = cellHit.object.userData;
      const plate = this.gameController.getPlateAt(data.faceIndex, data.u, data.v);
      const occupant = this.gameController.getCompletedPathByPlate(data.faceIndex, data.u, data.v) || 
                       this.gameController.stubs.find(s => s.cells.some(c => c.f === data.faceIndex && c.u === data.u && c.v === data.v));
      
      if (plate || occupant) {
        this.isLongPress = false;
        this.longPressStartTime = Date.now();
        
        if (this.dialEl) {
          this.dialEl.style.left = `${event.clientX}px`;
          this.dialEl.style.top = `${event.clientY}px`;
          this.dialEl.classList.remove('hidden');
          if (this.dialProgressEl) this.dialProgressEl.style.strokeDashoffset = '151';
        }
        
        clearTimeout(this.longPressTimer);
        this.longPressTimer = setTimeout(() => {
          this.isLongPress = true;
          this.gameController.deletePathByPlate(data.faceIndex, data.u, data.v);
          this.onPointerUp();
        }, this.LONG_PRESS_DURATION);

        if (plate) {
          // AUTO-RESET: Clear any existing stubs or completed paths of this color/label
          this.gameController.clearPathsByColor(plate.color, plate.label);

          this.activeColor = plate.color;
          this.activeLabel = plate.label;
          const faceNormal = this.grid.getFaceNormal(data.faceIndex);
          this.lastCell = { f: data.faceIndex, u: data.u, v: data.v, position: cellHit.point.clone(), normal: faceNormal };
          this.activePath = {
             color: this.activeColor, label: this.activeLabel, startPlate: plate,
             cells: [{ f: data.faceIndex, u: data.u, v: data.v }], meshesByCell: {}, meshes: [], isCompleted: false
          };
          this.gameController.setPlateHighlight(plate, true);
        } else if (occupant && !occupant.isCompleted) {
          // MID-PIPE EDITING ALLOWED ONLY FOR INCOMPLETE PATHS
          this.activeColor = occupant.color;
          this.activeLabel = occupant.label;
          this.activePath = occupant;
          this.activePath.isCompleted = false;
          this.gameController.removeCompletedPath(occupant);
          const cellIdx = occupant.cells.findIndex(c => c.f === data.faceIndex && c.u === data.u && c.v === data.v);
          this.activePath.cells = this.activePath.cells.slice(0, cellIdx + 1);
          this.redrawEntirePath(this.activePath, true); // FORCE ON EDIT
          const normal = this.grid.getFaceNormal(data.faceIndex);
          this.lastCell = { f: data.faceIndex, u: data.u, v: data.v, position: cellHit.point.clone(), normal };
          this.gameController.setPlateHighlight(occupant.startPlate, true);
        }
      }
    }
  }

  onPointerMove(event) {
    this.activePointers.set(event.pointerId, event);

    // Pinch support
    if (this.activePointers.size === 2) {
        const points = Array.from(this.activePointers.values());
        const dist = Math.hypot(
            points[0].clientX - points[1].clientX,
            points[0].clientY - points[1].clientY
        );
        
        const delta = (this.initialPinchDistance - dist) * 0.05;
        this.targetCameraDistance = THREE.MathUtils.clamp(
            this.startPinchZoom + delta,
            this.minDistance,
            this.maxDistance
        );
        if (window.requestSovereignFrame) window.requestSovereignFrame();
        return; 
    }

    if (!this.isDragging) return;
    
    // Distance check to cancel long-press if moved too far
    const moved = Math.sqrt((event.clientX - this.dragStartPoint.x)**2 + (event.clientY - this.dragStartPoint.y)**2);
    if (moved > 15) {
      clearTimeout(this.longPressTimer);
      this.dialEl?.classList.add('hidden');
    }

    this.updatePointer(event);
    
    const dx = event.clientX - this.dragStartPoint.x;
    const dy = event.clientY - this.dragStartPoint.y;
    let vx = Math.max(-1, Math.min(1, dx / 250));
    let vy = Math.max(-1, Math.min(1, dy / 250));
    this.currentDragVector.set(vx, vy);
    
    let actualSpeed = 0; 
    if (this.activePath) {
        const { u, v } = this.lastCell;
        let shouldRotate = false;
        const pushThreshold = 0.15; 
        if (this.lockedDragDir === 'x') {
            if ((u === 0 && vx < -pushThreshold) || (u === this.grid.size-1 && vx > pushThreshold)) shouldRotate = true;
        } else if (this.lockedDragDir === 'y') {
            if ((v === 0 && vy < -pushThreshold) || (v === this.grid.size-1 && vy > pushThreshold)) shouldRotate = true;
        }
        actualSpeed = shouldRotate ? -0.15 : 0; // INCREASED PUSH FORCE
    } else {
        actualSpeed = 1.5; // INCREASED FREE ROTATION SPEED
    }
    
    if (this.activePath) {
        // Victory Guard: Allow rotation logic to proceed below, but block pipe drawing here
        if (this.isVictorious) return;

        this.raycaster.setFromCamera(this.pointer, this.camera);
        const cellMeshes = this.grid.cells.map(c => c.mesh);
        const cellHit = this.raycaster.intersectObjects(cellMeshes, false)[0]; // CRITICAL FIX: NO RECURSIVE

        if (cellHit) {
          const target = cellHit.object.userData;
          if (target.faceIndex !== this.lastCell.f || target.u !== this.lastCell.u || target.v !== this.lastCell.v) {
            
            // Adjacency Only Logic
            const isNeighbor = this.grid.getNeighborCells(this.lastCell).some(n => n.f === target.faceIndex && n.u === target.u && n.v === target.v);
            if (isNeighbor) {
                const collideIdx = this.activePath.cells.findIndex(c => c.f === target.faceIndex && c.u === target.u && c.v === target.v);
                if (collideIdx !== -1) {
                  this.activePath.cells = this.activePath.cells.slice(0, collideIdx + 1);
                } else {
                  const occ = this.gameController.getCellOccupant(target.faceIndex, target.u, target.v);
                  const targetPlate = this.gameController.getPlateAt(target.faceIndex, target.u, target.v);

                  // SMART-SNAP: Allow move if it's the target plate of the SAME color AND label, even if it has a stale stub
                  const isTarget = targetPlate && 
                                  targetPlate.color === this.activeColor && 
                                  targetPlate.label === this.activeLabel && 
                                  targetPlate !== this.activePath.startPlate;
                  
                  if (occ && occ !== this.activePath && !isTarget) return; 
                  
                  this.activePath.cells.push({ f: target.faceIndex, u: target.u, v: target.v });
                  soundManager.playTick(this.activePath.cells.length);
                }
                const head = this.activePath.cells[this.activePath.cells.length - 1];
                const normal = this.grid.getFaceNormal(head.f);
                this.lastCell = { ...head, position: this.grid.getCellPosition(head.f, head.u, head.v).add(normal.clone().multiplyScalar(0.01)), normal };
                
                const plateHit = this.gameController.getPlateAt(head.f, head.u, head.v);
                if (plateHit && 
                    plateHit.color === this.activeColor && 
                    plateHit.label === this.activeLabel && 
                    plateHit !== this.activePath.startPlate) {
                  this.activePath.isCompleted = true;
                  this.gameController.addCompletedPath(this.activePath);
                  this.redrawEntirePath(this.activePath, true); // FORCE ON COMPLETION
                  soundManager.playLock();
                  this.onPointerUp();
                  return;
                }
                this.redrawEntirePath(this.activePath);
            }
          }
        }
    }

    const rotThresh = 15; 
    if (this.lockedLocalAxis === null && (Math.abs(dx) > rotThresh || Math.abs(dy) > rotThresh)) {
        this.lockedDragDir = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
        
        const iWA = this.lockedDragDir === 'x' ? new THREE.Vector3(0, 1, 0).applyQuaternion(this.camera.quaternion).normalize() : new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion).normalize();
        const dts = [
            { axis: new THREE.Vector3(1, 0, 0), dotWorld: new THREE.Vector3(1, 0, 0).applyQuaternion(this.grid.group.quaternion) },
            { axis: new THREE.Vector3(0, 1, 0), dotWorld: new THREE.Vector3(0, 1, 0).applyQuaternion(this.grid.group.quaternion) },
            { axis: new THREE.Vector3(0, 0, 1), dotWorld: new THREE.Vector3(0, 0, 1).applyQuaternion(this.grid.group.quaternion) }
        ];
        dts.sort((a, b) => Math.abs(b.dotWorld.dot(iWA)) - Math.abs(a.dotWorld.dot(iWA)));
        this.lockedLocalAxis = dts[0].axis;
        this.axisSign = Math.sign(dts[0].dotWorld.dot(iWA)) || 1;
    }

    if (this.lockedLocalAxis !== null) {
        // Standardize delta signs: Moving UP/RIGHT should always rotate in the intuitive direction
        const deltaX = this.pointer.x - this.lastPointer.x;
        const deltaY = this.pointer.y - this.lastPointer.y;
        
        // Final Fix: Apply a 1.5x multiplier to vertical movement to overcome screen aspect ratio stiffness
        const delta = (this.lockedDragDir === 'x' ? deltaX : -deltaY * 1.5);
        this.targetRotationVelocity = delta * actualSpeed * this.sensitivityFactor; 
        if (window.requestSovereignFrame) window.requestSovereignFrame();
    }
    
    this.lastPointer.copy(this.pointer);
  }

  onPointerUp(event) {
    if (event) this.activePointers.delete(event.pointerId);
    else this.activePointers.clear();
    this.stopInteraction();
  }

  stopInteraction() {
    clearTimeout(this.longPressTimer);
    this.dialEl?.classList.add('hidden');
    this.isDragging = false;
    this.targetRotationVelocity = 0;
    this.lockedLocalAxis = null; 
    this.lockedDragDir = null;   
    if (window.requestSovereignFrame) window.requestSovereignFrame();
    if (this.activePath && !this.activePath.isCompleted) {
       if (this.gameController.stubs.indexOf(this.activePath) === -1) this.gameController.addStub(this.activePath);
       this.gameController.setPlateHighlight(this.activePath.startPlate, false);
    }
    this.activePath = null;
    this.activeColor = null;
    this.lastCell = null;
  }

  update() {
    // Zoom smoothing
    this.currentCameraDistance = THREE.MathUtils.lerp(this.currentCameraDistance, this.targetCameraDistance, 0.1);
    const camDir = this.camera.position.clone().normalize();
    this.camera.position.copy(camDir.multiplyScalar(this.currentCameraDistance));

    if (this.isVictorious) {
        if (!this.isDragging) {
            // Continuous, gradually shifting rotation
            this.victoryTime += 0.016; 
            const speed = 0.004;
            const rx = Math.sin(this.victoryTime * 0.3) * speed;
            const ry = Math.cos(this.victoryTime * 0.4) * speed;
            const rz = Math.sin(this.victoryTime * 0.5) * speed;
            
            this.grid.group.rotateX(rx);
            this.grid.group.rotateY(ry);
            this.grid.group.rotateZ(rz);
        } else {
            this.victoryTime += 0.016; // Keep time moving for pulse
        }

        // Sovereign Pulse: Breathe the completed pipes
        const pulse = (Math.sin(this.victoryTime * 3.0) * 0.5 + 0.5) * 0.4;
        this.gameController.completedPaths.forEach(path => {
            path.meshes.forEach(m => {
                if (m.material) m.material.emissiveIntensity = pulse * 0.25; // Subtler victory glow
            });
        });
    }

    // Animate Long-Press Dial
    if (this.isDragging && !this.isLongPress && this.longPressStartTime > 0) {
      const elapsed = Date.now() - this.longPressStartTime;
      const t = Math.min(1, elapsed / this.LONG_PRESS_DURATION);
      if (this.dialProgressEl) {
          const offset = 151 * (1 - t);
          this.dialProgressEl.style.strokeDashoffset = offset.toString();
      }
    }

    if (this.isResetting) {
        this.grid.group.quaternion.slerp(this.identityQuaternion, 0.1);
        if (this.grid.group.quaternion.angleTo(this.identityQuaternion) < 0.001) {
            this.grid.group.quaternion.copy(this.identityQuaternion);
            this.isResetting = false;
        }
    } else if (this.isVictorious) {
        // VICTORY CELEBRATION: Stochastic Pulse & Tumble
        const now = Date.now();
        if (now - this.lastNudgeTime > this.nudgeInterval) {
            this.lastNudgeTime = now;
            // Select random axis
            const axes = [new THREE.Vector3(1,0,0), new THREE.Vector3(0,1,0), new THREE.Vector3(0,0,1)];
            this.victoryAxis = axes[Math.floor(Math.random() * axes.length)];
            // Apply speed nudge (Whisper light pulses)
            this.targetRotationVelocity += (0.005 + Math.random() * 0.01); 
            // Randomly vary the interval for a more "organic" feel
            this.nudgeInterval = 1000 + Math.random() * 2000;
        }

        // Apply rotation and physical deceleration (damping)
        this.currentRotationVelocity = THREE.MathUtils.lerp(this.currentRotationVelocity, this.targetRotationVelocity, 0.05);
        this.grid.group.rotateOnAxis(this.victoryAxis, this.currentRotationVelocity);
        
        // Constant natural drag (slow down)
        this.targetRotationVelocity *= 0.98;

    } else {
        this.currentRotationVelocity = THREE.MathUtils.lerp(this.currentRotationVelocity, this.targetRotationVelocity, this.lerpFactor);
        if (this.lockedLocalAxis !== null && Math.abs(this.currentRotationVelocity) > 0.0001) {
            this.grid.group.rotateOnAxis(this.lockedLocalAxis, this.currentRotationVelocity * this.axisSign);
        }
    }

    // Dynamic Visibility: Hide grid lines inside/behind
    this.grid.update(this.camera);
  }

  redrawEntirePath(path, force = false) {
    if (!force && path._lastDrawnLength === path.cells.length) return;
    path._lastDrawnLength = path.cells.length;

    path.meshes.forEach(m => this.grid.group.remove(m));
    path.meshes = [];
    path.meshesByCell = {};
    path.ribbonLabels = [];

    const isActive = (path === this.activePath && !path.isCompleted);
    const ribbonW = this.grid.cellSize * 0.32;
    const points = this.grid.getPathPoints(path.cells);

    // 1. RIBBON MODE (Tactical Active Draw)
    if (isActive) {
      const ribbonMat = new THREE.MeshBasicMaterial({ 
        color: new THREE.Color(path.color),
        transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false
      });

      const labelTexture = TextureHelper.createLabeledTexture(path.color, path.label);
      const labelMat = new THREE.MeshBasicMaterial({
          map: labelTexture, transparent: true, opacity: 1.0, depthWrite: false, side: THREE.DoubleSide
      });

      // Draw Joint Circles and Segment Planes
      for (let i = 0; i < points.length; i++) {
        const p = points[i].pos;
        const cellIdx = points[i].cellIdx;
        if (!path.meshesByCell[cellIdx]) path.meshesByCell[cellIdx] = [];

        // Joint at every cell center
        if (points[i].isCenter || i === 0 || i === points.length - 1) {
            const normal = this.grid.getFaceNormal(path.cells[cellIdx].f);
            const jointGeo = new THREE.CircleGeometry(ribbonW / 2, 32);
            const joint = new THREE.Mesh(jointGeo, ribbonMat);
            joint.position.copy(p);
            joint.lookAt(p.clone().add(normal));
            joint.renderOrder = 60;
            this.grid.group.add(joint);
            path.meshes.push(joint);
            path.meshesByCell[cellIdx].push(joint);

            // Ribbon Label
            const labelGeo = new THREE.CircleGeometry(ribbonW * 0.45, 32);
            const label = new THREE.Mesh(labelGeo, labelMat);
            label.position.set(0, 0, 0.002);
            label.renderOrder = 75;
            joint.add(label);
            path.ribbonLabels.push(label);
        }

        // Segment to PREVIOUS point
        if (i > 0) {
            const pPrev = points[i-1];
            const pCurr = points[i];
            const dist = pCurr.pos.distanceTo(pPrev.pos);
            if (dist > 0.001) {
                // SOVEREIGN ALIGNMENT: 
                // 1. If we are moving from Center to Edge, use the Start Face Normal.
                // 2. If we are moving from Edge to Center, use the End Face Normal.
                const faceIdx = pPrev.isCenter ? path.cells[pPrev.cellIdx].f : path.cells[pCurr.cellIdx].f;
                const normal = this.grid.getFaceNormal(faceIdx);

                const segGeo = new THREE.PlaneGeometry(ribbonW, dist);
                const seg = new THREE.Mesh(segGeo, ribbonMat);
                seg.position.copy(pCurr.pos.clone().add(pPrev.pos).multiplyScalar(0.5));
                
                // FORCE PARALLELISM: Use the specific face normal for orientation
                seg.quaternion.setFromRotationMatrix(new THREE.Matrix4().lookAt(pCurr.pos, pPrev.pos, normal));
                seg.rotateX(Math.PI/2);
                seg.renderOrder = 60;
                this.grid.group.add(seg);
                path.meshes.push(seg);
                path.meshesByCell[cellIdx].push(seg);
            }
        }
      }
      return; 
    }

    // 2. PIPE MODE (Completed Paths)
    const result = this.grid.createPathMeshes(path.cells, path.color);
    path.meshes = result.meshes;
    path.meshesByCell = result.meshesByCell;
  }

  setVictory(bool) {
    this.isVictorious = bool;
    if (bool) {
        this.targetRotationVelocity = 0.02; // Whisper initial kick
        this.lastNudgeTime = Date.now();
        this.victoryAxis = new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize();
    } else {
        this.targetRotationVelocity = 0;
        this.currentRotationVelocity = 0;
        this.resetOrientation();
    }
  }

  updatePipeMaterials(roughness, ior) {
    const updatePath = (path) => {
        path.meshes.forEach(mesh => {
            if (mesh.material) {
                if (roughness !== undefined) mesh.material.roughness = roughness;
                if (ior !== undefined) mesh.material.ior = ior;
            }
        });
    };
    this.gameController.completedPaths.forEach(updatePath);
    this.gameController.stubs.forEach(updatePath);
    if (this.activePath) updatePath(this.activePath);
  }

  setSensitivity(val) { this.sensitivityFactor = val; }

  resetOrientation() {
      // Extract current horizontal spin (Y-axis) to preserve it
      const euler = new THREE.Euler().setFromQuaternion(this.grid.group.quaternion, 'YXZ');
      this.identityQuaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), euler.y);
      
      this.targetRotationVelocity = 0;
      this.currentRotationVelocity = 0;
      this.lockedLocalAxis = null;
      this.lockedDragDir = null;
      this.isResetting = true;
      if (window.requestSovereignFrame) window.requestSovereignFrame();
  }

  setVictory(isWon) {
      this.isVictorious = isWon;
      this.victoryTime = 0;
      if (!isWon) {
          // Snap back to starting alignment
          this.grid.group.quaternion.identity();
          this.currentRotationVelocity = 0;
          this.targetRotationVelocity = 0;
      }
  }
}

