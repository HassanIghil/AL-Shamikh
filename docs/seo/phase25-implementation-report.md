# Phase 25 — SEO implementation report

**Project:** Al Shamikh — الشامخ للرفوف والديكورات  
**Preview:** https://al-shamikh.pages.dev/  
**Implementation branch:** `codex/phase25-seo-implementation`  
**Research basis:** existing Phase 23/24 reports and OpenSEO pilot files in this folder. No new paid research was run.

## Summary

Updated page metadata and Arabic content for the five priority routes, improved the inquiry prompts and contextual navigation, and narrowed structured-data service areas to the confirmed cities. No visual styles, route structure, page layout, animation, carousel, or preview indexing controls were changed. The preview remains intentionally blocked from indexing; this implementation is not a production launch.

## Before and after

| Page | Before | After | Primary cluster |
|---|---|---|---|
| `/` | Title: `الشامخ للرفوف والديكورات`; H1: `رفوف مستودعات ومتاجر في جدة والرياض`; general H2 and promotional claims in hero. | Title: `رفوف مستودعات ومتاجر \| الشامخ للرفوف والديكورات`; H1: `رفوف المستودعات والمتاجر`; introductory copy routes users to relevant service and city pages; removed unsupported speed/standards/team claims from the hero. | رفوف المستودعات والمتاجر (brand/general discovery) |
| `/warehouse-racking` | Title: `رفوف مستودعات في جدة والرياض \| الشامخ للرفوف والديكورات`; generic storage-system framing. | Title: `رفوف مستودعات وأنظمة تخزين \| الشامخ`; explains heavy, medium and light use cases through selection inputs, without numeric capacities; quote process asks for dimensions, goods and handling details. | رفوف مستودعات / اختيار نظام التخزين |
| `/retail-shelving` | Title: `رفوف المحلات والسوبر ماركت في جدة والرياض \| الشامخ`; broad retail copy. | Title: `رفوف محلات وسوبر ماركت وبقالات \| الشامخ`; clearer shop/product/space selection copy and a quote CTA requesting city, activity, dimensions and products. | رفوف المحلات والسوبر ماركت والبقالات |
| `/jeddah` | Title: `رفوف مستودعات ومحلات في جدة \| الشامخ`; prior city copy included broader scope wording. | Same clear city title retained; unique description and H1 `رفوف مستودعات ومتاجر في جدة`; local quote steps and links to warehouse, retail and other relevant pages; claims limited to Jeddah coverage. | رفوف مستودعات ومحلات في جدة |
| `/riyadh` | Title: `رفوف مستودعات ومحلات في الرياض \| الشامخ`; prior city copy included broader scope wording. | Same clear city title retained; distinct Riyadh description and H1 `رفوف مستودعات ومتاجر في الرياض`; city-specific quote prompts and relevant service links; claims limited to Riyadh coverage. | رفوف مستودعات ومحلات في الرياض |

For every route, the generated HTML has one H1, Arabic/RTL document settings, a unique title and description, no canonical URL, and an intentional noindex directive. Internal site navigation renders links to the route set. Page-specific links connect the homepage, specialist services, city pages, solutions/sectors and contact. WhatsApp prompts now request information useful for discussing the actual project rather than promising an outcome.

## Research priorities and evidence boundaries

The shortlist below follows the ordering and qualifications in `openseo-audit-diagnosis-implementation-plan.md`. Only two terms have exact OpenSEO monthly volume/difficulty values in the priority 20; unknown values remain unknown. The numeric values are imported OpenSEO estimates retrieved 2026-10-09, not independently verified Google measurements. The averaging period was not supplied. The city-qualified terms' displayed metrics are Saudi-wide, not city-specific.

| # | Commercial opportunity | Target | OpenSEO volume / difficulty | Qualification |
|---:|---|---|---:|---|
| 1 | رفوف مستودعات | `/warehouse-racking` | 1,600 / 0 | Exact Saudi-wide seed; provider labels commercial. |
| 2 | رفوف مستودعات جدة | `/jeddah`, support `/warehouse-racking` | 10 / 48 | Saudi-wide metric; provider labels informational, while local SERP/page-map evidence suggests local provider intent. |
| 3 | رفوف مستودعات الرياض | `/riyadh` | unknown / unknown | Strategic priority and city SERP evidence; no city volume. |
| 4 | تركيب رفوف مستودعات جدة | `/jeddah` | unknown / unknown | Confirm installation scope before targeting the service claim. |
| 5 | تركيب رفوف مستودعات الرياض | `/riyadh` | unknown / unknown | Confirm installation scope before targeting the service claim. |
| 6 | رفوف طبالي جدة | `/warehouse-racking` | unknown / unknown | Confirm system availability and approved specs. |
| 7 | رفوف طبالي الرياض | `/warehouse-racking` | unknown / unknown | Confirm system availability and approved specs. |
| 8 | رفوف مستودعات ثقيلة | `/warehouse-racking` | unknown / unknown | Product/load specification needs client evidence. |
| 9 | رفوف تخزين أحمال متوسطة جدة | `/warehouse-racking`, support `/jeddah` | unknown / unknown | Confirm product family/specs. |
| 10 | رفوف سوبر ماركت جدة | `/retail-shelving`, support `/jeddah` | unknown / unknown | Earlier SERP evidence; no exact pilot metric. |
| 11 | رفوف سوبر ماركت الرياض | `/retail-shelving`, support `/riyadh` | unknown / unknown | SERP evidence; no exact pilot metric. |
| 12 | رفوف بقالات جدة | `/retail-shelving`, support `/jeddah` | unknown / unknown | SERP evidence; no exact pilot metric. |
| 13 | رفوف بقالات الرياض | `/retail-shelving`, support `/riyadh` | unknown / unknown | SERP evidence; no exact pilot metric. |
| 14 | رفوف صيدليات جدة | `/retail-shelving`, support `/jeddah` | unknown / unknown | Confirm pharmacy fixture availability. |
| 15 | رفوف صيدليات الرياض | `/retail-shelving`, support `/riyadh` | unknown / unknown | Confirm pharmacy fixture availability. |
| 16 | تجهيز محلات جدة | `/jeddah`, support `/retail-shelving` | unknown / unknown | Qualitative Phase 24 priority; exact query not checked in pilot. |
| 17 | تجهيز محلات الرياض | `/riyadh`, support `/retail-shelving` | unknown / unknown | Qualitative Phase 24 priority; exact query not checked in pilot. |
| 18 | تجهيز بقالات جدة | `/jeddah`, support `/retail-shelving` | unknown / unknown | Qualitative Phase 24 priority; exact query not checked in pilot. |
| 19 | تجهيز بقالات الرياض | `/riyadh`, support `/retail-shelving` | unknown / unknown | Qualitative Phase 24 priority; exact query not checked in pilot. |
| 20 | تجهيز سوبر ماركت جدة | `/jeddah`, support `/retail-shelving` | unknown / unknown | Qualitative Phase 24 priority; exact query not checked in pilot. |

These are business-fit and route-fit opportunities, not a forecast of traffic or revenue. The SERP competitor sample found recurring supplier/catalog pages and social/marketplace results. The defensible gap was clearer product selection guidance, quote requirements, honest scope, and navigation from broad intent to specialist/city pages. The gallery continues to identify illustrative images as illustrative; it does not claim these are client projects.

## Content and technical changes

- Rewrote priority-page title/description metadata and H1/H2 wording for distinct general, warehouse, retail and city intents.
- Added practical selection guidance based on goods, dimensions, space, aisle/access needs and handling method; no capacities or performance promises were added.
- Improved internal links among the homepage, warehouse and retail pages, Jeddah/Riyadh, solutions/sectors, and contact.
- Updated WhatsApp prefill messages to request city, site type, dimensions, products and handling needs as applicable.
- Changed image alt text where it could describe the actual illustrative subject more clearly; preserved decorative-image behavior and existing image assets.
- Removed unsubstantiated promotional claims from the edited homepage/warehouse/city content. Narrowed `areaServed` structured data to Jeddah and Riyadh and retained the existing official-domain/indexing guard.
- Kept the Cloudflare Pages static export and all existing preview indexing safeguards.

## Validation evidence

- `npm run typecheck`: passed.
- `npm run build`: passed after the first attempt hit a sandbox path-access error; the authorized retry generated the static export successfully (Next.js 16.4.0, all prerendered routes emitted).
- Generated route inspection: all 12 expected content routes (`/`, `/warehouse-racking`, `/retail-shelving`, `/jeddah`, `/riyadh`, `/solutions`, `/sectors`, `/projects`, `/about`, `/contact`, `/privacy`, `/terms`) exist as static HTML. All have one H1, a title and description, Arabic/RTL markup, `noindex` and no canonical URL.
- Generated preview robots file is `User-agent: *` / `Disallow: /`; generated sitemap has an empty `<urlset>`. No public indexing safeguard was changed.
- Static internal-link audit found no broken route targets after excluding links to assets and framework paths. Local image audit found 139 image references and zero missing local assets. No `/_next/image` runtime optimization endpoints were emitted.
- Browser/mobile visual QA and browser-console inspection could not be completed: the local HTTP server was blocked by environment socket permissions and the app browser timed out connecting to localhost. Source layout/styles were not changed; this is a validation limitation, not a pass claim. The prior SEO score 66 was not re-run through OpenSEO or Lighthouse.

## Client confirmation needed

Before stronger claims are published, confirm product availability for heavy/medium/light and multi-level systems, pallet racking, supermarket/grocery and pharmacy fixtures; supply/delivery/installation/design/maintenance responsibilities; approved product specifications and any capacities/materials; exact service boundaries in Jeddah and Riyadh; correct WhatsApp contact and supported inquiry languages; and genuine project-image provenance and publication permission. Confirm English-language service/sales capability before creating English-targeted landing pages.

## Official-domain launch requirements

Confirm the owned HTTPS domain and preferred apex/`www` form; configure it as the Cloudflare Pages custom domain and set `NEXT_PUBLIC_SITE_URL` to that production origin. Review the content facts and contact details above. On production, verify HTTPS/redirects, route status codes, canonical URLs, robots, non-empty sitemap and structured data; connect the correct Search Console property and submit the production sitemap. Only enable indexing in the separately reviewed official-domain production configuration. Keep `pages.dev` preview protections in place.

## Changed implementation files

- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/[slug]/page.tsx`
- `src/components/WarehouseRackingView.tsx`
- `src/components/RetailShelvingView.tsx`
- `src/components/JeddahView.tsx`
- `src/components/RiyadhView.tsx`
- `src/lib/data.ts`
- `docs/seo/phase25-implementation-report.md`
