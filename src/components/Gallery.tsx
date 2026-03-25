import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import './Gallery.css';
import { getTranslations } from '../content/translations';
import { isYouTubeUrl, getYouTubeEmbedUrl } from '../utils/youtubeHelpers';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  alt: string;
}

export function Gallery() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const mediaItems: MediaItem[] = [
    { type: 'video', src: t.gallery.media.video1.src, thumbnail: t.gallery.media.video1.thumbnail, alt: t.gallery.media.video1.alt },
    { type: 'image', src: t.gallery.media.image1.src, alt: t.gallery.media.image1.alt },
    { type: 'image', src: t.gallery.media.image2.src, alt: t.gallery.media.image2.alt},
    { type: 'image', src: t.gallery.media.image3.src, alt: t.gallery.media.image3.alt },
    { type: 'video', src: t.gallery.media.video2.src, thumbnail: t.gallery.media.video2.thumbnail, alt: t.gallery.media.video2.alt },
    { type: 'image', src: t.gallery.media.image4.src, alt: t.gallery.media.image4.alt },
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2 className="section-title">{t.gallery.title}</h2>
        <p className="section-subtitle">{t.gallery.subtitle}</p>

        <div className="gallery-grid">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
              aria-label={item.alt}
            >
              {item.type === 'image' ? (
                <img src={item.src} alt={item.alt} loading="lazy" />
              ) : (
                <div className="video-thumbnail">
                  <img src={item.thumbnail} alt={item.alt} loading="lazy" />
                  <div className="play-icon">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="30" cy="30" r="30" fill="rgba(255, 255, 255, 0.9)" />
                      <path d="M24 18L42 30L24 42V18Z" fill="#1a1a2e" />
                    </svg>
                  </div>
                </div>
              )}
              <div className="gallery-item-overlay">
                <span>{item.type === 'video' ? '▶' : '🔍'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label={t.gallery.lightbox.ariaLabel}
          tabIndex={0}
        >
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label={t.gallery.lightbox.close}
          >
            ✕
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            aria-label={t.gallery.lightbox.previous}
          >
            ‹
          </button>
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            aria-label={t.gallery.lightbox.next}
          >
            ›
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {mediaItems[currentIndex].type === 'image' ? (
              <img src={mediaItems[currentIndex].src} alt={mediaItems[currentIndex].alt} />
            ) : (
              (() => {
                const videoSrc = mediaItems[currentIndex].src;
                const youtubeEmbedUrl = isYouTubeUrl(videoSrc) ? getYouTubeEmbedUrl(videoSrc) : null;
                
                return youtubeEmbedUrl ? (
                  <iframe
                    src={youtubeEmbedUrl}
                    title={mediaItems[currentIndex].alt}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="youtube-iframe"
                  />
                ) : (
                  <video controls autoPlay>
                    <source src={videoSrc} type="video/mp4" />
                    {t.gallery.lightbox.videoNotSupported}
                  </video>
                );
              })()
            )}
            <p className="lightbox-caption">{mediaItems[currentIndex].alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
