import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../content/translations';
import './HowItWorks.css';

const HowItWorks = () => {
  const { language } = useLanguage();
  const t = translations[language].howItWorks;

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>

        <div className="architecture-flow">
          <h3 className="flow-title">{t.flowTitle}</h3>
          <div className="flow-diagram">
            {t.flow.map((step, index) => (
              <div key={index} className="flow-step">
                <div className="step-number">{index + 1}</div>
                <div className="step-content">
                  <p>{step}</p>
                </div>
                {index < t.flow.length - 1 && (
                  <div className="step-arrow">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="tech-stack">
          <h3 className="stack-title">{t.stackTitle}</h3>
          <div className="stack-grid">
            {t.stack.map((tech, index) => (
              <div key={index} className="tech-item">
                <div className="tech-icon">⚙️</div>
                <span className="tech-name">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;