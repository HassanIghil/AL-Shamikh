import Image from 'next/image';
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
import { whatsapp } from '@/lib/data';
import './jeddah.css';

const heroMessage = 'السلام عليكم، وصلت لكم من صفحة خدمات الشامخ في جدة وأرغب بالاستفسار عن مشروع رفوف وتخزين في جدة.';
const warehouseMessage = 'السلام عليكم، وصلت لكم من صفحة جدة وأرغب بالاستفسار عن رفوف مستودعات لمشروع في جدة.';
const retailMessage = 'السلام عليكم، وصلت لكم من صفحة جدة وأرغب بالاستفسار عن تجهيز متجري في جدة.';
const pharmacyMessage = 'السلام عليكم، وصلت لكم من صفحة جدة وأرغب بالاستفسار عن رفوف الصيدليات في جدة.';
const groceryMessage = 'السلام عليكم، وصلت لكم من صفحة جدة وأرغب بالاستفسار عن رفوف بقالة في جدة.';
const finalMessage = 'السلام عليكم، وصلت لكم من صفحة جدة في موقع الشامخ وأرغب بمناقشة مشروع رفوف وتخزين في جدة.';

const trustItems = [
  { icon: Warehouse, title: 'حلول للمستودعات', text: 'أنظمة تخزين حسب طبيعة المشروع' },
  { icon: Store, title: 'حلول للمتاجر', text: 'سوبر ماركت · بقالات · صيدليات' },
  { icon: Truck, title: 'توريد وتركيب', text: 'تنفيذ وتجهيز حسب المشروع' },
  { icon: MapPin, title: 'خدمة جدة', text: 'والمناطق المحيطة' },
];

const warehouseTypes = ['رفوف تخزين ثقيل', 'رفوف تخزين متوسط', 'رفوف تخزين خفيف', 'أنظمة تخزين متعددة المستويات'];
const retailTypes = ['رفوف سوبر ماركت', 'رفوف بقالات', 'رفوف محلات', 'وحدات عرض'];

const factors = [
  { icon: Store, title: 'نوع النشاط', text: 'مستودع أو متجر أو مساحة عرض.' },
  { icon: Ruler, title: 'مساحة الموقع', text: 'الأبعاد والمسارات والارتفاع المتاح.' },
  { icon: Package, title: 'نوع المنتجات', text: 'أحجامها وطريقة ترتيبها.' },
  { icon: Settings2, title: 'طريقة الاستخدام', text: 'حركة المخزون والوصول اليومي.' },
  { icon: Boxes, title: 'إمكانية التوسع', text: 'مرونة النظام عند تغير الاحتياج.' },
];

const process = [
  { number: '01', title: 'فهم الاحتياج', text: 'نتعرف على النشاط وطبيعة الاستخدام.' },
  { number: '02', title: 'دراسة المساحة', text: 'مراجعة الأبعاد ومتطلبات المشروع.' },
  { number: '03', title: 'اختيار النظام', text: 'تحديد نوع الرفوف والتوزيع المناسب.' },
  { number: '04', title: 'التوريد والتركيب', text: 'تنسيق التجهيز والتركيب حسب المشروع.' },
  { number: '05', title: 'التسليم والمتابعة', text: 'مراجعة جاهزية الحل للاستخدام.' },
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
  { q: 'هل توفرون رفوف مستودعات في جدة؟', a: 'نعم، يوفر الشامخ حلول رفوف للمستودعات والمخازن في جدة تشمل أنظمة للتخزين الثقيل والمتوسط والخفيف، ويتم اختيار الحل وفق مساحة الموقع وطبيعة المنتجات وطريقة الاستخدام.' },
  { q: 'ما أنواع رفوف المستودعات المتوفرة؟', a: 'تشمل الخيارات رفوف التخزين الثقيل والمتوسط والخفيف، إضافة إلى أنظمة التخزين متعددة المستويات. يعتمد الاختيار على البضائع والمساحة وطريقة المناولة.' },
  { q: 'هل توفرون رفوف سوبر ماركت في جدة؟', a: 'نعم، تتوفر حلول رفوف وعرض للسوبر ماركت والبقالات والمحلات التجارية، بما يشمل الوحدات الجدارية والوسطية وحلول تنظيم المنتجات حسب طبيعة المشروع.' },
  { q: 'هل لديكم رفوف للبقالات والصيدليات؟', a: 'نعم، تشمل الحلول رفوف عرض وتنظيم للبقالات والصيدليات والمتاجر، ويُحدد التوزيع وفق المساحة والمنتجات وطريقة الاستخدام.' },
  { q: 'هل يمكن اختيار نظام الرفوف حسب مساحة المشروع؟', a: 'نعم، تتم مراجعة أبعاد الموقع وطبيعة النشاط والمنتجات قبل تحديد نوع الرفوف والتوزيع الملائم.' },
  { q: 'هل تقدمون خدمة تركيب الرفوف في جدة؟', a: 'تتوفر خيارات التوريد والتركيب، وتُناقش تفاصيل التنفيذ وفق متطلبات المشروع ونطاقه.' },
  { q: 'هل تتوفر منتجات صناعة وطنية وصناعة صينية؟', a: 'نعم، تتوفر خيارات من الصناعة الوطنية والصناعة الصينية، ويتم اختيار النظام وفق احتياج المشروع والمواصفات المطلوبة.' },
  { q: 'هل تخدمون المناطق المحيطة بجدة؟', a: 'نخدم مشاريع جدة والمناطق المحيطة، ويمكن التواصل لمناقشة إمكانية خدمة موقع المشروع.' },
];

export default function JeddahView() {
  return (
    <div className="jeddah-page">
      <section className="jeddah-hero" aria-labelledby="jeddah-title">
        <div className="jeddah-hero-copy">
          <nav className="jeddah-breadcrumb" aria-label="مسار التنقل"><Link href="/">الرئيسية</Link><ArrowLeft size={14} aria-hidden="true" /><span>جدة</span></nav>
          <span className="jeddah-pill">خدماتنا في جدة</span>
          <h1 id="jeddah-title">حلول الرفوف والتخزين<br />في جدة</h1>
          <p>يقدم الشامخ للرفوف والديكورات حلول رفوف وتخزين للمشاريع في جدة تشمل المستودعات، السوبر ماركت، البقالات، الصيدليات والمحلات التجارية، مع اختيار النظام المناسب حسب مساحة الموقع وطبيعة الاستخدام.</p>
          <span className="jeddah-service-area"><MapPin size={16} aria-hidden="true" /> جدة والمناطق المحيطة</span>
          <WhatsAppButton message={heroMessage} label="تواصل معنا من جدة" />
        </div>
        <div className="jeddah-hero-photo"><ResponsiveHeroImage src="/photos/hero-jeddah.webp" mobileSrc="/photos/hero-jeddah-mobile.webp" alt="رفوف عرض ومساحة تجارية حديثة لخدمات المشاريع في جدة" /><span>رفوف عرض للمحلات والسوبر ماركت</span></div>
      </section>

      <section className="jeddah-trust" aria-label="خدمات الشامخ في جدة">
        <div className="jeddah-container jeddah-trust-grid">{trustItems.map(({ icon: Icon, title, text }) => <div className="jeddah-trust-item" key={title}><Icon size={24} aria-hidden="true" /><span><strong>{title}</strong><small>{text}</small></span></div>)}</div>
      </section>

      <section className="jeddah-answer" aria-labelledby="jeddah-answer-title">
        <div className="jeddah-container jeddah-answer-inner">
          <div><span className="jeddah-kicker">حلول الرفوف في جدة</span><h2 id="jeddah-answer-title">ما حلول الرفوف والتخزين التي يوفرها الشامخ في جدة؟</h2></div>
          <div className="jeddah-answer-copy"><p>يوفر الشامخ في جدة حلول رفوف وتخزين للمستودعات والمخازن، وأنظمة عرض للسوبر ماركت والبقالات والصيدليات والمحلات التجارية، إضافة إلى حلول التخزين الخفيف والمتوسط والثقيل حسب احتياج المشروع. يتم اختيار النظام وفق مساحة الموقع، وطبيعة المنتجات وطريقة الاستخدام، مع إمكانية التوريد والتركيب للمشاريع بحسب متطلباتها. وتُراجع متطلبات النشاط قبل تحديد التوزيع ومستويات التخزين أو ترتيب وحدات العرض، بما يساعد على تنظيم المنتجات واستغلال المساحة المتاحة.</p><div className="jeddah-answer-links"><Link href="/solutions">جميع حلولنا <ArrowUpLeft size={16} aria-hidden="true" /></Link><Link href="/sectors">القطاعات التي نخدمها <ArrowUpLeft size={16} aria-hidden="true" /></Link></div></div>
        </div>
      </section>

      <section className="jeddah-solution jeddah-warehouse-solution" aria-labelledby="jeddah-warehouse-title">
        <div className="jeddah-solution-photo"><Image src="/photos/jeddah-stocked-warehouse.webp" alt="رفوف مستودع صناعية مجهزة لتخزين البضائع على منصات" fill sizes="(max-width: 720px) 100vw, 50vw" /><span>أنظمة التخزين</span></div>
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
          <div className="jeddah-section-heading"><span className="jeddah-kicker">خطوات العمل</span><h2 id="jeddah-process-title">من فهم المشروع إلى التركيب</h2></div>
          <ol className="jeddah-steps">{process.map((step) => <li key={step.number}><span className="jeddah-step-number">{step.number}</span><strong>{step.title}</strong><p>{step.text}</p></li>)}</ol>
        </div>
      </section>

      <section className="jeddah-projects" aria-labelledby="jeddah-projects-title">
        <div className="jeddah-container">
          <div className="jeddah-projects-heading"><div><span className="jeddah-kicker">أنواع الحلول</span><h2 id="jeddah-projects-title">صور توضيحية للرفوف والتخزين</h2></div><Link href="/projects">استكشف صور الحلول <ArrowUpLeft size={17} aria-hidden="true" /></Link></div>
          <div className="jeddah-project-grid">{projects.map((project) => <Link className="jeddah-project-tile" href={project.href} key={project.image}><Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 75vw, 25vw" /><span>{project.label}</span></Link>)}</div>
        </div>
      </section>

      <section className="jeddah-search-answer" aria-labelledby="jeddah-search-title">
        <div className="jeddah-container jeddah-search-answer-inner"><div><span className="jeddah-kicker">حلول محلية للمشاريع</span><h2 id="jeddah-search-title">هل تبحث عن شركة رفوف في جدة؟</h2><p>إذا كان مشروعك مستودعاً، سوبر ماركت، بقالة، صيدلية أو محلاً تجارياً في جدة، يمكنك مشاركة تفاصيل المساحة وطبيعة الاستخدام مع الشامخ ليتم تحديد نوع الرفوف والحل الأنسب للمشروع.</p></div><WhatsAppButton message={finalMessage} label="تواصل عبر واتساب" /></div>
      </section>

      <section className="jeddah-faq" aria-labelledby="jeddah-faq-title">
        <div className="jeddah-container jeddah-faq-inner"><div className="jeddah-faq-heading"><span className="jeddah-kicker">أسئلة شائعة</span><h2 id="jeddah-faq-title">أسئلة عن الرفوف والتخزين في جدة</h2></div><div className="jeddah-faq-list">{faqs.map(({ q, a }) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></div>
      </section>

      <section className="jeddah-related" aria-labelledby="jeddah-related-title">
        <div className="jeddah-container"><div className="jeddah-related-heading"><span className="jeddah-kicker">روابط مفيدة</span><h2 id="jeddah-related-title">اكتشف المزيد من حلول الشامخ</h2></div><div className="jeddah-related-links"><Link href="/warehouse-racking"><Warehouse size={18} aria-hidden="true" />رفوف المستودعات<ArrowUpLeft size={16} aria-hidden="true" /></Link><Link href="/retail-shelving"><Store size={18} aria-hidden="true" />رفوف المحلات والسوبر ماركت<ArrowUpLeft size={16} aria-hidden="true" /></Link><Link href="/solutions"><Boxes size={18} aria-hidden="true" />جميع الحلول<ArrowUpLeft size={16} aria-hidden="true" /></Link><Link href="/sectors"><Building2 size={18} aria-hidden="true" />القطاعات التي نخدمها<ArrowUpLeft size={16} aria-hidden="true" /></Link><Link href="/projects"><Package size={18} aria-hidden="true" />مشاريعنا<ArrowUpLeft size={16} aria-hidden="true" /></Link><Link href="/riyadh"><MapPin size={18} aria-hidden="true" />خدماتنا في الرياض<ArrowUpLeft size={16} aria-hidden="true" /></Link></div></div>
      </section>

      <CtaBand title="هل لديك مشروع رفوف في جدة؟" description="أرسل لنا نوع المشروع ومساحة الموقع وطبيعة الاستخدام، وسنساعدك في تحديد الحل المناسب." message={finalMessage} buttonLabel="تواصل عبر واتساب" />
    </div>
  );
}
