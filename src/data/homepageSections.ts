export type HomepageCard = {
  id: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  category: string;
  iconName?: string;
  featured?: boolean;
  sortOrder: number;
  links?: { label: string; href: string }[];
  badge?: string;
  meta?: string;
};

export type HomepageSection = {
  id: string;
  title: string;
  subtitle: string;
  cards: HomepageCard[];
  ctaLabel?: string;
  ctaHref?: string;
  sortOrder: number;
};

export const startHereSection: HomepageSection = {
  id: "start-here",
  title: "Start Here",
  subtitle: "Choose a simple path for today, whether you are rooted in the Catholic faith or just beginning to explore it.",
  sortOrder: 10,
  cards: [
    {
      id: "start-pray",
      title: "I want to pray today",
      description:
        "Begin with Scripture, the Rosary, the Liturgy of the Hours, or quiet Eucharistic prayer.",
      href: "/pray",
      cta: "Begin in Prayer",
      category: "Pray",
      featured: true,
      sortOrder: 10,
      links: [
        { label: "Scripture Prayer", href: "/library/scripture-prayer" },
        { label: "Rosary", href: "/rosary" },
        { label: "Liturgy of the Hours", href: "/liturgy-of-the-hours" },
        { label: "Adoration", href: "/adoration" },
      ],
    },
    {
      id: "start-learn",
      title: "I want to learn the faith",
      description:
        "Grow in Catholic teaching with clear guidance on doctrine, prayer, Scripture, and daily discipleship.",
      href: "/formation",
      cta: "Learn the Faith",
      category: "Learn",
      featured: true,
      sortOrder: 20,
      links: [
        { label: "The Holy Mass", href: "/mass" },
        { label: "Sacraments", href: "/sacraments" },
        { label: "Formation", href: "/formation" },
        { label: "Church Fathers", href: "/church-fathers" },
        { label: "Devotions", href: "/devotions" },
      ],
    },
    {
      id: "start-returning",
      title: "I am returning to the Church",
      description:
        "Begin again gently with prayer, Mass, Confession, and a simple path back into Catholic life.",
      href: "/returning",
      cta: "Coming Home Guide",
      category: "Return",
      featured: true,
      sortOrder: 40,
      links: [
        { label: "Returning Guide", href: "/returning" },
        { label: "Confession", href: "/confession" },
        { label: "The Holy Mass", href: "/mass" },
        { label: "OCIA", href: "/ocia" },
      ],
    },
  ],
};

export const dailyPrayerRhythmSection: HomepageSection = {
  id: "daily-prayer-rhythm",
  title: "Your Daily Prayer Rhythm",
  subtitle: "Simple ways to enter prayer each day.",
  ctaLabel: "Build My Prayer Rhythm",
  ctaHref: "/rule-of-life",
  sortOrder: 20,
  cards: [
    {
      id: "prayer-scripture",
      title: "Scripture Prayer",
      description: "Pray with the Word of God and build a 30-minute Scripture prayer plan.",
      href: "/library/scripture-prayer",
      cta: "Pray with Scripture",
      category: "Pray",
      sortOrder: 10,
    },
    {
      id: "prayer-rosary",
      title: "Rosary",
      description: "Meditate on the mysteries of Christ with Mary.",
      href: "/rosary",
      cta: "Pray the Rosary",
      category: "Pray",
      sortOrder: 20,
    },
    {
      id: "prayer-hours",
      title: "Liturgy of the Hours",
      description: "Join the prayer of the Church throughout the day.",
      href: "/liturgy-of-the-hours",
      cta: "Pray the Hours",
      category: "Pray",
      sortOrder: 30,
    },
    {
      id: "prayer-adoration",
      title: "Eucharistic Adoration",
      description: "Spend quiet time with Christ in the Blessed Sacrament.",
      href: "/adoration",
      cta: "Enter Adoration",
      category: "Pray",
      sortOrder: 40,
    },
    {
      id: "prayer-rule",
      title: "Daily Rule of Life",
      description: "Build a simple rhythm of prayer, virtue, and spiritual growth.",
      href: "/rule-of-life",
      cta: "Build a Rule",
      category: "Grow",
      sortOrder: 50,
    },
  ],
};

export const growInFaithSection: HomepageSection = {
  id: "grow-in-faith",
  title: "Grow in the Faith",
  subtitle: "Learn Catholic teaching in a clear and practical way.",
  ctaLabel: "Explore Formation",
  ctaHref: "/formation",
  sortOrder: 30,
  cards: [
    {
      id: "faith-mass",
      title: "The Holy Mass",
      description:
        "Understand the parts of the Mass, sacred spaces, altar, tabernacle, and Eucharistic mystery.",
      href: "/mass",
      cta: "Understand the Mass",
      category: "Learn",
      sortOrder: 10,
    },
    {
      id: "faith-sacraments",
      title: "The Sacraments",
      description: "Learn the seven sacraments and how Christ gives grace through the Church.",
      href: "/sacraments",
      cta: "Explore Sacraments",
      category: "Learn",
      sortOrder: 20,
    },
    {
      id: "faith-catechism",
      title: "Catechism of the Catholic Church",
      description: "Learn what the Catholic Church teaches, how the Catechism is organized, and how to use it for prayer, study, formation, and daily discipleship.",
      href: "/catechism",
      cta: "Explore the Catechism",
      category: "Learn",
      sortOrder: 35,
    },
    {
      id: "faith-angels",
      title: "Angels and the Invisible World",
      description: "Learn what the Catholic Church teaches about angels, guardian angels, the choirs of angels, fallen angels, and the role of angels in worship, Scripture, creation, and the Mass.",
      href: "/angels",
      cta: "Learn About Angels",
      category: "Learn",
      sortOrder: 35.5,
    },
    {
      id: "faith-news",
      title: "Catholic News",
      description: "Follow Catholic news, Vatican updates, Church headlines, spiritual reflections, and trusted Catholic media with prayerful discernment.",
      href: "/news",
      cta: "Read Catholic News",
      category: "Learn",
      sortOrder: 58,
    },
    {
      id: "faith-media-library",
      title: "Media Library",
      description: "Explore Catholic videos, teaching slides, images, playlists, and formation resources from Daily Oratory.",
      href: "/media",
      cta: "Open Media Library",
      category: "Learn",
      sortOrder: 59,
    },
    {
      id: "faith-homilies-library",
      title: "Homilies Library",
      description: "Listen to Catholic homilies, reflections, talks, and playlists to help you understand Scripture, the Mass, and daily discipleship.",
      href: "/homilies",
      cta: "Explore Homilies",
      category: "Learn",
      sortOrder: 59.25,
    },
  ],
};

export const liveChurchYearSection: HomepageSection = {
  id: "live-church-year",
  title: "Live the Church Year",
  subtitle: "Let the seasons, saints, feasts, and holy days form your life.",
  ctaLabel: "Explore the Liturgical Year",
  ctaHref: "/liturgical-living/seasons",
  sortOrder: 40,
  cards: [
    {
      id: "year-seasons",
      title: "Liturgical Seasons",
      description: "Understand Advent, Christmas, Lent, Holy Week, Easter, and Ordinary Time.",
      href: "/liturgical-living/seasons",
      cta: "Explore Seasons",
      category: "Liturgical Year",
      sortOrder: 10,
    },
    {
      id: "year-today",
      title: "Today in the Church",
      description: "See today’s liturgical day, saint, prayer, and suggested reflection.",
      href: "/today",
      cta: "Open Today",
      category: "Liturgical Year",
      sortOrder: 20,
    },
    {
      id: "year-reflections",
      title: "Mass Readings Reflections",
      description: "Read reflections for daily and Sunday Mass readings.",
      href: "/reflections/mass-readings",
      cta: "Read Reflections",
      category: "Reflect",
      sortOrder: 30,
    },
    {
      id: "year-indulgences",
      title: "Indulgences Guide",
      description: "Learn about indulgences, detachment from sin, Scripture reading, and works of mercy.",
      href: "/indulgences",
      cta: "Learn About Indulgences",
      category: "Learn",
      sortOrder: 40,
    },
    {
      id: "year-saints",
      title: "Saint Companion Finder",
      description: "Find a saint to walk with you in prayer and virtue.",
      href: "/saints/finder",
      cta: "Find a Saint",
      category: "Saints",
      sortOrder: 50,
    },
  ],
};

export const latestJournalSection: HomepageSection = {
  id: "latest-journal",
  title: "Latest from the Journal",
  subtitle: "Reflections, formation articles, Mass readings, devotions, and spiritual growth posts.",
  ctaLabel: "Read the Journal",
  ctaHref: "/reflections/mass-readings",
  sortOrder: 50,
  cards: [
    {
      id: "journal-mass",
      title: "Mass Readings Reflections",
      description: "Daily and Sunday reflections rooted in the lectionary of the Church.",
      href: "/reflections/mass-readings",
      cta: "Read More",
      category: "Mass Readings",
      badge: "Featured",
      meta: "Prayerful reflection",
      sortOrder: 10,
    },
    {
      id: "journal-scripture",
      title: "Scripture Prayer",
      description: "Learn to pray with the Word of God and build a faithful reading rhythm.",
      href: "/library/scripture-prayer",
      cta: "Read More",
      category: "Scripture",
      meta: "Formation guide",
      sortOrder: 20,
    },
    {
      id: "journal-formation",
      title: "Catholic Formation",
      description: "Grow in doctrine, virtue, prayer, and daily discipleship.",
      href: "/formation",
      cta: "Read More",
      category: "Formation",
      meta: "Beginner-friendly hub",
      sortOrder: 30,
    },
    {
      id: "journal-devotions",
      title: "Catholic Devotions",
      description: "Discover devotions that lead deeper into Christ and sacramental life.",
      href: "/devotions",
      cta: "Read More",
      category: "Devotions",
      meta: "Prayer and practice",
      sortOrder: 40,
    },
    {
      id: "journal-mass-guide",
      title: "The Holy Mass",
      description: "Understand the liturgy, sacred space, and the mystery of heaven touching earth.",
      href: "/mass",
      cta: "Read More",
      category: "Mass",
      meta: "Liturgical guide",
      sortOrder: 50,
    },
    {
      id: "journal-liturgical-living",
      title: "Liturgical Living",
      description: "Let seasons, feasts, and holy days shape daily Catholic life.",
      href: "/liturgical-living/seasons",
      cta: "Read More",
      category: "Liturgical Living",
      meta: "Seasonal formation",
      sortOrder: 60,
    },
  ],
};

export const communityPrayerSection: HomepageSection = {
  id: "community-prayer",
  title: "Pray with the Community",
  subtitle: "Bring your intentions, pray for others, and join Catholic prayer.",
  ctaLabel: "Ask for Prayer",
  ctaHref: "/ask-for-prayer",
  sortOrder: 60,
  cards: [
    {
      id: "community-wall",
      title: "Prayer Intentions",
      description: "Pray for the needs of others and entrust your intentions to God.",
      href: "/prayer-intentions",
      cta: "Pray with Others",
      category: "Community",
      sortOrder: 10,
    },
    {
      id: "community-ask",
      title: "Ask for Prayer",
      description: "Request prayer from the Daily Oratory community.",
      href: "/ask-for-prayer",
      cta: "Share an Intention",
      category: "Community",
      sortOrder: 20,
    },
    {
      id: "community-rooms",
      title: "Prayer Rooms",
      description: "Explore Catholic prayer gatherings and community prayer opportunities.",
      href: "/community/events",
      cta: "Explore Community Prayer",
      category: "Community",
      sortOrder: 30,
    },
    {
      id: "community-rosary",
      title: "Rosary Prayer Room",
      description: "Pray the Rosary with others, or begin with the Rosary page today.",
      href: "/rosary",
      cta: "Open the Rosary",
      category: "Community",
      sortOrder: 40,
    },
  ],
};

export const featuredToolsSection: HomepageSection = {
  id: "featured-tools",
  title: "Featured Tools",
  subtitle: "Practical spiritual tools for daily Catholic life.",
  sortOrder: 70,
  cards: [
    {
      id: "tool-examination",
      title: "Guided Examination of Conscience",
      description: "Prepare prayerfully for confession and daily conversion.",
      href: "/confession/examination",
      cta: "Begin Examination",
      category: "Tools",
      sortOrder: 30,
    },
    {
      id: "tool-heavenbound",
      title: "Heavenbound Spiritual Companion",
      description: "Open a guided Catholic spiritual conversation and next steps.",
      href: "/tools/heavenbound",
      cta: "Open Heavenbound",
      category: "Tools",
      sortOrder: 40,
    },
  ],
};
