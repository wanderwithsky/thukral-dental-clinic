import React from 'react';
import { Image as ImageIcon, Play } from 'lucide-react';

interface MediaPlaceholderProps {
  label: string;
  sublabel?: string;
  aspectRatio?: string;
  className?: string;
  type?: 'image' | 'video';
  previewSrc?: string;
  objectPosition?: string;
  onPlayClick?: () => void;
}

export const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({
  label,
  sublabel,
  aspectRatio = 'aspect-[16/10]',
  className = '',
  type = 'image',
  previewSrc,
  objectPosition = 'object-center',
  onPlayClick,
}) => {
  return (
    <div
      className={`relative w-full ${aspectRatio} rounded-2xl overflow-hidden border border-border/80 bg-background-secondary/90 shadow-sm transition-all duration-500 hover:border-primary/40 hover:shadow-md flex flex-col items-center justify-center p-6 text-center group ${className}`}
    >
      {previewSrc ? (
        <>
          <img
            src={previewSrc}
            alt={label}
            className={`w-full h-full object-cover ${objectPosition} transition-transform duration-700 group-hover:scale-105`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </>
      ) : (
        <>
          {/* Subtle decorative background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-primary/[0.08] pointer-events-none" />

          {/* Soft inner vignette/frame */}
          <div className="absolute inset-2 md:inset-3 rounded-xl border border-dashed border-border/70 pointer-events-none group-hover:border-primary/30 transition-colors" />

          <div className="relative z-10 flex flex-col items-center max-w-sm px-4">
            {type === 'video' ? (
              <div
                onClick={onPlayClick}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-sm cursor-pointer"
                aria-label="Play video placeholder"
              >
                <Play size={22} className="ml-1 text-primary fill-primary/20" />
              </div>
            ) : (
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105 shadow-sm">
                <ImageIcon size={22} />
              </div>
            )}

            <span className="text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-primary/80 mb-1.5 block">
              {type === 'video' ? 'Video Asset' : 'Media Asset'}
            </span>

            <p className="font-serif text-text font-medium text-base md:text-lg leading-snug">
              {label}
            </p>

            {sublabel && (
              <p className="text-xs md:text-sm text-text-muted font-light mt-1.5 leading-relaxed">
                {sublabel}
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default MediaPlaceholder;
