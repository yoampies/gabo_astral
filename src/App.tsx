import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './sections/Navbar';
import PageLoader from './components/PageLoader';

const Home = lazy(() => import('./pages/Home'));
const Tarot = lazy(() => import('./pages/Tarot'));
const Astrology = lazy(() => import('./pages/Astrology'));
const Contact = lazy(() => import('./pages/Contact'));
const ArticleDetails = lazy(() => import('./pages/ArticleDetails'));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tarot" element={<Tarot />} />
          <Route path="/astrologia" element={<Astrology />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/articulo/:id" element={<ArticleDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
