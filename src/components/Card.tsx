import { ICardProps } from '../types';

const Card = ({ card, onClick, isFlipped, isReversed }: ICardProps) => {
  return (
    <div
      className="card-container w-40 h-60 m-2 [perspective:1000px] cursor-pointer"
      onClick={() => onClick(card)}
    >
      <div
        className={`inner-card w-full h-full ${isFlipped ? 'is-flipped' : ''}`}
      >
        {/* Cara Trasera - Siempre se ve derecha al estar boca abajo */}
        <div className="card-face card-back absolute w-full h-full bg-black rounded-xl border-2 border-violet-900"></div>

        {/* Cara Frontal */}
        <div className="card-face card-front absolute w-full h-full">
          <img
            src={card.image}
            alt={card.name}
            className={`rounded-xl object-fill w-full h-full transition-transform duration-500 ${
              isReversed ? 'rotate-180' : ''
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
