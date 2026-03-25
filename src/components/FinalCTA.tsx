import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../content/translations';
import './FinalCTA.css';

const FinalCTA = () => {
  const { language } = useLanguage();
  const t = translations[language].finalCTA;

  return (
    <section className="final-cta">
      <div className="final-cta-container">
        <div className="final-cta-content">
          <h2 className="final-cta-title">{t.title}</h2>
          <p className="final-cta-description">{t.description}</p>
          <p className="final-cta-message">{t.message}</p>
          
          <div className="final-cta-buttons">
            <a 
              href="https://github.com/roborock-chatgpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-primary"
            >
              {t.buttons.viewProject}
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="cta-secondary"
            >
              {t.buttons.contact}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;