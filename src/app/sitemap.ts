import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

/** Sitemap : une seule entrée (page unique), priorité maximale. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}