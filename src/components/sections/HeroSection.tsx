import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Compass } from 'lucide-react';
import { EditorialPhoto } from '../common/EditorialPhoto';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#faf9f5] bg-grid-pattern overflow-hidden"
    >
      {/* Background Decorative Accent Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#c2410c]/4 via-transparent to-[#b45309]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Identifier & Primary Status */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <span className="inline-flex items-center space-x-2 px-2.5 py-1 text-[11px] font-mono tracking-widest text-[#c2410c] bg-[#c2410c]/8 border border-[#c2410c]/25 rounded-sm uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c2410c]" />
            <span>FULL STACK / MERN DEVELOPER</span>
          </span>
          <span className="text-xs font-mono font-semibold text-[#78716c] uppercase tracking-widest flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
            <span>AVAILABLE FOR ENGINEERING ROLES</span>
          </span>
        </motion.div>

        {/* Hero Grid: Typography + Editorial Portrait Artifact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Narrative Main Headlines & Positioning */}
          <div className="lg:col-span-8 space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-[#1c1917] leading-[1.1]"
            >
              I didn't follow a{' '}
              <span className="underline decoration-[#c2410c] decoration-wavy decoration-2 underline-offset-8">
                straight path
              </span>
              .
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-6xl font-serif italic text-[#57534e]"
            >
              I followed questions.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 pt-6 border-t border-[#e7e5e4] grid grid-cols-1 md:grid-cols-12 gap-6 items-end"
            >
              <div className="md:col-span-6 space-y-1.5">
                <span className="text-xs font-mono tracking-widest text-[#c2410c] uppercase font-semibold">
                  PRIMARY FOCUS
                </span>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#c2410c]">
                  MERN Stack Developer
                </p>
                <p className="text-xs font-mono tracking-wider text-[#78716c] uppercase">
                  Software · Business · People
                </p>
              </div>

              <div className="md:col-span-6 space-y-2">
                <p className="text-xs sm:text-sm font-sans text-[#57534e] leading-relaxed">
                  Explored leadership of 75 people, 1,500 direct customer conversations, sales closing, and startup execution before committing 100% to building full-stack software.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Editorial Portrait Artifact (Layered Paper Frame) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="w-full max-w-xs relative">
              {/* Backing layered paper sheet effect */}
              <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 bg-[#f5f2eb] border border-[#e7e5e4] rounded-sm -z-10 shadow-sm" />
              <div className="relative bg-[#ffffff] p-3 border border-[#e7e5e4] rounded-sm shadow-md">
                <EditorialPhoto
                  src="/images/about/safwan-portrait.jpg"
                  alt="Safwan Ashraf — MERN Stack Developer"
                  label="HUMAN ARCHIVE // PORTRAIT"
                  date="2026"
                  aspectRatio="aspect-[4/5]"
                  caption="Safwan Ashraf — Builder, developer, and observer."
                />
              </div>
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
              className="inline-flex items-center space-x-2 px-6 py-3.5 text-xs font-mono font-bold tracking-widest text-white bg-[#c2410c] hover:bg-[#9a3412] active:scale-95 transition-all rounded-sm shadow-sm group"
            >
              <span>VIEW CASE STUDIES →</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#path"
              className="inline-flex items-center space-x-2 px-6 py-3.5 text-xs font-mono font-bold tracking-widest text-[#1c1917] bg-[#f5f2eb] hover:bg-[#eae6dc] active:scale-95 transition-all rounded-sm border border-[#d6d3d1] hover:border-[#1c1917]"
            >
              <Compass className="w-4 h-4 text-[#c2410c]" />
              <span>THE NARRATIVE & ORIGINS</span>
            </a>
          </div>

          <a
            href="#workshop"
            className="inline-flex items-center space-x-2 text-xs font-mono text-[#78716c] hover:text-[#c2410c] transition-colors"
          >
            <span>SCROLL FOR PROOF</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#c2410c]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
