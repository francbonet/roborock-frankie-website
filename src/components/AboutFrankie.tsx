import './AboutFrankie.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../content/translations';

const AboutFrankie = () => {
  const { language } = useLanguage();
  const t = translations[language].aboutFrankie;

  return (
    <section className="organism-section" id="about">
      <div className="template-container">
        <div className="about-frankie">
          <div className="about-frankie__content">
            <h2 className="atom-h2 about-frankie__title">{t.title}</h2>
            <div className="about-frankie__text">
              <p className="atom-p">{t.paragraph1}</p>
              <p className="atom-p">{t.paragraph2}</p>
            </div>
            <blockquote className="molecule-quote about-frankie__quote">
              <span className="molecule-quote__mark">"</span>
              <p className="molecule-quote__text">{t.quote}</p>
            </blockquote>
          </div>
          <div className="about-frankie__visual">
            <div className="about-frankie__image-primary">
              <div className="molecule-image-frame molecule-image-frame--glow">
                <img 
                  src="/frankie-cleaning.jpg" 
                  alt="Frankie the Roborock S5 cleaning" 
                  className="molecule-image-frame__img"
                />
              </div>
            </div>
            <div className="about-frankie__image-secondary">
              <div className="molecule-image-frame molecule-image-frame--minimal">
                <img 
                  src="/frankie-portrait.jpg" 
                  alt="Frankie the Roborock S5" 
                  className="molecule-image-frame__img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFrankie;