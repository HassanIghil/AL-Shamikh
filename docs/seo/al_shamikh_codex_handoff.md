# CODEX HANDOFF — AL SHAMIKH SEO IMPLEMENTATION

**Read these files first:**
- `al_shamikh_deep_seo_report.md` (complete analysis and priorities)
- `al_shamikh_seo_research.xlsx` (overview, 40 keywords, observed organic positions, competitor frequencies)
- `al_shamikh_keyword_map.csv`
- `al_shamikh_serp_observations.csv`
- `al_shamikh_competitor_frequency.csv`

**Business:** الشامخ للرفوف والديكورات, Saudi Arabia, Jeddah/Riyadh. Main contact +966546916315; lead generation through WhatsApp; no ecommerce or displayed prices. Preserve approved luxury emerald/gold Arabic RTL design.

**Research caveats:** The research contains 40 attempted SERP queries, 39 successful, 291 observed positions, 61 distinct domains. It does not provide actual search volume, client website ranking, backlink authority, or verification of physical business locations. One query returned upstream collection failure. Treat rankings as snapshots, not guarantees. Do not overinterpret repeated domains because tested queries overlap.

## Required work sequence

### A. AUDIT ONLY — NO CODE CHANGES
1. Identify actual production canonical domain and verify it with user. If unknown, stop before committing hardcoded production URLs.
2. Inspect Next.js App Router source, routes, metadata, HTML output, canonical setup, 200/404 status, `noindex`, robots/sitemap, internal links, image loading, accessibility, mobile rendering, performance, phone/WhatsApp links.
3. Compare title/H1/page contents against keyword map; identify keyword cannibalization and actual missing elements instead of assuming anything is broken.
4. Confirm client business entity: legal/trading name, actual service area, separate eligible locations (if any), Google Business Profile access, real photos and product specifications.
5. Produce severity-ranked technical findings with exact file paths; seek approval.

### B. IMPLEMENT P0 FIXES AFTER APPROVAL
1. Fix actual indexability and canonical/sitemap/robots defects; verify Next.js build.
2. Improve page metadata, headings and content without altering layouts. Focus `/warehouse-racking`, `/retail-shelving`, `/jeddah`, `/riyadh`, and homepage brand clarity.
3. Add helpful product-category explanations only when services/specs are verified. Keep Jeddah and Riyadh copy unique, not merely swapped city names.
4. Add clear internal links to service pages, sector pages, genuine `/projects`, and `/contact`.
5. Use accurate Organization, WebSite, BreadcrumbList, and Service markup as appropriate; LocalBusiness only if physical address/eligibility verified. No invented addresses/reviews/rating.
6. Measure GA4 / GTM WhatsApp CTA click events as opens only, not message sends; don't record private form contents in analytics.
7. Run desktop/mobile screenshots, Lighthouse, typecheck/build, rich-results validation and crawl tests. Attach evidence.

### C. SECOND WAVE
1. Expand project case studies with genuine customer-supplied photos (not AI hero illustration presented as executed work).
2. Complete legitimate Google Business Profile work.
3. Produce useful warehouse/pallet/retail selection content grounded in actual client expertise.
4. Build English technical pages only if client confirms English-language sales operations.
5. Measure results over 30/60/90 days using Search Console and lead tracking; iterate.

## Hard constraints

- Never promise #1 Google rankings.
- Never invent search volume, traffic estimates, reviews, client projects, branch offices, product capacities, certifications, awards or prices.
- Never change the accepted homepage design, logo, gold/emerald tokens, navigation or WhatsApp sales model without approval.
- Never publish dozens of duplicate city/keyword pages.
- Every code change must have a verified reason, test evidence, file list and rollback/commit summary.

**First user question if missing:** “What is the public production domain of Al Shamikh, and does the client have eligible physical business locations or only service areas in Jeddah and Riyadh?”
