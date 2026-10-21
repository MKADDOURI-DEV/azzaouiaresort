'use client';

import React from 'react';
import Reveal from '@/components/Reveal';
import RoomCard from './RoomCard';
import { useTranslation } from '@/context/LanguageContext';
import { roomPhotos } from '@/data/media';

// Ordre = ordre des catégories dans les traductions
const roomKeys = ['chambre-double', 'dortoir', 'petite-suite', 'grande-suite', 'domaine'];

/**
 * Hébergement : 5 cartes.
 * Grille desktop 6 colonnes -> ligne 1 : 3 cartes (2+2+2), ligne 2 : 2 cartes (3+3)
 * avec la dernière carte "domaine" en pleine largeur pour combler la grille.
 *
 * Audit bento (5 cartes) :
 *  Row 1: [col-1: Chambre double cs-2] [col-2: Dortoir cs-2] [col-3: Petite suite cs-2]
 *  Row 2: [col-1: Grande suite cs-3] [col-2: Grande suite cs-3 suite] -> remplacé ci-dessous
 *  Placé : 5/5 — Row 2 = Grande suite (cs-3) + (rien) interdit -> on utilise :
 *  Row 2: Grande suite cs-2 / Domaine cs-4  => 6 colonnes pleines, aucune cellule vide.
 */
export default function StaySection() {
  const { t } = useTranslation();

  // Largeur (en colonnes sur 6) de chaque carte à partir de md/xl
  const spans = [
    'xl:col-span-2', // chambre double
    'xl:col-span-2', // dortoir
    'xl:col-span-2', // petite suite
    'xl:col-span-2', // grande suite
    'xl:col-span-4', // domaine (mise en avant)
  ];

  return (
    <section id="hebergement" className="bg-secondary pt-16 pb-20 md:pt-20 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">{t?.stay?.eyebrow}</p>
          <h2 className="font-display text-section-xl font-semibold text-foreground">{t?.stay?.title}</h2>
          <div className="ochre-rule mt-6 w-32" aria-hidden="true" />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t?.stay?.intro}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6">
          {t?.stay?.rooms?.map((room, i) => {
            const key = roomKeys?.[i];
            const isDomain = key === 'domaine';
            return (
              <Reveal
                key={key}
                delay={(i % 3) * 100}
                className={`${spans?.[i]} ${isDomain ? 'md:col-span-2' : ''}`}
              >
                <RoomCard
                  name={room?.name}
                  capacity={room?.capacity}
                  text={room?.text}
                  amenities={room?.amenities}
                  photos={roomPhotos?.[key]}
                  featured={isDomain}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}