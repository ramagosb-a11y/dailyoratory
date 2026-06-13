import type { SacramentalFinderNeed, SacramentalFinderRecommendation } from "@/types/sacramentals";

export const sacramentalsHeroLinks = [
  { label: "Learn What Sacramentals Are", href: "#what-are-sacramentals" },
  { label: "Explore Common Sacramentals", href: "#common-sacramentals" },
  { label: "Where to Purchase", href: "#where-to-purchase" },
] as const;

export const sacramentalsBasics = [
  "Sacramentals are holy signs used by the Church.",
  "They include blessings, blessed objects, prayers, gestures, and sacred places.",
  "They help dispose the heart to grace.",
  "They remind us of God's presence.",
  "They help us pray with the Church.",
  "They should lead us toward Christ and the sacraments.",
  "They are not magic charms.",
] as const;

export const sacramentalsUseSteps = [
  "Begin with faith. Remember that God is the source of grace.",
  "Connect the object to prayer. Do not merely own it. Pray with it.",
  "Let it lead to conversion. Ask: how does this help me love Christ more?",
  "Keep it connected to the sacraments. Sacramentals should lead to Mass, confession, Eucharist, and charity.",
  "Treat blessed objects with reverence. Do not throw them around, mock them, or use them carelessly.",
  "Avoid superstition. Do not treat sacramentals like spiritual technology.",
  "Ask for a blessing. Bring appropriate items to a priest or deacon if they should be blessed.",
  "Teach children with simplicity. Explain that holy objects help us remember and love God.",
] as const;

export const sacramentalBlessingSteps = [
  "Purchase or obtain the item.",
  "Ask your parish priest or deacon if he can bless it.",
  "Bring the item after Mass or during parish office hours if appropriate.",
  "Be patient and respectful of parish schedules.",
  "Use the item reverently after it is blessed.",
] as const;

export const commonBlessedItems = [
  "rosaries",
  "crucifixes",
  "medals",
  "scapulars",
  "candles",
  "holy images",
  "prayer cards",
  "home religious items",
] as const;

export const disposalOptions = [
  "burn respectfully if safe and appropriate",
  "bury respectfully",
  "ask a parish for guidance",
  "repair it if possible",
  "keep it in a prayer space if it still has devotional value",
] as const;

export const homePractices = [
  "Place a crucifix in a central room",
  "Create a prayer corner",
  "Keep holy water near the door",
  "Pray the Rosary as a family",
  "Light a candle safely during prayer",
  "Bless children before bed",
  "Use blessed palms during Holy Week",
  "Display saint images during feast days",
  "Keep a small prayer card in a wallet, bag, or car",
] as const;

export const spiritualProtectionCards = [
  { title: "Sign of the Cross", text: "A daily confession of belonging to Christ and a simple act of trust in the Holy Trinity." },
  { title: "Holy Water", text: "A reminder of Baptism and a humble prayer for cleansing, blessing, and protection." },
  { title: "Saint Michael Prayer", text: "A Christ-centered prayer asking angelic protection and courage in spiritual struggle." },
  { title: "Saint Benedict Medal", text: "A sacramental used with faith and prayer, never superstition." },
  { title: "Crucifix", text: "The Cross keeps the Christian heart fixed on Christ's victory, mercy, and love." },
  { title: "Confession", text: "Reconciliation is not a sacramental but a sacrament, and it remains central in spiritual protection." },
  { title: "Eucharist", text: "The Blessed Sacrament remains the center of Catholic life, not an optional extra beside sacramentals." },
  { title: "Scripture", text: "The Word of God steadies the heart and keeps spiritual protection rooted in truth." },
] as const;

export const liturgicalYearCards = [
  "Advent wreath",
  "Christmas nativity scene",
  "Epiphany home blessing",
  "Blessed candles at Candlemas",
  "Ashes on Ash Wednesday",
  "Palms on Palm Sunday",
  "Easter candle imagery",
  "Holy water at Easter",
  "Marian flowers in May",
  "Rosary in October",
] as const;

export const starterSacramentals = [
  "Crucifix",
  "Rosary",
  "Bible",
  "Holy water bottle",
  "Prayer card",
  "Candle for prayer",
  "Saint medal or holy card",
  "Small image of Jesus or Mary",
] as const;

export const purchaseChecklist = [
  "Is this item clearly Catholic?",
  "Does it help me pray?",
  "Is the image reverent?",
  "Is it connected to Christ, Mary, angels, saints, Scripture, or the Church?",
  "Is the seller trustworthy?",
  "Is the item respectful and not gimmicky?",
  "Does it avoid occult or New Age symbolism?",
  "Can it be blessed by a priest or deacon?",
  "Am I buying it for devotion, not superstition?",
] as const;

export const familyIdeas = [
  "Guardian angel prayer card",
  "Child's rosary",
  "Family crucifix",
  "Holy water blessing before school",
  "Saint card for each child",
  "Advent wreath",
  "Nativity scene",
  "Baptismal candle display",
  "First Communion rosary",
  "Confirmation saint medal",
] as const;

export const beginnerPath = [
  "Start with the crucifix.",
  "Learn the Sign of the Cross.",
  "Pray with a simple prayer card.",
  "Learn the Rosary slowly.",
  "Ask a Catholic parish about blessings.",
  "Learn the difference between sacraments and sacramentals.",
] as const;

export const relatedSacramentalTools = [
  { title: "Sacraments", description: "Learn the seven sacraments and how Christ gives grace through the Church.", href: "/sacraments", cta: "Open Sacraments" },
  { title: "Prayer", description: "Build a daily rhythm of Catholic prayer and devotion.", href: "/pray", cta: "Begin in Prayer" },
  { title: "Rosary", description: "Pray the mysteries of Christ with Mary.", href: "/rosary", cta: "Pray the Rosary" },
  { title: "Devotions", description: "Explore Catholic devotions that lead the heart to Christ.", href: "/devotions", cta: "Explore Devotions" },
  { title: "The Holy Mass", description: "Keep sacramentals ordered to worship and sacramental life.", href: "/mass", cta: "Understand the Mass" },
  { title: "Confession", description: "Stay close to repentance and mercy, not superstition.", href: "/confession", cta: "Prepare for Confession" },
  { title: "Eucharistic Adoration", description: "Let sacramentals support, not replace, adoration of Christ.", href: "/adoration", cta: "Enter Adoration" },
  { title: "Saints", description: "Learn about saint medals, relics, and heavenly intercession.", href: "/saints", cta: "Explore the Saints" },
  { title: "Relics", description: "Learn how relics are venerated reverently and never treated as magic or merchandise.", href: "/relics", cta: "Learn About Relics" },
  { title: "Angels", description: "Approach angel medals and prayers with faith and peace.", href: "/angels", cta: "Learn About Angels" },
  { title: "Family and Domestic Church", description: "Make the home a place of prayer and blessing.", href: "/family", cta: "Build the Domestic Church" },
  { title: "Liturgical Seasons", description: "Use sacramentals through Advent, Lent, Easter, and the Church year.", href: "/liturgical-living/seasons", cta: "Explore Seasons" },
  { title: "Epiphany House Blessing", description: "Pray for Christ’s peace and light over the home with a simple family Epiphany blessing plan.", href: "/liturgical-living/christmas/epiphany/house-blessing", cta: "Open House Blessing" },
  { title: "Catechism", description: "Read what the Church teaches about sacramentals and piety.", href: "/catechism", cta: "Read the Catechism" },
  { title: "Explore the Catholic Faith", description: "A gentle starting point if sacramentals feel unfamiliar.", href: "/explore", cta: "Start Exploring" },
  { title: "Media Library", description: "Find Catholic teaching videos and prayer resources.", href: "/media", cta: "Open Media Library" },
] as const;

export const sacramentalFinderOptions: Array<{ need: SacramentalFinderNeed; label: string }> = [
  { need: "daily-prayer", label: "I want to pray more daily" },
  { need: "remember-baptism", label: "I want to remember my Baptism" },
  { need: "pray-with-mary", label: "I want to pray with Mary" },
  { need: "spiritual-protection", label: "I want spiritual protection" },
  { need: "prayerful-home", label: "I want my home to feel prayerful" },
  { need: "teach-children", label: "I want to teach children" },
  { need: "reverence-for-cross", label: "I want to grow in reverence for the Cross" },
  { need: "liturgical-year", label: "I want to live the liturgical year" },
  { need: "new-to-catholicism", label: "I am new to Catholicism" },
] as const;

export const sacramentalFinderRecommendations: SacramentalFinderRecommendation[] = [
  {
    need: "daily-prayer",
    sacramentalId: "sacramental-prayer-cards",
    explanation: "A prayer card or rosary in hand can gently anchor a daily rhythm and help you begin without overcomplicating prayer.",
    prayer: "Lord, make me faithful in small daily prayer.",
    relatedLinks: [{ label: "Pray", href: "/pray" }, { label: "Rosary", href: "/rosary" }],
    purchaseGuidance: "Choose something simple that you will actually keep near you and use often.",
  },
  {
    need: "remember-baptism",
    sacramentalId: "sacramental-holy-water",
    explanation: "Holy water is a direct reminder of Baptism and helps you begin or end the day as a child of God.",
    prayer: "Lord, help me live as Your child today.",
    relatedLinks: [{ label: "Baptism", href: "/sacraments/baptism" }, { label: "Pray", href: "/pray" }],
    purchaseGuidance: "Ask your parish how to obtain holy water reverently, and keep a suitable bottle at home.",
  },
  {
    need: "pray-with-mary",
    sacramentalId: "sacramental-rosary",
    explanation: "The Rosary keeps prayer centered on Christ while allowing Mary to teach you faithful attention to the mysteries of salvation.",
    prayer: "Mary, teach me to keep my eyes on Jesus.",
    relatedLinks: [{ label: "Rosary", href: "/rosary" }, { label: "Devotions", href: "/devotions" }],
    purchaseGuidance: "Choose a rosary that is sturdy and reverent rather than flashy or gimmicky.",
  },
  {
    need: "spiritual-protection",
    sacramentalId: "sacramental-medals",
    explanation: "A blessed medal or crucifix can be a humble sign of trust in Christ's protection when used with prayer, confession, and faith.",
    prayer: "Jesus, guard me and keep my heart close to You.",
    relatedLinks: [{ label: "Confession", href: "/confession" }, { label: "Angels", href: "/angels" }],
    purchaseGuidance: "Choose a medal with clear Catholic meaning, and avoid fear-based marketing.",
  },
  {
    need: "prayerful-home",
    sacramentalId: "sacramental-sacred-images",
    explanation: "A crucifix, sacred image, candle, and holy water can quietly help a home become a place of recollection and family prayer.",
    prayer: "Lord, make this home a place of peace, prayer, and love.",
    relatedLinks: [{ label: "Family", href: "/family" }, { label: "Liturgical Seasons", href: "/liturgical-living/seasons" }],
    purchaseGuidance: "Start small with one or two reverent items that suit a real prayer corner.",
  },
  {
    need: "teach-children",
    sacramentalId: "sacramental-prayer-cards",
    explanation: "Children often respond well to simple, concrete signs like a prayer card, a child-sized rosary, or holy water at bedtime.",
    prayer: "Lord, teach our children to love You simply and joyfully.",
    relatedLinks: [{ label: "Family", href: "/family" }, { label: "Angels", href: "/angels" }],
    purchaseGuidance: "Choose sturdy, reverent items and explain them in a calm, Christ-centered way.",
  },
  {
    need: "reverence-for-cross",
    sacramentalId: "sacramental-crucifix",
    explanation: "A crucifix keeps the saving love of Christ before your eyes and helps suffering, repentance, and trust stay connected to Him.",
    prayer: "Jesus Crucified, be my hope and keep me near Your mercy.",
    relatedLinks: [{ label: "Mass", href: "/mass" }, { label: "Confession", href: "/confession" }],
    purchaseGuidance: "Choose a crucifix you can place where you will actually pray before it.",
  },
  {
    need: "liturgical-year",
    sacramentalId: "sacramental-palms-ashes",
    explanation: "Seasonal sacramentals help the home receive the Church year in a simple, visible way.",
    prayer: "Lord, let the rhythm of Your Church shape my life.",
    relatedLinks: [{ label: "Liturgical Seasons", href: "/liturgical-living/seasons" }, { label: "Family", href: "/family" }],
    purchaseGuidance: "Use parish sacramentals and seasonal home practices reverently, not decoratively only.",
  },
  {
    need: "new-to-catholicism",
    sacramentalId: "sacramental-crucifix",
    explanation: "The crucifix is often the clearest first sacramental because it centers everything on Jesus Christ and His saving love.",
    prayer: "Jesus, help me understand Your love and draw me closer to You.",
    relatedLinks: [{ label: "Explore", href: "/explore" }, { label: "Sacraments", href: "/sacraments" }],
    purchaseGuidance: "Start simply. One reverent crucifix or prayer card is enough to begin.",
  },
];
