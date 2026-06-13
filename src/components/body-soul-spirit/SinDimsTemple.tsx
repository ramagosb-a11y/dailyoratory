import {
  sinPastoralNote,
  sinStateCards,
  sinTempleImages,
} from "@/data/bodySoulSpiritPage";
import {
  BodySoulSpiritCard,
  BodySoulSpiritCardGrid,
  BodySoulSpiritSection,
} from "@/components/body-soul-spirit/BodySoulSpiritUi";

export function SinDimsTemple() {
  return (
    <BodySoulSpiritSection
      eyebrow="Sin and mercy"
      title="When Sin Dims the Temple"
      summary="Sin is not merely breaking a rule. Sin wounds love, disorders the soul, darkens the conscience, weakens virtue, and turns the heart away from God."
    >
      <BodySoulSpiritCardGrid columns="md:grid-cols-2 xl:grid-cols-3">
        {sinTempleImages.map((card) => (
          <BodySoulSpiritCard
            key={card.title}
            title={card.title}
            description={card.description}
          />
        ))}
      </BodySoulSpiritCardGrid>
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {sinStateCards.map((card) => (
          <BodySoulSpiritCard
            key={card.title}
            title={card.title}
            description={card.description}
            meta="Catholic teaching"
          />
        ))}
      </div>
      <div className="mt-7 rounded-[1.5rem] border border-gold/35 bg-ivory/90 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Pastoral note</p>
        <p className="mt-3 text-sm leading-7 text-muted">{sinPastoralNote}</p>
      </div>
    </BodySoulSpiritSection>
  );
}

