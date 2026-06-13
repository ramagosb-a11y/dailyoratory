import { SectionHeader } from "@/components/section-header";
import { getCatechismDailyLifeUses } from "@/lib/catechism";

export function CatechismDailyLife() {
  const uses = getCatechismDailyLifeUses();

  return (
    <section>
      <SectionHeader
        eyebrow="Daily life"
        title="How the Catechism Helps Daily Life"
        summary="The Catechism is not only for study sessions. It can accompany questions, sacramental preparation, prayer, family life, and daily decisions."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {uses.map((use) => (
          <div key={use} className="card-parchment p-5">
            <p className="text-sm leading-7 text-muted">{use}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
