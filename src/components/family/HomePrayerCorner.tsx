import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { prayerCornerIdeas } from "@/data/familyPage";

export function HomePrayerCorner() {
  return (
    <section>
      <SectionHeader
        eyebrow="Prayer space"
        title="Create a Prayer Corner"
        summary="A simple prayer space can help the family remember that God is welcome in the home."
      />
      <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="card-parchment p-6">
          <ul className="grid gap-3 sm:grid-cols-2">
            {prayerCornerIdeas.map((idea) => (
              <li key={idea} className="rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
                {idea}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-muted">Use candles safely and supervise children.</p>
        </div>
        <div className="card-parchment p-6">
          <p className="text-sm leading-8 text-muted">
            The point is not to make a perfect display. The point is to make room. A Bible, crucifix, rosary, or saint
            image in one visible corner can gently remind the household that prayer belongs in ordinary life.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Link href="/pray" className="btn liturgical-button focus-ring justify-center">
              Open Prayer Resources
            </Link>
            <Link href="/rosary" className="btn btn-secondary focus-ring justify-center">
              Pray the Rosary
            </Link>
            <Link href="/liturgical-living/seasons" className="btn btn-secondary focus-ring justify-center">
              Live the Seasons at Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
