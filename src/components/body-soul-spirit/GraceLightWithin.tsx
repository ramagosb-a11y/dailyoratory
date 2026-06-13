import { graceCards, graceLinks } from "@/data/bodySoulSpiritPage";
import {
  BodySoulSpiritCard,
  BodySoulSpiritCardGrid,
  BodySoulSpiritLinkPills,
  BodySoulSpiritSection,
} from "@/components/body-soul-spirit/BodySoulSpiritUi";

export function GraceLightWithin() {
  return (
    <BodySoulSpiritSection
      eyebrow="Grace"
      title="Grace Is the Light of the Soul"
      summary="Grace is God's life in us. It is not merely good feelings or personal effort. Grace heals, elevates, strengthens, and makes the soul alive in God."
    >
      <BodySoulSpiritCardGrid>
        {graceCards.map((card) => (
          <BodySoulSpiritCard
            key={card.title}
            title={card.title}
            description={card.description}
          />
        ))}
      </BodySoulSpiritCardGrid>
      <div className="mt-7">
        <BodySoulSpiritLinkPills links={graceLinks} />
      </div>
    </BodySoulSpiritSection>
  );
}

