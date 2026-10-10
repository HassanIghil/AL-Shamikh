# Phase 28 — Google indexing launch checklist

## Cloudflare Pages production settings

In **Workers & Pages → al-shamikh → Settings → Variables and Secrets → Production**, add this plain-text build variable:

```text
NEXT_PUBLIC_SITE_URL=https://alshamikhrufuf.com
```

Keep it in the Production environment. The site only emits indexable metadata during a production build where Cloudflare reports `CF_PAGES=1` and `CF_PAGES_BRANCH=main`; local builds and branch previews remain blocked. Keep the Pages build command as `npm run build` and the output directory as `out`.

In **Workers & Pages → al-shamikh → Custom domains**, confirm both `alshamikhrufuf.com` and `www.alshamikhrufuf.com` are active. The canonical host is the apex domain, `https://alshamikhrufuf.com`.

## Account-level redirects

Cloudflare Pages' static `_redirects` file cannot match request hostnames. Use Cloudflare **Bulk Redirects** so redirects run at the hostname level. Preserve query strings and path suffixes, and use permanent `301` redirects:

| Source | Target |
| --- | --- |
| `www.alshamikhrufuf.com` | `https://alshamikhrufuf.com` |
| `al-shamikh.pages.dev` | `https://alshamikhrufuf.com` |

Do not enable “include subdomains” on the `pages.dev` entry. Branch-preview hosts must keep their own `noindex` metadata and blocked `robots.txt`; they should not receive the production build's indexable HTML. The two redirect targets above do not point back to their source hosts, so they do not create a redirect loop.

After the production deployment and redirect rules are active, verify:

- `https://alshamikhrufuf.com/` returns `200` and is self-canonical.
- `https://www.alshamikhrufuf.com/` returns `301` to the apex host, including for a nested path.
- `https://al-shamikh.pages.dev/` returns `301` to the apex host.
- A branch-preview URL still returns `noindex` HTML and `Disallow: /` in `robots.txt`.
- `https://alshamikhrufuf.com/robots.txt` allows crawling and names the apex sitemap.
- `https://alshamikhrufuf.com/sitemap.xml` contains the 20 Arabic and English URLs, with reciprocal `ar-SA`, `en`, and Arabic `x-default` alternates. Legal and 404 pages are excluded.

## Google Search Console

1. Add a **Domain property** for `alshamikhrufuf.com` in Google Search Console.
2. Copy the TXT verification record Google provides into the authoritative DNS zone in Cloudflare. Do not reuse a sample value; verify the property after DNS updates.
3. In the verified property, submit `https://alshamikhrufuf.com/sitemap.xml`.
4. Use URL Inspection for `/`, `/solutions`, `/en/solutions`, `/jeddah`, and `/riyadh`. Confirm the selected canonical is the apex URL and that crawling is allowed.
5. Request indexing for important pages after these checks pass, then monitor Page indexing and sitemap reports for errors.

Google may take time to recrawl and index pages; submission does not guarantee indexing or rankings.

## Live baseline checked before launch

At the time of this implementation, the official apex and `www` both served the current site with `noindex, nofollow, noarchive` and no canonical link. The `www` host did not redirect. `al-shamikh.pages.dev` also served the site with the same noindex metadata and did not redirect. Confirm the production build variable and branch context in Cloudflare, and configure both hostname redirects before claiming the official host is indexable. The public HTML does not reveal which production build condition is currently missing.

The local project does not contain Cloudflare account credentials or a deploy-time redirect configuration. These account-level settings must be applied by an owner in the Cloudflare dashboard.

## References

- [Cloudflare Pages redirects](https://developers.cloudflare.com/pages/configuration/redirects/)
- [Redirect www to the apex domain](https://developers.cloudflare.com/pages/how-to/www-redirect/)
- [Redirect Pages preview domains to a custom domain](https://developers.cloudflare.com/pages/how-to/redirect-to-custom-domain/)
- [Google Search Central: localized versions](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites)
