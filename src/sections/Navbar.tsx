import { navLinks } from '../constants/constants';
import { INavLinks } from '../types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. IMPORTANTE: Importamos Link

const Navbar: React.FC = () => {
  // Estado para controlar el menú en móviles
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="p-4 md:mx-12 relative z-50">
      <div className="container mx-auto flex justify-between items-center text-md text-gray-400 font-semibold">
        {/* Logo / Inicio - CAMBIO 1: Usar Link en lugar de a href */}
        <Link to="/">
          <span className="hover:text-white transition-colors">Inicio</span>
        </Link>

        {/* Botón Hamburguesa (Solo visible en móviles) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-400 hover:text-white focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu (Oculto en móviles) */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((item: INavLinks) => (
            <li key={item.id}>
              {/* CAMBIO 2: Usar Link en el menú de escritorio */}
              <Link
                to={item.href}
                className="hover:text-white transition-all duration-150"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu (Overlay) */}
      <div
        className={`
        fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
      >
        {/* Botón para cerrar dentro del menú móvil */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-8 text-gray-400 hover:text-white"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {navLinks.map((item: INavLinks) => (
          /* CAMBIO 3: Usar Link en el menú móvil */
          <Link
            key={item.id}
            to={item.href}
            onClick={toggleMenu} // Cerramos el menú al hacer clic en un link
            className="text-2xl text-gray-400 hover:text-white transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
