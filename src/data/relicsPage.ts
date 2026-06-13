import type { RelicClass, RelicTopic, RelicVisitNeed, RelicVisitRecommendation } from "@/types/relics";

export const relicsHeroLinks = [
  { label: "What Are Relics?", href: "#what-are-relics" },
  { label: "Types of Relics", href: "#classes-of-relics" },
  { label: "How to Venerate Relics", href: "#how-to-venerate" },
] as const;

export const relicTopics: RelicTopic[] = [
  {
    id: "topic-basics",
    title: "What Are Relics?",
    slug: "what-are-relics",
    description: "Relics are physical objects connected with Christ or the saints.",
    keyPoints: [
      "Relics are connected to holy people and holy places.",
      "They remind us that saints were real people.",
      "They point to the resurrection of the body.",
      "They are honored, not worshiped.",
      "They help us remember the communion of saints.",
      "They should lead us to prayer and imitation.",
      "They are not magical objects.",
    ],
    relatedLinks: [
      { label: "Saints", href: "/saints" },
      { label: "Sacramentals", href: "/sacramentals" },
    ],
    sortOrder: 10,
  },
  {
    id: "topic-veneration",
    title: "Why Catholics Venerate Relics",
    slug: "why-venerate-relics",
    description: "Catholics honor relics because God worked through the saints in real history.",
    keyPoints: [
      "Relics honor God's work in the saints.",
      "Relics point to the resurrection.",
      "Relics connect us to the communion of saints.",
      "Relics remind us holiness is possible.",
      "Relics help us ask for intercession.",
      "Relics invite imitation, not curiosity.",
      "Relics connect faith with history and the body.",
    ],
    relatedLinks: [
      { label: "Mass", href: "/mass" },
      { label: "Devotions", href: "/devotions" },
    ],
    sortOrder: 20,
  },
  {
    id: "topic-home",
    title: "Relics at Home",
    slug: "relics-at-home",
    description: "Third-class relics should be kept prayerfully and respectfully, never as collectibles or charms.",
    keyPoints: [
      "Keep relics in a prayerful place.",
      "Label them clearly if possible.",
      "Do not sell relics.",
      "Protect them from damage.",
      "Pray with gratitude and ask for intercession.",
    ],
    relatedLinks: [
      { label: "Prayer", href: "/pray" },
      { label: "Family", href: "/family" },
    ],
    sortOrder: 30,
  },
];

export const relicClasses: RelicClass[] = [
  {
    id: "class-first",
    title: "First-Class Relic",
    slug: "first-class",
    description: "A part of a saint's body, such as bone, hair, or blood.",
    examples: ["bone", "hair", "blood"],
    reverenceNote: "First-class relics are treated with great reverence.",
    cautionNote: "They should never be bought or sold.",
    sortOrder: 10,
  },
  {
    id: "class-second",
    title: "Second-Class Relic",
    slug: "second-class",
    description: "An object personally used by a saint, such as clothing, a book, rosary, or personal item.",
    examples: ["clothing", "book", "rosary"],
    reverenceNote: "These should be treated reverently and not as collectibles.",
    cautionNote: "They should not be reduced to historical trophies or sold as sacred curiosities.",
    sortOrder: 20,
  },
  {
    id: "class-third",
    title: "Third-Class Relic",
    slug: "third-class",
    description: "An object touched to a first-class or second-class relic, or to a saint's tomb or shrine.",
    examples: ["holy card", "cloth", "medal"],
    reverenceNote: "Third-class relics are often devotional items used for prayer and remembrance.",
    cautionNote: "Even these should never be treated like magic protection or novelty items.",
    sortOrder: 30,
  },
];

export const relicScriptureReferences = [
  { reference: "2 Kings 13:21", title: "Elisha's bones", description: "Contact with the prophet's bones becomes a biblical sign that God can work through material realities connected with His holy ones." },
  { reference: "Acts 5:15", title: "Peter's shadow", description: "People draw near in hope because of apostolic holiness and God's healing power." },
  { reference: "Acts 19:11-12", title: "Cloths associated with Paul", description: "The Lord works through material things related to an apostle, always by divine power and not magic." },
  { reference: "Matthew 9:20-22", title: "The woman touching Christ's garment", description: "Faith reaches toward Christ through a physical sign, and He is the true source of healing." },
  { reference: "Revelation 6:9", title: "Martyrs beneath the altar", description: "The heavenly vision keeps the witness of the saints close to worship and sacrifice." },
] as const;

export const relicEarlyChurchCards = [
  "Martyrs witnessed with their bodies.",
  "Christians honored burial places.",
  "Altars became connected with martyr tombs.",
  "Relics reminded the Church of courage and fidelity.",
  "Veneration expressed hope in resurrection.",
] as const;

export const relicMassPoints = [
  "The Mass is centered on Christ.",
  "Saints participate in Christ's victory.",
  "Martyrs gave their lives in union with Christ.",
  "Relics near altars point to the communion of saints.",
  "Earthly worship joins heavenly worship.",
] as const;

export const relicCommunionCards = [
  "Saints are alive in Christ",
  "The Church is one family",
  "We ask the saints to pray for us",
  "Relics remind us that holiness is embodied",
  "We are called to become saints too",
] as const;

export const relicVenerationSteps = [
  "Begin with the Sign of the Cross.",
  "Thank God for the saint's witness.",
  "Ask the saint's intercession.",
  "Pray for the grace to imitate their virtue.",
  "If appropriate, touch or kiss the reliquary reverently according to local instructions.",
  "End by turning your heart to Christ.",
];

export const reliquaryTypes = [
  { title: "Small reliquary", description: "A simple protected vessel for prayerful veneration in a church, convent, or shrine." },
  { title: "Altar reliquary", description: "A reliquary near or within an altar, expressing the union of worship and the witness of the saints." },
  { title: "Shrine reliquary", description: "A more permanent reliquary in a pilgrimage site or church dedicated to a saint." },
  { title: "Processional reliquary", description: "A reliquary carried for solemn veneration or public devotion." },
  { title: "Traveling relic exposition", description: "A temporary display that allows the faithful to pray and venerate under Church guidance." },
] as const;

export const relicHomeGuidance = [
  "Keep relics in a prayerful place.",
  "Label them clearly if possible.",
  "Do not sell relics.",
  "Do not expose relics to damage.",
  "Do not treat relics as magic protection.",
  "Pray with gratitude and ask for intercession.",
  "If unsure, ask a priest or diocese.",
] as const;

export const relicFamilyIdeas = [
  "Visit a church or shrine with relics.",
  "Learn about the saint connected to the relic.",
  "Pray for the saint's intercession.",
  "Ask what virtue the saint practiced.",
  "Explain that relics are honored, not worshiped.",
  "Avoid scary or morbid details.",
] as const;

export const relicExplorerPath = [
  "Learn about the communion of saints.",
  "Learn the difference between worship and veneration.",
  "Learn why the body matters.",
  "Visit a shrine or church with relics if available.",
  "Ask questions in OCIA or at a parish.",
] as const;

export const relicRelatedTools = [
  { title: "Saints", description: "Meet the saints whose lives and witness make relics meaningful.", href: "/saints", cta: "Explore the Saints" },
  { title: "Sacramentals", description: "See how relics fit into the Church's wider devotional life.", href: "/sacramentals", cta: "Learn About Sacramentals" },
  { title: "Devotions", description: "Keep relics ordered to prayer, not curiosity.", href: "/devotions", cta: "Explore Devotions" },
  { title: "The Holy Mass", description: "Understand why relics are traditionally connected with altars and worship.", href: "/mass", cta: "Understand the Mass" },
  { title: "Eucharist", description: "Keep Christ at the center of every devotion.", href: "/sacraments/eucharist", cta: "Learn About the Eucharist" },
  { title: "Church Fathers", description: "See how the early Church honored the martyrs and saints.", href: "/church-fathers", cta: "Meet the Fathers" },
  { title: "Sacred Tradition", description: "Understand how Catholic devotion develops with Scripture and the Church.", href: "/tradition", cta: "Learn About Tradition" },
  { title: "Catechism", description: "Read the Church's teaching on the communion of saints and popular piety.", href: "/catechism", cta: "Read the Catechism" },
  { title: "Explore the Catholic Faith", description: "A gentle place to begin if relics feel unfamiliar.", href: "/explore", cta: "Start Exploring" },
  { title: "OCIA", description: "Bring your questions about relics into a parish path of learning.", href: "/ocia", cta: "Explore OCIA" },
  { title: "Prayer", description: "Let relics lead you into prayer and holiness.", href: "/pray", cta: "Begin in Prayer" },
  { title: "Formation", description: "Grow in doctrine, devotion, and practical Catholic wisdom.", href: "/formation", cta: "Open Formation" },
  { title: "The Vatican", description: "Continue into official Church sources and major basilicas.", href: "/vatican", cta: "Explore the Vatican" },
] as const;

export const relicVisitOptions: Array<{ need: RelicVisitNeed; label: string }> = [
  { need: "visit-saints-relic", label: "I am visiting a saint's relic" },
  { need: "visit-shrine", label: "I am visiting a shrine" },
  { need: "bring-family", label: "I am bringing my family" },
  { need: "praying-for-healing", label: "I am praying for healing" },
  { need: "praying-for-conversion", label: "I am praying for conversion" },
  { need: "exploring-catholicism", label: "I am exploring Catholicism" },
  { need: "unsure-what-to-do", label: "I am unsure what to do" },
];

export const relicVisitRecommendations: RelicVisitRecommendation[] = [
  {
    need: "visit-saints-relic",
    steps: ["Begin with the Sign of the Cross.", "Thank God for the saint's witness.", "Ask for the grace to imitate the saint's virtue.", "End by turning your attention back to Christ."],
    prayer: "Lord Jesus, through the witness of Your saint, draw me closer to You.",
    reflectionQuestion: "What virtue in this saint do I most need to practice?",
    relatedLinks: [{ label: "Saints", href: "/saints" }, { label: "Prayer", href: "/pray" }],
  },
  {
    need: "visit-shrine",
    steps: ["Enter quietly and prayerfully.", "Read any local guidance before approaching the relic.", "Pray with gratitude rather than curiosity.", "Let the visit become an act of pilgrimage, not sightseeing only."],
    prayer: "Lord, make this visit fruitful in prayer, humility, and peace.",
    reflectionQuestion: "How is Christ inviting me to pilgrimage in daily life?",
    relatedLinks: [{ label: "Mass", href: "/mass" }, { label: "Formation", href: "/formation" }],
  },
  {
    need: "bring-family",
    steps: ["Explain simply that relics remind us saints were real people who loved Jesus.", "Keep the visit peaceful and brief if needed.", "Invite each child to name one virtue of the saint.", "Pray together before leaving."],
    prayer: "Lord Jesus, bless our family and teach us to love the saints as friends who lead us to You.",
    reflectionQuestion: "What saintly virtue would help our family most right now?",
    relatedLinks: [{ label: "Family", href: "/family" }, { label: "Saints", href: "/saints" }],
  },
  {
    need: "praying-for-healing",
    steps: ["Ask Jesus for trust.", "Ask the saint to intercede.", "Pray with humility and surrender.", "Continue appropriate medical and pastoral care."],
    prayer: "Lord Jesus, through the prayers of Your saint, grant healing according to Your will.",
    reflectionQuestion: "Where do I most need Christ's healing right now?",
    relatedLinks: [{ label: "Anointing of the Sick", href: "/sacraments/anointing" }, { label: "Prayer", href: "/pray" }],
  },
  {
    need: "praying-for-conversion",
    steps: ["Confess your need before God honestly.", "Ask the saint for intercession.", "Name one concrete area of repentance.", "Resolve to stay close to confession, Mass, and prayer."],
    prayer: "Lord Jesus, convert my heart and teach me to follow You with sincerity.",
    reflectionQuestion: "What change is Christ asking of me now?",
    relatedLinks: [{ label: "Confession", href: "/confession" }, { label: "Mass Readings Reflections", href: "/reflections/mass-readings" }],
  },
  {
    need: "exploring-catholicism",
    steps: ["Begin with the Incarnation: God entered the material world in Jesus Christ.", "Notice the difference between worship and veneration.", "Ask a simple question rather than trying to solve everything at once.", "Stay close to Scripture, Mass, and parish conversation."],
    prayer: "Lord, help me understand Your Church with honesty, peace, and openness.",
    reflectionQuestion: "What part of Catholic devotion feels new but meaningful to me?",
    relatedLinks: [{ label: "Explore", href: "/explore" }, { label: "OCIA", href: "/ocia" }],
  },
  {
    need: "unsure-what-to-do",
    steps: ["Stand quietly for a moment.", "Make the Sign of the Cross.", "Thank God for the saint.", "Ask for help to pray simply and reverently."],
    prayer: "Lord Jesus, teach me how to pray and honor holy things rightly.",
    reflectionQuestion: "What small act of reverence can I offer with sincerity?",
    relatedLinks: [{ label: "Prayer", href: "/pray" }, { label: "Saints", href: "/saints" }],
  },
];
