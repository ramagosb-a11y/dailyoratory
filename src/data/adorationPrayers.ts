import type { AdorationPrayer } from "@/types/adoration";

export const adorationPrayers: AdorationPrayer[] = [
  {
    id: "adoration-prayer-beginning",
    title: "Prayer at the Beginning of Adoration",
    slug: "prayer-at-the-beginning-of-adoration",
    body: `Lord Jesus Christ,
I believe You are truly present in the Eucharist.
I come before You with faith, love, and need.

Quiet my heart.
Teach me to adore You.
Help me listen, trust, repent, and love.

Make this time a gift of grace.
Amen.`,
    category: "beginning",
    whenToPray: "At the beginning of a visit or holy hour.",
    sourceType: "daily-oratory",
    copyrightStatus: "original",
    sortOrder: 10,
    sourceNote: "Original Daily Oratory text",
  },
  {
    id: "adoration-prayer-surrender",
    title: "Prayer of Surrender",
    slug: "prayer-of-surrender",
    body: `Jesus,
I place before You my worries,
my plans,
my wounds,
my sins,
and my desires.

Take what is not of You.
Heal what is wounded.
Strengthen what is weak.
Make my heart entirely Yours.

Amen.`,
    category: "surrender",
    whenToPray: "When the heart feels burdened, restless, or divided.",
    sourceType: "daily-oratory",
    copyrightStatus: "original",
    sortOrder: 20,
    sourceNote: "Original Daily Oratory text",
  },
  {
    id: "adoration-prayer-eucharistic-love",
    title: "Prayer for Love of the Eucharist",
    slug: "prayer-for-love-of-the-eucharist",
    body: `Lord Jesus,
increase my faith in Your Eucharistic presence.
Draw me more deeply into the Mass,
teach me to receive You with reverence,
and make my life a living thanksgiving.

Amen.`,
    category: "eucharistic-love",
    whenToPray: "When asking for deeper Eucharistic faith and reverence.",
    sourceType: "daily-oratory",
    copyrightStatus: "original",
    sortOrder: 30,
    sourceNote: "Original Daily Oratory text",
  },
  {
    id: "adoration-prayer-homebound",
    title: "Prayer for the Homebound",
    slug: "prayer-for-the-homebound",
    body: `Lord Jesus,
be near to all who cannot come before You in a chapel today.
Console the sick, the elderly, the lonely, and the homebound.
Unite their prayers with Your Church
and fill them with Your peace.

Amen.`,
    category: "homebound",
    whenToPray: "When praying from home or interceding for those unable to visit a chapel.",
    sourceType: "daily-oratory",
    copyrightStatus: "original",
    sortOrder: 40,
    sourceNote: "Original Daily Oratory text",
  },
];
