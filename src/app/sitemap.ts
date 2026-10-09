import type { MetadataRoute } from 'next';
import { canonicalUrl, isSearchIndexingEnabled } from '@/lib/seo';

export const dynamic = 'force-static';

const routes = [
  '/',
  '/warehouse-racking',
  '/retail-shelving',
  '/jeddah',
  '/riyadh',
  '/solutions',
  '/sectors',
  '/projects',
  '/about',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isSearchIndexingEnabled) return [];

  return routes.flatMap((path) => {
    const url = canonicalUrl(path);
    if (!url) return [];

    return [{
      url,
      changeFrequency: path === '/' ? 'weekly' as const : 'monthly' as const,
      priority: path === '/' ? 1 : path === '/warehouse-racking' || path === '/retail-shelving' ? 0.9 : 0.7,
    }];
  });
}
