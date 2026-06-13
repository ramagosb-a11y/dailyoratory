import { IndulgenceSection, NotePanel } from "@/components/indulgences/helpers";

export function PlenaryOrPartialExplainer() {
  return (
    <IndulgenceSection
      id="plenary-or-partial"
      eyebrow="Gentle explainer"
      title="Plenary or partial?"
      summary="Daily Oratory can help you prepare, but it cannot judge the interior state of your soul."
    >
      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="content-card p-6 sm:p-8">
          <p className="text-sm leading-7 text-muted">
            A plenary indulgence removes all temporal punishment due to sin, under the usual conditions
            and the indulgenced work. A partial indulgence removes part of it. If a person sincerely
            completes the work but lacks one of the full conditions, especially complete detachment from
            sin, the indulgence may be partial.
          </p>
        </article>
        <NotePanel title="Trust mercy">
          Daily Oratory cannot judge the interior state of the soul. Trust God&apos;s mercy, seek sincere
          conversion, and ask a priest if you are unsure.
        </NotePanel>
      </div>
    </IndulgenceSection>
  );
}
