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
    description: 'للبضائع الأثقل أو الوحدات الأكبر حجماً. يتطلب الاختيار معرفة وزن الوحدة وأبعادها وارتفاع الموقع وطريقة المناولة.',
    image: '/photos/warehouse-2.jpeg',
    alt: 'رفوف تخزين زرقاء وبرتقالية في مستودع صناعي',
    points: ['وزن وأبعاد البضائع', 'ارتفاع الموقع والممرات', 'معدات وطريقة المناولة'],
    cta: 'استفسر عن التخزين الثقيل',
    message: 'السلام عليكم، وصلت لكم من صفحة رفوف المستودعات في موقع الشامخ وأرغب بالاستفسار عن حلول التخزين الثقيل لمستودعي.',
  },
  {
    number: '02',
    eyebrow: 'حلول مرنة للمخازن',
    title: 'رفوف التخزين المتوسط',
    description: 'للبضائع والصناديق متوسطة الحجم. يُراجع ترتيب الأصناف وطريقة الوصول إليها ومساحة الممرات قبل تحديد التوزيع.',
    image: '/photos/warehouse-3.webp',
    alt: 'نظام رفوف مستودع متوسط التخزين بأرفف زرقاء وبرتقالية',
    points: ['حجم ووزن الوحدة', 'عدد الأصناف وطريقة الوصول', 'المساحة المتاحة للممرات'],
  },
  {
    number: '03',
    eyebrow: 'للمساحات العملية',
    title: 'رفوف التخزين الخفيف',
    description: 'للأصناف الأخف أو القطع الصغيرة التي تحتاج إلى ترتيب واضح وسهولة وصول. يظل الوزن والأبعاد الفعلية أساس تحديد الملاءمة.',
    image: '/photos/warehouse-4.jpeg',
    alt: 'رفوف تخزين خفيفة بيضاء في مساحة داخلية',
    points: ['طبيعة الأصناف المخزنة', 'الأبعاد والوزن الفعلي', 'سهولة الوصول والترتيب'],
  },
  {
    number: '04',
    eyebrow: 'استغلال المساحة الرأسية',
    title: 'أنظمة التخزين متعددة المستويات',
    description: 'قد تستفيد بعض المواقع من مستويات تخزين إضافية. يتطلب بحثها مراجعة ارتفاع الموقع ومسارات الحركة ومتطلبات الاستخدام.',
    image: '/photos/warehouse-5.webp',
    alt: 'سلالم وممرات ضمن نظام تخزين مستودع متعدد المستويات',
    points: ['ارتفاع الموقع', 'مسارات الحركة والوصول', 'احتياج التخزين الفعلي'],
    cta: 'استفسر عن هذا النظام',
    message: 'السلام عليكم، وصلت لكم من صفحة رفوف المستودعات في موقع الشامخ وأرغب بالاستفسار عن أنظمة التخزين متعددة المستويات لمشروعي.',
  },
];

const trustItems = [
  { icon: Ruler, title: 'اختيار حسب الموقع', text: 'المساحة والارتفاع والممرات' },
  { icon: Boxes, title: 'احتياجات التخزين', text: 'ثقيل · متوسط · خفيف' },
  { icon: Wrench, title: 'طلب عرض سعر', text: 'ابدأ بتفاصيل الموقع والاستخدام' },
  { icon: MapPin, title: 'جدة والرياض', text: 'صفحتان لمعلومات الخدمة المحلية' },
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
  { number: '01', title: 'حدد المدينة والنشاط', text: 'اذكر موقع المستودع وطبيعة التخزين.' },
  { number: '02', title: 'أرسل أبعاد الموقع', text: 'أضف الارتفاع والممرات إن توفرت.' },
  { number: '03', title: 'صف البضائع', text: 'اذكر الأوزان والأبعاد وطريقة المناولة.' },
  { number: '04', title: 'أرفق ما يساعد', text: 'يمكنك إرسال صور أو مخطط للموقع.' },
  { number: '05', title: 'ناقش عرض السعر', text: 'تُراجع التفاصيل ونطاق التوريد أو التركيب قبل التسعير.' },
];

const gallery = [
  { image: '/photos/hero.webp', alt: 'ممر مستودع تجاري مجهز برفوف تخزين زرقاء وبرتقالية', label: 'تجهيز رفوف مستودع' },
  { image: '/photos/warehouse-2.jpeg', alt: 'رفوف صناعية زرقاء وبرتقالية على امتداد مستودع', label: 'نظام تخزين صناعي' },
  { image: '/photos/warehouse-3.webp', alt: 'رفوف تخزين مستودع من زاوية جانبية', label: 'تنظيم مستودع تجاري' },
  { image: '/photos/warehouse-5.webp', alt: 'سلالم وممرات في مساحة تخزين متعددة المستويات', label: 'رفوف تخزين متعددة المستويات' },
  { image: '/photos/warehouse-4.jpeg', alt: 'رفوف تخزين عملية في مستودع داخلي', label: 'أنظمة تخزين للمخازن' },
];

const faqs = [
  { q: 'كيف أختار بين التخزين الثقيل والمتوسط والخفيف؟', a: 'ابدأ بوزن الوحدة وأبعادها، وطريقة المناولة، وارتفاع الموقع ومساحة الممرات. لا يمكن تحديد ملاءمة النظام أو سعته من دون هذه التفاصيل.' },
  { q: 'ما المعلومات المطلوبة لطلب عرض سعر؟', a: 'أرسل المدينة، وأبعاد المستودع وارتفاعه إن توفرت، ونوع البضائع وأوزانها وطريقة المناولة. تساعد الصور أو المخطط على فهم الموقع.' },
  { q: 'هل يمكن اختيار توزيع الرفوف حسب مساحة المستودع؟', a: 'تُراجع المساحة والارتفاع والممرات وطريقة حركة البضائع عند مناقشة التوزيع. أرسل الأبعاد أو مخطط الموقع لبدء النقاش.' },
  { q: 'هل تخدمون مشاريع المستودعات في جدة والرياض؟', a: 'نعم، نخدم مشاريع المستودعات في جدة والرياض. استخدم روابط المدينتين في قسم مناطق الخدمة لمعرفة الصفحة المناسبة.' },
  { q: 'هل يشمل عرض السعر التوريد والتركيب؟', a: 'يتحدد نطاق العرض بحسب المشروع. اذكر ما تحتاجه من توريد أو تركيب عند التواصل لتوضيح المتاح قبل التسعير.' },
];

export default function WarehouseRackingView() {
  return (
    <div className="warehouse-page">
      <section className="warehouse-hero" aria-labelledby="warehouse-title">
        <Image
          className="warehouse-hero-image"
          src="/photos/hero.webp"
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
          <h1 id="warehouse-title">رفوف مستودعات<br />وأنظمة التخزين</h1>
          <p>تعرّف على خيارات التخزين الثقيل والمتوسط والخفيف. يعتمد اختيار الرفوف على وزن البضائع وأبعادها، وارتفاع المستودع، وطريقة المناولة.</p>
          <div className="warehouse-hero-service"><MapPin size={16} aria-hidden="true" /> نخدم جدة <i /> الرياض</div>
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
          <h2 id="warehouse-types-title">رفوف المستودعات للتخزين الثقيل والمتوسط والخفيف</h2>
          <p>لا يعتمد الاختيار على الاسم فقط؛ قارن وزن الوحدة وأبعادها، وارتفاع الموقع، وطريقة المناولة ومساحة الممرات.</p>
          <div className="warehouse-related-links">
            <Link href="/solutions">تعرّف على حلولنا<ArrowUpLeft size={15} aria-hidden="true" /></Link>
            <Link href="/sectors">القطاعات التي نخدمها<ArrowUpLeft size={15} aria-hidden="true" /></Link>
            <Link href="/retail-shelving">رفوف المتاجر والسوبر ماركت<ArrowUpLeft size={15} aria-hidden="true" /></Link>
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
            <h2 id="warehouse-process-title">كيف تطلب عرض سعر لرفوف المستودعات؟</h2>
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
            <div><span className="warehouse-kicker">أنظمة التخزين</span><h2 id="warehouse-gallery-title">أمثلة توضيحية لرفوف المستودعات</h2><p>الصور لشرح أنواع الرفوف وليست توثيقاً لمشاريع منفذة.</p></div>
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
              <p>نخدم مشاريع رفوف المستودعات في جدة. شارك طبيعة التخزين والمساحة لمناقشة الخيارات الملائمة للموقع.</p>
              <Link href="/jeddah">رفوف مستودعات جدة<ArrowUpLeft size={17} aria-hidden="true" /></Link>
            </article>
            <article>
              <span className="warehouse-city-icon"><MapPin size={21} aria-hidden="true" /></span>
              <h3>الرياض</h3>
              <p>نوفر حلول تخزين مستودعات للمشاريع في الرياض وفق طبيعة النشاط والمساحة والاستخدام.</p>
              <Link href="/riyadh">رفوف مستودعات الرياض<ArrowUpLeft size={17} aria-hidden="true" /></Link>
            </article>
          </div>
          <p className="warehouse-contact-link">لمناقشة تفاصيل مشروعك أو الاستفسار عن مدينة أخرى، <Link href="/contact">تواصل معنا</Link>.</p>
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
        title="ناقش احتياج مستودعك"
        description="أرسل المدينة وأبعاد الموقع والبضائع وطريقة المناولة. أرفق صورة أو مخططاً إن توفر لمناقشة الخيارات وطلب عرض سعر."
        message={messages.warehouse}
      />
    </div>
  );
}

function ArrowDownIcon() {
  return <ArrowLeft className="warehouse-faq-chevron" size={18} aria-hidden="true" />;
}
