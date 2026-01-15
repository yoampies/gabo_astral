import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { IModelProps } from '../types';

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

        const material = mesh.material as THREE.Material;
        if (material && material.name) {
          const name = material.name.toLowerCase();
          if (
            name.includes('hair') ||
            name.includes('leaf') ||
            name.includes('tree')
          ) {
            mesh.castShadow = false;
          }
        }
      }
    });
  }, [gltf]);

  return (
    <group {...props} dispose={null}>
      {/* CORRECCIÓN DE PIVOTE:
         Movemos la geometría interna para compensar su desfase original.
         - Position Y=70: "Levanta" el modelo para que sus pies/centro coincidan con el 0 del grupo.
         - Position X=3: Centrado horizontal.
         - Position Z=0: CRÍTICO. Tiene que estar en 0 para que rote sobre su eje.
      */}
      <group position={[3, 250, -700]} scale={0.15} rotation={[0.3, 0, 0]}>
        <primitive object={gltf.scene} />
      </group>
    </group>
  );
};

useGLTF.preload(MODEL_PATH, true);

export default Model;
