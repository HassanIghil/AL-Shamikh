import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpLeft,
  Boxes,
  MapPin,
  Ruler,
  Store,
  Warehouse,
  Wrench,
} from 'lucide-react';
import ProjectFilter from '@/components/ProjectFilter';
import { ResponsiveHeroImage, WhatsAppButton } from '@/components/UI';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { whatsapp } from '@/lib/data';
import './projects.css';

const types = [
  { title: 'رفوف مستودعات', href: '/warehouse-racking', image: '/photos/hero.webp', icon: Warehouse },
  { title: 'رفوف سوبر ماركت', href: '/retail-shelving', image: '/photos/market.webp', icon: Store },
  { title: 'رفوف بقالات', href: '/retail-shelving', image: '/photos/store.webp', icon: Store },
  { title: 'رفوف صيدليات', href: '/retail-shelving', image: '/photos/pharmacy.jpeg', icon: Boxes },
  { title: 'رفوف محلات', href: '/retail-shelving', image: '/photos/black.webp', icon: Store },
];

const steps = [
  { number: '01', title: 'فهم احتياج المشروع', text: 'نبدأ بنوع النشاط وطريقة استخدام المساحة.' },
  { number: '02', title: 'مراجعة المساحة', text: 'نراجع الأبعاد والارتفاع ومسارات الحركة.' },
  { number: '03', title: 'اختيار الحل', text: 'نناقش الرفوف والتوزيع الملائم للاستخدام.' },
  { number: '04', title: 'التوريد والتركيب', text: 'تُنسق تفاصيل التنفيذ وفق نطاق المشروع.' },
];

const projectMessage = 'السلام عليكم، شاهدت حلول الرفوف والتخزين في الموقع وأرغب بالاستفسار عن حل يناسب مشروعي.';

export default function ProjectsView() {
  return (
    <div className="projects-page">
      <section className="projects-hero" aria-labelledby="projects-title">
        <ResponsiveHeroImage className="projects-hero-image" src="/photos/hero-projects.webp" mobileSrc="/photos/hero-projects-mobile.webp" alt="صورة توضيحية لمستودع منظم مجهز بأنظمة رفوف تخزين" />
        <div className="projects-hero-shade" />
        <div className="projects-hero-content">
          <nav className="projects-breadcrumb" aria-label="مسار التنقل">
            <Link href="/">الرئيسية</Link><ArrowLeft size={14} aria-hidden="true" /><span>حلول الرفوف والتخزين</span>
          </nav>
          <span className="projects-eyebrow">أنظمة الرفوف والتخزين</span>
          <h1 id="projects-title">حلول للمستودعات والمتاجر</h1>
          <p>استكشف صوراً توضيحية لأنواع رفوف التخزين والعرض.</p>
          <p className="projects-hero-detail">من رفوف المستودعات إلى تجهيز المتاجر والصيدليات، تعرّف على الأنظمة وناقش ما يلائم مساحة مشروعك.</p>
          <WhatsAppButton message={projectMessage} label="استفسر عن حل لمشروعك" />
        </div>
        <a className="projects-hero-photo-inset" href="#project-gallery" aria-label="استكشف صور حلول الرفوف">
          <Image src="/photos/market.webp" alt="رفوف عرض في متجر" fill sizes="(max-width: 700px) 35vw, 24vw" />
          <span>حلول العرض والتخزين</span>
        </a>
        <span className="projects-hero-note"><MapPin size={16} aria-hidden="true" /> جدة · الرياض · مناطق المملكة</span>
      </section>

      <section className="projects-intro" aria-labelledby="projects-intro-title">
        <div className="projects-container projects-intro-inner">
          <div><span className="projects-kicker">أنواع الحلول</span><h2 id="projects-intro-title">حلول متنوعة لمساحات مختلفة</h2></div>
          <p>تصفّح صوراً توضيحية حسب نوع الاستخدام، ثم تواصل معنا لمناقشة المساحة وطبيعة احتياج مشروعك.</p>
          <a href="#project-gallery" className="projects-text-link">استكشف الصور <ArrowUpLeft size={17} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="projects-gallery-section" aria-labelledby="projects-gallery-title">
        <div className="projects-container">
          <div className="projects-section-heading">
            <div><span className="projects-kicker">صور توضيحية للحلول</span><h2 id="projects-gallery-title">رفوف المستودعات والمتاجر</h2></div>
            <p>اختر فئة لمشاهدة الحلول المرتبطة بها.</p>
          </div>
          <ProjectFilter />
        </div>
      </section>

      <section className="projects-featured" aria-labelledby="projects-featured-title">
        <div className="projects-featured-photo">
          <Image src="/photos/warehouse-5.webp" alt="ممرات وسلالم معدنية ضمن مساحة تخزين متعددة المستويات" fill sizes="(max-width: 700px) 100vw, 50vw" />
          <span>أنظمة تخزين للمساحات الداخلية</span>
        </div>
        <div className="projects-featured-copy">
          <span className="projects-kicker">حل يراعي المساحة</span>
          <h2 id="projects-featured-title">استفد من المساحة بطريقة تخدم عملك</h2>
          <p>يعتمد اختيار الرفوف على طبيعة الاستخدام، أبعاد الموقع، حركة البضائع وطريقة الوصول إليها. شاركنا تفاصيل مشروعك لمناقشة الخيارات المناسبة.</p>
          <a className="projects-featured-link" href={whatsapp(projectMessage)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={17} />ناقش مشروعك معنا <ArrowUpLeft size={17} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="projects-types-section" aria-labelledby="projects-types-title">
        <div className="projects-container">
          <div className="projects-section-heading projects-types-heading">
            <div><span className="projects-kicker">حلولنا</span><h2 id="projects-types-title">اختر نوع التجهيز</h2></div>
            <Link href="/solutions">كل الحلول <ArrowUpLeft size={17} aria-hidden="true" /></Link>
          </div>
          <div className="projects-types-strip">
            {types.map(({ title, href, image, icon: Icon }) => (
              <Link className="projects-type" href={href} key={title}>
                <span className="projects-type-photo"><Image src={image} alt="" fill sizes="(max-width: 700px) 45vw, 18vw" /></span>
                <span className="projects-type-icon"><Icon size={18} aria-hidden="true" /></span>
                <span className="projects-type-title">{title}</span>
                <ArrowUpLeft className="projects-type-arrow" size={17} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-process" aria-labelledby="projects-process-title">
        <div className="projects-container">
          <div className="projects-process-heading">
            <span className="projects-kicker">خطوات العمل</span>
            <h2 id="projects-process-title">من الفكرة إلى تجهيز المساحة</h2>
            <p>خطوات واضحة تبدأ بفهم الموقع وتنتهي بتنسيق التنفيذ.</p>
          </div>
          <ol className="projects-steps">
            {steps.map((step) => <li key={step.number}><span className="projects-step-number">{step.number}</span><strong>{step.title}</strong><p>{step.text}</p></li>)}
          </ol>
          <div className="projects-process-note"><Ruler size={19} aria-hidden="true" /><span>تُحدد التفاصيل النهائية بعد مراجعة المساحة واحتياجات الاستخدام.</span><Wrench size={19} aria-hidden="true" /></div>
        </div>
      </section>

      <section className="projects-local" aria-labelledby="projects-local-title">
        <div className="projects-container projects-local-inner">
          <span className="projects-local-icon"><MapPin size={23} aria-hidden="true" /></span>
          <div><span className="projects-kicker">مناطق الخدمة</span><h2 id="projects-local-title">مشاريع وحلول في جدة والرياض</h2><p>نخدم المشاريع في جدة والرياض، ويمكنك مشاركة تفاصيل موقعك لمناقشة الحل المناسب.</p></div>
          <div className="projects-local-links"><Link href="/jeddah">خدمات جدة <ArrowUpLeft size={16} aria-hidden="true" /></Link><Link href="/riyadh">خدمات الرياض <ArrowUpLeft size={16} aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="projects-final-cta" aria-labelledby="projects-cta-title">
        <div className="projects-container projects-final-inner">
          <div><span className="projects-kicker">مشروعك القادم</span><h2 id="projects-cta-title">هل لديك مشروع مشابه؟</h2><p>أرسل نوع النشاط وصور المساحة أو أبعادها، وسنناقش معك الحل المناسب.</p></div>
          <WhatsAppButton message={projectMessage} label="أرسل تفاصيل مشروعك" />
        </div>
      </section>
    </div>
  );
}
