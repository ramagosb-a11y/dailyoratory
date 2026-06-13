import { getIndulgencePrayers } from "@/lib/indulgences";
import { IndulgenceSection, NotePanel } from "@/components/indulgences/helpers";
import { IndulgencePrayerCard } from "@/components/indulgences/IndulgencePrayerCard";
import { TraditionalPopeIntentionsCard } from "@/components/indulgences/TraditionalPopeIntentionsCard";

export function EverydayIndulgencePrayerRoutine() {
  const prayers = getIndulgencePrayers().filter((prayer) =>
    ["daily-indulgence-intention", "prayer-for-detachment-from-sin", "holy-father-and-priests"].includes(prayer.id),
  );

  const categoryLabels: Record<string, string> = {
    "daily-indulgence-intention": "Indulgence Intention",
    "prayer-for-detachment-from-sin": "Detachment from Sin",
    "holy-father-and-priests": "Holy Father's Intentions",
  };

  return (
    <IndulgenceSection
      id="daily-indulgence-routine"
      eyebrow="Daily prayer routine"
      title="Everyday Indulgence Prayer Routine"
      summary="A simple daily prayer pattern to offer your intentions, ask for detachment from sin, and pray for the Holy Father."
    >
      <NotePanel title="A spiritual aid">
        You may pray these prayers each morning or before completing an indulgenced work. They help
        express your intention and ask for grace, but they do not replace the usual conditions required
        for a plenary indulgence.
      </NotePanel>
      <div className="mt-5 grid gap-5">
        {prayers.map((prayer) => (
          <IndulgencePrayerCard key={prayer.id} prayer={prayer} category={categoryLabels[prayer.id]} />
        ))}
        <TraditionalPopeIntentionsCard />
      </div>
    </IndulgenceSection>
  );
}
