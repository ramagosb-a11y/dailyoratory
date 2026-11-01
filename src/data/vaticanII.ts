// Content revision 2: owner-supplied article with the approved historical qualifications.
export const vaticanIISources = {
  liturgy: {
    title: "Sacrosanctum Concilium",
    subtitle: "The Council’s Constitution on the Sacred Liturgy",
    reading: "Begin with §§14, 21–24, 30, 36 and 47–56.",
    url: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_en.html",
    publisher: "The Holy See · 1963",
  },
  missal: {
    title: "Missale Romanum",
    subtitle: "Paul VI’s apostolic constitution on the revised Roman Missal",
    reading: "Read the explanation of the reform, Eucharistic Prayers and expanded readings.",
    url: "https://www.vatican.va/content/paul-vi/en/apost_constitutions/documents/hf_p-vi_apc_19690403_missale-romanum.html",
    publisher: "The Holy See · 1969",
  },
  revelation: {
    title: "Dei Verbum",
    subtitle: "The Council’s Dogmatic Constitution on Divine Revelation",
    reading: "Read §§21–25 on Scripture in the life of the Church.",
    url: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_en.html",
    publisher: "The Holy See · 1965",
  },
  lectionary: {
    title: "Questions about the Lectionary",
    subtitle: "A practical explanation of the Sunday and weekday reading cycles",
    reading: "Explore Years A, B and C, weekday readings and the selection of Scripture.",
    url: "https://www.usccb.org/faq/questions-about-lectionary",
    publisher: "United States Conference of Catholic Bishops",
  },
  introduction: {
    title: "Introduction to the Lectionary",
    subtitle: "The principles and arrangement of the readings for Mass",
    reading: "See §§64–69, especially the distinction between Sunday, seasonal and weekday cycles. PDF.",
    url: "https://www.liturgyoffice.org.uk/Resources/Rites/Lectionary.pdf",
    publisher: "Liturgy Office · Bishops’ Conference of England and Wales",
  },
  earlier: {
    title: "General Rubrics of the 1962 Roman Missal",
    subtitle: "The earlier Missal’s rules for weekdays and readings",
    reading: "See nos. 298–305, 466–474 and 509–510 for weekday propers, additional lessons and the Last Gospel.",
    url: "https://www.clerus.org/bibliaclerusonline/fr/irt.htm",
    publisher: "Bibliaclerus · Dicastery for the Clergy",
  },
  history: {
    title: "The Council’s concluding decree",
    subtitle: "In Spiritu Sancto · 8 December 1965",
    reading: "Paul VI records the Council’s opening under John XXIII and declares its close.",
    url: "https://www.vatican.va/content/paul-vi/en/apost_letters/documents/hf_p-vi_apl_19651208_in-spiritu-sancto.html",
    publisher: "The Holy See · 1965",
  },
  participation: {
    title: "Mediator Dei",
    subtitle: "Pius XII on the sacred liturgy before the Council",
    reading: "See §§105–108 on the faithful’s participation in the Eucharistic Sacrifice.",
    url: "https://www.vatican.va/content/pius-xii/en/encyclicals/documents/hf_p-xii_enc_20111947_mediator-dei.html",
    publisher: "The Holy See · 1947",
  },
} as const;

export type VaticanIISourceId = keyof typeof vaticanIISources;

export const vaticanIIArticle = {
  title: "Vatican II and the Mass",
  subtitle: "A Richer Encounter with Scripture and the Church’s Prayer",
  introduction: "How the Council’s call to renewal opened a broader encounter with the Word of God and invited Catholics to enter more deeply into the Church’s worship.",
  purpose: [
    "A helpful starting point is the Council’s pastoral goal: helping Catholics enter more deeply into the worship of God through greater understanding and participation. Vatican II called for renewal rooted in the Church’s tradition, with changes carefully evaluated for their spiritual benefit.",
    "The Council established principles for reform. The revised Roman Missal followed under Pope Paul VI in 1969–1970. Understanding the Council and its subsequent implementation as distinct stages helps us read this history with care.",
  ],
  comparisonIntro: "Here, the earlier celebration means the Roman liturgy expressed in the 1962 Missal, commonly called the Traditional Latin Mass. The comparison describes the principal readings and selected ritual features; Scripture was already woven throughout the earlier liturgy’s prayers and chants.",
  comparisonNote: "Special celebrations in the 1962 Missal had additional lessons. The earlier rite also ordinarily included a Last Gospel after the concluding blessing. This comparison of principal readings does not count that concluding proclamation.",
  scripture: [
    "The earlier liturgy already contained Scripture throughout its readings, prayers and chants. The reform greatly expanded the range of biblical passages proclaimed at Mass.",
    "The Sunday cycle emphasizes Matthew in Year A, Mark in Year B, and Luke in Year C. John appears across the cycle, especially during Lent and Easter, and also in Mark’s year.",
    "In Ordinary Time, weekday first readings follow a two-year cycle: Year I in odd-numbered years and Year II in even-numbered years. The weekday Gospel readings repeat annually. Advent, Christmas, Lent and Easter have their own annual arrangements.",
    "The first Sunday reading is usually chosen for its connection with the Gospel. In Ordinary Time, the second reading often follows an apostolic letter over successive weeks. This arrangement can help listeners recognize God’s promises, Christ’s fulfillment and the early Church’s response.",
  ],
  scriptureNote: "Attending Mass for three years does not mean hearing the entire Bible. It does provide a substantially wider encounter with it.",
  language: [
    "The Council permitted wider use of the vernacular—the language people ordinarily speak—particularly in readings, instructions and certain prayers. It also explicitly retained Latin and provided for the faithful to be able to say or sing together in Latin the parts of the Ordinary of the Mass that belong to them.",
    "The extensive vernacular celebrations familiar today developed through subsequent implementation. Hearing the Gospel and prayers in a familiar language can help children, returning Catholics, newcomers and other worshippers grasp their meaning directly.",
  ],
  languageQuestion: "How does understanding the words help us respond to God with greater attention and love?",
  participation: [
    "The Council connected participation with baptism: the faithful belong to Christ and share in the Church’s worship. Participation includes attentive listening, responses, singing and sacred silence, together with an interior offering of oneself to God.",
    "The earlier liturgy also nourished prayer and participation. The Council sought to deepen this life of worship; the reform did not create it. The celebration remains the Eucharistic Sacrifice, and the liturgies of the Word and the Eucharist belong together as one act of worship.",
    "Paul VI explained that historical research had made ancient Christian liturgical sources more accessible. The reform drew upon these resources, restored certain practices and sought to nourish a deeper hunger for God’s Word.",
  ],
  dailyLife: "The intended benefits include greater biblical familiarity, clearer understanding of the prayers, and a stronger connection between Sunday worship and daily discipleship. These are invitations to spiritual growth, rather than results produced automatically by a revised ritual. Dei Verbum places them within a broader invitation for Catholics to have access to Scripture and read it prayerfully.",
  prayer: "Lord, open my heart to Your Word and draw me more deeply into Your sacrifice of love.",
} as const;

export const vaticanIITimeline: ReadonlyArray<{
  date: string; title: string; description: string; stage: "council" | "implementation";
}> = [
  { date: "1962", title: "The Council opens", description: "Pope John XXIII opens the Second Vatican Council on 11 October.", stage: "council" },
  { date: "1963", title: "A constitution on the liturgy", description: "Sacrosanctum Concilium is promulgated on 4 December under Pope Paul VI.", stage: "council" },
  { date: "1965", title: "The Council closes", description: "Paul VI closes the Council on 8 December. Its work now enters a new stage.", stage: "council" },
  { date: "1969–70", title: "The revised Roman Missal", description: "Paul VI promulgates the revised Missal in 1969; the first Latin typical edition appears in 1970.", stage: "implementation" },
];

export const vaticanIIComparison: ReadonlyArray<{
  area: string; earlier: string; reformed: string; source: VaticanIISourceId;
}> = [
  { area: "Principal readings before the homily", earlier: "Generally an Epistle and Gospel, repeated annually on the same Sundays.", reformed: "Sundays normally have three readings within a three-year cycle. Solemnities have three readings, with their own appointed texts.", source: "introduction" },
  { area: "The Old Testament", earlier: "More limited representation among the principal readings.", reformed: "A regular Sunday first reading, usually from the Old Testament; Acts of the Apostles during Easter.", source: "lectionary" },
  { area: "Weekday readings", earlier: "Often reused the preceding Sunday’s readings or those of a saint’s Mass; Lent and certain other days already had proper readings.", reformed: "A much broader selection assigned throughout the year, with a two-year cycle of first readings in Ordinary Time.", source: "earlier" },
  { area: "The Eucharistic Prayer", earlier: "The Roman Canon.", reformed: "The Roman Canon retained as Eucharistic Prayer I, alongside additional Eucharistic Prayers.", source: "missal" },
  { area: "Congregational prayer", earlier: "Participation expressed through the earlier ritual structure.", reformed: "Expanded acclamations and the restored Prayer of the Faithful.", source: "liturgy" },
];

export const vaticanIIDiscussionQuestions = [
  "Which reading or prayer has become more meaningful as you have understood it better?",
  "How does hearing the Old Testament alongside the Gospel deepen your understanding of Jesus?",
  "What helps you participate inwardly during silence?",
  "How can a parish cultivate understanding, reverence, and beautiful worship together?",
  "What would help you carry one message from Sunday’s readings into the week?",
] as const;

export const vaticanIIPhotos = {
  council: {
    src: "/images/vatican-ii/council-005.webp", width: 1453, height: 1453,
    alt: "The altar and apse of Saint Peter’s Basilica prepared for a papal Mass during the Second Vatican Council",
    title: "Before a papal Mass at the Council",
    source: "https://commons.wikimedia.org/wiki/File:Second_Vatican_Council_by_Lothar_Wolleh_005.jpg",
  },
  fathers: {
    src: "/images/vatican-ii/council-006.webp", width: 1328, height: 1328,
    alt: "Council participants leaving Saint Peter’s Basilica during the Second Vatican Council",
    title: "Leaving Saint Peter’s Basilica",
    source: "https://commons.wikimedia.org/wiki/File:Second_Vatican_Council_by_Lothar_Wolleh_006.jpg",
  },
} as const;
