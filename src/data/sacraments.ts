import type { Sacrament, SacramentGroup } from "@/types/sacraments";

const originalSummaryNote =
  "Original Daily Oratory summary prepared from Catholic sacramental theology, Catechism references, and pastoral practice summaries.";

export const sacramentGroups: SacramentGroup[] = [
  {
    id: "group-initiation",
    title: "Sacraments of Initiation",
    slug: "initiation",
    description:
      "These sacraments lay the foundation of Christian life and bring us into fuller communion with Christ and the Church.",
    sacramentIds: ["baptism", "confirmation", "eucharist"],
    sortOrder: 10,
  },
  {
    id: "group-healing",
    title: "Sacraments of Healing",
    slug: "healing",
    description:
      "These sacraments bring Christ's mercy, forgiveness, strengthening, and healing to the faithful.",
    sacramentIds: ["reconciliation", "anointing"],
    sortOrder: 20,
  },
  {
    id: "group-service-communion",
    title: "Sacraments at the Service of Communion and Mission",
    slug: "service-communion",
    description:
      "These sacraments configure life toward service, communion, family, ministry, and the building up of the Church.",
    sacramentIds: ["matrimony", "holy-orders"],
    sortOrder: 30,
  },
];

export const sacraments: Sacrament[] = [
  {
    id: "baptism",
    name: "Baptism",
    slug: "baptism",
    formalName: "Baptism",
    aliases: ["Holy Baptism"],
    group: "initiation",
    shortDescription: "The doorway to Christian life and the beginning of life in Christ.",
    longDescription:
      "Baptism joins a person to the death and Resurrection of Jesus Christ, forgives sin, gives new birth as a child of God, and incorporates the baptized into the Church.",
    graceFocus: "New birth in Christ, forgiveness of sin, and adoption as a child of God.",
    visibleSign: "Water poured or immersion, together with the Trinitarian formula.",
    biblicalRoots: ["Matthew 28:19", "John 3:5", "Acts 2:38", "Romans 6:3-4", "1 Peter 3:21"],
    catechismReferences: ["CCC 1213-1284", "CCC 1250-1255", "CCC 1272-1274"],
    whoReceives: ["Infants, children, and adults who have not been baptized."],
    ordinaryMinister: "Usually a bishop, priest, or deacon; in necessity, any person with proper intention can baptize.",
    howCelebrated: [
      "The Church proclaims God's word, invokes the saints, blesses water, and baptizes in the name of the Father, and of the Son, and of the Holy Spirit.",
      "The rite also includes anointing, a white garment, a candle, and the welcome of the Church.",
    ],
    howToPrepare: [
      "Contact the parish early about meetings, documents, and scheduling.",
      "Pray with the baptismal promises and think about life after the celebration.",
      "Choose godparents or sponsors according to parish guidance.",
    ],
    familyGuidance: [
      "Parents should treat Baptism as the beginning of Catholic life, not only a family event.",
      "A baptism anniversary prayer can help the home remember this grace each year.",
    ],
    sponsorGuidance: [
      "Godparents should pray for the baptized and remain present after the day itself.",
      "Parish requirements for godparents vary and should be confirmed locally.",
    ],
    commonQuestions: [
      {
        question: "Why does the Church baptize infants?",
        answer:
          "Because Baptism is a gift of grace and new life, not a reward for personal maturity. Parents and the Church promise to raise the child in the faith.",
      },
      {
        question: "What if an adult is preparing for Baptism?",
        answer:
          "Adults usually prepare through parish OCIA, where prayer, catechesis, discernment, and the sacraments of initiation are approached with the Church.",
      },
    ],
    commonMisunderstandings: [
      "Baptism is not only a naming ceremony or family custom.",
      "Baptism is not magic; it begins a life of faith, worship, and conversion.",
      "Daily Oratory cannot determine sacramental validity or parish readiness.",
    ],
    prayers: [
      {
        id: "baptism-prayer-family",
        title: "Prayer for Parents and Godparents",
        body:
          "Lord Jesus Christ, prepare this family to receive the grace of Baptism with faith, gratitude, and lasting fidelity. Help parents and godparents teach by prayer, example, and love. Amen.",
        sourceNote: "Original Daily Oratory text.",
      },
    ],
    trustedResourceIds: ["resource-general-usccb", "resource-general-catechism", "resource-baptism-usccb", "resource-baptism-catechism"],
    relatedSacramentIds: ["confirmation", "eucharist"],
    relatedDailyOratoryLinks: [
      { label: "OCIA", href: "/sacraments/ocia" },
      { label: "Sponsor and Godparent Guide", href: "/sacraments/sponsor-godparent" },
      { label: "Rule of Life", href: "/rule-of-life" },
      { label: "Prayer Intentions", href: "/prayer-intentions" },
    ],
    preparationCompanionSlug: "baptism",
    featured: true,
    sortOrder: 10,
    sourceNotes: originalSummaryNote,
  },
  {
    id: "confirmation",
    name: "Confirmation",
    slug: "confirmation",
    formalName: "Confirmation",
    aliases: ["Sacrament of Confirmation"],
    group: "initiation",
    shortDescription: "Strengthened by the Holy Spirit for witness, mission, and mature discipleship.",
    longDescription:
      "Confirmation seals the baptized with the gift of the Holy Spirit, strengthens baptismal grace, and equips the faithful for witness, service, and steadfast Catholic life.",
    graceFocus: "The seal and strengthening of the Holy Spirit for witness and mission.",
    visibleSign: "Laying on of hands and anointing with sacred chrism.",
    biblicalRoots: ["Acts 8:14-17", "Acts 19:5-6", "John 20:22"],
    catechismReferences: ["CCC 1285-1321", "CCC 1302-1305"],
    whoReceives: ["Baptized Catholics prepared according to parish or diocesan norms."],
    ordinaryMinister: "Ordinarily a bishop; priests may confirm in certain circumstances according to Church law.",
    howCelebrated: [
      "Candidates renew baptismal promises and pray for the outpouring of the Holy Spirit.",
      "The minister lays hands on them and anoints each one with sacred chrism.",
    ],
    howToPrepare: [
      "Stay close to parish formation, Sunday Mass, and prayer.",
      "Choose a sponsor according to parish norms.",
      "Ask how saint study, service, and diocesan expectations are handled locally.",
    ],
    familyGuidance: [
      "Parents can support the candidate by prayer, example, and steady encouragement rather than pressure.",
    ],
    sponsorGuidance: [
      "Sponsors should pray with the candidate and model a mature Catholic life.",
    ],
    commonQuestions: [
      {
        question: "Does Confirmation mean Catholic life is finished?",
        answer:
          "No. Confirmation strengthens baptismal grace for lifelong discipleship, witness, service, and deeper participation in the Church.",
      },
    ],
    commonMisunderstandings: [
      "Confirmation is not graduation from religion class.",
      "The sacrament is about the Holy Spirit's grace, not a social milestone.",
    ],
    prayers: [
      {
        id: "confirmation-prayer-spirit",
        title: "Prayer to the Holy Spirit",
        body:
          "Holy Spirit, strengthen this heart in faith, deepen love for Christ, and make this life courageous in witness and charity. Amen.",
        sourceNote: "Original Daily Oratory text.",
      },
    ],
    trustedResourceIds: ["resource-general-usccb", "resource-general-catechism", "resource-confirmation-usccb", "resource-confirmation-catechism"],
    relatedSacramentIds: ["baptism", "eucharist"],
    relatedDailyOratoryLinks: [
      { label: "Saint Companion Finder", href: "/saints/finder" },
      { label: "Pathways", href: "/pathways" },
      { label: "Rule of Life", href: "/rule-of-life" },
      { label: "Devotions", href: "/devotions" },
      { label: "Church Fathers", href: "/church-fathers" },
    ],
    preparationCompanionSlug: "confirmation",
    featured: true,
    sortOrder: 20,
    sourceNotes: originalSummaryNote,
  },
  {
    id: "eucharist",
    name: "Eucharist",
    slug: "eucharist",
    formalName: "The Eucharist",
    aliases: ["Holy Communion", "Blessed Sacrament"],
    group: "initiation",
    shortDescription: "The source and summit of Christian life.",
    longDescription:
      "In the Eucharist, Christ gives His Body and Blood as true food and drink. The Church receives the sacramental memorial of His sacrifice and is nourished in communion with Him.",
    graceFocus: "Union with Christ in Holy Communion and deepening participation in His sacrifice and life.",
    visibleSign: "Bread and wine consecrated at Mass.",
    biblicalRoots: ["Matthew 26:26-28", "John 6:51-58", "Luke 22:19-20", "1 Corinthians 10:16-17", "1 Corinthians 11:23-29"],
    catechismReferences: ["CCC 1322-1419", "CCC 1373-1381", "CCC 1382-1397"],
    whoReceives: ["Baptized Catholics properly disposed and prepared according to the Church's norms."],
    ordinaryMinister: "A validly ordained priest or bishop consecrates the Eucharist; Communion is ordinarily distributed by clergy and, where permitted, designated ministers.",
    howCelebrated: [
      "The Eucharist is celebrated within the Mass as sacrifice and sacred banquet.",
      "The faithful prepare to receive Holy Communion with reverence, faith, and thanksgiving.",
    ],
    howToPrepare: [
      "Keep Sunday Mass central and learn to recognize Christ's Real Presence.",
      "Ask your parish how First Communion preparation is structured.",
      "Prepare for Communion with prayer, reverence, and, when needed, confession.",
    ],
    familyGuidance: [
      "Families can practice thanksgiving after Mass and keep Eucharistic reverence visible at home.",
    ],
    sponsorGuidance: [
      "Sponsors and catechists can help candidates connect First Communion to lifelong love of the Mass.",
    ],
    commonQuestions: [
      {
        question: "Why does the Church call the Eucharist the source and summit?",
        answer:
          "Because the Eucharist both flows from Christ's saving work and feeds the whole Christian life, gathering worship, sacrifice, communion, and mission into one sacrament.",
      },
      {
        question: "What is First Communion?",
        answer:
          "First Communion is the first time a person receives Holy Communion after appropriate preparation and according to the Church's sacramental order.",
      },
    ],
    commonMisunderstandings: [
      "The Eucharist is not only a symbol of fellowship.",
      "Receiving Communion is not casual; it calls for faith, reverence, and proper disposition.",
    ],
    prayers: [
      {
        id: "eucharist-prayer-thanksgiving",
        title: "Prayer Before Communion",
        body:
          "Lord Jesus, increase my faith, purify my heart, and teach me to receive You with reverence, gratitude, and love. Amen.",
        sourceNote: "Original Daily Oratory text.",
      },
      {
        id: "eucharist-prayer-after",
        title: "Thanksgiving After Communion",
        body:
          "Jesus, remain with me and let this Communion bear fruit in charity, humility, and fidelity to Your Church. Amen.",
        sourceNote: "Original Daily Oratory text.",
      },
    ],
    trustedResourceIds: ["resource-general-usccb", "resource-general-catechism", "resource-eucharist-usccb", "resource-eucharist-catechism"],
    relatedSacramentIds: ["baptism", "confirmation", "reconciliation"],
    relatedDailyOratoryLinks: [
      { label: "Adoration", href: "/adoration" },
      { label: "Mass", href: "/mass" },
      { label: "Eucharistic Adoration", href: "/devotions/eucharistic-adoration" },
      { label: "Sacred Heart of Jesus", href: "/devotions/sacred-heart-of-jesus" },
      { label: "Church Fathers", href: "/church-fathers" },
      { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
    ],
    preparationCompanionSlug: "first-communion",
    featured: true,
    sortOrder: 30,
    sourceNotes: originalSummaryNote,
  },
  {
    id: "reconciliation",
    name: "Reconciliation",
    slug: "reconciliation",
    formalName: "Sacrament of Reconciliation",
    aliases: ["Confession", "Penance"],
    group: "healing",
    shortDescription: "Christ's mercy restores, forgives, and reconciles us to God and the Church.",
    longDescription:
      "In Reconciliation, Christ forgives sins committed after Baptism, restores the penitent, and strengthens the soul for renewed Christian life.",
    graceFocus: "Forgiveness, reconciliation, healing, and restored communion with God and the Church.",
    visibleSign: "Confession of sins, absolution, and the assigned penance.",
    biblicalRoots: ["John 20:22-23", "James 5:16", "2 Corinthians 5:18-20", "Luke 15:11-32"],
    catechismReferences: ["CCC 1422-1498", "CCC 1450-1460", "CCC 1485-1498"],
    whoReceives: ["Baptized Catholics seeking Christ's mercy after sin."],
    ordinaryMinister: "A priest with faculties to hear confessions and absolve.",
    howCelebrated: [
      "The penitent examines conscience, confesses sins, receives absolution, and completes the penance.",
      "The sacrament may be received regularly as part of ongoing conversion and healing.",
    ],
    howToPrepare: [
      "Use an examination of conscience and ask for contrition and honesty.",
      "If returning after a long time, contact a parish or priest without embarrassment.",
      "First Reconciliation preparation should follow parish catechesis and priestly guidance.",
    ],
    familyGuidance: [
      "Parents can help children approach confession with trust rather than fear.",
      "A monthly confession rhythm can help a family grow in honesty and mercy.",
    ],
    sponsorGuidance: [
      "Sponsors can encourage candidates by humility, example, and prayer rather than pressure.",
    ],
    commonQuestions: [
      {
        question: "Why confess to a priest?",
        answer:
          "Because Christ entrusted the ministry of reconciliation to the Church. The priest acts sacramentally in Christ's name and in service of the Church's mercy.",
      },
      {
        question: "What if I have been away a long time?",
        answer:
          "You can still return. A priest can help you begin simply and peacefully without needing a perfect script.",
      },
    ],
    commonMisunderstandings: [
      "Daily Oratory does not determine whether a specific sin is mortal or judge a person's soul.",
      "Reconciliation is not a therapy session or a legal hearing; it is a sacrament of mercy.",
    ],
    prayers: [
      {
        id: "reconciliation-prayer",
        title: "Prayer Before Confession",
        body:
          "Merciful Jesus, give me honesty, sorrow for sin, courage to confess, and trust in Your forgiveness. Amen.",
        sourceNote: "Original Daily Oratory text.",
      },
    ],
    trustedResourceIds: ["resource-general-usccb", "resource-general-catechism", "resource-reconciliation-usccb", "resource-reconciliation-catechism"],
    relatedSacramentIds: ["eucharist", "anointing"],
    relatedDailyOratoryLinks: [
      { label: "Confession Guide", href: "/confession" },
      { label: "Guided Examination", href: "/confession/examination" },
      { label: "Virtue Tracker", href: "/virtue-tracker" },
      { label: "Indulgences", href: "/indulgences" },
      { label: "Rule of Life", href: "/rule-of-life" },
    ],
    preparationCompanionSlug: "reconciliation",
    featured: true,
    sortOrder: 40,
    sourceNotes: originalSummaryNote,
  },
  {
    id: "anointing",
    name: "Anointing of the Sick",
    slug: "anointing",
    formalName: "Anointing of the Sick",
    aliases: ["Sacrament of the Sick"],
    group: "healing",
    shortDescription: "Christ strengthens, comforts, and heals the sick through the prayer of the Church.",
    longDescription:
      "Anointing of the Sick unites suffering to Christ, gives strength and peace, forgives sins when possible within the sacramental context, and prepares the faithful for serious illness, frailty, or danger.",
    graceFocus: "Strength, peace, healing according to God's will, and union with Christ in suffering.",
    visibleSign: "Laying on of hands, prayer, and anointing with the Oil of the Sick.",
    biblicalRoots: ["Mark 6:13", "James 5:14-15"],
    catechismReferences: ["CCC 1499-1532"],
    whoReceives: ["Catholics facing serious illness, surgery, age-related frailty, or similar grave need."],
    ordinaryMinister: "A bishop or priest.",
    howCelebrated: [
      "The priest lays hands on the sick person, prays over them, and anoints with blessed oil.",
      "When possible, the Church also provides confession, Communion, and Viaticum as part of pastoral care.",
    ],
    howToPrepare: [
      "Call a priest, parish, or hospital chaplain early rather than waiting until panic or final crisis.",
      "In an immediate medical emergency, call emergency services first.",
      "Ask locally about confession, Communion, and practical pastoral care for the sick person and family.",
    ],
    familyGuidance: [
      "Family members can prepare a calm prayerful space and remain present with hope and dignity.",
    ],
    sponsorGuidance: [],
    commonQuestions: [
      {
        question: "Is Anointing only for the dying?",
        answer:
          "No. The sacrament is for the seriously ill, those facing major surgery or frailty, and those in significant need of the Church's strengthening prayer.",
      },
      {
        question: "What is the difference between Anointing and last rites?",
        answer:
          "Anointing is one sacrament of healing. What people call last rites may also include confession, Communion as Viaticum, and final pastoral prayers.",
      },
    ],
    commonMisunderstandings: [
      "Daily Oratory does not provide medical advice or emergency triage.",
      "This sacrament is not only a sign that death is certain; it is Christ's strengthening care in serious need.",
    ],
    prayers: [
      {
        id: "anointing-prayer",
        title: "Prayer for the Sick",
        body:
          "Jesus, be near in suffering, bring peace to this room, guide caregivers, and hold this person in Your merciful love. Amen.",
        sourceNote: "Original Daily Oratory text.",
      },
    ],
    trustedResourceIds: ["resource-general-usccb", "resource-general-catechism", "resource-anointing-usccb", "resource-anointing-catechism"],
    relatedSacramentIds: ["reconciliation", "eucharist"],
    relatedDailyOratoryLinks: [
      { label: "Ask for Prayer", href: "/ask-for-prayer/submit" },
      { label: "Prayer Intentions", href: "/prayer-intentions" },
      { label: "Adoration", href: "/adoration" },
      { label: "Divine Mercy Chaplet", href: "/devotions/divine-mercy-chaplet" },
      { label: "Holy Souls in Purgatory", href: "/devotions/holy-souls-in-purgatory" },
    ],
    preparationCompanionSlug: "anointing",
    featured: true,
    sortOrder: 50,
    sourceNotes: originalSummaryNote,
  },
  {
    id: "matrimony",
    name: "Matrimony",
    slug: "matrimony",
    formalName: "Matrimony",
    aliases: ["Marriage", "Sacrament of Matrimony"],
    group: "service-communion",
    shortDescription: "A covenant of faithful, fruitful love ordered toward the good of the spouses and the family.",
    longDescription:
      "Christian Matrimony unites a man and a woman in a covenant of lifelong, faithful, fruitful love and gives grace for the sanctification of marriage and family life.",
    graceFocus: "Grace for faithful covenant love, family life, sacrifice, forgiveness, and holiness in marriage.",
    visibleSign: "The consent of the spouses, received by the Church and blessed in the sacramental celebration.",
    biblicalRoots: ["Genesis 2:24", "Matthew 19:4-6", "John 2:1-11", "Ephesians 5:25-33"],
    catechismReferences: ["CCC 1601-1666", "CCC 1638-1642", "CCC 1659-1666"],
    whoReceives: ["A baptized man and woman who are free to marry and properly prepared according to the Church."],
    ordinaryMinister: "In the Latin Church, the spouses minister the sacrament to one another; clergy receive the vows in the name of the Church.",
    howCelebrated: [
      "The spouses freely exchange consent before the Church.",
      "The rite may take place within Mass or outside Mass according to pastoral circumstances.",
    ],
    howToPrepare: [
      "Contact the parish early, before making assumptions about timelines or readiness.",
      "Bring questions about prior marriages, documents, freedom to marry, or diocesan requirements to the parish.",
      "Pray together and speak honestly about faith, family, forgiveness, finances, and children.",
    ],
    familyGuidance: [
      "Families can support engaged couples by prayer, steadiness, and respect for the sacramental focus of the wedding.",
    ],
    sponsorGuidance: [],
    commonQuestions: [
      {
        question: "Why should engaged couples contact the parish early?",
        answer:
          "Because timelines, paperwork, preparation programs, and difficult canonical questions often need time and direct parish guidance.",
      },
    ],
    commonMisunderstandings: [
      "Daily Oratory does not provide annulment, dispensation, canonical eligibility, or legal marriage advice.",
      "A Catholic wedding is not only an event plan; it is a sacramental covenant.",
    ],
    prayers: [
      {
        id: "matrimony-prayer",
        title: "Prayer for an Engaged Couple",
        body:
          "Lord Jesus, teach us patient love, honest speech, faithful sacrifice, and joy rooted in You. Prepare us to receive Matrimony with reverence and peace. Amen.",
        sourceNote: "Original Daily Oratory text.",
      },
    ],
    trustedResourceIds: ["resource-general-usccb", "resource-general-catechism", "resource-matrimony-usccb", "resource-matrimony-catechism"],
    relatedSacramentIds: ["baptism", "eucharist"],
    relatedDailyOratoryLinks: [
      { label: "Rule of Life", href: "/rule-of-life" },
      { label: "Holy Rosary", href: "/devotions/holy-rosary" },
      { label: "Saint Companion Finder", href: "/saints/finder" },
      { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
      { label: "Prayer Intentions", href: "/prayer-intentions" },
    ],
    preparationCompanionSlug: "marriage",
    featured: true,
    sortOrder: 60,
    sourceNotes: originalSummaryNote,
  },
  {
    id: "holy-orders",
    name: "Holy Orders",
    slug: "holy-orders",
    formalName: "Holy Orders",
    aliases: ["Ordination"],
    group: "service-communion",
    shortDescription: "Christ serves His Church through bishops, priests, and deacons.",
    longDescription:
      "Holy Orders configures men sacramentally for service in the Church as bishops, priests, or deacons through preaching, sanctifying, and shepherding according to Christ's mission.",
    graceFocus: "Sacramental configuration for ecclesial service, preaching, worship, and pastoral charity.",
    visibleSign: "Laying on of hands and the consecratory prayer of ordination.",
    biblicalRoots: ["Luke 22:19", "Acts 6:1-6", "1 Timothy 4:14", "2 Timothy 1:6", "Titus 1:5"],
    catechismReferences: ["CCC 1536-1600", "CCC 1554-1571", "CCC 1581-1589"],
    whoReceives: ["Men called by God and admitted by the Church through proper discernment and formation."],
    ordinaryMinister: "A bishop.",
    howCelebrated: [
      "The bishop lays hands on the ordinand and prays the consecratory prayer of the Church.",
      "The rite differs for deacons, priests, and bishops, while remaining one sacrament.",
    ],
    howToPrepare: [
      "Pray steadily, receive the sacraments faithfully, and seek wise spiritual direction.",
      "Speak with a parish priest and, when appropriate, contact the diocesan vocation director.",
      "Do not try to decide a vocation in isolation.",
    ],
    familyGuidance: [
      "Families can support discernment with prayer, freedom, and trust rather than pressure.",
    ],
    sponsorGuidance: [],
    commonQuestions: [
      {
        question: "Can Daily Oratory tell me if I have a vocation?",
        answer:
          "No. Discernment belongs to prayer, spiritual direction, and the Church's vocational process with proper human and ecclesial guidance.",
      },
    ],
    commonMisunderstandings: [
      "Holy Orders is not a private self-decision.",
      "Daily Oratory does not determine suitability, admission, or canonical status for ordination.",
    ],
    prayers: [
      {
        id: "orders-prayer",
        title: "Prayer for Vocations",
        body:
          "Lord of the harvest, raise up holy bishops, priests, and deacons for Your Church. Give discerners freedom, courage, and humble love for Your will. Amen.",
        sourceNote: "Original Daily Oratory text.",
      },
    ],
    trustedResourceIds: ["resource-general-usccb", "resource-general-catechism", "resource-orders-usccb", "resource-orders-catechism"],
    relatedSacramentIds: ["eucharist", "reconciliation"],
    relatedDailyOratoryLinks: [
      { label: "Rule of Life", href: "/rule-of-life" },
      { label: "Adoration", href: "/adoration" },
      { label: "Saint Companion Finder", href: "/saints/finder" },
      { label: "Liturgy of the Hours", href: "/devotions/liturgy-of-the-hours" },
      { label: "Church Fathers", href: "/church-fathers" },
    ],
    preparationCompanionSlug: "holy-orders",
    featured: true,
    sortOrder: 70,
    sourceNotes: originalSummaryNote,
  },
];
