import archive from "../data/strongholdsScripture.json" with { type: "json" };

export type StrongholdsScripturePassage = { reference: string; sourceReference: string; bookCode: string; chapter: number; sourceUrl: string; verses: { number: number; text: string }[]; versesSha256: string; numberingNote?: string };
type ScriptureArchive = { source: { shortEdition: string; rights: string; rightsUrl: string; attribution: string }; aliases: Record<string,string>; passages: Record<string,StrongholdsScripturePassage> };
const verified: ScriptureArchive = archive;
export const strongholdsScriptureSource = verified.source;
export function getStrongholdsScripture(reference: string): StrongholdsScripturePassage | null {
  return verified.passages[verified.aliases[reference] ?? reference] ?? null;
}
export function getStrongholdsScriptureExcerpt(reference: string, verseNumbers?: readonly number[]) {
  const passage = getStrongholdsScripture(reference);
  if (!passage) return null;
  const selected = verseNumbers ?? (passage.reference === "Psalm 50" ? [12] : [passage.verses[0].number]);
  const verses = passage.verses.filter(verse => selected.includes(verse.number));
  if (!verses.length) return null;
  const book = passage.reference.replace(/ \d+(?::.*)?$/, "");
  const numbers = verses.map(verse => verse.number);
  const consecutive = numbers.every((number,index) => index === 0 || number === numbers[index - 1] + 1);
  const suffix = numbers.length > 1 && consecutive ? `${numbers[0]}–${numbers.at(-1)}` : numbers.join(", ");
  return { passage, verses, reference: `${book} ${passage.chapter}:${suffix}` };
}
