'use client';

import React from 'react';
import Reveal from '@/components/Reveal';
import AppImage from '@/components/ui/AppImage';
import { useTranslation } from '@/context/LanguageContext';

/** Notre histoire : récit éditorial + points forts du domaine. */
export default function StorySection() {
  const { t, lang } = useTranslation();

  const altText = {
    fr: 'Le Domaine — Azzaouia Resort',
    en: 'The Estate — Azzaouia Resort',
    ar: 'المنتجع — منتجع الزاوية',
  };

  return (
    <section id="histoire" className="bg-background pt-20 pb-12 md:pt-28 md:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[7fr_5fr] lg:gap-20">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">{t?.story?.eyebrow}</p>
            <h2 className="font-display text-section-xl font-semibold text-foreground">{t?.story?.title}</h2>
            <div className="ochre-rule mt-6 w-32" aria-hidden="true" />
            <div className="mt-8 flex flex-col gap-5">
              {t?.story?.paragraphs?.map((p) => (
                <p key={p?.slice(0, 24)} className="text-lg leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {t?.story?.features?.map((f) => (
                <li key={f} className="border-t border-accent pt-4">
                  <p className="font-display text-xl font-semibold leading-snug text-primary">{f}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-secondary card-shadow lg:aspect-[4/5]">
              <AppImage
                src="/assets/photos/galerie/galerie-01.jpg"
                alt={altText?.[lang]}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}