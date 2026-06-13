"use client";

import type { IndulgencePrayer } from "@/types/indulgences";
import { PrayerCard } from "@/components/ui/PrayerCard";

export function IndulgencePrayerCard({
  prayer,
  category,
}: {
  prayer: IndulgencePrayer;
  category?: string;
}) {
  return (
    <PrayerCard title={prayer.title} eyebrow={category} prayer={prayer.body} note={prayer.note} copiedLabel="Prayer copied." />
  );
}
