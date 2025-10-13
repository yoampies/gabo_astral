// Card.tsx (Versión con CSS)

import React from 'react';
import { ICardProps } from '../types';

const Card = ({ card, onClick, isFlipped }: ICardProps) => {
  return (
    <div
      className="card-container w-40 h-60 m-2 [perspective:1000px] cursor-pointer"
      onClick={() => onClick(card)}
    >
      {/* Aplicamos la clase 'is-flipped' condicionalmente aquí */}
      <div className={`inner-card w-full h-full ${isFlipped ? 'is-flipped' : ''}`}>
        {/* Cara Trasera */}
        <div className='card-face card-back absolute w-full h-full bg-black rounded-xl'></div>
        
        {/* Cara Frontal */}
        <div className="card-face card-front absolute w-full h-full">
          <img
            src={card.image}
            alt={card.name}
            className="rounded-xl object-fill w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;