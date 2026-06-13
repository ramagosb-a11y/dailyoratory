import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { getCatechismExternalBibleLink } from "@/lib/catechism";
import Link from "next/link";

export function CatechismAndScripture() {
  const bibleLink = getCatechismExternalBibleLink();

  return (
    <section>
      <SectionHeader
        eyebrow="Scripture"
        title="The Catechism and Scripture"
        summary="The Catechism is filled with Scripture references. It does not replace the Bible. It helps explain Catholic teaching in harmony with Scripture and Tradition."
      />
      <div className="card-parchment mt-7 p-6">
        <p className="text-sm leading-7 text-muted">
          When you read a Catechism paragraph, notice the Scripture footnotes or references. Then
          pray with those Scripture passages and ask how the teaching opens the Word of God more
          deeply.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href="/library/scripture-prayer" className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy">
            Scripture Prayer
          </Link>
          <Link href="/reflections/mass-readings" className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy">
            Mass Readings Reflections
          </Link>
          <TrackedLink
            href={bibleLink.href}
            external
            className="rounded-full border border-stone bg-ivory px-3 py-1 text-xs font-semibold text-navy"
            eventName="catechism_resource_click"
            eventParams={{
              resource_name: bibleLink.label,
              resource_url: bibleLink.href,
              section: "catechism-and-scripture",
              page_path: "/catechism",
            }}
          >
            {bibleLink.label}
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
