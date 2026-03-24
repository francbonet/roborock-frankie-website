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
    },
  },
};

export const getTranslations = (language: Language): Translations => {
  return translations[language];
};