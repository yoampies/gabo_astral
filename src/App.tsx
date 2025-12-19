import React, { Suspense, lazy } from 'react'; // 1. Importamos lazy y Suspense
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import PageLoader from './components/PageLoader';

const Home = lazy(() => import('./pages/Home'));
const Tarot = lazy(() => import('./pages/Tarot'));
const Astrology = lazy(() => import('./pages/Astrology'));
const Contact = lazy(() => import('./pages/Contact'));
const ArticleDetails = lazy(() => import('./pages/ArticleDetails'));

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-black to-[#0b0b22] from-30%">
      <Router>
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tarot" element={<Tarot />} />
            <Route path="/astrologia" element={<Astrology />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/astrologia/:slug" element={<ArticleDetails />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
