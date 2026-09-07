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
      className={`group cursor-pointer bg-[#F8F7F4] dark:bg-[#1C1F26] border border-[#D1D1C7] dark:border-[#2D3139] hover:border-[#0047FF] dark:hover:border-[#0047FF] p-6 rounded-sm transition-all duration-300 shadow-sm hover:shadow-md ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="px-2 py-0.5 text-[10px] font-mono font-bold tracking-widest text-[#0047FF] dark:text-[#3B82F6] bg-[#0047FF]/10 dark:bg-[#0047FF]/20 border border-[#0047FF]/20 rounded-sm uppercase">
            FIELD NOTE / {note.number}
          </span>
          <span className="text-[10px] font-mono text-[#5A5A5A] dark:text-[#A0A0A0]">
            {note.year}
          </span>
        </div>

        <span className="text-xs font-mono text-[#5A5A5A] group-hover:text-[#0047FF] dark:group-hover:text-white flex items-center space-x-1 transition-colors">
          <span>{isExpanded ? 'CLOSE' : 'DISCOVER CONTEXT'}</span>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </span>
      </div>

      <blockquote className="text-base sm:text-lg font-editorial italic text-[#121316] dark:text-[#EAEAEA] leading-relaxed">
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
            <div className="mt-4 pt-4 border-t border-[#E5E4DE] dark:border-[#2D3139] space-y-2">
              <div className="flex items-center space-x-1.5 text-[10px] font-mono text-[#0047FF] dark:text-[#3B82F6] font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                <span>THOUGHT → MEMORY → EXPERIENCE</span>
              </div>
              <p className="text-xs font-sans text-[#5A5A5A] dark:text-[#A0A0A0] leading-relaxed">
                {note.context}
              </p>
              <p className="text-[11px] font-mono text-[#121316] dark:text-[#EAEAEA] font-semibold pt-1">
                Source: {note.experienceSource}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
