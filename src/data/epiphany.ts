import type { EpiphanyGift, EpiphanyJourneyStep, EpiphanyRelatedLink } from "@/types/epiphany";

export const epiphanyJourneySteps: EpiphanyJourneyStep[] = [
  {
    id: "epiphany-step-light",
    title: "Notice the Light",
    description: "The Magi noticed a sign and responded. Ask where God is gently drawing your attention.",
    reflectionQuestion: "Where is God quietly drawing my attention in this season?",
    sortOrder: 1,
  },
  {
    id: "epiphany-step-comfort",
    title: "Leave Comfort Behind",
    description: "Seeking Christ requires movement, sacrifice, and trust.",
    reflectionQuestion: "What comfort might I need to leave behind in order to seek Christ more faithfully?",
    sortOrder: 2,
  },
  {
    id: "epiphany-step-persevere",
    title: "Persevere Through Confusion",
    description: "The Magi had to ask, search, and continue even when the path was not fully clear.",
    reflectionQuestion: "How is Christ asking me to persevere when I do not yet see the whole road?",
    sortOrder: 3,
  },
  {
    id: "epiphany-step-worship",
    title: "Worship the King",
    description: "The journey ends in adoration, not information alone.",
    reflectionQuestion: "Am I letting my search for God become real worship?",
    sortOrder: 4,
  },
  {
    id: "epiphany-step-offer",
    title: "Offer Your Gifts",
    description: "Gold, frankincense, and myrrh invite us to offer Christ our whole life.",
    reflectionQuestion: "What gift of prayer, sacrifice, or love can I offer Jesus now?",
    sortOrder: 5,
  },
  {
    id: "epiphany-step-new-road",
    title: "Return by a New Road",
    description: "After encountering Christ, the Magi return differently. Epiphany calls us to conversion.",
    reflectionQuestion: "What would it mean for me to return by a new road after meeting Christ?",
    sortOrder: 6,
  },
];

export const epiphanyGifts: EpiphanyGift[] = [
  {
    id: "epiphany-gift-gold",
    title: "Gold",
    meaning: "Christ is King.",
    reflection: "What part of my life needs to come under the reign of Christ?",
    prayer: "Jesus, my King, reign over my heart, my home, and my choices.",
    sortOrder: 1,
  },
  {
    id: "epiphany-gift-frankincense",
    title: "Frankincense",
    meaning: "Christ is God.",
    reflection: "How can I worship Jesus more faithfully this year?",
    prayer: "Jesus, true God, receive my prayer, adoration, and love.",
    sortOrder: 2,
  },
  {
    id: "epiphany-gift-myrrh",
    title: "Myrrh",
    meaning: "Christ will suffer and die for our salvation.",
    reflection: "What suffering or sacrifice can I unite to Jesus?",
    prayer: "Jesus, suffering Savior, help me offer my trials with trust and love.",
    sortOrder: 3,
  },
];

export const epiphanyRelatedLinks: EpiphanyRelatedLink[] = [
  {
    id: "epiphany-link-o-antiphons",
    title: "O Antiphons",
    description: "Pray the final days of Advent with the ancient titles of Christ.",
    href: "/liturgical-living/advent/o-antiphons",
    category: "Liturgical Living",
    sortOrder: 1,
  },
  {
    id: "epiphany-link-christmas",
    title: "Christmas Season",
    description: "Continue celebrating the Incarnation with prayer, family life, and seasonal joy.",
    href: "/liturgical-living/christmas",
    category: "Liturgical Living",
    sortOrder: 2,
  },
  {
    id: "epiphany-link-nativity",
    title: "Nativity Rosary Meditation",
    description: "Pray the Nativity mystery and adore Christ in Bethlehem.",
    href: "/devotions/holy-rosary/joyful-mysteries/nativity",
    category: "Rosary",
    sortOrder: 3,
  },
  {
    id: "epiphany-link-baptism",
    title: "Baptism of Jesus",
    description: "Continue from Epiphany into the Lord’s public manifestation at the Jordan.",
    href: "/devotions/holy-rosary/luminous-mysteries/baptism-of-jesus",
    category: "Rosary",
    sortOrder: 4,
  },
  {
    id: "epiphany-link-scripture",
    title: "Scripture Prayer",
    description: "Pray with the Word of God slowly and reverently.",
    href: "/library/scripture-prayer",
    category: "Prayer",
    sortOrder: 5,
  },
  {
    id: "epiphany-link-bible",
    title: "Bible",
    description: "Read Matthew 2 and continue learning how Catholics pray with Scripture.",
    href: "/bible",
    category: "Learn",
    sortOrder: 6,
  },
  {
    id: "epiphany-link-pray",
    title: "Prayer",
    description: "Build a quiet daily rhythm of Catholic prayer at home.",
    href: "/pray",
    category: "Prayer",
    sortOrder: 7,
  },
  {
    id: "epiphany-link-sacramentals",
    title: "Sacramentals",
    description: "Learn how home blessings, holy water, and blessed signs support family prayer.",
    href: "/sacramentals",
    category: "Learn",
    sortOrder: 8,
  },
  {
    id: "epiphany-link-examen",
    title: "Daily Examen",
    description: "Review the day before God and ask for the grace to walk a new road.",
    href: "/daily-examen",
    category: "Reflect",
    sortOrder: 9,
  },
  {
    id: "epiphany-link-formation",
    title: "Formation",
    description: "Keep growing in Catholic faith, worship, virtue, and discernment.",
    href: "/formation",
    category: "Learn",
    sortOrder: 10,
  },
];

export const epiphanyFamilyNightSteps = [
  "Place the Nativity scene or image of the Holy Family in a central place.",
  "Light a candle.",
  "Read Matthew 2:1–12.",
  "Talk about gold, frankincense, and myrrh.",
  "Let each person name one gift to offer Jesus.",
  "Pray the Epiphany prayer.",
  "Bless the doorway or pray for the home.",
  "End with a hymn or quiet thanksgiving.",
] as const;

export const epiphanyReflectionQuestions = [
  "What star is God using to draw me closer to Christ?",
  "What comfort might I need to leave behind to seek Jesus more faithfully?",
  "What gift can I offer Jesus this year?",
  "Where does my home need Christ’s peace and light?",
  "What would it mean for me to return by a new road?",
  "How can I carry Christ’s light to others?",
] as const;

export const epiphanyHouseBlessingPrompts = [
  "At the doorway, ask Christ to bless all who enter and leave in peace.",
  "In the main room, pray for charity, hospitality, and truthful speech.",
  "In the kitchen or dining area, thank God for daily bread and shared life.",
  "In bedrooms, ask for rest, purity, healing, and protection.",
  "In work or study spaces, pray for wisdom, diligence, and integrity.",
  "In places of sorrow or strain, ask Christ to bring reconciliation and hope.",
] as const;

export const epiphanyPrayerText = `Lord Jesus Christ,
Light of the nations and King of all creation,
lead me by Your grace as You led the Magi by the star.

Teach me to seek You with perseverance,
to worship You with humility,
and to offer You the gifts of my life.

Bless my home,
guide my family,
and help me return from this feast by a new road:
the road of conversion, charity, and deeper faith.

Amen.`;
