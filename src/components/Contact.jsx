import React from 'react';
import { MessageCircle, Mail, Clock, Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';
import Gallery from "./pages/Gallery";

/**
 * Customizable Contact Configuration
 * Replace placeholder contact info items with real customer communication channels.
 */
const WHATSAPP_PHONE_NUMBER = '+919796559374'; // Replace with real WhatsApp number with country code

const CONTACT_CONTENT = {
  sectionTag: 'Contact Channels',
  heading: 'Direct communication channels',
  description:
    'Connect directly with our team using your preferred channel. Reach out via WhatsApp or email for immediate consultations and inquiries.',
  channels: [
    {
      id: 'whatsapp',
      icon: MessageCircle,
      title: 'WhatsApp Direct Chat',
      value: '+91 97965 59374',
      subtext: 'Instant messaging for quick questions & quotes',
      actionLabel: 'Chat on WhatsApp',
      href: `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
        'Hello! I would like to get in touch regarding your website offerings and services.'
      )}`,
      isPrimary: true,
    },
    {
      id: 'email',
      icon: Mail,
      title: 'Inquiry Inbox',
      value: 'mirsarah16@gmail.com',
      subtext: 'Formal proposals and detailed inquiries',
      actionLabel: 'Send Email',
      href: 'mailto:mirsarah16@gmail.com?subject=Website%20Inquiry',
      isPrimary: false,
    },
    {
      id: 'phone',
      icon: Phone,
      title: 'Phone Consultation',
      value: '+91 97965 59374',
      subtext: 'Scheduled telephone discovery sessions',
      actionLabel: 'Call Directly',
      href: 'tel:+919796559374',
      isPrimary: false,
    },
  ],
  supportDetails: [
    {
      icon: Clock,
      label: 'Business Hours',
      text: 'Monday – Saturday: 8:00 AM – 6:00 PM',
    },
    {
      icon: ShieldCheck,
      label: 'Response Time',
      text: 'Average reply within 1–2 business hours',
    },
  ],
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-xs uppercase font-bold tracking-widest text-indigo-600">
            {CONTACT_CONTENT.sectionTag}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            {CONTACT_CONTENT.heading}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            {CONTACT_CONTENT.description}
          </p>
        </div>

        {/* Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {CONTACT_CONTENT.channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.id}
                className={`p-8 rounded-2xl flex flex-col justify-between transition-all duration-200 ${
                  channel.isPrimary
                    ? 'bg-emerald-50/50 border-2 border-emerald-500 shadow-md'
                    : 'bg-neutral-50/70 border border-neutral-200/90 shadow-2xs hover:border-neutral-300 hover:bg-white hover:shadow-sm'
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-2xs ${
                      channel.isPrimary
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white border border-neutral-200 text-indigo-600'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-1">
                    {channel.title}
                  </h3>
                  <div className="text-sm font-semibold text-neutral-800 font-mono mb-2">
                    {channel.value}
                  </div>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {channel.subtext}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200/60">
                  <a
                    href={channel.href}
                    target={channel.id === 'whatsapp' ? '_blank' : undefined}
                    rel={channel.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                    className={`w-full py-3 px-4 rounded-xl text-center font-medium text-sm transition-all flex items-center justify-center gap-2 ${
                      channel.isPrimary
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                        : 'bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-800'
                    }`}
                  >
                    <span>{channel.actionLabel}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Operating Hours & Support Highlights */}
        <div className="max-w-2xl mx-auto rounded-2xl bg-neutral-50 border border-neutral-200/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-around gap-6 text-center sm:text-left">
          {CONTACT_CONTENT.supportDetails.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-indigo-600 shrink-0 shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-sm font-medium text-neutral-800">
                    {item.text}
                  </div>
                </div>
              
              </div>
              
            );
          })}
            
        </div>
      </div>
      <Gallery />
    </section>
  );
}
