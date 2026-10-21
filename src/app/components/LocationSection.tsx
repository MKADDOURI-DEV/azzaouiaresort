'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import { useTranslation } from '@/context/LanguageContext';
import { siteConfig } from '@/config/site';

/** Localisation : carte intégrée + accès depuis Taza et Fès. */
export default function LocationSection() {
  const { t } = useTranslation();
  const { latitude, longitude } = siteConfig?.geo;
  const embed = `https://maps.google.com/maps?q=${latitude},${longitude}&z=11&output=embed`;
  const open = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  const routes = [
    { label: t?.location?.fromTaza, text: t?.location?.fromTazaText },
    { label: t?.location?.fromFes, text: t?.location?.fromFesText },
  ];

  return (
    <section id="localisation" className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">{t?.location?.eyebrow}</p>
            <h2 className="font-display text-section-xl font-semibold text-foreground">{t?.location?.title}</h2>
            <div className="ochre-rule mt-6 w-32" aria-hidden="true" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t?.location?.intro}</p>

            <ul className="mt-8 flex flex-col gap-4">
              {routes?.map((r) => (
                <li key={r?.label} className="flex gap-4 rounded-lg border border-border bg-card p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Icon name="MapPinIcon" size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-card-foreground">{r?.label}</h3>
                    <p className="mt-1 text-base leading-relaxed text-muted-foreground">{r?.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={open}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-primary px-7 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Icon name="ArrowTopRightOnSquareIcon" size={18} />
              {t?.location?.openMap}
            </a>
          </Reveal>

          <Reveal delay={150}>
            <div className="h-80 overflow-hidden rounded-lg border border-border bg-card card-shadow sm:h-[28rem] lg:h-full lg:min-h-[32rem]">
              <iframe
                title={t?.location?.mapTitle}
                src={embed}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}