import type { GuideCard } from "@/types/whatShouldIDo";

export const whatShouldIDoCards: GuideCard[] = [
  {
    id: "start-praying",
    title: "I want to start praying.",
    category: "Prayer and Beginnings",
    summary:
      "Begin simply. You do not need a perfect routine. Start with one short prayer, one quiet moment, and one honest word to God.",
    firstStep: "Choose one morning prayer and one evening prayer for the next seven days.",
    links: [
      { label: "Prayer Library", href: "/prayers" },
      { label: "Catholic Life Roadmap", href: "/catholic-life" },
    ],
  },
  {
    id: "return-to-confession",
    title: "I have not been to Confession in years.",
    category: "Prayer and Beginnings",
    summary:
      "You can return. Confession is not a punishment. It is an encounter with the mercy of Jesus Christ.",
    firstStep: "Read the Confession guide, make a simple examination, and contact your parish for Confession times.",
    links: [
      { label: "Confession Guide", href: "/confession" },
      { label: "Sin and Temptation", href: "/sin-and-temptation" },
      { label: "Prayer Library", href: "/prayers" },
    ],
  },
  {
    id: "serious-sin",
    title: "I committed a serious sin.",
    category: "Mercy and Healing",
    summary:
      "Do not despair. Turn toward Jesus now, make a simple act of contrition, and go to Confession as soon as you reasonably can. God’s mercy is greater than your fear.",
    firstStep: "Make an act of contrition today and plan your next Confession.",
    links: [
      { label: "Confession Guide", href: "/confession" },
      { label: "Venial and Mortal Sin", href: "/sin-and-temptation/venial-and-mortal-sin" },
      { label: "Prayer Library", href: "/prayers" },
    ],
  },
  {
    id: "same-sin",
    title: "I keep falling into the same sin.",
    category: "Mercy and Healing",
    summary:
      "A repeated fall does not mean God has abandoned you. You need mercy, practical honesty, grace, and perseverance.",
    firstStep: "Identify one near occasion or trigger and remove it today if you can.",
    links: [
      { label: "Habitual Sin", href: "/sin-and-temptation/habitual-sin" },
      { label: "Resisting Temptation", href: "/sin-and-temptation/resisting-temptation" },
      { label: "Grace", href: "/formation/grace" },
    ],
  },
  {
    id: "afraid-of-death",
    title: "I am afraid of death.",
    category: "Death and Grief",
    summary:
      "Catholic teaching on death is serious, but it is filled with hope. Christ has conquered death and calls us to prepare with faith, not panic.",
    firstStep: "Pray one short prayer of trust and read one page on Christian hope.",
    links: [
      { label: "Death and Christian Hope", href: "/formation/eschatology/death" },
      { label: "Heaven", href: "/formation/eschatology/heaven" },
      { label: "Prayer Library", href: "/prayers" },
    ],
  },
  {
    id: "loved-one-dying",
    title: "A loved one is dying.",
    category: "Death and Grief",
    summary:
      "Keep things simple. Contact a priest early, ask about the sacraments, pray calmly, and trust Jesus.",
    firstStep: "Call the parish, hospital chaplain, or local Catholic priest as soon as possible.",
    links: [
      { label: "Sacramental Emergency", href: "/sacramental-emergency" },
      { label: "Death and Christian Hope", href: "/formation/eschatology/death" },
      { label: "Catholic Burial", href: "/formation/catholic-burial" },
    ],
  },
  {
    id: "loved-one-died",
    title: "A loved one has died.",
    category: "Death and Grief",
    summary:
      "The Church prays for the dead with love and hope. Grief is real, and prayer continues beyond death.",
    firstStep: "Pray for the deceased, contact the parish, and arrange Catholic funeral rites if possible.",
    links: [
      { label: "Catholic Burial", href: "/formation/catholic-burial" },
      { label: "Prayer Library", href: "/prayers" },
      { label: "Purgatory", href: "/formation/eschatology/purgatory" },
    ],
  },
  {
    id: "understand-teaching",
    title: "I want to understand Catholic teaching.",
    category: "Learning the Faith",
    summary:
      "Start with the big picture first. Learn slowly and prayerfully instead of trying to solve everything at once.",
    firstStep: "Choose one topic and read one deeper guide slowly today.",
    links: [
      { label: "Catholic Q&A", href: "/catholic-answers" },
      { label: "Grace", href: "/formation/grace" },
      { label: "Catholic Eschatology", href: "/formation/eschatology" },
    ],
  },
  {
    id: "return-to-mass",
    title: "I want to return to Mass.",
    category: "Learning the Faith",
    summary:
      "The Mass is the heart of Catholic life. Return with humility, reverence, and trust in Jesus.",
    firstStep: "Look up a local Mass time and prepare with one short prayer before you go.",
    links: [
      { label: "Returning to Mass", href: "/returning-to-mass" },
      { label: "Confession Guide", href: "/confession" },
      { label: "The Holy Mass", href: "/mass" },
      { label: "Prayer Library", href: "/prayers" },
    ],
  },
  {
    id: "pray-the-rosary",
    title: "I want to pray the Rosary.",
    category: "Prayer and Beginnings",
    summary:
      "The Rosary helps you contemplate the life of Jesus with Mary. Start with one decade if a full Rosary feels like too much.",
    firstStep: "Pray one decade today and meditate on one mystery.",
    links: [
      { label: "Holy Rosary Guide", href: "/devotions/holy-rosary" },
      { label: "Rosary Prayer Room", href: "/rosary" },
    ],
  },
  {
    id: "anxious-discouraged",
    title: "I am anxious or discouraged.",
    category: "Mercy and Healing",
    summary:
      "Bring your fear to Jesus one step at a time. Prayer can support peace, but it does not replace professional help when needed.",
    firstStep: "Pray one short prayer for peace, breathe, and take the next faithful step.",
    links: [
      { label: "Prayer Library", href: "/prayers" },
      { label: "Catholic Life Roadmap", href: "/catholic-life" },
      { label: "Grace", href: "/formation/grace" },
    ],
  },
  {
    id: "prepare-for-lent",
    title: "I want to prepare for Lent.",
    category: "Liturgical Life",
    summary:
      "Lent is a season of return through prayer, fasting, almsgiving, Confession, and preparation for Easter.",
    firstStep: "Choose one prayer practice, one sacrifice, and one work of mercy.",
    links: [
      { label: "Lent and Fasting Guide", href: "/liturgical-living/lent" },
      { label: "Prayer Library", href: "/prayers" },
      { label: "Sin and Temptation", href: "/sin-and-temptation" },
    ],
  },
  {
    id: "become-catholic",
    title: "I want to become Catholic.",
    category: "Learning the Faith",
    summary:
      "The usual next step is to contact a local Catholic parish and ask about OCIA. You do not need to know everything before you begin.",
    firstStep: "Contact a nearby Catholic parish and ask how to begin.",
    links: [
      { label: "Catholic Life Roadmap", href: "/catholic-life" },
      { label: "Catholic Q&A", href: "/catholic-answers" },
      { label: "Prayer Library", href: "/prayers" },
    ],
  },
  {
    id: "new-to-catholicism",
    title: "I am new to Catholicism.",
    category: "Learning the Faith",
    summary:
      "Welcome. Begin with prayer, the Mass, Scripture, the sacraments, and a simple Catholic overview.",
    firstStep: "Start with one prayer, one Mass, and one formation page.",
    links: [
      { label: "Catholic Life Roadmap", href: "/catholic-life" },
      { label: "Catholic Q&A", href: "/catholic-answers" },
      { label: "Prayer Library", href: "/prayers" },
    ],
  },
  {
    id: "forgive-someone",
    title: "I need help forgiving someone.",
    category: "Mercy and Healing",
    summary:
      "Forgiveness can be hard and may take time. Begin by asking Jesus for the grace to desire forgiveness without pretending harm did not matter.",
    firstStep: "Pray one honest sentence asking Jesus for the grace to forgive.",
    links: [
      { label: "Prayer Library", href: "/prayers" },
      { label: "Grace", href: "/formation/grace" },
      { label: "Sin and Temptation", href: "/sin-and-temptation" },
    ],
  },
  {
    id: "build-catholic-home",
    title: "I want to build a Catholic home.",
    category: "Liturgical Life",
    summary:
      "A Catholic home grows through prayer, Sunday Mass, forgiveness, sacred images, family traditions, and love in ordinary life.",
    firstStep: "Create a small prayer corner and choose one family prayer routine.",
    links: [
      { label: "Liturgical Living", href: "/liturgical-living" },
      { label: "Prayer Library", href: "/prayers" },
      { label: "Catholic Life Roadmap", href: "/catholic-life" },
    ],
  },
];
