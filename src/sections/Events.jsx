import React from 'react'

export default function Events() {
  return (
    <section className="bg-gradient-to-b from-black from-30% to-[#0b0b22]">
      <div className="container mx-auto w-9/12">
        {/* Section Title */}
        <h2 className="text-white text-2xl font-bold mb-6">Today's Cosmic Events</h2>
        
        {/* Event Cards */}
        <div className="flex flex-col gap-6">
          
          {/* Card 1 - New Moon in Leo */}
          <div className="bg-[#1c1c3a] rounded-lg overflow-hidden">
            <img 
              src="https://via.placeholder.com/300x200" 
              alt="New Moon in Leo" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-white text-xl font-semibold mb-2">New Moon in Leo</h3>
              <p className="text-gray-400 mb-4">
                The New Moon in Leo is an excellent time to set intentions related to creativity, self-expression, romance, and fun. This is a time to think about the things that make you happy and bring light into your life.
              </p>
              <button className="bg-[#4e4bff] text-white px-4 py-2 rounded-full">
                Learn...
              </button>
            </div>
          </div>

          {/* Card 2 - Mercury enters Virgo */}
          <div className="bg-[#1c1c3a] rounded-lg overflow-hidden">
            <img 
              src="https://via.placeholder.com/300x200" 
              alt="Mercury enters Virgo" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-white text-xl font-semibold mb-2">Mercury enters Virgo</h3>
              <p className="text-gray-400 mb-4">
                When Mercury enters Virgo, we are more analytical, precise, and focused on details. This is a good time for organization, planning, and problem-solving.
              </p>
              <button className="bg-[#4e4bff] text-white px-4 py-2 rounded-full">
                Learn...
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
