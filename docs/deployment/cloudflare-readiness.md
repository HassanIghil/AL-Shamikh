# Cloudflare Pages readiness — Al Shamikh

**Recommendation:** Cloudflare Pages with Next.js static HTML export. The repository is configured for Pages, and `npm run build` generates a static `out/` site. No Worker, OpenNext adapter, `wrangler deploy`, Cloudflare runtime binding, or deployment command is required.

No Pages deployment has been started. The production domain has not been purchased or configured.

## Why static export fits this site

The site consists of a homepage, a finite set of content pages, static legal pages, and client-side WhatsApp interactions. The dynamic `[slug]` route already returns the complete supported slug list from `generateStaticParams()` and sets `dynamicParams = false`. The build emits each supported page as HTML. An ungenerated slug is not rendered dynamically; Cloudflare Pages serves the exported `404.html` for missing paths.

The routes use no request-time cookies, headers, middleware, API handlers, ISR, or server actions. Metadata, JSON-LD, robots, and sitemap are generated during the build. The contact form continues to open WhatsApp in the browser, so it needs no server endpoint.

## Repository configuration

- `next.config.ts` sets `output: 'export'` and `images.unoptimized: true`. Next Image keeps its layout and alt text but emits URLs to the original static files; it does not call the Next.js image optimization server endpoint.
- `src/app/[slug]/page.tsx` enumerates all 11 supported slugs and has `dynamicParams = false`.
- `src/lib/seo.ts` uses Cloudflare Pages' injected `CF_PAGES` and `CF_PAGES_BRANCH` values to make non-main branch previews noindex. The placeholder-free `NEXT_PUBLIC_SITE_URL` is also required before canonicals or indexable sitemap entries are emitted. `.pages.dev`, `.workers.dev`, localhost, and invalid origins are rejected.
- `src/app/robots.ts` and `src/app/sitemap.ts` are statically exported. Before launch, robots blocks crawling and the sitemap is empty. On Pages preview branches, the same safeguards apply even if a site URL is supplied.
- `public/_headers` is copied to `out/_headers` and sets long-lived immutable caching for hashed `/_next/static/*` assets.
- Worker/OpenNext files, build scripts, and dependencies have been removed so the repository no longer advertises the old Workers deployment flow. Cloudflare Pages reads its build settings from the Pages project configuration; it does not need a Wrangler file.
- `.node-version` pins the Pages build to Node 22.

## Validation completed

- `npm run typecheck`: passed.
- `npm run build`: passed with Next.js 16.4.0 using `output: 'export'`.
- `out/` contains 110 files, including 14 HTML files, the 12 site pages, `404.html`, `robots.txt`, `sitemap.xml`, `_headers`, `/_next/static/`, and 24 image files.
- Every local photo, logo, and Next static asset reference found in exported HTML resolves to a file in `out/` (zero missing references). HTML contains no `/_next/image` endpoint references.
- All 12 site pages have an H1. With preview branch variables and a dummy URL supplied, each page contains noindex metadata and no canonical tag or dummy host.
- Preview `robots.txt` disallows crawling; preview `sitemap.xml` contains zero URLs.
- `404.html` is present for Cloudflare Pages' not-found response.
- GitHub's `origin/main` remains at the original website commit; the validated Pages changes are on `feat/cloudflare-hosting-prep` until merged.

## Cloudflare Pages dashboard settings

Create or select a **Pages** project, connect `HassanIghil/AL-Chamikh`, and set:

- Framework preset: **Next.js (Static HTML Export)**
- Production branch: `main`
- Root directory: `/` (repository root)
- Build command: `npm run build`
- Build output directory: `out`
- Node version: 22 (already pinned in `.node-version`)
- Deploy command: none; Pages publishes the build output as part of its own deployment flow.

Do not configure this repository as a Workers project. Do not set `wrangler deploy`, `opennextjs-cloudflare`, or a Worker entrypoint in Pages settings. Cloudflare's preset may show `npx next build`; that is equivalent, while this repository's configured command is `npm run build`.

After the feature branch is reviewed and merged into `main`, Pages can use that production branch. Builds from feature branches are Pages preview deployments.

## Environment variables and launch indexing

No environment variable is needed to build the static site. Keep `NEXT_PUBLIC_SITE_URL` unset until the client owns and approves the production domain. With it unset, even the production branch emits noindex, no canonical URLs, a disallow-all robots file, and an empty sitemap.

After the domain is purchased and launch is approved, set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin in the Pages **Production** environment, then rebuild the production branch. Do not add it to the Preview environment. The Pages branch check separately keeps previews noindex. Never use a temporary `.pages.dev` or `.workers.dev` hostname as the canonical origin.

## Limitations

Static export does not provide runtime Next.js server features or on-demand image optimization. This website does not use request-time server features. Images are served as original files from `public/`, avoiding an image service or paid transformation binding. If image variants are needed later, optimize the source files before build or select a separate image service and validate its costs.

The build and generated files were validated locally; this work did not create a Pages project or run an actual Cloudflare deployment.

## Official references

- [Cloudflare: deploy a static Next.js site to Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)
- [Cloudflare Pages build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/)
- [Cloudflare Pages build image and Node versions](https://developers.cloudflare.com/pages/configuration/build-image/)
- [Cloudflare Pages build environment variables](https://developers.cloudflare.com/pages/configuration/build-configuration/)
- [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports)
- [Next.js `generateStaticParams`](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)
- [Next.js Image in static exports](https://nextjs.org/docs/app/api-reference/components/image)
