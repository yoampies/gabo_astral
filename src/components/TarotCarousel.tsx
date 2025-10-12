// Importación de las 'slides' (un array de objetos con datos para cada diapositiva) desde un archivo de constantes.
import { slides } from '../constants/constants';
import { ISlidesInfo } from '../types';
// Importación de React y los hooks useState y useEffect para gestionar el estado y los efectos secundarios del componente.
import React, { useState, useEffect } from 'react';

// Definición del componente funcional TarotCarousel.
const TarotCarousel: React.FC = () => {

  // useState hook para mantener el estado de la diapositiva actual.
  // 'currentSlide' es la variable de estado que almacena el índice de la diapositiva visible.
  // 'setCurrentSlide' es la función para actualizar el estado.
  // Se inicializa en 0, mostrando la primera diapositiva al principio.
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // useEffect hook para manejar efectos secundarios. En este caso, se usa para configurar un intervalo
  // que avanza automáticamente las diapositivas cada cierto tiempo.
  useEffect(() => {
    // setInterval configura un temporizador que ejecuta una función repetidamente
    // cada X milisegundos.
    const intervalId = setInterval(() => {
      // setCurrentSlide actualiza el estado 'currentSlide'.
      // 'prevSlide' es el valor anterior de 'currentSlide'.
      // (prevSlide + 1) % slides.length: esta es una operación de módulo que asegura que
      // el índice de la diapositiva se mantenga dentro del rango de los índices válidos del array 'slides'.
      // Cuando se llega al final, vuelve a la primera diapositiva (índice 0).
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 15000); // 15000 milisegundos = 15 segundos. La diapositiva cambia cada 15 segundos.

    // La función de limpieza (return) se ejecuta cuando el componente se desmonta
    // o antes de que el efecto se vuelva a ejecutar.
    // clearInterval(intervalId) detiene el temporizador configurado por setInterval,
    // previniendo fugas de memoria y comportamientos inesperados.
    return () => clearInterval(intervalId);
  }, []); // El array de dependencias vacío '[]' asegura que este efecto se ejecute
         // solo una vez después del renderizado inicial del componente y se limpie
         // cuando el componente se desmonte.

  // Función para avanzar a la siguiente diapositiva al hacer clic en el botón "siguiente".
  const nextSlide = () => {
    // Actualiza 'currentSlide' al siguiente índice, usando la misma lógica de módulo
    // para volver al principio si se está en la última diapositiva.
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Función para retroceder a la diapositiva anterior al hacer clic en el botón "anterior".
  const prevSlide = () => {
    // Actualiza 'currentSlide' al índice anterior.
    // (prev - 1 + slides.length) % slides.length: Esta expresión maneja correctamente
    // el retroceso. Si 'prev - 1' resulta en -1 (al estar en la primera diapositiva),
    // se suma 'slides.length' para obtener el índice de la última diapositiva, y luego
    // se aplica el módulo para asegurar que el índice sea válido.
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Renderizado del componente.
  return (
    // Contenedor principal del carrusel con posicionamiento relativo,
    // un ancho del 9/12 de la ventana, centrado horizontalmente (mx-auto),
    // y un margen superior de 12 unidades.
    <div className="relative w-9/12 mx-auto p-4 mt-12">
      {/* Contenedor que oculta el contenido que se sale de sus límites (overflow-hidden).
          Tiene bordes redondeados y una sombra. */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        {/* Contenedor interno que contiene todas las diapositivas.
            Utiliza flexbox para alinear las diapositivas horizontalmente ('flex').
            La transición de transformación ('transition-transform duration-700') anima
            el movimiento de las diapositivas en 700 milisegundos. */}
        <div
          className="flex transition-transform duration-700"
          // El estilo 'transform: translateX(-${currentSlide * 100}%)' mueve el contenido
          // hacia la izquierda. El valor de desplazamiento se calcula multiplicando el índice
          // de la diapositiva actual por el 100% del ancho de una diapositiva,
          // efectivamente mostrando la diapositiva correspondiente.
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Mapea sobre el array 'slides' para renderizar cada diapositiva. */}
          {slides.map((slide: ISlidesInfo, index) => (
            // Cada diapositiva es un div con una clave única ('key={index}').
            // 'min-w-full' asegura que cada diapositiva ocupe todo el ancho del contenedor padre.
            // El fondo es '#1c1c3a' (un azul oscuro) y el texto es blanco.
            <div
              key={index}
              className="min-w-full flex flex-col items-center bg-[#1c1c3a] text-white"
            >
              {/* Imagen de la diapositiva.
                  'w-full h-64' define el ancho completo y una altura fija.
                  'object-cover' escala la imagen para cubrir el área sin deformarse. */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-64 object-cover"
              />
              {/* Contenedor para el texto de la diapositiva, con padding y centrado. */}
              <div className="p-6 text-center px-12">
                {/* Título de la diapositiva, con tamaño de fuente grande y negrita. */}
                <h2 className="text-xl font-bold m-4">{slide.title}</h2>
                {/* Párrafo con el texto descriptivo de la diapositiva.
                    'whitespace-pre-line' preserva los saltos de línea en el texto. */}
                <p className="text-mds whitespace-pre-line">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botones de navegación (anterior y siguiente). */}
      {/* Botón para ir a la diapositiva anterior.
          Posicionado absolutamente en el lado izquierdo ('left-4').
          Centrado verticalmente ('top-1/2 transform -translate-y-1/2').
          Estilo de botón semitransparente con bordes redondeados y efecto hover. */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-30 text-black rounded-full p-2 hover:bg-opacity-50"
        onClick={prevSlide}
      >
        &lt; {/* Símbolo de menor que para el botón de "anterior". */}
      </button>
      {/* Botón para ir a la siguiente diapositiva.
          Posicionado absolutamente en el lado derecho ('right-4'). */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-30 text-black rounded-full p-2 hover:bg-opacity-50"
        onClick={nextSlide}
      >
        &gt; {/* Símbolo de mayor que para el botón de "siguiente". */}
      </button>

      {/* Navegación por puntos (indicadores de diapositiva). */}
      {/* Contenedor para los puntos de navegación, centrado horizontalmente y con margen superior. */}
      <div className="flex justify-center mt-4">
        {/* Mapea sobre el array 'slides' para crear un botón indicador por cada diapositiva. */}
        {slides.map((_, index) => (
          // Cada punto es un botón con un tamaño fijo ('w-3 h-3'), margen horizontal ('mx-1'),
          // bordes redondeados y una transición de color.
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full transition-colors ${
              // Condicionalmente aplica la clase 'bg-indigo-500' (un morado vibrante)
              // si el índice del punto coincide con la diapositiva actual,
              // de lo contrario, usa 'bg-gray-400' (un gris).
              index === currentSlide ? 'bg-indigo-500' : 'bg-gray-400'
            }`}
            // Al hacer clic en un punto, se actualiza directamente 'currentSlide' al índice correspondiente.
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

// Exporta el componente TarotCarousel para que pueda ser importado y utilizado en otras partes de la aplicación.
export default TarotCarousel;