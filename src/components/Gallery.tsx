import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import './Gallery.css';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  alt: {
    ca: string;
    es: string;
    en: string;
  };
}

const mediaItems: MediaItem[] = [
  {
    type: 'video',
    src: 'https://picsum.photos/seed/frankie-demo/800/600',
    thumbnail: 'https://picsum.photos/seed/frankie-demo/400/300',
    alt: {
      ca: 'Frankie obeint una ordre de neteja',
      es: 'Frankie obedeciendo una orden de limpieza',
      en: 'Frankie obeying a cleaning command'
    }
  },
  {
    type: 'image',
    src: 'https://picsum.photos/seed/frankie-robot/800/600',
    alt: {
      ca: 'Robot Frankie físic amb pantalla LED blava',
      es: 'Robot Frankie físico con pantalla LED azul',
      en: 'Physical Frankie robot with blue LED screen'
    }
  },
  {
    type: 'image',
    src: 'https://picsum.photos/seed/frankie-eyes/800/600',
    alt: {
      ca: 'Pantalla d\'ulls blaus de Frankie',
      es: 'Pantalla de ojos azules de Frankie',
      en: 'Frankie\'s blue eyes display'
    }
  },
  {
    type: 'image',
    src: 'https://picsum.photos/seed/frankie-app/800/600',
    alt: {
      ca: 'Interfície web de control de Frankie',
      es: 'Interfaz web de control de Frankie',
      en: 'Frankie web control interface'
    }
  },
  {
    type: 'video',
    src: 'https://picsum.photos/seed/frankie-voice/800/600',
    thumbnail: 'https://picsum.photos/seed/frankie-voice/400/300',
    alt: {
      ca: 'Frankie responent amb veu a una pregunta',
      es: 'Frankie respondiendo con voz a una pregunta',
      en: 'Frankie responding with voice to a question'
    }
  },
  {
    type: 'image',
    src: 'https://picsum.photos/seed/frankie-cleaning/800/600',
    alt: {
      ca: 'Frankie netejant el terra automàticament',
      es: 'Frankie limpiando el suelo automáticamente',
      en: 'Frankie automatically cleaning the floor'
    }
  },
  {
    type: 'video',
    src: 'https://picsum.photos/seed/frankie-base/800/600',
    thumbnail: 'https://picsum.photos/seed/frankie-base/400/300',
    alt: {
      ca: 'Frankie tornant a la base de càrrega',
      es: 'Frankie volviendo a la base de carga',
      en: 'Frankie returning to charging base'
    }
  }
];

export default function Gallery() {
  const { t, language } = useLanguage();
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const openLightbox = (item: MediaItem, index: number) => {
    setSelectedMedia(item);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    setSelectedIndex(-1);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedIndex === -1) return;
    
    let newIndex = selectedIndex;
    if (direction === 'prev') {
      newIndex = selectedIndex > 0 ? selectedIndex - 1 : mediaItems.length - 1;
    } else {
      newIndex = selectedIndex < mediaItems.length - 1 ? selectedIndex + 1 : 0;
    }
    
    setSelectedIndex(newIndex);
    setSelectedMedia(mediaItems[newIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox('prev');
    if (e.key === 'ArrowRight') navigateLightbox('next');
  };

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2 className="gallery-title">{t('gallery.title')}</h2>
        <p className="gallery-subtitle">{t('gallery.subtitle')}</p>

        <div className="gallery-grid">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openLightbox(item, index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(item, index);
                }
              }}
              aria-label={item.alt[language]}
            >
              {item.type === 'video' ? (
                <div className="gallery-video-wrapper">
                  <img
                    src={item.thumbnail || item.src}
                    alt={item.alt[language]}
                    loading="lazy"
                    className="gallery-thumbnail"
                  />
                  <div className="gallery-play-icon">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <circle cx="24" cy="24" r="24" fill="rgba(0, 123, 255, 0.8)" />
                      <path d="M18 14L34 24L18 34V14Z" fill="white" />
                    </svg>
                  </div>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt[language]}
                  loading="lazy"
                  className="gallery-image"
                />
              )}
              <div className="gallery-overlay">
                <span className="gallery-type">
                  {item.type === 'video' ? '▶ Video' : '🖼 Imatge'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMedia && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label={t('gallery.lightbox')}
          tabIndex={-1}
        >
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label={t('gallery.close')}
          >
            ✕
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
            aria-label={t('gallery.previous')}
          >
            ‹
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.type === 'video' ? (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="lightbox-video"
                aria-label={selectedMedia.alt[language]}
              />
            ) : (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt[language]}
                className="lightbox-image"
              />
            )}
            <p className="lightbox-caption">{selectedMedia.alt[language]}</p>
          </div>

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
            aria-label={t('gallery.next')}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}