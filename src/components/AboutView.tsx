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
  ShieldCheck,
  Store,
  Truck,
  Warehouse,
  Wrench,
} from 'lucide-react';
import { CtaBand, WhatsAppButton } from '@/components/UI';
import './about.css';

const aboutMessage = 'السلام عليكم، وصلت لكم من صفحة من نحن في موقع الشامخ وأرغب بالتواصل بخصوص مشروعي.';
const finalMessage = 'السلام عليكم، وصلت لكم من صفحة من نحن في موقع الشامخ وأرغب بمناقشة مشروع رفوف وتخزين.';

const factors = [
  { icon: Store, title: 'طبيعة النشاط' },
  { icon: Ruler, title: 'المساحة المتاحة' },
  { icon: Settings2, title: 'طريقة الاستخدام' },
  { icon: Package, title: 'نوع المنتجات' },
];

const pillars = [
  { icon: Ruler, title: 'حل حسب المشروع', text: 'اختيار النظام وفق طبيعة المساحة والاستخدام' },
  { icon: Truck, title: 'توريد', text: 'توفير الأنظمة والحلول المناسبة للمشروع' },
  { icon: Wrench, title: 'تركيب', text: 'تنفيذ وتركيب بواسطة فريق متخصص' },
  { icon: Boxes, title: 'تنوع الحلول', text: 'للمستودعات والمتاجر والصيدليات والتخزين' },
];

const process = [
  { number: '01', title: 'نفهم احتياجك', text: 'نفهم طبيعة النشاط والمساحة والاستخدام.' },
  { number: '02', title: 'ندرس الموقع', text: 'نحدد المتطلبات والعوامل المؤثرة في اختيار النظام.' },
  { number: '03', title: 'نختار الحل', text: 'نقترح نوع الرفوف أو نظام العرض المناسب.' },
  { number: '04', title: 'التوريد والتركيب', text: 'تجهيز النظام وتركيبه في الموقع.' },
  { number: '05', title: 'التسليم', text: 'التأكد من جاهزية الحل للاستخدام.' },
];

const sectors = [
  { title: 'المستودعات', image: '/photos/warehouse-2.jpeg', href: '/warehouse-racking' },
  { title: 'السوبر ماركت', image: '/photos/market.jpeg', href: '/retail-shelving' },
  { title: 'البقالات', image: '/photos/store.jpeg', href: '/retail-shelving' },
  { title: 'الصيدليات', image: '/photos/pharmacy.jpeg', href: '/retail-shelving' },
  { title: 'المحلات التجارية', image: '/photos/black.jpeg', href: '/retail-shelving' },
];

const trust = [
  { icon: Ruler, title: 'حلول حسب المساحة' },
  { icon: Boxes, title: 'تنوع الأنظمة' },
  { icon: Wrench, title: 'تجهيز وتركيب' },
  { icon: Building2, title: 'خدمة قطاعات متعددة' },
];

export default function AboutView() {
  return (
    <div className="about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero-copy">
          <nav className="about-breadcrumb" aria-label="مسار التنقل">
            <Link href="/">الرئيسية</Link><ArrowLeft size={14} aria-hidden="true" /><span>من نحن</span>
          </nav>
          <span className="about-pill">الشامخ للرفوف والديكورات</span>
          <h1 id="about-title">حلول تخزين وعرض<br />تبدأ من فهم المكان</h1>
          <p>نقدم حلول رفوف وتخزين وتجهيز للمستودعات والمتاجر والصيدليات والمنازل، مع اختيار النظام بما يتناسب مع طبيعة المساحة والاستخدام.</p>
          <WhatsAppButton message={aboutMessage} label="تحدث معنا عن مشروعك" />
        </div>
        <div className="about-hero-photo">
          <Image src="/photos/warehouse-3.jpeg" alt="رفوف تخزين ممتدة في مستودع" fill priority sizes="(max-width: 720px) 100vw, 58vw" />
          <span>حلول تبدأ من احتياج المكان</span>
        </div>
      </section>

      <section className="about-intro" aria-labelledby="about-intro-title">
        <div className="about-container about-intro-grid">
          <div className="about-intro-photo">
            <Image src="/photos/hero.jpeg" alt="ممر مستودع مجهز برفوف تخزين" fill sizes="(max-width: 720px) 100vw, 48vw" />
            <span>مساحة منظمة · استخدام عملي</span>
          </div>
          <div className="about-intro-copy">
            <span className="about-kicker">من نحن</span>
            <h2 id="about-intro-title">الشامخ للرفوف والديكورات</h2>
            <p>نركز على تقديم حلول عملية للرفوف والتخزين والعرض تساعد على استغلال المساحة وتنظيم المنتجات أو البضائع بحسب طبيعة كل مشروع.</p>
            <p>نعمل مع مشاريع المستودعات، السوبر ماركت، البقالات، الصيدليات، المحلات التجارية وحلول التخزين الأخرى.</p>
            <div className="about-inline-links">
              <Link href="/solutions">تعرّف على حلولنا <ArrowUpLeft size={16} aria-hidden="true" /></Link>
              <Link href="/projects">شاهد نماذج المشاريع <ArrowUpLeft size={16} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about-method" aria-labelledby="about-method-title">
        <div className="about-container about-method-inner">
          <div className="about-method-copy">
            <span className="about-kicker">طريقتنا في العمل</span>
            <h2 id="about-method-title">الترتيب يبدأ بفهم المساحة</h2>
            <p>لا نبدأ من شكل الرف فقط. نبدأ من نوع النشاط، المساحة، المنتجات، طريقة الاستخدام وحركة الأشخاص أو المخزون داخل المكان.</p>
            <Link href="/warehouse-racking" className="about-method-link">كيف نختار نظام الرفوف المناسب؟ <ArrowUpLeft size={17} aria-hidden="true" /></Link>
          </div>
          <div className="about-factors" aria-label="عوامل اختيار الحل">
            {factors.map(({ icon: Icon, title }) => <div className="about-factor" key={title}><Icon size={25} strokeWidth={1.65} aria-hidden="true" /><strong>{title}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="about-options" aria-labelledby="about-options-title">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-kicker">خيارات متعددة</span>
            <h2 id="about-options-title">صناعة وطنية وصناعة صينية</h2>
            <p>نوفر خيارات من الأنظمة والمنتجات تشمل الصناعة الوطنية والصناعة الصينية، ويتم اختيار الحل المناسب بحسب احتياج المشروع والمواصفات المطلوبة.</p>
          </div>
          <div className="about-origin-panels">
            <article className="about-origin-panel">
              <div className="about-origin-image"><Image src="/photos/white.jpeg" alt="رفوف عرض معدنية في مساحة تجارية" fill sizes="(max-width: 720px) 100vw, 45vw" /></div>
              <div className="about-origin-copy"><span>الخيار الأول</span><h3>صناعة وطنية</h3><p>خيار ضمن المنتجات والأنظمة المتاحة لمناقشة احتياج المشروع ومواصفاته.</p></div>
            </article>
            <article className="about-origin-panel">
              <div className="about-origin-image"><Image src="/photos/store.jpeg" alt="رفوف متجر معروضة داخل مساحة تجارية" fill sizes="(max-width: 720px) 100vw, 45vw" /></div>
              <div className="about-origin-copy"><span>الخيار الثاني</span><h3>صناعة صينية</h3><p>خيار آخر ضمن الأنظمة والمنتجات، ويُناقش وفق متطلبات المشروع والمواصفات المطلوبة.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="about-why" aria-labelledby="about-why-title">
        <div className="about-container">
          <div className="about-why-heading"><span className="about-kicker">لماذا الشامخ؟</span><h2 id="about-why-title">شريك في تنظيم المساحة من البداية إلى التنفيذ</h2><p>نناقش احتياج المشروع، ونساعد في اختيار الحل المناسب، ثم تنسيق التوريد والتركيب.</p></div>
          <div className="about-pillars">
            {pillars.map(({ icon: Icon, title, text }) => <article className="about-pillar" key={title}><Icon size={28} strokeWidth={1.6} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <Link href="/sectors" className="about-why-link">القطاعات التي نخدمها <ArrowUpLeft size={17} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="about-process" aria-labelledby="about-process-title">
        <div className="about-container">
          <div className="about-section-heading about-process-heading"><span className="about-kicker">كيف نعمل؟</span><h2 id="about-process-title">من الفكرة إلى مساحة جاهزة</h2></div>
          <ol className="about-steps">
            {process.map((step) => <li key={step.number}><span className="about-step-number">{step.number}</span><strong>{step.title}</strong><p>{step.text}</p></li>)}
          </ol>
          <Link href="/contact" className="about-process-link">ابدأ بمشاركة تفاصيل مشروعك <ArrowUpLeft size={17} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="about-sectors" aria-labelledby="about-sectors-title">
        <div className="about-container">
          <div className="about-sectors-heading"><div><span className="about-kicker">مجالات التجهيز</span><h2 id="about-sectors-title">حلول لمختلف القطاعات</h2></div><Link href="/sectors">استكشف القطاعات <ArrowUpLeft size={17} aria-hidden="true" /></Link></div>
          <div className="about-sector-strip">
            {sectors.map((sector) => <Link href={sector.href} className="about-sector-tile" key={sector.title}><Image src={sector.image} alt="" fill sizes="(max-width: 720px) 72vw, 20vw" /><span>{sector.title}</span></Link>)}
          </div>
          <div className="about-sector-links"><Link href="/warehouse-racking">رفوف المستودعات</Link><Link href="/retail-shelving">رفوف المحلات والسوبر ماركت</Link><Link href="/projects">مشاريعنا</Link></div>
        </div>
      </section>

      <section className="about-trust" aria-label="ملامح الحلول">
        <div className="about-container about-trust-inner">
          {trust.map(({ icon: Icon, title }) => <div key={title}><Icon size={21} aria-hidden="true" /><strong>{title}</strong></div>)}
        </div>
      </section>

      <section className="about-local" aria-labelledby="about-local-title">
        <div className="about-container about-local-inner">
          <div className="about-local-mark"><MapPin size={26} aria-hidden="true" /></div>
          <div className="about-local-copy"><span className="about-kicker">نطاق الخدمة</span><h2 id="about-local-title">نخدم مشاريع جدة والرياض</h2><p>نوفر حلول الرفوف والتخزين للمشاريع في جدة والرياض، مع إمكانية خدمة مشاريع أخرى في مختلف مناطق المملكة.</p></div>
          <div className="about-city-links"><Link href="/jeddah">خدماتنا في جدة <ArrowUpLeft size={16} aria-hidden="true" /></Link><Link href="/riyadh">خدماتنا في الرياض <ArrowUpLeft size={16} aria-hidden="true" /></Link></div>
        </div>
      </section>

      <CtaBand title="لنبدأ من احتياج مشروعك" description="أرسل لنا تفاصيل المساحة ونوع النشاط، وسنساعدك في تحديد الحل المناسب." message={finalMessage} buttonLabel="أرسل تفاصيل مشروعك" />
    </div>
  );
}
