import React from 'react';
import { ContemplativeSection, LitanyColorTheme } from './types';
import { SacredImage } from './SacredImage';
import { Invocation } from './Invocation';
import { ResponseVariant } from './PrayerResponse';

interface PrayerSectionProps {
  section: ContemplativeSection;
  totalSections: number;
  colorTheme?: LitanyColorTheme;
  prayerTextRef?: React.RefObject<HTMLDivElement | null>;
}

export const PrayerSection: React.FC<PrayerSectionProps> = ({
  section,
  totalSections,
  colorTheme,
  prayerTextRef,
}) => {
  const responseVariant: ResponseVariant = colorTheme?.responseVariant || 'burgundy';

  return (
    <div
      className="relative w-full max-w-5xl mx-auto px-4 sm:px-8 py-6 sm:py-12 animate-prayer-fade bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${section.image})` }}
    >
      <div className="absolute inset-0 bg-[#FFFDF7]/78 sm:bg-[#FFFDF7]/70" aria-hidden="true" />
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        {/* Sacred Art Column */}
        <div className="hidden lg:block w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none lg:col-span-5 lg:sticky lg:top-24">
          <div className="p-3 sm:p-5 bg-[#F3EAD8]/80 rounded-2xl border border-[#D8CDB9] shadow-sm">
            <SacredImage
              src={section.image}
              alt={section.imageAlt}
              aspectRatio="portrait"
            />
          </div>
        </div>

        {/* Litany Text Column */}
        <div ref={prayerTextRef} className="w-full lg:col-span-7 flex flex-col justify-start scroll-mt-6 bg-[#FFFDF7]/80 rounded-2xl px-3 py-4 sm:px-5 sm:py-6 shadow-sm">
          {/* Header & Mystery Title */}
          <div className="mb-6 sm:mb-8 text-left">
            <span className="block text-xs font-semibold tracking-[0.28em] text-[#BD8A2F] uppercase mb-2">
              {section.eyebrow} · Movement {section.index} of {totalSections}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0D2038] font-normal leading-tight">
              {section.title}
            </h1>
            
            {/* Contemplation Meditation Text */}
            <div className="my-6 sm:my-8 pl-5 sm:pl-6 border-l-2 border-[#BD8A2F]/50">
              <p className="font-serif italic text-lg sm:text-xl text-[#0D2038]/80 leading-relaxed">
                &ldquo;{section.reflection}&rdquo;
              </p>
            </div>
          </div>

          {/* Litany Invocations with Generous Breathing Room */}
          <div className="space-y-2 sm:space-y-3 pt-2">
            {section.invocations.map((item, idx) => (
              <Invocation
                key={idx}
                prompt={item.prompt}
                response={item.response}
                responseVariant={responseVariant}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
