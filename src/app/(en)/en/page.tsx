import type { Metadata } from 'next';
import { EnglishHome } from '@/components/EnglishViews';
import { alternateMetadata } from '@/lib/i18n/config';
import { englishSpecialMeta } from '@/lib/i18n/en';
import { canonicalUrl } from '@/lib/seo';

const data = englishSpecialMeta[''];
const canonical = canonicalUrl('/en');
export const metadata: Metadata = {
  title: { absolute: data.title }, description: data.description,
  ...(alternateMetadata('', 'en') ? { alternates: alternateMetadata('', 'en') } : {}),
  openGraph: { type: 'website', locale: 'en_US', siteName: 'Al Shamikh', title: data.title, description: data.description, ...(canonical ? { url: canonical } : {}) },
};
export default function Page() { return <EnglishHome />; }
