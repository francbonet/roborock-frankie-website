import { Language } from '../context/LanguageContext';

interface Translations {
  language: string;
  selectLanguage: string;
  hero: {
    title: string;
    subtitle: string;
    cta: {
      demo: string;
      howBuilt: string;
    };
  };
}

type TranslationsMap = Record<Language, Translations>;

export const translations: TranslationsMap = {
  ca: {
    language: 'Català',
    selectLanguage: 'Seleccionar idioma',
    hero: {
      title: 'Frankie - Un Roborock S5 hackejat amb cervell d\'IA',
      subtitle: 'No és només un aspirador robot. És un experiment de robòtica domèstica on un vell Roborock S5 rep una segona vida amb una capa d\'intel·ligència artificial, control per veu i una interfície pròpia.',
      cta: {
        demo: 'Veure demo',
        howBuilt: 'Com està construït'
      }
    }
  },
  es: {
    language: 'Español',
    selectLanguage: 'Seleccionar idioma',
    hero: {
      title: 'Frankie - Un Roborock S5 hackeado con cerebro de IA',
      subtitle: 'No es solo un aspirador robot. Es un experimento de robótica doméstica donde un viejo Roborock S5 recibe una segunda vida con una capa de inteligencia artificial, control por voz y una interfaz propia.',
      cta: {
        demo: 'Ver demo',
        howBuilt: 'Cómo está construido'
      }
    }
  },
  en: {
    language: 'English',
    selectLanguage: 'Select language',
    hero: {
      title: 'Frankie - A Roborock S5 hacked with AI brain',
      subtitle: 'It\'s not just a robot vacuum. It\'s a home robotics experiment where an old Roborock S5 gets a second life with an artificial intelligence layer, voice control and its own interface.',
      cta: {
        demo: 'View demo',
        howBuilt: 'How it\'s built'
      }
    }
  }
};

export const getTranslations = (language: Language): Translations => {
  return translations[language];
};