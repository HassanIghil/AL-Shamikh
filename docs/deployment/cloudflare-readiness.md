# Cloudflare deployment readiness — Al Shamikh

**Status:** OpenNext Worker configuration prepared and locally validated. Nothing has been deployed and no custom domain was purchased or configured.

## Recommendation

Use **Cloudflare Workers with the OpenNext Cloudflare adapter** for the existing deployment target. The failed deployment targeted Worker al-shamikh but its WORKER_SELF_REFERENCE pointed to the nonexistent service al-shamikh-site, which caused error 10143. The committed Wrangler configuration now names the Worker al-shamikh and points the self-reference to that same service.

Cloudflare currently recommends vinext for new full-stack Next.js projects. This project already uses Next.js 16.4 and its OpenNext build was succeeding; the reported failure is the Worker name binding. Keeping OpenNext avoids a framework/runtime migration while correcting the direct cause. OpenNext supports the App Router and the current build-time generated pages. See [Cloudflare OpenNext guidance](https://developers.cloudflare.com/workers/framework-guides/web-apps/opennext/) and [OpenNext caching guidance](https://opennext.js.org/cloudflare/caching).

## Configuration changes

- wrangler.jsonc sets name to al-shamikh, entrypoint .open-next/worker.js, compatibility flags, .open-next/assets / ASSETS, observability, the IMAGES binding, and WORKER_SELF_REFERENCE with service: al-shamikh.
- open-next.config.ts uses the read-only Workers Static Assets incremental cache for build-time generated routes and enables cache interception.
- package.json and package-lock.json include @opennextjs/cloudflare and Wrangler as local dependencies. OpenNext configuration is committed in the repository; Cloudflare remote builds do not need to generate migration files.
- scripts/build-cloudflare.mjs calls the locally installed OpenNext CLI. It marks local builds as preview output; Workers Builds must explicitly mark only the production trigger as production. It also applies a guarded, idempotent compatibility patch to OpenNext 1.20.9's manifest glob so Next.js 16.4's preview-props.json is available to the Worker for real 404 rendering. The build fails with a clear message if the upstream patch target changes.
- next.config.ts no longer switches to Pages static export for Cloudflare. The standard Next.js build remains unchanged.
- src/lib/seo.ts blocks Worker preview builds when WORKERS_CI=1 unless CLOUDFLARE_DEPLOYMENT_ENV=production. Temporary .workers.dev and .pages.dev URLs are rejected as canonical origins. Without a valid NEXT_PUBLIC_SITE_URL, all builds remain noindex.
- .gitignore excludes .open-next/, .wrangler/, .dev.vars*, build output, and local credentials.
- public/_headers applies immutable caching to hashed /_next/static/* assets.

The app uses Next Image elements. IMAGES is configured so the adapter can serve its Next-compatible image optimization endpoint. Cloudflare Images transformations may incur account charges; check the account’s current plan/pricing before deployment. The site has no request-time revalidation or revalidatePath / revalidateTag use. Its prerendered pages use Workers Static Assets; no paid R2, KV, D1, or Durable Object cache/queue is configured.

## Commands

Run locally:

- TypeScript: npm run typecheck
- Standard Next.js build: npm run build
- OpenNext Worker build: npm run build:cloudflare
- Build and run in the local Workers runtime: npm run preview:cloudflare

Cloudflare Workers Builds dashboard:

- **Build command:** npm run build:cloudflare
- **Deploy command:** npm run deploy:cloudflare
- **Root directory:** repository root (/)
- **Node.js:** 22 (pinned by .node-version)

Do not use the Pages build command or wrangler pages deploy for this Worker configuration. npm run deploy:cloudflare was not run as part of this task.

## Dashboard setup (when deployment is approved)

1. In Cloudflare, open **Workers & Pages → al-shamikh → Settings → Builds** and connect the GitHub repository HassanIghil/AL-Chamikh. Confirm the dashboard Worker name is exactly al-shamikh, matching wrangler.jsonc.
2. Set root directory to /, production branch to main, Build command to npm run build:cloudflare, and Deploy command to npm run deploy:cloudflare.
3. For the **production build trigger only**, set build variable CLOUDFLARE_DEPLOYMENT_ENV=production. Leave NEXT_PUBLIC_SITE_URL unset until the client owns/selects the final HTTPS domain and explicitly approves launch. Until then production output remains noindex.
4. For non-production/preview triggers, set CLOUDFLARE_DEPLOYMENT_ENV=preview or leave it unset, and leave NEXT_PUBLIC_SITE_URL unset. WORKERS_CI=1 makes those builds noindex by default. Never share production SEO variables with preview triggers.
5. The IMAGES binding is already declared in Wrangler. Verify Cloudflare Images is available and review its current charges before deploying; if the client does not approve that service, switch Next Image to unoptimized original files before deployment and revalidate image loading.
6. Do not create a Pages project for this configuration. A Git connection can start builds automatically; connect it only when ready for a Cloudflare preview. Do not connect or deploy as part of this preparation.

## Production domain and indexing

When the client has purchased the domain and launch is approved, attach the chosen apex or www hostname in the Worker’s **Settings → Domains & Routes**. Follow the DNS/verification steps Cloudflare presents. Then set NEXT_PUBLIC_SITE_URL=https://<client-owned-domain> in the production build trigger only and run a fresh production build. Do not place a .workers.dev or .pages.dev URL in this variable.

Before launch, keep NEXT_PUBLIC_SITE_URL unset and keep preview triggers in preview mode. The SEO helpers then omit canonical URLs, emit noindex directives, disallow crawling in robots.txt, and return an empty sitemap. Confirm those outputs on the final preview before enabling production indexing.

## Validation status

- `npm run typecheck`: passed.
- `npm run build`: passed with Next.js 16.4.0; all configured static routes were generated.
- `npm run build:cloudflare`: passed with OpenNext Cloudflare 1.20.9; `.open-next/worker.js` generated.
- Local Workers runtime preview: passed with Wrangler 4.149.0/workerd. Wrangler reported `WORKER_SELF_REFERENCE (al-shamikh) [connected]`, and `IMAGES` and `ASSETS` bindings were available.
- Route checks: all 12 configured site routes returned HTTP 200; an unknown slug returned the branded 404 with HTTP 404.
- Preview indexing check: with `CLOUDFLARE_DEPLOYMENT_ENV=preview` and a dummy `NEXT_PUBLIC_SITE_URL=https://al-shamikh.example`, rendered HTML included `noindex` and no canonical tag or dummy host; robots.txt disallowed crawling; sitemap had zero URL entries.
- Image check: Next Image endpoint returned HTTP 200 with `image/webp`.
- `git diff --cached --check`: passed before commit.
- Windows note: OpenNext emitted its warning that Windows is not fully supported and recommends WSL. The local Worker preview nevertheless started and passed the checks above.
- WhatsApp behavior was preserved without code changes; the browser form automation did not conclusively capture the popup URL, so that interaction remains unverified in this run.
- No production deployment or domain changes were initiated.
## Official references

- [Cloudflare OpenNext adapter](https://developers.cloudflare.com/workers/framework-guides/web-apps/opennext/)
- [OpenNext Cloudflare getting started](https://opennext.js.org/cloudflare/get-started)
- [OpenNext Cloudflare caching](https://opennext.js.org/cloudflare/caching)
- [OpenNext Cloudflare image optimization](https://opennext.js.org/cloudflare/howtos/image)
- [Cloudflare Workers Builds configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)
