import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpLeft,
  Boxes,
  Building2,
  Check,
  LayoutGrid,
  MapPin,
  Package,
  PackageCheck,
  Ruler,
  Store,
  Truck,
  Wrench,
} from 'lucide-react';
import { CtaBand, WhatsAppButton } from '@/components/UI';
import './retail-shelving.css';

const retailMessage = 'السلام عليكم، وصلت لكم من صفحة رفوف المحلات والسوبر ماركت في موقع الشامخ، وأرغب بالاستفسار عن تجهيز متجري.';
const finalMessage = 'السلام عليكم، وصلت لكم من صفحة رفوف المحلات والسوبر ماركت في موقع الشامخ وأرغب بمناقشة تجهيز متجري.';

const trustItems = [
  { icon: Ruler, title: 'استغلال أفضل للمساحة' },
  { icon: PackageCheck, title: 'تنظيم واضح للمنتجات' },
  { icon: Store, title: 'حلول حسب طبيعة النشاط' },
  { icon: Truck, title: 'توريد وتركيب' },
];

const retailSections = [
  {
    number: '01',
    eyebrow: 'حلول للمتاجر الغذائية',
    title: 'رفوف السوبر ماركت',
    description: 'حلول عرض تساعد على تنظيم الأقسام والممرات، وترتيب المنتجات بصورة واضحة وسهلة الوصول.',
    image: '/photos/market.jpeg',
    alt: 'رفوف عرض تجارية داكنة بحواف خضراء في مساحة متجر',
    points: ['وحدات جدارية', 'وحدات وسطية', 'رفوف عرض', 'تنظيم الممرات'],
    cta: 'استفسر عن رفوف السوبر ماركت',
    message: 'السلام عليكم، وصلت لكم من صفحة رفوف المحلات والسوبر ماركت في موقع الشامخ وأرغب بالاستفسار عن رفوف سوبر ماركت لمشروعي.',
  },
  {
    number: '02',
    eyebrow: 'حلول للمساحات المتنوعة',
    title: 'رفوف البقالات والمتاجر الغذائية',
    description: 'حلول مناسبة للمساحات الصغيرة والمتوسطة تساعد على استغلال كل جزء من المتجر مع سهولة ترتيب وعرض المنتجات.',
    image: '/photos/store.jpeg',
    alt: 'رفوف متجر غذائي مرتبة في مساحة عرض داخلية',
    points: ['استغلال المساحات الصغيرة', 'سهولة الوصول للمنتجات', 'ترتيب عملي وواضح'],
    message: 'السلام عليكم، وصلت لكم من صفحة رفوف المحلات والسوبر ماركت في موقع الشامخ وأرغب بالاستفسار عن رفوف بقالة لمشروعي.',
  },
  {
    number: '03',
    eyebrow: 'حلول عرض وتنظيم',
    title: 'رفوف الصيدليات',
    description: 'أنظمة عرض وتنظيم تساعد على ترتيب المنتجات والأدوية بصورة واضحة وعملية مع الاستفادة من الجدران والمساحات الوسطية.',
    image: '/photos/pharmacy.jpeg',
    alt: 'رفوف صيدلية بيضاء وزرقاء لترتيب المنتجات',
    points: ['استفادة من الجدران', 'وحدات وسطية', 'ترتيب واضح للمنتجات'],
    cta: 'استفسر عن رفوف الصيدليات',
    message: 'السلام عليكم، وصلت لكم من صفحة رفوف المحلات والسوبر ماركت في موقع الشامخ وأرغب بالاستفسار عن رفوف صيدلية لمشروعي.',
  },
  {
    number: '04',
    eyebrow: 'تجهيزات للمساحات التجارية',
    title: 'رفوف المحلات التجارية والمعارض',
    description: 'حلول عرض تساعد على تنظيم المنتجات وتقديمها بصورة احترافية تتناسب مع هوية وطبيعة النشاط التجاري.',
    image: '/photos/black.jpeg',
    alt: 'رفوف عرض تجارية سوداء بحواف خضراء',
    points: ['وحدات جدارية', 'وحدات عرض', 'رفوف تجارية', 'تجهيزات محلات'],
    message: 'السلام عليكم، وصلت لكم من صفحة رفوف المحلات والسوبر ماركت في موقع الشامخ وأرغب بالاستفسار عن تجهيز محل تجاري.',
  },
];

const factors = [
  { icon: Package, title: 'نوع المنتجات', text: 'حجم وطبيعة المنتجات المعروضة' },
  { icon: Ruler, title: 'مساحة المتجر', text: 'الأبعاد والممرات المتاحة' },
  { icon: Boxes, title: 'حركة العملاء', text: 'سهولة التنقل والوصول للمنتجات' },
  { icon: LayoutGrid, title: 'طريقة العرض', text: 'الجدران والوحدات الوسطية ونقاط العرض' },
];

const displayTypes = [
  { icon: Building2, title: 'رفوف جدارية', text: 'استفادة منظمة من جدران المساحة.' },
  { icon: Store, title: 'رفوف وسطية', text: 'تقسيم العرض وترتيب مسارات المتجر.' },
  { icon: PackageCheck, title: 'وحدات عرض', text: 'إبراز المنتجات بحسب طبيعة النشاط.' },
  { icon: Boxes, title: 'رفوف محيطية', text: 'تنظيم العرض على امتداد المساحة.' },
  { icon: Wrench, title: 'تجهيزات محلات', text: 'حلول عرض وتجهيز للمساحات التجارية.' },
  { icon: Ruler, title: 'حلول حسب المساحة', text: 'توزيع يراعي أبعاد المتجر واستخدامه.' },
];

const gallery = [
  { image: '/photos/store.jpeg', alt: 'رفوف متجر غذائي منظمة', label: 'تجهيز سوبر ماركت' },
  { image: '/photos/black.jpeg', alt: 'رفوف عرض تجارية سوداء بحواف خضراء', label: 'رفوف عرض تجارية' },
  { image: '/photos/pharmacy.jpeg', alt: 'رفوف صيدلية بيضاء وزرقاء', label: 'تجهيز صيدلية' },
  { image: '/photos/market.jpeg', alt: 'وحدات رفوف عرض متجر بحواف خضراء', label: 'وحدات عرض' },
  { image: '/photos/white.jpeg', alt: 'رفوف عرض بيضاء في مساحة داخلية', label: 'رفوف متجر' },
];

const faqs = [
  { q: 'ما أنواع رفوف السوبر ماركت المتوفرة؟', a: 'تشمل حلول العرض وحدات جدارية ووسطية ورفوفاً لتنظيم الممرات، ويُختار التوزيع بحسب المنتجات ومساحة المتجر.' },
  { q: 'هل يمكن تصميم الرفوف حسب مساحة المتجر؟', a: 'نعم، تتم مراعاة أبعاد المتجر والممرات وطبيعة المنتجات وطريقة حركة العملاء عند مناقشة توزيع الرفوف.' },
  { q: 'هل توفرون رفوف للبقالات الصغيرة؟', a: 'نعم، تتوفر حلول تناسب المساحات الصغيرة والمتوسطة مع ترتيب عملي للمنتجات وسهولة الوصول إليها.' },
  { q: 'هل لديكم رفوف للصيدليات؟', a: 'نعم، تشمل الحلول رفوفاً جدارية ووحدات وسطية تساعد على تنظيم المنتجات والأدوية.' },
  { q: 'هل يمكن تجهيز متجر كامل؟', a: 'يمكن مناقشة تجهيز المتجر وفق نوع النشاط ومساحة الموقع والأقسام وطريقة العرض المطلوبة.' },
  { q: 'هل توفرون التركيب؟', a: 'نعم، تتوفر خدمة التوريد والتركيب، وتُناقش تفاصيلها بحسب احتياجات المشروع.' },
  { q: 'هل تخدمون جدة والرياض؟', a: 'نخدم مشاريع جدة والرياض، كما يمكن الاستفسار عن خدمة المشاريع في مناطق أخرى من المملكة.' },
];

export default function RetailShelvingView() {
  return (
    <div className="retail-page">
      <section className="retail-hero" aria-labelledby="retail-title">
        <div className="retail-hero-photo">
          <Image src="/photos/store.jpeg" alt="مساحة متجر مجهزة برفوف عرض وتنظيم المنتجات" fill priority sizes="(max-width: 700px) 100vw, 50vw" />
          <div className="retail-hero-photo-shade" />
        </div>
        <div className="retail-hero-copy">
          <nav className="retail-breadcrumb" aria-label="مسار التنقل">
            <Link href="/">الرئيسية</Link><ArrowLeft size={13} aria-hidden="true" />
            <Link href="/solutions">حلولنا</Link><ArrowLeft size={13} aria-hidden="true" />
            <span>رفوف المحلات والسوبر ماركت</span>
          </nav>
          <span className="retail-eyebrow">حلول العرض التجاري</span>
          <h1 id="retail-title">رفوف المحلات<br />والسوبر ماركت</h1>
          <p>نوفر حلول رفوف وعرض للمحلات والسوبر ماركت والبقالات والصيدليات، تساعد على تنظيم المنتجات واستغلال المساحة وتقديم المتجر بصورة أكثر احترافية.</p>
          <div className="retail-service-line"><MapPin size={16} aria-hidden="true" />جدة <i /> الرياض <i /> مختلف مناطق المملكة</div>
          <WhatsAppButton message={retailMessage} label="استفسر عن تجهيز متجرك" />
        </div>
      </section>

      <section className="retail-trust" aria-label="مزايا حلول العرض">
        <div className="retail-trust-inner">
          {trustItems.map(({ icon: Icon, title }) => <div className="retail-trust-item" key={title}><Icon size={24} strokeWidth={1.7} aria-hidden="true" /><strong>{title}</strong></div>)}
        </div>
      </section>

      <section className="retail-services" aria-labelledby="retail-services-title">
        <div className="retail-intro">
          <span className="retail-kicker">حلول العرض والتجهيز</span>
          <h2 id="retail-services-title">أنظمة رفوف تناسب مختلف أنواع المتاجر</h2>
          <p>يختلف تصميم الرفوف حسب طبيعة النشاط، حجم المساحة، نوع المنتجات وطريقة حركة العملاء داخل المتجر.</p>
          <div className="retail-related-links">
            <Link href="/solutions">تعرّف على حلولنا<ArrowUpLeft size={15} aria-hidden="true" /></Link>
            <Link href="/sectors">القطاعات التي نخدمها<ArrowUpLeft size={15} aria-hidden="true" /></Link>
            <Link href="/warehouse-racking">رفوف المستودعات<ArrowUpLeft size={15} aria-hidden="true" /></Link>
          </div>
        </div>

        <div className="retail-service-list">
          {retailSections.map((item, index) => (
            <article className={`retail-service-row retail-service-row-${item.number}`} key={item.number}>
              <div className="retail-service-image">
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
                <span>{item.number}</span>
              </div>
              <div className="retail-service-copy">
                <span className="retail-kicker">{item.eyebrow}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <ul>{item.points.map((point) => <li key={point}><Check size={15} aria-hidden="true" />{point}</li>)}</ul>
                {item.cta && <WhatsAppButton message={item.message} label={item.cta} />}
                {index === 3 && <Link className="retail-inline-link" href="/contact">ناقش تجهيز متجرك مع فريقنا<ArrowUpLeft size={16} aria-hidden="true" /></Link>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="retail-design" aria-labelledby="retail-design-title">
        <div className="retail-design-inner">
          <div className="retail-design-heading">
            <span className="retail-kicker">تصميم يخدم تجربة المتجر</span>
            <h2 id="retail-design-title">كيف نختار توزيع الرفوف داخل المتجر؟</h2>
            <p>نراعي طريقة عرض المنتجات وحركة العملاء حتى يخدم التوزيع الاستخدام اليومي للمساحة.</p>
          </div>
          <div className="retail-factors">
            {factors.map(({ icon: Icon, title, text }, index) => <div className="retail-factor" key={title}><span>0{index + 1}</span><Icon size={27} strokeWidth={1.7} aria-hidden="true"/><strong>{title}</strong><small>{text}</small></div>)}
          </div>
        </div>
      </section>

      <section className="retail-display-types" aria-labelledby="retail-display-title">
        <div className="retail-display-inner">
          <div className="retail-display-heading">
            <span className="retail-kicker">أنظمة العرض</span>
            <h2 id="retail-display-title">خيارات متعددة لتجهيز المساحة</h2>
          </div>
          <div className="retail-display-grid">
            {displayTypes.map(({ icon: Icon, title, text }, index) => <article className="retail-display-item" key={title}><span className="retail-display-number">0{index + 1}</span><Icon size={25} strokeWidth={1.7} aria-hidden="true"/><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="retail-gallery-section" aria-labelledby="retail-gallery-title">
        <div className="retail-gallery-inner">
          <div className="retail-gallery-heading">
            <div><span className="retail-kicker">حلول العرض</span><h2 id="retail-gallery-title">صور توضيحية لرفوف المتاجر</h2></div>
            <Link href="/projects">استكشف صور الحلول<ArrowUpLeft size={17} aria-hidden="true"/></Link>
          </div>
          <div className="retail-gallery">
            {gallery.map((item, index) => <Link href="/projects" className={`retail-gallery-item retail-gallery-item-${index + 1}`} key={item.image}><Image src={item.image} alt={item.alt} fill sizes="(max-width:700px) 100vw,(max-width:1024px) 50vw,40vw"/><span>{item.label}</span></Link>)}
          </div>
        </div>
      </section>

      <section className="retail-local" aria-labelledby="retail-local-title">
        <div className="retail-local-inner">
          <div className="retail-local-photo"><Image src="/photos/white.jpeg" alt="رفوف عرض بيضاء في مساحة تجارية" fill sizes="(max-width:700px) 100vw,45vw"/></div>
          <div className="retail-local-copy">
            <span className="retail-kicker">مناطق الخدمة</span>
            <h2 id="retail-local-title">تجهيز المحلات والسوبر ماركت في جدة والرياض</h2>
            <div className="retail-local-cities">
              <article><span>جدة</span><p>حلول رفوف وتجهيز للمحلات والسوبر ماركت في جدة بحسب مساحة المتجر وطبيعة النشاط.</p><Link href="/jeddah">رفوف وتجهيز محلات جدة<ArrowUpLeft size={16} aria-hidden="true"/></Link></article>
              <article><span>الرياض</span><p>حلول عرض وتجهيز للمشاريع التجارية في الرياض مع أنظمة تناسب مختلف أنواع المتاجر.</p><Link href="/riyadh">رفوف وتجهيز محلات الرياض<ArrowUpLeft size={16} aria-hidden="true"/></Link></article>
            </div>
            <p className="retail-contact-note">لمناقشة تفاصيل المشروع، <Link href="/contact">تواصل معنا</Link>.</p>
          </div>
        </div>
      </section>

      <section className="retail-faq" aria-labelledby="retail-faq-title">
        <div className="retail-faq-inner">
          <div className="retail-faq-heading"><span className="retail-kicker">أسئلة شائعة</span><h2 id="retail-faq-title">أسئلة حول رفوف المحلات والسوبر ماركت</h2></div>
          <div className="retail-faq-list">{faqs.map(({ q, a }) => <details key={q}><summary>{q}<ArrowLeft size={18} aria-hidden="true"/></summary><p>{a}</p></details>)}</div>
        </div>
      </section>

      <CtaBand
        title="هل تخطط لتجهيز متجرك؟"
        description="أرسل لنا نوع النشاط ومساحة الموقع، وسنساعدك في اختيار نظام العرض والرفوف المناسب."
        message={finalMessage}
      />
    </div>
  );
}
