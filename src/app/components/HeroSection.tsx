'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { useTranslation } from '@/context/LanguageContext';
import { buildBookingUrl, siteConfig } from '@/config/site';
import { heroPhoto, heroVideo } from '@/data/media';

/**
 * Hero plein écran : photo 1920x1080, zoom Ken Burns lent, léger dégradé en bas.
 * La barre de réservation chevauche le bas du hero.
 */
const toISO = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

const addDays = (iso: string, n: number) => {
  const [y, m, d] = iso.split('-').map(Number);
  return toISO(new Date(y, m - 1, d + n));
};

export default function HeroSection() {
  const { t, lang } = useTranslation();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  // Dates passées désactivées : "aujourd'hui" calculé côté client (évite un décalage SSR/fuseau).
  const [today, setToday] = useState('');
  useEffect(() => setToday(toISO(new Date())), []);

  const minCheckOut = checkIn ? addDays(checkIn, 1) : today ? addDays(today, 1) : undefined;

  const onCheckIn = (value: string) => {
    const v = today && value && value < today ? today : value; // saisie manuelle d'un jour passé → aujourd'hui
    setCheckIn(v);
    if (checkOut && v && checkOut <= v) setCheckOut('');
  };
  const onCheckOut = (value: string) => {
    const min = minCheckOut;
    setCheckOut(min && value && value < min ? min : value);
  };

  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  // Vidéo hero chargée en différé, version mobile plus légère ; la photo reste le poster/fallback.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const conn = (navigator as any).connection || {};
    const slow = conn.saveData || /(^|-)2g$/.test(conn.effectiveType || '');
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (slow || reduce) return;
    const start = () => {
      const mobile = window.matchMedia('(max-width: 768px)').matches;
      v.src = mobile ? heroVideo.mobile : heroVideo.desktop;
      v.addEventListener(
        'canplay',
        () => {
          v.play().catch(() => {});
          setVideoReady(true);
        },
        { once: true }
      );
      v.load();
    };
    const idle = (window as any).requestIdleCallback;
    const id = idle ? idle(start, { timeout: 2500 }) : window.setTimeout(start, 800);
    return () => {
      if (idle) (window as any).cancelIdleCallback?.(id);
      else window.clearTimeout(id);
    };
  }, []);

  const handleSearch = () => {
    const url = buildBookingUrl({ checkIn, checkOut, guests });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="top" className="relative">
      <div className="relative min-h-[100svh] w-full overflow-hidden bg-foreground">
        {/* Photo plein écran, aucun overlay sombre */}
        <div className="absolute inset-0 animate-kenburns">
          <AppImage
            src={heroPhoto?.src}
            alt={heroPhoto?.alt?.[lang]}
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Vidéo (fondu par-dessus la photo une fois prête) */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          className={`absolute inset-0 h-full w-full object-cover pointer-events-none transition-opacity duration-[1200ms] ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Dégradé très léger, uniquement en bas */}
        <div className="absolute inset-0 hero-scrim" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-44">
          <p className="mb-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-background hero-text-shadow">
            {t?.hero?.eyebrow}
          </p>
          <h1 className="font-display text-hero-xl max-w-4xl font-semibold text-background hero-text-shadow">
            {t?.hero?.title}
          </h1>
          <div className="my-6 h-px w-24 bg-accent" aria-hidden="true" />
          <p className="max-w-xl text-lg sm:text-xl text-background hero-text-shadow">{t?.hero?.subtitle}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig?.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 inline-flex items-center justify-center rounded-full bg-primary px-9 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t?.hero?.book}
            </a>
            <a
              href="#hebergement"
              className="tap-44 inline-flex items-center justify-center rounded-full border border-background px-9 py-4 text-base font-semibold text-background transition-colors hover:bg-background hover:text-foreground"
            >
              {t?.hero?.discover}
            </a>
          </div>
        </div>
      </div>

      {/* Barre de réservation flottante chevauchant le hero */}
      <div className="relative z-20 mx-auto -mt-16 md:-mt-14 max-w-5xl px-4 sm:px-6">
        <div className="rounded-lg border border-border bg-card p-4 card-shadow md:p-5">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end">
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t?.booking?.checkIn}
              </span>
              <input
                type="date"
                value={checkIn}
                min={today || undefined}
                onChange={(e) => onCheckIn(e?.target?.value)}
                className="h-12 w-full rounded-md border border-input bg-background px-3 text-base text-foreground focus:border-primary focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t?.booking?.checkOut}
              </span>
              <input
                type="date"
                value={checkOut}
                min={minCheckOut}
                onChange={(e) => onCheckOut(e?.target?.value)}
                className="h-12 w-full rounded-md border border-input bg-background px-3 text-base text-foreground focus:border-primary focus:outline-none"
              />
            </label>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t?.booking?.guests}
              </span>
              <div className="flex h-12 items-center justify-between rounded-md border border-input bg-background px-1">
                <button
                  type="button"
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                  aria-label="-"
                  className="tap-44 flex items-center justify-center rounded-md text-foreground hover:bg-secondary"
                >
                  <Icon name="MinusIcon" size={18} />
                </button>
                <span className="text-base font-medium text-foreground">
                  {guests} {guests > 1 ? t?.booking?.guestsPlural : t?.booking?.guest}
                </span>
                <button
                  type="button"
                  onClick={() => setGuests((g) => Math.min(30, g + 1))}
                  aria-label="+"
                  className="tap-44 flex items-center justify-center rounded-md text-foreground hover:bg-secondary"
                >
                  <Icon name="PlusIcon" size={18} />
                </button>
              </div>
            </div>
            <button
              type="button"
              onClick={handleSearch}
              className="tap-44 h-12 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:col-span-2 md:col-span-1"
            >
              {t?.booking?.search}
            </button>
          </div>
          <p className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground md:justify-start">
            <Icon name="CheckBadgeIcon" size={16} className="text-sage" />
            {t?.booking?.note}
          </p>
        </div>
      </div>
    </section>
  );
}