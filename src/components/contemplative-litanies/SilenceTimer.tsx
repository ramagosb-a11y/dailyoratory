"use client";

import React, { useState, useEffect } from 'react';

interface SilenceTimerProps {
  onPrayAgain: () => void;
  onReturnToLitanies: () => void;
  title?: string;
  subtitle?: string;
}

export const SilenceTimer: React.FC<SilenceTimerProps> = ({
  onPrayAgain,
  onReturnToLitanies,
  title = 'Remain with the Heart of Jesus.',
  subtitle = 'No more words are needed.',
}) => {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(60);
  const [hasCompletedTimer, setHasCompletedTimer] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining((prev) => prev - 1);
      }, 1000);
    } else if (secondsRemaining === 0) {
      setIsTimerRunning(false);
      setHasCompletedTimer(true);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, secondsRemaining]);

  const handleStartTimer = () => {
    setSecondsRemaining(60);
    setHasCompletedTimer(false);
    setIsTimerRunning(true);
  };

  const handleCancelTimer = () => {
    setIsTimerRunning(false);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-12 text-[#FFFDF7]">
      {/* Glowing Sacred Symbol */}
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-full bg-[#162E4E]/80 border border-[#BD8A2F]/40 flex items-center justify-center shadow-[0_0_40px_rgba(189,138,47,0.25)] animate-subtle-glow">
          {/* Sacred Devotional Iconography */}
          <svg
            className="w-12 h-12 text-[#BD8A2F]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
          >
            {/* Cross on top */}
            <path d="M12 2v4M10 4h4" strokeLinecap="round" />
            {/* Radiant Heart / Vessel */}
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="rgba(189, 138, 47, 0.25)"
            />
            {/* Subtle inner flame rays */}
            <path d="M12 8c.5 1.5 2 2.5 2 4s-1 3-2 3-2-1.5-2-3 1.5-2.5 2-4z" fill="#BD8A2F" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* Main Contemplative Message */}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-wide mb-3 text-[#FFFDF7]">
        {title}
      </h2>
      <p className="font-reading text-lg sm:text-xl text-[#F3EAD8]/70 italic max-w-md mx-auto mb-10">
        {subtitle}
      </p>

      {/* Silence Timer Section */}
      <div className="w-full max-w-sm mx-auto mb-12">
        {!isTimerRunning && !hasCompletedTimer && (
          <button
            onClick={handleStartTimer}
            className="touch-target inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#162E4E] text-[#F3EAD8] hover:text-[#FFFDF7] hover:bg-[#1f3d66] border border-[#BD8A2F]/40 transition-all font-sans text-sm tracking-wide shadow-sm hover:shadow-md"
          >
            <svg className="w-4 h-4 text-[#BD8A2F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Begin 1 Minute of Silence</span>
          </button>
        )}

        {isTimerRunning && (
          <div className="flex flex-col items-center p-6 rounded-2xl bg-[#162E4E]/50 border border-[#BD8A2F]/30 backdrop-blur-xs">
            <div className="relative w-28 h-28 flex items-center justify-center mb-4">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  className="text-[#0D2038] stroke-current"
                  strokeWidth="3"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  className="text-[#BD8A2F] stroke-current transition-all duration-1000 ease-linear"
                  strokeWidth="3"
                  strokeDasharray={276}
                  strokeDashoffset={276 - (276 * (60 - secondsRemaining)) / 60}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <div className="absolute font-serif text-3xl text-[#FFFDF7] tracking-wider">
                {secondsRemaining}
                <span className="text-xs font-sans text-[#F3EAD8]/60 ml-0.5">s</span>
              </div>
            </div>

            <p className="font-serif text-sm text-[#F3EAD8]/80 italic mb-3">
              Silent resting in His presence...
            </p>

            <button
              onClick={handleCancelTimer}
              className="text-xs text-[#F3EAD8]/50 hover:text-[#F3EAD8] underline transition-colors"
            >
              End silence
            </button>
          </div>
        )}

        {hasCompletedTimer && (
          <div className="p-6 rounded-2xl bg-[#162E4E]/40 border border-[#BD8A2F]/30">
            <p className="font-serif text-2xl text-[#BD8A2F] mb-1">
              Remain as long as you wish.
            </p>
            <p className="text-xs text-[#F3EAD8]/60 font-sans">
              His peace remains with you.
            </p>
          </div>
        )}
      </div>

      {/* Action Links */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-[#162E4E]">
        <button
          onClick={onPrayAgain}
          className="px-8 py-3 rounded-full bg-[#BD8A2F] text-[#0D2038] text-xs uppercase tracking-widest font-semibold hover:bg-[#d4a853] transition-all shadow-lg flex items-center gap-2"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
            <path d="M3 21v-5h5" />
          </svg>
          <span>Pray Again</span>
        </button>

        <button
          onClick={onReturnToLitanies}
          className="px-8 py-3 rounded-full border border-[#D8CDB9]/40 text-[#F3EAD8] text-xs uppercase tracking-widest font-semibold hover:bg-[#162E4E] transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>All Litanies</span>
        </button>
      </div>
    </div>
  );
};
