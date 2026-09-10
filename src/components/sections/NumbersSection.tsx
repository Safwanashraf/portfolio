import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { verifiedMetrics } from '../../data/numbersData';

interface CounterProps {
  value: string;
  id: string;
}

const KineticCounter: React.FC<CounterProps> = ({ value }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayVal, setDisplayVal] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric core if possible
    const rawNumber = parseInt(value.replace(/[^0-9]/g, ''), 10);
    if (isNaN(rawNumber)) {
      setDisplayVal(value);
      return;
    }

    const controls = animate(0, rawNumber, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1], // Custom out-expo
      onUpdate(latest) {
        const rounded = Math.floor(latest);
        if (value.includes(',')) {
          setDisplayVal(rounded.toLocaleString());
        } else {
          setDisplayVal(rounded.toString());
        }
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return <span ref={ref}>{displayVal}</span>;
};

export const NumbersSection: React.FC = () => {
  return (
    <section id="numbers" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf9f5] border-t border-b border-[#e7e5e4] transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#c2410c] uppercase font-semibold">
            04 — VERIFIED PROOF
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1c1917]">
            Quantitative Proof, Not Self-Ratings
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#57534e] leading-relaxed">
            Every statistic here reflects actual real-world responsibility, direct user interaction, and executed outcomes.
          </p>
        </div>

        {/* Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {verifiedMetrics.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#ffffff] border border-[#e7e5e4] hover:border-[#c2410c]/50 p-8 rounded-sm space-y-4 shadow-sm transition-all"
            >
              <div className="flex items-baseline space-x-1 font-serif">
                {item.prefix && (
                  <span className="text-3xl sm:text-4xl font-bold text-[#c2410c]">
                    {item.prefix}
                  </span>
                )}
                <span className="text-5xl sm:text-6xl font-bold text-[#1c1917] tracking-tight">
                  <KineticCounter value={String(item.number)} id={item.id} />
                </span>
                {item.suffix && (
                  <span className="text-3xl sm:text-4xl font-bold text-[#c2410c]">
                    {item.suffix}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#1c1917]">
                  {item.label}
                </h3>
                <p className="text-xs font-sans text-[#57534e] mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
