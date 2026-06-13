import type { ChurchFatherTopic } from "@/types/churchFathers";

export const churchFatherTopics: ChurchFatherTopic[] = [
  {
    id: "topic-eucharist",
    title: "Eucharist",
    slug: "eucharist",
    description:
      "Read the Fathers on the Eucharist as true gift, sacrificial thanksgiving, communion, and reverent worship.",
    suggestedFatherIds: ["ignatius-of-antioch", "justin-martyr", "cyril-of-jerusalem", "ambrose"],
    relatedDailyOratoryLinks: [
      { label: "Adoration", href: "/adoration" },
      { label: "Sacraments", href: "/sacraments" },
      { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
    ],
    sortOrder: 10,
  },
  {
    id: "topic-baptism",
    title: "Baptism",
    slug: "baptism",
    description:
      "The Fathers describe baptism as new birth, illumination, cleansing, and entry into the life of the Church.",
    suggestedFatherIds: ["didache", "cyril-of-jerusalem", "ambrose", "tertullian"],
    relatedDailyOratoryLinks: [
      { label: "Sacraments", href: "/sacraments" },
      { label: "Liturgical Seasons", href: "/liturgical-living/seasons" },
    ],
    sortOrder: 20,
  },
  {
    id: "topic-confession-and-repentance",
    title: "Confession and repentance",
    slug: "confession-and-repentance",
    description:
      "Patristic sources speak plainly about repentance, tears, conversion, and the mercy of God.",
    suggestedFatherIds: ["shepherd-of-hermas", "cyprian-of-carthage", "augustine", "isaac-the-syrian"],
    relatedDailyOratoryLinks: [
      { label: "Confession Guide", href: "/confession" },
      { label: "Examination of Conscience", href: "/confession/examination" },
    ],
    sortOrder: 30,
  },
  {
    id: "topic-mary",
    title: "Mary",
    slug: "mary",
    description:
      "The Fathers contemplate Mary as virgin, mother, new Eve, and humble witness to the Incarnation.",
    suggestedFatherIds: ["irenaeus-of-lyons", "ephrem-the-syrian", "cyril-of-alexandria", "athanasius"],
    relatedDailyOratoryLinks: [
      { label: "Rosary", href: "/rosary" },
      { label: "Prayer Library", href: "/library" },
    ],
    sortOrder: 40,
  },
  {
    id: "topic-saints-and-martyrs",
    title: "Saints and martyrs",
    slug: "saints-and-martyrs",
    description:
      "The early Church treasured martyr witness as a school of courage, fidelity, and love stronger than death.",
    suggestedFatherIds: ["polycarp", "ignatius-of-antioch", "cyprian-of-carthage", "john-chrysostom"],
    relatedDailyOratoryLinks: [
      { label: "Saint Companion Finder", href: "/saints/finder" },
      { label: "Prayer Library", href: "/library" },
    ],
    sortOrder: 50,
  },
  {
    id: "topic-scripture",
    title: "Scripture",
    slug: "scripture",
    description:
      "The Fathers read Scripture as the living word of God within the worship, doctrine, and moral life of the Church.",
    suggestedFatherIds: ["jerome", "john-chrysostom", "gregory-of-nyssa", "augustine"],
    relatedDailyOratoryLinks: [
      { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
      { label: "Prayer Library", href: "/library" },
    ],
    sortOrder: 60,
  },
  {
    id: "topic-prayer",
    title: "Prayer",
    slug: "prayer",
    description:
      "The Fathers teach prayer as humble persistence, scriptural meditation, worship, and interior conversion.",
    suggestedFatherIds: ["cyprian-of-carthage", "gregory-of-nazianzus", "augustine", "isaac-the-syrian"],
    relatedDailyOratoryLinks: [
      { label: "Prayer Library", href: "/library" },
      { label: "Rule of Life Builder", href: "/rule-of-life" },
    ],
    sortOrder: 70,
  },
  {
    id: "topic-fasting",
    title: "Fasting",
    slug: "fasting",
    description:
      "Early Christians paired fasting with repentance, vigilance, and simplicity rather than display.",
    suggestedFatherIds: ["didache", "basil-the-great", "aphrahat", "john-chrysostom"],
    relatedDailyOratoryLinks: [
      { label: "Liturgical Seasons", href: "/liturgical-living/seasons" },
      { label: "Pathways", href: "/pathways" },
    ],
    sortOrder: 80,
  },
  {
    id: "topic-almsgiving",
    title: "Almsgiving",
    slug: "almsgiving",
    description:
      "The Fathers consistently join charity for the poor to prayer, fasting, and Eucharistic life.",
    suggestedFatherIds: ["basil-the-great", "john-chrysostom", "gregory-the-great"],
    relatedDailyOratoryLinks: [
      { label: "Works of Mercy Pathway", href: "/pathways/works-of-mercy-and-service" },
      { label: "Community", href: "/community" },
    ],
    sortOrder: 90,
  },
  {
    id: "topic-trinity",
    title: "Trinity",
    slug: "trinity",
    description:
      "The Fathers help readers understand how the Church confessed one God in three Persons with precision and reverence.",
    suggestedFatherIds: ["athanasius", "basil-the-great", "gregory-of-nazianzus", "hilary-of-poitiers"],
    relatedDailyOratoryLinks: [
      { label: "Prayer Library", href: "/library" },
      { label: "Pathways", href: "/pathways" },
    ],
    sortOrder: 100,
  },
  {
    id: "topic-incarnation",
    title: "Incarnation",
    slug: "incarnation",
    description:
      "The Fathers speak of the Word made flesh with awe, doctrinal care, and deep spiritual consequence.",
    suggestedFatherIds: ["athanasius", "cyril-of-alexandria", "leo-the-great", "john-damascene"],
    relatedDailyOratoryLinks: [
      { label: "Liturgical Seasons", href: "/liturgical-living/seasons" },
      { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
    ],
    sortOrder: 110,
  },
  {
    id: "topic-resurrection",
    title: "Resurrection",
    slug: "resurrection",
    description:
      "Patristic preaching on the Resurrection is full of joy, baptismal hope, and confidence in Christ's victory.",
    suggestedFatherIds: ["gregory-of-nyssa", "john-chrysostom", "augustine"],
    relatedDailyOratoryLinks: [
      { label: "Stations of the Resurrection", href: "/resurrection-stations" },
      { label: "Liturgical Seasons", href: "/liturgical-living/seasons" },
    ],
    sortOrder: 120,
  },
  {
    id: "topic-church-authority",
    title: "Church authority",
    slug: "church-authority",
    description:
      "The Fathers show that early Christians cared deeply about apostolic teaching, visible communion, and ecclesial order.",
    suggestedFatherIds: ["clement-of-rome", "ignatius-of-antioch", "irenaeus-of-lyons", "leo-the-great"],
    relatedDailyOratoryLinks: [
      { label: "Sacraments", href: "/sacraments" },
      { label: "The Holy Mass", href: "/mass" },
    ],
    sortOrder: 130,
  },
  {
    id: "topic-apostolic-succession",
    title: "Apostolic succession",
    slug: "apostolic-succession",
    description:
      "The Fathers witness to continuity in teaching, worship, and episcopal office from the apostolic age onward.",
    suggestedFatherIds: ["clement-of-rome", "ignatius-of-antioch", "irenaeus-of-lyons"],
    relatedDailyOratoryLinks: [
      { label: "Sacraments", href: "/sacraments" },
      { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
    ],
    sortOrder: 140,
  },
  {
    id: "topic-bishop-and-unity",
    title: "Bishop and unity",
    slug: "bishop-and-unity",
    description:
      "A recurring patristic theme is that unity with the bishop and the Church protects the faithful from fragmentation.",
    suggestedFatherIds: ["ignatius-of-antioch", "cyprian-of-carthage", "clement-of-rome"],
    relatedDailyOratoryLinks: [
      { label: "Community", href: "/community" },
      { label: "Prayer Library", href: "/library" },
    ],
    sortOrder: 150,
  },
  {
    id: "topic-liturgy",
    title: "Liturgy",
    slug: "liturgy",
    description:
      "The Fathers help readers see how prayer, doctrine, Scripture, and sacramental worship belong together.",
    suggestedFatherIds: ["justin-martyr", "cyril-of-jerusalem", "ambrose", "john-damascene"],
    relatedDailyOratoryLinks: [
      { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
      { label: "Adoration", href: "/adoration" },
    ],
    sortOrder: 160,
  },
  {
    id: "topic-virtue",
    title: "Virtue",
    slug: "virtue",
    description:
      "The Fathers constantly call the Christian to habits of humility, chastity, mercy, patience, and self-command.",
    suggestedFatherIds: ["didache", "basil-the-great", "augustine", "gregory-the-great"],
    relatedDailyOratoryLinks: [
      { label: "Virtue Tracker", href: "/virtue-tracker" },
      { label: "Rule of Life Builder", href: "/rule-of-life" },
    ],
    sortOrder: 170,
  },
  {
    id: "topic-spiritual-battle",
    title: "Spiritual battle",
    slug: "spiritual-battle",
    description:
      "Patristic writers treat temptation, vigilance, and perseverance as part of ordinary Christian discipleship.",
    suggestedFatherIds: ["athanasius", "isaac-the-syrian", "maximus-the-confessor"],
    relatedDailyOratoryLinks: [
      { label: "Confession Guide", href: "/confession" },
      { label: "Pathways", href: "/pathways" },
    ],
    sortOrder: 180,
  },
  {
    id: "topic-family-life",
    title: "Family life",
    slug: "family-life",
    description:
      "The Fathers speak often about marriage, children, discipline, hospitality, and the domestic witness of believers.",
    suggestedFatherIds: ["john-chrysostom", "augustine", "gregory-the-great"],
    relatedDailyOratoryLinks: [
      { label: "Liturgical Family Ideas", href: "/liturgical-living/family" },
      { label: "Prayer Library", href: "/library" },
    ],
    sortOrder: 190,
  },
  {
    id: "topic-care-for-the-poor",
    title: "Care for the poor",
    slug: "care-for-the-poor",
    description:
      "For many Fathers, love of the poor is not optional ornament but a demand of the Gospel and Eucharistic faith.",
    suggestedFatherIds: ["basil-the-great", "john-chrysostom", "gregory-the-great", "ambrose"],
    relatedDailyOratoryLinks: [
      { label: "Works of Mercy Pathway", href: "/pathways/works-of-mercy-and-service" },
      { label: "Community", href: "/community" },
    ],
    sortOrder: 200,
  },
];
