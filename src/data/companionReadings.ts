import scripture from './companionScripture.json';
import { meditationParts, scriptureReadings, type MeditationPart } from './adorationCompanion';

export type CompanionPassage = { id: string; reference: string; book: string; chapter: number; verseNumbers: number[]; verses: { number: number; text: string }[]; sourceUrl: string };
export type CompanionMeditationPart = MeditationPart & { scripturePassageId: string };
export const companionScriptureEdition = scripture.edition;
export function getCompanionPassage(id: string): CompanionPassage {
  const passage = (scripture.passages as Record<string, CompanionPassage>)[id];
  if (!passage) throw new Error(`Missing complete Companion Scripture passage: ${id}`);
  return passage;
}
export function passageForReference(reference: string): CompanionPassage {
  const id = (scripture.byReference as Record<string, string>)[reference];
  return getCompanionPassage(id);
}
export const companionMeditations: CompanionMeditationPart[] = meditationParts.map(part => ({ ...part, scripturePassageId: passageForReference(part.scriptureReference).id }));
// Seeds contain editorial metadata only; all Bible text comes from the verified collection.
export const companionReadings = scriptureReadings.map(reading => {
  const passage = passageForReference(reading.reference);
  return { ...reading, passageId: passage.id };
});
