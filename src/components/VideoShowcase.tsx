'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Play, Warehouse } from 'lucide-react';
import './video-showcase.css';

type Locale = 'ar' | 'en';
type Variant = 'home' | 'projects';

const copy = {
  ar: {
    home: {
      eyebrow: 'من أرض الواقع',
      title: 'شاهد رفوف المستودعات على أرض الواقع',
      description: 'جولة مصوّرة من الشامخ تعرض أنظمة رفوف المستودعات ومساحات التخزين من الداخل.',
      link: 'استكشف الفيديو وصور الحلول',
      href: '/projects',
    },
    projects: {
      eyebrow: 'تصوير الشامخ',
      title: 'جولة مصوّرة داخل المستودع',
      description: 'شاهد تصويرًا حقيقيًا من الشامخ يعرض رفوف التخزين والممرات الداخلية للمستودع.',
      link: 'تعرّف على رفوف المستودعات',
      href: '/warehouse-racking',
    },
    play: 'شغّل جولة المستودع بدون صوت',
    loading: 'جارٍ تحميل الفيديو…',
    error: 'تعذّر تشغيل الفيديو. حاول مجددًا.',
    retry: 'إعادة المحاولة',
    label: 'فيديو من تصوير الشامخ لرفوف المستودعات',
  },
  en: {
    home: {
      eyebrow: 'Real Company Footage',
      title: 'See Warehouse Shelving in Action',
      description: 'Explore authentic footage from Al Shamikh showing warehouse shelving systems and organized storage spaces.',
      link: 'Explore the Video & Gallery',
      href: '/en/projects',
    },
    projects: {
      eyebrow: 'Al Shamikh Footage',
      title: 'Inside the Warehouse',
      description: 'Watch authentic Al Shamikh footage featuring warehouse storage racks and an elevated walkway.',
      link: 'Explore warehouse shelving',
      href: '/en/warehouse-racking',
    },
    play: 'Play the warehouse tour without sound',
    loading: 'Loading video…',
    error: 'The video could not be played. Please try again.',
    retry: 'Try again',
    label: 'Al Shamikh warehouse shelving footage',
  },
} as const;

const videoSrc = '/videos/warehouse-racking-walkthrough.mp4';
const posterSrc = '/videos/warehouse-racking-poster.webp';

export default function VideoShowcase({ locale, variant }: { locale: Locale; variant: Variant }) {
  const [active, setActive] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const videoRef = useRef<HTMLVideoElement>(null);
  const content = copy[locale];
  const section = content[variant];
  const titleId = `video-showcase-${locale}-${variant}`;

  useEffect(() => {
    if (!active || !videoRef.current) return;
    const video = videoRef.current;
    video.muted = true;
    video.play().catch(() => setStatus('error'));
  }, [active]);

  function startPlayback() {
    setStatus('loading');
    setActive(true);
  }

  return (
    <section className={`video-showcase video-showcase--${variant}`} dir={locale === 'ar' ? 'rtl' : 'ltr'} aria-labelledby={titleId}>
      <div className="video-showcase-inner">
        <div className="video-showcase-media">
          <div className="video-showcase-frame">
            {active ? (
              <video
                ref={videoRef}
                src={videoSrc}
                poster={posterSrc}
                controls
                muted
                playsInline
                preload="none"
                aria-label={content.label}
                onPlay={(event) => { event.currentTarget.muted = true; setStatus('ready'); }}
                onError={() => setStatus('error')}
              />
            ) : (
              <button className="video-showcase-play" type="button" onClick={startPlayback} aria-label={content.play}>
                <img src={posterSrc} width="780" height="1386" alt="" loading="lazy" />
                <span className="video-showcase-play-icon"><Play size={30} fill="currentColor" aria-hidden="true" /></span>
                <span className="video-showcase-play-label">{content.play}</span>
              </button>
            )}
          </div>
          {status === 'loading' && <p className="video-showcase-status" role="status">{content.loading}</p>}
          {status === 'error' && <div className="video-showcase-status" role="alert">{content.error} <button type="button" onClick={() => { setActive(false); setStatus('idle'); }}>{content.retry}</button></div>}
        </div>
        <div className="video-showcase-copy">
          <span className="video-showcase-eyebrow"><Warehouse size={18} aria-hidden="true" />{section.eyebrow}</span>
          <h2 id={titleId}>{section.title}</h2>
          <p>{section.description}</p>
          <Link href={section.href} className="video-showcase-link">
            {section.link}{locale === 'ar' ? <ArrowLeft size={18} aria-hidden="true" /> : <ArrowRight size={18} aria-hidden="true" />}
          </Link>
        </div>
      </div>
    </section>
  );
}
