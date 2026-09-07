export const RETREAT_STORAGE_KEY = "daily-oratory-fasting-retreat-v1";
export const RETREAT_HANDOFF_KEY = "daily-oratory-fasting-retreat-return-v1";
export type RetreatProgress = {
  version: 1;
  lastStep: string | null;
  positions: Record<string, number>;
  largeText: boolean;
};
export type RetreatRoute = {
  chapter: string;
  step: string | null;
  view: "overview" | "prayers";
};
export function decodeProgress(
  raw: string | null,
  valid: Set<string>,
): RetreatProgress {
  const empty: RetreatProgress = {
    version: 1,
    lastStep: null,
    positions: {},
    largeText: false,
  };
  try {
    const p = JSON.parse(raw || "null");
    if (p?.version !== 1) return empty;
    const positions: Record<string, number> = {};
    for (const [key, val] of Object.entries(p.positions || {})) {
      if (
        valid.has(key) &&
        typeof val === "number" &&
        Number.isFinite(val) &&
        val >= 0
      )
        positions[key] = Math.min(val, 100000);
    }
    return {
      version: 1,
      lastStep: valid.has(p.lastStep) ? p.lastStep : null,
      positions,
      largeText: p.largeText === true,
    };
  } catch {
    return empty;
  }
}
export function decodeRoute(
  hash: string,
  stepChapters: Map<string, string>,
  validChapters: Set<string>,
  fallback = "welcome",
): RetreatRoute {
  const params = new URLSearchParams(hash.replace(/^#/, "")),
    step = params.get("step");
  const chapter =
    (step && stepChapters.get(step)) || params.get("day") || fallback;
  return {
    chapter: validChapters.has(chapter) ? chapter : "welcome",
    step: step && stepChapters.has(step) ? step : null,
    view: params.get("view") === "prayers" ? "prayers" : "overview",
  };
}
export function makeRouteHash(route: RetreatRoute) {
  return (
    "#" +
    new URLSearchParams({
      day: route.chapter,
      ...(route.step ? { step: route.step } : {}),
      ...(route.view === "prayers" ? { view: "prayers" } : {}),
    }).toString()
  );
}
