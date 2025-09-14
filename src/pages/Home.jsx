// Importa otros componentes que se utilizarán en la página de inicio.
// Estos componentes representan diferentes secciones de la página:
// - Dashboard: Un panel principal o área de bienvenida.
// - Events: Una sección para mostrar eventos.
// - Reviews: Una sección para mostrar reseñas o testimonios.
// - Footer: El pie de página de la aplicación.
import Dashboard from '../sections/Dashboard'
import Events from '../sections/Events'
import Reviews from '../sections/Reviews'
import Footer from '../sections/Footer'


// Define el componente funcional 'Home'.
// Los componentes funcionales son la forma moderna de escribir componentes en React.
function Home() {

  // El método 'return' de un componente funcional devuelve el JSX que se renderizará en la interfaz de usuario.
  return (
    // Un div es el elemento contenedor principal para este componente.
    // A menudo se usa un Fragment (<>...</>) si no se necesita un div DOM real,
    // pero aquí se usa un div, que podría ser útil para aplicar estilos generales o
    // para propósitos de estructura.
    <div>
      {/* Renderiza el componente Dashboard. Este será la primera sección visible en la página de inicio. */}
      <Dashboard />
      {/* Renderiza el componente Events. Esta sección aparecerá debajo del Dashboard. */}
      <Events />
      {/* Renderiza el componente Reviews. Esta sección aparecerá debajo de Events. */}
      <Reviews />
      {/* Renderiza el componente Footer. Este será el pie de página que aparece al final de la página. */}
      {/* Nota: El componente Footer no está incluido en el return, lo que podría ser un error o una omisión intencionada.
          Si se desea que aparezca, debería añadirse dentro del div principal. */}
    </div>
  )
}

// Exporta el componente 'Home' como el exportación por defecto del módulo.
// Esto permite que el componente sea importado y utilizado en otras partes de la aplicación
// usando una sintaxis como: import Home from './ruta/a/Home'.
export default Home