import prof_pic_1 from '../assets/prof_pic1.jpg';
import prof_pic_2 from '../assets/prof_pic2.jpg';
import prof_pic_3 from '../assets/prof_pic3.jpg';
import soul from '../assets/soul.jpg';
import lifepath from '../assets/lifepath.jpg';
import empowerment from '../assets/empowerment.jpg';
import chart from '../assets/chart.jpg';
import synastry from '../assets/synastry.jpg';
import solarreturn from '../assets/solar-return.jpg';
import other from '../assets/other.jpg';


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
      text: 'El tarot es una herramienta poderosa que te puede guiar en diversos aspectos de tu vida. Desde el amor y las relaciones, hasta tu carrera profesional y crecimiento personal, el tarot te ofrece una perspectiva única y profunda sobre ti mismo y el mundo que te rodea. Al conectar con los símbolos arcanos, podrás tomar decisiones más acertadas, superar obstáculos y descubrir tu verdadero potencial. Ya sea que busques respuestas a preguntas específicas o simplemente desees explorar tu interior, el tarot te proporcionará la claridad y la orientación que necesitas.',
      image: lifepath,
    },
    {
      title: 'Con Gabriel, encuentra claridad y empoderamiento',
      text: 'Con una lectura de Tarot personalizada, Gabriel te ayudará a clarificar tus inquietudes, tomar decisiones más acertadas, superar obstáculos y descubrir tu máximo potencial. ¡Agenda tu consulta ahora y desbloquea el poder del Tarot para transformar tu vida!',
      image: empowerment,
    },
  ];

  export const astrology = [
    {
      title: "¿Qué es una Carta Natal?",
      text: `Tu carta natal es un retrato astrológico único que se crea en el momento exacto de tu nacimiento. 
      Es como una fotografía del cielo en ese instante, reflejando la influencia de los planetas y signos en tu vida. 
      Al igual que un horóscopo, pero mucho más personalizado, te brinda información sobre tu personalidad, relaciones, carrera y propósito de vida.`,
      image: chart
    },
    {
      title: "¿Qué es una Revolución Solar?",
      text: `Cada año, en la misma fecha y hora de tu nacimiento, ocurre un evento astrológico llamado Revolución Solar. 
      Este "cumpleaños cósmico" marca el inicio de un nuevo ciclo, ayudándote a comprender los temas principales del año, establecer metas y optimizar tu vida.`,
      image: solarreturn,
    },
    {
      title: "¿Qué es una Sinastría?",
      text: `La sinastría es el estudio de la compatibilidad entre dos cartas natales. 
      Permite descubrir atracción, compatibilidad, desafíos, oportunidades y el potencial de crecimiento en una relación.`,
      image: synastry,
    },
    {
      title: "Otros Elementos Atractivos",
      text: `Tránsitos planetarios, predicciones astrológicas, y la conexión entre astrología y espiritualidad brindan un enfoque holístico. 
      Consultas personalizadas ofrecen orientación adaptada a tus necesidades.`,
      image: other,
    },
  ];