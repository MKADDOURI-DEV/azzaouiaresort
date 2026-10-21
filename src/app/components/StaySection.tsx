'use client';

import React from 'react';
import Reveal from '@/components/Reveal';
import RoomCard from './RoomCard';
import { useTranslation } from '@/context/LanguageContext';
import { roomPhotos } from '@/data/media';
import { accommodations } from '@/data/accommodations';

/** Hébergement : 4 catégories réelles (chambre double, grande suite, petite suite, dortoirs), grille 2 colonnes. */
export default function StaySection() {
  const { t } = useTranslation();

  return (
    <section id="hebergement" className="bg-secondary pt-16 pb-20 md:pt-20 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">{t?.stay?.eyebrow}</p>
          <h2 className="font-display text-section-xl font-semibold text-foreground">{t?.stay?.title}</h2>
          <div className="ochre-rule mt-6 w-32" aria-hidden="true" />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t?.stay?.intro}</p>
          <p className="mt-3 text-base font-medium text-foreground">{t?.stay?.note}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {accommodations.map((room, i) => (
            <Reveal key={room.id} delay={(i % 2) * 100}>
              <RoomCard room={room} photos={roomPhotos[room.id]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
