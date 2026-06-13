import type {
  DetachmentComparisonItem,
  DetachmentFAQ,
  DetachmentPracticeStep,
  SevenDayDetachmentPractice,
} from "@/types/detachmentFromSin";

export const detachmentPlainLanguagePoints = [
  "I do not want to make peace with sin.",
  "I do not want to plan to return to sin.",
  "I do not want to cherish even small compromises against God's will.",
  "I ask Jesus to free me from every disordered attachment.",
  "I choose God above comfort, pleasure, pride, control, resentment, or fear.",
  "I trust His grace more than my own strength.",
] as const;

export const detachmentComparisonItems: DetachmentComparisonItem[] = [
  { id: "detachment-is-1", type: "is", text: "A sincere rejection of sin", sortOrder: 1 },
  { id: "detachment-is-2", type: "is", text: "A desire to love God above all things", sortOrder: 2 },
  { id: "detachment-is-3", type: "is", text: "A willingness to give up sinful habits", sortOrder: 3 },
  { id: "detachment-is-4", type: "is", text: "A refusal to excuse or cherish sin", sortOrder: 4 },
  { id: "detachment-is-5", type: "is", text: "A grace received through prayer and repentance", sortOrder: 5 },
  { id: "detachment-is-6", type: "is", text: "A heart turned toward conversion", sortOrder: 6 },
  { id: "detachment-is-7", type: "is", text: "Cooperation with God's healing work", sortOrder: 7 },
  { id: "detachment-is-8", type: "is", text: "Freedom for deeper charity", sortOrder: 8 },
  { id: "detachment-is-not-1", type: "is-not", text: "Never being tempted", sortOrder: 9 },
  { id: "detachment-is-not-2", type: "is-not", text: "Feeling perfectly holy", sortOrder: 10 },
  { id: "detachment-is-not-3", type: "is-not", text: "Having no weakness", sortOrder: 11 },
  { id: "detachment-is-not-4", type: "is-not", text: "Being free from all emotional struggle", sortOrder: 12 },
  { id: "detachment-is-not-5", type: "is-not", text: "Knowing with absolute certainty that every condition is fulfilled", sortOrder: 13 },
  { id: "detachment-is-not-6", type: "is-not", text: "Earning grace by personal effort alone", sortOrder: 14 },
  { id: "detachment-is-not-7", type: "is-not", text: "Scrupulous self-measurement", sortOrder: 15 },
  { id: "detachment-is-not-8", type: "is-not", text: "Despair after a fall", sortOrder: 16 },
] as const;

export const detachmentPracticeSteps: DetachmentPracticeStep[] = [
  {
    id: "detachment-step-1",
    title: "Ask for the grace directly",
    description:
      "Begin simply: Lord, detach my heart from every sin and every false comfort that keeps me from You.",
    sortOrder: 1,
  },
  {
    id: "detachment-step-2",
    title: "Make a sincere confession",
    description:
      "Confession restores us to grace and strengthens the soul against sin. Bring serious sins honestly and simply.",
    sortOrder: 2,
  },
  {
    id: "detachment-step-3",
    title: "Renounce attachment to sin",
    description:
      "Name before God any habit, resentment, impurity, pride, comfort, or compromise you are tempted to keep.",
    sortOrder: 3,
  },
  {
    id: "detachment-step-4",
    title: "Avoid near occasions of sin",
    description:
      "Detachment becomes concrete when we avoid situations, habits, media, or relationships that knowingly lead us away from God.",
    sortOrder: 4,
  },
  {
    id: "detachment-step-5",
    title: "Choose the opposite virtue",
    description:
      "Practice humility instead of pride, purity instead of lust, patience instead of anger, charity instead of envy, diligence instead of sloth, generosity instead of greed, and trust instead of fear.",
    sortOrder: 5,
  },
  {
    id: "detachment-step-6",
    title: "Receive Holy Communion reverently",
    description:
      "The Eucharist unites us to Christ and strengthens charity, which purifies the heart.",
    sortOrder: 6,
  },
  {
    id: "detachment-step-7",
    title: "Pray for the Pope's intentions",
    description:
      "This expresses communion with the Church and fulfills one of the usual conditions for a plenary indulgence.",
    sortOrder: 7,
  },
  {
    id: "detachment-step-8",
    title: "Perform the indulgenced work with love",
    description:
      "Whether prayer, pilgrimage, adoration, Scripture, or a work of mercy, offer it with faith and love.",
    sortOrder: 8,
  },
  {
    id: "detachment-step-9",
    title: "Accept purification with humility",
    description:
      "If God reveals an attachment, do not despair. Thank Him for showing where healing is needed.",
    sortOrder: 9,
  },
  {
    id: "detachment-step-10",
    title: "Keep returning to mercy",
    description:
      "Growth in detachment is usually gradual. Continue to seek Confession, prayer, and conversion.",
    sortOrder: 10,
  },
] as const;

export const detachmentReflectionQuestions = [
  "Is there any sin I am excusing, protecting, or planning to return to?",
  "Is there a habit I know God is asking me to surrender?",
  "Am I avoiding the near occasions of sin?",
  "Do I desire God more than comfort, approval, pleasure, control, or resentment?",
  "Have I asked Jesus to free me from attachment to even venial sin?",
  "Is there someone I need to forgive?",
  "Is there a virtue I need to practice today?",
  "Am I willing to let Christ purify my heart?",
] as const;

export const sevenDayDetachmentPractice: SevenDayDetachmentPractice[] = [
  {
    id: "detachment-day-1",
    day: 1,
    title: "Ask for grace",
    practice: "Pray directly for detachment from all sin.",
    prayerPrompt: "Jesus, free my heart to love You above all things.",
    sortOrder: 1,
  },
  {
    id: "detachment-day-2",
    day: 2,
    title: "Name one attachment",
    practice: "Write down one thing you are tempted to cling to more than God.",
    prayerPrompt: "Lord, show me honestly what still competes with Your love.",
    sortOrder: 2,
  },
  {
    id: "detachment-day-3",
    day: 3,
    title: "Avoid one near occasion",
    practice: "Remove or avoid one situation that commonly leads you away from God.",
    prayerPrompt: "Give me humility to stop walking into the same trap.",
    sortOrder: 3,
  },
  {
    id: "detachment-day-4",
    day: 4,
    title: "Practice the opposite virtue",
    practice: "Choose one virtue that directly opposes your attachment.",
    prayerPrompt: "Holy Spirit, form in me the virtue that heals this weakness.",
    sortOrder: 4,
  },
  {
    id: "detachment-day-5",
    day: 5,
    title: "Make an act of contrition",
    practice: "Tell Jesus you are sorry and ask for a new heart.",
    prayerPrompt: "Jesus, I am sorry for every sin that has wounded love.",
    sortOrder: 5,
  },
  {
    id: "detachment-day-6",
    day: 6,
    title: "Go to Confession or plan it",
    practice: "Bring serious sin honestly to the sacrament and receive mercy.",
    prayerPrompt: "Lord, let me come to Your mercy with honesty and peace.",
    sortOrder: 6,
  },
  {
    id: "detachment-day-7",
    day: 7,
    title: "Renew your surrender",
    practice:
      "Receive Communion reverently if properly disposed, or make a spiritual communion and renew your desire for God above all things.",
    prayerPrompt: "Jesus, make my heart entirely Yours.",
    sortOrder: 7,
  },
] as const;

export const detachmentChecklist = [
  "I have gone to Confession, or will do so within the appropriate time.",
  "I will receive Holy Communion reverently.",
  "I will pray for the intentions of the Pope.",
  "I will complete the indulgenced work.",
  "I ask God for complete detachment from all sin.",
  "I sincerely reject every known sin and attachment.",
  "I trust God's mercy and do not give in to discouragement.",
] as const;

export const detachmentFaqs: DetachmentFAQ[] = [
  {
    id: "detachment-faq-1",
    question: "Does detachment from sin mean I will never be tempted?",
    answer:
      "No. Temptation is not the same as sin. Detachment means the heart does not want to cling to sin, even while temptation and weakness may still be present.",
    sortOrder: 1,
  },
  {
    id: "detachment-faq-2",
    question: "What if I still feel weak?",
    answer:
      "Weakness does not cancel God's grace. Bring that weakness honestly to prayer, Confession, and the Eucharist, and ask Christ to strengthen your will little by little.",
    sortOrder: 2,
  },
  {
    id: "detachment-faq-3",
    question: "What if I fall again later?",
    answer:
      "A later fall does not mean God was absent. Return to mercy quickly, learn from the fall, and keep asking for deeper conversion instead of giving in to discouragement.",
    sortOrder: 3,
  },
  {
    id: "detachment-faq-4",
    question: "What if I am unsure whether I am detached?",
    answer:
      "Do not panic or turn inward anxiously. Ask God for the grace, make a sincere Confession, and speak with a priest if you need guidance. Daily Oratory cannot judge the state of your soul.",
    sortOrder: 4,
  },
  {
    id: "detachment-faq-5",
    question: "Can I still seek an indulgence if I struggle?",
    answer:
      "Yes. The struggle itself can become a place of humility and prayer. Seek the indulgence with faith, fulfill the usual conditions sincerely, and entrust the outcome to God's mercy.",
    sortOrder: 5,
  },
  {
    id: "detachment-faq-6",
    question: "What if I am scrupulous?",
    answer:
      "If scrupulosity is part of your struggle, stay close to one confessor or priest and avoid repeatedly trying to measure your soul with anxiety. God desires peace, truth, and trust.",
    sortOrder: 6,
  },
  {
    id: "detachment-faq-7",
    question: "How does Confession help?",
    answer:
      "Confession restores grace after mortal sin, gives peace, and strengthens the soul against future sin. It teaches the heart to renounce what separates it from God.",
    sortOrder: 7,
  },
  {
    id: "detachment-faq-8",
    question: "How does the Eucharist help?",
    answer:
      "The Eucharist nourishes charity and unites the soul more deeply to Jesus. As love for Christ grows, attachment to sin can be weakened and purified.",
    sortOrder: 8,
  },
  {
    id: "detachment-faq-9",
    question: "Should I ask a priest?",
    answer:
      "Yes, especially if you are confused, discouraged, or unsure how to move forward. Priestly counsel can help you approach this condition with peace and realism.",
    sortOrder: 9,
  },
] as const;

export const detachmentPrayer = `O Lord Jesus,
gentle and humble of heart,
I come before You in need of mercy.

You know the sins I have committed,
the weaknesses I carry,
and the attachments that still divide my heart.

I do not want to cling to anything
that separates me from You.

I renounce every sin,
every near occasion of sin,
every hidden compromise,
and every false good
that keeps me from loving You freely.

Give me the grace of complete detachment from sin,
even venial sin,
not by my strength,
but by the power of Your Cross,
Your Precious Blood,
and Your merciful love.

Purify my desires.
Heal my memory.
Strengthen my will.
Order my affections.

Teach me to hate sin because it wounds love,
and to love holiness because it unites me to You.

Mary, Mother of Mercy,
pray for me.

Saint Joseph, guardian of souls,
pray for me.

All holy saints of God,
pray for me.

Jesus, make my heart free.
Jesus, make my heart pure.
Jesus, make my heart entirely Yours.

Amen.`;

export const indulgencePreparationPrayer = `Heavenly Father,
through the merits of Jesus Christ
and in communion with Your holy Church,
I ask for the grace to receive this indulgence
with faith, humility, and sincere repentance.

Cleanse my heart of every attachment to sin,
even venial sin.

Increase my love for You,
my sorrow for offending You,
and my desire to live according to Your will.

I unite this prayer,
my Confession,
my Holy Communion,
my prayers for the Holy Father,
and the indulgenced work
to the mercy of Christ.

May this grace draw me closer to You
and benefit the souls for whom I pray.

Amen.`;

export const detachmentRelatedLinks = [
  {
    title: "Indulgences Guide",
    description: "Return to the full guide on indulgences, usual conditions, and spiritual meaning.",
    href: "/indulgences",
  },
  {
    title: "Prayers and Devotions with Indulgences",
    description: "See prayers, Scripture reading, devotions, and works of mercy traditionally associated with indulgences.",
    href: "/indulgences/prayers-and-devotions",
  },
  {
    title: "Sin and Temptation",
    description: "Understand sin, temptation, conversion, and how grace helps the soul begin again.",
    href: "/sin-and-temptation",
  },
  {
    title: "Resisting Temptation",
    description: "Use practical Catholic steps when temptation appears.",
    href: "/sin-and-temptation/resisting-temptation",
  },
  {
    title: "Predominant Fault",
    description: "See where detachment and the opposite virtue may be needed most.",
    href: "/sin-and-temptation/predominant-fault",
  },
  {
    title: "Near Occasions of Sin",
    description: "Identify the situations and patterns that make detachment harder.",
    href: "/sin-and-temptation/near-occasions-of-sin",
  },
  {
    title: "Confession Guide",
    description: "Prepare for the sacrament of mercy with peace and honesty.",
    href: "/confession",
  },
  {
    title: "Examination of Conscience",
    description: "Review your life before God without anxious self-accusation.",
    href: "/confession/examination",
  },
  {
    title: "Daily Examen",
    description: "Notice where grace is inviting deeper freedom and repentance each day.",
    href: "/daily-examen",
  },
  {
    title: "Eucharistic Adoration",
    description: "Bring your attachments quietly before Jesus in the Blessed Sacrament.",
    href: "/adoration",
  },
  {
    title: "Formation",
    description: "Keep growing in prayer, virtue, and sacramental life.",
    href: "/formation",
  },
  {
    title: "Prayer",
    description: "Return to prayer as the place where God heals and orders the heart.",
    href: "/pray",
  },
  {
    title: "Seven Penitential Psalms",
    description: "Pray the traditional Psalms of repentance, contrition, mercy, and renewal.",
    href: "/prayers/seven-penitential-psalms",
  },
] as const;
