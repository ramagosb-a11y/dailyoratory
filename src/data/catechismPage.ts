import type { CatechismLink, CatechismPathway, CatechismPillar } from "@/types/catechism";

export const catechismPillars: CatechismPillar[] = [
  {
    id: "pillar-creed",
    title: "The Creed",
    slug: "creed",
    subtitle: "What the Church believes",
    description:
      "The Creed teaches the central mysteries of the faith: God the Father, Jesus Christ, the Holy Spirit, creation, salvation, the Church, forgiveness, resurrection, and eternal life.",
    paragraphRange: "CCC 26-1065",
    relatedLinks: [
      { label: "Formation", href: "/formation" },
      { label: "Church Fathers", href: "/church-fathers" },
      { label: "Scripture Prayer", href: "/library/scripture-prayer" },
    ],
    sortOrder: 10,
  },
  {
    id: "pillar-sacraments",
    title: "The Sacraments",
    slug: "sacraments",
    subtitle: "What the Church celebrates",
    description:
      "The sacraments are encounters with Christ through visible signs of grace. This part explains Baptism, Confirmation, Eucharist, Reconciliation, Anointing, Matrimony, and Holy Orders.",
    paragraphRange: "CCC 1066-1690",
    relatedLinks: [
      { label: "Sacraments", href: "/sacraments" },
      { label: "The Holy Mass", href: "/mass" },
      { label: "Adoration", href: "/adoration" },
      { label: "Confession", href: "/confession" },
    ],
    sortOrder: 20,
  },
  {
    id: "pillar-life-in-christ",
    title: "Life in Christ",
    slug: "life-in-christ",
    subtitle: "How the Church teaches us to live",
    description:
      "This part explains human dignity, freedom, conscience, virtue, sin, grace, the commandments, and the call to love God and neighbor.",
    paragraphRange: "CCC 1691-2557",
    relatedLinks: [
      { label: "Formation", href: "/formation" },
      { label: "Virtue Tracker", href: "/virtue-tracker" },
      { label: "Rule of Life", href: "/rule-of-life" },
      { label: "Examination", href: "/confession/examination" },
    ],
    sortOrder: 30,
  },
  {
    id: "pillar-prayer",
    title: "Christian Prayer",
    slug: "christian-prayer",
    subtitle: "How the Church prays",
    description:
      "This part teaches the meaning of prayer, the life of prayer, and the Our Father as the prayer Jesus gave His disciples.",
    paragraphRange: "CCC 2558-2865",
    relatedLinks: [
      { label: "Pray", href: "/pray" },
      { label: "Liturgy of the Hours", href: "/liturgy-of-the-hours" },
      { label: "Rosary", href: "/rosary" },
      { label: "Scripture Prayer", href: "/library/scripture-prayer" },
    ],
    sortOrder: 40,
  },
];

export const catechismPathways: CatechismPathway[] = [
  {
    id: "catechism-path-exploring",
    title: "I am exploring the Catholic faith",
    slug: "exploring-the-catholic-faith",
    audience: "Seekers and inquirers",
    description:
      "Begin with the broad shape of Catholic belief, worship, prayer, and sacramental life without assuming prior background.",
    startingSections: ["CCC 1-25", "CCC 26-49", "CCC 1066-1075", "CCC 2558-2565"],
    reflectionPrompt: "What parts of Catholic faith and worship are becoming clearer to me?",
    relatedLinks: [
      { label: "Formation", href: "/formation" },
      { label: "The Holy Mass", href: "/mass" },
      { label: "Sacraments", href: "/sacraments" },
      { label: "Pray", href: "/pray" },
    ],
    sortOrder: 10,
  },
  {
    id: "catechism-path-returning",
    title: "I am returning to the Church",
    slug: "returning-to-the-church",
    audience: "Returning Catholics",
    description:
      "Reconnect with mercy, confession, the Eucharist, and prayer in a way that supports return rather than pressure.",
    startingSections: ["CCC 1420-1498", "CCC 1322-1419", "CCC 2558-2865"],
    reflectionPrompt: "Where is Christ inviting me to return with trust rather than fear?",
    relatedLinks: [
      { label: "Confession", href: "/confession" },
      { label: "Eucharist", href: "/sacraments/eucharist" },
      { label: "The Holy Mass", href: "/mass" },
      { label: "Pray", href: "/pray" },
    ],
    sortOrder: 20,
  },
  {
    id: "catechism-path-mass",
    title: "I want to understand the Mass",
    slug: "understand-the-mass",
    audience: "Learners and worshippers",
    description:
      "Trace how the Catechism explains liturgy, Eucharist, sacrifice, communion, and the Real Presence.",
    startingSections: ["CCC 1066-1209", "CCC 1322-1419"],
    reflectionPrompt: "How does the Catechism deepen my understanding of what happens at Mass?",
    relatedLinks: [
      { label: "The Holy Mass", href: "/mass" },
      { label: "Eucharist", href: "/sacraments/eucharist" },
      { label: "Adoration", href: "/adoration" },
    ],
    sortOrder: 30,
  },
  {
    id: "catechism-path-virtue",
    title: "I want to grow in virtue",
    slug: "grow-in-virtue",
    audience: "Daily disciples",
    description:
      "Use the Catechism to form conscience, understand virtue, and connect moral teaching to concrete daily life.",
    startingSections: ["CCC 1691-1802", "CCC 1803-1845", "CCC 2052-2557"],
    reflectionPrompt: "What one virtue is God inviting me to practice more deliberately?",
    relatedLinks: [
      { label: "Formation", href: "/formation" },
      { label: "Virtue Tracker", href: "/virtue-tracker" },
      { label: "Examination", href: "/confession/examination" },
      { label: "Rule of Life", href: "/rule-of-life" },
    ],
    sortOrder: 40,
  },
  {
    id: "catechism-path-prayer",
    title: "I want to learn how to pray",
    slug: "learn-how-to-pray",
    audience: "Beginners and pray-ers",
    description:
      "Begin with the Catechism's teaching on prayer, then connect it to the Church's daily practices and devotions.",
    startingSections: ["CCC 2558-2865"],
    reflectionPrompt: "What does the Catechism teach me about prayer as a relationship with God?",
    relatedLinks: [
      { label: "Pray", href: "/pray" },
      { label: "Liturgy of the Hours", href: "/liturgy-of-the-hours" },
      { label: "Rosary", href: "/rosary" },
      { label: "Scripture Prayer", href: "/library/scripture-prayer" },
    ],
    sortOrder: 50,
  },
];

export const catechismWhyItMatters = [
  "It gives a reliable summary of Catholic teaching.",
  "It helps answer questions about the faith.",
  "It connects Scripture and Tradition.",
  "It explains the sacraments.",
  "It forms conscience and moral life.",
  "It teaches prayer.",
  "It supports OCIA, catechesis, family formation, and personal study.",
  "It helps seekers understand Catholic belief from the Church herself.",
];

export const catechismHowToUseSteps = [
  {
    title: "Start with a question",
    body: 'Begin with something concrete, such as "What does the Church teach about the Eucharist?"',
  },
  {
    title: "Use the index or search",
    body: "Look for the topic, then note the paragraph references attached to it.",
  },
  {
    title: "Read slowly",
    body: "A few paragraphs at a time is usually enough for one sitting.",
  },
  {
    title: "Look up Scripture references",
    body: "The Catechism often points back to the Bible and helps show the harmony between doctrine and Scripture.",
  },
  {
    title: "Connect it to prayer",
    body: 'Ask, "What does this teach me about God?"',
  },
  {
    title: "Connect it to life",
    body: 'Ask, "How should I live differently?"',
  },
  {
    title: "Ask for help",
    body: "For difficult questions, speak with a priest, catechist, sponsor, or trusted Catholic teacher.",
  },
];

export const catechismDailyLifeUses = [
  "When you have questions",
  "When preparing for confession",
  "When teaching children",
  "When preparing for sacraments",
  "When studying Scripture",
  "When trying to understand the Mass",
  "When discerning moral choices",
  "When building a prayer life",
  "When explaining the faith to someone else",
];

export const catechismReadingPlan = [
  {
    week: "Week 1",
    title: "God and Faith",
    sections: ["CCC 1-25", "CCC 26-49"],
    prompt: "What does it mean that God seeks us first?",
  },
  {
    week: "Week 2",
    title: "Jesus and the Creed",
    sections: ["Selected Creed sections in CCC 422-682", "CCC 683-747"],
    prompt: "Who is Jesus Christ, and how does the Creed shape Christian life?",
  },
  {
    week: "Week 3",
    title: "Sacraments and the Mass",
    sections: ["CCC 1066-1075", "CCC 1322-1419"],
    prompt: "How does Christ give grace through the Church?",
  },
  {
    week: "Week 4",
    title: "Prayer and Daily Life",
    sections: ["CCC 2558-2565", "Selected Our Father sections in CCC 2759-2865"],
    prompt: "How is God inviting me to pray?",
  },
];

export const catechismStudyMethod = [
  { title: "Pray", body: "Ask the Holy Spirit for understanding." },
  { title: "Read", body: "Read a short section slowly." },
  {
    title: "Reflect",
    body: "Ask what this teaches about God, the Church, and the Christian life.",
  },
  {
    title: "Connect",
    body: "Look up related Scripture or Daily Oratory tools that deepen the topic.",
  },
  { title: "Live", body: "Choose one small action." },
  {
    title: "Ask",
    body: "Bring difficult questions to a priest, catechist, sponsor, or trusted Catholic guide.",
  },
];

export const catechismDifferentUsers = [
  {
    title: "For seekers",
    description: "Use it to understand what the Church teaches from the Church herself.",
  },
  {
    title: "For Catholics",
    description: "Use it to deepen faith, form conscience, and strengthen prayer.",
  },
  {
    title: "For returning Catholics",
    description: "Use it to reconnect with the sacraments, mercy, and the life of prayer.",
  },
  {
    title: "For parents",
    description: "Use it to support family faith conversations and questions from children.",
  },
  {
    title: "For catechists",
    description: "Use it as a reliable reference and teaching support.",
  },
  {
    title: "For sponsors and godparents",
    description: "Use it to accompany others with clarity, charity, and patience.",
  },
  {
    title: "For OCIA",
    description: "Use it alongside parish formation and pastoral guidance, not apart from them.",
  },
];

export const relatedCatechismTools: Array<{
  title: string;
  description: string;
  href: string;
  cta: string;
  }> = [
    {
      title: "Angels and the Invisible World",
      description: "See how the Catechism's teaching on creation, worship, and spiritual beings helps explain angels faithfully.",
      href: "/angels",
      cta: "Learn About Angels",
    },
    {
      title: "Explore the Catholic Faith",
      description: "Start with simple Catholic explanations if you are new, returning, or trying to connect doctrine to daily life.",
      href: "/explore",
      cta: "Start Exploring",
    },
    {
      title: "Formation",
      description: "Keep going with doctrine, prayer, virtue, and spiritual growth.",
      href: "/formation",
      cta: "Continue in Formation",
    },
    {
      title: "Body, Soul, and Spirit",
      description: "See how Catholic teaching on the human person, grace, sin, and Confession fits together in prayerful formation.",
      href: "/body-soul-spirit",
      cta: "Enter the Interior Temple",
    },
    {
      title: "The Holy Mass",
      description: "See how Catholic teaching meets worship in the liturgy.",
      href: "/mass",
      cta: "Understand the Mass",
    },
    {
      title: "Sacraments",
      description: "Read practical guides to the seven sacraments and their place in Catholic life.",
      href: "/sacraments",
      cta: "Explore Sacraments",
    },
    {
      title: "Eucharist",
      description: "Study the sacrament Catholics call the source and summit of Christian life.",
      href: "/sacraments/eucharist",
      cta: "Learn About the Eucharist",
    },
    {
      title: "Confession Guide",
      description: "Prepare for the Sacrament of Reconciliation with clarity and hope.",
      href: "/confession",
      cta: "Prepare for Confession",
    },
    {
      title: "The Bible",
      description: "Learn how Catholics read Sacred Scripture together with the Catechism and the Church.",
      href: "/bible",
      cta: "Learn the Bible",
    },
    {
      title: "Scripture Prayer",
      description: "Pray with Scripture alongside the Catechism's many biblical references.",
      href: "/library/scripture-prayer",
      cta: "Pray with Scripture",
    },
    {
      title: "Pray",
      description: "Return to prayer as you study what the Church teaches.",
      href: "/pray",
      cta: "Begin in Prayer",
    },
    {
      title: "Devotions",
      description: "Learn Catholic devotions in a way ordered to Christ and the Church.",
      href: "/devotions",
      cta: "Explore Devotions",
    },
    {
      title: "Saints",
      description: "Meet holy men and women whose lives echo the teaching of the Catechism.",
      href: "/saints",
      cta: "Meet the Saints",
    },
    {
      title: "Church Fathers",
      description: "See how the early Church helps illuminate Catholic doctrine.",
      href: "/church-fathers",
      cta: "Read the Fathers",
    },
    {
      title: "Sacred Tradition",
      description: "Understand how Scripture, apostolic faith, worship, and the Church's living memory work together.",
      href: "/tradition",
      cta: "Learn About Tradition",
    },
    {
      title: "Councils of the Church",
      description: "See how the Church clarified doctrine, defended the faith, and guided worship across history.",
      href: "/councils",
      cta: "Explore the Councils",
    },
    {
      title: "The Pope",
      description: "Learn how Catholics understand the Bishop of Rome, papal teaching, and the Church's visible unity.",
      href: "/pope",
      cta: "Learn About the Pope",
    },
    {
      title: "Liturgy of the Hours",
      description: "Let the Church's daily prayer shape how doctrine becomes praise.",
      href: "/liturgy-of-the-hours",
      cta: "Pray the Hours",
    },
    {
      title: "Rule of Life",
      description: "Turn formation into a practical daily rhythm.",
      href: "/rule-of-life",
      cta: "Build a Rule",
    },
    {
      title: "Virtue Tracker",
      description: "Connect Catechism study to steady moral and spiritual growth.",
      href: "/virtue-tracker",
      cta: "Track Virtue",
    },
  {
    title: "Journal",
    description: "Continue with reflections and spiritual reading in the Daily Oratory journal stream.",
    href: "/reflections/mass-readings",
    cta: "Open the Journal",
  },
];

export const catechismExternalBibleLink: CatechismLink = {
  label: "USCCB Bible",
  href: "https://bible.usccb.org/bible",
};
