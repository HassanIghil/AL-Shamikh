'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpLeft } from 'lucide-react';
import { whatsapp } from '@/lib/data';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

const projects = [
  { title: 'تجهيز رفوف مستودع', category: 'مستودعات', image: '/photos/hero.webp', alt: 'ممر تخزين طويل بين رفوف مستودع زرقاء وبرتقالية' },
  { title: 'رفوف سوبر ماركت', category: 'سوبر ماركت', image: '/photos/market.webp', alt: 'رفوف عرض تجارية داكنة بحواف خضراء' },
  { title: 'تجهيز رفوف صيدلية', category: 'صيدليات', image: '/photos/pharmacy.jpeg', alt: 'أرفف بيضاء مرتبة داخل صيدلية' },
  { title: 'رفوف متجر غذائي', category: 'محلات', image: '/photos/store.webp', alt: 'ممر متجر مع رفوف عرض بيضاء' },
  { title: 'نظام تخزين صناعي', category: 'مستودعات', image: '/photos/warehouse-2.jpeg', alt: 'رفوف تخزين صناعية زرقاء وبرتقالية' },
  { title: 'وحدات عرض داكنة', category: 'محلات', image: '/photos/black.webp', alt: 'رفوف عرض داكنة بحواف خضراء' },
  { title: 'رفوف تخزين متعددة المستويات', category: 'تخزين', image: '/photos/warehouse-5.webp', alt: 'سلم وممرات معدنية ضمن مساحة تخزين متعددة المستويات' },
  { title: 'تنظيم مساحة مستودع', category: 'مستودعات', image: '/photos/warehouse-3.webp', alt: 'صفوف رفوف تخزين صناعية في مستودع' },
  { title: 'رفوف عرض بيضاء', category: 'محلات', image: '/photos/white.webp', alt: 'وحدات رفوف عرض بيضاء في مساحة تجارية' },
  { title: 'حلول تخزين للمساحات الداخلية', category: 'تخزين', image: '/photos/home.webp', alt: 'رفوف تخزين داخلية لمنتجات متنوعة' },
  { title: 'رفوف مستودع تجاري', category: 'مستودعات', image: '/photos/warehouse-4.jpeg', alt: 'أنظمة رفوف معدنية داخل مستودع واسع' },
];

const categories = ['الكل', 'مستودعات', 'سوبر ماركت', 'صيدليات', 'محلات', 'تخزين'];

export default function ProjectFilter() {
  const [filter, setFilter] = useState('الكل');
  const visible = filter === 'الكل' ? projects : projects.filter((project) => project.category === filter);

  return (
    <div className="projects-gallery-block" id="project-gallery">
      <div className="projects-filter-bar" role="group" aria-label="تصفية المشاريع حسب نوع الحل">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
            className={filter === category ? 'is-active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="projects-masonry" aria-live="polite">
        {visible.map((project, index) => (
          <article className={`projects-card projects-card-${index + 1}`} key={project.image}>
            <a
              className="projects-card-image"
              href={whatsapp(`السلام عليكم، شاهدت مشروع ${project.title} في موقع الشامخ وأرغب بتنفيذ مشروع مشابه.`)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`استفسر عبر واتساب عن ${project.title}`}
            >
              <Image src={project.image} alt={project.alt} fill sizes="(max-width: 680px) 100vw, (max-width: 1050px) 50vw, 34vw" />
              <span className="projects-card-category">{project.category}</span>
              <span className="projects-card-action" aria-hidden="true"><WhatsAppIcon size={18} /><span>استفسر عن مشروع مشابه</span><ArrowUpLeft size={17} /></span>
            </a>
            <div className="projects-card-caption">
              <h3>{project.title}</h3>
              <span aria-hidden="true"><ArrowUpLeft size={17} /></span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
