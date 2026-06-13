import type { LiturgicalColor } from "@/types/liturgicalLiving";

export type SeasonGuideSlug =
  | "advent"
  | "christmas"
  | "ordinary-time"
  | "lent"
  | "holy-week"
  | "triduum"
  | "easter"
  | "ordinary-time-after-pentecost";

export type RelatedLiturgicalLink = {
  label: string;
  href: string;
};

export type SeasonQuickCard = {
  id: string;
  seasonName: string;
  anchorId: string;
  liturgicalColor: LiturgicalColor[];
  spiritualTheme: string;
  mindset: string;
  keyPractices: string[];
  majorDays: string[];
  dailyOratoryLink: RelatedLiturgicalLink;
};

export type LiturgicalSeasonGuide = {
  id: string;
  title: string;
  slug: Exclude<SeasonGuideSlug, "ordinary-time-after-pentecost">;
  liturgicalColor: LiturgicalColor[];
  summary: string;
  mindset: string;
  howToLookAtSeason: string;
  keyThemes: string[];
  thingsToDo: string[];
  majorDays: string[];
  specialMasses: string[];
  customs: string[];
  prayers: string[];
  worksOfMercy: string[];
  familyIdeas: string[];
  relatedLinks: RelatedLiturgicalLink[];
  sourceNotes: string[];
  sortOrder: number;
};

export type LiturgicalSpecialDay = {
  id: string;
  title: string;
  slug: string;
  season: SeasonGuideSlug | "all";
  dateRule: string;
  obligationStatus: string;
  description: string;
  whatToExpect: string;
  howToPrepare: string;
  relatedLinks: RelatedLiturgicalLink[];
  sourceNotes: string[];
  sortOrder: number;
};

export type LiturgicalCustom = {
  id: string;
  title: string;
  slug: string;
  associatedDate: string;
  associatedSeason: SeasonGuideSlug | "all";
  description: string;
  whatToExpect: string;
  howToParticipate: string;
  relatedLinks: RelatedLiturgicalLink[];
  sourceNotes: string[];
  sortOrder: number;
};

export type SeasonalPracticePlan = {
  season: SeasonGuideSlug;
  timeAvailable: string;
  householdType: string;
  prayerFocus: string;
  sacramentalFocus: string;
  workOfMercy: string;
  homePractice: string;
  createdAt: string;
};

export type BuiltSeasonalPracticePlan = SeasonalPracticePlan & {
  title: string;
  introduction: string;
  suggestedSteps: string[];
  encouragement: string;
};

export type SeasonalPrayerGroup = {
  season: SeasonGuideSlug;
  title: string;
  suggestions: string[];
};

export type SeasonalWorksGroup = {
  season: SeasonGuideSlug;
  title: string;
  suggestions: string[];
};

export type FamilyLiturgicalIdea = {
  id: string;
  title: string;
  description: string;
  season: SeasonGuideSlug | "all";
};

export type SpecialMassOrBlessingCard = {
  id: string;
  title: string;
  timing: string;
  description: string;
  whatToExpect: string;
  howToParticipate: string;
  relatedLink: RelatedLiturgicalLink;
};

export type LiturgicalSourceLink = {
  id: string;
  title: string;
  url?: string;
  description: string;
};

export type LiturgicalToolLink = {
  id: string;
  title: string;
  href: string;
  description: string;
};
