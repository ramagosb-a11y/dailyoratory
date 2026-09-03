export type MorningPrayer = {
  id: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  stage: "Presence" | "Offering" | "Purification" | "Communion" | "Protection" | "Intercession";
  optionalNote?: string;
};

export const morningPrayers: MorningPrayer[] = [
  {
    id: "sign-of-the-cross",
    title: "Sign of the Cross",
    text: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen.",
    image: "/images/morning-prayers/sign-of-the-cross.png",
    imageAlt: "A worshipper making the Sign of the Cross in a quiet chapel at dawn",
    stage: "Presence",
  },
  {
    id: "offering-of-indulgences",
    title: "Offering of Indulgences",
    text: "Lord Jesus, through Mary's hands, I offer You all the indulgences I may gain today. Please apply them, according to Your holy will, for my soul, or for a soul in Purgatory. May Your mercy be glorified in all things. Amen.",
    image: "/images/morning-prayers/offering-of-indulgences.png",
    imageAlt: "The Blessed Virgin Mary presenting an offering to the merciful Heart of Jesus",
    stage: "Offering",
  },
  {
    id: "morning-offering",
    title: "Morning Offering",
    text: "O Jesus, through the Immaculate Heart of Mary, I offer You my prayers, works, joys, and sufferings of this day in union with the Holy Sacrifice of the Mass throughout the world.\n\nI offer them for all the intentions of Your Sacred Heart: the salvation of souls, reparation for sin, and the reunion of all Christians.\n\nI offer them for the intentions of our bishops, of all the Apostleship of Prayer, and in particular for those recommended by our Holy Father this month.\n\nAmen.",
    image: "/images/morning-prayers/morning-offering.png",
    imageAlt: "Jesus and Mary receiving the offering of a new day in union with the Holy Mass",
    stage: "Offering",
  },
  {
    id: "detachment-from-sin",
    title: "Detachment from Sin",
    text: "Lord Jesus, detach my heart from all sin and every disordered attachment. Let me choose You above all things. Amen.",
    image: "/images/morning-prayers/detachment-from-sin.png",
    imageAlt: "Christ freeing a kneeling soul from chains and thorny vines at dawn",
    stage: "Purification",
  },
  {
    id: "fasting-prayer",
    title: "Fasting Prayer",
    text: "Lord Jesus, I offer this fast to You. Give me strength to endure, guard me from temptation, and keep my heart fixed on You alone. May this sacrifice purify my soul, draw me closer to Your Sacred Heart, and glorify the Father. Have mercy on me, a sinner. Amen.",
    image: "/images/morning-prayers/fasting-prayer.png",
    imageAlt: "Christ praying with peaceful resolve in the wilderness at sunrise",
    stage: "Purification",
    optionalNote: "For days when you are fasting",
  },
  {
    id: "act-of-contrition",
    title: "Act of Contrition",
    text: "O my God, I repent with my whole heart of all my sins, and I detest them, because I have deserved the loss of heaven and the pains of hell, but most of all because I have offended you, infinite Goodness. I firmly purpose with the help of your grace, which I pray you to grant me now and always, to do penance and rather to die than offend you again. I purpose also to receive the holy Sacraments during my life and at my death.",
    image: "/images/morning-prayers/act-of-contrition.png",
    imageAlt: "The risen Christ extending mercy to a kneeling penitent in a chapel",
    stage: "Purification",
  },
  {
    id: "act-of-spiritual-communion",
    title: "Act of Spiritual Communion",
    text: "My Jesus, I believe that you are in the Blessed Sacrament. I love you above all things, and I long for you in my soul. Since I cannot now receive you sacramentally, come at least spiritually into my heart. As though you have already come, I embrace you and unite myself entirely to you; never permit me to be separated from you.",
    image: "/images/morning-prayers/act-of-spiritual-communion.png",
    imageAlt: "Christ bringing the light of His Eucharistic presence to a kneeling worshipper",
    stage: "Communion",
  },
  {
    id: "guardian-angel",
    title: "Prayer to One’s Guardian Angel",
    text: "Angel of God, my guardian dear, to whom God's love commits me here, ever this day be at my side, to light and guard, to rule and guide. Amen.",
    image: "/images/morning-prayers/guardian-angel.png",
    imageAlt: "A guardian angel protecting and guiding a pilgrim along a morning path",
    stage: "Protection",
  },
  {
    id: "st-michael",
    title: "St. Michael Prayer",
    text: "St. Michael the Archangel, defend us in battle. Be our defense against the wickedness and snares of the Devil. May God rebuke him, we humbly pray, and do thou, O Prince of the heavenly hosts, by the power of God, thrust into hell Satan, and all the evil spirits, who prowl about the world seeking the ruin of souls. Amen.",
    image: "/images/morning-prayers/st-michael.png",
    imageAlt: "Saint Michael the Archangel standing in the light of God with sword and shield",
    stage: "Protection",
  },
  {
    id: "mother-and-father",
    title: "Prayer for Mother and Father",
    text: "Lord Jesus, bless my mother and father. Strengthen them in faith, protect them in every need, and reward their love, sacrifices, and care. Draw them close to Your Heart and keep them in Your peace. Amen.",
    image: "/images/morning-prayers/prayer-for-mother-and-father.png",
    imageAlt: "A mother and father receiving the blessing of Christ in their family home",
    stage: "Intercession",
  },
  {
    id: "spouse",
    title: "Prayer for Wife or Husband",
    text: "Lord Jesus, bless my wife or husband with peace, strength, and fidelity. Deepen our love, heal what is strained, and teach us to serve one another with patience and charity. Keep our home close to You. Amen.",
    image: "/images/morning-prayers/prayer-for-spouse.png",
    imageAlt: "A married couple kneeling together as Christ blesses their marriage",
    stage: "Intercession",
    optionalNote: "For those who are married",
  },
  {
    id: "children",
    title: "Prayer for Children",
    text: "Lord Jesus, watch over the children You have placed in my care. Guard their hearts, guide their steps, and help them grow in wisdom, charity, and holy joy. Amen.",
    image: "/images/morning-prayers/prayer-for-children.png",
    imageAlt: "Christ blessing children in a sunlit garden beside a chapel",
    stage: "Intercession",
    optionalNote: "For parents, guardians, and all who care for children",
  },
];
