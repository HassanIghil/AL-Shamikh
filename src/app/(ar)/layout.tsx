import type { Metadata } from 'next';
import '../globals.css';
import '../english.css';
import SiteHeader from '@/components/SiteHeader';
import { SiteFooter } from '@/components/UI';
import { company, messages, pageMeta, phone, whatsapp } from '@/lib/data';
import { canonicalUrl, isSearchIndexingEnabled, robotsMetadata, siteOrigin } from '@/lib/seo';
import { getPageSeoImage } from '@/lib/seo-images';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import ScrollReveal from '@/components/ScrollReveal';
import { alternateMetadata } from '@/lib/i18n/config';

export const metadata: Metadata = {
  ...(siteOrigin ? { metadataBase: new URL(siteOrigin) } : {}),
  title: {
    default: pageMeta['/'].title,
    template: `%s | ${company}`,
  },
  description: pageMeta['/'].description,
  robots: robotsMetadata(true, true),
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    siteName: company,
    title: pageMeta['/'].title,
    description: pageMeta['/'].description,
    ...(canonicalUrl('/') ? { url: canonicalUrl('/') } : {}),
    ...(getPageSeoImage('', 'ar') ? { images: [getPageSeoImage('', 'ar')!] } : {}),
  },
  twitter: {
    card: 'summary_large_image',
    ...(getPageSeoImage('', 'ar') ? { images: [getPageSeoImage('', 'ar')!.url] } : {}),
  },
  ...(alternateMetadata('', 'ar') ? { alternates: alternateMetadata('', 'ar') } : {}),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = isSearchIndexingEnabled && siteOrigin ? {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteOrigin}/#organization`,
        name: company,
        url: siteOrigin,
        telephone: phone,
        ...(getPageSeoImage('', 'ar') ? { image: getPageSeoImage('', 'ar')!.url } : {}),
        areaServed: [
          { '@type': 'City', name: 'جدة' },
          { '@type': 'City', name: 'الرياض' },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteOrigin}/#website`,
        name: company,
        url: siteOrigin,
        inLanguage: 'ar-SA',
        ...(getPageSeoImage('', 'ar') ? { image: getPageSeoImage('', 'ar')!.url } : {}),
        publisher: { '@id': `${siteOrigin}/#organization` },
      },
    ],
  } : null;

  return (
    <html lang="ar" dir="rtl">
      <body>
        {structuredData && <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />}
        <SiteHeader />
        <ScrollReveal />
        {children}
        <SiteFooter />
        <a
          className="floating-whatsapp"
          aria-label="تواصل عبر واتساب"
          href={whatsapp(messages.home)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={26} />
        </a>
      </body>
    </html>
  );
}
