import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import HeroSection from './components/HeroSection';
import HighlightsSection from './components/HighlightsSection';
import StaySection from './components/StaySection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import StorySection from './components/StorySection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import LodgingSchema from './components/LodgingSchema';

/**
 * Page d'accueil : compose les sections dans l'ordre narratif.
 * Accueil -> Hébergement -> Services -> Galerie -> Histoire -> Localisation -> Contact.
 */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <LodgingSchema />
      <Header />
      <HeroSection />
      <HighlightsSection />
      <StaySection />
      <ServicesSection />
      <GallerySection />
      <StorySection />
      <LocationSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}