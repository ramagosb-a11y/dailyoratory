"use client";

import React, { useState, useEffect, useRef } from 'react';
import { LitanyData } from './types';
import { PrayerSection } from './PrayerSection';
import { PrayerNavigation } from './PrayerNavigation';
import { Invocation } from './Invocation';
import { PrayerResponse } from './PrayerResponse';
import { SilenceTimer } from './SilenceTimer';
import { sacredHeartHeroImg } from './data/litanyImages';

interface PrayerExperienceProps {
  litany: LitanyData;
  onExit: () => void;
}

export const PrayerExperience: React.FC<PrayerExperienceProps> = ({
  litany,
  onExit,
}) => {
  // Step 0: Intro screen
  // Step 1: Opening section ("In the Presence of God")
  // Step 2 to (N + 1): Contemplative Sections 1 to N
  // Step (N + 2): Concluding prayer ("Lamb of God" & Collect)
  // Step (N + 3): Final Silence screen
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [showAboutPrayer, setShowAboutPrayer] = useState<boolean>(false);
  const prayerTextRef = useRef<HTMLDivElement>(null);

  const sectionCount = litany.sections.length;
  const closingStep = sectionCount + 2;
  const silenceStep = sectionCount + 3;
  const totalPrayerSteps = closingStep; // Steps 1 to closingStep are the active interactive steps

  const responseVariant = litany.colorTheme.responseVariant || 'burgundy';
  const heroImage = litany.heroImage || sacredHeartHeroImg;

  // Scroll to top on step change
  useEffect(() => {
    // On movement changes, keep the reader at the prayer text on mobile.
    // The image is intentionally first in the responsive layout, but advancing
    // should never make the reader hunt for the invocation again.
    if (currentStep >= 2 && currentStep <= sectionCount + 1) {
      requestAnimationFrame(() => {
        prayerTextRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStep, sectionCount]);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, silenceStep));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 60 && currentStep >= 1 && currentStep <= closingStep) {
      // Swiped left -> next
      handleNext();
    } else if (diff < -60 && currentStep > 1 && currentStep <= closingStep) {
      // Swiped right -> previous
      handlePrevious();
    }
    setTouchStartX(null);
  };

  // If on final silence screen, render quiet dark contemplative experience
  if (currentStep === silenceStep) {
    return (
      <div className="min-h-screen bg-[#0D2038] text-[#FFFDF7] flex flex-col justify-between">
        {/* Subtle top header */}
        <div className="w-full max-w-4xl mx-auto px-4 py-4 flex items-center justify-between text-xs text-[#F3EAD8]/60 border-b border-[#162E4E]">
          <span className="font-serif tracking-widest uppercase">Sacred Silence</span>
          <button
            onClick={onExit}
            className="hover:text-[#FFFDF7] transition-colors focus:outline-hidden"
          >
            Exit Prayer
          </button>
        </div>

        <SilenceTimer
          title={litany.silenceTitle || 'Remain with the Heart of Jesus.'}
          subtitle={litany.silenceSubtitle || 'No more words are needed.'}
          onPrayAgain={handleReset}
          onReturnToLitanies={onExit}
        />

        <div className="py-4 text-center text-xs text-[#F3EAD8]/30 font-serif">
          Daily Oratory · Contemplative Litanies
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-between bg-[#FFFDF7] text-[#0D2038]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Step 0: Intro Screen */}
      {currentStep === 0 && (
        <div className="relative max-w-2xl mx-4 sm:mx-auto my-5 sm:my-10 px-5 sm:px-10 py-12 sm:py-20 flex-1 flex flex-col items-center justify-center text-center animate-prayer-fade rounded-[1.75rem] border-2 border-[#BD8A2F] bg-[#FFFDF7] shadow-[0_18px_55px_rgba(13,32,56,0.16)] ring-1 ring-[#D8CDB9]">
          <div className="absolute inset-2 rounded-[1.35rem] border border-[#BD8A2F]/55 pointer-events-none" aria-hidden="true" />
          {/* Sacred Art centerpiece */}
          <div className="relative group mb-8">
            <div className="absolute -inset-3 rounded-2xl border border-[#BD8A2F]/40 pointer-events-none" />
            <div className="w-36 h-48 sm:w-44 sm:h-60 rounded-xl overflow-hidden border border-[#D8CDB9] shadow-2xl bg-[#E5DCC8]">
              <img
                src={heroImage}
                alt={litany.heroImageAlt || litany.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <span className="block text-xs font-semibold tracking-[0.35em] text-[#BD8A2F] uppercase mb-3">
            {litany.eyebrow}
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0D2038] font-normal leading-tight mb-4">
            {litany.title}
          </h1>

          {litany.subtitle && (
            <p className="text-xs uppercase tracking-[0.25em] text-[#0D2038]/60 font-medium mb-4">
              {litany.subtitle}
            </p>
          )}

          <div className="my-6 max-w-xl mx-auto px-6 py-4 border-y border-[#D8CDB9]/60">
            <p className="font-serif italic text-lg sm:text-xl text-[#0D2038]/80 leading-relaxed">
              &ldquo;{litany.introduction}&rdquo;
            </p>
          </div>

          <button
            onClick={() => setCurrentStep(1)}
            className="mt-2 px-10 py-4 rounded-full bg-[#0D2038] text-[#FFFDF7] text-xs uppercase tracking-[0.25em] font-semibold hover:bg-opacity-95 shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 active:scale-98"
          >
            <span>Begin the Litany</span>
            <svg className="w-4 h-4 text-[#BD8A2F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Subtle "About this prayer" Drawer / Details */}
          <div className="mt-12 w-full max-w-lg text-left pt-6 border-t border-[#D8CDB9]/50">
            <button
              onClick={() => setShowAboutPrayer(!showAboutPrayer)}
              className="w-full flex items-center justify-between text-xs uppercase tracking-widest text-[#0D2038]/60 hover:text-[#0D2038] font-medium py-2 focus:outline-hidden transition-colors"
            >
              <span>About this prayer</span>
              <svg
                className={`w-3.5 h-3.5 text-[#BD8A2F] transition-transform duration-200 ${showAboutPrayer ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {showAboutPrayer && (
              <div className="mt-3 p-4 rounded-xl bg-[#F3EAD8]/50 border border-[#D8CDB9] text-xs text-[#0D2038]/80 space-y-2.5 animate-prayer-fade font-sans leading-relaxed">
                <div>
                  <span className="font-semibold uppercase tracking-wider text-[#BD8A2F] text-[10px] block mb-0.5">
                    Source & Origin
                  </span>
                  <p>{litany.source}</p>
                </div>

                {litany.editorialNote && (
                  <div>
                    <span className="font-semibold uppercase tracking-wider text-[#BD8A2F] text-[10px] block mb-0.5">
                      Historical Context
                    </span>
                    <p>{litany.editorialNote}</p>
                  </div>
                )}

                <div>
                  <span className="font-semibold uppercase tracking-wider text-[#BD8A2F] text-[10px] block mb-0.5">
                    Copyright & Usage
                  </span>
                  <p>{litany.copyrightStatus}</p>
                </div>

                {litany.indulgenceNote && (
                  <div>
                    <span className="font-semibold uppercase tracking-wider text-[#BD8A2F] text-[10px] block mb-0.5">
                      Indulgence Information
                    </span>
                    <p>{litany.indulgenceNote}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Step 1: Opening Section ("In the Presence of God") */}
      {currentStep === 1 && (
        <div className="relative max-w-3xl mx-4 sm:mx-auto my-5 sm:my-10 px-5 sm:px-10 py-10 sm:py-16 flex-1 w-[calc(100%-2rem)] animate-prayer-fade rounded-[1.75rem] border-2 border-[#BD8A2F] bg-[#FFFDF7]/96 shadow-[0_18px_55px_rgba(13,32,56,0.16)] ring-1 ring-[#D8CDB9]">
          <div className="absolute inset-2 rounded-[1.35rem] border border-[#BD8A2F]/55 pointer-events-none" aria-hidden="true" />
          <div className="text-center mb-10 pb-6 border-b border-[#D8CDB9]">
            <span className="block text-xs font-semibold tracking-[0.3em] text-[#BD8A2F] uppercase mb-2">
              Opening Invocation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0D2038] font-normal tracking-tight mb-2">
              {litany.opening.title}
            </h2>
            <p className="text-sm font-serif italic text-[#0D2038]/70">
              Gather your thoughts into the stillness of God’s presence.
            </p>
          </div>

          {/* Kyrie & Trinity in open, reverent layout */}
          <div className="space-y-10 max-w-lg mx-auto">
            {/* Kyrie Eleison */}
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#BD8A2F] font-semibold mb-4 text-center">
                Kyrie
              </div>
              <div className="space-y-4">
                {litany.opening.kyrie.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-[#D8CDB9]/40 gap-1 sm:gap-4">
                    <span className="font-serif text-lg text-[#0D2038]">{item.prompt}</span>
                    <PrayerResponse text={item.response} variant={responseVariant} />
                  </div>
                ))}
              </div>
            </div>

            {/* Invocations to the Holy Trinity */}
            <div className="pt-4">
              <div className="text-xs uppercase tracking-[0.25em] text-[#BD8A2F] font-semibold mb-4 text-center">
                The Most Holy Trinity
              </div>
              <div className="space-y-3">
                {litany.opening.trinity.map((item, idx) => (
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
      )}

      {/* Steps 2 through (N + 1): Contemplative Sections */}
      {currentStep >= 2 && currentStep <= (sectionCount + 1) && (
        <div key={currentStep} className="flex-1 w-full flex items-center">
          <PrayerSection
            section={litany.sections[currentStep - 2]}
            totalSections={sectionCount}
            colorTheme={litany.colorTheme}
            prayerTextRef={prayerTextRef}
          />
        </div>
      )}

      {/* Step (N + 2): Concluding Prayer ("Lamb of God" & Collect) */}
      {currentStep === closingStep && (
        <div className="max-w-2xl mx-auto px-4 sm:px-8 py-10 sm:py-16 flex-1 w-full animate-prayer-fade">
          <div className="text-center mb-10 pb-6 border-b border-[#D8CDB9]">
            <span className="block text-xs font-semibold tracking-[0.3em] text-[#BD8A2F] uppercase mb-2">
              Concluding Prayer
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0D2038] font-normal tracking-tight mb-2">
              {litany.closing.title}
            </h2>
            <p className="text-sm font-serif italic text-[#0D2038]/70">
              Agnus Dei, versicle, and closing collect.
            </p>
          </div>

          <div className="space-y-8 max-w-lg mx-auto">
            {/* Agnus Dei */}
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.25em] text-[#BD8A2F] font-semibold mb-2 text-center">
                Agnus Dei
              </div>
              <div className="space-y-3 divide-y divide-[#D8CDB9]/30">
                {litany.closing.agnusDei.map((item, idx) => (
                  <div key={idx} className="pt-3 first:pt-0">
                    <p className="font-serif text-lg text-[#0D2038]">
                      {item.prompt}
                    </p>
                    <div className="mt-1 pl-4 border-l-2 border-[#BD8A2F]/40">
                      <PrayerResponse text={item.response} variant={responseVariant} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Versicle and Response */}
            {litany.closing.versicle && (
              <div className="py-6 px-6 rounded-2xl bg-[#F3EAD8]/70 border border-[#D8CDB9] my-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-lg font-serif text-[#0D2038]">
                    <span className="text-[#BD8A2F] font-bold not-italic">℣.</span>
                    <span>{litany.closing.versicle.prompt.replace(/^[Vv]\.\s*/, '')}</span>
                  </div>
                  <div className="flex items-start gap-3 text-lg font-serif">
                    <span className="text-[#BD8A2F] font-bold not-italic">℟.</span>
                    <span className="italic font-medium">
                      <PrayerResponse text={litany.closing.versicle.response.replace(/^[Rr]\.\s*/, '')} variant={responseVariant} />
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Collect / Let Us Pray */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFDF7] border-l-4 border-[#BD8A2F] border border-[#D8CDB9] shadow-sm">
              <div className="text-xs uppercase tracking-[0.25em] text-[#BD8A2F] font-semibold mb-3">
                {litany.closing.collect.heading}
              </div>
              <p className="font-serif italic text-lg sm:text-xl text-[#0D2038] leading-relaxed mb-4">
                &ldquo;{litany.closing.collect.prayer}&rdquo;
              </p>
              <div className="font-serif italic text-base text-[#BD8A2F] font-semibold text-right">
                {litany.closing.collect.amen}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Footer (Steps 1 through closingStep) */}
      {currentStep >= 1 && currentStep <= closingStep && (
        <footer className="border-t border-[#D8CDB9] bg-[#FFFDF7] sticky bottom-0 z-20">
          <PrayerNavigation
            currentStep={currentStep}
            totalSteps={totalPrayerSteps}
            sectionCount={sectionCount}
            onPrevious={handlePrevious}
            onNext={handleNext}
            canPrevious={currentStep > 0}
            nextLabel={currentStep === closingStep ? 'Enter Silence' : 'Continue'}
            previousLabel="Previous"
          />
        </footer>
      )}
    </div>
  );
};
