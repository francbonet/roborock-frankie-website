import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../content/translations';
import './WhatCanDo.css';

const WhatCanDo: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].whatCanDo;

  return (
    <section className="what-can-do">
      <div className="what-can-do__container">
        <h2 className="what-can-do__title">{t.title}</h2>
        <p className="what-can-do__intro">{t.intro}</p>
        
        <div className="what-can-do__grid">
          {t.features.map((feature, index) => (
            <div 
              key={index} 
              className="what-can-do__card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="what-can-do__card-icon">
                {feature.icon}
              </div>
              <h3 className="what-can-do__card-title">{feature.title}</h3>
              <p className="what-can-do__card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatCanDo;