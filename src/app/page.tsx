import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpLeft,
  BadgeCheck,
  MapPin,
  Settings2,
  ShieldCheck,
  Truck,
  Wrench,
} from 'lucide-react';
import { messages, pageMeta, whatsapp } from '@/lib/data';
import { canonicalUrl } from '@/lib/seo';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { StaticResponsiveImage } from '@/components/StaticResponsiveImage';
import './home.css';

export const metadata: Metadata = {
  title: { absolute: pageMeta['/'].title },
  description: pageMeta['/'].description,
  ...(canonicalUrl('/') ? { alternates: { canonical: canonicalUrl('/') } } : {}),
};

const homeSolutions = [
  {
    title: 'رفوف مستودعات مركزية',
    description: 'خيارات تخزين للمستودعات والمخازن',
    image: '/photos/hero.webp',
    href: '/warehouse-racking',
  },
  {
    title: 'رفوف بقالات',
    description: 'رفوف عرض وترتيب للبقالات والمتاجر الغذائية',
    image: '/photos/store.webp',
    href: '/retail-shelving',
  },
  {
    title: 'رفوف سوبر ماركت',
    description: 'رفوف عرض وتنظيم لأقسام المتجر',
    image: '/photos/market.webp',
    href: '/retail-shelving',
  },
  {
    title: 'رفوف صيدليات',
    description: 'رفوف عرض وتنظيم لمساحات الصيدليات',
    image: '/photos/pharmacy.jpeg',
    href: '/retail-shelving',
  },
  {
    title: 'رفوف تخزين منازل',
    description: 'تصاميم عملية وأنيقة لكل المساحات',
    image: '/photos/home.webp',
    href: '/solutions',
  },
];

const homeProjects = [
  {
    title: 'رفوف للمستودعات والمخازن',
    image: '/photos/hero.webp',
    type: 'مستودعات',
  },
  {
    title: 'رفوف عرض للسوبر ماركت',
    image: '/photos/market.webp',
    type: 'متاجر',
  },
  {
    title: 'رفوف عرض للصيدليات',
    image: '/photos/pharmacy.jpeg',
    type: 'صيدليات',
  },
  {
    title: 'وحدات عرض للمحلات',
    image: '/photos/store.webp',
    type: 'محلات',
  },
  {
    title: 'خيارات تخزين للمستودعات',
    image: '/photos/warehouse-2.jpeg',
    type: 'مستودعات',
  },
];

const contactMessage = 'السلام عليكم، أريد الاستفسار عن رفوف لمشروعي.';

const cardVariants = (source: string) => {
  const stem = source.replace(/\.(?:webp|jpeg)$/, '');
  return [320, 640].map((width) => ({ src: `${stem}-${width}.webp`, width }));
};

export default function Home() {
  return (
    <main className="homepage">
      {/* 1. HERO SECTION */}
      <section className="home-hero" aria-labelledby="home-title">
        {/* Left Warehouse Photo (in RTL, photo sits on the left) */}
        <div className="home-hero-photo">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/photos/home-hero-1280-640.webp 640w, /photos/home-hero-1280-960.webp 960w"
              sizes="100vw"
              type="image/webp"
            />
            <StaticResponsiveImage
              variants={[{ src: '/photos/home-hero-new-1280.webp', width: 1280 }]}
              alt="رفوف عرض أنيقة ومستودع تخزين متكامل بتصميم عصري"
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </picture>
          <div className="home-hero-photo-gradient" />
        </div>

        {/* Right Deep Emerald Content (in RTL, content sits on the right) */}
        <div className="home-hero-content">
          <span className="home-pill">رفوف المستودعات والمتاجر</span>
          <h1 id="home-title">
            رفوف <em>المستودعات</em>
            <br />
            والمتاجر
          </h1>
          <p className="home-hero-gold">
            حلول تخزين وعرض تراعي احتياج المساحة
          </p>
          <p className="home-hero-description">
            نوفر رفوف مستودعات ومحلات وسوبر ماركت في جدة والرياض. نناقش الاختيار وفق النشاط والمساحة.
          </p>

          {/* 3 Key Feature Badges */}
          <div className="home-hero-features">
            <div className="hero-feature-item">
              <Truck size={32} strokeWidth={2} aria-hidden="true" />
              <div className="hero-feature-text">
                <strong>رفوف المستودعات</strong>
                <span>للتخزين وتنظيم البضائع</span>
              </div>
            </div>
            <div className="hero-feature-item">
              <ShieldCheck size={32} strokeWidth={2} aria-hidden="true" />
              <div className="hero-feature-text">
                <strong>رفوف المتاجر</strong>
                <span>للعرض وتنظيم المنتجات</span>
              </div>
            </div>
            <div className="hero-feature-item">
              <Settings2 size={32} strokeWidth={2} aria-hidden="true" />
              <div className="hero-feature-text">
                <strong>جدة والرياض</strong>
                <span>نوفر رفوفاً للمشاريع في المدينتين</span>
              </div>
            </div>
          </div>

          {/* Desktop WhatsApp CTA Only */}
          <div className="home-hero-cta">
            <a
              className="button button-whatsapp home-desktop-whatsapp"
              href={whatsapp(messages.home)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل عبر واتساب"
            >
              <WhatsAppIcon size={20} />
              <span>تواصل عبر واتساب</span>
            </a>
          </div>
        </div>

        <img
          src="/images/jeddah-and-riyadh-night-banner-1200.webp"
          srcSet="/images/jeddah-and-riyadh-night-banner-640.webp 640w, /images/jeddah-and-riyadh-night-banner-1200.webp 1200w"
          alt="خدمة جدة والرياض"
          width={1200}
          height={400}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 768px) calc(100vw - 28px), 650px"
          className="homeCityBanner"
        />

        {/* Mobile WhatsApp CTA Button */}
        <div className="home-mobile-whatsapp-wrap">
          <a
            className="button button-whatsapp"
            href={whatsapp(messages.home)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={20} />
            <span>تواصل عبر واتساب</span>
          </a>
        </div>
      </section>

      {/* 2. SOLUTIONS PREVIEW SECTION */}
      <section className="home-solutions" aria-labelledby="home-solutions-title">
        <div className="container">
          <div className="home-section-heading">
            <span className="eyebrow">— حلولنا —</span>
            <h2 id="home-solutions-title">رفوف المستودعات والمتاجر</h2>
            <p>تعرّف على خيارات التخزين والعرض بحسب نوع الموقع والمنتجات.</p>
          </div>

          {/* Desktop: 5 Horizontal Cards in 1 Row. Mobile: stacked compact list */}
          <div className="home-solutions-grid">
            {homeSolutions.map((solution) => (
              <article className="home-solution-card" key={solution.title}>
                <Link className="home-solution-thumb" href={solution.href} aria-label={solution.title}>
                  <StaticResponsiveImage
                    variants={cardVariants(solution.image)}
                    alt={solution.title}
                    sizes="(max-width: 768px) 110px, 20vw"
                  />
                </Link>
                <div className="home-solution-info">
                  <div className="home-solution-texts">
                    <h3>
                      <Link href={solution.href}>{solution.title}</Link>
                    </h3>
                    <p>{solution.description}</p>
                  </div>
                  <Link
                    href={solution.href}
                    className="circle-gold-arrow"
                    aria-label={`تعرف على ${solution.title}`}
                  >
                    <ArrowUpLeft size={16} strokeWidth={2.4} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY AL SHAMIKH SECTION (Dark Emerald Band with warehouse background) */}
      <section className="home-why" aria-labelledby="home-why-title">
        <div className="container">
          <div className="home-section-heading home-heading-light">
            <span className="eyebrow">— لماذا الشامخ؟ —</span>
            <h2 id="home-why-title">كيف تختار رفوف مشروعك؟</h2>
            <p>ابدأ بنوع النشاط، ومساحة الموقع، وطبيعة المنتجات وطريقة الوصول إليها.</p>
          </div>

          <div className="home-why-grid">
            <div className="home-why-col">
              <div className="home-why-icon">
                <MapPin size={34} strokeWidth={2} aria-hidden="true" />
              </div>
              <strong>رفوف المستودعات</strong>
              <span>تخزين ثقيل أو متوسط أو خفيف بحسب الاحتياج</span>
            </div>
            <div className="home-why-col">
              <div className="home-why-icon">
                <Settings2 size={34} strokeWidth={2} aria-hidden="true" />
              </div>
              <strong>رفوف المتاجر</strong>
              <span>عرض جداري أو وسطي بحسب توزيع الموقع</span>
            </div>
            <div className="home-why-col">
              <div className="home-why-icon">
                <BadgeCheck size={34} strokeWidth={2} aria-hidden="true" />
              </div>
              <strong>معايير الاختيار</strong>
              <span>المساحة والمنتجات وطريقة الاستخدام</span>
            </div>
            <div className="home-why-col">
              <div className="home-why-icon">
                <Wrench size={34} strokeWidth={2} aria-hidden="true" />
              </div>
              <strong>ناقش احتياجك</strong>
              <span>شارك تفاصيل الموقع قبل طلب عرض سعر</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECTS PREVIEW SECTION */}
      <section className="home-projects" aria-labelledby="home-projects-title">
        <div className="container">
          <div className="home-projects-header">
            <div className="home-projects-title-wrap">
              <span className="eyebrow">— نماذج الحلول —</span>
              <h2 id="home-projects-title">صور توضيحية لرفوف التخزين والعرض</h2>
              <p>تعرّف على أشكال رفوف المستودعات والمتاجر. الصور للتوضيح وليست سجلّاً لمشاريع منفذة.</p>
            </div>
            <Link className="button button-outline home-projects-btn" href="/projects">
              <span>استعرض الصور التوضيحية</span>
              <ArrowLeft size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="home-projects-grid">
            {homeProjects.map((project, index) => (
              <Link
                href="/projects"
                className={`home-project-tile home-project-tile-${index + 1}`}
                key={project.title}
              >
                <StaticResponsiveImage
                  variants={cardVariants(project.image)}
                  alt={project.title}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <span className="home-project-caption">
                  <small>{project.type}</small>
                  <strong>{project.title}</strong>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="home-final-cta" aria-label="تواصل معنا لمشروعك">
        <div className="container home-final-cta-inner">
          <div className="home-final-cta-content">
            <span className="eyebrow">— تواصل معنا —</span>
            <h2>لنبدأ بمساحة أكثر تنظيماً</h2>
            <p>
              أرسل نوع النشاط ومساحة الموقع وطبيعة المنتجات لمناقشة خيارات الرفوف. يمكنك الاطلاع على الخدمة في <Link href="/jeddah">جدة</Link> أو <Link href="/riyadh">الرياض</Link>.
            </p>
          </div>
          <div className="home-final-cta-btn-wrap">
            <a
              className="button button-whatsapp"
              href={whatsapp(contactMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={20} />
              <span>أرسل تفاصيل مشروعك</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}



