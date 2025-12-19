import React from 'react';
import { Link } from 'react-router-dom';
import { cosmicEvents } from '../constants/constants';

const Events: React.FC = () => {
  return (
    <section id="eventsID" className="mt-6">
      <div className="container mx-auto w-9/12">
        <h2 className="text-white text-2xl font-bold mb-6">Eventos Cósmicos</h2>

        <div className="flex flex-col gap-6">
          {cosmicEvents.map((event) => (
            <div
              key={event.id}
              className="bg-[#1c1c3a] rounded-lg overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-400 mb-4">{event.description}</p>

                <Link
                  to={`/astrologia/${event.slug}`}
                  className="bg-[#4e4bff] text-white px-4 py-2 rounded-full inline-block hover:bg-[#3a37ff] transition-colors"
                >
                  Aprende más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
