import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../content/translations';
import './AILayer.css';

export function AILayer() {
  const { language } = useLanguage();
  const t = translations[language].aiLayer;

  return (
    <section className="ai-layer" id="ai-layer">
      <div className="ai-layer__container">
        <h2 className="ai-layer__title">{t.title}</h2>
        
        <div className="ai-layer__content">
          <p className="ai-layer__intro">{t.intro}</p>
          
          <div className="ai-layer__explanation">
            <p>{t.notDirectControl}</p>
            <p>{t.interpretation}</p>
          </div>

          <p className="ai-layer__transition">{t.transition}</p>

          <div className="ai-layer__commands">
            <h3 className="ai-layer__commands-title">{t.commandsTitle}</h3>
            <ul className="ai-layer__commands-list">
              {t.commands.map((command: string, index: number) => (
                <li key={index} className="ai-layer__command">
                  <span className="ai-layer__command-icon">💬</span>
                  <span className="ai-layer__command-text">"{command}"</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="ai-layer__highlight">
            <p className="ai-layer__key-message">{t.keyMessage}</p>
            <p className="ai-layer__conclusion">{t.conclusion}</p>
          </div>
        </div>
      </div>
    </section>
  );
}