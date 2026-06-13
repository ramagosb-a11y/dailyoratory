import type { Metadata } from "next";
import { ConfirmationSaintHelper } from "@/components/saints/ConfirmationSaintHelper";
import { SaintCompanionFinder } from "@/components/saints/SaintCompanionFinder";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Choosing a Confirmation Saint",
  description: "Choose a confirmation saint with prayer, practical questions, and a Catholic saint companion guide.",
  path: "/saints/confirmation",
});

export default function ConfirmationSaintPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
        <ConfirmationSaintHelper />
        <SaintCompanionFinder />
      </section>
    </div>
  );
}
