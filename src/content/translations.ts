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
      title: "Roborock S5 + ChatGPT",
      subtitle: "Un robot aspirador amb IA que entén ordres en llenguatge natural",
      cta: "Descobreix el projecte"
    },
    aboutFrankie: {
      title: "Qui és Frankie?",
      paragraph1: "Frankie és un projecte personal on converteixo un Roborock S5 en alguna cosa més que un robot que aspira el terra. Li he afegit una capa d'IA capaç d'interpretar ordres, respondre amb personalitat i executar accions sobre el robot real.",
      paragraph2: "La idea no era només automatitzar tasques. Era donar-li una identitat, una cara i una manera de comunicar-se.",
      quote: "Sí, tècnicament neteja. Però també té caràcter.",
      imageAlt: "Frankie, el robot Roborock S5",
      uiAlt: "Interfície d'usuari de Frankie amb els ulls blaus"
    }
  },
  es: {
    languageSelector: {
      label: 'Idioma',
    },
    hero: {
      title: "Roborock S5 + ChatGPT",
      subtitle: "Un robot aspirador con IA que entiende órdenes en lenguaje natural",
      cta: "Descubre el proyecto"
    },
    aboutFrankie: {
      title: "¿Quién es Frankie?",
      paragraph1: "Frankie es un proyecto personal donde convierto un Roborock S5 en algo más que un robot que aspira el suelo. Le he añadido una capa de IA capaz de interpretar órdenes, responder con personalidad y ejecutar acciones sobre el robot real.",
      paragraph2: "La idea no era solo automatizar tareas. Era darle una identidad, una cara y una forma de comunicarse.",
      quote: "Sí, técnicamente limpia. Pero también tiene carácter.",
      imageAlt: "Frankie, el robot Roborock S5",
      uiAlt: "Interfaz de usuario de Frankie con los ojos azules"
    }
  },
  en: {
    languageSelector: {
      label: 'Language',
    },
    hero: {
      title: "Roborock S5 + ChatGPT",
      subtitle: "A vacuum robot with AI that understands natural language commands",
      cta: "Discover the project"
    },
    aboutFrankie: {
      title: "Who is Frankie?",
      paragraph1: "Frankie is a personal project where I turn a Roborock S5 into something more than a robot that vacuums the floor. I've added an AI layer capable of interpreting commands, responding with personality, and executing actions on the real robot.",
      paragraph2: "The idea wasn't just to automate tasks. It was to give it an identity, a face, and a way to communicate.",
      quote: "Yes, technically it cleans. But it also has character.",
      imageAlt: "Frankie, the Roborock S5 robot",
      uiAlt: "Frankie's user interface with blue eyes"
    }
  }
};

export const getTranslations = (language: Language): Translations => {
  return translations[language];
};