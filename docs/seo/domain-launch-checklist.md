# Official domain and indexing launch checklist

**Current state:** no client-confirmed custom domain is configured. Keep the pages.dev preview noindex.

## Before launch

- [ ] Keep NEXT_PUBLIC_SITE_URL unset; do not use pages.dev or an invented host as canonical.
- [ ] Client chooses an owned domain and preferred canonical host.
- [ ] Confirm Cloudflare production/preview branch settings.
- [ ] Keep non-main previews noindex, robots-blocked, with empty sitemap.
- [ ] Confirm domain/DNS control and production build environment.

## At launch approval

1. Set NEXT_PUBLIC_SITE_URL to the client-confirmed HTTPS origin before the static build.
2. Build and deploy the static export to the official host.
3. Choose www or apex and redirect the alternate hostname and HTTP to the canonical HTTPS host.
4. Fetch every commercial route; verify unique title/description/H1, correct canonical and JSON-LD origin, static HTML, images and internal links.
5. Verify /robots.txt allows intended production pages and names only the official sitemap.
6. Verify /sitemap.xml contains the intended ten commercial routes and no legal or preview URLs.
7. Keep privacy/terms noindex. Inspect rendered HTML to confirm no accidental noindex on commercial production pages.
8. Test an unknown deep path for proper 404 behavior.
9. Verify Search Console domain ownership, submit sitemap, inspect homepage plus warehouse, retail and city pages; request indexing only after QA.
10. Keep previews on a separate noindex build; never expose a preview canonical.
11. Record baseline GSC impressions/clicks/CTR/position/index coverage, mobile CWV and WhatsApp click/qualified inquiry counts.

## Stop/rollback conditions

Do not enable indexing if the build contains pages.dev/localhost canonicals, preview pages are indexable, sitemap host is wrong, critical routes/assets fail, or schema JSON is malformed. Resolve first.

Code inspection: src/lib/seo.ts requires production plus valid HTTPS origin, rejects localhost/pages.dev/workers.dev and blocks non-main Cloudflare branches. robots.ts disallows when indexing is off; sitemap.ts is empty then. Do not weaken this safeguard.