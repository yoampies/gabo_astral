import Dashboard from '../sections/Dashboard';
import Events from '../sections/Events';
import Reviews from '../sections/Reviews';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Gabo Astral | Tarot, Astrología y Guía Espiritual</title>
        <meta
          name="description"
          content="Bienvenido a Gabo Astral. Descubre tu camino a través del tarot, la lectura de carta natal y consejos astrológicos para tu crecimiento personal."
        />
        <meta property="og:title" content="Gabo Astral | Tarot y Astrología" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div>
        <Dashboard />

        <Events />
        <Reviews />
      </div>
    </>
  );
};

export default Home;
