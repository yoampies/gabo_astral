import { useEffect, useState } from "react";
//Styling sheet
import "../App.css";
//Components
import Card from "../components/Card";
import TarotCarousel from "../components/TarotCarousel";

//Card resources
import fool from "../assets/tarot/Fool.jpg";
import magician from "../assets/tarot/Magician.jpg";
import highPriestess from "../assets/tarot/HighPriestess.jpg";
import empress from "../assets/tarot/Empress.jpg";
import emperor from "../assets/tarot/Emperor.jpg";
import hierophant from "../assets/tarot/Hierophant.jpg";
import lovers from "../assets/tarot/Lovers.jpg";
import chariot from "../assets/tarot/Chariot.jpg";
import strength from "../assets/tarot/Strength.jpg";
import hermit from "../assets/tarot/Hermit.png";
import wheelOfFortune from "../assets/tarot/WheelOfFortune.jpg";
import justice from "../assets/tarot/Justice.jpg";
import hangedMan from "../assets/tarot/HangedMan.jpg";
import death from "../assets/tarot/Death.jpg";
import temperance from "../assets/tarot/Temperance.jpg";
import devil from "../assets/tarot/Devil.jpg";
import tower from "../assets/tarot/Tower.jpg";
import star from "../assets/tarot/Star.png";
import moon from "../assets/tarot/Moon.png";
import sun from "../assets/tarot/Sun.jpg";
import judgement from "../assets/tarot/Judgement.jpg";
import world from "../assets/tarot/World.jpg";
import { div } from "three/webgpu";

const majorArcana = [
  { name: "The Fool", image: fool },
  { name: "The Magician", image: magician },
  { name: "The High Priestess", image: highPriestess },
  { name: "The Empress", image: empress },
  { name: "The Emperor", image: emperor },
  { name: "The Hierophant", image: hierophant },
  { name: "The Lovers", image: lovers },
  { name: "The Chariot", image: chariot },
  { name: "Strength", image: strength },
  { name: "The Hermit", image: hermit },
  { name: "Wheel of Fortune", image: wheelOfFortune },
  { name: "Justice", image: justice },
  { name: "The Hanged Man", image: hangedMan },
  { name: "Death", image: death },
  { name: "Temperance", image: temperance },
  { name: "The Devil", image: devil },
  { name: "The Tower", image: tower },
  { name: "The Star", image: star },
  { name: "The Moon", image: moon },
  { name: "The Sun", image: sun },
  { name: "Judgement", image: judgement },
  { name: "The World", image: world }
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
    <div className="relative">
      <div>
        <TarotCarousel />
      </div>
      <div className="container w-9/12 mx-auto flex flex-col justify-center items-center relative">
        <h1 className="text-white text-lg font-bold my-8">
            Lectura Gratis del Tarot
        </h1>
        <p className="text-white">
          Si quieres una lectura rápida acerca de una situación, pídele a tus ángeles y guías espirituales que te ayuden a responder lo que quieras saber, y luego selecciona tres cartas!
        </p>
        <div className="game-board grid grid-cols-11 gap-4 p-4 relative z-10 pr-32">
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
          <div className="fixed top-0 left-0 w-full h-full flex flex-col gap-4 justify-center items-center bg-black bg-opacity-70 text-white text-center z-20">
            {/* Fixed positioning to cover the entire viewport */}
            <h1 className="text-4xl font-bold">Cartas elegidas</h1>
            <div className="mt-6 flex grid-cols-3 gap-6">
              {flippedCards.map((card) => (
                <div className="col-span-1 h-64 w-48">
                  <img src={card.image} className="rounded-xl" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-white mt-20">
                Si quieres saber más acerca del significado de estas cartas, contáctanos!
              </p>
            </div>
            <button
              className="bg-violet-500 px-4 py-2 rounded-lg text-white"
              onClick={() => window.location.reload()}
            >
              Volver al Tarot
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

 export default Tarot