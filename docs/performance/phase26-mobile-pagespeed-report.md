# Phase 26 — mobile PageSpeed work

Date: 2026-10-09. Branch: `codex/phase26-mobile-pagespeed`.

## Baseline and cause

The October 9 mobile Lighthouse report for the Pages preview recorded Performance 91, Accessibility 96, Best Practices 96, SEO 66, LCP 3.5 s, TBT 10 ms and CLS 0.016. It estimated 900.9 KiB of image opportunity across the page; that is a lab estimate, not a transfer-saving guarantee. The mobile LCP was the homepage hero. The export previously requested a 1280 px, 160.6 KiB mobile hero despite the much narrower viewport. Lighthouse also flagged the full-size tile images and the 1400 px city banner. The report's LCP phase timings do not establish image transfer as the sole cause of 3.5 s; network, render timing, fonts and the test device may contribute. Fonts already use `font-display: swap`. TBT was only 10 ms, so JavaScript and CSS delivery were not changed.

## Image changes

Static files are built from the original photographs by `scripts/generate-phase26-images.py`. Originals remain in `public/`. Files are served directly by the Cloudflare Pages static export; no runtime image optimizer is needed. Hero images use eager loading and high fetch priority. Tiles and the city banner load lazily. The mobile and desktop files are selected with `picture`/`srcSet` and `sizes`, with existing image containers and dimensions retained to limit layout shift. The duplicate manual hero preloads observed in the export were removed.

| Asset/use | Before | Selected optimized file(s) | Change |
| --- | ---: | ---: | --- |
| Homepage mobile hero | 160.6 KiB | 69.4 KiB at 640 px; 122.1 KiB at 960 px | 91.2 or 38.5 KiB less |
| Homepage desktop hero | 364.9 KiB | 200.4 KiB at 1280 px | 164.5 KiB less |
| Warehouse image `hero.webp` | 307.5 KiB | 25.8/81.2/151.0/227.0 KiB at 320/640/960/1280 px | Width dependent |
| `warehouse-2.jpeg` | 192.5 KiB | 45.6/138.3 KiB at 320/640 px | Width dependent |
| City banner | 115.0 KiB | 32.9/81.3 KiB at 640/1200 px | 82.1 or 33.7 KiB less |
| `market.webp` / `store.webp` / `pharmacy.jpeg` / `home.webp` | 108.1 / 66.8 / 46.6 / 80.5 KiB | 22.4 / 13.7 / 10.3 / 18.9 KiB at 320 px | Smaller mobile tiles |
| Header/footer logo | 42.5 KiB | 19.4 KiB at 280 px | 23.1 KiB less |
| Jeddah desktop hero | 197.5 KiB | 126.8 KiB at 1280 px | 70.7 KiB less |
| Riyadh desktop hero | 451.1 KiB | 284.1 KiB at 1280 px | 167.0 KiB less |
| Shared Jeddah/Riyadh warehouse image | 364.4 KiB | 76.8/152.2 KiB at 640/960 px | Width dependent; both pages previously used the same source bytes |

At a 390 px viewport with device pixel ratio 1, the homepage hero, banner and logo alone total about 121.7 KiB versus 318.1 KiB before, an estimated 196.4 KiB reduction. At higher pixel ratios, larger `srcSet` candidates reduce that saving; for example the 960 px hero and 1200 px banner yield roughly 95 KiB reduction for the same three assets. Browser caching, lazy loading and device selection mean these are size comparisons, not measured network-transfer totals. The original Riyadh 900 px mobile asset was already smaller than a re-encoded copy, so it was retained.

The optimized 640 px homepage and Riyadh mobile images were visually inspected for recognizable shelf and product detail. The original crop and aspect ratio were preserved. Remaining large photographs on secondary sections were inventoried but left for a later pass where the measured benefit and visual quality can be checked per placement.

## Accessibility

The two small eyebrow labels “حلولنا” and “نماذج الحلول” on the cream `#FCFAF5` background now use scoped dark gold `#78591F`. Calculated contrast is **6.20:1**, above WCAG AA's 4.5:1 small-text requirement; the previous `#C9A25C` was about 2.29:1. Browser computed styles confirmed the new text and background colors. Decorative gold elsewhere was unchanged.

## Validation

- `npm run typecheck`: pass.
- `npm run build`: pass; Next.js 16 generated the Cloudflare-compatible static export.
- `python scripts/verify-phase26-static.py`: pass for all 12 site routes, route links, image references, responsive image markup, WhatsApp links, one H1 per page, noindex metadata, robots `Disallow: /`, empty sitemap and absent preview canonicals.
- Edge against a local static server: homepage, warehouse, retail, Jeddah and Riyadh checked at 390 px mobile; Riyadh and homepage checked at desktop widths. Each reported zero broken loaded images, no horizontal overflow and no nested vertical scrollport. The browser selected the intended mobile and desktop image files. Screenshots showed the existing RTL layout and hero presentation. Browser console on the checked desktop page had no errors. Homepage browser inspection confirmed the banner float animation and existing WhatsApp destination.
- No Lighthouse CLI is installed in the local workspace or globally. A new mobile Lighthouse score, LCP, CLS or transfer trace was **not measured**. Repeat Lighthouse on the deployed feature preview before comparing scores with the October 9 baseline. The preview SEO score is expected to remain affected by deliberate noindex and robots restrictions.

## Files and limits

Changed code: `src/app/page.tsx`, `src/app/home.css`, `src/components/StaticResponsiveImage.tsx`, `src/components/WarehouseRackingView.tsx`, `src/components/RetailShelvingView.tsx`, `src/components/JeddahView.tsx`, `src/components/RiyadhView.tsx`, `src/components/UI.tsx`, `src/components/SiteHeader.tsx`. Added the static variants listed above, their generation script, this report and `scripts/verify-phase26-static.py`.

The mobile LCP gain remains unmeasured. A production-like throttled Lighthouse run is needed to determine whether network latency, CSS, font swap or image decoding now dominates. Cloudflare RUM and the intentional preview indexing protections remain in place.
