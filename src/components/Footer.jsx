import React from 'react';
import { Layers, Github, Twitter, Linkedin, Globe, ArrowUp, MessageCircle } from 'lucide-react';

/**
 * Customizable Footer Configuration
 * Update branding text, links, WhatsApp number, and footer columns.
 */
const WHATSAPP_PHONE_NUMBER = '+919796559374'; // Replace with real WhatsApp number with country code

const FOOTER_CONTENT = {
  brandName: 'Template Logo',
  description:
    'A clean, modern, and fully responsive website starter template designed for presenting interface structures and layouts to prospective customers.',
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ],
  socialLinks: [
    
    { icon: Linkedin, label: 'LinkedIn Placeholder', href: 'https://www.linkedin.com/in/sara-aijaz-363528204?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = 'Hello! I would like to ask for a fair price and discuss custom requirements for a website.';
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple "Ask for Fair Price on WhatsApp" Callout */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-neutral-800/90 border border-neutral-700/80 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5 max-w-xl">
            <div className="text-xs uppercase font-bold tracking-wider text-emerald-400">
              Direct Price Consultation
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ask for a fair price on WhatsApp
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Have a budget in mind or need a custom package? Message us directly on WhatsApp to get an immediate, fair quote.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 transition-colors shadow-sm shrink-0"
            aria-label="Ask for a fair price on WhatsApp"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Ask for Fair Price on WhatsApp</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand Info Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Layers className="w-4 h-4" />
              </div>
              <span className="font-semibold text-lg tracking-tight">
                {FOOTER_CONTENT.brandName}
              </span>
            </div>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              {FOOTER_CONTENT.description}
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_CONTENT.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-200">
              Social Channels
            </h4>
            <p className="text-xs text-neutral-400 mb-3">
              Placeholder channels for client social profiles.
            </p>
            <div className="flex items-center gap-3">
              {FOOTER_CONTENT.socialLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    aria-label={item.label}
                    className="w-9 h-9 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        
{/* Bottom Bar: Copyright, Developer Credit, and Back to Top */}
<div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
  <div className="text-center sm:text-left">
    &copy; {currentYear} Sara Aijaz | Communication Skills & Soft Skills Training. All rights reserved.
  </div>

  <div className="flex flex-wrap items-center justify-center gap-5">
    <a
      href="https://yasirhamid.netlify.app"
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-400 hover:text-white transition-colors"
      aria-label="Website developed by Yasir Hamid"
    >
      Developed by <span className="font-semibold text-neutral-300 hover:text-white"><code>Yasir Hamid</code></span>
    </a>

   

    <button
      type="button"
      onClick={scrollToTop}
      className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
      aria-label="Back to top"
    >
      <span>Back to top</span>
      <ArrowUp className="w-3.5 h-3.5" />
    </button>
  </div>
</div>

      </div>
    </footer>
  );
}
