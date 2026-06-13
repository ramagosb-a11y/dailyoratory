export type PrayerLibraryLink = {
  label: string;
  href: string;
};

export type PrayerLibraryExternalSource = {
  label: string;
  href: string;
};

export type PrayerItem = {
  id: string;
  title: string;
  category: string;
  needTags: string[];
  summary: string;
  text?: string;
  href?: string;
  relatedLinks?: PrayerLibraryLink[];
  externalSource?: PrayerLibraryExternalSource;
  alternateTitles?: string[];
  seasonalTags?: string[];
  searchKeywords?: string[];
};

export type PrayerNeedCard = {
  id: string;
  title: string;
  description: string;
  prayerIds: string[];
};
