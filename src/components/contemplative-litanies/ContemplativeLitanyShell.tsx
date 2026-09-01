"use client";

import { useRouter } from "next/navigation";
import { PrayerExperience } from "./PrayerExperience";
import type { LitanyData } from "./types";

export function ContemplativeLitanyShell({ litany }: { litany: LitanyData }) {
  const router = useRouter();
  return <PrayerExperience litany={litany} onExit={() => router.push("/prayers/litanies")} />;
}
