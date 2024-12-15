const Card = ({ card, onClick, isFlipped }) => {
    return (
      <div
        className={`card ${
          isFlipped ? "flipped" : ""
        } w-24 h-32 lg:w-36 lg:h-44 m-2`}
        onClick={() => onClick(card)}
      >
        <div
          className={`inner-card w-full h-full flex items-center justify-center bg-white border border-gray-300 rounded-xl ${
            card.flipped ? "flipped" : ""
          }`}
        >
          {isFlipped ? (
            <img
              src={card.image}
              alt={card.name}
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <div className="bg-indigo-800 rounded-xl w-full h-full flex items-center justify-center text-2xl text-white">
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Card;
  