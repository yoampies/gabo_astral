// Importa el componente Astrogabo desde la ubicación ../sections/Astrogabo.
// Este componente contiene elementos relacionados con la astrología o un experto llamado Astrogabo.
import Astrogabo from "../sections/Astrogabo"

// Importa el componente ContactForm desde la ubicación ../sections/ContactForm.
// Este componente contiene un formulario para que los usuarios puedan contactar.
import ContactForm from "../sections/ContactForm"

// Define el componente funcional principal llamado "Contact".
// Este componente actúa como una página o sección de contacto.
export default function Contact() {
  // La función render() del componente retorna la estructura JSX que se mostrará.
  return (
    // Un div principal que envuelve todo el contenido de la página de contacto.
    <div className="text-gray-200"> {/* Aplica un color de texto grisáceo general a todo el contenido dentro de este div. */}
      {/* Encabezado principal de la página de contacto. */}
      {/* Clases de Tailwind CSS:
          - text-gray-200: Define el color del texto.
          - text-2xl: Establece el tamaño de fuente a 2xl.
          - ml-40: Aplica un margen izquierdo de 40 unidades.
          - pl-2: Aplica un padding izquierdo de 2 unidades.
          - font-semibold: Hace que la fuente sea semi-negrita.
      */}
      <h1 className="text-gray-200 text-2xl ml-40 pl-2 font-semibold">Contacto</h1>

      {/* Renderiza el componente Astrogabo. */}
      {/* Se espera que este componente muestre información o elementos visuales relacionados con Astrogabo. */}
      <Astrogabo />

      {/* Renderiza el componente ContactForm. */}
      {/* Se espera que este componente muestre el formulario de contacto para que el usuario pueda interactuar. */}
      <ContactForm />
    </div>
  )
}