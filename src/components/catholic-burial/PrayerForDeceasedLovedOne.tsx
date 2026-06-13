import { prayersForTheDead } from "@/data/catholicBurial";
import { TrackedBurialPrayerCard } from "@/components/catholic-burial/TrackedBurialPrayerCard";

export function PrayerForDeceasedLovedOne() {
  const prayer = prayersForTheDead.find((item) => item.id === "deceased-loved-one");
  if (!prayer) return null;

  return (
    <TrackedBurialPrayerCard title={prayer.title} prayer={prayer.prayer} prayerId={prayer.id} />
  );
}
