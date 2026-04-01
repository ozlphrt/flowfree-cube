import * as THREE from 'three';
import { soundManager } from './SoundManager.js';

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
    this.minDistance = 6;
    this.maxDistance = 25;
    
    // Pinch state
    this.activePointers = new Map();
    this.initialPinchDistance = 0;

    this.initEvents();
  }

  initEvents() {
    const canvas = this.renderer.domElement;
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
        return; 
    }

    this.isDragging = true;
    this.isResetting = false; // Cancel any active compass reset
    this.updatePointer(event);
    this.lastPointer.copy(this.pointer);
    this.dragStartPoint.set(event.clientX, event.clientY);
    this.lockedLocalAxis = null;
    this.lockedDragDir = null;
    
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
          this.redrawEntirePath(this.activePath);
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

                  // SMART-SNAP: Allow move if it's the target plate of the SAME color, even if it has a stale stub
                  const isTarget = targetPlate && targetPlate.color === this.activeColor && targetPlate !== this.activePath.startPlate;
                  
                  if (occ && occ !== this.activePath && !isTarget) return; 
                  
                  this.activePath.cells.push({ f: target.faceIndex, u: target.u, v: target.v });
                  soundManager.playTick(this.activePath.cells.length);
                }
                const head = this.activePath.cells[this.activePath.cells.length - 1];
                const normal = this.grid.getFaceNormal(head.f);
                this.lastCell = { ...head, position: this.grid.getCellPosition(head.f, head.u, head.v).add(normal.clone().multiplyScalar(0.01)), normal };
                
                const plateHit = this.gameController.getPlateAt(head.f, head.u, head.v);
                if (plateHit && plateHit.color === this.activeColor && plateHit !== this.activePath.startPlate) {
                  this.activePath.isCompleted = true;
                  this.gameController.addCompletedPath(this.activePath);
                  this.redrawEntirePath(this.activePath);
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
                if (m.material) m.material.emissiveIntensity = pulse;
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
    } else {
        this.currentRotationVelocity = THREE.MathUtils.lerp(this.currentRotationVelocity, this.targetRotationVelocity, this.lerpFactor);
        if (this.lockedLocalAxis !== null && Math.abs(this.currentRotationVelocity) > 0.0001) {
            this.grid.group.rotateOnAxis(this.lockedLocalAxis, this.currentRotationVelocity * this.axisSign);
        }
    }

    // Dynamic Visibility: Hide grid lines inside/behind
    this.grid.update(this.camera);
  }

  redrawEntirePath(path) {
    path.meshes.forEach(m => this.grid.group.remove(m));
    path.meshes = [];
    path.meshesByCell = {};

    const isActive = (path === this.activePath && !path.isCompleted);
    const pipeR = 0.25; 

    // 1. RIBBON MODE (Tactical Active Draw)
    if (isActive) {
      const ribbonMat = new THREE.MeshBasicMaterial({ 
        color: new THREE.Color(path.color),
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide,
        depthWrite: false
      });
      const ribbonW = this.grid.cellSize * 0.45;
      const surfaceOffset = 0.01;

      for (let i = 0; i < path.cells.length; i++) {
        path.meshesByCell[i] = [];
        const c = path.cells[i];
        const cellPos = this.grid.getCellPosition(c.f, c.u, c.v).add(this.grid.getFaceNormal(c.f).multiplyScalar(surfaceOffset));
        
        // Center Circle (Rounded joint)
        const jointGeo = new THREE.CircleGeometry(ribbonW / 2, 32);
        const joint = new THREE.Mesh(jointGeo, ribbonMat);
        joint.position.copy(cellPos);
        joint.lookAt(cellPos.clone().add(this.grid.getFaceNormal(c.f)));
        joint.renderOrder = 30;
        this.grid.group.add(joint);
        path.meshes.push(joint);
        path.meshesByCell[i].push(joint);

        // Segment to PREVIOUS cell
        if (i > 0) {
          const prev = path.cells[i-1];
          const prevPos = this.grid.getCellPosition(prev.f, prev.u, prev.v).add(this.grid.getFaceNormal(prev.f).multiplyScalar(surfaceOffset));
          
          if (c.f === prev.f) {
            // Straight segment on same face
            const dist = cellPos.distanceTo(prevPos);
            const segGeo = new THREE.PlaneGeometry(ribbonW, dist);
            // Flip UVs for directionality: flow from start to end (or end to start?) 
            // We want flow to follow the draw.
            const seg = new THREE.Mesh(segGeo, ribbonMat);
            seg.position.copy(cellPos.clone().add(prevPos).multiplyScalar(0.5));
            seg.quaternion.setFromRotationMatrix(new THREE.Matrix4().lookAt(cellPos, prevPos, this.grid.getFaceNormal(c.f)));
            seg.rotateX(Math.PI/2);
            seg.renderOrder = 30;
            this.grid.group.add(seg);
            path.meshes.push(seg);
            path.meshesByCell[i].push(seg);
          } else {
            // Cross-face Wrap (Corner)
            const n1 = this.grid.getFaceNormal(prev.f);
            const n2 = this.grid.getFaceNormal(c.f);
            const h = this.grid.halfExtents;
            
            // Corner Wrapping Point (Robust)
            const h_off = h + surfaceOffset;
            const eP = new THREE.Vector3();
            if (n1.x !== 0) eP.x = h_off * n1.x; else if (n2.x !== 0) eP.x = h_off * n2.x; else eP.x = prevPos.x;
            if (n1.y !== 0) eP.y = h_off * n1.y; else if (n2.y !== 0) eP.y = h_off * n2.y; else eP.y = prevPos.y;
            if (n1.z !== 0) eP.z = h_off * n1.z; else if (n2.z !== 0) eP.z = h_off * n2.z; else eP.z = prevPos.z;

            [ {p: prevPos, n: n1, target: eP}, {p: cellPos, n: n2, target: eP} ].forEach(set => {
              const dist = set.p.distanceTo(set.target);
              if (dist < 0.001) return;
              const segGeo = new THREE.PlaneGeometry(ribbonW, dist);
              const seg = new THREE.Mesh(segGeo, ribbonMat);
              seg.position.copy(set.p.clone().add(set.target).multiplyScalar(0.5));
              seg.quaternion.setFromRotationMatrix(new THREE.Matrix4().lookAt(set.p, set.target, set.n));
              seg.rotateX(Math.PI/2);
              seg.renderOrder = 30;
              this.grid.group.add(seg);
              path.meshes.push(seg);
              path.meshesByCell[i].push(seg);
            });
          }
        }
      }
      return; 
    }

    // 2. PIPE MODE (Completed Paths)
    const mat = new THREE.MeshPhysicalMaterial({ 
      color: new THREE.Color(path.color),
      emissive: new THREE.Color(path.color),
      emissiveIntensity: 0.1,
      roughness: 0.1, 
      ior: 1.45,
      metalness: 0.0,
      transmission: 0.0, 
      transparent: false,
      opacity: 1.0,
      depthWrite: true,
      side: THREE.FrontSide
    });

    const jointIndices = [];
    for (let i = 0; i < path.cells.length; i++) {
        path.meshesByCell[i] = [];
        const c = path.cells[i];
        const cellPos = this.grid.getCellPosition(c.f, c.u, c.v).add(this.grid.getFaceNormal(c.f).multiplyScalar(0.121));
        let needsJoint = (i === 0 || i === path.cells.length - 1);
        if (i > 0 && i < path.cells.length - 1) {
            const prev = path.cells[i-1];
            const next = path.cells[i+1];
            if (prev.f !== c.f || next.f !== c.f) needsJoint = true;
            else if ((prev.u !== next.u) && (prev.v !== next.v)) needsJoint = true;
        }
        if (needsJoint) {
            jointIndices.push(i);
            const joint = new THREE.Mesh(new THREE.SphereGeometry(this.grid.cellSize * pipeR, 24, 24), mat);
            joint.position.copy(cellPos);
            this.grid.group.add(joint);
            path.meshes.push(joint);
            path.meshesByCell[i].push(joint);
        }
        if (i === 0 || (i === path.cells.length - 1 && path.isCompleted)) {
            const platePos = this.grid.getCellPosition(c.f, c.u, c.v);
            const neckGeo = new THREE.CylinderGeometry(this.grid.cellSize * pipeR, this.grid.cellSize * pipeR, cellPos.distanceTo(platePos), 24);
            neckGeo.rotateX(Math.PI / 2);
            const neck = new THREE.Mesh(neckGeo, mat);
            neck.position.copy(new THREE.Vector3().addVectors(cellPos, platePos).multiplyScalar(0.5));
            neck.lookAt(cellPos);
            this.grid.group.add(neck);
            path.meshes.push(neck);
            path.meshesByCell[i].push(neck);
        }
    }
    for (let j = 1; j < jointIndices.length; j++) {
        const startIdx = jointIndices[j-1];
        const endIdx = jointIndices[j];
        const pC = path.cells[startIdx], c = path.cells[endIdx];
        const pP = this.grid.getCellPosition(pC.f, pC.u, pC.v).add(this.grid.getFaceNormal(pC.f).multiplyScalar(0.121));
        const cellPos = this.grid.getCellPosition(c.f, c.u, c.v).add(this.grid.getFaceNormal(c.f).multiplyScalar(0.121));
        if (c.f === pC.f) {
            const geo = new THREE.CylinderGeometry(this.grid.cellSize * pipeR, this.grid.cellSize * pipeR, cellPos.distanceTo(pP), 24);
            geo.rotateX(Math.PI / 2);
            const seg = new THREE.Mesh(geo, mat);
            seg.position.copy(new THREE.Vector3().addVectors(cellPos, pP).multiplyScalar(0.5));
            seg.lookAt(cellPos);
            this.grid.group.add(seg);
            path.meshes.push(seg);
            path.meshesByCell[endIdx].push(seg);
        } else {
            const n1 = this.grid.getFaceNormal(pC.f), n2 = this.grid.getFaceNormal(c.f);
            const h = this.grid.halfExtents, eP = new THREE.Vector3(), offset = 0.121;
            if (n1.x !== 0) eP.x = (h + offset) * n1.x; else if (n2.x !== 0) eP.x = (h + offset) * n2.x; else eP.x = pP.x;
            if (n1.y !== 0) eP.y = (h + offset) * n1.y; else if (n2.y !== 0) eP.y = (h + offset) * n2.y; else eP.y = pP.y;
            if (n1.z !== 0) eP.z = (h + offset) * n1.z; else if (n2.z !== 0) eP.z = (h + offset) * n2.z; else eP.z = pP.z;
            const seg1Geo = new THREE.CylinderGeometry(this.grid.cellSize * pipeR, this.grid.cellSize * pipeR, pP.distanceTo(eP), 24);
            seg1Geo.rotateX(Math.PI / 2);
            const seg1 = new THREE.Mesh(seg1Geo, mat);
            seg1.position.copy(pP.clone().add(eP).multiplyScalar(0.5));
            seg1.lookAt(eP);
            this.grid.group.add(seg1);
            path.meshes.push(seg1);
            path.meshesByCell[endIdx].push(seg1);
            const seg2Geo = new THREE.CylinderGeometry(this.grid.cellSize * pipeR, this.grid.cellSize * pipeR, cellPos.distanceTo(eP), 24);
            seg2Geo.rotateX(Math.PI / 2);
            const seg2 = new THREE.Mesh(seg2Geo, mat);
            seg2.position.copy(cellPos.clone().add(eP).multiplyScalar(0.5));
            seg2.lookAt(cellPos);
            this.grid.group.add(seg2);
            path.meshes.push(seg2);
            path.meshesByCell[endIdx].push(seg2);
            const eJ = new THREE.Mesh(new THREE.SphereGeometry(this.grid.cellSize * pipeR, 24, 24), mat);
            eJ.position.copy(eP);
            this.grid.group.add(eJ);
            path.meshes.push(eJ);
            path.meshesByCell[endIdx].push(eJ);
        }
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

