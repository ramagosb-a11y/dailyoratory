import Link from "next/link";
import { IndulgenceSection, NotePanel } from "@/components/indulgences/helpers";

export function DetachmentIndulgenceConnection() {
  return (
    <IndulgenceSection
      id="why-detachment-matters"
      eyebrow="Plenary indulgences"
      title="Why Detachment Matters for Plenary Indulgences"
      summary="The condition of detachment points the soul beyond a checklist and toward deeper freedom in Christ."
    >
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card-parchment p-6 sm:p-8">
          <p className="daily-readable text-base leading-8 text-muted">
            One of the usual conditions for receiving a plenary indulgence is interior detachment from all
            sin, even venial sin. This condition points beyond a checklist. It invites the soul into deeper
            conversion, greater love for God, and freedom from anything that competes with Him.
          </p>
          <div className="mt-6">
            <Link href="/indulgences" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
              Main Indulgences Guide
            </Link>
          </div>
        </div>
        <NotePanel title="Gentle note for the soul">
          <p>
            If full detachment from sin is lacking, the indulgence may be partial rather than plenary. Daily
            Oratory cannot judge the interior state of the soul. Trust God&apos;s mercy, seek sincere conversion,
            and speak with a priest if you are unsure.
          </p>
        </NotePanel>
      </div>
    </IndulgenceSection>
  );
}
