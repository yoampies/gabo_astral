// Importa el hook 'useState' de React para gestionar el estado del componente.
import React, { useState } from "react";
import { IFormData } from "../types";

// Define el componente funcional 'ContactForm'.
const ContactForm: React.FC = () => {
  // Utiliza 'useState' para crear el estado 'formData', que almacenará los valores del formulario.
  // Se inicializa con un objeto que tiene propiedades para cada campo del formulario.
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    service: "",
    comment: "",
    phone: "",
  });

  // Define la función 'handleChange' para actualizar el estado cuando cambian los campos del formulario.
  // Recibe el evento del cambio como argumento.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    // Desestructura 'name' y 'value' del objeto 'e.target' (el elemento que disparó el evento).
    const { name, value } = e.target;
    // Actualiza el estado 'formData' utilizando el operador de propagación (...) para mantener los
    // valores existentes y sobrescribir solo el campo que ha cambiado.
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Define la función 'handleSubmit' para manejar el envío del formulario.
  // Recibe el evento de envío como argumento.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // 'e.preventDefault()' evita que la página se recargue, que es el comportamiento por defecto de un formulario.
    e.preventDefault();
    // Muestra los datos del formulario en la consola para depuración. En una aplicación real, aquí se enviarían los datos a un servidor.
    console.log("Form submitted:", formData);
  };

  // El componente retorna la estructura JSX del formulario de contacto.
  return (
    // Contenedor principal del formulario. Clases de Tailwind CSS para centrado y espaciado.
    <div className="flex justify-center items-center min-h-screen mt-12">
      <form
        // Asigna la función 'handleSubmit' al evento 'onSubmit' del formulario.
        onSubmit={handleSubmit}
        // Clases de Tailwind para el estilo del formulario (ancho, color de fondo, esquinas redondeadas, relleno).
        className="w-9/12 bg-[#1c1c3a] rounded-lg px-8 pt-6 pb-8"
      >
        {/* Título principal del formulario */}
        <p className="text-xl text-white">Formulario de Contacto</p>
        {/* Descripción del formulario */}
        <p className="text-md text-white mt-4 mb-6">Envíame un mensaje con tu información de contacto, el servicio en el que estás interesado,
          y algún comentario para entender mejor la situación en la que deseas que te apoye, y te contactaré tan pronto como pueda!
        </p>
        {/* Contenedor para los campos del formulario. */}
        <div className="bg-gray-300 rounded-xl px-6 py-6">
          {/* Campo de Nombre */}
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              // El valor del input está controlado por el estado 'formData'.
              value={formData.name}
              // El evento 'onChange' llama a la función 'handleChange' para actualizar el estado.
              onChange={handleChange}
              // El atributo 'required' hace que este campo sea obligatorio.
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Campo de Correo Electrónico */}
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Correo
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Campo de Servicio (selector) */}
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-bold mb-2"
              htmlFor="service"
            >
              Servicio
            </label>
            <select
              name="service"
              id="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
            >
              {/* Opciones del selector para diferentes servicios */}
              <option value="">Seleccione un servicio</option>
              <option value="consulting">Carta Natal</option>
              <option value="development">Sinastría</option>
              <option value="design">Geo-Astrología</option>
              <option value="other">Tarot</option>
            </select>
          </div>

          {/* Campo de Comentario (área de texto) */}
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-bold mb-2"
              htmlFor="comment"
            >
              Comentario
            </label>
            <textarea
              name="comment"
              id="comment"
              value={formData.comment}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>

          {/* Campo de Número de Teléfono (opcional) */}
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Número de Teléfono (Opcional)
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Botón de envío del formulario */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación.
export default ContactForm;