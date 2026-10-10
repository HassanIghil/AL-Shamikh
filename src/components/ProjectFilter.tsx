'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpLeft } from 'lucide-react';
import { whatsapp } from '@/lib/data';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import type { Locale } from '@/lib/i18n/config';

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
const englishCategories = ['All', 'Warehouses', 'Supermarkets', 'Pharmacies', 'Stores', 'Storage'];
const englishProjects = projects.map((project, index) => ({
  ...project,
  title: [
    'Warehouse racks — illustrative image', 'Supermarket shelving — illustrative image',
    'Pharmacy shelving — illustrative image', 'Grocery store shelving — illustrative image',
    'Industrial storage racks — illustrative image', 'Display units — illustrative image',
    'Vertical storage — illustrative image', 'Warehouse shelving — illustrative image',
    'White display shelving — illustrative image', 'Indoor storage — illustrative image',
    'Warehouse rack systems — illustrative image',
  ][index],
  alt: [
    'Illustrative blue and orange warehouse shelving aisle', 'Illustrative supermarket display shelving',
    'Illustrative white pharmacy shelving', 'Illustrative grocery store shelving aisle',
    'Illustrative industrial warehouse racks', 'Illustrative dark commercial display shelving',
    'Illustrative shelving using vertical space', 'Illustrative rows of industrial warehouse racks',
    'Illustrative white store display shelving', 'Illustrative indoor storage shelving',
    'Illustrative metal shelving in a warehouse',
  ][index],
  category: ({ 'مستودعات': 'Warehouses', 'سوبر ماركت': 'Supermarkets', 'صيدليات': 'Pharmacies', 'محلات': 'Stores', 'تخزين': 'Storage' } as Record<string,string>)[project.category],
}));

export default function ProjectFilter({ locale = 'ar' }: { locale?: Locale }) {
  const english = locale === 'en';
  const [filter, setFilter] = useState(english ? 'All' : 'الكل');
  const list = english ? englishProjects : projects;
  const visible = filter === (english ? 'All' : 'الكل') ? list : list.filter((project) => project.category === filter);
  const messageFor = (category: string) => {
    const arabicCategory = english
      ? ({ Warehouses: 'رفوف مستودعات', Supermarkets: 'رفوف سوبر ماركت', Pharmacies: 'رفوف صيدليات', Stores: 'رفوف المحلات', Storage: 'حلول تخزين' } as Record<string, string>)[category] || 'حلول الرفوف'
      : category === 'مستودعات' ? 'رفوف مستودعات' : `رفوف ${category}`;
    return `السلام عليكم، أود الاستفسار عن ${arabicCategory} لمشروعي.`;
  };

  return (
    <div className="projects-gallery-block" id="project-gallery">
      <div className="projects-filter-bar" role="group" aria-label={english ? 'Filter solution images by category' : 'تصفية صور الحلول حسب الفئة'}>
        {(english ? englishCategories : categories).map((category) => (
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
              href={whatsapp(messageFor(project.category))}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={english ? `Ask on WhatsApp about ${project.category.toLowerCase()} shelving` : `استفسر عبر واتساب عن فئة ${project.category}`}
            >
              <Image src={project.image} alt={project.alt} fill sizes="(max-width: 680px) 100vw, (max-width: 1050px) 50vw, 34vw" />
              <span className="projects-card-category">{project.category}</span>
              <span className="projects-card-action" aria-hidden="true"><WhatsAppIcon size={18} /><span>{english ? 'Ask about this category' : 'استفسر عن هذه الفئة'}</span><ArrowUpLeft size={17} /></span>
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
