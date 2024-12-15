import { useEffect, useState } from "react";
import "../App.css";
import Card from "../components/Card";

const majorArcana = [
  { name: "The Fool", image: "/tarot/fool.svg" },
  { name: "The Magician", image: "/tarot/magician.svg" },
  { name: "The High Priestess", image: "/tarot/high-priestess.svg" },
  { name: "The Empress", image: "/tarot/empress.svg" },
  { name: "The Emperor", image: "/tarot/emperor.svg" },
  { name: "The Hierophant", image: "/tarot/hierophant.svg" },
  { name: "The Lovers", image: "/tarot/lovers.svg" },
  { name: "The Chariot", image: "/tarot/chariot.svg" },
  { name: "Strength", image: "/tarot/strength.svg" },
  { name: "The Hermit", image: "/tarot/hermit.svg" },
  { name: "Wheel of Fortune", image: "/tarot/wheel-of-fortune.svg" },
  { name: "Justice", image: "/tarot/justice.svg" },
  { name: "The Hanged Man", image: "/tarot/hanged-man.svg" },
  { name: "Death", image: "/tarot/death.svg" },
  { name: "Temperance", image: "/tarot/temperance.svg" },
  { name: "The Devil", image: "/tarot/devil.svg" },
  { name: "The Tower", image: "/tarot/tower.svg" },
  { name: "The Star", image: "/tarot/star.svg" },
  { name: "The Moon", image: "/tarot/moon.svg" },
  { name: "The Sun", image: "/tarot/sun.svg" },
  { name: "Judgement", image: "/tarot/judgement.svg" },
  { name: "The World", image: "/tarot/world.svg" },
];

const shuffleDeck = (deck) => {
  return deck.sort(() => Math.random() - 0.5); // Shuffle the deck
};

function Tarot() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);

  useEffect(() => {
    const shuffledDeck = shuffleDeck(majorArcana);
    setCards(
      shuffledDeck.map((card, index) => ({
        ...card,
        id: index,
        flipped: false,
      }))
    );
  }, []);

  const handleCardClick = (clickedCard) => {
    if (clickedCard.flipped || flippedCards.length >= 3) return;

    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === clickedCard.id ? { ...card, flipped: true } : card
      )
    );

    setFlippedCards([...flippedCards, clickedCard]);
  };

  return (
    <div className="container w-9/12 mx-auto pr-32 flex flex-col justify-center items-center">
      <div className="game-board grid grid-cols-11 gap-4 p-4">
        {cards.map((card) => (
          <Card
            key={card.id}
            onClick={handleCardClick}
            card={card}
            isFlipped={card.flipped}
          />
        ))}
      </div>
      {flippedCards.length === 3 && (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-70 text-white text-center">
          <h1 className="text-4xl font-bold">Your Reading</h1>
          <ul className="mt-4">
            {flippedCards.map((card) => (
              <li key={card.id} className="text-xl">
                {card.name}
              </li>
            ))}
          </ul>
          <button
            className="mt-6 bg-violet-500 px-4 py-2 rounded-lg text-white"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}

export default Tarot;
