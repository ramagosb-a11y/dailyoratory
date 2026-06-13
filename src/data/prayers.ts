import type { PrayerItem, PrayerNeedCard } from "@/types/prayersLibrary";

type PrayerLibraryCategory =
  | "Daily Prayer"
  | "Meals"
  | "Confession"
  | "Mass and Eucharist"
  | "Mercy and Conversion"
  | "Prayer and Mercy"
  | "Protection"
  | "Anxiety and Suffering"
  | "The Sick and the Dead"
  | "Family"
  | "Mary and Saints"
  | "Litanies and Novenas"
  | "Novenas"
  | "Psalms"
  | "Liturgical Year";

type PrayerSeed = PrayerItem & {
  category: PrayerLibraryCategory;
};

const defaultRelatedLinks = [{ label: "Prayer Library", href: "/prayers" }];

export const angelusPrayerText = `V. The Angel of the Lord declared unto Mary.
R. And she conceived of the Holy Spirit.

Hail Mary...

V. Behold the handmaid of the Lord.
R. Be it done unto me according to thy word.

Hail Mary...

V. And the Word was made flesh.
R. And dwelt among us.

Hail Mary...

V. Pray for us, O holy Mother of God.
R. That we may be made worthy of the promises of Christ.

Let us pray.
Pour forth, we beseech Thee, O Lord, Thy grace into our hearts, that we, to whom the Incarnation of Christ Thy Son was made known by the message of an angel, may by His Passion and Cross be brought to the glory of His Resurrection. Through the same Christ our Lord.
Amen.`;

export const reginaCaeliPrayerText = `V. Queen of Heaven, rejoice, alleluia.
R. For He whom you did merit to bear, alleluia.

V. Has risen, as He said, alleluia.
R. Pray for us to God, alleluia.

V. Rejoice and be glad, O Virgin Mary, alleluia.
R. For the Lord has truly risen, alleluia.

Let us pray.
O God, who gave joy to the world through the Resurrection of Thy Son, our Lord Jesus Christ, grant we beseech Thee, that through the intercession of the Virgin Mary, His Mother, we may obtain the joys of everlasting life. Through the same Christ our Lord.
Amen.`;

const prayerLibrarySeeds: PrayerSeed[] = [
  {
    id: "sign-of-the-cross",
    title: "Sign of the Cross",
    category: "Daily Prayer",
    needTags: ["I want to start praying.", "I need peace."],
    summary: "The simplest Catholic prayer, made in the name of the Father, and of the Son, and of the Holy Spirit.",
    text: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen.",
    alternateTitles: ["In the name of the Father", "signum crucis"],
    searchKeywords: ["basic catholic prayer", "trinity", "daily catholic prayers"],
  },
  {
    id: "our-father",
    title: "Our Father",
    category: "Daily Prayer",
    needTags: ["I want to start praying.", "I need peace."],
    summary: "The prayer Jesus taught His disciples, prayed throughout Catholic life and worship.",
    text: `Our Father, who art in heaven,
hallowed be Thy name;
Thy kingdom come;
Thy will be done on earth as it is in heaven.
Give us this day our daily bread;
and forgive us our trespasses
as we forgive those who trespass against us;
and lead us not into temptation,
but deliver us from evil.
Amen.`,
    alternateTitles: ["Lord's Prayer", "Pater Noster"],
    searchKeywords: ["jesus", "scripture", "daily catholic prayers"],
  },
  {
    id: "hail-mary",
    title: "Hail Mary",
    category: "Mary and Saints",
    needTags: ["I want to pray with Mary.", "I need mercy."],
    summary: "A central Marian prayer drawn from the greeting to Mary and the Church's request for her intercession.",
    text: `Hail Mary, full of grace, the Lord is with thee;
blessed art thou among women,
and blessed is the fruit of thy womb, Jesus.
Holy Mary, Mother of God,
pray for us sinners,
now and at the hour of our death.
Amen.`,
    relatedLinks: [{ label: "Holy Rosary", href: "/devotions/holy-rosary" }],
    searchKeywords: ["mary", "rosary", "incarnation", "daily catholic prayers"],
  },
  {
    id: "glory-be",
    title: "Glory Be",
    category: "Daily Prayer",
    needTags: ["I need peace.", "I want to start praying."],
    summary: "A short prayer of praise to the Holy Trinity.",
    text: `Glory be to the Father,
and to the Son,
and to the Holy Spirit,
as it was in the beginning,
is now,
and ever shall be,
world without end.
Amen.`,
    alternateTitles: ["Gloria Patri"],
    searchKeywords: ["trinity", "rosary", "doxology"],
  },
  {
    id: "apostles-creed",
    title: "Apostles' Creed",
    category: "Daily Prayer",
    needTags: ["I want to understand Catholic teaching.", "I want to start praying."],
    summary: "An ancient profession of Christian faith prayed in the Rosary and used to summarize core Catholic belief.",
    text: `I believe in God, the Father almighty,
Creator of heaven and earth;
and in Jesus Christ, His only Son, our Lord,
who was conceived by the Holy Spirit,
born of the Virgin Mary,
suffered under Pontius Pilate,
was crucified, died, and was buried.
He descended into hell;
the third day He rose again from the dead;
He ascended into heaven,
and sits at the right hand of God, the Father almighty;
from thence He shall come to judge the living and the dead.

I believe in the Holy Spirit,
the holy Catholic Church,
the communion of saints,
the forgiveness of sins,
the resurrection of the body,
and life everlasting.
Amen.`,
    searchKeywords: ["creed", "faith", "rosary", "catholic belief"],
  },
  {
    id: "morning-offering",
    title: "Morning Offering",
    category: "Daily Prayer",
    needTags: ["I need courage.", "I need hope."],
    summary: "A morning prayer offering the day's prayers, works, joys, and sufferings to God.",
    text: `Lord God,
I offer You this day:
my prayers, works, joys, and sufferings.
Unite them to the Heart of Jesus
and teach me to live today in faith, hope, and charity.
Amen.`,
    searchKeywords: ["morning prayer", "offering", "daily catholic prayers"],
  },
  {
    id: "simple-morning-prayer",
    title: "Simple Morning Prayer",
    category: "Daily Prayer",
    needTags: ["I need peace.", "I want to start praying."],
    summary: "A short way to place your thoughts, words, and work into God's hands.",
    text: "Lord Jesus, I give You this day. Guide my thoughts, words, and actions. Help me love what is good, reject what leads me from You, and serve the people You place before me. Amen.",
    searchKeywords: ["daily catholic prayers", "beginner prayer"],
  },
  {
    id: "act-of-faith",
    title: "Act of Faith",
    category: "Daily Prayer",
    needTags: ["I need hope.", "I want to understand Catholic teaching."],
    summary: "A traditional act asking God to strengthen the virtue of faith.",
    text: "O my God, I believe in You and in all that You have revealed through Your Church. Strengthen my faith and help me live today in trust. Amen.",
    searchKeywords: ["faith", "virtue", "daily catholic prayers"],
  },
  {
    id: "act-of-hope",
    title: "Act of Hope",
    category: "Daily Prayer",
    needTags: ["I need hope.", "I am discouraged."],
    summary: "A traditional act of trust in God's promises and mercy.",
    text: "O my God, I place my hope in You. Trusting in Your mercy and promises, help me seek eternal life and rely on Your grace today. Amen.",
    searchKeywords: ["hope", "virtue", "daily catholic prayers"],
  },
  {
    id: "act-of-charity",
    title: "Act of Charity",
    category: "Daily Prayer",
    needTags: ["I need help forgiving someone.", "I need mercy."],
    summary: "A traditional act of love for God and neighbor.",
    text: "O my God, I love You above all things because You are all-good and worthy of all my love. Teach me to love my neighbor for love of You. Amen.",
    searchKeywords: ["charity", "love", "virtue", "daily catholic prayers"],
  },
  {
    id: "guardian-angel-prayer",
    title: "Guardian Angel Prayer",
    category: "Protection",
    needTags: ["I need courage.", "I want to pray with my family."],
    summary: "A short traditional prayer asking your guardian angel for light, protection, guidance, and care.",
    text: `Angel of God,
my guardian dear,
to whom God's love commits me here,
ever this day be at my side,
to light and guard,
to rule and guide.
Amen.`,
    alternateTitles: ["Angel of God"],
    searchKeywords: ["protection", "angels", "children", "daily catholic prayers"],
  },
  {
    id: "bless-us-o-lord",
    title: "Prayer Before Meals",
    category: "Meals",
    needTags: ["I want to pray with my family.", "I want to start praying."],
    summary: "A traditional blessing before meals.",
    text: `Bless us, O Lord,
and these Thy gifts,
which we are about to receive
from Thy bounty,
through Christ our Lord.
Amen.`,
    alternateTitles: ["Bless Us, O Lord"],
    searchKeywords: ["prayer before meals", "gratitude", "family"],
  },
  {
    id: "thanksgiving-after-meals",
    title: "Prayer After Meals",
    category: "Meals",
    needTags: ["I want to pray with my family.", "I need peace."],
    summary: "A traditional prayer of thanksgiving after meals.",
    text: `We give Thee thanks,
Almighty God,
for all Thy benefits,
Who livest and reignest,
world without end.
Amen.`,
    alternateTitles: ["Thanksgiving After Meals", "We Give Thee Thanks"],
    searchKeywords: ["prayer after meals", "gratitude", "family"],
  },
  {
    id: "evening-prayer",
    title: "Evening Prayer",
    category: "Daily Prayer",
    needTags: ["I need peace.", "I am grieving."],
    summary: "End the day in gratitude, repentance, and trust.",
    text: "Lord, thank You for this day. Forgive my sins, heal what was wounded, receive what was good, and guard me through the night. Help me rest in Your peace and begin again tomorrow. Amen.",
  },
  {
    id: "night-prayer-before-sleep",
    title: "Night Prayer Before Sleep",
    category: "Daily Prayer",
    needTags: ["I am anxious.", "I need peace."],
    summary: "Entrust the unfinished parts of the day to God's mercy.",
    text: "Into Your hands, Lord, I place this day. I trust Your mercy with what I cannot fix, Your wisdom with what I cannot understand, and Your love with all I carry. Amen.",
  },
  {
    id: "angelus",
    title: "The Angelus",
    category: "Mary and Saints",
    needTags: ["I want to pray with Mary.", "I want to start praying."],
    summary: "A traditional Marian prayer honoring the Incarnation, usually prayed morning, noon, and evening outside the Easter season.",
    text: angelusPrayerText,
    href: "/prayers/angelus",
    relatedLinks: [
      { label: "Regina Caeli", href: "/prayers/regina-caeli" },
      { label: "Holy Rosary", href: "/devotions/holy-rosary" },
    ],
    seasonalTags: ["Outside Easter", "Ordinary Time", "Advent", "Christmas", "Lent"],
    searchKeywords: ["mary", "incarnation", "annunciation", "noon prayer", "outside easter"],
  },
  {
    id: "regina-caeli",
    title: "Regina Caeli",
    category: "Mary and Saints",
    needTags: ["I want to pray with Mary.", "I need hope."],
    summary: "A joyful Easter Marian prayer traditionally prayed from Easter through Pentecost in place of the Angelus.",
    text: reginaCaeliPrayerText,
    href: "/prayers/regina-caeli",
    relatedLinks: [
      { label: "The Angelus", href: "/prayers/angelus" },
      { label: "Holy Rosary", href: "/devotions/holy-rosary" },
    ],
    alternateTitles: ["Regina Coeli"],
    seasonalTags: ["Easter", "Pentecost", "Liturgical Season Prayers"],
    searchKeywords: ["mary", "resurrection", "easter season", "daily prayer"],
  },
  {
    id: "hail-holy-queen",
    title: "Hail Holy Queen",
    category: "Mary and Saints",
    needTags: ["I want to pray with Mary.", "I am grieving."],
    summary: "A traditional Marian prayer often prayed at the end of the Rosary.",
    text: "Hail, holy Queen, Mother of mercy, our life, our sweetness, and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Pray for us, O holy Mother of God, that we may be made worthy of the promises of Christ. Amen.",
    alternateTitles: ["Salve Regina"],
    searchKeywords: ["mary", "rosary", "mercy", "marian prayer"],
  },
  {
    id: "memorare",
    title: "Memorare",
    category: "Mary and Saints",
    needTags: ["I want to pray with Mary.", "I need peace."],
    summary: "A traditional prayer asking the Blessed Virgin Mary's intercession with confidence.",
    text: "Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to thy protection, implored thy help, or sought thine intercession, was left unaided. Inspired by this confidence, I fly unto thee, O Virgin of virgins, my Mother. To thee do I come, before thee I stand, sinful and sorrowful. O Mother of the Word Incarnate, despise not my petitions, but in thy mercy hear and answer me. Amen.",
    searchKeywords: ["mary", "intercession", "help", "anxiety", "family"],
  },
  {
    id: "sub-tuum-praesidium",
    title: "Sub Tuum Praesidium",
    category: "Mary and Saints",
    needTags: ["I need peace.", "I want to pray with Mary."],
    summary: "An ancient Marian prayer asking the Mother of God for refuge and protection.",
    text: `Beneath thy protection
we seek refuge,
O Holy Mother of God.
Despise not our petitions in our necessities,
but deliver us always from all dangers,
O glorious and blessed Virgin.
Amen.`,
    searchKeywords: ["mary", "protection", "ancient prayer"],
  },
  {
    id: "magnificat-guide",
    title: "Magnificat Guide",
    category: "Mary and Saints",
    needTags: ["I want to pray with Mary.", "I need hope."],
    summary: "Mary's song of praise from the Gospel of Luke, prayed especially in Evening Prayer and especially fitting in Advent.",
    href: "/prayers/magnificat",
    seasonalTags: ["Advent", "Evening Prayer"],
    searchKeywords: ["mary", "scripture", "advent", "praise", "evening prayer"],
    relatedLinks: [{ label: "Bible", href: "/bible" }],
  },
  {
    id: "litany-of-loreto",
    title: "Litany of Loreto Guide",
    category: "Mary and Saints",
    needTags: ["I want to pray with Mary.", "I need peace."],
    summary: "A traditional litany invoking Mary under many titles and asking for her intercession.",
    href: "/prayers/litany-of-loreto",
    seasonalTags: ["Marian"],
    searchKeywords: ["mary", "litany", "marian titles"],
  },
  {
    id: "our-lady-of-sorrows",
    title: "Prayer to Our Lady of Sorrows",
    category: "Mary and Saints",
    needTags: ["I am grieving.", "I need peace."],
    summary: "A prayer asking Our Lady of Sorrows to accompany us in suffering and lead us closer to Christ crucified.",
    text: "Our Lady of Sorrows, stand with me beneath the Cross. Teach me to suffer with faith, to love without bitterness, and to remain close to Jesus when life is heavy. Amen.",
    seasonalTags: ["Lent", "Holy Week"],
    searchKeywords: ["mary", "sorrow", "suffering", "lent", "compassion"],
  },
  {
    id: "our-lady-of-guadalupe",
    title: "Prayer to Our Lady of Guadalupe",
    category: "Mary and Saints",
    needTags: ["I want to pray for my family.", "I need hope."],
    summary: "A prayer asking Our Lady of Guadalupe for maternal care, protection, and help in following Christ.",
    text: "Our Lady of Guadalupe, Mother of the Americas, cover us with your mantle and lead us to your Son. Help our families, protect the vulnerable, and teach us to trust God with humble hearts. Amen.",
    searchKeywords: ["mary", "guadalupe", "family", "protection", "americas"],
  },
  {
    id: "our-lady-of-mount-carmel",
    title: "Prayer to Our Lady of Mount Carmel",
    category: "Mary and Saints",
    needTags: ["I need peace.", "I want to pray with Mary."],
    summary: "A prayer asking Our Lady of Mount Carmel for protection and help in living close to Christ.",
    text: "Our Lady of Mount Carmel, draw me under your motherly care. Teach me prayer, purity of heart, and faithful love for Jesus. Guide me safely to Him. Amen.",
    searchKeywords: ["mary", "carmel", "protection", "scapular", "trust"],
  },
  {
    id: "holy-rosary-guide",
    title: "The Rosary",
    category: "Mary and Saints",
    needTags: ["I want to pray with Mary.", "I need peace."],
    summary: "A traditional Marian devotion centered on the mysteries of Christ's life, death, and resurrection.",
    href: "/devotions/holy-rosary",
    alternateTitles: ["Holy Rosary"],
    searchKeywords: ["mary", "rosary", "mysteries", "marian prayers"],
  },
  {
    id: "prayer-before-mass",
    title: "Prayer Before Mass",
    category: "Mass and Eucharist",
    needTags: ["I want to return to Mass.", "I need peace."],
    summary: "A prayer asking for attention, reverence, and openness before Mass.",
    text: "Lord Jesus, prepare my heart for the Holy Sacrifice of the Mass. Open my mind to Your Word, my heart to Your mercy, and my soul to Your Eucharistic presence. Amen.",
    relatedLinks: [{ label: "The Holy Mass", href: "/mass" }],
    searchKeywords: ["mass", "eucharist", "preparation"],
  },
  {
    id: "prayer-after-communion",
    title: "Prayer After Communion",
    category: "Mass and Eucharist",
    needTags: ["I need courage.", "I need hope."],
    summary: "A prayer of thanksgiving after receiving Holy Communion.",
    text: "Lord Jesus, thank You for coming to me in Holy Communion. Remain with me, heal what is wounded, strengthen what is weak, and teach me to love as You love. Amen.",
    relatedLinks: [{ label: "Catholic Life Roadmap", href: "/catholic-life" }],
    searchKeywords: ["eucharist", "communion", "thanksgiving", "mass"],
  },
  {
    id: "anima-christi",
    title: "Anima Christi",
    category: "Mass and Eucharist",
    needTags: ["I need mercy.", "I need courage."],
    summary: "A traditional Eucharistic prayer often prayed after Holy Communion.",
    text: "Soul of Christ, sanctify me. Body of Christ, save me. Blood of Christ, inebriate me. Water from the side of Christ, wash me. Passion of Christ, strengthen me. O good Jesus, hear me. Within Thy wounds hide me. Suffer me not to be separated from Thee. From the malignant enemy defend me. In the hour of my death call me and bid me come to Thee, that with Thy saints I may praise Thee forever and ever. Amen.",
    alternateTitles: ["Soul of Christ", "Soul of Christ, Sanctify Me"],
    searchKeywords: ["eucharist", "communion", "adoration", "Jesus"],
  },
  {
    id: "act-of-spiritual-communion",
    title: "Act of Spiritual Communion",
    category: "Mass and Eucharist",
    needTags: ["I need hope.", "I want to return to Mass."],
    summary: "A prayer of desire for Jesus when sacramental Communion is not possible.",
    text: "My Jesus, I believe that Thou art present in the Most Holy Sacrament. I love Thee above all things, and I desire to receive Thee into my soul. Since I cannot at this moment receive Thee sacramentally, come at least spiritually into my heart. I embrace Thee as if Thou wert already there, and unite myself wholly to Thee. Never permit me to be separated from Thee. Amen.",
    seasonalTags: ["Easter"],
    searchKeywords: ["eucharist", "spiritual communion", "mass", "desire for Jesus"],
  },
  {
    id: "prayer-before-the-blessed-sacrament",
    title: "Prayer Before the Blessed Sacrament",
    category: "Mass and Eucharist",
    needTags: ["I need peace.", "I want to start praying."],
    summary: "A prayer for quiet adoration before Jesus in the Blessed Sacrament.",
    text: "Lord Jesus, I believe You are truly present in the Blessed Sacrament. I adore You, I thank You, and I place my heart before You. Teach me to be still, to listen, and to love You more faithfully. Amen.",
    relatedLinks: [{ label: "Adoration", href: "/adoration" }],
    seasonalTags: ["Holy Week", "Good Friday"],
    searchKeywords: ["eucharist", "adoration", "blessed sacrament", "Jesus"],
  },
  {
    id: "o-sacrum-convivium",
    title: "O Sacrum Convivium Guide",
    category: "Mass and Eucharist",
    needTags: ["I need peace.", "I want to understand Catholic teaching."],
    summary: "A traditional Eucharistic antiphon attributed to St. Thomas Aquinas, praising the sacred banquet of Christ.",
    href: "/prayers/o-sacrum-convivium",
    searchKeywords: ["eucharist", "adoration", "latin prayer", "aquinas"],
  },
  {
    id: "tantum-ergo",
    title: "Tantum Ergo Guide",
    category: "Mass and Eucharist",
    needTags: ["I want to start praying.", "I need peace."],
    summary: "A traditional Eucharistic hymn prayed especially during Benediction of the Blessed Sacrament.",
    href: "/prayers/tantum-ergo",
    searchKeywords: ["eucharist", "benediction", "adoration", "aquinas"],
  },
  {
    id: "o-salutaris-hostia",
    title: "O Salutaris Hostia Guide",
    category: "Mass and Eucharist",
    needTags: ["I need peace.", "I want to start praying."],
    summary: "A traditional Eucharistic hymn often sung at exposition of the Blessed Sacrament.",
    href: "/prayers/o-salutaris-hostia",
    searchKeywords: ["eucharist", "adoration", "benediction", "aquinas"],
  },
  {
    id: "jesus-son-of-david",
    title: "Jesus, Son of David, Have Mercy on Me",
    category: "Mercy and Conversion",
    needTags: ["I need mercy.", "I am tempted."],
    summary: "A short Gospel cry for mercy when you need to turn to Jesus quickly.",
    text: "Jesus, Son of David, have mercy on me.",
    searchKeywords: ["mercy", "repentance", "daily prayer"],
  },
  {
    id: "detachment-from-sin",
    title: "Prayer for Detachment from Sin",
    category: "Mercy and Conversion",
    needTags: ["I keep falling into the same sin.", "I need mercy."],
    summary: "A prayer asking Jesus to loosen the heart from sin and false comfort.",
    text: "Lord Jesus, I do not want to cling to anything that separates me from You. Detach my heart from sin, false comfort, pride, resentment, and fear. Make my heart entirely Yours. Amen.",
    relatedLinks: [{ label: "Grace", href: "/formation/grace" }],
    searchKeywords: ["detachment", "sin", "confession", "mercy"],
  },
  {
    id: "conversion-of-heart",
    title: "Prayer for Conversion of Heart",
    category: "Mercy and Conversion",
    needTags: ["I need mercy.", "I need help forgiving someone."],
    summary: "A simple prayer asking for a deeper turning back to God.",
    text: "Lord Jesus, convert my heart. Teach me to repent without despair, to tell the truth without excuses, and to trust Your mercy more than my weakness. Amen.",
    searchKeywords: ["conversion", "mercy", "repentance"],
  },
  {
    id: "prayer-before-confession",
    title: "Prayer Before Confession",
    category: "Confession",
    needTags: ["I need mercy.", "I have not been to Confession in years."],
    summary: "A prayer asking for honesty, sorrow for sin, and trust in God's mercy before Confession.",
    text: "Lord Jesus, help me see my sins honestly without fear or despair. Give me true sorrow, trust in Your mercy, and the courage to confess simply. Amen.",
    relatedLinks: [{ label: "Confession Guide", href: "/confession" }],
    searchKeywords: ["confession", "examination", "mercy"],
  },
  {
    id: "act-of-contrition",
    title: "Act of Contrition",
    category: "Confession",
    needTags: ["I need mercy.", "I committed a serious sin."],
    summary: "A traditional prayer of sorrow for sin and trust in God's mercy.",
    text: "O my God, I am heartily sorry for having offended Thee, and I detest all my sins because I dread the loss of Heaven and the pains of Hell, but most of all because they offend Thee, my God, who art all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to confess my sins, to do penance, and to amend my life. Amen.",
    relatedLinks: [{ label: "Confession Guide", href: "/confession" }],
    seasonalTags: ["Lent"],
    searchKeywords: ["confession", "mercy", "repentance", "sin", "lent"],
  },
  {
    id: "prayer-after-confession",
    title: "Prayer After Confession",
    category: "Confession",
    needTags: ["I need mercy.", "I want to return to the Church."],
    summary: "A prayer of gratitude after receiving absolution.",
    text: "Lord Jesus, thank You for forgiving me. Help me complete my penance, avoid sin, and walk forward in Your grace. Amen.",
    relatedLinks: [{ label: "Confession Guide", href: "/confession" }],
    searchKeywords: ["confession", "mercy", "thanksgiving"],
  },
  {
    id: "confiteor-guide",
    title: "Confiteor Guide",
    category: "Confession",
    needTags: ["I want to understand Catholic teaching.", "I need mercy."],
    summary: "A guide to the traditional prayer of confession used in the Penitential Act at Mass.",
    href: "/prayers/confiteor",
    searchKeywords: ["confession", "repentance", "mass", "mercy"],
  },
  {
    id: "kyrie-eleison",
    title: "Kyrie Eleison",
    category: "Confession",
    needTags: ["I need mercy.", "I need peace."],
    summary: "A short ancient prayer meaning 'Lord, have mercy.'",
    text: `Lord, have mercy.
Christ, have mercy.
Lord, have mercy.`,
    searchKeywords: ["mercy", "mass", "repentance", "greek prayer"],
  },
  {
    id: "jesus-prayer",
    title: "Jesus Prayer",
    category: "Confession",
    needTags: ["I need mercy.", "I am anxious."],
    summary: "A short prayer of mercy often prayed slowly with attention to the Holy Name of Jesus.",
    text: `Lord Jesus Christ, Son of God,
have mercy on me, a sinner.`,
    searchKeywords: ["mercy", "repentance", "breath prayer", "daily prayer"],
  },
  {
    id: "psalm-51-guide",
    title: "Psalm 51 Guide",
    category: "Psalms",
    needTags: ["I need mercy.", "I have not been to Confession in years."],
    summary: "A guide to praying Psalm 51, the Miserere, as a prayer of repentance and mercy.",
    href: "/prayers/seven-penitential-psalms",
    alternateTitles: ["Miserere"],
    seasonalTags: ["Lent", "Good Friday"],
    searchKeywords: ["psalm", "repentance", "mercy", "lent"],
  },
  {
    id: "seven-penitential-psalms",
    title: "Seven Penitential Psalms Guide",
    category: "Psalms",
    needTags: ["I need mercy.", "I committed a serious sin."],
    summary: "A guide to the seven penitential psalms traditionally prayed in repentance and conversion.",
    href: "/prayers/seven-penitential-psalms",
    seasonalTags: ["Lent"],
    searchKeywords: ["psalms", "repentance", "lent", "confession"],
  },
  {
    id: "litany-of-humility",
    title: "Litany of Humility Guide",
    category: "Confession",
    needTags: ["I need mercy.", "I need help forgiving someone."],
    summary: "A searching prayer asking Jesus for freedom from pride, fear, comparison, and the desire to be praised.",
    href: "/prayers/litany-of-humility",
    seasonalTags: ["Lent"],
    searchKeywords: ["humility", "pride", "lent", "confession", "detachment"],
  },
  {
    id: "act-of-reparation-sacred-heart",
    title: "Act of Reparation to the Sacred Heart",
    category: "Mercy and Conversion",
    needTags: ["I need mercy.", "I am grieving."],
    summary: "A prayer of love and reparation to the Sacred Heart of Jesus.",
    text: "Sacred Heart of Jesus, wounded by sin yet burning with love, receive my small acts of reparation. Forgive what is cold in me, heal what is divided, and make my heart more like Yours. Amen.",
    searchKeywords: ["sacred heart", "reparation", "mercy", "first friday"],
  },
  {
    id: "st-michael",
    title: "Prayer to St. Michael the Archangel",
    category: "Protection",
    needTags: ["I am tempted.", "I need courage."],
    summary: "A traditional Catholic prayer asking St. Michael's protection against evil.",
    text: "Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray, and do thou, O Prince of the heavenly host, by the power of God, thrust into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen.",
    alternateTitles: ["Prayer to St. Michael", "Prayer to Saint Michael"],
    searchKeywords: ["protection", "spiritual battle", "angels", "temptation"],
  },
  {
    id: "breastplate-of-st-patrick",
    title: "Breastplate of St. Patrick Guide",
    category: "Protection",
    needTags: ["I need courage.", "I need peace."],
    summary: "A traditional prayer of protection associated with St. Patrick, calling on Christ's presence and strength.",
    href: "/prayers/breastplate-of-st-patrick",
    searchKeywords: ["protection", "st patrick", "christ", "courage"],
  },
  {
    id: "st-joseph-protection",
    title: "Prayer to St. Joseph for Protection",
    category: "Protection",
    needTags: ["I want to pray for my family.", "I need courage."],
    summary: "A prayer asking St. Joseph to protect the home, family, work, and spiritual life.",
    text: "St. Joseph, guardian of the Holy Family, protect my home, my work, and my heart. Teach me quiet strength, faithful obedience, and trust in God's providence. Amen.",
    searchKeywords: ["st joseph", "protection", "family", "work"],
  },
  {
    id: "prayer-against-temptation",
    title: "Prayer Against Temptation",
    category: "Protection",
    needTags: ["I am tempted.", "I need courage."],
    summary: "A prayer for strength, clarity, and grace when temptation is near.",
    text: "Lord Jesus, stand near me in this temptation. Give me strength to turn away, clarity to choose the good, and humility to ask for help. Your grace is stronger than this moment. Amen.",
    searchKeywords: ["temptation", "sin", "mercy", "courage"],
  },
  {
    id: "prayer-for-deliverance-from-evil",
    title: "Prayer for Deliverance from Evil",
    category: "Protection",
    needTags: ["I am anxious.", "I need peace."],
    summary: "A simple prayer asking God to deliver the soul from evil and keep it close to Christ.",
    text: "Lord God, deliver me from evil and keep me close to Jesus. Guard my mind, my heart, my home, and my choices. Fill me with peace, truth, and trust in Your victory. Amen.",
    searchKeywords: ["protection", "evil", "trust", "spiritual battle"],
  },
  {
    id: "prayer-when-anxious",
    title: "Prayer When Anxious",
    category: "Anxiety and Suffering",
    needTags: ["I am anxious.", "I need peace."],
    summary: "Bring fear to Jesus one step at a time.",
    text: "Lord Jesus, I give You my fear. Breathe Your peace into my heart. Help me take the next faithful step and rest in the Father's care. Amen.",
  },
  {
    id: "prayer-for-trust",
    title: "Prayer for Trust",
    category: "Anxiety and Suffering",
    needTags: ["I need peace.", "I need courage."],
    summary: "A short act of surrender when the road ahead feels uncertain.",
    text: "Jesus, I trust in You. Teach me to trust You in what I understand and in what I do not yet see. Keep me faithful and at peace. Amen.",
  },
  {
    id: "prayer-in-discouragement",
    title: "Prayer in Discouragement",
    category: "Anxiety and Suffering",
    needTags: ["I need hope.", "I am grieving."],
    summary: "Ask Christ for hope when you are tired or cast down.",
    text: "Lord Jesus, when my heart is tired and heavy, do not let me turn away from You. Give me hope, steadiness, and the grace to begin again. Amen.",
  },
  {
    id: "prayer-for-the-sick",
    title: "Prayer for the Sick",
    category: "The Sick and the Dead",
    needTags: ["Someone is sick.", "I need peace."],
    summary: "Ask Christ the Divine Physician for healing, strength, and trust.",
    text: "Lord Jesus, Divine Physician, draw near to those who are sick. Bring healing according to Your will, strength in suffering, peace in fear, and trust in Your mercy. Amen.",
    relatedLinks: [{ label: "Sacramental Emergency", href: "/sacramental-emergency" }],
  },
  {
    id: "prayer-for-a-dying-person",
    title: "Prayer for a Dying Person",
    category: "The Sick and the Dead",
    needTags: ["Someone is sick.", "Someone has died."],
    summary: "A prayer asking Jesus to be near someone who is dying and to bring them into His mercy.",
    text: "Lord Jesus, be near Your servant in this final hour. Surround them with mercy, forgive their sins, comfort their heart, and lead them safely to the Father. Amen.",
    relatedLinks: [{ label: "Sacramental Emergency", href: "/sacramental-emergency" }],
    searchKeywords: ["dying", "anointing", "family", "sacramental emergency"],
  },
  {
    id: "eternal-rest",
    title: "Eternal Rest",
    category: "The Sick and the Dead",
    needTags: ["Someone has died.", "I am grieving."],
    summary: "A traditional Catholic prayer for the faithful departed.",
    text: "Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May they rest in peace. Amen.",
    searchKeywords: ["dead", "dying", "funeral", "purgatory", "grief"],
  },
  {
    id: "prayer-for-the-faithful-departed",
    title: "Prayer for the Faithful Departed",
    category: "The Sick and the Dead",
    needTags: ["Someone has died.", "I am grieving."],
    summary: "A prayer entrusting the faithful departed to the mercy of God.",
    text: "Merciful Father, receive the faithful departed into Your mercy. Purify them, comfort those who grieve, and bring them into the light and peace of Your kingdom. Amen.",
    relatedLinks: [{ label: "Prayers for the Dead", href: "/formation/catholic-burial/prayers-for-the-dead" }],
    searchKeywords: ["dead", "purgatory", "funeral", "grief"],
  },
  {
    id: "deceased-loved-ones",
    title: "Prayer for a Deceased Loved One",
    category: "The Sick and the Dead",
    needTags: ["Someone has died.", "I am grieving."],
    summary: "A prayer for someone you love who has died.",
    text: "Lord, I entrust my loved one to Your mercy. Thank You for the gift of their life. Forgive their sins, heal what remains wounded, and bring them into the joy of Your presence. Amen.",
    relatedLinks: [{ label: "Catholic Burial", href: "/formation/catholic-burial" }],
    searchKeywords: ["grief", "dead", "family", "purgatory"],
  },
  {
    id: "psalm-130-guide",
    title: "Psalm 130 Guide",
    category: "Psalms",
    needTags: ["I am grieving.", "I need hope."],
    summary: "A guide to praying Psalm 130, De Profundis, for mercy, hope, and the faithful departed.",
    href: "/prayers/seven-penitential-psalms",
    alternateTitles: ["De Profundis"],
    seasonalTags: ["November", "All Souls"],
    searchKeywords: ["psalm", "dead", "purgatory", "mercy", "grief"],
  },
  {
    id: "litany-for-the-dying",
    title: "Litany for the Dying",
    category: "The Sick and the Dead",
    needTags: ["Someone is sick.", "Someone has died."],
    summary: "A prayerful litany for accompanying someone near death with trust in Christ.",
    text: `Lord Jesus, be near them.
R. Lord, have mercy.

Mary, Mother of mercy, pray for them.
R. Pray for them.

St. Joseph, patron of a happy death, pray for them.
R. Pray for them.

Holy angels of God, guard them.
R. Guard them.

Jesus, receive them in Your mercy.
R. Receive them, Lord.`,
    searchKeywords: ["dying", "litany", "sacramental emergency", "mercy"],
  },
  {
    id: "holy-souls-in-purgatory",
    title: "Prayer for the Holy Souls in Purgatory",
    category: "The Sick and the Dead",
    needTags: ["Someone has died.", "I need mercy."],
    summary: "A prayer asking God's mercy for the holy souls in purgatory.",
    text: "Merciful Lord, look with love upon the holy souls in purgatory. Purify them, console them, and bring them quickly into the joy of heaven. May my prayers and sacrifices help them through Your mercy. Amen.",
    seasonalTags: ["November", "All Souls"],
    searchKeywords: ["purgatory", "dead", "mercy", "november"],
  },
  {
    id: "prayer-for-my-family",
    title: "Prayer for My Family",
    category: "Family",
    needTags: ["I want to pray for my family.", "I need peace."],
    summary: "Ask Jesus to bless the home with forgiveness, charity, and peace.",
    text: "Lord Jesus, bless our home. Teach us to forgive, serve, listen, and love. Protect our family from division and make our home a place of peace, prayer, and charity. Amen.",
  },
  {
    id: "prayer-for-children",
    title: "Prayer for Children",
    category: "Family",
    needTags: ["I want to pray for my family.", "I need hope."],
    summary: "Entrust children to God's protection and grace.",
    text: "Lord Jesus, watch over the children You have placed in my care. Guard their hearts, guide their steps, and help them grow in wisdom, charity, and holy joy. Amen.",
  },
  {
    id: "prayer-for-peace-in-the-home",
    title: "Prayer for Peace in the Home",
    category: "Family",
    needTags: ["I want to pray for my family.", "I need peace."],
    summary: "Ask for patience, mercy, and calm in family life.",
    text: "Prince of Peace, reign in our home. Quiet our anger, heal our words, strengthen our patience, and teach us to love one another faithfully. Amen.",
  },
  {
    id: "st-joseph",
    title: "Prayer to St. Joseph",
    category: "Mary and Saints",
    needTags: ["I need courage.", "I want to pray for my family."],
    summary: "A prayer asking St. Joseph for fatherly care, protection, and faithful obedience to God.",
    text: "St. Joseph, guardian of Jesus and Mary, teach me faithfulness in hidden things. Protect my family, guide my work, and help me obey God with a quiet heart. Amen.",
    searchKeywords: ["st joseph", "family", "work", "protection"],
  },
  {
    id: "st-francis-of-assisi",
    title: "Prayer to St. Francis of Assisi",
    category: "Mary and Saints",
    needTags: ["I need peace.", "I need help forgiving someone."],
    summary: "A prayer asking for peace, simplicity, humility, and love in the spirit of St. Francis.",
    text: "St. Francis of Assisi, teach me to love what is simple, to serve with joy, to seek peace, and to follow Christ with a poor and generous heart. Amen.",
    searchKeywords: ["st francis", "peace", "charity", "simplicity"],
  },
  {
    id: "st-augustine",
    title: "Prayer to St. Augustine",
    category: "Mary and Saints",
    needTags: ["I want to understand Catholic teaching.", "I need conversion."],
    summary: "A prayer asking St. Augustine's intercession for conversion, truth, and a heart that rests in God.",
    text: "St. Augustine, you searched for truth and found rest in God. Pray for me, that my restless heart may turn from sin, love truth, and rest in the Lord. Amen.",
    searchKeywords: ["st augustine", "conversion", "restless heart", "truth"],
  },
  {
    id: "st-thomas-aquinas-before-study",
    title: "Prayer to St. Thomas Aquinas Before Study",
    category: "Mary and Saints",
    needTags: ["I want to understand Catholic teaching.", "I need courage."],
    summary: "A prayer asking for wisdom, humility, and clarity before study.",
    text: "St. Thomas Aquinas, pray for me as I study. Ask God to give me clarity of mind, humility before truth, discipline in my work, and wisdom that leads to love. Amen.",
    searchKeywords: ["st thomas aquinas", "study", "wisdom", "students"],
  },
  {
    id: "st-benedict",
    title: "Prayer to St. Benedict",
    category: "Mary and Saints",
    needTags: ["I need courage.", "I am tempted."],
    summary: "A prayer asking St. Benedict's intercession for protection, discipline, peace, and faithful perseverance.",
    text: "St. Benedict, teach me to seek God before all things. Protect me from evil, strengthen me in discipline, and help me live with prayer, peace, and perseverance. Amen.",
    searchKeywords: ["st benedict", "protection", "discipline", "peace"],
  },
  {
    id: "st-anthony",
    title: "Prayer to St. Anthony",
    category: "Mary and Saints",
    needTags: ["I need hope.", "I need peace."],
    summary: "A prayer asking St. Anthony's intercession when something is lost and when the heart needs help returning to God.",
    text: "St. Anthony, helper in finding what is lost, pray that I may recover what I need and never lose sight of Christ. Guide my heart back to peace and trust. Amen.",
    searchKeywords: ["st anthony", "lost things", "help", "trust"],
  },
  {
    id: "st-jude",
    title: "Prayer to St. Jude",
    category: "Mary and Saints",
    needTags: ["I need hope.", "I am discouraged."],
    summary: "A prayer asking St. Jude's intercession in difficult or discouraging circumstances.",
    text: "St. Jude, faithful apostle and friend of Christ, pray for me in this difficult need. Help me not to lose hope, and lead me to trust the mercy and power of Jesus. Amen.",
    searchKeywords: ["st jude", "hope", "difficult cases", "despair"],
  },
  {
    id: "st-therese-of-lisieux",
    title: "Prayer to St. Therese of Lisieux",
    category: "Mary and Saints",
    needTags: ["I need hope.", "I need peace."],
    summary: "A prayer asking St. Therese to help us follow Jesus through small acts of trust and love.",
    text: "St. Therese, teach me your little way of trust and love. Help me offer small things to Jesus, accept my weakness with humility, and love faithfully today. Amen.",
    alternateTitles: ["Prayer to St. Therese"],
    searchKeywords: ["st therese", "little way", "trust", "love"],
  },
  {
    id: "st-padre-pio",
    title: "Prayer to St. Padre Pio",
    category: "Mary and Saints",
    needTags: ["I need courage.", "I need mercy."],
    summary: "A prayer asking St. Padre Pio's intercession for trust, perseverance, and closeness to Christ in suffering.",
    text: "St. Padre Pio, pray for me to trust Jesus in suffering, to return often to mercy, and to remain faithful in prayer. Help me carry my cross with love. Amen.",
    searchKeywords: ["padre pio", "suffering", "confession", "trust"],
  },
  {
    id: "what-is-a-litany",
    title: "Catholic Litanies",
    category: "Litanies and Novenas",
    needTags: ["I need mercy.", "I need peace."],
    summary: "A guide to Catholic litanies: repeated prayers of mercy, intercession, trust, humility, protection, and hope.",
    href: "/prayers/litanies",
    alternateTitles: ["What Is a Litany?", "Litanies"],
    searchKeywords: [
      "litany",
      "litanies",
      "Catholic litanies",
      "how to pray a litany",
      "Litany of Loreto",
      "Litany of Humility",
      "Litany of the Saints",
      "Sacred Heart litany",
      "St. Joseph litany",
      "Holy Spirit litany",
    ],
    relatedLinks: [
      { label: "Prayer Library", href: "/prayers" },
      { label: "Holy Rosary", href: "/devotions/holy-rosary" },
      { label: "Confession Guide", href: "/confession" },
    ],
  },
  {
    id: "what-is-a-novena",
    title: "What Is a Novena?",
    category: "Litanies and Novenas",
    needTags: ["I need hope.", "I need courage."],
    summary: "A novena is a prayer prayed over nine days or nine periods in a spirit of perseverance and hope.",
    href: "/prayers/novenas",
    relatedLinks: [{ label: "Catholic Devotions", href: "/devotions" }],
  },
  {
    id: "novena-to-the-sacred-heart-of-jesus",
    title: "Novena to the Sacred Heart of Jesus",
    category: "Novenas",
    needTags: ["I need mercy.", "I need hope.", "I want to start praying."],
    summary:
      "A nine-day devotion to the Sacred Heart of Jesus, inviting prayer, mercy, reparation, Eucharistic love, and consecration to Christ.",
    href: "/prayers/novena-to-the-sacred-heart-of-jesus",
    externalSource: {
      label: "USCCB Novena to the Sacred Heart of Jesus",
      href: "https://www.usccb.org/novena-sacred-heart-jesus",
    },
    alternateTitles: ["Sacred Heart Novena", "USCCB Sacred Heart Novena", "Heart of Jesus Novena"],
    seasonalTags: ["Sacred Heart", "June", "First Friday"],
    searchKeywords: [
      "Sacred Heart novena",
      "Novena to the Sacred Heart of Jesus",
      "Sacred Heart of Jesus",
      "First Friday",
      "June devotion",
      "reparation",
      "consecration",
      "Heart of Jesus",
      "USCCB Sacred Heart novena",
      "Mercy",
      "Eucharist",
      "Catholic Devotion",
    ],
    relatedLinks: [
      { label: "Catholic Litanies", href: "/prayers/litanies" },
      { label: "The Eucharist", href: "/sacraments/eucharist" },
      { label: "Confession Guide", href: "/confession" },
      { label: "Sin and Temptation", href: "/sin-and-temptation" },
    ],
  },
  {
    id: "starter-novena-guide",
    title: "Starter Novena Guide",
    category: "Litanies and Novenas",
    needTags: ["I need hope.", "I want to start praying."],
    summary: "If you have never prayed a novena, begin with a simple intention, one daily time, and faithful repetition.",
    href: "/prayers/novenas",
    relatedLinks: [{ label: "What Should I Do?", href: "/what-should-i-do" }],
  },
  {
    id: "psalm-23-guide",
    title: "Psalm 23 Guide",
    category: "Psalms",
    needTags: ["I need peace.", "I am grieving."],
    summary: "Pray Psalm 23 as a psalm of trust in the Lord's shepherding care.",
    href: "/prayers/psalm-23",
    relatedLinks: [{ label: "Bible", href: "/bible" }],
  },
  {
    id: "indulgence-prayers-devotions",
    title: "Prayers and Devotions with Indulgences",
    category: "Prayer and Mercy",
    needTags: ["I need mercy.", "I want to start praying."],
    summary: "A Catholic guide to prayers and devotions traditionally associated with indulgences, including the Rosary, Stations of the Cross, Eucharistic Adoration, Scripture reading, prayers for the dead, and Marian prayers.",
    href: "/indulgences/prayers-and-devotions",
    searchKeywords: ["indulgences", "mercy", "confession", "detachment", "prayer", "faithful departed"],
    relatedLinks: [
      { label: "Indulgences Guide", href: "/indulgences" },
      { label: "Detachment from Sin", href: "/indulgences/detachment-from-sin" },
    ],
  },
  {
    id: "advent-wreath-prayers",
    title: "Advent Wreath Prayers",
    category: "Liturgical Year",
    needTags: ["I want to pray with my family.", "I want to start praying."],
    summary: "Simple prayers for lighting the Advent wreath and preparing for Christ's coming.",
    href: "/prayers/advent-wreath-prayers",
    seasonalTags: ["Advent"],
    searchKeywords: ["advent", "family", "home prayer", "liturgical year"],
  },
  {
    id: "o-antiphons",
    title: "O Antiphons",
    category: "Liturgical Year",
    needTags: ["I want to start praying.", "I want to understand Catholic teaching."],
    summary: "The great Advent antiphons prayed from December 17 to 23, preparing the heart for Christmas.",
    href: "/liturgical-living/advent/o-antiphons",
    seasonalTags: ["Advent"],
    searchKeywords: ["advent", "o antiphons", "december", "prayer"],
  },
  {
    id: "christmas-blessing-prayer",
    title: "Christmas Blessing Prayer",
    category: "Liturgical Year",
    needTags: ["I want to pray with my family.", "I need peace."],
    summary: "A prayer of blessing and thanksgiving during the Christmas season.",
    text: "Lord Jesus, born for us in humility and love, bless this home and all who gather here. Let the joy of Your Nativity fill us with peace, gratitude, and charity. Amen.",
    href: "/prayers/christmas-blessing",
    seasonalTags: ["Christmas"],
    searchKeywords: ["christmas", "family", "home prayer", "blessing"],
  },
  {
    id: "epiphany-house-blessing",
    title: "Epiphany House Blessing",
    category: "Liturgical Year",
    needTags: ["I want to pray with my family.", "I need peace."],
    summary: "A traditional home blessing for Epiphany, remembering Christ revealed to the nations.",
    href: "/liturgical-living/christmas/epiphany/house-blessing",
    seasonalTags: ["Christmas", "Epiphany"],
    searchKeywords: ["epiphany", "home blessing", "family", "christmas"],
  },
  {
    id: "lenten-prayer",
    title: "Lenten Prayer",
    category: "Liturgical Year",
    needTags: ["I need mercy.", "I want to start praying."],
    summary: "A simple prayer for conversion, fasting, almsgiving, and return to God during Lent.",
    text: "Lord Jesus, lead me into the desert with You. Teach me to pray, to fast with humility, to give with love, and to return to the Father with my whole heart. Amen.",
    href: "/prayers/lenten-prayer",
    seasonalTags: ["Lent"],
    searchKeywords: ["lent", "prayer", "fasting", "almsgiving", "repentance"],
  },
  {
    id: "stations-of-the-cross-guide",
    title: "Stations of the Cross Prayers",
    category: "Liturgical Year",
    needTags: ["I need mercy.", "I am grieving."],
    summary: "A guide to praying with Jesus through His Passion, especially on Fridays of Lent.",
    href: "/way-of-cross",
    seasonalTags: ["Lent", "Holy Week", "Good Friday"],
    searchKeywords: ["lent", "stations of the cross", "passion", "friday"],
  },
  {
    id: "good-friday-reproaches-guide",
    title: "Good Friday Reproaches Guide",
    category: "Liturgical Year",
    needTags: ["I need mercy.", "I am grieving."],
    summary: "A guide to the solemn Reproaches of Good Friday and prayer before the Cross.",
    href: "/prayers/good-friday-reproaches",
    seasonalTags: ["Holy Week", "Good Friday", "Lent"],
    searchKeywords: ["good friday", "holy week", "passion", "lent"],
  },
  {
    id: "come-holy-spirit",
    title: "Come, Holy Spirit",
    category: "Liturgical Year",
    needTags: ["I need courage.", "I want to understand Catholic teaching."],
    summary: "A traditional invocation asking the Holy Spirit to fill the hearts of the faithful and kindle the fire of divine love.",
    text: `Come, Holy Spirit, fill the hearts of Thy faithful
and kindle in them the fire of Thy love.
Send forth Thy Spirit and they shall be created.
And Thou shalt renew the face of the earth.

Let us pray.
O God, who didst instruct the hearts of the faithful by the light of the Holy Spirit, grant us by the same Spirit to be truly wise and ever to rejoice in His consolation. Through Christ our Lord. Amen.`,
    href: "/prayers/come-holy-spirit",
    alternateTitles: ["O Come Holy Spirit"],
    seasonalTags: ["Easter", "Pentecost"],
    searchKeywords: ["holy spirit", "pentecost", "discernment", "prayer"],
  },
  {
    id: "veni-creator-spiritus",
    title: "Veni Creator Spiritus Guide",
    category: "Liturgical Year",
    needTags: ["I need courage.", "I want to understand Catholic teaching."],
    summary: "A traditional hymn invoking the Creator Spirit, often prayed for Pentecost, ordinations, retreats, and new beginnings.",
    href: "/prayers/veni-creator-spiritus",
    alternateTitles: ["Creator Spirit"],
    seasonalTags: ["Pentecost"],
    searchKeywords: ["holy spirit", "pentecost", "hymn", "discernment"],
  },
];

export const prayerLibraryCategories = [
  "Daily Prayer",
  "Meals",
  "Confession",
  "Mass and Eucharist",
  "Mercy and Conversion",
  "Prayer and Mercy",
  "Protection",
  "Anxiety and Suffering",
  "The Sick and the Dead",
  "Family",
  "Mary and Saints",
  "Litanies and Novenas",
  "Novenas",
  "Psalms",
  "Liturgical Year",
] as const;

export const prayerLibraryItems: PrayerItem[] = prayerLibrarySeeds.map((item) => ({
  relatedLinks: item.relatedLinks ?? (item.href ? defaultRelatedLinks : undefined),
  ...item,
}));

export const featuredPrayerIds = ["our-father", "act-of-contrition", "hail-mary", "eternal-rest"] as const;

export const prayerNeedCards: PrayerNeedCard[] = [
  {
    id: "need-mercy",
    title: "I need mercy.",
    description: "Turn to repentance, Confession, and the mercy of Christ.",
    prayerIds: ["act-of-contrition", "prayer-before-confession", "jesus-prayer", "detachment-from-sin"],
  },
  {
    id: "need-peace",
    title: "I need peace.",
    description: "Pray with trust when the heart feels restless.",
    prayerIds: ["prayer-when-anxious", "prayer-for-trust", "evening-prayer", "psalm-23-guide"],
  },
  {
    id: "anxious",
    title: "I am anxious.",
    description: "Bring fear to Jesus gently and simply.",
    prayerIds: ["prayer-when-anxious", "prayer-for-trust", "night-prayer-before-sleep"],
  },
  {
    id: "grieving",
    title: "I am grieving.",
    description: "Pray with sorrow and Christian hope.",
    prayerIds: ["eternal-rest", "deceased-loved-ones", "psalm-130-guide", "prayer-in-discouragement"],
  },
  {
    id: "tempted",
    title: "I am tempted.",
    description: "Turn quickly to Christ and ask for grace now.",
    prayerIds: ["jesus-son-of-david", "prayer-against-temptation", "st-michael"],
  },
  {
    id: "need-courage",
    title: "I need courage.",
    description: "Ask for steadiness, strength, and fidelity.",
    prayerIds: ["morning-offering", "prayer-for-trust", "st-joseph", "come-holy-spirit"],
  },
  {
    id: "pray-with-mary",
    title: "I want to pray with Mary.",
    description: "Let Mary lead you more deeply to Jesus.",
    prayerIds: ["hail-mary", "angelus", "regina-caeli", "memorare"],
  },
  {
    id: "pray-for-family",
    title: "I want to pray for my family.",
    description: "Ask for peace, charity, and grace at home.",
    prayerIds: ["prayer-for-my-family", "prayer-for-children", "prayer-for-peace-in-the-home"],
  },
  {
    id: "someone-sick",
    title: "Someone is sick.",
    description: "Pray for healing, trust, and sacramental help if needed.",
    prayerIds: ["prayer-for-the-sick", "prayer-for-a-dying-person", "prayer-before-the-blessed-sacrament"],
  },
  {
    id: "someone-died",
    title: "Someone has died.",
    description: "Pray with hope for the faithful departed.",
    prayerIds: ["eternal-rest", "prayer-for-the-faithful-departed", "holy-souls-in-purgatory", "psalm-130-guide"],
  },
];
