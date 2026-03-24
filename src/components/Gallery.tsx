import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import './Gallery.css';

interface MediaItem {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  alt: { [key: string]: string };
}

const mediaItems: MediaItem[] = [
  {
    type: 'video',
    url: 'https://via.placeholder.com/800x450/1a1a2e/00d4ff?text=Frankie+Demo+Video',
    thumbnail: 'https://via.placeholder.com/400x225/1a1a2e/00d4ff?text=Video+1',
    alt: {
      ca: 'Vídeo de demostració de Frankie en acció',
      es: 'Vídeo de demostración de Frankie en acción',
      en: 'Frankie demo video in action'
    }
  },
  {
    type: 'image',
    url: 'https://via.placeholder.com/800x600/1a1a2e/00d4ff?text=Frankie+Robot',
    alt: {
      ca: 'Robot Frankie físic amb pantalla LED blava',
      es: 'Robot Frankie físico con pantalla LED azul',
      en: 'Physical Frankie robot with blue LED screen'
    }
  },
  {
    type: 'image',
    url: 'https://via.placeholder.com/800x600/1a1a2e/00d4ff?text=Blue+Eyes+Interface',
    alt: {
      ca: 'Interfície visual dels ulls blaus de Frankie',
      es: 'Interfaz visual de los ojos azules de Frankie',
      en: 'Visual interface of Frankie\'s blue eyes'
    }
  },
  {
    type: 'image',
    url: 'https://via.placeholder.com/800x600/1a1a2e/00d4ff?text=Web+Interface',
    alt: {
      ca: 'Captura de pantalla de la interfície web',
      es: 'Captura de pantalla de la interfaz web',
      en: 'Screenshot of the web interface'
    }
  },
  {
    type: 'video',
    url: 'https://via.placeholder.com/800x450/1a1a2e/00d4ff?text=Cleaning+Video',
    thumbnail: 'https://via.placeholder.com/400x225/1a1a2e/00d4ff?text=Video+2',
    alt: {
      ca: 'Frankie netejant i tornant a la base',
      es: 'Frankie limpiando y volviendo a la base',
      en: 'Frankie cleaning and returning to base'
    }
  },
  {
    type: 'image',
    url: 'https://via.placeholder.com/800x600/1a1a2e/00d4ff?text=iOS+App',
    alt: {
      ca: 'Interfície de l\'aplicació iOS',
      es: 'Interfaz de la aplicación iOS',
      en: 'iOS application interface'
    }
  },
  {
    type: 'video',
    url: 'https://via.placeholder.com/800x450/1a1a2e/00d4ff?text=Voice+Interaction',
    thumbnail: 'https://via.placeholder.com/400x225/1a1a2e/00d4ff?text=Video+3',
    alt: {
      ca: 'Frankie responent a ordres de veu',
      es: 'Frankie respondiendo a órdenes de voz',
      en: 'Frankie responding to voice commands'
    }
  }
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (item: MediaItem) => {
    setSelectedMedia(item);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedMedia(null), 300);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  };

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">{t('gallery.title')}</h2>
        <p className="gallery-subtitle">{t('gallery.subtitle')}</p>

        <div className="gallery-grid">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className={`gallery-item ${item.type}`}
              onClick={() => openLightbox(item)}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(item)}
              tabIndex={0}
              role="button"
              aria-label={item.alt[t('currentLang')]}
            >
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={item.alt[t('currentLang')]}
                  loading="lazy"
                  className="gallery-image"
                />
              ) : (
                <div className="video-thumbnail">
                  <img
                    src={item.thumbnail}
                    alt={item.alt[t('currentLang')]}
                    loading="lazy"
                    className="gallery-image"
                  />
                  <div className="play-button">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
              <div className="gallery-overlay">
                <span className="overlay-icon">
                  {item.type === 'image' ? '🔍' : '▶️'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isLightboxOpen && selectedMedia && (
        <div
          className={`lightbox ${isLightboxOpen ? 'open' : ''}`}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label={t('gallery.lightbox')}
        >
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label={t('gallery.close')}
          >
            ✕
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.url}
                alt={selectedMedia.alt[t('currentLang')]}
                className="lightbox-image"
              />
            ) : (
              <video
                src={selectedMedia.url}
                controls
                autoPlay
                className="lightbox-video"
                aria-label={selectedMedia.alt[t('currentLang')]}
              >
                {t('gallery.videoNotSupported')}
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
