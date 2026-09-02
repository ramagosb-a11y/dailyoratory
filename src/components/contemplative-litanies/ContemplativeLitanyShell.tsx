"use client";

import { useRouter } from "next/navigation";
import { PrayerExperience } from "./PrayerExperience";
import type { LitanyData } from "./types";

export function ContemplativeLitanyShell({ litany, exitHref = "/prayers/litanies" }: { litany: LitanyData; exitHref?: string }) {
  const router = useRouter();
  return <PrayerExperience litany={litany} onExit={() => router.push(exitHref)} />;
}
