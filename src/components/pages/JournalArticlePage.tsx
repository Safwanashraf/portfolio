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
    <div className="min-h-screen bg-[#faf9f5] text-[#1c1917] pt-24 pb-20 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between border-b border-[#e7e5e4] pb-6 font-mono text-xs">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center space-x-2 text-[#c2410c] hover:text-[#9a3412] hover:underline font-bold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← RETURN TO PORTFOLIO / JOURNAL</span>
          </button>

          <span className="text-[#78716c] uppercase tracking-wider hidden sm:inline font-mono">
            EDITORIAL JOURNAL // {article.category}
          </span>
        </div>

        {/* Article Header */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-2.5 py-1 bg-[#ffedd5] text-[#c2410c] border border-[#fed7aa] font-bold rounded-sm uppercase tracking-widest">
              {article.category}
            </span>
            <span className="text-[#78716c] flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </span>
            <span className="text-[#a8a29e]">•</span>
            <span className="text-[#78716c] flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg font-serif italic text-[#57534e] leading-relaxed border-l-2 border-[#c2410c] pl-4 py-1">
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
        <article className="space-y-6 pt-4 text-base font-sans leading-relaxed text-[#292524]">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Key Reflection / Takeaway Callout */}
        {article.takeaway && (
          <div className="p-6 bg-[#f5f2eb] border-l-4 border-[#c2410c] border-y border-r border-[#e7e5e4] rounded-sm space-y-3 shadow-sm my-8">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#c2410c] font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>KEY REFLECTION & TAKEAWAY</span>
            </div>
            <p className="text-base font-serif italic text-[#1c1917] leading-relaxed font-semibold">
              "{article.takeaway}"
            </p>
          </div>
        )}

        {/* Prev / Next Article Navigation */}
        <div className="pt-8 border-t border-[#e7e5e4] grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
          {prevArticle ? (
            <button
              onClick={() => onNavigateToArticle(prevArticle.slug)}
              className="p-4 bg-[#ffffff] border border-[#e7e5e4] hover:border-[#c2410c] rounded-sm text-left transition-colors space-y-1 group shadow-sm"
            >
              <span className="text-[#78716c] uppercase text-[10px] tracking-wider block">← PREVIOUS ESSAY</span>
              <span className="text-[#1c1917] font-bold group-hover:text-[#c2410c] line-clamp-1 transition-colors">
                {prevArticle.title}
              </span>
            </button>
          ) : <div />}

          {nextArticle ? (
            <button
              onClick={() => onNavigateToArticle(nextArticle.slug)}
              className="p-4 bg-[#ffffff] border border-[#e7e5e4] hover:border-[#c2410c] rounded-sm text-right transition-colors space-y-1 group shadow-sm"
            >
              <span className="text-[#78716c] uppercase text-[10px] tracking-wider block">NEXT ESSAY →</span>
              <span className="text-[#1c1917] font-bold group-hover:text-[#c2410c] line-clamp-1 transition-colors">
                {nextArticle.title}
              </span>
            </button>
          ) : <div />}
        </div>

        {/* Related Articles Section */}
        <div className="pt-12 border-t border-[#e7e5e4] space-y-6">
          <h3 className="text-2xl font-serif font-bold tracking-tight text-[#1c1917]">
            More Journal Writings & Reflections
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedArticles.map((rel) => (
              <div
                key={rel.slug}
                onClick={() => onNavigateToArticle(rel.slug)}
                className="p-4 bg-[#ffffff] border border-[#e7e5e4] hover:border-[#c2410c] rounded-sm cursor-pointer transition-colors space-y-3 flex flex-col justify-between group shadow-sm"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-[#c2410c] font-bold uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-serif font-bold text-[#1c1917] group-hover:text-[#c2410c] line-clamp-2 transition-colors">
                    {rel.title}
                  </h4>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-[#78716c]">
                  <span>{rel.readTime}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-[#c2410c]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Return to Portfolio Button */}
        <div className="text-center pt-8">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center space-x-2 px-6 py-3.5 text-xs font-mono font-bold tracking-widest text-white bg-[#c2410c] hover:bg-[#9a3412] transition-colors rounded-sm shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO MAIN PORTFOLIO</span>
          </button>
        </div>
      </div>
    </div>
  );
};
