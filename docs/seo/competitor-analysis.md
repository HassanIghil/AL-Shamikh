# TalorData Google SERP competitor analysis

## Collection and scope

- Collected **14 separate Google searches** with TalorData on **2026-10-09 04:46–04:47** (timestamps as returned by the provider; timezone was not supplied).
- Engine: Google; country: Saudi Arabia (`gl=sa`); language: Arabic for 12 queries and English for 2; location targeting: Jeddah or Riyadh, Saudi Arabia; device: desktop; requested `num=10`.
- Each returned nested payload reported `data.code=200` and `search_metadata.status=Success`.
- The tool returned **116 organic result rows** across the 14 queries (4–9 per query), and **36 local/map entries** across 12 queries. Some queries returned fewer than the requested 10 organic results; this report preserves the actual result set and does not fill missing positions.
- No paid-ad items were present in the returned payloads. This means none were returned by this collection; it is not a claim that ads never appear for these searches.
- Result records, snippets, page URLs, the actual Google query URL, returned timestamp, and result type are in [serp-results.csv](serp-results.csv). No search volume or keyword difficulty data was requested or inferred.

## Frequent domains

Counts are exact appearances in the returned organic rows; “queries” counts distinct queries (maximum 14); “top 3” counts result positions 1–3. Marketplace and social profiles are included in frequency but should not be mistaken for direct manufacturer competitors.

| Domain | Organic appearances | Queries | Top-3 appearances |
|---|---:|---:|---:|
| haraj.com.sa | 13 | 11 | 9 |
| instagram.com | 10 | 9 | 2 |
| rfcosa.com | 8 | 8 | 6 |
| facebook.com | 7 | 7 | 3 |
| arfaf-ksa.com | 6 | 6 | 1 |
| sadr.com.sa | 5 | 5 | 3 |
| krfof.com | 5 | 4 | 3 |
| lmst-areej.sa | 5 | 4 | 2 |
| tiktok.com | 4 | 4 | 0 |
| metalegypt.org | 4 | 4 | 0 |
| topracksa.com | 4 | 3 | 2 |
| jst.sa | 3 | 3 | 2 |
| tamraf.com | 3 | 3 | 0 |
| dinagrp.com | 3 | 3 | 0 |
| ksa-decor.com | 3 | 3 | 1 |
| rfufco.com.sa | 2 | 2 | 0 |
| ibdaa.sa | 2 | 2 | 0 |
| haraj.cc | 2 | 2 | 1 |
| alyarmuk.net | 2 | 2 | 2 |
| pinterest.com | 2 | 2 | 0 |
| sahelha.app | 2 | 2 | 0 |
| alesayistorage.com | 2 | 2 | 2 |

Haraj (`haraj.com.sa`, plus separate `haraj.cc`) and social platforms recur often, indicating that marketplace and social pages compete for visibility alongside supplier sites. Among identifiable supplier/product domains, RFCO (`rfcosa.com`) appears across all eight of its returned queries and has six top-three placements; Sadr (`sadr.com.sa`) appears in five queries with three top-three placements; Krfof (`krfof.com`) appears in four queries with three top-three placements. Alesayi Storage (`alesayistorage.com`) ranked #1 in both English warehouse-racking searches. These are visibility observations in this sample, not market-share estimates.

## Competitor and intent patterns

- **Warehouse / industrial storage:** Sadr, RFCO, Krfof, Arfaf, JST, Top Rack, and Alesayi Storage appear. English-language results include Alesayi, Sadr, Top Rack, and other technical storage vendors. Results span product catalogs, specialist pages, and warehouse suppliers.
- **Supermarket / grocery:** RFCO and Sadr show for supermarket shelving; Haraj and social profiles feature in grocery searches. Riyadh grocery results were especially marketplace/social-heavy in this sample.
- **Pharmacy:** Riyadh results include Alyarmuk (`alyarmuk.net`), RufufT5zen, Tamraf, and Dina; Jeddah’s returned results include marketplace/social and specialist pages. No map pack was returned for either pharmacy query.
- **Commercial shop fit-out:** LMST Areej appears in Jeddah and Riyadh; Riyadh also returned KSA Decor and other decor/fit-out suppliers.
- **Local pack:** 3 map entries were returned for 12/14 queries, with none returned for the pharmacy queries. Local-pack listings are stored separately as `map_local` rows and are not counted as organic placements.

## Direct page inspection

The following pages were opened for on-page inspection. These notes describe visible page content and structure, not an inference from their SERP snippets:

- [Sadr: رفوف مستودعات جدة](https://www.sadr.com.sa/ar/blog/%D8%B1%D9%81%D9%88%D9%81-%D9%85%D8%B3%D8%AA%D9%88%D8%AF%D8%B9%D8%A7%D8%AA-%D8%AC%D8%AF%D9%87) has a focused H1 and sections on warehouse-rack importance and types, installation, quality, choosing a system, city comparisons, and smart-storage developments. The inspected article linked to related storage/company/navigation pages. No FAQ block was visible in the article body inspected.
- [RFCO storage category](https://rfcosa.com/ar/%D8%B1%D9%81%D9%88%D9%81-%D8%AA%D8%AE%D8%B2%D9%8A%D9%86-%D9%88%D8%AA%D9%86%D8%B8%D9%8A%D9%85/c201713318) presents a broad product/category catalog with shelving, display, accessories, grocery/supermarket, warehouse, and shop-equipment departments, plus reviews and related-category/company links. No FAQ block was visible in the inspected category view.
- [LMST Areej shop-fit-out category](https://lmst-areej.sa/ar/%D8%AF%D9%8A%D9%83%D9%88%D8%B1-%D8%AA%D8%AC%D9%87%D9%8A%D8%B2-%D9%85%D8%AD%D9%84%D8%A7%D8%AA-%D8%AA%D8%AC%D8%A7%D8%B1%D9%8A%D8%A9/c1563307317) shows a category heading, product/review content, business description, WhatsApp and footer links. The page response was JS-limited, so the inspection may not expose its full rendered content.
- [Alesayi Storage](https://alesayistorage.com/) is an English corporate site with navigation across selective, drive-in, flow, mobile pallet, multi-tier, cantilever, shelving, mezzanine, sprinkler and accessories; it also links to projects, services, company information and contact. No FAQ heading was visible on the inspected homepage.

These page inspections are samples, not an exhaustive competitor-site audit. SERP snippets are retained as SERP evidence only and are not treated as full page content.

## Relevance to Al Shamikh and limits

The existing local project contains location hubs at `/jeddah` and `/riyadh`, a warehouse specialist page at `/warehouse-racking`, retail shelving at `/retail-shelving`, and sector coverage at `/sectors`. The observed query intents can map to those routes (see [keyword-map.csv](keyword-map.csv)). The implementation now omits canonicals and sitemap URLs until the real HTTPS domain is configured through `NEXT_PUBLIC_SITE_URL`; it no longer falls back to localhost. Because the public domain could not be identified from this checkout, the SERPs do **not** establish Al Shamikh’s own ranking, presence, or absence.

## Data sources

- Raw position-level results and per-query Google source URLs: [serp-results.csv](serp-results.csv).
- Competitor pages inspected directly: Sadr, RFCO, LMST Areej, and Alesayi links above.
- The SERP dataset reflects one desktop collection per query on the timestamps above; location, language, device, personalization, and result volatility can affect rankings.

## Phase 23 fresh SERP extension

Ten additional Arabic Google searches were checked for spelling and intent variants, with 82 organic rows returned (counts were below the requested ten on several queries). The full returned organic URLs, titles, snippets and positions are in [saudi-serp-supplement.csv](saudi-serp-supplement.csv). The structured payloads with an ads array returned no paid-ad entries; the two calibration responses did not expose an ads field. The supplemental file records organic rows only, not a complete local-pack export.

| Query | Location | Returned organic | Topical interpretation |
|---|---|---:|---|
| أرفف مستودعات جدة | Jeddah | 8 | Mostly warehouse rentals, warehouse management and government policy; weak shelf-provider relevance. |
| رفوف مخازن الرياض | Riyadh | 8 | Consumer/home storage and commercial shelves mixed; rufufna.sa, RFCO and Baytonia appeared in the first three. |
| تجهيز مستودعات جدة | Jeddah | 9 | City/government/news material; weak commercial shelving intent. |
| تجهيز مستودعات الرياض | Riyadh | 7 | Mostly unrelated city/news/government results. |
| توريد وتركيب رفوف مستودعات جدة | Jeddah | 9 | Search drifted to unrelated installation/service categories. |
| توريد وتركيب رفوف مستودعات الرياض | Riyadh | 9 | Search drifted to unrelated installation/service categories. |
| رفوف صناعية جدة | Jeddah | 9 | Ambiguous industrial wording; results included unrelated industry/auto topics. |
| رفوف صناعية الرياض | Riyadh | 9 | Shelf results existed but skewed consumer/home storage. |
| رفوف حديد جدة | Jeddah | 8 | Mixed household and retail storage catalogues; rufufna.sa, JST and RFCO appeared early. |
| رفوف حديد الرياض | Riyadh | 6 | Mostly unrelated results in this snapshot. |

These noisy variations should not be promoted as a search opportunity solely because they sound commercial. Keep the validated city-qualified specialist phrases and review with GSC after launch.

## Competitor patterns across the original 40-query panel

Counts in al_shamikh_competitor_frequency.csv are from the older 40-query panel (39 successful); they are distinct-query appearances, not market share. Recurrent supplier domains include RFCO (22 queries / 16 top-three appearances), Sadr (16 / 10), Krfof (15 / 14), Arfaf (13 / 3), Top Rack (10 / 9), RFUFCO (9 / 5), JST (8 / 3), and Tamraf (7 / 0). Marketplace/social domains such as Haraj and Instagram/Facebook also recur, especially on retail searches. The existing competitor-analysis.md contains direct page inspection notes and source URLs; SERP snippets were not treated as full pages.

Intent distinction: city warehouse terms and supplier/installation terms call for a credible local service page; heavy/pallet terms need accurate system-specific details; retail searches span product catalogs, shop fit-out suppliers, and social/marketplace results. The Riyadh pharmacy and Jeddah pharmacy panels differed in which specialist/social/marketplace domains appeared. This small panel does not establish a stable market difference or Maps eligibility.
