"use client";

import { useSyncExternalStore } from "react";

export type WayOfCrossForm = "daily" | "alphonsus";
type Progress = Readonly<{ form: WayOfCrossForm; index: number }>;
const stationKey = "daily-oratory-way-of-cross-station";
const formKey = "daily-oratory-way-of-cross-form";
const changeEvent = "daily-oratory-way-of-cross-change";
const emptySnapshot: Progress = { form: "daily", index: -1 };
let cachedRaw: string | undefined;
let cachedParsed: Progress = emptySnapshot;
let memorySnapshot: Progress | undefined;

function getSnapshot(): Progress {
  if (memorySnapshot) return memorySnapshot;
  try {
    const form = window.localStorage.getItem(formKey);
    const station = window.localStorage.getItem(stationKey);
    const raw = JSON.stringify([form, station]);
    if (raw !== cachedRaw) {
      cachedRaw = raw;
      const index = station !== null && station.trim() !== "" ? Number(station) : -1;
      cachedParsed = {
        form: form === "alphonsus" ? "alphonsus" : "daily",
        index: Number.isInteger(index) && index >= -1 && index <= 14 ? index : -1,
      };
    }
    return cachedParsed;
  } catch {
    return emptySnapshot;
  }
}

function getServerSnapshot() {
  return emptySnapshot;
}

function subscribe(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === stationKey || event.key === formKey || event.key === null) {
      memorySnapshot = undefined;
      cachedRaw = undefined;
      onChange();
    }
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(changeEvent, onChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(changeEvent, onChange);
  };
}

export function saveWayOfCrossProgress(form: WayOfCrossForm, station: number) {
  const index = Number.isFinite(station) ? Math.max(-1, Math.min(14, Math.trunc(station))) : -1;
  memorySnapshot = { form, index };
  try {
    window.localStorage.setItem(formKey, form);
    window.localStorage.setItem(stationKey, String(index));
    cachedRaw = undefined;
    memorySnapshot = undefined;
  } catch { /* Keep this visit usable when optional storage is blocked. */ }
  window.dispatchEvent(new Event(changeEvent));
}

export function useWayOfCrossProgress() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
