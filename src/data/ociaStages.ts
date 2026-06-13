import type { OciaStage } from "@/types/ocia";

export const ociaStages: OciaStage[] = [
  {
    id: "ocia-inquiry",
    title: "Inquiry",
    slug: "inquiry",
    summary:
      "A time to ask questions, meet the parish, hear the Gospel, and begin exploring Catholic faith.",
    whatHappens: [
      "Initial conversations with parish staff or an OCIA team.",
      "Opportunities to ask honest questions without pressure.",
      "A first look at Catholic prayer, worship, and basic beliefs.",
    ],
    discernmentQuestions: [
      "Who is Jesus?",
      "What does the Catholic Church believe?",
      "What draws me to the Catholic faith?",
      "What questions or concerns do I have?",
    ],
    prayerFocus: "Come, Holy Spirit. Lead me in truth.",
    sortOrder: 10,
  },
  {
    id: "ocia-catechumenate",
    title: "Catechumenate or formation",
    slug: "catechumenate",
    summary:
      "A deeper period of learning, prayer, Scripture, Catholic teaching, parish life, and conversion.",
    whatHappens: [
      "Steady formation in the Creed, Scripture, sacraments, prayer, and moral life.",
      "Participation in parish life and a growing rhythm of prayer.",
      "Continued discernment about Catholic faith and discipleship.",
    ],
    discernmentQuestions: [
      "Am I growing in prayer and trust?",
      "How is Catholic teaching becoming clearer to me?",
      "What parts of parish life feel most important right now?",
    ],
    prayerFocus: "Lord Jesus, teach me to know You and follow You more faithfully.",
    sortOrder: 20,
  },
  {
    id: "ocia-election",
    title: "Rite of Election / Call to Continuing Conversion",
    slug: "rite-of-election",
    summary:
      "A liturgical step, often at the diocesan level, marking deeper commitment for those preparing for initiation.",
    whatHappens: [
      "A public liturgical moment with the Church's prayer and support.",
      "Recognition that the journey is moving toward sacramental initiation or full communion.",
      "Different participation depending on baptismal status and parish guidance.",
    ],
    discernmentQuestions: [
      "Am I ready to keep following where Christ is leading?",
      "What does deeper commitment look like for me?",
    ],
    prayerFocus: "Holy Spirit, give me courage, humility, and peace.",
    sortOrder: 30,
  },
  {
    id: "ocia-purification",
    title: "Purification and Enlightenment",
    slug: "purification-and-enlightenment",
    summary:
      "A more prayerful and reflective period of preparation, often during Lent, focused on conversion, repentance, and readiness.",
    whatHappens: [
      "More focused preparation through prayer, repentance, and reflection.",
      "A deeper turning toward Christ and the sacraments.",
      "Parish rites and spiritual support that vary by situation.",
    ],
    discernmentQuestions: [
      "What still needs healing or surrender in my life?",
      "How is Christ preparing me for deeper communion?",
    ],
    prayerFocus: "Create in me a clean heart, O God, and renew a right spirit within me.",
    sortOrder: 40,
  },
  {
    id: "ocia-initiation",
    title: "Sacraments of Initiation",
    slug: "sacraments-of-initiation",
    summary:
      "Many adults receive sacraments at the Easter Vigil, especially Baptism, Confirmation, and Eucharist for the unbaptized.",
    whatHappens: [
      "Celebration of Baptism, Confirmation, and Eucharist where appropriate.",
      "Reception into full communion for baptized Christians, depending on parish and diocesan guidance.",
      "A visible step into the sacramental life of the Church.",
    ],
    discernmentQuestions: [
      "How is Christ drawing me into His Church and sacramental life?",
      "What does faithful participation look like after this step?",
    ],
    prayerFocus: "Lord Jesus, keep me close to You in Your Church and sacraments.",
    sortOrder: 50,
  },
  {
    id: "ocia-mystagogy",
    title: "Mystagogy and ongoing discipleship",
    slug: "mystagogy",
    summary:
      "A time after initiation to reflect on the sacraments received, grow in parish life, deepen prayer, and live as a disciple.",
    whatHappens: [
      "Reflection on the sacraments and on life in the Church.",
      "Continued accompaniment into prayer, parish life, and service.",
      "A growing sense that Christian initiation leads into lifelong discipleship.",
    ],
    discernmentQuestions: [
      "How is God inviting me to live the grace I have received?",
      "What next steps will help me stay rooted in the Church?",
    ],
    prayerFocus: "Lord, help me remain faithful and keep growing in Your grace.",
    sortOrder: 60,
  },
];
