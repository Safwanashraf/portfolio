import React, { useEffect } from 'react';
import { journalArticles, JournalArticle } from '../../data/journalData';
import { EditorialPhoto } from '../common/EditorialPhoto';
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight, Quote, Sparkles } from 'lucide-react';

interface JournalArticlePageProps {
  slug: string;
  onNavigateHome: () => void;
  onNavigateToArticle: (slug: string) => void;
}

export const JournalArticlePage: React.FC<JournalArticlePageProps> = ({
  slug,
  onNavigateHome,
  onNavigateToArticle,
}) => {
  const currentIdx = journalArticles.findIndex(a => a.slug === slug);
  const article = journalArticles[currentIdx] || journalArticles[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const prevArticle = currentIdx > 0 ? journalArticles[currentIdx - 1] : null;
  const nextArticle = currentIdx < journalArticles.length - 1 ? journalArticles[currentIdx + 1] : null;

  const relatedArticles = journalArticles.filter(a => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F8F7F4] dark:bg-[#121316] text-[#1A1A1A] dark:text-[#EAEAEA] pt-24 pb-20 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between border-b border-[#E5E4DE] dark:border-[#2D3139] pb-6 font-mono text-xs">
          <a
            href="#journal"
            className="inline-flex items-center space-x-2 text-[#0047FF] dark:text-[#3B82F6] hover:underline font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← RETURN TO PORTFOLIO / JOURNAL</span>
          </a>

          <span className="text-[#5A5A5A] uppercase tracking-wider hidden sm:inline">
            EDITORIAL JOURNAL // {article.category}
          </span>
        </div>

        {/* Article Header */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-2.5 py-1 bg-[#0047FF] text-white font-bold rounded-sm uppercase tracking-widest">
              {article.category}
            </span>
            <span className="text-[#5A5A5A] flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </span>
            <span className="text-[#5A5A5A]">•</span>
            <span className="text-[#5A5A5A] flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[#121316] dark:text-white leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg font-sans italic text-[#5A5A5A] dark:text-[#A0A0A0] leading-relaxed border-l-2 border-[#0047FF] pl-4 py-1">
            "{article.description}"
          </p>
        </header>

        {/* Large Editorial Visual / Artifact Placeholder */}
        {article.image && (
          <div className="my-8">
            <EditorialPhoto
              src={article.image}
              alt={article.title}
              label={`JOURNAL ARTIFACT // ${article.category}`}
              caption={article.imageCaption}
              aspectRatio="aspect-[16/9]"
            />
          </div>
        )}

        {/* Article Full Paragraphs */}
        <article className="space-y-6 pt-4 text-base font-sans leading-relaxed text-[#2A2A2A] dark:text-[#D8D8D8]">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Key Reflection / Takeaway Callout */}
        {article.takeaway && (
          <div className="p-6 bg-[#F1F0EC] dark:bg-[#1C1F26] border-2 border-[#0047FF] rounded-sm space-y-3 shadow-md my-8">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#0047FF] dark:text-[#3B82F6] font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>KEY REFLECTION & TAKEAWAY</span>
            </div>
            <p className="text-sm font-editorial italic text-[#121316] dark:text-white leading-relaxed font-semibold">
              "{article.takeaway}"
            </p>
          </div>
        )}

        {/* Prev / Next Article Navigation */}
        <div className="pt-8 border-t border-[#E5E4DE] dark:border-[#2D3139] grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
          {prevArticle ? (
            <button
              onClick={() => onNavigateToArticle(prevArticle.slug)}
              className="p-4 bg-[#F1F0EC] dark:bg-[#1A1C20] border border-[#D1D1C7] dark:border-[#2D3139] hover:border-[#0047FF] rounded-sm text-left transition-colors space-y-1 group"
            >
              <span className="text-[#5A5A5A] uppercase text-[10px] tracking-wider block">← PREVIOUS ESSAY</span>
              <span className="text-[#121316] dark:text-white font-bold group-hover:text-[#0047FF] line-clamp-1">
                {prevArticle.title}
              </span>
            </button>
          ) : <div />}

          {nextArticle ? (
            <button
              onClick={() => onNavigateToArticle(nextArticle.slug)}
              className="p-4 bg-[#F1F0EC] dark:bg-[#1A1C20] border border-[#D1D1C7] dark:border-[#2D3139] hover:border-[#0047FF] rounded-sm text-right transition-colors space-y-1 group"
            >
              <span className="text-[#5A5A5A] uppercase text-[10px] tracking-wider block">NEXT ESSAY →</span>
              <span className="text-[#121316] dark:text-white font-bold group-hover:text-[#0047FF] line-clamp-1">
                {nextArticle.title}
              </span>
            </button>
          ) : <div />}
        </div>

        {/* Related Articles Section */}
        <div className="pt-12 border-t border-[#E5E4DE] dark:border-[#2D3139] space-y-6">
          <h3 className="text-xl font-display font-bold text-[#121316] dark:text-white">
            More Journal Writings & Reflections
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedArticles.map((rel) => (
              <div
                key={rel.slug}
                onClick={() => onNavigateToArticle(rel.slug)}
                className="p-4 bg-[#F1F0EC] dark:bg-[#1A1C20] border border-[#D1D1C7] dark:border-[#2D3139] hover:border-[#0047FF] rounded-sm cursor-pointer transition-colors space-y-3 flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-[#0047FF] dark:text-[#3B82F6] font-bold uppercase">
                    {rel.category}
                  </span>
                  <h4 className="text-xs font-display font-bold text-[#121316] dark:text-white group-hover:text-[#0047FF] line-clamp-2">
                    {rel.title}
                  </h4>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-[#5A5A5A]">
                  <span>{rel.readTime}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-[#0047FF]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Return to Portfolio Button */}
        <div className="text-center pt-8">
          <a
            href="#journal"
            className="inline-flex items-center space-x-2 px-6 py-3.5 text-xs font-mono font-bold tracking-widest text-white bg-[#0047FF] hover:bg-[#0038CC] transition-colors rounded-sm shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO MAIN PORTFOLIO</span>
          </a>
        </div>
      </div>
    </div>
  );
};
