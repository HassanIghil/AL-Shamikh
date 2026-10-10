import type { Metadata } from 'next';
import { EnglishHome } from '@/components/EnglishViews';
import { alternateMetadata } from '@/lib/i18n/config';
import { englishSpecialMeta } from '@/lib/i18n/en';
import { canonicalUrl, isSearchIndexingEnabled, robotsMetadata, siteOrigin } from '@/lib/seo';
import { getPageSeoImage } from '@/lib/seo-images';

const data = englishSpecialMeta[''];
const canonical = canonicalUrl('/en');
const homeImage = getPageSeoImage('', 'en');
function HomePageSchema() {
  if (!isSearchIndexingEnabled || !siteOrigin) return null;
  const image = getPageSeoImage('', 'en');
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: data.title,
    url: canonicalUrl('/en'),
    inLanguage: 'en',
    ...(image ? { image: image.url } : {}),
    isPartOf: { '@id': `${siteOrigin}/#website-en` },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
export const metadata: Metadata = {
  title: { absolute: data.title }, description: data.description,
  robots: robotsMetadata(true, true),
  ...(alternateMetadata('', 'en') ? { alternates: alternateMetadata('', 'en') } : {}),
  openGraph: { type: 'website', locale: 'en_US', siteName: 'Al Shamikh', title: data.title, description: data.description, ...(canonical ? { url: canonical } : {}), ...(homeImage ? { images: [homeImage] } : {}) },
  twitter: { card: 'summary_large_image', title: data.title, description: data.description, ...(homeImage ? { images: [homeImage.url] } : {}) },
};
export default function Page() { return <><HomePageSchema /><EnglishHome /></>; }
