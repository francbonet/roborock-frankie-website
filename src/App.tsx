import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { useLanguage } from './hooks/useLanguage';
import { getTranslations } from './content/translations';
import LanguageSelector from './components/LanguageSelector';
import './App.css';

const AppContent: React.FC = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <div className="App">
      <LanguageSelector />
      <h1>{t.greeting}</h1>
      <h2>{t.projectTitle}</h2>
      <p className="subtitle">{t.projectSubtitle}</p>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;