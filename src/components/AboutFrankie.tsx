import { useLanguage } from '../hooks/useLanguage';
import { getTranslations } from '../content/translations';
import './AboutFrankie.css';

export function AboutFrankie() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className="about-frankie">
      <div className="about-frankie__container">
        <div className="about-frankie__content">
          <h2 className="about-frankie__title">{t.aboutFrankie.title}</h2>
          
          <div className="about-frankie__text">
            <p>{t.aboutFrankie.paragraph1}</p>
            <p>{t.aboutFrankie.paragraph2}</p>
          </div>

          <blockquote className="about-frankie__quote">
            {t.aboutFrankie.quote}
          </blockquote>
        </div>

        <div className="about-frankie__visuals">
          <div className="about-frankie__image-wrapper">
            <img 
              src={new URL('/assets/image2.png', import.meta.url).href}
              alt={t.aboutFrankie.imageAlt}
              className="about-frankie__image"
            />
          </div>
          <div className="about-frankie__image-wrapper">
            <img 
              src={new URL('/assets/image3.png', import.meta.url).href}
              alt={t.aboutFrankie.uiAlt}
              className="about-frankie__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
