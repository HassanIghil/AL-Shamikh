const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

function getSiteOrigin(value?: string): string | undefined {
  if (!value) return undefined;

  try {
    const parsed = new URL(value);
    if (parsed.protocol !== 'https:' || !parsed.hostname || parsed.pathname !== '/' || parsed.search || parsed.hash) {
      return undefined;
    }
    if (parsed.hostname === 'localhost' || parsed.hostname.endsWith('.localhost')) return undefined;
    return parsed.origin;
  } catch {
    return undefined;
  }
}

export const siteOrigin = getSiteOrigin(configuredSiteUrl);

const isPreviewDeployment = process.env.VERCEL_ENV === 'preview' || process.env.VERCEL_ENV === 'development';

/** Search indexing is opt-in: set NEXT_PUBLIC_SITE_URL in production only. */
export const isSearchIndexingEnabled =
  Boolean(siteOrigin) && process.env.NODE_ENV === 'production' && !isPreviewDeployment;

export function canonicalUrl(path: string): string | undefined {
  if (!isSearchIndexingEnabled || !siteOrigin) return undefined;
  return new URL(path, siteOrigin).toString();
}
