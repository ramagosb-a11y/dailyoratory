import { RosarySection } from "@/components/rosary/RosaryUi";
import { CardBody, SmallText } from "@/components/ui/Typography";
import type { RosaryScriptureForMeditation as RosaryScriptureForMeditationType } from "@/types/rosary";

export function RosaryScriptureForMeditation({
  scripture,
}: {
  scripture?: RosaryScriptureForMeditationType;
}) {
  if (!scripture) return null;

  const entries =
    scripture.entries?.length
      ? scripture.entries
          .slice()
          .sort((first, second) => (first.sortOrder ?? 0) - (second.sortOrder ?? 0))
      : scripture.passage && scripture.attribution
        ? [
            {
              passage: scripture.passage,
              attribution: scripture.attribution,
              sortOrder: 10,
            },
          ]
        : [];

  if (!entries.length) return null;

  return (
    <RosarySection
      eyebrow="Scripture for meditation"
      title="Scripture for Meditation"
      summary="Receive the Word slowly and let it remain with you in prayer."
    >
      <div className="space-y-5">
        {entries.map((entry, index) => (
          <article key={`${entry.attribution}-${index}`} className="card-parchment p-7 sm:p-8">
            <CardBody className="space-y-5">
              <p className="daily-prayer-readable">{entry.passage}</p>
            </CardBody>
            <SmallText className="mt-5 font-semibold text-[#2f2a22]">{entry.attribution}</SmallText>
          </article>
        ))}
      </div>
    </RosarySection>
  );
}
