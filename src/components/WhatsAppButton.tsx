'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import { useTranslation } from '@/context/LanguageContext';
import { whatsappLink } from '@/config/site';

/** Bouton WhatsApp flottant, toujours visible. */
export default function WhatsAppButton() {
  const { t } = useTranslation();
  return (
    <a
      href={whatsappLink(t?.contact?.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t?.floating?.whatsapp}
      className="fixed bottom-5 end-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-sage text-foreground card-shadow animate-pulse-ring transition-transform hover:scale-105"
    >
      <Icon name="ChatBubbleLeftRightIcon" size={28} />
    </a>
  );
}