import type { FamilyPrayer } from "@/types/family";

export const familyPrayers: FamilyPrayer[] = [
  {
    id: "family-prayer-domestic-church",
    title: "Prayer for the Domestic Church",
    slug: "prayer-for-the-domestic-church",
    body: `Holy Spirit,
come dwell in our home.

Make this family a place of prayer,
mercy, patience, forgiveness,
truth, and love.

Teach us to serve one another,
to speak with gentleness,
to seek Christ in daily life,
and to grow in the Fruits of Your grace.

May our home become a small light
for the glory of God.

Amen.`,
    category: "family-life",
    whenToPray: "At the beginning of the week or when your family wants to begin again.",
    sourceType: "daily-oratory",
    copyrightStatus: "original",
    sortOrder: 10,
  },
  {
    id: "family-prayer-parents-caregivers",
    title: "Prayer for Parents and Caregivers",
    slug: "prayer-for-parents-and-caregivers",
    body: `Lord Jesus,
give me wisdom, patience, and courage.

Help me lead by serving,
teach by example,
correct with love,
forgive with humility,
and protect those entrusted to my care.

Let my home reflect Your mercy,
Your truth,
and Your peace.

Amen.`,
    category: "parents",
    whenToPray: "Before a difficult day, after conflict, or when asking for steadiness.",
    sourceType: "daily-oratory",
    copyrightStatus: "original",
    sortOrder: 20,
  },
  {
    id: "family-prayer-peace",
    title: "Prayer for Family Peace",
    slug: "prayer-for-family-peace",
    body: `Lord Jesus,
bring peace where there is tension,
healing where there is hurt,
patience where there is frustration,
and mercy where there is resentment.

Help us begin again with love.

Amen.`,
    category: "peace",
    whenToPray: "After arguments, during stress, or at the end of the day.",
    sourceType: "daily-oratory",
    copyrightStatus: "original",
    sortOrder: 30,
  },
];
