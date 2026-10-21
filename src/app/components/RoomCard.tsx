'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { useTranslation } from '@/context/LanguageContext';
import { siteConfig } from '@/config/site';
import type { Photo } from '@/data/media';

interface RoomCardProps {
  name: string;
  capacity: string;
  text: string;
  amenities: string[];
  photos: Photo[];
  /** La carte "domaine" occupe plus de place pour rompre la grille uniforme */
  featured?: boolean;
}

/** Carte d'hébergement avec carrousel photo, pastille de capacité ocre et bouton Réserver. */
export default function RoomCard({ name, capacity, text, amenities, photos, featured = false }: RoomCardProps) {
  const { t, lang } = useTranslation();
  const [index, setIndex] = useState(0);
  const total = photos.length;

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total);
  const current = photos[index];

  return (
    <article
      className={`group flex h-full overflow-hidden rounded-lg border border-border bg-card card-shadow ${
        featured ? 'flex-col md:flex-row' : 'flex-col'
      }`}
    >
      {/* Carrousel, ratio 3:2 */}
      <div className={`relative aspect-[3/2] overflow-hidden bg-secondary ${featured ? 'md:w-1/2 md:aspect-auto md:min-h-[360px]' : ''}`}>
        <AppImage
          key={current.src}
          src={current.src}
          alt={current.alt[lang]}
          fill
          sizes={featured ? '(max-width: 768px) 100vw, 40vw' : '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'}
          className="object-cover animate-fade transition-transform duration-700 group-hover:scale-105"
        />

        {/* Pastille de capacité */}
        <span className="absolute start-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-sm font-semibold text-accent-foreground">
          <Icon name="UsersIcon" size={16} />
          {capacity}
        </span>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={t.stay.prev}
              className="tap-44 absolute start-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-card text-card-foreground transition-colors hover:bg-background"
            >
              <Icon name="ChevronLeftIcon" size={20} className="rtl:rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={t.stay.next}
              className="tap-44 absolute end-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-card text-card-foreground transition-colors hover:bg-background"
            >
              <Icon name="ChevronRightIcon" size={20} className="rtl:rotate-180" />
            </button>
            <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
              {photos.map((p, i) => (
                <span
                  key={p.src}
                  className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-card' : 'w-1.5 bg-card/70'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className={`flex flex-1 flex-col p-6 md:p-7 ${featured ? 'md:w-1/2 md:justify-between' : ''}`}>
        <div>
          <h3 className="font-display text-3xl font-semibold text-foreground">{name}</h3>
          <div className="ochre-rule my-4 w-16" aria-hidden="true" />
          <p className="text-base leading-relaxed text-muted-foreground">{text}</p>

          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-foreground">{t.stay.amenities}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {amenities.map((a) => (
              <li key={a} className="rounded-full bg-secondary px-3 py-1.5 text-sm text-foreground">
                {a}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tap-44 mt-7 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {t.stay.book}
        </a>
      </div>
    </article>
  );
}