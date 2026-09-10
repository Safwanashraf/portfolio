import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Compass } from 'lucide-react';
import { EditorialPhoto } from '../common/EditorialPhoto';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-grid-pattern overflow-hidden"
    >
      {/* Background Decorative Accent Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#0047FF]/5 via-transparent to-[#E63946]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Identifier & Primary Status */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3 mb-6"
        >
          <span className="px-2.5 py-1 text-[11px] font-mono tracking-widest text-[#0047FF] dark:text-[#3B82F6] bg-[#0047FF]/10 dark:bg-[#0047FF]/20 border border-[#0047FF]/20 rounded-sm uppercase font-bold">
            SAFWAN ASHRAF — MERN STACK DEVELOPER & BUILDER
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-xs font-mono font-semibold text-[#5A5A5A] dark:text-[#A0A0A0] uppercase tracking-widest">
            AVAILABLE FOR ENGINEERING ROLES
          </span>
        </motion.div>

        {/* Hero Grid: Typography + Editorial Portrait Artifact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Narrative Main Headlines & Positioning */}
          <div className="lg:col-span-8 space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-[#121316] dark:text-white leading-[1.08]"
            >
              I didn't follow a <span className="underline decoration-[#0047FF] decoration-wavy decoration-2 underline-offset-8">straight path</span>.
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-6xl font-editorial italic text-[#5A5A5A] dark:text-[#C0C0C0]"
            >
              I followed questions.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 pt-6 border-t border-[#E5E4DE] dark:border-[#2D3139] grid grid-cols-1 md:grid-cols-12 gap-6 items-end"
            >
              <div className="md:col-span-6 space-y-1.5">
                <span className="text-xs font-mono tracking-widest text-[#0047FF] dark:text-[#3B82F6] uppercase font-semibold">
                  PRIMARY FOCUS
                </span>
                <p className="text-xl sm:text-2xl font-display font-bold text-[#121316] dark:text-white">
                  MERN Stack Developer
                </p>
                <p className="text-xs font-mono tracking-wider text-[#5A5A5A] dark:text-[#A0A0A0] uppercase">
                  Software · Business · People
                </p>
              </div>

              <div className="md:col-span-6 space-y-2">
                <p className="text-xs sm:text-sm font-sans text-[#5A5A5A] dark:text-[#A0A0A0] leading-relaxed">
                  Explored leadership of 75 people, 1,500 direct customer conversations, sales closing, and startup execution before committing 100% to building full-stack software.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Editorial Portrait Artifact (Asymmetric Frame) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="w-full max-w-xs relative">
              <EditorialPhoto
                src="/images/about/safwan-portrait.jpg"
                alt="Safwan Ashraf — MERN Stack Developer"
                label="HUMAN ARCHIVE // PORTRAIT"
                date="2026"
                aspectRatio="aspect-[4/5]"
                caption="Safwan Ashraf — Builder, developer, and observer."
              />
            </div>
          </motion.div>
        </div>

        {/* Action Buttons & Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#workshop"
              className="inline-flex items-center space-x-2 px-6 py-3.5 text-xs font-mono font-bold tracking-widest text-white bg-[#0047FF] hover:bg-[#0038CC] active:scale-95 transition-all rounded-sm shadow-md group"
            >
              <span>VIEW CASE STUDIES & PROOF</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#path"
              className="inline-flex items-center space-x-2 px-6 py-3.5 text-xs font-mono font-bold tracking-widest text-[#121316] dark:text-white bg-[#E5E4DE] dark:bg-[#1F2228] hover:bg-[#D1D1C7] dark:hover:bg-[#2D3139] active:scale-95 transition-all rounded-sm border border-transparent hover:border-[#D1D1C7]"
            >
              <Compass className="w-4 h-4 text-[#0047FF]" />
              <span>THE NARRATIVE & ORIGINS</span>
            </a>
          </div>

          <a
            href="#workshop"
            className="inline-flex items-center space-x-2 text-xs font-mono text-[#5A5A5A] dark:text-[#A0A0A0] hover:text-[#0047FF] dark:hover:text-white transition-colors"
          >
            <span>SCROLL FOR PROOF</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#0047FF]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
