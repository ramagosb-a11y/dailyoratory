import type {
  CatholicLifeLink,
  CatholicLifeRoadmapStage,
  CatholicLifeSection,
  CatholicLifeTrack,
  CatholicWeeklyRhythm,
} from "@/types/catholicLifeRoadmap";

export const catholicLifeRoadmapStages: CatholicLifeRoadmapStage[] = [
  {
    id: "encounter-christ",
    title: "Encounter Christ",
    description: "Begin with prayer, Scripture, and the desire to know Jesus.",
    sortOrder: 1,
  },
  {
    id: "return-to-mercy",
    title: "Return to Mercy",
    description: "Bring sin, fear, and wounds to Christ through repentance and Confession.",
    sortOrder: 2,
  },
  {
    id: "worship-at-mass",
    title: "Worship at Mass",
    description: "Enter the heart of Catholic life in the Eucharist.",
    sortOrder: 3,
  },
  {
    id: "live-by-grace",
    title: "Live by Grace",
    description: "Cooperate with God's grace through virtue, prayer, and the sacraments.",
    sortOrder: 4,
  },
  {
    id: "pray-with-the-church",
    title: "Pray with the Church",
    description: "Enter the Rosary, Psalms, liturgical seasons, saints, and daily Catholic rhythms.",
    sortOrder: 5,
  },
  {
    id: "serve-in-charity",
    title: "Serve in Charity",
    description: "Let faith become love through family life, works of mercy, forgiveness, and service.",
    sortOrder: 6,
  },
  {
    id: "hope-in-eternal-life",
    title: "Hope in Eternal Life",
    description: "Live today in the light of death, judgment, Heaven, resurrection, and Christ's return.",
    sortOrder: 7,
  },
];

export const catholicLifeSections: CatholicLifeSection[] = [
  {
    id: "new-to-catholicism",
    title: "New to Catholicism",
    slug: "new-to-catholicism",
    category: "Beginnings",
    description:
      "Start with the basics: who Jesus is, what Catholics believe, how to pray, what happens at Mass, and how to begin walking with the Church.",
    startHereLabel: "Formation",
    startHereHref: "/formation",
    supportingLinks: [
      { id: "new-explore", label: "Explore the Faith", href: "/explore", description: "A gentle place to begin asking questions.", sortOrder: 1 },
      { id: "new-pray", label: "Prayer", href: "/pray", description: "Begin with simple daily prayer.", sortOrder: 2 },
      { id: "new-mass", label: "The Holy Mass", href: "/mass", description: "Learn what happens at Mass.", sortOrder: 3 },
      { id: "new-sacraments", label: "Sacraments", href: "/sacraments", description: "See how Christ gives grace through the sacraments.", sortOrder: 4 },
      { id: "new-scripture", label: "Scripture Prayer", href: "/library/scripture-prayer", description: "Pray with the Word of God.", sortOrder: 5 },
    ],
    suggestedNextStep: "Read one formation page, pray one simple prayer, and attend Mass.",
    sortOrder: 1,
  },
  {
    id: "returning-catholics",
    title: "Returning Catholics",
    slug: "returning-catholics",
    category: "Mercy",
    description:
      "If you have been away from the Church, begin with mercy. Jesus welcomes the returning heart.",
    startHereLabel: "Confession Guide",
    startHereHref: "/confession",
    supportingLinks: [
      { id: "returning-exam", label: "Examination of Conscience", href: "/confession/examination", description: "Prepare gently for Confession.", sortOrder: 1 },
      { id: "returning-prayers", label: "Confession Prayers", href: "/confession/prayers", description: "Pray before and after the sacrament.", sortOrder: 2 },
      { id: "returning-mass", label: "The Holy Mass", href: "/mass", description: "Return to Sunday worship.", sortOrder: 3 },
      { id: "returning-eucharist", label: "Eucharist", href: "/sacraments/eucharist", description: "Learn about Holy Communion and reverence.", sortOrder: 4 },
      { id: "returning-explore", label: "Explore the Faith", href: "/explore", description: "A calm place to begin again.", sortOrder: 5 },
    ],
    suggestedNextStep: "Find Confession times at a local parish and make a simple, honest return.",
    sortOrder: 2,
  },
  {
    id: "daily-prayer",
    title: "Daily Prayer",
    slug: "daily-prayer",
    category: "Prayer",
    description:
      "Prayer is the daily breath of Catholic life. Begin with simple, faithful prayer rather than a complicated routine.",
    startHereLabel: "Pray",
    startHereHref: "/pray",
    supportingLinks: [
      { id: "daily-examen", label: "Daily Examen", href: "/daily-examen", description: "End the day with gratitude and mercy.", sortOrder: 1 },
      { id: "daily-scripture", label: "Scripture Prayer", href: "/library/scripture-prayer", description: "Pray with the Gospel and Mass readings.", sortOrder: 2 },
      { id: "daily-rosary", label: "Rosary Prayer Room", href: "/rosary", description: "Pray with Mary and the mysteries of Christ.", sortOrder: 3 },
      { id: "daily-family", label: "Family Prayer", href: "/family", description: "Build prayer into the home.", sortOrder: 4 },
    ],
    suggestedNextStep: "Choose one morning prayer and one evening prayer for the next seven days.",
    sortOrder: 3,
  },
  {
    id: "mass-and-eucharist",
    title: "Mass and Eucharist",
    slug: "mass-and-eucharist",
    category: "Sacraments",
    description:
      "The Mass is the source and summit of Catholic life. In the Eucharist, Jesus gives Himself to the Church.",
    startHereLabel: "The Holy Mass",
    startHereHref: "/mass",
    supportingLinks: [
      { id: "mass-eucharist", label: "Eucharist", href: "/sacraments/eucharist", description: "Learn what Catholics believe about Holy Communion.", sortOrder: 1 },
      { id: "mass-before", label: "Confession Prayers", href: "/confession/prayers", description: "Use simple prayers before Mass and before Communion.", sortOrder: 2 },
      { id: "mass-adoration", label: "Eucharistic Adoration", href: "/adoration", description: "Remain with Jesus in silence and worship.", sortOrder: 3 },
      { id: "mass-institution", label: "Institution of the Eucharist", href: "/devotions/holy-rosary/luminous-mysteries/institution-of-the-eucharist", description: "Pray the mystery of the Last Supper.", sortOrder: 4 },
    ],
    suggestedNextStep: "Prepare for Sunday Mass with one short prayer and remain after Communion in thanksgiving.",
    sortOrder: 4,
  },
  {
    id: "confession-and-mercy",
    title: "Confession and Mercy",
    slug: "confession-and-mercy",
    category: "Mercy",
    description:
      "Confession is the sacrament of mercy, healing, forgiveness, and return to grace.",
    startHereLabel: "Confession Guide",
    startHereHref: "/confession",
    supportingLinks: [
      { id: "mercy-exam", label: "Examination of Conscience", href: "/confession/examination", description: "Prepare with honesty and peace.", sortOrder: 1 },
      { id: "mercy-sin", label: "Venial and Mortal Sin", href: "/sin-and-temptation/venial-and-mortal-sin", description: "Understand sin without panic or confusion.", sortOrder: 2 },
      { id: "mercy-psalms", label: "Seven Penitential Psalms", href: "/prayers/seven-penitential-psalms", description: "Pray with repentance and hope.", sortOrder: 3 },
      { id: "mercy-prayers", label: "Confession Prayers", href: "/confession/prayers", description: "Pray before and after the sacrament.", sortOrder: 4 },
      { id: "mercy-detachment", label: "Detachment from Sin", href: "/indulgences/detachment-from-sin", description: "Ask for deeper freedom and conversion.", sortOrder: 5 },
    ],
    suggestedNextStep: "Make a gentle examination of conscience and plan your next Confession.",
    sortOrder: 5,
  },
  {
    id: "mary-and-the-rosary",
    title: "Mary and the Rosary",
    slug: "mary-and-the-rosary",
    category: "Devotion",
    description:
      "Mary leads us to Jesus. The Rosary helps the soul contemplate Christ's life with Mary's faith, humility, and love.",
    startHereLabel: "Holy Rosary Guide",
    startHereHref: "/devotions/holy-rosary",
    supportingLinks: [
      { id: "rosary-room", label: "Rosary Prayer Room", href: "/rosary", description: "Pray the Rosary with a live companion page.", sortOrder: 1 },
      { id: "rosary-joyful", label: "Joyful Mysteries", href: "/devotions/holy-rosary/joyful-mysteries", description: "Pray the mysteries of Christ's hidden life.", sortOrder: 2 },
      { id: "rosary-sorrowful", label: "Sorrowful Mysteries", href: "/devotions/holy-rosary/sorrowful-mysteries", description: "Walk with Jesus to the Cross.", sortOrder: 3 },
      { id: "rosary-glorious", label: "Glorious Mysteries", href: "/devotions/holy-rosary/glorious-mysteries", description: "Pray the mysteries of resurrection and glory.", sortOrder: 4 },
      { id: "rosary-marian", label: "Marian Prayers", href: "/pray", description: "Begin with Marian prayer and trust.", sortOrder: 5 },
    ],
    suggestedNextStep: "Pray one decade of the Rosary today.",
    sortOrder: 6,
  },
  {
    id: "scripture-and-formation",
    title: "Scripture and Formation",
    slug: "scripture-and-formation",
    category: "Formation",
    description:
      "Catholic formation helps the mind and heart grow in truth. Scripture, Catechism, prayer, and Church teaching form a steady foundation.",
    startHereLabel: "Bible",
    startHereHref: "/bible",
    supportingLinks: [
      { id: "form-scripture-prayer", label: "Scripture Prayer", href: "/library/scripture-prayer", description: "Pray with the Word of God.", sortOrder: 1 },
      { id: "form-formation", label: "Formation", href: "/formation", description: "Grow in doctrine, prayer, and discipleship.", sortOrder: 2 },
      { id: "form-grace", label: "Grace", href: "/formation/grace", description: "Learn how God heals and strengthens the soul.", sortOrder: 3 },
      { id: "form-eschatology", label: "Catholic Eschatology", href: "/formation/eschatology", description: "Keep eternal life before your eyes with hope.", sortOrder: 4 },
      { id: "form-catechism", label: "Catechism", href: "/catechism", description: "Study what the Church teaches in a beginner-friendly way.", sortOrder: 5 },
    ],
    suggestedNextStep: "Read one Gospel passage slowly and ask: \"Lord, what are You teaching me?\"",
    sortOrder: 7,
  },
  {
    id: "sin-grace-virtue",
    title: "Sin, Grace, and Virtue",
    slug: "sin-grace-virtue",
    category: "Conversion",
    description:
      "The Christian life is not only avoiding sin. It is receiving grace, resisting temptation, practicing virtue, and becoming free to love.",
    startHereLabel: "Sin and Temptation",
    startHereHref: "/sin-and-temptation",
    supportingLinks: [
      { id: "virtue-grace", label: "Grace", href: "/formation/grace", description: "Receive God's help and healing.", sortOrder: 1 },
      { id: "virtue-resist", label: "Resisting Temptation", href: "/sin-and-temptation/resisting-temptation", description: "Take practical steps against temptation.", sortOrder: 2 },
      { id: "virtue-habitual", label: "Habitual Sin", href: "/sin-and-temptation/habitual-sin", description: "Persevere through repeated struggles.", sortOrder: 3 },
      { id: "virtue-fault", label: "Predominant Fault", href: "/sin-and-temptation/predominant-fault", description: "Identify a root weakness and opposing virtue.", sortOrder: 4 },
      { id: "virtue-cooperate", label: "Cooperating with Grace", href: "/formation/grace/cooperating-with-grace", description: "Respond to grace with humility and action.", sortOrder: 5 },
    ],
    suggestedNextStep: "Identify one virtue to practice this week.",
    sortOrder: 8,
  },
  {
    id: "suffering-death-hope",
    title: "Suffering, Death, and Hope",
    slug: "suffering-death-hope",
    category: "Hope",
    description:
      "Catholic hope does not deny suffering or death. It faces them in the light of Christ's Cross, Resurrection, mercy, and eternal life.",
    startHereLabel: "Catholic Eschatology",
    startHereHref: "/formation/eschatology",
    supportingLinks: [
      { id: "hope-death", label: "Death and Christian Hope", href: "/formation/eschatology/death", description: "Prepare for death with faith and peace.", sortOrder: 1 },
      { id: "hope-purgatory", label: "Purgatory", href: "/formation/eschatology/purgatory", description: "Pray with hope for purification and mercy.", sortOrder: 2 },
      { id: "hope-burial", label: "Catholic Burial", href: "/formation/catholic-burial", description: "Learn about funeral rites and reverent interment.", sortOrder: 3 },
      { id: "hope-dead", label: "Prayers for the Dead", href: "/formation/catholic-burial/prayers-for-the-dead", description: "Pray for deceased loved ones and the faithful departed.", sortOrder: 4 },
      { id: "hope-judgment", label: "Judgment", href: "/formation/eschatology/judgment", description: "Understand justice and mercy in Christ.", sortOrder: 5 },
    ],
    suggestedNextStep: "Pray for one deceased person and renew your hope in Christ.",
    sortOrder: 9,
  },
  {
    id: "liturgical-year",
    title: "Liturgical Year",
    slug: "liturgical-year",
    category: "Seasons",
    description:
      "The Church teaches us to live time with Christ through Advent, Christmas, Lent, Easter, Ordinary Time, saints, feasts, fasting, and seasons of grace.",
    startHereLabel: "Liturgical Living",
    startHereHref: "/liturgical-living",
    supportingLinks: [
      { id: "season-advent", label: "Advent", href: "/liturgical-living/advent", description: "Learn hopeful preparation for Christmas.", sortOrder: 1 },
      { id: "season-o-antiphons", label: "O Antiphons", href: "/liturgical-living/advent/o-antiphons", description: "Pray the final Advent titles of Christ.", sortOrder: 2 },
      { id: "season-christmas", label: "Christmas", href: "/liturgical-living/christmas", description: "Celebrate the Incarnation and Epiphany.", sortOrder: 3 },
      { id: "season-lent", label: "Seasons", href: "/liturgical-living/seasons", description: "See the Church's cycle of time and practice.", sortOrder: 4 },
      { id: "season-calendar", label: "Liturgical Calendar", href: "/liturgical-living/calendar", description: "Follow feasts, colors, and observances.", sortOrder: 5 },
    ],
    suggestedNextStep: "Find the current liturgical season and choose one prayer or practice for it.",
    sortOrder: 10,
  },
  {
    id: "family-faith-at-home",
    title: "Family Faith at Home",
    slug: "family-faith-at-home",
    category: "Domestic Church",
    description:
      "Catholic life is lived at home through prayer, forgiveness, Sunday Mass, family traditions, sacred images, and acts of charity.",
    startHereLabel: "Family and Domestic Church",
    startHereHref: "/family",
    supportingLinks: [
      { id: "home-prayer", label: "Family Prayer", href: "/family", description: "Build a Catholic home of prayer and mercy.", sortOrder: 1 },
      { id: "home-house-blessing", label: "Epiphany House Blessing", href: "/liturgical-living/christmas/epiphany/house-blessing", description: "Bless the home with Christ's name.", sortOrder: 2 },
      { id: "home-liturgical", label: "Family Liturgical Living", href: "/liturgical-living/family", description: "Bring the Church year into the home.", sortOrder: 3 },
      { id: "home-rosary", label: "Holy Rosary Guide", href: "/devotions/holy-rosary", description: "Pray as a family with Mary.", sortOrder: 4 },
      { id: "home-burial", label: "Catholic Burial", href: "/formation/catholic-burial", description: "Learn how Catholic hope shapes family care at death.", sortOrder: 5 },
    ],
    suggestedNextStep: "Create a small prayer corner and choose one family prayer routine.",
    sortOrder: 11,
  },
];

export const catholicLifeTracks: CatholicLifeTrack[] = [
  {
    id: "just-beginning",
    title: "I am just beginning.",
    description: "Start simply, with one prayer, one Mass, and one page that helps you begin in peace.",
    steps: [
      "Pray one simple prayer.",
      "Attend Mass.",
      "Read a basic formation page.",
      "Ask questions.",
      "Build a small daily rhythm.",
    ],
    links: [
      { id: "track-begin-pray", label: "Pray", href: "/pray", description: "Begin with simple daily prayer.", sortOrder: 1 },
      { id: "track-begin-mass", label: "Mass", href: "/mass", description: "See the heart of Catholic worship.", sortOrder: 2 },
      { id: "track-begin-formation", label: "Formation", href: "/formation", description: "Read one clear Catholic guide.", sortOrder: 3 },
      { id: "track-begin-explore", label: "Explore the Faith", href: "/explore", description: "A welcoming place for first questions.", sortOrder: 4 },
    ],
    sortOrder: 1,
  },
  {
    id: "returning",
    title: "I am returning.",
    description: "Begin with mercy, then return to Mass, prayer, and the ordinary grace of Christian life.",
    steps: [
      "Ask Jesus for mercy.",
      "Examine your conscience.",
      "Go to Confession.",
      "Return to Mass.",
      "Begin daily prayer.",
    ],
    links: [
      { id: "track-return-confession", label: "Confession Guide", href: "/confession", description: "Return through the sacrament of mercy.", sortOrder: 1 },
      { id: "track-return-exam", label: "Examination", href: "/confession/examination", description: "Prepare with peace and honesty.", sortOrder: 2 },
      { id: "track-return-prayers", label: "Confession Prayers", href: "/confession/prayers", description: "Pray before and after the sacrament.", sortOrder: 3 },
      { id: "track-return-mass", label: "Mass", href: "/mass", description: "Come home to Sunday worship.", sortOrder: 4 },
    ],
    sortOrder: 2,
  },
  {
    id: "grow-deeper",
    title: "I want to grow deeper.",
    description: "Strengthen your prayer, sacramental life, formation, virtue, and service in a steady rhythm.",
    steps: [
      "Strengthen daily prayer.",
      "Receive the sacraments regularly.",
      "Study Scripture and formation.",
      "Practice virtue.",
      "Serve others.",
    ],
    links: [
      { id: "track-grow-examen", label: "Daily Examen", href: "/daily-examen", description: "Review the day before God.", sortOrder: 1 },
      { id: "track-grow-scripture", label: "Scripture Prayer", href: "/library/scripture-prayer", description: "Pray with the Word of God.", sortOrder: 2 },
      { id: "track-grow-grace", label: "Grace", href: "/formation/grace", description: "Cooperate with God's action in your life.", sortOrder: 3 },
      { id: "track-grow-sin", label: "Sin and Temptation", href: "/sin-and-temptation", description: "Grow in freedom, virtue, and healing.", sortOrder: 4 },
    ],
    sortOrder: 3,
  },
];

export const catholicWeeklyRhythms: CatholicWeeklyRhythm[] = [
  {
    id: "daily",
    frequency: "Daily",
    practices: ["Morning prayer", "Short Scripture or Gospel reading", "One act of charity", "Evening examen"],
    sortOrder: 1,
  },
  {
    id: "weekly",
    frequency: "Weekly",
    practices: ["Sunday Mass", "One Rosary or decade", "One act of mercy", "Spiritual reading"],
    sortOrder: 2,
  },
  {
    id: "monthly",
    frequency: "Monthly",
    practices: ["Confession", "Adoration if possible", "Review your spiritual plan"],
    sortOrder: 3,
  },
  {
    id: "seasonally",
    frequency: "Seasonally",
    practices: [
      "Live the liturgical season",
      "Prepare for major feasts",
      "Practice fasting, almsgiving, and prayer in Lent",
      "Pray Advent and Christmas devotions",
    ],
    sortOrder: 4,
  },
];

export const catholicLifeRelatedLinks: CatholicLifeLink[] = [
  { id: "related-explore", label: "Explore the Faith", href: "/explore", description: "A gentle Catholic starting place.", sortOrder: 1 },
  { id: "related-pray", label: "Pray", href: "/pray", description: "Begin prayer and build a rhythm.", sortOrder: 2 },
  { id: "related-confession", label: "Confession Guide", href: "/confession", description: "Return to mercy and reconciliation.", sortOrder: 3 },
  { id: "related-mass", label: "The Holy Mass", href: "/mass", description: "Learn the shape and meaning of Catholic worship.", sortOrder: 4 },
  { id: "related-sacraments", label: "Sacraments", href: "/sacraments", description: "See how Christ gives grace through the Church.", sortOrder: 5 },
  { id: "related-rosary", label: "Holy Rosary", href: "/devotions/holy-rosary", description: "Pray the mysteries of Christ with Mary.", sortOrder: 6 },
  { id: "related-bible", label: "Bible", href: "/bible", description: "Learn to read and pray Scripture with the Church.", sortOrder: 7 },
  { id: "related-formation", label: "Formation", href: "/formation", description: "Grow in doctrine, prayer, and discipleship.", sortOrder: 8 },
  { id: "related-liturgical", label: "Liturgical Living", href: "/liturgical-living", description: "Live the Church year with Christ.", sortOrder: 9 },
  { id: "related-family", label: "Family Faith at Home", href: "/family", description: "Build a Catholic home of prayer and mercy.", sortOrder: 10 },
];

export const catholicLifeOrientationLinks: CatholicLifeLink[] = [
  { id: "orientation-explore", label: "I Need Help Choosing", href: "/explore", description: "Start with a gentle Catholic overview.", sortOrder: 1 },
  { id: "orientation-pray", label: "I Want to Start Praying", href: "/pray", description: "Begin with simple prayer.", sortOrder: 2 },
  { id: "orientation-confession", label: "I Want to Go to Confession", href: "/confession", description: "Return to mercy and begin again.", sortOrder: 3 },
];
