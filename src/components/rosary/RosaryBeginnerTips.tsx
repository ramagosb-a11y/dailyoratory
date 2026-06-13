import { RosaryCard, RosarySection } from "@/components/rosary/RosaryUi";

const beginnerTips = [
  "Start with one decade if a full Rosary feels long.",
  "Do not worry if you get distracted.",
  "Gently return to Jesus and the mystery.",
  "Use the beads to keep your place.",
  "Read the Scripture scene before each mystery.",
  "Ask Mary to help you love Jesus.",
  "Pray slowly rather than rushing.",
];

export function RosaryBeginnerTips() {
  return (
    <RosarySection
      eyebrow="For beginners"
      title="If You Are New to the Rosary"
      summary="The Rosary becomes easier through patience, not pressure."
    >
      <RosaryCard title="Begin gently" accent="joyful">
        <ul className="grid gap-3 text-sm leading-7 text-muted sm:grid-cols-2">
          {beginnerTips.map((tip) => (
            <li key={tip} className="border-l-2 border-gold pl-4">
              {tip}
            </li>
          ))}
        </ul>
      </RosaryCard>
    </RosarySection>
  );
}
