import { slides } from '../constants/constants';
import { ISlidesInfo } from '../types';
import React, { useState, useEffect, useRef } from 'react';

const TarotCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-11/12 md:w-9/12 mx-auto p-0 md:p-4 mt-8 md:mt-12">
      <div className="overflow-hidden rounded-lg shadow-lg bg-[#1c1c3a]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide: ISlidesInfo, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col items-center bg-[#1c1c3a] text-white"
            >
              <img
                src={slide.image}
                alt={slide.title}
                loading={index === 0 ? 'eager' : 'lazy'}
                width={800}
                height={256}
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="p-4 md:p-6 text-center px-4 md:px-12">
                <h2 className="text-lg md:text-xl font-bold m-2 md:m-4">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-md whitespace-pre-line leading-relaxed">
                  {slide.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/3 md:top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white rounded-full p-2 md:p-3 hover:bg-white/40 transition-all z-10"
        onClick={prevSlide}
        aria-label="Anterior"
      >
        &lt;
      </button>

      <button
        className="absolute top-1/3 md:top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white rounded-full p-2 md:p-3 hover:bg-white/40 transition-all z-10"
        onClick={nextSlide}
        aria-label="Siguiente"
      >
        &gt;
      </button>

      <div className="flex justify-center my-4 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Ir a diapositiva ${index + 1}`}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-indigo-500 scale-110' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TarotCarousel;
