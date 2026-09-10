import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fullAboutChapters } from '../../data/aboutData';
import { Modal } from '../common/Modal';
import { EditorialPhoto } from '../common/EditorialPhoto';
import { BookOpen, ArrowRight, User } from 'lucide-react';

export const HumanSection: React.FC = () => {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [activeChapterIdx, setActiveChapterIdx] = useState(0);

  return (
    <section id="human" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf9f5] transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#ffffff] border border-[#e7e5e4] p-8 sm:p-12 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
          {/* Text Summary & Identity */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono tracking-widest text-[#c2410c] uppercase font-semibold">
                07 — THE HUMAN CENTER
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c2410c]" />
              <span className="text-xs font-mono text-[#78716c] uppercase font-semibold">
                6-CHAPTER BIOGRAPHY
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1c1917] leading-tight">
                THERE IS A PERSON BEHIND THE CODE.
              </h2>
              <p className="text-xs sm:text-sm font-mono tracking-wider text-[#b45309] uppercase font-bold">
                SOFTWARE ENGINEER IN PROGRESS · OBSERVER BY NATURE · BUILDER BY CHOICE
              </p>
            </div>

            <p className="text-base font-sans text-[#57534e] leading-relaxed max-w-2xl">
              From leading a 75-member team at age 19 to conducting 1,500 direct customer conversations, relocating to Alappuzha for an entrepreneurial venture, and supervising house construction, Safwan's path was shaped by real human friction before committing fully to software engineering.
            </p>

            <div>
              <button
                onClick={() => setIsStoryModalOpen(true)}
                className="inline-flex items-center space-x-2 px-6 py-3.5 text-xs font-mono font-bold tracking-widest text-white bg-[#c2410c] hover:bg-[#9a3412] active:scale-95 transition-all rounded-sm shadow-sm group"
              >
                <BookOpen className="w-4 h-4" />
                <span>READ THE EDITORIAL BIOGRAPHY (6 CHAPTERS)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Chapter Preview Selector Cards */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono tracking-widest text-[#78716c] uppercase font-semibold">
              BIOGRAPHY CHAPTERS
            </span>
            <div className="space-y-2">
              {fullAboutChapters.map((ch, idx) => (
                <div
                  key={ch.chapterNumber}
                  onClick={() => {
                    setActiveChapterIdx(idx);
                    setIsStoryModalOpen(true);
                  }}
                  className="p-3 bg-[#f5f2eb] border border-[#e7e5e4] hover:border-[#c2410c]/60 cursor-pointer rounded-sm transition-colors text-xs font-mono flex items-center justify-between group"
                >
                  <span className="text-[#c2410c] font-bold">{ch.chapterNumber}</span>
                  <span className="text-[#1c1917] group-hover:text-[#c2410c] font-semibold truncate ml-2 mr-auto">
                    {ch.title}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#78716c] group-hover:translate-x-1 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive 6-Chapter Story Modal */}
      {isStoryModalOpen && (
        <Modal
          isOpen={isStoryModalOpen}
          onClose={() => setIsStoryModalOpen(false)}
          title={`CHAPTER ${fullAboutChapters[activeChapterIdx].chapterNumber} — ${fullAboutChapters[activeChapterIdx].title}`}
          category="THE HUMAN STORY (6 EDITORIAL CHAPTERS)"
        >
          <div className="space-y-6">
            {/* Chapter Navigation Tabs */}
            <div className="flex overflow-x-auto space-x-2 pb-3 border-b border-[#e7e5e4] scrollbar-none">
              {fullAboutChapters.map((ch, idx) => (
                <button
                  key={ch.chapterNumber}
                  onClick={() => setActiveChapterIdx(idx)}
                  className={`px-3.5 py-1.5 text-xs font-mono rounded-sm transition-colors shrink-0 ${
                    activeChapterIdx === idx
                      ? 'bg-[#c2410c] text-white font-bold shadow-sm'
                      : 'bg-[#f5f2eb] text-[#78716c] hover:text-[#1c1917]'
                  }`}
                >
                  Ch {ch.chapterNumber}
                </button>
              ))}
            </div>

            {/* Current Chapter Content */}
            <div className="space-y-6">
              {fullAboutChapters[activeChapterIdx].imagePlaceholder && (
                <EditorialPhoto
                  src={fullAboutChapters[activeChapterIdx].imagePlaceholder!}
                  alt={fullAboutChapters[activeChapterIdx].title}
                  label={`ARCHIVE // CHAPTER ${fullAboutChapters[activeChapterIdx].chapterNumber}`}
                  caption={fullAboutChapters[activeChapterIdx].imageCaption}
                  aspectRatio="aspect-[16/9]"
                />
              )}

              <p className="text-sm font-mono text-[#c2410c] italic font-semibold border-l-2 border-[#c2410c] pl-3 py-1">
                "{fullAboutChapters[activeChapterIdx].excerpt}"
              </p>

              <div className="space-y-4">
                {fullAboutChapters[activeChapterIdx].paragraphs.map((p, idx) => (
                  <p key={idx} className="text-sm font-sans leading-relaxed text-[#44403c]">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Prev / Next Buttons */}
            <div className="pt-6 border-t border-[#e7e5e4] flex items-center justify-between text-xs font-mono">
              <button
                disabled={activeChapterIdx === 0}
                onClick={() => setActiveChapterIdx(prev => Math.max(0, prev - 1))}
                className="px-4 py-2 bg-[#f5f2eb] text-[#1c1917] rounded-sm disabled:opacity-40 hover:bg-[#eae6dc] transition-colors"
              >
                ← PREVIOUS CHAPTER
              </button>

              <span className="text-[#78716c] font-bold">
                Chapter {activeChapterIdx + 1} of {fullAboutChapters.length}
              </span>

              <button
                disabled={activeChapterIdx === fullAboutChapters.length - 1}
                onClick={() => setActiveChapterIdx(prev => Math.min(fullAboutChapters.length - 1, prev + 1))}
                className="px-4 py-2 bg-[#c2410c] text-white rounded-sm disabled:opacity-40 hover:bg-[#9a3412] transition-colors shadow-sm"
              >
                NEXT CHAPTER →
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
