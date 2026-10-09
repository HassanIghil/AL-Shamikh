import Link from 'next/link';
import { ArrowLeft, ArrowUpLeft, Building2, Camera, MapPin, Ruler, Warehouse } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { WhatsAppButton } from '@/components/UI';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { phone, phoneClean } from '@/lib/data';
import './contact.css';

const directMessage = 'السلام عليكم، وصلت لكم من موقع الشامخ للرفوف والديكورات وأرغب بالاستفسار عن حلول تناسب مشروعي.';

const projectHints = [
  { icon: Building2, title: 'نوع النشاط' },
  { icon: Ruler, title: 'المساحة التقريبية' },
  { icon: Camera, title: 'صور الموقع إن توفرت' },
];

export default function ContactView() {
  return (
    <div className="contact-page">
      <header className="contact-intro">
        <nav className="contact-breadcrumb" aria-label="مسار التنقل">
          <Link href="/">الرئيسية</Link>
          <ArrowLeft size={14} aria-hidden="true" />
          <span>تواصل معنا</span>
        </nav>
        <span className="contact-eyebrow">نحن هنا لمساعدتك</span>
        <h1>لنبدأ بتجهيز مساحتك</h1>
        <p>شاركنا تفاصيل مشروعك، وسنتواصل معك لمناقشة حلول الرفوف والتخزين المناسبة لطبيعة نشاطك ومساحتك.</p>
      </header>

      <section className="contact-main" aria-label="طرق التواصل وإرسال تفاصيل المشروع">
        <div className="contact-form-panel">
          <div className="contact-panel-heading">
            <span className="contact-eyebrow">تفاصيل مشروعك</span>
            <h2>أخبرنا عمّا تحتاجه</h2>
            <p>املأ البيانات، وسنجهّز لك رسالة واتساب منظمة لإرسالها مباشرة.</p>
          </div>
          <ContactForm />
        </div>

        <aside className="contact-side">
          <div className="contact-whatsapp-panel">
            <div className="contact-whatsapp-icon"><WhatsAppIcon size={27} /></div>
            <span className="contact-eyebrow">تواصل مباشر</span>
            <h2>ابدأ المحادثة مباشرة</h2>
            <p>شاركنا نوع المشروع والمدينة والمساحة التقريبية، وسنناقش معك ما تحتاجه.</p>
            <WhatsAppButton message={directMessage} label="تواصل عبر واتساب" className="contact-direct-button" />
            <div className="contact-hints" aria-label="تفاصيل تساعدنا في فهم مشروعك">
              {projectHints.map(({ icon: Icon, title }) => (
                <div className="contact-hint" key={title}><Icon size={17} aria-hidden="true" /><span>{title}</span></div>
              ))}
            </div>
            <p className="contact-photo-note">يمكنك مشاركة صور المساحة مباشرة عبر واتساب بعد فتح المحادثة.</p>
          </div>

          <div className="contact-service-panel">
            <div className="contact-service-icon"><Warehouse size={21} aria-hidden="true" /></div>
            <div className="contact-service-copy">
              <h3>نطاق خدمتنا</h3>
              <p>جدة والرياض، ومناطق أخرى حسب نطاق المشروع.</p>
            </div>
            <span className="contact-service-divider" aria-hidden="true" />
            <div className="contact-phone-copy">
              <span>اتصال هاتفي</span>
              <a href={`tel:${phoneClean}`} dir="ltr">{phone}</a>
            </div>
            <MapPin className="contact-service-pin" size={18} aria-hidden="true" />
            <ArrowUpLeft className="contact-service-arrow" size={15} aria-hidden="true" />
          </div>
        </aside>
      </section>
    </div>
  );
}
