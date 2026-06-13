import type { IndulgencePractice } from "@/types/indulgences";

export const detachmentIsItems = [
  "A sincere rejection of sin",
  "A desire to love God above all things",
  "A willingness to give up sinful habits",
  "A refusal to excuse or cherish sin",
  "A grace received through prayer and repentance",
  "A heart turned toward conversion",
];

export const detachmentIsNotItems = [
  "Never being tempted",
  "Feeling perfectly holy",
  "Having no weakness",
  "Being free from all emotional struggle",
  "Knowing with absolute certainty that one has fulfilled the condition",
  "Earning grace by personal effort alone",
];

export const detachmentPracticeSteps: IndulgencePractice[] = [
  {
    id: "detachment-step-ask-grace",
    title: "Ask for the grace directly",
    description: "Begin simply: Lord, detach my heart from every sin and every false comfort that keeps me from You.",
    category: "detachment-from-sin",
    sortOrder: 1,
  },
  {
    id: "detachment-step-confession",
    title: "Make a sincere confession",
    description: "Confession restores us to grace and strengthens the soul against sin. Bring serious sins honestly and simply.",
    category: "detachment-from-sin",
    relatedLink: "/confession",
    sortOrder: 2,
  },
  {
    id: "detachment-step-renounce",
    title: "Renounce attachment to sin",
    description: "Name before God any habit, resentment, impurity, pride, comfort, or compromise you are tempted to keep.",
    category: "detachment-from-sin",
    sortOrder: 3,
  },
  {
    id: "detachment-step-virtue",
    title: "Choose the contrary virtue",
    description: "Ask what virtue God is inviting you to practice: humility instead of pride, purity instead of lust, patience instead of anger, charity instead of envy, diligence instead of sloth.",
    category: "detachment-from-sin",
    relatedLink: "/virtue-tracker",
    sortOrder: 4,
  },
  {
    id: "detachment-step-avoid-near-occasions",
    title: "Avoid near occasions of sin",
    description: "Detachment becomes concrete when we avoid situations, habits, media, or relationships that knowingly lead us away from God.",
    category: "detachment-from-sin",
    sortOrder: 5,
  },
  {
    id: "detachment-step-communion",
    title: "Receive Holy Communion reverently",
    description: "The Eucharist unites us to Christ and strengthens charity, which purifies the heart.",
    category: "detachment-from-sin",
    relatedLink: "/reflections/mass-readings",
    sortOrder: 6,
  },
  {
    id: "detachment-step-pope",
    title: "Pray for the Pope's intentions",
    description: "This expresses communion with the Church and fulfills one of the usual conditions for a plenary indulgence.",
    category: "detachment-from-sin",
    sortOrder: 7,
  },
  {
    id: "detachment-step-love",
    title: "Perform the indulgenced work with love",
    description: "Whether prayer, pilgrimage, adoration, Scripture, or a work of mercy, offer it with faith and love.",
    category: "detachment-from-sin",
    sortOrder: 8,
  },
  {
    id: "detachment-step-humility",
    title: "Accept purification with humility",
    description: "If God reveals an attachment, do not despair. Thank Him for showing where healing is needed.",
    category: "detachment-from-sin",
    sortOrder: 9,
  },
  {
    id: "detachment-step-return",
    title: "Keep returning to mercy",
    description: "Growth in detachment is usually gradual. Continue to seek confession, prayer, and conversion.",
    category: "detachment-from-sin",
    sortOrder: 10,
  },
];

export const detachmentReflectionQuestions = [
  "Is there any sin I am excusing, protecting, or planning to return to?",
  "Is there a habit I know God is asking me to surrender?",
  "Am I avoiding the near occasions of sin?",
  "Do I desire God more than comfort, approval, pleasure, control, or resentment?",
  "Have I asked Jesus to free me from attachment to even venial sin?",
  "Is there someone I need to forgive?",
  "Is there a virtue I need to practice today?",
  "Am I willing to let Christ purify my heart?",
];

export const plenaryPreparationChecklist = [
  "I have gone to confession, or will do so within the appropriate time.",
  "I will receive Holy Communion reverently.",
  "I will pray for the intentions of the Pope.",
  "I will complete the indulgenced work.",
  "I ask God for complete detachment from all sin.",
  "I sincerely reject every known sin and attachment.",
  "I trust God's mercy and do not give in to discouragement.",
];

export const morningRoutineSteps = [
  "Make the Sign of the Cross.",
  "Pray the Daily Intention for Indulgences.",
  "Ask Jesus for detachment from sin.",
  "Pray one Our Father, one Hail Mary, and one Glory Be for the Holy Father's intentions.",
  "Offer the day's works, prayers, sufferings, and acts of charity to God.",
  "Complete any indulgenced work with faith and love.",
];
