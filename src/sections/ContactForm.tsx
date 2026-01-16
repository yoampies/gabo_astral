import React, { useState } from 'react';
import { IFormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    email: '',
    service: '',
    comment: '',
    phone: '',
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center mt-8 md:mt-12 mb-12">
      <form
        onSubmit={handleSubmit}
        className="w-11/12 md:w-8/12 lg:w-6/12 max-w-2xl bg-[#1c1c3a] rounded-lg px-4 md:px-8 pt-6 pb-8 shadow-xl"
      >
        <p className="text-xl text-white text-center md:text-left">
          Formulario de Contacto
        </p>
        <p className="text-sm md:text-md text-gray-300 mt-4 mb-6 text-justify md:text-left">
          Envíame un mensaje con tu información de contacto, el servicio en el
          que estás interesado, y algún comentario para entender mejor la
          situación en la que deseas que te apoye.
        </p>

        {/* Contenedor interno con menos padding en móvil */}
        <div className="bg-gray-300 rounded-xl px-4 py-6 md:px-6">
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
              value={formData.name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline bg-white"
            >
              <option value="">Seleccione un servicio</option>
              <option value="consulting">Carta Natal</option>
              <option value="development">Sinastría</option>
              <option value="design">Geo-Astrología</option>
              <option value="other">Tarot</option>
            </select>
          </div>

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
              rows={4}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>

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

          <div className="flex items-center justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition-colors w-full md:w-auto"
            >
              Enviar Mensaje
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
