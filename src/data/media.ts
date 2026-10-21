/**
 * Catalogue photo par catégorie.
 * Dossiers attendus dans /public/assets/photos/ :
 *   hero/ chambre-double/ dortoir/ petite-suite/ grande-suite/ galerie/
 * Tant que les photos client ne sont pas déposées, les URLs d'illustration
 * ci-dessous (ratio 3:2) servent de placeholders clairs à remplacer.
 */

export type PhotoCategory =
  | 'hero' |'chambre-double' |'dortoir' |'petite-suite' |'grande-suite' |'domaine' |'galerie';

export interface Photo {
  src: string;
  alt: { fr: string; en: string; ar: string };
  /** Ratio d'affichage pour la galerie masonry */
  ratio?: 'portrait' | 'landscape' | 'square';
}

// Photo hero 1920x1080 — remplacer par /assets/photos/hero/hero-1920x1080.webp
export const heroPhoto: Photo = {
  src: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1920&q=80&auto=format&fit=crop',
  alt: {
    fr: 'Vue du domaine Azzaouia Resort au lever du soleil, aux portes du parc de Tazekka',
    en: 'View of Azzaouia Resort estate at sunrise, at the gates of Tazekka park',
    ar: 'منظر لمنتجع الزاوية عند شروق الشمس على أبواب منتزه تازكا',
  },
};

export const roomPhotos: Record<string, Photo[]> = {
  'chambre-double': [
    {
      src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=75&auto=format&fit=crop',
      alt: {
        fr: 'Chambre double lumineuse aux tons sable et lin blanc',
        en: 'Bright double room in sand tones with white linen',
        ar: 'غرفة مزدوجة مضيئة بألوان الرمل والكتان الأبيض',
      },
    },
    {
      src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&q=75&auto=format&fit=crop',
      alt: {
        fr: 'Lit double et décor artisanal dans la chambre double',
        en: 'Double bed and handcrafted decor in the double room',
        ar: 'سرير مزدوج وديكور حرفي في الغرفة المزدوجة',
      },
    },
  ],
  dortoir: [
    {
      src: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&q=75&auto=format&fit=crop',
      alt: {
        fr: 'Dortoir aéré avec lits superposés en bois clair',
        en: 'Airy dormitory with light wooden bunk beds',
        ar: 'مهجع واسع بأسرّة خشبية فاتحة',
      },
    },
    {
      src: 'https://images.unsplash.com/photo-1520277739336-7bf67edfa768?w=900&q=75&auto=format&fit=crop',
      alt: {
        fr: 'Espace commun du dortoir pour groupes et randonneurs',
        en: 'Dormitory common area for groups and hikers',
        ar: 'المساحة المشتركة للمهجع للمجموعات والمتنزهين',
      },
    },
  ],
  'petite-suite': [
    {
      src: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=900&q=75&auto=format&fit=crop',
      alt: {
        fr: 'Petite suite avec coin salon et lumière naturelle',
        en: 'Small suite with sitting area and natural light',
        ar: 'جناح صغير بركن جلوس وإضاءة طبيعية',
      },
    },
    {
      src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&q=75&auto=format&fit=crop',
      alt: {
        fr: 'Salle de bain en zellige de la petite suite',
        en: 'Zellige bathroom of the small suite',
        ar: 'حمام بالزليج في الجناح الصغير',
      },
    },
  ],
  'grande-suite': [
    {
      src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900&q=75&auto=format&fit=crop',
      alt: {
        fr: 'Grande suite familiale spacieuse avec salon séparé',
        en: 'Spacious family suite with separate living room',
        ar: 'جناح عائلي واسع بصالون منفصل',
      },
    },
    {
      src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900&q=75&auto=format&fit=crop',
      alt: {
        fr: 'Chambre principale de la grande suite aux boiseries chaudes',
        en: 'Main bedroom of the large suite with warm woodwork',
        ar: 'غرفة النوم الرئيسية في الجناح الكبير بأخشاب دافئة',
      },
    },
  ],
  domaine: [
    {
      src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&q=75&auto=format&fit=crop',
      alt: {
        fr: 'Domaine entier avec cour intérieure et jardins',
        en: 'Whole estate with inner courtyard and gardens',
        ar: 'المنتجع بأكمله بفناء داخلي وحدائق',
      },
    },
    {
      src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=75&auto=format&fit=crop',
      alt: {
        fr: 'Terrasses du domaine pour séminaires et événements',
        en: 'Estate terraces for seminars and events',
        ar: 'شرفات المنتجع للندوات والمناسبات',
      },
    },
  ],
};

export type GalleryFilter = 'all' | 'rooms' | 'estate' | 'nature' | 'dining';

export interface GalleryPhoto extends Photo {
  filter: Exclude<GalleryFilter, 'all'>;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1000&q=75&auto=format&fit=crop',
    ratio: 'landscape',
    filter: 'estate',
    alt: {
      fr: 'Façade du domaine baignée de lumière dorée',
      en: 'Estate facade bathed in golden light',
      ar: 'واجهة المنتجع في ضوء ذهبي',
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=75&auto=format&fit=crop',
    ratio: 'portrait',
    filter: 'rooms',
    alt: {
      fr: 'Chambre double au linge blanc et bois clair',
      en: 'Double room with white linen and light wood',
      ar: 'غرفة مزدوجة بكتان أبيض وخشب فاتح',
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1000&q=75&auto=format&fit=crop',
    ratio: 'landscape',
    filter: 'nature',
    alt: {
      fr: 'Paysage de montagne et forêt de cèdres près de Tazekka',
      en: 'Mountain and cedar forest landscape near Tazekka',
      ar: 'منظر جبلي وغابة أرز قرب تازكا',
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=75&auto=format&fit=crop',
    ratio: 'square',
    filter: 'dining',
    alt: {
      fr: 'Plat de tajine servi sur la terrasse du domaine',
      en: 'Tagine dish served on the estate terrace',
      ar: 'طبق طاجين على شرفة المنتجع',
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=75&auto=format&fit=crop',
    ratio: 'portrait',
    filter: 'rooms',
    alt: {
      fr: 'Grande suite avec grand lit et rideaux de lin',
      en: 'Large suite with king bed and linen curtains',
      ar: 'جناح كبير بسرير واسع وستائر كتان',
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1000&q=75&auto=format&fit=crop',
    ratio: 'landscape',
    filter: 'nature',
    alt: {
      fr: 'Sentier de randonnée au cœur du parc national de Tazekka',
      en: 'Hiking trail in the heart of Tazekka National Park',
      ar: 'مسار للمشي في قلب المنتزه الوطني لتازكا',
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=75&auto=format&fit=crop',
    ratio: 'square',
    filter: 'estate',
    alt: {
      fr: 'Terrasse ombragée du domaine avec vue sur les jardins',
      en: 'Shaded estate terrace overlooking the gardens',
      ar: 'شرفة مظللة تطل على الحدائق',
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=75&auto=format&fit=crop',
    ratio: 'portrait',
    filter: 'dining',
    alt: {
      fr: 'Table dressée pour le dîner dans la salle du domaine',
      en: 'Table set for dinner in the estate dining hall',
      ar: 'مائدة معدة للعشاء في قاعة المنتجع',
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=75&auto=format&fit=crop',
    ratio: 'square',
    filter: 'rooms',
    alt: {
      fr: 'Salle de bain aux carreaux de zellige',
      en: 'Bathroom with zellige tiles',
      ar: 'حمام ببلاط الزليج',
    },
  },
];