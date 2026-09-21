import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ChurchFathersLearningPath } from "@/components/church-fathers/ChurchFathersLearningPath";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Church Fathers | Daily Oratory",
  description:
    "A calm, guided way to begin reading the Church Fathers with context, careful questions, and a first text.",
  path: "/church-fathers",
});

export default function ChurchFathersPage() {
  return (
    <div className="paper-texture bg-[radial-gradient(circle_at_50%_35%,rgba(201,162,39,0.08),transparent_34rem)]">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Church Fathers" }]} />
        <div className="mt-8"><ChurchFathersLearningPath /></div>
      </main>
    </div>
  );
}
