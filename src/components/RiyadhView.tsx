import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpLeft, Boxes, Building2, Check, Expand, Layers3, MapPin, Package, Repeat2, Ruler, Store, Truck, Warehouse } from 'lucide-react';
import { ResponsiveHeroImage, WhatsAppButton } from '@/components/UI';
import './riyadh.css';

const heroMessage = 'السلام عليكم، أود الاستفسار عن رفوف لمشروعي في الرياض. نوع الموقع: [مستودع/متجر]، المساحة التقريبية: [اكتب المساحة]، المنتجات: [اكتب التفاصيل].';
const warehouseMessage = 'السلام عليكم، أود الاستفسار عن رفوف مستودع في الرياض. أبعاد الموقع والارتفاع: [اكتب التفاصيل]، وزن وأبعاد البضائع وطريقة المناولة: [اكتب التفاصيل].';
const retailMessage = 'السلام عليكم، أود الاستفسار عن رفوف متجر في الرياض. نوع النشاط: [اكتب النشاط]، المساحة والمنتجات: [اكتب التفاصيل].';
const pharmacyMessage = 'السلام عليكم، أود الاستفسار عن رفوف صيدلية في الرياض. المساحة وطبيعة المنتجات: [اكتب التفاصيل].';
const finalMessage = 'السلام عليكم، أود مناقشة مشروع رفوف في الرياض. نوع الموقع: [مستودع/متجر]، النشاط: [اكتب النشاط]، المساحة: [اكتب المساحة].';

const trustItems = [
  { icon: Warehouse, title: 'رفوف المستودعات', text: 'احتياج ثقيل أو متوسط أو خفيف' },
  { icon: Store, title: 'رفوف المتاجر', text: 'سوبر ماركت · بقالات · محلات' },
  { icon: Truck, title: 'تحديد الاحتياج', text: 'المساحة والمنتجات وطريقة الاستخدام' },
  { icon: MapPin, title: 'الرياض', text: 'تغطية مشاريع المدينة' },
];
const warehouseSystems = ['رفوف تخزين ثقيل', 'رفوف تخزين متوسط', 'رفوف تخزين خفيف', 'أنظمة متعددة المستويات'];
const retailSystems = ['رفوف محلات', 'وحدات عرض', 'رفوف جدارية', 'وحدات وسطية'];
const grocerySystems = ['رفوف سوبر ماركت', 'رفوف بقالات', 'وحدات جدارية', 'وحدات وسطية'];
const factors = [
  { icon: Building2, title: 'طبيعة النشاط', text: 'مستودع أو مساحة تجارية.' },
  { icon: Ruler, title: 'حجم ومساحة الموقع', text: 'الأبعاد والارتفاع المتاح.' },
  { icon: Package, title: 'نوع المنتجات', text: 'الحجم والوزن وطريقة الترتيب.' },
  { icon: Repeat2, title: 'حركة الاستخدام', text: 'الوصول اليومي وحركة البضائع.' },
  { icon: Expand, title: 'إمكانية التوسع', text: 'مرونة الحل عند تغير الاحتياج.' },
];
const steps = [
  { number: '01', title: 'حدد نوع الموقع', text: 'مستودع أو متجر، مع نوع النشاط.' },
  { number: '02', title: 'أرسل الأبعاد', text: 'المساحة والارتفاع والممرات إن توفرت.' },
  { number: '03', title: 'صف المنتجات', text: 'الحجم والوزن وطريقة الوصول أو المناولة.' },
  { number: '04', title: 'أرفق صورة أو مخططاً', text: 'المرفقات اختيارية وتساعد على فهم الموقع.' },
  { number: '05', title: 'ناقش عرض السعر', text: 'يُوضح نطاق المطلوب قبل إعداد التسعير.' },
];
const projectImages = [
  { image: '/photos/warehouse-2.jpeg', alt: 'رفوف تخزين صناعية داخل مستودع', label: 'رفوف مستودعات' },
  { image: '/photos/white.webp', alt: 'رفوف عرض جدارية لمتجر', label: 'رفوف عرض متجر' },
  { image: '/photos/pharmacy.jpeg', alt: 'رفوف عرض منظمة داخل صيدلية', label: 'رفوف صيدلية' },
  { image: '/photos/warehouse-3.webp', alt: 'نظام رفوف معدنية للتخزين الصناعي', label: 'نظام تخزين صناعي' },
];
const faqs = [
  { q: 'هل تخدمون مشاريع الرفوف في الرياض؟', a: 'نعم، تشمل تغطية الشامخ مشاريع الرياض في المستودعات والمتاجر.' },
  { q: 'ما المعلومات المطلوبة لطلب عرض سعر في الرياض؟', a: 'أرسل نوع الموقع والنشاط والمساحة والأبعاد إن توفرت، وطبيعة المنتجات وطريقة التخزين أو العرض. تساعد صورة أو مخطط على توضيح الاحتياج.' },
  { q: 'كيف أختار رفوف مستودع مناسبة؟', a: 'ابدأ بوزن وأبعاد البضائع، وارتفاع الموقع، ومساحة الممرات، وطريقة المناولة. لا يمكن تحديد السعة المناسبة من دون مواصفات معتمدة.' },
  { q: 'ما خيارات رفوف المتاجر في الرياض؟', a: 'تعرض الصفحة خيارات للسوبر ماركت والبقالات والمحلات، ومنها وحدات جدارية ووسطية. يعتمد التوزيع على النشاط ومساحة المتجر والمنتجات.' },
  { q: 'هل يشمل عرض السعر التوريد والتركيب؟', a: 'يتحدد ذلك حسب نطاق المشروع. اذكر المطلوب عند التواصل لتوضيح الخيارات المتاحة قبل التسعير.' },
];
export default function RiyadhView() {
  return (
    <div className="riyadh-page">
      <section className="riyadh-hero" aria-labelledby="riyadh-title">
        <div className="riyadh-hero-copy">
          <nav className="riyadh-breadcrumb" aria-label="مسار التنقل"><Link href="/">الرئيسية</Link><ArrowLeft size={14} aria-hidden="true" /><span>الرياض</span></nav>
          <span className="riyadh-pill">خدماتنا في الرياض</span>
          <h1 id="riyadh-title">رفوف مستودعات ومتاجر<br />في الرياض</h1>
          <p>تعرّف على رفوف المستودعات والتخزين الثقيل والمتوسط والخفيف، إلى جانب رفوف عرض المتاجر والسوبر ماركت والبقالات. يعتمد الاختيار على مساحة الموقع والمنتجات وطريقة الاستخدام.</p>
          <div className="riyadh-hero-tags" aria-label="أنواع المشاريع"><span>المستودعات</span><span>المتاجر</span><span>الصيدليات</span></div>
          <span className="riyadh-service-area"><MapPin size={16} aria-hidden="true" /> خدمة مشاريع الرياض</span>
          <WhatsAppButton message={heroMessage} label="تواصل معنا من الرياض" />
        </div>
        <div className="riyadh-hero-photo"><ResponsiveHeroImage src="/photos/hero-riyadh.webp" mobileSrc="/photos/hero-riyadh-mobile.webp" alt="رفوف تخزين صناعية داخل مستودع منظم" /><span><Layers3 size={15} aria-hidden="true" /> حلول تخزين للمساحات الكبيرة</span></div>
        <span className="riyadh-hero-index" aria-hidden="true">01 <i /> RIYADH</span>
      </section>

      <section className="riyadh-trust" aria-label="خدمات الشامخ في الرياض"><div className="riyadh-container riyadh-trust-grid">{trustItems.map(({ icon: Icon, title, text }) => <div className="riyadh-trust-item" key={title}><Icon size={23} aria-hidden="true" /><span><strong>{title}</strong><small>{text}</small></span></div>)}</div></section>

      <section className="riyadh-answer" aria-labelledby="riyadh-answer-title"><div className="riyadh-container riyadh-answer-inner">
        <div className="riyadh-answer-heading"><span className="riyadh-kicker">حلول الرفوف في الرياض</span><h2 id="riyadh-answer-title">ما حلول الرفوف والتخزين التي يوفرها الشامخ في الرياض؟</h2></div>
        <div className="riyadh-answer-copy"><p>تخدم صفحة الرياض الباحثين عن رفوف للمستودعات والمتاجر في المدينة. لرفوف المستودعات، ابدأ بوزن وأبعاد البضائع وارتفاع الموقع وطريقة المناولة. وللمتاجر، شارك نوع النشاط والمنتجات ومساحة الممرات. تساعد هذه التفاصيل على مناقشة فئة الرفوف والتوزيع المطلوبين قبل طلب عرض سعر.</p><Link href="/solutions">استكشف حلول التخزين والعرض <ArrowUpLeft size={16} aria-hidden="true" /></Link></div>
      </div></section>

      <section className="riyadh-warehouse" aria-labelledby="riyadh-warehouse-title">
        <div className="riyadh-warehouse-photo"><Image src="/photos/riyadh-warehouse.webp" alt="رفوف مستودع مرتفعة محملة بالبضائع" fill sizes="(max-width: 720px) 100vw, 52vw" /><span>أنظمة التخزين</span></div>
        <div className="riyadh-warehouse-copy"><span className="riyadh-kicker">المستودعات</span><h2 id="riyadh-warehouse-title">رفوف مستودعات في الرياض</h2><p>حلول تخزين للمستودعات تساعد على تنظيم البضائع واستغلال المساحة الرأسية والأفقية وفق طبيعة التشغيل.</p><ul>{warehouseSystems.map((item) => <li key={item}><Check size={15} aria-hidden="true" />{item}</li>)}</ul><div className="riyadh-actions"><Link className="riyadh-text-link" href="/warehouse-racking">اكتشف حلول رفوف المستودعات <ArrowUpLeft size={16} aria-hidden="true" /></Link><WhatsAppButton message={warehouseMessage} label="استفسر عن رفوف مستودعات الرياض" /></div></div>
      </section>

      <section className="riyadh-retail" aria-labelledby="riyadh-retail-title"><div className="riyadh-container riyadh-retail-card">
        <div className="riyadh-retail-photo"><Image src="/photos/riyadh-retail.webp" alt="رفوف عرض تجارية سوداء بحواف خضراء داخل متجر حديث" fill sizes="(max-width: 720px) 100vw, 48vw" /><span>تجهيزات العرض التجاري</span></div>
        <div className="riyadh-retail-copy"><span className="riyadh-kicker">المتاجر</span><h2 id="riyadh-retail-title">تجهيز المحلات والمتاجر في الرياض</h2><p>حلول رفوف وعرض تساعد على تنظيم المساحات التجارية وتقديم المنتجات بصورة واضحة وعملية بما يناسب طبيعة النشاط.</p><ul>{retailSystems.map((item) => <li key={item}>{item}</li>)}</ul><div className="riyadh-actions"><Link className="riyadh-text-link" href="/retail-shelving">اكتشف رفوف المحلات والسوبر ماركت <ArrowUpLeft size={16} aria-hidden="true" /></Link><WhatsAppButton message={retailMessage} label="استفسر عن تجهيز متجر في الرياض" /></div></div>
      </div></section>

      <section className="riyadh-grocery" aria-labelledby="riyadh-grocery-title"><div className="riyadh-container riyadh-grocery-grid">
        <div className="riyadh-grocery-copy"><span className="riyadh-kicker">المشاريع الغذائية</span><h2 id="riyadh-grocery-title">رفوف السوبر ماركت والبقالات في الرياض</h2><p>أنظمة عرض مناسبة للمشاريع الغذائية تساعد على ترتيب المنتجات وتنظيم الممرات والاستفادة من مساحة المتجر.</p><ul>{grocerySystems.map((item) => <li key={item}><span />{item}</li>)}</ul></div>
        <div className="riyadh-grocery-photo"><Image src="/photos/market.webp" alt="ممرات رفوف منظمة في متجر للمواد الغذائية" fill sizes="(max-width: 720px) 100vw, 56vw" /><span>رفوف العرض وتنظيم الممرات</span></div>
      </div></section>

      <section className="riyadh-pharmacy" aria-labelledby="riyadh-pharmacy-title"><div className="riyadh-container riyadh-pharmacy-card">
        <div className="riyadh-pharmacy-photo"><Image src="/photos/riyadh-pharmacy.webp" alt="صيدلية حديثة بأرفف عرض ومنتجات منظمة" fill sizes="(max-width: 720px) 100vw, 44vw" /></div>
        <div className="riyadh-pharmacy-copy"><span className="riyadh-kicker">الصيدليات</span><h2 id="riyadh-pharmacy-title">رفوف صيدليات في الرياض</h2><p>حلول عرض وتنظيم للصيدليات تساعد على ترتيب المنتجات والاستفادة من المساحات الجدارية والوسطية بصورة عملية.</p><WhatsAppButton message={pharmacyMessage} label="استفسر عن رفوف الصيدليات" /></div>
        <div className="riyadh-pharmacy-mark"><Store size={26} aria-hidden="true" /><span>عرض واضح<br />وترتيب عملي</span></div>
      </div></section>

      <section className="riyadh-decisions" aria-labelledby="riyadh-decisions-title"><Image className="riyadh-decisions-bg" src="/photos/warehouse-2.jpeg" alt="" fill sizes="100vw" aria-hidden="true" /><div className="riyadh-decisions-shade" />
        <div className="riyadh-container riyadh-decisions-inner"><div className="riyadh-dark-heading"><span className="riyadh-kicker">اختيار النظام</span><h2 id="riyadh-decisions-title">ما الذي نراعيه قبل اختيار نظام الرفوف؟</h2><p>يبدأ الحل المناسب بفهم طبيعة المشروع والمساحة وطريقة الاستخدام.</p></div><div className="riyadh-factors">{factors.map(({ icon: Icon, title, text }) => <article className="riyadh-factor" key={title}><Icon size={25} aria-hidden="true" /><strong>{title}</strong><p>{text}</p></article>)}</div></div>
      </section>

      <section className="riyadh-sector-pair" aria-labelledby="riyadh-sector-title"><div className="riyadh-container"><div className="riyadh-section-heading"><span className="riyadh-kicker">حلول تناسب نشاطك</span><h2 id="riyadh-sector-title">حلول للمشاريع التجارية والصناعية</h2></div><div className="riyadh-sector-grid">
        <article className="riyadh-sector-card"><Image src="/photos/warehouse-5.webp" alt="" fill sizes="(max-width: 720px) 100vw, 50vw" aria-hidden="true" /><div className="riyadh-sector-overlay" /><div className="riyadh-sector-copy"><Warehouse size={25} aria-hidden="true" /><span>المشاريع الصناعية</span><p>حلول تخزين للمستودعات والمخازن والمشاريع التي تحتاج إلى تنظيم واستغلال أكبر للمساحة.</p><Link href="/warehouse-racking">حلول رفوف المستودعات <ArrowUpLeft size={16} aria-hidden="true" /></Link></div></article>
        <article className="riyadh-sector-card"><Image src="/photos/black.webp" alt="" fill sizes="(max-width: 720px) 100vw, 50vw" aria-hidden="true" /><div className="riyadh-sector-overlay" /><div className="riyadh-sector-copy"><Store size={25} aria-hidden="true" /><span>المشاريع التجارية</span><p>حلول عرض وتجهيز للسوبر ماركت والبقالات والصيدليات والمحلات التجارية.</p><Link href="/retail-shelving">حلول رفوف المتاجر <ArrowUpLeft size={16} aria-hidden="true" /></Link></div></article>
      </div></div></section>

      <section className="riyadh-process" aria-labelledby="riyadh-process-title"><div className="riyadh-container"><div className="riyadh-section-heading"><span className="riyadh-kicker">طلب عرض سعر</span><h2 id="riyadh-process-title">ما التفاصيل التي تساعد على تسعير مشروع الرفوف؟</h2></div><ol className="riyadh-steps">{steps.map((step) => <li key={step.number}><span className="riyadh-step-number">{step.number}</span><strong>{step.title}</strong><p>{step.text}</p></li>)}</ol></div></section>

      <section className="riyadh-projects" aria-labelledby="riyadh-projects-title"><div className="riyadh-container"><div className="riyadh-projects-heading"><div><span className="riyadh-kicker">أنواع الحلول</span><h2 id="riyadh-projects-title">صور توضيحية للرفوف والتجهيز</h2><p>صور توضح أنواعاً من حلول التخزين والعرض.</p></div><Link href="/projects">استكشف صور الحلول <ArrowUpLeft size={16} aria-hidden="true" /></Link></div><div className="riyadh-project-grid">{projectImages.map((item) => <Link className="riyadh-project-tile" href="/projects" key={item.label}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 720px) 75vw, (max-width: 1050px) 50vw, 25vw" /><span>{item.label}<ArrowUpLeft size={15} aria-hidden="true" /></span></Link>)}</div></div></section>

      <section className="riyadh-local" aria-labelledby="riyadh-local-title"><div className="riyadh-container riyadh-local-inner"><div><span className="riyadh-kicker">خدمة المشاريع في الرياض</span><h2 id="riyadh-local-title">رفوف للمستودعات والمتاجر في الرياض</h2><p>إذا كان مشروعك مستودعاً أو متجراً في الرياض، أرسل نوع النشاط والمساحة وطبيعة المنتجات. تُناقش فئة الرفوف والتوزيع المطلوبان قبل طلب عرض السعر.</p></div><WhatsAppButton message={heroMessage} label="ناقش تفاصيل مشروعك عبر واتساب" /></div></section>

      <section className="riyadh-faq" aria-labelledby="riyadh-faq-title"><div className="riyadh-container riyadh-faq-inner"><div className="riyadh-faq-heading"><span className="riyadh-kicker">أسئلة شائعة</span><h2 id="riyadh-faq-title">أسئلة عن الرفوف والتخزين في الرياض</h2><p>إجابات واضحة حول الأنظمة وخيارات التجهيز.</p></div><div className="riyadh-faq-list">{faqs.map(({ q, a }) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></div></section>

      <section className="riyadh-related" aria-labelledby="riyadh-related-title"><div className="riyadh-container"><div className="riyadh-section-heading riyadh-related-heading"><span className="riyadh-kicker">روابط مفيدة</span><h2 id="riyadh-related-title">تابع إلى الصفحة المناسبة لاحتياجك</h2></div><div className="riyadh-related-links"><Link href="/warehouse-racking"><Warehouse size={18} aria-hidden="true" />رفوف المستودعات<ArrowUpLeft size={15} aria-hidden="true" /></Link><Link href="/retail-shelving"><Store size={18} aria-hidden="true" />رفوف المحلات والسوبر ماركت<ArrowUpLeft size={15} aria-hidden="true" /></Link><Link href="/solutions"><Boxes size={18} aria-hidden="true" />حلول التخزين والعرض<ArrowUpLeft size={15} aria-hidden="true" /></Link><Link href="/sectors"><Building2 size={18} aria-hidden="true" />حلول حسب نوع النشاط<ArrowUpLeft size={15} aria-hidden="true" /></Link><Link href="/projects"><Package size={18} aria-hidden="true" />صور توضيحية للرفوف<ArrowUpLeft size={15} aria-hidden="true" /></Link><Link href="/jeddah"><MapPin size={18} aria-hidden="true" />صفحة الخدمة في جدة<ArrowUpLeft size={15} aria-hidden="true" /></Link><Link href="/contact">تواصل معنا لطلب عرض سعر<ArrowUpLeft size={15} aria-hidden="true" /></Link></div></div></section>

      <section className="riyadh-final-cta" aria-labelledby="riyadh-final-title"><div className="riyadh-container riyadh-final-inner"><div><span className="riyadh-kicker">تواصل معنا</span><h2 id="riyadh-final-title">ناقش مشروع رفوف في الرياض</h2><p>أرسل نوع الموقع والنشاط ومساحته وطبيعة المنتجات. أرفق صورة أو مخططاً إن توفر لمناقشة الخيارات وطلب عرض سعر.</p></div><WhatsAppButton message={finalMessage} label="أرسل تفاصيل المشروع عبر واتساب" /></div></section>
    </div>
  );
}




