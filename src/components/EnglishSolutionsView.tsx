import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  MapPin,
  Maximize2,
  Package,
  Ruler,
  Settings2,
  ShieldCheck,
  Store,
  Users,
  Warehouse,
} from 'lucide-react';
import { ResponsiveHeroImage } from '@/components/UI';
import { buildWhatsappUrl } from '@/lib/data';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

const featuredSolutions = [
  {
    title: 'Warehouse shelving and racks',
    image: '/photos/hero.webp',
    href: '/en/warehouse-racking',
    description: 'Discuss storage options around your goods, available space, access and handling needs. Product specifications are confirmed for each project.',
    message: 'Hello, I would like to ask about warehouse shelving for my project.',
  },
  {
    title: 'Supermarket and retail shelving',
    image: '/photos/market.webp',
    href: '/en/retail-shelving',
    description: 'Explore shelving for supermarkets, grocery stores and commercial shops, selected around products, layout and customer access.',
    message: 'Hello, I would like to ask about shelving for my store.',
  },
  {
    title: 'Pharmacy shelving',
    image: '/photos/pharmacy.jpeg',
    href: '/en/retail-shelving',
    description: 'Discuss display and storage shelving for a pharmacy based on product groups and the available space.',
    message: 'Hello, I would like to ask about shelving for a pharmacy.',
  },
];

const secondarySolutions = [
  { title: 'Heavy storage shelving', description: 'Options for larger or heavier goods, subject to confirming product and site requirements.', image: '/photos/warehouse-2.jpeg', href: '/en/warehouse-racking', message: 'Hello, I would like to ask about shelving for heavier warehouse goods.' },
  { title: 'Medium storage shelving', description: 'Storage options for cartons and varied stock, discussed around dimensions and access.', image: '/photos/warehouse-3.webp', href: '/en/warehouse-racking', message: 'Hello, I would like to ask about medium storage shelving.' },
  { title: 'Light storage shelving', description: 'Shelving options for smaller, lighter items and organized access.', image: '/photos/white.webp', href: '/en/warehouse-racking', message: 'Hello, I would like to ask about light storage shelving.' },
  { title: 'Grocery shelving', description: 'Display options considered around the store footprint and product arrangement.', image: '/photos/store.webp', href: '/en/retail-shelving', message: 'Hello, I would like to ask about shelving for a grocery store.' },
  { title: 'Commercial store shelving', description: 'Discuss display units for a specialist shop or commercial space.', image: '/photos/black.webp', href: '/en/retail-shelving', message: 'Hello, I would like to ask about shelving for a commercial store.' },
  { title: 'Storage for smaller spaces', description: 'Storage options can be discussed according to the room dimensions and intended use.', image: '/photos/home.webp', href: '/en/solutions', message: 'Hello, I would like to ask about storage shelving for my space.' },
  { title: 'Shelving by site dimensions', description: 'Share floor area, height and access needs to discuss relevant shelving categories.', image: '/photos/warehouse-5.webp', href: '/en/warehouse-racking', message: 'Hello, I would like to discuss shelving options for my site dimensions.' },
  { title: 'Retail display fixtures', description: 'Compare display options based on the products and layout of your store.', image: '/photos/store.webp', href: '/en/retail-shelving', message: 'Hello, I would like to ask about display fixtures for my store.' },
];

const decisionFactors = [
  { icon: Briefcase, title: 'Business use', text: 'The type of project and daily use' },
  { icon: Maximize2, title: 'Available space', text: 'Site dimensions and room to move' },
  { icon: Package, title: 'Products and goods', text: 'Item sizes and storage needs' },
  { icon: Users, title: 'Access and handling', text: 'How people and goods move through the space' },
];

const processSteps = [
  { number: '01', title: 'Understand the project', description: 'Share the business type, location and how you use the space.' },
  { number: '02', title: 'Review the requirements', description: 'Discuss dimensions, products, access and handling needs.' },
  { number: '03', title: 'Clarify the service scope', description: 'Mention supply or installation needs; availability and scope are confirmed before a quotation.' },
  { number: '04', title: 'Discuss the options', description: 'Review the available product details and quotation for the confirmed scope.' },
];

const sectors = [
  { title: 'Warehouses and stockrooms', image: '/photos/hero.webp', href: '/en/warehouse-racking' },
  { title: 'Supermarkets and grocery stores', image: '/photos/market.webp', href: '/en/retail-shelving' },
  { title: 'Pharmacies', image: '/photos/pharmacy.jpeg', href: '/en/retail-shelving' },
  { title: 'Commercial stores', image: '/photos/black.webp', href: '/en/retail-shelving' },
];

const trustItems = [
  { icon: ShieldCheck, title: 'Selection around your needs', text: 'Confirm product details and scope before a quotation' },
  { icon: Settings2, title: 'Options for different uses', text: 'Warehouse storage and retail display categories' },
  { icon: Warehouse, title: 'Shelving supply inquiries', text: 'Discuss available products and the requested scope' },
  { icon: MapPin, title: 'Jeddah and Riyadh', text: 'Confirmed service areas' },
];

const generalMessage = 'Hello, I would like to discuss a shelving solution for my project.';

export default function EnglishSolutionsView() {
  return (
    <main className="en-page solutions-page solutions-page-en" dir="ltr">
      <section className="solutions-hero" aria-labelledby="en-solutions-title">
        <div className="solutions-hero-photo">
          <ResponsiveHeroImage
            src="/photos/hero-solutions.webp"
            mobileSrc="/photos/hero-solutions-mobile.webp"
            alt="Illustrative warehouse shelving and organized storage"
          />
          <div className="solutions-hero-photo-gradient" />
        </div>
        <div className="solutions-hero-content">
          <nav className="solutions-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/en">Home</Link>
            <ArrowRight size={14} aria-hidden="true" />
            <span aria-current="page">Solutions</span>
          </nav>
          <span className="home-pill">Shelving and storage</span>
          <h1 id="en-solutions-title">Shelving solutions for every space</h1>
          <p className="lead">Explore shelving for warehouses, stores and pharmacies. The right category depends on your products, site dimensions and how the space is used.</p>
          <div className="solutions-hero-badges">
            <div className="solutions-badge-item"><Ruler size={17} aria-hidden="true" /><span>Site dimensions</span></div>
            <div className="solutions-badge-item"><ShieldCheck size={17} aria-hidden="true" /><span>Product and use</span></div>
            <div className="solutions-badge-item"><Warehouse size={17} aria-hidden="true" /><span>Warehouse storage</span></div>
            <div className="solutions-badge-item"><Store size={17} aria-hidden="true" /><span>Retail display</span></div>
          </div>
          <a className="button button-whatsapp" href={buildWhatsappUrl(generalMessage)} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={19} /><span>Ask on WhatsApp</span>
          </a>
        </div>
      </section>

      <section className="solutions-featured-section" aria-labelledby="en-featured-title">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">— Our solutions —</span>
            <h2 id="en-featured-title">Shelving for storage and display</h2>
            <p>Explore the main shelving categories and discuss the space and use with our team.</p>
          </div>
          <div className="solutions-featured-grid">
            {featuredSolutions.map((item) => (
              <article className="featured-card" key={item.title}>
                <div className="featured-card-thumb"><Image src={item.image} alt={`Illustrative ${item.title.toLowerCase()}`} fill unoptimized sizes="(max-width: 768px) 100vw, 33vw" /></div>
                <div className="featured-card-body">
                  <h3>{item.title}</h3><p>{item.description}</p>
                  <div className="featured-card-actions">
                    <Link href={item.href} className="featured-card-link"><span>View service details</span><ArrowRight size={15} aria-hidden="true" /></Link>
                    <a href={buildWhatsappUrl(item.message)} target="_blank" rel="noopener noreferrer" className="featured-card-cta"><WhatsAppIcon size={15} /><span>Ask about this</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-secondary-section" aria-labelledby="en-secondary-title">
        <div className="container">
          <div className="solutions-secondary-header"><h2 id="en-secondary-title">More shelving and storage options</h2></div>
          <div className="solutions-secondary-grid">
            {secondarySolutions.map((item) => (
              <article className="secondary-card" key={item.title}>
                <Link href={item.href} className="secondary-card-thumb" aria-label={item.title}>
                  <Image src={item.image} alt={`Illustrative ${item.title.toLowerCase()}`} fill unoptimized sizes="(max-width: 768px) 100px, 25vw" />
                </Link>
                <div className="secondary-card-body">
                  <div className="secondary-card-text"><h3><Link href={item.href}>{item.title}</Link></h3><p>{item.description}</p></div>
                  <a href={buildWhatsappUrl(item.message)} target="_blank" rel="noopener noreferrer" className="circle-gold-arrow" aria-label={`Ask about ${item.title}`}><WhatsAppIcon size={16} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-decision-section" aria-labelledby="en-decision-title">
        <div className="container">
          <div className="section-heading light">
            <span className="eyebrow">— Choosing a solution —</span>
            <h2 id="en-decision-title">What helps determine a suitable shelving system?</h2>
            <p>The discussion starts with the products, the site and the way the space needs to work.</p>
          </div>
          <div className="solutions-decision-grid">
            {decisionFactors.map(({ icon: Icon, title, text }) => (
              <div className="decision-factor-col" key={title}>
                <div className="decision-factor-icon"><Icon size={28} strokeWidth={2} aria-hidden="true" /></div>
                <strong>{title}</strong><span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-process-section" aria-labelledby="en-process-title">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">— How to get started —</span>
            <h2 id="en-process-title">From your requirements to a quotation</h2>
            <p>Share the information needed to discuss suitable product categories and clarify the requested scope.</p>
          </div>
          <ol className="solutions-process-flow en-solutions-process-flow">
            {processSteps.map((step) => (
              <li className="process-step-item" key={step.number}>
                <span className="process-step-number">{step.number}</span><h3>{step.title}</h3><p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="solutions-sectors-section" aria-labelledby="en-sectors-title">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">— Business sectors —</span>
            <h2 id="en-sectors-title">Shelving options for different businesses</h2>
            <p>Browse the categories and follow a link to the relevant service page.</p>
          </div>
          <div className="solutions-sectors-grid">
            {sectors.map((sector) => (
              <Link href={sector.href} className="sector-panel-card" key={sector.title}>
                <Image src={sector.image} alt={`Illustrative shelving for ${sector.title.toLowerCase()}`} fill unoptimized sizes="(max-width: 768px) 100vw, 25vw" />
                <div className="sector-panel-caption"><strong>{sector.title}</strong><ArrowUpRight size={18} strokeWidth={2.4} aria-hidden="true" /></div>
              </Link>
            ))}
          </div>
          <div className="solutions-sectors-footer"><Link href="/en/sectors" className="solutions-sectors-link"><span>Explore shelving by business sector</span><ArrowRight size={16} aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="solutions-trust-strip" aria-label="About Al Shamikh shelving options">
        <div className="container">
          <div className="solutions-trust-grid">
            {trustItems.map(({ icon: Icon, title, text }) => (
              <div className="trust-item" key={title}><Icon size={26} strokeWidth={2} aria-hidden="true" /><div><strong>{title}</strong><span>{text}</span></div></div>
            ))}
          </div>
          <div className="solutions-cities-links"><p>Al Shamikh serves projects in <Link href="/en/jeddah">Jeddah</Link> and <Link href="/en/riyadh">Riyadh</Link>. Browse <Link href="/en/projects">illustrative shelving images</Link> or <Link href="/en/contact">contact us</Link> to discuss your requirements.</p></div>
        </div>
      </section>

      <section className="home-final-cta" aria-labelledby="en-solutions-cta-title">
        <div className="container home-final-cta-inner">
          <div className="home-final-cta-content">
            <span className="eyebrow">— Get in touch —</span>
            <h2 id="en-solutions-cta-title">Looking for shelving for your space?</h2>
            <p>Tell us your city, business type, site dimensions and what you need to store or display.</p>
          </div>
          <div className="home-final-cta-btn-wrap"><a className="button button-whatsapp" href={buildWhatsappUrl(generalMessage)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={20} /><span>Share your project details</span></a></div>
        </div>
      </section>
    </main>
  );
}
