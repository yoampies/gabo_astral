import prof_pic_1 from '../assets/prof_pic1.jpg';
import prof_pic_2 from '../assets/prof_pic2.jpg';
import prof_pic_3 from '../assets/prof_pic3.jpg';
import soul from '../assets/soul.jpg';
import lifepath from '../assets/lifepath.jpg';
import empowerment from '../assets/empowerment.jpg';


export const navLinks = [
    {
        id: 1,
        name: 'Tarot',
        href: '/tarot'
    },
    {
        id: 2,
        name: 'Astrología',
        href: '/astrologia'
    },
    {
        id: 3,
        name: 'Contacto',
        href: '/contacto'
    }
];

export const reviews = [
    {
        id: 1,
        img: prof_pic_1,
        name: 'Maria Garcia',
        date: '26/10/2024',
        comment: 'Desde que conocí a Gabriel, mis consultas astrológicas han tomado un nuevo rumbo. ' +
                'Su capacidad para interpretar las cartas y conectar los puntos de mi vida de una manera tan precisa es asombrosa. '+ 
                'Gracias a sus consejos, he logrado comprenderme mejor a mí misma y tomar decisiones más alineadas con mi verdadero ser. ' +
                '¡Lo recomiendo ampliamente!'
    },
    {
        id: 2,
        img: prof_pic_2,
        name: 'Julio Perez',
        date: '05/02/2022',
        comment: 'Gabriel tiene un don especial para descifrar las estrellas. '+
                'Sus lecturas son claras, precisas y me han ayudado a comprenderme mejor a mí misma. '+
                '¡Recomiendo sus servicios al 100%!'
    },
    {
        id: 3,
        img: prof_pic_3,
        name: 'Juan Marino',
        date: '16/01/2023',
        comment: 'Gracias a Gabriel, he encontrado una guía confiable en mi camino espiritual. '+
        'Sus consejos astrológicos me han brindado claridad y apoyo en momentos de incertidumbre.'
    },
];

export const slides = [
    {
      title: 'Descubre los secretos de tu alma con el Tarot',
      text: 'El Tarot es mucho más que un simple juego de cartas. Es una herramienta ancestral que te conecta con tu sabiduría interior, revelando patrones, oportunidades y desafíos que se esconden en tu subconsciente. A través de símbolos poderosos y mensajes profundos, el Tarot te guía hacia un mayor autoconocimiento y te empodera para tomar decisiones más acertadas.',
      image: soul,
    },
    {
      title: 'Tu guía en el camino de la vida',
      text: '¿Buscas respuestas a tus preguntas? ¿Necesitas tomar una decisión importante? El Tarot puede ayudarte en diversas áreas de tu vida, como relaciones,profundizando en tus vínculos afectivos y encuentrando soluciones a los desafíos en pareja o familia; carrera, descubriendo tu vocación, toma decisiones profesionales y encuentra oportunidades de crecimiento; bienestar, mejorando tu autoconocimiento, supera bloqueos emocionales y conecta con tu yo interior; y espiritualidad, explorando tu conexión con el universo y descubriendo tu propósito de vida.',
      image: lifepath,
    },
    {
      title: 'Con Gabriel, encuentra claridad y empoderamiento',
      text: 'Con una lectura personalizada, Gabriel te ayudará a:\n\nClarificar tus dudas: Obtendrás respuestas claras y concisas a tus preguntas.\nTomar mejores decisiones: El Tarot te guiará hacia el camino correcto.\nSuperar obstáculos: Identificarás los desafíos y encontrarás soluciones.\nCrecer personalmente: Descubrirás tu potencial y alcanzarás tus metas.\n\n¡Agenda tu consulta ahora y descubre el poder transformador del Tarot!',
      image: empowerment,
    },
  ];