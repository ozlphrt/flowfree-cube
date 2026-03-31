import * as THREE from 'three';

export class CubeGrid {
  constructor(scene, size = 9, cellSize = 1.0) {
    this.scene = scene;
    this.size = size;
    this.cellSize = cellSize;
    
    this.group = new THREE.Group();
    // The visual scale of the whole cube is size * cellSize
    this.halfExtents = (this.size * this.cellSize) / 2;

    this.cells = [];
    this.initVisuals();

    // Center the group
    this.scene.add(this.group);
  }

  initVisuals() {
    // 1. Core Cube (the solid block underneath) - UPGRADED TO PHYSICAL GLASS
    const coreSize = this.size * this.cellSize; 
    const coreGeo = new THREE.BoxGeometry(coreSize, coreSize, coreSize);
    const coreMat = new THREE.MeshPhysicalMaterial({ 
      color: 0xcccccc,    // Lighter base for glassmorphism
      metalness: 0.1,
      roughness: 0.45,    // FROSTED effect
      transmission: 0.95, // High transparency
      thickness: 1.0,     // Solid block feel
      ior: 1.45,          // Clearer refraction
      transparent: true,
      opacity: 1,
      reflectivity: 0.8,
      attenuationColor: new THREE.Color(0xffffff), 
      attenuationDistance: 8.0, // Let more light in so it's not pitch black
    });
    this.coreMesh = new THREE.Mesh(coreGeo, coreMat);
    this.group.add(this.coreMesh);

    // 1.1 Add a solid outer wireframe for the cube border
    const outerEdges = new THREE.EdgesGeometry(coreGeo);
    const outerMat = new THREE.LineBasicMaterial({ color: 0x333333, linewidth: 2 });
    const outerWireframe = new THREE.LineSegments(outerEdges, outerMat);
    this.group.add(outerWireframe);

    // 2. The 6 Faces Grids
    const faces = [
      { normal: new THREE.Vector3(0, 0, 1), uAxis: 'x', vAxis: 'y' }, // Front
      { normal: new THREE.Vector3(0, 0, -1), uAxis: 'x', vAxis: 'y' }, // Back
      { normal: new THREE.Vector3(1, 0, 0), uAxis: 'z', vAxis: 'y' }, // Right
      { normal: new THREE.Vector3(-1, 0, 0), uAxis: 'z', vAxis: 'y' }, // Left
      { normal: new THREE.Vector3(0, 1, 0), uAxis: 'x', vAxis: 'z' }, // Top
      { normal: new THREE.Vector3(0, -1, 0), uAxis: 'x', vAxis: 'z' }  // Bottom
    ];

    const cellGeo = new THREE.PlaneGeometry(this.cellSize, this.cellSize);
    const cellMat = new THREE.MeshBasicMaterial({ 
      visible: false // KEEP INVISIBLE to solve Z-fighting and sorting
    });

    // Create a thinner line material for internal grid lines
    const edgeGeo = new THREE.EdgesGeometry(cellGeo);
    const edgeMat = new THREE.LineBasicMaterial({ color: 0x1a1a1a, transparent: true, opacity: 0.5 });

    faces.forEach((face, faceIndex) => {
      for (let u = 0; u < this.size; u++) {
        for (let v = 0; v < this.size; v++) {
          
          const mesh = new THREE.Mesh(cellGeo, cellMat);
          // Set user data for raypicking (u,v,faceIndex)
          mesh.userData = { faceIndex, u, v, normal: face.normal };

          // Clone material so we can highlight individual cells
          mesh.material = cellMat.clone();

          const lines = new THREE.LineSegments(edgeGeo, edgeMat);
          mesh.add(lines);

          // Calculate position
          // Offset to center of cells
          const uOffset = (u - this.size / 2 + 0.5) * this.cellSize;
          const vOffset = (v - this.size / 2 + 0.5) * this.cellSize;

          mesh.position.copy(face.normal).multiplyScalar(this.halfExtents);
          
          if (face.normal.z !== 0) {
            mesh.position.x = face.normal.z > 0 ? uOffset : -uOffset;
            mesh.position.y = vOffset;
            mesh.lookAt(mesh.position.clone().add(face.normal));
          } else if (face.normal.x !== 0) {
            mesh.position.z = face.normal.x > 0 ? -uOffset : uOffset;
            mesh.position.y = vOffset;
            mesh.lookAt(mesh.position.clone().add(face.normal));
          } else if (face.normal.y !== 0) {
            mesh.position.x = uOffset;
            mesh.position.z = face.normal.y > 0 ? -vOffset : vOffset;
            // lookAt for Y normals sometimes needs specific up vector handling to align nicely
            mesh.lookAt(mesh.position.clone().add(face.normal));
          }

          mesh.receiveShadow = true;
          this.group.add(mesh);
          this.cells.push({ faceIndex, u, v, mesh: mesh });
        }
      }
    });

    // To add soft shadows and visually separate cube
    this.group.castShadow = true;
  }

  getCell(faceIndex, u, v) {
    return this.cells.find(c => c.faceIndex === faceIndex && c.u === u && c.v === v);
  }

  getFaceNormal(faceIndex) {
    const faces = [
      new THREE.Vector3(0, 0, 1),  // Front
      new THREE.Vector3(0, 0, -1), // Back
      new THREE.Vector3(1, 0, 0),  // Right
      new THREE.Vector3(-1, 0, 0), // Left
      new THREE.Vector3(0, 1, 0),  // Top
      new THREE.Vector3(0, -1, 0)  // Bottom
    ];
    return faces[faceIndex].clone();
  }

  getCellPosition(faceIndex, u, v) {
    const normal = this.getFaceNormal(faceIndex);
    const uOffset = (u - this.size / 2 + 0.5) * this.cellSize;
    const vOffset = (v - this.size / 2 + 0.5) * this.cellSize;

    const pos = normal.clone().multiplyScalar(this.halfExtents);
    
    if (normal.z !== 0) {
      pos.x = normal.z > 0 ? uOffset : -uOffset;
      pos.y = vOffset;
    } else if (normal.x !== 0) {
      pos.z = normal.x > 0 ? -uOffset : uOffset;
      pos.y = vOffset;
    } else if (normal.y !== 0) {
      pos.x = uOffset;
      pos.z = normal.y > 0 ? -vOffset : vOffset;
    }
    return pos;
  }

  addPlate(faceIndex, u, v, color) {
    const pos = this.getCellPosition(faceIndex, u, v);
    const normal = this.getFaceNormal(faceIndex);
    
    // 2D Circle Disc for a clean surface look
    const plateGeo = new THREE.CircleGeometry(this.cellSize * 0.4, 32);
    const plateMat = new THREE.MeshStandardMaterial({ 
      color: color, 
      roughness: 0.8, 
      metalness: 0.1,
      emissive: new THREE.Color(color),
      emissiveIntensity: 0.4,
      transparent: true,
      side: THREE.DoubleSide // Ensure it's visible if oriented slightly off
    });
    const mesh = new THREE.Mesh(plateGeo, plateMat);
    
    // High offset (0.15) and renderOrder to prevent glass refraction blurring
    mesh.position.copy(pos).add(normal.clone().multiplyScalar(0.15));
    mesh.renderOrder = 20; // Force it on top of the glass
    mesh.material.depthWrite = true; 
    
    // 1. Orient the disc to be UPRIGHT on its face
    const upVectors = [
      new THREE.Vector3(0, 1, 0),  // Front (Z+)
      new THREE.Vector3(0, 1, 0),  // Back (Z-)
      new THREE.Vector3(0, 1, 0),  // Right (X+)
      new THREE.Vector3(0, 1, 0),  // Left (X-)
      new THREE.Vector3(0, 0, -1), // Top (Y+)
      new THREE.Vector3(0, 0, 1)   // Bottom (Y-)
    ];
    mesh.up.copy(upVectors[faceIndex]);
    mesh.lookAt(mesh.position.clone().add(normal));

    this.group.add(mesh);
    return mesh;
  }

  update() {
    // E.g. subtle idle animation if needed
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
