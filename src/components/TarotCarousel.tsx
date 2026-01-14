import { slides } from '../constants/constants';
import { ISlidesInfo } from '../types';
import React, { useState, useEffect, useRef } from 'react';

const TarotCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Lógica de Autoplay Inteligente
  useEffect(() => {
    // Limpiamos cualquier intervalo previo para evitar "race conditions"
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Configuramos el nuevo timer
    timeoutRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 15000);

    // Limpieza al desmontar o al cambiar de slide
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
    <div className="relative w-9/12 mx-auto p-4 mt-12">
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
              {/* Optimización de Imagen: Lazy load para todas menos la primera (LCP) */}
              <img
                src={slide.image}
                alt={slide.title}
                loading={index === 0 ? 'eager' : 'lazy'}
                width={800} // Valor estimado para ayudar al navegador a reservar espacio
                height={256}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center px-12">
                <h2 className="text-xl font-bold m-4">{slide.title}</h2>
                <p className="text-md whitespace-pre-line">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controles */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white rounded-full p-3 hover:bg-white/50 transition-all z-10"
        onClick={prevSlide}
        aria-label="Anterior"
      >
        &lt;
      </button>

      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white rounded-full p-3 hover:bg-white/50 transition-all z-10"
        onClick={nextSlide}
        aria-label="Siguiente"
      >
        &gt;
      </button>

      {/* Indicadores */}
      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Ir a diapositiva ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
