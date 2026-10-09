# Saudi keyword and SERP research methodology

**Research date:** 9 October 2026 local workspace date; provider metadata on new searches says 10 October 2026 (time zone not provided).
**Markets:** Jeddah and Riyadh; a few Saudi-wide queries in the older set.
**Languages/device:** Arabic and limited English; desktop.
**Tool:** TalorData SERP MCP, Google engine, gl=sa, city location where specified, hl=ar or en, google.com.sa, requested num=10.

## Dataset

- Existing panel: 40 attempted queries, 39 successful, one failed, 291 manually retained organic-position observations and 61 distinct domains. The failure is missing evidence, not proof of no competitors.
- Existing detailed 14-query dataset: 116 organic rows and 36 local/map entries, 4–9 organic results returned per query. No ad items were present in those responses; this does not mean ads never appear.
- Fresh spelling/intent extension: 10 Google searches, 82 returned organic rows. Titles, snippets, URLs, locations, positions and provider timestamps where available are in saudi-serp-supplement.csv. The calibration responses omit timestamp metadata, which is recorded as absent.
- Raw sources: al_shamikh_keyword_map.csv, al_shamikh_serp_observations.csv, al_shamikh_competitor_frequency.csv, serp-results.csv and al_shamikh_deep_seo_report.md.
- SERPs are date/location/device snapshots. Domain frequency is only within this curated overlapping panel, not Saudi market share or organic traffic.

## Metrics we could not validate

Monthly volume, organic keyword difficulty, CPC, Google Trends series, autocomplete, People Also Ask, backlink metrics, competitor traffic, and client Search Console metrics are all unknown. No Keyword Planner output or Search Console access was connected. TalorData Google Trends calls returned metadata but no trend series/related-query values, so no trend is inferred. No current Al Shamikh ranking is claimed.

## Priority score

priority_score is a relative planning score, not a ranking, volume or forecast. Formula based on the requested weights:

score = round((commercial intent × 35 + topical query evidence proxy × 25 + organic feasibility × 25 + business/geographic fit × 15) / 5)

Each factor is an analyst ordinal rating from 1 to 5. The topical evidence proxy summarizes relevant results and coverage in this sample, not demand. Feasibility reflects the observed result mix and specialist competition, not a keyword difficulty tool. Component ratings are in each database row. Re-score after Keyword Planner and Search Console data become available.

## Reproduction and limits

Use the exact recorded query and country/language/location/device settings; retain every result actually returned, do not fill to ten, keep map and ads separate, and preserve provider timestamps. Repeat the same panel periodically. Google positions can vary. Snippets are SERP evidence, not complete competitor pages. Direct page inspections are separately identified in competitor-analysis.md.