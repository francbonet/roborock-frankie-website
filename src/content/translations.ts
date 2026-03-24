import { Language } from '../context/LanguageContext';

interface Translations {
  greeting: string;
  projectTitle: string;
  projectSubtitle: string;
}

type TranslationsMap = Record<Language, Translations>;

export const translations: TranslationsMap = {
  ca: {
    greeting: 'Hola món!',
    projectTitle: 'Roborock S5 + ChatGPT',
    projectSubtitle: 'Controla el teu robot aspirador amb intel·ligència artificial'
  },
  es: {
    greeting: '¡Hola mundo!',
    projectTitle: 'Roborock S5 + ChatGPT',
    projectSubtitle: 'Controla tu robot aspirador con inteligencia artificial'
  },
  en: {
    greeting: 'Hello world!',
    projectTitle: 'Roborock S5 + ChatGPT',
    projectSubtitle: 'Control your vacuum robot with artificial intelligence'
  }
};

export const getTranslations = (language: Language): Translations => {
  return translations[language];
};