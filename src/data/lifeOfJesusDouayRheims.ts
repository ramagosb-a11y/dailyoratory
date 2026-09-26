import generated from "./lifeOfJesusDouayRheims.generated.json";
import type { LifeOfJesusDouayRheimsPassage } from "@/types/lifeOfJesus";

type GeneratedPassage = (typeof generated.passages)[keyof typeof generated.passages];

/** All timeline readings are bundled locally; a missing range is a build error. */
export function getLifeOfJesusDouayRheims(reference: string): LifeOfJesusDouayRheimsPassage {
  const passage = (generated.passages as Record<string, GeneratedPassage>)[reference];
  if (!passage) throw new Error(`Missing local Douay–Rheims text for ${reference}.`);
  const verses = passage.verses as readonly { chapter: number; number: number; text: string; part?: string }[];

  return {
    ...passage,
    verses: verses.map((verse) => {
      if (verse.part && verse.part !== "a") throw new Error(`Unexpected verse subdivision for ${reference}.`);
      return {
        chapter: verse.chapter,
        number: verse.number,
        text: verse.text,
        ...(verse.part === "a" ? { part: "a" as const } : {}),
      };
    }),
    edition: generated.source.edition as LifeOfJesusDouayRheimsPassage["edition"],
    editionUrl: generated.source.editionUrl,
    rightsStatus: "public-domain",
    attribution: generated.source.attribution,
    sourceAccessedAt: generated.source.accessedAt,
    sourceSha256: generated.source.extractedFileSha256,
    archiveSha256: generated.source.archiveSha256,
    verificationStatus: "automated-exact-range",
    humanReviewStatus: "pending",
  };
}
