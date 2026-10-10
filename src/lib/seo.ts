const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const officialSiteOrigin = 'https://alshamikhrufuf.com';

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
    // Keep every canonical, alternate, and schema URL on the approved apex host.
    return parsed.origin === officialSiteOrigin ? officialSiteOrigin : undefined;
  } catch {
    return undefined;
  }
}

export const siteOrigin = getSiteOrigin(configuredSiteUrl);

const isPreviewDeployment = process.env.VERCEL_ENV === 'preview' || process.env.VERCEL_ENV === 'development';
const isCloudflareProduction =
  process.env.CF_PAGES === '1' && process.env.CF_PAGES_BRANCH === 'main';

/** Index only an official-domain build running on Cloudflare Pages' production branch. */
export const isSearchIndexingEnabled =
  Boolean(siteOrigin) &&
  process.env.NODE_ENV === 'production' &&
  isCloudflareProduction &&
  !isPreviewDeployment;

export function canonicalUrl(path: string): string | undefined {
  if (!isSearchIndexingEnabled || !siteOrigin) return undefined;
  return new URL(path, siteOrigin).toString();
}
