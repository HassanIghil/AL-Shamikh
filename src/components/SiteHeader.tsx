'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { messages, nav, whatsapp } from '@/lib/data';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="site-header">
      <div className="header-inner container">
        {/* Brand Logo - Right in RTL */}
        <Link href="/" aria-label="الشامخ للرفوف والديكورات - الرئيسية" className="brand-link" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="الشامخ للرفوف والديكورات"
            width={130}
            height={56}
            priority
            className="brand-logo"
          />
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="desktop-nav" aria-label="التنقل الرئيسي">
          {nav.map((item) => (
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
            href={whatsapp(messages.home)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تواصل عبر واتساب"
          >
            <WhatsAppIcon size={18} />
            <span>تواصل عبر واتساب</span>
          </a>

          {/* Mobile Menu Toggle Button (Left on mobile) */}
          <button
            className="mobile-menu-btn"
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة الرئيسية'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {open && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="قائمة التنقل">
          <nav className="mobile-nav" aria-label="التنقل على الجوال">
            {nav.map((item) => (
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
                href={whatsapp(messages.home)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <WhatsAppIcon size={20} />
                <span>تواصل عبر واتساب</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

