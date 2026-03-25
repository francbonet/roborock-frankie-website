import { useLanguage } from '../hooks/useLanguage';
import { getTranslations } from '../content/translations';
import './Hero.css';

const Hero = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const handleDemoClick = () => {
    const demoSection = document.getElementById('demo');
    demoSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHowItWorksClick = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    howItWorksSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <div className="hero-ctas">
            <button className="cta-primary" onClick={handleDemoClick}>
              {t.hero.ctaDemo}
            </button>
            <button className="cta-secondary" onClick={handleHowItWorksClick}>
              {t.hero.ctaHowBuilt}
            </button>
          </div>
        </div>
        <div className="hero-media">
          <img
            src="/assets/image0.png"
            alt="Frankie - Roborock S5 with AI"
            className="hero-image"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
