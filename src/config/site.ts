/**
 * Configuration centrale du site AZZAOUIA RESORT.
 * Toute URL ou coordonnée modifiable se trouve ICI, nulle part ailleurs.
 */
export const siteConfig = {
  name: 'AZZAOUIA RESORT',
  founded: 1678,

  // URL unique du moteur de réservation Nozoul — utilisée par TOUS les boutons "Réserver"
  bookingUrl:
    'https://azzaouiaresort.nozoul.ma/#/be/5f39360e-bbf6-4a0a-b129-48f770077068/book',

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',

  contact: {
    // Numéros affichés sur la section Contact de l'ancien site
    phoneDisplay: '06 63 33 56 72',
    phoneDisplaySecondary: '06 70 19 60 94',
    phoneHref: 'tel:+212663335672',
    phoneHrefSecondary: 'tel:+212670196094',
    whatsappNumber: '212670196094', // 06 70 19 60 94
    email: 'azzaouiaresort@gmail.com',
    address: 'Village Aïn Sahla, Commune Bouchfaa, Cercle Oued Amlil, Province de Taza, Maroc',
  },

  geo: { latitude: 34.18, longitude: -4.26 }, // repère de la carte de l'ancien site

  // Renseigner les vraies URLs pour afficher les icônes dans le footer
  social: {
    instagram: '',
    facebook: '',
  },
} as const;

/**
 * Construit le lien Nozoul. Le moteur attend exactement : period=ARRIVEE,DEPART & adults=N
 * (& child=N & ages=A,B si enfants). Même format que l'ancien site.
 */
export function buildBookingUrl(params?: {
  checkIn?: string;
  checkOut?: string;
  adults?: number;
  children?: number;
  childAges?: (string | number)[];
}) {
  if (!params) return siteConfig.bookingUrl;
  const pairs: string[] = [];
  if (params.checkIn && params.checkOut) {
    pairs.push(`period=${encodeURIComponent(`${params.checkIn},${params.checkOut}`)}`);
  }
  pairs.push(`adults=${encodeURIComponent(String(params.adults || 1))}`);
  // "child" et "ages" ne sont envoyés que s'il y a au moins un enfant
  const kids = params.children || 0;
  if (kids > 0) {
    pairs.push(`child=${kids}`);
    const ages = (params.childAges || []).filter((a) => a !== '' && a !== undefined && a !== null).join(',');
    if (ages) pairs.push(`ages=${encodeURIComponent(ages)}`);
  }
  const base = siteConfig.bookingUrl;
  return `${base}${base.includes('?') ? '&' : '?'}${pairs.join('&')}`;
}

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}