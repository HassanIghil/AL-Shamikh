# Scroll and animation stability

Date: 2026-10-09
Project: Al Shamikh

## Findings and fixes

### Immediate scrolling and reveal behavior

The previous reveal handler waited for every nested image's `decode()` promise before revealing a card, with a 1.2 second failsafe. That tied visual visibility to image decoding and allowed blank-looking cards during slow image delivery. The reveal setup also recalculated each target's descendant selector set to determine sibling delays, doing avoidable repeated DOM work.

The handler now reveals a target as soon as its observer fires. It never waits on image decode, image load, or a timeout. The sibling stagger is capped at 120 ms, reveal transitions last 420 ms, and fast-scroll catch-up still uses the one-shot `scrollend` event. The observer is cleaned up on route changes. Content already in the initial viewport is not hidden. Without JavaScript, without `IntersectionObserver`, or with reduced motion enabled, the static HTML remains visible.

No wheel/touch listeners, `preventDefault`, scroll locks, or scroll interpolation were added. The only `preventDefault` in the application remains the contact form's submit handler. Existing horizontal snap applies only to the mobile gallery's x-axis; document wheel and touch scrolling remain native.

### Banner motion

The banner had no competing transform animation. Its existing CSS motion was simply very subtle (6 px over 4 seconds). It now uses a compositor-friendly `translate3d` keyframe, moving 8 px over 3.6 seconds with the requested ease-in-out alternating loop. A single `will-change: transform` hint is limited to this banner and removed under reduced motion. Its image, size, position, crop, shadow, and z-order are unchanged.

### Gallery autoplay

The carousel did advance when visible. A production browser check left it offscreen and correctly observed no movement; autoplay is intentionally paused outside the viewport. Once brought into view, it progressed through every slide and looped. The timing was 4.5 seconds in the prior implementation; it is now 4 seconds. It remains one cleaned-up timeout at a time and is reset when the active slide or an eligibility condition changes.

Focus pause is tracked with document-level `focusin`/`focusout` listeners for the gallery and its pagination controls. This covers the gallery and controls as one focus region; listeners are removed on unmount. Existing hover, touch, viewport, hidden-tab, and reduced-motion gates are retained. Desktop remains the existing static mosaic; the responsive mobile gallery is the autoplay carousel.

### Smooth scrolling

The site already had global `html { scroll-behavior: smooth; }` and switches to `auto` under `prefers-reduced-motion: reduce`. This was verified and retained. This CSS only affects anchor/programmatic scrolling; it does not intercept or smooth native wheel/touch input.

## Validation

All browser checks below used the actual Next.js production static export served locally, not the development server.

- `npm run typecheck`: passed.
- `npm run build`: passed; Next.js generated all 17 static pages including the parameterized service pages, 404, robots, and sitemap outputs.
- At 390 × 844, the page had no horizontal overflow. On a cold cache with JavaScript disabled and simulated slow 4G, the Jeddah page contained all 13 sections, had no reveal-hidden elements, and moved to `scrollY=800` after a native wheel input.
- On a cold slow-4G load with JavaScript enabled, wheel inputs were dispatched as soon as the HTML response arrived. The page reached `scrollY=3042` of a 4675 px document; after load there were zero pending/hidden reveals, zero completed broken images, and zero runtime exceptions.
- Fast scroll to the bottom cleared all pending reveal targets; no content remained hidden.
- At 390 px, the carousel advanced through all six slides and wrapped to the first slide during a 32-second visible run. Pagination remained synchronized.
- Direct dot navigation selected the requested slide. A mobile touch swipe changed the active slide.
- Hover pause held the current slide for the observation window and autoplay resumed after pointer exit.
- A clean keyboard-focus test held the selected slide while a pagination button remained focused, then resumed after focus left.
- A real background tab test (activating a second browser tab) held the current slide while hidden and resumed after returning.
- With reduced motion enabled, the banner animation was `none`, global scroll behavior was `auto`, pending reveal styles stayed visible, and the gallery remained on its initial slide after six seconds.
- At 1440 × 900, the banner's rendered y-position moved 4.4 px over a 1.4 second sample, consistent with the 8 px alternating animation. At desktop and mobile, the banner and WhatsApp control did not overlap; neither viewport had horizontal overflow.
- Static markup and CSS provide the page content before hydration. Cloudflare Pages static-export configuration was not changed.

No new Lighthouse score is claimed. These checks establish scroll, visibility, and interaction behavior; they are not a substitute for a fresh matched Lighthouse audit.

## Changed files

- `src/components/ScrollReveal.tsx`
- `src/components/JeddahGallery.tsx`
- `src/app/globals.css`
- `src/app/home.css`
- `docs/ux/scroll-and-animation-stability.md`
