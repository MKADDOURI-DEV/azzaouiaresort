import React from 'react';
import { siteConfig } from '@/config/site';

/**
 * Données structurées schema.org LodgingBusiness (rendu serveur, pour le SEO).
 * Insérées en JSON-LD dans la page d'accueil.
 */
export default function LodgingSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: siteConfig?.name,
    description:
      'Domaine de nature et de patrimoine depuis 1678 à Aïn Sahla, aux portes du Parc National de Tazekka, Taza, Maroc.',
    url: siteConfig?.siteUrl,
    image: `${siteConfig?.siteUrl}/assets/images/og-image.png`,
    logo: `${siteConfig?.siteUrl}/assets/images/logo-azzaouia.png`,
    telephone: siteConfig?.contact?.phoneHref?.replace('tel:', ''),
    email: siteConfig?.contact?.email,
    foundingDate: String(siteConfig?.founded),
    priceRange: 'MAD',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Village Aïn Sahla, Commune Bouchfaa, Cercle Oued Amlil',
      addressLocality: 'Aïn Sahla, Taza',
      addressRegion: 'Fès-Meknès',
      addressCountry: 'MA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig?.geo?.latitude,
      longitude: siteConfig?.geo?.longitude,
    },
    availableLanguage: ['fr', 'en', 'ar'],
    sameAs: [siteConfig?.social?.instagram, siteConfig?.social?.facebook].filter(Boolean),
    potentialAction: {
      '@type': 'ReserveAction',
      target: siteConfig?.bookingUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}