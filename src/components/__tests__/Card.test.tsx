import { render, screen, fireEvent } from '@testing-library/react';
import { expect, it, describe, vi } from 'vitest';
import Card from '../Card';

describe('Componente Card', () => {
  const mockCard = {
    id: 1,
    name: 'The Fool',
    image: '/fool.jpg',
    flipped: false,
    isReversed: false,
  };

  it('debe mostrar el nombre de la carta en el atributo alt', () => {
    render(
      <Card
        card={mockCard}
        onClick={vi.fn()}
        isFlipped={true}
        isReversed={false}
      />
    );
    const imgElement = screen.getByAltText(/the fool/i);
    expect(imgElement).toBeInTheDocument();
  });
});

describe('Componente Card', () => {
  const mockCard = {
    id: 1,
    name: 'The Moon',
    image: '/moon.jpg',
    flipped: false,
    isReversed: false,
  };
  const mockOnClick = vi.fn(); // Creamos un "espía" para la función

  it('debe mostrar la parte trasera (dorso) cuando no está volteada', () => {
    const { container } = render(
      <Card
        card={mockCard}
        onClick={mockOnClick}
        isFlipped={false}
        isReversed={false}
      />
    );
    // Buscamos la clase CSS que define la cara trasera
    const backFace = container.querySelector('.card-back');
    expect(backFace).toBeInTheDocument();
  });

  it('debe mostrar la imagen de la carta cuando está volteada', () => {
    render(
      <Card
        card={mockCard}
        onClick={mockOnClick}
        isFlipped={true}
        isReversed={false}
      />
    );
    const img = screen.getByAltText(/the moon/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/moon.jpg');
  });

  it('debe ejecutar la función onClick al hacer clic', () => {
    render(
      <Card
        card={mockCard}
        onClick={mockOnClick}
        isFlipped={false}
        isReversed={false}
      />
    );
    const cardContainer = screen.getByRole('img', { hidden: true })
      .parentElement?.parentElement;
    // Usamos fireEvent para simular el clic del usuario
    if (cardContainer) fireEvent.click(cardContainer);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith(mockCard);
  });
});
