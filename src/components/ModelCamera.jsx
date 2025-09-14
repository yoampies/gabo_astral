// Importa los hooks necesarios de React y @react-three/fiber, y la utilidad 'easing' de 'maath'.
import { useRef } from "react"; // useRef se usa para crear referencias mutables que persisten entre renders.
import { useFrame } from "@react-three/fiber"; // useFrame es un hook que permite ejecutar código en cada frame del renderizado.
import { easing } from 'maath'; // 'easing' proporciona funciones de interpolación suavizada para animaciones.

// Define un componente funcional llamado ModelCamera.
// Recibe 'children' (elementos que se renderizarán dentro del grupo) e 'isMobile' (un booleano para detectar si es un dispositivo móvil).
export default function ModelCamera({ children, isMobile }) {
    // Crea una referencia mutable 'groupRef' usando useRef. Esta referencia se adjuntará al elemento <group>.
    const groupRef = useRef();

    // Utiliza el hook useFrame para ejecutar una función en cada frame del ciclo de renderizado de la escena 3D.
    // 'state' contiene el estado actual de la escena (cámara, puntero, etc.), y 'delta' es el tiempo transcurrido desde el último frame.
    useFrame((state, delta) => {
        // Suaviza la posición de la cámara a [0, 0, 30] a lo largo del tiempo.
        // 'easing.damp3' interpola suavemente un vector 3D.
        // - 'state.camera.position': El vector de posición actual de la cámara.
        // - '[0, 0, 30]': El vector de posición objetivo.
        // - '0.25': El factor de amortiguación (más bajo = más lento).
        // - 'delta': El tiempo transcurrido, crucial para animaciones independientes de la tasa de frames.
        easing.damp3(state.camera.position, [0, 0, 30], 0.25, delta);

        // Comprueba si NO es un dispositivo móvil.
        if (!isMobile) {
            // Si no es móvil, aplica una rotación suave al grupo basado en la posición del puntero.
            // 'easing.dampE' interpola suavemente un ángulo (rotación).
            // - 'groupRef.current.rotation': El objeto de rotación actual del grupo.
            // - '[state.pointer.y/8, -state.pointer.x/5, 0]': Los valores objetivo de rotación en los ejes X, Y y Z.
            //   - 'state.pointer.y/8': La posición vertical del puntero (dividida para reducir la sensibilidad).
            //   - '-state.pointer.x/5': La posición horizontal del puntero (negada y dividida para invertir y reducir la sensibilidad).
            //   - '0': Rotación en Z se mantiene en 0.
            // - '0.25': El factor de amortiguación.
            // - 'delta': El tiempo transcurrido.
            easing.dampE(groupRef.current.rotation, [state.pointer.y / 8, -state.pointer.x / 5, 0], 0.25, delta);
        }
    });

    // Renderiza un elemento <group> de @react-three/fiber.
    // Adjunta la referencia 'groupRef' a este grupo.
    // Renderiza los 'children' (elementos hijos) dentro de este grupo.
    return (
        <group ref={groupRef}>{children}</group>
    );
}