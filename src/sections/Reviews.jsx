import React from 'react';
import { reviews } from '../constants';
import prof_pic_1 from '../assets/prof_pic1.jpg';


export default function Reviews() {
  return (
    <section className="mt-6">
      <div className="container mx-auto w-9/12">
        {/* Section Title */}
        <h2 className="text-white text-2xl font-bold mb-6">Clientes</h2>
        
        {/* Review Cards */}
        <div className="flex flex-col gap-2">
          {
          reviews.map((item) => (
          <div key={item.id}>
            <div className="flex">
              <img src={item.img} className="rounded-full w-12 h-12" />
              <div className="flex flex-col ml-6">
                <p className="text-white font-semibold">{item.name}</p>
                <p className="text-gray-300">{item.date}</p>
              </div>
            </div>
            <p className="text-gray-400 my-4">
              {item.comment}
            </p>
          </div>
          ))
          }
        </div>
      </div>
    </section>
  )
}
