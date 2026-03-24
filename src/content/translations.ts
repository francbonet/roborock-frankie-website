import { Language } from '../context/LanguageContext';

interface Translations {
  greeting: string;
  projectTitle: string;
  projectSubtitle: string;
}

type TranslationsMap = Record<Language, any>;

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
    aiLayer: {
      title: 'La capa d\'intel·ligència artificial',
      intro: 'La IA és el cervell que hi ha al damunt del robot.',
      notDirectControl: 'No controla directament els motors:',
      interpretation:
        'interpreta el llenguatge, entén el context i decideix quina eina s\'ha de fer servir.',
      transition:
        'Això permet passar de comandes rígides a una interacció molt més natural:',
      commandsTitle: 'Exemples de comandes naturals',
      commands: [
        'ves a la cuina',
        'para',
        'torna a la base',
        'què estàs fent?',
        'neteja el passadís després',
      ],
      keyMessage: 'Aquest és el punt interessant del projecte:',
      conclusion:
        'convertir un dispositiu tancat en una plataforma programable i conversacional.',
    },
    howItWorks: {
      title: 'Com està construït?',
      subtitle: 'Frankie combina software web, control del robot i una capa d\'intel·ligència artificial.',
      flowTitle: 'Arquitectura general',
      flow: [
        'L\'usuari parla o interactua amb la interfície',
        'El sistema envia la petició al backend',
        'El model d\'IA interpreta què s\'ha de fer',
        'Si cal, selecciona una eina o acció',
        'El backend tradueix això a comandes reals del Roborock',
        'Frankie respon amb veu, estat o animació',
      ],
      stackTitle: 'Stack tecnològic',
      stack: [
        'Node.js',
        'Express',
        'JavaScript',
        'mirobo / python-miio',
        'OpenAI / ChatGPT-4-mini',
        'Frontend visual amb animacions',
        'App iOS per a la interfície',
      ],
    },
    gallery: {
      title: 'Frankie en Acció',
      subtitle: 'Veure Frankie en acció: comandes de veu, navegació autònoma i interacció intel·ligent',
      lightbox: {
        ariaLabel: 'Lightbox de mitjans',
        close: 'Tancar',
        previous: 'Anterior',
        next: 'Següent',
        videoNotSupported: 'El teu navegador no suporta la etiqueta de vídeo.',
      },
      media: {
        video1: {
          src: 'https://example.com/videos/frankie-demo.mp4',
          thumbnail: 'https://example.com/thumbnails/frankie-demo.jpg',
          alt: 'Frankie responent a comandes de veu',
        },
        image1: {
          src: 'https://example.com/images/frankie-robot.jpg',
          alt: 'Frankie el robot Roborock S5',
        },
        image2: {
          src: 'https://example.com/images/frankie-interface.jpg',
          alt: 'Interfície de pantalla blava de Frankie',
        },
        image3: {
          src: 'https://example.com/images/frankie-app.jpg',
          alt: 'Aplicació web i iOS de Frankie',
        },
        video2: {
          src: 'https://example.com/videos/frankie-cleaning.mp4',
          thumbnail: 'https://example.com/thumbnails/frankie-cleaning.jpg',
          alt: 'Frankie netejant i tornant a la base',
        },
        image4: {
          src: 'https://example.com/images/frankie-voice.jpg',
          alt: 'Interacció de veu de Frankie amb ChatGPT',
        },
      },
    },
    challenges: {
      title: 'El més difícil',
      statement: 'Aquest projecte no va de "connectar una API i ja està".',
      subtitle: 'Els reptes reals han estat:',
      items: [
        { icon: '🔧', text: 'entendre com parlar amb el Roborock' },
        { icon: '🎯', text: 'convertir ordres naturals en accions segures' },
        { icon: '⚙️', text: 'gestionar estat, cues i temporitzadors' },
        { icon: '✨', text: 'donar una experiència visual coherent' },
        { icon: '🎨', text: 'fer que tot plegat sembli un sol producte' },
      ],
      message: "És una barreja de: hardware, software, UX, IA i bastant prova-error.",
    },
    finalCTA: {
      title: 'Frankie encara està evolucionant',
      description: 'Això no és un producte acabat.',
      message: "És un laboratori viu sobre robòtica personal, interfícies i agents d'IA. Si t'agrada la combinació de hardware hackejat + software + IA, aquest projecte és exactament això.",
      buttons: {
        viewProject: 'Veure el projecte',
        contact: 'Contactar',
        viewDemos: 'Veure demos',
      },
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
    aiLayer: {
      title: 'La capa de inteligencia artificial',
      intro: 'La IA es el cerebro que está encima del robot.',
      notDirectControl: 'No controla directamente los motores:',
      interpretation:
        'interpreta el lenguaje, entiende el contexto y decide qué herramienta debe utilizarse.',
      transition:
        'Esto permite pasar de comandos rígidos a una interacción mucho más natural:',
      commandsTitle: 'Ejemplos de comandos naturales',
      commands: [
        've a la cocina',
        'para',
        'vuelve a la base',
        '¿qué estás haciendo?',
        'limpia el pasillo después',
      ],
      keyMessage: 'Este es el punto interesante del proyecto:',
      conclusion:
        'convertir un dispositivo cerrado en una plataforma programable y conversacional.',
    },
    howItWorks: {
      title: '¿Cómo está construido?',
      subtitle: 'Frankie combina software web, control del robot y una capa de inteligencia artificial.',
      flowTitle: 'Arquitectura general',
      flow: [
        'El usuario habla o interactúa con la interfaz',
        'El sistema envía la petición al backend',
        'El modelo de IA interpreta qué se debe hacer',
        'Si es necesario, selecciona una herramienta o acción',
        'El backend traduce esto a comandos reales del Roborock',
        'Frankie responde con voz, estado o animación',
      ],
      stackTitle: 'Stack tecnológico',
      stack: [
        'Node.js',
        'Express',
        'JavaScript',
        'mirobo / python-miio',
        'OpenAI / ChatGPT-4-mini',
        'Frontend visual con animaciones',
        'App iOS para la interfaz',
      ],
    },
    gallery: {
      title: 'Frankie en Acción',
      subtitle: 'Ver a Frankie en acción: comandos de voz, navegación autónoma e interacción inteligente',
      lightbox: {
        ariaLabel: 'Lightbox de medios',
        close: 'Cerrar',
        previous: 'Anterior',
        next: 'Siguiente',
        videoNotSupported: 'Tu navegador no soporta la etiqueta de vídeo.',
      },
      media: {
        video1: {
          src: 'https://example.com/videos/frankie-demo.mp4',
          thumbnail: 'https://example.com/thumbnails/frankie-demo.jpg',
          alt: 'Frankie respondiendo a comandos de voz',
        },
        image1: {
          src: 'https://example.com/images/frankie-robot.jpg',
          alt: 'Frankie el robot Roborock S5',
        },
        image2: {
          src: 'https://example.com/images/frankie-interface.jpg',
          alt: 'Interfaz de pantalla azul de Frankie',
        },
        image3: {
          src: 'https://example.com/images/frankie-app.jpg',
          alt: 'Aplicación web e iOS de Frankie',
        },
        video2: {
          src: 'https://example.com/videos/frankie-cleaning.mp4',
          thumbnail: 'https://example.com/thumbnails/frankie-cleaning.jpg',
          alt: 'Frankie limpiando y regresando a la base',
        },
        image4: {
          src: 'https://example.com/images/frankie-voice.jpg',
          alt: 'Interacción de voz de Frankie con ChatGPT',
        },
      },
    },
    challenges: {
      title: 'Lo más difícil',
      statement: 'Este proyecto no va de "conectar una API y listo".',
      subtitle: 'Los retos reales han sido:',
      items: [
        { icon: '🔧', text: 'entender cómo hablar con el Roborock' },
        { icon: '🎯', text: 'convertir órdenes naturales en acciones seguras' },
        { icon: '⚙️', text: 'gestionar estado, colas y temporizadores' },
        { icon: '✨', text: 'dar una experiencia visual coherente' },
        { icon: '🎨', text: 'hacer que todo parezca un solo producto' },
      ],
      message: "Es una mezcla de: hardware, software, UX, IA y bastante prueba-error.",
    },
    finalCTA: {
      title: 'Frankie aún está evolucionando',
      description: 'Esto no es un producto terminado.',
      message: 'Es un laboratorio vivo sobre robótica personal, interfaces y agentes de IA. Si te gusta la combinación de hardware hackeado + software + IA, este proyecto es exactamente eso.',
      buttons: {
        viewProject: 'Ver el proyecto',
        contact: 'Contactar',
        viewDemos: 'Ver demos',
      },
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
    aiLayer: {
      title: 'The artificial intelligence layer',
      intro: 'The AI is the brain on top of the robot.',
      notDirectControl: 'It does not directly control the motors:',
      interpretation:
        'it interprets language, understands context and decides which tool should be used.',
      transition:
        'This allows moving from rigid commands to a much more natural interaction:',
      commandsTitle: 'Natural command examples',
      commands: [
        'go to the kitchen',
        'stop',
        'return to base',
        'what are you doing?',
        'clean the hallway next',
      ],
      keyMessage: 'This is the interesting point of the project:',
      conclusion:
        'turning a closed device into a programmable and conversational platform.',
    },
    howItWorks: {
      title: 'How is it built?',
      subtitle: 'Frankie combines web software, robot control and an artificial intelligence layer.',
      flowTitle: 'General architecture',
      flow: [
        'The user speaks or interacts with the interface',
        'The system sends the request to the backend',
        'The AI model interprets what needs to be done',
        'If necessary, selects a tool or action',
        'The backend translates this into real Roborock commands',
        'Frankie responds with voice, status or animation',
      ],
      stackTitle: 'Technology stack',
      stack: [
        'Node.js',
        'Express',
        'JavaScript',
        'mirobo / python-miio',
        'OpenAI / ChatGPT-4-mini',
        'Visual frontend with animations',
        'iOS app for the interface',
      ],
    },
    gallery: {
      title: 'Frankie in Action',
      subtitle: 'See Frankie in action: voice commands, autonomous navigation, and intelligent interaction',
      lightbox: {
        ariaLabel: 'Media lightbox',
        close: 'Close',
        previous: 'Previous',
        next: 'Next',
        videoNotSupported: 'Your browser does not support the video tag.',
      },
      media: {
        video1: {
          src: 'https://example.com/videos/frankie-demo.mp4',
          thumbnail: 'https://example.com/thumbnails/frankie-demo.jpg',
          alt: 'Frankie responding to voice commands',
        },
        image1: {
          src: 'https://example.com/images/frankie-robot.jpg',
          alt: 'Frankie the Roborock S5 robot',
        },
        image2: {
          src: 'https://example.com/images/frankie-interface.jpg',
          alt: 'Frankie blue screen interface',
        },
        image3: {
          src: 'https://example.com/images/frankie-app.jpg',
          alt: 'Frankie web and iOS application',
        },
        video2: {
          src: 'https://example.com/videos/frankie-cleaning.mp4',
          thumbnail: 'https://example.com/thumbnails/frankie-cleaning.jpg',
          alt: 'Frankie cleaning and returning to base',
        },
        image4: {
          src: 'https://example.com/images/frankie-voice.jpg',
          alt: 'Frankie voice interaction with ChatGPT',
        },
      },
    },
    challenges: {
      title: 'The hardest part',
      statement: 'This project isn\'t about "connecting an API and that\'s it".',
      subtitle: 'The real challenges were:',
      items: [
        { icon: '🔧', text: 'understanding how to talk to the Roborock' },
        { icon: '🎯', text: 'converting natural commands into safe actions' },
        { icon: '⚙️', text: 'managing state, queues and timers' },
        { icon: '✨', text: 'providing a coherent visual experience' },
        { icon: '🎨', text: 'making everything look like a single product' },
      ],
      message: "It's a mix of: hardware, software, UX, AI and plenty of trial-and-error.",
    },
    finalCTA: {
      title: 'Frankie is still evolving',
      description: "This isn't a finished product.",
      message: "It's a living laboratory about personal robotics, interfaces, and AI agents. If you like the combination of hacked hardware + software + AI, this project is exactly that.",
      buttons: {
        viewProject: 'View project',
        contact: 'Contact',
        viewDemos: 'View demos',
      },
    },
  },
};

export const getTranslations = (language: Language): any => {
  return translations[language];
};