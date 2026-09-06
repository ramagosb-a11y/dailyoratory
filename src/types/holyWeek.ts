export type TimeCertainty = "scriptural" | "traditional" | "approximate" | "untimed";
export type SacredMood = "daylight" | "candlelight" | "indigo" | "stone" | "calvary" | "silence" | "dawn";

export type SacredMoment = {
  id: string;
  sequence: number;
  liturgicalDay: string;
  displayTime?: string;
  timeCertainty: TimeCertainty;
  title: string;
  subtitle: string;
  scriptureReference: string;
  shortScriptureExcerpt?: string;
  theme: string;
  virtue: string;
  meditation: string[];
  reflectionQuestions: string[];
  responsePrayer: string;
  imageDescription: string;
  imageAlt: string;
  imageSrc?: string;
  imageFocalPoint?: string;
  visualMood: SacredMood;
  optionalFeature?: "remain" | "watch" | "calvary" | "death" | "silence" | "emmaus";
  hour?: number;
  minute?: number;
  dayOffset?: number;
};


