export type ArmorId = "belt" | "breastplate" | "shoes" | "shield" | "helmet" | "sword";
export type ArmorJourneyId = "peace" | "temptation" | "trials" | "faith";

export type ArmorPiece = {
  id: ArmorId;
  name: string;
  scriptureReference: string;
  explanation: string;
  reflection: string;
  prayer: string;
  dailyAction: string;
};

export type ArmorJourney = {
  id: ArmorJourneyId;
  title: string;
  description: string;
  question: string;
  primaryArmor: ArmorId[];
};

export type ArmorStruggle = {
  id: string;
  journeyId: ArmorJourneyId;
  title: string;
  scriptureReference: string;
  armorIds: ArmorId[];
  reflection: string;
  armorApplication: string;
  prayer: string;
  dailyAction: string;
  contemplationPrompt: string;
  virtue?: string;
  consciencePrompt?: string;
  teaching?: { text: string; sourceId: string };
};

export type CatholicSource = { id: string; title: string; url: string; paragraphs?: string };
export type ScripturePassage = { reference: string; text: string; sourceUrl: string };
export type ArmorCardSummary = {
  struggleId: string;
  title: string;
  armorNames: string[];
  scriptureReference: string;
  prayer: string;
  dailyAction: string;
};
