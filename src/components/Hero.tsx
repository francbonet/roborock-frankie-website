import React from 'react';
import { t, useLanguage } from '../hooks/useLanguage';
import './Hero.css';

const Hero: React.FC = () => {

  const handleDemoClick = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHowItWorksClick = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">{t('hero.title')}</h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <div className="hero-cta">
            <button className="cta-button cta-primary" onClick={handleDemoClick}>
              {t('hero.cta.demo')}
            </button>
            <button className="cta-button cta-secondary" onClick={handleHowItWorksClick}>
              {t('hero.cta.howBuilt')}
            </button>
          </div>
        </div>
        <div className="hero-media">
          <img
            src="/assets/frankie-hero.jpg"
            alt="Frankie - Roborock S5 with AI"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;