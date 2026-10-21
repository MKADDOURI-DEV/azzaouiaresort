/**
 * Catalogue photo — photos réelles de l'ancien site Azzaouia Resort.
 * Fichiers dans /public/assets/photos/<catégorie>/.
 */

export type PhotoCategory = 'hero' | 'chambre-double' | 'dortoir' | 'petite-suite' | 'grande-suite' | 'galerie';

export interface Photo {
  src: string;
  alt: { fr: string; en: string; ar: string };
  ratio?: 'portrait' | 'landscape' | 'square';
}

export const heroPhoto: Photo = {
  src: '/assets/photos/hero/hero.jpg',
  alt: {
    fr: 'Azzaouia Resort à Aïn Sahla, aux portes du Parc National de Tazekka',
    en: 'Azzaouia Resort in Aïn Sahla, at the gateway to Tazekka National Park',
    ar: 'منتجع الزاوية بعين سهلة عند مدخل المنتزه الوطني لتازكة',
  },
};

/** Vidéo hero (muted, loop) — version mobile plus légère. Poster = heroPhoto. */
export const heroVideo = {
  desktop: '/assets/video/azzaouia-hero.mp4',
  mobile: '/assets/video/azzaouia-hero-mobile.mp4',
};

export const roomPhotos: Record<string, Photo[]> = {
  'chambre-double': [
    { src: '/assets/photos/chambre-double/chambre-double-01.jpg', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
    { src: '/assets/photos/chambre-double/chambre-double-02.jpg', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  ],
  'grande-suite': [
    { src: '/assets/photos/grande-suite/grande-suite-01.jpg', alt: {"fr": "Grande Suite — Azzaouia Resort", "en": "Large Suite — Azzaouia Resort", "ar": "جناح كبير — Azzaouia Resort"} },
  ],
  'petite-suite': [
    { src: '/assets/photos/petite-suite/petite-suite-01.jpg', alt: {"fr": "Petite Suite — Azzaouia Resort", "en": "Small Suite — Azzaouia Resort", "ar": "جناح صغير — Azzaouia Resort"} },
    { src: '/assets/photos/petite-suite/petite-suite-02.jpg', alt: {"fr": "Petite Suite — Azzaouia Resort", "en": "Small Suite — Azzaouia Resort", "ar": "جناح صغير — Azzaouia Resort"} },
    { src: '/assets/photos/petite-suite/petite-suite-03.jpg', alt: {"fr": "Petite Suite — Azzaouia Resort", "en": "Small Suite — Azzaouia Resort", "ar": "جناح صغير — Azzaouia Resort"} },
    { src: '/assets/photos/petite-suite/petite-suite-04.jpg', alt: {"fr": "Petite Suite — Azzaouia Resort", "en": "Small Suite — Azzaouia Resort", "ar": "جناح صغير — Azzaouia Resort"} },
    { src: '/assets/photos/petite-suite/petite-suite-05.jpg', alt: {"fr": "Petite Suite — Azzaouia Resort", "en": "Small Suite — Azzaouia Resort", "ar": "جناح صغير — Azzaouia Resort"} },
    { src: '/assets/photos/petite-suite/petite-suite-06.jpg', alt: {"fr": "Petite Suite — Azzaouia Resort", "en": "Small Suite — Azzaouia Resort", "ar": "جناح صغير — Azzaouia Resort"} },
    { src: '/assets/photos/petite-suite/petite-suite-07.jpg', alt: {"fr": "Petite Suite — Azzaouia Resort", "en": "Small Suite — Azzaouia Resort", "ar": "جناح صغير — Azzaouia Resort"} },
    { src: '/assets/photos/petite-suite/petite-suite-08.jpg', alt: {"fr": "Petite Suite — Azzaouia Resort", "en": "Small Suite — Azzaouia Resort", "ar": "جناح صغير — Azzaouia Resort"} },
    { src: '/assets/photos/petite-suite/petite-suite-09.jpg', alt: {"fr": "Petite Suite — Azzaouia Resort", "en": "Small Suite — Azzaouia Resort", "ar": "جناح صغير — Azzaouia Resort"} },
    { src: '/assets/photos/petite-suite/petite-suite-10.jpg', alt: {"fr": "Petite Suite — Azzaouia Resort", "en": "Small Suite — Azzaouia Resort", "ar": "جناح صغير — Azzaouia Resort"} },
  ],
  'dortoir': [
    { src: '/assets/photos/dortoir/dortoir-01.jpg', alt: {"fr": "Dortoirs — Azzaouia Resort", "en": "Dormitories — Azzaouia Resort", "ar": "المهاجع — Azzaouia Resort"} },
  ],
};

export type GalleryFilter = 'all' | 'rooms' | 'suites' | 'dorms' | 'grounds';

export interface GalleryPhoto extends Photo {
  filter: Exclude<GalleryFilter, 'all'>;
}

export const galleryPhotos: GalleryPhoto[] = [
  { src: '/assets/photos/galerie/galerie-01.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-02.jpg', filter: 'grounds', ratio: 'square', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-03.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-04.jpg', filter: 'grounds', ratio: 'square', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-05.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-06.jpg', filter: 'grounds', ratio: 'square', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-07.jpg', filter: 'rooms', ratio: 'landscape', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-08.jpg', filter: 'grounds', ratio: 'square', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-09.jpg', filter: 'rooms', ratio: 'landscape', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-10.jpg', filter: 'rooms', ratio: 'square', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-11.jpg', filter: 'rooms', ratio: 'landscape', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-12.jpg', filter: 'grounds', ratio: 'square', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-13.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-14.jpg', filter: 'grounds', ratio: 'square', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-15.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-16.jpg', filter: 'rooms', ratio: 'square', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-17.jpg', filter: 'rooms', ratio: 'landscape', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-18.jpg', filter: 'grounds', ratio: 'square', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-19.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-20.jpg', filter: 'rooms', ratio: 'square', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-21.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-22.jpg', filter: 'rooms', ratio: 'square', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-23.jpg', filter: 'rooms', ratio: 'landscape', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-24.jpg', filter: 'grounds', ratio: 'square', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-25.jpg', filter: 'rooms', ratio: 'landscape', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-26.jpg', filter: 'rooms', ratio: 'square', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-27.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/chambre-double/chambre-double-01.jpg', filter: 'rooms', ratio: 'square', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  { src: '/assets/photos/chambre-double/chambre-double-02.jpg', filter: 'rooms', ratio: 'landscape', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  { src: '/assets/photos/grande-suite/grande-suite-01.jpg', filter: 'suites', ratio: 'square', alt: {"fr": "Grande Suite — Azzaouia Resort", "en": "Large Suite — Azzaouia Resort", "ar": "جناح كبير — Azzaouia Resort"} },
  { src: '/assets/photos/dortoir/dortoir-01.jpg', filter: 'dorms', ratio: 'landscape', alt: {"fr": "Dortoir — Azzaouia Resort", "en": "Dormitory — Azzaouia Resort", "ar": "المهجع — Azzaouia Resort"} },
  { src: '/assets/photos/petite-suite/petite-suite-01.jpg', filter: 'suites', ratio: 'square', alt: {"fr": "Petite Suite — Azzaouia Resort", "en": "Small Suite — Azzaouia Resort", "ar": "جناح صغير — Azzaouia Resort"} },
  { src: '/assets/photos/petite-suite/petite-suite-02.jpg', filter: 'suites', ratio: 'landscape', alt: {"fr": "Petite Suite — Azzaouia Resort", "en": "Small Suite — Azzaouia Resort", "ar": "جناح صغير — Azzaouia Resort"} },
  { src: '/assets/photos/petite-suite/petite-suite-03.jpg', filter: 'suites', ratio: 'square', alt: {"fr": "Petite Suite — Azzaouia Resort", "en": "Small Suite — Azzaouia Resort", "ar": "جناح صغير — Azzaouia Resort"} },
];
