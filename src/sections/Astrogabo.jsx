// Importa el componente Canvas de '@react-three/fiber' para crear la escena 3D.
import { Canvas } from "@react-three/fiber";
// Importa el componente Avatar, que representa el modelo 3D a mostrar.
import Avatar from "../components/Avatar";
// Importa OrbitControls para permitir la interacción del usuario con el modelo (zoom, rotación)
// y PerspectiveCamera para definir la vista de la cámara en la escena 3D.
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

// Importa las imágenes que se utilizarán para representar diferentes servicios.
import astrology from "../assets/astrology.png";
import love from "../assets/love.png";
import travel from "../assets/travel.png";
import tarot from "../assets/tarot.png";

// Define el componente funcional 'Astrogabo'.
export default function Astrogabo() {
  // El componente retorna una estructura JSX que representa la interfaz de usuario.
  return (
    // Un div principal que actúa como contenedor para la sección.
    // Utiliza clases de Tailwind CSS para estilizar:
    // - 'w-9/12': Ancho del 9/12 (75%) del contenedor padre.
    // - 'mx-auto': Centra el contenedor horizontalmente.
    // - 'bg-[#1c1c3a]': Establece un color de fondo azul oscuro personalizado.
    // - 'rounded-lg': Aplica bordes redondeados.
    // - 'min-h-[500px]': Altura mínima de 500px.
    // - 'mt-6': Margen superior de 6 unidades.
    <div className="w-9/12 mx-auto bg-[#1c1c3a] rounded-lg min-h-[500px] mt-6">
      {/* Un div que organiza el contenido en una cuadrícula con 5 columnas y espacios entre ellas. */}
      <div className="grid grid-cols-5 gap-2">
        {/* Columna izquierda: Contiene el lienzo 3D y el modelo. */}
        {/* - 'col-span-2': Ocupa 2 de las 5 columnas de la cuadrícula. */}
        {/* - 'mt-6 ml-2': Margen superior e izquierdo. */}
        {/* - 'rounded-lg': Bordes redondeados. */}
        {/* - 'h-[450px]': Altura fija de 450px. */}
        <div className="col-span-2 mt-6 ml-2 rounded-lg h-[450px]">
          {/* El componente Canvas de '@react-three/fiber' donde se renderizará la escena 3D. */}
          <Canvas>
            {/* Iluminación ambiental: Proporciona una luz suave y uniforme en toda la escena. */}
            <ambientLight intensity={0.5} />
            {/* Luz direccional principal: Simula una fuente de luz puntual, como el sol. */}
            {/* - 'position={[0, 5, 5]}': Ubica la luz en el eje Y (arriba) y Z (adelante). */}
            {/* - 'intensity={2}': Intensidad de la luz. */}
            <directionalLight position={[0, 5, 5]} intensity={2} />
            {/* Luz direccional secundaria: Añade profundidad y volumen a la escena. */}
            {/* - 'position={[-5, 5, 5]}': Ubica esta luz a la izquierda y adelante. */}
            <directionalLight position={[-5, 5, 5]} intensity={2} />

            {/* Configuración de la cámara con perspectiva. */}
            {/* - 'makeDefault': La establece como la cámara principal de la escena. */}
            {/* - 'position={[0, 0, 10]}': La ubica en el eje Z (lejos del espectador). */}
            {/* - 'near={1}, far={1000}': Define el rango de visibilidad de la cámara. */}
            <PerspectiveCamera makeDefault position={[0, 0, 10]} near={1} far={1000} />

            {/* Renderiza el componente Avatar (el modelo 3D). */}
            {/* - 'scale={4.3}': Ajusta el tamaño del avatar. */}
            {/* - 'position={[0, -4, -1.1]}': Posiciona el avatar en la escena. */}
            {/* - 'rotation={[0.2, 0.5, 0]}': Aplica una rotación inicial al avatar. */}
            <Avatar scale={4.3} position={[0, -4, -1.1]} rotation={[0.2, 0.5, 0]}/>

            {/* Habilita los controles de órbita para permitir al usuario interactuar con el modelo. */}
            {/* - 'enableZoom={true}': Permite hacer zoom con la rueda del ratón. */}
            <OrbitControls enableZoom={true} />
          </Canvas>
        </div>

        {/* Columna derecha: Contiene la información textual y los servicios. */}
        {/* - 'col-span-3': Ocupa 3 de las 5 columnas de la cuadrícula. */}
        {/* - 'bg-gray-200': Fondo gris claro. */}
        {/* - 'h-[500px]': Altura fija de 500px. */}
        {/* - 'rounded-r-lg': Borde redondeado solo en el lado derecho. */}
        <div className="col-span-3 bg-gray-200 h-[500px] rounded-r-lg">
          {/* Título principal: Presenta al profesional. */}
          {/* - 'text-gray-500': Color de texto gris. */}
          {/* - 'text-lg': Tamaño de fuente grande. */}
          {/* - 'text-center': Alineación centrada del texto. */}
          {/* - 'mt-10 mb-6': Márgenes superior e inferior. */}
          <h1 className="text-gray-500 text-lg text-center mt-10 mb-6">Soy <span className="font-semibold">Gabriel Ampíes</span></h1>

          {/* Línea divisoria horizontal. */}
          {/* - 'bg-gray-400': Color gris medio. */}
          {/* - 'border-0 h-px': Elimina el borde predeterminado y establece una altura de 1px. */}
          {/* - 'my-2': Margen vertical. */}
          {/* - 'w-10/12': Ancho del 10/12 (aprox. 83.3%) del contenedor. */}
          {/* - 'mx-auto': Centra la línea horizontalmente. */}
          <hr className="bg-gray-400 border-0 h-px my-2 w-10/12 mx-auto"/>

          {/* Párrafo descriptivo: Explica el enfoque y los beneficios de la astrología. */}
          {/* - 'text-gray-500': Color de texto gris. */}
          {/* - 'text-md': Tamaño de fuente mediano. */}
          {/* - 'mx-10': Margen horizontal. */}
          {/* - 'mt-6': Margen superior. */}
          {/* - 'leading-7': Altura de línea. */}
          <p className="text-gray-500 text-md text-center mx-10 mt-6 leading-7 text-center">
            A través de mi trabajo, he visto cómo esta antigua sabiduría puede transformar vidas. Si te sientes estancado,
            perdido o simplemente buscas un nuevo rumbo, la astrología puede ser tu guía. Al analizar tu carta natal, identificaremos los patrones energéticos
            que influyen en tu vida y te proporcionaremos las herramientas necesarias para superar obstáculos y alcanzar tus metas.
            Te acompañaré en este proceso de transformación, brindándote claridad, comprensión y empoderamiento.
          </p>

          {/* Contenedor para los iconos y nombres de los servicios ofrecidos. */}
          {/* - 'mt-6 flex justify-between': Margen superior y usa Flexbox para distribuir los elementos equitativamente. */}
          {/* - 'mx-12': Margen horizontal. */}
          <div className="mt-6 flex justify-between mx-12 mt-6">
            {/* Sección de "Sinastrías". */}
            {/* - 'flex flex-col gap-2': Usa Flexbox para organizar los elementos en columna con espacio entre ellos. */}
            <div className="flex flex-col gap-2">
              {/* Imagen del icono de amor. */}
              {/* - 'size-16': Tamaño de 16 unidades. */}
              {/* - 'mx-auto': Centra la imagen horizontalmente. */}
              <img src={love} className="size-16 mx-auto"/>
              {/* Texto del servicio. */}
              <p className="text-gray-500 font-semibold">Sinastrías</p>
            </div>

            {/* Sección de "Tarot". */}
            <div className="flex flex-col gap-2">
              {/* Imagen del icono de tarot. */}
              <img src={tarot} className="size-16 mx-auto"/>
              {/* Texto del servicio. */}
              {/* - 'text-center': Alineación centrada del texto. */}
              <p className="text-gray-500 font-semibold text-center">Tarot</p>
            </div>

            {/* Sección de "Geo-astrología". */}
            <div className="flex flex-col gap-2">
              {/* Imagen del icono de viaje. */}
              <img src={travel} className="size-16 mx-auto"/>
              {/* Texto del servicio. */}
              <p className="text-gray-500 font-semibold">Geo-astrología</p>
            </div>

            {/* Sección de "Carta Natal". */}
            <div className="flex flex-col gap-2">
              {/* Imagen del icono de astrología. */}
              <img src={astrology} className="size-16 mx-auto"/>
              {/* Texto del servicio. */}
              <p className="text-gray-500 font-semibold">Carta Natal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}