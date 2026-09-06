import type { Metadata } from "next";
import { Suspense } from "react";
import { SacredHoursExperience } from "@/components/holy-week/SacredHoursExperience";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({ title: "Holy Week Meditation | The Sacred Hours", description: "Walk with Jesus through Holy Week, the Passion, Holy Saturday, and Easter in a guided Catholic journey of Scripture, meditation, prayer, silence, and sacred art.", path: "/holy-week" });

export default function HolyWeekPage() { return <div className="sacred-hours-root min-h-[100svh]"><Suspense fallback={<div className="sacred-hours-loading">Preparing the prayer journey…</div>}><SacredHoursExperience /></Suspense></div>; }

