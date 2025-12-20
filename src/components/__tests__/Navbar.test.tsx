import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { expect, it, describe } from 'vitest';
import Navbar from '../../sections/Navbar';

describe('Componente Navbar', () => {
  it('debe renderizar los enlaces de navegación correctamente', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Usamos getAllBy... porque sabemos que hay duplicados (Desktop y Mobile)
    const tarotLinks = screen.getAllByText(/tarot/i);
    expect(tarotLinks.length).toBeGreaterThan(0); // Verifica que haya al menos uno
    expect(tarotLinks[0]).toBeInTheDocument();
  });

  it('los enlaces deben tener las rutas correctas', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Obtenemos todos los links con ese nombre y probamos el primero
    const links = screen.getAllByRole('link', { name: /tarot/i });
    expect(links[0]).toHaveAttribute('href', '/tarot');
  });
});
