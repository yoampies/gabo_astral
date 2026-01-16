import { useEffect, useState, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import '../App.css';
import Card from '../components/Card.tsx';
import TarotCarousel from '../components/TarotCarousel.tsx';
import tarot from '../assets/tarot-banner.webp';
import { majorArcana, spread_times } from '../constants/constants';
import { tarotReducer, tarotInitialState } from '../reducers/tarotReducers.ts';
import { ITarotCards, IMajorArcanaCard } from '../types';

const shuffleDeck = (deck: IMajorArcanaCard[]): IMajorArcanaCard[] => {
  return deck.sort(() => Math.random() - 0.5);
};

const getNewDeck = () => {
  const shuffledDeck = shuffleDeck(majorArcana);
  const partedDeck = shuffledDeck.slice(0, 10);

  return partedDeck.map((card, index) => {
    const isReversed = Math.random() > 0.5;
    return {
      ...card,
      id: index,
      flipped: false,
      isReversed: isReversed,
    };
  });
};

function Tarot() {
  const [gameState, dispatch] = useReducer(tarotReducer, tarotInitialState);
  const [cards, setCards] = useState<ITarotCards[]>([]);
  const [flippedCards, setFlippedCards] = useState<ITarotCards[]>([]);

  useEffect(() => {
    if (gameState.status === 'SHUFFLING') {
      setCards(getNewDeck());
      dispatch({ type: 'START_SELECTION' });
    }
  }, [gameState.status]);

  const handleCardClick = (clickedCard: ITarotCards) => {
    if (gameState.status !== 'SELECTING') return;
    if (clickedCard.flipped || flippedCards.length >= 3) return;

    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === clickedCard.id ? { ...card, flipped: true } : card
      )
    );

    const newFlippedCards = [...flippedCards, clickedCard];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 3) {
      setTimeout(() => {
        dispatch({ type: 'SHOW_RESULT' });
      }, 1750);
    }
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_GAME' });
    setFlippedCards([]);
    setCards(getNewDeck());
  };

  return (
    <>
      <Helmet>
        <title>Lectura de Tarot Gratis | Gabo Astral</title>
        <meta
          name="description"
          content="Realiza una tirada de tarot gratuita. Obtén respuestas de tus guías espirituales y ángeles sobre el pasado, presente y futuro."
        />
      </Helmet>
      <div className="relative pb-20">
        {/* Banner */}
        <div className="relative w-full h-72 md:h-96">
          <img
            src={tarot}
            alt="Tarot Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center p-4">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">
              ¿Qué es el tarot?
            </h1>
            <p className="text-sm md:text-lg text-white max-w-3xl">
              El tarot es mucho más que adivinación. Es una herramienta poderosa
              para el autoconocimiento y el crecimiento personal.
            </p>
          </div>
        </div>

        {/* Carrusel */}
        <div>
          <TarotCarousel />
        </div>

        {/* Lectura */}
        <div className="container w-11/12 md:w-9/12 mx-auto flex flex-col justify-center items-center relative">
          <h1 className="text-white text-xl md:text-2xl font-bold my-8 text-center">
            Lectura Gratis del Tarot
          </h1>
          <p className="text-white text-center mb-6 px-2">
            Pídele a tus ángeles y guías que te ayuden a responder, y selecciona
            tres cartas.
          </p>

          <div className="game-board grid grid-cols-2 md:grid-cols-5 lg:grid-cols-11 gap-3 md:gap-4 p-2 md:p-4 relative z-10 w-full justify-items-center">
            {cards.map((card) => (
              <Card
                key={card.id}
                onClick={handleCardClick}
                card={card}
                isFlipped={card.flipped}
                isReversed={card.isReversed}
              />
            ))}
          </div>

          {/* --- Resultados (Overlay) --- */}
          {gameState.status === 'RESULT' && (
            // CORRECCIÓN CRÍTICA: justify-start en lugar de justify-center para móviles.
            // pt-12 asegura que el contenido empiece visible y con margen.
            // overflow-y-auto permite scroll si las cartas son muy altas.
            <div className="fixed inset-0 w-full h-full flex flex-col justify-start md:justify-center items-center bg-black/95 text-white text-center z-50 p-4 overflow-y-auto pt-12 md:pt-0">
              <h1 className="text-3xl font-bold mb-6 flex-shrink-0">
                Cartas elegidas
              </h1>

              <div className="flex flex-col md:flex-row gap-8 md:gap-6 items-center w-full justify-center flex-shrink-0">
                {flippedCards.map((card, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold mb-2 text-yellow-300">
                      {spread_times[index]}
                    </h3>
                    <div className="h-64 w-40 relative">
                      <img
                        src={card.image}
                        className={`w-full h-full object-cover rounded-xl shadow-lg shadow-purple-500/20 transition-transform duration-500 ${card.isReversed ? 'rotate-180' : ''}`}
                        alt={card.name}
                      />
                    </div>
                    <p className="mt-2 font-medium">{card.name}</p>
                  </div>
                ))}
              </div>

              <p className="text-white mt-8 mb-6 max-w-md px-4 flex-shrink-0">
                Si quieres saber más acerca del significado profundo de estas
                cartas, contáctanos!
              </p>

              <button
                className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-full text-white font-bold transition-all mb-10 flex-shrink-0"
                onClick={handleReset}
              >
                Volver al Tarot
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Tarot;
