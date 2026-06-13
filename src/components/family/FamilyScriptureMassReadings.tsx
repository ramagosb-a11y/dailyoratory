import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import { familyScriptureIdeas } from "@/data/familyPage";

export function FamilyScriptureMassReadings() {
  return (
    <section>
      <SectionHeader
        eyebrow="Scripture"
        title="Family Scripture and Mass Readings"
        summary="Pray with Scripture as a family in simple, repeatable ways."
      />
      <div className="card-parchment mt-7 p-6">
        <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {familyScriptureIdeas.map((idea) => (
            <li key={idea} className="rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
              {idea}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/library/scripture-prayer" className="btn liturgical-button focus-ring justify-center">
            Scripture Prayer
          </Link>
          <Link href="/reflections/mass-readings" className="btn btn-secondary focus-ring justify-center">
            Mass Readings Reflections
          </Link>
          <TrackedLink
            href="https://bible.usccb.org/"
            external
            className="btn btn-secondary focus-ring justify-center"
            eventName="family_resource_click"
            eventParams={{ page_path: "/family", resource_name: "USCCB Daily Readings" }}
          >
            USCCB Daily Readings
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
