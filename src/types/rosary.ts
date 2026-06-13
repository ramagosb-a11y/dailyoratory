export type RosaryMysteryGroupSlug =
  | "joyful-mysteries"
  | "luminous-mysteries"
  | "sorrowful-mysteries"
  | "glorious-mysteries";

export type RosaryMysterySetSlug = RosaryMysteryGroupSlug;

export type RosaryMysterySetName = "Joyful" | "Luminous" | "Sorrowful" | "Glorious";

export type RosaryColorAccent = "joyful" | "luminous" | "sorrowful" | "glorious";

export type RosaryLink = {
  label: string;
  href: string;
};

export type RosaryMysteryGroup = {
  id: string;
  title: string;
  slug: RosaryMysteryGroupSlug;
  shortTitle: RosaryMysterySetName;
  description: string;
  theme: string;
  traditionalDays: string[];
  colorAccent: RosaryColorAccent;
  heroTitle: string;
  heroSubtitle: string;
  sortOrder: number;
};

export type RosaryDecadeStep = {
  id: string;
  title: string;
  instruction: string;
  prayerText?: string;
  sortOrder: number;
};

export type RosarySensoryMeditation = {
  id: string;
  label: string;
  subtitle?: string;
  content: string[];
  sortOrder: number;
};

export type RosaryScriptureForMeditationEntry = {
  passage: string;
  attribution: string;
  sortOrder?: number;
};

export type RosaryScriptureForMeditation = {
  passage?: string;
  attribution?: string;
  entries?: RosaryScriptureForMeditationEntry[];
};

export type RosaryMystery = {
  id: string;
  groupId: string;
  groupSlug: RosaryMysteryGroupSlug;
  title: string;
  slug: string;
  fullPath: string;
  fullSlug: string;
  decadeNumber: number;
  decadeLabel: string;
  mysteryLabel: string;
  scriptureReference: string;
  scriptureSummary: string;
  openingPrayer?: string;
  sensoryMeditation?: RosarySensoryMeditation[];
  scriptureForMeditation?: RosaryScriptureForMeditation;
  contemplativePause?: string;
  meditationConclusionPrompt?: string;
  optionalClosingPrayer?: string;
  expandedFruitReflection?: string;
  extendedMeditation: string[];
  contemplationPoints: string[];
  virtue: string;
  fruitOfMystery: string;
  graceToAsk: string;
  decadeIntention: string;
  decadePrayer: string;
  reflectionQuestions: string[];
  howToPrayThisDecade: RosaryDecadeStep[];
  closingPrayer: string;
  relatedLinks: RosaryLink[];
  previousMysterySlug: string | null;
  nextMysterySlug: string | null;
  practiceToday: string;
  meditationPrompt: string;
  meditation: string;
  prayer: string;
  sortOrder: number;
};

export type RosaryMysteryRouteAlias = {
  sourcePath: string;
  destinationPath: string;
  permanent: boolean;
};

export type RosaryPrayer = {
  id: string;
  title: string;
  slug: string;
  body: string;
  latin?: string;
  note?: string;
  sortOrder: number;
};

export type RosaryDayScheduleEntry = {
  day: string;
  groupSlug: RosaryMysteryGroupSlug;
  title: string;
  note?: string;
};

export type RosaryMysteryRecord = {
  id: string;
  setSlug: RosaryMysterySetSlug;
  setName: RosaryMysterySetName;
  order: number;
  title: string;
  scriptureReference: string;
  fruit: string;
  meditationPrompt: string;
};

export type RosaryMysterySetRecord = {
  slug: RosaryMysterySetSlug;
  name: RosaryMysterySetName;
  title: string;
  subtitle: string;
  traditionalDays: string[];
  theme: string;
  description: string;
  mysteries: RosaryMysteryRecord[];
};

export type RosaryPrayerRecord = {
  id: string;
  title: string;
  english: string;
  latin?: string;
  note?: string;
};

export type LatinRosaryStep = {
  id: string;
  title: string;
  latin: string;
  englishCue: string;
  pronunciationHelp: string;
};
