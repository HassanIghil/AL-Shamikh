import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpLeft,
  Boxes,
  Briefcase,
  ChevronLeft,
  Maximize2,
  Package,
  Ruler,
  Settings2,
  ShieldCheck,
  Users,
  Wrench,
  MapPin,
} from 'lucide-react';
import { ResponsiveHeroImage } from '@/components/UI';
import { buildWhatsappUrl, messages } from '@/lib/data';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import '@/app/solutions.css';

const featuredSolutions = [
  {
    title: 'رفوف المستودعات',
    image: '/photos/hero.webp',
    href: '/warehouse-racking',
    description:
      'حلول تخزين للمستودعات والمخازن تناسب الاستخدامات المختلفة وتساعد على استغلال المساحة بكفاءة.',
    ctaMessage:
      'السلام عليكم، وصلت لكم من موقع الشامخ – صفحة حلولنا، وأرغب بالاستفسار عن رفوف المستودعات.',
  },
  {
    title: 'رفوف السوبر ماركت والمتاجر',
    image: '/photos/market.webp',
    href: '/retail-shelving',
    description:
      'أنظمة عرض وتنظيم للمحلات والسوبر ماركت تساعد على ترتيب المنتجات وتحسين استغلال المساحة.',
    ctaMessage:
      'السلام عليكم، وصلت لكم من موقع الشامخ – صفحة حلولنا، وأرغب بالاستفسار عن رفوف السوبر ماركت والمتاجر.',
  },
  {
    title: 'رفوف الصيدليات',
    image: '/photos/pharmacy.jpeg',
    href: '/retail-shelving',
    description:
      'رفوف عرض وتنظيم للصيدليات تساعد على ترتيب المنتجات بصورة واضحة وعملية.',
    ctaMessage:
      'السلام عليكم، وصلت لكم من موقع الشامخ – صفحة حلولنا، وأرغب بالاستفسار عن رفوف الصيدليات.',
  },
];

const secondarySolutions = [
  {
    title: 'رفوف التخزين الثقيل',
    description: 'خيارات تخزين للمنتجات الكبيرة والاستخدامات الصناعية، وفق متطلبات المشروع.',
    image: '/photos/warehouse-2.jpeg',
    href: '/warehouse-racking',
  },
  {
    title: 'رفوف التخزين المتوسط',
    description: 'خيارات لتخزين الصناديق تُختار وفق المساحة وطبيعة الاستخدام.',
    image: '/photos/warehouse-3.webp',
    href: '/warehouse-racking',
  },
  {
    title: 'رفوف التخزين الخفيف',
    description: 'خيارات تخزين للمساحات الصغيرة والاستخدامات الخفيفة.',
    image: '/photos/white.webp',
    href: '/warehouse-racking',
  },
  {
    title: 'رفوف البقالات',
    description: 'رفوف تساعد على تنظيم المنتجات وفق مساحة المتجر وطبيعة النشاط.',
    image: '/photos/store.webp',
    href: '/retail-shelving',
  },
  {
    title: 'رفوف المحلات التجارية',
    description: 'خيارات عرض للمعارض والمتاجر المتخصصة بحسب المنتجات والمساحة.',
    image: '/photos/black.webp',
    href: '/retail-shelving',
  },
  {
    title: 'رفوف التخزين المنزلي',
    description: 'تصاميم عملية وأنيقة لكل المساحات والغرف المنزلية.',
    image: '/photos/home.webp',
    href: '/solutions',
  },
  {
    title: 'اختيار الرفوف حسب المساحة',
    description: 'تُراجع أبعاد الموقع والارتفاع وطبيعة الاستخدام قبل مناقشة الفئة المناسبة.',
    image: '/photos/warehouse-5.webp',
    href: '/warehouse-racking',
  },
  {
    title: 'تجهيزات المحلات',
    description: 'وحدات وإكسسوارات عرض يمكن مناقشتها وفق احتياج المتجر.',
    image: '/photos/store.webp',
    href: '/retail-shelving',
  },
];

const decisionFactors = [
  {
    icon: Briefcase,
    title: 'طبيعة النشاط',
    text: 'نوع المشروع والاستخدام',
  },
  {
    icon: Maximize2,
    title: 'المساحة المتوفرة',
    text: 'أبعاد المكان وإمكانية التوسع',
  },
  {
    icon: Package,
    title: 'نوع المنتجات',
    text: 'الحجم وطبيعة التخزين',
  },
  {
    icon: Users,
    title: 'طريقة الاستخدام',
    text: 'الحركة اليومية وطريقة الوصول',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'فهم المشروع',
    description: 'نفهم طبيعة النشاط والمساحة وطريقة الاستخدام.',
  },
  {
    number: '02',
    title: 'اختيار النظام',
    description: 'نحدد نوع الرفوف والحل الأنسب للاحتياج.',
  },
  {
    number: '03',
    title: 'توضيح الخدمة المطلوبة',
    description: 'اذكر إن كنت تستفسر عن التوريد أو التركيب؛ نؤكد المتاح ونطاق العمل قبل عرض السعر.',
  },
  {
    number: '04',
    title: 'مراجعة العرض',
    description: 'نناقش الخيارات والتكلفة وفق نطاق الخدمة المؤكد للمشروع.',
  },
];

const sectorsPreview = [
  {
    title: 'المستودعات',
    image: '/photos/hero.webp',
    href: '/warehouse-racking',
  },
  {
    title: 'السوبر ماركت والبقالات',
    image: '/photos/market.webp',
    href: '/retail-shelving',
  },
  {
    title: 'الصيدليات',
    image: '/photos/pharmacy.jpeg',
    href: '/retail-shelving',
  },
  {
    title: 'المحلات التجارية',
    image: '/photos/black.webp',
    href: '/retail-shelving',
  },
];

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'اختيار حسب احتياج المشروع',
    text: 'تأكيد مواصفات المنتج وخياراته المتاحة',
  },
  {
    icon: Settings2,
    title: 'حلول حسب احتياجات المشروع',
    text: 'تصميم مدروس لاستغلال كامل المساحة',
  },
  {
    icon: Wrench,
    title: 'توريد الرفوف',
    text: 'للمستودعات والمتاجر في جدة والرياض',
  },
  {
    icon: MapPin,
    title: 'خدمة جدة والرياض',
    text: 'للمستودعات والمتاجر والأنشطة التجارية',
  },
];

const finalCtaMessage =
  'السلام عليكم، وصلت لكم من صفحة حلولنا في موقع الشامخ وأرغب بالمساعدة في اختيار نظام الرفوف المناسب لمشروعي.';

export default function SolutionsView() {
  return (
    <div className="solutions-page">
      {/* 1. HERO SECTION */}
      <section className="solutions-hero" aria-labelledby="solutions-hero-title">
        {/* Left Photo in RTL reading order */}
        <div className="solutions-hero-photo">
          <ResponsiveHeroImage
            src="/photos/hero-solutions.webp"
            mobileSrc="/photos/hero-solutions-mobile.webp"
            alt="حلول رفوف وتخزين متكاملة للمستودعات والمتاجر"
          />
          <div className="solutions-hero-photo-gradient" />
        </div>

        {/* Right Content Panel in RTL */}
        <div className="solutions-hero-content">
          <nav className="solutions-breadcrumbs" aria-label="مسار التنقل">
            <Link href="/">الرئيسية</Link>
            <ChevronLeft size={14} aria-hidden="true" />
            <span>حلولنا</span>
          </nav>

          <span className="home-pill">حلول متكاملة</span>

          <h1 id="solutions-hero-title">
            حلول الرفوف والتخزين
            <br />
            لكل مساحة
          </h1>

          <p className="lead">
            من المستودعات إلى المحلات والصيدليات والمنازل، نعرض خيارات رفوف وتخزين تُناقش وفق طبيعة الاستخدام والمساحة المتاحة.
          </p>

          <div className="solutions-hero-badges">
            <div className="solutions-badge-item">
              <Ruler size={17} aria-hidden="true" />
              <span>تصميم حسب المساحة</span>
            </div>
            <div className="solutions-badge-item">
              <ShieldCheck size={17} aria-hidden="true" />
              <span>منتجات مناسبة لطبيعة الاستخدام</span>
            </div>
            <div className="solutions-badge-item">
              <Wrench size={17} aria-hidden="true" />
              <span>توريد الرفوف</span>
            </div>
            <div className="solutions-badge-item">
              <Boxes size={17} aria-hidden="true" />
              <span>حلول لمختلف القطاعات</span>
            </div>
          </div>

          <a
            className="button button-whatsapp"
            href={buildWhatsappUrl(messages.solutions)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={19} />
            <span>استفسر عبر واتساب</span>
          </a>
        </div>
      </section>

      {/* 2. FEATURED SOLUTIONS (3 Large Rich Cards) */}
      <section className="solutions-featured-section" aria-labelledby="featured-solutions-title">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">— حلولنا —</span>
            <h2 id="featured-solutions-title">مجموعة متكاملة من حلول الرفوف والتخزين</h2>
            <p>حلول مصممة لتناسب اختلاف المساحات والقطاعات وطريقة الاستخدام.</p>
          </div>

          <div className="solutions-featured-grid">
            {featuredSolutions.map((item) => (
              <article className="featured-card" key={item.title}>
                <div className="featured-card-thumb">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="featured-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="featured-card-actions">
                    <Link href={item.href} className="featured-card-link">
                      <span>عرض تفاصيل النظام</span>
                      <ArrowLeft size={15} aria-hidden="true" />
                    </Link>
                    <a
                      href={buildWhatsappUrl(item.ctaMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="featured-card-cta"
                    >
                      <WhatsAppIcon size={15} />
                      <span>استفسر عن هذا الحل</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECONDARY SOLUTIONS (Dense Modular Grid) */}
      <section className="solutions-secondary-section" aria-labelledby="secondary-solutions-title">
        <div className="container">
          <div className="solutions-secondary-header">
            <h3 id="secondary-solutions-title">أنظمة التخزين والعرض المتنوعة</h3>
          </div>

          <div className="solutions-secondary-grid">
            {secondarySolutions.map((item) => (
              <article className="secondary-card" key={item.title}>
                <Link href={item.href} className="secondary-card-thumb" aria-label={item.title}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100px, 25vw"
                  />
                </Link>
                <div className="secondary-card-body">
                  <div className="secondary-card-text">
                    <h4>
                      <Link href={item.href}>{item.title}</Link>
                    </h4>
                    <p>{item.description}</p>
                  </div>
                  <a
                    href={buildWhatsappUrl(
                      `السلام عليكم، وصلت لكم من صفحة حلولنا وأرغب بالاستفسار عن ${item.title}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="circle-gold-arrow"
                    aria-label={`استفسر عن ${item.title}`}
                  >
                    <WhatsAppIcon size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DARK DECISION SECTION (Factors for Choosing) */}
      <section className="solutions-decision-section" aria-labelledby="decision-title">
        <div className="container">
          <div className="section-heading light">
            <span className="eyebrow">— اختيار الحل المناسب —</span>
            <h2 id="decision-title">كيف نحدد نظام التخزين المناسب؟</h2>
            <p>يختلف النظام المناسب من مشروع لآخر، لذلك نراعي مجموعة من العوامل قبل اختيار الحل.</p>
          </div>

          <div className="solutions-decision-grid">
            {decisionFactors.map((factor) => {
              const Icon = factor.icon;
              return (
                <div className="decision-factor-col" key={factor.title}>
                  <div className="decision-factor-icon">
                    <Icon size={28} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <strong>{factor.title}</strong>
                  <span>{factor.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION (4-Step Timeline Flow) */}
      <section className="solutions-process-section" aria-labelledby="process-title">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">— خطوات العمل —</span>
            <h2 id="process-title">من الاحتياج إلى التنفيذ</h2>
            <p>خطوات واضحة ومدروسة نتبعها لتقديم أنظمة رفوف وتخزين تلبي تطلعاتك بدقة.</p>
          </div>

          <div className="solutions-process-flow">
            {processSteps.map((step) => (
              <div className="process-step-item" key={step.number}>
                <span className="process-step-number">{step.number}</span>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. USE CASE / SECTOR PREVIEW */}
      <section className="solutions-sectors-section" aria-labelledby="sectors-preview-title">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">— القطاعات —</span>
            <h2 id="sectors-preview-title">حلول تناسب مختلف الأنشطة</h2>
            <p>خيارات رفوف تُناقش وفق طبيعة كل قطاع واحتياجات المساحة والتنظيم.</p>
          </div>

          <div className="solutions-sectors-grid">
            {sectorsPreview.map((sector) => (
              <Link href={sector.href} className="sector-panel-card" key={sector.title}>
                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="sector-panel-caption">
                  <strong>{sector.title}</strong>
                  <ArrowUpLeft size={18} strokeWidth={2.4} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>

          <div className="solutions-sectors-footer">
            <Link href="/sectors" className="solutions-sectors-link">
              <span>استكشف جميع القطاعات التي نخدمها</span>
              <ArrowLeft size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. TRUST SECTION */}
      <section className="solutions-trust-strip" aria-label="مزايا الشامخ">
        <div className="container">
          <div className="solutions-trust-grid">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div className="trust-item" key={item.title}>
                  <Icon size={26} strokeWidth={2} aria-hidden="true" />
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="solutions-cities-links">
            <p>
              نقدم حلول الرفوف والتخزين لمشاريع <Link href="/jeddah">جدة</Link> و<Link href="/riyadh">الرياض</Link>. استكشف <Link href="/projects">صوراً توضيحية لأنواع الحلول</Link> أو <Link href="/contact">تواصل معنا</Link> لمناقشة احتياجك.
            </p>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="home-final-cta" aria-label="تواصل معنا لمشروعك">
        <div className="container home-final-cta-inner">
          <div className="home-final-cta-content">
            <span className="eyebrow">— تواصل معنا —</span>
            <h2>هل تبحث عن الحل المناسب لمساحتك؟</h2>
            <p>أرسل لنا تفاصيل مشروعك وسنساعدك في اختيار نظام الرفوف والتخزين المناسب.</p>
          </div>
          <div className="home-final-cta-btn-wrap">
            <a
              className="button button-whatsapp"
              href={buildWhatsappUrl(finalCtaMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={20} />
              <span>أرسل تفاصيل مشروعك</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
