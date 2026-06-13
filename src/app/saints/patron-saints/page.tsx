import type { Metadata } from "next";
import { PatronSaintsDirectory } from "@/components/saints/PatronSaintsDirectory";
import { SaintsPastoralNote } from "@/components/saints/SaintsPastoralNote";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Patron Saints",
  description: "Browse patron saints by need, vocation, and state of life with careful Catholic devotional language.",
  path: "/saints/patron-saints",
});

export default function PatronSaintsPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
        <PatronSaintsDirectory />
        <SaintsPastoralNote />
      </section>
    </div>
  );
}
