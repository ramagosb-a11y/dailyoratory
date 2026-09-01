"use client";

import React, { useEffect } from 'react';

interface PrayerNavigationProps {
  currentStep: number;
  totalSteps: number;
  sectionCount?: number;
  onPrevious: () => void;
  onNext: () => void;
  canPrevious: boolean;
  nextLabel?: string;
  previousLabel?: string;
}

export const PrayerNavigation: React.FC<PrayerNavigationProps> = ({
  currentStep,
  totalSteps,
  sectionCount = 8,
  onPrevious,
  onNext,
  canPrevious,
  nextLabel = 'Continue',
  previousLabel = 'Previous',
}) => {
  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        onNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (canPrevious) {
          e.preventDefault();
          onPrevious();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrevious, canPrevious]);

  // Step label computation
  const getStepTitle = () => {
    if (currentStep === 1) return 'Opening Invocation';
    const movementIndex = currentStep - 1;
    if (movementIndex >= 1 && movementIndex <= sectionCount) {
      return `Movement ${movementIndex} of ${sectionCount}`;
    }
    if (currentStep === sectionCount + 2) return 'Concluding Prayer';
    return '';
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">
      {/* Contemplative Movement Marker */}
      <div className="flex basis-full sm:basis-auto items-center justify-center sm:justify-start gap-3 min-w-0">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {Array.from({ length: sectionCount }).map((_, i) => {
            const movementStepNumber = i + 2; // Steps 2 through (sectionCount + 1)
            const isActive = currentStep === movementStepNumber;
            const isCompleted = currentStep > movementStepNumber;
            return (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-4 bg-[#BD8A2F]'
                    : isCompleted
                    ? 'w-1.5 bg-[#0D2038]/40'
                    : 'w-1.5 bg-[#D8CDB9]'
                }`}
              />
            );
          })}
        </div>
        <span className="text-xs font-serif italic text-[#0D2038]/60 tracking-wider hidden sm:inline-block">
          {getStepTitle()}
        </span>
      </div>

      {/* Action Navigation Buttons */}
      <div className="flex basis-full sm:basis-auto justify-end items-center gap-2 sm:gap-3">
        {canPrevious && (
          <button
            onClick={onPrevious}
            className="flex-1 sm:flex-none px-3 sm:px-6 py-2.5 rounded-full border border-[#D8CDB9] text-[11px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-widest font-medium text-[#0D2038]/80 hover:bg-[#F3EAD8] hover:text-[#0D2038] transition-colors focus:outline-hidden whitespace-nowrap"
            aria-label="Previous prayer movement"
          >
            {previousLabel}
          </button>
        )}

        <button
          onClick={onNext}
          className="flex-1 sm:flex-none px-3 sm:px-8 py-2.5 rounded-full bg-[#0D2038] text-[#FFFDF7] text-[11px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-widest font-semibold hover:bg-opacity-90 shadow-md hover:shadow-lg transition-all focus:outline-hidden flex items-center justify-center gap-2 whitespace-nowrap"
          aria-label="Continue to next prayer movement"
        >
          <span>{nextLabel}</span>
          <svg className="w-3.5 h-3.5 text-[#BD8A2F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};
