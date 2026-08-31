export type DivineMercySavedProgress = {
  version: "1.0.1";
  stepIndex: number;
  autoAdvance: boolean;
  updatedAt: number;
};

const STORAGE_KEY = "daily-oratory:divine-mercy:progress:1.0.1";
const MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;

export function readDivineMercyProgress(stepCount: number): DivineMercySavedProgress | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<DivineMercySavedProgress>;
    const valid =
      parsed.version === "1.0.1" &&
      Number.isInteger(parsed.stepIndex) &&
      typeof parsed.stepIndex === "number" &&
      parsed.stepIndex >= 0 &&
      parsed.stepIndex < stepCount &&
      typeof parsed.updatedAt === "number" &&
      Date.now() - parsed.updatedAt <= MAX_AGE_MS;

    if (!valid) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return {
      version: "1.0.1",
      stepIndex: parsed.stepIndex as number,
      autoAdvance: parsed.autoAdvance === true,
      updatedAt: parsed.updatedAt as number,
    };
  } catch {
    return null;
  }
}

export function saveDivineMercyProgress(stepIndex: number, autoAdvance: boolean) {
  if (typeof window === "undefined") return;
  const progress: DivineMercySavedProgress = {
    version: "1.0.1",
    stepIndex,
    autoAdvance,
    updatedAt: Date.now(),
  };

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Prayer remains fully usable when storage is unavailable.
  }
}

export function clearDivineMercyProgress() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore storage failures.
  }
}
