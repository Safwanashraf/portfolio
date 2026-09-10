import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { journalArticles, JournalArticle } from '../../data/journalData';
import { Modal } from '../common/Modal';
import { EditorialPhoto } from '../common/EditorialPhoto';
import { BookOpen, Clock, ArrowRight, ExternalLink } from 'lucide-react';

interface JournalSectionProps {
  onOpenFullArticle?: (slug: string) => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({ onOpenFullArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  const categories = ['ALL', 'BUILD', 'THINK', 'LEARN', 'FAIL', 'OBSERVE', 'BUSINESS', 'CAREER'];

  const filteredArticles = selectedCategory === 'ALL'
    ? journalArticles
    : journalArticles.filter(art => art.category === selectedCategory);

  const handleReadFullArticle = (slug: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveArticle(null);
    if (onOpenFullArticle) {
      onOpenFullArticle(slug);
    } else {
      window.location.hash = `#journal/${slug}`;
    }
  };

  return (
    <section id="journal" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf9f5] transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#c2410c] uppercase font-semibold">
            07 — JOURNAL
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1c1917]">
            Editorial Writings & Reflections
          </h2>
          <p className="text-base font-sans text-[#57534e] leading-relaxed">
            Essays on engineering trade-offs, human psychology, sales lessons, and strategic business decisions. Click any article card to preview or read full essay.
          </p>
        </div>

        {/* Category Filter Badges */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[#e7e5e4]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-mono rounded-sm transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#c2410c] text-white font-bold shadow-sm'
                  : 'bg-[#f5f2eb] text-[#78716c] hover:text-[#1c1917] border border-[#e7e5e4]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Cards Grid with Smooth Layout Reordering */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article) => (
              <motion.div
                key={article.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveArticle(article)}
                className="bg-[#ffffff] border border-[#e7e5e4] hover:border-[#c2410c]/60 p-6 rounded-sm cursor-pointer flex flex-col justify-between transition-all shadow-sm hover:shadow-md group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#b45309] font-bold uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-[#78716c] flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#1c1917] group-hover:text-[#c2410c] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs font-mono text-[#78716c] mt-1">
                      {article.date}
                    </p>
                  </div>

                  <p className="text-xs font-sans text-[#57534e] leading-relaxed line-clamp-3">
                    {article.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e7e5e4] flex items-center justify-between text-xs font-mono font-bold">
                  <span className="text-[#78716c] group-hover:text-[#c2410c] transition-colors">PREVIEW</span>
                  <button
                    onClick={(e) => handleReadFullArticle(article.slug, e)}
                    className="px-3 py-1.5 bg-[#c2410c] text-white rounded-sm hover:bg-[#9a3412] transition-colors flex items-center space-x-1 shadow-sm"
                  >
                    <span>READ ARTICLE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <Modal
          isOpen={!!activeArticle}
          onClose={() => setActiveArticle(null)}
          title={activeArticle.title}
          category={`${activeArticle.category} · ${activeArticle.date} · ${activeArticle.readTime}`}
        >
          <div className="space-y-6">
            {activeArticle.image && (
              <EditorialPhoto
                src={activeArticle.image}
                alt={activeArticle.title}
                label={`JOURNAL // ${activeArticle.category}`}
                caption={activeArticle.imageCaption}
                aspectRatio="aspect-[16/9]"
              />
            )}

            <p className="text-sm font-mono text-[#c2410c] italic font-semibold border-l-2 border-[#c2410c] pl-3 py-1 bg-[#f5f2eb]">
              "{activeArticle.description}"
            </p>

            <div className="space-y-4 pt-2 border-t border-[#e7e5e4]">
              {activeArticle.content.map((p, idx) => (
                <p key={idx} className="text-sm font-sans leading-relaxed text-[#44403c]">
                  {p}
                </p>
              ))}
            </div>

            <div className="pt-6 border-t border-[#e7e5e4] flex items-center justify-between">
              <span className="text-xs font-mono text-[#78716c]">
                FULL ESSAY AVAILABLE
              </span>
              <button
                onClick={() => handleReadFullArticle(activeArticle.slug)}
                className="px-4 py-2 bg-[#c2410c] text-white text-xs font-mono font-bold rounded-sm hover:bg-[#9a3412] transition-colors flex items-center space-x-2 shadow-sm"
              >
                <span>OPEN FULL ARTICLE PAGE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
