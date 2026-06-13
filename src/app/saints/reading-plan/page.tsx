import type { Metadata } from "next";
import { SaintReadingPlan } from "@/components/saints/SaintReadingPlan";
import { SaintChallenge } from "@/components/saints/SaintChallenge";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Saint Reading Plan",
  description: "Start a beginner-friendly Catholic saint reading path and grow through imitation, not information overload.",
  path: "/saints/reading-plan",
});

export default function SaintReadingPlanPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
        <SaintReadingPlan />
        <SaintChallenge />
      </section>
    </div>
  );
}
