import type { MetadataRoute } from 'next';
import { isSearchIndexingEnabled, siteOrigin } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  if (!isSearchIndexingEnabled || !siteOrigin) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }

  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteOrigin}/sitemap.xml`,
  };
}
