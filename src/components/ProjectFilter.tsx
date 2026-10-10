'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpLeft } from 'lucide-react';
import { whatsapp } from '@/lib/data';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

const projects = [
  { title: 'رفوف مستودعات — صورة توضيحية', category: 'مستودعات', image: '/photos/hero.webp', alt: 'صورة توضيحية لممر رفوف تخزين زرقاء وبرتقالية' },
  { title: 'رفوف سوبر ماركت — صورة توضيحية', category: 'سوبر ماركت', image: '/photos/market.webp', alt: 'صورة توضيحية لرفوف عرض تجارية داكنة بحواف خضراء' },
  { title: 'رفوف صيدليات — صورة توضيحية', category: 'صيدليات', image: '/photos/pharmacy.jpeg', alt: 'صورة توضيحية لأرفف بيضاء داخل صيدلية' },
  { title: 'رفوف متجر غذائي — صورة توضيحية', category: 'محلات', image: '/photos/store.webp', alt: 'صورة توضيحية لممر متجر مع رفوف عرض بيضاء' },
  { title: 'رفوف تخزين صناعي — صورة توضيحية', category: 'مستودعات', image: '/photos/warehouse-2.jpeg', alt: 'صورة توضيحية لرفوف تخزين صناعية زرقاء وبرتقالية' },
  { title: 'وحدات عرض — صورة توضيحية', category: 'محلات', image: '/photos/black.webp', alt: 'صورة توضيحية لرفوف عرض داكنة بحواف خضراء' },
  { title: 'رفوف ومساحة رأسية — صورة توضيحية', category: 'تخزين', image: '/photos/warehouse-5.webp', alt: 'صورة توضيحية لرفوف وممرات تخزين داخلية' },
  { title: 'رفوف مستودع — صورة توضيحية', category: 'مستودعات', image: '/photos/warehouse-3.webp', alt: 'صورة توضيحية لصفوف رفوف تخزين صناعية' },
  { title: 'رفوف عرض بيضاء — صورة توضيحية', category: 'محلات', image: '/photos/white.webp', alt: 'صورة توضيحية لوحدات رفوف عرض بيضاء في مساحة تجارية' },
  { title: 'رفوف تخزين داخلية — صورة توضيحية', category: 'تخزين', image: '/photos/home.webp', alt: 'صورة توضيحية لرفوف تخزين داخلية لمنتجات متنوعة' },
  { title: 'أنظمة رفوف مستودعات — صورة توضيحية', category: 'مستودعات', image: '/photos/warehouse-4.jpeg', alt: 'صورة توضيحية لرفوف معدنية داخل مستودع' },
];

const categories = ['الكل', 'مستودعات', 'سوبر ماركت', 'صيدليات', 'محلات', 'تخزين'];

export default function ProjectFilter() {
  const [filter, setFilter] = useState('الكل');
  const visible = filter === 'الكل' ? projects : projects.filter((project) => project.category === filter);

  return (
    <div className="projects-gallery-block" id="project-gallery">
      <div className="projects-filter-bar" role="group" aria-label="تصفية صور الحلول حسب الفئة">
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
              href={whatsapp(`السلام عليكم، أريد الاستفسار عن ${project.category === 'مستودعات' ? 'رفوف مستودعات' : `رفوف ${project.category}`} لمشروعي.`)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`استفسر عبر واتساب عن فئة ${project.category}`}
            >
              <Image src={project.image} alt={project.alt} fill sizes="(max-width: 680px) 100vw, (max-width: 1050px) 50vw, 34vw" />
              <span className="projects-card-category">{project.category}</span>
              <span className="projects-card-action" aria-hidden="true"><WhatsAppIcon size={18} /><span>استفسر عن هذه الفئة</span><ArrowUpLeft size={17} /></span>
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
