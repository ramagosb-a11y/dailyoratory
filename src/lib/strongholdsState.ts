// Pure state/persistence boundary. No telemetry, network or browser access at import time.
export const strongholdCategories = ["fear", "pride", "anger", "lust", "resentment", "envy", "discouragement", "control", "dishonesty", "other", "unsure"] as const;
export type StrongholdCategory = typeof strongholdCategories[number];
export type StrongholdsDraft = {
  step: number;
  category: StrongholdCategory;
  triggers: string[];
  thought: string;
  notes: string[];
  response: string;
  action: string;
  surrendered: boolean;
  fruits: string[];
};
export const STRONGHOLDS_KEY = "daily-oratory-strongholds-v1";
export const STRONGHOLDS_PRIVACY = "Saved reflections stay in this browser. They are not encrypted or backed up and may be visible to others using this browser profile.";
export function newStrongholdsDraft(): StrongholdsDraft {
  return { step: 0, category: "unsure", triggers: [], thought: "", notes: ["", "", "", "", "", ""], response: "", action: "", surrendered: false, fruits: [] };
}
export function moveStrongholdsStep(draft: StrongholdsDraft, delta: -1 | 1): StrongholdsDraft {
  return { ...draft, step: Math.max(0, Math.min(5, draft.step + delta)) };
}
export type StoragePort = Pick<Storage, "getItem" | "setItem" | "removeItem">;
export type SavedStrongholds = { version: 1; draft: StrongholdsDraft };
export type StrongholdsRead = { status: "empty" | "unavailable" | "invalid"; saved: null } | { status: "saved"; saved: SavedStrongholds };
function boundedText(value: unknown): value is string {
  return typeof value === "string" && value.length <= 2000;
}
export function parseStrongholds(raw: string | null): StrongholdsRead {
  if (raw === null) return { status: "empty", saved: null };
  try {
    if (raw.length > 24000) return { status: "invalid", saved: null };
    const value = JSON.parse(raw);
    const d = value?.draft;
    if (value?.version !== 1 || !d || !Number.isInteger(d.step) || d.step < 0 || d.step > 5 ||
      !strongholdCategories.includes(d.category) || !Array.isArray(d.triggers) || d.triggers.length > 9 ||
      !d.triggers.every(boundedText) || !Array.isArray(d.notes) || d.notes.length !== 6 ||
      !d.notes.every(boundedText) || !boundedText(d.thought) || !boundedText(d.response) ||
      !boundedText(d.action) || typeof d.surrendered !== "boolean" ||
      (d.fruits !== undefined && (!Array.isArray(d.fruits) || d.fruits.length > 6 || !d.fruits.every(boundedText)))) return { status: "invalid", saved: null };
    // Copy only known schema fields; never carry unexpected fields into state.
    return { status: "saved", saved: { version: 1, draft: {
      step: d.step, category: d.category, triggers: [...d.triggers], thought: d.thought,
      notes: [...d.notes], response: d.response, action: d.action, surrendered: d.surrendered, fruits: [...(d.fruits ?? [])],
    } } };
  } catch { return { status: "invalid", saved: null }; }
}
export function readStrongholds(storage: StoragePort): StrongholdsRead {
  try { return parseStrongholds(storage.getItem(STRONGHOLDS_KEY)); }
  catch { return { status: "unavailable", saved: null }; }
}
export function saveStrongholds(storage: StoragePort, draft: StrongholdsDraft): boolean {
  try {
    const raw = JSON.stringify({ version: 1, draft });
    if (parseStrongholds(raw).status !== "saved") return false;
    storage.setItem(STRONGHOLDS_KEY, raw);
    return true;
  } catch { return false; }
}
export function deleteStrongholds(storage: StoragePort): boolean {
  try { storage.removeItem(STRONGHOLDS_KEY); return true; }
  catch { return false; }
}

export const STRONGHOLDS_HISTORY_KEY = "daily-oratory-strongholds-history-v1";
export const STRONGHOLDS_HISTORY_LIMIT = 20;
export type StrongholdsEntry = { id: string; savedAt: string; draft: StrongholdsDraft };
export type StrongholdsHistory = { status: "empty" | "saved" | "invalid" | "unavailable"; entries: StrongholdsEntry[] };
export function parseStrongholdsHistory(raw: string | null): StrongholdsHistory {
  if (raw === null) return { status: "empty", entries: [] };
  try {
    if (raw.length > 480000) throw new Error("size");
    const value = JSON.parse(raw);
    if (value?.version !== 1 || !Array.isArray(value.entries) || value.entries.length > STRONGHOLDS_HISTORY_LIMIT) throw new Error("schema");
    const ids = new Set<string>();
    const entries: StrongholdsEntry[] = value.entries.map((entry: StrongholdsEntry) => {
      const parsed = parseStrongholds(JSON.stringify({ version: 1, draft: entry?.draft }));
      if (!entry || typeof entry.id !== "string" || !/^[a-zA-Z0-9-]{1,80}$/.test(entry.id) || ids.has(entry.id) ||
        typeof entry.savedAt !== "string" || entry.savedAt.length > 30 || !Number.isFinite(Date.parse(entry.savedAt)) || parsed.status !== "saved") throw new Error("entry");
      ids.add(entry.id);
      return { id: entry.id, savedAt: entry.savedAt, draft: parsed.saved.draft };
    });
    return { status: entries.length ? "saved" : "empty", entries };
  } catch { return { status: "invalid", entries: [] }; }
}
export function readStrongholdsHistory(storage: StoragePort): StrongholdsHistory {
  try { return parseStrongholdsHistory(storage.getItem(STRONGHOLDS_HISTORY_KEY)); }
  catch { return { status: "unavailable", entries: [] }; }
}
export function saveStrongholdsEntry(storage: StoragePort, entry: StrongholdsEntry): boolean {
  try {
    const current = readStrongholdsHistory(storage);
    if (current.status === "invalid" || current.status === "unavailable") return false;
    const entries = [entry, ...current.entries.filter(item => item.id !== entry.id)];
    // Never silently discard a reflection when the bounded journal is full.
    if (entries.length > STRONGHOLDS_HISTORY_LIMIT) return false;
    const raw = JSON.stringify({ version: 1, entries });
    if (parseStrongholdsHistory(raw).status !== "saved") return false;
    storage.setItem(STRONGHOLDS_HISTORY_KEY, raw);
    return true;
  } catch { return false; }
}
export function deleteStrongholdsEntry(storage: StoragePort, id: string): boolean {
  try {
    const current = readStrongholdsHistory(storage);
    if (current.status === "invalid" || current.status === "unavailable") return false;
    const entries = current.entries.filter(item => item.id !== id);
    if (entries.length) storage.setItem(STRONGHOLDS_HISTORY_KEY, JSON.stringify({ version: 1, entries }));
    else storage.removeItem(STRONGHOLDS_HISTORY_KEY);
    return true;
  } catch { return false; }
}
export function deleteStrongholdsHistory(storage: StoragePort): boolean {
  try { storage.removeItem(STRONGHOLDS_HISTORY_KEY); return true; }
  catch { return false; }
}
