// Librerías necesarias para la aplicación:
// - Canvas de '@react-three/fiber': El componente principal para renderizar escenas 3D.
// - PerspectiveCamera de '@react-three/drei': Define la cámara con perspectiva para la escena 3D.
// - useMediaQuery de 'react-responsive': Hook para detectar si la pantalla cumple con ciertos criterios de medios (ej. ancho máximo).
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing';
import { PerspectiveCamera } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';

// Componentes personalizados importados:
// - Model: Representa el modelo 3D que se mostrará en la escena.
// - ModelCamera: Un componente contenedor que maneja la lógica de la cámara en relación con el modelo.
// - CanvasLoader: Componente que muestra un indicador de carga mientras la escena 3D se está inicializando.
import Model from '../components/Model.tsx';
import ModelCamera from '../components/ModelCamera';
import CanvasLoader from '../components/CanvasLoader';
import Star from '../components/Star.tsx';

import React from 'react';

// Definición del componente funcional 'Dashboard'.
// Este componente es responsable de configurar y renderizar la escena 3D principal.
const Dashboard: React.FC = () => {
  // Se utiliza el hook useMediaQuery para determinar si la vista es en un dispositivo móvil
  // (o una pantalla con un ancho máximo de 800px).
  const isMobile = useMediaQuery({ maxWidth: 800 });
  const generateStarPosition = (count: number, range:number) => {
    const positions = [];
    while(positions.length < count) {
      const x = (Math.random() - 0.5) * range;
      const y = (Math.random() - 0.5) * range;
      const z = (Math.random() * 6.125) + 14;

      const xIsExcluded = x >= -3 && x <= 3;
      const yIsExcluded = y >= -4 && y <= 4;

      const isExcluded = xIsExcluded && yIsExcluded;

      if (!isExcluded) {
        positions.push([x, y, z] as [number, number, number]);
      }
    }
    return positions;
  }

  const starPositions = generateStarPosition(300, 20);

  // El componente retorna una estructura JSX que contiene la escena 3D.
  return (
    // Div principal que actúa como contenedor para el dashboard.
    // Se le asignan clases de Tailwind CSS para ocupar todo el ancho y la altura mínima de la pantalla,
    // y se le da un ID para posible referencia.
    <div className="w-full min-h-screen inset-0" id="dashboard">
      {/* Div interno que posiciona el contenido de la escena 3D de forma absoluta
            para que ocupe todo el espacio disponible dentro del contenedor padre. */}
      <div className="w-full h-full absolute">
        {/* Componente Canvas de react-three-fiber que inicializa la escena 3D.
            - className="min-h-screen": Asegura que el canvas ocupe al menos la altura completa de la pantalla.
            - id="canvasID": Un ID para el canvas, útil para selectores CSS o JavaScript.
            - background="#000000": Establece el color de fondo de la escena 3D a negro. */}
        <Canvas className="min-h-screen" id="canvasID">
          <color attach="background" args={['#000000']} />
          {/* **El CanvasLoader DEBE estar DENTRO del componente Canvas** para que useProgress funcione correctamente. */}
          <CanvasLoader />

          {/* Configura la cámara de perspectiva para la escena.
            - makeDefault: La establece como la cámara principal de la escena.
           - position={[0, 0, 30]}: La ubica en el eje Z a una distancia de 30 unidades.
            - near={1}, far={1000}: Define el rango de visión de la cámara (objetos más cerca de 1 o más lejos de 1000 no serán visibles). */}
          <PerspectiveCamera makeDefault position={[0, 0, 30]} near={1} far={1000} />
          {/* Utiliza el componente ModelCamera para envolver la lógica de la cámara y el modelo.
            - isMobile={isMobile}: Le pasa la información sobre si se está viendo en un dispositivo móvil. */}
          <EffectComposer>
            <ToneMapping />
            <Bloom 
              mipmapBlur
              intensity={5.0}
              luminanceThreshold={0.9}
              luminanceSmoothing={0.15}
            />
            <>
              {starPositions.map((position, index) => (
                <Star 
                    key={index} // Se necesita una clave única para la lista
                    position={position} // Aquí 'position' es el array [x, y, z]
                />
              ))}
            </>
            <ModelCamera isMobile={isMobile}>
              {/* Renderiza el componente Model.
                - scale={0.01}: Escala el modelo a un tamaño pequeño.
                - position={[0, -1, 9]}: Lo posiciona en la escena (ligeramente por debajo del origen en Y y hacia adelante en Z). */}
              <Model scale={0.01} position={[0, -1, 9]} />
            </ModelCamera>
          </EffectComposer>
        </Canvas>
      </div>
    </div>
  );
}

export default Dashboard;