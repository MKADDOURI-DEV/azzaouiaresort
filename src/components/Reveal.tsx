'use client';

import React, { useEffect, useRef } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Délai en ms pour décaler les éléments d'une même rangée */
  delay?: number;
}

/**
 * Révèle discrètement son contenu au scroll (fade + slide 600 ms).
 * Visible par défaut : l'animation est AJOUTÉE par l'observer, jamais l'inverse.
 */
export default function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.animationDelay = `${delay}ms`;
            el.classList.add('animate-reveal');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`opacity-100 ${className}`}>
      {children}
    </div>
  );
}