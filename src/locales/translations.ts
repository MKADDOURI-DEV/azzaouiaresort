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
  stay: { eyebrow: string; title: string; intro: string; book: string; amenities: string; people: string; prev: string; next: string; rooms: { name: string; capacity: string; pax: string; text: string; amenities: string[] }[] };
  services: { eyebrow: string; title: string; intro: string; items: { title: string; text: string }[] };
  gallery: { eyebrow: string; title: string; intro: string; filters: { all: string; rooms: string; estate: string; nature: string; dining: string }; close: string; prev: string; next: string };
  story: {
    eyebrow: string; title: string; paragraphs: string[];
    timeline: { year: string; text: string }[];
  };
  location: { eyebrow: string; title: string; intro: string; fromTaza: string; fromFes: string; fromTazaText: string; fromFesText: string; mapTitle: string; openMap: string };
  contact: {
    eyebrow: string; title: string; intro: string; whatsapp: string; phone: string; email: string; address: string;
    form: { name: string; email: string; message: string; send: string; sent: string; required: string; };
    whatsappMessage: string;
  };
  footer: { rights: string; legal: string; links: { stay: string; services: string; gallery: string; contact: string } };
  floating: { whatsapp: string };
}

export const translations: Record<Lang, Dictionary> = {
  fr: {
    nav: { home: 'Accueil', stay: 'Hébergement', services: 'Services', gallery: 'Galerie', story: 'Notre histoire', contact: 'Contact', book: 'Réserver', menu: 'Ouvrir le menu', close: 'Fermer le menu', language: 'Langue' },
    hero: { eyebrow: 'Aïn Sahla · Taza · Maroc', title: 'AZZAOUIA RESORT', subtitle: 'Depuis 1678, aux portes de Tazekka', book: 'Réserver', discover: 'Découvrir le domaine' },
    booking: { checkIn: 'Arrivée', checkOut: 'Départ', guests: 'Voyageurs', guest: 'voyageur', guestsPlural: 'voyageurs', search: 'Vérifier la disponibilité', note: 'Réservation directe, sans commission' },
    highlights: {
      eyebrow: 'Le domaine',
      title: 'Un refuge entre cèdres et mémoire',
      items: [
        { title: 'Nature', text: 'Forêts de chênes et de cèdres, sources et sentiers du Parc National de Tazekka à quelques minutes.' },
        { title: 'Patrimoine depuis 1678', text: 'Plus de trois siècles d’histoire transmise de génération en génération, entre pierre, bois et savoir-faire.' },
        { title: 'Calme', text: 'Ici, le silence a de la valeur : air pur, nuits étoilées et rythme lent, loin de l’agitation.' },
      ],
    },
    stay: {
      eyebrow: 'Hébergement',
      title: 'Choisissez votre façon de séjourner',
      intro: 'Des chambres lumineuses au domaine entier, chaque espace est pensé pour le repos et le partage.',
      book: 'Réserver', amenities: 'Équipements', people: 'pers.', prev: 'Photo précédente', next: 'Photo suivante',
      rooms: [
        { name: 'Chambre double', capacity: '2 pers.', pax: '2', text: 'Une chambre claire et sereine, linge de lit en coton, vue sur les jardins.', amenities: ['Wi-Fi', 'Climatisation', 'Salle de bain privée', 'Petit-déjeuner'] },
        { name: 'Dortoir', capacity: '8 pers.', pax: '8', text: 'Idéal pour randonneurs, familles nombreuses et groupes d’amis.', amenities: ['Lits superposés', 'Casiers', 'Sanitaires partagés', 'Wi-Fi'] },
        { name: 'Petite suite', capacity: '3 pers.', pax: '3', text: 'Chambre et coin salon, salle de bain en zellige, lumière naturelle.', amenities: ['Coin salon', 'Climatisation', 'Salle de bain privée', 'Wi-Fi'] },
        { name: 'Grande suite', capacity: '5 pers.', pax: '5', text: 'Un espace généreux pour les familles, avec salon séparé et boiseries chaleureuses.', amenities: ['Salon séparé', 'Chauffage', 'Salle de bain privée', 'Terrasse'] },
        { name: 'Le domaine', capacity: '30 pers.', pax: '30', text: 'Privatisez l’ensemble du domaine pour séminaires, mariages ou retraites.', amenities: ['Salle de réunion', 'Restauration sur mesure', 'Jardins', 'Parking'] },
      ],
    },
    services: {
      eyebrow: 'Services et expériences',
      title: 'Vivre le domaine, au rythme de la nature',
      intro: 'Tables du terroir, sentiers de Tazekka et espaces pour se réunir : tout est prêt pour un séjour complet.',
      items: [
        { title: 'Restauration', text: 'Cuisine marocaine de saison, produits de la région, repas servis en terrasse ou en salle.' },
        { title: 'Randonnées Tazekka', text: 'Sentiers balisés, cascade de Friouato, grottes et forêts de cèdres, avec guide local.' },
        { title: 'Séminaires et groupes', text: 'Salles lumineuses, hébergement groupé et formules sur mesure pour vos équipes.' },
        { title: 'Activités', text: 'Balades à cheval, observation des oiseaux, ateliers d’artisanat et soirées autour du feu.' },
      ],
    },
    gallery: { eyebrow: 'Galerie', title: 'Instants au domaine', intro: 'Une sélection de lieux, de tables et de paysages à parcourir avant de venir.', filters: { all: 'Tout', rooms: 'Chambres', estate: 'Domaine', nature: 'Nature', dining: 'Table' }, close: 'Fermer', prev: 'Précédente', next: 'Suivante' },
    story: {
      eyebrow: 'Notre histoire',
      title: 'Trois siècles d’hospitalité',
      paragraphs: [
        'Fondé en 1678, le domaine d’Azzaouia veille sur Aïn Sahla depuis plus de trois cents ans. Les murs épais, les cours intérieures et le bois de cèdre racontent une tradition d’accueil transmise de père en fils.',
        'Aujourd’hui encore, c’est une famille qui reçoit. Notre souhait : que chaque hôte reparte avec le sentiment d’avoir été invité chez soi, au cœur d’un paysage préservé.',
      ],
      timeline: [
        { year: '1678', text: 'Fondation du domaine à Aïn Sahla.' },
        { year: 'XIXe', text: 'Le lieu devient halte pour voyageurs et caravanes.' },
        { year: '2000', text: 'Rénovation fidèle des bâtiments historiques.' },
        { year: 'Aujourd’hui', text: 'Un resort familial ouvert à tous.' },
      ],
    },
    location: {
      eyebrow: 'Localisation', title: 'Aux portes du Parc National de Tazekka', intro: 'À Aïn Sahla, à proximité de Taza, sur la route entre Fès et l’Oriental.',
      fromTaza: 'Depuis Taza', fromFes: 'Depuis Fès', fromTazaText: 'Environ 30 minutes par la route de Bab Boudir.', fromFesText: 'Environ 2 h 15 par l’autoroute puis la N6.',
      mapTitle: 'Carte de localisation d’Azzaouia Resort', openMap: 'Ouvrir dans Google Maps',
    },
    contact: {
      eyebrow: 'Contact', title: 'Parlons de votre séjour', intro: 'Une question, un groupe, une date précise ? Nous répondons personnellement.',
      whatsapp: 'WhatsApp', phone: 'Téléphone', email: 'Email', address: 'Adresse',
      form: { name: 'Nom complet', email: 'Adresse email', message: 'Votre message', send: 'Envoyer le message', sent: 'Merci ! Nous vous répondons très vite.', required: 'Champ requis' },
      whatsappMessage: 'Bonjour, je souhaite des informations sur un séjour à Azzaouia Resort.',
    },
    footer: { rights: 'Tous droits réservés.', legal: 'Mentions légales', links: { stay: 'Hébergement', services: 'Services', gallery: 'Galerie', contact: 'Contact' } },
    floating: { whatsapp: 'Discuter sur WhatsApp' },
  },
  en: {
    nav: { home: 'Home', stay: 'Stay', services: 'Services', gallery: 'Gallery', story: 'Our story', contact: 'Contact', book: 'Book', menu: 'Open menu', close: 'Close menu', language: 'Language' },
    hero: { eyebrow: 'Aïn Sahla · Taza · Morocco', title: 'AZZAOUIA RESORT', subtitle: 'Since 1678, at the gates of Tazekka', book: 'Book now', discover: 'Discover the estate' },
    booking: { checkIn: 'Check-in', checkOut: 'Check-out', guests: 'Guests', guest: 'guest', guestsPlural: 'guests', search: 'Check availability', note: 'Direct booking, no commission' },
    highlights: {
      eyebrow: 'The estate',
      title: 'A refuge between cedars and memory',
      items: [
        { title: 'Nature', text: 'Oak and cedar forests, springs and trails of Tazekka National Park just minutes away.' },
        { title: 'Heritage since 1678', text: 'Over three centuries of history passed down through generations, in stone, wood and craft.' },
        { title: 'Calm', text: 'Here silence is precious: clean air, starry nights and a slow pace, far from the rush.' },
      ],
    },
    stay: {
      eyebrow: 'Stay',
      title: 'Choose how you want to stay',
      intro: 'From bright rooms to the entire estate, every space is designed for rest and togetherness.',
      book: 'Book', amenities: 'Amenities', people: 'guests', prev: 'Previous photo', next: 'Next photo',
      rooms: [
        { name: 'Double room', capacity: '2 guests', pax: '2', text: 'A bright, serene room with cotton bedding and garden views.', amenities: ['Wi-Fi', 'Air conditioning', 'Private bathroom', 'Breakfast'] },
        { name: 'Dormitory', capacity: '8 guests', pax: '8', text: 'Ideal for hikers, large families and groups of friends.', amenities: ['Bunk beds', 'Lockers', 'Shared bathrooms', 'Wi-Fi'] },
        { name: 'Small suite', capacity: '3 guests', pax: '3', text: 'Bedroom and sitting area, zellige bathroom, natural light.', amenities: ['Sitting area', 'Air conditioning', 'Private bathroom', 'Wi-Fi'] },
        { name: 'Large suite', capacity: '5 guests', pax: '5', text: 'A generous space for families, with separate living room and warm woodwork.', amenities: ['Separate lounge', 'Heating', 'Private bathroom', 'Terrace'] },
        { name: 'The estate', capacity: '30 guests', pax: '30', text: 'Rent the whole estate for seminars, weddings or retreats.', amenities: ['Meeting room', 'Tailored catering', 'Gardens', 'Parking'] },
      ],
    },
    services: {
      eyebrow: 'Services & experiences',
      title: 'Live the estate at nature’s pace',
      intro: 'Local cuisine, Tazekka trails and spaces to gather: everything is ready for a complete stay.',
      items: [
        { title: 'Dining', text: 'Seasonal Moroccan cooking with regional produce, served on the terrace or indoors.' },
        { title: 'Tazekka hikes', text: 'Marked trails, Friouato waterfall, caves and cedar forests, with a local guide.' },
        { title: 'Seminars & groups', text: 'Bright meeting rooms, group lodging and tailored packages for your teams.' },
        { title: 'Activities', text: 'Horse rides, birdwatching, craft workshops and evenings around the fire.' },
      ],
    },
    gallery: { eyebrow: 'Gallery', title: 'Moments at the estate', intro: 'A selection of places, tables and landscapes to explore before you arrive.', filters: { all: 'All', rooms: 'Rooms', estate: 'Estate', nature: 'Nature', dining: 'Dining' }, close: 'Close', prev: 'Previous', next: 'Next' },
    story: {
      eyebrow: 'Our story',
      title: 'Three centuries of hospitality',
      paragraphs: [
        'Founded in 1678, the Azzaouia estate has watched over Aïn Sahla for more than three hundred years. Thick walls, inner courtyards and cedar wood tell of a tradition of welcome handed down from father to son.',
        'Even today, it is a family that welcomes you. Our wish: that every guest leaves feeling invited into a home, in the heart of a preserved landscape.',
      ],
      timeline: [
        { year: '1678', text: 'The estate is founded in Aïn Sahla.' },
        { year: '19th c.', text: 'It becomes a stop for travellers and caravans.' },
        { year: '2000', text: 'Faithful restoration of the historic buildings.' },
        { year: 'Today', text: 'A family resort open to everyone.' },
      ],
    },
    location: {
      eyebrow: 'Location', title: 'At the gates of Tazekka National Park', intro: 'In Aïn Sahla, near Taza, on the road between Fez and the Oriental.',
      fromTaza: 'From Taza', fromFes: 'From Fez', fromTazaText: 'About 30 minutes via the Bab Boudir road.', fromFesText: 'About 2h15 via the motorway then the N6.',
      mapTitle: 'Map showing Azzaouia Resort location', openMap: 'Open in Google Maps',
    },
    contact: {
      eyebrow: 'Contact', title: 'Let’s talk about your stay', intro: 'A question, a group, a specific date? We reply personally.',
      whatsapp: 'WhatsApp', phone: 'Phone', email: 'Email', address: 'Address',
      form: { name: 'Full name', email: 'Email address', message: 'Your message', send: 'Send message', sent: 'Thank you! We will reply very soon.', required: 'Required field' },
      whatsappMessage: 'Hello, I would like information about a stay at Azzaouia Resort.',
    },
    footer: { rights: 'All rights reserved.', legal: 'Legal notice', links: { stay: 'Stay', services: 'Services', gallery: 'Gallery', contact: 'Contact' } },
    floating: { whatsapp: 'Chat on WhatsApp' },
  },
  ar: {
    nav: { home: 'الرئيسية', stay: 'الإقامة', services: 'الخدمات', gallery: 'المعرض', story: 'قصتنا', contact: 'اتصل بنا', book: 'احجز', menu: 'فتح القائمة', close: 'إغلاق القائمة', language: 'اللغة' },
    hero: { eyebrow: 'عين سهلة · تازة · المغرب', title: 'منتجع الزاوية', subtitle: 'منذ 1678، على أبواب تازكا', book: 'احجز الآن', discover: 'اكتشف المنتجع' },
    booking: { checkIn: 'الوصول', checkOut: 'المغادرة', guests: 'الضيوف', guest: 'ضيف', guestsPlural: 'ضيوف', search: 'تحقق من التوفر', note: 'حجز مباشر بدون عمولة' },
    highlights: {
      eyebrow: 'المنتجع',
      title: 'ملاذ بين الأرز والذاكرة',
      items: [
        { title: 'الطبيعة', text: 'غابات البلوط والأرز والينابيع ومسارات المنتزه الوطني لتازكا على بعد دقائق.' },
        { title: 'تراث منذ 1678', text: 'أكثر من ثلاثة قرون من التاريخ المتوارث بين الحجر والخشب والحِرفة.' },
        { title: 'الهدوء', text: 'هنا للصمت قيمة: هواء نقي وليالٍ مرصعة بالنجوم وإيقاع بطيء بعيدًا عن الضجيج.' },
      ],
    },
    stay: {
      eyebrow: 'الإقامة',
      title: 'اختر طريقتك في الإقامة',
      intro: 'من الغرف المضيئة إلى المنتجع بأكمله، كل مساحة مصممة للراحة والاجتماع.',
      book: 'احجز', amenities: 'التجهيزات', people: 'أشخاص', prev: 'الصورة السابقة', next: 'الصورة التالية',
      rooms: [
        { name: 'غرفة مزدوجة', capacity: '2 أشخاص', pax: '2', text: 'غرفة مشرقة وهادئة بأغطية قطنية وإطلالة على الحدائق.', amenities: ['واي فاي', 'تكييف', 'حمام خاص', 'فطور'] },
        { name: 'مهجع', capacity: '8 أشخاص', pax: '8', text: 'مثالي للمتنزهين والعائلات الكبيرة ومجموعات الأصدقاء.', amenities: ['أسرّة بطابقين', 'خزائن', 'مرافق مشتركة', 'واي فاي'] },
        { name: 'جناح صغير', capacity: '3 أشخاص', pax: '3', text: 'غرفة نوم وركن جلوس وحمام بالزليج وإضاءة طبيعية.', amenities: ['ركن جلوس', 'تكييف', 'حمام خاص', 'واي فاي'] },
        { name: 'جناح كبير', capacity: '5 أشخاص', pax: '5', text: 'مساحة رحبة للعائلات مع صالون منفصل وأخشاب دافئة.', amenities: ['صالون منفصل', 'تدفئة', 'حمام خاص', 'شرفة'] },
        { name: 'المنتجع كاملاً', capacity: '30 شخصًا', pax: '30', text: 'احجز المنتجع بأكمله للندوات أو الأعراس أو الخلوات.', amenities: ['قاعة اجتماعات', 'تموين حسب الطلب', 'حدائق', 'موقف سيارات'] },
      ],
    },
    services: {
      eyebrow: 'الخدمات والتجارب',
      title: 'عِش المنتجع على إيقاع الطبيعة',
      intro: 'مطبخ محلي ومسارات تازكا ومساحات للاجتماع: كل شيء جاهز لإقامة متكاملة.',
      items: [
        { title: 'المطعم', text: 'مطبخ مغربي موسمي بمنتجات المنطقة، يقدَّم على الشرفة أو في القاعة.' },
        { title: 'رحلات تازكا', text: 'مسارات معلَّمة وشلال فريواطو والكهوف وغابات الأرز مع مرشد محلي.' },
        { title: 'الندوات والمجموعات', text: 'قاعات مضيئة وإقامة جماعية وعروض مخصصة لفرقكم.' },
        { title: 'الأنشطة', text: 'ركوب الخيل ومراقبة الطيور وورشات الحِرف وسهرات حول النار.' },
      ],
    },
    gallery: { eyebrow: 'المعرض', title: 'لحظات في المنتجع', intro: 'مختارات من الأماكن والموائد والمناظر لاستكشافها قبل الوصول.', filters: { all: 'الكل', rooms: 'الغرف', estate: 'المنتجع', nature: 'الطبيعة', dining: 'المائدة' }, close: 'إغلاق', prev: 'السابقة', next: 'التالية' },
    story: {
      eyebrow: 'قصتنا',
      title: 'ثلاثة قرون من الضيافة',
      paragraphs: [
        'تأسس منتجع الزاوية سنة 1678 ويحرس عين سهلة منذ أكثر من ثلاثمئة عام. الجدران السميكة والأفنية الداخلية وخشب الأرز تروي تقليدًا في الاستقبال توارثه الأبناء عن الآباء.',
        'وإلى اليوم، عائلة هي التي تستقبلكم. أمنيتنا أن يغادر كل ضيف وهو يشعر أنه كان مدعوًا إلى بيته، في قلب منظر طبيعي محفوظ.',
      ],
      timeline: [
        { year: '1678', text: 'تأسيس المنتجع في عين سهلة.' },
        { year: 'ق 19', text: 'أصبح محطة للمسافرين والقوافل.' },
        { year: '2000', text: 'ترميم وفي للمباني التاريخية.' },
        { year: 'اليوم', text: 'منتجع عائلي مفتوح للجميع.' },
      ],
    },
    location: {
      eyebrow: 'الموقع', title: 'على أبواب المنتزه الوطني لتازكا', intro: 'في عين سهلة قرب تازة، على الطريق بين فاس والجهة الشرقية.',
      fromTaza: 'من تازة', fromFes: 'من فاس', fromTazaText: 'حوالي 30 دقيقة عبر طريق باب بودير.', fromFesText: 'حوالي ساعتين و15 دقيقة عبر الطريق السيار ثم الوطنية 6.',
      mapTitle: 'خريطة موقع منتجع الزاوية', openMap: 'افتح في خرائط جوجل',
    },
    contact: {
      eyebrow: 'اتصل بنا', title: 'لنتحدث عن إقامتكم', intro: 'سؤال أو مجموعة أو تاريخ محدد؟ نجيب بأنفسنا.',
      whatsapp: 'واتساب', phone: 'الهاتف', email: 'البريد الإلكتروني', address: 'العنوان',
      form: { name: 'الاسم الكامل', email: 'البريد الإلكتروني', message: 'رسالتك', send: 'إرسال الرسالة', sent: 'شكرًا! سنرد عليك قريبًا جدًا.', required: 'حقل مطلوب' },
      whatsappMessage: 'مرحبًا، أود الحصول على معلومات حول الإقامة في منتجع الزاوية.',
    },
    footer: { rights: 'جميع الحقوق محفوظة.', legal: 'الإشعار القانوني', links: { stay: 'الإقامة', services: 'الخدمات', gallery: 'المعرض', contact: 'اتصل بنا' } },
    floating: { whatsapp: 'تحدث عبر واتساب' },
  },
};