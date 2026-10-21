'use client';

import React from 'react';
import Reveal from '@/components/Reveal';
import AppImage from '@/components/ui/AppImage';
import { useTranslation } from '@/context/LanguageContext';

/** Notre histoire : récit éditorial + chronologie horizontale-verticale sobre. */
export default function StorySection() {
  const { t, lang } = useTranslation();

  const altText = {
    fr: 'Cour intérieure historique du domaine Azzaouia aux murs de pierre claire',
    en: 'Historic inner courtyard of Azzaouia estate with light stone walls',
    ar: 'الفناء الداخلي التاريخي لمنتجع الزاوية بجدرانه الحجرية الفاتحة',
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

            <ol className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {t?.story?.timeline?.map((item) => (
                <li key={item?.year} className="border-t border-accent pt-4">
                  <span className="font-display text-3xl font-semibold text-primary">{item?.year}</span>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item?.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-secondary card-shadow lg:aspect-[4/5]">
              <AppImage
                src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1000&q=75&auto=format&fit=crop"
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