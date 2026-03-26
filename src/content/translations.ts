import { Language } from '../context/LanguageContext';

export const translations = {
  ca: {
    languageSelector: {
      label: 'Idioma',
    },
    hero: {
      title: 'Frankie - Un Roborock S5 amb una capa d\'IA',
      subtitle: 'No és només un aspirador robot. És un Roborock S5 modificat que escolta, interpreta el que li dius i executa accions reals per casa, utilitzant el seu estat i el mapa real de l\'entorn... encara que no sempre li vingui de gust.',
      ctaDemo: 'Veure galeria',
      ctaHowBuilt: 'Com està construït',
      cta: 'Descobreix el projecte'
    },
    aboutFrankie: {
      title: 'Qui és Frankie?',
      paragraph1: 'Frankie és un projecte personal on converteixo un Roborock S5 en alguna cosa més que un robot que aspira el terra. Li he afegit una capa d\'IA capaç d\'interpretar ordres, decidir una acció i executar-la sobre el robot real, utilitzant el seu estat i el mapa real de la casa.',
      paragraph2: 'La idea no era només automatitzar tasques. Era poder interactuar amb el robot d\'una manera més natural, sense dependre de comandes rígides, i afegir-hi una personalitat pròpia: la d\'un adolescent que fa la feina, però rondinant. També volia construir-ho amb eines assequibles, perquè parlar amb un robot per casa no hagués de sortir car.',
      quote: 'Ho farà. Però no esperis que li faci il·lusió.',
      imageAlt: 'Frankie, el robot Roborock S5',
      uiAlt: 'Interfície d\'usuari de Frankie amb els ulls blaus'
    },
    whatCanDo: {
      title: 'Què pot fer Frankie?',
      intro: 'Frankie no només executa ordres.\nInterpreta la intenció, té en compte el mapa de la casa i l\'estat del robot, selecciona una acció i la tradueix en ordres reals.\n\nEntre altres coses, pot:',
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
          description: 'Utilitza el mapa real del robot per netejar habitacions concretes o zones específiques.'
        },
        {
          icon: '📍',
          title: 'Desplaçar-se a punts concrets',
          description: 'Es pot moure a coordenades o punts determinats del mapa generat pel robot.'
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
          description: 'Pot planificar accions consecutives, gestionant una cua de tasques.'
        }
      ]
    },
    aiLayer: {
      title: 'La capa d\'intel·ligència artificial',
      intro: 'La IA és el cervell que hi ha al damunt del robot, però no treballa a cegues.',
      notDirectControl: 'No controla directament els motors:',
      interpretation:
        'rep context en temps real del robot, entén el llenguatge i decideix quina eina s\'ha de fer servir.',
      transition:
        'Això permet passar de comandes rígides a una interacció molt més natural basada en el món real:',
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
        'convertir un dispositiu tancat en una plataforma programable i conversacional, buscant un equilibri entre funcionalitat, cost i personalitat. A més, el sistema està optimitzat per ser extremadament barat: unes 50 ordres poden costar al voltant de $0.05 amb GPT-4o-mini, mentre que el TTS amb ElevenLabs és, de moment, gratuït en aquest setup.',
    },
    howItWorks: {
      title: 'Com està construït?',
      subtitle: 'Frankie combina software, veu, control del robot, mapa de l\'entorn i una capa d\'intel·ligència artificial que pren decisions en temps real.',
      flowTitle: 'Arquitectura general',
      flow: [
        'L\'usuari parla o interactua amb la interfície',
        'El sistema captura la veu i envia la petició al backend',
        'El model d\'IA interpreta què s\'ha de fer utilitzant el context real del robot',
        'Si cal, selecciona una eina o acció',
        'El backend tradueix això a comandes reals del Roborock',
        'Frankie executa l\'acció i respon amb veu, estat o animació',
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
      subtitle: 'Ordres reals, neteja, desplaçament per la casa, ús del mapa i respostes amb més actitud de la necessària',
      lightbox: {
        ariaLabel: 'Lightbox de mitjans',
        close: 'Tancar',
        previous: 'Anterior',
        next: 'Següent',
        videoNotSupported: 'El teu navegador no suporta la etiqueta de vídeo.',
      },
      media: {
        video1: {
          src: 'https://www.youtube.com/watch?v=PznyeIQq7PM',
          thumbnail: 'https://img.youtube.com/vi/PznyeIQq7PM/maxresdefault.jpg',
          alt: 'Frankie responent a comandes de veu',
        },
        image1: {
          src: 'assets/image4.png',
          alt: 'Frankie el robot Roborock S5',
        },
        image2: {
          src: 'assets/image1.png',
          alt: 'Server logs',
        },
        image3: {
          src: 'assets/image2.png',
          alt: 'Aplicació iOS de Frankie',
        },
        image4: {
          src: 'assets/image6.png',
          alt: 'Map',
        },
      },
    },
    challenges: {
      title: 'El més difícil',
      statement: 'Aquest projecte no va de "connectar una API i ja està".',
      subtitle: 'Els reptes reals han estat:',
      items: [
        { icon: '🔧', text: 'entendre com parlar amb el Roborock i aprofitar el seu mapa real' },
        { icon: '🎯', text: 'convertir ordres naturals en accions segures i útils' },
        { icon: '⚙️', text: 'gestionar estat, cues i temporitzadors' },
        { icon: '🎙️', text: 'encaixar STT i TTS en una experiència usable' },
        { icon: '🎭', text: 'donar-li una personalitat clara sense perdre utilitat' },
        { icon: '💸', text: 'mantenir tot el sistema extremadament barat i viable en ús real' },
      ],
      message: 'És una barreja de: hardware, software, UX, IA, veu, mapatge i bastant prova-error. I tot això buscant un cost molt baix: ara mateix unes 50 ordres es tradueixen en aproximadament $0.05.',
    },
    finalCTA: {
      title: 'Un experiment amb IA al món real',
      description: 'Portar la IA fora de la pantalla.',
      message: 'Aquest projecte neix de la idea de portar la IA a un dispositiu físic capaç de moure\'s i interactuar amb l\'entorn. Frankie és aquest experiment: un robot que no només executa, sinó que entén, decideix i actua sobre el món real.',
      buttons: {
        viewProject: 'Veure el projecte',
        contact: 'Contactar',
      },
    },
  },
  es: {
    languageSelector: {
      label: 'Idioma',
    },
    hero: {
      title: 'Frankie - Un Roborock S5 con una capa de IA',
      subtitle: 'No es solo un robot aspirador. Es un Roborock S5 modificado que escucha, interpreta lo que le dices y ejecuta acciones reales por la casa, utilizando su estado y el mapa real del entorno... aunque no siempre le haga ninguna ilusión.',
      ctaDemo: 'Ver galería',
      ctaHowBuilt: 'Cómo está construido',
      cta: 'Descubre el proyecto'
    },
    aboutFrankie: {
      title: '¿Quién es Frankie?',
      paragraph1: 'Frankie es un proyecto personal donde convierto un Roborock S5 en algo más que un robot que aspira el suelo. Le he añadido una capa de IA capaz de interpretar órdenes, decidir una acción y ejecutarla sobre el robot real, utilizando su estado y el mapa real de la casa.',
      paragraph2: 'La idea no era solo automatizar tareas. Era poder interactuar con el robot de una forma más natural, sin depender de comandos rígidos, y darle una personalidad propia: la de un adolescente que hace las cosas, pero protestando. También quería construirlo con herramientas asequibles, para que hablar con un robot por casa no tuviera por qué ser caro.',
      quote: 'Lo hará. Pero no esperes que le haga ilusión.',
      imageAlt: 'Frankie, el robot Roborock S5',
      uiAlt: 'Interfaz de usuario de Frankie con los ojos azules'
    },
    whatCanDo: {
      title: '¿Qué puede hacer Frankie?',
      intro: 'Frankie no solo ejecuta órdenes.\nInterpreta la intención, tiene en cuenta el mapa de la casa y el estado del robot, selecciona una acción y la traduce en órdenes reales.\n\nEntre otras cosas, puede:',
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
          description: 'Utiliza el mapa real del robot para limpiar habitaciones concretas o zonas específicas.'
        },
        {
          icon: '📍',
          title: 'Desplazarse a puntos concretos',
          description: 'Puede moverse a coordenadas o puntos determinados del mapa generado por el robot.'
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
          description: 'Puede planificar acciones consecutivas, gestionando una cola de tareas.'
        }
      ]
    },
    aiLayer: {
      title: 'La capa de inteligencia artificial',
      intro: 'La IA es el cerebro que está encima del robot, pero no trabaja a ciegas.',
      notDirectControl: 'No controla directamente los motores:',
      interpretation:
        'recibe contexto en tiempo real del robot, entiende el lenguaje y decide qué herramienta debe utilizarse.',
      transition:
        'Eso permite pasar de comandos rígidos a una interacción mucho más natural basada en el mundo real:',
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
        'convertir un dispositivo cerrado en una plataforma programable y conversacional, buscando un equilibrio entre funcionalidad, coste y personalidad. Además, el sistema está optimizado para ser extremadamente barato: unas 50 órdenes pueden costar alrededor de $0.05 con GPT-4o-mini, mientras que el TTS con ElevenLabs es, por ahora, gratuito en este setup.',
    },
    howItWorks: {
      title: '¿Cómo está construido?',
      subtitle: 'Frankie combina software, voz, control del robot, mapa del entorno y una capa de inteligencia artificial que toma decisiones en tiempo real.',
      flowTitle: 'Arquitectura general',
      flow: [
        'El usuario habla o interactúa con la interfaz',
        'El sistema captura la voz y envía la petición al backend',
        'El modelo de IA interpreta qué debe hacerse utilizando el contexto real del robot',
        'Si hace falta, selecciona una herramienta o acción',
        'El backend traduce eso en comandos reales del Roborock',
        'Frankie ejecuta la acción y responde con voz, estado o animación',
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
      subtitle: 'Órdenes reales, limpieza, desplazamiento por la casa, uso del mapa y respuestas con más actitud de la necesaria',
      lightbox: {
        ariaLabel: 'Lightbox de medios',
        close: 'Cerrar',
        previous: 'Anterior',
        next: 'Siguiente',
        videoNotSupported: 'Tu navegador no soporta la etiqueta de vídeo.',
      },
      media: {
        video1: {
          src: 'https://www.youtube.com/watch?v=PznyeIQq7PM',
          thumbnail: 'https://img.youtube.com/vi/PznyeIQq7PM/maxresdefault.jpg',
          alt: 'Frankie respondiendo a comandos de voz',
        },
        image1: {
          src: 'assets/image4.png',
          alt: 'Frankie el robot Roborock S5',
        },
        image2: {
          src: 'assets/image1.png',
          alt: 'Server logs',
        },
        image3: {
          src: 'assets/image2.png',
          alt: 'Aplicación iOS de Frankie',
        },
        image4: {
          src: 'assets/image6.png',
          alt: 'Map',
        },
      },
    },
    challenges: {
      title: 'Lo más difícil',
      statement: 'Este proyecto no va de "conectar una API y listo".',
      subtitle: 'Los retos reales han sido:',
      items: [
        { icon: '🔧', text: 'entender cómo hablar con el Roborock y aprovechar su mapa real' },
        { icon: '🎯', text: 'convertir órdenes naturales en acciones seguras y útiles' },
        { icon: '⚙️', text: 'gestionar estado, colas y temporizadores' },
        { icon: '🎙️', text: 'encajar STT y TTS en una experiencia usable' },
        { icon: '🎭', text: 'darle una personalidad clara sin perder utilidad' },
        { icon: '💸', text: 'mantener todo el sistema extremadamente barato y viable en uso real' },
      ],
      message: 'Es una mezcla de: hardware, software, UX, IA, voz, mapeado y bastante prueba-error. Y todo esto buscando un coste muy bajo: ahora mismo unas 50 órdenes se traducen en aproximadamente $0.05.',
    },
    finalCTA: {
      title: 'Un experimento con IA en el mundo real',
      description: 'Sacar la IA fuera de la pantalla.',
      message: 'Este proyecto nace de la idea de llevar la IA a un dispositivo físico capaz de moverse e interactuar con el entorno. Frankie es ese experimento: un robot que no solo ejecuta, sino que entiende, decide y actúa sobre el mundo real.',
      buttons: {
        viewProject: 'Ver el proyecto',
        contact: 'Contactar',
      },
    },
  },
  en: {
    languageSelector: {
      label: 'Language',
    },
    hero: {
      title: 'Frankie - A Roborock S5 with an AI layer',
      subtitle: 'Not just a robot vacuum. It is a modified Roborock S5 that listens, interprets what you say, and carries out real actions around the house using its live state and real home map... even if it is not exactly thrilled about it.',
      ctaDemo: 'View gallery',
      ctaHowBuilt: 'How it\'s built',
      cta: 'Discover the project'
    },
    aboutFrankie: {
      title: 'Who is Frankie?',
      paragraph1: 'Frankie is a personal project where I turn a Roborock S5 into something more than a robot that vacuums the floor. I added an AI layer capable of interpreting commands, deciding on an action, and executing it on the real robot, using its current state and the real map of the house.',
      paragraph2: 'The idea was not just to automate tasks. It was to interact with the robot in a more natural way, without depending on rigid commands, and to give it a personality of its own: basically a teenager who does the chores while complaining. I also wanted to build it with affordable tools, so talking to a robot at home would not have to be expensive.',
      quote: "Yeah, he’ll do it. Just don’t expect enthusiasm.",
      imageAlt: 'Frankie, the Roborock S5 robot',
      uiAlt: 'Frankie user interface with blue eyes'
    },
    whatCanDo: {
      title: 'What can Frankie do?',
      intro: 'Frankie does not just execute commands.\nIt interprets intent, takes the house map and the robot state into account, selects an action, and translates it into real commands for the robot.\n\nAmong other things, it can:',
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
          description: 'It uses the robot’s real map to clean specific rooms or targeted areas.'
        },
        {
          icon: '📍',
          title: 'Move to specific points',
          description: 'It can move to coordinates or specific points on the map generated by the robot.'
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
          description: 'It can plan consecutive actions by managing a task queue.'
        }
      ]
    },
    aiLayer: {
      title: 'The artificial intelligence layer',
      intro: 'The AI is the brain sitting on top of the robot, but it does not work blind.',
      notDirectControl: 'It does not directly control the motors:',
      interpretation:
        'it receives real-time robot context, understands language, and decides which tool should be used.',
      transition:
        'This allows it to move from rigid commands to a much more natural interaction grounded in the real world:',
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
        'turning a closed device into a programmable and conversational platform, while balancing functionality, cost, and personality. It is also optimized to be extremely cheap to run: around 50 commands can cost about $0.05 with GPT-4o-mini, while ElevenLabs TTS is currently free in this setup.',
    },
    howItWorks: {
      title: 'How is it built?',
      subtitle: 'Frankie combines software, voice, robot control, environment mapping, and an artificial intelligence layer that makes decisions in real time.',
      flowTitle: 'General architecture',
      flow: [
        'The user speaks or interacts with the interface',
        'The system captures the voice and sends the request to the backend',
        'The AI model interprets what should be done using the robot’s real context',
        'If needed, it selects a tool or action',
        'The backend translates that into real Roborock commands',
        'Frankie executes the action and responds with voice, status, or animation',
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
      subtitle: 'Real commands, cleaning, movement around the house, map-based actions, and responses with more attitude than strictly necessary',
      lightbox: {
        ariaLabel: 'Media lightbox',
        close: 'Close',
        previous: 'Previous',
        next: 'Next',
        videoNotSupported: 'Your browser does not support the video tag.',
      },
      media: {
        video1: {
          src: 'https://www.youtube.com/watch?v=PznyeIQq7PM',
          thumbnail: 'https://img.youtube.com/vi/PznyeIQq7PM/maxresdefault.jpg',
          alt: 'Frankie responding to voice commands',
        },
        image1: {
          src: 'assets/image4.png',
          alt: 'Frankie the Roborock S5 robot',
        },
        image2: {
          src: 'assets/image1.png',
          alt: 'Server logs',
        },
        image3: {
          src: 'assets/image2.png',
          alt: 'Frankie iOS application',
        },
        image4: {
          src: 'assets/image6.png',
          alt: 'Map',
        },
      },
    },
    challenges: {
      title: 'The hardest part',
      statement: 'This project is not about "connecting an API and calling it a day".',
      subtitle: 'The real challenges were:',
      items: [
        { icon: '🔧', text: 'understanding how to talk to the Roborock and leverage its real map' },
        { icon: '🎯', text: 'turning natural commands into safe and useful actions' },
        { icon: '⚙️', text: 'managing state, queues, and timers' },
        { icon: '🎙️', text: 'making STT and TTS work in a usable experience' },
        { icon: '🎭', text: 'giving it a clear personality without losing usefulness' },
        { icon: '💸', text: 'keeping the whole system extremely cheap and viable for real-world use' },
      ],
      message: 'It is a mix of hardware, software, UX, AI, voice, mapping, and a lot of trial and error. And all of this while aiming for very low cost: right now around 50 commands cost roughly $0.05.',
    },
    finalCTA: {
      title: 'An experiment with AI in the real world',
      description: 'Taking AI beyond the screen.',
      message: 'This project was born from the idea of bringing AI into a physical device capable of moving and interacting with its environment. Frankie is that experiment: a robot that doesn’t just execute, but understands, decides, and acts in the real world.',
      buttons: {
        viewProject: 'View project',
        contact: 'Contact',
      },
    },
  },
};

export const getTranslations = (language: Language): any => {
  return translations[language];
};