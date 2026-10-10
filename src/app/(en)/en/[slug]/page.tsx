import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EnglishContact, EnglishLanding } from '@/components/EnglishViews';
import EnglishSolutionsView from '@/components/EnglishSolutionsView';
import LegalView from '@/components/LegalView';
import { alternateMetadata, contentSlugs, isContentSlug, localizedPath, type ContentSlug } from '@/lib/i18n/config';
import { englishPages, englishSpecialMeta } from '@/lib/i18n/en';
import { canonicalUrl, isSearchIndexingEnabled, siteOrigin } from '@/lib/seo';

const slugs = contentSlugs.filter(slug => slug !== '');
export function generateStaticParams() { return slugs.map(slug => ({ slug })); }
export const dynamicParams = false;

function metaFor(slug: ContentSlug) {
  return slug === 'contact' || slug === 'privacy' || slug === 'terms'
    ? englishSpecialMeta[slug]
    : slug === '' ? englishSpecialMeta[''] : englishPages[slug];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!isContentSlug(slug) || slug === '') return {};
  const data = metaFor(slug);
  const legal = slug === 'privacy' || slug === 'terms';
  const canonical = canonicalUrl(localizedPath('en', slug));
  return {
    title: { absolute: data.title }, description: data.description,
    ...(alternateMetadata(slug, 'en') ? { alternates: alternateMetadata(slug, 'en') } : {}),
    robots: { index: isSearchIndexingEnabled && !legal, follow: isSearchIndexingEnabled && !legal },
    openGraph: { type: 'website', locale: 'en_US', siteName: 'Al Shamikh', title: data.title, description: data.description, ...(canonical ? { url: canonical } : {}) },
    twitter: { card: 'summary_large_image', title: data.title, description: data.description },
  };
}

function EnglishSchema({ slug }: { slug: ContentSlug }) {
  if (!isSearchIndexingEnabled || !siteOrigin || slug === '') return null;
  const data = metaFor(slug);
  const url = canonicalUrl(localizedPath('en', slug));
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: canonicalUrl('/en') },
    { '@type': 'ListItem', position: 2, name: data.title.split('|')[0].trim(), item: url },
  ] };
  const service = ['warehouse-racking', 'retail-shelving', 'jeddah', 'riyadh'].includes(slug) ? {
    '@context': 'https://schema.org', '@type': 'Service', name: data.title.split('|')[0].trim(), serviceType: data.title.split('|')[0].trim(), url,
    provider: { '@id': `${siteOrigin}/#organization` },
    areaServed: slug === 'jeddah' || slug === 'riyadh' ? [{ '@type': 'City', name: slug === 'jeddah' ? 'Jeddah' : 'Riyadh' }] : [{ '@type': 'City', name: 'Jeddah' }, { '@type': 'City', name: 'Riyadh' }],
  } : null;
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />{service && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />}</>;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isContentSlug(slug) || slug === '') notFound();
  return <><EnglishSchema slug={slug} />{slug === 'contact' ? <EnglishContact /> : slug === 'privacy' || slug === 'terms' ? <main><LegalView type={slug} locale="en" /></main> : slug === 'solutions' ? <EnglishSolutionsView /> : <EnglishLanding slug={slug} />}</>;
}
