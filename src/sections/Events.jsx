import React from 'react';
import moon from '../assets/moon.jpg';
import mercury from '../assets/mercury.png';

export default function Events() {
  return (
    <section id="eventsID">
      <div className="container mx-auto w-9/12">
        {/* Section Title */}
        <h2 className="text-white text-2xl font-bold mb-6">Eventos Cósmicos de la Semana y el Mes</h2>
        
        {/* Event Cards */}
        <div className="flex flex-col gap-6">
          
          {/* Card 1 - New Moon in Leo */}
          <div className="bg-[#1c1c3a] rounded-lg overflow-hidden">
            <img 
              src={moon} 
              alt="New Moon in Leo" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-white text-xl font-semibold mb-2">Luna nueva en Leo</h3>
              <p className="text-gray-400 mb-4">
                La Luna Nueva en Leo es un momento excelente para establecer intenciones relacionadas con la creatividad, la autoexpresión, el romance y la diversión. Es un tiempo para reflexionar sobre las cosas que te hacen feliz y que aportan luz a tu vida.              </p>
              <button className="bg-[#4e4bff] text-white px-4 py-2 rounded-full">
                Aprende más
              </button>
            </div>
          </div>

          {/* Card 2 - Mercury enters Virgo */}
          <div className="bg-[#1c1c3a] rounded-lg overflow-hidden">
            <img 
              src={mercury}
              alt="Mercury enters Virgo" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-white text-xl font-semibold mb-2">Mercurio entra en Virgo</h3>
              <p className="text-gray-400 mb-4">
                Cuando Mercurio entra en Virgo, nos volvemos más analíticos, precisos y enfocados en los detalles. Este es un buen momento para la organización, la planificación y la resolución de problemas.
              </p>
              <button className="bg-[#4e4bff] text-white px-4 py-2 rounded-full">
                Aprende más
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
