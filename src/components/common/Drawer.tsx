import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1c1917]/70 backdrop-blur-sm"
          />

          {/* Slide-over Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative w-full max-w-2xl h-full bg-[#faf9f5] border-l border-[#e7e5e4] shadow-2xl flex flex-col z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#e7e5e4] bg-[#f5f2eb]">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#1c1917]">
                  {title}
                </h3>
                {subtitle && (
                  <p className="text-xs font-mono text-[#78716c] mt-0.5">
                    {subtitle}
                  </p>
                )}
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full text-[#78716c] hover:text-[#1c1917] hover:bg-[#e7e5e4] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c2410c]"
                aria-label="Close panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 font-sans leading-relaxed text-[#292524]">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
