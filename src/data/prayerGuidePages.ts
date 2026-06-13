import type { PrayerLibraryLink } from "@/types/prayersLibrary";

export type PrayerGuideCard = {
  title: string;
  summary: string;
  meta?: string;
  href?: string;
};

export type PrayerGuideSection = {
  eyebrow: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  cards?: PrayerGuideCard[];
};

export type PrayerGuidePageData = {
  slug: string;
  title: string;
  metadataTitle: string;
  description: string;
  eyebrow: string;
  subtitle: string;
  intro: string;
  keywords: string[];
  cta?: PrayerLibraryLink;
  sections: PrayerGuideSection[];
  relatedLinks: PrayerLibraryLink[];
};

const guidePages: PrayerGuidePageData[] = [
  {
    slug: "magnificat",
    title: "Magnificat Guide",
    metadataTitle: "Magnificat Guide | Mary's Song of Praise | Daily Oratory",
    description:
      "Learn what the Magnificat is, when Catholics pray it, why it matters in Evening Prayer and Advent, and how to pray with Mary's song of praise.",
    eyebrow: "Scripture Prayer",
    subtitle: "A guide to Mary's song of praise from the Gospel of Luke and its place in Catholic prayer.",
    intro:
      "The Magnificat is Mary's hymn of praise after the Annunciation and Visitation. Catholics have prayed it for centuries, especially in Evening Prayer, because it teaches gratitude, humility, hope, and joyful trust in God's promises.",
    keywords: ["Magnificat", "Mary's song", "Luke 1", "Evening Prayer", "Advent prayer", "Catholic Marian prayer"],
    cta: { label: "Open the Bible Guide", href: "/bible" },
    sections: [
      {
        eyebrow: "What it is",
        title: "What Is the Magnificat?",
        paragraphs: [
          "The Magnificat is the Church's traditional name for Mary's song of praise in Luke 1.",
          "It begins with the words 'My soul magnifies the Lord' and rejoices in God's mercy, fidelity, and saving action.",
          "Catholics do not treat it as only a Bible passage to study. We also receive it as a prayer that shapes the heart.",
        ],
      },
      {
        eyebrow: "When to pray it",
        title: "When Catholics Pray the Magnificat",
        bullets: [
          "In Evening Prayer of the Liturgy of the Hours.",
          "During Advent, when Mary's expectant faith comes into focus.",
          "As a prayer of thanksgiving after receiving grace or answered prayer.",
          "Whenever you want to praise God with humility and joy.",
        ],
      },
      {
        eyebrow: "How to use it",
        title: "How to Pray With the Magnificat",
        bullets: [
          "Read Luke 1 slowly in an approved Catholic Bible translation.",
          "Notice one line that stirs gratitude, humility, or hope.",
          "Thank God for His mercy in your own life.",
          "Let Mary's praise become your own prayer instead of rushing through it.",
        ],
      },
      {
        eyebrow: "A note on the text",
        title: "Why Daily Oratory Does Not Reproduce the Full Text Here",
        paragraphs: [
          "Because modern Bible translations are often copyrighted, Daily Oratory treats the Magnificat as a guided Scripture prayer page rather than reproducing a full translation here.",
          "The prayer is best read directly from an approved Catholic Bible or prayed in the Liturgy of the Hours.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Bible", href: "/bible" },
      { label: "Prayer Library", href: "/prayers" },
      { label: "The Angelus", href: "/prayers/angelus" },
      { label: "Regina Caeli", href: "/prayers/regina-caeli" },
      { label: "Holy Rosary", href: "/devotions/holy-rosary" },
    ],
  },
  {
    slug: "litany-of-loreto",
    title: "Litany of Loreto Guide",
    metadataTitle: "Litany of Loreto | Marian Litany Guide | Daily Oratory",
    description:
      "Learn what the Litany of Loreto is, how Catholics pray it, when to use it, and why it remains a beloved Marian litany of praise and intercession.",
    eyebrow: "Marian Litany",
    subtitle: "A guide to one of the Church's best-loved litanies invoking Mary under many titles.",
    intro:
      "The Litany of Loreto is a traditional Marian litany that honors the Blessed Virgin Mary under many scriptural and devotional titles. Its repeated invocations teach reverence, affection, and trust in Mary's intercession.",
    keywords: ["Litany of Loreto", "Marian litany", "Mary", "pray for us", "Catholic Marian prayer"],
    cta: { label: "Open Catholic Litanies", href: "/prayers/litanies" },
    sections: [
      {
        eyebrow: "What it is",
        title: "What Is the Litany of Loreto?",
        paragraphs: [
          "It is a traditional Marian litany in which Catholics invoke Mary under many titles and ask for her prayers.",
          "The repeated response 'pray for us' teaches steadiness, confidence, and childlike trust.",
          "It is especially at home in Marian devotion, family prayer, and quieter forms of intercession.",
        ],
      },
      {
        eyebrow: "When to pray it",
        title: "When Catholics Commonly Pray It",
        bullets: [
          "During May and October, which are especially associated with Marian devotion.",
          "At the end of the Rosary or alongside the Angelus.",
          "In family prayer or a home prayer corner.",
          "Whenever you want Mary's intercession in a calm, repeated form.",
        ],
      },
      {
        eyebrow: "How to pray it",
        title: "How to Use It Well",
        bullets: [
          "Pray slowly enough to notice one or two titles of Mary.",
          "Let the response 'pray for us' become personal and sincere.",
          "Use it as a bridge into the Rosary, the Angelus, or a short family prayer time.",
          "Do not worry about praying every title perfectly the first time you encounter it.",
        ],
      },
      {
        eyebrow: "Text note",
        title: "Why This Page Is a Guide Rather Than the Full Litany",
        paragraphs: [
          "The Litany of Loreto is a longer prayer, so Daily Oratory treats this page as a guide and summary page rather than reproducing the full text here.",
          "This keeps the page readable on mobile and lets related Marian pages stay cleanly connected.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Catholic Litanies", href: "/prayers/litanies" },
      { label: "The Angelus", href: "/prayers/angelus" },
      { label: "Regina Caeli", href: "/prayers/regina-caeli" },
      { label: "Holy Rosary", href: "/devotions/holy-rosary" },
      { label: "Prayer Library", href: "/prayers" },
    ],
  },
  {
    slug: "o-sacrum-convivium",
    title: "O Sacrum Convivium Guide",
    metadataTitle: "O Sacrum Convivium | Eucharistic Prayer Guide | Daily Oratory",
    description:
      "Learn what O Sacrum Convivium is, why Catholics pray it, and how this Eucharistic antiphon fits adoration, Benediction, and thanksgiving after Communion.",
    eyebrow: "Eucharistic Prayer",
    subtitle: "A guide to the traditional Eucharistic antiphon praising the sacred banquet of Christ.",
    intro:
      "O Sacrum Convivium is a brief Eucharistic prayer traditionally associated with St. Thomas Aquinas. It meditates on the mystery of the Eucharist as sacred banquet, memorial of the Passion, and foretaste of glory.",
    keywords: ["O Sacrum Convivium", "Eucharistic prayer", "St. Thomas Aquinas", "adoration", "Benediction"],
    cta: { label: "Adoration Prayers", href: "/adoration/prayers" },
    sections: [
      {
        eyebrow: "What it is",
        title: "Why Catholics Love This Prayer",
        paragraphs: [
          "The prayer is short, but it is deeply theological and devotional.",
          "It holds together memory of Christ's Passion, reception of grace in the Eucharist, and longing for heaven.",
          "That makes it fitting for adoration, Benediction, and thanksgiving after Communion.",
        ],
      },
      {
        eyebrow: "When to pray it",
        title: "Good Times to Use It",
        bullets: [
          "Before or after Eucharistic Adoration.",
          "After Holy Communion as a brief prayer of wonder and thanksgiving.",
          "When preparing for Benediction or reflecting on the Real Presence.",
        ],
      },
      {
        eyebrow: "How to pray with it",
        title: "A Simple Way to Begin",
        bullets: [
          "Read one line at a time and pause after each phrase.",
          "Connect the prayer to today's Mass or a recent Holy Communion.",
          "Let it lead you into silence rather than hurrying into more words.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Prayer Before the Blessed Sacrament", href: "/prayers" },
      { label: "Prayer After Communion", href: "/prayers" },
      { label: "Adoration", href: "/adoration" },
      { label: "Adoration Prayers", href: "/adoration/prayers" },
      { label: "The Holy Mass", href: "/mass" },
    ],
  },
  {
    slug: "tantum-ergo",
    title: "Tantum Ergo Guide",
    metadataTitle: "Tantum Ergo | Benediction Hymn Guide | Daily Oratory",
    description:
      "Learn what Tantum Ergo is, when Catholics pray it, and how this traditional Eucharistic hymn belongs to Benediction, adoration, and reverence before the Blessed Sacrament.",
    eyebrow: "Eucharistic Hymn",
    subtitle: "A guide to the traditional hymn prayed especially during Benediction of the Blessed Sacrament.",
    intro:
      "Tantum Ergo is one of the Church's most beloved Eucharistic hymns. Catholics know it especially from Benediction, where it expresses wonder, reverence, and faith in Christ truly present in the Blessed Sacrament.",
    keywords: ["Tantum Ergo", "Benediction hymn", "Eucharistic hymn", "Blessed Sacrament", "adoration"],
    cta: { label: "Open Adoration", href: "/adoration" },
    sections: [
      {
        eyebrow: "What it is",
        title: "Why This Hymn Matters",
        paragraphs: [
          "Tantum Ergo is traditionally associated with Eucharistic devotion and Benediction.",
          "It teaches that faith bows before the mystery of Christ's presence and responds with worship rather than mere explanation.",
          "Its tone is reverent, grateful, and deeply adoring.",
        ],
      },
      {
        eyebrow: "When to pray it",
        title: "Where It Belongs",
        bullets: [
          "During Benediction of the Blessed Sacrament.",
          "Before or after a Holy Hour.",
          "As part of personal Eucharistic thanksgiving.",
        ],
      },
      {
        eyebrow: "A beginner's use",
        title: "How to Begin with Tantum Ergo",
        bullets: [
          "Read about it first so the hymn does not feel unfamiliar.",
          "If you hear it at Benediction, let the melody and words teach you slowly over time.",
          "Use it as a doorway into silence before Jesus in the Eucharist.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Adoration", href: "/adoration" },
      { label: "Adoration Prayers", href: "/adoration/prayers" },
      { label: "O Salutaris Hostia Guide", href: "/prayers/o-salutaris-hostia" },
      { label: "Anima Christi", href: "/prayers" },
      { label: "The Holy Mass", href: "/mass" },
    ],
  },
  {
    slug: "o-salutaris-hostia",
    title: "O Salutaris Hostia Guide",
    metadataTitle: "O Salutaris Hostia | Eucharistic Hymn Guide | Daily Oratory",
    description:
      "Learn what O Salutaris Hostia is, when Catholics pray it, and how this Eucharistic hymn fits exposition, adoration, and Benediction.",
    eyebrow: "Eucharistic Hymn",
    subtitle: "A guide to the traditional hymn often sung at exposition of the Blessed Sacrament.",
    intro:
      "O Salutaris Hostia is a traditional Eucharistic hymn associated especially with exposition of the Blessed Sacrament. It teaches the soul to adore Christ with humility and grateful faith.",
    keywords: ["O Salutaris Hostia", "Eucharistic hymn", "exposition", "Benediction", "adoration"],
    cta: { label: "Open Adoration", href: "/adoration" },
    sections: [
      {
        eyebrow: "What it is",
        title: "A Hymn of Eucharistic Worship",
        paragraphs: [
          "Catholics often encounter O Salutaris Hostia during exposition, when the Blessed Sacrament is placed before the faithful for adoration.",
          "The prayer turns the heart toward Christ's saving presence and the soul's dependence on Him.",
          "Its tone is worshipful, recollected, and hopeful.",
        ],
      },
      {
        eyebrow: "When to use it",
        title: "Fitting Moments for This Prayer",
        bullets: [
          "At the beginning of Eucharistic exposition.",
          "Before a Holy Hour or private time in adoration.",
          "When learning the devotional atmosphere of Benediction.",
        ],
      },
      {
        eyebrow: "How to approach it",
        title: "A Gentle Way to Start",
        bullets: [
          "Let it teach you the language of adoration little by little.",
          "Pray it alongside a short time of silence before the Blessed Sacrament.",
          "Pair it with Anima Christi or a simple act of faith in the Real Presence.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Adoration", href: "/adoration" },
      { label: "Adoration Prayers", href: "/adoration/prayers" },
      { label: "Tantum Ergo Guide", href: "/prayers/tantum-ergo" },
      { label: "Prayer Before the Blessed Sacrament", href: "/prayers" },
      { label: "The Holy Mass", href: "/mass" },
    ],
  },
  {
    slug: "litany-of-humility",
    title: "Litany of Humility Guide",
    metadataTitle: "Litany of Humility | Prayer Guide | Daily Oratory",
    description:
      "Learn how Catholics use the Litany of Humility, why it is fitting for Lent and Confession, and how to pray it without turning it into discouragement.",
    eyebrow: "Lenten Prayer",
    subtitle: "A guide to the searching prayer that asks Jesus for freedom from pride and the desire to be praised.",
    intro:
      "The Litany of Humility can be both beautiful and unsettling. Catholics often turn to it during Lent, before Confession, or when asking Christ for freedom from pride, comparison, resentment, and self-protection.",
    keywords: ["Litany of Humility", "humility", "Lent prayer", "Confession prayer", "pride"],
    cta: { label: "Open Catholic Litanies", href: "/prayers/litanies" },
    sections: [
      {
        eyebrow: "Why people pray it",
        title: "What This Litany Is For",
        paragraphs: [
          "It is a prayer of surrender that asks Jesus to loosen the soul's attachment to status, praise, and comparison.",
          "It is especially useful when you notice pride, resentment, envy, fear of humiliation, or a need to be seen well.",
          "The goal is not self-hatred. The goal is freedom for love.",
        ],
      },
      {
        eyebrow: "When to pray it",
        title: "Especially Fitting Times",
        bullets: [
          "During Lent.",
          "Before Confession.",
          "When pride or comparison is disturbing your peace.",
          "When you want to grow in hidden faithfulness rather than appearances.",
        ],
      },
      {
        eyebrow: "Pastoral caution",
        title: "Pray It Calmly, Not Harshly",
        paragraphs: [
          "If you struggle with anxiety or scrupulosity, pray the Litany of Humility gently. Let it lead to trust in Jesus, not self-rejection.",
          "Choose one line at a time if the full prayer feels too heavy, and bring that line into simple conversation with Christ.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Catholic Litanies", href: "/prayers/litanies" },
      { label: "Confession Guide", href: "/confession" },
      { label: "Lent Guide", href: "/liturgical-living/lent" },
      { label: "Sin and Temptation", href: "/sin-and-temptation" },
      { label: "Grace", href: "/formation/grace" },
    ],
  },
  {
    slug: "breastplate-of-st-patrick",
    title: "Breastplate of St. Patrick Guide",
    metadataTitle: "Breastplate of St. Patrick | Protection Prayer Guide | Daily Oratory",
    description:
      "Learn what the Breastplate of St. Patrick is, why Catholics use it as a prayer of protection, and how to pray with its Christ-centered confidence.",
    eyebrow: "Protection Prayer",
    subtitle: "A guide to the traditional prayer of protection associated with St. Patrick and Christ's presence.",
    intro:
      "The Breastplate of St. Patrick is a traditional prayer of protection and courage. Catholics are drawn to it because it places trust not in magic or fear, but in Christ surrounding the soul with His presence and strength.",
    keywords: ["Breastplate of St. Patrick", "St. Patrick", "protection prayer", "Christ before me"],
    cta: { label: "Protection Prayers", href: "/prayers" },
    sections: [
      {
        eyebrow: "What it is",
        title: "A Prayer of Christ-Centered Protection",
        paragraphs: [
          "This prayer is traditionally associated with St. Patrick and is loved for its bold confidence in Christ's nearness.",
          "It asks not only for safety from harm, but for holiness, courage, and fidelity.",
          "That makes it especially fitting when the soul feels vulnerable, pressured, or spiritually tired.",
        ],
      },
      {
        eyebrow: "When to use it",
        title: "Good Moments for This Prayer",
        bullets: [
          "Before travel or difficult work.",
          "During temptation or discouragement.",
          "When asking for courage in witness or endurance in suffering.",
          "On the feast of St. Patrick or when learning the language of protection prayer.",
        ],
      },
      {
        eyebrow: "How to pray with it",
        title: "A Simple Practice",
        bullets: [
          "Do not rush the strong lines of trust.",
          "Use one phrase as a short aspiration during the day.",
          "Pair it with the St. Michael prayer or a simple Sign of the Cross when fear rises.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Prayer Library", href: "/prayers" },
      { label: "Catholic Litanies", href: "/prayers/litanies" },
      { label: "Sin and Temptation", href: "/sin-and-temptation" },
      { label: "St. Michael Prayer", href: "/prayers" },
      { label: "Saints", href: "/saints" },
    ],
  },
  {
    slug: "novenas",
    title: "What Is a Novena?",
    metadataTitle: "Catholic Novenas | How to Pray a Novena | Daily Oratory",
    description:
      "Learn what a Catholic novena is, how to begin one simply, when to pray a novena, and how repeated prayer over nine days can form perseverance and trust.",
    eyebrow: "Prayer Guide",
    subtitle: "A beginner-friendly guide to nine-day Catholic prayer offered with perseverance and hope.",
    intro:
      "A novena is a pattern of repeated prayer offered over nine days or nine periods for a particular intention, feast, need, or spiritual grace. Catholics do not use novenas as pressure tactics with God, but as a way of learning steady hope, perseverance, and surrender.",
    keywords: ["novena", "Catholic novena", "how to pray a novena", "starter novena", "nine day prayer"],
    cta: { label: "Open Devotions", href: "/devotions" },
    sections: [
      {
        eyebrow: "What it is",
        title: "What Is a Novena?",
        paragraphs: [
          "A novena is a prayer prayed over nine days or nine periods in a spirit of perseverance and hope.",
          "Catholics often pray novenas before feast days, for special intentions, during suffering, or when asking for particular graces.",
          "The repetition helps the soul remain with one prayerful need instead of only praying impulsively.",
        ],
      },
      {
        eyebrow: "How to begin",
        title: "A Starter Novena Pattern",
        bullets: [
          "Choose one simple intention.",
          "Choose one prayer or short devotional pattern.",
          "Set one realistic daily time.",
          "Keep going even if the experience feels ordinary.",
          "End by entrusting the intention to God rather than trying to control the outcome.",
        ],
      },
      {
        eyebrow: "When novenas help",
        title: "Good Times to Pray a Novena",
        bullets: [
          "Before a saint's feast day.",
          "During a difficult family or health need.",
          "When asking for perseverance in prayer.",
          "When preparing for a liturgical season or major decision.",
        ],
      },
      {
        eyebrow: "A pastoral note",
        title: "What a Novena Is Not",
        paragraphs: [
          "A novena is not a magical formula, a bargain with God, or a guarantee of a certain result.",
          "Its purpose is deeper trust, not anxiety. Pray faithfully, then leave the outcome in God's hands.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Catholic Devotions", href: "/devotions" },
      { label: "Catholic Litanies", href: "/prayers/litanies" },
      { label: "Prayer Library", href: "/prayers" },
      { label: "What Should I Do?", href: "/what-should-i-do" },
      { label: "Holy Rosary", href: "/devotions/holy-rosary" },
    ],
  },
  {
    slug: "psalm-23",
    title: "Psalm 23 Guide",
    metadataTitle: "Psalm 23 Guide | Praying the Lord Is My Shepherd | Daily Oratory",
    description:
      "Learn how Catholics pray Psalm 23 as a psalm of trust, comfort, and hope in suffering, fear, grief, and the Lord's shepherding care.",
    eyebrow: "Psalm Guide",
    subtitle: "A guide to praying Psalm 23 as a psalm of trust in the Lord's shepherding care.",
    intro:
      "Psalm 23 is one of the Church's most beloved psalms because it teaches trust in God's care when the soul is tired, grieving, anxious, or afraid. Catholics often return to it in suffering because it gives a simple language of confidence and peace.",
    keywords: ["Psalm 23", "The Lord is my shepherd", "Catholic psalm prayer", "grief prayer", "trust in God"],
    cta: { label: "Open Bible Guide", href: "/bible" },
    sections: [
      {
        eyebrow: "What it teaches",
        title: "Why Psalm 23 Matters",
        paragraphs: [
          "Psalm 23 presents God as shepherd, host, protector, and guide.",
          "It is fitting in seasons of fear, grief, transition, and fatigue because it reminds the heart that it is not abandoned.",
          "The Church often returns to it in funerals, bedside prayer, and ordinary daily trust.",
        ],
      },
      {
        eyebrow: "When to pray it",
        title: "Especially Fitting Times",
        bullets: [
          "When you are anxious or discouraged.",
          "When someone is sick or dying.",
          "When grieving the death of a loved one.",
          "When you want a short psalm of peace for daily prayer.",
        ],
      },
      {
        eyebrow: "How to pray with it",
        title: "A Simple Way to Begin",
        bullets: [
          "Read the psalm slowly in an approved Catholic Bible translation.",
          "Pause at one line and turn it into your own words.",
          "Repeat a short phrase like 'The Lord is my shepherd' through the day.",
          "Let the psalm lead you into trust rather than analysis alone.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Bible", href: "/bible" },
      { label: "Prayer Library", href: "/prayers" },
      { label: "Prayers for the Dead", href: "/formation/catholic-burial/prayers-for-the-dead" },
      { label: "Sacramental Emergency", href: "/sacramental-emergency" },
      { label: "Catholic Eschatology", href: "/formation/eschatology" },
    ],
  },
  {
    slug: "veni-creator-spiritus",
    title: "Veni Creator Spiritus Guide",
    metadataTitle: "Veni Creator Spiritus | Holy Spirit Hymn Guide | Daily Oratory",
    description:
      "Learn what Veni Creator Spiritus is, when Catholics pray it, and why this traditional hymn is especially fitting for Pentecost, ordinations, retreats, and new beginnings.",
    eyebrow: "Holy Spirit Prayer",
    subtitle: "A guide to the traditional hymn invoking the Creator Spirit for Pentecost, ordinations, retreats, and new beginnings.",
    intro:
      "Veni Creator Spiritus is one of the Church's great hymns to the Holy Spirit. Catholics have long used it when asking for wisdom, courage, renewal, and grace at the beginning of important works or seasons.",
    keywords: ["Veni Creator Spiritus", "Holy Spirit hymn", "Pentecost prayer", "Creator Spirit", "Catholic hymn"],
    cta: { label: "Prayer Library", href: "/prayers" },
    sections: [
      {
        eyebrow: "What it is",
        title: "Why This Hymn Matters",
        paragraphs: [
          "The hymn invokes the Holy Spirit as giver of wisdom, strength, light, and sanctifying grace.",
          "It is especially associated with Pentecost, ordinations, retreats, councils, and new beginnings.",
          "Its tone is prayerful rather than merely poetic. It asks for real interior transformation.",
        ],
      },
      {
        eyebrow: "When to pray it",
        title: "Especially Fitting Times",
        bullets: [
          "During Pentecost and the days leading up to it.",
          "Before study, teaching, or important decisions.",
          "At the start of retreats, apostolates, or new responsibilities.",
          "When asking the Holy Spirit for clarity and courage.",
        ],
      },
      {
        eyebrow: "How to begin",
        title: "A Simple Practice",
        bullets: [
          "Pray one verse or one summary line slowly.",
          "Pair it with a short invocation such as 'Come, Holy Spirit.'",
          "Ask for one concrete grace: wisdom, courage, patience, or purity of heart.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Come, Holy Spirit", href: "/prayers" },
      { label: "Prayer Library", href: "/prayers" },
      { label: "Catholic Litanies", href: "/prayers/litanies" },
      { label: "Grace", href: "/formation/grace" },
      { label: "Liturgy of the Hours", href: "/liturgy-of-the-hours" },
    ],
  },
  {
    slug: "confiteor",
    title: "Confiteor Guide",
    metadataTitle: "Confiteor Guide | Catholic Prayer of Confession | Daily Oratory",
    description:
      "Learn what the Confiteor is, when Catholics pray it, and how this traditional prayer of confession prepares the heart for mercy at Mass and beyond.",
    eyebrow: "Confession Prayer",
    subtitle: "A guide to the traditional prayer of confession used in the Penitential Act at Mass.",
    intro:
      "The Confiteor is one of the Church's most familiar prayers of repentance. Catholics know it especially from Mass, where it helps the faithful acknowledge sin, ask the prayers of the saints, and prepare to worship God with humility.",
    keywords: ["Confiteor", "Catholic confession prayer", "Penitential Act", "Mass prayer", "Lord have mercy"],
    cta: { label: "Open Confession Guide", href: "/confession" },
    sections: [
      {
        eyebrow: "What it is",
        title: "What Is the Confiteor?",
        paragraphs: [
          "The Confiteor is a traditional Catholic prayer of repentance that begins with the words 'I confess to almighty God.'",
          "It appears especially in the Penitential Act at Mass, but many Catholics also use it in personal examination, contrition, and preparation for Confession.",
          "The prayer is striking because it is honest about sin while still remaining calm, ecclesial, and hopeful.",
        ],
      },
      {
        eyebrow: "When to pray it",
        title: "When Catholics Commonly Use It",
        bullets: [
          "At Mass during the Penitential Act.",
          "Before Confession or an examination of conscience.",
          "During Lent or other seasons of repentance.",
          "Whenever you need a brief, sober prayer of humility and truthfulness before God.",
        ],
      },
      {
        eyebrow: "How to pray it",
        title: "How to Use the Confiteor Well",
        bullets: [
          "Pray slowly enough to mean the words rather than reciting them automatically.",
          "Let the prayer lead you to honesty, not shame or self-condemnation.",
          "Notice that it asks the prayers of Mary, the angels, and the saints along with your own repentance.",
          "Pair it with a simple act of trust in God's mercy.",
        ],
      },
      {
        eyebrow: "Pastoral note",
        title: "Repentance Without Panic",
        paragraphs: [
          "The Confiteor is meant to form humility, not fear. It teaches the soul to tell the truth before God and remain turned toward mercy.",
          "If you are anxious or scrupulous, pray it gently and simply rather than using it to spiral into self-accusation.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Confession Guide", href: "/confession" },
      { label: "Act of Contrition", href: "/prayers" },
      { label: "Catholic Lent Guide", href: "/liturgical-living/lent" },
      { label: "The Holy Mass", href: "/mass" },
      { label: "Prayer Library", href: "/prayers" },
    ],
  },
  {
    slug: "advent-wreath-prayers",
    title: "Advent Wreath Prayers",
    metadataTitle: "Advent Wreath Prayers | Catholic Home Prayer Guide | Daily Oratory",
    description:
      "Learn how Catholics pray with the Advent wreath at home, why the wreath matters, and simple family prayers for each week of Advent.",
    eyebrow: "Advent Prayer",
    subtitle: "A guide to simple Catholic home prayer with the Advent wreath as the Church waits for Christ.",
    intro:
      "The Advent wreath is one of the most practical ways for a Catholic home to keep Advent prayerful. Its candles, repeated weekly prayers, and Scripture-centered waiting help families slow down and remember that Christ is coming.",
    keywords: ["Advent wreath prayers", "Catholic Advent prayer", "family Advent prayer", "home liturgical living"],
    cta: { label: "Open Advent Guide", href: "/liturgical-living/advent" },
    sections: [
      {
        eyebrow: "What it is",
        title: "Why Catholics Use the Advent Wreath",
        paragraphs: [
          "The Advent wreath is a simple home devotion that marks the weeks before Christmas with light, prayer, and expectant hope.",
          "It does not replace Mass or the liturgy. Instead, it helps the home echo the prayer of the Church during Advent.",
          "Because it is simple and repeatable, it is especially helpful for families, beginners, and anyone trying to keep Advent from becoming only busy preparation.",
        ],
      },
      {
        eyebrow: "How to pray it",
        title: "A Simple Advent Wreath Pattern",
        bullets: [
          "Begin with the Sign of the Cross.",
          "Light the candle or candles for the current week.",
          "Read one short line of Scripture or one Advent sentence from the Gospel.",
          "Offer a brief family prayer asking for hope, repentance, peace, and readiness for Christ.",
          "End with an Our Father, Hail Mary, or a quiet moment of gratitude.",
        ],
      },
      {
        eyebrow: "Week by week",
        title: "What to Emphasize Each Week",
        bullets: [
          "Week 1: Hope and watching for the coming of Christ.",
          "Week 2: Repentance and making room for the Lord.",
          "Week 3: Joy in the nearness of salvation.",
          "Week 4: Mary's readiness and trust.",
        ],
      },
      {
        eyebrow: "Keep it gentle",
        title: "A Pastoral Note for Families",
        paragraphs: [
          "The Advent wreath works best when it stays simple. Even a few faithful minutes matter more than creating a perfect routine.",
          "If you miss a day, begin again quietly the next day and keep the focus on Christ rather than performance.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Advent Guide", href: "/liturgical-living/advent" },
      { label: "O Antiphons", href: "/liturgical-living/advent/o-antiphons" },
      { label: "The Angelus", href: "/prayers/angelus" },
      { label: "Prayer Library", href: "/prayers" },
      { label: "What Should I Do?", href: "/what-should-i-do" },
    ],
  },
  {
    slug: "christmas-blessing",
    title: "Christmas Blessing Prayer",
    metadataTitle: "Christmas Blessing Prayer | Catholic Christmas Home Prayer | Daily Oratory",
    description:
      "A simple Catholic Christmas blessing prayer for the home, with guidance for praying it reverently during the Christmas season.",
    eyebrow: "Christmas Prayer",
    subtitle: "A simple blessing prayer for the Christmas season, home life, and gratitude for the Lord's Nativity.",
    intro:
      "Christmas prayer does not have to be complicated. A short blessing at home can help families and individuals keep the season centered on Christ's humility, peace, and joy rather than only on activity or celebration.",
    keywords: ["Christmas blessing prayer", "Catholic Christmas prayer", "Christmas home blessing", "Nativity prayer"],
    cta: { label: "Open Christmas Guide", href: "/liturgical-living/christmas" },
    sections: [
      {
        eyebrow: "The prayer",
        title: "A Simple Christmas Blessing",
        paragraphs: [
          "Lord Jesus, born for us in humility and love, bless this home and all who gather here.",
          "Let the joy of Your Nativity fill us with peace, gratitude, and charity.",
          "Amen.",
        ],
      },
      {
        eyebrow: "When to pray it",
        title: "Good Times to Use This Prayer",
        bullets: [
          "On Christmas Day or during the Christmas octave.",
          "Before a shared meal or family gathering.",
          "When blessing the home or gathering near the Nativity scene.",
          "At the end of evening prayer during the Christmas season.",
        ],
      },
      {
        eyebrow: "How to keep Christmas prayerful",
        title: "A Simple Christmas Practice",
        bullets: [
          "Pray the blessing near the crib or Christmas tree.",
          "Read a short passage from the Nativity Gospel before or after it.",
          "Ask for one grace for the home: peace, gratitude, reconciliation, or deeper faith.",
          "Keep returning to it through the full Christmas season, not only on December 25.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Christmas Guide", href: "/liturgical-living/christmas" },
      { label: "Epiphany House Blessing", href: "/liturgical-living/christmas/epiphany/house-blessing" },
      { label: "Prayer Library", href: "/prayers" },
      { label: "Catholic Family Prayer", href: "/catholic-life" },
    ],
  },
  {
    slug: "lenten-prayer",
    title: "Lenten Prayer",
    metadataTitle: "Lenten Prayer | Simple Catholic Prayer for Lent | Daily Oratory",
    description:
      "A simple Catholic Lenten prayer for conversion, fasting, almsgiving, and returning to God with the whole heart.",
    eyebrow: "Lenten Prayer",
    subtitle: "A simple prayer for repentance, fasting, almsgiving, and deeper return to God during Lent.",
    intro:
      "Lent invites Catholics to return to God with a simpler, more truthful heart. A short prayer can help keep that return concrete, especially when the season feels busy, heavy, or uncertain.",
    keywords: ["Lenten prayer", "Catholic Lent prayer", "prayer fasting almsgiving", "repentance prayer"],
    cta: { label: "Open Lent Guide", href: "/liturgical-living/lent" },
    sections: [
      {
        eyebrow: "The prayer",
        title: "A Simple Lenten Prayer",
        paragraphs: [
          "Lord Jesus, lead me into the desert with You.",
          "Teach me to pray, to fast with humility, to give with love, and to return to the Father with my whole heart.",
          "Amen.",
        ],
      },
      {
        eyebrow: "When to use it",
        title: "A Good Prayer for the Whole Season",
        bullets: [
          "At the start of the day during Lent.",
          "Before beginning a fast, penance, or work of mercy.",
          "Before Confession or an examination of conscience.",
          "When you need to begin again after spiritual discouragement.",
        ],
      },
      {
        eyebrow: "How to pray it well",
        title: "Keep It Concrete",
        bullets: [
          "After praying it, choose one small act of prayer, fasting, or charity for the day.",
          "Let the prayer keep Lent focused on return to God, not spiritual performance.",
          "If you fail, pray it again and begin again quietly.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Catholic Lent Guide", href: "/liturgical-living/lent" },
      { label: "Fasting and Abstinence", href: "/liturgical-living/lent/fasting-and-abstinence" },
      { label: "Confession Guide", href: "/confession" },
      { label: "Stations of the Cross", href: "/way-of-cross" },
      { label: "Prayer Library", href: "/prayers" },
    ],
  },
  {
    slug: "good-friday-reproaches",
    title: "Good Friday Reproaches Guide",
    metadataTitle: "Good Friday Reproaches Guide | Catholic Holy Week Prayer | Daily Oratory",
    description:
      "Learn what the Good Friday Reproaches are, how Catholics receive them prayerfully, and why they belong to repentance, love of Christ, and solemn prayer before the Cross.",
    eyebrow: "Holy Week Prayer",
    subtitle: "A guide to the solemn Reproaches of Good Friday and prayer before the Cross.",
    intro:
      "The Good Friday Reproaches are among the Church's most searching Holy Week texts. They place the soul before Christ crucified and invite repentance, gratitude, and adoring sorrow rather than mere emotional intensity.",
    keywords: ["Good Friday Reproaches", "Holy Week prayer", "prayer before the Cross", "Catholic Good Friday"],
    cta: { label: "Open Lent Guide", href: "/liturgical-living/lent" },
    sections: [
      {
        eyebrow: "What they are",
        title: "What Are the Good Friday Reproaches?",
        paragraphs: [
          "The Reproaches are solemn liturgical texts associated with the veneration of the Cross on Good Friday.",
          "They place Christ's saving love and the human response of ingratitude side by side, inviting the faithful into repentance and wonder.",
          "Their purpose is not despair. Their purpose is conversion in the light of the Cross.",
        ],
      },
      {
        eyebrow: "How to receive them",
        title: "A Prayerful Way to Approach Them",
        bullets: [
          "Listen slowly and reverently if you hear them in the liturgy.",
          "Let one line move you toward gratitude, sorrow for sin, or adoration.",
          "Pair the meditation with silence before a crucifix or during Stations of the Cross.",
          "Keep the focus on Christ's love rather than on intense emotional self-analysis.",
        ],
      },
      {
        eyebrow: "When this guide helps",
        title: "Especially Fitting Times",
        bullets: [
          "On Good Friday.",
          "During Holy Week.",
          "When meditating on Christ's Passion during Lent.",
          "Before or after praying the Stations of the Cross.",
        ],
      },
      {
        eyebrow: "Why this is a guide page",
        title: "Why Daily Oratory Summarizes Rather Than Reproduces the Full Text",
        paragraphs: [
          "Because the Reproaches are a formal liturgical text and deserve careful use, Daily Oratory treats this as a guide page rather than reproducing a long liturgical form here.",
          "This keeps the page clear, devotional, and connected to the wider Holy Week life of the Church.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Catholic Lent Guide", href: "/liturgical-living/lent" },
      { label: "Stations of the Cross", href: "/way-of-cross" },
      { label: "Confession Guide", href: "/confession" },
      { label: "Prayer Library", href: "/prayers" },
      { label: "Litany of Humility", href: "/prayers/litany-of-humility" },
    ],
  },
  {
    slug: "come-holy-spirit",
    title: "Come, Holy Spirit",
    metadataTitle: "Come, Holy Spirit | Catholic Invocation Prayer | Daily Oratory",
    description:
      "Learn how Catholics pray Come, Holy Spirit, when to use it, and why this simple invocation is fitting for Pentecost, discernment, study, and daily need.",
    eyebrow: "Holy Spirit Prayer",
    subtitle: "A simple guide to the traditional invocation asking the Holy Spirit to fill the faithful and kindle divine love.",
    intro:
      "Come, Holy Spirit is one of the Church's simplest and strongest prayers. Catholics return to it when they need light, courage, guidance, purity of heart, or renewed love for God.",
    keywords: ["Come Holy Spirit", "Holy Spirit prayer", "Pentecost prayer", "Catholic invocation", "discernment prayer"],
    cta: { label: "Prayer Library", href: "/prayers" },
    sections: [
      {
        eyebrow: "The prayer",
        title: "Traditional Prayer Text",
        paragraphs: [
          "Come, Holy Spirit, fill the hearts of Thy faithful and kindle in them the fire of Thy love.",
          "Send forth Thy Spirit and they shall be created. And Thou shalt renew the face of the earth.",
          "O God, who didst instruct the hearts of the faithful by the light of the Holy Spirit, grant us by the same Spirit to be truly wise and ever to rejoice in His consolation. Through Christ our Lord. Amen.",
        ],
      },
      {
        eyebrow: "When to pray it",
        title: "When Catholics Commonly Use It",
        bullets: [
          "During Pentecost and the days leading to it.",
          "Before study, teaching, or important work.",
          "Before decisions that require clarity and courage.",
          "At the start of prayer when the heart feels distracted or dry.",
        ],
      },
      {
        eyebrow: "How to use it",
        title: "A Very Simple Practice",
        bullets: [
          "Pray the short invocation once, slowly.",
          "Ask for one concrete grace: wisdom, courage, purity, patience, or peace.",
          "Repeat a short line through the day, especially when you feel uncertain or weak.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Veni Creator Spiritus Guide", href: "/prayers/veni-creator-spiritus" },
      { label: "Catholic Litanies", href: "/prayers/litanies" },
      { label: "Grace", href: "/formation/grace" },
      { label: "Prayer Library", href: "/prayers" },
    ],
  },
];

export const prayerGuidePages = guidePages;

export const prayerGuidePagesBySlug = new Map(guidePages.map((guide) => [guide.slug, guide]));

export function getPrayerGuidePage(slug: string) {
  return prayerGuidePagesBySlug.get(slug) ?? null;
}
