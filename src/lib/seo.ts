const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

function getSiteOrigin(value?: string): string | undefined {
  if (!value) return undefined;

  try {
    const parsed = new URL(value);
    if (parsed.protocol !== 'https:' || !parsed.hostname || parsed.pathname !== '/' || parsed.search || parsed.hash) {
      return undefined;
    }
    const hostname = parsed.hostname.toLowerCase();
    if (
      hostname === 'localhost' ||
      hostname.endsWith('.localhost') ||
      hostname === 'pages.dev' ||
      hostname.endsWith('.pages.dev') ||
      hostname === 'workers.dev' ||
      hostname.endsWith('.workers.dev')
    ) return undefined;
    return parsed.origin;
  } catch {
    return undefined;
  }
}

export const siteOrigin = getSiteOrigin(configuredSiteUrl);

const isPreviewDeployment = process.env.VERCEL_ENV === 'preview' || process.env.VERCEL_ENV === 'development';
const isCloudflarePreview =
  process.env.CF_PAGES === '1' && process.env.CF_PAGES_BRANCH !== 'main';

/** Search indexing is opt-in: set NEXT_PUBLIC_SITE_URL in production only. */
export const isSearchIndexingEnabled =
  Boolean(siteOrigin) && process.env.NODE_ENV === 'production' && !isPreviewDeployment && !isCloudflarePreview;

/** Keep the preview and legal-page noindex rules while allowing large image previews on public pages. */
export function robotsMetadata(indexable = true, noarchiveWhenIndexingDisabled = false) {
  const enabled = isSearchIndexingEnabled && indexable;
  return enabled
    ? {
        index: true,
        follow: true,
        'max-image-preview': 'large' as const,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large' as const },
      }
    : {
        index: false,
        follow: false,
        ...(!isSearchIndexingEnabled && noarchiveWhenIndexingDisabled ? { noarchive: true } : {}),
      };
}

export function canonicalUrl(path: string): string | undefined {
  if (!isSearchIndexingEnabled || !siteOrigin) return undefined;
  return new URL(path, siteOrigin).toString();
}
