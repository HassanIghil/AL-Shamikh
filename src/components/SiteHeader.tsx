'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Globe2, Menu, X } from 'lucide-react';
import { messages, nav, whatsapp } from '@/lib/data';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { englishMessages, englishNav, isContentSlug, localizedPath, type Locale } from '@/lib/i18n/config';

export default function SiteHeader({ locale = 'ar' }: { locale?: Locale }) {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const english = locale === 'en';
  const slug = path.replace(/^\/en(?:\/|$)/, '/').replace(/^\//, '');
  const switchPath = localizedPath(english ? 'ar' : 'en', isContentSlug(slug) ? slug : '');
  const links = english
    ? englishNav.map((item) => ({ href: localizedPath('en', item.slug), label: item.label }))
    : nav;
  const contactLabel = english ? 'Chat on WhatsApp' : 'تواصل عبر واتساب';
  const contactMessage = english ? englishMessages.home : messages.home;

  return (
    <header className="site-header">
      <div className="header-inner container">
        {/* Brand Logo - Right in RTL */}
        <Link href={english ? '/en' : '/'} aria-label={english ? 'Al Shamikh — home' : 'الشامخ للرفوف والديكورات - الرئيسية'} className="brand-link" onClick={() => setOpen(false)}>
          <Image
            src="/logo-280.webp"
            alt={english ? 'Al Shamikh shelving and décor' : 'الشامخ للرفوف والديكورات'}
            width={130}
            height={56}
            priority
            className="brand-logo"
          />
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="desktop-nav" aria-label={english ? 'Main navigation' : 'التنقل الرئيسي'}>
          {links.map((item) => (
            <Link
              key={item.href}
              className={`nav-link ${path === item.href ? 'active' : ''}`}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Left CTA - WhatsApp Only */}
        <div className="header-actions">
          <a
            className="header-whatsapp-btn"
            href={whatsapp(contactMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={contactLabel}
          >
            <WhatsAppIcon size={18} />
            <span>{contactLabel}</span>
          </a>

          <Link className="language-switch" href={switchPath} lang={english ? 'ar' : 'en'} hrefLang={english ? 'ar-SA' : 'en'} aria-label={english ? 'Switch to Arabic version of this page' : 'English — open the equivalent page'} onClick={() => setOpen(false)}>
            <Globe2 size={18} aria-hidden="true" /><span>{english ? 'AR' : 'EN'}</span>
          </Link>

          {/* Mobile Menu Toggle Button (Left on mobile) */}
          <button
            className="mobile-menu-btn"
            aria-label={open ? (english ? 'Close menu' : 'إغلاق القائمة') : (english ? 'Open main menu' : 'فتح القائمة الرئيسية')}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {open && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label={english ? 'Navigation menu' : 'قائمة التنقل'}>
          <nav className="mobile-nav" aria-label={english ? 'Mobile navigation' : 'التنقل على الجوال'}>
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`mobile-nav-link ${path === item.href ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mobile-drawer-cta">
              <a
                className="button button-whatsapp"
                href={whatsapp(contactMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <WhatsAppIcon size={20} />
                <span>{contactLabel}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

