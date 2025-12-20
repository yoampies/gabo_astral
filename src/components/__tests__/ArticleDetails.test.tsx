import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { expect, it, describe } from 'vitest';
import ArticleDetail from '../../pages/ArticleDetails';

describe('Componente ArticleDetail', () => {
  it('debe mostrar el contenido correcto basado en el slug de la URL', () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/astrologia/luna-nueva-en-leo']}>
          <Routes>
            <Route path="/astrologia/:slug" element={<ArticleDetail />} />
          </Routes>
        </MemoryRouter>
      </HelmetProvider>
    );

    // 🚀 CAMBIO: Buscamos específicamente el encabezado de nivel 1
    const heading = screen.getByRole('heading', {
      level: 1,
      name: /luna nueva en leo/i,
    });
    expect(heading).toBeInTheDocument();

    // También podemos verificar que la imagen esté ahí por su alt
    const image = screen.getByAltText(/luna nueva en leo/i);
    expect(image).toBeInTheDocument();
  });
});
