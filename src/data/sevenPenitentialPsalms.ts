import type {
  PenitentialPsalm,
  PenitentialPsalmJourneyDay,
  PenitentialPsalmRelatedLink,
} from "@/types/sevenPenitentialPsalms";

export const penitentialPsalms: PenitentialPsalm[] = [
  {
    id: "penitential-psalm-6",
    psalmNumber: 6,
    title: "A Cry for Mercy",
    theme: "Sorrow, weakness, and pleading for God's help.",
    reflection:
      "Psalm 6 gives voice to the soul that feels the weight of sin and suffering but still turns to God for mercy.",
    heartQuestion: "Where do I need to ask God for mercy instead of hiding in shame?",
    usccbUrl: "https://bible.usccb.org/bible/psalms/6",
    sortOrder: 1,
  },
  {
    id: "penitential-psalm-32",
    psalmNumber: 32,
    title: "The Joy of Forgiveness",
    theme: "Confession, honesty, and the blessing of being forgiven.",
    reflection:
      "Psalm 32 reminds us that mercy brings joy. The soul becomes free when it stops hiding and returns honestly to God.",
    heartQuestion: "What do I need to bring into the light before God?",
    usccbUrl: "https://bible.usccb.org/bible/psalms/32",
    sortOrder: 2,
  },
  {
    id: "penitential-psalm-38",
    psalmNumber: 38,
    title: "The Pain of Sin and the Need for Healing",
    theme: "Guilt, suffering, humility, and healing.",
    reflection:
      "Psalm 38 speaks to the pain sin causes in the soul and the need to cry out to God for restoration.",
    heartQuestion: "Where do I need Christ's healing mercy?",
    usccbUrl: "https://bible.usccb.org/bible/psalms/38",
    sortOrder: 3,
  },
  {
    id: "penitential-psalm-51",
    psalmNumber: 51,
    title: "Create in Me a Clean Heart",
    theme: "Contrition, cleansing, renewal, and mercy.",
    reflection:
      "Psalm 51, the Miserere, is one of the Church's most beloved prayers of repentance. It teaches the soul to ask not only for pardon, but for a new heart.",
    heartQuestion: "What part of my heart needs to be made new?",
    usccbUrl: "https://bible.usccb.org/bible/psalms/51",
    sortOrder: 4,
  },
  {
    id: "penitential-psalm-102",
    psalmNumber: 102,
    title: "Prayer in Affliction",
    theme: "Suffering, vulnerability, and trust in God's faithfulness.",
    reflection:
      "Psalm 102 brings affliction, weakness, and distress before God while still trusting His enduring mercy.",
    heartQuestion: "What suffering do I need to place before the Lord?",
    usccbUrl: "https://bible.usccb.org/bible/psalms/102",
    sortOrder: 5,
  },
  {
    id: "penitential-psalm-130",
    psalmNumber: 130,
    title: "Out of the Depths",
    theme: "Hope, forgiveness, waiting, and redemption.",
    reflection:
      "Psalm 130 teaches the soul to cry from the depths without losing hope, because with the Lord there is mercy and redemption.",
    heartQuestion: "Where do I need to wait for the Lord with hope?",
    usccbUrl: "https://bible.usccb.org/bible/psalms/130",
    sortOrder: 6,
  },
  {
    id: "penitential-psalm-143",
    psalmNumber: 143,
    title: "Teach Me to Do Your Will",
    theme: "Mercy, guidance, deliverance, and surrender.",
    reflection:
      "Psalm 143 asks God not only for mercy, but for guidance in walking according to His will.",
    heartQuestion: "Where do I need God to teach me the next faithful step?",
    usccbUrl: "https://bible.usccb.org/bible/psalms/143",
    sortOrder: 7,
  },
] as const;

export const penitentialPsalmReasons = [
  {
    title: "To awaken contrition",
    description: "They help the heart recognize sin without hiding, excusing, or despairing.",
  },
  {
    title: "To seek mercy",
    description: "They teach the soul to cry out to God with trust.",
  },
  {
    title: "To prepare for Confession",
    description: "They can help a person pray before examining conscience and receiving the Sacrament of Reconciliation.",
  },
  {
    title: "To pray during Lent",
    description: "They are especially fitting during penitential seasons, retreats, Fridays, and times of conversion.",
  },
  {
    title: "To begin again after a fall",
    description: "They give the soul words when it feels weak, guilty, or spiritually tired.",
  },
  {
    title: "To grow in detachment from sin",
    description: "They help the heart reject sin and return to God's will.",
  },
] as const;

export const penitentialPsalmJourney: PenitentialPsalmJourneyDay[] = [
  {
    id: "penitential-journey-day-1",
    dayNumber: 1,
    psalmNumber: 6,
    title: "Cry for Mercy",
    practice: "Pray honestly about weakness and ask God not to let shame keep you from Him.",
    sortOrder: 1,
  },
  {
    id: "penitential-journey-day-2",
    dayNumber: 2,
    psalmNumber: 32,
    title: "Joy of Forgiveness",
    practice: "Ask for the grace to stop hiding and bring your heart into the light.",
    sortOrder: 2,
  },
  {
    id: "penitential-journey-day-3",
    dayNumber: 3,
    psalmNumber: 38,
    title: "Need for Healing",
    practice: "Name one wound, habit, or consequence of sin that needs Christ's healing.",
    sortOrder: 3,
  },
  {
    id: "penitential-journey-day-4",
    dayNumber: 4,
    psalmNumber: 51,
    title: "Clean Heart",
    practice: "Make an act of contrition and ask God to renew your heart.",
    sortOrder: 4,
  },
  {
    id: "penitential-journey-day-5",
    dayNumber: 5,
    psalmNumber: 102,
    title: "Prayer in Affliction",
    practice: "Bring suffering, loneliness, or discouragement before the Lord.",
    sortOrder: 5,
  },
  {
    id: "penitential-journey-day-6",
    dayNumber: 6,
    psalmNumber: 130,
    title: "Hope from the Depths",
    practice: "Wait for God's mercy with trust. Do not despair.",
    sortOrder: 6,
  },
  {
    id: "penitential-journey-day-7",
    dayNumber: 7,
    psalmNumber: 143,
    title: "Teach Me Your Will",
    practice: "Ask God for one concrete step of obedience and conversion.",
    sortOrder: 7,
  },
] as const;

export const penitentialPsalmReflectionQuestions = [
  "What Psalm speaks most clearly to my heart right now?",
  "Am I hiding any sin, wound, or fear from God?",
  "Where do I need mercy most?",
  "What would it mean to make a sincere confession?",
  "What near occasion of sin should I avoid?",
  "What virtue is God asking me to practice?",
  "Where do I need to begin again?",
  "How is God inviting me to hope?",
] as const;

export const penitentialPsalmRelatedLinks: PenitentialPsalmRelatedLink[] = [
  {
    id: "penitential-link-confession",
    title: "Confession Guide",
    description: "Prepare for the Sacrament of Reconciliation with peace, honesty, and trust in mercy.",
    href: "/confession",
    category: "confession",
    sortOrder: 1,
  },
  {
    id: "penitential-link-examination",
    title: "Examination of Conscience",
    description: "Review your conscience prayerfully before bringing sin to Christ in Confession.",
    href: "/confession/examination",
    category: "confession",
    sortOrder: 2,
  },
  {
    id: "penitential-link-sin",
    title: "Sin and Temptation",
    description: "Understand repentance, temptation, healing, and ongoing conversion.",
    href: "/sin-and-temptation",
    category: "formation",
    sortOrder: 3,
  },
  {
    id: "penitential-link-resist",
    title: "Resisting Temptation",
    description: "Use practical Catholic steps when temptation appears.",
    href: "/sin-and-temptation/resisting-temptation",
    category: "formation",
    sortOrder: 4,
  },
  {
    id: "penitential-link-habit",
    title: "Habitual Sin",
    description: "See how grace and perseverance can break repeated patterns of sin.",
    href: "/sin-and-temptation/habitual-sin",
    category: "formation",
    sortOrder: 5,
  },
  {
    id: "penitential-link-detachment",
    title: "Complete Detachment from Sin",
    description: "Learn how repentance and grace help the heart reject sin more fully.",
    href: "/indulgences/detachment-from-sin",
    category: "formation",
    sortOrder: 6,
  },
  {
    id: "penitential-link-examen",
    title: "Daily Examen",
    description: "End the day with gratitude, honesty, and hope in God's mercy.",
    href: "/daily-examen",
    category: "prayer",
    sortOrder: 7,
  },
  {
    id: "penitential-link-scripture",
    title: "Scripture Prayer",
    description: "Keep praying with the Word of God through Catholic Scripture meditation.",
    href: "/library/scripture-prayer",
    category: "prayer",
    sortOrder: 8,
  },
  {
    id: "penitential-link-pray",
    title: "Prayer",
    description: "Return to prayer as the place where repentance meets mercy and hope.",
    href: "/pray",
    category: "prayer",
    sortOrder: 9,
  },
] as const;

export const prayerBeforePenitentialPsalms = `Lord Jesus Christ,
I come before You with a humble and contrite heart.

Teach me to see my sins without despair,
to confess them without excuse,
and to trust Your mercy without fear.

As I pray these Psalms,
open my heart to repentance,
heal what sin has wounded,
and lead me back to the Father.

Create in me a clean heart,
renew a right spirit within me,
and make me faithful to Your grace.

Amen.`;

export const closingPrayerAfterPenitentialPsalms = `Merciful Father,
thank You for hearing the cry of the contrite heart.

Receive my sorrow,
strengthen my hope,
and help me walk in newness of life.

May these Psalms lead me not into fear,
but into deeper trust,
greater humility,
and a more faithful love for You.

Through Jesus Christ our Lord.

Amen.`;
