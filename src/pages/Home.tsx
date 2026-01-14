import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import Events from '../sections/Events';
import Reviews from '../sections/Reviews';

const Dashboard = lazy(() => import('../sections/Dashboard'));

const DashboardLoader = () => (
  <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center">
    <div className="text-[#FFE6B7] text-xl font-light animate-pulse">
      Consultando a los astros...
    </div>
  </div>
);

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
        <Suspense fallback={<DashboardLoader />}>
          <Dashboard />
        </Suspense>

        <div className="relative z-10 bg-white">
          <Events />
          <Reviews />
        </div>
      </div>
    </>
  );
};

export default Home;
