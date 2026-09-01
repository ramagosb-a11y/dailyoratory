import React from 'react';

export type ResponseVariant = 'burgundy' | 'olive' | 'blue' | 'navy' | 'gold';

interface PrayerResponseProps {
  text: string;
  variant?: ResponseVariant;
  className?: string;
  showRubricSymbol?: boolean;
}

export const PrayerResponse: React.FC<PrayerResponseProps> = ({
  text,
  variant = 'burgundy',
  className = '',
  showRubricSymbol = false,
}) => {
  const getColorClass = () => {
    switch (variant) {
      case 'olive':
        return 'text-[#3A533E]';
      case 'blue':
        return 'text-[#1F4E79]';
      case 'navy':
        return 'text-[#0D2038]';
      case 'gold':
        return 'text-[#BD8A2F]';
      case 'burgundy':
      default:
        return 'text-[#7A2533]';
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-serif italic text-base sm:text-[1.15rem] leading-relaxed font-medium tracking-wide ${getColorClass()} ${className}`}
    >
      {showRubricSymbol && (
        <span className="not-italic font-bold text-xs opacity-75 font-sans">℟.</span>
      )}
      <span>{text}</span>
    </span>
  );
};
