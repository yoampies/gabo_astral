// Importa React para poder usar JSX y otros hooks/funcionalidades de React.
import React from 'react';
// Importa la imagen 'moon.jpg' desde la carpeta '../assets' para usarla como fondo del primer evento.
import moon from '../assets/moon.jpg';
// Importa la imagen 'mercury.png' desde la carpeta '../assets' para usarla como fondo del segundo evento.
import mercury from '../assets/mercury.png';

// Define el componente funcional 'Events'.
// Los componentes funcionales son la forma recomendada de escribir componentes en React.
const Events: React.FC = () => {
  // El componente retorna la estructura JSX que se renderizará en la interfaz de usuario.
  return (
    // Define una sección HTML (<section>) con un ID 'eventsID' y un contenedor principal que utiliza clases de Tailwind CSS
    // para centrar el contenido y establecer su ancho (w-9/12, que ocupa el 75% del ancho del contenedor padre).
    <section id="eventsID">
      <div className="container mx-auto w-9/12">
        {/* Título de la sección */}
        {/* h2: Encabezado de segundo nivel. Clases de Tailwind para color (blanco), tamaño de fuente (2xl), grosor (font-bold) y margen inferior (mb-6). */}
        <h2 className="text-white text-2xl font-bold mb-6">Eventos Cósmicos de la Semana y el Mes</h2>
        
        {/* Contenedor para las tarjetas de eventos */}
        {/* div: Elemento de división. Clases de Tailwind para apilar elementos verticalmente (flex-col) y añadir un espacio entre ellos (gap-6). */}
        <div className="flex flex-col gap-6">
          
          {/* Tarjeta 1 - Luna Nueva en Leo */}
          {/* div: Contenedor principal de la tarjeta. Clases de Tailwind para color de fondo (#1c1c3a), esquinas redondeadas (rounded-lg) y ocultar el contenido que se desborde (overflow-hidden). */}
          <div className="bg-[#1c1c3a] rounded-lg overflow-hidden">
            <img 
              // src: Atributo que especifica la fuente de la imagen, usando la imagen 'moon' importada.
              src={moon} 
              // alt: Texto alternativo para la imagen, importante para accesibilidad y SEO.
              alt="New Moon in Leo" 
              // Clases de Tailwind para el ancho completo de la tarjeta (w-full), altura fija (h-48) y cómo se debe recortar y escalar la imagen (object-cover) para que llene el espacio sin distorsionarse.
              className="w-full h-48 object-cover"
            />
            {/* div: Contenedor para el contenido de texto y el botón de la tarjeta. Clases de Tailwind para relleno (p-4). */}
            <div className="p-4">
              {/* Título del evento */}
              <h3 className="text-white text-xl font-semibold mb-2">Luna nueva en Leo</h3>
              {/* Párrafo con la descripción del evento */}
              {/* Clases de Tailwind para color del texto (gris-400), margen inferior (mb-4). */}
              <p className="text-gray-400 mb-4">
                La Luna Nueva en Leo es un momento excelente para establecer intenciones relacionadas con la creatividad, la autoexpresión, el romance y la diversión. Es un tiempo para reflexionar sobre las cosas que te hacen feliz y que aportan luz a tu vida.              </p>
              {/* Botón para más información */}
              {/* Clases de Tailwind para color de fondo (azul-400), color del texto (blanco), relleno (px-4 py-2) y esquinas redondeadas (rounded-full). */}
              <button className="bg-[#4e4bff] text-white px-4 py-2 rounded-full">
                Aprende más
              </button>
            </div>
          </div>

          {/* Tarjeta 2 - Mercurio entra en Virgo */}
          {/* Estructura de la tarjeta similar a la anterior, pero con la imagen y contenido correspondientes a Mercurio entrando en Virgo. */}
          <div className="bg-[#1c1c3a] rounded-lg overflow-hidden">
            <img 
              // src: Usa la imagen importada 'mercury'.
              src={mercury}
              // alt: Texto alternativo para la imagen.
              alt="Mercury enters Virgo" 
              // Clases de Tailwind para el tamaño y escalado de la imagen.
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-white text-xl font-semibold mb-2">Mercurio entra en Virgo</h3>
              <p className="text-gray-400 mb-4">
                Cuando Mercurio entra en Virgo, nos volvemos más analíticos, precisos y enfocados en los detalles. Este es un buen momento para la organización, la planificación y la resolución de problemas.
              </p>
              <button className="bg-[#4e4bff] text-white px-4 py-2 rounded-full">
                Aprende más
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Events;