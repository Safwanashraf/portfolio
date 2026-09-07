import React, { useState } from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';

interface EditorialPhotoProps {
  src: string;
  alt: string;
  caption?: string;
  label?: string;
  date?: string;
  aspectRatio?: string; // e.g. 'aspect-[4/5]', 'aspect-[16/9]', 'aspect-[4/3]'
  className?: string;
  overlayGradient?: boolean;
}

export const EditorialPhoto: React.FC<EditorialPhotoProps> = ({
  src,
  alt,
  caption,
  label,
  date,
  aspectRatio = 'aspect-[4/3]',
  className = '',
  overlayGradient = false,
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <figure className={`relative group overflow-hidden rounded-sm border border-[#D1D1C7] dark:border-[#2D3139] bg-[#F1F0EC] dark:bg-[#16181D] ${className}`}>
      {/* Archival Header Label */}
      {(label || date) && (
        <div className="px-3 py-1.5 bg-[#E5E4DE] dark:bg-[#1F2228] border-b border-[#D1D1C7] dark:border-[#2D3139] flex items-center justify-between text-[10px] font-mono text-[#5A5A5A] dark:text-[#A0A0A0] uppercase tracking-wider font-semibold">
          <span className="flex items-center space-x-1.5">
            <Camera className="w-3 h-3 text-[#0047FF] dark:text-[#3B82F6]" />
            <span>{label || 'HUMAN ARCHIVE'}</span>
          </span>
          {date && <span>{date}</span>}
        </div>
      )}

      {/* Image / Placeholder Container */}
      <div className={`relative w-full ${aspectRatio} overflow-hidden flex items-center justify-center bg-[#E5E4DE]/50 dark:bg-[#121316]`}>
        {!imageError ? (
          <img
            src={src}
            alt={alt}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            loading="lazy"
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100 filter brightness-95 contrast-105' : 'opacity-0'
            }`}
          />
        ) : null}

        {/* Temporary Editorial Placeholder (Renders if image file is not found) */}
        {imageError && (
          <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-b from-[#F1F0EC] to-[#E5E4DE] dark:from-[#16181D] dark:to-[#121316] text-center border-2 border-dashed border-[#0047FF]/30 dark:border-[#3B82F6]/30">
            <div className="flex items-center justify-between text-[9px] font-mono text-[#0047FF] dark:text-[#3B82F6] uppercase font-bold tracking-widest">
              <span>TEMPORARY PLACEHOLDER</span>
              <span>SLOT READY</span>
            </div>

            <div className="my-auto space-y-2 py-4">
              <div className="w-10 h-10 mx-auto rounded-full bg-[#0047FF]/10 dark:bg-[#0047FF]/20 flex items-center justify-center text-[#0047FF] dark:text-[#3B82F6]">
                <ImageIcon className="w-5 h-5" />
              </div>
              <p className="text-xs font-mono font-bold text-[#121316] dark:text-white tracking-tight break-all">
                {src}
              </p>
              <p className="text-[10px] font-mono text-[#5A5A5A] dark:text-[#A0A0A0]">
                Replace with real photograph asset
              </p>
            </div>

            <div className="text-[9px] font-mono text-[#5A5A5A] dark:text-[#A0A0A0] uppercase tracking-wider">
              {alt}
            </div>
          </div>
        )}

        {overlayGradient && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        )}
      </div>

      {/* Caption Bar */}
      {caption && (
        <figcaption className="p-3 bg-[#F8F7F4] dark:bg-[#1C1F26] border-t border-[#E5E4DE] dark:border-[#2D3139] text-xs font-sans text-[#5A5A5A] dark:text-[#A0A0A0] leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
