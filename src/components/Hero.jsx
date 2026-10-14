
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import image1 from '../../public/image1.png';
const HERO_CONTENT = {
  headline: 'Sara Aijaz Communication Skills & Soft Skills Training',

  description:
    'Add your description here  .',

  primaryCta: {
    label: 'Primary Action',
    href: '#pricing',
  },

  secondaryCta: {
    label: 'Secondary Action',
    href: '#about',
  },

  highlights: [
    
  ],
};

export default function Hero() {
  return (
    <section id="home" className="border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">

        {/* Background image covers hero content only */}
      <div
  className="relative overflow-hidden rounded-3xl
    px-5 py-16 sm:px-10 sm:py-20
    md:px-16 md:py-24
    min-h-[520px] sm:min-h-[480px]"
  style={{
    backgroundImage: "url('/image1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
          {/* Dark overlay for readable text */}
          <div
            className="absolute inset-0 bg-black/55"
            aria-hidden="true"
          />

          {/* Hero content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl
              font-extrabold tracking-tight text-white
              leading-[1.15] max-w-3xl mx-auto">
              {HERO_CONTENT.headline}
            </h1>

            <p className="text-lg sm:text-xl text-white/90
              max-w-2xl mx-auto leading-relaxed">
              {HERO_CONTENT.description}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center
              justify-center gap-4 pt-2">

              <a
                href={HERO_CONTENT.primaryCta.href}
                className="inline-flex items-center justify-center
                  gap-2 px-7 py-3.5 rounded-xl text-base
                  font-semibold text-white bg-indigo-600
                  hover:bg-indigo-700 transition-all shadow-lg"
              >
                <span>{HERO_CONTENT.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={HERO_CONTENT.secondaryCta.href}
                className="inline-flex items-center justify-center
                  px-7 py-3.5 rounded-xl text-base font-medium
                  text-white bg-white/10 hover:bg-white/20
                  border border-white/40 backdrop-blur-sm
                  transition-colors"
              >
                {HERO_CONTENT.secondaryCta.label}
              </a>
            </div>

            {/* Highlights */}
            <div className="pt-6 flex flex-wrap justify-center
              gap-y-3 gap-x-8 text-sm text-white/90">

              {HERO_CONTENT.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2
                    className="w-4 h-4 text-emerald-400 shrink-0"
                  />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}