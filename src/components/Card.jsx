// Importa el hook useState para manejar el estado interno del componente, si fuera necesario.
// En este caso, no se usa directamente en Card, pero es común en componentes React.
import React from 'react';

// Define el componente funcional 'Card'.
// Recibe tres props:
// - card: Un objeto que contiene la información de la carta (ej. imagen, nombre).
// - onClick: Una función que se ejecutará cuando se haga clic en la carta.
// - isFlipped: Un booleano que indica si la carta está volteada (true) o no (false).
const Card = ({ card, onClick, isFlipped }) => {
  // Retorna la estructura JSX que representa la carta.
  return (
    // Contenedor principal de la carta.
    // Se aplica la clase 'card' y condicionalmente la clase 'flipped' si isFlipped es true.
    // Se utilizan clases de Tailwind CSS para definir el tamaño (w-40, h-60) y el margen (m-2).
    <div
      className={`card ${isFlipped ? "flipped" : ""} w-40 h-60 m-2`}
      // Asigna un manejador de eventos 'onClick'.
      // Cuando se hace clic, llama a la función 'onClick' pasada como prop,
      // enviando el objeto 'card' asociado a esta instancia del componente.
      onClick={() => onClick(card)}
    >
      {/* Contenedor interno para la animación de volteo y el contenido de la carta. */}
      {/* Se usa flexbox para centrar el contenido y ocupa el 100% del ancho y alto. */}
      <div className="inner-card w-full h-full flex items-center justify-center">
        {/* Este div podría usarse para una cara posterior de la carta o un efecto de fondo. */}
        {/* Actualmente tiene un fondo azul oscuro y bordes redondeados (rounded-xl). */}
        <div className="bg-indigo-800 rounded-xl"></div>
        {/* Muestra la imagen de la carta. */}
        <img
          src={card.image} // La URL de la imagen se obtiene del objeto 'card'.
          alt={card.name}   // El texto alternativo para accesibilidad se obtiene del objeto 'card'.
          className="rounded-xl object-fill" // Aplica bordes redondeados y asegura que la imagen llene su contenedor.
        />
      </div>
    </div>
  );
};

// Exporta el componente 'Card' para que pueda ser importado y utilizado en otras partes de la aplicación.
export default Card;