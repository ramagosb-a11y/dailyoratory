import { interiorTempleImages } from "@/data/bodySoulSpiritPage";
import {
  BodySoulSpiritCard,
  BodySoulSpiritCardGrid,
  BodySoulSpiritLinkPills,
  BodySoulSpiritSection,
} from "@/components/body-soul-spirit/BodySoulSpiritUi";

export function InteriorTempleMap() {
  return (
    <BodySoulSpiritSection
      eyebrow="Prayerful metaphor"
      title="A Map of the Interior Temple"
      summary="Use these images prayerfully. They are not literal doctrine, but a way of reflecting on the soul, grace, sin, and the life of holiness."
    >
      <BodySoulSpiritCardGrid>
        {interiorTempleImages.map((image) => (
          <BodySoulSpiritCard
            key={image.id}
            title={image.title}
            description={image.spiritualMeaning}
            note={`Reflection: ${image.reflectionQuestion}`}
            meta={image.imagePart}
          >
            <p className="text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">Related practice: </span>
              {image.relatedPractice}
            </p>
            <div className="mt-4">
              <BodySoulSpiritLinkPills links={image.relatedLinks} />
            </div>
          </BodySoulSpiritCard>
        ))}
      </BodySoulSpiritCardGrid>
      <div className="mt-7 rounded-[1.5rem] border border-gold/35 bg-ivory/90 p-5">
        <p className="text-sm leading-7 text-muted">
          The image of the temple is meant to encourage prayer, conversion, and hope. It should
          not become a way of obsessively measuring yourself. Let it turn your heart toward Christ.
        </p>
      </div>
    </BodySoulSpiritSection>
  );
}

