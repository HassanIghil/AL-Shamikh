import type { MetadataRoute } from 'next';
import { canonicalUrl, isSearchIndexingEnabled } from '@/lib/seo';
import { localizedPath, type ContentSlug } from '@/lib/i18n/config';

export const dynamic = 'force-static';

const routes: ContentSlug[] = ['', 'warehouse-racking', 'retail-shelving', 'jeddah', 'riyadh', 'solutions', 'sectors', 'projects', 'about', 'contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isSearchIndexingEnabled) return [];

  return routes.flatMap((slug) => {
    const arabic = canonicalUrl(localizedPath('ar', slug));
    const english = canonicalUrl(localizedPath('en', slug));
    if (!arabic || !english) return [];
    const alternates = { languages: { 'ar-SA': arabic, en: english, 'x-default': arabic } };
    return [arabic, english].map(url => ({ url, alternates }));
  });
}
