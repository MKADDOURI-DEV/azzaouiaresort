'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import AppImage from '@/components/ui/AppImage';
import { useTranslation } from '@/context/LanguageContext';

const icons = ['CakeIcon', 'MapIcon', 'BriefcaseIcon', 'SparklesIcon'];

/** Services et expériences : colonne d'image sticky + liste, jamais une grille d'icônes uniforme. */
export default function ServicesSection() {
  const { t, lang } = useTranslation();

  const altText = {
    fr: 'Randonneurs sur un sentier du parc national de Tazekka à la lumière du matin',
    en: 'Hikers on a Tazekka National Park trail in the morning light',
    ar: 'متنزهون على مسار في المنتزه الوطني لتازكا في ضوء الصباح',
  };

  return (
    <section id="services" className="bg-background pt-20 pb-16 md:pt-28 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[6fr_6fr] lg:gap-20 lg:items-start">
          {/* Colonne visuelle compagnon, sticky sur desktop */}
          <Reveal className="lg:sticky lg:top-28">
            <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-secondary card-shadow lg:aspect-[4/5]">
              <AppImage
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1000&q=75&auto=format&fit=crop"
                alt={altText?.[lang]}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6 flex items-center gap-4 rounded-lg bg-secondary p-5">
              <span className="font-display text-5xl font-semibold text-primary">1678</span>
              <div className="h-10 w-px bg-accent" aria-hidden="true" />
              <p className="text-base text-muted-foreground">{t?.hero?.subtitle}</p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">{t?.services?.eyebrow}</p>
              <h2 className="font-display text-section-xl font-semibold text-foreground">{t?.services?.title}</h2>
              <div className="ochre-rule mt-6 w-32" aria-hidden="true" />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t?.services?.intro}</p>
            </Reveal>

            <div className="mt-10 flex flex-col gap-4">
              {t?.services?.items?.map((item, i) => (
                <Reveal key={item?.title} delay={i * 100}>
                  <div className="flex gap-5 rounded-lg border border-border bg-card p-6 transition-shadow hover:card-shadow">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Icon name={icons?.[i]} size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-card-foreground">{item?.title}</h3>
                      <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item?.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}