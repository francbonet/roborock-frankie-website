/**
 * Utilitats per detectar i processar URLs de YouTube
 */

/**
 * Detecta si una URL és de YouTube
 * @param url - URL a validar
 * @returns true si és una URL de YouTube
 */
export function isYouTubeUrl(url: string): boolean {
  if (!url) return false;
  
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/i;
  return youtubeRegex.test(url);
}

/**
 * Extreu l'ID del vídeo de YouTube d'una URL
 * Suporta formats:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 * - https://www.youtube.com/v/VIDEO_ID
 * 
 * @param url - URL de YouTube
 * @returns ID del vídeo o null si no es pot extreure
 */
export function extractYouTubeVideoId(url: string): string | null {
  if (!url) return null;

  // Patró per a youtube.com/watch?v=VIDEO_ID
  let match = url.match(/[?&]v=([^&]+)/);
  if (match) return match[1];

  // Patró per a youtu.be/VIDEO_ID
  match = url.match(/youtu\.be\/([^?&]+)/);
  if (match) return match[1];

  // Patró per a youtube.com/embed/VIDEO_ID
  match = url.match(/youtube\.com\/embed\/([^?&]+)/);
  if (match) return match[1];

  // Patró per a youtube.com/v/VIDEO_ID
  match = url.match(/youtube\.com\/v\/([^?&]+)/);
  if (match) return match[1];

  return null;
}

/**
 * Genera una URL d'embed de YouTube a partir d'una URL normal
 * @param url - URL original de YouTube
 * @returns URL d'embed o null si no és vàlida
 */
export function getYouTubeEmbedUrl(url: string): string | null {
  const videoId = extractYouTubeVideoId(url);
  if (!videoId) return null;

  // Paràmetres per millorar l'experiència d'embed
  const params = new URLSearchParams({
    rel: '0', // No mostrar vídeos relacionats d'altres canals
    modestbranding: '1', // Minimitzar el branding de YouTube
    // autoplay: '0', // No autoplay (l'usuari controla quan reproduir)
  });

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}
