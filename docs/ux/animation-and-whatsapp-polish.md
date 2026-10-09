# UX polish: WhatsApp icons and scroll reveals

## WhatsApp icon coverage

Added one small inline SVG component, `src/components/WhatsAppIcon.tsx`, using the recognizable WhatsApp speech-bubble/handset brand silhouette. It inherits the existing control color, adds no external font or dependency, and is hidden from assistive technology because the surrounding links and buttons already have visible text or accessible labels.

The icon now appears in:

- Shared `WhatsAppButton` CTAs and the footer contact link (`src/components/UI.tsx`). This covers the warehouse, retail shelving, Jeddah, Riyadh, About, Contact, and shared final CTA buttons.
- Desktop and mobile header buttons (`src/components/SiteHeader.tsx`).
- Homepage desktop, mobile, and final CTA buttons (`src/app/page.tsx`).
- Floating WhatsApp control (`src/app/layout.tsx`).
- Contact form submit and direct-contact panel (`src/components/ContactForm.tsx`, `src/components/ContactView.tsx`).
- Sector CTAs (`src/components/SectorsView.tsx`).
- Solutions hero, solution inquiry links, and final CTA (`src/components/SolutionsView.tsx`).
- Project gallery image overlays and featured CTA (`src/components/ProjectFilter.tsx`, `src/components/ProjectsView.tsx`).

Existing phone number, WhatsApp destinations, prefilled messages, button dimensions, and surrounding layout are unchanged. Dark green WhatsApp buttons use white brand marks. The decorative mark in the contact panel keeps its existing gold color.

## Scroll reveal system

Added `src/components/ScrollReveal.tsx` as a small client-side enhancement mounted from the root layout. It uses `IntersectionObserver` to reveal section headings, solution/sector/project cards, gallery items, process steps, feature groups, FAQ details, and final CTA sections once. A small `MutationObserver` covers project cards replaced by the gallery filter.

The animation uses opacity and a 16px vertical transform with a 520ms easing transition. Sibling cards stagger by 75ms, capped at 300ms. Images inside a target are decoded before reveal where available, with a 1.2-second safety limit. A one-shot `scrollend` handler catches targets passed by a fast scroll; there is no continuous scroll listener. The homepage hero image and hero text are not part of the reveal set.

## Accessibility and static content

- Reveal classes are added only after client JavaScript runs; the generated HTML has no hidden reveal state.
- Reduced-motion users receive immediate visibility, no reveal transition, and non-smooth document scrolling.
- If IntersectionObserver or `scrollend` support is unavailable, the observer is not initialized and content stays visible.
- Keyboard focus within a pending card reveals it. Text remains in the DOM for browser find-in-page; scrolling to it triggers the observer.
- Removed the root `src/app/loading.tsx` fallback. With that fallback, the exported route’s initial `<main>` contained only “جارٍ تحميل الصفحة...” until JavaScript hydrated. Without it, real page copy is rendered directly in each static HTML route. This improves the requested no-JavaScript visibility without changing page design.

## Performance considerations

No animation framework, external icon resource, font, or dependency was added. The observer runs only for elements on the current page, disconnects on route changes, and observes newly inserted gallery cards only when the gallery mutates. Transitions do not animate size, spacing, position, or blur properties, and the implementation does not use `will-change`.

No Lighthouse or PageSpeed before/after comparison was available in the local environment, so no performance improvement is claimed. The local browser measurement recorded a maximum CLS of 0.0224 in the homepage run; this is not a baseline comparison. Reveal transitions only change opacity and transform, which do not change document layout dimensions.

## Validation

- `npm run typecheck`: passed.
- `npm run build`: passed; Next.js generated the Cloudflare Pages static export with 16 routes, including the finite dynamic routes.
- Browser QA covered all 12 routes at 1440px desktop and 390px mobile. No horizontal overflow, broken image elements, console errors, or remaining generic Lucide message-circle/message-square SVGs were found. A total of 196 rendered WhatsApp links across the route matrix contained the branded icon, had an accessible name, and retained the existing phone number.
- Fast-scroll stress checks on mobile About and Jeddah completed with zero pending reveal targets. Lazy image requests remain deferred for images skipped offscreen during the stress scroll; visible images loaded without broken-image errors.
- Reduced-motion mode produced no pending reveal elements and retained page text.
- JavaScript-disabled static export showed the full Sectors page content in the initial HTML (over 2,700 characters of main text) with no reveal-hidden classes.
- The 404 export remains generated at `out/404.html`; robots, sitemap, canonical metadata, Cloudflare Pages configuration, and SEO content were not changed.
- Lighthouse was unavailable; no Lighthouse score or performance gain is claimed.
