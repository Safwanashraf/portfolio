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
      case 'LEADERSHIP': return <Users className="w-5 h-5 text-[#0047FF]" />;
      case 'BUSINESS': return <TrendingUp className="w-5 h-5 text-[#10B981]" />;
      case 'SALES': return <Ear className="w-5 h-5 text-[#F59E0B]" />;
      case 'EXPLORATION': return <Rocket className="w-5 h-5 text-[#EC4899]" />;
      case 'SOFTWARE': return <Code2 className="w-5 h-5 text-[#3B82F6]" />;
      default: return <HardHat className="w-5 h-5 text-[#8B5CF6]" />;
    }
  };

  const toggleMobileExpand = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setExpandedMobileId(expandedMobileId === id ? null : id);
  };

  return (
    <section id="path" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1F0EC] dark:bg-[#16181D] transition-colors border-t border-b border-[#E5E4DE] dark:border-[#2D3139]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#0047FF] dark:text-[#3B82F6] uppercase font-semibold">
            02 — THE PATH & LIVING ARCHIVE
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#121316] dark:text-white">
            Not a straight timeline. An evolving map.
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#5A5A5A] dark:text-[#A0A0A0] leading-relaxed">
            Hover over any card on desktop to preview memory artifacts anchored directly to the milestone. On mobile, tap <span className="font-mono text-xs text-[#0047FF] dark:text-[#3B82F6]">VIEW MEMORY →</span>. Click to view full story.
          </p>
        </div>

        {/* Interactive Grid Map System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {journeyMilestones.map((item, index) => {
            const isHovered = hoveredMilestoneId === item.id;
            const isRightCol = index % 3 === 2;
            const isLeftCol = index % 3 === 0;

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
                  className={`group cursor-pointer bg-[#F8F7F4] dark:bg-[#1C1F26] border rounded-sm p-6 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between h-full ${
                    isHovered
                      ? 'border-[#0047FF] dark:border-[#0047FF] shadow-md'
                      : 'border-[#D1D1C7] dark:border-[#2D3139] hover:border-[#0047FF]'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold tracking-widest px-2 py-0.5 bg-[#E5E4DE] dark:bg-[#2D3139] text-[#121316] dark:text-[#EAEAEA] rounded-sm">
                        {item.year}
                      </span>
                      <div className="p-2 rounded-full bg-[#F1F0EC] dark:bg-[#121316]">
                        {getIconForCategory(item.category)}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-display font-bold text-[#121316] dark:text-white group-hover:text-[#0047FF] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-[#5A5A5A] dark:text-[#A0A0A0] mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>

                    <p className="text-xs font-sans text-[#5A5A5A] dark:text-[#A0A0A0] line-clamp-3 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  {/* Mobile Memory Expander */}
                  <div className="mt-4 pt-3 border-t border-[#E5E4DE] dark:border-[#2D3139]">
                    <button
                      onClick={(e) => toggleMobileExpand(e, item.id)}
                      className="sm:hidden w-full mb-3 flex items-center justify-between px-3 py-1.5 text-[11px] font-mono font-bold text-[#0047FF] dark:text-[#3B82F6] bg-[#0047FF]/10 dark:bg-[#0047FF]/20 rounded-sm"
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
                        <span className="text-[#0047FF] dark:text-[#3B82F6] font-semibold">
                          {item.metrics}
                        </span>
                      ) : (
                        <span className="text-[#5A5A5A] dark:text-[#A0A0A0]">Explore story</span>
                      )}
                      <span className="group-hover:translate-x-1 transition-transform flex items-center text-[#121316] dark:text-white font-bold">
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
                      className={`hidden sm:block absolute z-30 w-[320px] lg:w-[360px] bg-[#F8F7F4] dark:bg-[#1C1F26] border-2 border-[#0047FF] p-4 rounded-sm shadow-2xl pointer-events-none top-0 ${
                        isRightCol ? 'right-0' : 'left-0'
                      }`}
                    >
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E4DE] dark:border-[#2D3139] text-[10px] font-mono text-[#0047FF] dark:text-[#3B82F6] font-bold uppercase tracking-wider">
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
                        <h4 className="text-xs font-display font-bold text-[#121316] dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-[11px] font-sans text-[#5A5A5A] dark:text-[#A0A0A0] leading-relaxed line-clamp-2">
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

            <div className="p-4 bg-[#F1F0EC] dark:bg-[#121316] border-l-4 border-[#0047FF] rounded-r-sm">
              <p className="text-xs font-mono text-[#0047FF] dark:text-[#3B82F6] uppercase font-bold">
                SUBTITLE
              </p>
              <p className="text-sm font-display font-semibold text-[#121316] dark:text-white">
                {selectedMilestone.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-mono tracking-widest text-[#5A5A5A] dark:text-[#A0A0A0] uppercase font-bold">
                THE STORY
              </h4>
              {selectedMilestone.story.map((paragraph, idx) => (
                <p key={idx} className="text-sm font-sans leading-relaxed text-[#3A3A3A] dark:text-[#D4D4D4]">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E5E4DE] dark:border-[#2D3139] space-y-3">
              <h4 className="text-xs font-mono tracking-widest text-[#0047FF] dark:text-[#3B82F6] uppercase font-bold">
                KEY TAKEAWAYS & LESSONS
              </h4>
              <ul className="space-y-2">
                {selectedMilestone.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs font-mono text-[#3A3A3A] dark:text-[#D4D4D4]">
                    <span className="text-[#0047FF] font-bold">✓</span>
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
