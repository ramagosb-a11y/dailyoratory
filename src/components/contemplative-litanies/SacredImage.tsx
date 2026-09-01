"use client";

import React, { useState } from 'react';

interface SacredImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'portrait' | 'square' | 'wide' | 'altar';
}

export const SacredImage: React.FC<SacredImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'portrait',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const ratioClass =
    aspectRatio === 'portrait'
      ? 'aspect-[3/4] sm:aspect-[4/5]'
      : aspectRatio === 'square'
      ? 'aspect-square'
      : aspectRatio === 'altar'
      ? 'aspect-[4/3] sm:aspect-[3/2]'
      : 'aspect-[16/9]';

  return (
    <div className={`relative group ${className}`}>
      {/* Outer subtle gold rule border */}
      <div className="absolute -inset-2 sm:-inset-2.5 rounded-2xl border border-[#BD8A2F]/35 pointer-events-none transition-all group-hover:border-[#BD8A2F]/60" />

      <div
        className={`relative w-full overflow-hidden rounded-xl bg-[#E5DCC8] border border-[#D8CDB9] shadow-xl ${ratioClass}`}
      >
        {/* Subtle divine golden wash overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 pointer-events-none z-10" />

        {/* Decorative inner delicate gold frame */}
        <div className="absolute inset-2 sm:inset-2.5 rounded-lg border border-[#BD8A2F]/30 pointer-events-none z-10" />

        {!hasError ? (
          <>
            {!isLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F3EAD8] text-[#BD8A2F] p-4 text-center">
                <svg
                  className="w-8 h-8 animate-pulse text-[#BD8A2F]/60 mb-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 2v20M5 8h14" strokeLinecap="round" />
                </svg>
                <span className="text-xs uppercase tracking-widest text-[#0D2038]/50 font-serif">
                  Sacred Art
                </span>
              </div>
            )}
            <img
              src={src}
              alt={alt}
              referrerPolicy="no-referrer"
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
              className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </>
        ) : (
          /* Fallback parchment plaque */
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#F3EAD8] text-[#0D2038]">
            <div className="w-12 h-12 rounded-full border border-[#BD8A2F]/40 flex items-center justify-center mb-3 text-[#BD8A2F]">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3v18M6 8h12" strokeLinecap="round" />
              </svg>
            </div>
            <p className="font-serif text-lg text-[#0D2038] tracking-wide mb-1">
              Sacred Heart of Jesus
            </p>
            <p className="text-xs text-[#0D2038]/60 max-w-xs font-sans italic">
              {alt}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
