# FOUC and local development investigation

Date: 2026-10-09`nBranch: `feature/ux-whatsapp-scroll-reveals`

## Findings

The deployed preview and the source both had a Google Fonts `@import` at the very top of `src/app/globals.css`. That made the site's primary stylesheet depend on another network request before its local design rules could be applied. The browser preview still painted with the correct design in the checks below, so an actual default-browser-style flash was **not reproduced**. It did, however, make first render depend on the remote font stylesheet and leave fonts loading at first paint, especially under network throttling.

The LAN HMR warning had a separate cause: `192.168.56.1` was not in Next.js's development origin allowlist. The static-export development error was also separate: with `output: 'export'` active in `next dev`, an unknown `[slug]` request failed before the route could render the app's 404 page.

## Changes made

- Added `allowedDevOrigins: ['192.168.56.1']`. Next.js matches the hostname only and applies this option to development requests; the production build is unaffected.
- Moved `output: 'export'` behind `NODE_ENV === 'production'`. `next dev` can now handle unknown slugs normally; `next build` continues to generate the Cloudflare Pages static export.
- Added a branded `src/app/favicon.ico` from the existing rack emblem. Next's App Router file convention emits `/favicon.ico` directly instead of allowing the request to fall through to `[slug]`.
- Replaced the remote font import with locally hosted Arabic WOFF2 files for Alexandria and Tajawal. The CSS uses `font-display: swap`, so text and layout can paint with the existing sans-serif fallbacks while local font files load. The existing font families and design tokens remain in place. Open Font License files are included beside the font assets.
- No body hiding, loading overlay, or new animation dependency was introduced. The existing scroll-reveal code only adds pending classes after client hydration; the static HTML has no pending reveal classes.

## Evidence and validation

| Check | Result |
| --- | --- |
| Cloudflare Pages preview, cold-cache Chrome, desktop | HTML and both initial CSS files returned 200. At first contentful paint (736 ms), computed body background was `rgb(252, 250, 245)`, hero background `rgb(6, 43, 34)`, and H1 color white. No unstyled frame was observed. The stylesheet still requested Google Fonts; font loading was still in progress at first paint. `/favicon.ico` returned 404 on the currently deployed build. |
| Cloudflare Pages preview, cold-cache Chrome, 4G emulation | First contentful paint was 1,184 ms with the intended body, hero, and heading styles already applied. The page's later assets extended full load time; this timing is not presented as a Lighthouse score or a before/after performance claim. |
| Cloudflare Pages preview, unknown path | `/does-not-exist` returned HTTP 404. |
| Dev server via `http://192.168.56.1:3001/` | Initial global and homepage CSS both returned 200. Favicon and WOFF2 requests returned 200. Chrome's HMR WebSocket handshake returned 101 and the console reported `[HMR] connected`; no severe browser-console errors were recorded. |
| Dev server via `http://localhost:3001/` | Homepage returned 200, CSS files returned 200, fonts loaded locally, and no severe browser-console errors were recorded. |
| Unknown slug in dev, before the dev config adjustment | Returned 500 with Next's message: `Page "/[slug]/page" is missing param "/[slug]" in "generateStaticParams()", which is required with "output: export" config.` |
| Unknown slug in dev, after the adjustment | Returned 404 and rendered the app's not-found content. |
| `npm run typecheck` | Passed. |
| `npm run build` | Passed with Next.js 16.4.0. The build reported `/` and all finite `[slug]` routes as static output. |
| Static export routes and files | Local static preview returned 200 for `/`, `/solutions`, `/sectors`, `/warehouse-racking`, `/retail-shelving`, `/projects`, `/about`, `/jeddah`, `/riyadh`, `/contact`, `/privacy`, `/terms`, `/robots.txt`, `/sitemap.xml`, `/favicon.ico`, and local fonts. An unknown path returned 404 from `404.html`. |
| Static export, 1440px desktop | First paint was 652 ms in the local static preview; computed cream page, emerald hero, and white heading styles were already applied. Document width was 1,425 CSS px with a 1,440 px viewport (the difference is the scrollbar), with no horizontal overflow. |
| Static export, 390px mobile with 4G emulation | First paint was 860 ms. Body, hero, and H1 styles were correct while local fonts were still loading. `scrollWidth` and `clientWidth` were both 390 px. No horizontal overflow. |
| Static export, JavaScript disabled, 390px mobile | The page remained styled and its homepage text, header, hero, and above-the-fold imagery were present. Images returned 200 and displayed after their requests completed. Scroll-reveal classes are absent from the original HTML, so content is not hidden without JavaScript. |

The live Pages deployment was only inspected; no deployment or remote file changes were made. A local static server was used to exercise `out/` paths and fallback behavior. The local host and Cloudflare edge use different networks, so their paint times are not a controlled performance comparison. No Lighthouse before/after run was used, and no performance improvement is claimed.

## Where each issue applies

- The Google Fonts dependency was present in the generated production CSS as well as the local source, so the dependency affected both environments. The deployed preview painted styled content in this test; the claimed unstyled flash itself remains unconfirmed.
- The blocked-origin warning and `[slug]` `generateStaticParams()` error are development-server issues. They do not explain the current preview's CSS responses. The new config allows the specified LAN host in development and leaves production static export enabled.
- The live preview's missing favicon was verified as a production asset gap (`/favicon.ico` returned 404). The new static app icon fixes the source and generated `out/`, but the hosted preview has not been redeployed.
- This build was made without a configured production `NEXT_PUBLIC_SITE_URL`. It keeps the existing safeguards: generated page metadata is `noindex`, `robots.txt` disallows crawling, and the sitemap contains no URLs. No localhost or placeholder canonical was emitted.

## Cloudflare Pages compatibility

The production build still runs with `output: 'export'`, and `images.unoptimized` remains enabled for static hosting. The generated `out/` directory contains the favicon and font assets alongside the HTML routes. Preview indexing safeguards remain build-time metadata and robots output; this change does not modify them. The live deployment will keep its old external-font stylesheet and missing favicon until a later reviewed deployment.

## Remaining test boundary

The current Cloudflare preview was checked with cold-cache desktop and 4G network emulation, but this investigation did not run a full Lighthouse audit. The reported user-side development warning was validated after the allowlist change by a successful LAN HMR handshake; a before-change Chrome capture was not available in this run.
