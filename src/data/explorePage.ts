import type {
  ExploreBeliefCard,
  ExploreStartingPoint,
  MisunderstandingCard,
} from "@/types/explore";

export const exploreBasicsCards = [
  {
    id: "basic-jesus",
    title: "Who is Jesus?",
    description:
      "Catholics believe Jesus Christ is true God and true man, the Savior of the world, and the center of the Christian life.",
    links: [
      { label: "Scripture Prayer", href: "/library/scripture-prayer" },
      { label: "Catechism", href: "/catechism" },
    ],
  },
  {
    id: "basic-church",
    title: "What is the Catholic Church?",
    description:
      "The Catholic Church is the Christian community founded on Christ and the apostles, continuing through Scripture, Tradition, sacraments, and the life of the Church.",
    links: [
      { label: "Catechism", href: "/catechism" },
      { label: "Church Fathers", href: "/church-fathers" },
    ],
  },
  {
    id: "basic-mass",
    title: "What is the Mass?",
    description:
      "The Mass is the central act of Catholic worship, where Catholics hear the Word of God and receive the Eucharist.",
    links: [{ label: "The Holy Mass", href: "/mass" }],
  },
  {
    id: "basic-sacraments",
    title: "What are the sacraments?",
    description:
      "Sacraments are visible signs of grace through which Catholics believe Christ acts in the Church.",
    links: [{ label: "Sacraments", href: "/sacraments" }],
  },
  {
    id: "basic-prayer",
    title: "How do Catholics pray?",
    description:
      "Catholic prayer includes Scripture, silence, traditional prayers, the Rosary, the Liturgy of the Hours, and personal conversation with God.",
    links: [{ label: "Pray", href: "/pray" }],
  },
  {
    id: "basic-ocia",
    title: "What is OCIA?",
    description:
      "OCIA is the parish journey for adults exploring Catholicism, preparing for sacraments, or entering full communion with the Church.",
    links: [{ label: "OCIA", href: "/ocia" }],
  },
] as const;

export const exploreStartingPoints: ExploreStartingPoint[] = [
  {
    id: "start-curious",
    title: "I am curious about Catholicism",
    slug: "curious-about-catholicism",
    description: "Start with the broad shape of Catholic belief, prayer, and worship.",
    recommendedLinks: [
      { label: "Catholic Beliefs", href: "/explore/catholic-beliefs" },
      { label: "The Holy Mass", href: "/mass" },
      { label: "Pray", href: "/pray" },
    ],
    firstStep: "Read the basics slowly and notice which part of Catholic life draws your attention first.",
    prayer: "Holy Spirit, guide me in truth and peace.",
    sortOrder: 10,
  },
  {
    id: "start-mass",
    title: "I am attending Mass for the first time",
    slug: "attending-mass-first-time",
    description: "Begin with a gentle guide to what happens at Mass and how to participate respectfully.",
    recommendedLinks: [
      { label: "First Time at Mass", href: "/explore/first-time-at-mass" },
      { label: "The Holy Mass", href: "/mass" },
      { label: "Eucharist", href: "/sacraments/eucharist" },
    ],
    firstStep: "Attend Mass and simply observe prayerfully.",
    prayer: "Holy Spirit, guide me in truth and peace.",
    sortOrder: 20,
  },
  {
    id: "start-becoming-catholic",
    title: "I am thinking about becoming Catholic",
    slug: "thinking-about-becoming-catholic",
    description: "Start with OCIA and a gentle introduction to Catholic belief and sacramental life.",
    recommendedLinks: [
      { label: "OCIA", href: "/ocia" },
      { label: "Catholic Beliefs", href: "/explore/catholic-beliefs" },
      { label: "Sacraments", href: "/sacraments" },
    ],
    firstStep: "Read about OCIA and write down two or three honest questions to bring to a parish.",
    prayer: "Lord Jesus, lead me with wisdom, humility, and trust.",
    sortOrder: 30,
  },
  {
    id: "start-returning",
    title: "I am returning after years away",
    slug: "returning-after-years-away",
    description: "Begin gently with Mass, Confession, and a peaceful path back into Catholic life.",
    recommendedLinks: [
      { label: "Coming Home", href: "/returning" },
      { label: "Confession Guide", href: "/confession" },
      { label: "The Holy Mass", href: "/mass" },
    ],
    firstStep: "Begin again without shame and ask God for the courage to take one real next step.",
    prayer: "Lord Jesus, help me come home with trust and peace.",
    sortOrder: 40,
  },
  {
    id: "start-relationship",
    title: "I am married to or dating a Catholic",
    slug: "dating-or-married-to-catholic",
    description: "Start by learning the Mass, sacraments, and the shape of Catholic family life.",
    recommendedLinks: [
      { label: "First Time at Mass", href: "/explore/first-time-at-mass" },
      { label: "Matrimony", href: "/sacraments/matrimony" },
      { label: "The Domestic Church", href: "/family" },
    ],
    firstStep: "Ask your Catholic loved one what part of the faith matters most to them and listen with curiosity.",
    prayer: "Holy Spirit, help me understand with patience and goodwill.",
    sortOrder: 50,
  },
  {
    id: "start-mary-saints",
    title: "I want to understand Mary and the saints",
    slug: "understand-mary-and-saints",
    description: "Start with the difference between honoring the saints and worshiping God.",
    recommendedLinks: [
      { label: "Mary and the Saints", href: "/explore/mary-and-saints" },
      { label: "Saints", href: "/saints" },
      { label: "Rosary", href: "/rosary" },
    ],
    firstStep: "Begin with Jesus first, then notice how Catholic teaching about Mary and the saints points back to Him.",
    prayer: "Lord, lead me into truth without fear.",
    sortOrder: 60,
  },
  {
    id: "start-confession",
    title: "I want to understand Confession",
    slug: "understand-confession",
    description: "Begin with mercy, reconciliation, and why Catholics confess to a priest.",
    recommendedLinks: [
      { label: "Confession Guide", href: "/confession" },
      { label: "Common Questions", href: "/explore/questions" },
      { label: "Catechism", href: "/catechism" },
    ],
    firstStep: "Start by asking what Catholics believe Christ is doing in the sacrament.",
    prayer: "Jesus, teach me Your mercy.",
    sortOrder: 70,
  },
  {
    id: "start-eucharist",
    title: "I want to understand the Eucharist",
    slug: "understand-eucharist",
    description: "Start with the Mass, the Real Presence, and why the Eucharist is central in Catholic life.",
    recommendedLinks: [
      { label: "Eucharist", href: "/sacraments/eucharist" },
      { label: "The Holy Mass", href: "/mass" },
      { label: "Adoration", href: "/adoration" },
    ],
    firstStep: "Read what Catholics mean by the Real Presence before trying to untangle every detail.",
    prayer: "Lord Jesus, help me understand Your Eucharistic love.",
    sortOrder: 80,
  },
  {
    id: "start-prayer",
    title: "I want to learn how Catholics pray",
    slug: "learn-how-catholics-pray",
    description: "Start with simple daily prayer, Scripture, silence, and the prayers the Church gives.",
    recommendedLinks: [
      { label: "Pray", href: "/pray" },
      { label: "Scripture Prayer", href: "/library/scripture-prayer" },
      { label: "Rosary", href: "/rosary" },
    ],
    firstStep: "Start small with one prayer and a few quiet minutes.",
    prayer: "Holy Spirit, teach me to pray.",
    sortOrder: 90,
  },
  {
    id: "start-doubts",
    title: "I have questions or doubts",
    slug: "questions-or-doubts",
    description: "Start with common questions and let honest inquiry become a path toward deeper understanding.",
    recommendedLinks: [
      { label: "Common Questions", href: "/explore/questions" },
      { label: "Catholic Beliefs", href: "/explore/catholic-beliefs" },
      { label: "Glossary", href: "/glossary" },
    ],
    firstStep: "Write down your real question in plain language and begin there.",
    prayer: "God, guide me with honesty, patience, and courage.",
    sortOrder: 100,
  },
];

export const exploreBeliefCards: ExploreBeliefCard[] = [
  {
    id: "belief-trinity",
    title: "God is Trinity",
    slug: "god-is-trinity",
    plainExplanation: "Catholics believe there is one God in three divine Persons: Father, Son, and Holy Spirit.",
    relatedLinks: [{ label: "Catechism", href: "/catechism" }],
    sortOrder: 10,
  },
  {
    id: "belief-jesus",
    title: "Jesus is Lord and Savior",
    slug: "jesus-is-lord-and-savior",
    plainExplanation: "Catholics believe Jesus Christ is the eternal Son of God who became man for our salvation.",
    relatedLinks: [{ label: "Scripture Prayer", href: "/library/scripture-prayer" }, { label: "Catechism", href: "/catechism" }],
    sortOrder: 20,
  },
  {
    id: "belief-scripture",
    title: "Scripture is the Word of God",
    slug: "scripture-is-word-of-god",
    plainExplanation: "Catholics receive the Bible as the inspired Word of God and read it within the life of the Church.",
    relatedLinks: [{ label: "Scripture Prayer", href: "/library/scripture-prayer" }, { label: "Sacred Tradition", href: "/tradition" }],
    sortOrder: 30,
  },
  {
    id: "belief-church",
    title: "The Church preserves and hands on the faith",
    slug: "church-preserves-faith",
    plainExplanation: "Catholics believe Christ entrusted His Gospel to the apostles and that the Church continues to hand it on through Scripture, Tradition, worship, and sacramental life.",
    relatedLinks: [{ label: "Tradition", href: "/tradition" }, { label: "Church Fathers", href: "/church-fathers" }],
    sortOrder: 40,
  },
  {
    id: "belief-mass",
    title: "The Mass is central worship",
    slug: "mass-is-central-worship",
    plainExplanation: "For Catholics, the Mass is the heart of worship because the Church hears God's Word and is united to Christ in the Eucharist.",
    relatedLinks: [{ label: "The Holy Mass", href: "/mass" }],
    sortOrder: 50,
  },
  {
    id: "belief-eucharist",
    title: "The Eucharist is truly Christ",
    slug: "eucharist-is-truly-christ",
    plainExplanation: "Catholics believe the Eucharist is not only symbolic but truly Jesus Christ present sacramentally.",
    relatedLinks: [{ label: "Eucharist", href: "/sacraments/eucharist" }, { label: "Adoration", href: "/adoration" }],
    sortOrder: 60,
  },
  {
    id: "belief-sacraments",
    title: "Sacraments give grace",
    slug: "sacraments-give-grace",
    plainExplanation: "Catholics believe Christ uses the sacraments as real channels of grace in the life of the Church.",
    relatedLinks: [{ label: "Sacraments", href: "/sacraments" }],
    sortOrder: 70,
  },
  {
    id: "belief-mary",
    title: "Mary points us to Jesus",
    slug: "mary-points-to-jesus",
    plainExplanation: "Catholics honor Mary because of her unique role in salvation history, but Catholic teaching about Mary always points back to Christ.",
    relatedLinks: [{ label: "Mary and the Saints", href: "/explore/mary-and-saints" }, { label: "Rosary", href: "/rosary" }],
    sortOrder: 80,
  },
  {
    id: "belief-saints",
    title: "Saints pray with us and for us",
    slug: "saints-pray-with-us",
    plainExplanation: "Catholics ask the saints for intercession because the Church is one in Christ across heaven and earth.",
    relatedLinks: [{ label: "Saints", href: "/saints" }],
    sortOrder: 90,
  },
  {
    id: "belief-confession",
    title: "Confession is an encounter with mercy",
    slug: "confession-is-mercy",
    plainExplanation: "Catholics believe Christ reconciles sinners through the sacrament of Confession and the ministry of the Church.",
    relatedLinks: [{ label: "Confession Guide", href: "/confession" }],
    sortOrder: 100,
  },
  {
    id: "belief-christian-life",
    title: "Christian life means faith, hope, charity, virtue, and holiness",
    slug: "christian-life-virtue-holiness",
    plainExplanation: "Catholic life is not only about rules. It is about growing in love of God and neighbor through grace, prayer, virtue, and holiness.",
    relatedLinks: [{ label: "Formation", href: "/formation" }, { label: "Virtue Tracker", href: "/virtue-tracker" }],
    sortOrder: 110,
  },
];

export const misunderstandingCards: MisunderstandingCard[] = [
  {
    id: "misunderstanding-mary",
    topic: "Mary",
    catholicsBelieve: "Catholics believe Mary is the Mother of God and the greatest disciple of Jesus.",
    catholicsDoNotBelieve: "Catholics do not worship Mary.",
    relatedLinks: [{ label: "Mary and the Saints", href: "/explore/mary-and-saints" }, { label: "Rosary", href: "/rosary" }],
    sortOrder: 10,
  },
  {
    id: "misunderstanding-saints",
    topic: "Saints",
    catholicsBelieve: "Catholics ask saints to pray for us.",
    catholicsDoNotBelieve: "Catholics do not treat saints as gods.",
    relatedLinks: [{ label: "Saints", href: "/saints" }],
    sortOrder: 20,
  },
  {
    id: "misunderstanding-eucharist",
    topic: "Eucharist",
    catholicsBelieve: "Catholics believe the Eucharist is truly Jesus Christ.",
    catholicsDoNotBelieve: "Catholics do not believe Communion is only a symbol.",
    relatedLinks: [{ label: "Eucharist", href: "/sacraments/eucharist" }, { label: "Mass", href: "/mass" }],
    sortOrder: 30,
  },
  {
    id: "misunderstanding-confession",
    topic: "Confession",
    catholicsBelieve: "Catholics confess to a priest because Christ entrusted reconciliation to the Church.",
    catholicsDoNotBelieve: "Confession is not meant to shame people.",
    relatedLinks: [{ label: "Confession Guide", href: "/confession" }],
    sortOrder: 40,
  },
  {
    id: "misunderstanding-scripture",
    topic: "Scripture",
    catholicsBelieve: "Catholics read and love the Bible.",
    catholicsDoNotBelieve: "The Mass is not separate from Scripture; it is filled with Scripture.",
    relatedLinks: [{ label: "Scripture Prayer", href: "/library/scripture-prayer" }, { label: "Mass", href: "/mass" }],
    sortOrder: 50,
  },
  {
    id: "misunderstanding-pope",
    topic: "Pope",
    catholicsBelieve: "Catholics believe the Pope has a unique role of unity and teaching authority.",
    catholicsDoNotBelieve: "The Pope is not worshiped and is not above God.",
    relatedLinks: [{ label: "The Pope", href: "/pope" }],
    sortOrder: 60,
  },
];

export const seekerPrayer = `Holy Spirit,
guide me in truth, peace, and courage.

Open my heart to what is good,
help me ask honest questions,
and lead me closer to Jesus Christ.

If You are calling me toward the Catholic faith,
give me wisdom, humility, and trust
to take the next step.

Amen.`;

export const firstWeekPlan = [
  "Day 1: Pray the seeker prayer.",
  "Day 2: Read about the Mass.",
  "Day 3: Read one Gospel passage.",
  "Day 4: Learn about the sacraments.",
  "Day 5: Read common questions.",
  "Day 6: Attend Mass or watch a Mass guide.",
  "Day 7: Contact a parish or write down questions.",
] as const;

export const relatedExploreTools = [
  {
    title: "Angels and the Invisible World",
    description: "Learn what Catholics mean by creation visible and invisible, guardian angels, and heavenly worship.",
    href: "/angels",
    cta: "Learn About Angels",
  },
  {
    title: "First Time at Mass",
    description: "A gentle guide to what to expect and how to participate respectfully.",
    href: "/explore/first-time-at-mass",
    cta: "First Time at Mass",
  },
  {
    title: "Becoming Catholic / OCIA",
    description: "Learn how adults begin exploring the Catholic faith in parish life.",
    href: "/ocia",
    cta: "Learn About OCIA",
  },
  {
    title: "Catechism",
    description: "Read what the Church teaches from the Church herself.",
    href: "/catechism",
    cta: "Open the Catechism",
  },
  {
    title: "The Holy Mass",
    description: "Understand Catholic worship, the readings, and the Eucharist.",
    href: "/mass",
    cta: "Understand the Mass",
  },
  {
    title: "Sacraments",
    description: "Learn how Catholics understand grace and sacramental life.",
    href: "/sacraments",
    cta: "Explore Sacraments",
  },
  {
    title: "Body, Soul, and Spirit",
    description: "Learn how Catholics understand the human person, grace, sin, mercy, and the soul as an interior temple of God.",
    href: "/body-soul-spirit",
    cta: "Enter the Interior Temple",
  },
  {
    title: "Pray",
    description: "Start with simple Catholic prayer, Scripture, and silence.",
    href: "/pray",
    cta: "Begin in Prayer",
  },
  {
    title: "The Bible",
    description: "See how Catholics read Sacred Scripture with the Church, the Mass, and prayer.",
    href: "/bible",
    cta: "Learn the Bible",
  },
  {
    title: "Scripture Prayer",
    description: "Pray with the Bible in a simple, beginner-friendly way.",
    href: "/library/scripture-prayer",
    cta: "Pray with Scripture",
  },
  {
    title: "Saints",
    description: "Meet the holy men and women Catholics honor as witnesses of grace.",
    href: "/saints",
    cta: "Meet the Saints",
  },
  {
    title: "Mary and the Saints",
    description: "Learn how Catholics honor Mary and ask the saints for intercession.",
    href: "/explore/mary-and-saints",
    cta: "Learn About Mary and the Saints",
  },
  {
    title: "Church Fathers",
    description: "See how the early Church helps illuminate Catholic belief and worship.",
    href: "/church-fathers",
    cta: "Read the Fathers",
  },
  {
    title: "Catholic Beliefs",
    description: "Read plain-English summaries of core Catholic beliefs.",
    href: "/explore/catholic-beliefs",
    cta: "Read Catholic Beliefs",
  },
  {
    title: "Common Questions",
    description: "Browse gentle answers to common questions about Catholicism.",
    href: "/explore/questions",
    cta: "Read Common Questions",
  },
] as const;
