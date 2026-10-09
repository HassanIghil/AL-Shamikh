import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import { SiteFooter } from '@/components/UI';
import { company, messages, pageMeta, phone, whatsapp } from '@/lib/data';
import { canonicalUrl, isSearchIndexingEnabled, siteOrigin } from '@/lib/seo';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  ...(siteOrigin ? { metadataBase: new URL(siteOrigin) } : {}),
  title: {
    default: pageMeta['/'].title,
    template: `%s | ${company}`,
  },
  description: pageMeta['/'].description,
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    siteName: company,
    title: pageMeta['/'].title,
    description: pageMeta['/'].description,
    ...(canonicalUrl('/') ? { url: canonicalUrl('/') } : {}),
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: isSearchIndexingEnabled,
    follow: isSearchIndexingEnabled,
    ...(isSearchIndexingEnabled ? {} : { noarchive: true }),
  },
  ...(canonicalUrl('/') ? { alternates: { canonical: canonicalUrl('/') } } : {}),
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
        areaServed: [
          { '@type': 'City', name: 'جدة' },
          { '@type': 'City', name: 'الرياض' },
          { '@type': 'Country', name: 'المملكة العربية السعودية' },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteOrigin}/#website`,
        name: company,
        url: siteOrigin,
        inLanguage: 'ar-SA',
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
