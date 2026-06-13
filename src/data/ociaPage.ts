import type { OciaAudiencePath, OciaLink, OciaTopic } from "@/types/ocia";

export const ociaAudienceCards = [
  {
    title: "I am not baptized",
    description:
      "OCIA can prepare unbaptized adults for the sacraments of initiation: Baptism, Confirmation, and Eucharist.",
  },
  {
    title: "I am baptized in another Christian tradition",
    description:
      "OCIA can help baptized Christians learn Catholic teaching and prepare to be received into full communion with the Catholic Church.",
  },
  {
    title: "I was baptized Catholic but did not complete initiation",
    description:
      "OCIA or adult sacrament preparation may help baptized Catholics prepare for First Communion and or Confirmation.",
  },
  {
    title: "I am Catholic but returning after years away",
    description:
      "You may not need OCIA, but a parish can help you return to confession, Mass, formation, and sacramental life.",
  },
  {
    title: "I am married to or dating a Catholic",
    description:
      "OCIA can help you understand the Catholic faith at your own pace, even if you are not ready to join.",
  },
  {
    title: "I am just curious",
    description:
      "Inquiry is welcome. You can ask questions, learn, pray, and discern without pressure.",
  },
];

export const ociaAudiencePaths: OciaAudiencePath[] = [
  {
    id: "ocia-path-unbaptized",
    title: "Unbaptized adult",
    slug: "unbaptized-adult",
    description: "A person preparing to enter the Christian life sacramentally through the Catholic Church.",
    likelyPath: "Inquiry, catechumenate, rites, Baptism, Confirmation, Eucharist.",
    cautionNote: "A parish can explain the local process and readiness steps for your situation.",
    relatedLinks: [
      { label: "Baptism", href: "/sacraments/baptism" },
      { label: "Eucharist", href: "/sacraments/eucharist" },
    ],
    sortOrder: 10,
  },
  {
    id: "ocia-path-baptized-christian",
    title: "Baptized Christian",
    slug: "baptized-christian",
    description: "A baptized person from another Christian tradition exploring full communion with the Catholic Church.",
    likelyPath: "Inquiry and formation, profession of faith, Confirmation and Eucharist according to parish and diocesan guidance.",
    cautionNote: "Reception into full communion depends on your baptismal status and local pastoral guidance.",
    relatedLinks: [
      { label: "Catechism", href: "/catechism" },
      { label: "Confirmation", href: "/sacraments/confirmation" },
    ],
    sortOrder: 20,
  },
  {
    id: "ocia-path-baptized-catholic",
    title: "Baptized Catholic missing sacraments",
    slug: "baptized-catholic-missing-sacraments",
    description: "A baptized Catholic preparing for First Communion or Confirmation later in life.",
    likelyPath: "Adult Confirmation or First Communion preparation, depending on needs.",
    cautionNote: "A parish can help determine whether OCIA or another sacramental preparation path is appropriate.",
    relatedLinks: [
      { label: "Sacraments", href: "/sacraments" },
      { label: "Confession Guide", href: "/confession" },
    ],
    sortOrder: 30,
  },
  {
    id: "ocia-path-returning",
    title: "Returning Catholic",
    slug: "returning-catholic",
    description: "A Catholic who wants to return to the Church after years away.",
    likelyPath: "Pastoral conversation, confession, Mass, formation, spiritual support.",
    cautionNote: "Not every returning Catholic needs OCIA. A parish can help you find the right next step.",
    relatedLinks: [
      { label: "Confession Guide", href: "/confession" },
      { label: "The Holy Mass", href: "/mass" },
    ],
    sortOrder: 40,
  },
];

export const ociaTopics: OciaTopic[] = [
  { id: "ocia-topic-jesus", title: "Jesus Christ", slug: "jesus-christ", description: "Who Jesus is and why He stands at the center of Catholic faith.", relatedLinks: [{ label: "Scripture Prayer", href: "/library/scripture-prayer" }], sortOrder: 10 },
  { id: "ocia-topic-scripture-tradition", title: "Scripture and Tradition", slug: "scripture-and-tradition", description: "How Catholics receive God's revelation through Scripture and Sacred Tradition.", relatedLinks: [{ label: "Catechism", href: "/catechism" }], sortOrder: 20 },
  { id: "ocia-topic-creed", title: "The Creed", slug: "the-creed", description: "The central mysteries of the faith professed by the Church.", relatedLinks: [{ label: "Formation", href: "/formation" }], sortOrder: 30 },
  { id: "ocia-topic-mass", title: "The Mass", slug: "the-mass", description: "Why the Mass is the heart of Catholic worship and life.", relatedLinks: [{ label: "The Holy Mass", href: "/mass" }], sortOrder: 40 },
  { id: "ocia-topic-sacraments", title: "The seven sacraments", slug: "seven-sacraments", description: "How Christ gives grace through the sacramental life of the Church.", relatedLinks: [{ label: "Sacraments", href: "/sacraments" }], sortOrder: 50 },
  { id: "ocia-topic-initiation", title: "Baptism, Confirmation, and Eucharist", slug: "initiation", description: "The sacraments of initiation and their place in becoming Catholic.", relatedLinks: [{ label: "Eucharist", href: "/sacraments/eucharist" }], sortOrder: 60 },
  { id: "ocia-topic-confession", title: "Confession and mercy", slug: "confession-and-mercy", description: "Repentance, reconciliation, and the mercy of Christ.", relatedLinks: [{ label: "Confession Guide", href: "/confession" }], sortOrder: 70 },
  { id: "ocia-topic-prayer", title: "Prayer", slug: "prayer", description: "How Catholics pray and grow in relationship with God.", relatedLinks: [{ label: "Pray", href: "/pray" }], sortOrder: 80 },
  { id: "ocia-topic-mary-saints", title: "Mary and the saints", slug: "mary-and-the-saints", description: "How Catholics understand the communion of saints and devotion ordered to Christ.", relatedLinks: [{ label: "Saints", href: "/saints" }], sortOrder: 90 },
  { id: "ocia-topic-moral-life", title: "Catholic moral life", slug: "moral-life", description: "Conscience, virtue, grace, and the call to live in Christ.", relatedLinks: [{ label: "Formation", href: "/formation" }], sortOrder: 100 },
  { id: "ocia-topic-commandments", title: "The commandments", slug: "commandments", description: "How the commandments guide love of God and neighbor.", relatedLinks: [{ label: "Examination", href: "/confession/examination" }], sortOrder: 110 },
  { id: "ocia-topic-virtue", title: "Virtue and grace", slug: "virtue-and-grace", description: "How the Holy Spirit forms Christian character through grace and virtue.", relatedLinks: [{ label: "Virtue Tracker", href: "/virtue-tracker" }], sortOrder: 120 },
  { id: "ocia-topic-church", title: "The Church", slug: "the-church", description: "What the Church is and why Catholics believe Christ founded her.", relatedLinks: [{ label: "Catholic News", href: "/news" }], sortOrder: 130 },
  { id: "ocia-topic-liturgical-year", title: "Liturgical year", slug: "liturgical-year", description: "How the Church marks the life of Christ through seasons, feasts, and holy days.", relatedLinks: [{ label: "Liturgical Seasons", href: "/liturgical-living/seasons" }], sortOrder: 140 },
  { id: "ocia-topic-mercy", title: "Works of mercy", slug: "works-of-mercy", description: "How Catholic life is expressed through charity and service.", relatedLinks: [{ label: "Formation", href: "/formation" }], sortOrder: 150 },
  { id: "ocia-topic-social-teaching", title: "Catholic social teaching", slug: "social-teaching", description: "How the Church speaks about human dignity, justice, solidarity, and the common good.", relatedLinks: [{ label: "Catholic News", href: "/news" }], sortOrder: 160 },
  { id: "ocia-topic-discipleship", title: "How to live as a disciple", slug: "discipleship", description: "Daily prayer, worship, conversion, and life in the Church.", relatedLinks: [{ label: "Rule of Life", href: "/rule-of-life" }], sortOrder: 170 },
];

export const ociaParishQuestions = [
  "Do you offer OCIA?",
  "When does the next group begin?",
  "Who is the OCIA coordinator?",
  "What is the schedule?",
  "What if I am not baptized?",
  "What if I am already baptized in another Christian tradition?",
  "What if I was baptized Catholic but need Confirmation or First Communion?",
  "Do I need baptismal records?",
  "Do I need a sponsor?",
  "How do I choose a sponsor?",
  "Are there rites at Mass I should know about?",
  "What happens if I have marriage questions?",
  "What should I do if I am returning after many years?",
  "Can I attend if I am only curious?",
  "Are there books or resources I should read?",
  "How can I begin praying now?",
];

export const ociaReadinessPrompts = [
  "What draws me to the Catholic faith?",
  "What questions do I still have?",
  "Have I attended Mass?",
  "Have I spoken with a parish?",
  "Am I willing to learn slowly?",
  "Is there a teaching I want help understanding?",
  "Do I need to discuss marriage, baptism records, or past sacraments with a parish?",
  "Who could walk with me as a sponsor or friend?",
  "What is one step I can take this week?",
];

export const ociaPossibleNextSteps = [
  {
    id: "visit-parish",
    label: "Visit a local Catholic parish",
    relatedLinks: [{ label: "What Is OCIA?", href: "#what-is-ocia" }],
  },
  {
    id: "attend-mass",
    label: "Attend Sunday Mass",
    relatedLinks: [{ label: "The Holy Mass", href: "/mass" }],
  },
  {
    id: "contact-coordinator",
    label: "Contact an OCIA coordinator",
    relatedLinks: [{ label: "Parish Questions", href: "#parish-questions" }],
  },
  {
    id: "read-about-mass",
    label: "Read about the Mass",
    relatedLinks: [{ label: "The Holy Mass", href: "/mass" }],
  },
  {
    id: "start-catechism",
    label: "Start with the Catechism",
    relatedLinks: [{ label: "Catechism", href: "/catechism" }],
  },
  {
    id: "pray-holy-spirit",
    label: "Pray a simple prayer to the Holy Spirit",
    relatedLinks: [{ label: "Pray", href: "/pray" }],
  },
  {
    id: "ask-catholic-friend",
    label: "Ask a Catholic friend to accompany you",
    relatedLinks: [{ label: "Saint Companion Finder", href: "/saints/finder" }],
  },
  {
    id: "write-questions",
    label: "Write down questions for the parish",
    relatedLinks: [{ label: "Parish Questions", href: "#parish-questions" }],
  },
];

export const ociaTimelineExample = [
  ["Summer / early fall", "Inquiry and initial conversations"],
  ["Fall", "Regular formation begins"],
  ["Advent", "Deeper prayer, Scripture, and parish life"],
  ["Lent", "Purification, reflection, and final preparation"],
  ["Easter Vigil", "Sacraments of initiation for many candidates and catechumens"],
  ["Easter season", "Mystagogy and deeper parish life"],
];

export const ociaPrayerCards = [
  {
    id: "exploring-catholic-faith",
    title: "Prayer for Those Exploring the Catholic Faith",
    prayer:
      "Holy Spirit,\nguide my heart in truth, peace, and courage.\n\nIf You are calling me closer to the Catholic faith,\nhelp me listen with humility,\nask honest questions,\nand follow the light You give.\n\nLead me to people who will guide me wisely.\nOpen my heart to Jesus Christ,\nto His Church,\nand to the grace You desire to give.\n\nAmen.",
  },
  {
    id: "before-contacting-parish",
    title: "Prayer Before Contacting a Parish",
    prayer:
      "Lord Jesus,\ngive me courage to take the next step.\nHelp me ask good questions,\nmeet the right people,\nand trust that You are guiding this journey.\nMay this search lead me closer to You.\nAmen.",
  },
];

export const ociaHelpCards = [
  "Understand the Mass",
  "Learn the sacraments",
  "Read Scripture",
  "Explore the Catechism",
  "Pray for the first time",
  "Learn about Mary and the saints",
  "Prepare questions for a parish",
  "Build a prayer habit",
  "Follow the liturgical year",
  "Find Catholic formation resources",
];

export const ociaCannotReplace = [
  "a parish OCIA program",
  "a substitute for a priest or deacon",
  "a replacement for sacramental preparation",
  "a source for canonical eligibility decisions",
  "a substitute for marriage or tribunal guidance",
  "a replacement for pastoral care",
  "an official diocesan program",
];

export const relatedOciaTools: Array<{ title: string; description: string; href: string; cta: string }> = [
  { title: "Explore the Catholic Faith", description: "A peaceful gateway for anyone starting with questions about Catholic belief, prayer, worship, and life.", href: "/explore", cta: "Start Exploring" },
  { title: "Catechism", description: "Read a beginner-friendly guide to what the Church teaches.", href: "/catechism", cta: "Explore the Catechism" },
  { title: "Formation", description: "Learn doctrine, virtue, prayer, and Catholic discipleship.", href: "/formation", cta: "Begin Formation" },
  { title: "The Holy Mass", description: "Understand what happens at Mass and how to participate reverently.", href: "/mass", cta: "Learn the Mass" },
  { title: "Sacraments", description: "Study the seven sacraments and the life of grace.", href: "/sacraments", cta: "Explore Sacraments" },
  { title: "Baptism", description: "Learn about new life in Christ and entrance into the Church.", href: "/sacraments/baptism", cta: "Learn About Baptism" },
  { title: "Confirmation", description: "Read about the gift of the Holy Spirit and Christian witness.", href: "/sacraments/confirmation", cta: "Learn About Confirmation" },
  { title: "Eucharist", description: "Understand the source and summit of Christian life.", href: "/sacraments/eucharist", cta: "Learn About the Eucharist" },
  { title: "Confession Guide", description: "Prepare for the Sacrament of Reconciliation with trust.", href: "/confession", cta: "Prepare for Confession" },
  { title: "Pray", description: "Begin a simple rhythm of Catholic prayer.", href: "/pray", cta: "Begin in Prayer" },
  { title: "The Bible", description: "Learn how Catholics read Scripture with the Church, the Mass, and prayer.", href: "/bible", cta: "Learn the Bible" },
  { title: "Scripture Prayer", description: "Pray with the Word of God as you explore the faith.", href: "/library/scripture-prayer", cta: "Pray with Scripture" },
  { title: "Devotions", description: "Learn Catholic devotions in a way ordered to Christ and the Church.", href: "/devotions", cta: "Explore Devotions" },
  { title: "Saints", description: "Meet holy men and women who show many paths of discipleship.", href: "/saints", cta: "Meet the Saints" },
  { title: "Church Fathers", description: "Read older Christian witnesses who help explain the faith.", href: "/church-fathers", cta: "Read the Fathers" },
  { title: "Liturgy of the Hours", description: "Discover the Church's daily prayer.", href: "/liturgy-of-the-hours", cta: "Pray the Hours" },
  { title: "Ask for Prayer", description: "Invite others to pray with you as you take the next step.", href: "/prayer-intentions/submit", cta: "Ask for Prayer" },
];

export const beginnerCatholicLearningPath: Array<{
  title: string;
  description: string;
  links: OciaLink[];
}> = [
  {
    title: "Who is Jesus?",
    description: "Begin with Scripture and the person of Christ.",
    links: [
      { label: "Scripture Prayer", href: "/library/scripture-prayer" },
      { label: "Journal", href: "/reflections/mass-readings" },
      { label: "USCCB Bible", href: "https://bible.usccb.org/bible", external: true },
    ],
  },
  {
    title: "What is the Mass?",
    description: "Learn what Catholics believe is happening in the liturgy.",
    links: [{ label: "The Holy Mass", href: "/mass" }],
  },
  {
    title: "What are the sacraments?",
    description: "See how Christ gives grace through the Church.",
    links: [{ label: "Sacraments", href: "/sacraments" }],
  },
  {
    title: "What does the Church teach?",
    description: "Use the Catechism and formation guides as a map.",
    links: [
      { label: "Catechism", href: "/catechism" },
      { label: "Formation", href: "/formation" },
    ],
  },
  {
    title: "How do Catholics pray?",
    description: "Explore the Church's daily prayer and devotional life.",
    links: [
      { label: "Pray", href: "/pray" },
      { label: "Rosary", href: "/rosary" },
      { label: "Liturgy of the Hours", href: "/liturgy-of-the-hours" },
    ],
  },
  {
    title: "Who are Mary and the saints?",
    description: "Learn how Catholics understand the communion of saints.",
    links: [
      { label: "Saints", href: "/saints" },
      { label: "Devotions", href: "/devotions" },
      { label: "Church Fathers", href: "/church-fathers" },
    ],
  },
  {
    title: "How do I live the faith?",
    description: "Move from questions into daily habits of prayer and discipleship.",
    links: [
      { label: "Formation", href: "/formation" },
      { label: "Rule of Life", href: "/rule-of-life" },
      { label: "Virtue Tracker", href: "/virtue-tracker" },
    ],
  },
];
