import React, { Suspense, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Events from '../sections/Events';
import Reviews from '../sections/Reviews';

const Dashboard = React.lazy(() => import('../sections/Dashboard'));

const DashboardLoader = () => (
  <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/assets/nightsky.jpg')] bg-cover bg-center opacity-30 blur-sm"></div>
    <div className="z-10 flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-[#FFE6B7] text-lg font-light tracking-widest uppercase animate-pulse">
        Conectando...
      </p>
    </div>
  </div>
);

const Home: React.FC = () => {
  const [shouldLoad3D, setShouldLoad3D] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoad3D(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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

      <main className="relative w-full">
        {/* Renderizado Condicional Real */}
        {shouldLoad3D ? (
          <Suspense fallback={<DashboardLoader />}>
            <Dashboard />
          </Suspense>
        ) : (
          <DashboardLoader />
        )}

        <div className="relative z-10 bg-gradient-to-b from-[#1c1c3a] to-[#000000]">
          <Events />
          <Reviews />
        </div>
      </main>
    </>
  );
};

export default Home;
