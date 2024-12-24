import { slides } from '../constants';
import React, { useState, useEffect } from 'react';

const TarotCarousel = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  // Change slide every 15 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 15000); // 15 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run only once after the first render

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto p-4">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col items-center bg-gray-900 text-white"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold m-4">{slide.title}</h2>
                <p className="text-mds whitespace-pre-line">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-30 text-black rounded-full p-2 hover:bg-opacity-50"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-30 text-black rounded-full p-2 hover:bg-opacity-50"
        onClick={nextSlide}
      >
        &gt;
      </button>

      {/* Dots navigation */}
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full transition-colors ${
              index === currentSlide ? 'bg-indigo-500' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TarotCarousel;