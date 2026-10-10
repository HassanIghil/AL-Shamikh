# Phase 25 — SEO implementation report

**Project:** Al Shamikh — الشامخ للرفوف والديكورات
**Preview:** https://al-shamikh.pages.dev/
**Implementation branch:** `codex/phase25-seo-implementation`
**Research basis:** existing Phase 23/24 reports and OpenSEO pilot files in this folder. No new paid research was run.

## Summary

Updated page metadata and Arabic content for the five priority routes, improved the inquiry prompts and contextual navigation, and narrowed structured-data service areas to the confirmed cities. No visual styles, route structure, page layout, animation, carousel, or preview indexing controls were changed. The preview remains intentionally blocked from indexing; this implementation is not a production launch.

## Confirmed business facts and follow-up

The owner confirmed that Al Shamikh serves Jeddah and Riyadh and sells warehouse, supermarket, grocery and pharmacy shelving. These facts are now stated directly in the relevant page copy. Installation remains unconfirmed; all live installation references are neutral questions that use the owner's requested wording, and no quote or page promises installation. Unsupported claims about service beyond Jeddah and Riyadh were removed. Heavy, medium and light storage are described as use cases without capacities or load specifications; unconfirmed multi-level system claims were changed to general space-selection guidance.

The current project gallery was audited by reviewing its data entries, labels, image paths and project-page copy. The listed assets in `public/photos/` are not associated with project city/type/category/descriptions or a provenance record in the gallery data. Existing site copy labels them as illustrative. Although the owner confirmed that genuine completed-project photos are available, no separately identified and approved project-photo set or related facts were present in the repository. Therefore the existing images remain illustrative and none is represented as a completed Al Shamikh project. The gallery captions and inquiry links were adjusted to describe image examples and shelving categories accurately.

For each real project to add later, provide the original photos, project city, project type, shelving category and one short fact-checked description. Confirm which photos may be published and any required attribution. Do not send or imply client names, street addresses, completion dates, installation activity or outcomes unless the owner separately verifies and approves those facts.

## Before and after

| Page | Before | After | Primary cluster |
|---|---|---|---|
| `/` | Title: `الشامخ للرفوف والديكورات`; H1: `رفوف مستودعات ومتاجر في جدة والرياض`; generic hero description. | Title: `رفوف مستودعات ومحلات في جدة والرياض \| الشامخ`; H1: `رفوف المستودعات والمتاجر`; concise copy says the business supplies warehouse, shop and supermarket shelving in Jeddah and Riyadh. | رفوف مستودعات ومحلات، رفوف سوبر ماركت (brand/general discovery) |
| `/warehouse-racking` | Title: `رفوف مستودعات في جدة والرياض \| الشامخ للرفوف والديكورات`; generic storage-system framing. | Title: `رفوف مستودعات وأنظمة تخزين \| الشامخ`; explains heavy, medium and light use cases through selection inputs, without numeric capacities; quote process asks for dimensions, goods and handling details. | رفوف مستودعات / اختيار نظام التخزين |
| `/retail-shelving` | Title: `رفوف المحلات والسوبر ماركت في جدة والرياض \| الشامخ`; broad retail copy. | Title: `رفوف محلات وسوبر ماركت وبقالات \| الشامخ`; clearer shop/product/space selection copy and a quote CTA requesting city, activity, dimensions and products. | رفوف المحلات والسوبر ماركت والبقالات |
| `/jeddah` | Title: `رفوف مستودعات ومحلات في جدة \| الشامخ`; prior page copy mixed city-specific wording and broad service details. | Same clear city title retained; warehouse/retail/pharmacy/grocery sections and local quote CTA; coverage statement limited to Jeddah. | رفوف مستودعات ومحلات في جدة |
| `/riyadh` | Title: `رفوف مستودعات ومحلات في الرياض \| الشامخ`; prior page copy mixed city-specific wording and broad service details. | Same clear city title retained; aligned service categories and local quote CTA; coverage statement limited to Riyadh. No branch/address/map or fabricated city differentiator added. | رفوف مستودعات ومحلات في الرياض |

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

- **Installation:** confirm whether Al Shamikh offers installation, and if so, the precise scope, conditions and who performs it. Until confirmed, the website only says customers can ask and that availability/scope will be confirmed before pricing.
- **Project evidence:** provide the genuine completed-project photo files; for each, confirm city, project type, shelving category, a short factual description and publication permission. The owner has confirmed photos are available, but they were not included in the repository or this handoff.
- **Specifications:** confirm any product families beyond the already confirmed warehouse, supermarket, grocery and pharmacy shelving before advertising them; provide approved technical specs before mentioning capacities, materials, standards, warranties, prices or lead times.
- **Contact/language:** verify the published WhatsApp destination and whether English-language sales/service are supported before creating English-targeted pages.

## Official-domain launch requirements

Confirm the owned HTTPS domain and preferred apex/`www` form; configure it as the Cloudflare Pages custom domain and set `NEXT_PUBLIC_SITE_URL` to that production origin. Review the content facts and contact details above. On production, verify HTTPS/redirects, route status codes, canonical URLs, robots, non-empty sitemap and structured data; connect the correct Search Console property and submit the production sitemap. Only enable indexing in the separately reviewed official-domain production configuration. Keep `pages.dev` preview protections in place.

## Changed implementation files

### Final copy review

- Updated the site navigation, footer, project-page breadcrumb, About-page links and gallery filter label to call `/projects` “صور الحلول”; the URL and gallery route are unchanged. The gallery continues to label its current imagery as illustrative.
- Removed unverified country-of-origin labels from About and Solutions copy. Product origin is now something customers can ask the business to confirm before ordering.
- Neutralized unsupported product-strength, “ideal”, “economical” and superlative performance language in the reviewed solution cards. Confirmed warehouse, supermarket, grocery and pharmacy categories and Jeddah/Riyadh service coverage remain.
- Installation remains unconfirmed and the existing neutral inquiry language is preserved. No paid OpenSEO calls were made for this follow-up.
- Final follow-up validation: typecheck passed; production build passed after the sandboxed run was blocked by Windows SWC path access and the elevated retry completed all 17 static-generation tasks. Static route checks were repeated for all 12 expected routes, preview robots/sitemap, metadata and canonical safeguards. Browser-based visual testing remains unverified because the local browser/server path is unavailable in this environment.

- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/[slug]/page.tsx`
- `src/components/WarehouseRackingView.tsx`
- `src/components/RetailShelvingView.tsx`
- `src/components/JeddahView.tsx`
- `src/components/RiyadhView.tsx`
- `src/components/ProjectFilter.tsx`
- `src/components/ProjectsView.tsx`
- `src/components/AboutView.tsx`
- `src/components/SolutionsView.tsx`
- `src/components/SectorsView.tsx`
- `src/components/UI.tsx`
- `src/lib/data.ts`
- `docs/seo/phase25-implementation-report.md`
