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

// Quitamos la extensión .tsx del import para seguir buenas prácticas
const Model = lazy(() => import('../components/Model'));

const generateStarPosition = (count: number, range: number) => {
  const positions = [];
  let safetyCheck = 0;

  // PARÁMETROS DEL MODELO (Coinciden con tu Model.tsx)
  const modelX = 3;
  const modelY = 250;
  const modelZ = -700;
  const cameraZ = 35;

  while (positions.length < count && safetyCheck < count * 10) {
    safetyCheck++;

    const spread = range * 3.5;
    const gaussianX = Math.random() + Math.random() - 1;
    const gaussianY = Math.random() + Math.random() - 1;

    const x = gaussianX * spread;
    const y = gaussianY * (spread * 1.2) + 75;
    const z = Math.random() * -80 - 20;

    // [CÁLCULO DE PROYECCIÓN 3D]
    const t = (cameraZ - z) / (cameraZ - modelZ);

    const projectedModelX = (1 - t) * 0 + t * modelX;
    const projectedModelY = (1 - t) * 0 + t * modelY;

    const holeWidth = 25 * t * 5;
    const holeHeight = 40 * t * 5;

    const insideBoxX = Math.abs(x - projectedModelX) < holeWidth / 2;
    const insideBoxY = Math.abs(y - projectedModelY) < holeHeight / 2;

    if (insideBoxX && insideBoxY) {
      continue;
    }

    positions.push([x, y, z] as [number, number, number]);
  }
  return positions;
};

const Dashboard: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const modelScale = 1;
  const modelPosition = isMobile ? [0, -4, 0] : [0, -3.5, 0];

  const starPositions = useMemo(
    () => generateStarPosition(isMobile ? 350 : 700, 40),
    [isMobile]
  );

  return (
    <div className="w-full min-h-screen inset-0" id="dashboard">
      <div className="w-full h-full absolute">
        <Canvas
          className="min-h-screen"
          id="canvasID"
          dpr={isMobile ? [1, 1] : [1, 2]}
          shadows={!isMobile}
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
                isMobile={isMobile}
                scale={modelScale}
                position={modelPosition as [number, number, number]}
              />
              <Preload all />
            </Suspense>
          </ModelCamera>

          {!isMobile && (
            // CORRECCIÓN AQUÍ: Usamos enableNormalPass={false}
            <EffectComposer enableNormalPass={false}>
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
