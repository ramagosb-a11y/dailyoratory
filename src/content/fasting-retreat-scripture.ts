import collection from "./fasting-retreat-scripture.json";
export const SCRIPTURE_EDITION = collection.edition;
export type RetreatReading = typeof collection.passages[keyof typeof collection.passages];
export function getRetreatReading(slot: string): RetreatReading {
  const id = (collection.slots as Record<string, string>)[slot] ?? slot;
  const passage = (collection.passages as Record<string, RetreatReading>)[id];
  if (!passage?.verses.length) throw new Error("Missing complete retreat Scripture: " + slot);
  return passage;
}
export const readings: Record<string, RetreatReading> = Object.fromEntries(
  Object.keys(collection.slots).map(slot => [slot, getRetreatReading(slot)])
);
