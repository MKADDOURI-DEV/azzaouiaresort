'use client';

import React, { useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppLogo from '@/components/ui/AppLogo';
import { useTranslation } from '@/context/LanguageContext';
import { languages } from '@/locales/translations';
import { siteConfig } from '@/config/site';

/**
 * Navigation sticky : transparente sur le hero, crème au scroll.
 * Menu burger plein écran sur mobile (liens + CTA uniquement).
 */
export default function Header() {
  const { t, lang, setLang } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const links = [
    { href: '#hebergement', label: t?.nav?.stay },
    { href: '#services', label: t?.nav?.services },
    { href: '#galerie', label: t?.nav?.gallery },
    { href: '#histoire', label: t?.nav?.story },
    { href: '#contact', label: t?.nav?.contact },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // Le menu mobile se ferme au scroll
      setOpen(false);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Bloque le scroll du fond quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="AZZAOUIA RESORT">
          <AppLogo size={40} />
          <span
            className={`font-display text-lg sm:text-xl font-semibold tracking-wide ${
              solid ? 'text-foreground' : 'text-background hero-text-shadow'
            }`}
          >
            AZZAOUIA
          </span>
        </a>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
          {links?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                solid ? 'text-foreground' : 'text-background hero-text-shadow'
              }`}
            >
              {link?.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sélecteur de langue */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              aria-label={t?.nav?.language}
              aria-expanded={langOpen}
              className={`tap-44 flex items-center gap-1.5 rounded-full px-3 text-sm font-semibold uppercase transition-colors ${
                solid ? 'text-foreground hover:bg-secondary' : 'text-background hover:bg-background/15'
              }`}
            >
              <Icon name="LanguageIcon" size={18} />
              {lang}
            </button>
            {langOpen && (
              <ul className="absolute end-0 mt-2 w-40 overflow-hidden rounded-lg border border-border bg-card card-shadow animate-fade">
                {languages?.map((l) => (
                  <li key={l?.code}>
                    <button
                      type="button"
                      onClick={() => {
                        setLang(l?.code);
                        setLangOpen(false);
                      }}
                      className={`tap-44 flex w-full items-center justify-between px-4 text-sm hover:bg-secondary ${
                        l?.code === lang ? 'font-semibold text-primary' : 'text-card-foreground'
                      }`}
                    >
                      {l?.label}
                      {l?.code === lang && <Icon name="CheckIcon" size={16} />}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a
            href={siteConfig?.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="tap-44 hidden sm:inline-flex items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t?.nav?.book}
          </a>

          {/* Burger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t?.nav?.close : t?.nav?.menu}
            aria-expanded={open}
            className={`tap-44 lg:hidden flex items-center justify-center rounded-full ${
              solid ? 'text-foreground' : 'text-background'
            }`}
          >
            <Icon name={open ? 'XMarkIcon' : 'Bars3Icon'} size={26} />
          </button>
        </div>
      </div>

      {/* Menu mobile : fond flou, liens + CTA seulement */}
      {open && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-background/95 backdrop-blur-lg animate-fade overflow-y-auto">
          <nav className="flex flex-col px-6 py-8" aria-label="Menu mobile">
            {links?.map((link) => (
              <a
                key={link?.href}
                href={link?.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl py-4 border-b border-border text-foreground"
              >
                {link?.label}
              </a>
            ))}
            <a
              href={siteConfig?.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground"
            >
              {t?.nav?.book}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}