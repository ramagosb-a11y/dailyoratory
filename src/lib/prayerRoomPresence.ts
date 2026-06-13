"use client";

import { useEffect, useMemo, useState } from "react";
import type {
  PrayerRoomLocalReport,
  PrayerRoomLocalStore,
  PrayerRoomPresenceSnapshot,
  PrayerRoomStartDraft,
} from "@/types/prayerRooms";

const STORAGE_KEY = "daily-oratory-prayer-rooms-v1";
const CHANGE_EVENT = "daily-oratory-prayer-rooms-change";

const emptyStore: PrayerRoomLocalStore = {
  joinedRoomIds: [],
  intentionsByRoom: {},
  reports: [],
  startedRoomDrafts: [],
};

export function readPrayerRoomStore(): PrayerRoomLocalStore {
  if (typeof window === "undefined") return emptyStore;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyStore;
    const value = JSON.parse(raw) as Partial<PrayerRoomLocalStore>;

    return {
      joinedRoomIds: Array.isArray(value.joinedRoomIds) ? Array.from(new Set(value.joinedRoomIds.filter(isString))) : [],
      intentionsByRoom: sanitizeIntentions(value.intentionsByRoom),
      reports: Array.isArray(value.reports) ? value.reports.filter(isReport).slice(0, 100) : [],
      startedRoomDrafts: Array.isArray(value.startedRoomDrafts)
        ? value.startedRoomDrafts.filter(isDraft).slice(0, 25)
        : [],
    };
  } catch {
    return emptyStore;
  }
}

export function savePrayerRoomStore(store: PrayerRoomLocalStore) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function usePrayerRoomStore() {
  const [store, setStore] = useState<PrayerRoomLocalStore>(emptyStore);

  useEffect(() => {
    const update = () => setStore(readPrayerRoomStore());
    update();
    window.addEventListener("storage", update);
    window.addEventListener(CHANGE_EVENT, update);
    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener(CHANGE_EVENT, update);
    };
  }, []);

  return store;
}

export function usePrayerRoomPresence(roomId: string, baseCount: number): PrayerRoomPresenceSnapshot {
  const store = usePrayerRoomStore();

  return useMemo(() => {
    const joinedLocally = store.joinedRoomIds.includes(roomId);
    const localIntentions = store.intentionsByRoom[roomId] ?? [];
    const localBoost = joinedLocally ? 1 : 0;

    return {
      roomId,
      participantCount: baseCount + localBoost,
      joinedLocally,
      localIntentions,
      lastUpdatedAt: new Date().toISOString(),
    };
  }, [baseCount, roomId, store.intentionsByRoom, store.joinedRoomIds]);
}

export function joinPrayerRoom(roomId: string) {
  const store = readPrayerRoomStore();
  if (store.joinedRoomIds.includes(roomId)) return;
  savePrayerRoomStore({ ...store, joinedRoomIds: [...store.joinedRoomIds, roomId] });
}

export function leavePrayerRoom(roomId: string) {
  const store = readPrayerRoomStore();
  savePrayerRoomStore({
    ...store,
    joinedRoomIds: store.joinedRoomIds.filter((id) => id !== roomId),
  });
}

export function savePrayerRoomIntention(roomId: string, intention: string) {
  const clean = sanitizeText(intention, 220);
  if (!clean) return;

  const store = readPrayerRoomStore();
  const current = store.intentionsByRoom[roomId] ?? [];
  savePrayerRoomStore({
    ...store,
    intentionsByRoom: {
      ...store.intentionsByRoom,
      [roomId]: [...current, clean].slice(-5),
    },
  });
}

export function savePrayerRoomReport(roomId: string, reason: PrayerRoomLocalReport["reason"], note: string) {
  const store = readPrayerRoomStore();
  const report: PrayerRoomLocalReport = {
    id: `report-${roomId}-${Date.now()}`,
    roomId,
    reason,
    note: sanitizeText(note, 300),
    createdAt: new Date().toISOString(),
  };

  savePrayerRoomStore({
    ...store,
    reports: [report, ...store.reports].slice(0, 100),
  });
}

export function saveStartedPrayerRoomDraft(draft: Omit<PrayerRoomStartDraft, "id" | "createdAt">) {
  const store = readPrayerRoomStore();
  const nextDraft: PrayerRoomStartDraft = {
    ...draft,
    id: `draft-room-${Date.now()}`,
    title: sanitizeText(draft.title, 120),
    hostName: sanitizeText(draft.hostName, 80),
    notes: sanitizeText(draft.notes, 500),
    createdAt: new Date().toISOString(),
  };

  savePrayerRoomStore({
    ...store,
    startedRoomDrafts: [nextDraft, ...store.startedRoomDrafts].slice(0, 25),
  });

  return nextDraft;
}

export function clearPrayerRoomLocalData() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function sanitizeIntentions(value: unknown) {
  if (!value || typeof value !== "object") return {};

  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>)
      .filter(([key, items]) => key && Array.isArray(items))
      .map(([key, items]) => [key, (items as unknown[]).filter(isString).map((item) => sanitizeText(item, 220)).filter(Boolean).slice(-5)]),
  );
}

function isReport(value: unknown): value is PrayerRoomLocalReport {
  if (!value || typeof value !== "object") return false;
  const report = value as PrayerRoomLocalReport;
  return Boolean(report.id && report.roomId && report.reason && report.createdAt);
}

function isDraft(value: unknown): value is PrayerRoomStartDraft {
  if (!value || typeof value !== "object") return false;
  const draft = value as PrayerRoomStartDraft;
  return Boolean(draft.id && draft.title && draft.devotionType && draft.createdAt);
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function sanitizeText(value: string, maxLength: number) {
  return value.replace(/\s+/g, " ").trim().slice(0, maxLength);
}
