import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../context/LanguageContext';
import './LanguageSelector.css';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'ca', label: 'CAT' },
    { code: 'es', label: 'ESP' },
    { code: 'en', label: 'ENG' }
  ];

  return (
    <nav className="language-selector" role="navigation" aria-label="Language selector">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`lang-btn ${language === lang.code ? 'active' : ''}`}
          onClick={() => setLanguage(lang.code)}
          aria-label={`Switch to ${lang.label}`}
          aria-current={language === lang.code ? 'true' : 'false'}
        >
          {lang.label}
        </button>
      ))}
    </nav>
  );
};

export default LanguageSelector;