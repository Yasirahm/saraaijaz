import React, { useState, useEffect } from 'react';
import { Menu, X, Layers, ArrowRight } from 'lucide-react';

/**
 * Customizable Navigation Configuration
 * Edit links, brand placeholder label, and CTA text here.
 */
const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const BRAND_NAME = 'Sara Aijaz';
const CTA_LABEL = 'Get Started';
const CTA_HREF = '#contact';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add subtle shadow when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200'
          : 'bg-white/80 backdrop-blur-sm border-b border-neutral-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Neutral Logo Placeholder */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-neutral-900 group focus:outline-none"
            aria-label="Home"
          >
            <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-sm group-hover:bg-indigo-700 transition-colors">
             <b> S</b>
            </div>
            <span className="font-semibold text-lg tracking-tight text-neutral-900">
              {BRAND_NAME}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Desktop Navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Call-to-Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href={CTA_HREF}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow-sm"
            >
              <span>{CTA_LABEL}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white/98 backdrop-blur-md px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="px-3 py-2.5 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={CTA_HREF}
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm"
            >
              <span>{CTA_LABEL}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
