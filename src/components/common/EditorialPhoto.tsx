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
    <figure className={`relative group overflow-hidden rounded-sm border border-[#e7e5e4] bg-[#f5f2eb] ${className}`}>
      {/* Archival Header Label */}
      {(label || date) && (
        <div className="px-3 py-1.5 bg-[#f5f2eb] border-b border-[#e7e5e4] flex items-center justify-between text-[10px] font-mono text-[#78716c] uppercase tracking-wider font-semibold">
          <span className="flex items-center space-x-1.5">
            <Camera className="w-3 h-3 text-[#c2410c]" />
            <span>{label || 'HUMAN ARCHIVE'}</span>
          </span>
          {date && <span>{date}</span>}
        </div>
      )}

      {/* Image / Placeholder Container */}
      <div className={`relative w-full ${aspectRatio} overflow-hidden flex items-center justify-center bg-[#f5f2eb]`}>
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
          <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-b from-[#faf9f5] to-[#f5f2eb] text-center border-2 border-dashed border-[#c2410c]/30">
            <div className="flex items-center justify-between text-[9px] font-mono text-[#c2410c] uppercase font-bold tracking-widest">
              <span>TEMPORARY PLACEHOLDER</span>
              <span>SLOT READY</span>
            </div>

            <div className="my-auto space-y-2 py-4">
              <div className="w-10 h-10 mx-auto rounded-full bg-[#ffedd5] flex items-center justify-center text-[#c2410c]">
                <ImageIcon className="w-5 h-5" />
              </div>
              <p className="text-xs font-mono font-bold text-[#1c1917] tracking-tight break-all">
                {src}
              </p>
              <p className="text-[10px] font-mono text-[#78716c]">
                Replace with real photograph asset
              </p>
            </div>

            <div className="text-[9px] font-mono text-[#78716c] uppercase tracking-wider">
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
        <figcaption className="p-3 bg-[#ffffff] border-t border-[#e7e5e4] text-xs font-sans text-[#57534e] leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
