'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import { useTranslation } from '@/context/LanguageContext';

const icons = ['SunIcon', 'BuildingLibraryIcon', 'MoonIcon'];

/** Trois points forts : nature, patrimoine depuis 1678, calme. Mise en page asymétrique. */
export default function HighlightsSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-background pt-20 pb-16 md:pt-28 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {t?.highlights?.eyebrow}
            </p>
            <h2 className="font-display text-section-xl font-semibold text-foreground">
              {t?.highlights?.title}
            </h2>
            <div className="ochre-rule mt-6 w-32" aria-hidden="true" />
          </Reveal>

          <div className="flex flex-col">
            {t?.highlights?.items?.map((item, i) => (
              <Reveal key={item?.title} delay={i * 120}>
                <div className="flex gap-5 border-b border-border py-7 first:pt-0 last:border-b-0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icon name={icons?.[i]} size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground">{item?.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item?.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}