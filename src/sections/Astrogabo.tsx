import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Avatar from '../components/Avatar';
import { OrbitControls, PerspectiveCamera, Preload } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';

import astrology from '../assets/astrology.png';
import love from '../assets/love.png';
import travel from '../assets/travel.png';
import tarot from '../assets/tarot.png';

const Astrogabo: React.FC = () => {
  return (
    <div className="w-9/12 mx-auto bg-[#1c1c3a] rounded-lg min-h-[500px] mt-6">
      <div className="grid grid-cols-5 gap-2">
        <div className="col-span-2 mt-6 ml-2 rounded-lg h-[450px]">
          <Canvas
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true, antialias: true }}
            shadows
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 5, 5]} intensity={2} />
            <directionalLight position={[-5, 5, 5]} intensity={2} />

            <PerspectiveCamera
              makeDefault
              position={[0, 0, 10]}
              near={1}
              far={1000}
            />

            <Suspense fallback={<CanvasLoader />}>
              <Avatar
                scale={4.3}
                position={[0, -4, -1.1]}
                rotation={[0.2, 0.5, 0]}
              />

              <Preload all />
            </Suspense>

            <OrbitControls enableZoom={true} />
          </Canvas>
        </div>

        <div className="col-span-3 bg-gray-200 h-[500px] rounded-r-lg">
          <h1 className="text-gray-500 text-lg text-center mt-10 mb-6">
            Soy <span className="font-semibold">Gabriel Ampíes</span>
          </h1>
          <hr className="bg-gray-400 border-0 h-px my-2 w-10/12 mx-auto" />

          <p className="text-gray-500 text-md text-center mx-10 mt-6 leading-7">
            A través de mi trabajo, he visto cómo esta antigua sabiduría puede
            transformar vidas. Si te sientes estancado, perdido o simplemente
            buscas un nuevo rumbo, la astrología puede ser tu guía. Al analizar
            tu carta natal, identificaremos los patrones energéticos que
            influyen en tu vida y te proporcionaremos las herramientas
            necesarias para superar obstáculos y alcanzar tus metas. Te
            acompañaré en este proceso de transformación, brindándote claridad,
            comprensión y empoderamiento.
          </p>

          <div className="mt-6 flex justify-between mx-12">
            <div className="flex flex-col gap-2">
              <img src={love} className="size-16 mx-auto" alt="Sinastrías" />
              <p className="text-gray-500 font-semibold">Sinastrías</p>
            </div>
            <div className="flex flex-col gap-2">
              <img src={tarot} className="size-16 mx-auto" alt="Tarot" />
              <p className="text-gray-500 font-semibold text-center">Tarot</p>
            </div>
            <div className="flex flex-col gap-2">
              <img
                src={travel}
                className="size-16 mx-auto"
                alt="Geo-astrología"
              />
              <p className="text-gray-500 font-semibold">Geo-astrología</p>
            </div>
            <div className="flex flex-col gap-2">
              <img
                src={astrology}
                className="size-16 mx-auto"
                alt="Carta Natal"
              />
              <p className="text-gray-500 font-semibold">Carta Natal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Astrogabo;
