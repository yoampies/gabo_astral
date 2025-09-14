// Importa React, necesario para crear componentes de React.
import React from 'react';
// Importa el array 'reviews' desde el archivo de constantes. Este array contiene los datos de las reseñas.
import { reviews } from '../constants';
// Importa una imagen de perfil de ejemplo (aunque no se utiliza en el código actual).
import prof_pic_1 from '../assets/prof_pic1.jpg';


// Define el componente funcional 'Reviews'.
// Este componente se encarga de mostrar una sección de reseñas de clientes.
export default function Reviews() {
  // El componente retorna una sección de la página web.
  return (
    // La etiqueta <section> define una sección temática independiente en la página.
    // 'mt-6' es una clase de Tailwind CSS que añade un margen superior, separando esta sección de la anterior.
    <section className="mt-6">
      {/* Contenedor principal para centrar el contenido y definir su ancho. */}
      {/* 'container mx-auto w-9/12' son clases de Tailwind que centran el contenedor y le dan un ancho del 75% de la pantalla. */}
      <div className="container mx-auto w-9/12">
        {/* Título de la sección. */}
        {/* 'text-white', 'text-2xl', 'font-bold', 'mb-6' son clases de Tailwind para el estilo: color blanco, tamaño de fuente grande (2xl), negrita y un margen inferior de 6 unidades. */}
        <h2 className="text-white text-2xl font-bold mb-6">Clientes</h2>
        
        {/* Contenedor para las tarjetas de reseñas. */}
        {/* 'flex flex-col' hace que los elementos hijos (las reseñas) se apilen verticalmente. 'gap-2' añade un espacio de 2 unidades entre cada reseña. */}
        <div className="flex flex-col gap-2">
          {/* Se utiliza el método 'map' para iterar sobre el array 'reviews'. */}
          {/* Por cada elemento 'item' en el array 'reviews', se renderiza un bloque de reseña. */}
          {
          reviews.map((item) => (
          /* Cada tarjeta de reseña se envuelve en un div. La prop 'key' es esencial para que React pueda identificar de forma única cada elemento en la lista renderizada, lo que optimiza las actualizaciones. */
          <div key={item.id}>
            {/* Contenedor para la información del autor de la reseña: su imagen y su nombre/fecha. */}
            <div className="flex">
              {/* Muestra la imagen del autor de la reseña. */}
              {/* 'rounded-full' hace que la imagen sea circular. 'w-12 h-12' define su ancho y alto en 12 unidades (aproximadamente 48px). */}
              <img src={item.img} className="rounded-full w-12 h-12" />
              {/* Contenedor para el nombre y la fecha del autor. Se apilan verticalmente. */}
              {/* 'flex flex-col' apila el nombre y la fecha verticalmente. 'ml-6' añade un margen a la izquierda de 6 unidades para separarlo de la imagen. */}
              <div className="flex flex-col ml-6">
                {/* Muestra el nombre del autor de la reseña. */}
                {/* 'text-white' y 'font-semibold' aplican estilo de texto blanco y seminegrita. */}
                <p className="text-white font-semibold">{item.name}</p>
                {/* Muestra la fecha de la reseña. */}
                {/* 'text-gray-300' aplica un color de texto gris claro. */}
                <p className="text-gray-300">{item.date}</p>
              </div>
            </div>
            {/* Muestra el comentario de la reseña. */}
            {/* 'text-gray-400' aplica un color de texto gris. 'my-4' añade márgenes superior e inferior de 4 unidades. */}
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