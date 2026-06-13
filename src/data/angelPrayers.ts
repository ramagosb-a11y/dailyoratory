import type { AngelPrayer } from "@/types/angels";

export const angelPrayers: AngelPrayer[] = [
  {
    id: "guardian-angel-prayer",
    title: "Prayer to My Guardian Angel",
    slug: "guardian-angel-prayer",
    body: `Angel of God,
my guardian dear,
to whom God's love commits me here,
ever this day be at my side,
to light and guard,
to rule and guide.

Amen.`,
    category: "guardian-angels",
    sourceType: "daily-oratory",
    copyrightStatus: "traditional-prayer",
    sortOrder: 10,
  },
  {
    id: "saint-michael-prayer",
    title: "Prayer to Saint Michael the Archangel",
    slug: "saint-michael-prayer",
    body: `Saint Michael the Archangel,
defend us in battle.
Be our protection against the wickedness and snares of the devil.
May God rebuke him, we humbly pray;
and do thou, O Prince of the heavenly host,
by the power of God,
cast into hell Satan and all the evil spirits
who prowl about the world seeking the ruin of souls.

Amen.`,
    category: "archangels",
    sourceType: "daily-oratory",
    copyrightStatus: "traditional-prayer",
    sortOrder: 20,
  },
  {
    id: "angelic-protection-prayer",
    title: "Short Prayer for Angelic Protection",
    slug: "angelic-protection-prayer",
    body: `Lord God,
thank You for the holy angels
who worship You and serve Your saving plan.

Send Your angels to guard my path,
protect me from evil,
and help me follow Jesus faithfully.

Amen.`,
    category: "protection",
    sourceType: "daily-oratory",
    copyrightStatus: "original-summary",
    sortOrder: 30,
  },
];
