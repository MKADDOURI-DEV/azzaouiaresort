/**
 * Système de traductions centralisé FR / EN / AR.
 * Ajouter une langue = ajouter une clé ici et dans `languages`.
 */
export type Lang = 'fr' | 'en' | 'ar';

export const languages: { code: Lang; label: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'fr', label: 'Français', dir: 'ltr' },
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
];

export interface Dictionary {
  nav: { home: string; stay: string; services: string; gallery: string; story: string; contact: string; book: string; menu: string; close: string; language: string };
  hero: { eyebrow: string; title: string; subtitle: string; book: string; discover: string };
  booking: { checkIn: string; checkOut: string; guests: string; guest: string; guestsPlural: string; search: string; note: string };
  highlights: { eyebrow: string; title: string; items: { title: string; text: string }[] };
  stay: { eyebrow: string; title: string; intro: string; note: string; book: string; from: string; perNight: string; rates: string; goodToKnow: string; prev: string; next: string };
  services: { eyebrow: string; title: string; intro: string; items: { title: string; text: string }[] };
  gallery: { eyebrow: string; title: string; intro: string; filters: { all: string; rooms: string; suites: string; dorms: string; grounds: string }; less: string; close: string; prev: string; next: string };
  story: { eyebrow: string; title: string; paragraphs: string[]; features: string[]; since: string; tagline: string };
  location: { eyebrow: string; title: string; intro: string; items: { label: string; text: string }[]; mapTitle: string; openMap: string };
  contact: {
    eyebrow: string; title: string; intro: string; whatsapp: string; phone: string; email: string; address: string;
    desk: string; deskValue: string; payment: string; paymentValue: string;
    form: { name: string; email: string; message: string; send: string; sent: string; required: string; };
    whatsappMessage: string;
  };
  footer: { rights: string; legal: string; links: { stay: string; services: string; gallery: string; contact: string } };
  floating: { whatsapp: string };
}

export const translations: Record<Lang, Dictionary> = {
  "fr": {
    "nav": {
      "home": "Accueil",
      "stay": "Hébergement",
      "services": "Services",
      "gallery": "Galerie",
      "story": "Notre histoire",
      "contact": "Contact",
      "book": "Réserver",
      "menu": "Ouvrir le menu",
      "close": "Fermer le menu",
      "language": "Langue"
    },
    "hero": {
      "eyebrow": "Aïn Sahla · Taza · Maroc",
      "title": "AZZAOUIA RESORT",
      "subtitle": "Depuis 1678, aux portes de Tazekka",
      "book": "Réserver",
      "discover": "Découvrir le domaine"
    },
    "booking": {
      "checkIn": "Arrivée",
      "checkOut": "Départ",
      "guests": "Voyageurs",
      "guest": "voyageur",
      "guestsPlural": "voyageurs",
      "search": "Vérifier la disponibilité",
      "note": "Réservation directe auprès d’Azzaouia Resort"
    },
    "highlights": {
      "eyebrow": "Le domaine",
      "title": "Un refuge entre cèdres et mémoire",
      "items": [
        {
          "title": "Aux portes du Parc National de Tazekka",
          "text": "Parc National de Tazekka — Randonnées et nature environnante"
        },
        {
          "title": "Hospitalité familiale depuis 1678",
          "text": "Entre chambres, suites et dortoirs, chaque espace raconte une histoire de patience et de soin. Notre équipe veille à ce que chaque hôte se sente non seulement bienvenu, mais véritablement chez lui."
        },
        {
          "title": "Cuisine authentique",
          "text": "Demi-pension ou pension complète, incluse et facturée par jour."
        }
      ]
    },
    "stay": {
      "eyebrow": "Séjournez chez nous",
      "title": "Hébergement",
      "intro": "Des chambres douillettes aux dortoirs conviviaux — chaque espace marie l'élégance marocaine traditionnelle au confort moderne.",
      "note": "17 chambres et suites au total : 12 chambres doubles, 5 suites et 2 dortoirs.",
      "book": "Réserver",
      "from": "À partir de",
      "perNight": "/ nuit",
      "rates": "Tarifs",
      "goodToKnow": "Bon à savoir",
      "prev": "Photo précédente",
      "next": "Photo suivante"
    },
    "services": {
      "eyebrow": "Services du Resort",
      "title": "Nos Services",
      "intro": "Chaque détail pensé pour un séjour authentique et sans souci.",
      "items": [
        {
          "title": "Restauration",
          "text": "Demi-pension ou pension complète, incluse et facturée par jour."
        },
        {
          "title": "Événementiel",
          "text": "Organisation de vos mariages, séminaires et célébrations."
        },
        {
          "title": "Transport",
          "text": "Transferts et déplacements depuis Oued Amlil et la région de Taza."
        },
        {
          "title": "Randonnées",
          "text": "Sorties nature sur les sentiers du Parc National de Tazekka."
        }
      ]
    },
    "gallery": {
      "eyebrow": "Voyage Visuel",
      "title": "Galerie",
      "intro": "Un aperçu de la beauté et de l'authenticité d'Azzaouia Resort.",
      "filters": {
        "all": "Tout",
        "rooms": "Chambres",
        "suites": "Suites",
        "dorms": "Dortoirs",
        "grounds": "Domaine"
      },
      "less": "Voir moins",
      "close": "Fermer",
      "prev": "Précédente",
      "next": "Suivante"
    },
    "story": {
      "eyebrow": "Notre Histoire",
      "title": "Un Sanctuaire Marocain",
      "paragraphs": [
        "Niché au village d'Aïn Sahla, aux portes du Parc National de Tazekka, Azzaouia Resort perpétue depuis 1678 une tradition d'hospitalité marocaine authentique. Notre domaine marie l'architecture traditionnelle à un confort chaleureux, pour une expérience vraie et ressourçante.",
        "Entre chambres, suites et dortoirs, chaque espace raconte une histoire de patience et de soin. Notre équipe veille à ce que chaque hôte se sente non seulement bienvenu, mais véritablement chez lui."
      ],
      "features": [
        "Architecture marocaine traditionnelle",
        "Aux portes du Parc National de Tazekka",
        "Cuisine authentique",
        "Hospitalité familiale depuis 1678"
      ],
      "since": "Depuis",
      "tagline": "Une histoire d'hospitalité depuis 1678"
    },
    "location": {
      "eyebrow": "Nous Trouver",
      "title": "Notre Localisation",
      "intro": "Idéalement situé au village d'Aïn Sahla, aux portes du Parc National de Tazekka.",
      "items": [
        {
          "label": "Adresse",
          "text": "Village Aïn Sahla, Commune Bouchfaa, Cercle Oued Amlil, Province de Taza, Maroc"
        },
        {
          "label": "Région",
          "text": "Fès-Meknès, Province de Taza"
        },
        {
          "label": "Réception",
          "text": "Ouverte 24h/24, 7j/7"
        },
        {
          "label": "Accès",
          "text": "Oued Amlil, Province de Taza — Transport disponible en extra"
        },
        {
          "label": "À Proximité",
          "text": "Parc National de Tazekka — Randonnées et nature environnante"
        }
      ],
      "mapTitle": "Carte montrant la localisation d'Azzaouia Resort à Aïn Sahla, Taza",
      "openMap": "Ouvrir dans Google Maps"
    },
    "contact": {
      "eyebrow": "Contactez-nous",
      "title": "Contact",
      "intro": "Une question ou une demande particulière ? Notre équipe est à votre écoute.",
      "whatsapp": "WhatsApp",
      "phone": "Téléphone",
      "email": "Email",
      "address": "Adresse",
      "form": {
        "name": "Nom complet",
        "email": "Adresse email",
        "message": "Votre message",
        "send": "Envoyer le message",
        "sent": "Merci ! Nous vous répondons très vite.",
        "required": "Champ requis"
      },
      "whatsappMessage": "Bonjour, je souhaite des informations sur un séjour à Azzaouia Resort.",
      "desk": "Réception",
      "deskValue": "Ouverte 24h/24, 7j/7",
      "payment": "Modes de paiement",
      "paymentValue": "Espèces, virement bancaire, chèque"
    },
    "footer": {
      "rights": "Tous droits réservés.",
      "legal": "Mentions légales",
      "links": {
        "stay": "Hébergement",
        "services": "Services",
        "gallery": "Galerie",
        "contact": "Contact"
      }
    },
    "floating": {
      "whatsapp": "Discuter sur WhatsApp"
    }
  },
  "en": {
    "nav": {
      "home": "Home",
      "stay": "Stay",
      "services": "Services",
      "gallery": "Gallery",
      "story": "Our story",
      "contact": "Contact",
      "book": "Book",
      "menu": "Open menu",
      "close": "Close menu",
      "language": "Language"
    },
    "hero": {
      "eyebrow": "Aïn Sahla · Taza · Morocco",
      "title": "AZZAOUIA RESORT",
      "subtitle": "Since 1678, at the gates of Tazekka",
      "book": "Book now",
      "discover": "Discover the estate"
    },
    "booking": {
      "checkIn": "Check-in",
      "checkOut": "Check-out",
      "guests": "Guests",
      "guest": "guest",
      "guestsPlural": "guests",
      "search": "Check availability",
      "note": "Book directly with Azzaouia Resort"
    },
    "highlights": {
      "eyebrow": "The estate",
      "title": "A refuge between cedars and memory",
      "items": [
        {
          "title": "At the gateway to Tazekka National Park",
          "text": "Tazekka National Park — hiking and surrounding nature"
        },
        {
          "title": "Family hospitality since 1678",
          "text": "Across rooms, suites and dormitories, every space tells a story of patience and care. Our team makes sure each guest feels not only welcome, but genuinely at home."
        },
        {
          "title": "Authentic cuisine",
          "text": "Half board or full board, included and charged per day."
        }
      ]
    },
    "stay": {
      "eyebrow": "Stay with us",
      "title": "Accommodation",
      "intro": "From cosy rooms to sociable dormitories, every space blends traditional Moroccan elegance with modern comfort.",
      "note": "17 rooms and suites in total: 12 double rooms, 5 suites and 2 dormitories.",
      "book": "Book",
      "from": "From",
      "perNight": "/ night",
      "rates": "Rates",
      "goodToKnow": "Good to know",
      "prev": "Previous photo",
      "next": "Next photo"
    },
    "services": {
      "eyebrow": "Resort Services",
      "title": "Our Services",
      "intro": "Every detail arranged for an authentic, worry-free stay.",
      "items": [
        {
          "title": "Dining",
          "text": "Half board or full board, included and charged per day."
        },
        {
          "title": "Events",
          "text": "Planning for your weddings, seminars and celebrations."
        },
        {
          "title": "Transport",
          "text": "Transfers and travel from Oued Amlil and the Taza region."
        },
        {
          "title": "Hiking",
          "text": "Nature outings on the trails of Tazekka National Park."
        }
      ]
    },
    "gallery": {
      "eyebrow": "A Visual Journey",
      "title": "Gallery",
      "intro": "A glimpse of the beauty and authenticity of Azzaouia Resort.",
      "filters": {
        "all": "All",
        "rooms": "Rooms",
        "suites": "Suites",
        "dorms": "Dormitories",
        "grounds": "Grounds"
      },
      "less": "Show less",
      "close": "Close",
      "prev": "Previous",
      "next": "Next"
    },
    "story": {
      "eyebrow": "Our Story",
      "title": "A Moroccan Sanctuary",
      "paragraphs": [
        "Set in the village of Aïn Sahla, at the gateway to Tazekka National Park, Azzaouia Resort has carried a tradition of authentic Moroccan hospitality since 1678. Our estate pairs traditional architecture with warm comfort, for a stay that feels true and restorative.",
        "Across rooms, suites and dormitories, every space tells a story of patience and care. Our team makes sure each guest feels not only welcome, but genuinely at home."
      ],
      "features": [
        "Traditional Moroccan architecture",
        "At the gateway to Tazekka National Park",
        "Authentic cuisine",
        "Family hospitality since 1678"
      ],
      "since": "Since",
      "tagline": "A story of hospitality since 1678"
    },
    "location": {
      "eyebrow": "Find Us",
      "title": "Our Location",
      "intro": "Ideally set in the village of Aïn Sahla, at the gateway to Tazekka National Park.",
      "items": [
        {
          "label": "Address",
          "text": "Aïn Sahla village, Bouchfaa commune, Oued Amlil district, Taza Province, Morocco"
        },
        {
          "label": "Region",
          "text": "Fès-Meknès, Taza Province"
        },
        {
          "label": "Front desk",
          "text": "Open 24/7"
        },
        {
          "label": "Access",
          "text": "Oued Amlil, Taza Province — transport available as an extra"
        },
        {
          "label": "Nearby",
          "text": "Tazekka National Park — hiking and surrounding nature"
        }
      ],
      "mapTitle": "Map showing Azzaouia Resort in Aïn Sahla, Taza",
      "openMap": "Open in Google Maps"
    },
    "contact": {
      "eyebrow": "Get in touch",
      "title": "Contact",
      "intro": "A question or a special request? Our team is here to help.",
      "whatsapp": "WhatsApp",
      "phone": "Phone",
      "email": "Email",
      "address": "Address",
      "form": {
        "name": "Full name",
        "email": "Email address",
        "message": "Your message",
        "send": "Send message",
        "sent": "Thank you! We will reply very soon.",
        "required": "Required field"
      },
      "whatsappMessage": "Hello, I would like information about a stay at Azzaouia Resort.",
      "desk": "Front desk",
      "deskValue": "Open 24/7",
      "payment": "Payment methods",
      "paymentValue": "Cash, bank transfer, cheque"
    },
    "footer": {
      "rights": "All rights reserved.",
      "legal": "Legal notice",
      "links": {
        "stay": "Stay",
        "services": "Services",
        "gallery": "Gallery",
        "contact": "Contact"
      }
    },
    "floating": {
      "whatsapp": "Chat on WhatsApp"
    }
  },
  "ar": {
    "nav": {
      "home": "الرئيسية",
      "stay": "الإقامة",
      "services": "الخدمات",
      "gallery": "المعرض",
      "story": "قصتنا",
      "contact": "اتصل بنا",
      "book": "احجز",
      "menu": "فتح القائمة",
      "close": "إغلاق القائمة",
      "language": "اللغة"
    },
    "hero": {
      "eyebrow": "عين سهلة · تازة · المغرب",
      "title": "منتجع الزاوية",
      "subtitle": "منذ 1678، على أبواب تازكا",
      "book": "احجز الآن",
      "discover": "اكتشف المنتجع"
    },
    "booking": {
      "checkIn": "الوصول",
      "checkOut": "المغادرة",
      "guests": "الضيوف",
      "guest": "ضيف",
      "guestsPlural": "ضيوف",
      "search": "تحقق من التوفر",
      "note": "احجز مباشرة لدى منتجع الزاوية"
    },
    "highlights": {
      "eyebrow": "المنتجع",
      "title": "ملاذ بين الأرز والذاكرة",
      "items": [
        {
          "title": "عند مدخل المنتزه الوطني لتازكة",
          "text": "المنتزه الوطني لتازكة — رحلات وطبيعة محيطة"
        },
        {
          "title": "ضيافة عائلية منذ 1678",
          "text": "بين الغرف والأجنحة والمهاجع، يحكي كل فضاء قصة من الصبر والعناية. يحرص فريقنا على أن يشعر كل ضيف بأنه في بيته حقًا."
        },
        {
          "title": "مطبخ أصيل",
          "text": "إقامة بنصف أو كامل الإعاشة، مشمولة وتُحتسب يوميًا."
        }
      ]
    },
    "stay": {
      "eyebrow": "أقم معنا",
      "title": "الإقامة",
      "intro": "من الغرف الدافئة إلى المهاجع الجماعية، يجمع كل فضاء بين الأناقة المغربية التقليدية والراحة العصرية.",
      "note": "17 غرفة وجناحًا في المجموع: 12 غرفة مزدوجة، 5 أجنحة ومهجعان.",
      "book": "احجز",
      "from": "ابتداءً من",
      "perNight": "/ الليلة",
      "rates": "الأسعار",
      "goodToKnow": "معلومات مفيدة",
      "prev": "الصورة السابقة",
      "next": "الصورة التالية"
    },
    "services": {
      "eyebrow": "خدمات المنتجع",
      "title": "خدماتنا",
      "intro": "كل تفصيل مدروس من أجل إقامة أصيلة وخالية من الهموم.",
      "items": [
        {
          "title": "المطعم",
          "text": "إقامة بنصف أو كامل الإعاشة، مشمولة وتُحتسب يوميًا."
        },
        {
          "title": "تنظيم المناسبات",
          "text": "تنظيم الأعراس والندوات والاحتفالات."
        },
        {
          "title": "النقل",
          "text": "التنقلات انطلاقًا من واد أمليل وجهة تازة."
        },
        {
          "title": "الرحلات الجبلية",
          "text": "خرجات في الطبيعة على مسالك المنتزه الوطني لتازكة."
        }
      ]
    },
    "gallery": {
      "eyebrow": "جولة بالصور",
      "title": "معرض الصور",
      "intro": "لمحة عن جمال وأصالة منتجع الزاوية.",
      "filters": {
        "all": "الكل",
        "rooms": "الغرف",
        "suites": "الأجنحة",
        "dorms": "المهاجع",
        "grounds": "المنتجع"
      },
      "less": "عرض أقل",
      "close": "إغلاق",
      "prev": "السابقة",
      "next": "التالية"
    },
    "story": {
      "eyebrow": "قصتنا",
      "title": "ملاذ مغربي",
      "paragraphs": [
        "يقع منتجع الزاوية في قرية عين سهلة عند مدخل المنتزه الوطني لتازكة، ويواصل منذ سنة 1678 تقليد الضيافة المغربية الأصيلة. يجمع فضاؤنا بين العمارة التقليدية والراحة الدافئة، من أجل تجربة صادقة تعيد الحيوية.",
        "بين الغرف والأجنحة والمهاجع، يحكي كل فضاء قصة من الصبر والعناية. يحرص فريقنا على أن يشعر كل ضيف بأنه في بيته حقًا."
      ],
      "features": [
        "عمارة مغربية تقليدية",
        "عند مدخل المنتزه الوطني لتازكة",
        "مطبخ أصيل",
        "ضيافة عائلية منذ 1678"
      ],
      "since": "منذ",
      "tagline": "قصة ضيافة منذ 1678"
    },
    "location": {
      "eyebrow": "كيف تصل إلينا",
      "title": "موقعنا",
      "intro": "موقع مثالي في قرية عين سهلة، عند مدخل المنتزه الوطني لتازكة.",
      "items": [
        {
          "label": "العنوان",
          "text": "قرية عين سهلة، جماعة بوشفاعة، دائرة واد أمليل، إقليم تازة، المغرب"
        },
        {
          "label": "الجهة",
          "text": "فاس مكناس، إقليم تازة"
        },
        {
          "label": "الاستقبال",
          "text": "مفتوح 24 ساعة، 7 أيام في الأسبوع"
        },
        {
          "label": "الوصول",
          "text": "واد أمليل، إقليم تازة — النقل متاح كخدمة إضافية"
        },
        {
          "label": "بالقرب منا",
          "text": "المنتزه الوطني لتازكة — رحلات وطبيعة محيطة"
        }
      ],
      "mapTitle": "خريطة تُظهر موقع منتجع الزاوية بعين سهلة، تازة",
      "openMap": "افتح في خرائط جوجل"
    },
    "contact": {
      "eyebrow": "تواصل معنا",
      "title": "اتصل بنا",
      "intro": "لديكم سؤال أو طلب خاص؟ فريقنا في خدمتكم.",
      "whatsapp": "واتساب",
      "phone": "الهاتف",
      "email": "البريد الإلكتروني",
      "address": "العنوان",
      "form": {
        "name": "الاسم الكامل",
        "email": "البريد الإلكتروني",
        "message": "رسالتك",
        "send": "إرسال الرسالة",
        "sent": "شكرًا! سنرد عليك قريبًا جدًا.",
        "required": "حقل مطلوب"
      },
      "whatsappMessage": "مرحبًا، أود الحصول على معلومات حول الإقامة في منتجع الزاوية.",
      "desk": "الاستقبال",
      "deskValue": "مفتوح 24 ساعة، 7 أيام في الأسبوع",
      "payment": "وسائل الأداء",
      "paymentValue": "نقدًا، تحويل بنكي، شيك"
    },
    "footer": {
      "rights": "جميع الحقوق محفوظة.",
      "legal": "الإشعار القانوني",
      "links": {
        "stay": "الإقامة",
        "services": "الخدمات",
        "gallery": "المعرض",
        "contact": "اتصل بنا"
      }
    },
    "floating": {
      "whatsapp": "تحدث عبر واتساب"
    }
  }
};
