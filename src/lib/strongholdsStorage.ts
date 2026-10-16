"use client";

import { useSyncExternalStore } from "react";
import { STRONGHOLDS_KEY, readStrongholds, type StrongholdsRead } from "./strongholdsState";
import { STRONGHOLDS_HISTORY_KEY, parseStrongholdsHistory, type StrongholdsHistory } from "./strongholdsHistory";

const emptySnapshot: StrongholdsRead = { status: "empty", saved: null };
const unavailableSnapshot: StrongholdsRead = { status: "unavailable", saved: null };
let cachedRaw: string | null | undefined;
let cachedParsed: StrongholdsRead = emptySnapshot;
const changeEvent = "daily-oratory-strongholds-change";
const emptyHistorySnapshot: StrongholdsHistory = { status: "empty", entries: [] };
const unavailableHistorySnapshot: StrongholdsHistory = { status: "unavailable", entries: [] };
let cachedHistoryRaw: string | null | undefined;
let cachedHistoryParsed: StrongholdsHistory = emptyHistorySnapshot;
function getHistorySnapshot() {
  try {
    const raw = window.localStorage.getItem(STRONGHOLDS_HISTORY_KEY);
    if (raw !== cachedHistoryRaw) { cachedHistoryRaw = raw; cachedHistoryParsed = parseStrongholdsHistory(raw); }
    return cachedHistoryParsed;
  } catch { return unavailableHistorySnapshot; }
}

function getSnapshot(): StrongholdsRead {
  try {
    const raw = window.localStorage.getItem(STRONGHOLDS_KEY);
    if (raw !== cachedRaw) {
      cachedRaw = raw;
      cachedParsed = readStrongholds(window.localStorage);
    }
    return cachedParsed;
  } catch { return unavailableSnapshot; }
}
function subscribe(onChange: () => void) {
  const onStorage = (event: StorageEvent) => { if (event.key === STRONGHOLDS_KEY || event.key === STRONGHOLDS_HISTORY_KEY || event.key === null) onChange(); };
  window.addEventListener("storage", onStorage);
  window.addEventListener(changeEvent, onChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(changeEvent, onChange);
  };
}
export function notifyStrongholdsStorage() {
  cachedRaw = undefined;
  cachedHistoryRaw = undefined;
  window.dispatchEvent(new Event(changeEvent));
}
export function useSavedStrongholds() {
  return useSyncExternalStore(subscribe, getSnapshot, () => emptySnapshot);
}
export function useStrongholdsHistory() {
  return useSyncExternalStore(subscribe, getHistorySnapshot, () => emptyHistorySnapshot);
}
