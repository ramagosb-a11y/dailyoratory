"use client";

export type HolyWeekStore = { completedMomentIds: string[]; lastOpenedMoment: string | null; preferredMode: "live" | "full" };
const key = "daily-oratory-sacred-hours-v1";
const empty: HolyWeekStore = { completedMomentIds: [], lastOpenedMoment: null, preferredMode: "full" };

export function readHolyWeekStore(): HolyWeekStore {
  if (typeof window === "undefined") return empty;
  try {
    const value = JSON.parse(window.localStorage.getItem(key) ?? "null") as Partial<HolyWeekStore> | null;
    return { completedMomentIds: Array.isArray(value?.completedMomentIds) ? value!.completedMomentIds.filter((id): id is string => typeof id === "string") : [], lastOpenedMoment: typeof value?.lastOpenedMoment === "string" ? value.lastOpenedMoment : null, preferredMode: value?.preferredMode === "live" ? "live" : "full" };
  } catch { return empty; }
}

export function saveHolyWeekStore(store: HolyWeekStore) { if (typeof window !== "undefined") window.localStorage.setItem(key, JSON.stringify(store)); }
export function resetHolyWeekStore() { if (typeof window !== "undefined") window.localStorage.removeItem(key); }


