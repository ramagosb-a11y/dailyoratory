import { BibleUseCase, type BibleCardItem, type BibleFinderRecommendation, type BibleLink, type BibleRelatedTool, type BibleStep } from "@/types/bible";

const usccbDailyReadings: BibleLink = {
  label: "USCCB Daily Readings",
  href: "https://bible.usccb.org/daily-bible-reading",
  external: true,
  official: true,
};

const usccbTranslations: BibleLink = {
  label: "USCCB Approved Translations",
  href: "https://www.usccb.org/offices/new-american-bible/approved-translations-bible",
  external: true,
  official: true,
};

export const bibleHero = {
  title: "The Bible",
  subtitle: "Reading Sacred Scripture with the heart of the Church.",
  copy:
    "The Bible is the inspired Word of God, given to lead us to Jesus Christ. Catholics read Scripture prayerfully, reverently, and within the living Tradition of the Church, especially through the Mass, the Liturgy of the Hours, personal prayer, and daily conversion.",
  note:
    "Daily Oratory provides original summaries and links to official Bible resources. For full Scripture texts, use approved Catholic Bible translations and official sources.",
};

export const catholicViewPoints = [
  "Scripture is inspired by God.",
  "Scripture reveals God's saving plan.",
  "Jesus Christ is the center of Scripture.",
  "The Old and New Testaments belong together.",
  "The Bible is read with the Church, not in isolation.",
  "Sacred Tradition helps us receive the Word faithfully.",
  "The Magisterium serves the Word of God.",
  "Scripture should lead to worship, conversion, and love.",
];

export const catholicViewNote =
  "Catholics do not see the Bible as opposed to Tradition. The Church received the Word, handed it on, preserved the Scriptures, and continues to proclaim them.";

export const scriptureTraditionMagisteriumCards: BibleCardItem[] = [
  {
    title: "Sacred Scripture",
    description: "The inspired written Word of God.",
  },
  {
    title: "Sacred Tradition",
    description: "The living handing on of the apostolic faith in the Church.",
  },
  {
    title: "Magisterium",
    description: "The Church's teaching office, serving the Word of God by faithfully interpreting Scripture and Tradition.",
  },
];

export const scriptureTraditionMagisteriumLinks: BibleLink[] = [
  { label: "Sacred Tradition", href: "/tradition" },
  { label: "Church Authority", href: "/pope" },
  { label: "Catechism", href: "/catechism" },
  { label: "Councils", href: "/councils" },
];

export const bibleAtMassCards: BibleCardItem[] = [
  {
    title: "First Reading",
    description: "The Church hears salvation history and God's covenant promises proclaimed to the assembly.",
  },
  {
    title: "Responsorial Psalm",
    description: "The Psalms teach the Church how to answer God with praise, lament, trust, and thanksgiving.",
  },
  {
    title: "Second Reading",
    description: "The apostolic letters instruct, correct, console, and strengthen the Church in Christ.",
  },
  {
    title: "Gospel",
    description: "The Gospel places us before Jesus Himself, His words, His mercy, and His saving work.",
  },
  {
    title: "Homily",
    description: "The homily helps the faithful receive the readings as a living word for faith and daily life.",
  },
  {
    title: "Eucharistic prayers and biblical imagery",
    description: "The language of sacrifice, covenant, thanksgiving, remembrance, and heavenly worship is deeply biblical.",
  },
  {
    title: "The Mass as Scripture prayed and fulfilled",
    description: "Catholics do not only study Scripture at Mass. The Church proclaims it, answers it, and lives it sacramentally.",
  },
];

export const howToReadBibleCatholicSteps: BibleStep[] = [
  { title: "Begin with prayer", description: "Ask the Holy Spirit to open your heart." },
  { title: "Read slowly", description: "Do not rush. Notice words, people, actions, and promises." },
  { title: "Look for Christ", description: "Ask how the passage points to Jesus, His Church, His mercy, or His mission." },
  { title: "Read in context", description: "Notice the book, chapter, speaker, audience, covenant, and situation." },
  { title: "Read with the Church", description: "Use the Catechism, Church teaching, Mass readings, and trusted Catholic resources." },
  { title: "Listen for conversion", description: "Ask what God is calling you to believe, surrender, repent, or practice." },
  { title: "Respond in prayer", description: "Turn the passage into thanksgiving, repentance, petition, or praise." },
  { title: "Live one word", description: "Choose one concrete act of faith, virtue, or charity." },
];

export const gatherAWordSteps: BibleStep[] = [
  { title: "Pray", description: "Holy Spirit, help me receive what You want to give." },
  { title: "Read", description: "Read the passage slowly." },
  { title: "Notice", description: "What word, phrase, image, or person stands out?" },
  { title: "Stay", description: "Remain with that word. Do not rush to explain everything." },
  { title: "Ask", description: "What does this reveal about God, my heart, or today's call to love?" },
  { title: "Respond", description: "Speak to Jesus honestly." },
  { title: "Test gently", description: "Does this lead to faith, hope, charity, humility, repentance, peace, or obedience to God?" },
  { title: "Practice", description: "Choose one small action." },
];

export const prayerBeforeTheReadings = `Holy Spirit,
open my heart to the Word of God.

Let one word, phrase, or invitation
lead me closer to Jesus.

Protect me from distraction,
pride,
confusion,
and fear.

Teach me to listen with humility,
respond with love,
and live what I receive today.

Amen.`;

export const gatherAWordWarning =
  "Do not use Scripture as a magic answer machine. Do not open random verses to make major life decisions without prayer, reason, Church teaching, and wise counsel.";

export const dailyReadingsMethod = [
  "1 minute: Sign of the Cross and invite the Holy Spirit.",
  "3 minutes: Read the Gospel or one Mass reading slowly.",
  "2 minutes: Choose one word or phrase.",
  "2 minutes: Ask what Jesus is showing you.",
  "1 minute: Pray for grace.",
  "1 minute: Choose one action for the day.",
] as const;

export const lectioDivinaMovements: BibleCardItem[] = [
  { title: "Lectio: Read", description: "Receive the text slowly and attentively." },
  { title: "Meditatio: Reflect", description: "Ponder what the passage reveals about Christ, the Church, and your own life." },
  { title: "Oratio: Pray", description: "Respond to God with honesty, thanksgiving, petition, or repentance." },
  { title: "Contemplatio: Rest in God", description: "Remain quietly with the Lord in loving attention." },
  { title: "Actio: Live the Word", description: "Carry one concrete response into the day." },
];

export const deuterocanonicalBooks = [
  "Tobit",
  "Judith",
  "Wisdom",
  "Sirach",
  "Baruch",
  "1 Maccabees",
  "2 Maccabees",
  "Additions to Esther and Daniel",
];

export const whereToStartPaths = [
  {
    title: "Path 1: Start with Jesus",
    references: ["Gospel of Luke", "Gospel of John", "Acts of the Apostles"],
  },
  {
    title: "Path 2: Pray with the Church",
    references: ["Daily Mass readings", "Psalms", "Sunday Gospel"],
  },
  {
    title: "Path 3: Learn the story",
    references: ["Genesis", "Exodus", "1 Samuel", "Luke", "Acts"],
  },
  {
    title: "Path 4: For prayer and comfort",
    references: ["Psalms", "Gospel of John", "Romans 8", "Philippians", "1 John"],
  },
  {
    title: "Path 5: For OCIA or exploring Catholicism",
    references: ["Luke", "Acts", "John", "Romans", "James", "Psalms", "Daily Mass readings"],
  },
];

export const booksOfBibleOverview = [
  {
    title: "Old Testament",
    entries: ["Pentateuch", "Historical books", "Wisdom books", "Prophets"],
  },
  {
    title: "New Testament",
    entries: ["Gospels", "Acts", "Letters of Saint Paul", "Catholic Letters", "Revelation"],
  },
];

export const biblePrayerMethods = [
  "Repeat one verse slowly.",
  "Turn a line into thanksgiving.",
  "Ask forgiveness where the Word convicts.",
  "Pray for someone mentioned in your heart.",
  "Imagine yourself in a Gospel scene.",
  "End with the Our Father.",
];

export const studyVsPrayerCards = [
  {
    title: "Bible Study",
    points: [
      "asks what the text means",
      "uses context, history, genre, and Church teaching",
      "benefits from notes and trusted guides",
      "helps the mind understand",
    ],
  },
  {
    title: "Bible Prayer",
    points: [
      "listens for God's invitation",
      "responds with the heart",
      "leads to repentance, trust, and love",
      "helps the soul encounter Christ",
    ],
  },
];

export const commonBibleMistakes = [
  "Reading without prayer",
  "Ignoring context",
  "Treating Scripture like a fortune cookie",
  "Using verses to avoid Church teaching",
  "Reading only favorite passages",
  "Skipping the Old Testament entirely",
  "Becoming discouraged by difficult passages",
  "Ignoring the Mass readings",
  "Confusing personal interpretation with Church teaching",
  "Reading without charity",
];

export const difficultPassageAdvice = [
  "Do not panic.",
  "Ask what kind of writing this is.",
  "Read surrounding context.",
  "Ask how the Church understands it.",
  "Look for Christ and salvation history.",
  "Ask a priest, catechist, or trusted Catholic teacher.",
  "Avoid internet-only conclusions.",
];

export const familyBibleIdeas = [
  "Read the Sunday Gospel before Mass.",
  "Ask children what word they heard.",
  "Use a children's Bible for young children.",
  "Let children draw the Gospel scene.",
  "Pick one family verse for the week.",
  "Pray one Psalm before bed.",
  "Connect Scripture to saints and seasons.",
  "Keep a Bible in the family prayer corner.",
];

export const explorerBeginnerPath = [
  "Read the Gospel of Luke.",
  "Attend Mass and notice Scripture.",
  "Read the Sunday readings before Mass.",
  "Learn about Scripture and Tradition.",
  "Ask questions in OCIA.",
  "Use the Catechism for guidance.",
];

export const relatedBibleTools: BibleRelatedTool[] = [
  {
    title: "Mass Readings Reflections",
    description: "Pray with the Church's daily and Sunday readings through original Daily Oratory reflections.",
    href: "/reflections/mass-readings",
    cta: "Read Reflections",
  },
  {
    title: "Scripture Prayer",
    description: "Learn a Daily Oratory way of praying with the Word of God and Lectio Divina.",
    href: "/library/scripture-prayer",
    cta: "Pray with Scripture",
  },
  {
    title: "The Holy Mass",
    description: "See how Catholics hear Scripture and meet Christ in the liturgy.",
    href: "/mass",
    cta: "Understand the Mass",
  },
  {
    title: "Homilies",
    description: "Listen to Catholic preaching that helps Scripture become a living word.",
    href: "/homilies",
    cta: "Open Homilies",
  },
  {
    title: "Liturgy of the Hours",
    description: "Pray the Psalms and Scripture with the whole Church throughout the day.",
    href: "/liturgy-of-the-hours",
    cta: "Pray the Hours",
  },
  {
    title: "Catechism",
    description: "Read Scripture with the doctrinal guidance of the Church.",
    href: "/catechism",
    cta: "Open the Catechism",
  },
  {
    title: "Sacred Tradition",
    description: "Understand how Catholics receive Scripture within the living faith of the Church.",
    href: "/tradition",
    cta: "Learn Tradition",
  },
  {
    title: "Formation",
    description: "Let Scripture shape daily discipleship, virtue, and growth in holiness.",
    href: "/formation",
    cta: "Begin Formation",
  },
  {
    title: "Body, Soul, and Spirit",
    description: "See how grace, sin, Confession, and the interior temple belong to Catholic Scripture and daily conversion.",
    href: "/body-soul-spirit",
    cta: "Enter the Interior Temple",
  },
  {
    title: "Explore the Catholic Faith",
    description: "A welcoming place for anyone curious about Catholic belief and practice.",
    href: "/explore",
    cta: "Start Exploring",
  },
  {
    title: "OCIA",
    description: "A practical next step for adults exploring the Catholic faith with a parish.",
    href: "/ocia",
    cta: "Learn About OCIA",
  },
  {
    title: "Family and Domestic Church",
    description: "Bring Scripture into family prayer, conversation, and liturgical life.",
    href: "/family",
    cta: "Open Family Tools",
  },
  {
    title: "Media Library",
    description: "Find Catholic videos, slides, and media that support Bible learning and prayer.",
    href: "/media",
    cta: "Browse Media",
  },
];

export const translationFinderRecommendations: Record<BibleUseCase, BibleFinderRecommendation> = {
  [BibleUseCase.Beginner]: {
    need: BibleUseCase.Beginner,
    recommendation: "Start with a readable Catholic edition such as NABRE, and stay close to the Gospels and the daily readings.",
    explanation: "This keeps your first steps simple, recognizably Catholic, and easy to connect to Mass and daily prayer.",
    howToStart: "Begin with Luke or John, then read the Gospel of the day from the USCCB readings page.",
    relatedLinks: [
      { label: "Where Should I Start?", href: "#where-to-start" },
      { label: "Scripture Prayer", href: "/library/scripture-prayer" },
    ],
    officialLinks: [usccbDailyReadings, usccbTranslations],
  },
  [BibleUseCase.MassReadings]: {
    need: BibleUseCase.MassReadings,
    recommendation: "Start with USCCB daily readings and a Catholic Bible such as NABRE.",
    explanation: "That pairing makes it easy to follow the Church's daily rhythm and hear Scripture with the liturgy.",
    howToStart: "Read today's Gospel first, then use Daily Oratory reflections if you want prayerful help applying it.",
    relatedLinks: [
      { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
      { label: "The Holy Mass", href: "/mass" },
    ],
    officialLinks: [usccbDailyReadings, usccbTranslations],
  },
  [BibleUseCase.Study]: {
    need: BibleUseCase.Study,
    recommendation: "Use an approved Catholic study edition such as RSV-CE, RSV-2CE, NABRE, or NRSV-CE, and compare when needed.",
    explanation: "Study becomes stronger when you use an edition suited for careful reading, Catholic context, and cross-checking difficult passages.",
    howToStart: "Read a Gospel chapter, note the context, then compare it with Catechism references and trusted Catholic resources.",
    relatedLinks: [
      { label: "Catechism", href: "/catechism" },
      { label: "Sacred Tradition", href: "/tradition" },
    ],
    officialLinks: [usccbTranslations],
  },
  [BibleUseCase.TraditionalLanguage]: {
    need: BibleUseCase.TraditionalLanguage,
    recommendation: "Try a historic or more formal Catholic edition such as Douay-Rheims or RSV-2CE.",
    explanation: "These readers often want a solemn tone, historic cadence, and a more traditional literary feel.",
    howToStart: "Begin with the Psalms or Gospel of John and read slowly enough to let the language become prayer rather than a hurdle.",
    relatedLinks: [
      { label: "Lectio Divina", href: "#lectio-divina" },
      { label: "Bible and Prayer", href: "#bible-and-prayer" },
    ],
    officialLinks: [usccbTranslations],
  },
  [BibleUseCase.Academic]: {
    need: BibleUseCase.Academic,
    recommendation: "Use an approved Catholic edition often recognized in study settings, such as NRSV-CE, while keeping Catholic interpretation close at hand.",
    explanation: "This helps with classroom, research, or comparative reading while keeping you grounded in the Church's faith.",
    howToStart: "Study one passage in context, then read it alongside the Catechism or Dei Verbum instead of relying on private interpretation alone.",
    relatedLinks: [
      { label: "Vatican Dei Verbum", href: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_en.html", external: true, official: true },
      { label: "Catechism", href: "/catechism" },
    ],
    officialLinks: [usccbTranslations],
  },
  [BibleUseCase.Family]: {
    need: BibleUseCase.Family,
    recommendation: "Choose a readable Catholic Bible for shared reading and pair it with the Sunday Gospel or daily Mass readings.",
    explanation: "Families usually need clarity, short passages, and a rhythm that can actually be sustained with children and busy schedules.",
    howToStart: "Read the Sunday Gospel aloud, ask each person for one word they noticed, and end with a simple family prayer.",
    relatedLinks: [
      { label: "Reading the Bible as a Family", href: "#bible-for-families" },
      { label: "Family and Domestic Church", href: "/family" },
    ],
    officialLinks: [usccbDailyReadings, usccbTranslations],
  },
  [BibleUseCase.Prayer]: {
    need: BibleUseCase.Prayer,
    recommendation: "Choose a readable Catholic translation and begin with the Gospels, Psalms, or daily Mass readings.",
    explanation: "Prayerful reading works best when the text is clear enough to receive slowly and return to often.",
    howToStart: "Use one Gospel scene, one psalm, or today's readings, then carry one word into the rest of the day.",
    relatedLinks: [
      { label: "How to Receive a Word", href: "#gather-a-word" },
      { label: "Scripture Prayer", href: "/library/scripture-prayer" },
    ],
    officialLinks: [usccbDailyReadings, usccbTranslations],
  },
  [BibleUseCase.Ocia]: {
    need: BibleUseCase.Ocia,
    recommendation: "Start with a clear Catholic edition, stay near Luke, John, Acts, and the Sunday readings, and use the Catechism for guidance.",
    explanation: "This gives explorers a Christ-centered path that remains close to the Church's worship and teaching.",
    howToStart: "Read Luke, attend Mass, write down your real questions, and bring them into OCIA conversations.",
    relatedLinks: [
      { label: "OCIA", href: "/ocia" },
      { label: "Explore the Catholic Faith", href: "/explore" },
    ],
    officialLinks: [usccbDailyReadings, usccbTranslations],
  },
  [BibleUseCase.Audio]: {
    need: BibleUseCase.Audio,
    recommendation: "Use the USCCB daily readings audio together with a Catholic Bible you can keep nearby for rereading and prayer.",
    explanation: "Hearing the Word can be especially helpful for busy schedules, commutes, and people who receive Scripture well by listening.",
    howToStart: "Listen to today's Gospel, then reread one paragraph slowly and ask what the Lord is inviting you to live.",
    relatedLinks: [
      { label: "Daily Mass Readings Method", href: "#daily-readings-method" },
      { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
    ],
    officialLinks: [
      { label: "USCCB Daily Readings Audio", href: "https://bible.usccb.org/podcasts/audio", external: true, official: true },
      usccbTranslations,
    ],
  },
};
