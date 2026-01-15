import { Canvas } from '@react-three/fiber';
import {
  EffectComposer,
  Bloom,
  ToneMapping,
} from '@react-three/postprocessing';
import { PerspectiveCamera, Preload } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import React, { useMemo, Suspense, lazy } from 'react';
import ModelCamera from '../components/ModelCamera';
import CanvasLoader from '../components/CanvasLoader';
import StarInteractionManager from '../components/StarInteractionManager';

const Model = lazy(() => import('../components/Model.tsx'));

const generateStarPosition = (count: number, range: number) => {
  const positions = [];
  let safetyCheck = 0;

  while (positions.length < count && safetyCheck < count * 10) {
    safetyCheck++;

    // 1. Reducimos ligeramente el spread para aumentar la densidad general
    const spread = range * 3.5;

    // 2. FUNCIÓN DE CONCENTRACIÓN (Distribución Triangular/Gaussiana)
    // Al sumar dos randoms, los resultados se agrupan en el centro (0).
    // Esto crea el efecto de "cúmulo" denso alrededor del avatar.
    const gaussianX = Math.random() + Math.random() - 1;
    const gaussianY = Math.random() + Math.random() - 1;

    const x = gaussianX * spread;

    // 3. CENTRADO PERFECTO
    // Usamos el gaussianY y lo centramos en +45 (la misma altura que tu exclusionCenterY).
    const y = gaussianY * (spread * 1.2) + 45;

    const z = Math.random() * -80 - 20;

    // Zona de exclusión (Hueco)
    const exclusionWidth = 25;
    const exclusionHeight = 40;
    const exclusionCenterX = 0;
    const exclusionCenterY = 45;

    const insideBoxX =
      x > exclusionCenterX - exclusionWidth / 2 &&
      x < exclusionCenterX + exclusionWidth / 2;
    const insideBoxY =
      y > exclusionCenterY - exclusionHeight / 2 &&
      y < exclusionCenterY + exclusionHeight / 2;

    if (insideBoxX && insideBoxY) {
      continue;
    }

    positions.push([x, y, z] as [number, number, number]);
  }
  return positions;
};

const Dashboard: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  const modelScale = 1;
  const modelPosition = isMobile ? [0, -4, 0] : [0, -3.5, 0];

  const starPositions = useMemo(
    // Aumentamos a 700 para que el efecto de concentración sea espectacular
    () => generateStarPosition(isMobile ? 350 : 700, 40),
    [isMobile]
  );

  return (
    <div className="w-full min-h-screen inset-0" id="dashboard">
      <div className="w-full h-full absolute">
        <Canvas
          className="min-h-screen"
          id="canvasID"
          dpr={isMobile ? [1, 1.5] : [1, 2]}
        >
          <color attach="background" args={['#000000']} />

          <PerspectiveCamera
            makeDefault
            position={[0, 0, 35]}
            fov={60}
            near={0.1}
            far={1000}
          />

          <StarInteractionManager starPositions={starPositions} />

          <ModelCamera isMobile={isMobile}>
            <Suspense fallback={<CanvasLoader />}>
              <Model
                scale={modelScale}
                position={modelPosition as [number, number, number]}
              />
              <Preload all />
            </Suspense>
          </ModelCamera>

          {!isMobile && (
            <EffectComposer>
              <ToneMapping />
              <Bloom
                mipmapBlur
                intensity={1.2}
                luminanceThreshold={0.9}
                luminanceSmoothing={0.15}
              />
            </EffectComposer>
          )}
        </Canvas>
      </div>
    </div>
  );
};

export default Dashboard;
