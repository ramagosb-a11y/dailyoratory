import { IndulgenceSection } from "@/components/indulgences/helpers";

export function IndulgenceTypeCards() {
  return (
    <IndulgenceSection
      id="partial-and-plenary"
      eyebrow="Kinds of indulgence"
      title="Partial and plenary indulgences"
      summary="The Church distinguishes between a partial remission and a full remission under the usual conditions."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <article className="card p-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Partial indulgence</p>
          <h3 className="font-display mt-2 text-3xl font-semibold text-navy">A real mercy for ordinary conversion.</h3>
          <p className="mt-4 text-sm leading-7 text-muted">
            A partial indulgence remits part of the temporal punishment due to sin.
          </p>
        </article>
        <article className="card p-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Plenary indulgence</p>
          <h3 className="font-display mt-2 text-3xl font-semibold text-navy">A full remission under the usual conditions.</h3>
          <p className="mt-4 text-sm leading-7 text-muted">
            A plenary indulgence remits all temporal punishment due to sin, under the usual conditions
            and the specific indulgenced act.
          </p>
        </article>
      </div>
    </IndulgenceSection>
  );
}
