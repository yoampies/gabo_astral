import React from "react";
import { astrology } from '../constants'
import nightsky from '../assets/nightsky.jpg'


const Astrology = () => {

  return (
    <div className="text-white">
      {/* Banner Section */}
      <div className="relative w-full h-96">
        {/* Background Image */}
        <img
          src={nightsky}
          alt="Astrology Background"
          className="w-full h-full object-cover"
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center p-6">
          <h1 className="text-4xl font-bold text-white mb-4">
            ¿Qué es la Astrología y cómo se diferencia del Tarot?
          </h1>
          <p className="text-base md:text-lg text-white max-w-3xl">
            La astrología es una antigua práctica que busca comprender la influencia de los astros y los planetas en nuestras vidas.
            A diferencia del tarot, que utiliza símbolos y arquetipos para interpretar el presente y el futuro, la astrología se basa
            en la posición de los astros en un momento específico.
          </p>
        </div>
      </div>

      {/* Astrology Section */}
      <div className="container mx-auto mt-12 px-6 grid grid-cols-1 gap-8 w-9/12">
        {astrology.map((card, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-[#1c1c3a] rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full md:w-2/5 h-48 md:h-auto object-cover"
            />
            <div className="w-full md:w-3/5 p-6 flex flex-col justify-between">
              <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
              <p className="text-sm md:text-base text-gray-300">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Astrology;
