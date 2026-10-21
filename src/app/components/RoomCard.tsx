'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { useTranslation } from '@/context/LanguageContext';
import { buildBookingUrl } from '@/config/site';
import type { Photo } from '@/data/media';
import type { Accommodation } from '@/data/accommodations';

interface RoomCardProps {
  room: Accommodation;
  photos: Photo[];
}

/** Carte d'hébergement : carrousel photo, pastille de capacité ocre, tarifs réels, bouton Réserver. */
export default function RoomCard({ room, photos }: RoomCardProps) {
  const { t, lang } = useTranslation();
  const [index, setIndex] = useState(0);
  const total = photos.length;

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total);
  const current = photos[index];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card card-shadow">
      <div className="relative aspect-[3/2] overflow-hidden bg-secondary">
        <AppImage
          key={current.src}
          src={current.src}
          alt={current.alt[lang]}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover animate-fade transition-transform duration-700 group-hover:scale-105"
        />

        {/* Pastille de capacité */}
        <span className="absolute start-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-sm font-semibold text-accent-foreground">
          <Icon name="UsersIcon" size={16} />
          {room.capacity[lang]}
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

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">{room.tag[lang]}</p>
            <h3 className="mt-1 font-display text-3xl font-semibold text-foreground">{room.name[lang]}</h3>
          </div>
          <p className="shrink-0 text-end">
            <span className="block text-xs text-muted-foreground">{t.stay.from}</span>
            <span className="font-display text-2xl font-semibold text-foreground" dir="ltr">
              {room.price} MAD
            </span>
            <span className="block text-xs text-muted-foreground">{t.stay.perNight}</span>
          </p>
        </div>
        <div className="ochre-rule my-4 w-16" aria-hidden="true" />
        <p className="text-base leading-relaxed text-muted-foreground">{room.long[lang]}</p>

        <details className="mt-5 rounded-md border border-border bg-secondary/50 p-4">
          <summary className="cursor-pointer text-sm font-semibold uppercase tracking-wider text-foreground">
            {t.stay.rates}
          </summary>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm text-muted-foreground">
            {room.rates[lang].map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          {room.notes[lang].length > 0 && (
            <>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-foreground">{t.stay.goodToKnow}</p>
              <ul className="mt-2 flex flex-col gap-1.5 text-sm text-muted-foreground">
                {room.notes[lang].map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </>
          )}
        </details>

        <a
          href={buildBookingUrl()}
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
