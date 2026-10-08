import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpLeft,
  Boxes,
  Building2,
  Check,
  MapPin,
  Package,
  Ruler,
  Truck,
  Warehouse,
  Wrench,
} from 'lucide-react';
import { CtaBand, WhatsAppButton } from '@/components/UI';
import { messages } from '@/lib/data';
import './warehouse-racking.css';

const rackTypes = [
  {
    number: '01',
    eyebrow: 'رفوف تخزين صناعي',
    title: 'رفوف التخزين الثقيل',
    description: 'حلول مناسبة للمستودعات التي تحتاج إلى تخزين كميات كبيرة مع تنظيم واضح للممرات واستغلال الارتفاع والمساحة.',
    image: '/photos/warehouse-2.jpeg',
    alt: 'رفوف تخزين زرقاء وبرتقالية في مستودع صناعي',
    points: ['استغلال رأسي للمساحة', 'تنظيم واضح للمخزون', 'مناسب للمستودعات الكبيرة'],
    cta: 'استفسر عن التخزين الثقيل',
    message: 'السلام عليكم، وصلت لكم من صفحة رفوف المستودعات في موقع الشامخ وأرغب بالاستفسار عن حلول التخزين الثقيل لمستودعي.',
  },
  {
    number: '02',
    eyebrow: 'حلول مرنة للمخازن',
    title: 'رفوف التخزين المتوسط',
    description: 'حل عملي للمخازن التي تحتاج إلى مرونة في توزيع المساحات والوصول السهل إلى المنتجات والبضائع.',
    image: '/photos/warehouse-3.jpeg',
    alt: 'نظام رفوف مستودع متوسط التخزين بأرفف زرقاء وبرتقالية',
    points: ['مرونة في التقسيم', 'سهولة الوصول', 'مناسب للاستخدام اليومي'],
  },
  {
    number: '03',
    eyebrow: 'للمساحات العملية',
    title: 'رفوف التخزين الخفيف',
    description: 'أنظمة تخزين مناسبة للمخازن الصغيرة وغرف التخزين والاستخدامات التي تحتاج إلى ترتيب عملي وسريع.',
    image: '/photos/warehouse-4.jpeg',
    alt: 'رفوف تخزين خفيفة بيضاء في مساحة داخلية',
    points: ['للمخازن الصغيرة', 'لغرف التخزين', 'ترتيب عملي وسريع'],
  },
  {
    number: '04',
    eyebrow: 'استغلال المساحة الرأسية',
    title: 'أنظمة التخزين متعددة المستويات',
    description: 'حلول تساعد على استغلال الارتفاع داخل المستودع وتحويل المساحة الرأسية إلى مستويات تخزين إضافية عند الحاجة.',
    image: '/photos/warehouse-5.jpeg',
    alt: 'سلالم وممرات ضمن نظام تخزين مستودع متعدد المستويات',
    points: ['استفادة من الارتفاع', 'مستويات تخزين إضافية', 'توزيع بحسب احتياج الموقع'],
    cta: 'استفسر عن هذا النظام',
    message: 'السلام عليكم، وصلت لكم من صفحة رفوف المستودعات في موقع الشامخ وأرغب بالاستفسار عن أنظمة التخزين متعددة المستويات لمشروعي.',
  },
];

const trustItems = [
  { icon: Ruler, title: 'حل حسب المساحة', text: 'تصميم النظام وفق أبعاد المستودع' },
  { icon: Boxes, title: 'استخدامات متعددة', text: 'ثقيل · متوسط · خفيف' },
  { icon: Wrench, title: 'توريد وتركيب', text: 'تنفيذ بواسطة فريق متخصص' },
  { icon: MapPin, title: 'خدمة جدة والرياض', text: 'ومناطق أخرى من المملكة' },
];

const factors = [
  { icon: Warehouse, title: 'مساحة المستودع', text: 'الأبعاد والممرات المتاحة' },
  { icon: Ruler, title: 'ارتفاع الموقع', text: 'إمكانية الاستفادة من المساحة الرأسية' },
  { icon: Package, title: 'نوع البضائع', text: 'الحجم وطريقة التخزين' },
  { icon: Truck, title: 'طريقة المناولة', text: 'يدوية أو باستخدام معدات حسب المشروع' },
  { icon: Boxes, title: 'حركة المخزون', text: 'سرعة الإدخال والإخراج' },
  { icon: Building2, title: 'التوسع المستقبلي', text: 'إمكانية تطوير النظام لاحقاً' },
];

const process = [
  { number: '01', title: 'فهم الاحتياج', text: 'نتعرف على طبيعة التخزين ومتطلبات التشغيل.' },
  { number: '02', title: 'دراسة المساحة', text: 'نراجع أبعاد المستودع والممرات والارتفاع.' },
  { number: '03', title: 'اختيار النظام', text: 'نحدد نوع الرفوف والتوزيع الملائم للموقع.' },
  { number: '04', title: 'التوريد والتركيب', text: 'يتم تنسيق التوريد والتركيب وفق تفاصيل المشروع.' },
  { number: '05', title: 'التسليم والمتابعة', text: 'نراجع التنفيذ ونتابع استفسارات المشروع.' },
];

const gallery = [
  { image: '/photos/hero.jpeg', alt: 'ممر مستودع تجاري مجهز برفوف تخزين زرقاء وبرتقالية', label: 'تجهيز رفوف مستودع' },
  { image: '/photos/warehouse-2.jpeg', alt: 'رفوف صناعية زرقاء وبرتقالية على امتداد مستودع', label: 'نظام تخزين صناعي' },
  { image: '/photos/warehouse-3.jpeg', alt: 'رفوف تخزين مستودع من زاوية جانبية', label: 'تنظيم مستودع تجاري' },
  { image: '/photos/warehouse-5.jpeg', alt: 'سلالم وممرات في مساحة تخزين متعددة المستويات', label: 'رفوف تخزين متعددة المستويات' },
  { image: '/photos/warehouse-4.jpeg', alt: 'رفوف تخزين عملية في مستودع داخلي', label: 'أنظمة تخزين للمخازن' },
];

const faqs = [
  { q: 'ما أنواع رفوف المستودعات المتوفرة؟', a: 'نوفر حلولاً للتخزين الثقيل والمتوسط والخفيف، بالإضافة إلى أنظمة تخزين متعددة المستويات، ويتم اختيار النظام وفق مساحة الموقع وطبيعة المنتجات وطريقة الاستخدام.' },
  { q: 'هل يمكن تصميم رفوف المستودع حسب المساحة؟', a: 'نعم، تتم دراسة أبعاد المستودع والممرات والارتفاع وطريقة الاستخدام قبل اقتراح توزيع الرفوف والنظام المناسب.' },
  { q: 'هل توفرون تركيب رفوف المستودعات؟', a: 'نوفر التوريد والتركيب للمشاريع، وتُناقش تفاصيل التنفيذ بحسب احتياج الموقع ونطاق المشروع.' },
  { q: 'هل لديكم حلول للتخزين الثقيل والمتوسط والخفيف؟', a: 'نعم، تتوفر خيارات لهذه الاستخدامات، ويعتمد تحديد النظام على طبيعة البضائع والمساحة وطريقة المناولة.' },
  { q: 'هل توفرون رفوف مستودعات في جدة؟', a: 'نخدم مشاريع رفوف المستودعات في جدة والمناطق المحيطة، ويمكن مشاركة تفاصيل الموقع لمناقشة الحل المناسب.' },
  { q: 'هل توفرون رفوف مستودعات في الرياض؟', a: 'نخدم مشاريع رفوف المستودعات في الرياض، ويتم اختيار النظام وفق طبيعة النشاط والمساحة والاستخدام.' },
  { q: 'هل تتوفر صناعة وطنية وصناعة صينية؟', a: 'تتوفر خيارات صناعة وطنية وصينية وفق نوع النظام واحتياج المشروع، ويُحدد الخيار عند مناقشة التفاصيل.' },
];

export default function WarehouseRackingView() {
  return (
    <div className="warehouse-page">
      <section className="warehouse-hero" aria-labelledby="warehouse-title">
        <Image
          className="warehouse-hero-image"
          src="/photos/hero.jpeg"
          alt="ممر مستودع عميق مجهز برفوف تخزين صناعية زرقاء وبرتقالية"
          fill
          priority
          sizes="100vw"
        />
        <div className="warehouse-hero-shade" />
        <div className="warehouse-hero-content">
          <nav className="warehouse-breadcrumb" aria-label="مسار التنقل">
            <Link href="/">الرئيسية</Link><ArrowLeft size={14} aria-hidden="true" />
            <Link href="/solutions">حلولنا</Link><ArrowLeft size={14} aria-hidden="true" />
            <span>رفوف المستودعات</span>
          </nav>
          <span className="warehouse-eyebrow">حلول المستودعات</span>
          <h1 id="warehouse-title">رفوف المستودعات<br />وحلول التخزين الصناعي</h1>
          <p>نوفر حلول رفوف مستودعات للمشاريع في جدة والرياض تناسب التخزين الثقيل والمتوسط والخفيف، ويتم اختيار النظام وفق مساحة المستودع وطبيعة المنتجات وطريقة التشغيل.</p>
          <div className="warehouse-hero-service"><MapPin size={16} aria-hidden="true" /> جدة <i /> الرياض <i /> مختلف مناطق المملكة</div>
          <WhatsAppButton message={messages.warehouse} label="استفسر عن رفوف المستودعات" />
        </div>
        <span className="warehouse-hero-caption">أنظمة تخزين للمساحات الصناعية والتجارية</span>
      </section>

      <section className="warehouse-trust" aria-label="مزايا الخدمة">
        <div className="warehouse-trust-inner">
          {trustItems.map(({ icon: Icon, title, text }) => (
            <div className="warehouse-trust-item" key={title}>
              <Icon size={25} strokeWidth={1.7} aria-hidden="true" />
              <div><strong>{title}</strong><span>{text}</span></div>
            </div>
          ))}
        </div>
      </section>

      <section className="warehouse-types" aria-labelledby="warehouse-types-title">
        <div className="warehouse-section-intro">
          <span className="warehouse-kicker">أنظمة التخزين</span>
          <h2 id="warehouse-types-title">أنواع رفوف المستودعات</h2>
          <p>يختلف نظام التخزين المناسب حسب نوع البضائع، حجم المساحة، طريقة المناولة، ومستوى الاستخدام اليومي.</p>
          <div className="warehouse-related-links">
            <Link href="/solutions">تعرّف على حلولنا<ArrowUpLeft size={15} aria-hidden="true" /></Link>
            <Link href="/sectors">القطاعات التي نخدمها<ArrowUpLeft size={15} aria-hidden="true" /></Link>
          </div>
        </div>

        <div className="warehouse-type-list">
          {rackTypes.map((type) => (
            <article className={`warehouse-type warehouse-type-${type.number}`} key={type.number}>
              <div className="warehouse-type-photo">
                <Image src={type.image} alt={type.alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
                <span>{type.number}</span>
              </div>
              <div className="warehouse-type-copy">
                <span className="warehouse-kicker">{type.eyebrow}</span>
                <h2>{type.title}</h2>
                <p>{type.description}</p>
                <ul>{type.points.map((point) => <li key={point}><Check size={15} aria-hidden="true" />{point}</li>)}</ul>
                {type.cta && <WhatsAppButton message={type.message || messages.warehouse} label={type.cta} />}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="warehouse-decisions" aria-labelledby="warehouse-decisions-title">
        <div className="warehouse-decisions-inner">
          <div className="warehouse-decision-heading">
            <span className="warehouse-kicker">اختيار النظام المناسب</span>
            <h2 id="warehouse-decisions-title">ما الذي ندرسه قبل اختيار رفوف المستودع؟</h2>
            <p>تبدأ التوصية بفهم طبيعة المساحة والمنتجات وطريقة العمل داخل الموقع.</p>
          </div>
          <div className="warehouse-factors">
            {factors.map(({ icon: Icon, title, text }, index) => (
              <div className="warehouse-factor" key={title}>
                <span className="warehouse-factor-number">0{index + 1}</span>
                <Icon size={26} strokeWidth={1.7} aria-hidden="true" />
                <strong>{title}</strong><span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="warehouse-process" aria-labelledby="warehouse-process-title">
        <div className="warehouse-process-inner">
          <div className="warehouse-process-heading">
            <span className="warehouse-kicker">خطوات التنفيذ</span>
            <h2 id="warehouse-process-title">من دراسة المستودع إلى تركيب النظام</h2>
          </div>
          <ol className="warehouse-steps">
            {process.map((step) => (
              <li key={step.number}>
                <span className="warehouse-step-number">{step.number}</span>
                <strong>{step.title}</strong><p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="warehouse-gallery-section" aria-labelledby="warehouse-gallery-title">
        <div className="warehouse-gallery-inner">
          <div className="warehouse-gallery-heading">
            <div><span className="warehouse-kicker">أنظمة التخزين</span><h2 id="warehouse-gallery-title">صور توضيحية لرفوف المستودعات</h2></div>
            <Link className="warehouse-gallery-link" href="/projects">استكشف صور الحلول<ArrowUpLeft size={17} aria-hidden="true" /></Link>
          </div>
          <div className="warehouse-gallery">
            {gallery.map((item, index) => (
              <Link className={`warehouse-gallery-item warehouse-gallery-item-${index + 1}`} href="/projects" key={item.image}>
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 40vw" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="warehouse-local" aria-labelledby="warehouse-local-title">
        <div className="warehouse-local-inner">
          <div className="warehouse-local-heading">
            <span className="warehouse-kicker">مناطق الخدمة</span>
            <h2 id="warehouse-local-title">حلول رفوف المستودعات في جدة والرياض</h2>
          </div>
          <div className="warehouse-cities">
            <article>
              <span className="warehouse-city-icon"><MapPin size={21} aria-hidden="true" /></span>
              <h3>جدة</h3>
              <p>نوفر حلول رفوف مستودعات للمشاريع في جدة والمناطق المحيطة مع أنظمة تناسب طبيعة التخزين والمساحة.</p>
              <Link href="/jeddah">رفوف مستودعات جدة<ArrowUpLeft size={17} aria-hidden="true" /></Link>
            </article>
            <article>
              <span className="warehouse-city-icon"><MapPin size={21} aria-hidden="true" /></span>
              <h3>الرياض</h3>
              <p>نوفر حلول تخزين مستودعات للمشاريع في الرياض وفق طبيعة النشاط والمساحة والاستخدام.</p>
              <Link href="/riyadh">رفوف مستودعات الرياض<ArrowUpLeft size={17} aria-hidden="true" /></Link>
            </article>
          </div>
          <p className="warehouse-contact-link">للاستفسار عن مشروعك في مناطق أخرى، <Link href="/contact">تواصل مع فريقنا</Link>.</p>
        </div>
      </section>

      <section className="warehouse-faq" aria-labelledby="warehouse-faq-title">
        <div className="warehouse-faq-inner">
          <div className="warehouse-faq-heading">
            <span className="warehouse-kicker">أسئلة شائعة</span>
            <h2 id="warehouse-faq-title">أسئلة حول رفوف المستودعات</h2>
          </div>
          <div className="warehouse-faq-list">
            {faqs.map(({ q, a }) => <details key={q}><summary>{q}<ArrowDownIcon /></summary><p>{a}</p></details>)}
          </div>
        </div>
      </section>

      <CtaBand
        title="هل تريد تنظيم مستودعك بشكل أفضل؟"
        description="أرسل لنا تفاصيل المساحة وطبيعة التخزين، وسنساعدك في اختيار النظام المناسب لمشروعك."
        message="السلام عليكم، وصلت لكم من صفحة رفوف المستودعات في موقع الشامخ وأرغب بمناقشة نظام تخزين مناسب لمستودعي."
      />
    </div>
  );
}

function ArrowDownIcon() {
  return <ArrowLeft className="warehouse-faq-chevron" size={18} aria-hidden="true" />;
}
