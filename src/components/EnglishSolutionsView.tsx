import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Briefcase,
  ChevronRight,
  Maximize2,
  Package,
  Ruler,
  Settings2,
  ShieldCheck,
  Users,
  Warehouse,
  MapPin,
} from 'lucide-react';
import { buildWhatsappUrl } from '@/lib/data';
import { englishMessages, localizedPath } from '@/lib/i18n/config';
import type { ContentSlug } from '@/lib/i18n/config';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import '@/app/solutions.css';

const featuredSolutions = [
  {
    title: 'Warehouse shelving',
    image: '/photos/hero.webp',
    slug: 'warehouse-racking' as ContentSlug,
    description: 'Storage options for warehouses and stockrooms, discussed around the goods, available space and day-to-day use.',
    message: englishMessages.warehouse,
  },
  {
    title: 'Supermarket and retail shelving',
    image: '/photos/market.webp',
    slug: 'retail-shelving' as ContentSlug,
    description: 'Display and organization options for supermarkets and stores, considered alongside the products and customer flow.',
    message: 'Hello, I would like to ask about supermarket and retail shelving.',
  },
  {
    title: 'Pharmacy shelving',
    image: '/photos/pharmacy.jpeg',
    slug: 'retail-shelving' as ContentSlug,
    description: 'Display and storage options for pharmacies, discussed around product groups and the available space.',
    message: 'Hello, I would like to ask about shelving for a pharmacy.',
  },
];

const secondarySolutions = [
  { title: 'Heavy storage needs', description: 'Options for larger or heavier goods, subject to confirming product specifications for the project.', image: '/photos/warehouse-2.jpeg', slug: 'warehouse-racking' as ContentSlug },
  { title: 'Medium storage needs', description: 'Options for cartons and varied stock, selected around the space and handling needs.', image: '/photos/warehouse-3.webp', slug: 'warehouse-racking' as ContentSlug },
  { title: 'Light storage needs', description: 'Options for smaller, lighter items where organization and access matter.', image: '/photos/white.webp', slug: 'warehouse-racking' as ContentSlug },
  { title: 'Grocery shelving', description: 'Shelving options considered around the store footprint and product arrangement.', image: '/photos/store.webp', slug: 'retail-shelving' as ContentSlug },
  { title: 'Commercial display shelving', description: 'Display options for shops and showrooms, based on the products and available space.', image: '/photos/black.webp', slug: 'retail-shelving' as ContentSlug },
  { title: 'Home storage', description: 'Storage options for smaller spaces can be discussed according to dimensions and intended use.', image: '/photos/home.webp', slug: 'solutions' as ContentSlug },
  { title: 'Shelving by site dimensions', description: 'Review the site dimensions, height and intended use before discussing suitable categories.', image: '/photos/warehouse-5.webp', slug: 'warehouse-racking' as ContentSlug },
  { title: 'Store display equipment', description: 'Display units and accessories can be discussed around your store requirements.', image: '/photos/store.webp', slug: 'retail-shelving' as ContentSlug },
];

const factors = [
  { icon: Briefcase, title: 'Business activity', text: 'Project type and intended use' },
  { icon: Maximize2, title: 'Available space', text: 'Site dimensions and room to adapt' },
  { icon: Package, title: 'Products and goods', text: 'Item size and storage needs' },
  { icon: Users, title: 'How the space is used', text: 'Daily movement and access' },
];

const steps = [
  { number: '01', title: 'Understand the project', description: 'Discuss the business, available space and how it will be used.' },
  { number: '02', title: 'Discuss shelving options', description: 'Review the shelving category that may suit the stated needs.' },
  { number: '03', title: 'Confirm the requested service', description: 'Tell us if you are asking about supply or installation; availability and scope are confirmed before a quotation.' },
  { number: '04', title: 'Review the quotation', description: 'Discuss the options and price for the confirmed project scope.' },
];

const sectors = [
  { title: 'Warehouses and stockrooms', image: '/photos/hero.webp', slug: 'warehouse-racking' as ContentSlug },
  { title: 'Supermarkets and groceries', image: '/photos/market.webp', slug: 'retail-shelving' as ContentSlug },
  { title: 'Pharmacies', image: '/photos/pharmacy.jpeg', slug: 'retail-shelving' as ContentSlug },
  { title: 'Commercial stores', image: '/photos/black.webp', slug: 'retail-shelving' as ContentSlug },
];

const trustItems = [
  { icon: ShieldCheck, title: 'Options for your project', text: 'Confirm product details and availability' },
  { icon: Settings2, title: 'Discuss your requirements', text: 'Consider the site and intended use' },
  { icon: Warehouse, title: 'Warehouse and retail shelving', text: 'For projects in Jeddah and Riyadh' },
  { icon: MapPin, title: 'Jeddah and Riyadh', text: 'Share your project city when you inquire' },
];

export default function EnglishSolutionsView() {
  const finalMessage = 'Hello, I would like help discussing suitable shelving for my project.';

  return (
    <main className="solutions-page solutions-page-en">
      <section className="solutions-hero" aria-labelledby="solutions-hero-title-en">
        <div className="solutions-hero-photo">
          <Image src="/photos/hero-solutions.webp" alt="Illustrative shelving and storage for warehouses and stores" fill priority unoptimized sizes="(max-width: 768px) 100vw, 52vw" />
          <div className="solutions-hero-photo-gradient" />
        </div>
        <div className="solutions-hero-content">
          <nav className="solutions-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/en">Home</Link><ChevronRight size={14} aria-hidden="true" /><span>Solutions</span>
          </nav>
          <span className="home-pill">Complete shelving options</span>
          <h1 id="solutions-hero-title-en">Shelving and storage<br />solutions for every space</h1>
          <p className="lead">Explore shelving options for warehouses, supermarkets, grocery stores, pharmacies and homes. The suitable category depends on your products, site and intended use.</p>
          <div className="solutions-hero-badges">
            <div className="solutions-badge-item"><Ruler size={17} aria-hidden="true" /><span>Consider the site dimensions</span></div>
            <div className="solutions-badge-item"><ShieldCheck size={17} aria-hidden="true" /><span>Options by intended use</span></div>
            <div className="solutions-badge-item"><Warehouse size={17} aria-hidden="true" /><span>Warehouse shelving</span></div>
            <div className="solutions-badge-item"><Boxes size={17} aria-hidden="true" /><span>Different business sectors</span></div>
          </div>
          <a className="button button-whatsapp" href={buildWhatsappUrl(englishMessages.home)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={19} /><span>Ask on WhatsApp</span></a>
        </div>
      </section>

      <section className="solutions-featured-section" aria-labelledby="featured-solutions-title-en">
        <div className="container">
          <div className="section-heading"><span className="eyebrow">— Our solutions —</span><h2 id="featured-solutions-title-en">Shelving and storage options</h2><p>Explore categories for different spaces, sectors and ways of working.</p></div>
          <div className="solutions-featured-grid">
            {featuredSolutions.map(item => <article className="featured-card" key={item.title}>
              <div className="featured-card-thumb"><Image src={item.image} alt={`Illustrative ${item.title.toLowerCase()}`} fill unoptimized sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" /></div>
              <div className="featured-card-body"><h3>{item.title}</h3><p>{item.description}</p><div className="featured-card-actions">
                <Link href={localizedPath('en', item.slug)} className="featured-card-link"><span>Explore this solution</span><ArrowRight size={15} aria-hidden="true" /></Link>
                <a href={buildWhatsappUrl(item.message)} target="_blank" rel="noopener noreferrer" className="featured-card-cta"><WhatsAppIcon size={15} /><span>Ask about this option</span></a>
              </div></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="solutions-secondary-section" aria-labelledby="secondary-solutions-title-en">
        <div className="container"><div className="solutions-secondary-header"><h2 id="secondary-solutions-title-en">Storage and display categories</h2></div>
          <div className="solutions-secondary-grid">{secondarySolutions.map(item => <article className="secondary-card" key={item.title}>
            <Link href={localizedPath('en', item.slug)} className="secondary-card-thumb" aria-label={item.title}><Image src={item.image} alt={`Illustrative ${item.title.toLowerCase()}`} fill unoptimized loading="lazy" sizes="(max-width: 768px) 90px, 25vw" /></Link>
            <div className="secondary-card-body"><div className="secondary-card-text"><h4><Link href={localizedPath('en', item.slug)}>{item.title}</Link></h4><p>{item.description}</p></div>
              <a href={buildWhatsappUrl(`Hello, I would like to ask about ${item.title.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer" className="circle-gold-arrow" aria-label={`Ask about ${item.title}`}><WhatsAppIcon size={16} /></a>
            </div>
          </article>)}</div>
        </div>
      </section>

      <section className="solutions-decision-section" aria-labelledby="decision-title-en"><div className="container">
        <div className="section-heading light"><span className="eyebrow">— Choosing a suitable option —</span><h2 id="decision-title-en">How do we discuss the right shelving?</h2><p>The useful option can differ by project, so we start with a few practical details.</p></div>
        <div className="solutions-decision-grid">{factors.map(({ icon: Icon, title, text }) => <div className="decision-factor-col" key={title}><div className="decision-factor-icon"><Icon size={28} strokeWidth={2} aria-hidden="true" /></div><strong>{title}</strong><span>{text}</span></div>)}</div>
      </div></section>

      <section className="solutions-process-section" aria-labelledby="process-title-en"><div className="container">
        <div className="section-heading"><span className="eyebrow">— How to get started —</span><h2 id="process-title-en">From your requirements to a quotation</h2><p>Share the information that helps us discuss options for your project.</p></div>
        <div className="solutions-process-flow">{steps.map(step => <article className="process-step-item" key={step.number}><span className="process-step-number">{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
      </div></section>

      <section className="solutions-sectors-section" aria-labelledby="sectors-preview-title-en"><div className="container">
        <div className="section-heading"><span className="eyebrow">— Business sectors —</span><h2 id="sectors-preview-title-en">Options for different businesses</h2><p>Discuss shelving around the products, space and daily needs of your business.</p></div>
        <div className="solutions-sectors-grid">{sectors.map(sector => <Link href={localizedPath('en', sector.slug)} className="sector-panel-card" key={sector.title}>
          <Image src={sector.image} alt={`Illustrative shelving for ${sector.title.toLowerCase()}`} fill unoptimized loading="lazy" sizes="(max-width: 768px) 100vw, 25vw" />
          <div className="sector-panel-caption"><strong>{sector.title}</strong><ArrowUpRight size={18} strokeWidth={2.4} aria-hidden="true" /></div>
        </Link>)}</div>
        <div className="solutions-sectors-footer"><Link href="/en/sectors" className="solutions-sectors-link"><span>Explore all business sectors</span><ArrowRight size={16} aria-hidden="true" /></Link></div>
      </div></section>

      <section className="solutions-trust-strip" aria-label="Al Shamikh service information"><div className="container">
        <div className="solutions-trust-grid">{trustItems.map(({ icon: Icon, title, text }) => <div className="trust-item" key={title}><Icon size={26} strokeWidth={2} aria-hidden="true" /><div><strong>{title}</strong><span>{text}</span></div></div>)}</div>
        <div className="solutions-cities-links"><p>Al Shamikh supplies warehouse and retail shelving for projects in <Link href="/en/jeddah">Jeddah</Link> and <Link href="/en/riyadh">Riyadh</Link>. Browse <Link href="/en/projects">illustrative solution images</Link> or <Link href="/en/contact">contact us</Link> to discuss your requirements.</p></div>
      </div></section>

      <section className="home-final-cta solutions-en-final-cta" aria-label="Contact us about your project"><div className="container home-final-cta-inner">
        <div className="home-final-cta-content"><span className="eyebrow">— Get in touch —</span><h2>Looking for shelving for your space?</h2><p>Tell us about your project and we can discuss suitable shelving options for your needs.</p></div>
        <div className="home-final-cta-btn-wrap"><a className="button button-whatsapp" href={buildWhatsappUrl(finalMessage)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={20} /><span>Share your project details</span></a></div>
      </div></section>
    </main>
  );
}
