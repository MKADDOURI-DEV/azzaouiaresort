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
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [childAges, setChildAges] = useState<string[]>([]);
  const [agesError, setAgesError] = useState(false);

  const changeChildren = (delta: 1 | -1) => {
    const next = Math.min(10, Math.max(0, children + delta));
    setChildren(next);
    setChildAges((ages) => (next > ages.length ? [...ages, ''] : ages.slice(0, next)));
    setAgesError(false);
  };

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
    // Chaque enfant doit avoir un âge (Nozoul calcule le tarif enfant avec)
    if (children > 0 && childAges.some((a) => a === '')) {
      setAgesError(true);
      return;
    }
    const url = buildBookingUrl({ checkIn, checkOut, adults, children, childAges });
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
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1fr_1fr_auto] md:items-end">
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
                {t?.booking?.adults}
              </span>
              <div className="flex h-12 items-center justify-between rounded-md border border-input bg-background px-1">
                <button
                  type="button"
                  onClick={() => setAdults((a) => Math.max(1, a - 1))}
                  aria-label="-"
                  className="tap-44 flex items-center justify-center rounded-md text-foreground hover:bg-secondary"
                >
                  <Icon name="MinusIcon" size={18} />
                </button>
                <span className="text-base font-medium text-foreground">
                  {adults} {adults > 1 ? t?.booking?.adultsPlural : t?.booking?.adult}
                </span>
                <button
                  type="button"
                  onClick={() => setAdults((a) => Math.min(30, a + 1))}
                  aria-label="+"
                  className="tap-44 flex items-center justify-center rounded-md text-foreground hover:bg-secondary"
                >
                  <Icon name="PlusIcon" size={18} />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t?.booking?.children}
              </span>
              <div className="flex h-12 items-center justify-between rounded-md border border-input bg-background px-1">
                <button
                  type="button"
                  onClick={() => changeChildren(-1)}
                  aria-label="-"
                  className="tap-44 flex items-center justify-center rounded-md text-foreground hover:bg-secondary"
                >
                  <Icon name="MinusIcon" size={18} />
                </button>
                <span className="text-base font-medium text-foreground">
                  {children} {children > 1 ? t?.booking?.childrenPlural : t?.booking?.child}
                </span>
                <button
                  type="button"
                  onClick={() => changeChildren(1)}
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

            {children > 0 && (
              <div className="col-span-full border-t border-border pt-4">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                  {childAges.map((age, i) => (
                    <label key={i} className="flex flex-col gap-1.5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {t?.booking?.childAge} {i + 1}
                      </span>
                      <select
                        value={age}
                        onChange={(e) => {
                          const v = e.target.value;
                          setChildAges((ages) => ages.map((a, idx) => (idx === i ? v : a)));
                          setAgesError(false);
                        }}
                        aria-invalid={agesError && age === ''}
                        className={`h-12 w-full rounded-md border bg-background px-3 text-base text-foreground focus:border-primary focus:outline-none ${
                          agesError && age === '' ? 'border-destructive' : 'border-input'
                        }`}
                      >
                        <option value="">{t?.booking?.selectAge}</option>
                        <option value="0">{t?.booking?.underOne}</option>
                        {Array.from({ length: 17 }, (_, n) => n + 1).map((n) => (
                          <option key={n} value={String(n)}>
                            {n} {n > 1 ? t?.booking?.years : t?.booking?.year}
                          </option>
                        ))}
                      </select>
                    </label>
                  ))}
                </div>
                {agesError && (
                  <p role="alert" className="mt-3 text-sm font-medium text-destructive">
                    {t?.booking?.agesRequired}
                  </p>
                )}
              </div>
            )}
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