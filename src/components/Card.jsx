const Card = ({ card, onClick, isFlipped }) => {
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""} w-40 h-60 m-2`}
      onClick={() => onClick(card)}
    >
      <div className="inner-card w-full h-full flex items-center justify-center">
        <div className="bg-indigo-800 rounded-xl"></div>
        <img
          src={card.image}
          alt={card.name}
          className="rounded-xl object-fill"
        />
      </div>
    </div>
  );
};

export default Card;
