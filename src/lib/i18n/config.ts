import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/seo';

export const contentSlugs = [
  '', 'solutions', 'sectors', 'warehouse-racking', 'retail-shelving',
  'projects', 'about', 'jeddah', 'riyadh', 'contact', 'privacy', 'terms',
] as const;

export type ContentSlug = (typeof contentSlugs)[number];
export type Locale = 'ar' | 'en';

export function isContentSlug(value: string): value is ContentSlug {
  return (contentSlugs as readonly string[]).includes(value);
}

export function localizedPath(locale: Locale, slug: ContentSlug): string {
  return `${locale === 'en' ? '/en' : ''}${slug ? `/${slug}` : ''}` || '/';
}

export function alternateMetadata(slug: ContentSlug, locale: Locale): Metadata['alternates'] | undefined {
  const canonical = canonicalUrl(localizedPath(locale, slug));
  const arabic = canonicalUrl(localizedPath('ar', slug));
  const english = canonicalUrl(localizedPath('en', slug));
  if (!canonical || !arabic || !english) return undefined;
  return {
    canonical,
    languages: { 'ar-SA': arabic, en: english, 'x-default': arabic },
  };
}

export const englishNav: { slug: ContentSlug; label: string }[] = [
  { slug: '', label: 'Home' },
  { slug: 'solutions', label: 'Solutions' },
  { slug: 'sectors', label: 'Sectors' },
  { slug: 'projects', label: 'Solution images' },
  { slug: 'about', label: 'About us' },
  { slug: 'jeddah', label: 'Jeddah' },
  { slug: 'riyadh', label: 'Riyadh' },
  { slug: 'contact', label: 'Contact' },
];

export const englishMessages = {
  home: 'Hello, I would like to ask about shelving for my project.',
  warehouse: 'Hello, I would like to ask about warehouse shelving for my project.',
  retail: 'Hello, I would like to ask about shelving for my store.',
  jeddah: 'Hello, I would like a quote for shelving for a project in Jeddah.',
  riyadh: 'Hello, I would like a quote for shelving for a project in Riyadh.',
  contact: 'Hello, I would like to discuss shelving for my project.',
};
