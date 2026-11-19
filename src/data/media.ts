/**
 * Catalogue photo — photos réelles de l'ancien site Azzaouia Resort.
 * Fichiers dans /public/assets/photos/<catégorie>/.
 */

export type PhotoCategory = 'hero' | 'chambre-double' | 'dortoir' | 'petite-suite' | 'grande-suite' | 'galerie' | 'resto';

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
    { src: '/assets/photos/chambre-double/chambre-double-03.jpg', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
    { src: '/assets/photos/chambre-double/chambre-double-04.jpg', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
    { src: '/assets/photos/chambre-double/chambre-double-05.jpg', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
    { src: '/assets/photos/chambre-double/chambre-double-06.jpg', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
    { src: '/assets/photos/chambre-double/chambre-double-07.jpg', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
    { src: '/assets/photos/chambre-double/chambre-double-08.jpg', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
    { src: '/assets/photos/chambre-double/chambre-double-09.jpg', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
    { src: '/assets/photos/chambre-double/chambre-double-10.jpg', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
    { src: '/assets/photos/chambre-double/chambre-double-11.jpg', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
    { src: '/assets/photos/chambre-double/chambre-double-12.jpg', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  ],
  'grande-suite': [
    { src: '/assets/photos/grande-suite/grande-suite-01.jpg', alt: {"fr": "Grande Suite — Azzaouia Resort", "en": "Large Suite — Azzaouia Resort", "ar": "جناح كبير — Azzaouia Resort"} },
    { src: '/assets/photos/grande-suite/grande-suite-02.jpg', alt: {"fr": "Grande Suite — Azzaouia Resort", "en": "Large Suite — Azzaouia Resort", "ar": "جناح كبير — Azzaouia Resort"} },
    { src: '/assets/photos/grande-suite/grande-suite-03.jpg', alt: {"fr": "Grande Suite — Azzaouia Resort", "en": "Large Suite — Azzaouia Resort", "ar": "جناح كبير — Azzaouia Resort"} },
    { src: '/assets/photos/grande-suite/grande-suite-04.jpg', alt: {"fr": "Grande Suite — Azzaouia Resort", "en": "Large Suite — Azzaouia Resort", "ar": "جناح كبير — Azzaouia Resort"} },
    { src: '/assets/photos/grande-suite/grande-suite-05.jpg', alt: {"fr": "Grande Suite — Azzaouia Resort", "en": "Large Suite — Azzaouia Resort", "ar": "جناح كبير — Azzaouia Resort"} },
    { src: '/assets/photos/grande-suite/grande-suite-06.jpg', alt: {"fr": "Grande Suite — Azzaouia Resort", "en": "Large Suite — Azzaouia Resort", "ar": "جناح كبير — Azzaouia Resort"} },
    { src: '/assets/photos/grande-suite/grande-suite-07.jpg', alt: {"fr": "Grande Suite — Azzaouia Resort", "en": "Large Suite — Azzaouia Resort", "ar": "جناح كبير — Azzaouia Resort"} },
    { src: '/assets/photos/grande-suite/grande-suite-08.jpg', alt: {"fr": "Grande Suite — Azzaouia Resort", "en": "Large Suite — Azzaouia Resort", "ar": "جناح كبير — Azzaouia Resort"} },
    { src: '/assets/photos/grande-suite/grande-suite-09.jpg', alt: {"fr": "Grande Suite — Azzaouia Resort", "en": "Large Suite — Azzaouia Resort", "ar": "جناح كبير — Azzaouia Resort"} },
    { src: '/assets/photos/grande-suite/grande-suite-10.jpg', alt: {"fr": "Grande Suite — Azzaouia Resort", "en": "Large Suite — Azzaouia Resort", "ar": "جناح كبير — Azzaouia Resort"} },
  ],
  'petite-suite': [
    { src: '/assets/photos/petite-suite/petite-suite-01.jpg', alt: {"fr": "Petite Suite — Azzaouia Resort", "en": "Small Suite — Azzaouia Resort", "ar": "جناح صغير — Azzaouia Resort"} },
    { src: '/assets/photos/petite-suite/petite-suite-02.jpg', alt: {"fr": "Petite Suite — Azzaouia Resort", "en": "Small Suite — Azzaouia Resort", "ar": "جناح صغير — Azzaouia Resort"} },
    { src: '/assets/photos/petite-suite/petite-suite-03.jpg', alt: {"fr": "Petite Suite — Azzaouia Resort", "en": "Small Suite — Azzaouia Resort", "ar": "جناح صغير — Azzaouia Resort"} },
    { src: '/assets/photos/petite-suite/petite-suite-04.jpg', alt: {"fr": "Petite Suite — Azzaouia Resort", "en": "Small Suite — Azzaouia Resort", "ar": "جناح صغير — Azzaouia Resort"} },
    { src: '/assets/photos/petite-suite/petite-suite-05.jpg', alt: {"fr": "Petite Suite — Azzaouia Resort", "en": "Small Suite — Azzaouia Resort", "ar": "جناح صغير — Azzaouia Resort"} },
    { src: '/assets/photos/petite-suite/petite-suite-06.jpg', alt: {"fr": "Petite Suite — Azzaouia Resort", "en": "Small Suite — Azzaouia Resort", "ar": "جناح صغير — Azzaouia Resort"} },
    { src: '/assets/photos/petite-suite/petite-suite-07.jpg', alt: {"fr": "Petite Suite — Azzaouia Resort", "en": "Small Suite — Azzaouia Resort", "ar": "جناح صغير — Azzaouia Resort"} },
  ],
  'dortoir': [
    { src: '/assets/photos/dortoir/dortoir-01.jpg', alt: {"fr": "Dortoirs — Azzaouia Resort", "en": "Dormitories — Azzaouia Resort", "ar": "المهاجع — Azzaouia Resort"} },
  ],
};

export type GalleryFilter = 'all' | 'rooms' | 'suites' | 'dorms' | 'grounds' | 'resto';

export interface GalleryPhoto extends Photo {
  filter: Exclude<GalleryFilter, 'all'>;
}

export const galleryPhotos: GalleryPhoto[] = [
  { src: '/assets/photos/galerie/galerie-01.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-02.jpg', filter: 'grounds', ratio: 'square', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-03.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-05.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-06.jpg', filter: 'grounds', ratio: 'square', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-07.jpg', filter: 'rooms', ratio: 'landscape', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-08.jpg', filter: 'grounds', ratio: 'square', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-09.jpg', filter: 'rooms', ratio: 'landscape', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-11.jpg', filter: 'rooms', ratio: 'landscape', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-12.jpg', filter: 'grounds', ratio: 'square', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-13.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-14.jpg', filter: 'grounds', ratio: 'square', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-15.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-16.jpg', filter: 'rooms', ratio: 'square', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-17.jpg', filter: 'rooms', ratio: 'landscape', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-18.jpg', filter: 'grounds', ratio: 'square', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
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
  { src: '/assets/photos/dortoir/dortoir-01.jpg', filter: 'dorms', ratio: 'landscape', alt: {"fr": "Dortoir — Azzaouia Resort", "en": "Dormitory — Azzaouia Resort", "ar": "المهجع — Azzaouia Resort"} },
  { src: '/assets/photos/petite-suite/petite-suite-01.jpg', filter: 'suites', ratio: 'landscape', alt: {"fr": "Petite Suite — Azzaouia Resort", "en": "Small Suite — Azzaouia Resort", "ar": "جناح صغير — Azzaouia Resort"} },
  { src: '/assets/photos/petite-suite/petite-suite-05.jpg', filter: 'suites', ratio: 'landscape', alt: {"fr": "Petite Suite — Azzaouia Resort", "en": "Small Suite — Azzaouia Resort", "ar": "جناح صغير — Azzaouia Resort"} },
  { src: '/assets/photos/petite-suite/petite-suite-07.jpg', filter: 'suites', ratio: 'landscape', alt: {"fr": "Petite Suite — Azzaouia Resort", "en": "Small Suite — Azzaouia Resort", "ar": "جناح صغير — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-28.jpg', filter: 'suites', ratio: 'landscape', alt: {"fr": "Grande Suite — salon et plafond en roseaux — Azzaouia Resort", "en": "Large Suite — lounge and reed ceiling — Azzaouia Resort", "ar": "الجناح الكبير — صالون وسقف من القصب — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-29.jpg', filter: 'grounds', ratio: 'portrait', alt: {"fr": "Coin repas sur la terrasse — Azzaouia Resort", "en": "Dining corner on the terrace — Azzaouia Resort", "ar": "ركن الطعام في الشرفة — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-30.jpg', filter: 'grounds', ratio: 'portrait', alt: {"fr": "Terrasse face aux montagnes — Azzaouia Resort", "en": "Terrace facing the mountains — Azzaouia Resort", "ar": "الشرفة المطلة على الجبال — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-31.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Terrasse face aux montagnes — Azzaouia Resort", "en": "Terrace facing the mountains — Azzaouia Resort", "ar": "الشرفة المطلة على الجبال — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-32.jpg', filter: 'grounds', ratio: 'portrait', alt: {"fr": "Terrasse face aux montagnes — Azzaouia Resort", "en": "Terrace facing the mountains — Azzaouia Resort", "ar": "الشرفة المطلة على الجبال — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-33.jpg', filter: 'resto', ratio: 'portrait', alt: {"fr": "Plats marocains du terroir — Azzaouia Resort", "en": "Traditional Moroccan dishes — Azzaouia Resort", "ar": "أطباق مغربية تقليدية — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-34.jpg', filter: 'resto', ratio: 'portrait', alt: {"fr": "Plats marocains du terroir — Azzaouia Resort", "en": "Traditional Moroccan dishes — Azzaouia Resort", "ar": "أطباق مغربية تقليدية — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-35.jpg', filter: 'resto', ratio: 'portrait', alt: {"fr": "Plats marocains du terroir — Azzaouia Resort", "en": "Traditional Moroccan dishes — Azzaouia Resort", "ar": "أطباق مغربية تقليدية — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-36.jpg', filter: 'grounds', ratio: 'portrait', alt: {"fr": "Transats dans le jardin — Azzaouia Resort", "en": "Sun loungers in the garden — Azzaouia Resort", "ar": "كراسي الاسترخاء في الحديقة — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-37.jpg', filter: 'resto', ratio: 'portrait', alt: {"fr": "Plats marocains du terroir — Azzaouia Resort", "en": "Traditional Moroccan dishes — Azzaouia Resort", "ar": "أطباق مغربية تقليدية — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-38.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Salon et table dressée — Azzaouia Resort", "en": "Lounge and set table — Azzaouia Resort", "ar": "صالون ومائدة معدة — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-39.jpg', filter: 'grounds', ratio: 'portrait', alt: {"fr": "Salon et table dressée — Azzaouia Resort", "en": "Lounge and set table — Azzaouia Resort", "ar": "صالون ومائدة معدة — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-40.jpg', filter: 'grounds', ratio: 'portrait', alt: {"fr": "Salon et table dressée — Azzaouia Resort", "en": "Lounge and set table — Azzaouia Resort", "ar": "صالون ومائدة معدة — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-41.jpg', filter: 'resto', ratio: 'portrait', alt: {"fr": "Plats marocains du terroir — Azzaouia Resort", "en": "Traditional Moroccan dishes — Azzaouia Resort", "ar": "أطباق مغربية تقليدية — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-42.jpg', filter: 'grounds', ratio: 'portrait', alt: {"fr": "Soirée au domaine — Azzaouia Resort", "en": "Evening at the resort — Azzaouia Resort", "ar": "سهرة في المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-43.jpg', filter: 'grounds', ratio: 'portrait', alt: {"fr": "Soirée au domaine — Azzaouia Resort", "en": "Evening at the resort — Azzaouia Resort", "ar": "سهرة في المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-44.jpg', filter: 'grounds', ratio: 'portrait', alt: {"fr": "Soirée au domaine — Azzaouia Resort", "en": "Evening at the resort — Azzaouia Resort", "ar": "سهرة في المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-45.jpg', filter: 'resto', ratio: 'landscape', alt: {"fr": "Plats marocains du terroir — Azzaouia Resort", "en": "Traditional Moroccan dishes — Azzaouia Resort", "ar": "أطباق مغربية تقليدية — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-46.jpg', filter: 'grounds', ratio: 'portrait', alt: {"fr": "Piscine et palmiers — Azzaouia Resort", "en": "Pool and palm trees — Azzaouia Resort", "ar": "المسبح والنخيل — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-47.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Piscine et palmiers — Azzaouia Resort", "en": "Pool and palm trees — Azzaouia Resort", "ar": "المسبح والنخيل — Azzaouia Resort"} },
  { src: '/assets/photos/chambre-double/chambre-double-03.jpg', filter: 'rooms', ratio: 'portrait', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  { src: '/assets/photos/chambre-double/chambre-double-04.jpg', filter: 'rooms', ratio: 'landscape', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  { src: '/assets/photos/chambre-double/chambre-double-05.jpg', filter: 'rooms', ratio: 'portrait', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  { src: '/assets/photos/chambre-double/chambre-double-06.jpg', filter: 'rooms', ratio: 'landscape', alt: {"fr": "Chambre Double — Azzaouia Resort", "en": "Double Room — Azzaouia Resort", "ar": "غرفة مزدوجة — Azzaouia Resort"} },
  { src: '/assets/photos/grande-suite/grande-suite-02.jpg', filter: 'suites', ratio: 'landscape', alt: {"fr": "Grande Suite — Azzaouia Resort", "en": "Large Suite — Azzaouia Resort", "ar": "جناح كبير — Azzaouia Resort"} },
  { src: '/assets/photos/grande-suite/grande-suite-03.jpg', filter: 'suites', ratio: 'landscape', alt: {"fr": "Grande Suite — Azzaouia Resort", "en": "Large Suite — Azzaouia Resort", "ar": "جناح كبير — Azzaouia Resort"} },
  { src: '/assets/photos/grande-suite/grande-suite-04.jpg', filter: 'suites', ratio: 'landscape', alt: {"fr": "Grande Suite — Azzaouia Resort", "en": "Large Suite — Azzaouia Resort", "ar": "جناح كبير — Azzaouia Resort"} },
  { src: '/assets/photos/grande-suite/grande-suite-05.jpg', filter: 'suites', ratio: 'landscape', alt: {"fr": "Grande Suite — Azzaouia Resort", "en": "Large Suite — Azzaouia Resort", "ar": "جناح كبير — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-48.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-49.jpg', filter: 'grounds', ratio: 'portrait', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-50.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-51.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-52.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-53.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-54.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-55.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-56.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-57.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-58.jpg', filter: 'grounds', ratio: 'portrait', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-59.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-60.jpg', filter: 'grounds', ratio: 'landscape', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/galerie/galerie-61.jpg', filter: 'grounds', ratio: 'portrait', alt: {"fr": "Le Domaine — Azzaouia Resort", "en": "The Grounds — Azzaouia Resort", "ar": "فضاء المنتجع — Azzaouia Resort"} },
  { src: '/assets/photos/resto/resto-01.jpg', filter: 'resto', ratio: 'portrait', alt: {"fr": "Restaurant — Azzaouia Resort", "en": "Restaurant — Azzaouia Resort", "ar": "المطعم — Azzaouia Resort"} },
  { src: '/assets/photos/resto/resto-02.jpg', filter: 'resto', ratio: 'portrait', alt: {"fr": "Restaurant — Azzaouia Resort", "en": "Restaurant — Azzaouia Resort", "ar": "المطعم — Azzaouia Resort"} },
  { src: '/assets/photos/resto/resto-03.jpg', filter: 'resto', ratio: 'landscape', alt: {"fr": "Restaurant — Azzaouia Resort", "en": "Restaurant — Azzaouia Resort", "ar": "المطعم — Azzaouia Resort"} },
  { src: '/assets/photos/resto/resto-04.jpg', filter: 'resto', ratio: 'landscape', alt: {"fr": "Restaurant — Azzaouia Resort", "en": "Restaurant — Azzaouia Resort", "ar": "المطعم — Azzaouia Resort"} },
  { src: '/assets/photos/resto/resto-05.jpg', filter: 'resto', ratio: 'landscape', alt: {"fr": "Restaurant — Azzaouia Resort", "en": "Restaurant — Azzaouia Resort", "ar": "المطعم — Azzaouia Resort"} },
  { src: '/assets/photos/resto/resto-06.jpg', filter: 'resto', ratio: 'landscape', alt: {"fr": "Restaurant — Azzaouia Resort", "en": "Restaurant — Azzaouia Resort", "ar": "المطعم — Azzaouia Resort"} },
  { src: '/assets/photos/resto/resto-07.jpg', filter: 'resto', ratio: 'landscape', alt: {"fr": "Restaurant — Azzaouia Resort", "en": "Restaurant — Azzaouia Resort", "ar": "المطعم — Azzaouia Resort"} },
];
