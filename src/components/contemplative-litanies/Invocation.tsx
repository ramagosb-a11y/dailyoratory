import React from 'react';
import { PrayerResponse, ResponseVariant } from './PrayerResponse';

interface InvocationProps {
  prompt: string;
  response: string;
  responseVariant?: ResponseVariant;
  isCompact?: boolean;
}

export const Invocation: React.FC<InvocationProps> = ({
  prompt,
  response,
  responseVariant = 'burgundy',
  isCompact = false,
}) => {
  const getBorderColor = () => {
    switch (responseVariant) {
      case 'olive':
        return 'border-[#3A533E]/30 group-hover:border-[#3A533E]/60';
      case 'blue':
        return 'border-[#1F4E79]/30 group-hover:border-[#1F4E79]/60';
      case 'navy':
        return 'border-[#0D2038]/30 group-hover:border-[#0D2038]/60';
      case 'gold':
        return 'border-[#BD8A2F]/40 group-hover:border-[#BD8A2F]/80';
      case 'burgundy':
      default:
        return 'border-[#7A2533]/25 group-hover:border-[#7A2533]/50';
    }
  };

  return (
    <div
      className={`group transition-colors duration-300 rounded-xl ${
        isCompact
          ? 'py-2 px-3'
          : 'py-3 sm:py-4 px-3 sm:px-4 -mx-3 sm:-mx-4 hover:bg-[#F3EAD8]/30'
      }`}
    >
      <p className="font-serif text-xl sm:text-xl text-[#0D2038] leading-relaxed tracking-normal font-normal">
        {prompt}
      </p>
      <div className={`mt-1.5 sm:mt-2 pl-4 sm:pl-5 border-l-2 ${getBorderColor()} transition-colors`}>
        <PrayerResponse text={response} variant={responseVariant} />
      </div>
    </div>
  );
};
