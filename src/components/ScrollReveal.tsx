'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const revealSelector = [
  'main section:not([class*="hero"]) h2',
  'main section:not([class*="hero"]) article',
  'main section:not([class*="hero"]) details',
  'main section:not([class*="hero"]) [class*="-card"]',
  'main section:not([class*="hero"]) [class*="-tile"]',
  'main section:not([class*="hero"]) [class*="-step"]',
  'main section:not([class*="hero"]) [class*="-factor"]',
  'main section:not([class*="hero"]) [class*="-col"]',
  'main section:not([class*="hero"]) [class*="-item"]',
  'main section:not([class*="hero"]) [class*="-solution-link"]',
  'main section[class*="final-cta"], main section[class*="cta-band"]',
].join(',');

const revealCardToken = /-(?:card|tile|step|factor|col|item)(?:-\d+)?$/;

function isRevealTarget(element: HTMLElement) {
  if (element.matches('h2, article, details, section[class*="final-cta"], section[class*="cta-band"]')) return true;
  return Array.from(element.classList).some((className) => revealCardToken.test(className));
}

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (
      !('IntersectionObserver' in window) ||
      !('onscrollend' in document) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const root = document.querySelector('main');
    if (!root) return;

    const observed = new Set<Element>();
    const revealing = new Set<HTMLElement>();
    const reveal = (element: HTMLElement) => {
      if (revealing.has(element) || !element.classList.contains('scroll-reveal-pending')) return;
      revealing.add(element);
      observer.unobserve(element);

      const images = Array.from(element.querySelectorAll('img'));
      const imagesReady = Promise.all(images.map((image) => image.decode().catch(() => undefined)));
      let fallbackTimer: number | undefined;
      const revealFailsafe = new Promise<void>((resolve) => {
        fallbackTimer = window.setTimeout(resolve, 1200);
      });
      void Promise.race([imagesReady, revealFailsafe]).then(() => {
        if (fallbackTimer !== undefined) window.clearTimeout(fallbackTimer);
        if (element.isConnected) {
          element.classList.add('scroll-revealed');
          element.classList.remove('scroll-reveal-pending');
        }
        revealing.delete(element);
      });
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target as HTMLElement);
        });
      },
      { rootMargin: '320px 0px 320px 0px', threshold: 0 },
    );

    // A completed fast scroll can jump past a short card without an intersection.
    // `scrollend` fires once per gesture, unlike a continuously running scroll handler.
    const revealPassedTargets = () => {
      observed.forEach((target) => {
        const element = target as HTMLElement;
        if (element.getBoundingClientRect().bottom < 0) reveal(element);
      });
    };

    const prepare = (scope: ParentNode) => {
      scope.querySelectorAll<HTMLElement>(revealSelector).forEach((element) => {
        if (observed.has(element) || !isRevealTarget(element)) return;
        observed.add(element);

        // Keep everything already visible at load fully visible and unanimated.
        if (element.getBoundingClientRect().top <= window.innerHeight) return;

        const siblings = Array.from(element.parentElement?.querySelectorAll<HTMLElement>(revealSelector) ?? [])
          .filter((sibling) => sibling.parentElement === element.parentElement);
        const siblingIndex = siblings.indexOf(element);
        element.style.setProperty('--reveal-delay', `${Math.min(siblingIndex * 75, 300)}ms`);
        element.classList.add('scroll-reveal-pending');
        observer.observe(element);
      });
    };

    prepare(root);

    // Project filters can replace gallery cards after hydration; observe new cards too.
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            prepare(node);
            prepare(node.parentElement ?? node);
          }
        });
      });
    });
    mutations.observe(root, { childList: true, subtree: true });
    document.addEventListener('scrollend', revealPassedTargets, { passive: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
      document.removeEventListener('scrollend', revealPassedTargets);
      observed.forEach((element) => {
        element.classList.remove('scroll-reveal-pending', 'scroll-revealed');
        (element as HTMLElement).style.removeProperty('--reveal-delay');
      });
      observed.clear();
    };
  }, [pathname]);

  return null;
}
