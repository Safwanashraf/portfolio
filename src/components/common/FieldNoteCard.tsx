import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronDown, Sparkles } from 'lucide-react';

export interface FieldNote {
  id: string;
  number: string;
  quote: string;
  context: string;
  experienceSource: string;
  year: string;
}

interface FieldNoteCardProps {
  note: FieldNote;
  className?: string;
}

export const FieldNoteCard: React.FC<FieldNoteCardProps> = ({ note, className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsExpanded(!isExpanded);
        }
      }}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      className={`group cursor-pointer bg-[#ffffff] border border-[#e7e5e4] hover:border-[#c2410c] p-6 rounded-sm transition-all duration-300 shadow-sm hover:shadow-md ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="px-2 py-0.5 text-[10px] font-mono font-bold tracking-widest text-[#c2410c] bg-[#ffedd5] border border-[#fed7aa] rounded-sm uppercase">
            FIELD NOTE / {note.number}
          </span>
          <span className="text-[10px] font-mono text-[#78716c]">
            {note.year}
          </span>
        </div>

        <span className="text-xs font-mono text-[#78716c] group-hover:text-[#c2410c] flex items-center space-x-1 transition-colors">
          <span>{isExpanded ? 'CLOSE' : 'DISCOVER CONTEXT'}</span>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </span>
      </div>

      <blockquote className="text-base sm:text-lg font-serif italic text-[#1c1917] leading-relaxed">
        "{note.quote}"
      </blockquote>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-[#e7e5e4] space-y-2">
              <div className="flex items-center space-x-1.5 text-[10px] font-mono text-[#c2410c] font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                <span>THOUGHT → MEMORY → EXPERIENCE</span>
              </div>
              <p className="text-xs font-sans text-[#57534e] leading-relaxed">
                {note.context}
              </p>
              <p className="text-[11px] font-mono text-[#1c1917] font-semibold pt-1">
                Source: {note.experienceSource}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
