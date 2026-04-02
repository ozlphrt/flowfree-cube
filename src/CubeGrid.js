import * as THREE from 'three';

export class CubeGrid {
  constructor(scene, size = 5, cellSize = 1.0) {
    this.scene = scene;
    this.size = size;
    this.cellSize = cellSize;
    
    this.group = new THREE.Group();
    this.halfExtents = (this.size * this.cellSize) / 2;

    this.cells = [];
    
    // Visual State
    this.roughness = 0.20; 
    this.ior = 1.62;
    this.labelMeshes = []; // Restored for Compass Alignment
    
    this.initVisuals();
    this.scene.add(this.group);
  }

  initVisuals() {
    // 1. Core Cube - FROSTED PHYSICAL GLASS (Sovereign Quality)
    const coreSize = this.size * this.cellSize; 
    const coreGeo = new THREE.BoxGeometry(coreSize, coreSize, coreSize);
    
    this.coreMat = new THREE.MeshPhysicalMaterial({ 
      color: 0xffffff,    
      metalness: 0.05,      
      roughness: this.roughness,      
      transmission: 0.95,  // SOVEREIGN: STABLE HYBRID 
      thickness: 0.05,     // MICRO-VOLUME (STABLE FROST)
      clearcoat: 1.0,      
      clearcoatRoughness: 0.02,
      ior: this.ior,                  
      reflectivity: 0.5,
      transparent: true,   // FOR STABLE SORTING
      opacity: 1.0, 
      attenuationColor: new THREE.Color(0xffffff), 
      attenuationDistance: 10.0, 
      depthWrite: false,      
    });
    this.coreMesh = new THREE.Mesh(coreGeo, this.coreMat);
    this.coreMesh.renderOrder = 10; // SOVEREIGN: RENDER BEFORE PIPES TO BE SHARP
    this.group.add(this.coreMesh);

    // Outer Edge Highlight (Synchronized with rounded shape)
    const outerEdges = new THREE.EdgesGeometry(coreGeo);
    const outerMat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 1, transparent: true, opacity: 0.45 });
    const outerWireframe = new THREE.LineSegments(outerEdges, outerMat);
    this.group.add(outerWireframe);

    // 2. The 6 Faces Grids
    const faces = [
      { normal: new THREE.Vector3(0, 0, 1) },  // Front
      { normal: new THREE.Vector3(0, 0, -1) }, // Back
      { normal: new THREE.Vector3(1, 0, 0) },  // Right
      { normal: new THREE.Vector3(-1, 0, 0) }, // Left
      { normal: new THREE.Vector3(0, 1, 0) },  // Top
      { normal: new THREE.Vector3(0, -1, 0) }  // Bottom
    ];

    const cellGeo = new THREE.PlaneGeometry(this.cellSize, this.cellSize);
    const cellMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0, depthWrite: false });

    // 2. The 6 Faces Grids (3D PHYSICAL BARS)
    const barThickness = 0.04; // THICKER GRID LINES
    this.barMat = new THREE.MeshBasicMaterial({ 
      color: 0x000000, 
      transparent: true,
      opacity: 0.15 // MORE VISIBLE GRID
    });

    this.faceGrids = []; // Store for dynamic visibility

    faces.forEach((face, faceIndex) => {
      // a. Individual Interactive Cells
      for (let u = 0; u < this.size; u++) {
        for (let v = 0; v < this.size; v++) {
          const mesh = new THREE.Mesh(cellGeo, cellMat.clone());
          mesh.userData = { faceIndex, u, v, normal: face.normal };
          
          const uOffset = (u - this.size / 2 + 0.5) * this.cellSize;
          const vOffset = (v - this.size / 2 + 0.5) * this.cellSize;
          const inwardOffset = 0.02;
          mesh.position.copy(face.normal).multiplyScalar(this.halfExtents - inwardOffset);
          
          if (face.normal.z !== 0) {
            mesh.position.x = face.normal.z > 0 ? uOffset : -uOffset;
            mesh.position.y = vOffset;
          } else if (face.normal.x !== 0) {
            mesh.position.z = face.normal.x > 0 ? -uOffset : uOffset;
            mesh.position.y = vOffset;
          } else {
            mesh.position.x = uOffset;
            mesh.position.z = face.normal.y > 0 ? -vOffset : vOffset;
          }
          mesh.lookAt(mesh.position.clone().add(face.normal));
          this.group.add(mesh);
          this.cells.push({ faceIndex, u, v, mesh: mesh });
        }
      }

      // b. 3D Face Grid (Physical Bars for true frosting/IOR)
      const faceGrid = new THREE.Group();
      const faceSize = this.size * this.cellSize;
      
      // Vertical Bars
      for (let i = 0; i <= this.size; i++) {
        const barGeo = new THREE.BoxGeometry(barThickness, faceSize, barThickness);
        const bar = new THREE.Mesh(barGeo, this.barMat);
        bar.position.x = (i - this.size / 2) * this.cellSize;
        faceGrid.add(bar);
      }
      // Horizontal Bars
      for (let i = 0; i <= this.size; i++) {
        const barGeo = new THREE.BoxGeometry(faceSize, barThickness, barThickness);
        const bar = new THREE.Mesh(barGeo, this.barMat);
        bar.position.y = (i - this.size / 2) * this.cellSize;
        faceGrid.add(bar);
      }

      const surfaceOffset = 0.002; // MOVE TO SURFACE (SHARP ON NEAR FACE)
      faceGrid.position.copy(face.normal).multiplyScalar(this.halfExtents + surfaceOffset);
      faceGrid.lookAt(faceGrid.position.clone().add(face.normal));
      faceGrid.renderOrder = 10; // SELECTIVE PHYSICAL BLUR (RENDER BEFORE FROSTING)
      this.group.add(faceGrid);
      this.faceGrids.push({ mesh: faceGrid, normal: face.normal });
    });
  }

  rebuild(newSize) {
    this.size = newSize;
    this.halfExtents = (this.size * this.cellSize) / 2;
    this.cells = [];
    this.faceGrids = [];
    
    // Clear existing objects from group
    while(this.group.children.length > 0){ 
      this.group.remove(this.group.children[0]); 
    }
    
    this.initVisuals();
  }

  getCell(faceIndex, u, v) {
    return this.cells.find(c => c.faceIndex === faceIndex && c.u === u && c.v === v);
  }

  getFaceNormal(faceIndex) {
    const faces = [
      new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, -1), 
      new THREE.Vector3(1, 0, 0), new THREE.Vector3(-1, 0, 0), 
      new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -1, 0)
    ];
    return faces[faceIndex].clone();
  }

  getCellPosition(faceIndex, u, v) {
    const normal = this.getFaceNormal(faceIndex);
    const uOffset = (u - this.size / 2 + 0.5) * this.cellSize;
    const vOffset = (v - this.size / 2 + 0.5) * this.cellSize;
    const pos = normal.clone().multiplyScalar(this.halfExtents);
    if (normal.z !== 0) { pos.x = normal.z > 0 ? uOffset : -uOffset; pos.y = vOffset; }
    else if (normal.x !== 0) { pos.z = normal.x > 0 ? -uOffset : uOffset; pos.y = vOffset; }
    else { pos.x = uOffset; pos.z = normal.y > 0 ? -vOffset : vOffset; }
    return pos;
  }

  addPlate(faceIndex, u, v, color) {
    const pos = this.getCellPosition(faceIndex, u, v);
    const normal = this.getFaceNormal(faceIndex);
    const plateRadius = this.cellSize * 0.25; // SOVEREIGN REFINEMENT
    const plateHeight = 0.04; 
    const plateGeo = new THREE.CylinderGeometry(plateRadius, plateRadius, plateHeight, 32);
    
    // 1. Base Plate - ORIGINAL COLOR RESERVED
    const plateMat = new THREE.MeshPhysicalMaterial({ 
      color: new THREE.Color(color).multiplyScalar(0.7), 
      roughness: 0.2, 
      metalness: 0.0,
      clearcoat: 1.0,      // SOVEREIGN: CLEARCOAT FOR EDGE HIGHLIGHTS
      clearcoatRoughness: 0.1,
      transparent: false, 
      opacity: 1.0,       
      side: THREE.DoubleSide,
      reflectivity: 0.5
    });
    const plate = new THREE.Mesh(plateGeo, plateMat);
    // Cylinder by default is upright (along Y). Rotate it to match face normal.
    plate.position.copy(pos).add(normal.clone().multiplyScalar(plateHeight / 2 + 0.001));
    plate.up.copy(this.getFaceUp(faceIndex));
    plate.lookAt(plate.position.clone().add(normal));
    plate.rotateX(Math.PI / 2); // Orient cylinder cap to look at normal
    
    plate.renderOrder = 50; // SHARP ON TOP
    this.group.add(plate);

    // 2. Translucent Label - PURE WHITE OUTLINES (Smaller for better margins)
    const labelGeo = new THREE.CircleGeometry(this.cellSize * 0.22, 32);
    const labelMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 1.0,
      roughness: 1.0,
      metalness: 0.0,
      depthWrite: false, // Prevent z-fighting
      side: THREE.DoubleSide
    });
    const labelMesh = new THREE.Mesh(labelGeo, labelMat);
    // Move to front cap of the cylinder (it was rotated, Y is now front)
    labelMesh.position.set(0, plateHeight / 2 + 0.001, 0); 
    labelMesh.rotateX(-Math.PI / 2); // Flatten label against cap
    labelMesh.renderOrder = 55; // Draw on top
    plate.add(labelMesh);

    this.group.add(plate);
    this.labelMeshes.push(labelMesh); // RESTORE TRACKING
    return { plate, label: labelMesh };
  }

  getFaceUp(faceIndex) {
    const ups = [
      new THREE.Vector3(0, 1, 0), // Front (Z+)
      new THREE.Vector3(0, 1, 0), // Back (Z-)
      new THREE.Vector3(0, 1, 0), // Right (X+)
      new THREE.Vector3(0, 1, 0), // Left (X-)
      new THREE.Vector3(0, 0, -1), // Top (Y+) - Up points to back
      new THREE.Vector3(0, 0, 1)   // Bottom (Y-) - Up points to front
    ];
    return ups[faceIndex].clone();
  }

  update(camera) {
    if (!camera) return;
    const cameraPos = camera.position;
    const worldUp = new THREE.Vector3(0, 1, 0);

    // 1. DYNAMIC FACE VISIBILITY (CULLING)
    this.faceGrids.forEach((fg, i) => {
        const facePos = this.getFaceNormal(i).multiplyScalar(this.size/2).applyQuaternion(this.group.quaternion);
        const dot = cameraPos.clone().sub(facePos).normalize().dot(this.getFaceNormal(i).applyQuaternion(this.group.quaternion));
        fg.mesh.visible = (dot > 0.1); 
    });

    // 2. SOVEREIGN COMPASS LABELS (GREEN-AXIS CONSTRAINED)
    this.labelMeshes.forEach(label => {
        if (!label.parent) return; 
        
        // 1. Get the world Normal vector (Green Axis)
        const worldNormal = new THREE.Vector3(0, 1, 0)
            .applyQuaternion(label.parent.quaternion)
            .applyQuaternion(this.group.quaternion);
            
        // 2. Project world UP onto the face plane
        const projectedUp = worldUp.clone().projectOnPlane(worldNormal).normalize();
        
        // 3. Skip stability-risky angles (top/bottom)
        if (Math.abs(worldNormal.y) < 0.95 && projectedUp.length() > 0.1) {
            // Get label's current world orientation 
            const labelWorldQuat = label.getWorldQuaternion(new THREE.Quaternion());
            const invLabelWorldQuat = labelWorldQuat.clone().invert();
            
            // Project world UP into label local space
            const localUpAtTarget = projectedUp.clone().applyQuaternion(invLabelWorldQuat);
            
            // 4. Calculate the angle required to point local UP (Y) to world UP
            const angleDelta = Math.atan2(localUpAtTarget.x, localUpAtTarget.y);
            
            // 5. SOVEREIGN SETTLE: Damped compass drift (0.05 for stability)
            label.rotation.z -= angleDelta * 0.05; 
        }
    });
  }

  // Helper to remove ribbon-specific labels from focus/compass
  removeLabels(meshes) {
    if (!meshes || meshes.length === 0) return;
    this.labelMeshes = this.labelMeshes.filter(m => !meshes.includes(m));
  }

  getNeighborCells(cell) {
    const { f, u, v } = cell;
    const neighbors = [];
    if (u > 0) neighbors.push({ f, u: u - 1, v });
    if (u < this.size - 1) neighbors.push({ f, u: u + 1, v });
    if (v > 0) neighbors.push({ f, u, v: v - 1 });
    if (v < this.size - 1) neighbors.push({ f, u, v: v + 1 });
    if (u === 0) neighbors.push(this.getCrossFaceNeighbor(f, 'left', v));
    if (u === this.size - 1) neighbors.push(this.getCrossFaceNeighbor(f, 'right', v));
    if (v === 0) neighbors.push(this.getCrossFaceNeighbor(f, 'bottom', u));
    if (v === this.size - 1) neighbors.push(this.getCrossFaceNeighbor(f, 'top', u));
    return neighbors.filter(n => n !== null);
  }

  getCrossFaceNeighbor(f, edge, index) {
    const s = this.size - 1;
    const map = {
      0: { left: [3,s,index], right: [2,0,index], top: [4,index,0], bottom: [5,index,s] },
      1: { left: [2,s,index], right: [3,0,index], top: [4,s-index,s], bottom: [5,s-index,0] },
      2: { left: [0,s,index], right: [1,0,index], top: [4,s,index], bottom: [5,s,s-index] },
      3: { left: [1,s,index], right: [0,0,index], top: [4,0,s-index], bottom: [5,0,index] },
      4: { left: [3,s-index,s], right: [2,index,s], top: [1,s-index,s], bottom: [0,index,s] },
      5: { left: [3,index,0], right: [2,s-index,0], top: [0,index,0], bottom: [1,s-index,0] },
    };
    const res = map[f][edge];
    return { f: res[0], u: res[1], v: res[2] };
  }
}
