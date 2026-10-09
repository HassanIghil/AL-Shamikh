import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpLeft,
  Boxes,
  Building2,
  CircleHelp,
  LayoutGrid,
  MapPin,
  PackageCheck,
  Ruler,
  Store,
  Truck,
} from 'lucide-react';
import { ResponsiveHeroImage } from '@/components/UI';
import { buildWhatsappUrl } from '@/lib/data';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import './sectors.css';

const sectors = [
  {
    number: '01',
    eyebrow: '01 — المستودعات',
    title: 'المستودعات والمخازن',
    description:
      'حلول تخزين تساعد على تنظيم البضائع واستغلال المساحات الرأسية والأفقية بما يتناسب مع طبيعة التشغيل.',
    image: '/photos/hero.webp',
    alt: 'ممر مستودع مجهز برفوف تخزين زرقاء وبرتقالية',
    link: '/warehouse-racking',
    linkLabel: 'اكتشف حلول المستودعات',
    whatsappLabel: 'استفسر عن حلول المستودعات',
    tags: ['تخزين ثقيل', 'تخزين متوسط', 'تخزين خفيف', 'أنظمة متعددة المستويات'],
  },
  {
    number: '02',
    eyebrow: '02 — المتاجر الغذائية',
    title: 'السوبر ماركت والهايبر ماركت',
    description:
      'أنظمة عرض وتنظيم تساعد على ترتيب المنتجات، وضوح الأقسام واستغلال الممرات والمساحات التجارية.',
    image: '/photos/market.webp',
    alt: 'رفوف عرض لمتجر بألوان داكنة وحواف خضراء',
    link: '/retail-shelving',
    linkLabel: 'اكتشف حلول المتاجر',
    whatsappLabel: 'استفسر عن حلول المتاجر',
    tags: ['وحدات جدارية', 'وحدات وسطية', 'رفوف عرض', 'تجهيزات متاجر'],
  },
  {
    number: '03',
    eyebrow: '03 — البقالات والمتاجر الغذائية',
    title: 'البقالات والمتاجر الغذائية',
    description:
      'حلول مناسبة للمساحات الصغيرة والمتوسطة تساعد على تنظيم المنتجات وسهولة الوصول إليها واستغلال كل متر من المتجر.',
    image: '/photos/store.webp',
    alt: 'رفوف متجر غذائي مرتبة على امتداد الممر',
    link: '/retail-shelving',
    linkLabel: 'اكتشف حلول البقالات',
    whatsappLabel: 'استفسر عن حلول البقالات',
    tags: ['رفوف بقالات', 'تنظيم المنتجات', 'استغلال المساحة'],
  },
  {
    number: '04',
    eyebrow: '04 — الصيدليات',
    title: 'الصيدليات',
    description:
      'رفوف عرض وتنظيم تساعد على ترتيب المنتجات بصورة واضحة وعملية مع الاستفادة من الجدران والمساحات الوسطية.',
    image: '/photos/pharmacy.jpeg',
    alt: 'رفوف صيدلية بيضاء وزرقاء',
    link: '/retail-shelving',
    linkLabel: 'اكتشف حلول الصيدليات',
    whatsappLabel: 'استفسر عن رفوف الصيدليات',
    tags: ['رفوف جدارية', 'وحدات وسطية', 'تنظيم المنتجات'],
  },
  {
    number: '05',
    eyebrow: '05 — المحلات التجارية',
    title: 'المحلات التجارية والمعارض',
    description:
      'حلول عرض وتجهيز تساعد على تقديم المنتجات بصورة مرتبة وتمنح المساحة هوية أكثر احترافية وتنظيماً.',
    image: '/photos/black.webp',
    alt: 'رفوف عرض تجارية داكنة بحواف خضراء',
    link: '/retail-shelving',
    linkLabel: 'اكتشف تجهيزات العرض',
    whatsappLabel: 'استفسر عن تجهيزات العرض',
    tags: ['رفوف عرض', 'تجهيزات تجارية', 'تنظيم المساحة'],
  },
  {
    number: '06',
    eyebrow: '06 — التخزين المنزلي',
    title: 'المنازل وغرف التخزين',
    description:
      'حلول عملية لتنظيم غرف التخزين والمستودعات المنزلية واستغلال المساحات بصورة أفضل.',
    image: '/photos/home.webp',
    alt: 'رفوف تخزين منزلية عملية',
    link: '/solutions',
    linkLabel: 'اكتشف حلول التخزين',
    whatsappLabel: 'استفسر عن التخزين المنزلي',
    tags: ['تخزين منزلي', 'تنظيم الغرف', 'استغلال المساحة'],
  },
];

const factors = [
  { icon: PackageCheck, title: 'طبيعة المنتجات', text: 'ما الذي سيتم تخزينه أو عرضه؟' },
  { icon: Ruler, title: 'حجم المساحة', text: 'المساحة المتوفرة وطريقة توزيعها' },
  { icon: Boxes, title: 'حركة الاستخدام', text: 'العملاء أو الموظفون أو حركة المخزون' },
  { icon: Building2, title: 'التوسع المستقبلي', text: 'إمكانية تطوير المساحة لاحقاً' },
];

const solutionLinks = [
  { title: 'رفوف المستودعات', description: 'أنظمة تخزين للمخازن والمستودعات', href: '/warehouse-racking', icon: Boxes },
  { title: 'رفوف السوبر ماركت والمتاجر', description: 'وحدات عرض وتنظيم للمساحات التجارية', href: '/retail-shelving', icon: Store },
  { title: 'رفوف الصيدليات', description: 'حلول عرض وترتيب للمنتجات', href: '/retail-shelving', icon: PackageCheck },
  { title: 'جميع حلول التخزين', description: 'حلول تناسب طبيعة كل مساحة', href: '/solutions', icon: LayoutGrid },
];

const sectorMessage =
  'السلام عليكم، وصلت لكم من صفحة القطاعات في موقع الشامخ وأرغب بالاستفسار عن الحل المناسب لنشاطي.';
const finalMessage =
  'السلام عليكم، وصلت لكم من صفحة القطاعات في موقع الشامخ وأرغب بالمساعدة في اختيار نظام الرفوف المناسب لنشاطي.';

function WhatsAppLink({ label, message = sectorMessage }: { label: string; message?: string }) {
  return (
    <a className="sector-whatsapp" href={buildWhatsappUrl(message)} target="_blank" rel="noopener noreferrer">
      <WhatsAppIcon size={18} />
      <span>{label}</span>
    </a>
  );
}

export default function SectorsView() {
  return (
    <div className="sectors-page">
      <section className="sectors-hero" aria-labelledby="sectors-title">
        <div className="sectors-hero-image">
          <ResponsiveHeroImage
            src="/photos/hero-sectors.webp"
            mobileSrc="/photos/hero-sectors-mobile.webp"
            alt="استخدامات متنوعة لأنظمة رفوف العرض والتخزين في بيئة تجارية"
          />
          <span className="sectors-image-note"><MapPin size={16} /> جدة · الرياض · مختلف مناطق المملكة</span>
        </div>
        <div className="sectors-hero-copy">
          <nav className="sectors-breadcrumb" aria-label="مسار التنقل">
            <Link href="/">الرئيسية</Link><ArrowLeft size={14} aria-hidden="true" /><span>القطاعات</span>
          </nav>
          <span className="sectors-eyebrow">لكل نشاط حل</span>
          <h1 id="sectors-title">حلول مصممة<br />لمختلف القطاعات</h1>
          <p>لكل نشاط احتياجات مختلفة في التخزين والعرض، لذلك نختار نظام الرفوف والحل المناسب وفق طبيعة المكان، طريقة الاستخدام، والمساحة المتوفرة.</p>
          <div className="sectors-hero-benefits">
            <span><Store size={18} aria-hidden="true" />حل حسب النشاط</span>
            <span><Ruler size={18} aria-hidden="true" />استغلال أفضل للمساحة</span>
            <span><Truck size={18} aria-hidden="true" />توريد وتركيب</span>
          </div>
          <WhatsAppLink label="استفسر عبر واتساب" message={sectorMessage} />
        </div>
      </section>

      <section className="sectors-editorial" aria-label="القطاعات التي نخدمها">
        <div className="sectors-intro">
          <span className="sectors-kicker">القطاعات التي نخدمها</span>
          <h2>حلول تبدأ من فهم طبيعة النشاط</h2>
          <p>ليست كل المساحات متشابهة، لذلك تختلف أنظمة الرفوف وطريقة توزيعها حسب نوع المشروع، حجم المكان وطريقة الاستخدام.</p>
        </div>
        <div className="sectors-list">
          {sectors.map((sector) => (
            <article className={`sector-row sector-row-${sector.number}`} key={sector.number}>
              <div className="sector-row-image">
                <Image src={sector.image} alt={sector.alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
                <span className="sector-image-number">{sector.number}</span>
              </div>
              <div className="sector-row-copy">
                <span className="sector-row-kicker">{sector.eyebrow}</span>
                <h2>{sector.title}</h2>
                <p>{sector.description}</p>
                <div className="sector-tags" aria-label="حلول مرتبطة بهذا القطاع">
                  {sector.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="sector-row-actions">
                  <Link className="sector-text-link" href={sector.link}>{sector.linkLabel}<ArrowUpLeft size={18} aria-hidden="true" /></Link>
                  <WhatsAppLink label={sector.whatsappLabel} message={`السلام عليكم، وصلت لكم من صفحة القطاعات في موقع الشامخ وأرغب بالاستفسار عن حلول ${sector.title} لمشروعي.`} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sectors-method" aria-labelledby="sectors-method-title">
        <div className="sectors-method-inner">
          <div className="sectors-method-heading">
            <span>كيف نختار الحل؟</span>
            <h2 id="sectors-method-title">نبدأ بفهم طبيعة المكان والاستخدام</h2>
            <p>اختيار نظام الرفوف يرتبط بتفاصيل المشروع وطريقة العمل اليومية.</p>
          </div>
          <div className="sectors-factors">
            {factors.map(({ icon: Icon, title, text }) => (
              <div className="sectors-factor" key={title}>
                <Icon size={27} strokeWidth={1.7} aria-hidden="true" />
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sectors-location" aria-labelledby="sectors-location-title">
        <div className="sectors-location-inner">
          <div>
            <span className="sectors-kicker">خدمة داخل المملكة</span>
            <h2 id="sectors-location-title">نخدم مشاريع جدة والرياض</h2>
            <p>نوفر حلول الرفوف والتخزين للمشاريع في جدة والرياض مع إمكانية خدمة مشاريع في مناطق أخرى من المملكة.</p>
          </div>
          <div className="sectors-location-links">
            <Link href="/jeddah">حلول الرفوف في جدة<ArrowUpLeft size={17} aria-hidden="true" /></Link>
            <Link href="/riyadh">حلول الرفوف في الرياض<ArrowUpLeft size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="sectors-solutions" aria-labelledby="sectors-solutions-title">
        <div className="sectors-solutions-inner">
          <div className="sectors-solutions-heading">
            <span className="sectors-kicker">حلول الشامخ</span>
            <h2 id="sectors-solutions-title">اكتشف حلولنا حسب النظام</h2>
          </div>
          <div className="sectors-solution-links">
            {solutionLinks.map(({ title, description, href, icon: Icon }, index) => (
              <Link className="sectors-solution-link" href={href} key={title}>
                <span className="sectors-solution-number">0{index + 1}</span>
                <span className="sectors-solution-icon"><Icon size={24} aria-hidden="true" /></span>
                <span className="sectors-solution-text"><strong>{title}</strong><small>{description}</small></span>
                <ArrowUpLeft className="sectors-solution-arrow" size={19} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sectors-final-cta" aria-labelledby="sectors-cta-title">
        <div className="sectors-cta-inner">
          <span className="sectors-kicker">تواصل معنا</span>
          <h2 id="sectors-cta-title">ما طبيعة مشروعك؟</h2>
          <p>شاركنا نوع النشاط والمساحة، وسنساعدك في اختيار نظام الرفوف والتخزين المناسب.</p>
          <WhatsAppLink label="أرسل تفاصيل مشروعك" message={finalMessage} />
          <CircleHelp className="sectors-cta-mark" size={126} strokeWidth={0.7} aria-hidden="true" />
        </div>
      </section>
    </div>
  );
}
