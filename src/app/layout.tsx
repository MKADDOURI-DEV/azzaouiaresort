import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, DM_Sans, Cairo } from 'next/font/google';
import '../styles/tailwind.css';
import { LanguageProvider } from '@/context/LanguageContext';

// Titres éditoriaux
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

// Texte courant
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

// Arabe
const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cairo',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'AZZAOUIA RESORT — Domaine de nature et de patrimoine depuis 1678, Taza',
  description:
    'Séjournez à Aïn Sahla, aux portes du Parc National de Tazekka : chambres, suites et domaine depuis 1678. Réservation directe sans commission.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'AZZAOUIA RESORT — Depuis 1678, aux portes de Tazekka',
    description:
      'Domaine de charme à Aïn Sahla (Taza), aux portes du Parc National de Tazekka : hébergement, restauration, événements et randonnées. Réservation en ligne.',
    type: 'website',
    images: [{ url: '/assets/images/og-image.png', width: 1200, height: 630 }],
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${dmSans.variable} ${cairo.variable}`}
    >
      <body className={dmSans.className}>
        <LanguageProvider>{children}</LanguageProvider>

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fazzaouiare6293back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.21" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.3" /></body>
    </html>
  );
}