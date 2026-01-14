import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { IModelProps } from '../types';
import * as THREE from 'three';

const MODEL_PATH = '/models/scene.glb';

const Model: React.FC<IModelProps> = (props) => {
  const gltf = useGLTF(MODEL_PATH, true);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gltf.scene.traverse((child: any) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        const matName = (mesh.material as THREE.Material).name || '';
        if (
          matName.includes('Hair') ||
          matName.includes('leaf') ||
          matName.includes('tree')
        ) {
          mesh.castShadow = false;
        }
      }
    });
  }, [gltf]);

  return (
    <group {...props} dispose={null}>
      <group position={[27.796, -250, -1800]} scale={1.757}>
        <primitive object={gltf.scene} />
      </group>
    </group>
  );
};

// Pre-cargamos el modelo para que esté listo antes de renderizar
useGLTF.preload(MODEL_PATH, true);

export default Model;
