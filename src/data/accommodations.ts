/** Hébergements — données reprises telles quelles de l'ancien site (aucune donnée inventée). */

export type L10n = { fr: string; en: string; ar: string };
export type L10nList = { fr: string[]; en: string[]; ar: string[] };

export interface Accommodation {
  id: 'chambre-double' | 'grande-suite' | 'petite-suite' | 'dortoir';
  /** Prix "à partir de" (MAD / nuit) */
  price: number;
  tag: L10n;
  name: L10n;
  capacity: L10n;
  short: L10n;
  long: L10n;
  rates: L10nList;
  notes: L10nList;
}

export const accommodations: Accommodation[] = [
  {
    "id": "chambre-double",
    "price": 660,
    "tag": {
      "fr": "14 chambres",
      "en": "14 rooms",
      "ar": "14 غرفة"
    },
    "name": {
      "fr": "Chambre Double",
      "en": "Double Room",
      "ar": "غرفة مزدوجة"
    },
    "capacity": {
      "fr": "1 à 2 personnes",
      "en": "1 to 2 guests",
      "ar": "شخص إلى شخصين"
    },
    "short": {
      "fr": "Une chambre chaleureuse au style marocain authentique, idéale pour un séjour paisible en pleine nature.",
      "en": "A warm room in authentic Moroccan style, ideal for a peaceful stay surrounded by nature.",
      "ar": "غرفة دافئة بطراز مغربي أصيل، مثالية لإقامة هادئة في قلب الطبيعة."
    },
    "long": {
      "fr": "Nos 12 chambres doubles marient l'artisanat marocain traditionnel au confort contemporain. Chacune ouvre sur le calme du village d'Aïn Sahla, aux portes du Parc National de Tazekka.",
      "en": "Our 12 double rooms combine traditional Moroccan craftsmanship with contemporary comfort. Each one opens onto the quiet of Aïn Sahla village, at the gateway to Tazekka National Park.",
      "ar": "تجمع غرفنا المزدوجة الاثنتا عشرة بين الحرفية المغربية التقليدية والراحة العصرية. تطل كل غرفة على هدوء قرية عين سهلة عند مدخل المنتزه الوطني لتازكة."
    },
    "rates": {
      "fr": [
        "1 adulte, petit-déjeuner : 700 MAD",
        "1 adulte, déjeuner inclus : 900 MAD",
        "2 adultes, petit-déjeuner : 900 MAD",
        "2 adultes, déjeuner inclus : 1300 MAD",
        "Enfant supplémentaire : +350 MAD"
      ],
      "en": [
        "1 adult, breakfast: 700 MAD",
        "1 adult, lunch included: 900 MAD",
        "2 adults, breakfast: 900 MAD",
        "2 adults, lunch included: 1300 MAD",
        "Additional child: +350 MAD"
      ],
      "ar": [
        "شخص بالغ واحد، فطور: 700 درهم",
        "شخص بالغ واحد، مع الغداء: 900 درهم",
        "شخصان بالغان، فطور: 900 درهم",
        "شخصان بالغان، مع الغداء: 1300 درهم",
        "طفل إضافي: +350 درهم"
      ]
    },
    "notes": {
      "fr": [
        "Restriction : limite d'âge de 8 ans"
      ],
      "en": [
        "Restriction: 8-year age limit"
      ],
      "ar": [
        "شرط: الحد العمري 8 سنوات"
      ]
    }
  },
  {
    "id": "grande-suite",
    "price": 2420,
    "tag": {
      "fr": "3 Suite",
      "en": "3 Suite",
      "ar": "جناح 3"
    },
    "name": {
      "fr": "Grande Suite",
      "en": "Large Suite",
      "ar": "جناح كبير"
    },
    "capacity": {
      "fr": "Jusqu'à 6 personnes",
      "en": "Up to 6 guests",
      "ar": "حتى 6 أشخاص"
    },
    "short": {
      "fr": "Notre plus vaste suite, pensée pour les familles élargies et les séjours en groupe.",
      "en": "Our largest suite, designed for extended families and group stays.",
      "ar": "أوسع أجنحتنا، مصمم للعائلات الكبيرة والإقامات الجماعية."
    },
    "long": {
      "fr": "La Grande Suite offre le plus grand volume du resort, avec un coin salon généreux pour réunir toute la famille. Elle fait partie des 5 suites du domaine.",
      "en": "The Large Suite offers the resort's most generous volume, with a spacious lounge area for the whole family. It is one of the estate's 5 suites.",
      "ar": "يوفر الجناح الكبير أوسع مساحة في المنتجع، مع ركن جلوس رحب يجمع العائلة بأكملها. وهو من بين الأجنحة الخمسة بالمنتجع."
    },
    "rates": {
      "fr": [
        "1 ou 2 adultes, petit-déjeuner : 1800 MAD",
        "Adulte supplémentaire : +300 MAD",
        "Enfant supplémentaire : +150 MAD"
      ],
      "en": [
        "1 or 2 adults, breakfast: 1800 MAD",
        "Additional adult: +300 MAD",
        "Additional child: +150 MAD"
      ],
      "ar": [
        "شخص أو شخصان بالغان، فطور: 1800 درهم",
        "شخص بالغ إضافي: +300 درهم",
        "طفل إضافي: +150 درهم"
      ]
    },
    "notes": {
      "fr": [
        "Capacité maximale : 6 personnes"
      ],
      "en": [
        "Maximum capacity: 6 guests"
      ],
      "ar": [
        "السعة القصوى: 6 أشخاص"
      ]
    }
  },
  {
    "id": "petite-suite",
    "price": 1490,
    "tag": {
      "fr": "4 Suite",
      "en": "4 Suite",
      "ar": "4 جناح"
    },
    "name": {
      "fr": "Petite Suite",
      "en": "Small Suite",
      "ar": "جناح صغير"
    },
    "capacity": {
      "fr": "Jusqu'à 4 personnes",
      "en": "Up to 4 guests",
      "ar": "حتى 4 أشخاص"
    },
    "short": {
      "fr": "Un espace plus généreux avec coin salon, pensé pour les familles et les petits groupes.",
      "en": "A roomier space with a lounge corner, made for families and small groups.",
      "ar": "مساحة أرحب مع ركن جلوس، مخصصة للعائلات والمجموعات الصغيرة."
    },
    "long": {
      "fr": "La Petite Suite ajoute un coin salon à l'espace nuit, pour les familles qui souhaitent plus de place sans changer d'échelle. Elle fait partie des 5 suites du domaine.",
      "en": "The Small Suite adds a lounge corner to the sleeping area, for families who want more room without moving up a size. It is one of the estate's 5 suites.",
      "ar": "يضيف الجناح الصغير ركن جلوس إلى مساحة النوم، للعائلات التي ترغب في مساحة أوسع. وهو من بين الأجنحة الخمسة بالمنتجع."
    },
    "rates": {
      "fr": [
        "1 ou 2 adultes, petit-déjeuner : 1400 MAD",
        "Adulte supplémentaire : +300 MAD",
        "Enfant supplémentaire : +150 MAD"
      ],
      "en": [
        "1 or 2 adults, breakfast: 1400 MAD",
        "Additional adult: +300 MAD",
        "Additional child: +150 MAD"
      ],
      "ar": [
        "شخص أو شخصان بالغان، فطور: 1400 درهم",
        "شخص بالغ إضافي: +300 درهم",
        "طفل إضافي: +150 درهم"
      ]
    },
    "notes": {
      "fr": [
        "Capacité maximale : 4 personnes"
      ],
      "en": [
        "Maximum capacity: 4 guests"
      ],
      "ar": [
        "السعة القصوى: 4 أشخاص"
      ]
    }
  },
  {
    "id": "dortoir",
    "price": 275,
    "tag": {
      "fr": "4 dortoirs",
      "en": "4 dormitories",
      "ar": "4 مَهاجِع"
    },
    "name": {
      "fr": "Dortoirs",
      "en": "Dormitories",
      "ar": "المهاجع"
    },
    "capacity": {
      "fr": "Jusqu'à 12 personnes",
      "en": "Up to 12 guests",
      "ar": "حتى 12 شخصًا"
    },
    "short": {
      "fr": "Un espace convivial et sécurisé, idéal pour les groupes venus profiter du calme d'Aïn Sahla.",
      "en": "A friendly, secure space, ideal for groups coming to enjoy the quiet of Aïn Sahla.",
      "ar": "فضاء ودّي وآمن، مثالي للمجموعات القادمة للاستمتاع بهدوء عين سهلة."
    },
    "long": {
      "fr": "Nos 2 dortoirs accueillent les groupes, les randonneurs et les séjours scolaires ou associatifs, à quelques pas des sentiers du Parc National de Tazekka.",
      "en": "Our 2 dormitories host groups, hikers, and school or association stays, a few steps from the trails of Tazekka National Park.",
      "ar": "يستقبل مهجعانا المجموعات والمتنزهين والرحلات المدرسية والجمعوية، على بعد خطوات من مسالك المنتزه الوطني لتازكة."
    },
    "rates": {
      "fr": [
        "1 personne : 400 MAD",
        "2 personnes : 800 MAD",
        "Adulte supplémentaire : +400 MAD",
        "Enfant supplémentaire : +200 MAD"
      ],
      "en": [
        "1 guest: 400 MAD",
        "2 guests: 800 MAD",
        "Additional adult: +400 MAD",
        "Additional child: +200 MAD"
      ],
      "ar": [
        "شخص واحد: 400 درهم",
        "شخصان: 800 درهم",
        "شخص بالغ إضافي: +400 درهم",
        "طفل إضافي: +200 درهم"
      ]
    },
    "notes": {
      "fr": [
        "Capacité maximale : 12 personnes"
      ],
      "en": [
        "Maximum capacity: 12 guests"
      ],
      "ar": [
        "السعة القصوى: 12 شخصًا"
      ]
    }
  }
];
