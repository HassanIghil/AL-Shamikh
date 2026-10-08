# SEO action plan — Al Shamikh

## Status

Implementation completed locally; **not deployed**. The existing routes now have page-specific metadata, production-only canonicals/schema/sitemap, preview noindex protection, and refined local/commercial copy. See [implementation-results.md](implementation-results.md) for the changed files and validation results. The plan remains based on the 14-query SERP sample and local source inspection, not analytics, search volume, or a verified public-domain ranking audit.

## Priority 1 — Confirm public SEO identity and measurement

- Confirm the canonical public domain and production URLs. Canonicals and sitemap entries are intentionally omitted until `NEXT_PUBLIC_SITE_URL` is set to the real HTTPS origin in the production build environment before `next build`; no domain-level ranking conclusions are safe until the live hostname is confirmed.
- Connect/verify Google Search Console and analytics for the confirmed domain; record baseline indexed pages, query impressions, clicks, leads, and local profile link before changing content.
- Verify Google Business Profile name, service area, phone, categories, hours and landing URLs for Jeddah/Riyadh. Do not add a fabricated street address for a service-area business.

## Priority 2 — Improve existing local landing pages

Target: `/jeddah`, `/riyadh`.

- Preserve each page as a city hub, then make warehouse, supermarket/grocery, pharmacy and shop-fit-out sections easy to scan and directly linked.
- Add unique, verifiable city proof: service-area coverage, delivery/installation process, relevant project photos, and locally applicable examples.
- Add concise quote guidance and clear WhatsApp/contact actions that preserve the current approved design.
- Review Arabic terms and headings against the exact keyword map. Avoid repeating city phrases unnaturally.
- Validate title/description, canonical, indexability, sitemap URLs, Arabic locale, and internal links once the production hostname is supplied.

Evidence: 12 of 14 queries returned three map/local entries; city-specific supplier and marketplace listings recur. SERPs returned 4–9 organic listings per query.

## Priority 3 — Strengthen specialist pages and internal links

Targets: `/warehouse-racking`, `/retail-shelving`, `/sectors`.

- On warehouse content, explain rack-type selection, capacity considerations, aisle planning, installation, safety/inspection, and project steps using only verified product/engineering facts.
- On retail content, distinguish supermarket, grocery, pharmacy, and general-shop use cases, with relevant images and project examples.
- Link each city hub to the matching specialist sections and link specialist pages back to both city hubs. Use descriptive Arabic anchors without keyword stuffing.
- Review existing FAQ content and structured data for accuracy and consistency; include only answers supported by the business.
- Consider a dedicated English warehouse page only after confirming English leads are commercially relevant. Alesayi Storage ranked #1 in both English queries in this small sample; the data does not show search volume.

Evidence: RFCO appeared in eight sampled queries with six top-three results; Sadr and Krfof recur across warehouse/shelving terms. Inspected supplier pages use broad product navigation, while Sadr’s inspected article covers educational selection and installation themes.

## Priority 4 — Build trust and local proof

- Publish real project case studies with city, sector, scope, rack type, constraints, and outcome, subject to client permission.
- Ensure image alt text describes the actual installed system, not a target keyword list.
- Collect genuine reviews and link to the correct service-area profile.
- Keep business identity, service area, phone, and WhatsApp contact consistent across site and profiles.

This recommendation follows the recurring marketplace/social presence and the local-pack results; no competitor or Al Shamikh review profiles were directly audited here.

## Priority 5 — Measure and iterate

- Establish a baseline per route and query group after confirming public URLs.
- Review Search Console query/page data and lead quality after publishing approved changes; compare city-specific and sector-specific performance.
- Re-run the same desktop SERPs with the same Saudi location/language settings at a later date to assess movement. Treat rank changes as snapshots, not guaranteed outcomes.
- Do not set volume or difficulty targets from this dataset: TalorData responses supplied neither metric.

## Remaining launch work

- Set `NEXT_PUBLIC_SITE_URL` to the client-owned HTTPS domain in the production build environment before `next build`. Preview/development deployments remain blocked from indexing.
- Verify service-area, delivery, installation and product claims with the client before launch.
- Replace illustrative gallery images with genuine client photographs and approved case details before presenting them as completed projects.
- Configure Search Console and analytics after domain ownership is established. Consider a Google Business Profile only after verifying the real profile and service-area details.
- Decide whether English-language leads justify a separate English warehouse page; the two English queries in this sample are not evidence of demand volume.

## Evidence

- Raw organic/map results and per-query Google source URLs: [serp-results.csv](serp-results.csv).
- Competitor frequency and direct page-inspection notes: [competitor-analysis.md](competitor-analysis.md).
- Route/query recommendations: [keyword-map.csv](keyword-map.csv).
- Opportunity evidence and limitations: [content-gaps.md](content-gaps.md).
