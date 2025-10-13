// Importa los hooks useEffect para manejar efectos secundarios y useState para gestionar el estado del componente.
import { useEffect, useState } from "react";
// Importa la hoja de estilos CSS global de la aplicación.
import "../App.css";
// Importa el componente Card, que representa una carta individual en el juego.
import Card from "../components/Card.tsx";
// Importa el componente TarotCarousel para mostrar un carrusel de información sobre el tarot.
import TarotCarousel from "../components/TarotCarousel.tsx";

// --- Recursos de las cartas del Tarot (Mayor Arcanos) ---
// Se importan las imágenes correspondientes a cada carta del Mayor Arcanos.

// Importa la imagen de fondo para la sección de banner.
import tarot from "../assets/tarot-banner.jpg";

// Importa el array de majorArcana
import { majorArcana, spread_times } from "../constants/constants";
import { ITarotCards, IMajorArcanaCard } from "../types";

// Función auxiliar para barajar un array (deck).
// Utiliza el algoritmo de Fisher-Yates (implícito en sort con una función aleatoria).
const shuffleDeck = (deck: IMajorArcanaCard[]): IMajorArcanaCard[] => {
  // El método sort() con una función que retorna un número aleatorio
  // entre -0.5 y 0.5 efectivamente baraja los elementos del array.
  return deck.sort(() => Math.random() - 0.5);
};

// Define el componente funcional principal 'Tarot'.
function Tarot() {
  // Estado para almacenar el mazo de cartas que se mostrarán y su estado (volteada/no volteada).
  // Inicialmente es un array vacío.
  const [cards, setCards] = useState<ITarotCards[]>([]);
  // Estado para almacenar las cartas que han sido volteadas por el usuario.
  // Inicialmente es un array vacío.
  const [flippedCards, setFlippedCards] = useState<ITarotCards[]>([]);

  // useEffect hook para ejecutar código después de que el componente se monta en el DOM.
  useEffect(() => {
    // Baraja el mazo de 'majorArcana'.
    const shuffledDeck = shuffleDeck(majorArcana);

    const partedDeck = shuffledDeck.slice(0, 10)
    // Actualiza el estado 'cards' con el mazo barajado.
    // Cada carta se mapea para añadirle un 'id' único y establecer su estado inicial 'flipped' a false.
    setCards(
      partedDeck.map((card, index) => ({
        ...card, // Copia las propiedades existentes de la carta (name, image).
        id: index, // Asigna un ID único basado en su índice en el mazo barajado.
        flipped: false, // Inicializa la propiedad 'flipped' como falsa (la carta está boca abajo).
      }))
    );
  }, []); // El array de dependencias vacío asegura que este efecto se ejecute solo una vez, al montar el componente.

  // Función manejadora que se ejecuta cuando se hace clic en una carta.
  const handleCardClick = (clickedCard: ITarotCards) => {
    // Verifica si la carta ya está volteada o si ya se han seleccionado 3 cartas.
    // Si alguna de estas condiciones es verdadera, la función no hace nada más.
    if (clickedCard.flipped || flippedCards.length >= 3) return;

    // Actualiza el estado 'cards' para voltear la carta clickeada.
    setCards((prevCards) =>
      prevCards.map((card) =>
        // Si el ID de la carta actual coincide con el ID de la carta clickeada,
        // crea una nueva carta con la propiedad 'flipped' establecida a true.
        // De lo contrario, devuelve la carta sin cambios.
        card.id === clickedCard.id ? { ...card, flipped: true } : card
      )
    );

    // Agrega la carta clickeada (ya volteada) al array 'flippedCards'.
    setFlippedCards([...flippedCards, clickedCard]);
  };

  // Renderizado del componente Tarot.
  return (
    <div className="relative"> {/* Contenedor principal con posicionamiento relativo */}
      {/* --- Sección del Banner --- */}
      {/* Contenedor para la imagen de fondo y el texto superpuesto. */}
      <div className="relative w-full h-96">
        {/* Imagen de fondo del banner del tarot. */}
        <img
          src={tarot} // Utiliza la imagen importada 'tarot'.
          alt="Tarot Banner" // Texto alternativo descriptivo para accesibilidad.
          className="w-full h-full object-cover" // Asegura que la imagen cubra el contenedor sin distorsionarse.
        />
        {/* Superposición de texto sobre la imagen de fondo. */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center p-6">
          {/* Título principal del banner. */}
          <h1 className="text-4xl font-bold text-white mb-4">
            ¿Qué es el tarot?
          </h1>
          {/* Párrafo introductorio sobre el tarot. */}
          <p className="text-base md:text-lg text-white max-w-3xl">
            El tarot es mucho más que adivinación. Es una herramienta poderosa para el autoconocimiento y el crecimiento personal.
            Con una lectura de tarot, podrás tomar decisiones más acertadas, superar obstáculos y conectar contigo mismo a un nivel más profundo.
          </p>
        </div>
      </div>

      {/* --- Sección del Carrusel --- */}
      {/* Renderiza el componente TarotCarousel para mostrar información adicional. */}
      <div>
        <TarotCarousel />
      </div>

      {/* --- Sección de Lectura Gratuita del Tarot --- */}
      {/* Contenedor principal para la sección de lectura interactiva. */}
      <div className="container w-9/12 mx-auto flex flex-col justify-center items-center relative">
        {/* Título de la sección de lectura. */}
        <h1 className="text-white text-lg font-bold my-8">
          Lectura Gratis del Tarot
        </h1>
        {/* Descripción de la funcionalidad de la lectura. */}
        <p className="text-white">
          Si quieres una lectura rápida acerca de una situación, pídele a tus ángeles y guías espirituales que te ayuden a responder lo que quieras saber, y luego selecciona tres cartas!
        </p>
        {/* Contenedor para el tablero de juego donde se muestran las cartas. */}
        {/* 'grid grid-cols-11' define 11 columnas para el grid. */}
        {/* 'gap-4' añade espacio entre los elementos del grid. */}
        {/* 'p-4' añade padding alrededor del tablero. */}
        {/* 'relative z-10' asegura que el tablero esté por encima de otros elementos con menor z-index. */}
        {/* 'pr-32' añade padding a la derecha para evitar que las cartas seleccionadas se superpongan con el borde. */}
        <div className="game-board grid grid-cols-11 gap-4 p-4 relative z-10 pr-32">
          {/* Mapea sobre el array 'cards' para renderizar cada carta como un componente 'Card'. */}
          {cards.map((card) => (
            <Card
              key={card.id} // Usa el ID único de la carta como clave para React.
              onClick={handleCardClick} // Pasa la función manejadora de clics.
              card={card} // Pasa el objeto de datos de la carta.
              isFlipped={card.flipped} // Pasa el estado de volteo de la carta.
            />
          ))}
        </div>

        {/* --- Sección de Visualización de Cartas Seleccionadas --- */}
        {/* Renderiza esta sección solo si se han seleccionado exactamente 3 cartas. */}
        {flippedCards.length === 3 && (
          // Contenedor que cubre toda la pantalla, con fondo semitransparente y centrado.
          <div className="fixed top-0 left-0 w-full h-full flex flex-col gap-4 justify-center items-center bg-black bg-opacity-70 text-white text-center z-20">
            {/* Título para las cartas seleccionadas. */}
            <h1 className="text-4xl font-bold">Cartas elegidas</h1>
            {/* Contenedor para mostrar las imágenes de las 3 cartas seleccionadas. */}
            <div className="mt-2 flex grid-cols-3 gap-6">
              {/* Mapea sobre el array 'flippedCards' para mostrar cada carta seleccionada. */}
              {flippedCards.map((card, index) => (
                <div className="col-span-1 h-64 w-48"> {/* Define el tamaño para cada imagen de carta */}
                  <h3 className="text-xl font-semibold mb-2 text-yellow-300">
                    {spread_times[index]}
                  </h3>
                  <img src={card.image} className="rounded-xl" alt={card.name} /> {/* Muestra la imagen de la carta */}
                </div>
              ))}
            </div>
            {/* Mensaje para invitar al usuario a contactar para más información. */}
            <p className="text-white mt-28">
              Si quieres saber más acerca del significado de estas cartas, contáctanos!
            </p>
            {/* Botón para recargar la página y permitir una nueva lectura. */}
            <button
              className="bg-violet-500 px-4 py-2 rounded-lg text-white"
              onClick={() => window.location.reload()} // Recarga la página al hacer clic.
            >
              Volver al Tarot
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Exporta el componente Tarot para que pueda ser utilizado en otras partes de la aplicación.
export default Tarot;