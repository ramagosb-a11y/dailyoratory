import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { getFamilyAdorationIdeas } from "@/lib/adoration";

export function AdorationForFamilies() {
  const ideas = getFamilyAdorationIdeas();

  return (
    <section>
      <SectionHeader
        eyebrow="Families"
        title="Adoration with Children and Families"
        summary="Families can visit Adoration even briefly. Children do not need to be perfectly silent to begin learning reverence."
      />
      <div className="card-parchment mt-7 p-6">
        <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {ideas.map((idea) => (
            <li key={idea} className="rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
              {idea}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/family" className="btn liturgical-button focus-ring justify-center">Family and Domestic Church</Link>
          <Link href="/pray" className="btn btn-secondary focus-ring justify-center">Pray</Link>
          <Link href="/saints" className="btn btn-secondary focus-ring justify-center">Saints</Link>
        </div>
      </div>
    </section>
  );
}
