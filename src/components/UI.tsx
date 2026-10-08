import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpLeft,
  MessageCircle,
  MapPin,
  Truck,
  ShieldCheck,
  Settings2,
  Wrench,
  BadgeCheck,
  ChevronLeft,
} from 'lucide-react';
import { company, messages, nav, phone, phoneClean, type Solution, buildWhatsappUrl } from '@/lib/data';

const imageMap: Record<string, string> = {
  hero: 'hero',
  warehouse: 'warehouse-2',
  market: 'market',
  pharmacy: 'pharmacy',
  black: 'black',
  white: 'white',
  home: 'home',
  store: 'store',
};

export function Photo({
  kind,
  alt,
  className = '',
}: {
  kind: string;
  alt: string;
  className?: string;
}) {
  const src = kind.startsWith('/') ? kind : `/photos/${imageMap[kind] || 'hero'}.jpeg`;
  return (
    <div className={`photo photo-${kind} ${className}`} style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={kind === 'hero'}
      />
    </div>
  );
}

export function WhatsAppButton({
  message,
  label = 'تواصل عبر واتساب',
  className = '',
}: {
  message: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      className={`button button-whatsapp ${className}`}
      href={buildWhatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <MessageCircle size={19} aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  className = '',
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`section-heading ${light ? 'light' : ''} ${className}`}>
      <span className="eyebrow">— {eyebrow} —</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function SolutionCard({
  solution,
  compact = false,
}: {
  solution: Solution;
  compact?: boolean;
}) {
  return (
    <article className={`solution-card ${compact ? 'compact' : ''}`}>
      <Link href={solution.href} className="solution-card-image" aria-label={solution.title}>
        <Image
          src={solution.image}
          alt={solution.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
        />
      </Link>
      <div className="solution-card-body">
        <div className="solution-card-text">
          <h3>
            <Link href={solution.href}>{solution.title}</Link>
          </h3>
          <p>{solution.description}</p>
        </div>
        <a
          className="circle-gold-arrow"
          href={buildWhatsappUrl(`السلام عليكم، وصلت لكم من موقع الشامخ وأرغب بالاستفسار عن ${solution.title}.`)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`استفسر عن ${solution.title}`}
        >
          <ArrowUpLeft size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export function FeatureStrip() {
  const features = [
    {
      icon: MapPin,
      title: 'خدمة جدة والرياض',
      text: 'وتوريد لجميع مناطق المملكة',
    },
    {
      icon: Settings2,
      title: 'تصميم مخصص',
      text: 'حسب احتياجاتك ومساحتك',
    },
    {
      icon: BadgeCheck,
      title: 'جودة عالية',
      text: 'في جميع المنتجات والمواصفات',
    },
    {
      icon: Wrench,
      title: 'توريد وتركيب',
      text: 'بفريق متخصص ذو خبرة',
    },
  ];

  return (
    <div className="feature-strip">
      {features.map(({ icon: Icon, title, text }) => (
        <div className="feature-col" key={title}>
          <div className="feature-icon-wrapper">
            <Icon size={30} strokeWidth={2} aria-hidden="true" />
          </div>
          <strong>{title}</strong>
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}

export function WhyPanel() {
  return (
    <section className="why-panel" aria-labelledby="why-title">
      <div className="container">
        <SectionHeading
          eyebrow="لماذا الشامخ؟"
          title="شريكك الموثوق في حلول التخزين والديكورات"
          description="نجمع بين الجودة والخبرة لنقدم لك أفضل الحلول في جدة والرياض ومدن المملكة"
          light
        />
        <FeatureStrip />
      </div>
    </section>
  );
}

export function CtaBand({
  title = 'لنبدأ بمساحة أكثر تنظيماً',
  description = 'أرسل لنا تفاصيل مشروعك، وسنساعدك في اختيار الحل المناسب لطبيعة المساحة والاستخدام.',
  message = messages.contact,
  buttonLabel = 'أرسل تفاصيل مشروعك',
}: {
  title?: string;
  description?: string;
  message?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="cta-band" aria-label="دعوة للتواصل">
      <div className="container cta-inner">
        <div className="cta-content">
          <span className="eyebrow">— تواصل معنا —</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cta-action">
          <WhatsAppButton message={message} label={buttonLabel} />
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Brand Column */}
        <div className="footer-col footer-brand-col">
          <Link href="/" className="footer-logo-link" aria-label="الشامخ للرفوف والديكورات">
            <Image
              src="/logo.png"
              alt="الشامخ للرفوف والديكورات"
              width={140}
              height={60}
              className="footer-logo-img"
            />
          </Link>
          <p className="footer-about-text">
            حلول رفوف وتخزين للمستودعات والمتاجر والصيدليات والمنازل، بما يناسب طبيعة كل مشروع واحتياجات المساحة.
          </p>
        </div>

        {/* Solutions Column */}
        <div className="footer-col">
          <h3>حلولنا</h3>
          <Link href="/warehouse-racking">رفوف المستودعات</Link>
          <Link href="/retail-shelving">رفوف السوبر ماركت</Link>
          <Link href="/retail-shelving">رفوف البقالات</Link>
          <Link href="/retail-shelving">رفوف الصيدليات</Link>
          <Link href="/solutions">رفوف تخزين المنازل</Link>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h3>روابط سريعة</h3>
          <Link href="/">الرئيسية</Link>
          <Link href="/solutions">حلولنا</Link>
          <Link href="/sectors">القطاعات</Link>
          <Link href="/projects">مشاريعنا</Link>
          <Link href="/about">من نحن</Link>
          <Link href="/contact">تواصل معنا</Link>
        </div>

        {/* Service Areas Column */}
        <div className="footer-col">
          <h3>مناطق الخدمة</h3>
          <Link href="/jeddah">جدة</Link>
          <Link href="/riyadh">الرياض</Link>
          <span>مختلف مناطق المملكة</span>
        </div>

        {/* Contact Column */}
        <div className="footer-col footer-contact-col">
          <h3>تواصل معنا</h3>
          <a href={`tel:${phoneClean}`} dir="ltr" className="footer-phone-link">
            {phone}
          </a>
          <a
            href={buildWhatsappUrl(messages.contact)}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp-link"
          >
            <MessageCircle size={17} aria-hidden="true" />
            <span>تواصل عبر واتساب</span>
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {company}. جميع الحقوق محفوظة.</span>
        <div className="footer-legal">
          <Link href="/privacy">سياسة الخصوصية</Link>
          <span className="dot">•</span>
          <Link href="/terms">شروط الاستخدام</Link>
        </div>
      </div>
    </footer>
  );
}

export function InteriorHero({
  crumb,
  title,
  description,
  eyebrow,
  image = '/photos/warehouse-2.jpeg',
  message = messages.contact,
  tag,
}: {
  crumb: string;
  title: string;
  description: string;
  eyebrow?: string;
  image?: string;
  message?: string;
  tag?: string;
}) {
  const imageSrc = image.startsWith('/') ? image : `/photos/${imageMap[image] || 'hero'}.jpeg`;
  return (
    <section className="interior-hero">
      <div className="interior-hero-bg">
        <Image src={imageSrc} alt={title} fill priority sizes="100vw" />
        <div className="interior-hero-overlay" />
      </div>
      <div className="container interior-content">
        <nav className="breadcrumbs" aria-label="مسار التنقل">
          <Link href="/">الرئيسية</Link>
          <ChevronLeft size={14} aria-hidden="true" />
          <span>{crumb}</span>
        </nav>
        {eyebrow && <span className="home-pill">{eyebrow}</span>}
        <h1>{title}</h1>
        <p>{description}</p>
        {tag && <span className="service-tag">{tag}</span>}
        <WhatsAppButton message={message} label="استفسر عبر واتساب" />
      </div>
    </section>
  );
}

