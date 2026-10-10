'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { Locale } from '@/lib/i18n/config';

export type JeddahGallerySlide = {
  image: string;
  alt: string;
  label: string;
  href: string;
};

type JeddahGalleryProps = { slides: JeddahGallerySlide[]; locale?: Locale };

export default function JeddahGallery({ slides, locale = 'ar' }: JeddahGalleryProps) {
  const english = locale === 'en';
  const galleryRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const resetTimeoutRef = useRef<number | null>(null);
  const resettingLoopRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobileCarousel, setIsMobileCarousel] = useState(false);

  const scrollToSlide = useCallback((index: number, smooth = true) => {
    const target = slideRefs.current[index];
    if (!target) return;
    target.scrollIntoView({
      behavior: smooth && !prefersReducedMotion ? 'smooth' : 'auto',
      block: 'nearest',
      inline: 'start',
    });
  }, [prefersReducedMotion]);

  useEffect(() => {
    const gallery = galleryRef.current;
    const pagination = gallery?.nextElementSibling;
    if (!gallery || !(pagination instanceof HTMLElement)) return;

    const containsGalleryFocus = (target: EventTarget | null) =>
      target instanceof Node && (gallery.contains(target) || pagination.contains(target));
    const handleFocusIn = (event: FocusEvent) => setHasFocus(containsGalleryFocus(event.target));
    const handleFocusOut = (event: FocusEvent) => setHasFocus(containsGalleryFocus(event.relatedTarget));

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    if (containsGalleryFocus(document.activeElement)) setHasFocus(true);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobile = window.matchMedia('(max-width: 720px)');
    const updateMotion = () => setPrefersReducedMotion(reducedMotion.matches);
    const updateLayout = () => setIsMobileCarousel(mobile.matches);
    const updateVisibility = () => setIsTabVisible(document.visibilityState === 'visible');

    updateMotion();
    updateLayout();
    updateVisibility();
    reducedMotion.addEventListener('change', updateMotion);
    mobile.addEventListener('change', updateLayout);
    document.addEventListener('visibilitychange', updateVisibility);

    return () => {
      reducedMotion.removeEventListener('change', updateMotion);
      mobile.removeEventListener('change', updateLayout);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery || !('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(gallery);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries.length === 0) return;
      const rootRect = gallery.getBoundingClientRect();
      const rootLeft = rootRect.left + gallery.clientLeft;
      const rootTop = rootRect.top + gallery.clientTop;
      const rootRight = rootLeft + gallery.clientWidth;
      const rootBottom = rootTop + gallery.clientHeight;
      const mostVisible = slideRefs.current
        .filter((slide): slide is HTMLAnchorElement => slide !== null)
        .map((slide) => {
          const rect = slide.getBoundingClientRect();
          const overlapWidth = Math.max(0, Math.min(rect.right, rootRight) - Math.max(rect.left, rootLeft));
          const overlapHeight = Math.max(0, Math.min(rect.bottom, rootBottom) - Math.max(rect.top, rootTop));
          const area = rect.width * rect.height;
          return { slide, ratio: area > 0 ? (overlapWidth * overlapHeight) / area : 0 };
        })
        .filter(({ ratio }) => ratio > 0)
        .sort((a, b) => b.ratio - a.ratio)[0];
      if (!mostVisible) return;

      if (mostVisible.slide.dataset.loopClone === 'true') {
        if (mostVisible.ratio < 0.85) return;
        setActiveIndex(0);
        if (!resettingLoopRef.current) {
          resettingLoopRef.current = true;
          resetTimeoutRef.current = window.setTimeout(() => {
            scrollToSlide(0, false);
            resettingLoopRef.current = false;
            resetTimeoutRef.current = null;
          }, 500);
        }
      } else {
        const index = Number(mostVisible.slide.dataset.slideIndex);
        if (!Number.isInteger(index) || index < 0 || index >= slides.length) return;
        setActiveIndex(index);
      }
    }, {
      root: gallery,
      threshold: [0.35, 0.55, 0.7, 0.85],
    });

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    return () => {
      observer.disconnect();
      if (resetTimeoutRef.current !== null) window.clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = null;
      resettingLoopRef.current = false;
    };
  }, [scrollToSlide, slides.length]);

  useEffect(() => {
    if (
      !isMobileCarousel || slides.length < 2 || !isInView || isHovered || isTouching || hasFocus ||
      !isTabVisible || prefersReducedMotion
    ) return;

    const timeout = window.setTimeout(() => {
      scrollToSlide(activeIndex === slides.length - 1 ? slides.length : activeIndex + 1);
    }, 4000);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, hasFocus, isHovered, isInView, isMobileCarousel, isTabVisible, isTouching, prefersReducedMotion, scrollToSlide, slides.length]);

  return (
    <>
      <div
        className="jeddah-project-grid"
        id="jeddah-project-grid"
        ref={galleryRef}
        role="region"
        aria-roledescription={english ? 'image gallery' : 'معرض صور'}
        aria-label={english ? 'Illustrative shelving and storage images' : 'صور توضيحية للرفوف والتخزين'}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsTouching(true)}
        onTouchEnd={() => setIsTouching(false)}
        onTouchCancel={() => setIsTouching(false)}
      >
        {slides.map((slide, index) => (
          <Link
            className="jeddah-project-tile"
            href={slide.href}
            key={slide.image}
            ref={(node) => { slideRefs.current[index] = node; }}
            data-slide-index={index}
            aria-roledescription={english ? 'slide' : 'شريحة'}
          >
            <Image src={slide.image} alt={slide.alt} fill sizes="(max-width: 700px) 75vw, 25vw" />
            <span>{slide.label}</span>
          </Link>
        ))}
        {slides.length > 1 && (
          <Link
            className="jeddah-project-tile jeddah-project-tile-loop-clone"
            href={slides[0].href}
            tabIndex={-1}
            aria-hidden="true"
            data-slide-index={slides.length}
            data-loop-clone="true"
            ref={(node) => { slideRefs.current[slides.length] = node; }}
          >
            <Image src={slides[0].image} alt="" fill sizes="(max-width: 700px) 75vw, 25vw" />
            <span>{slides[0].label}</span>
          </Link>
        )}
      </div>
      <div
        className="jeddah-project-pagination"
        role="group"
        aria-label={english ? 'Choose a gallery image' : 'اختيار صورة المعرض'}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            aria-label={english ? `Go to slide ${index + 1} of ${slides.length}` : `الانتقال إلى الشريحة ${index + 1} من ${slides.length}`}
            aria-current={activeIndex === index ? 'true' : undefined}
            aria-controls="jeddah-project-grid"
            onClick={() => scrollToSlide(index)}
          >
            <span aria-hidden="true" />
          </button>
        ))}
      </div>
    </>
  );
}
