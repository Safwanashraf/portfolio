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
    <section id="numbers" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1F0EC] dark:bg-[#16181D] border-t border-b border-[#E5E4DE] dark:border-[#2D3139] transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#0047FF] dark:text-[#3B82F6] uppercase font-semibold">
            04 — VERIFIED PROOF
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#121316] dark:text-white">
            Quantitative Proof, Not Self-Ratings
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#5A5A5A] dark:text-[#A0A0A0] leading-relaxed">
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
              className="bg-[#F8F7F4] dark:bg-[#1C1F26] border border-[#D1D1C7] dark:border-[#2D3139] hover:border-[#0047FF]/50 p-8 rounded-sm space-y-4 shadow-sm transition-all"
            >
              <div className="flex items-baseline space-x-1 font-display">
                {item.prefix && (
                  <span className="text-3xl sm:text-4xl font-bold text-[#0047FF]">
                    {item.prefix}
                  </span>
                )}
                <span className="text-5xl sm:text-6xl font-extrabold text-[#121316] dark:text-white tracking-tight">
                  <KineticCounter value={String(item.number)} id={item.id} />
                </span>
                {item.suffix && (
                  <span className="text-3xl sm:text-4xl font-bold text-[#0047FF]">
                    {item.suffix}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#121316] dark:text-white">
                  {item.label}
                </h3>
                <p className="text-xs font-sans text-[#5A5A5A] dark:text-[#A0A0A0] mt-2 leading-relaxed">
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
