// Importa los componentes necesarios de la librería @react-three/drei.
// 'Html' permite renderizar elementos HTML dentro del canvas de Three.js.
// 'useProgress' es un hook que proporciona el estado de carga de los recursos.
import { Html, useProgress } from '@react-three/drei';
import React from 'react';

// Define un componente funcional llamado CanvasLoader.
// Este componente se encarga de mostrar un indicador de carga mientras
// los recursos del canvas 3D se están cargando.
const CanvasLoader: React.FC = () => {
  // Utiliza el hook useProgress para obtener el progreso de la carga.
  // 'progress' es un número entre 0 y 100 que representa el porcentaje de carga.
  // Se desestructura directamente para acceder a la propiedad 'progress'.
  const { progress } = useProgress();

  // El componente retorna un elemento Html.
  // 'as="div"' especifica que el elemento HTML subyacente será un div.
  // 'center' es una prop de @react-three/drei que centra el contenido del Html.
  // 'style' define los estilos CSS para centrar y organizar el contenido verticalmente.
  //
  // Condición: Solo renderizamos este componente si 'progress' es menor que 100.
  // Esto asegura que el loader desaparezca automáticamente cuando la carga esté completa.
  return progress < 100 ? (
    <Html
      as='div'
      center // Centra el contenido del Html en el lienzo 3D.
      style={{
        display: 'flex', // Usa Flexbox para el layout del contenido.
        justifyContent: 'center', // Centra el contenido horizontalmente.
        alignItems: 'center', // Centra el contenido verticalmente.
        flexDirection: 'column', // Organiza los elementos hijos en una columna vertical.
      }}
    >
      {/* Un elemento span con la clase 'canvas-loader'.
          Se asume que esta clase está definida en CSS (ej. en App.css)
          para animar o estilizar un spinner de carga. */}
      <span className='canvas-loader' />

      {/* Un párrafo que muestra el porcentaje de carga. */}
      <p
        style={{
          fontSize: 14, // Tamaño de fuente del texto.
          color: '#F1F1F1', // Color del texto (un gris claro).
          fontWeight: 800, // Grosor de la fuente (negrita).
          marginTop: 40, // Margen superior para separar el texto del spinner.
        }}
      >
        {/* Muestra el valor de 'progress', formateado a dos decimales, seguido del símbolo de porcentaje.
            toFixed(2) asegura que siempre se muestren dos decimales (ej: 75.00%). */}
        {progress.toFixed(2)}%
      </p>
    </Html>
  ) : null; // Si progress es 100 o más, no renderiza nada (el loader desaparece).
}

export default CanvasLoader;