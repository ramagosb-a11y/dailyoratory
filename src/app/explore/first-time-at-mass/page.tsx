import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";
import { FirstTimeAtMassGuide } from "@/components/explore/FirstTimeAtMassGuide";

export const metadata: Metadata = createPageMetadata({
  title: "First Time at Mass",
  description:
    "A gentle guide for visitors attending Catholic Mass for the first time, including what to expect, what to do during Communion, and how to participate respectfully.",
  path: "/explore/first-time-at-mass",
});

export default function FirstTimeAtMassPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Learn", href: "/learn" },
            { label: "Explore the Catholic Faith", href: "/explore" },
            { label: "First Time at Mass" },
          ]}
        />
        <div className="mt-8">
          <FirstTimeAtMassGuide />
        </div>
      </main>
    </div>
  );
}
