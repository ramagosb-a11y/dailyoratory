import { SectionHeader } from "@/components/section-header";
import { sundayIdeas } from "@/data/familyPage";

export function MakeSundayDifferent() {
  return (
    <section>
      <SectionHeader
        eyebrow="The Lord's Day"
        title="Make Sunday Different"
        summary="Sunday Mass is central. The rest of the day can become a time for rest, family connection, mercy, and gratitude."
      />
      <div className="card-parchment mt-7 p-6">
        <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {sundayIdeas.map((idea) => (
            <li key={idea} className="rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
              {idea}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
