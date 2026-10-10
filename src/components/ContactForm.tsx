'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpLeft } from 'lucide-react';
import { buildWhatsappUrl } from '@/lib/data';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import type { Locale } from '@/lib/i18n/config';

const projectTypes = [
  'مستودع أو مخزن',
  'سوبر ماركت',
  'بقالة',
  'صيدلية',
  'محل تجاري أو معرض',
  'تخزين منزلي',
  'أخرى',
];

export default function ContactForm({ locale = 'ar' }: { locale?: Locale }) {
  const english = locale === 'en';
  const [city, setCity] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const value = (key: string, fallback = 'غير محدد') => {
      const entry = String(formData.get(key) ?? '').trim();
      return entry || fallback;
    };
    const selectedCity = city === 'other' || city === 'مدينة أخرى' ? value('cityOther') : city;
    const arabicCity = selectedCity === 'Jeddah' ? 'جدة' : selectedCity === 'Riyadh' ? 'الرياض' : selectedCity;
    const projectTypeAr: Record<string, string> = {
      'Warehouse or stockroom': 'مستودع أو مخزن',
      Supermarket: 'سوبر ماركت',
      'Grocery store': 'بقالة',
      Pharmacy: 'صيدلية',
      'Commercial store or showroom': 'محل تجاري أو معرض',
      'Home storage': 'تخزين منزلي',
      Other: 'أخرى',
    };
    const message = english ? [
      'السلام عليكم، وصلت لكم من موقع الشامخ وأرغب بالاستفسار عن مشروع الرفوف.',
      '',
      `الاسم: ${value('name')}`,
      `رقم الجوال: ${value('phone')}`,
      `المدينة: ${arabicCity || 'غير محدد'}`,
      `نوع المشروع: ${projectTypeAr[value('projectType')] || value('projectType')}`,
      `المساحة التقريبية: ${value('area')}`,
      `تفاصيل المشروع: ${value('details')}`,
    ].join('\n') : [
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
          <span>{english ? 'Name' : 'الاسم'} <b aria-hidden="true">*</b></span>
          <input name="name" autoComplete="name" required placeholder={english ? 'Your full name' : 'اكتب اسمك الكامل'} />
        </label>
        <label className="contact-field">
          <span>{english ? 'Mobile number' : 'رقم الجوال'} <small>{english ? 'Optional' : 'اختياري'}</small></span>
          <input name="phone" autoComplete="tel" inputMode="tel" type="tel" dir="ltr" placeholder="05xxxxxxxx" />
        </label>
        <label className="contact-field">
          <span>{english ? 'City' : 'المدينة'} <b aria-hidden="true">*</b></span>
          <select name="city" required value={city} onChange={(event) => setCity(event.target.value)}>
            <option value="" disabled>{english ? 'Select a city' : 'اختر المدينة'}</option>
            <option value={english ? 'Jeddah' : 'جدة'}>{english ? 'Jeddah' : 'جدة'}</option>
            <option value={english ? 'Riyadh' : 'الرياض'}>{english ? 'Riyadh' : 'الرياض'}</option>
            <option value={english ? 'other' : 'مدينة أخرى'}>{english ? 'Another city' : 'مدينة أخرى'}</option>
          </select>
        </label>
        {(city === 'مدينة أخرى' || city === 'other') && (
          <label className="contact-field">
            <span>{english ? 'City name' : 'اسم المدينة'} <b aria-hidden="true">*</b></span>
            <input name="cityOther" required placeholder={english ? 'Enter the city name' : 'اكتب اسم المدينة'} />
          </label>
        )}
        <label className="contact-field">
          <span>{english ? 'Project type' : 'نوع المشروع'} <b aria-hidden="true">*</b></span>
          <select name="projectType" required defaultValue="">
            <option value="" disabled>{english ? 'Select a project type' : 'اختر نوع المشروع'}</option>
            {(english ? ['Warehouse or stockroom', 'Supermarket', 'Grocery store', 'Pharmacy', 'Commercial store or showroom', 'Home storage', 'Other'] : projectTypes).map((projectType) => <option key={projectType} value={projectType}>{projectType}</option>)}
          </select>
        </label>
        <label className="contact-field">
          <span>{english ? 'Approximate area' : 'المساحة التقريبية'} <small>{english ? 'Optional' : 'اختياري'}</small></span>
          <input name="area" placeholder={english ? 'For example, 200 m² or store area' : 'مثال: ٢٠٠ م² أو مساحة المتجر'} />
        </label>
        <label className="contact-field contact-field-wide">
          <span>{english ? 'Project details' : 'تفاصيل المشروع'} <b aria-hidden="true">*</b></span>
          <textarea name="details" required rows={4} placeholder={english ? 'What shelving do you need? Tell us about the business, space and any important requirements.' : 'ما نوع الرفوف أو التجهيز الذي تحتاجه؟ شاركنا تفاصيل النشاط والمساحة وأي متطلبات مهمة.'} />
        </label>
      </div>
      <button className="button button-whatsapp contact-submit" type="submit">
        <WhatsAppIcon size={19} />
        <span>{english ? 'Continue on WhatsApp' : 'إرسال عبر واتساب'}</span>
        <ArrowUpLeft size={16} aria-hidden="true" />
      </button>
      <p className="contact-form-note">{english ? 'WhatsApp will open with a prepared message for you to review and send. The website does not send it automatically.' : 'سيفتح واتساب برسالة مرتبة لتراجعها وترسلها بنفسك. لن تُرسل البيانات تلقائياً من الموقع.'}</p>
    </form>
  );
}
