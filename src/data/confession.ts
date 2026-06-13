import type { ConfessionGuideLink, ConfessionGuideTopicRecord, ConfessionPrayerRecord } from "@/types/confession";

const staticSource = { system: "static" as const };

export const confessionPastoralNote =
  "This guide supports preparation for the Sacrament of Reconciliation. It does not replace priestly counsel, parish guidance, or the grace of the sacrament itself.";

export const confessionMoralDiscernmentNote =
  "Daily Oratory does not determine whether a sin is mortal or venial. When you are unsure, bring the matter simply and honestly to a priest.";

export const confessionNavigationLinks: ConfessionGuideLink[] = [
  {
    title: "Overview",
    description: "A gentle starting point for preparing for confession.",
    href: "/confession",
  },
  {
    title: "How to Go",
    description: "The simple order of approaching the sacrament.",
    href: "/confession/how-to-go",
  },
  {
    title: "Guided Examination",
    description: "Private local-only prompts for preparing well.",
    href: "/confession/examination",
  },
  {
    title: "Sins",
    description: "A merciful overview of sin, conscience, and conversion.",
    href: "/confession/sins",
  },
  {
    title: "Habitual Sin",
    description: "Patient support for repeated struggles.",
    href: "/confession/habitual-sin",
  },
  {
    title: "Resisting Temptation",
    description: "Practical help before temptation becomes consent.",
    href: "/confession/resisting-temptation",
  },
  {
    title: "Predominant Fault",
    description: "Name the recurring root that needs grace.",
    href: "/confession/predominant-fault",
  },
  {
    title: "Prayers",
    description: "Short prayers before and after confession.",
    href: "/confession/prayers",
  },
];

export const confessionPreparationSteps = [
  {
    title: "Begin with mercy",
    text: "Start by looking at Christ, not at yourself alone. Ask for light, honesty, sorrow, and confidence in mercy.",
  },
  {
    title: "Examine gently",
    text: "Use a short examination or the guided tool. Mark what you need to confess without spiraling into fear.",
  },
  {
    title: "Name sins plainly",
    text: "Prepare simple words. If you are unsure how to say something, tell the priest you need help.",
  },
  {
    title: "Receive grace",
    text: "Confession is a sacrament of healing. Receive absolution, complete your penance, and take one faithful next step.",
  },
];

export const confessionGuideCards: ConfessionGuideLink[] = [
  {
    title: "How to go to confession",
    description: "A step-by-step guide for approaching the sacrament with peace.",
    href: "/confession/how-to-go",
    label: "Sacrament guide",
  },
  {
    title: "Guided Examination of Conscience",
    description: "Private local-only prompts for confession preparation. Notes stay on this device.",
    href: "/confession/examination/start",
    label: "Begin examination",
  },
  {
    title: "Confession prayers",
    description: "Pray before examination, before confession, and after receiving mercy.",
    href: "/confession/prayers",
    label: "Prayer",
  },
  {
    title: "Understanding sin",
    description: "A clear and hopeful overview of sin, conscience, culpability, and conversion.",
    href: "/confession/sins",
    label: "Formation",
  },
  {
    title: "Habitual sin support",
    description: "A non-shaming path for repeated struggles, safeguards, sacraments, and support.",
    href: "/confession/habitual-sin",
    label: "Growth",
  },
  {
    title: "Resisting temptation",
    description: "Practical Catholic tools for naming temptation early and turning toward love.",
    href: "/confession/resisting-temptation",
    label: "Daily help",
  },
  {
    title: "Predominant fault",
    description: "A focused way to bring recurring patterns to prayer, confession, and virtue.",
    href: "/confession/predominant-fault",
    label: "Self-knowledge",
  },
];

export const confessionRelatedLinks: ConfessionGuideLink[] = [
  {
    title: "Returning to Confession pathway",
    description: "A peaceful formation track for receiving the sacrament again.",
    href: "/pathways/returning-to-confession",
  },
  {
    title: "Healing from Habitual Sin pathway",
    description: "Bring repeated struggles into mercy, truth, and concrete support.",
    href: "/pathways/healing-from-habitual-sin",
  },
  {
    title: "Virtue and Vice Tracker",
    description: "Privately notice patterns and prepare for confession without scores or streaks.",
    href: "/virtue-tracker/confession-prep",
  },
  {
    title: "Daily Rule of Life",
    description: "Build a simple rhythm of prayer, sacraments, virtue, and works of mercy.",
    href: "/rule-of-life",
  },
];

export const confessionPrayers: ConfessionPrayerRecord[] = [
  {
    title: "Prayer before examination",
    text: "Holy Spirit, give me light without fear, honesty without despair, and confidence in the mercy of Jesus Christ.",
    sourceNote: "Original Daily Oratory text",
  },
  {
    title: "Prayer for contrition",
    text: "Lord Jesus, I am sorry for the sins by which I have failed to love you and my neighbor. Give me true sorrow, a steady will, and trust in your forgiveness.",
    sourceNote: "Original Daily Oratory text",
  },
  {
    title: "Traditional Act of Contrition",
    text: "O my God, I am heartily sorry for having offended Thee, and I detest all my sins because I dread the loss of Heaven and the pains of hell, but most of all because they offend Thee, my God, who art all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to confess my sins, to do penance, and to amend my life. Amen.",
    sourceNote: "Traditional public domain",
  },
  {
    title: "Prayer before confession",
    text: "Merciful Father, help me speak plainly and humbly. Let this confession restore peace, courage, and a deeper love for your will.",
    sourceNote: "Original Daily Oratory text",
  },
  {
    title: "Prayer when returning after a long time",
    text: "Jesus, Good Shepherd, I come back to you. Lead me without shame, receive me with mercy, and teach me to begin again.",
    sourceNote: "Original Daily Oratory text",
  },
  {
    title: "Thanksgiving after confession",
    text: "Thank you, Lord, for mercy received. Help me complete my penance, repair what I can, avoid what leads me from you, and walk in grace today.",
    sourceNote: "Original Daily Oratory text",
  },
];

export const confessionGuideTopics: ConfessionGuideTopicRecord[] = [
  {
    id: "confession-topic-sins",
    title: "Sins",
    slug: "sins",
    description: "A pastoral overview of sin, conscience, culpability, and conversion.",
    category: "Confession",
    tags: ["confession", "sin", "conscience", "conversion", "mercy"],
    relatedResourceIds: ["res-confession-guide", "exam-before-confession", "pathway-returning-to-confession"],
    status: "published",
    createdAt: "2026-05-08",
    updatedAt: "2026-05-08",
    visibility: "public",
    source: staticSource,
    schemaVersion: 1,
    contentType: "confession-topic",
    path: "/confession/sins",
    eyebrow: "Mercy and truth",
    summary:
      "Catholic teaching on sin is meant to lead the heart toward repentance, healing, and restored communion with God.",
    pastoralNote:
      "Do not use this page to diagnose yourself harshly. Speak with a priest about serious questions, confusion, fear, or scrupulosity.",
    sections: [
      {
        title: "Sin wounds communion",
        body:
          "Sin is a failure to love God, neighbor, or the truth of who we are before God. The Church names sin honestly because Christ came to forgive, heal, and restore communion.",
      },
      {
        title: "Conscience needs formation",
        body:
          "A good confession begins with a conscience willing to be taught by Scripture, the Church, prayer, and honest counsel. Conscience is not a private escape from truth, and it is not a place for panic.",
        items: [
          "Ask what love required in the moment.",
          "Notice choices that were deliberate, repeated, hidden, or excused.",
          "Bring uncertainty to the priest instead of trying to settle everything alone.",
        ],
      },
      {
        title: "Serious sin should be brought plainly",
        body:
          "Catholic moral tradition considers grave matter, knowledge, and deliberate consent when discerning serious sin. A website cannot judge the full state of a soul, so confession preparation should lead to honest speech with a priest.",
        items: [
          "Name the kind of sin simply.",
          "Include frequency when helpful.",
          "Ask for help if you do not know whether something should be confessed.",
        ],
      },
      {
        title: "Conversion is hopeful",
        body:
          "The point of examination is not self-condemnation. It is a return to the Father, a renewal of grace, and a concrete next step in charity.",
      },
    ],
    practices: [
      {
        title: "Start a guided examination",
        description: "Review prompts privately and mark only what helps you confess clearly.",
        href: "/confession/examination/start",
      },
      {
        title: "Read how to go",
        description: "See the simple shape of the sacrament before you arrive.",
        href: "/confession/how-to-go",
      },
    ],
    relatedLinks: [
      {
        title: "Returning to Confession",
        description: "A pathway for coming back to the sacrament with peace.",
        href: "/pathways/returning-to-confession",
      },
      {
        title: "Confession prayers",
        description: "Short prayers for honesty, contrition, and thanksgiving.",
        href: "/confession/prayers",
      },
    ],
  },
  {
    id: "confession-topic-habitual-sin",
    title: "Habitual Sin",
    slug: "habitual-sin",
    description: "A non-shaming Catholic guide for repeated struggles, confession, safeguards, and growth in freedom.",
    category: "Confession",
    tags: ["confession", "habitual sin", "temptation", "healing", "virtue"],
    relatedResourceIds: ["pathway-healing-from-habitual-sin", "res-confession-guide", "legacy-resisting-temptation"],
    status: "published",
    createdAt: "2026-05-08",
    updatedAt: "2026-05-08",
    visibility: "public",
    source: staticSource,
    schemaVersion: 1,
    contentType: "confession-topic",
    path: "/confession/habitual-sin",
    eyebrow: "Patient freedom",
    summary:
      "Repeated struggles can be brought into the light with mercy, regular confession, practical safeguards, and patient cooperation with grace.",
    pastoralNote:
      "If a pattern involves addiction, compulsion, trauma, danger, or harm to yourself or another person, seek help from a priest and qualified professional support.",
    sections: [
      {
        title: "Name the pattern without despair",
        body:
          "A habitual sin often has a trigger, a false promise, and an escape route. Naming the pattern is not the same as surrendering to it. It is the beginning of honest cooperation with grace.",
        items: [
          "What usually happens before the fall?",
          "What false comfort does the sin promise?",
          "What faithful action could interrupt the pattern earlier?",
        ],
      },
      {
        title: "Keep confession steady",
        body:
          "Regular confession gives repeated struggles a stable place of mercy. The sacrament is not a sign that you have failed again; it is Christ meeting weakness with grace.",
      },
      {
        title: "Build safeguards before temptation peaks",
        body:
          "Freedom grows when the next right choice becomes easier before the moment of pressure. Safeguards should be concrete, humble, and realistic.",
        items: [
          "Avoid near occasions of sin when you can.",
          "Move vulnerable routines into the light.",
          "Ask for appropriate accountability from a trusted person.",
          "Replace the escape route with prayer, service, movement, or direct conversation.",
        ],
      },
      {
        title: "Practice the contrary virtue",
        body:
          "Grace heals by forming love. A repeated struggle usually needs a positive virtue, not only resistance.",
        items: [
          "Pride needs humility.",
          "Anger needs patience or meekness.",
          "Lust needs chastity and reverence.",
          "Sloth needs diligence and zeal.",
        ],
      },
    ],
    practices: [
      {
        title: "Healing from Habitual Sin pathway",
        description: "Walk through a gentle formation path for repeated struggles.",
        href: "/pathways/healing-from-habitual-sin",
      },
      {
        title: "Prepare for confession",
        description: "Mark patterns privately in the Guided Examination.",
        href: "/confession/examination/start",
      },
    ],
    relatedLinks: [
      {
        title: "Resisting temptation",
        description: "Learn how to respond earlier in the moment of temptation.",
        href: "/confession/resisting-temptation",
      },
      {
        title: "Virtue and Vice Tracker",
        description: "Privately notice patterns and grace-filled next steps.",
        href: "/virtue-tracker",
      },
    ],
  },
  {
    id: "confession-topic-resisting-temptation",
    title: "Resisting Temptation",
    slug: "resisting-temptation",
    description: "Practical Catholic tools for fighting temptation before it becomes consent.",
    category: "Confession",
    tags: ["confession", "temptation", "virtue", "prayer", "conversion"],
    relatedResourceIds: ["legacy-habitual-sin", "pathway-healing-from-habitual-sin", "virtue-humility-pride"],
    status: "published",
    createdAt: "2026-05-08",
    updatedAt: "2026-05-08",
    visibility: "public",
    source: staticSource,
    schemaVersion: 1,
    contentType: "confession-topic",
    path: "/confession/resisting-temptation",
    eyebrow: "Fight early",
    summary:
      "Temptation is best met early, plainly, and with a turn toward prayer, truth, and concrete love.",
    pastoralNote:
      "Being tempted is not the same as consenting to sin. If you are confused about consent or culpability, ask a priest simply.",
    sections: [
      {
        title: "Notice the first movement",
        body:
          "Temptation often becomes stronger when it remains vague. The earlier you name it, the easier it is to turn toward Christ.",
        items: [
          "Name what is being offered.",
          "Name what it will cost.",
          "Ask for help in a short prayer.",
        ],
      },
      {
        title: "Reject and redirect",
        body:
          "A simple refusal matters. Then move the body, attention, and will toward a concrete good.",
        items: [
          "Make the Sign of the Cross.",
          "Leave the near occasion if possible.",
          "Choose one concrete act of love.",
          "Call, message, or speak to someone trustworthy when isolation is part of the pattern.",
        ],
      },
      {
        title: "Use prayer without hiding from action",
        body:
          "Prayer is not passivity. It opens the will to grace so the next faithful action becomes possible.",
      },
      {
        title: "Review without harshness",
        body:
          "After temptation, review what happened. If you fell, return to mercy. If you resisted, give thanks and ask for perseverance.",
      },
    ],
    practices: [
      {
        title: "Build a daily rule of life",
        description: "Create a simple rhythm that supports prayer, virtue, sacraments, and works of mercy.",
        href: "/rule-of-life",
      },
      {
        title: "Review patterns",
        description: "Use the private Virtue and Vice Tracker to notice repeated triggers.",
        href: "/virtue-tracker/patterns",
      },
    ],
    relatedLinks: [
      {
        title: "Habitual sin support",
        description: "Bring repeated struggles into practical and sacramental support.",
        href: "/confession/habitual-sin",
      },
      {
        title: "Guided Examination",
        description: "Prepare for confession with local-only prompts.",
        href: "/confession/examination",
      },
    ],
  },
  {
    id: "confession-topic-predominant-fault",
    title: "Identifying Your Predominant Fault",
    slug: "predominant-fault",
    description: "A guided Catholic reflection for discovering the recurring fault most often blocking growth.",
    category: "Confession",
    tags: ["confession", "predominant fault", "virtue", "self-knowledge", "conversion"],
    relatedResourceIds: ["pathway-growing-in-virtue", "exam-before-confession", "legacy-temperaments"],
    status: "published",
    createdAt: "2026-05-08",
    updatedAt: "2026-05-08",
    visibility: "public",
    source: staticSource,
    schemaVersion: 1,
    contentType: "confession-topic",
    path: "/confession/predominant-fault",
    eyebrow: "Self-knowledge with mercy",
    summary:
      "The predominant fault is a recurring disordered tendency that colors many choices. Naming it brings focus to prayer, confession, and virtue.",
    pastoralNote:
      "This reflection is not a personality label or a fixed identity. It is a tool for humility, confession, and growth in grace.",
    sections: [
      {
        title: "Look for the repeated root",
        body:
          "A predominant fault is often seen in repeated reactions: defensiveness, control, comfort-seeking, resentment, vanity, fear, or avoidance. The goal is not self-analysis for its own sake, but conversion.",
        items: [
          "What sin or fault appears in many situations?",
          "What criticism from others do I most resist?",
          "What do I defend even when prayer asks me to release it?",
        ],
      },
      {
        title: "Bring it to confession simply",
        body:
          "You do not need to explain your entire interior life. Bring the concrete sins that flow from the pattern, and ask for grace to practice the opposite virtue.",
      },
      {
        title: "Choose one contrary virtue",
        body:
          "Growth becomes clearer when the heart focuses on one virtue at a time. Ask what love would look like in the places where the fault usually appears.",
        items: [
          "Pride may need humility and gratitude.",
          "Anger may need patience and meekness.",
          "Sloth may need diligence and zeal.",
          "Envy may need kindness and thanksgiving.",
        ],
      },
      {
        title: "Review with the Lord",
        body:
          "A nightly examen can gently reveal where the fault appeared, where grace helped, and what one small act of amendment should follow.",
      },
    ],
    practices: [
      {
        title: "Use the virtue tracker",
        description: "Privately reflect on virtues, vices, patterns, and confession preparation.",
        href: "/virtue-tracker",
      },
      {
        title: "Pray the Daily Examen",
        description: "Review the day in gratitude, truth, sorrow, and hope.",
        href: "/daily-examen",
      },
    ],
    relatedLinks: [
      {
        title: "Growing in Virtue pathway",
        description: "Practice virtue through prayer, Scripture, reflection, and concrete action.",
        href: "/pathways/growing-in-virtue",
      },
      {
        title: "Guided Examination",
        description: "Bring concrete patterns to confession preparation.",
        href: "/confession/examination",
      },
    ],
  },
];
