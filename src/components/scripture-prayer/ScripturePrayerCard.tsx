"use client";

import { PrayerCard } from "@/components/ui/PrayerCard";

export function ScripturePrayerCard({
  title,
  prayer,
  note,
}: {
  title: string;
  prayer: string;
  note?: string;
}) {
  return <PrayerCard title={title} prayer={prayer} note={note} copiedLabel="Prayer copied." />;
}
