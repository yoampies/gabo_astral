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
import StarInteractionManager from '../components/StarInteractionManager.tsx';

const Model = lazy(() => import('../components/Model.tsx'));

const generateStarPosition = (count: number, range: number) => {
  const positions = [];
  while (positions.length < count) {
    const x = (Math.random() - 0.5) * range;
    const y = (Math.random() - 0.5) * range;
    const z = Math.random() * 6.125 + 14;

    const xIsExcluded = x >= -3 && x <= 3;
    const yIsExcluded = y >= -4 && y <= 4;

    if (!(xIsExcluded && yIsExcluded)) {
      positions.push([x, y, z] as [number, number, number]);
    }
  }
  return positions;
};

const Dashboard: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  const modelScale = isMobile ? 0.008 : 0.01;
  const modelPosition = isMobile ? [0, -2, 9] : [0, -1, 9];

  const starPositions = useMemo(
    () => generateStarPosition(isMobile ? 150 : 300, 20),
    [isMobile]
  );

  return (
    <div className="w-full min-h-screen inset-0" id="dashboard">
      <div className="w-full h-full absolute">
        <Canvas className="min-h-screen" id="canvasID" dpr={[1, 2]}>
          <color attach="background" args={['#000000']} />

          <PerspectiveCamera
            makeDefault
            position={[0, 0, 30]}
            near={1}
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
                intensity={5.0}
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
