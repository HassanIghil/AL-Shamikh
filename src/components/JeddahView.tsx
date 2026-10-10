import Image from 'next/image';
import { StaticResponsiveImage } from '@/components/StaticResponsiveImage';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpLeft,
  Boxes,
  Building2,
  MapPin,
  Package,
  Ruler,
  Settings2,
  Store,
  Truck,
  Warehouse,
  Wrench,
} from 'lucide-react';
import { CtaBand, ResponsiveHeroImage, WhatsAppButton } from '@/components/UI';
import JeddahGallery from '@/components/JeddahGallery';
import './jeddah.css';

const heroMessage = 'السلام عليكم، أريد عرض سعر لرفوف مشروع في جدة.';
const warehouseMessage = 'السلام عليكم، أريد الاستفسار عن رفوف مستودعات لمشروعي.';
const retailMessage = 'السلام عليكم، أريد الاستفسار عن رفوف لمتجري.';
const pharmacyMessage = 'السلام عليكم، أريد الاستفسار عن رفوف لصيدليتي.';
const groceryMessage = 'السلام عليكم، أريد الاستفسار عن رفوف لبقالتي.';
const finalMessage = heroMessage;

const trustItems = [
  { icon: Warehouse, title: 'رفوف المستودعات', text: 'احتياج ثقيل أو متوسط أو خفيف' },
  { icon: Store, title: 'رفوف المتاجر', text: 'سوبر ماركت · بقالات · محلات' },
  { icon: Truck, title: 'تحديد الاحتياج', text: 'المساحة والمنتجات وطريقة الاستخدام' },
  { icon: MapPin, title: 'جدة', text: 'تغطية مشاريع المدينة' },
];

const warehouseTypes = ['رفوف تخزين ثقيل', 'رفوف تخزين متوسط', 'رفوف تخزين خفيف'];
const retailTypes = ['رفوف سوبر ماركت', 'رفوف بقالات', 'رفوف محلات', 'وحدات عرض'];

const factors = [
  { icon: Store, title: 'نوع النشاط', text: 'مستودع أو متجر أو مساحة عرض.' },
  { icon: Ruler, title: 'مساحة الموقع', text: 'الأبعاد والمسارات والارتفاع المتاح.' },
  { icon: Package, title: 'نوع المنتجات', text: 'أحجامها وطريقة ترتيبها.' },
  { icon: Settings2, title: 'طريقة الاستخدام', text: 'حركة المخزون والوصول اليومي.' },
  { icon: Boxes, title: 'إمكانية التوسع', text: 'مرونة النظام عند تغير الاحتياج.' },
];

const process = [
  { number: '01', title: 'حدد نوع الموقع', text: 'مستودع أو متجر، مع نوع النشاط.' },
  { number: '02', title: 'أرسل الأبعاد', text: 'المساحة والارتفاع والممرات إن توفرت.' },
  { number: '03', title: 'صف المنتجات', text: 'الحجم والوزن وطريقة الوصول أو المناولة.' },
  { number: '04', title: 'أرفق صورة أو مخططاً', text: 'المرفقات اختيارية وتساعد على فهم الموقع.' },
  { number: '05', title: 'ناقش عرض السعر', text: 'يُوضح نطاق المطلوب قبل إعداد التسعير.' },
];

const projects = [
  { image: '/photos/hero.webp', alt: 'ممر مستودع مجهز برفوف تخزين صناعية', label: 'رفوف مستودعات', href: '/warehouse-racking' },
  { image: '/photos/warehouse-2.jpeg', alt: 'صفوف رفوف تخزين معدنية داخل مستودع', label: 'أنظمة تخزين', href: '/warehouse-racking' },
  { image: '/photos/market.webp', alt: 'رفوف عرض في متجر تجاري', label: 'رفوف متاجر', href: '/retail-shelving' },
  { image: '/photos/jeddah-pharmacy-interior.webp', alt: 'صيدلية حديثة مجهزة برفوف عرض للمنتجات', label: 'رفوف صيدليات', href: '/retail-shelving' },
  { image: '/photos/store.webp', alt: 'وحدات رفوف لمتجر غذائي', label: 'رفوف بقالات', href: '/retail-shelving' },
  { image: '/photos/black.webp', alt: 'رفوف عرض داكنة بحواف خضراء', label: 'تجهيزات عرض', href: '/retail-shelving' },
];

const faqs = [
  { q: 'هل تخدمون مشاريع الرفوف في جدة؟', a: 'نعم، تشمل تغطية الشامخ مشاريع جدة في المستودعات والمتاجر.' },
  { q: 'ما المعلومات المطلوبة لطلب عرض سعر في جدة؟', a: 'أرسل نوع الموقع والنشاط والمساحة والأبعاد إن توفرت، وطبيعة المنتجات وطريقة التخزين أو العرض. تساعد صورة أو مخطط على توضيح الاحتياج.' },
  { q: 'كيف أختار رفوف مستودع مناسبة؟', a: 'ابدأ بوزن وأبعاد البضائع، وارتفاع الموقع، ومساحة الممرات، وطريقة المناولة. لا يمكن تحديد السعة المناسبة من دون مواصفات معتمدة.' },
  { q: 'ما خيارات رفوف المتاجر في جدة؟', a: 'تعرض الصفحة خيارات للسوبر ماركت والبقالات والمحلات، ومنها وحدات جدارية ووسطية. يعتمد التوزيع على النشاط ومساحة المتجر والمنتجات.' },
  { q: 'هل تتوفر خدمة تركيب الرفوف؟', a: 'يمكنك توضيح احتياجك للتوريد أو التركيب عند التواصل معنا، وسيتم تأكيد الخدمات المتاحة ونطاق العمل قبل عرض السعر.' },
];

export default function JeddahView() {
  return (
    <div className="jeddah-page">
      <section className="jeddah-hero" aria-labelledby="jeddah-title">
        <div className="jeddah-hero-copy">
          <nav className="jeddah-breadcrumb" aria-label="مسار التنقل"><Link href="/">الرئيسية</Link><ArrowLeft size={14} aria-hidden="true" /><span>جدة</span></nav>
          <span className="jeddah-pill">خدماتنا في جدة</span>
          <h1 id="jeddah-title">رفوف مستودعات ومتاجر<br />في جدة</h1>
          <p>تعرّف على رفوف المستودعات والتخزين الثقيل والمتوسط والخفيف، إلى جانب رفوف عرض المتاجر والسوبر ماركت والبقالات. يعتمد الاختيار على مساحة الموقع والمنتجات وطريقة الاستخدام.</p>
          <span className="jeddah-service-area"><MapPin size={16} aria-hidden="true" /> خدمة مشاريع جدة</span>
          <WhatsAppButton message={heroMessage} label="تواصل معنا من جدة" />
        </div>
        <div className="jeddah-hero-photo"><ResponsiveHeroImage src="/photos/hero-jeddah-1280.webp" mobileSrc="/photos/hero-jeddah-mobile.webp" mobileSrcSet="/photos/hero-jeddah-mobile-640.webp 640w, /photos/hero-jeddah-mobile.webp 900w" desktopSrcSet="/photos/hero-jeddah-1280.webp 1280w" alt="مساحة تجارية تتضمن رفوف عرض" /><span>رفوف عرض للمحلات والسوبر ماركت</span></div>
      </section>

      <section className="jeddah-trust" aria-label="خدمات الشامخ في جدة">
        <div className="jeddah-container jeddah-trust-grid">{trustItems.map(({ icon: Icon, title, text }) => <div className="jeddah-trust-item" key={title}><Icon size={24} aria-hidden="true" /><span><strong>{title}</strong><small>{text}</small></span></div>)}</div>
      </section>

      <section className="jeddah-answer" aria-labelledby="jeddah-answer-title">
        <div className="jeddah-container jeddah-answer-inner">
          <div><span className="jeddah-kicker">حلول الرفوف في جدة</span><h2 id="jeddah-answer-title">ما حلول الرفوف والتخزين التي يوفرها الشامخ في جدة؟</h2></div>
          <div className="jeddah-answer-copy"><p>تخدم صفحة جدة الباحثين عن رفوف للمستودعات والمتاجر في المدينة. لرفوف المستودعات، ابدأ بوزن وأبعاد البضائع وارتفاع الموقع وطريقة المناولة. وللمتاجر، شارك نوع النشاط والمنتجات ومساحة الممرات. تساعد هذه التفاصيل على مناقشة فئة الرفوف والتوزيع المطلوبين قبل طلب عرض سعر.</p><div className="jeddah-answer-links"><Link href="/solutions">استكشف حلول التخزين والعرض <ArrowUpLeft size={16} aria-hidden="true" /></Link><Link href="/sectors">تعرّف على حلول القطاعات <ArrowUpLeft size={16} aria-hidden="true" /></Link></div></div>
        </div>
      </section>

      <section className="jeddah-solution jeddah-warehouse-solution" aria-labelledby="jeddah-warehouse-title">
        <div className="jeddah-solution-photo"><StaticResponsiveImage variants={[{ src: '/photos/jeddah-stocked-warehouse-640.webp', width: 640 }, { src: '/photos/jeddah-stocked-warehouse-960.webp', width: 960 }]} alt="رفوف مستودع صناعية مجهزة لتخزين البضائع على منصات" sizes="(max-width: 720px) 100vw, 50vw" /><span>أنظمة التخزين</span></div>
        <div className="jeddah-solution-copy"><span className="jeddah-kicker">المستودعات</span><h2 id="jeddah-warehouse-title">رفوف مستودعات في جدة</h2><p>حلول تخزين للمستودعات والمخازن تساعد على تنظيم البضائع واستغلال المساحات حسب طبيعة التشغيل وحجم الموقع.</p><ul>{warehouseTypes.map((type) => <li key={type}><span />{type}</li>)}</ul><div className="jeddah-solution-actions"><Link href="/warehouse-racking" className="jeddah-text-link">اكتشف حلول رفوف المستودعات <ArrowUpLeft size={17} aria-hidden="true" /></Link><WhatsAppButton message={warehouseMessage} label="استفسر عن رفوف مستودعات في جدة" /></div></div>
      </section>

      <section className="jeddah-solution jeddah-retail-solution" aria-labelledby="jeddah-retail-title">
        <div className="jeddah-solution-photo"><Image src="/photos/market.webp" alt="رفوف عرض سوبر ماركت" fill sizes="(max-width: 720px) 100vw, 50vw" /><span>تجهيزات العرض التجاري</span></div>
        <div className="jeddah-solution-copy"><span className="jeddah-kicker">المتاجر</span><h2 id="jeddah-retail-title">رفوف السوبر ماركت والمحلات في جدة</h2><p>حلول عرض وتنظيم للمشاريع التجارية تساعد على ترتيب المنتجات واستغلال الجدران والممرات والمساحات الوسطية بصورة عملية.</p><ul>{retailTypes.map((type) => <li key={type}><span />{type}</li>)}</ul><div className="jeddah-solution-actions"><Link href="/retail-shelving" className="jeddah-text-link">اكتشف رفوف المحلات والسوبر ماركت <ArrowUpLeft size={17} aria-hidden="true" /></Link><WhatsAppButton message={retailMessage} label="استفسر عن تجهيز متجرك في جدة" /></div></div>
      </section>

      <section className="jeddah-specialty" aria-label="حلول الصيدليات والبقالات في جدة">
        <article className="jeddah-specialty-card">
          <div className="jeddah-specialty-photo"><Image src="/photos/jeddah-pharmacy-interior.webp" alt="صيدلية عصرية واسعة مع رفوف عرض وإضاءة مدمجة" fill sizes="(max-width: 720px) 100vw, 50vw" /></div>
          <div className="jeddah-specialty-copy"><span className="jeddah-kicker">الصيدليات</span><h2>رفوف صيدليات في جدة</h2><p>أنظمة عرض وتنظيم تساعد على ترتيب المنتجات والاستفادة من المساحات الجدارية والوسطية بما يناسب طبيعة المكان.</p><WhatsAppButton message={pharmacyMessage} label="استفسر عن رفوف الصيدليات" /></div>
        </article>
        <article className="jeddah-specialty-card jeddah-grocery-card">
          <div className="jeddah-specialty-photo"><Image src="/photos/store.webp" alt="رفوف محل تجاري" fill sizes="(max-width: 720px) 100vw, 50vw" /></div>
          <div className="jeddah-specialty-copy"><span className="jeddah-kicker">البقالات والمتاجر الغذائية</span><h2>رفوف البقالات والمتاجر الغذائية في جدة</h2><p>حلول مناسبة للمساحات الصغيرة والمتوسطة تساعد على تنظيم المنتجات وسهولة الوصول إليها مع استغلال المساحة المتوفرة بشكل أفضل.</p><WhatsAppButton message={groceryMessage} label="استفسر عن رفوف البقالات" /></div>
        </article>
      </section>

      <section className="jeddah-decision" aria-labelledby="jeddah-decision-title">
        <div className="jeddah-container">
          <div className="jeddah-dark-heading"><span className="jeddah-kicker">حل يناسب مشروعك</span><h2 id="jeddah-decision-title">كيف نحدد نظام الرفوف المناسب لمشروعك في جدة؟</h2><p>نراجع متطلبات المكان والاستخدام قبل مناقشة النظام والتوزيع.</p></div>
          <div className="jeddah-factors">{factors.map(({ icon: Icon, title, text }) => <article className="jeddah-factor" key={title}><Icon size={25} aria-hidden="true" /><strong>{title}</strong><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="jeddah-process" aria-labelledby="jeddah-process-title">
        <div className="jeddah-container">
          <div className="jeddah-section-heading"><span className="jeddah-kicker">طلب عرض سعر</span><h2 id="jeddah-process-title">ما التفاصيل التي تساعد على تسعير مشروع الرفوف؟</h2></div>
          <ol className="jeddah-steps">{process.map((step) => <li key={step.number}><span className="jeddah-step-number">{step.number}</span><strong>{step.title}</strong><p>{step.text}</p></li>)}</ol>
        </div>
      </section>

      <section className="jeddah-projects" aria-labelledby="jeddah-projects-title">
        <div className="jeddah-container">
          <div className="jeddah-projects-heading"><div><span className="jeddah-kicker">أنواع الحلول</span><h2 id="jeddah-projects-title">صور توضيحية للرفوف والتخزين</h2></div><Link href="/projects">استكشف صور الحلول <ArrowUpLeft size={17} aria-hidden="true" /></Link></div>
          <JeddahGallery slides={projects} />
        </div>
      </section>

      <section className="jeddah-search-answer" aria-labelledby="jeddah-search-title">
        <div className="jeddah-container jeddah-search-answer-inner"><div><span className="jeddah-kicker">حلول محلية للمشاريع</span><h2 id="jeddah-search-title">هل تبحث عن شركة رفوف في جدة؟</h2><p>إذا كان مشروعك مستودعاً، سوبر ماركت، بقالة، صيدلية أو محلاً تجارياً في جدة، يمكنك مشاركة تفاصيل المساحة وطبيعة الاستخدام مع الشامخ ليتم تحديد نوع الرفوف والحل الأنسب للمشروع.</p></div><WhatsAppButton message={finalMessage} label="تواصل عبر واتساب" /></div>
      </section>

      <section className="jeddah-faq" aria-labelledby="jeddah-faq-title">
        <div className="jeddah-container jeddah-faq-inner"><div className="jeddah-faq-heading"><span className="jeddah-kicker">أسئلة شائعة</span><h2 id="jeddah-faq-title">أسئلة عن الرفوف والتخزين في جدة</h2></div><div className="jeddah-faq-list">{faqs.map(({ q, a }) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></div>
      </section>

      <section className="jeddah-related" aria-labelledby="jeddah-related-title">
        <div className="jeddah-container"><div className="jeddah-related-heading"><span className="jeddah-kicker">روابط مفيدة</span><h2 id="jeddah-related-title">تابع إلى الصفحة المناسبة لاحتياجك</h2></div><div className="jeddah-related-links"><Link href="/warehouse-racking"><Warehouse size={18} aria-hidden="true" />رفوف المستودعات<ArrowUpLeft size={16} aria-hidden="true" /></Link><Link href="/retail-shelving"><Store size={18} aria-hidden="true" />رفوف المحلات والسوبر ماركت<ArrowUpLeft size={16} aria-hidden="true" /></Link><Link href="/solutions"><Boxes size={18} aria-hidden="true" />حلول التخزين والعرض<ArrowUpLeft size={16} aria-hidden="true" /></Link><Link href="/sectors"><Building2 size={18} aria-hidden="true" />حلول حسب نوع النشاط<ArrowUpLeft size={16} aria-hidden="true" /></Link><Link href="/projects"><Package size={18} aria-hidden="true" />صور توضيحية للرفوف<ArrowUpLeft size={16} aria-hidden="true" /></Link><Link href="/riyadh"><MapPin size={18} aria-hidden="true" />صفحة الخدمة في الرياض<ArrowUpLeft size={16} aria-hidden="true" /></Link><Link href="/contact">تواصل معنا لطلب عرض سعر<ArrowUpLeft size={16} aria-hidden="true" /></Link></div></div>
      </section>

      <CtaBand title="ناقش مشروع رفوف في جدة" description="أرسل نوع الموقع والنشاط ومساحته وطبيعة المنتجات. أرفق صورة أو مخططاً إن توفر لمناقشة الخيارات وطلب عرض سعر." message={finalMessage} buttonLabel="أرسل تفاصيل المشروع عبر واتساب" />
    </div>
  );
}
