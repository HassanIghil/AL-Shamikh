import type { ContentSlug, Locale } from '@/lib/i18n/config';
import { isSearchIndexingEnabled, siteOrigin } from '@/lib/seo';

type PageImage = {
  path: string;
  width: number;
  height: number;
  alt: Record<Locale, string>;
};

// Reuse the relevant, already-published page hero assets; no project photos are implied.
const pageImages: Partial<Record<ContentSlug, PageImage>> = {
  '': {
    path: '/photos/home-hero-new-1280.webp', width: 1280, height: 720,
    alt: { ar: 'رفوف للمستودعات والمتاجر في مساحة تخزين وعرض', en: 'Warehouse and retail shelving in a storage and display space' },
  },
  'warehouse-racking': {
    path: '/photos/hero-1280.webp', width: 1280, height: 720,
    alt: { ar: 'صورة توضيحية لرفوف تخزين داخل مستودع', en: 'Illustrative warehouse storage racks' },
  },
  'retail-shelving': {
    path: '/photos/store.webp', width: 960, height: 1280,
    alt: { ar: 'صورة توضيحية لرفوف عرض في متجر غذائي', en: 'Illustrative shelving in a grocery store' },
  },
  jeddah: {
    path: '/photos/hero-jeddah.webp', width: 1672, height: 941,
    alt: { ar: 'صورة توضيحية لمساحة عرض ورفوف تجارية', en: 'Illustrative retail shelving and display space' },
  },
  riyadh: {
    path: '/photos/hero-riyadh.webp', width: 1672, height: 941,
    alt: { ar: 'صورة توضيحية لرفوف تخزين في مستودع', en: 'Illustrative warehouse storage shelving' },
  },
  solutions: {
    path: '/photos/hero-solutions.webp', width: 1672, height: 941,
    alt: { ar: 'صورة توضيحية لحلول رفوف التخزين والعرض', en: 'Illustrative shelving solutions for storage and display' },
  },
  sectors: {
    path: '/photos/hero-sectors.webp', width: 1672, height: 941,
    alt: { ar: 'صورة توضيحية لمساحة مستودع ورفوف تخزين', en: 'Illustrative warehouse shelving and storage space' },
  },
  projects: {
    path: '/photos/hero-projects.webp', width: 1672, height: 941,
    alt: { ar: 'صورة توضيحية لمستودع منظم مجهز بأنظمة رفوف تخزين', en: 'Illustrative warehouse with organized storage racks' },
  },
  about: {
    path: '/photos/hero-about.webp', width: 1672, height: 941,
    alt: { ar: 'صورة توضيحية لمساحة تجارية مجهزة بالرفوف', en: 'Illustrative shelving in a commercial space' },
  },
  // The contact page has no dedicated hero photo; use the site's general product image.
  contact: {
    path: '/photos/home-hero-new-1280.webp', width: 1280, height: 720,
    alt: { ar: 'رفوف للمستودعات والمتاجر في مساحة تخزين وعرض', en: 'Warehouse and retail shelving in a storage and display space' },
  },
};

export function getPageSeoImage(slug: ContentSlug, locale: Locale) {
  if (!isSearchIndexingEnabled || !siteOrigin) return undefined;
  const image = pageImages[slug];
  if (!image) return undefined;
  return {
    url: new URL(image.path, siteOrigin).toString(),
    path: image.path,
    width: image.width,
    height: image.height,
    alt: image.alt[locale],
  };
}
