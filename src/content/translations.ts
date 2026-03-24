import { Language } from '../context/LanguageContext';

interface Translations {
  greeting: string;
  projectTitle: string;
  projectSubtitle: string;
}

type TranslationsMap = Record<Language, Translations>;

export const translations = {
  ca: {
    languageSelector: {
      label: 'Idioma',
    },
    hero: {
      title: 'Frankie - Un Roborock S5 hackejat amb cervell d\'IA',
      subtitle: 'No és només un aspirador robot. És un experiment de robòtica domèstica on un vell Roborock S5 rep una segona vida amb una capa d\'intel·ligència artificial, control per veu i una interfície pròpia.',
      ctaDemo: 'Veure demo',
      ctaHowBuilt: 'Com està construït',
      cta: "Descobreix el projecte"
    },
    aboutFrankie: {
      title: "Qui és Frankie?",
      paragraph1: "Frankie és un projecte personal on converteixo un Roborock S5 en alguna cosa més que un robot que aspira el terra. Li he afegit una capa d'IA capaç d'interpretar ordres, respondre amb personalitat i executar accions sobre el robot real.",
      paragraph2: "La idea no era només automatitzar tasques. Era donar-li una identitat, una cara i una manera de comunicar-se.",
      quote: "Sí, tècnicament neteja. Però també té caràcter.",
      imageAlt: "Frankie, el robot Roborock S5",
      uiAlt: "Interfície d'usuari de Frankie amb els ulls blaus"
    },
    whatCanDo: {
      title: "Què pot fer Frankie?",
      intro: "Frankie no només executa ordres.\nInterpreta intenció, selecciona una acció i la tradueix en ordres reals sobre el robot.\n\nEntre altres coses, pot:",
      features: [
        {
          icon: "🧠",
          title: "Entendre ordres",
          description: "Interpreta el que li dius i decideix què ha de fer."
        },
        {
          icon: "🤖",
          title: "Controlar el robot",
          description: "Pot iniciar, pausar, reprendre, parar o tornar a la base."
        },
        {
          icon: "🗺️",
          title: "Navegar per la casa",
          description: "Pot anar a coordenades concretes o netejar habitacions/segments."
        },
        {
          icon: "📋",
          title: "Gestionar tasques",
          description: "Té cua de tasques, historial i temporitzadors."
        },
        {
          icon: "🔊",
          title: "Respondre amb veu",
          description: "Genera respostes i feedback de veu per fer la interacció més natural."
        },
        {
          icon: "📊",
          title: "Mostrar estat en temps real",
          description: "Bateria, estat, base, ventilador, àrea netejada i molt més."
        }
      ]
    },
  },
  es: {
    languageSelector: {
      label: 'Idioma',
    },
    hero: {
      title: 'Frankie - Un Roborock S5 hackeado con cerebro de IA',
      subtitle: 'No es solo un aspirador robot. Es un experimento de robótica doméstica donde un viejo Roborock S5 recibe una segunda vida con una capa de inteligencia artificial, control por voz y una interfaz propia.',
      ctaDemo: 'Ver demo',
      ctaHowBuilt: 'Cómo está construido',
      cta: "Descobreix el projecte"
    },
    aboutFrankie: {
      title: "¿Quién es Frankie?",
      paragraph1: "Frankie es un proyecto personal donde convierto un Roborock S5 en algo más que un robot que aspira el suelo. Le he añadido una capa de IA capaz de interpretar órdenes, responder con personalidad y ejecutar acciones sobre el robot real.",
      paragraph2: "La idea no era solo automatizar tareas. Era darle una identidad, una cara y una forma de comunicarse.",
      quote: "Sí, técnicamente limpia. Pero también tiene carácter.",
      imageAlt: "Frankie, el robot Roborock S5",
      uiAlt: "Interfaz de usuario de Frankie con los ojos azules"
    },
    whatCanDo: {
      title: "¿Qué puede hacer Frankie?",
      intro: "Frankie no solo ejecuta órdenes.\nInterpreta intención, selecciona una acción y la traduce en órdenes reales sobre el robot.\n\nEntre otras cosas, puede:",
      features: [
        {
          icon: "🧠",
          title: "Entender órdenes",
          description: "Interpreta lo que le dices y decide qué debe hacer."
        },
        {
          icon: "🤖",
          title: "Controlar el robot",
          description: "Puede iniciar, pausar, reanudar, parar o volver a la base."
        },
        {
          icon: "🗺️",
          title: "Navegar por la casa",
          description: "Puede ir a coordenadas concretas o limpiar habitaciones/segmentos."
        },
        {
          icon: "📋",
          title: "Gestionar tareas",
          description: "Tiene cola de tareas, historial y temporizadores."
        },
        {
          icon: "🔊",
          title: "Responder con voz",
          description: "Genera respuestas y feedback de voz para hacer la interacción más natural."
        },
        {
          icon: "📊",
          title: "Mostrar estado en tiempo real",
          description: "Batería, estado, base, ventilador, área limpiada y mucho más."
        }
      ]
    },
  },
  en: {
    languageSelector: {
      label: 'Language',
    },
    hero: {
      title: 'Frankie - A Roborock S5 hacked with AI brain',
      subtitle: 'Not just a robot vacuum. It\'s a home robotics experiment where an old Roborock S5 gets a second life with an artificial intelligence layer, voice control and its own interface.',
      ctaDemo: 'View demo',
      ctaHowBuilt: 'How it\'s built',
      cta: "Discover the project"
    },
    aboutFrankie: {
      title: "Who is Frankie?",
      paragraph1: "Frankie is a personal project where I turn a Roborock S5 into something more than a robot that vacuums the floor. I've added an AI layer capable of interpreting commands, responding with personality, and executing actions on the real robot.",
      paragraph2: "The idea wasn't just to automate tasks. It was to give it an identity, a face, and a way to communicate.",
      quote: "Yes, technically it cleans. But it also has character.",
      imageAlt: "Frankie, the Roborock S5 robot",
      uiAlt: "Frankie's user interface with blue eyes"
    },
    whatCanDo: {
      title: "What can Frankie do?",
      intro: "Frankie doesn't just execute commands.\nIt interprets intent, selects an action, and translates it into real commands for the robot.\n\nAmong other things, it can:",
      features: [
        {
          icon: "🧠",
          title: "Understand commands",
          description: "Interprets what you tell it and decides what to do."
        },
        {
          icon: "🤖",
          title: "Control the robot",
          description: "Can start, pause, resume, stop or return to base."
        },
        {
          icon: "🗺️",
          title: "Navigate the house",
          description: "Can go to specific coordinates or clean rooms/segments."
        },
        {
          icon: "📋",
          title: "Manage tasks",
          description: "Has task queue, history and timers."
        },
        {
          icon: "🔊",
          title: "Respond with voice",
          description: "Generates responses and voice feedback to make interaction more natural."
        },
        {
          icon: "📊",
          title: "Show real-time status",
          description: "Battery, status, base, fan, cleaned area and much more."
        }
      ]
    },
  }
};

export const getTranslations = (language: Language): Translations => {
  return translations[language];
};