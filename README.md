
# Gabo Astral - Full Stack Portfolio

Bienvenido a **Gabriel Astral**, el portafolio astrológico de Gabriel Ampíes, donde hablamos de astrología, tarot y guía espiritual. Esta aplicación web interactiva permite a los usuarios explorar servicios astrológicos, realizar lecturas gratuitas de tarot y contactar directamente para consultas personalizadas. La versión movil sigue estando bajo construcción.

## 🚀 Características principales

- **Landing Page moderna** con animaciones 3D y diseño responsivo.
- **Lectura gratuita de Tarot**: Elige tres cartas del tarot mayor y recibe orientación espiritual.
- **Sección de Astrología**: Explicaciones sobre carta natal, revolución solar, sinastría y otros servicios astrológicos.
- **Testimonios de clientes**: Reseñas reales para generar confianza.
- **Formulario de contacto**: Contacta directamente para consultas personalizadas.
- **Animaciones y modelos 3D**: Experiencia visual atractiva usando Three.js y React Three Fiber.

## 🛠️ Tecnologías utilizadas

- **React**: Librería principal para la interfaz de usuario.
- **Vite**: Bundler ultrarrápido para desarrollo y producción.
- **Tailwind CSS**: Framework de estilos utilitario para diseño moderno y responsivo.
- **Three.js & React Three Fiber**: Renderizado de modelos y escenas 3D interactivas.
- **@react-three/drei, leva, maath**: Utilidades y controles para escenas 3D.
- **React Router DOM**: Navegación entre páginas.
- **GSAP**: Animaciones avanzadas.
- **PostCSS & Autoprefixer**: Procesamiento de estilos.
- **ESLint**: Linter para mantener calidad de código.

## 📁 Estructura del proyecto

```
├── public/                # Archivos públicos y assets
├── src/
│   ├── assets/            # Imágenes, modelos 3D y recursos
│   ├── components/        # Componentes reutilizables (Card, Model, TarotCarousel, etc.)
│   ├── constants/         # Datos estáticos (reseñas, slides, astrología)
│   ├── pages/             # Páginas principales (Home, Tarot, Astrology, Contact)
│   ├── sections/          # Secciones de la landing (Navbar, Dashboard, Footer, etc.)
│   ├── App.jsx            # Componente raíz
│   └── main.jsx           # Punto de entrada
├── index.html             # HTML principal
├── tailwind.config.js     # Configuración de Tailwind
├── vite.config.js         # Configuración de Vite
├── package.json           # Dependencias y scripts
└── README.md              # Documentación
```

## 🌐 Navegación

- `/`           : Página principal (Dashboard 3D, eventos, reseñas)
- `/tarot`      : Lectura gratuita de tarot interactivo
- `/astrologia` : Explicaciones y servicios astrológicos
- `/contacto`   : Formulario de contacto y presentación