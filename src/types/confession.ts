import type { BaseContentRecord } from "@/types/content";

export type ConfessionTopicSlug =
  | "sins"
  | "habitual-sin"
  | "resisting-temptation"
  | "predominant-fault";

export type ConfessionGuideLink = {
  title: string;
  description: string;
  href: string;
  label?: string;
};

export type ConfessionGuideSection = {
  title: string;
  body: string;
  items?: string[];
};

export type ConfessionGuideTopicRecord = BaseContentRecord & {
  contentType: "confession-topic";
  slug: ConfessionTopicSlug;
  path: string;
  eyebrow: string;
  summary: string;
  pastoralNote: string;
  sections: ConfessionGuideSection[];
  practices: ConfessionGuideLink[];
  relatedLinks: ConfessionGuideLink[];
};

export type ConfessionPrayerRecord = {
  title: string;
  text: string;
  sourceNote: "Original Daily Oratory text" | "Traditional public domain";
};
