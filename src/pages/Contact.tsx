import React from 'react';
import Astrogabo from '../sections/Astrogabo';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../sections/ContactForm';

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contacto | Agenda tu Consulta con Gabo Astral</title>
        <meta
          name="description"
          content="¿Tienes dudas sobre tu camino espiritual? Contáctame para agendar una sesión personalizada de tarot o astrología."
        />
      </Helmet>

      {/* Agregamos overflow-x-hidden al contenedor padre por seguridad */}
      <div className="text-gray-200 min-h-screen pb-10 overflow-x-hidden">
        <div className="w-11/12 lg:w-9/12 mx-auto pt-8 flex justify-center md:justify-start">
          <h1 className="text-2xl font-semibold text-center md:text-left pl-0 md:pl-2">
            Contacto
          </h1>
        </div>

        <Astrogabo />
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
