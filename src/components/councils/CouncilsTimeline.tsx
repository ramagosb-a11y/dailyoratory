import { SectionHeader } from "@/components/section-header";
import { getChurchCouncils } from "@/lib/councils";
import { CouncilCard } from "@/components/councils/CouncilCard";

export function CouncilsTimeline() {
  const councils = getChurchCouncils();

  return (
    <section id="councils-timeline" className="scroll-mt-28">
      <SectionHeader eyebrow="Timeline" title="The 21 Ecumenical Councils at a Glance" />
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {councils.map((council) => (
          <CouncilCard key={council.id} council={council} />
        ))}
      </div>
    </section>
  );
}
