import Link from 'next/link';
import Image from 'next/image';
import { buildWhatsappUrl, phone, phoneClean } from '@/lib/data';
import { englishMessages, englishNav, localizedPath } from '@/lib/i18n/config';
import { WhatsAppIcon } from './WhatsAppIcon';

export default function EnglishFooter() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div className="footer-col footer-brand-col">
        <Link href="/en" className="footer-logo-link" aria-label="Al Shamikh home"><Image src="/logo-280.webp" alt="Al Shamikh shelving and décor" width={140} height={60} className="footer-logo-img" /></Link>
        <p className="footer-about-text">Shelving and storage options for warehouses, stores, supermarkets, grocery businesses and pharmacies, discussed around each project’s space and use.</p>
      </div>
      <div className="footer-col"><h3>Solutions</h3>
        <Link href="/en/warehouse-racking">Warehouse shelving</Link>
        <Link href="/en/retail-shelving">Supermarket shelving</Link>
        <Link href="/en/retail-shelving">Grocery store shelving</Link>
        <Link href="/en/retail-shelving">Pharmacy shelving</Link>
        <Link href="/en/solutions">Other storage options</Link>
      </div>
      <div className="footer-col"><h3>Quick links</h3>
        {englishNav.filter(item => !['jeddah', 'riyadh'].includes(item.slug)).map(item => <Link key={item.slug} href={localizedPath('en', item.slug)}>{item.label}</Link>)}
      </div>
      <div className="footer-col"><h3>Service areas</h3>
        <Link href="/en/jeddah">Jeddah</Link><Link href="/en/riyadh">Riyadh</Link>
        <span>Serving projects in both cities</span>
      </div>
      <div className="footer-col footer-contact-col"><h3>Contact</h3>
        <a href={`tel:${phoneClean}`} dir="ltr" className="footer-phone-link">{phone}</a>
        <a href={buildWhatsappUrl(englishMessages.contact)} target="_blank" rel="noopener noreferrer" className="footer-whatsapp-link"><WhatsAppIcon size={17} /><span>Chat on WhatsApp</span></a>
      </div>
    </div>
    <div className="container footer-bottom">
      <span>© {new Date().getFullYear()} Al Shamikh. All rights reserved.</span>
      <div className="footer-legal"><Link href="/en/privacy">Privacy policy</Link><span className="dot">•</span><Link href="/en/terms">Terms of use</Link></div>
    </div>
  </footer>;
}
