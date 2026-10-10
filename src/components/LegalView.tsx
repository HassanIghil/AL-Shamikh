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
import type { Locale } from '@/lib/i18n/config';

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

const englishPrivacySections: LegalSection[] = [
  { id: 'operator', title: 'Who operates this website?', icon: ShieldCheck, content: <p>Al Shamikh for Shelving and Décor operates this website to provide information about shelving, storage and display solutions, and to make project inquiries easier.</p> },
  { id: 'details', title: 'Information you choose to enter', icon: FileText, content: <><p>On the <Link href="/en/contact">contact form</Link>, you can enter your name, city, project type and details. A mobile number and approximate area are optional. If you select another city, you can enter its name. Pressing the form button does not submit these details to a website-specific server.</p><p>Share only what is needed for your inquiry and avoid sensitive information unrelated to shelving.</p></> },
  { id: 'whatsapp', title: 'How the WhatsApp message works', icon: MessageCircle, content: <><p>Your browser arranges your form entries into a message and opens a WhatsApp link containing that text. You can review the message in WhatsApp and decide whether to send it. Opening the link does not automatically send a message to Al Shamikh. If you send it, Al Shamikh uses the details you share to respond and discuss your project.</p><p>Direct WhatsApp links on the site also prepare a short inquiry that you can edit before sending.</p></> },
  { id: 'hosting', title: 'Hosting and technical information', icon: Server, content: <p>The site is published through Cloudflare Pages. When you visit, the hosting service may process technical request information such as network address, browser type and request time under its settings and policies.</p> },
  { id: 'analytics', title: 'Analytics and cookies', icon: BookOpenText, content: <p>Cloudflare Web Analytics is present in the current site to measure page visits and performance. The current website code does not configure another analytics tool or application-created cookies. If these services or settings change, this statement will be updated.</p> },
  { id: 'external', title: 'When you leave this website', icon: ExternalLink, content: <p>Contact links may take you to WhatsApp, a separate service. Review the information you share and its policies before continuing. This website does not control how WhatsApp processes data after you open it.</p> },
  { id: 'updates', title: 'Questions and policy changes', icon: Clock3, content: <p>For questions about privacy or information you have shared with Al Shamikh, use the <Link href="/en/contact">contact page</Link>. If the form or services used by this site change, the updated policy will be published here.</p> },
];

const englishTermsSections: LegalSection[] = [
  { id: 'purpose', title: 'Purpose of this website', icon: BookOpenText, content: <p>This website introduces Al Shamikh shelving for warehouses, stores, supermarkets, grocery businesses and pharmacies, and helps visitors begin a project inquiry. Viewing the site does not create a purchase order or an agreement for a specific service.</p> },
  { id: 'products', title: 'Products and specifications', icon: PackageCheck, content: <p>Descriptions and examples explain available categories. Product availability, dimensions, specifications and suitability are confirmed after discussing the site and intended use with Al Shamikh. Images and descriptions are not final specifications for every project.</p> },
  { id: 'quotes', title: 'Prices and scope of work', icon: FileText, content: <p>The website does not display final prices or binding offers. Prices and supply scope are discussed directly based on your project details, then the quotation confirms what it includes. If you need shelving installation, mention it when you contact us; availability and scope require separate confirmation before any agreement.</p> },
  { id: 'areas', title: 'Service areas', icon: MapPin, content: <p>Al Shamikh serves projects in <Link href="/en/jeddah">Jeddah</Link> and <Link href="/en/riyadh">Riyadh</Link>. The project location and requirements are discussed directly. Naming a city does not imply a branch or walk-in address there.</p> },
  { id: 'images', title: 'Images on the site', icon: Images, content: <p>Images marked as illustrative in <Link href="/en/projects">solution images</Link> show examples of shelving categories. They are not a record of projects completed by Al Shamikh. If completed-project photos are published later, they will be clearly identified with details confirmed by the project owner.</p> },
  { id: 'rights', title: 'Content and usage rights', icon: Copyright, content: <p>Text, designs and images are presented to explain the website. Please respect the rights of material owners and obtain appropriate permission before reusing or publishing them. Ownership and licensing of images must be confirmed before new project materials are published.</p> },
  { id: 'links', title: 'External links and questions', icon: ExternalLink, content: <p>Some links open WhatsApp outside this website. You can review the message before sending it, and the external service has its own terms and policies. For questions about the site or these terms, visit the <Link href="/en/contact">contact page</Link>.</p> },
];

const englishPages = {
  privacy: { title: 'Privacy policy', eyebrow: 'Your privacy and clear communication', intro: 'This page explains what happens to information you choose to enter, plus website hosting and WhatsApp links.', icon: ShieldCheck, sections: englishPrivacySections, related: { href: '/en/terms', label: 'Terms of use' } },
  terms: { title: 'Terms of use', eyebrow: 'Clear information before you inquire', intro: 'These terms explain the information shown on this website and how product and service details are confirmed.', icon: FileText, sections: englishTermsSections, related: { href: '/en/privacy', label: 'Privacy policy' } },
} as const;

export default function LegalView({ type, locale = 'ar' }: { type: 'privacy' | 'terms'; locale?: Locale }) {
  const english = locale === 'en';
  const page = english ? englishPages[type] : pages[type];
  const PageIcon = page.icon;

  return (
    <div className="legal-page">
      <div className="legal-shell">
        <nav className="legal-breadcrumb" aria-label={english ? 'Breadcrumb' : 'مسار التنقل'}>
          <Link href={english ? '/en' : '/'}>{english ? 'Home' : 'الرئيسية'}</Link>
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
          <aside className="legal-aside" aria-label={english ? 'On this page' : 'التنقل داخل الصفحة'}>
            <nav className="legal-toc" aria-label={`أقسام ${page.title}`}>
              <span className="legal-toc-heading">{english ? 'On this page' : 'في هذه الصفحة'}</span>
              <ol>{page.sections.map((section, index) => (
                <li key={section.id}><a href={`#${section.id}`}><span>{String(index + 1).padStart(2, '0')}</span>{section.title}</a></li>
              ))}</ol>
            </nav>
            <div className="legal-aside-note">
              <CircleHelp size={19} aria-hidden="true" />
              <p>{english ? <>Have a question? <Link href="/en/contact">Contact us</Link>.</> : <>لديك سؤال؟ <Link href="/contact">تواصل معنا</Link> وسنساعدك.</>}</p>
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
                <span className="legal-eyebrow">{english ? 'Need clarification?' : 'تحتاج إلى توضيح؟'}</span>
                <h2>{english ? 'We can answer your question' : 'يسعدنا الإجابة عن سؤالك'}</h2>
                <p>{english ? 'Contact Al Shamikh about this page or your project details.' : 'تواصل مع الشامخ بشأن محتوى هذه الصفحة أو تفاصيل مشروعك.'}</p>
              </div>
              <Link className="legal-contact-link" href={english ? '/en/contact' : '/contact'}>{english ? 'Contact page' : 'صفحة التواصل'} <ArrowUpLeft size={17} aria-hidden="true" /></Link>
            </div>

            <div className="legal-related">
              <span>{english ? 'Related information' : 'قد يهمك أيضاً'}</span>
              <Link href={page.related.href}>{page.related.label} <ArrowUpLeft size={15} aria-hidden="true" /></Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
