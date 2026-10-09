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

const retailMessage = 'السلام عليكم، وصلت لكم من صفحة رفوف المتاجر. المدينة: [اكتب المدينة]، نوع النشاط: [اكتب النشاط]، المساحة والمنتجات: [اكتب التفاصيل].';
const finalMessage = 'السلام عليكم، أود مناقشة رفوف لمتجري. المدينة: [اكتب المدينة]، النشاط: [اكتب النشاط]، المساحة التقريبية: [اكتب المساحة]، المنتجات: [اكتب التفاصيل].';

const trustItems = [
  { icon: Ruler, title: 'مراعاة مساحة المتجر' },
  { icon: PackageCheck, title: 'ترتيب المنتجات' },
  { icon: Store, title: 'اختيار حسب النشاط' },
  { icon: Truck, title: 'جدة والرياض' },
];

const retailSections = [
  {
    number: '01',
    eyebrow: 'حلول للمتاجر الغذائية',
    title: 'رفوف السوبر ماركت',
    description: 'حلول عرض تساعد على تنظيم الأقسام والممرات، وترتيب المنتجات بصورة واضحة وسهلة الوصول.',
    image: '/photos/market.webp',
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
    image: '/photos/store.webp',
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
    image: '/photos/black.webp',
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
  { image: '/photos/store.webp', alt: 'رفوف متجر غذائي منظمة', label: 'تجهيز سوبر ماركت' },
  { image: '/photos/black.webp', alt: 'رفوف عرض تجارية سوداء بحواف خضراء', label: 'رفوف عرض تجارية' },
  { image: '/photos/pharmacy.jpeg', alt: 'رفوف صيدلية بيضاء وزرقاء', label: 'تجهيز صيدلية' },
  { image: '/photos/market.webp', alt: 'وحدات رفوف عرض متجر بحواف خضراء', label: 'وحدات عرض' },
  { image: '/photos/white.webp', alt: 'رفوف عرض بيضاء في مساحة داخلية', label: 'رفوف متجر' },
];

const faqs = [
  { q: 'ما رفوف العرض المناسبة لمتجري؟', a: 'يعتمد الاختيار على النشاط، ومساحة المتجر، والمنتجات، وحركة العملاء. شارك هذه التفاصيل لمناقشة توزيع الرفوف.' },
  { q: 'ما المعلومات المطلوبة لطلب عرض سعر؟', a: 'أرسل المدينة، ونوع النشاط، وأبعاد المتجر أو مخططه إن توفر، وطبيعة المنتجات. تساعد الصور على فهم المساحة وطريقة العرض المطلوبة.' },
  { q: 'هل يمكن توزيع الرفوف الجدارية والوسطية حسب مساحة المتجر؟', a: 'تُراجع الأبعاد والممرات والمنتجات ومسار الحركة قبل مناقشة التوزيع. لا يوجد مقاس واحد يناسب كل متجر.' },
  { q: 'هل تخدمون المتاجر في جدة والرياض؟', a: 'نعم، نخدم المشاريع في جدة والرياض. اختر المدينة من روابط الخدمة المحلية أسفل الصفحة.' },
  { q: 'هل يشمل عرض السعر التوريد أو التركيب؟', a: 'يتحدد نطاق العرض بحسب المشروع. اذكر المطلوب عند التواصل حتى تتضح الخيارات المتاحة قبل التسعير.' },
];

export default function RetailShelvingView() {
  return (
    <div className="retail-page">
      <section className="retail-hero" aria-labelledby="retail-title">
        <div className="retail-hero-photo">
          <Image src="/photos/store.webp" alt="مساحة متجر مجهزة برفوف عرض وتنظيم المنتجات" fill priority sizes="(max-width: 700px) 100vw, 50vw" />
          <div className="retail-hero-photo-shade" />
        </div>
        <div className="retail-hero-copy">
          <nav className="retail-breadcrumb" aria-label="مسار التنقل">
            <Link href="/">الرئيسية</Link><ArrowLeft size={13} aria-hidden="true" />
            <Link href="/solutions">حلولنا</Link><ArrowLeft size={13} aria-hidden="true" />
            <span>رفوف المحلات والسوبر ماركت</span>
          </nav>
          <span className="retail-eyebrow">حلول العرض التجاري</span>
          <h1 id="retail-title">رفوف المحلات والسوبر ماركت</h1>
          <p>تعرّف على رفوف العرض للمحلات والسوبر ماركت والبقالات. يعتمد توزيع الوحدات على مساحة المتجر وطبيعة المنتجات وحركة العملاء.</p>
          <div className="retail-service-line"><MapPin size={16} aria-hidden="true" />جدة <i /> الرياض</div>
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
          <h2 id="retail-services-title">رفوف المتاجر والسوبر ماركت والبقالات</h2>
          <p>تختلف احتياجات العرض بين نشاط وآخر؛ ابدأ بمساحة الموقع والمنتجات والممرات وطريقة حركة العملاء.</p>
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
            <h2 id="retail-design-title">كيف تختار توزيع رفوف المتجر؟</h2>
            <p>قارن أبعاد الموقع والممرات، وطبيعة المنتجات، والوحدات الجدارية والوسطية المطلوبة قبل تحديد التوزيع.</p>
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
          <h2 id="retail-display-title">أنواع رفوف العرض التجاري</h2>
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
          <div className="retail-local-photo"><Image src="/photos/white.webp" alt="رفوف عرض بيضاء في مساحة تجارية" fill sizes="(max-width:700px) 100vw,45vw"/></div>
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
        title="ناقش رفوف متجرك"
        description="أرسل المدينة ونوع النشاط وأبعاد المتجر وطبيعة المنتجات. أرفق صورة أو مخططاً إن توفر لمناقشة التوزيع وطلب عرض سعر."
        message={finalMessage}
      />
    </div>
  );
}
