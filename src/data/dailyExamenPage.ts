import type {
  DailyExamenLink,
  DailyExamenStep,
  ExamenRelatedTool,
  ExamenSituation,
} from "@/types/dailyExamen";

const confessionGuideLink: DailyExamenLink = { label: "Confession Guide", href: "/confession" };
const examinationLink: DailyExamenLink = { label: "Examination of Conscience", href: "/confession/examination" };
const familyLink: DailyExamenLink = { label: "Family and Domestic Church", href: "/family" };
const prayLink: DailyExamenLink = { label: "Prayer", href: "/pray" };
const scripturePrayerLink: DailyExamenLink = { label: "Scripture Prayer", href: "/library/scripture-prayer" };
const ruleOfLifeLink: DailyExamenLink = { label: "Rule of Life", href: "/rule-of-life" };
const liturgyHoursLink: DailyExamenLink = { label: "Liturgy of the Hours", href: "/liturgy-of-the-hours" };

export const dailyExamenHero = {
  eyebrow: "End the day in prayer",
  title: "Daily Examen",
  subtitle: "A peaceful way to review the day with God.",
  copy:
    "The Daily Examen is a prayerful review of the day. With the help of the Holy Spirit, you look back with gratitude, notice God's presence, ask for mercy, and entrust the night to the Lord.",
  note:
    "The Examen is not meant to create anxiety. It is a gentle prayer of gratitude, honesty, mercy, and trust.",
};

export const dailyExamenGuideSubtitle = "A step-by-step guide for ending the day with God.";

export const dailyExamenGuideSteps: DailyExamenStep[] = [
  {
    id: "presence",
    title: "Become aware of God's presence",
    slug: "become-aware-of-gods-presence",
    guide:
      "Pause. Take a slow breath. Make the Sign of the Cross. Ask the Holy Spirit to help you see the day with truth and mercy.",
    prayer: "Holy Spirit, help me see this day as You see it.",
    sortOrder: 10,
  },
  {
    id: "gratitude",
    title: "Give thanks",
    slug: "give-thanks",
    guide:
      "Look for gifts from the day: a moment of peace, a person, a grace, a protection, a small success, or even strength to endure something hard.",
    prayer: "Lord, thank You for the gifts You gave me today.",
    sortOrder: 20,
  },
  {
    id: "review",
    title: "Review the day",
    slug: "review-the-day",
    guide:
      "Walk through the day gently from morning to night. Notice where you felt close to God, where you resisted grace, where love was present, and where you were distracted or closed.",
    prayer: "Jesus, show me where You were present today.",
    sortOrder: 30,
  },
  {
    id: "mercy",
    title: "Ask forgiveness and receive mercy",
    slug: "ask-forgiveness-and-receive-mercy",
    guide:
      "Name any sins, failures, harsh words, missed opportunities, selfishness, impatience, pride, fear, or lack of charity. Do not hide from God. Bring it to His mercy.",
    prayer: "Lord Jesus, have mercy on me. Help me begin again.",
    sortOrder: 40,
  },
  {
    id: "tomorrow",
    title: "Look toward tomorrow",
    slug: "look-toward-tomorrow",
    guide:
      "Ask God for grace for tomorrow. Choose one virtue, one act of love, one repair, or one small step of faith.",
    prayer: "Father, give me the grace to follow You tomorrow.",
    sortOrder: 50,
  },
  {
    id: "rest",
    title: "Rest in God",
    slug: "rest-in-god",
    guide:
      "Entrust your worries, unfinished work, family, sufferings, and sleep to God. End with the Our Father, Hail Mary, Glory Be, or a simple prayer of surrender.",
    prayer: "Into Your hands, Lord, I place this day and this night.",
    sortOrder: 60,
  },
];

export const quickExamenSteps: DailyExamenStep[] = [
  {
    id: "quick-presence",
    title: "Presence",
    slug: "presence",
    guide: "Lord, You are here.",
    prayer: "Lord, You are here.",
    sortOrder: 10,
  },
  {
    id: "quick-gratitude",
    title: "Gratitude",
    slug: "gratitude",
    guide: "Thank You for one gift today.",
    prayer: "Thank You for one gift today.",
    sortOrder: 20,
  },
  {
    id: "quick-review",
    title: "Review",
    slug: "review",
    guide: "Where did I love? Where did I fail to love?",
    prayer: "Where did I love? Where did I fail to love?",
    sortOrder: 30,
  },
  {
    id: "quick-mercy",
    title: "Mercy",
    slug: "mercy",
    guide: "Jesus, forgive me and heal me.",
    prayer: "Jesus, forgive me and heal me.",
    sortOrder: 40,
  },
  {
    id: "quick-tomorrow",
    title: "Tomorrow",
    slug: "tomorrow",
    guide: "Give me grace for one next step.",
    prayer: "Give me grace for one next step.",
    sortOrder: 50,
  },
  {
    id: "quick-rest",
    title: "Rest",
    slug: "rest",
    guide: "I trust You with the night.",
    prayer: "I trust You with the night.",
    sortOrder: 60,
  },
];

export const guidedExamenPrayer = `Lord Jesus,
I come before You at the end of this day.

Thank You for every grace,
every protection,
every person,
and every hidden gift.

Send Your Holy Spirit
to help me see this day with honesty and mercy.

Show me where I received Your love.
Show me where I gave love.
Show me where I failed to love.

Forgive my sins,
heal what is wounded,
and teach me to begin again.

I entrust tomorrow to You.
Give me the grace I need,
the humility to follow You,
and the peace to rest in Your care.

Jesus, I trust in You.
Amen.`;

export const whatIsDailyExamenPoints = [
  "It helps you notice God's presence.",
  "It trains gratitude.",
  "It reveals patterns of grace and resistance.",
  "It helps you repent without despair.",
  "It prepares your heart for tomorrow.",
  "It can be prayed at night, midday, or anytime.",
  "It should lead to peace, conversion, and trust.",
];

export const examenComparisonCards = [
  {
    title: "Daily Examen",
    points: [
      "reviews the day with God",
      "notices gratitude, grace, and resistance",
      "can be prayed daily",
      "helps spiritual awareness grow",
      "is gentle and relational",
      "ends in trust",
    ],
  },
  {
    title: "Examination of Conscience",
    points: [
      "prepares for Confession",
      "identifies sins honestly",
      "looks at commandments, virtues, and duties",
      "helps make a good confession",
      "should lead to contrition and mercy",
      "is especially useful before Reconciliation",
    ],
  },
] as const;

export const examenComparisonLinks: DailyExamenLink[] = [confessionGuideLink, examinationLink];

export const examenSituations: ExamenSituation[] = [
  {
    id: "stressful-day",
    title: "Peace after a stressful day",
    slug: "peace-after-a-stressful-day",
    focus: "Where did God sustain me today?",
    prayerLine: "Lord, show me the grace that carried me when I felt hurried or burdened.",
    relatedLinks: [prayLink],
    sortOrder: 10,
  },
  {
    id: "after-conflict",
    title: "After conflict",
    slug: "after-conflict",
    focus: "Where do I need mercy, humility, or forgiveness?",
    prayerLine: "Jesus, soften my heart and teach me how to repair what was wounded.",
    relatedLinks: [confessionGuideLink],
    sortOrder: 20,
  },
  {
    id: "before-confession",
    title: "Before Confession",
    slug: "before-confession",
    focus: "Where did I knowingly turn away from love?",
    prayerLine: "Merciful Father, let truth bring me to repentance and peace.",
    relatedLinks: [examinationLink],
    sortOrder: 30,
  },
  {
    id: "gratitude",
    title: "For gratitude",
    slug: "for-gratitude",
    focus: "What gifts did God give that I almost missed?",
    prayerLine: "Thank You, Lord, for graces I would have forgotten without Your light.",
    relatedLinks: [prayLink],
    sortOrder: 40,
  },
  {
    id: "grief",
    title: "For grief",
    slug: "for-grief",
    focus: "Where was God near me in sorrow?",
    prayerLine: "Jesus, stay close to me in what still aches.",
    relatedLinks: [{ label: "Ask for Prayer", href: "/ask-for-prayer" }],
    sortOrder: 50,
  },
  {
    id: "families",
    title: "For parents and families",
    slug: "for-parents-and-families",
    focus: "Where did our home show patience, forgiveness, or love?",
    prayerLine: "Lord, bless our home and help us begin again in peace.",
    relatedLinks: [familyLink],
    sortOrder: 60,
  },
  {
    id: "anxiety",
    title: "For anxiety",
    slug: "for-anxiety",
    focus: "What can I surrender to God tonight?",
    prayerLine: "Into Your hands, Lord, I place what I cannot carry alone.",
    relatedLinks: [scripturePrayerLink],
    sortOrder: 70,
  },
  {
    id: "discernment",
    title: "For discernment",
    slug: "for-discernment",
    focus: "What brought faith, hope, charity, peace, or greater love?",
    prayerLine: "Holy Spirit, show me which movements led me closer to Christ.",
    relatedLinks: [ruleOfLifeLink],
    sortOrder: 80,
  },
];

export const familyExamenQuestions = [
  "What are we thankful for today?",
  "Where did we see God's help?",
  "Did we hurt anyone?",
  "Do we need to say sorry?",
  "Who needs our prayers tonight?",
  "What grace do we need tomorrow?",
];

export const familyExamenPrayer =
  "Jesus, thank You for this day. Forgive us, bless us, and help our family love You tomorrow. Amen.";

export const examenJournalPrompts = [
  "What am I most grateful for today?",
  "Where did I notice God's presence?",
  "When did I feel peace, joy, or charity?",
  "Where did I resist grace?",
  "Did I speak or act without love?",
  "What do I need to ask forgiveness for?",
  "Who do I need to forgive?",
  "What is one grace I need tomorrow?",
  "What is one small act of love I can choose?",
  "What can I entrust to God before sleep?",
];

export const nightPrayerLinks: DailyExamenLink[] = [
  liturgyHoursLink,
  prayLink,
  scripturePrayerLink,
];

export const dailyExamenRelatedTools: ExamenRelatedTool[] = [
  {
    title: "Prayer",
    description: "Keep daily prayer simple and steady from morning offering to night surrender.",
    href: "/pray",
    cta: "Begin in Prayer",
  },
  {
    title: "Confession Guide",
    description: "Prepare for mercy and bring repentance to the sacrament with peace.",
    href: "/confession",
    cta: "Prepare for Confession",
  },
  {
    title: "Examination of Conscience",
    description: "Use a fuller guided review when you are preparing for Reconciliation.",
    href: "/confession/examination",
    cta: "Start Examination",
  },
  {
    title: "Rule of Life",
    description: "Build a realistic Catholic rhythm of prayer, Scripture, virtue, and mercy.",
    href: "/rule-of-life",
    cta: "Open Rule of Life",
  },
  {
    title: "Virtue Tracker",
    description: "Notice patterns, ask for grace, and choose one concrete next step.",
    href: "/virtue-tracker",
    cta: "Track Virtue",
  },
  {
    title: "Scripture Prayer",
    description: "Let the Word of God shape your review, repentance, and trust.",
    href: "/library/scripture-prayer",
    cta: "Pray with Scripture",
  },
  {
    title: "Liturgy of the Hours",
    description: "End the day with Night Prayer and the prayer of the whole Church.",
    href: "/liturgy-of-the-hours",
    cta: "Pray the Hours",
  },
  {
    title: "Family and Domestic Church",
    description: "Keep family prayer gentle, peaceful, and rooted in mercy.",
    href: "/family",
    cta: "Open Family Prayer",
  },
  {
    title: "Formation",
    description: "Grow in doctrine, virtue, prayer, and daily discipleship with the Holy Spirit.",
    href: "/formation",
    cta: "Begin Formation",
  },
  {
    title: "Body, Soul, and Spirit",
    description: "Reflect on the soul as an interior temple and let the Examen lead toward healing, grace, and mercy.",
    href: "/body-soul-spirit",
    cta: "Enter the Interior Temple",
  },
  {
    title: "Ask for Prayer",
    description: "Invite others to carry your intentions when the day has been heavy.",
    href: "/ask-for-prayer",
    cta: "Ask for Prayer",
  },
];

export const dailyExamenCopyrightNote =
  "Daily Oratory provides original summaries and prayer guides. It does not copy long external articles or copyrighted devotional materials. The Examen is commonly associated with Saint Ignatius of Loyola and Ignatian spirituality.";
