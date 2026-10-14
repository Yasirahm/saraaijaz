import React, { useState } from 'react';
import { Check, HelpCircle, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

/**
 * Customizable WhatsApp & Pricing Configuration
 * 
 * 1. Change WHATSAPP_PHONE_NUMBER to the website owner's WhatsApp number with country code.
 *    Example: '1234567890' or '447123456789' (no '+' or dashes).
 * 2. Add or remove plans from PRICING_CONTENT.plans. If more than 3 plans exist,
 *    the "See More" button automatically handles the expansion.
 */
const WHATSAPP_PHONE_NUMBER = '+919796559374';

const PRICING_CONTENT = {
  sectionTag: 'Pricing Options',
  heading: 'Flexible plans structured for demonstration',
  description:
    'Browse our available plans below. Click "Get in Touch" on any tier to open a pre-filled WhatsApp conversation with that product’s details.',
  plans: [
    {
      id: 'plan-1',
      name: 'Plan One',
      badge: null,
      price: '300',
      period: 'per month',
      description: 'Ideal starting point for exploring foundational capabilities.',
      features: [
        'Generic feature placeholder 1',
        'Generic feature placeholder 2',
        'Generic feature placeholder 3',
        'Basic community support',
      ],
      isPopular: false,
    },
    {
      id: 'plan-2',
      name: 'Plan Two',
      badge: 'Recommended',
      price: '400',
      period: 'per month',
      description: 'Most popular tier balance for expanding workflows and teams.',
      features: [
        'Everything included in Plan One',
        'Generic feature placeholder 4',
        'Generic feature placeholder 5',
        'Priority response time placeholder',
        'Additional capacity allotment',
      ],
      isPopular: true,
    },
    {
      id: 'plan-3',
      name: 'Plan Three',
      badge: null,
      price: '500',
      period: 'per month',
      description: 'Comprehensive tier for advanced requirements and organizations.',
      features: [
        'Everything included in Plan Two',
        'Advanced administrative controls',
        'Custom configuration options',
        'Dedicated onboarding placeholder',
        'Full service agreement tier',
      ],
      isPopular: false,
    },
    {
      id: 'plan-4',
      name: 'Plan Four (Extended)',
      badge: null,
      price: '600',
      period: 'per month',
      description: 'Expanded capabilities for growing multi-department teams.',
      features: [
        'Everything included in Plan Three',
        'Custom domain & integration support',
        'Multi-seat collaboration controls',
        'Monthly consultation check-in',
      ],
      isPopular: false,
    },
    {
      id: 'plan-5',
      name: 'Plan Five (Enterprise)',
      badge: 'High Scale',
      price: '700',
      period: 'per month',
      description: 'High-volume infrastructure and personalized service management.',
      features: [
        'Unlimited generic resource credits',
        'Dedicated account manager',
        '99.9% uptime SLA agreement',
        'Custom security & audit logs',
      ],
      isPopular: false,
    },
    {
      id: 'plan-6',
      name: 'Plan Six (Custom)',
      badge: null,
      price: 'Custom',
      period: 'tailored quote',
      description: 'Fully bespoke package constructed for custom operational goals.',
      features: [
        'Tailored solution architecture',
        'Private cloud deployment option',
        '24/7 emergency priority line',
        'Executive strategic quarterly review',
      ],
      isPopular: false,
    },
  ],
};

export default function Pricing() {
  const [showAll, setShowAll] = useState(false);

  // Show only 3 plans initially if there are more than 3
  const hasMoreThanThree = PRICING_CONTENT.plans.length > 3;
  const displayedPlans = (hasMoreThanThree && !showAll)
    ? PRICING_CONTENT.plans.slice(0, 3)
    : PRICING_CONTENT.plans;

  /**
   * Generates a direct WhatsApp link pre-filled with the specific plan's details
   */
  const createWhatsAppLink = (plan) => {
    const message = `Hello! I would like to get in touch regarding *${plan.name}* (${plan.price} ${plan.period}). Could you please share more details?`;
    return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
   <section id="pricing" className="py-20 md:py-28 bg-neutral-50/50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-xs uppercase font-bold tracking-widest text-indigo-600">
            {PRICING_CONTENT.sectionTag}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            {PRICING_CONTENT.heading}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            {PRICING_CONTENT.description}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {displayedPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-200 ${
                plan.isPopular
                  ? 'bg-white border-2 border-indigo-600 shadow-xl lg:-translate-y-2'
                  : 'bg-white border border-neutral-200/90 shadow-xs hover:border-neutral-900 hover:shadow-lg transition-all duration-500'
              }`}
            >
              {/* Optional Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-600 text-white shadow-sm">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Plan Title & Description */}
                <div className="border-b border-neutral-100 pb-6 mb-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-neutral-500 min-h-[40px] leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price Placeholder */}
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold tracking-tight text-neutral-900">
                      {plan.price}
                    </span>
                    <span className="text-sm font-medium text-neutral-500">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Included capabilities:
                  </p>
                  <ul className="space-y-3" aria-label={`Features for ${plan.name}`}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700">
                        <div
                          className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                            plan.isPopular
                              ? 'bg-indigo-100 text-indigo-700'
                              : 'bg-neutral-100 text-neutral-600'
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Get in Touch Button (Direct WhatsApp Integration with auto-written message) */}
              <div className="pt-4">
                <a
                  href={createWhatsAppLink(plan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl text-center font-medium text-sm transition-all flex items-center justify-center gap-2 group ${
                    plan.isPopular
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow'
                      : 'bg-neutral-900 hover:bg-neutral-800 text-white'
                  }`}
                  aria-label={`Get in touch on WhatsApp regarding ${plan.name}`}
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300 group-hover:scale-410 transition-transform" />
                  <span>Get in Touch</span>
                </a>
                <p className="text-center text-[11px] text-neutral-400 mt-2">
                  Opens WhatsApp with pre-filled product details
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* See More / See Less Toggle Button if more than 3 plans */}
        {hasMoreThanThree && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-neutral-300 hover:border-neutral-400 text-neutral-700 hover:text-neutral-900 font-medium text-sm shadow-2xs hover:shadow-xs transition-all"
            >
              <span>
                {showAll
                  ? 'Show Less Plans'
                  : `See More Plans (${PRICING_CONTENT.plans.length - 3} more)`}
              </span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 text-neutral-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-neutral-500" />
              )}
            </button>
          </div>
        )}

        {/* Pricing Notice */}
        <div className="mt-12 text-center text-xs text-neutral-400 flex items-center justify-center gap-1.5">
          <HelpCircle className="w-4 h-4 text-neutral-400" />
          <span>All figures and feature lists shown above are placeholders for client layout demonstration.</span>
        </div>
      </div>
    </section>



  );
}
