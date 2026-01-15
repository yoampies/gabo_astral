import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { IModelProps } from '../types';

const MODEL_PATH = '/models/scene.glb';

// Extendemos props para recibir isMobile
interface ExtendedModelProps extends IModelProps {
  isMobile?: boolean;
}

const Model: React.FC<ExtendedModelProps> = ({ isMobile, ...props }) => {
  const gltf = useGLTF(MODEL_PATH, true);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gltf.scene.traverse((child: any) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;

        // [OPTIMIZACIÓN SUPREMA]
        // En móvil: MATAMOS LAS SOMBRAS. Cero cálculo.
        if (isMobile) {
          mesh.castShadow = false;
          mesh.receiveShadow = false;
        } else {
          // En Desktop: Lógica normal
          mesh.castShadow = true;
          mesh.receiveShadow = true;

          const material = mesh.material as THREE.Material;
          if (material && material.name) {
            const name = material.name.toLowerCase();
            // Optimizaciones específicas de desktop
            if (
              name.includes('hair') ||
              name.includes('leaf') ||
              name.includes('tree')
            ) {
              mesh.castShadow = false;
            }
          }
        }
      }
    });
  }, [gltf, isMobile]);

  return (
    <group {...props} dispose={null}>
      {/* Posición original mantenida como pediste.
         La optimización es puramente interna (sombras/rendering).
      */}
      <group position={[3, 220, -700]} scale={0.16} rotation={[0.2, 0, 0]}>
        <primitive object={gltf.scene} />
      </group>
    </group>
  );
};

useGLTF.preload(MODEL_PATH, true);

export default Model;
