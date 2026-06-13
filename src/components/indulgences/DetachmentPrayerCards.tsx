import { getIndulgencePrayers } from "@/lib/indulgences";
import { IndulgenceSection } from "@/components/indulgences/helpers";
import { IndulgencePrayerCard } from "@/components/indulgences/IndulgencePrayerCard";

export function DetachmentPrayerCards() {
  const prayers = getIndulgencePrayers().filter((prayer) =>
    ["short-prayer-for-detachment", "prayer-before-plenary-indulgence", "prayer-for-complete-detachment"].includes(
      prayer.id,
    ),
  );

  return (
    <IndulgenceSection
      id="detachment-prayers"
      eyebrow="Prayer"
      title="Detachment prayer cards"
      summary="Ask for this grace directly. The Church's conditions should lead us to prayer, not self-reliance."
    >
      <div className="grid gap-5">
        {prayers.map((prayer) => (
          <IndulgencePrayerCard key={prayer.id} prayer={prayer} />
        ))}
      </div>
    </IndulgenceSection>
  );
}
