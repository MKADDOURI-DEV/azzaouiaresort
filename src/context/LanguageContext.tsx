'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { languages, translations, type Dictionary, type Lang } from '@/locales/translations';

interface LanguageContextValue {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  t: Dictionary;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'azzaouia-lang';

/** Détecte la langue préférée du navigateur parmi FR / EN / AR. */
function detectLanguage(): Lang {
  const navLang = (navigator.language || 'fr').slice(0, 2).toLowerCase();
  if (navLang === 'ar' || navLang === 'en' || navLang === 'fr') return navLang;
  return 'fr';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // FR par défaut pour garantir l'hydratation SSR/CSR identique
  const [lang, setLangState] = useState<Lang>('fr');

  // Détection au montage : choix mémorisé, sinon langue du navigateur
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved === 'fr' || saved === 'en' || saved === 'ar') {
      setLangState(saved);
    } else {
      setLangState(detectLanguage());
    }
  }, []);

  // Applique lang + dir sur <html> (RTL complet pour l'arabe)
  useEffect(() => {
    const meta = languages.find((l) => l.code === lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = meta ? meta.dir : 'ltr';
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo<LanguageContextValue>(() => {
    const meta = languages.find((l) => l.code === lang);
    return { lang, dir: meta ? meta.dir : 'ltr', t: translations[lang], setLang };
  }, [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/** Hook d'accès aux traductions. */
export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useTranslation doit être utilisé dans LanguageProvider');
  return ctx;
}