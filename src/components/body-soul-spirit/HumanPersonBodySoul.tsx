import { humanPersonPoints, spiritLanguageNote } from "@/data/bodySoulSpiritPage";
import {
  BodySoulSpiritCard,
  BodySoulSpiritCardGrid,
  BodySoulSpiritSection,
} from "@/components/body-soul-spirit/BodySoulSpiritUi";

export function HumanPersonBodySoul() {
  return (
    <BodySoulSpiritSection
      eyebrow="The human person"
      title="Body and Soul: Created for God"
      summary="Catholic teaching sees the human person as a unity of body and soul. The body is not bad. The soul is not an escape from the body. God created the whole person for communion with Him."
    >
      <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="card-parchment p-6">
          <ul className="grid gap-3 md:grid-cols-2">
            {humanPersonPoints.map((point) => (
              <li key={point} className="rounded-2xl border border-stone bg-ivory px-4 py-3 text-sm font-semibold text-navy">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <BodySoulSpiritCard
          title="Spirit and the inner life"
          description={spiritLanguageNote}
          meta="Pastoral note"
        />
      </div>
    </BodySoulSpiritSection>
  );
}

