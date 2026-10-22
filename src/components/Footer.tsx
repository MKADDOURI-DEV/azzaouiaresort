'use client';

import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { useTranslation } from '@/context/LanguageContext';
import { siteConfig } from '@/config/site';

/** Footer compact (pattern 2) : liens sans en-têtes, légal en bas. */
export default function Footer() {
  const { t } = useTranslation();
  const year = new Date()?.getFullYear();

  const links = [
    { href: '#hebergement', label: t?.footer?.links?.stay },
    { href: '#services', label: t?.footer?.links?.services },
    { href: '#galerie', label: t?.footer?.links?.gallery },
    { href: '#contact', label: t?.footer?.links?.contact },
  ];

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <AppLogo size={96} ratio={1.015} />
            <span className="sr-only">AZZAOUIA RESORT</span>
          </div>

          <ul className="flex flex-wrap gap-x-10 gap-y-3">
            {links?.map((l) => (
              <li key={l?.href}>
                <a
                  href={l?.href}
                  className="tap-44 inline-flex items-center text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l?.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[15px] text-muted-foreground">
            © {year} {siteConfig?.name}. {t?.footer?.rights}
          </p>
          <div className="flex items-center gap-6">
            {siteConfig?.social?.instagram && <a
              href={siteConfig?.social?.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="tap-44 inline-flex items-center justify-center text-muted-foreground hover:text-primary"
            >
              <Icon name="CameraIcon" size={22} />
            </a>}
            {siteConfig?.social?.facebook && <a
              href={siteConfig?.social?.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="tap-44 inline-flex items-center justify-center text-muted-foreground hover:text-primary"
            >
              <Icon name="UserGroupIcon" size={22} />
            </a>}
            <a href="#top" className="tap-44 inline-flex items-center text-[15px] font-medium text-muted-foreground hover:text-foreground">
              {t?.footer?.legal}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}