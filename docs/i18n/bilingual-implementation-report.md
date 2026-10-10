# Phase 27 — Arabic and English implementation

Implementation commit: `8bbf8c580b7eea099715ac98e2398b61e579a34f` on `codex/full-english-localization`. The report itself is committed separately so it can record that implementation hash.

PR comparison URL: https://github.com/HassanIghil/AL-Shamikh/compare/main...codex/full-english-localization?expand=1

## Routing and rendering

- Arabic remains at `/` and the original 11 subpaths. English uses `/en` and matching `/en/<slug>` paths.
- Two App Router root layouts render `<html lang="ar" dir="rtl">` and `<html lang="en" dir="ltr">` at build time. The language link points to the equivalent route and does not perform automatic redirects.
- Shared typed slug and URL helpers in `src/lib/i18n/config.ts` make all route pairs explicit. `src/lib/i18n/en.ts` contains typed English page content and metadata. English pages reuse a data-driven layout; the contact form, legal page layout, gallery filter and Jeddah carousel share their existing components.
- The desktop switcher sits beside the WhatsApp button. At widths up to 1200 px, the header uses the menu control to prevent navigation overflow while leaving the switcher visible.
- The Arabic artwork and text remain in place. The English homepage uses a localized floating city banner with the same motion concept. Reduced-motion preferences disable its animation.

## Content coverage

| Arabic | English | Checked |
| --- | --- | --- |
| `/` | `/en` | Yes |
| `/solutions` | `/en/solutions` | Yes |
| `/sectors` | `/en/sectors` | Yes |
| `/warehouse-racking` | `/en/warehouse-racking` | Yes |
| `/retail-shelving` | `/en/retail-shelving` | Yes |
| `/projects` | `/en/projects` | Yes |
| `/about` | `/en/about` | Yes |
| `/jeddah` | `/en/jeddah` | Yes |
| `/riyadh` | `/en/riyadh` | Yes |
| `/contact` | `/en/contact` | Yes |
| `/privacy` | `/en/privacy` | Yes |
| `/terms` | `/en/terms` | Yes |

English content covers product categories, business sectors, warehouse storage requirements, store displays, city coverage, project planning, FAQs, illustrative images, contact, privacy and terms. Navigation, footer, breadcrumbs, buttons, form labels and placeholders, gallery categories, image text alternatives, accessible control names, WhatsApp prefills and metadata are localized. The English contact form composes an English message; the Arabic form retains its Arabic message. No website form backend was added. The gallery explicitly labels current images as illustrative.

## SEO and preview rules

- All 24 content pages have unique titles, descriptions and one H1. English pages use an English Open Graph locale and English structured-data names. The Arabic SEO wording remains in its existing pages.
- With a confirmed non-preview HTTPS `NEXT_PUBLIC_SITE_URL`, each page has a self canonical and `ar-SA`, `en` and `x-default` alternates. The production sitemap includes both language versions of 10 indexable page pairs; both legal pairs remain excluded and noindexed.
- A disposable build with `https://example.com` verified the production canonical and alternate output for all 24 pages and 20 indexable sitemap entries. This was only a local test. It was followed by a fresh preview build without that variable.
- The final preview export has `noindex` on all 24 pages, `robots.txt` with `Disallow: /`, an empty sitemap, and no canonical links. These checks passed after the final build.
- Cloudflare Pages looks for the closest `404.html` in a route directory, so `/en/404.html` supplies an English LTR, noindexed fallback for unknown English paths. This local export contains that file; behavior on the live Pages deployment awaits deployment review. Reference: https://developers.cloudflare.com/pages/configuration/serving-pages/

## Validation

- `npm run typecheck`: passed.
- `npm run build`: passed; 24 localized content pages plus English 404 and metadata files generated as static HTML.
- `python scripts/verify-bilingual-static.py`: passed for all 24 content routes, internal links, image references and responsive image sources, language and direction, one H1, distinct titles, descriptions, matching language links, WhatsApp number and English prefill language, preview robots rules and English 404.
- `python scripts/verify-bilingual-production-seo.py`: passed on the isolated example-domain build; final export was rebuilt with preview safeguards afterward.
- In-app browser: checked Arabic and English home, English warehouse, retail, Jeddah and Riyadh pages at 390, 820, 1100, 1224 and 1280 px. No horizontal overflow was observed; the language switch stayed visible. Direct switching `/en/contact` → `/contact` → `/en/contact` preserved the page and HTML language/direction. English contact fields and “another city” branch, gallery filter, Jeddah carousel pagination, privacy and terms layouts were checked. Browser error log was empty during these checks.
- No new Lighthouse score was measured. Live Cloudflare deployment, official-domain metadata and English 404 serving must be checked after review and deployment.

## Changes

App routes and styling: `src/app/(ar)/`, `src/app/(en)/`, `src/app/english.css`, `src/app/globals.css`, `src/app/sitemap.ts`.

Shared components and localization: `src/components/SiteHeader.tsx`, `src/components/EnglishFooter.tsx`, `src/components/EnglishViews.tsx`, `src/components/ContactForm.tsx`, `src/components/LegalView.tsx`, `src/components/ProjectFilter.tsx`, `src/components/JeddahGallery.tsx`, `src/components/ScrollReveal.tsx`, `src/lib/i18n/`.

Verification utilities: `scripts/serve-static-export.py`, `scripts/verify-bilingual-static.py`, `scripts/verify-bilingual-production-seo.py`.

The unrelated untracked `docs/seo/openseo-*` drafts were not changed or staged.

## Owner confirmations before public launch

- Confirm the official domain before enabling indexable production metadata and sitemap output.
- Confirm whether English-language sales support is available. The site offers English information and message text without promising an English-speaking representative.
- Confirm installation availability and scope; both languages currently ask the customer to specify the need and await confirmation before quoting.
- Provide approved completed-project photographs and verified project city, type, shelving category and short factual description before replacing illustrative gallery images.
- Have the owner and a qualified legal reviewer confirm privacy and terms details, especially hosting, analytics and rights to published imagery.
