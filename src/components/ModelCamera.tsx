// Importa los hooks necesarios de React y @react-three/fiber, y la utilidad 'easing' de 'maath'.
import { useRef } from 'react'; // useRef se usa para crear referencias mutables que persisten entre renders.
import { useFrame } from '@react-three/fiber'; // useFrame es un hook que permite ejecutar código en cada frame del renderizado.
import { easing } from 'maath'; // 'easing' proporciona funciones de interpolación suavizada para animaciones.
import { IModelCameraProps } from '../types';
import { Group } from 'three';

// Define un componente funcional llamado ModelCamera.
// Recibe 'children' (elementos que se renderizarán dentro del grupo) e 'isMobile' (un booleano para detectar si es un dispositivo móvil).
const ModelCamera: React.FC<IModelCameraProps> = ({ isMobile, children }) => {
  // Crea una referencia mutable 'groupRef' usando useRef. Esta referencia se adjuntará al elemento <group>.
  const groupRef = useRef<Group | null>(null);

  // Utiliza el hook useFrame para ejecutar una función en cada frame del ciclo de renderizado de la escena 3D.
  // 'state' contiene el estado actual de la escena (cámara, puntero, etc.), y 'delta' es el tiempo transcurrido desde el último frame.
  useFrame((state, delta) => {
    const targetZ = isMobile ? 35 : 30;
    easing.damp3(state.camera.position, [0, 0, targetZ], 0.25, delta);

    if (!isMobile) {
      // Lógica para Escritorio: Seguimiento del puntero
      if (groupRef.current !== null) {
        easing.dampE(
          groupRef.current.rotation,
          [state.pointer.y / 8, -state.pointer.x / 5, 0],
          0.25,
          delta
        );
      }
    } else {
      // Lógica para Móvil: Animación automática sutil
      if (groupRef.current) {
        easing.dampE(groupRef.current.rotation, [0, 0, 0], 0.25, delta);
      }
    }
  });

  // Renderiza un elemento <group> de @react-three/fiber.
  // Adjunta la referencia 'groupRef' a este grupo.
  // Renderiza los 'children' (elementos hijos) dentro de este grupo.
  return <group ref={groupRef}>{children}</group>;
};

export default ModelCamera;
