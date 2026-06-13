import { SectionHeader } from "@/components/section-header";
import { CardBody, CardTitle } from "@/components/ui/Typography";
import { prophecySeriesOverviewCards } from "@/data/prophecySeries";

export function ProphecySeriesOverview() {
  return (
    <section className="mt-14">
      <SectionHeader
        eyebrow="Overview"
        title="What This Series Will Explore"
        summary="Prophecy is not meant to create fear or curiosity alone. Properly understood, it should lead the soul to deeper conversion, trust in God, prayer, Scripture, and readiness to follow Christ faithfully."
      />
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {prophecySeriesOverviewCards.map((card) => (
          <article key={card.id} className="card-parchment h-full p-5">
            <CardTitle>{card.title}</CardTitle>
            <CardBody className="mt-4 text-[#4b443a]">{card.description}</CardBody>
          </article>
        ))}
      </div>
    </section>
  );
}
