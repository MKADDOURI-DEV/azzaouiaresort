'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import { useTranslation } from '@/context/LanguageContext';
import { galleryPhotos, type GalleryFilter } from '@/data/media';

const filterKeys: GalleryFilter[] = ['all', 'rooms', 'estate', 'nature', 'dining'];

// Hauteur selon le ratio pour un effet masonry (colonnes CSS)
const ratioClass: Record<string, string> = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[3/2]',
  square: 'aspect-square',
};

/** Galerie masonry (colonnes CSS) avec filtres par catégorie et lightbox. */
export default function GallerySection() {
  const { t, lang } = useTranslation();
  const [filter, setFilter] = useState<GalleryFilter>('all');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === 'all' ? galleryPhotos : galleryPhotos.filter((p) => p.filter === filter)),
    [filter]
  );

  const close = useCallback(() => setLightbox(null), []);
  const move = useCallback(
    (dir: 1 | -1) =>
      setLightbox((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
    [visible.length]
  );

  // Clavier : Échap, flèches
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') move(1);
      if (e.key === 'ArrowLeft') move(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, move]);

  const active = lightbox !== null ? visible[lightbox] : null;

  return (
    <section id="galerie" className="bg-secondary pt-16 pb-20 md:pt-20 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">{t.gallery.eyebrow}</p>
          <h2 className="font-display text-section-xl font-semibold text-foreground">{t.gallery.title}</h2>
          <div className="ochre-rule mt-6 w-32" aria-hidden="true" />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t.gallery.intro}</p>
        </Reveal>

        {/* Filtres */}
        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label={t.gallery.title}>
          {filterKeys.map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={filter === key}
              onClick={() => setFilter(key)}
              className={`tap-44 rounded-full px-5 text-sm font-semibold transition-colors ${
                filter === key
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-card-foreground hover:bg-background'
              }`}
            >
              {t.gallery.filters[key]}
            </button>
          ))}
        </div>

        {/* Masonry par colonnes CSS : aucune cellule vide possible */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {visible.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setLightbox(i)}
              className={`group relative mb-4 block w-full overflow-hidden rounded-lg bg-card break-inside-avoid animate-fade ${
                ratioClass[photo.ratio || 'landscape']
              }`}
              aria-label={photo.alt[lang]}
            >
              <AppImage
                src={photo.src}
                alt={photo.alt[lang]}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/90 p-4 animate-fade"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt[lang]}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label={t.gallery.close}
            className="tap-44 absolute end-4 top-4 flex items-center justify-center rounded-full bg-card text-card-foreground"
          >
            <Icon name="XMarkIcon" size={24} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            aria-label={t.gallery.prev}
            className="tap-44 absolute start-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-card text-card-foreground"
          >
            <Icon name="ChevronLeftIcon" size={24} className="rtl:rotate-180" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            aria-label={t.gallery.next}
            className="tap-44 absolute end-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-card text-card-foreground"
          >
            <Icon name="ChevronRightIcon" size={24} className="rtl:rotate-180" />
          </button>

          <div
            className="relative h-[70vh] w-full max-w-5xl overflow-hidden rounded-lg bg-secondary"
            onClick={(e) => e.stopPropagation()}
          >
            <AppImage
              src={active.src}
              alt={active.alt[lang]}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}