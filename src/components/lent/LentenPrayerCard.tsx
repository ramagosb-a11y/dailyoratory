import { TrackedLentPrayerCard } from "@/components/lent/TrackedLentPrayerCard";

const prayer = `Lord Jesus Christ,
lead me into the desert with You.

Teach me to pray with a sincere heart,
to fast with humility,
and to give with generous love.

Reveal what needs conversion within me.
Detach me from sin,
heal what is wounded,
and strengthen me against temptation.

May this Lent draw me closer to Your Cross,
prepare me for Confession,
and open my heart to the joy of Your Resurrection.

Amen.`;

export function LentenPrayerCard() {
  return <TrackedLentPrayerCard title="A Prayer for Lent" prayer={prayer} />;
}

