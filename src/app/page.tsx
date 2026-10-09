import type { Metadata } from 'next';
import Image from 'next/image';
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
import './home.css';

export const metadata: Metadata = {
  title: { absolute: pageMeta['/'].title },
  description: pageMeta['/'].description,
  ...(canonicalUrl('/') ? { alternates: { canonical: canonicalUrl('/') } } : {}),
};

const homeSolutions = [
  {
    title: 'رفوف مستودعات مركزية',
    description: 'حلول تخزين قوية لجميع الاحتياجات',
    image: '/photos/hero.webp',
    href: '/warehouse-racking',
  },
  {
    title: 'رفوف بقالات',
    description: 'استغلال مثالي للمساحات مع متانة عالية',
    image: '/photos/store.webp',
    href: '/retail-shelving',
  },
  {
    title: 'رفوف سوبر ماركت',
    description: 'تصاميم عصرية للمتاجر والمراكز التجارية',
    image: '/photos/market.webp',
    href: '/retail-shelving',
  },
  {
    title: 'رفوف صيدليات',
    description: 'حلول مخصصة لتنظيم الأدوية والمنتجات',
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
    title: 'تجهيز رفوف مستودع مركزي',
    image: '/photos/hero.webp',
    type: 'مستودعات',
  },
  {
    title: 'رفوف سوبر ماركت حديثة',
    image: '/photos/market.webp',
    type: 'متاجر',
  },
  {
    title: 'رفوف صيدليات منظمة',
    image: '/photos/pharmacy.jpeg',
    type: 'صيدليات',
  },
  {
    title: 'تجهيزات عرض تجارية',
    image: '/photos/store.webp',
    type: 'محلات',
  },
  {
    title: 'أنظمة تخزين صناعية',
    image: '/photos/warehouse-2.jpeg',
    type: 'مستودعات',
  },
];

const contactMessage = 'السلام عليكم، وصلت لكم من موقع الشامخ وأرغب بمناقشة مشروع رفوف وتخزين.';

export default function Home() {
  return (
    <main className="homepage">
      {/* 1. HERO SECTION */}
      <section className="home-hero" aria-labelledby="home-title">
        {/* Left Warehouse Photo (in RTL, photo sits on the left) */}
        <div className="home-hero-photo">
          <link
            rel="preload"
            as="image"
            href="/photos/home-hero-new.webp"
            media="(min-width: 769px)"
            fetchPriority="high"
          />
          <link
            rel="preload"
            as="image"
            href="/photos/home-hero-1280.webp"
            media="(max-width: 768px)"
            fetchPriority="high"
          />
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/photos/home-hero-1280.webp"
              type="image/webp"
            />
            <Image
              src="/photos/home-hero-new.webp"
              alt="رفوف عرض أنيقة ومستودع تخزين متكامل بتصميم عصري"
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </picture>
          <div className="home-hero-photo-gradient" />
        </div>

        {/* Right Deep Emerald Content (in RTL, content sits on the right) */}
        <div className="home-hero-content">
          <span className="home-pill">خبرة في الرفوف والتخزين والديكورات</span>
          <h1 id="home-title">
            حلول متكاملة <em>للرفوف</em>
            <br />
            والتخزين والديكورات
          </h1>
          <p className="home-hero-gold">
            مستودعات أكثر كفاءة .. متاجر أكثر جاذبية .. مساحات أكثر تنظيماً
          </p>
          <p className="home-hero-description">
            الشامخ للرفوف والديكورات يوفر حلول رفوف وتخزين متكاملة لجميع القطاعات: المستودعات، السوبر ماركت، الصيدليات، المعارض والمتاجر، بالإضافة إلى حلول التخزين المنزلي.
          </p>

          {/* 3 Key Feature Badges */}
          <div className="home-hero-features">
            <div className="hero-feature-item">
              <Truck size={32} strokeWidth={2} aria-hidden="true" />
              <div className="hero-feature-text">
                <strong>توريد سريع</strong>
                <span>لجدة والرياض ومدن المملكة</span>
              </div>
            </div>
            <div className="hero-feature-item">
              <ShieldCheck size={32} strokeWidth={2} aria-hidden="true" />
              <div className="hero-feature-text">
                <strong>منتجات عالية الجودة</strong>
                <span>ومواصفات عالمية</span>
              </div>
            </div>
            <div className="hero-feature-item">
              <Settings2 size={32} strokeWidth={2} aria-hidden="true" />
              <div className="hero-feature-text">
                <strong>تركيب احترافي</strong>
                <span>بأعلى معايير الجودة</span>
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

        <Image
          src="/images/jeddah-and-riyadh-night-banner.webp"
          alt="خدمة جدة والرياض"
          width={1400}
          height={467}
          loading="lazy"
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
            <h2 id="home-solutions-title">مجموعة متكاملة من الرفوف والديكورات</h2>
            <p>حلول احترافية مصممة لتناسب جميع القطاعات بأعلى معايير الجودة</p>
          </div>

          {/* Desktop: 5 Horizontal Cards in 1 Row. Mobile: stacked compact list */}
          <div className="home-solutions-grid">
            {homeSolutions.map((solution) => (
              <article className="home-solution-card" key={solution.title}>
                <Link className="home-solution-thumb" href={solution.href} aria-label={solution.title}>
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
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
            <h2 id="home-why-title">شريكك الموثوق في حلول التخزين والديكورات</h2>
            <p>نجمع بين الجودة والخبرة لنقدم لك أفضل الحلول في جدة والرياض</p>
          </div>

          <div className="home-why-grid">
            <div className="home-why-col">
              <div className="home-why-icon">
                <MapPin size={34} strokeWidth={2} aria-hidden="true" />
              </div>
              <strong>خدمة جدة والرياض</strong>
              <span>وتوريد لجميع مناطق المملكة</span>
            </div>
            <div className="home-why-col">
              <div className="home-why-icon">
                <Settings2 size={34} strokeWidth={2} aria-hidden="true" />
              </div>
              <strong>تصميم مخصص</strong>
              <span>حسب احتياجاتك</span>
            </div>
            <div className="home-why-col">
              <div className="home-why-icon">
                <BadgeCheck size={34} strokeWidth={2} aria-hidden="true" />
              </div>
              <strong>جودة عالية</strong>
              <span>في جميع المنتجات</span>
            </div>
            <div className="home-why-col">
              <div className="home-why-icon">
                <Wrench size={34} strokeWidth={2} aria-hidden="true" />
              </div>
              <strong>توريد وتركيب</strong>
              <span>بفريق متخصص</span>
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
              <h2 id="home-projects-title">حلول الرفوف والتخزين لمختلف الأنشطة</h2>
              <p>استكشف أنواعاً من أنظمة التخزين والعرض للمستودعات والمتاجر والصيدليات.</p>
            </div>
            <Link className="button button-outline home-projects-btn" href="/projects">
              <span>استكشف جميع الحلول</span>
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
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
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
              أرسل لنا تفاصيل مشروعك، وسنساعدك في اختيار الحل المناسب لطبيعة المساحة والاستخدام.
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



