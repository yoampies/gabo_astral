import { useLayoutEffect, useRef } from 'react';
import { ICardProps } from '../types';
import gsap from 'gsap';

const Card = ({ card, onClick, isFlipped, isReversed }: ICardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // 1. Capturamos el valor actual en una constante
    const element = cardRef.current;

    // 2. Validación de seguridad (Type Guard)
    if (!element) return;

    if (isFlipped) {
      gsap.to(element, {
        rotationY: 180,
        z: 50,
        duration: 0.6,
        ease: 'back.out(1.7)',
        onComplete: () => {
          // 3. Usamos el selector sobre el elemento capturado
          const img = element.querySelector('.card-front img');
          if (isReversed && img) {
            gsap.to(img, {
              rotationZ: 180,
              duration: 0.4,
              ease: 'power2.out',
            });
          }
        },
      });
    } else {
      gsap.to(element, {
        rotationY: 0,
        rotationZ: 0,
        z: 0,
        duration: 0.5,
        ease: 'power2.inOut',
      });
    }
  }, [isFlipped, isReversed]);

  return (
    <div
      className="card-container w-40 h-60 m-2 [perspective:1000px] cursor-pointer"
      onClick={() => onClick(card)}
    >
      <div
        ref={cardRef}
        className="inner-card w-full h-full relative [transform-style:preserve-3d]"
      >
        {/* Cara Trasera */}
        <div className="card-face card-back absolute w-full h-full bg-black rounded-xl border-2 border-violet-900 [backface-visibility:hidden]"></div>

        {/* Cara Frontal */}
        <div className="card-face card-front absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
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
