import { getIndulgencePrayers } from "@/lib/indulgences";
import { IndulgenceSection } from "@/components/indulgences/helpers";

export function BeforeIndulgencedWorkPanel() {
  const prayer = getIndulgencePrayers().find((item) => item.id === "before-an-indulgenced-work");

  return (
    <IndulgenceSection
      id="before-indulgenced-work"
      eyebrow="Before you begin"
      title="Before an indulgenced work"
      summary="Pause and renew your intention before the Rosary, Adoration, Scripture, a church visit, a pilgrimage, a work of mercy, or another indulgenced act."
    >
      <article className="prayer-card p-5 sm:p-7">
        <p className="whitespace-pre-line text-base leading-8 text-navy">{prayer?.body}</p>
      </article>
    </IndulgenceSection>
  );
}
