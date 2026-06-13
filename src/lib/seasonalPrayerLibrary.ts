import { prayerLibraryItems } from "@/data/prayers";
import { getLiturgicalDashboardModel } from "@/lib/liturgicalLiving";

export function getSeasonalPrayerRecommendations(date = new Date()) {
  const season = getLiturgicalDashboardModel(date).day.season;

  const prayerIdsBySeason: Record<string, string[]> = {
    Advent: ["advent-wreath-prayers", "o-antiphons", "magnificat-guide", "angelus"],
    Christmas: ["christmas-blessing-prayer", "epiphany-house-blessing", "our-father", "hail-mary"],
    Lent: ["act-of-contrition", "litany-of-humility", "lenten-prayer", "stations-of-the-cross-guide", "psalm-51-guide"],
    Easter: ["regina-caeli", "act-of-spiritual-communion", "anima-christi", "come-holy-spirit"],
    Pentecost: ["come-holy-spirit", "veni-creator-spiritus", "act-of-faith", "act-of-hope"],
    "Ordinary Time": ["angelus", "morning-offering", "our-father", "prayer-before-mass"],
    Marian: ["angelus", "hail-mary", "memorare", "holy-rosary-guide"],
    "All Year": ["morning-offering", "our-father", "prayer-before-mass", "act-of-contrition"],
  };

  const ids = prayerIdsBySeason[season] ?? prayerIdsBySeason["All Year"];

  return {
    season,
    items: ids
      .map((id) => prayerLibraryItems.find((item) => item.id === id))
      .filter((item): item is (typeof prayerLibraryItems)[number] => Boolean(item)),
  };
}
