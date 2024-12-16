import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    comment: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen mt-12">
      <form
        onSubmit={handleSubmit}
        className="w-9/12 bg-[#1c1c3a] rounded-lg px-8 pt-6 pb-8"
      >
        <p className="text-xl text-white">Formulario de Contacto</p>
        <p className="text-md text-white mt-4 mb-6">Envíame un mensaje con tu información de contacto, el servicio en el que estás interesado,
          y algún comentario para entender mejor la situación en la que deseas que te apoye, y te contactaré tan pronto como pueda!
        </p>
        <div className="bg-gray-300 rounded-xl px-6 py-6">
          {/* Name Field */}
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

          {/* Email Field */}
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

          {/* Service Field */}
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
              <option value="">Seleccione un servicio</option>
              <option value="consulting">Carta Natal</option>
              <option value="development">Sinastría</option>
              <option value="design">Geo-Astrología</option>
              <option value="other">Tarot</option>
            </select>
          </div>

          {/* Comment Field */}
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

          {/* Phone Field */}
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

          {/* Submit Button */}
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

export default ContactForm;
