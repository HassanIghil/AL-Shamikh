import type { Metadata } from 'next';
import '../globals.css';
import '../home.css';
import '../solutions.css';
import '../english.css';
import '../english-solutions.css';
import SiteHeader from '@/components/SiteHeader';
import EnglishFooter from '@/components/EnglishFooter';
import ScrollReveal from '@/components/ScrollReveal';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { buildWhatsappUrl, phone } from '@/lib/data';
import { englishMessages } from '@/lib/i18n/config';
import { englishSpecialMeta } from '@/lib/i18n/en';
import { isSearchIndexingEnabled, siteOrigin } from '@/lib/seo';

export const metadata: Metadata = {
  ...(siteOrigin ? { metadataBase: new URL(siteOrigin) } : {}),
  title: { default: englishSpecialMeta[''].title, template: '%s | Al Shamikh' },
  description: englishSpecialMeta[''].description,
  openGraph: { type: 'website', locale: 'en_US', siteName: 'Al Shamikh' },
  robots: { index: isSearchIndexingEnabled, follow: isSearchIndexingEnabled, ...(isSearchIndexingEnabled ? {} : { noarchive: true }) },
};

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = isSearchIndexingEnabled && siteOrigin ? {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': `${siteOrigin}/#organization`, name: 'Al Shamikh', url: siteOrigin, telephone: phone, areaServed: [{ '@type': 'City', name: 'Jeddah' }, { '@type': 'City', name: 'Riyadh' }] },
      { '@type': 'WebSite', '@id': `${siteOrigin}/#website-en`, name: 'Al Shamikh', url: `${siteOrigin}/en`, inLanguage: 'en', publisher: { '@id': `${siteOrigin}/#organization` } },
    ],
  } : null;
  return <html lang="en" dir="ltr"><body>
    {structuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />}
    <SiteHeader locale="en" /><ScrollReveal />{children}<EnglishFooter />
    <a className="floating-whatsapp" aria-label="Chat on WhatsApp" href={buildWhatsappUrl(englishMessages.home)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={26} /></a>
  </body></html>;
}
