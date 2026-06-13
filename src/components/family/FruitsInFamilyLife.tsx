import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { familyFruits } from "@/data/familyPage";

export function FruitsInFamilyLife() {
  return (
    <section>
      <SectionHeader
        eyebrow="Holy Spirit"
        title="The Family and the Fruits of the Holy Spirit"
        summary="The domestic church becomes more peaceful and radiant when the Holy Spirit is welcomed in ordinary choices."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {familyFruits.map((fruit) => (
          <article key={fruit.title} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{fruit.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{fruit.description}</p>
          </article>
        ))}
      </div>
      <Link href="/virtue-tracker" className="btn liturgical-button focus-ring mt-6 justify-center">
        Practice a Family Virtue This Week
      </Link>
    </section>
  );
}
