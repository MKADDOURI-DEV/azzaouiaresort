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
    phoneDisplay: '+212 6 61 00 00 00',
    phoneHref: 'tel:+212661000000',
    whatsappNumber: '212661000000',
    email: 'contact@azzaouiaresort.ma',
    address: 'Aïn Sahla, Taza, Maroc',
  },

  geo: { latitude: 34.1646, longitude: -4.0097 },

  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
  },
} as const;

/** Construit le lien de réservation, avec dates/voyageurs en paramètres indicatifs. */
export function buildBookingUrl(params?: { checkIn?: string; checkOut?: string; guests?: number }) {
  if (!params || (!params.checkIn && !params.checkOut && !params.guests)) {
    return siteConfig.bookingUrl;
  }
  // Le moteur utilise un routeur à ancre : on ajoute les paramètres en requête indicative.
  const query = new URLSearchParams();
  if (params.checkIn) query.set('checkIn', params.checkIn);
  if (params.checkOut) query.set('checkOut', params.checkOut);
  if (params.guests) query.set('guests', String(params.guests));
  return `${siteConfig.bookingUrl}?${query.toString()}`;
}

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}