import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpLeft, Boxes, Building2, Check, Expand, Layers3, MapPin, Package, Repeat2, Ruler, Store, Truck, Warehouse } from 'lucide-react';
import { ResponsiveHeroImage, WhatsAppButton } from '@/components/UI';
import './riyadh.css';

const heroMessage = 'السلام عليكم، وصلت لكم من صفحة خدمات الشامخ في الرياض وأرغب بالاستفسار عن مشروع رفوف وتخزين في الرياض.';
const warehouseMessage = 'السلام عليكم، وصلت لكم من صفحة الرياض وأرغب بالاستفسار عن رفوف مستودعات لمشروع في الرياض.';
const retailMessage = 'السلام عليكم، وصلت لكم من صفحة الرياض وأرغب بالاستفسار عن تجهيز متجر في الرياض.';
const pharmacyMessage = 'السلام عليكم، وصلت لكم من صفحة الرياض وأرغب بالاستفسار عن رفوف الصيدليات في الرياض.';
const finalMessage = 'السلام عليكم، وصلت لكم من صفحة الرياض في موقع الشامخ وأرغب بمناقشة مشروع رفوف وتخزين في الرياض.';

const trustItems = [
  { icon: Warehouse, title: 'حلول للمستودعات', text: 'أنظمة تخزين حسب طبيعة المشروع' },
  { icon: Store, title: 'حلول للمتاجر', text: 'سوبر ماركت · بقالات · صيدليات' },
  { icon: Truck, title: 'توريد وتركيب', text: 'تنفيذ وتجهيز حسب المشروع' },
  { icon: MapPin, title: 'خدمة الرياض', text: 'والمناطق المحيطة' },
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
  { number: '01', title: 'فهم نوع المشروع', text: 'نعرف النشاط والاحتياج الأساسي.' },
  { number: '02', title: 'دراسة المساحة', text: 'نراجع الأبعاد ومتطلبات الاستخدام.' },
  { number: '03', title: 'اختيار النظام', text: 'نحدد نوع الرفوف والتوزيع الملائم.' },
  { number: '04', title: 'التوريد والتركيب', text: 'ننسق التنفيذ وفق نطاق المشروع.' },
  { number: '05', title: 'التسليم والمتابعة', text: 'نتأكد من جاهزية الحل للاستخدام.' },
];
const projectImages = [
  { image: '/photos/warehouse-2.jpeg', alt: 'رفوف تخزين صناعية داخل مستودع', label: 'تجهيز مستودع' },
  { image: '/photos/white.webp', alt: 'رفوف عرض جدارية لمتجر', label: 'رفوف عرض متجر' },
  { image: '/photos/pharmacy.jpeg', alt: 'رفوف عرض منظمة داخل صيدلية', label: 'رفوف صيدلية' },
  { image: '/photos/warehouse-3.webp', alt: 'نظام رفوف معدنية للتخزين الصناعي', label: 'نظام تخزين صناعي' },
];
const faqs = [
  { q: 'هل توفرون رفوف مستودعات في الرياض؟', a: 'نعم، يوفر الشامخ حلول رفوف للمستودعات والمخازن في الرياض، ويُختار النظام حسب مساحة الموقع وطبيعة التخزين والاستخدام.' },
  { q: 'هل تتوفر رفوف للتخزين الثقيل والمتوسط والخفيف؟', a: 'تتوفر خيارات للتخزين الثقيل والمتوسط والخفيف، إضافة إلى أنظمة متعددة المستويات وفق احتياج المشروع.' },
  { q: 'هل توفرون رفوف سوبر ماركت في الرياض؟', a: 'نعم، تشمل الحلول رفوف السوبر ماركت ووحدات العرض الجدارية والوسطية بحسب مساحة المتجر وترتيب المنتجات.' },
  { q: 'هل لديكم رفوف للبقالات والصيدليات؟', a: 'نعم، تتوفر حلول عرض وتنظيم للبقالات والصيدليات والمتاجر بمقاسات وتوزيعات تناسب طبيعة النشاط.' },
  { q: 'هل يمكن تجهيز محل كامل في الرياض؟', a: 'يمكن مناقشة تجهيز المحل من رفوف العرض والوحدات الجدارية والوسطية وفق مساحة الموقع ونوع المنتجات.' },
  { q: 'هل يتم اختيار الرفوف حسب مساحة المشروع؟', a: 'نعم، تُراعى أبعاد الموقع وطبيعة المنتجات وطريقة الاستخدام قبل تحديد نوع الرفوف والتوزيع.' },
  { q: 'هل تقدمون خدمة التركيب في الرياض؟', a: 'تتوفر خيارات التوريد والتركيب، وتُنسق تفاصيل التنفيذ وفق نطاق المشروع واحتياجه.' },
  { q: 'هل تتوفر صناعة وطنية وصناعة صينية؟', a: 'نعم، تتوفر خيارات من الصناعة الوطنية والصناعة الصينية، ويُحدد الاختيار وفق احتياج المشروع والمواصفات المطلوبة.' },
];
export default function RiyadhView() {
  return (
    <div className="riyadh-page">
      <section className="riyadh-hero" aria-labelledby="riyadh-title">
        <div className="riyadh-hero-copy">
          <nav className="riyadh-breadcrumb" aria-label="مسار التنقل"><Link href="/">الرئيسية</Link><ArrowLeft size={14} aria-hidden="true" /><span>الرياض</span></nav>
          <span className="riyadh-pill">خدماتنا في الرياض</span>
          <h1 id="riyadh-title">حلول الرفوف والتخزين<br />في الرياض</h1>
          <p>نوفر حلول رفوف وتخزين للمشاريع في الرياض تشمل المستودعات والمخازن، السوبر ماركت، البقالات، الصيدليات والمحلات التجارية، مع أنظمة يتم اختيارها وفق طبيعة النشاط والمساحة وطريقة الاستخدام.</p>
          <div className="riyadh-hero-tags" aria-label="أنواع المشاريع"><span>المستودعات</span><span>المتاجر</span><span>الصيدليات</span></div>
          <span className="riyadh-service-area"><MapPin size={16} aria-hidden="true" /> الرياض والمناطق المحيطة</span>
          <WhatsAppButton message={heroMessage} label="تواصل معنا من الرياض" />
        </div>
        <div className="riyadh-hero-photo"><ResponsiveHeroImage src="/photos/hero-riyadh.webp" mobileSrc="/photos/hero-riyadh-mobile.webp" alt="رفوف تخزين صناعية داخل مستودع منظم لخدمات مشاريع الرياض" /><span><Layers3 size={15} aria-hidden="true" /> حلول تخزين للمساحات الكبيرة</span></div>
        <span className="riyadh-hero-index" aria-hidden="true">01 <i /> RIYADH</span>
      </section>

      <section className="riyadh-trust" aria-label="خدمات الشامخ في الرياض"><div className="riyadh-container riyadh-trust-grid">{trustItems.map(({ icon: Icon, title, text }) => <div className="riyadh-trust-item" key={title}><Icon size={23} aria-hidden="true" /><span><strong>{title}</strong><small>{text}</small></span></div>)}</div></section>

      <section className="riyadh-answer" aria-labelledby="riyadh-answer-title"><div className="riyadh-container riyadh-answer-inner">
        <div className="riyadh-answer-heading"><span className="riyadh-kicker">حلول الرفوف في الرياض</span><h2 id="riyadh-answer-title">ما حلول الرفوف والتخزين التي يوفرها الشامخ في الرياض؟</h2></div>
        <div className="riyadh-answer-copy"><p>يوفر الشامخ للرفوف والديكورات حلول رفوف وتخزين للمشاريع في الرياض تشمل المستودعات والمخازن، السوبر ماركت، البقالات، الصيدليات والمحلات التجارية. كما تتوفر حلول للتخزين الثقيل والمتوسط والخفيف وأنظمة عرض وتجهيز يتم اختيارها حسب مساحة المشروع وطبيعة الاستخدام.</p><Link href="/solutions">تعرّف على حلولنا <ArrowUpLeft size={16} aria-hidden="true" /></Link></div>
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

      <section className="riyadh-process" aria-labelledby="riyadh-process-title"><div className="riyadh-container"><div className="riyadh-section-heading"><span className="riyadh-kicker">كيف نعمل؟</span><h2 id="riyadh-process-title">من احتياج المشروع إلى الحل المناسب</h2></div><ol className="riyadh-steps">{steps.map((step) => <li key={step.number}><span className="riyadh-step-number">{step.number}</span><strong>{step.title}</strong><p>{step.text}</p></li>)}</ol></div></section>

      <section className="riyadh-projects" aria-labelledby="riyadh-projects-title"><div className="riyadh-container"><div className="riyadh-projects-heading"><div><span className="riyadh-kicker">أنواع الحلول</span><h2 id="riyadh-projects-title">صور توضيحية للرفوف والتجهيز</h2><p>صور توضح أنواعاً من حلول التخزين والعرض.</p></div><Link href="/projects">استكشف صور الحلول <ArrowUpLeft size={16} aria-hidden="true" /></Link></div><div className="riyadh-project-grid">{projectImages.map((item) => <Link className="riyadh-project-tile" href="/projects" key={item.label}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 720px) 75vw, (max-width: 1050px) 50vw, 25vw" /><span>{item.label}<ArrowUpLeft size={15} aria-hidden="true" /></span></Link>)}</div></div></section>

      <section className="riyadh-local" aria-labelledby="riyadh-local-title"><div className="riyadh-container riyadh-local-inner"><div><span className="riyadh-kicker">خدمة المشاريع في الرياض</span><h2 id="riyadh-local-title">هل تبحث عن شركة رفوف في الرياض؟</h2><p>إذا كان مشروعك مستودعاً، سوبر ماركت، بقالة، صيدلية أو محلاً تجارياً في الرياض، يمكنك مشاركة تفاصيل المشروع والمساحة مع الشامخ لتحديد نوع الرفوف ونظام العرض أو التخزين المناسب.</p></div><WhatsAppButton message={heroMessage} label="تواصل عبر واتساب" /></div></section>

      <section className="riyadh-faq" aria-labelledby="riyadh-faq-title"><div className="riyadh-container riyadh-faq-inner"><div className="riyadh-faq-heading"><span className="riyadh-kicker">أسئلة شائعة</span><h2 id="riyadh-faq-title">أسئلة عن الرفوف والتخزين في الرياض</h2><p>إجابات واضحة حول الأنظمة وخيارات التجهيز.</p></div><div className="riyadh-faq-list">{faqs.map(({ q, a }) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></div></section>

      <section className="riyadh-related" aria-labelledby="riyadh-related-title"><div className="riyadh-container"><div className="riyadh-section-heading riyadh-related-heading"><span className="riyadh-kicker">روابط مفيدة</span><h2 id="riyadh-related-title">اكتشف المزيد من حلول الشامخ</h2></div><div className="riyadh-related-links"><Link href="/warehouse-racking"><Warehouse size={18} aria-hidden="true" />رفوف المستودعات<ArrowUpLeft size={15} aria-hidden="true" /></Link><Link href="/retail-shelving"><Store size={18} aria-hidden="true" />رفوف المحلات والسوبر ماركت<ArrowUpLeft size={15} aria-hidden="true" /></Link><Link href="/solutions"><Boxes size={18} aria-hidden="true" />جميع الحلول<ArrowUpLeft size={15} aria-hidden="true" /></Link><Link href="/sectors"><Building2 size={18} aria-hidden="true" />القطاعات<ArrowUpLeft size={15} aria-hidden="true" /></Link><Link href="/projects"><Package size={18} aria-hidden="true" />مشاريعنا<ArrowUpLeft size={15} aria-hidden="true" /></Link><Link href="/jeddah"><MapPin size={18} aria-hidden="true" />خدماتنا في جدة<ArrowUpLeft size={15} aria-hidden="true" /></Link></div></div></section>

      <section className="riyadh-final-cta" aria-labelledby="riyadh-final-title"><div className="riyadh-container riyadh-final-inner"><div><span className="riyadh-kicker">تواصل معنا</span><h2 id="riyadh-final-title">هل لديك مشروع رفوف في الرياض؟</h2><p>أرسل لنا نوع المشروع والمساحة وطبيعة الاستخدام، وسنساعدك في اختيار الحل المناسب.</p></div><WhatsAppButton message={finalMessage} label="تواصل عبر واتساب" /></div></section>
    </div>
  );
}




