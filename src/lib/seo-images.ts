import type { ContentSlug, Locale } from '@/lib/i18n/config';
import { isSearchIndexingEnabled, siteOrigin } from '@/lib/seo';

type PageImage = {
  path: string;
  width: number;
  height: number;
  alt: Record<Locale, string>;
};

// Use relevant page hero assets without implying a specific project or photo location.
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
    path: '/photos/retail-original-shelving.jpeg', width: 899, height: 1599,
    alt: { ar: 'رفوف عرض سوداء بحواف خضراء داخل مساحة متجر', en: 'Black retail display shelving with green trim inside a store' },
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
    path: '/photos/hero-1280.webp', width: 1280, height: 720,
    alt: { ar: 'صورة لرفوف تخزين داخل مستودع', en: 'Photograph of storage racks inside a warehouse' },
  },
  projects: {
    path: '/photos/hero-projects.webp', width: 1672, height: 941,
    alt: { ar: 'صورة توضيحية لمستودع منظم مجهز بأنظمة رفوف تخزين', en: 'Illustrative warehouse with organized storage racks' },
  },
  about: {
    path: '/photos/about-original-shelving.jpeg', width: 960, height: 1280,
    alt: { ar: 'رفوف تخزين وعرض متنوعة داخل مساحة تجهيز', en: 'Warehouse and display shelving inside a commercial space' },
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
