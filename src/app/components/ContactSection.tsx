'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import { useTranslation } from '@/context/LanguageContext';
import { siteConfig, whatsappLink } from '@/config/site';

interface FormState {
  name: string;
  email: string;
  message: string;
}

/**
 * Contact : coordonnées (WhatsApp, téléphone, email) + formulaire.
 * Le formulaire est front-only : brancher un service d'envoi dans handleSubmit.
 */
export default function ContactSection() {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = t.contact.form.required;
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = t.contact.form.required;
    if (!form.message.trim()) next.message = t.contact.form.required;
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // TODO : brancher ici l'envoi réel (API route, Formspree, Resend...)
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  const channels = [
    {
      icon: 'ChatBubbleLeftRightIcon',
      label: t.contact.whatsapp,
      value: siteConfig.contact.phoneDisplay,
      href: whatsappLink(t.contact.whatsappMessage),
    },
    {
      icon: 'PhoneIcon',
      label: t.contact.phone,
      value: siteConfig.contact.phoneDisplay,
      href: siteConfig.contact.phoneHref,
    },
    {
      icon: 'EnvelopeIcon',
      label: t.contact.email,
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
    {
      icon: 'MapPinIcon',
      label: t.contact.address,
      value: siteConfig.contact.address,
      href: undefined,
    },
  ];

  const inputClass =
    'w-full rounded-md border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none';

  return (
    <section id="contact" className="bg-background pt-20 pb-20 md:pt-28 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">{t.contact.eyebrow}</p>
            <h2 className="font-display text-section-xl font-semibold text-foreground">{t.contact.title}</h2>
            <div className="ochre-rule mt-6 w-32" aria-hidden="true" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t.contact.intro}</p>

            <ul className="mt-8 flex flex-col">
              {channels.map((c) => {
                const body = (
                  <>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                      <Icon name={c.icon} size={22} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</p>
                      <p className="break-words text-base font-medium text-foreground">{c.value}</p>
                    </div>
                  </>
                );
                return (
                  <li key={c.label} className="border-b border-border last:border-b-0">
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="tap-44 flex items-center gap-4 py-4 transition-colors hover:text-primary"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 py-4">{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5 rounded-lg border border-border bg-card p-6 card-shadow md:p-9"
            >
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-card-foreground">{t.contact.form.name}</span>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  autoComplete="name"
                  className={inputClass}
                />
                {errors.name && <span className="text-sm text-destructive">{errors.name}</span>}
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-card-foreground">{t.contact.form.email}</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  autoComplete="email"
                  className={inputClass}
                />
                {errors.email && <span className="text-sm text-destructive">{errors.email}</span>}
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-card-foreground">{t.contact.form.message}</span>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  className={`${inputClass} resize-none`}
                />
                {errors.message && <span className="text-sm text-destructive">{errors.message}</span>}
              </label>

              <button
                type="submit"
                className="tap-44 mt-2 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {t.contact.form.send}
              </button>

              {sent && (
                <p
                  role="status"
                  className="flex items-center gap-2 rounded-md bg-success/20 px-4 py-3 text-base text-foreground animate-fade"
                >
                  <Icon name="CheckCircleIcon" size={20} className="text-sage" />
                  {t.contact.form.sent}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}