// Importa React, necesario para crear componentes de React.
import React from "react";
// Importa datos de 'astrology' desde un archivo de constantes.
// Se espera que 'astrology' sea un array de objetos, donde cada objeto
// representa una sección o carta de astrología con propiedades como 'image', 'title', y 'text'.
import { astrology } from '../constants'
// Importa una imagen llamada 'nightsky' desde la carpeta de assets.
// Esta imagen se utilizará como fondo para la sección del banner.
import nightsky from '../assets/nightsky.jpg'

// Define el componente funcional 'Astrology'.
const Astrology = () => {

  // El componente retorna la estructura JSX que se renderizará en el DOM.
  return (
    // Contenedor principal del componente, con texto blanco por defecto.
    <div className="text-white">
      {/* --- Sección del Banner --- */}
      {/* Este div actúa como contenedor para la imagen de fondo y el texto superpuesto. */}
      {/* Tiene una altura fija y es el contenedor padre para posicionamiento absoluto del texto. */}
      <div className="relative w-full h-96">
        {/* Imagen de Fondo: Muestra la imagen 'nightsky'. */}
        <img
          src={nightsky} // La fuente de la imagen es la variable importada 'nightsky'.
          alt="Astrology Background" // Texto alternativo para accesibilidad y SEO.
          className="w-full h-full object-cover" // Clases de Tailwind CSS: la imagen cubre todo el contenedor
                                                 // y se recorta si es necesario para mantener la relación de aspecto.
        />
        {/* Superposición de Texto: Un div que se posiciona absolutamente sobre la imagen de fondo. */}
        {/* 'inset-0' hace que ocupe todo el espacio del contenedor padre. */}
        {/* Se utiliza flexbox para centrar el contenido vertical y horizontalmente (columna). */}
        {/* 'bg-black bg-opacity-50' añade una capa semitransparente negra para mejorar la legibilidad del texto. */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center p-6">
          {/* Título Principal: Muestra una pregunta clave sobre astrología y tarot. */}
          <h1 className="text-4xl font-bold text-white mb-4">
            ¿Qué es la Astrología y cómo se diferencia del Tarot?
          </h1>
          {/* Párrafo Introductorio: Explica brevemente qué es la astrología y la diferencia con el tarot. */}
          <p className="text-base md:text-lg text-white max-w-3xl">
            La astrología es una antigua práctica que busca comprender la influencia de los astros y los planetas en nuestras vidas.
            A diferencia del tarot, que utiliza símbolos y arquetipos para interpretar el presente y el futuro, la astrología se basa
            en la posición de los astros en un momento específico.
          </p>
        </div>
      </div>

      {/* --- Sección de Astrología --- */}
      {/* Contenedor principal para el contenido de la astrología. */}
      {/* 'container mx-auto' centra el contenido y usa un ancho máximo. */}
      {/* 'mt-12 px-6' añade margen superior y padding horizontal. */}
      {/* 'grid grid-cols-1 gap-8 w-9/12' define un layout de cuadrícula con una columna en dispositivos pequeños,
          un espaciado de 8 unidades entre elementos, y un ancho del 9/12 de la ventana. */}
      <div className="container mx-auto mt-12 px-6 grid grid-cols-1 gap-8 w-9/12">
        {/* Mapeo sobre el array 'astrology' para renderizar cada elemento (carta/sección). */}
        {astrology.map((card, index) => (
          // Cada elemento se renderiza como un div. Se usa una clave única para cada elemento del mapa.
          <div
            key={index}
            // Clases de Tailwind CSS para el layout:
            // 'flex flex-col md:flex-row': En móviles, es una columna; en pantallas medianas y superiores, es una fila.
            // 'items-center': Centra los elementos verticalmente en modo fila.
            // 'bg-[#1c1c3a]': Fondo azul oscuro personalizado.
            // 'rounded-lg shadow-md': Bordes redondeados y sombra.
            // 'overflow-hidden': Asegura que los bordes redondeados se apliquen correctamente a la imagen.
            className="flex flex-col md:flex-row items-center bg-[#1c1c3a] rounded-lg shadow-md overflow-hidden"
          >
            {/* Imagen del elemento de astrología. */}
            <img
              src={card.image} // La URL de la imagen se obtiene de la propiedad 'image' del objeto 'card'.
              alt={card.title}  // El texto alternativo se obtiene de la propiedad 'title'.
              // Clases de Tailwind CSS para el tamaño de la imagen:
              // 'w-full md:w-2/5': Ocupa todo el ancho en móviles, y 2/5 del ancho en pantallas medianas y superiores.
              // 'h-48 md:h-auto': Altura fija en móviles, automática en pantallas medianas y superiores.
              // 'object-cover': Mantiene la relación de aspecto y cubre el área.
              className="w-full md:w-2/5 h-48 md:h-auto object-cover"
            />
            {/* Contenedor del texto del elemento de astrología. */}
            {/* Ocupa el 3/5 del ancho en pantallas medianas y superiores, y todo el ancho en móviles. */}
            <div className="w-full md:w-3/5 p-6 flex flex-col justify-between">
              {/* Título del elemento. */}
              <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
              {/* Párrafo con la descripción del elemento. */}
              <p className="text-sm md:text-base text-gray-300">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exporta el componente 'Astrology' para que pueda ser importado y utilizado en otras partes de la aplicación.
export default Astrology;