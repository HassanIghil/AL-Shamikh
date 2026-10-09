# Image optimization and hero image rework

## Scope and design

Optimized the existing photo library and added page-specific hero art for Solutions, Sectors, Projects, About, Jeddah, and Riyadh. The approved homepage hero uses the same `home-hero-new.webp` asset and retains its existing composition. Contact has no hero image and was left unchanged. No page layout, copy, colors, or typography were redesigned.

All new hero artwork is illustrative. In particular, the Projects hero is not presented as a verified client project. The Jeddah and Riyadh imagery does not imply local offices or landmarks.

## Existing image conversions

Converted 15 existing images to WebP at quality 86 where that reduced file size. Original dimensions were preserved. Three JPEGs were kept because WebP candidates were larger.

| Asset | Before | After |
| --- | ---: | ---: |
| black.jpeg | 106,416 B | 83,194 B |
| hero.jpeg | 315,583 B | 314,846 B |
| home.jpeg | 100,017 B | 82,396 B |
| jeddah-green-shelving.png | 2,062,283 B | 144,660 B |
| jeddah-pharmacy-interior.png | 2,683,241 B | 200,812 B |
| jeddah-stocked-warehouse.png | 3,534,131 B | 373,188 B |
| market.jpeg | 145,881 B | 110,684 B |
| riyadh-hero.png | 2,290,992 B | 217,180 B |
| riyadh-pharmacy.png | 2,099,303 B | 200,812 B |
| riyadh-retail.png | 2,062,283 B | 144,660 B |
| riyadh-warehouse.png | 2,841,199 B | 373,188 B |
| store.jpeg | 86,050 B | 68,416 B |
| warehouse-3.jpeg | 197,728 B | 196,426 B |
| warehouse-5.jpeg | 278,004 B | 258,240 B |
| white.jpeg | 143,171 B | 112,642 B |

These 15 conversions reduce their combined size from 18,946,282 B to 2,881,344 B (84.8%). The Jeddah/Riyadh banner was also converted from PNG to WebP, retaining its 2172×724 dimensions and reducing it from 1,881,699 B to 287,294 B.

The 2048×1152 homepage hero is already WebP. Re-encoding it increased the file size, so the existing asset was retained unchanged. Its unused 2,859,780 B PNG duplicate was removed. Three JPEG files were retained because their WebP candidates were larger: `pharmacy.jpeg` (47,743 B vs 51,114 B), `warehouse-2.jpeg` (197,155 B vs 231,328 B), and `warehouse-4.jpeg` (50,243 B vs 51,218 B).

## Page-specific heroes

Each desktop hero is 1672×941. A 900×507 mobile source is provided for narrow screens.

| Page | Desktop WebP | Mobile WebP |
| --- | ---: | ---: |
| Solutions | 292,338 B | 101,998 B |
| Sectors | 296,094 B | 105,272 B |
| Projects | 291,110 B | 95,536 B |
| About | 312,836 B | 94,978 B |
| Jeddah | 202,198 B | 70,634 B |
| Riyadh | 461,890 B | 148,316 B |

New hero assets total 2,473,200 B. Combined with the existing photo/banner conversions and removal of the unused homepage PNG duplicate, the changed public image files are approximately 18.0 MB smaller overall.

## Loading behavior

Hero views use a responsive `<picture>` source: browsers at widths up to 768px receive the 900px mobile WebP; wider screens use the desktop WebP. The hero image is eager and high priority. Supporting `Photo` images retain native lazy loading. The homepage main hero remains the same prioritized asset; its lower city banner is lazy-loaded. Static export keeps Next.js image optimization disabled as required by the current Cloudflare Pages setup; these WebP files are pre-optimized and served directly.

## Validation

- `npm run typecheck`: passed.
- `npm run build`: passed; static export completed all 16 routes.
- Static output audit: local image and `srcset` references resolve to emitted assets; no localhost canonical URLs; pages retain their intended `noindex` safeguard; WhatsApp links exist; 404 output includes the not-found heading.
- Desktop (1440px) and exact 390px mobile browser checks covered the homepage and all six new hero pages. All checked images loaded, no broken image elements or horizontal overflow were detected, and mobile hero sources were selected at 390px.
- PageSpeed/Lighthouse comparison was unavailable: no Lighthouse executable/package or pre-change score was available in the project environment. No performance score is claimed.
