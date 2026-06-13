import type { CurrentPope } from "@/types/pope";

export const currentPope: CurrentPope = {
  id: "pope-leo-xiv",
  papalName: "Pope Leo XIV",
  slug: "leo-xiv",
  ordinal: "267th",
  secularName: "Robert Francis Prevost",
  title: "Bishop of Rome and shepherd of the universal Church",
  pontificateStart: "2025-05-08",
  shortDescription:
    "Pope Leo XIV is the current Bishop of Rome and visible sign of unity for the Catholic Church. Catholics pray for him as he teaches, governs, and serves the Church in charity and truth.",
  officialVaticanUrl: "https://www.vatican.va/content/leo-xiv/en.html",
  documentLinks: [
    { label: "Official Vatican Page", href: "https://www.vatican.va/content/leo-xiv/en.html" },
    { label: "Papal Documents", href: "https://www.vatican.va/content/leo-xiv/en/apost_exhortations.html" },
    { label: "Audiences and Catecheses", href: "https://www.vatican.va/content/leo-xiv/en/audiences.html" },
    { label: "Vatican News", href: "https://www.vaticannews.va/en.html" },
  ],
  sourceNotes: "Current pope information should be verified from the official Vatican page.",
  sortOrder: 10,
};

export const popeRoles = [
  {
    title: "Bishop of Rome",
    description: "The Pope is first a bishop, entrusted with the Church of Rome and its apostolic witness.",
  },
  {
    title: "Successor of Peter",
    description: "Catholics understand him as continuing Peter's ministry of unity, faith, and pastoral care.",
  },
  {
    title: "Visible sign of unity",
    description: "The Pope helps preserve communion among Catholics throughout the world.",
  },
  {
    title: "Teacher of the faith",
    description: "He teaches and clarifies Catholic doctrine in communion with the bishops.",
  },
  {
    title: "Shepherd and pastor",
    description: "He calls the Church to prayer, mission, holiness, mercy, and care for the vulnerable.",
  },
  {
    title: "Servant of the servants of God",
    description: "One traditional papal title reminds us that authority in the Church is meant for service.",
  },
] as const;

export const peterReferences = [
  {
    reference: "Matthew 16:18-19",
    summary: "Jesus names Peter and gives him a foundational role tied to the keys and the care of the Kingdom.",
  },
  {
    reference: "Luke 22:31-32",
    summary: "Jesus prays for Peter and tells him to strengthen his brethren after his own conversion.",
  },
  {
    reference: "John 21:15-17",
    summary: "The risen Christ entrusts Peter with the care of His sheep in a ministry marked by love and service.",
  },
  {
    reference: "Acts 2",
    summary: "Peter preaches boldly at Pentecost, helping lead the Church's first public witness.",
  },
  {
    reference: "Acts 15",
    summary: "Peter speaks in the apostolic council as the Church discerns how to remain faithful and united.",
  },
] as const;

export const papalInfallibilityCards = {
  means: [
    "Under specific conditions, the Pope can definitively teach a doctrine of faith or morals for the whole Church.",
    "This charism protects the Church from error in solemn teachings.",
    "It is connected to Christ's promise and the guidance of the Holy Spirit.",
    "It serves the deposit of faith.",
  ],
  doesNotMean: [
    "The Pope is sinless.",
    "The Pope is inspired like Scripture.",
    "Every papal comment is infallible.",
    "The Pope can invent new revelation.",
    "Catholics worship the Pope.",
    "Personal opinions, interviews, or casual remarks carry the same weight as solemn teaching.",
  ],
};

export const howPopeChosenPoints = [
  "The cardinals gather after a papal death or resignation.",
  "They pray and vote in a conclave.",
  "A two-thirds majority is normally required.",
  "White smoke signals that a pope has been elected.",
  "The newly elected pope chooses a papal name.",
  "He gives his first blessing from the balcony of Saint Peter's Basilica.",
];

export const explorerPath = [
  "Learn about Saint Peter.",
  "Understand apostolic succession.",
  "Learn what Catholics mean by the Magisterium.",
  "Read a beginner-friendly papal document.",
  "Ask questions in OCIA or at a parish.",
];

export const papalReadingMethod = [
  "Begin with prayer.",
  "Check the document type.",
  "Read the introduction and conclusion.",
  "Notice Scripture and Tradition references.",
  "Look for the main pastoral concern.",
  "Avoid reading only headlines.",
  "Use the official Vatican text.",
  "Ask what this calls you to pray, believe, or live.",
  "Bring serious questions to a priest, catechist, or trusted Catholic teacher.",
];

export const popeDailyLifeCards = [
  "Unity in faith",
  "Prayer for the whole Church",
  "Guidance in confusing times",
  "Connection to the universal Church",
  "Encouragement toward mission",
  "Care for the poor and vulnerable",
  "Call to holiness",
  "Reminder that the Church is bigger than one parish or country",
];

export const prayerForThePope = `Lord Jesus Christ,
watch over our Holy Father, the Pope.

Give him wisdom to teach,
courage to shepherd,
humility to serve,
and charity to lead Your Church in truth and peace.

Strengthen him by the Holy Spirit,
protect him from harm,
and help him guide the faithful closer to You.

Amen.`;

export const monthlyIntentionsResource = {
  title: "Pope's Worldwide Prayer Network",
  url: "https://www.popesprayer.va/",
  note: "External prayer resource. Verify the current monthly intention on the official site before sharing it.",
};

export const popeRelatedTools = [
  {
    title: "Explore the Catholic Faith",
    href: "/ocia",
    description: "Begin with the Catholic basics if the papacy feels unfamiliar.",
    cta: "Start Exploring",
  },
  {
    title: "OCIA / Becoming Catholic",
    href: "/ocia",
    description: "A welcoming guide for those asking how Catholic belief and belonging fit together.",
    cta: "Explore OCIA",
  },
  {
    title: "Catechism",
    href: "/catechism",
    description: "Learn how the Church teaches with Scripture, Tradition, and the Magisterium.",
    cta: "Open the Catechism",
  },
  {
    title: "Church Fathers",
    href: "/church-fathers",
    description: "Read the early witnesses who help illuminate Peter, apostolic succession, and unity.",
    cta: "Meet the Fathers",
  },
  {
    title: "News",
    href: "/news",
    description: "Follow papal news through official and trusted Catholic sources with discernment.",
    cta: "Read Catholic News",
  },
  {
    title: "The Vatican",
    href: "/vatican",
    description: "Explore Saint Peter's Basilica, Vatican history, sacred art, and official Vatican media.",
    cta: "Explore the Vatican",
  },
  {
    title: "Prayer",
    href: "/pray",
    description: "Keep understanding the Pope connected to prayer, not only information.",
    cta: "Begin in Prayer",
  },
  {
    title: "Indulgences",
    href: "/indulgences",
    description: "Learn why many Catholics pray for the Pope's intentions in connection with indulgences.",
    cta: "Learn About Indulgences",
  },
  {
    title: "Sacraments",
    href: "/sacraments",
    description: "See how papal service relates to the sacramental life of the Church.",
    cta: "Explore Sacraments",
  },
  {
    title: "Holy Orders",
    href: "/sacraments/holy-orders",
    description: "Understand bishops, priesthood, and the Pope's place within apostolic ministry.",
    cta: "Learn Holy Orders",
  },
  {
    title: "Formation",
    href: "/formation",
    description: "Go deeper into Catholic doctrine, virtue, and discipleship.",
    cta: "Open Formation",
  },
  {
    title: "The Holy Mass",
    href: "/mass",
    description: "Keep papal teaching rooted in the worship at the center of Catholic life.",
    cta: "Understand the Mass",
  },
];
