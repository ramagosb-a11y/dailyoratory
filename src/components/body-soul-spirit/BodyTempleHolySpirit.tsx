import {
  bodyTempleIdeas,
  bodyTempleLinks,
  bodyTempleScriptureReferences,
} from "@/data/bodySoulSpiritPage";
import {
  BodySoulSpiritCard,
  BodySoulSpiritCardGrid,
  BodySoulSpiritLinkPills,
  BodySoulSpiritSection,
} from "@/components/body-soul-spirit/BodySoulSpiritUi";

export function BodyTempleHolySpirit() {
  return (
    <BodySoulSpiritSection
      eyebrow="Temple of the Holy Spirit"
      title="Your Body Is a Temple"
      summary="Scripture teaches that the body is a temple of the Holy Spirit. This means the body has dignity and should be treated with reverence, purity, gratitude, and love."
    >
      <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <BodySoulSpiritCardGrid columns="md:grid-cols-2">
          {bodyTempleIdeas.map((idea) => (
            <BodySoulSpiritCard key={idea} title={idea} />
          ))}
        </BodySoulSpiritCardGrid>
        <div className="grid gap-5">
          <BodySoulSpiritCard
            title="Scripture references"
            description="These passages help anchor the Church's reverence for the body in revelation."
            meta="Read and pray"
          >
            <ul className="grid gap-2">
              {bodyTempleScriptureReferences.map((reference) => (
                <li key={reference} className="text-sm font-semibold text-navy">
                  {reference}
                </li>
              ))}
            </ul>
          </BodySoulSpiritCard>
          <BodySoulSpiritCard title="Continue learning" meta="Related guides">
            <BodySoulSpiritLinkPills links={bodyTempleLinks} />
          </BodySoulSpiritCard>
        </div>
      </div>
    </BodySoulSpiritSection>
  );
}

