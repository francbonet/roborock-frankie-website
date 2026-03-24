import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../content/translations';
import './ChallengesLearnings.css';

export function ChallengesLearnings() {
  const { language } = useLanguage();
  const t = translations[language].challenges;

  return (
    <section className="challenges-section">
      <div className="challenges-container">
        <h2 className="challenges-title">{t.title}</h2>
        
        <div className="challenges-intro">
          <p className="challenges-statement">{t.statement}</p>
        </div>

        <div className="challenges-list">
          <h3 className="challenges-subtitle">{t.subtitle}</h3>
          <ul className="challenges-items">
            {t.items.map((item, index) => (
              <li key={index} className="challenge-item">
                <span className="challenge-icon">{item.icon}</span>
                <span className="challenge-text">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="challenges-conclusion">
          <p className="challenges-message">{t.message}</p>
        </div>
      </div>
    </section>
  );
}