import type { ReactNode } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpLeft,
  BookOpenText,
  CircleHelp,
  Clock3,
  Copyright,
  ExternalLink,
  FileText,
  Images,
  MapPin,
  MessageCircle,
  PackageCheck,
  Server,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import './legal.css';

type LegalSection = {
  id: string;
  title: string;
  icon: LucideIcon;
  content: ReactNode;
};

const privacySections: LegalSection[] = [
  {
    id: 'operator', title: 'من يدير الموقع؟', icon: ShieldCheck,
    content: <p>يدير موقع الشامخ للرفوف والديكورات هذا المحتوى لتقديم معلومات عن الرفوف وحلول التخزين والعرض، وإتاحة التواصل بشأن احتياجات المشاريع.</p>,
  },
  {
    id: 'details', title: 'المعلومات التي تختار إدخالها', icon: FileText,
    content: <><p>في <Link href="/contact">نموذج التواصل</Link>، يمكنك إدخال الاسم والمدينة ونوع المشروع وتفاصيله، وإضافة رقم الجوال والمساحة التقريبية إن رغبت. إذا اخترت «مدينة أخرى»، يمكنك كتابة اسمها. لا ترسل النموذج معلوماته إلى خادم خاص بالموقع عند الضغط على الزر.</p><p>اكتب فقط التفاصيل اللازمة للاستفسار، وتجنب مشاركة بيانات حساسة لا يحتاجها طلب الرفوف.</p></>,
  },
  {
    id: 'whatsapp', title: 'كيف تعمل رسالة واتساب؟', icon: MessageCircle,
    content: <><p>يُرتّب المتصفح المعلومات التي أدخلتها في نص رسالة ويفتح رابط واتساب يحتوي على هذا النص. عند فتح الرابط، تنتقل إلى خدمة واتساب ويخضع استخدامها لسياساتها. يمكنك مراجعة الرسالة داخل واتساب، ثم تختار إرسالها بنفسك؛ فتح الرابط لا يرسل المحادثة تلقائياً إلى الشامخ. إذا أرسلت الرسالة، يستخدم الشامخ المعلومات التي شاركتها للرد على استفسارك ومناقشة مشروعك.</p><p>روابط واتساب المباشرة في الموقع تفتح رسالة استفسار قصيرة جاهزة يمكن تعديلها قبل إرسالها.</p></>,
  },
  {
    id: 'hosting', title: 'الاستضافة والمعلومات التقنية', icon: Server,
    content: <p>يُنشر الموقع عبر Cloudflare Pages. عند زيارة الموقع، قد تعالج خدمة الاستضافة معلومات تقنية مرتبطة بطلب الصفحة، مثل عنوان الشبكة ونوع المتصفح ووقت الطلب، وفق إعداداتها وسياساتها.</p>,
  },
  {
    id: 'analytics', title: 'قياس الزيارات وملفات الارتباط', icon: BookOpenText,
    content: <p>تظهر أداة Cloudflare Web Analytics في النسخة الحالية من الموقع لقياس زيارات الصفحات وأدائها. لا يتضمن كود الموقع الحالي أداة تحليلات أخرى أو إعداداً لملفات ارتباط ينشئها التطبيق. إذا تغيّرت إعدادات القياس أو خدمات الاستضافة، سنحدّث هذا البيان.</p>,
  },
  {
    id: 'external', title: 'عند مغادرة الموقع', icon: ExternalLink,
    content: <p>قد تنقلك روابط التواصل إلى واتساب، وهي خدمة مستقلة عن الموقع. راجع المعلومات التي تختار مشاركتها وسياسة الخدمة الخارجية قبل متابعة المحادثة. لا تتحكم هذه الصفحة في طريقة معالجة واتساب للبيانات بعد فتحه.</p>,
  },
  {
    id: 'updates', title: 'الاستفسارات وتحديث السياسة', icon: Clock3,
    content: <p>لأي سؤال عن الخصوصية أو المعلومات التي شاركتها مع الشامخ، استخدم <Link href="/contact">صفحة التواصل</Link>. إذا تغيّر نموذج التواصل أو الخدمات المستخدمة في الموقع، سننشر النص المحدّث في هذه الصفحة.</p>,
  },
];

const termsSections: LegalSection[] = [
  {
    id: 'purpose', title: 'الغرض من الموقع', icon: BookOpenText,
    content: <p>يعرض موقع الشامخ للرفوف والديكورات معلومات تعريفية عن رفوف المستودعات والمتاجر والسوبر ماركت والبقالات والصيدليات، ويساعد الزائر على بدء الاستفسار عن مشروعه. الاطلاع على الموقع لا ينشئ طلب شراء أو اتفاقاً على خدمة محددة.</p>,
  },
  {
    id: 'products', title: 'المنتجات والمواصفات', icon: PackageCheck,
    content: <p>الأوصاف والأمثلة تساعد على فهم الفئات المتاحة. يُؤكَّد توفر المنتج ومقاساته ومواصفاته ومدى ملاءمته بعد مناقشة مساحة الموقع وطبيعة الاستخدام مع الشامخ. لا تمثل الصور أو الأوصاف مواصفة نهائية لكل مشروع.</p>,
  },
  {
    id: 'quotes', title: 'الأسعار ونطاق العمل', icon: FileText,
    content: <p>لا يعرض الموقع سعراً نهائياً أو عرضاً ملزماً. تُناقش الأسعار ونطاق التوريد مباشرة مع الشامخ بحسب تفاصيل المشروع، ثم يُؤكَّد ما يشمله عرض السعر. إذا كنت تحتاج إلى تركيب الرفوف، فاذكر ذلك عند التواصل؛ توافر خدمة التركيب ونطاقها يحتاجان إلى تأكيد مستقل قبل الاتفاق.</p>,
  },
  {
    id: 'areas', title: 'مناطق الخدمة', icon: MapPin,
    content: <p>يخدم الشامخ المشاريع في <Link href="/jeddah">جدة</Link> و<Link href="/riyadh">الرياض</Link>. يُناقش موقع المشروع ومتطلباته عند التواصل، من دون أن يعني ذكر المدينة وجود فرع أو عنوان استقبال فيها.</p>,
  },
  {
    id: 'images', title: 'الصور المعروضة', icon: Images,
    content: <p>الصور الموسومة بأنها توضيحية في <Link href="/projects">صور الحلول</Link> تعرض أمثلة لفئات الرفوف، وليست سجلاً لمشاريع نفذها الشامخ. إذا نُشرت لاحقاً صور مشاريع منجزة، فسيُميَّز ذلك بوضوح مع التفاصيل التي يؤكدها صاحب المشروع.</p>,
  },
  {
    id: 'rights', title: 'المحتوى وحقوق الاستخدام', icon: Copyright,
    content: <p>تُعرض النصوص والتصاميم والصور للتعريف بالموقع. يُرجى مراعاة حقوق أصحاب المواد والحصول على الإذن المناسب قبل إعادة استخدامها أو نشرها. تخضع ملكية الصور وتراخيصها للتأكيد قبل نشر أي مواد مشاريع جديدة.</p>,
  },
  {
    id: 'links', title: 'الروابط الخارجية والاستفسارات', icon: ExternalLink,
    content: <p>قد تفتح بعض الروابط خدمة واتساب خارج الموقع. يمكنك مراجعة الرسالة قبل إرسالها، وتخضع الخدمة الخارجية لشروطها وسياساتها. لأي سؤال عن معلومات الموقع أو هذه الشروط، انتقل إلى <Link href="/contact">صفحة التواصل</Link>.</p>,
  },
];

const pages = {
  privacy: {
    title: 'سياسة الخصوصية',
    eyebrow: 'خصوصيتك ووضوح التواصل',
    intro: 'نوضح هنا ما يحدث للمعلومات التي تختار إدخالها عند التواصل معنا، وما يتعلق بالاستضافة وروابط واتساب.',
    icon: ShieldCheck,
    sections: privacySections,
    related: { href: '/terms', label: 'شروط الاستخدام' },
  },
  terms: {
    title: 'شروط الاستخدام',
    eyebrow: 'معلومات واضحة قبل الاستفسار',
    intro: 'تساعدك هذه الشروط على فهم طبيعة المعلومات المعروضة في الموقع وكيف تُؤكَّد تفاصيل المنتجات والخدمات.',
    icon: FileText,
    sections: termsSections,
    related: { href: '/privacy', label: 'سياسة الخصوصية' },
  },
} as const;

export default function LegalView({ type }: { type: 'privacy' | 'terms' }) {
  const page = pages[type];
  const PageIcon = page.icon;

  return (
    <div className="legal-page">
      <div className="legal-shell">
        <nav className="legal-breadcrumb" aria-label="مسار التنقل">
          <Link href="/">الرئيسية</Link>
          <ArrowLeft size={14} aria-hidden="true" />
          <span aria-current="page">{page.title}</span>
        </nav>

        <header className="legal-intro">
          <div className="legal-intro-icon"><PageIcon size={25} strokeWidth={1.8} aria-hidden="true" /></div>
          <div>
            <span className="legal-eyebrow">{page.eyebrow}</span>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
          </div>
        </header>

        <div className="legal-layout">
          <aside className="legal-aside" aria-label="التنقل داخل الصفحة">
            <nav className="legal-toc" aria-label={`أقسام ${page.title}`}>
              <span className="legal-toc-heading">في هذه الصفحة</span>
              <ol>{page.sections.map((section, index) => (
                <li key={section.id}><a href={`#${section.id}`}><span>{String(index + 1).padStart(2, '0')}</span>{section.title}</a></li>
              ))}</ol>
            </nav>
            <div className="legal-aside-note">
              <CircleHelp size={19} aria-hidden="true" />
              <p>لديك سؤال؟ <Link href="/contact">تواصل معنا</Link> وسنساعدك.</p>
            </div>
          </aside>

          <article className="legal-article" aria-label={page.title}>
            {page.sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <section className="legal-section" id={section.id} key={section.id} aria-labelledby={`${section.id}-title`}>
                  <div className="legal-section-top">
                    <span className="legal-section-icon"><Icon size={20} strokeWidth={1.8} aria-hidden="true" /></span>
                    <span className="legal-section-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h2 id={`${section.id}-title`}>{section.title}</h2>
                  <div className="legal-section-copy">{section.content}</div>
                </section>
              );
            })}

            <div className="legal-endnote">
              <div>
                <span className="legal-eyebrow">تحتاج إلى توضيح؟</span>
                <h2>يسعدنا الإجابة عن سؤالك</h2>
                <p>تواصل مع الشامخ بشأن محتوى هذه الصفحة أو تفاصيل مشروعك.</p>
              </div>
              <Link className="legal-contact-link" href="/contact">صفحة التواصل <ArrowUpLeft size={17} aria-hidden="true" /></Link>
            </div>

            <div className="legal-related">
              <span>قد يهمك أيضاً</span>
              <Link href={page.related.href}>{page.related.label} <ArrowUpLeft size={15} aria-hidden="true" /></Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
