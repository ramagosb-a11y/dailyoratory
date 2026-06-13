import type { CatechismTopic } from "@/types/catechism";

const vaticanCatechismUrl = "https://www.vatican.va/archive/ENG0015/_INDEX.HTM";

export const catechismTopics: CatechismTopic[] = [
  {
    id: "catechism-topic-god",
    title: "I want to learn about God",
    slug: "god",
    description:
      "Begin with the opening movement of the Creed and the Church's teaching on Revelation, faith, and the mystery of God.",
    paragraphRanges: ["CCC 1-25", "CCC 26-49", "CCC 198-421"],
    relatedDailyOratoryLinks: [
      { label: "Formation", href: "/formation" },
      { label: "Scripture Prayer", href: "/library/scripture-prayer" },
    ],
    officialResourceUrl: vaticanCatechismUrl,
    sortOrder: 10,
  },
  {
    id: "catechism-topic-jesus",
    title: "I want to understand Jesus",
    slug: "jesus",
    description:
      "This path walks through who Jesus Christ is, His Incarnation, His saving work, and why He stands at the center of Catholic faith.",
    paragraphRanges: ["CCC 422-682"],
    relatedDailyOratoryLinks: [
      { label: "The Holy Mass", href: "/mass" },
      { label: "Church Fathers", href: "/church-fathers" },
    ],
    officialResourceUrl: vaticanCatechismUrl,
    sortOrder: 20,
  },
  {
    id: "catechism-topic-holy-spirit",
    title: "I want to understand the Holy Spirit",
    slug: "holy-spirit",
    description:
      "Read how the Church teaches the identity and mission of the Holy Spirit in the life of Christ and the Church.",
    paragraphRanges: ["CCC 683-747"],
    relatedDailyOratoryLinks: [
      { label: "Formation", href: "/formation" },
      { label: "Pray", href: "/pray" },
    ],
    officialResourceUrl: vaticanCatechismUrl,
    sortOrder: 30,
  },
  {
    id: "catechism-topic-mary",
    title: "I want to understand Mary",
    slug: "mary",
    description:
      "This section explains Mary's place in salvation history and why Catholics honor her in relation to Christ and the Church.",
    paragraphRanges: ["CCC 484-511", "CCC 963-975", "CCC 2673-2679"],
    relatedDailyOratoryLinks: [
      { label: "Rosary", href: "/rosary" },
      { label: "Saints", href: "/saints" },
      { label: "Devotions", href: "/devotions" },
    ],
    officialResourceUrl: vaticanCatechismUrl,
    sortOrder: 40,
  },
  {
    id: "catechism-topic-church",
    title: "I want to understand the Church",
    slug: "church",
    description:
      "Explore what Catholics mean by the Church, the People of God, communion, mission, and apostolic continuity.",
    paragraphRanges: ["CCC 748-975"],
    relatedDailyOratoryLinks: [
      { label: "Formation", href: "/formation" },
      { label: "Catholic News", href: "/news" },
    ],
    officialResourceUrl: vaticanCatechismUrl,
    sortOrder: 50,
  },
  {
    id: "catechism-topic-mass",
    title: "I want to learn about the Mass",
    slug: "mass",
    description:
      "Begin with liturgy and Eucharistic worship to see what Catholics believe is happening at Mass and why it is central.",
    paragraphRanges: ["CCC 1066-1209", "CCC 1322-1419"],
    relatedDailyOratoryLinks: [
      { label: "The Holy Mass", href: "/mass" },
      { label: "Adoration", href: "/adoration" },
    ],
    officialResourceUrl: vaticanCatechismUrl,
    sortOrder: 60,
  },
  {
    id: "catechism-topic-eucharist",
    title: "I want to understand the Eucharist",
    slug: "eucharist",
    description:
      "This section explains the Eucharist as the source and summit of Christian life, the Real Presence, the sacrifice of the Mass, and Holy Communion.",
    paragraphRanges: ["CCC 1322-1419"],
    relatedDailyOratoryLinks: [
      { label: "Eucharist", href: "/sacraments/eucharist" },
      { label: "The Holy Mass", href: "/mass" },
      { label: "Adoration", href: "/adoration" },
      { label: "Church Fathers", href: "/church-fathers" },
    ],
    officialResourceUrl: vaticanCatechismUrl,
    sortOrder: 70,
  },
  {
    id: "catechism-topic-confession",
    title: "I want to learn about Confession",
    slug: "confession",
    description:
      "Read how the Church explains sin, repentance, reconciliation, absolution, and the healing grace of confession.",
    paragraphRanges: ["CCC 1420-1498"],
    relatedDailyOratoryLinks: [
      { label: "Confession Guide", href: "/confession" },
      { label: "Examination", href: "/confession/examination" },
    ],
    officialResourceUrl: vaticanCatechismUrl,
    sortOrder: 80,
  },
  {
    id: "catechism-topic-baptism",
    title: "I want to understand Baptism",
    slug: "baptism",
    description:
      "This section explains new life in Christ, incorporation into the Church, and why Baptism is called the gateway to the sacraments.",
    paragraphRanges: ["CCC 1213-1284"],
    relatedDailyOratoryLinks: [
      { label: "Sacraments", href: "/sacraments" },
      { label: "Formation", href: "/formation" },
    ],
    officialResourceUrl: vaticanCatechismUrl,
    sortOrder: 90,
  },
  {
    id: "catechism-topic-prayer",
    title: "I want to learn about prayer",
    slug: "prayer",
    description:
      "Read what the Catechism teaches about prayer as relationship with God, the life of prayer, and the Our Father.",
    paragraphRanges: ["CCC 2558-2865"],
    relatedDailyOratoryLinks: [
      { label: "Pray", href: "/pray" },
      { label: "Liturgy of the Hours", href: "/liturgy-of-the-hours" },
      { label: "Scripture Prayer", href: "/library/scripture-prayer" },
    ],
    officialResourceUrl: vaticanCatechismUrl,
    sortOrder: 100,
  },
  {
    id: "catechism-topic-sin-mercy",
    title: "I want to understand sin and mercy",
    slug: "sin-and-mercy",
    description:
      "Start with sin, conscience, grace, repentance, and the mercy of God revealed in Christ and the sacraments.",
    paragraphRanges: ["CCC 1420-1498", "CCC 1846-1876"],
    relatedDailyOratoryLinks: [
      { label: "Confession Guide", href: "/confession" },
      { label: "Devotions", href: "/devotions" },
    ],
    officialResourceUrl: vaticanCatechismUrl,
    sortOrder: 110,
  },
  {
    id: "catechism-topic-virtue",
    title: "I want to learn about virtue",
    slug: "virtue",
    description:
      "Read how the Catechism teaches about human dignity, virtues, grace, freedom, and growth in holiness.",
    paragraphRanges: ["CCC 1691-1802", "CCC 1803-1845"],
    relatedDailyOratoryLinks: [
      { label: "Virtue Tracker", href: "/virtue-tracker" },
      { label: "Rule of Life", href: "/rule-of-life" },
    ],
    officialResourceUrl: vaticanCatechismUrl,
    sortOrder: 120,
  },
  {
    id: "catechism-topic-commandments",
    title: "I want to understand the Ten Commandments",
    slug: "ten-commandments",
    description:
      "This section explains the commandments not as a bare list, but as a pattern of love for God and neighbor.",
    paragraphRanges: ["CCC 2052-2557"],
    relatedDailyOratoryLinks: [
      { label: "Examination", href: "/confession/examination" },
      { label: "Formation", href: "/formation" },
    ],
    officialResourceUrl: vaticanCatechismUrl,
    sortOrder: 130,
  },
  {
    id: "catechism-topic-marriage",
    title: "I want to understand marriage",
    slug: "marriage",
    description:
      "Read how the Church teaches the sacrament of Matrimony, family life, fidelity, and Christian vocation.",
    paragraphRanges: ["CCC 1601-1666"],
    relatedDailyOratoryLinks: [
      { label: "Sacraments", href: "/sacraments" },
      { label: "Formation", href: "/formation" },
    ],
    officialResourceUrl: vaticanCatechismUrl,
    sortOrder: 140,
  },
  {
    id: "catechism-topic-last-things",
    title: "I want to understand death, judgment, heaven, hell, and purgatory",
    slug: "last-things",
    description:
      "This section helps readers understand Christian hope, judgment, eternal life, and purification after death.",
    paragraphRanges: ["CCC 988-1060", "CCC 1020-1060"],
    relatedDailyOratoryLinks: [
      { label: "Saints", href: "/saints" },
      { label: "Formation", href: "/formation" },
    ],
    officialResourceUrl: vaticanCatechismUrl,
    sortOrder: 150,
  },
  {
    id: "catechism-topic-exploring",
    title: "I am exploring the Catholic faith",
    slug: "exploring",
    description:
      "Use this starting point if you want a gentle doorway into Catholic belief, worship, prayer, and moral life.",
    paragraphRanges: ["CCC 1-25", "CCC 26-49", "CCC 1066-1075", "CCC 2558-2565"],
    relatedDailyOratoryLinks: [
      { label: "Formation", href: "/formation" },
      { label: "Pray", href: "/pray" },
      { label: "The Holy Mass", href: "/mass" },
    ],
    officialResourceUrl: vaticanCatechismUrl,
    sortOrder: 160,
  },
  {
    id: "catechism-topic-returning",
    title: "I am returning to the Church",
    slug: "returning",
    description:
      "This path is especially helpful for Catholics reconnecting with mercy, prayer, confession, and the Eucharist.",
    paragraphRanges: ["CCC 1420-1498", "CCC 1322-1419", "CCC 2558-2865"],
    relatedDailyOratoryLinks: [
      { label: "Confession Guide", href: "/confession" },
      { label: "The Holy Mass", href: "/mass" },
      { label: "Pray", href: "/pray" },
    ],
    officialResourceUrl: vaticanCatechismUrl,
    sortOrder: 170,
  },
  {
    id: "catechism-topic-ocia",
    title: "I am preparing for OCIA",
    slug: "ocia",
    description:
      "Use the Catechism as a companion to parish OCIA by focusing on the Creed, sacraments, prayer, and daily life in Christ.",
    paragraphRanges: ["CCC 26-1065", "CCC 1066-1690", "CCC 2558-2865"],
    relatedDailyOratoryLinks: [
      { label: "Sacraments", href: "/sacraments" },
      { label: "Formation", href: "/formation" },
    ],
    officialResourceUrl: vaticanCatechismUrl,
    sortOrder: 180,
  },
  {
    id: "catechism-topic-parent",
    title: "I am a parent teaching my family",
    slug: "parent-teaching-family",
    description:
      "Use the Catechism to answer family questions, support sacramental preparation, and guide conversations in simple language.",
    paragraphRanges: ["CCC 1-25", "CCC 1655-1666", "CCC 2221-2231", "CCC 2685-2690"],
    relatedDailyOratoryLinks: [
      { label: "Pray", href: "/pray" },
      { label: "Liturgical Seasons", href: "/liturgical-living/seasons" },
      { label: "Saints", href: "/saints" },
    ],
    officialResourceUrl: vaticanCatechismUrl,
    sortOrder: 190,
  },
];
