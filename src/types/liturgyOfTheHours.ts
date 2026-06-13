export type LiturgyHoursResourceSourceType =
  | "divine-office"
  | "church-document"
  | "daily-oratory"
  | "trusted-catholic-source";

export type LiturgyHour = {
  id: string;
  title: string;
  slug: string;
  traditionalName: string;
  timeOfDay: string;
  shortDescription: string;
  beginnerFriendly: boolean;
  estimatedTime: string;
  prayerFocus: string;
  divineOfficeUrl: string;
  sortOrder: number;
};

export type PrayerRhythm = {
  id: string;
  title: string;
  slug: string;
  description: string;
  hourIds: string[];
  bestFor: string;
  sortOrder: number;
};

export type LiturgyHoursFAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
};

export type LiturgyHoursResource = {
  id: string;
  title: string;
  sourceName: string;
  url: string;
  description: string;
  sourceType: LiturgyHoursResourceSourceType;
  official: boolean;
  sortOrder: number;
};

export type WorldPrayerLocation = {
  id: string;
  label: string;
  region: string;
  latitude: number;
  longitude: number;
  prayerLabel: string;
  timeZone: string;
  illustrative: boolean;
  sortOrder: number;
};
