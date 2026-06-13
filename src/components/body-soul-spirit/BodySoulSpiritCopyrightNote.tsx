import { bodySoulSpiritCopyrightNote } from "@/data/bodySoulSpiritPage";
import { BodySoulSpiritSection } from "@/components/body-soul-spirit/BodySoulSpiritUi";

export function BodySoulSpiritCopyrightNote() {
  return (
    <BodySoulSpiritSection
      eyebrow="Source note"
      title="Source and Copyright Note"
      summary={bodySoulSpiritCopyrightNote}
    >
      <div className="rounded-[1.5rem] border border-stone bg-white/70 p-5">
        <p className="text-sm leading-7 text-muted">
          The interior temple image is offered as a hopeful aid for prayer, repentance, and
          spiritual self-knowledge. For doctrine, sacramental teaching, and the Church's precise
          language, use the Catechism and the official sources linked above.
        </p>
      </div>
    </BodySoulSpiritSection>
  );
}

