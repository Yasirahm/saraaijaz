
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Layers,
  Compass,
  Shield,
  ArrowUpRight,
} from 'lucide-react';

const ABOUT_CONTENT = {
  sectionTag: 'About Section',
  heading: 'Structured overview and core capabilities',
  description:
    'Provide an introductory overview or key context here. This section is designed to present core highlights, key differentiators, or foundational principles to prospective clients.',
  features: [
    {
      id: 1,
      icon: Layers,
      title: 'Feature Title One',
      description:
        'A concise summary explaining the first primary capability or benefit. Designed to be easily replaced with specific customer details.',
    },
    {
      id: 2,
      icon: Compass,
      title: 'Feature Title Two',
      description:
        'A concise summary explaining the second key attribute. Highlights workflow, reliability, or specific product offerings.',
    },
    {
      id: 3,
      icon: Shield,
      title: 'Feature Title Three',
      description:
        'A concise summary explaining the third aspect. Emphasizes security, scalability, customer support, or operational standards.',
    },
  ],
};

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: 'easeOut',
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Animated Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase font-bold tracking-widest text-indigo-600"
          >
            {ABOUT_CONTENT.sectionTag}
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight"
          >
            {ABOUT_CONTENT.heading}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-neutral-600 leading-relaxed"
          >
            {ABOUT_CONTENT.description}
          </motion.p>
        </motion.div>

        {/* Animated Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {ABOUT_CONTENT.features.map((feature) => {
            const IconComponent = feature.icon;

            return (
              <motion.div
                key={feature.id}
                variants={fadeUp}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -10,
                        scale: 1.02,
                        transition: { duration: 0.25 },
                      }
                }
                className="group relative p-7 sm:p-8 rounded-2xl
                  bg-neutral-50/70 border border-neutral-200/80
                  hover:border-indigo-200 hover:bg-white
                  hover:shadow-xl hover:shadow-indigo-100/50
                  transition-colors duration-300
                  flex flex-col justify-between"
              >
                <div>
                  {/* Animated Icon */}
                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            rotate: 8,
                            scale: 1.12,
                          }
                    }
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-12 h-12 rounded-xl
                      bg-white border border-neutral-200/80
                      text-indigo-600 flex items-center justify-center
                      mb-6 shadow-sm group-hover:bg-indigo-50
                      group-hover:border-indigo-100 transition-colors"
                  >
                    <IconComponent className="w-6 h-6" />
                  </motion.div>

                  {/* Feature Title */}
                  <h3 className="text-xl font-bold text-neutral-900
                    mb-3 tracking-tight group-hover:text-indigo-700
                    transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Learn More Indicator */}
                <div className="pt-6 mt-6 border-t border-neutral-200/60
                  flex items-center gap-1.5 text-xs font-semibold
                  text-neutral-500 group-hover:text-indigo-600
                  transition-colors duration-300">

                  <span>Learn more</span>

                  <motion.span
                    animate={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    className="inline-flex"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
