# On-page and technical SEO audit

**Basis:** Read-only inspection of current Next.js source and built static output in out/. This is a local build, not an independent live Pages crawl.

## Rendered page inventory

All public commercial routes have distinct title/description, one H1, Arabic RTL document shell and crawlable site navigation. The shared navigation/footer exposes route links. Image counts/empty alt counts are from the generated HTML; decorative empty alts may be correct and should not be changed mechanically.

| URL | Title | H1 | Intent / primary term | Rendered images (empty alt) |
|---|---|---|---|---:|
| / | الشامخ للرفوف والديكورات | رفوف مستودعات ومتاجر في جدة والرياض | حلول متكاملة للرفوف والتخزين والديكورات | Brand/general; shelving in two cities | 14 (0) |
| /warehouse-racking | رفوف مستودعات في جدة والرياض | الشامخ للرفوف والديكورات | رفوف المستودعات وحلول التخزين الصناعي | Warehouse system selection | 12 (0) |
| /retail-shelving | رفوف المحلات والسوبر ماركت في جدة والرياض | الشامخ | رفوف المحلات والسوبر ماركت | Retail shelving and sectors | 13 (0) |
| /jeddah | رفوف مستودعات ومحلات في جدة | الشامخ للرفوف والديكورات | حلول الرفوف والتخزين في جدة | Local provider and city service | 14 (1) |
| /riyadh | رفوف مستودعات ومحلات في الرياض | الشامخ للرفوف والديكورات | حلول الرفوف والتخزين في الرياض | Local provider and city service | 14 (3) |
| /solutions | حلول الرفوف والتخزين للمستودعات والمتاجر | الشامخ | حلول الرفوف والتخزين لكل مساحة | Compare solution types | 18 (0) |
| /sectors | حلول رفوف للمستودعات والمتاجر والصيدليات | الشامخ | حلول مصممة لمختلف القطاعات | Sector discovery | 9 (0) |
| /projects | نماذج حلول رفوف المستودعات والمتاجر | الشامخ | حلول للمستودعات والمتاجر | Evaluate visual proof | 21 (5) |
| /about | من نحن | الشامخ للرفوف والديكورات | حلول تخزين وعرض تبدأ من فهم المكان | Company identity and trust | 11 (5) |
| /contact | تواصل مع الشامخ للرفوف والديكورات | جدة والرياض | لنبدأ بتجهيز مساحتك | Inquiry/contact | 2 (0) |
| /privacy | سياسة الخصوصية | الشامخ | سياسة الخصوصية | Legal; noindex | 2 (0) |
| /terms | شروط الاستخدام | الشامخ | شروط الاستخدام | Legal; noindex | 2 (0) |

Descriptions are unique and visible in source/HTML; see src/lib/data.ts for their full text. Exact titles/H1s above are normalized from generated HTML.

## Implementation inspected

- src/app/layout.tsx: Arabic lang, RTL, shared header/footer and WhatsApp; root metadata and Organization/WebSite graph only when indexing enabled.
- src/lib/data.ts and route metadata in src/app/[slug]/page.tsx: page-specific titles/descriptions; legal routes excluded from indexing.
- src/lib/seo.ts: indexing requires production build and a valid HTTPS NEXT_PUBLIC_SITE_URL; localhost, pages.dev and workers.dev are rejected. Cloudflare non-main branches remain preview/noindex.
- src/app/robots.ts: block all crawlers while indexing is disabled; allow and publish sitemap when valid production indexing is enabled.
- src/app/sitemap.ts: empty while not indexable; includes 10 commercial routes only when enabled, excludes legal pages.
- Canonicals, Open Graph URLs and JSON-LD derive from the centralized configured origin.
- JSON-LD, when enabled: one Organization/WebSite graph, plus BreadcrumbList and Service on relevant pages. No LocalBusiness address/reviews or FAQPage markup.
- src/app/[slug]/page.tsx has finite generateStaticParams for known slugs and dynamicParams=false; unknown slug calls notFound().
- Current generated HTML: public pages noindex; no canonicals and no JSON-LD; robots disallows all and sitemap is empty. This is correct for pages.dev prelaunch.
- Current output contains ten commercial routes and two legal routes. A live-host HTTP 404 response was not tested in this audit; test unknown paths after deployment.
- Metadata titles and descriptions are verified; links were found to every site route from shared shell. Exact contextual body link density was not independently measured.
- Production-configured canonical/JSON-LD/sitemap behavior was not retested in this phase. Existing implementation report documents an earlier reserved test-host check; do not treat that as real domain validation.

## Recommendations

1. Keep the current noindex/canonical gate until an owned domain is selected. Never set pages.dev as the production origin.
2. Add useful, verified detail and internal links on warehouse, retail and city pages only after client review of service scope.
3. Make city pages distinctive with actual availability/process and genuine local work proof; no branch/address claims.
4. Replace illustrative gallery imagery with authorized real jobs only when supplied. Keep current illustrative wording meanwhile.
5. Review the five empty-alt About/Projects images one by one; retain empty alt for decorative images, add concise Arabic alt only when meaningful.
6. Verify the actual Pages host returns 404 for an unknown route after deployment.
7. Keep conversions honest: an outbound WhatsApp click is not proof a message was sent or qualified.
## Exact titles and descriptions by route

The following are the current values in src/lib/data.ts and generated static HTML; legal page metadata is defined in src/app/[slug]/page.tsx.

| Route | Exact title | Exact meta description |
|---|---|---|
| / | الشامخ للرفوف والديكورات | رفوف مستودعات ومتاجر في جدة والرياض | رفوف مستودعات وسوبر ماركت وبقالات وصيدليات وتجهيز محلات في جدة والرياض. ناقش احتياج مشروعك وخيارات التوريد والتركيب مع الشامخ. |
| /warehouse-racking | رفوف مستودعات في جدة والرياض | الشامخ للرفوف والديكورات | حلول رفوف للمستودعات تشمل التخزين الثقيل والمتوسط والخفيف والأنظمة متعددة المستويات. يُختار التوزيع وفق مساحة الموقع والبضائع وطريقة المناولة. |
| /retail-shelving | رفوف المحلات والسوبر ماركت في جدة والرياض | الشامخ | رفوف عرض للمحلات والسوبر ماركت والبقالات والصيدليات، مع خيارات جدارية ووسطية وتوزيع يراعي المنتجات ومساحة المتجر. |
| /jeddah | رفوف مستودعات ومحلات في جدة | الشامخ للرفوف والديكورات | حلول رفوف مستودعات ومتاجر في جدة، تشمل السوبر ماركت والبقالات والصيدليات. يُناقش النظام والتوزيع وفق مساحة المشروع وطبيعة المنتجات. |
| /riyadh | رفوف مستودعات ومحلات في الرياض | الشامخ للرفوف والديكورات | حلول رفوف مستودعات ومتاجر في الرياض، تشمل السوبر ماركت والبقالات والصيدليات وتجهيز المحلات. يُحدد التوزيع حسب النشاط والمساحة. |
| /solutions | حلول الرفوف والتخزين للمستودعات والمتاجر | الشامخ | تعرّف على حلول الرفوف والتخزين للمستودعات والمتاجر والصيدليات والمنازل، واختر النظام وفق مساحة الموقع وطبيعة الاستخدام. |
| /sectors | حلول رفوف للمستودعات والمتاجر والصيدليات | الشامخ | استكشف حلول الرفوف للمستودعات والسوبر ماركت والبقالات والصيدليات والمحلات والمنازل، مع روابط مباشرة لكل نوع من التجهيز. |
| /projects | نماذج حلول رفوف المستودعات والمتاجر | الشامخ | استكشف صوراً توضيحية لأنواع رفوف المستودعات والمتاجر والصيدليات وأنظمة التخزين، ثم تواصل لمناقشة احتياج مشروعك. |
| /about | من نحن | الشامخ للرفوف والديكورات | تعرّف على حلول الشامخ للرفوف والتخزين وتجهيز المستودعات والمتاجر والصيدليات، وكيفية بدء مناقشة متطلبات مشروعك. |
| /contact | تواصل مع الشامخ للرفوف والديكورات | جدة والرياض | تواصل مع الشامخ للاستفسار عن رفوف المستودعات والسوبر ماركت والبقالات والصيدليات وتجهيز المحلات في جدة والرياض عبر واتساب. |
| /privacy | سياسة الخصوصية | الشامخ | سياسة استخدام بيانات نموذج التواصل والانتقال إلى واتساب في موقع الشامخ. |
| /terms | شروط الاستخدام | الشامخ | شروط استخدام موقع الشامخ ومعلومات حلول الرفوف والتخزين. |

The rendered local prelaunch snapshot had no canonical tags or JSON-LD, and robots were noindex. Canonical/structured-data presence is conditional on production + valid official origin; do not infer a live public-domain state from this local output.
