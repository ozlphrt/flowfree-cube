import * as THREE from 'three';
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
    this.dragStartPoint = new THREE.Vector2();
    this.currentDragVector = new THREE.Vector2();
    
    // Game state tracking
    this.activePath = null;
    this.activeColor = null;
    this.activeLabel = null;
    this.lastCell = null;
    this.currentSegmentAxis = null;

    // Rotation parameters
    this.targetRotationVelocity = 0;
    this.currentRotationVelocity = 0;
    this.lerpFactor = 0.1; 
    
    // Axis locking state
    this.lockedLocalAxis = null; 
    this.axisSign = 1; 
    this.lockedDragDir = null;
    this.sensitivityFactor = 1.0; 

    this.initEvents();
  }

  initEvents() {
    const canvas = this.renderer.domElement;
    canvas.addEventListener('pointerdown', this.onPointerDown.bind(this));
    window.addEventListener('pointermove', this.onPointerMove.bind(this));
    window.addEventListener('pointerup', this.onPointerUp.bind(this));
    window.addEventListener('pointercancel', this.onPointerUp.bind(this));
  }

  updatePointer(event) {
    this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  onPointerDown(event) {
    this.updatePointer(event);
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const intersects = this.raycaster.intersectObjects(this.grid.group.children, true);
    
    if (intersects.length > 0) {
      this.isDragging = true;
      this.lockedLocalAxis = null; 
      this.lockedDragDir = null;
      this.dragStartPoint.set(event.clientX, event.clientY);
      const cellHit = intersects.find(i => i.object.userData && i.object.userData.faceIndex !== undefined);
      
      if (cellHit) {
        const data = cellHit.object.userData;
        const plate = this.gameController.getPlateAt(data.faceIndex, data.u, data.v);
        
        if (plate) {
          const stubAtPlate = this.gameController.stubs.find(s => s.startPlate === plate);
          const completedAtPlate = this.gameController.completedPaths.find(p => p.cells.some(c => c.f === data.faceIndex && c.u === data.u && c.v === data.v));

          if (completedAtPlate) {
             this.gameController.deletePathByPlate(data.faceIndex, data.u, data.v);
             return; 
          }

          if (stubAtPlate) {
             this.activeColor = plate.color;
             this.activeLabel = plate.label;
             this.activePath = stubAtPlate;
             this.activePath.cells = [ { f: data.faceIndex, u: data.u, v: data.v } ]; 
             this.redrawEntirePath(this.activePath);
             const normal = this.grid.getFaceNormal(data.faceIndex);
             this.lastCell = { f: data.faceIndex, u: data.u, v: data.v, position: cellHit.object.position.clone().add(normal.multiplyScalar(0.12)), normal };
          } else {
            this.activeColor = plate.color;
            this.activeLabel = plate.label;
            const faceNormal = this.grid.getFaceNormal(data.faceIndex);
            this.lastCell = { f: data.faceIndex, u: data.u, v: data.v, position: cellHit.object.position.clone().add(faceNormal.clone().multiplyScalar(0.12)), normal: faceNormal };
            this.activePath = {
               color: this.activeColor, label: this.activeLabel, startPlate: plate,
               cells: [{ f: data.faceIndex, u: data.u, v: data.v }], meshesByCell: {}, meshes: [], isCompleted: false
            };
          }
          this.gameController.setPlateHighlight(plate, true);
        } else {
          const occupant = this.gameController.getCellOccupant(data.faceIndex, data.u, data.v);
          if (occupant) {
                this.activeColor = occupant.color;
                this.activeLabel = occupant.label;
                this.activePath = occupant;
                this.activePath.isCompleted = false;
                if (this.gameController.completedPaths.includes(occupant)) {
                    this.gameController.completedPaths = this.gameController.completedPaths.filter(p => p !== occupant);
                    this.gameController.stubs.push(occupant);
                }
                const cellIdx = occupant.cells.findIndex(c => c.f === data.faceIndex && c.u === data.u && c.v === data.v);
                this.activePath.cells = this.activePath.cells.slice(0, cellIdx + 1);
                this.redrawEntirePath(this.activePath);
                const normal = this.grid.getFaceNormal(data.faceIndex);
                this.lastCell = { f: data.faceIndex, u: data.u, v: data.v, position: this.grid.getCellPosition(data.faceIndex, data.u, data.v).add(normal.clone().multiplyScalar(0.12)), normal: normal };
                this.gameController.setPlateHighlight(occupant.startPlate, true);
          }
        }
      }
    }
  }

  onPointerMove(event) {
    if (!this.isDragging) return;
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
            if ((u === 0 && vx < -pushThreshold) || (u === 8 && vx > pushThreshold)) shouldRotate = true;
        } else if (this.lockedDragDir === 'y') {
            if ((v === 0 && vy < -pushThreshold) || (v === 8 && vy > pushThreshold)) shouldRotate = true;
        }
        actualSpeed = shouldRotate ? -0.012 : 0;
    } else {
        const distFromCenter = Math.sqrt(this.pointer.x ** 2 + this.pointer.y ** 2);
        actualSpeed = 0.065 * Math.pow(distFromCenter, 1.0); 
    }
    
    if (this.activePath) {
        this.raycaster.setFromCamera(this.pointer, this.camera);
        const intersects = this.raycaster.intersectObjects(this.grid.group.children, true);
        const cellHit = intersects.find(i => i.object.userData && i.object.userData.faceIndex !== undefined);

        if (cellHit) {
          const target = cellHit.object.userData;
          if (target.faceIndex !== this.lastCell.f || target.u !== this.lastCell.u || target.v !== this.lastCell.v) {
            
            // Lookback corner cutting (now "Adjacency-Only")
            if (this.activePath.cells.length > 2) {
                // Only check the previous few cells to allow long winding paths
                const lookbackLimit = Math.max(0, this.activePath.cells.length - 10);
                for (let j = this.activePath.cells.length - 3; j >= lookbackLimit; j--) {
                    const prev = this.activePath.cells[j];
                    // Only shortcut if target is an IMMEDIATE NEIGHBOR of an earlier cell
                    const isNeighbor = Math.abs(prev.u - target.u) + Math.abs(prev.v - target.v) === 1;
                    if (prev.f === target.faceIndex && isNeighbor) {
                        this.activePath.cells = this.activePath.cells.slice(0, j + 1);
                        const normal = this.grid.getFaceNormal(prev.f);
                        this.lastCell = { ...prev, position: this.grid.getCellPosition(prev.f, prev.u, prev.v).add(normal.clone().multiplyScalar(0.12)), normal };
                        this.currentSegmentAxis = null;
                        break;
                    }
                }
            }

            const collideIdx = this.activePath.cells.findIndex(c => c.f === target.faceIndex && c.u === target.u && c.v === target.v);
            if (collideIdx !== -1 && collideIdx < this.activePath.cells.length - 1) {
              this.activePath.cells = this.activePath.cells.slice(0, collideIdx + 1);
              const cell = this.activePath.cells[collideIdx];
              const normal = this.grid.getFaceNormal(cell.f);
              this.lastCell = { ...cell, position: this.grid.getCellPosition(cell.f, cell.u, cell.v).add(normal.clone().multiplyScalar(0.12)), normal };
              this.redrawEntirePath(this.activePath);
              return; 
            }

            let head = this.lastCell;
            let stepsTaken = 0;
            const maxSteps = 20;
            const tUD = target.u - head.u;
            const tVD = target.v - head.v;
            let pAxis = this.currentSegmentAxis;
            if (!pAxis || (Math.abs(tUD) > Math.abs(tVD) * 1.5)) pAxis = 'u';
            else if (Math.abs(tVD) > Math.abs(tUD) * 1.5) pAxis = 'v';
            else if (!pAxis) pAxis = Math.abs(tUD) >= Math.abs(tVD) ? 'u' : 'v';

            while (stepsTaken < maxSteps) {
               const uD = target.u - head.u;
               const vD = target.v - head.v;
               const sameF = target.faceIndex === head.f;
               let nC = null;
               if (sameF) {
                  if (pAxis === 'u' && Math.abs(uD) > 0) nC = { f: head.f, u: head.u + Math.sign(uD), v: head.v };
                  else if (Math.abs(vD) > 0) nC = { f: head.f, u: head.u, v: head.v + Math.sign(vD) };
                  else if (Math.abs(uD) > 0) nC = { f: head.f, u: head.u + Math.sign(uD), v: head.v };
               } else nC = this.grid.getNeighborCells(head).find(c => c.f === target.faceIndex);

               if (!nC || (nC.f === head.f && nC.u === head.u && nC.v === head.v)) break;

               const occ = this.gameController.getCellOccupant(nC.f, nC.u, nC.v);
               if (occ && occ.color === this.activeColor && occ.label === this.activeLabel && occ !== this.activePath) {
                  const m = this.gameController.mergePaths(this.activePath, occ, nC);
                  if (m) { this.redrawEntirePath(m); this.activePath = null; return; }
               }
               if (occ && (occ.color !== this.activeColor || occ.label !== this.activeLabel)) break; 

               this.currentSegmentAxis = (nC.u !== head.u) ? 'u' : 'v';
               this.activePath.cells.push({ ...nC });
               head = { ...nC };
               this.lastCell = { ...head, position: this.grid.getCellPosition(head.f, head.u, head.v).add(this.grid.getFaceNormal(head.f).multiplyScalar(0.12)), normal: this.grid.getFaceNormal(head.f) };
               
               const pHit = this.gameController.getPlateAt(head.f, head.u, head.v);
               this.redrawEntirePath(this.activePath);

               if (pHit && pHit.color === this.activeColor && pHit.label === this.activeLabel && pHit !== this.activePath.startPlate) {
                  this.activePath.isCompleted = true;
                  this.gameController.addCompletedPath(this.activePath);
                  this.redrawEntirePath(this.activePath);
                  this.activePath = null;
                  return;
               }
               if (head.f === target.faceIndex && head.u === target.u && head.v === target.v) break;
               stepsTaken++;
            }
          }
        }
    }

    const rotThresh = 25; 
    if (this.lockedLocalAxis === null && (Math.abs(dx) > rotThresh || Math.abs(dy) > rotThresh)) {
        this.lockedDragDir = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
        const iWA = this.lockedDragDir === 'x' ? new THREE.Vector3(0, 1, 0).applyQuaternion(this.camera.quaternion).normalize() : new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion).normalize();
        const dts = [{ axis: new THREE.Vector3(1, 0, 0), dotWorld: new THREE.Vector3(1, 0, 0).applyQuaternion(this.grid.group.quaternion) }, { axis: new THREE.Vector3(0, 1, 0), dotWorld: new THREE.Vector3(0, 1, 0).applyQuaternion(this.grid.group.quaternion) }, { axis: new THREE.Vector3(0, 0, 1), dotWorld: new THREE.Vector3(0, 0, 1).applyQuaternion(this.grid.group.quaternion) }];
        dts.sort((a, b) => Math.abs(b.dotWorld.dot(iWA)) - Math.abs(a.dotWorld.dot(iWA)));
        this.lockedLocalAxis = dts[0].axis;
        this.axisSign = Math.sign(dts[0].dotWorld.dot(iWA)) || 1;
    }
    if (this.lockedLocalAxis !== null) this.targetRotationVelocity = (this.lockedDragDir === 'x' ? vx : vy) * actualSpeed * this.sensitivityFactor;
  }

  onPointerUp() {
    this.isDragging = false;
    this.targetRotationVelocity = 0;
    if (this.activePath) {
      if (!this.activePath.isCompleted) {
        if (this.gameController.stubs.indexOf(this.activePath) === -1) this.gameController.addStub(this.activePath);
      }
      this.gameController.setPlateHighlight(this.activePath.startPlate, false);
    }
    this.activePath = null; this.activeColor = null; this.activeLabel = null; this.lastCell = null; this.currentSegmentAxis = null;
  }

  update() {
    const intensity = 0.6 + Math.sin(Date.now() * 0.003) * 0.4;
    this.gameController.completedPaths.forEach(path => {
      path.meshes.forEach(m => m.material.emissiveIntensity = intensity);
      this.gameController.getPlates(path.color, path.label).forEach(p => { p.mesh.material.emissiveIntensity = intensity; });
    });
    this.currentRotationVelocity = THREE.MathUtils.lerp(this.currentRotationVelocity, this.targetRotationVelocity, this.lerpFactor);
    if (this.lockedLocalAxis !== null && Math.abs(this.currentRotationVelocity) > 0.0001) this.grid.group.rotateOnAxis(this.lockedLocalAxis, this.currentRotationVelocity * this.axisSign);
  }

  redrawEntirePath(path) {
    path.meshes.forEach(m => this.grid.group.remove(m));
    path.meshes = [];
    path.meshesByCell = {};

    for (let i = 0; i < path.cells.length; i++) {
        const c = path.cells[i];
        path.meshesByCell[i] = [];
        const cellPos = this.grid.getCellPosition(c.f, c.u, c.v).add(this.grid.getFaceNormal(c.f).multiplyScalar(0.12));
        const mat = new THREE.MeshStandardMaterial({ 
          color: path.color, roughness: 0.1, metalness: 0.4, 
          emissive: new THREE.Color(path.color), emissiveIntensity: 0.2 
        });

        const sphereGeo = new THREE.SphereGeometry(this.grid.cellSize * 0.24, 16, 16);
        const joint = new THREE.Mesh(sphereGeo, mat);
        joint.position.copy(cellPos);
        joint.renderOrder = 35; // TOP LAYER for pipes
        joint.material.depthWrite = true;
        this.grid.group.add(joint);
        path.meshes.push(joint);
        path.meshesByCell[i].push(joint);
        if (i > 0) {
            const pC = path.cells[i-1];
            const pP = this.grid.getCellPosition(pC.f, pC.u, pC.v).add(this.grid.getFaceNormal(pC.f).multiplyScalar(0.12));
            const lN = this.grid.getFaceNormal(pC.f);
            let isN = (pC.f === c.f) ? (Math.abs(pC.u - c.u) + Math.abs(pC.v - c.v) === 1) : this.grid.getNeighborCells(pC).some(n => n.f === c.f && n.u === c.u && n.v === c.v);
            if (isN) {
                if (this.grid.getFaceNormal(c.f).equals(lN)) {
                    const geo = new THREE.CylinderGeometry(this.grid.cellSize * 0.24, this.grid.cellSize * 0.24, cellPos.distanceTo(pP), 16);
                    geo.rotateX(Math.PI / 2);
                    const seg = new THREE.Mesh(geo, mat);
                    seg.position.copy(new THREE.Vector3().addVectors(cellPos, pP).multiplyScalar(0.5));
                    seg.lookAt(cellPos);
                    seg.renderOrder = 35; // TOP LAYER
                    this.grid.group.add(seg);
                    path.meshes.push(seg);
                    path.meshesByCell[i].push(seg);
                } else {
                    const eP = pP.clone().sub(lN.clone().multiplyScalar(0.12));
                    if (this.grid.getFaceNormal(c.f).x !== 0) eP.x = cellPos.x;
                    if (this.grid.getFaceNormal(c.f).y !== 0) eP.y = cellPos.y;
                    if (this.grid.getFaceNormal(c.f).z !== 0) eP.z = cellPos.z;
                    const geo1 = new THREE.CylinderGeometry(this.grid.cellSize * 0.24, this.grid.cellSize * 0.24, pP.distanceTo(eP.clone().add(lN.clone().multiplyScalar(0.12))), 16);
                    geo1.rotateX(Math.PI / 2);
                    const seg1 = new THREE.Mesh(geo1, mat);
                    seg1.position.copy(new THREE.Vector3().addVectors(pP, eP.clone().add(lN.clone().multiplyScalar(0.12))).multiplyScalar(0.5));
                    seg1.lookAt(eP.clone().add(lN.clone().multiplyScalar(0.12)));
                    seg1.renderOrder = 35;
                    this.grid.group.add(seg1);
                    path.meshes.push(seg1);
                    path.meshesByCell[i].push(seg1);
                    const oEP2 = eP.clone().add(this.grid.getFaceNormal(c.f).clone().multiplyScalar(0.12));
                    const geo2 = new THREE.CylinderGeometry(this.grid.cellSize * 0.24, this.grid.cellSize * 0.24, oEP2.distanceTo(cellPos), 16);
                    geo2.rotateX(Math.PI / 2);
                    const seg2 = new THREE.Mesh(geo2, mat);
                    seg2.position.copy(new THREE.Vector3().addVectors(oEP2, cellPos).multiplyScalar(0.5));
                    seg2.lookAt(cellPos);
                    seg2.renderOrder = 35;
                    this.grid.group.add(seg2);
                    path.meshes.push(seg2);
                    path.meshesByCell[i].push(seg2);
                    const jO = new THREE.Vector3().addVectors(this.grid.getFaceNormal(c.f), lN).normalize().multiplyScalar(0.12);
                    const eJ = new THREE.Mesh(new THREE.SphereGeometry(this.grid.cellSize * 0.24, 16, 16), mat);
                    eJ.position.copy(eP).add(jO);
                    eJ.renderOrder = 35;
                    this.grid.group.add(eJ);
                    path.meshes.push(eJ);
                    path.meshesByCell[i].push(eJ);
                }
            }
        }
    }
  }

  setSensitivity(val) { this.sensitivityFactor = val; }
}
