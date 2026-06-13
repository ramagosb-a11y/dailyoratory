import {
  TempleCareCategory,
  type BodySoulSpiritLink,
  type BodySoulSpiritRelatedTool,
  type InteriorTempleCheckupQuestion,
  type InteriorTempleImage,
  type TempleCarePractice,
} from "@/types/bodySoulSpirit";

const confessionLink: BodySoulSpiritLink = { label: "Confession Guide", href: "/confession" };
const examenLink: BodySoulSpiritLink = { label: "Daily Examen", href: "/daily-examen" };
const bibleLink: BodySoulSpiritLink = { label: "The Bible", href: "/bible" };
const prayLink: BodySoulSpiritLink = { label: "Prayer", href: "/pray" };
const formationLink: BodySoulSpiritLink = { label: "Formation", href: "/formation" };
const virtueTrackerLink: BodySoulSpiritLink = { label: "Virtue Tracker", href: "/virtue-tracker" };
const ruleOfLifeLink: BodySoulSpiritLink = { label: "Rule of Life", href: "/rule-of-life" };
const eucharistLink: BodySoulSpiritLink = { label: "Eucharist", href: "/sacraments/eucharist" };
const baptismLink: BodySoulSpiritLink = { label: "Baptism", href: "/sacraments/baptism" };
const reconciliationLink: BodySoulSpiritLink = {
  label: "Reconciliation",
  href: "/sacraments/reconciliation",
};
const massLink: BodySoulSpiritLink = { label: "The Holy Mass", href: "/mass" };
const exploreLink: BodySoulSpiritLink = { label: "Explore the Catholic Faith", href: "/explore" };
const ociaLink: BodySoulSpiritLink = { label: "OCIA", href: "/ocia" };
const scripturePrayerLink: BodySoulSpiritLink = {
  label: "Scripture Prayer",
  href: "/library/scripture-prayer",
};
const adorationLink: BodySoulSpiritLink = { label: "Adoration", href: "/adoration" };
const hoursLink: BodySoulSpiritLink = { label: "Liturgy of the Hours", href: "/liturgy-of-the-hours" };
const catechismLink: BodySoulSpiritLink = { label: "Catechism", href: "/catechism" };
const sacramentsLink: BodySoulSpiritLink = { label: "Sacraments", href: "/sacraments" };
const mediaLink: BodySoulSpiritLink = { label: "Media Library", href: "/media" };

export const bodySoulSpiritHero = {
  eyebrow: "Interior formation",
  title: "Body, Soul, and Spirit",
  subtitle: "The inner temple where God desires to dwell.",
  copy:
    "You are not merely a body, and you are not a soul trapped inside a body. You are a person created by God: body and soul, called to life in the Holy Spirit. Grace fills the soul with light. Sin darkens the inner temple. Confession cleanses, restores, and opens the heart again to God's presence.",
  note:
    "This page uses the image of the soul as an interior temple to help prayer and reflection. The body is also truly called a temple of the Holy Spirit in Scripture.",
};

export const humanPersonPoints = [
  "Your body is good.",
  "Your soul is spiritual and immortal.",
  "You are one person, not two separate beings.",
  "The body expresses the person.",
  "The soul gives spiritual life.",
  "God desires to sanctify the whole person.",
  "Holiness involves thoughts, choices, habits, desires, words, and actions.",
];

export const spiritLanguageNote =
  "When this page speaks about spirit, it refers to the inner life turned toward God, the life of grace, and the person's openness to the Holy Spirit.";

export const bodyTempleIdeas = [
  "God does not despise the body.",
  "The Word became flesh.",
  "Christ rose bodily.",
  "The sacraments use visible signs.",
  "The body can glorify God.",
  "Chastity, temperance, modesty, rest, work, and service matter.",
  "What we do with the body affects the soul.",
];

export const bodyTempleScriptureReferences = [
  "1 Corinthians 6:19-20",
  "Romans 12:1",
  "John 1:14",
  "1 Corinthians 15",
];

export const bodyTempleLinks: BodySoulSpiritLink[] = [
  sacramentsLink,
  formationLink,
  virtueTrackerLink,
];

export const interiorTempleMetaphors = [
  "Grace is light in the temple.",
  "Prayer opens the doors.",
  "Virtue strengthens the pillars.",
  "Charity burns like a lamp.",
  "Sin dims the light.",
  "Mortal sin destroys charity in the heart and requires Confession.",
  "Venial sin clouds the windows and weakens love.",
  "Confession cleanses the temple.",
  "The Eucharist nourishes the temple.",
  "The Holy Spirit dwells within the soul in grace.",
];

export const interiorTempleMetaphorNote =
  "This is a prayerful image for conversion and reflection, not a literal measurement of the soul. Christ's mercy is always greater than the darkness we bring to Him.";

export const graceCards = [
  {
    title: "Sanctifying grace",
    description: "God's life dwelling in the soul, making us holy and pleasing to Him.",
  },
  {
    title: "Actual grace",
    description: "God's help in particular moments, moving us toward good and away from sin.",
  },
  {
    title: "Charity",
    description: "The love of God poured into the heart, making the soul alive with divine love.",
  },
  {
    title: "Virtue",
    description: "Stable habits of good that make the temple strong and beautiful.",
  },
  {
    title: "Sacraments",
    description: "Visible signs through which Christ gives grace.",
  },
];

export const graceLinks: BodySoulSpiritLink[] = [
  sacramentsLink,
  eucharistLink,
  reconciliationLink,
  formationLink,
];

export const sinTempleImages = [
  {
    title: "Pride cracks the foundation",
    description: "Pride closes the heart to truth, dependence, and humility before God.",
  },
  {
    title: "Lust clouds the windows",
    description: "Lust distorts sight and desire, making it harder to see others with reverence.",
  },
  {
    title: "Anger shakes the walls",
    description: "Unruled anger unsettles peace, wounds relationships, and weakens charity.",
  },
  {
    title: "Envy poisons the air",
    description: "Envy makes another person's good feel like a threat instead of a gift.",
  },
  {
    title: "Greed fills the temple with clutter",
    description: "Greed crowds the heart with possessions, control, and restless grasping.",
  },
  {
    title: "Gluttony weakens discipline",
    description: "Gluttony trains the heart to seek comfort without order or gratitude.",
  },
  {
    title: "Sloth lets the lamp grow low",
    description: "Sloth resists the love and effort that keep the temple awake to God.",
  },
];

export const sinStateCards = [
  {
    title: "Venial sin",
    description: "Venial sin wounds charity and dims the soul's clarity.",
  },
  {
    title: "Mortal sin",
    description:
      "Mortal sin destroys charity in the heart and separates the soul from sanctifying grace until restored through repentance and sacramental Confession.",
  },
];

export const sinPastoralNote =
  "God is always calling the sinner home. The purpose of seeing sin clearly is not despair, but mercy and conversion.";

export const confessionTempleSteps = [
  {
    title: "Enter honestly",
    description: "Name your sins without hiding.",
  },
  {
    title: "Let Christ cleanse",
    description: "Trust that His mercy is greater than your sin.",
  },
  {
    title: "Receive absolution",
    description: "Hear the words of forgiveness through the priest.",
  },
  {
    title: "Do penance",
    description: "Let mercy become repair, gratitude, and love.",
  },
  {
    title: "Begin again",
    description: "Leave the confessional with peace and renewed resolve.",
  },
];

export const interiorTempleCheckupQuestions: InteriorTempleCheckupQuestion[] = [
  {
    id: "prayer-lamp",
    question: "Is the lamp of prayer burning?",
    gratitudePrompt: "Thank God for the ways prayer is still burning within you.",
    mercyPrompt: "Bring the lamp of prayer back into Christ's mercy and ask Him to rekindle it.",
    virtue: "Fidelity",
    nextStep: "Set aside one quiet moment today and begin with a simple act of trust.",
    sortOrder: 10,
  },
  {
    id: "doors-open",
    question: "Are the doors open to God?",
    gratitudePrompt: "Thank God for every place where your heart still says yes to Him.",
    mercyPrompt: "Ask Jesus to open any interior doors you have kept closed through fear or distraction.",
    virtue: "Openness",
    nextStep: "Offer one part of the day to God before anything else claims it.",
    sortOrder: 20,
  },
  {
    id: "confession-needed",
    question: "Is there sin I need to bring to Confession?",
    gratitudePrompt: "Thank God for the grace to see sin honestly without despair.",
    mercyPrompt: "Bring what needs Confession into the light and ask for courage to go.",
    virtue: "Contrition",
    nextStep: "Make a simple plan for Confession and ask the Holy Spirit for honesty and peace.",
    sortOrder: 30,
  },
  {
    id: "resentment-clutter",
    question: "Is there resentment cluttering the temple?",
    gratitudePrompt: "Thank God for any place where forgiveness has already begun.",
    mercyPrompt: "Ask Christ to clear out bitterness, resentment, and the habit of rehearsing wounds.",
    virtue: "Forgiveness",
    nextStep: "Pray once for the person or situation that still hurts and ask for freedom from bitterness.",
    sortOrder: 40,
  },
  {
    id: "purity-eyes-thoughts",
    question: "Are my eyes and thoughts pure?",
    gratitudePrompt: "Thank God for every grace of purity, restraint, and holy desire.",
    mercyPrompt: "Bring impure habits, images, and fantasies to Christ with humility and trust.",
    virtue: "Purity",
    nextStep: "Remove one near occasion of sin and ask for a pure heart.",
    sortOrder: 50,
  },
  {
    id: "words-build-up",
    question: "Do my words build up or tear down?",
    gratitudePrompt: "Thank God for every word that brought peace, truth, or encouragement.",
    mercyPrompt: "Ask mercy for words that wounded, exaggerated, gossiped, or tore others down.",
    virtue: "Gentleness",
    nextStep: "Choose one conversation today where you will speak more carefully and charitably.",
    sortOrder: 60,
  },
  {
    id: "charity-actions",
    question: "Is charity alive in my actions?",
    gratitudePrompt: "Thank God for every hidden act of patience, service, or generosity.",
    mercyPrompt: "Bring coldness, selfishness, and missed opportunities for love to Christ's mercy.",
    virtue: "Charity",
    nextStep: "Do one concrete act of love that costs you something small but real.",
    sortOrder: 70,
  },
  {
    id: "eucharist-nourishing",
    question: "Is the Eucharist nourishing my soul?",
    gratitudePrompt: "Thank God for every grace received through Mass, Communion, and adoration.",
    mercyPrompt: "Ask the Lord to deepen your hunger for worthy reception and Eucharistic love.",
    virtue: "Reverence",
    nextStep: "Prepare prayerfully for your next Mass and ask Christ to make your heart ready.",
    sortOrder: 80,
  },
  {
    id: "avoid-occasions",
    question: "Am I avoiding the near occasions of sin?",
    gratitudePrompt: "Thank God for every safeguard, boundary, and wise choice already in place.",
    mercyPrompt: "Bring your weak spots to Jesus and ask Him for honest self-knowledge.",
    virtue: "Prudence",
    nextStep: "Name one near occasion of sin and take one real step to avoid it.",
    sortOrder: 90,
  },
  {
    id: "virtue-strengthen",
    question: "What virtue does God want to strengthen in me?",
    gratitudePrompt: "Thank God for the virtue He is already growing, even slowly, in your soul.",
    mercyPrompt: "Ask the Holy Spirit to strengthen the place where you feel most weak or divided.",
    virtue: "Perseverance",
    nextStep: "Choose one virtue for this week and practice it in one concrete way.",
    sortOrder: 100,
  },
];

export const templeCarePractices: TempleCarePractice[] = [
  {
    id: "temple-care-prayer",
    title: "Daily prayer",
    slug: "daily-prayer",
    description: "Open the temple doors to God.",
    practice: "Begin and end the day with a simple prayer of offering and surrender.",
    relatedLinks: [prayLink, examenLink],
    sortOrder: 10,
  },
  {
    id: "temple-care-scripture",
    title: "Scripture",
    slug: "scripture",
    description: "Let the Word of God light the interior.",
    practice: "Read one Gospel passage or the daily readings slowly and carry one word into the day.",
    relatedLinks: [bibleLink, scripturePrayerLink],
    sortOrder: 20,
  },
  {
    id: "temple-care-examen",
    title: "Examen",
    slug: "examen",
    description: "Review the day with the Holy Spirit.",
    practice: "Notice grace, bring sins to mercy, and rest in God before sleep.",
    relatedLinks: [examenLink],
    sortOrder: 30,
  },
  {
    id: "temple-care-confession",
    title: "Confession",
    slug: "confession",
    description: "Cleanse the temple regularly.",
    practice: "Go to Confession with honesty, trust, and the desire to begin again.",
    relatedLinks: [confessionLink, reconciliationLink],
    sortOrder: 40,
  },
  {
    id: "temple-care-eucharist",
    title: "Eucharist",
    slug: "eucharist",
    description: "Receive Christ, the true source of life.",
    practice: "Prepare prayerfully for Mass and receive with gratitude and reverence.",
    relatedLinks: [eucharistLink, massLink],
    sortOrder: 50,
  },
  {
    id: "temple-care-virtue",
    title: "Virtue",
    slug: "virtue",
    description: "Strengthen the pillars of the soul.",
    practice: "Choose one contrary virtue and practice it in a concrete daily action.",
    relatedLinks: [virtueTrackerLink, ruleOfLifeLink],
    sortOrder: 60,
  },
  {
    id: "temple-care-silence",
    title: "Silence",
    slug: "silence",
    description: "Let God restore order.",
    practice: "Protect a few quiet minutes where the heart can settle before God.",
    relatedLinks: [prayLink, adorationLink],
    sortOrder: 70,
  },
  {
    id: "temple-care-fasting",
    title: "Fasting",
    slug: "fasting",
    description: "Clear away disordered attachments.",
    practice: "Fast in a simple, realistic way that makes room for charity and prayer.",
    relatedLinks: [confessionLink, ruleOfLifeLink],
    sortOrder: 80,
  },
  {
    id: "temple-care-mercy",
    title: "Works of mercy",
    slug: "works-of-mercy",
    description: "Let the light inside become love outside.",
    practice: "Turn grace outward in one concrete act of service or compassion.",
    relatedLinks: [formationLink, exploreLink],
    sortOrder: 90,
  },
  {
    id: "temple-care-forgiveness",
    title: "Forgiveness",
    slug: "forgiveness",
    description: "Remove bitterness from the temple.",
    practice: "Ask for the grace to release resentment and entrust justice to God.",
    relatedLinks: [confessionLink, examenLink],
    sortOrder: 100,
  },
];

export const templeCareCategoriesBySlug: Record<string, TempleCareCategory> = {
  "daily-prayer": TempleCareCategory.Prayer,
  scripture: TempleCareCategory.Scripture,
  examen: TempleCareCategory.Prayer,
  confession: TempleCareCategory.Confession,
  eucharist: TempleCareCategory.Eucharist,
  virtue: TempleCareCategory.Virtue,
  silence: TempleCareCategory.Silence,
  fasting: TempleCareCategory.Fasting,
  "works-of-mercy": TempleCareCategory.Mercy,
  forgiveness: TempleCareCategory.Forgiveness,
};

export const fruitOfTheSpirit = [
  "charity",
  "joy",
  "peace",
  "patience",
  "kindness",
  "goodness",
  "generosity",
  "gentleness",
  "faithfulness",
  "modesty",
  "self-control",
  "chastity",
];

export const interiorTempleImages: InteriorTempleImage[] = [
  {
    id: "temple-doors",
    title: "The doors",
    slug: "doors",
    imagePart: "The doors",
    spiritualMeaning: "What you allow into your heart shapes the whole interior life.",
    reflectionQuestion: "What am I opening my heart to each day?",
    relatedPractice: "Guard the first and last moments of the day.",
    relatedLinks: [prayLink, mediaLink],
    sortOrder: 10,
  },
  {
    id: "temple-windows",
    title: "The windows",
    slug: "windows",
    imagePart: "The windows",
    spiritualMeaning: "What you look at, imagine, and desire affects clarity within the soul.",
    reflectionQuestion: "What have I been letting through the windows of the heart?",
    relatedPractice: "Protect the eyes and imagination from what darkens the temple.",
    relatedLinks: [bibleLink, examenLink],
    sortOrder: 20,
  },
  {
    id: "temple-altar",
    title: "The altar",
    slug: "altar",
    imagePart: "The altar",
    spiritualMeaning: "The altar represents what you love most and where sacrifice becomes worship.",
    reflectionQuestion: "What is truly at the center of my interior life?",
    relatedPractice: "Offer one attachment or fear to God in prayer.",
    relatedLinks: [massLink, eucharistLink],
    sortOrder: 30,
  },
  {
    id: "temple-lamp",
    title: "The lamp",
    slug: "lamp",
    imagePart: "The lamp",
    spiritualMeaning: "Prayer, charity, and grace keep the lamp of the heart burning.",
    reflectionQuestion: "Is the lamp of prayer bright, neglected, or flickering?",
    relatedPractice: "Keep one daily prayer anchor without fail.",
    relatedLinks: [prayLink, examenLink],
    sortOrder: 40,
  },
  {
    id: "temple-floor",
    title: "The floor",
    slug: "floor",
    imagePart: "The floor",
    spiritualMeaning: "Daily habits and discipline support every other part of the interior temple.",
    reflectionQuestion: "What repeated habit is shaping my soul right now?",
    relatedPractice: "Choose one realistic daily discipline and keep it small enough to be faithful.",
    relatedLinks: [ruleOfLifeLink, virtueTrackerLink],
    sortOrder: 50,
  },
  {
    id: "temple-pillars",
    title: "The pillars",
    slug: "pillars",
    imagePart: "The pillars",
    spiritualMeaning: "Virtues support the soul and make it stable under pressure.",
    reflectionQuestion: "Which pillar feels weakest right now?",
    relatedPractice: "Practice the contrary virtue in one concrete way.",
    relatedLinks: [virtueTrackerLink, formationLink],
    sortOrder: 60,
  },
  {
    id: "temple-incense",
    title: "The incense",
    slug: "incense",
    imagePart: "The incense",
    spiritualMeaning: "Prayer rises to God and fills the temple with reverence and praise.",
    reflectionQuestion: "Does my prayer rise from obligation alone or from love?",
    relatedPractice: "Add one act of thanksgiving to your daily prayer.",
    relatedLinks: [prayLink, hoursLink],
    sortOrder: 70,
  },
  {
    id: "temple-water",
    title: "The cleansing water",
    slug: "cleansing-water",
    imagePart: "The cleansing water",
    spiritualMeaning: "Baptism, repentance, and Confession wash the temple and renew life.",
    reflectionQuestion: "Where do I need cleansing, healing, or a fresh beginning?",
    relatedPractice: "Return to your Baptismal identity and prepare for Confession when needed.",
    relatedLinks: [baptismLink, confessionLink],
    sortOrder: 80,
  },
  {
    id: "temple-tabernacle",
    title: "The tabernacle image",
    slug: "tabernacle-image",
    imagePart: "The tabernacle image",
    spiritualMeaning: "Christ desires to dwell within the soul in grace and draw the whole person into communion.",
    reflectionQuestion: "Am I living as one who has been made for the Lord's presence?",
    relatedPractice: "Receive the Eucharist worthily and keep company with Christ in adoration.",
    relatedLinks: [eucharistLink, adorationLink],
    sortOrder: 90,
  },
];

export const bodySoulTechnologyIdeas = [
  "Begin the day before looking at the phone.",
  "Avoid impure or violent content.",
  "Set limits on doom-scrolling.",
  "Use sacred media intentionally.",
  "Protect silence.",
  "Replace one scrolling habit with Scripture or prayer.",
  "Keep the phone away during prayer and sleep.",
  "Ask: does this lead me toward light or darkness?",
];

export const healingAfterSinSteps = [
  "Stop and turn toward God.",
  "Make an act of contrition.",
  "If mortal sin is involved, go to Confession.",
  "Avoid the near occasion of sin.",
  "Ask for help if needed.",
  "Begin again with humility.",
  "Trust mercy more than shame.",
];

export const healingAfterSinPrayer = `Jesus, I open the doors of my soul to Your mercy.
Cleanse what is dark,
heal what is wounded,
and restore Your light within me.

Amen.`;

export const explorerSteps = [
  "Learn what Catholics believe about the human person.",
  "Learn about Baptism and grace.",
  "Learn about Confession and mercy.",
  "Attend Mass and notice how body and soul worship together.",
  "Ask the Holy Spirit for light.",
  "Explore OCIA if you feel called.",
];

export const relatedBodySoulSpiritTools: BodySoulSpiritRelatedTool[] = [
  {
    title: "Confession Guide",
    description: "Prepare for mercy and bring the dim places of the heart into Christ's healing light.",
    href: "/confession",
    cta: "Go to Confession",
  },
  {
    title: "Examination of Conscience",
    description: "Review the heart honestly and prayerfully before the sacrament.",
    href: "/confession/examination",
    cta: "Start Examination",
  },
  {
    title: "Daily Examen",
    description: "Notice where grace was bright, where sin wounded love, and where God is inviting return.",
    href: "/daily-examen",
    cta: "Pray the Examen",
  },
  {
    title: "Eucharist",
    description: "Learn how Christ nourishes the soul and deepens union with Him in Holy Communion.",
    href: "/sacraments/eucharist",
    cta: "Learn About the Eucharist",
  },
  {
    title: "The Holy Mass",
    description: "See how body and soul are drawn into worship through the liturgy and sacramental life.",
    href: "/mass",
    cta: "Understand the Mass",
  },
  {
    title: "Scripture Prayer",
    description: "Let the Word of God cleanse, steady, and illumine the interior temple.",
    href: "/library/scripture-prayer",
    cta: "Pray with Scripture",
  },
  {
    title: "The Bible",
    description: "Read Scripture with the Church and let the light of the Word shape the whole person.",
    href: "/bible",
    cta: "Learn the Bible",
  },
  {
    title: "Formation",
    description: "Grow in doctrine, virtue, prayer, and steady Catholic discipleship.",
    href: "/formation",
    cta: "Continue in Formation",
  },
  {
    title: "Virtue Tracker",
    description: "Notice patterns of grace and struggle without shame, then choose one next step.",
    href: "/virtue-tracker",
    cta: "Track Virtue",
  },
  {
    title: "Rule of Life",
    description: "Build a daily rhythm that protects prayer, confession, Scripture, and rest.",
    href: "/rule-of-life",
    cta: "Build a Rule",
  },
  {
    title: "Prayer",
    description: "Return to simple daily prayer and let the lamp of the soul burn steadily.",
    href: "/pray",
    cta: "Begin in Prayer",
  },
  {
    title: "Explore the Catholic Faith",
    description: "A welcoming path for anyone learning how Catholics understand grace, sin, and holiness.",
    href: "/explore",
    cta: "Start Exploring",
  },
  {
    title: "OCIA",
    description: "Take a parish next step if you are exploring the Catholic faith more seriously.",
    href: "/ocia",
    cta: "Learn About OCIA",
  },
];

export const bodySoulSpiritCopyrightNote =
  "Daily Oratory provides original summaries, metaphors, prayers, and formation guides. The image of the soul as an interior temple is used as a prayerful aid to help users understand grace, sin, confession, and holiness. For official doctrine, consult the Catechism and Church teaching linked below.";

