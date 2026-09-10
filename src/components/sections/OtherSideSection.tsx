import React from 'react';
import { motion } from 'framer-motion';
import { otherSidePillars, headlineQuote, positioningStatement } from '../../data/otherSideData';
import { Users, Briefcase, Compass, ShieldCheck } from 'lucide-react';

export const OtherSideSection: React.FC = () => {
  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'people': return <Users className="w-6 h-6 text-[#c2410c]" />;
      case 'business': return <Briefcase className="w-6 h-6 text-[#b45309]" />;
      case 'product': return <Compass className="w-6 h-6 text-[#57534e]" />;
      case 'ownership': return <ShieldCheck className="w-6 h-6 text-[#c2410c]" />;
      default: return null;
    }
  };

  return (
    <section id="otherside" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf9f5] transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-[#c2410c] uppercase font-semibold">
            06 — THE OTHER SIDE
          </span>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1c1917] leading-tight">
            {headlineQuote}
          </h2>

          <div className="p-4 sm:p-6 bg-[#f5f2eb] border-l-4 border-[#c2410c] rounded-r-sm">
            <p className="text-base sm:text-xl font-serif italic text-[#1c1917]">
              "{positioningStatement}"
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherSidePillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#ffffff] border border-[#e7e5e4] hover:border-[#c2410c]/50 p-6 sm:p-8 rounded-sm space-y-6 flex flex-col justify-between shadow-sm transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-[#f5f2eb] rounded-sm">
                    {getPillarIcon(pillar.id)}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#1c1917]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-mono text-[#78716c]">
                      {pillar.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-sm font-sans text-[#57534e] leading-relaxed">
                  {pillar.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {pillar.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono font-semibold bg-[#f5f2eb] text-[#1c1917] border border-[#e7e5e4] rounded-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#e7e5e4]">
                <p className="text-xs font-mono text-[#c2410c] font-bold">
                  KEY INSIGHT: "{pillar.keyInsight}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
