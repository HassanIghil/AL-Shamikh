# Phase 18: Mobile LCP optimization

## Scope and measurement

The production homepage was audited before and after the Phase 18 image changes with Lighthouse 13.5.0 on Chrome 154, using simulated mobile and desktop profiles. The audit pairs were run concurrently, so CPU contention and lab variance affect the scores and blocking-time metrics. These results are a directional comparison, not a field-data claim.

The mobile LCP element in both runs was the warehouse hero image (`main.homepage > section.home-hero > div.home-hero-photo > img`; after the responsive change, the selector includes `picture > img`). The page is statically exported and retains `noindex, nofollow, noarchive` before launch.

| Mobile metric | Before | After |
| --- | ---: | ---: |
| Lighthouse performance | 57 | 63 |
| LCP | 4.3 s | 4.4 s |
| FCP | 1.7 s | 1.6 s |
| CLS | 0.000 | 0.011 |
| TBT | 1,880 ms | 870 ms |

LCP did not improve in this paired run. Its breakdown did show the image transfer segment falling from 392 ms to 217 ms, with resource-load delay at 41 ms before and 60 ms after, and element-render delay falling from 916 ms to 776 ms. The corresponding full LCP values are noisy and remain well above the 2.5 s goal.

The mobile LCP request was directly discoverable and eager in both runs. The `fetchpriority="high"` hint changed from absent to present. Request sizes changed as follows:

| Asset | Before | After | Change |
| --- | ---: | ---: | ---: |
| Mobile hero | 373,622 B | 164,452 B | −56% |
| Logo | 263,687 B | 43,534 B | −84% |
| Jeddah/Riyadh banner | 287,294 B | 117,748 B | −59% |

The mobile page selected `/photos/home-hero-1280.webp`; desktop continued to select the original hero. The banner remained lazy-loaded. All three updated live assets returned HTTP 200 with `image/webp` content type.

| Desktop metric | Before | After |
| --- | ---: | ---: |
| Lighthouse performance | 93 | 92 |
| LCP | 1.1 s | 1.3 s |
| CLS | 0.092 | 0.091 |
| TBT | 110 ms | 70 ms |

The desktop hero asset was unchanged. The small desktop score and timing differences are within the limitations of this lab comparison; no material design or layout shift was introduced.

## Remaining bottleneck

After the image change, Lighthouse still reported 776 ms of LCP element-render delay and 870 ms of TBT. It also reported long tasks in Next.js client chunks, including a 640 ms task around 3.8 s after navigation. CSS transfer and self-hosted font diagnostics did not identify a blocking issue. The image download was reduced, but the mobile LCP goal was not reached; further work should investigate client-side main-thread work using a representative trace before changing application behavior.

## Validation

- `npm run typecheck`: passed.
- `npm run build`: passed after stopping local preview servers that had locked the `out/` directory.
- Static export contains the responsive hero preloads, optimized assets, Arabic `lang`/RTL document attributes, and prelaunch noindex metadata.
- Production Pages serves the new mobile hero, logo, and banner assets successfully.
- No claim of a 2.5 s LCP or a field performance improvement is made.
