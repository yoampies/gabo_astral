import prof_pic_1 from '../assets/prof_pic1.webp';
import prof_pic_2 from '../assets/prof_pic2.webp';
import prof_pic_3 from '../assets/prof_pic3.webp';
import soul from '../assets/soul.webp';
import lifepath from '../assets/lifepath.webp';
import empowerment from '../assets/empowerment.webp';
import chart from '../assets/chart.webp';
import synastry from '../assets/synastry.webp';
import solarreturn from '../assets/solar-return.webp';
import other from '../assets/other.webp';

import moonimg from '../assets/moon.webp';
import mercury from '../assets/mercury.webp';

//Interface imports
import {
  IMajorArcanaCard,
  INavLinks,
  ISlidesInfo,
  IReviewInfo,
  IAstrologyInfo,
  IArticleDetails,
} from '../types';

//Major arcana imports
import fool from '../assets/tarot/Fool.webp';
import magician from '../assets/tarot/Magician.webp';
import highPriestess from '../assets/tarot/HighPriestess.webp';
import empress from '../assets/tarot/Empress.webp';
import emperor from '../assets/tarot/Emperor.webp';
import hierophant from '../assets/tarot/Hierophant.webp';
import lovers from '../assets/tarot/Lovers.webp';
import chariot from '../assets/tarot/Chariot.webp';
import strength from '../assets/tarot/Strength.webp';
import hermit from '../assets/tarot/Hermit.webp';
import wheelOfFortune from '../assets/tarot/WheelOfFortune.webp';
import justice from '../assets/tarot/Justice.webp';
import hangedMan from '../assets/tarot/HangedMan.webp';
import death from '../assets/tarot/Death.webp';
import temperance from '../assets/tarot/Temperance.webp';
import devil from '../assets/tarot/Devil.webp';
import tower from '../assets/tarot/Tower.webp';
import star from '../assets/tarot/Star.webp';
import moon from '../assets/tarot/Moon.webp';
import sun from '../assets/tarot/Sun.webp';
import judgement from '../assets/tarot/Judgement.webp';
import world from '../assets/tarot/World.webp';

export const navLinks: INavLinks[] = [
  {
    id: 1,
    name: 'Tarot',
    href: '/tarot',
  },
  {
    id: 2,
    name: 'Astrología',
    href: '/astrologia',
  },
  {
    id: 3,
    name: 'Contacto',
    href: '/contacto',
  },
];

export const reviews: IReviewInfo[] = [
  {
    id: 1,
    img: prof_pic_1,
    name: 'Maria Garcia',
    date: '26/10/2024',
    comment:
      'Desde que conocí a Gabriel, mis consultas astrológicas han tomado un nuevo rumbo. ' +
      'Su capacidad para interpretar las cartas y conectar los puntos de mi vida de una manera tan precisa es asombrosa. ' +
      'Gracias a sus consejos, he logrado comprenderme mejor a mí misma y tomar decisiones más alineadas con mi verdadero ser. ' +
      '¡Lo recomiendo ampliamente!',
  },
  {
    id: 2,
    img: prof_pic_2,
    name: 'Julio Perez',
    date: '05/02/2022',
    comment:
      'Gabriel tiene un don especial para descifrar las estrellas. ' +
      'Sus lecturas son claras, precisas y me han ayudado a comprenderme mejor a mí misma. ' +
      '¡Recomiendo sus servicios al 100%!',
  },
  {
    id: 3,
    img: prof_pic_3,
    name: 'Juan Marino',
    date: '16/01/2023',
    comment:
      'Gracias a Gabriel, he encontrado una guía confiable en mi camino espiritual. ' +
      'Sus consejos astrológicos me han brindado claridad y apoyo en momentos de incertidumbre.',
  },
];

export const slides: ISlidesInfo[] = [
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

export const astrology: IAstrologyInfo[] = [
  {
    title: '¿Qué es una Carta Natal?',
    text: `Tu carta natal es un retrato astrológico único que se crea en el momento exacto de tu nacimiento. 
      Es como una fotografía del cielo en ese instante, reflejando la influencia de los planetas y signos en tu vida. 
      Al igual que un horóscopo, pero mucho más personalizado, te brinda información sobre tu personalidad, relaciones, carrera y propósito de vida.`,
    image: chart,
  },
  {
    title: '¿Qué es una Revolución Solar?',
    text: `Cada año, en la misma fecha y hora de tu nacimiento, ocurre un evento astrológico llamado Revolución Solar. 
      Este "cumpleaños cósmico" marca el inicio de un nuevo ciclo, ayudándote a comprender los temas principales del año, establecer metas y optimizar tu vida.`,
    image: solarreturn,
  },
  {
    title: '¿Qué es una Sinastría?',
    text: `La sinastría es el estudio de la compatibilidad entre dos cartas natales. 
      Permite descubrir atracción, compatibilidad, desafíos, oportunidades y el potencial de crecimiento en una relación.`,
    image: synastry,
  },
  {
    title: 'Otros Elementos Atractivos',
    text: `Tránsitos planetarios, predicciones astrológicas, y la conexión entre astrología y espiritualidad brindan un enfoque holístico. 
      Consultas personalizadas ofrecen orientación adaptada a tus necesidades.`,
    image: other,
  },
];

export const majorArcana: IMajorArcanaCard[] = [
  { name: 'The Fool', image: fool },
  { name: 'The Magician', image: magician },
  { name: 'The High Priestess', image: highPriestess },
  { name: 'The Empress', image: empress },
  { name: 'The Emperor', image: emperor },
  { name: 'The Hierophant', image: hierophant },
  { name: 'The Lovers', image: lovers },
  { name: 'The Chariot', image: chariot },
  { name: 'Strength', image: strength },
  { name: 'The Hermit', image: hermit },
  { name: 'Wheel of Fortune', image: wheelOfFortune },
  { name: 'Justice', image: justice },
  { name: 'The Hanged Man', image: hangedMan },
  { name: 'Death', image: death },
  { name: 'Temperance', image: temperance },
  { name: 'The Devil', image: devil },
  { name: 'The Tower', image: tower },
  { name: 'The Star', image: star },
  { name: 'The Moon', image: moon },
  { name: 'The Sun', image: sun },
  { name: 'Judgement', image: judgement },
  { name: 'The World', image: world },
];

export const spread_times: string[] = [
  'Lo que pasó',
  'Lo que está pasando',
  'Lo que puede pasar',
] as const;

export const cosmicEvents: IArticleDetails[] = [
  {
    id: 1,
    title: 'Luna nueva en Leo',
    slug: 'luna-nueva-en-leo',
    image: moonimg,
    description:
      'La Luna Nueva en Leo es un momento excelente para establecer intenciones...',
    content: `La Luna Nueva en Leo marca el inicio de un ciclo de 28 días centrado en la soberanía personal y la chispa creativa. 
            En la astrología, Leo rige el corazón y el plexo solar; por lo tanto, esta lunación nos invita a salir de las sombras y 
            reclamar nuestro derecho a brillar. No es un momento para la modestia, sino para plantar semillas de proyectos que reflejen 
            nuestra esencia más auténtica. Es el periodo ideal para rituales de amor propio, para iniciar emprendimientos artísticos o 
            para reavivar la pasión en nuestras relaciones. Bajo este cielo, la pregunta clave es: ¿Qué haría si no tuviera miedo al 
            juicio de los demás?`,
  },
  {
    id: 2,
    title: 'Mercurio entra en Virgo',
    slug: 'mercurio-entra-en-virgo',
    image: mercury,
    description:
      'Cuando Mercurio entra en Virgo, nos volvemos más analíticos...',
    content: `Con la entrada de Mercurio en su domicilio terrestre, Virgo, la mente abandona el drama de Leo para enfocarse en la 
    excelencia y la precisión. Durante este tránsito, nuestra capacidad analítica se agudiza, permitiéndonos organizar el caos con una 
    eficiencia quirúrgica. Es la temporada perfecta para editar textos, planificar presupuestos complejos o iniciar rutinas de salud 
    basadas en datos concretos. Virgo nos otorga el don del discernimiento: aprendemos a separar el trigo de la paja en nuestras 
    conversaciones y pensamientos. Aprovecha esta energía para simplificar tu vida, optimizar tus flujos de trabajo y encontrar belleza 
    en el orden y la utilidad.`,
  },
];
