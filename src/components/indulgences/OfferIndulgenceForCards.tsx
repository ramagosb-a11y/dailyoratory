import { offerForCards } from "@/components/indulgences/content";
import { IndulgenceSection, NotePanel } from "@/components/indulgences/helpers";

export function OfferIndulgenceForCards() {
  return (
    <IndulgenceSection
      id="for-whom"
      eyebrow="For whom can I offer this?"
      title="For whom can I offer this?"
      summary="Indulgences may be applied to oneself or to the dead by way of suffrage, according to the Church's norms."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {offerForCards.map((card) => (
          <article key={card.title} className="card p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-5">
        <NotePanel title="Prayer">
          Lord, apply this indulgence according to Your holy will, especially where Your mercy is most
          needed. Amen.
        </NotePanel>
      </div>
    </IndulgenceSection>
  );
}
