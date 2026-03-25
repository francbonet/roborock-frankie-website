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
      title: 'Frankie - Un Roborock S5 amb una capa d\'IA',
      subtitle: 'No és només un aspirador robot. És un Roborock S5 modificat que escolta, interpreta el que li dius i executa accions reals per casa... encara que no sempre li vingui de gust.',
      ctaDemo: 'Veure demo',
      ctaHowBuilt: 'Com està construït',
      cta: 'Descobreix el projecte'
    },
    aboutFrankie: {
      title: 'Qui és Frankie?',
      paragraph1: 'Frankie és un projecte personal on converteixo un Roborock S5 en alguna cosa més que un robot que aspira el terra. Li he afegit una capa d\'IA capaç d\'interpretar ordres, decidir una acció i executar-la sobre el robot real.',
      paragraph2: 'La idea no era només automatitzar tasques. Era poder interactuar amb el robot d\'una manera més natural, sense dependre de comandes rígides, i afegir-hi una personalitat pròpia: la d\'un adolescent que fa la feina, però rondinant.',
      quote: 'Sí, ho farà. Però rondinarà.',
      imageAlt: 'Frankie, el robot Roborock S5',
      uiAlt: 'Interfície d\'usuari de Frankie amb els ulls blaus'
    },
    whatCanDo: {
      title: 'Què pot fer Frankie?',
      intro: 'Frankie no només executa ordres.\nInterpreta la intenció, selecciona una acció i la tradueix en ordres reals sobre el robot.\n\nEntre altres coses, pot:',
      features: [
        {
          icon: '🧠',
          title: 'Entendre ordres naturals',
          description: 'Interpreta què vols fer sense necessitat de comandes rígides.'
        },
        {
          icon: '🧹',
          title: 'Netejar el pis sencer',
          description: 'Pot iniciar una neteja completa de tota la casa.'
        },
        {
          icon: '🚪',
          title: 'Netejar habitacions i zones',
          description: 'Pot netejar habitacions concretes o parts específiques del mapa.'
        },
        {
          icon: '📍',
          title: 'Desplaçar-se a punts concrets',
          description: 'Es pot moure a coordenades o punts determinats de la casa.'
        },
        {
          icon: '⏸️',
          title: 'Pausar i reprendre',
          description: 'Pot pausar una acció en curs i continuar-la després.'
        },
        {
          icon: '⛔',
          title: 'Aturar-se',
          description: 'Pot cancel·lar la tasca actual quan li ho demanes.'
        },
        {
          icon: '🏠',
          title: 'Tornar a la base',
          description: 'Pot tornar automàticament a la base de càrrega.'
        },
        {
          icon: '🎮',
          title: 'Mode manual',
          description: 'Es pot controlar directament per avançar, retrocedir o girar.'
        },
        {
          icon: '📋',
          title: 'Encadenar tasques',
          description: 'Pot fer una acció i després una altra, gestionant una cua de tasques.'
        }
      ]
    },
    aiLayer: {
      title: 'La capa d\'intel·ligència artificial',
      intro: 'La IA és el cervell que hi ha al damunt del robot.',
      notDirectControl: 'No controla directament els motors:',
      interpretation:
        'rep context del robot, entén el llenguatge i decideix quina eina s\'ha de fer servir.',
      transition:
        'Això permet passar de comandes rígides a una interacció molt més natural:',
      commandsTitle: 'Exemples de comandes naturals',
      commands: [
        'neteja la cuina i després torna a la base',
        'ves al passadís',
        'atura\'t un moment',
        'què estàs fent ara?',
        'després fes l\'entrada'
      ],
      keyMessage: 'Aquest és el punt interessant del projecte:',
      conclusion:
        'convertir un dispositiu tancat en una plataforma programable i conversacional, buscant un equilibri entre funcionalitat, cost i personalitat.',
    },
    howItWorks: {
      title: 'Com està construït?',
      subtitle: 'Frankie combina software, veu, control del robot i una capa d\'intel·ligència artificial.',
      flowTitle: 'Arquitectura general',
      flow: [
        'L\'usuari parla o interactua amb la interfície',
        'El sistema captura la veu i envia la petició al backend',
        'El model d\'IA interpreta què s\'ha de fer',
        'Si cal, selecciona una eina o acció',
        'El backend tradueix això a comandes reals del Roborock',
        'Frankie respon amb veu, estat o animació',
      ],
      stackTitle: 'Stack tecnològic',
      stack: [
        'Node.js + Express per backend i orquestració de comandes',
        'Control del robot amb mirobo (python-miio)',
        'LLM (GPT-4o-mini) per interpretació i presa de decisions',
        'STT via Web Speech API',
        'TTS amb OpenAI i ElevenLabs',
        'App iOS com a capa d\'interacció amb l\'usuari',
      ],
    },
    gallery: {
      title: 'Frankie en Acció',
      subtitle: 'Ordres reals, neteja, desplaçament per la casa i respostes amb més actitud de la necessària',
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
        { icon: '🎙️', text: 'encaixar STT i TTS en una experiència usable' },
        { icon: '🎭', text: 'donar-li una personalitat clara sense perdre utilitat' },
      ],
      message: 'És una barreja de: hardware, software, UX, IA, veu i bastant prova-error.',
    },
    finalCTA: {
      title: 'Frankie encara està evolucionant',
      description: 'Això encara està en marxa.',
      message: 'És un projecte personal per explorar fins on es pot portar un robot domèstic quan hi afegeixes IA, veu i control real. I sí, ell continua queixant-se igualment.',
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
      title: 'Frankie - Un Roborock S5 con una capa de IA',
      subtitle: 'No es solo un robot aspirador. Es un Roborock S5 modificado que escucha, interpreta lo que le dices y ejecuta acciones reales por la casa... aunque no siempre le haga ninguna ilusión.',
      ctaDemo: 'Ver demo',
      ctaHowBuilt: 'Cómo está construido',
      cta: 'Descubre el proyecto'
    },
    aboutFrankie: {
      title: '¿Quién es Frankie?',
      paragraph1: 'Frankie es un proyecto personal donde convierto un Roborock S5 en algo más que un robot que aspira el suelo. Le he añadido una capa de IA capaz de interpretar órdenes, decidir una acción y ejecutarla sobre el robot real.',
      paragraph2: 'La idea no era solo automatizar tareas. Era poder interactuar con el robot de una forma más natural, sin depender de comandos rígidos, y darle una personalidad propia: la de un adolescente que hace las cosas, pero protestando.',
      quote: 'Sí, lo hará. Pero se quejará.',
      imageAlt: 'Frankie, el robot Roborock S5',
      uiAlt: 'Interfaz de usuario de Frankie con los ojos azules'
    },
    whatCanDo: {
      title: '¿Qué puede hacer Frankie?',
      intro: 'Frankie no solo ejecuta órdenes.\nInterpreta la intención, selecciona una acción y la traduce en órdenes reales sobre el robot.\n\nEntre otras cosas, puede:',
      features: [
        {
          icon: '🧠',
          title: 'Entender órdenes naturales',
          description: 'Interpreta lo que quieres hacer sin necesidad de comandos rígidos.'
        },
        {
          icon: '🧹',
          title: 'Limpiar toda la casa',
          description: 'Puede iniciar una limpieza completa de toda la vivienda.'
        },
        {
          icon: '🚪',
          title: 'Limpiar habitaciones y zonas',
          description: 'Puede limpiar habitaciones concretas o partes específicas del mapa.'
        },
        {
          icon: '📍',
          title: 'Desplazarse a puntos concretos',
          description: 'Puede moverse a coordenadas o puntos determinados de la casa.'
        },
        {
          icon: '⏸️',
          title: 'Pausar y reanudar',
          description: 'Puede pausar una acción en curso y retomarla después.'
        },
        {
          icon: '⛔',
          title: 'Detenerse',
          description: 'Puede cancelar la tarea actual cuando se lo pides.'
        },
        {
          icon: '🏠',
          title: 'Volver a la base',
          description: 'Puede regresar automáticamente a la base de carga.'
        },
        {
          icon: '🎮',
          title: 'Modo manual',
          description: 'Se puede controlar directamente para avanzar, retroceder o girar.'
        },
        {
          icon: '📋',
          title: 'Encadenar tareas',
          description: 'Puede hacer una acción y después otra, gestionando una cola de tareas.'
        }
      ]
    },
    aiLayer: {
      title: 'La capa de inteligencia artificial',
      intro: 'La IA es el cerebro que está encima del robot.',
      notDirectControl: 'No controla directamente los motores:',
      interpretation:
        'recibe contexto del robot, entiende el lenguaje y decide qué herramienta debe utilizarse.',
      transition:
        'Eso permite pasar de comandos rígidos a una interacción mucho más natural:',
      commandsTitle: 'Ejemplos de comandos naturales',
      commands: [
        'limpia la cocina y después vuelve a la base',
        've al pasillo',
        'párate un momento',
        '¿qué estás haciendo ahora?',
        'después haz la entrada'
      ],
      keyMessage: 'Este es el punto interesante del proyecto:',
      conclusion:
        'convertir un dispositivo cerrado en una plataforma programable y conversacional, buscando un equilibrio entre funcionalidad, coste y personalidad.',
    },
    howItWorks: {
      title: '¿Cómo está construido?',
      subtitle: 'Frankie combina software, voz, control del robot y una capa de inteligencia artificial.',
      flowTitle: 'Arquitectura general',
      flow: [
        'El usuario habla o interactúa con la interfaz',
        'El sistema captura la voz y envía la petición al backend',
        'El modelo de IA interpreta qué debe hacerse',
        'Si hace falta, selecciona una herramienta o acción',
        'El backend traduce eso en comandos reales del Roborock',
        'Frankie responde con voz, estado o animación',
      ],
      stackTitle: 'Stack tecnológico',
      stack: [
        'Node.js + Express para backend y orquestación de comandos',
        'Control del robot con mirobo (python-miio)',
        'LLM (GPT-4o-mini) para interpretación y toma de decisiones',
        'STT vía Web Speech API',
        'TTS con OpenAI y ElevenLabs',
        'App iOS como capa de interacción con el usuario',
      ],
    },
    gallery: {
      title: 'Frankie en Acción',
      subtitle: 'Órdenes reales, limpieza, desplazamiento por la casa y respuestas con más actitud de la necesaria',
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
        { icon: '🎙️', text: 'encajar STT y TTS en una experiencia usable' },
        { icon: '🎭', text: 'darle una personalidad clara sin perder utilidad' },
      ],
      message: 'Es una mezcla de: hardware, software, UX, IA, voz y bastante prueba-error.',
    },
    finalCTA: {
      title: 'Frankie sigue evolucionando',
      description: 'Esto todavía sigue en marcha.',
      message: 'Es un proyecto personal para explorar hasta dónde puede llegar un robot doméstico cuando le añades IA, voz y control real. Y sí, él sigue quejándose igualmente.',
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
      title: 'Frankie - A Roborock S5 with an AI layer',
      subtitle: 'Not just a robot vacuum. It is a modified Roborock S5 that listens, interprets what you say, and carries out real actions around the house... even if it is not exactly thrilled about it.',
      ctaDemo: 'View demo',
      ctaHowBuilt: 'How it\'s built',
      cta: 'Discover the project'
    },
    aboutFrankie: {
      title: 'Who is Frankie?',
      paragraph1: 'Frankie is a personal project where I turn a Roborock S5 into something more than a robot that vacuums the floor. I added an AI layer capable of interpreting commands, deciding on an action, and executing it on the real robot.',
      paragraph2: 'The idea was not just to automate tasks. It was to interact with the robot in a more natural way, without depending on rigid commands, and to give it a personality of its own: basically a teenager who does the chores while complaining.',
      quote: 'Yes, it will do it. It will complain first.',
      imageAlt: 'Frankie, the Roborock S5 robot',
      uiAlt: 'Frankie user interface with blue eyes'
    },
    whatCanDo: {
      title: 'What can Frankie do?',
      intro: 'Frankie does not just execute commands.\nIt interprets intent, selects an action, and translates it into real commands for the robot.\n\nAmong other things, it can:',
      features: [
        {
          icon: '🧠',
          title: 'Understand natural commands',
          description: 'It interprets what you want without needing rigid commands.'
        },
        {
          icon: '🧹',
          title: 'Clean the whole house',
          description: 'It can start a full-house cleaning run.'
        },
        {
          icon: '🚪',
          title: 'Clean rooms and zones',
          description: 'It can clean specific rooms or targeted areas on the map.'
        },
        {
          icon: '📍',
          title: 'Move to specific points',
          description: 'It can move to coordinates or specific points in the house.'
        },
        {
          icon: '⏸️',
          title: 'Pause and resume',
          description: 'It can pause an action and continue it later.'
        },
        {
          icon: '⛔',
          title: 'Stop',
          description: 'It can cancel the current task when asked.'
        },
        {
          icon: '🏠',
          title: 'Return to the dock',
          description: 'It can automatically go back to the charging base.'
        },
        {
          icon: '🎮',
          title: 'Manual mode',
          description: 'It can be controlled directly to move forward, backward, or turn.'
        },
        {
          icon: '📋',
          title: 'Chain tasks',
          description: 'It can do one action and then another, managing a task queue.'
        }
      ]
    },
    aiLayer: {
      title: 'The artificial intelligence layer',
      intro: 'The AI is the brain sitting on top of the robot.',
      notDirectControl: 'It does not directly control the motors:',
      interpretation:
        'it receives robot context, understands language, and decides which tool should be used.',
      transition:
        'This allows it to move from rigid commands to a much more natural interaction:',
      commandsTitle: 'Examples of natural commands',
      commands: [
        'clean the kitchen and then go back to the dock',
        'go to the hallway',
        'stop for a second',
        'what are you doing right now?',
        'do the entrance next'
      ],
      keyMessage: 'This is the interesting part of the project:',
      conclusion:
        'turning a closed device into a programmable and conversational platform, while balancing functionality, cost, and personality.',
    },
    howItWorks: {
      title: 'How is it built?',
      subtitle: 'Frankie combines software, voice, robot control, and an artificial intelligence layer.',
      flowTitle: 'General architecture',
      flow: [
        'The user speaks or interacts with the interface',
        'The system captures the voice and sends the request to the backend',
        'The AI model interprets what should be done',
        'If needed, it selects a tool or action',
        'The backend translates that into real Roborock commands',
        'Frankie responds with voice, status, or animation',
      ],
      stackTitle: 'Technology stack',
      stack: [
        'Node.js + Express for backend and command orchestration',
        'Robot control with mirobo (python-miio)',
        'LLM (GPT-4o-mini) for interpretation and decision-making',
        'STT via Web Speech API',
        'TTS with OpenAI and ElevenLabs',
        'iOS app as the user interaction layer',
      ],
    },
    gallery: {
      title: 'Frankie in Action',
      subtitle: 'Real commands, cleaning, movement around the house, and responses with more attitude than strictly necessary',
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
      statement: 'This project is not about "connecting an API and calling it a day".',
      subtitle: 'The real challenges were:',
      items: [
        { icon: '🔧', text: 'understanding how to talk to the Roborock' },
        { icon: '🎯', text: 'turning natural commands into safe actions' },
        { icon: '⚙️', text: 'managing state, queues, and timers' },
        { icon: '🎙️', text: 'making STT and TTS feel usable together' },
        { icon: '🎭', text: 'giving it a clear personality without losing usefulness' },
      ],
      message: 'It is a mix of hardware, software, UX, AI, voice, and plenty of trial and error.',
    },
    finalCTA: {
      title: 'Frankie is still evolving',
      description: 'This is still a work in progress.',
      message: 'It is a personal project exploring how far a domestic robot can go when you add AI, voice, and real control. And yes, it still complains about doing chores.',
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