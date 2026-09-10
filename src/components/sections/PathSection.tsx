import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { journeyMilestones, JourneyMilestone } from '../../data/journeyData';
import { Modal } from '../common/Modal';
import { EditorialPhoto } from '../common/EditorialPhoto';
import { Users, TrendingUp, Ear, Rocket, HardHat, Code2, ArrowRight, Eye, Camera } from 'lucide-react';

export const PathSection: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<JourneyMilestone | null>(null);
  const [hoveredMilestoneId, setHoveredMilestoneId] = useState<string | null>(null);
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(null);

  const getIconForCategory = (category: JourneyMilestone['category']) => {
    switch (category) {
      case 'LEADERSHIP': return <Users className="w-5 h-5 text-[#c2410c]" />;
      case 'BUSINESS': return <TrendingUp className="w-5 h-5 text-[#b45309]" />;
      case 'SALES': return <Ear className="w-5 h-5 text-[#78716c]" />;
      case 'EXPLORATION': return <Rocket className="w-5 h-5 text-[#c2410c]" />;
      case 'SOFTWARE': return <Code2 className="w-5 h-5 text-[#b45309]" />;
      default: return <HardHat className="w-5 h-5 text-[#57534e]" />;
    }
  };

  const toggleMobileExpand = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setExpandedMobileId(expandedMobileId === id ? null : id);
  };

  return (
    <section id="path" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf9f5] transition-colors border-t border-b border-[#e7e5e4]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#c2410c] uppercase font-semibold">
            05 — THE PATH & LIVING ARCHIVE
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1c1917]">
            Not a straight timeline. An evolving map.
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#57534e] leading-relaxed">
            Hover over any card on desktop to preview memory artifacts anchored directly to the milestone. On mobile, tap <span className="font-mono text-xs text-[#c2410c]">VIEW MEMORY →</span>. Click to view full story.
          </p>
        </div>

        {/* Interactive Grid Map System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {journeyMilestones.map((item, index) => {
            const isHovered = hoveredMilestoneId === item.id;
            const isRightCol = index % 3 === 2;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredMilestoneId(item.id)}
                onMouseLeave={() => setHoveredMilestoneId(null)}
                className="relative"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedMilestone(item)}
                  className={`group cursor-pointer bg-[#ffffff] border rounded-sm p-6 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between h-full ${
                    isHovered
                      ? 'border-[#c2410c] shadow-md'
                      : 'border-[#e7e5e4] hover:border-[#c2410c]/60'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold tracking-widest px-2.5 py-1 bg-[#f5f2eb] text-[#1c1917] border border-[#e7e5e4] rounded-sm">
                        {item.year}
                      </span>
                      <div className="p-2 rounded-full bg-[#f5f2eb]">
                        {getIconForCategory(item.category)}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-serif font-bold text-[#1c1917] group-hover:text-[#c2410c] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-[#78716c] mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>

                    <p className="text-xs font-sans text-[#57534e] line-clamp-3 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  {/* Mobile Memory Expander */}
                  <div className="mt-4 pt-3 border-t border-[#e7e5e4]">
                    <button
                      onClick={(e) => toggleMobileExpand(e, item.id)}
                      className="sm:hidden w-full mb-3 flex items-center justify-between px-3 py-1.5 text-[11px] font-mono font-bold text-[#c2410c] bg-[#ffedd5] border border-[#fed7aa] rounded-sm"
                    >
                      <span className="flex items-center space-x-1">
                        <Eye className="w-3.5 h-3.5" />
                        <span>{expandedMobileId === item.id ? 'HIDE MEMORY' : 'VIEW MEMORY →'}</span>
                      </span>
                    </button>

                    <AnimatePresence>
                      {expandedMobileId === item.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="sm:hidden mb-4 overflow-hidden"
                        >
                          <EditorialPhoto
                            src={item.image}
                            alt={item.title}
                            label={`ARCHIVE // ${item.year}`}
                            caption={item.caption}
                            aspectRatio="aspect-[16/9]"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex items-center justify-between text-xs font-mono">
                      {item.metrics ? (
                        <span className="text-[#c2410c] font-bold">
                          {item.metrics}
                        </span>
                      ) : (
                        <span className="text-[#78716c]">Explore story</span>
                      )}
                      <span className="group-hover:translate-x-1 transition-transform flex items-center text-[#c2410c] font-bold">
                        <span>DETAILS</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* DESKTOP SPATIALLY ANCHORED HOVER MEMORY POPOVER */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 5 }}
                      transition={{ duration: 0.2 }}
                      className={`hidden sm:block absolute z-30 w-[320px] lg:w-[360px] bg-[#ffffff] border-2 border-[#c2410c] p-4 rounded-sm shadow-2xl pointer-events-none top-0 ${
                        isRightCol ? 'right-0' : 'left-0'
                      }`}
                    >
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#e7e5e4] text-[10px] font-mono text-[#c2410c] font-bold uppercase tracking-wider">
                        <span className="flex items-center space-x-1">
                          <Camera className="w-3 h-3" />
                          <span>HOVER MEMORY REVEAL</span>
                        </span>
                        <span>{item.year}</span>
                      </div>

                      <EditorialPhoto
                        src={item.image}
                        alt={item.title}
                        label={`ARCHIVE // ${item.year}`}
                        aspectRatio="aspect-[16/9]"
                      />

                      <div className="mt-3 space-y-1">
                        <h4 className="text-xs font-serif font-bold text-[#1c1917]">
                          {item.title}
                        </h4>
                        <p className="text-[11px] font-sans text-[#57534e] leading-relaxed line-clamp-2">
                          {item.caption}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedMilestone && (
        <Modal
          isOpen={!!selectedMilestone}
          onClose={() => setSelectedMilestone(null)}
          title={selectedMilestone.title}
          category={`${selectedMilestone.year} · ${selectedMilestone.category}`}
        >
          <div className="space-y-6">
            <EditorialPhoto
              src={selectedMilestone.image}
              alt={selectedMilestone.title}
              label={`ARCHIVE // ${selectedMilestone.year}`}
              caption={selectedMilestone.caption}
              aspectRatio="aspect-[16/9]"
            />

            <div className="p-4 bg-[#f5f2eb] border-l-4 border-[#c2410c] rounded-r-sm">
              <p className="text-xs font-mono text-[#c2410c] uppercase font-bold">
                SUBTITLE
              </p>
              <p className="text-sm font-serif font-semibold text-[#1c1917]">
                {selectedMilestone.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-mono tracking-widest text-[#78716c] uppercase font-bold">
                THE STORY
              </h4>
              {selectedMilestone.story.map((paragraph, idx) => (
                <p key={idx} className="text-sm font-sans leading-relaxed text-[#44403c]">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-4 border-t border-[#e7e5e4] space-y-3">
              <h4 className="text-xs font-mono tracking-widest text-[#c2410c] uppercase font-bold">
                KEY TAKEAWAYS & LESSONS
              </h4>
              <ul className="space-y-2">
                {selectedMilestone.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs font-mono text-[#44403c]">
                    <span className="text-[#c2410c] font-bold">✓</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
