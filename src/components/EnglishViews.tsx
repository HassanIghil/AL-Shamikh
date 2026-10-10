import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Boxes, MapPin, PackageCheck, Ruler, Store, Warehouse } from 'lucide-react';
import { buildWhatsappUrl, phone, phoneClean } from '@/lib/data';
import { englishMessages, localizedPath, type ContentSlug } from '@/lib/i18n/config';
import { englishPages, type EnglishCard } from '@/lib/i18n/en';
import { StaticResponsiveImage } from './StaticResponsiveImage';
import { ResponsiveHeroImage } from './UI';
import { WhatsAppIcon } from './WhatsAppIcon';
import ProjectFilter from './ProjectFilter';
import JeddahGallery from './JeddahGallery';
import ContactForm from './ContactForm';
import './contact.css';
import './projects.css';
import './jeddah.css';

function WhatsAppLink({ message, children, className = 'button button-whatsapp' }: { message: string; children: React.ReactNode; className?: string }) {
  return <a className={className} href={buildWhatsappUrl(message)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={19} /><span>{children}</span></a>;
}

function Breadcrumb({ current }: { current: string }) {
  return <nav className="en-breadcrumb" aria-label="Breadcrumb"><Link href="/en">Home</Link><ArrowRight size={15} aria-hidden="true" /><span aria-current="page">{current}</span></nav>;
}

function Card({ card }: { card: EnglishCard }) {
  const stem = card.image?.replace(/\.(?:webp|jpeg)$/, '');
  const responsive = stem && ['hero', 'warehouse-2', 'market', 'store', 'pharmacy', 'home'].includes(stem.split('/').pop() || '');
  const content = <>
    {card.image && <div className="en-card-image">{responsive
      ? <StaticResponsiveImage variants={[{ src: `${stem}-320.webp`, width: 320 }, { src: `${stem}-640.webp`, width: 640 }]} alt={card.title} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 32vw" />
      : <Image src={card.image} alt={card.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 32vw" />}</div>}
    <div className="en-card-copy"><h3>{card.title}</h3><p>{card.text}</p>{card.href && <span className="en-card-link">Explore options <ArrowUpRight size={17} aria-hidden="true" /></span>}</div>
  </>;
  return card.href
    ? <Link className="en-card" href={localizedPath('en', card.href)}>{content}</Link>
    : <article className="en-card">{content}</article>;
}

export function EnglishLanding({ slug }: { slug: Exclude<ContentSlug, '' | 'contact' | 'privacy' | 'terms'> }) {
  const page = englishPages[slug];
  const heroAssets: Record<typeof slug, { desktop: string; mobile: string; desktopSrcSet?: string; mobileSrcSet?: string }> = {
    solutions: { desktop: '/photos/hero-solutions.webp', mobile: '/photos/hero-solutions-mobile.webp' },
    sectors: { desktop: '/photos/hero-sectors.webp', mobile: '/photos/hero-sectors-mobile.webp' },
    'warehouse-racking': { desktop: '/photos/hero-1280.webp', mobile: '/photos/hero-640.webp', desktopSrcSet: '/photos/hero-960.webp 960w, /photos/hero-1280.webp 1280w', mobileSrcSet: '/photos/hero-640.webp 640w, /photos/hero-960.webp 960w' },
    'retail-shelving': { desktop: '/photos/market.webp', mobile: '/photos/market-640.webp' },
    projects: { desktop: '/photos/hero-projects.webp', mobile: '/photos/hero-projects-mobile.webp' },
    about: { desktop: '/photos/hero-about.webp', mobile: '/photos/hero-about-mobile.webp' },
    jeddah: { desktop: '/photos/hero-jeddah-1280.webp', mobile: '/photos/hero-jeddah-mobile-640.webp' },
    riyadh: { desktop: '/photos/hero-riyadh-1280.webp', mobile: '/photos/hero-riyadh-mobile-640.webp' },
  };
  const hero = heroAssets[slug];
  return <main className="en-page">
    <header className="en-hero">
      <div className="en-hero-image"><ResponsiveHeroImage src={hero.desktop} mobileSrc={hero.mobile} desktopSrcSet={hero.desktopSrcSet} mobileSrcSet={hero.mobileSrcSet} alt={page.heroAlt} /></div>
      <div className="en-hero-content"><Breadcrumb current={page.eyebrow} /><span className="en-pill">{page.eyebrow}</span><h1>{page.h1}</h1><p>{page.lead}</p><WhatsAppLink message={page.message}>Ask on WhatsApp</WhatsAppLink></div>
    </header>
    {page.sections.map((section, index) => <section className={`en-section ${index % 2 ? 'en-section-tint' : ''}`} key={section.title} aria-labelledby={`en-section-${index}`}>
      <div className="container">
        <div className="en-section-heading"><span className="en-eyebrow">{section.eyebrow}</span><h2 id={`en-section-${index}`}>{section.title}</h2>{section.intro && <p>{section.intro}</p>}</div>
        {section.image && <div className="en-section-image"><Image src={section.image} alt={`Illustrative ${section.title.toLowerCase()}`} fill sizes="(max-width: 760px) 100vw, 68vw" loading="lazy" /></div>}
        {section.cards && <div className="en-card-grid">{section.cards.map(card => <Card card={card} key={card.title} />)}</div>}
        {section.points && <ul className="en-point-grid">{section.points.map(point => <li key={point}><PackageCheck size={20} aria-hidden="true" />{point}</li>)}</ul>}
        {slug === 'projects' && index === 0 && <ProjectFilter locale="en" />}
      </div>
    </section>)}
    {slug === 'jeddah' && <section className="en-section en-section-tint" aria-labelledby="en-jeddah-gallery"><div className="container"><div className="en-section-heading"><span className="en-eyebrow">Illustrative examples</span><h2 id="en-jeddah-gallery">Shelving and display images</h2><p>These images show types of shelving; they do not document completed Al Shamikh projects.</p></div><JeddahGallery locale="en" slides={[
      { image: '/photos/hero.webp', alt: 'Illustrative warehouse shelving aisle', label: 'Warehouse shelving', href: '/en/warehouse-racking' },
      { image: '/photos/warehouse-2.jpeg', alt: 'Illustrative metal storage racks', label: 'Storage racks', href: '/en/warehouse-racking' },
      { image: '/photos/market.webp', alt: 'Illustrative supermarket display shelving', label: 'Supermarket shelving', href: '/en/retail-shelving' },
      { image: '/photos/jeddah-pharmacy-interior.webp', alt: 'Illustrative pharmacy display shelving', label: 'Pharmacy shelving', href: '/en/retail-shelving' },
      { image: '/photos/store.webp', alt: 'Illustrative grocery store shelving', label: 'Grocery shelving', href: '/en/retail-shelving' },
      { image: '/photos/black.webp', alt: 'Illustrative commercial display units', label: 'Display units', href: '/en/retail-shelving' },
    ]} /></div></section>}
    {page.faqs && <section className="en-section en-faq" aria-labelledby="en-faq-title"><div className="container"><div className="en-section-heading"><span className="en-eyebrow">Common questions</span><h2 id="en-faq-title">Helpful answers before you inquire</h2></div><div className="en-faq-list">{page.faqs.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></div></section>}
    <EnglishFinalCta message={page.message} />
  </main>;
}

export function EnglishHome() {
  const categories: EnglishCard[] = [
    { title: 'Warehouse shelving', text: 'Storage racks selected around your goods, site dimensions and handling method.', href: 'warehouse-racking', image: '/photos/hero.webp' },
    { title: 'Grocery store shelving', text: 'Display and organize products within your store layout.', href: 'retail-shelving', image: '/photos/store.webp' },
    { title: 'Supermarket shelving', text: 'Discuss units for product sections and customer access.', href: 'retail-shelving', image: '/photos/market.webp' },
    { title: 'Pharmacy shelving', text: 'Plan display and storage around product categories.', href: 'retail-shelving', image: '/photos/pharmacy.jpeg' },
    { title: 'Other storage', text: 'Explore options for smaller spaces and varied use.', href: 'solutions', image: '/photos/home.webp' },
  ];
  return <main className="en-page en-home">
    <section className="en-hero en-home-hero" aria-labelledby="en-home-title">
      <div className="en-hero-image"><picture><source media="(max-width: 768px)" srcSet="/photos/home-hero-1280-640.webp 640w, /photos/home-hero-1280-960.webp 960w" sizes="100vw" /><StaticResponsiveImage variants={[{src:'/photos/home-hero-new-1280.webp',width:1280}]} alt="Illustrative warehouse shelves with organized stock" loading="eager" fetchPriority="high" sizes="(max-width: 768px) 100vw, 50vw" /></picture></div>
      <div className="en-hero-content"><span className="en-pill">Warehouse and retail shelving</span><h1 id="en-home-title">Shelving for warehouses and stores</h1><p className="en-hero-lead">Storage and display options chosen around your space</p><p>Al Shamikh supplies warehouse racks and shelving for supermarkets, grocery stores and pharmacies in Jeddah and Riyadh. Tell us how you use your space and what you need to store or display.</p>
        <div className="en-home-features"><div><Warehouse size={26} aria-hidden="true" /><span>Warehouse storage</span></div><div><Store size={26} aria-hidden="true" /><span>Retail display</span></div><div><MapPin size={26} aria-hidden="true" /><span>Jeddah and Riyadh</span></div></div>
        <div className="en-city-banner">
          <StaticResponsiveImage
            variants={[
              { src: '/images/jeddah-riyadh-skyline-solutions-640.webp', width: 640 },
              { src: '/images/jeddah-riyadh-skyline-solutions-1200.webp', width: 1200 },
              { src: '/images/jeddah-riyadh-skyline-solutions.webp', width: 2157 },
            ]}
            alt="Jeddah and Riyadh skylines with complete shelving solutions in both cities"
            sizes="(max-width: 338px) calc(100vw - 28px), (max-width: 768px) 310px, (max-width: 1364px) 44vw, 600px"
          />
        </div>
        <WhatsAppLink message={englishMessages.home}>Chat on WhatsApp</WhatsAppLink>
      </div>
    </section>
    <section className="en-section" aria-labelledby="en-home-solutions"><div className="container"><div className="en-section-heading"><span className="en-eyebrow">Our solutions</span><h2 id="en-home-solutions">Shelving for different uses</h2><p>Explore storage and display categories, then compare what fits your site and products.</p></div><div className="en-card-grid">{categories.map(card => <Card card={card} key={card.title} />)}</div></div></section>
    <section className="en-section en-section-dark" aria-labelledby="en-home-choice"><div className="container"><div className="en-section-heading"><span className="en-eyebrow">How to choose</span><h2 id="en-home-choice">Start with the needs of your space</h2><p>Useful shelving depends on what you store or sell, site dimensions and the way people or stock move through it.</p></div><div className="en-point-grid"><div><Boxes size={26} aria-hidden="true" /><h3>Products and goods</h3><p>Type, size and intended arrangement.</p></div><div><Ruler size={26} aria-hidden="true" /><h3>Site dimensions</h3><p>Floor area, height and available aisles.</p></div><div><PackageCheck size={26} aria-hidden="true" /><h3>Daily use</h3><p>How products are accessed and moved.</p></div></div></div></section>
    <section className="en-section en-section-tint" aria-labelledby="en-home-images"><div className="container"><div className="en-section-heading"><span className="en-eyebrow">Solution images</span><h2 id="en-home-images">See illustrative shelving examples</h2><p>Current images show product categories. They are illustrative and are not a record of completed Al Shamikh projects.</p></div><div className="en-card-grid">{categories.slice(0, 3).map(card => <Card card={{...card, href:'projects'}} key={card.title} />)}</div><Link className="en-text-link" href="/en/projects">Browse all solution images <ArrowRight size={17} aria-hidden="true" /></Link></div></section>
    <section className="en-section" aria-labelledby="en-home-cities"><div className="container"><div className="en-section-heading"><span className="en-eyebrow">Service areas</span><h2 id="en-home-cities">Shelving projects in Jeddah and Riyadh</h2><p>Al Shamikh serves projects in both cities. Share your location and requirements when you inquire.</p></div><div className="en-card-grid"><Card card={{title:'Jeddah',text:'Warehouse and retail shelving for projects in Jeddah.',href:'jeddah'}} /><Card card={{title:'Riyadh',text:'Warehouse and retail shelving for projects in Riyadh.',href:'riyadh'}} /></div></div></section>
    <EnglishFinalCta message={englishMessages.home} />
  </main>;
}

export function EnglishContact() {
  return <main className="contact-page en-contact"><header className="contact-intro"><Breadcrumb current="Contact" /><span className="contact-eyebrow">Tell us about your project</span><h1>Let’s discuss your shelving needs</h1><p>Share your city, business type and space details. You can prepare a WhatsApp message to review and send yourself.</p></header>
    <section className="contact-main" aria-label="Contact options and project details"><div className="contact-form-panel"><div className="contact-panel-heading"><span className="contact-eyebrow">Project details</span><h2>Tell us what you need</h2><p>Fill in the form to prepare an organized WhatsApp inquiry.</p></div><ContactForm locale="en" /></div>
      <aside className="contact-side"><div className="contact-whatsapp-panel"><div className="contact-whatsapp-icon"><WhatsAppIcon size={27} /></div><span className="contact-eyebrow">Direct contact</span><h2>Start a conversation</h2><p>Share the project type, city and approximate site area so we can discuss your needs.</p><WhatsAppLink message={englishMessages.contact}>Chat on WhatsApp</WhatsAppLink><div className="contact-hints" aria-label="Useful project details"><div className="contact-hint"><Store size={17} aria-hidden="true" /><span>Business type</span></div><div className="contact-hint"><Ruler size={17} aria-hidden="true" /><span>Approximate area</span></div><div className="contact-hint"><PackageCheck size={17} aria-hidden="true" /><span>Products to store or display</span></div></div><p className="contact-photo-note">You can share site photos in WhatsApp after opening the conversation.</p></div>
        <div className="contact-service-panel"><div className="contact-service-copy"><h3>Service coverage</h3><p>Al Shamikh serves projects in Jeddah and Riyadh. Ask us to confirm coverage for another city.</p></div><div className="contact-phone-copy"><span>Phone</span><a href={`tel:${phoneClean}`} dir="ltr">{phone}</a></div></div>
      </aside></section>
  </main>;
}

function EnglishFinalCta({ message }: { message: string }) {
  return <section className="en-final-cta" aria-labelledby="en-final-cta-title"><div className="container en-final-cta-inner"><div><span className="en-eyebrow">Your next step</span><h2 id="en-final-cta-title">Tell us about your space</h2><p>Send the business type, project city, site dimensions and what you need to store or display. We can discuss options and confirm product details before a quote.</p><p>Explore service in <Link href="/en/jeddah">Jeddah</Link> and <Link href="/en/riyadh">Riyadh</Link>, or <Link href="/en/contact">use the contact form</Link>.</p></div><WhatsAppLink message={message}>Share your project details</WhatsAppLink></div></section>;
}
