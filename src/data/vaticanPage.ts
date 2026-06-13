import type { VaticanTimelineItem } from "@/types/vatican";

export const vaticanDefinitionCards = [
  {
    title: "Vatican City",
    description: "A small independent city-state within Rome that houses important churches, museums, and papal offices.",
  },
  {
    title: "The Holy See",
    description: "The governing and diplomatic reality associated with the Pope and the Church's central service.",
  },
  {
    title: "The Pope",
    description: "The Bishop of Rome and successor of Saint Peter, serving the unity and pastoral mission of the Church.",
  },
  {
    title: "The Roman Curia",
    description: "The offices and departments that help the Pope serve the universal Church.",
  },
  {
    title: "Saint Peter's Basilica",
    description: "A major basilica built over the traditional burial place of Saint Peter and a center of pilgrimage.",
  },
  {
    title: "Vatican Museums",
    description: "Museums preserving art, manuscripts, history, and sacred beauty gathered and protected through the centuries.",
  },
] as const;

export const whyVaticanMattersCards = [
  "It points to Saint Peter and apostolic witness.",
  "It is connected to the Pope's ministry of unity.",
  "It preserves sacred art and Christian history.",
  "It serves the universal Church.",
  "It hosts major liturgies and pilgrimages.",
  "It publishes official documents and announcements.",
  "It broadcasts prayer, Masses, audiences, and blessings to the world.",
] as const;

export const stPetersHighlights = [
  "Saint Peter and apostolic witness",
  "The basilica as a place of pilgrimage",
  "The altar and the tomb of Peter",
  "The Chair of Saint Peter",
  "The Pieta",
  "The dome",
  "Bernini's baldachin",
  "The Holy Door",
  "Major papal liturgies",
] as const;

export const sistineChapelHighlights = [
  "Michelangelo's ceiling",
  "The Last Judgment",
  "Creation and salvation history",
  "Sacred art as visual theology",
  "Conclave and election of a Pope",
  "Prayerful looking instead of sightseeing only",
] as const;

export const vaticanMuseumHighlights = [
  "Raphael Rooms",
  "Gallery of Maps",
  "Pinacoteca",
  "Pio-Clementine Museum",
  "Christian art and archaeology",
  "Sistine Chapel connection",
] as const;

export const vaticanMassHighlights = [
  "Papal Masses",
  "Christmas and Easter liturgies",
  "Holy Week",
  "Canonizations",
  "Angelus and Regina Caeli",
  "General Audiences",
] as const;

export const sacredArtPrayerCards = [
  "Beauty leads to wonder",
  "Art teaches Scripture",
  "Saints become visible witnesses",
  "Architecture directs the heart to worship",
  "Sacred images point beyond themselves to God",
  "Pilgrimage engages the whole person",
] as const;

export const virtualPilgrimageSteps = [
  "Begin with prayer.",
  "Watch or open a Vatican live broadcast.",
  "Visit the Saint Peter's Basilica virtual tour.",
  "Read about Saint Peter.",
  "Pray for the Pope.",
  "Explore the Sistine Chapel.",
  "Reflect on one image, saint, or mystery.",
  "Offer a prayer for the universal Church.",
  "End with an Our Father, Hail Mary, and Glory Be.",
] as const;

export const virtualPilgrimagePrayer = `Lord Jesus,
as I explore the beauty and history of the Vatican from afar,
draw my heart closer to You.

Help me see sacred art with faith,
the Church with love,
the Pope with prayer,
and the saints as witnesses of Your grace.

Unite me with Your Church throughout the world,
and make this time a step toward deeper prayer,
humility, and holiness.

Amen.`;

export const explorerPath = [
  "Learn about Saint Peter.",
  "Understand the Pope.",
  "Watch a Vatican Mass or audience.",
  "Take a virtual tour of Saint Peter's Basilica.",
  "Learn why sacred art matters.",
  "Explore the Catechism and Church history.",
] as const;

export const visitPlanningTips = [
  "Check the official Vatican and basilica websites before making plans.",
  "Verify Mass and audience schedules through official sources.",
  "Use only official ticket sources for Vatican Museums access.",
  "Be careful with unofficial ticket sites or inflated prices.",
  "Dress respectfully for sacred spaces.",
  "Expect security lines and allow extra time.",
  "Leave room for prayer, not only sightseeing.",
  "Check whether your parish or diocese offers a pilgrimage group.",
] as const;

export const vaticanRelatedTools = [
  {
    title: "The Pope",
    href: "/pope",
    description: "Understand the Pope's spiritual role and his service to the universal Church.",
    cta: "Learn About the Pope",
  },
  {
    title: "Catholic News",
    href: "/news",
    description: "Follow Vatican updates and Church headlines with prayerful discernment.",
    cta: "Read Catholic News",
  },
  {
    title: "The Holy Mass",
    href: "/mass",
    description: "See how the Church's worship helps make sense of Vatican liturgies and feasts.",
    cta: "Understand the Mass",
  },
  {
    title: "Sacraments",
    href: "/sacraments",
    description: "Connect Vatican worship, Church teaching, and sacramental life.",
    cta: "Explore Sacraments",
  },
  {
    title: "Eucharist",
    href: "/sacraments/eucharist",
    description: "Stay close to the Eucharistic heart of Catholic worship.",
    cta: "Learn About the Eucharist",
  },
  {
    title: "Church Fathers",
    href: "/church-fathers",
    description: "Meet earlier Christian witnesses who shaped the Church's memory and prayer.",
    cta: "Meet the Fathers",
  },
  {
    title: "Saints",
    href: "/saints",
    description: "Continue with the saints whose lives and witness fill the Church's story.",
    cta: "Explore the Saints",
  },
  {
    title: "Catechism",
    href: "/catechism",
    description: "Read what the Church teaches in a clear and beginner-friendly way.",
    cta: "Open the Catechism",
  },
  {
    title: "OCIA / Becoming Catholic",
    href: "/ocia",
    description: "A welcoming guide if you are learning the Catholic faith for the first time.",
    cta: "Explore OCIA",
  },
  {
    title: "Liturgy of the Hours",
    href: "/liturgy-of-the-hours",
    description: "Join the daily prayer of the Church from wherever you are.",
    cta: "Pray the Hours",
  },
  {
    title: "Pray",
    href: "/pray",
    description: "Let sacred beauty lead you into prayer and not only information.",
    cta: "Begin in Prayer",
  },
] as const;

export const vaticanTimeline: VaticanTimelineItem[] = [
  {
    id: "vatican-timeline-peter",
    title: "Saint Peter's martyrdom and burial tradition in Rome",
    description: "Catholic memory places Peter's witness and burial in Rome, tying the Vatican deeply to apostolic faith and pilgrimage.",
    approximatePeriod: "1st century",
    relatedLinks: [{ label: "The Pope", href: "/pope" }],
    sortOrder: 10,
  },
  {
    id: "vatican-timeline-devotion",
    title: "Early Christian devotion at Peter's tomb",
    description: "Christians kept close to Peter's witness, helping shape the importance of the site for the Church in Rome.",
    approximatePeriod: "Early centuries",
    relatedLinks: [{ label: "Church Fathers", href: "/church-fathers" }],
    sortOrder: 20,
  },
  {
    id: "vatican-timeline-old-basilica",
    title: "Old Saint Peter's Basilica",
    description: "An earlier basilica grew around the memory of Peter and the Church's worship at this holy place.",
    approximatePeriod: "Late antiquity to medieval era",
    relatedLinks: [{ label: "The Holy Mass", href: "/mass" }],
    sortOrder: 30,
  },
  {
    id: "vatican-timeline-rebuilding",
    title: "Renaissance rebuilding of Saint Peter's",
    description: "The present basilica took shape through centuries of artistic, architectural, and spiritual labor.",
    approximatePeriod: "Renaissance era",
    relatedLinks: [{ label: "Saints", href: "/saints" }],
    sortOrder: 40,
  },
  {
    id: "vatican-timeline-museums",
    title: "Vatican Museums and papal patronage of art",
    description: "The Vatican preserved major works of art and culture, not only as treasures, but as witnesses to faith and history.",
    approximatePeriod: "Early modern period onward",
    relatedLinks: [{ label: "Formation", href: "/formation" }],
    sortOrder: 50,
  },
  {
    id: "vatican-timeline-vatican-one",
    title: "Vatican I",
    description: "The First Vatican Council addressed major questions about the Church and papal ministry in a changing world.",
    approximatePeriod: "19th century",
    relatedLinks: [{ label: "Catechism", href: "/catechism" }],
    sortOrder: 60,
  },
  {
    id: "vatican-timeline-lateran",
    title: "Lateran Treaty and Vatican City State",
    description: "The modern legal form of Vatican City helped define the small city-state connected with the Holy See.",
    approximatePeriod: "20th century",
    relatedLinks: [{ label: "Catholic News", href: "/news" }],
    sortOrder: 70,
  },
  {
    id: "vatican-timeline-vatican-two",
    title: "Vatican II",
    description: "The Second Vatican Council became a major moment of renewal, teaching, and worldwide pastoral reflection.",
    approximatePeriod: "1960s",
    relatedLinks: [{ label: "Formation", href: "/formation" }],
    sortOrder: 80,
  },
  {
    id: "vatican-timeline-global-media",
    title: "Modern papal communications and global broadcasts",
    description: "Radio, television, and digital media allowed Vatican prayer, liturgies, and teaching to reach a worldwide audience.",
    approximatePeriod: "20th-21st centuries",
    relatedLinks: [{ label: "Catholic News", href: "/news" }],
    sortOrder: 90,
  },
  {
    id: "vatican-timeline-digital",
    title: "Digital and virtual access today",
    description: "Official websites, virtual tours, and live broadcasts now help people encounter Vatican worship and history from afar.",
    approximatePeriod: "Today",
    relatedLinks: [{ label: "Becoming Catholic", href: "/ocia" }],
    sortOrder: 100,
  },
];
