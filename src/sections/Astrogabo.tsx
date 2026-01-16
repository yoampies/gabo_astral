import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Avatar from '../components/Avatar';
import { OrbitControls, PerspectiveCamera, Preload } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';

import astrology from '../assets/astrology.webp';
import love from '../assets/love.webp';
import travel from '../assets/travel.webp';
import tarot from '../assets/tarot.webp';

const Astrogabo: React.FC = () => {
  return (
    <div className="w-11/12 lg:w-9/12 mx-auto bg-[#1c1c3a] rounded-lg min-h-[500px] mt-6 overflow-hidden">
      <div className="flex flex-col lg:grid lg:grid-cols-5 gap-2">
        {/* Sección Avatar 3D */}
        <div className="col-span-2 mt-0 lg:mt-6 ml-0 lg:ml-2 rounded-lg h-[300px] lg:h-[450px] w-full">
          <Canvas
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true, antialias: true }}
            shadows
            className="rounded-t-lg lg:rounded-lg"
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
                position={[0, -4.5, -1.1]}
                rotation={[0.2, 0.5, 0]}
              />
              <Preload all />
            </Suspense>

            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        {/* Sección Texto e Iconos */}
        <div className="col-span-3 bg-gray-200 h-auto lg:h-[500px] rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none p-6 lg:p-0">
          <h1 className="text-gray-500 text-lg text-center mt-4 lg:mt-10 mb-6">
            Soy <span className="font-semibold">Gabriel Ampíes</span>
          </h1>
          <hr className="bg-gray-400 border-0 h-px my-2 w-10/12 mx-auto" />

          <p className="text-gray-500 text-sm lg:text-md text-justify lg:text-center mx-2 lg:mx-10 mt-6 leading-7">
            A través de mi trabajo, he visto cómo esta antigua sabiduría puede
            transformar vidas. Si te sientes estancado, perdido o simplemente
            buscas un nuevo rumbo, la astrología puede ser tu guía. Al analizar
            tu carta natal, identificaremos los patrones energéticos que
            influyen en tu vida y te proporcionaremos las herramientas
            necesarias para superar obstáculos y alcanzar tus metas.
          </p>

          {/* Iconos: Grid 2x2 en móvil para evitar overflow */}
          <div className="mt-8 mb-4 grid grid-cols-2 gap-6 lg:flex lg:justify-between mx-4 lg:mx-12">
            <div className="flex flex-col gap-2 items-center">
              <img src={love} className="size-12 lg:size-16" alt="Sinastrías" />
              <p className="text-gray-500 font-semibold text-sm">Sinastrías</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <img src={tarot} className="size-12 lg:size-16" alt="Tarot" />
              <p className="text-gray-500 font-semibold text-center text-sm">
                Tarot
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <img
                src={travel}
                className="size-12 lg:size-16"
                alt="Geo-astrología"
              />
              <p className="text-gray-500 font-semibold text-sm">
                Geo-astrología
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <img
                src={astrology}
                className="size-12 lg:size-16"
                alt="Carta Natal"
              />
              <p className="text-gray-500 font-semibold text-sm">Carta Natal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Astrogabo;
