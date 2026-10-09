'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpLeft } from 'lucide-react';
import { buildWhatsappUrl } from '@/lib/data';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

const projectTypes = [
  'مستودع أو مخزن',
  'سوبر ماركت',
  'بقالة',
  'صيدلية',
  'محل تجاري أو معرض',
  'تخزين منزلي',
  'أخرى',
];

export default function ContactForm() {
  const [city, setCity] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const value = (key: string, fallback = 'غير محدد') => {
      const entry = String(formData.get(key) ?? '').trim();
      return entry || fallback;
    };
    const selectedCity = city === 'مدينة أخرى' ? value('cityOther') : city;
    const message = [
      'السلام عليكم، وصلت لكم من موقع الشامخ للرفوف والديكورات وأرغب بالاستفسار عن مشروعي.',
      '',
      `الاسم: ${value('name')}`,
      `رقم الجوال: ${value('phone')}`,
      `المدينة: ${selectedCity || 'غير محدد'}`,
      `نوع المشروع: ${value('projectType')}`,
      `المساحة التقريبية: ${value('area')}`,
      `تفاصيل المشروع: ${value('details')}`,
    ].join('\n');

    window.open(buildWhatsappUrl(message), '_blank', 'noopener,noreferrer');
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="contact-form-grid">
        <label className="contact-field">
          <span>الاسم <b aria-hidden="true">*</b></span>
          <input name="name" autoComplete="name" required placeholder="اكتب اسمك الكامل" />
        </label>
        <label className="contact-field">
          <span>رقم الجوال <small>اختياري</small></span>
          <input name="phone" autoComplete="tel" inputMode="tel" type="tel" dir="ltr" placeholder="05xxxxxxxx" />
        </label>
        <label className="contact-field">
          <span>المدينة <b aria-hidden="true">*</b></span>
          <select name="city" required value={city} onChange={(event) => setCity(event.target.value)}>
            <option value="" disabled>اختر المدينة</option>
            <option value="جدة">جدة</option>
            <option value="الرياض">الرياض</option>
            <option value="مدينة أخرى">مدينة أخرى</option>
          </select>
        </label>
        {city === 'مدينة أخرى' && (
          <label className="contact-field">
            <span>اسم المدينة <b aria-hidden="true">*</b></span>
            <input name="cityOther" required placeholder="اكتب اسم المدينة" />
          </label>
        )}
        <label className="contact-field">
          <span>نوع المشروع <b aria-hidden="true">*</b></span>
          <select name="projectType" required defaultValue="">
            <option value="" disabled>اختر نوع المشروع</option>
            {projectTypes.map((projectType) => <option key={projectType} value={projectType}>{projectType}</option>)}
          </select>
        </label>
        <label className="contact-field">
          <span>المساحة التقريبية <small>اختياري</small></span>
          <input name="area" placeholder="مثال: ٢٠٠ م² أو مساحة المتجر" />
        </label>
        <label className="contact-field contact-field-wide">
          <span>تفاصيل المشروع <b aria-hidden="true">*</b></span>
          <textarea name="details" required rows={4} placeholder="ما نوع الرفوف أو التجهيز الذي تحتاجه؟ شاركنا تفاصيل النشاط والمساحة وأي متطلبات مهمة." />
        </label>
      </div>
      <button className="button button-whatsapp contact-submit" type="submit">
        <WhatsAppIcon size={19} />
        <span>إرسال عبر واتساب</span>
        <ArrowUpLeft size={16} aria-hidden="true" />
      </button>
      <p className="contact-form-note">سيفتح واتساب برسالة مرتبة لتراجعها وترسلها بنفسك. لن تُرسل البيانات تلقائياً من الموقع.</p>
    </form>
  );
}
