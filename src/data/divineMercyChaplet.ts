export type DivineMercySection = "opening" | "decade" | "conclusion";

export type DivineMercyStep = {
  id: string;
  section: DivineMercySection;
  title: string;
  instruction: string;
  text: string;
  decade?: number;
  bead?: number;
  repeat?: { current: number; total: number };
  durationSeconds: number;
};

export const DIVINE_MERCY_CHAPLET_SOURCE =
  "https://thedivinemercy.org/message/devotions/pray-the-chaplet";

export const DIVINE_MERCY_INDULGENCE_SOURCE =
  "https://www.vatican.va/roman_curia/tribunals/apost_penit/documents/rc_trib_appen_doc_20020629_decree-ii_en.html";

export const DIVINE_MERCY_HOUR_SOURCE =
  "https://thedivinemercy.org/articles/carrying-out-divine-mercy-hour-great-mercy-feast-deeds-and-chaplet";

export function buildDivineMercyChapletSteps(): DivineMercyStep[] {
  const steps: DivineMercyStep[] = [
    {
      id: "sign-of-cross",
      section: "opening",
      title: "Sign of the Cross",
      instruction: "Begin in the name of the Holy Trinity",
      text: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen.",
      durationSeconds: 8,
    },
    {
      id: "optional-opening",
      section: "opening",
      title: "Optional Opening Prayer",
      instruction: "Pause with Christ in His Passion",
      text: "You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us.",
      durationSeconds: 28,
    },
    ...Array.from({ length: 3 }, (_, index): DivineMercyStep => ({
      id: `blood-and-water-${index + 1}`,
      section: "opening",
      title: "O Blood and Water",
      instruction: "Pray three times",
      text: "O Blood and Water, which gushed forth from the Heart of Jesus as a fount of mercy for us, I trust in You!",
      repeat: { current: index + 1, total: 3 },
      durationSeconds: 12,
    })),
    {
      id: "our-father",
      section: "opening",
      title: "Our Father",
      instruction: "On the first bead",
      text: "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.",
      durationSeconds: 28,
    },
    {
      id: "hail-mary",
      section: "opening",
      title: "Hail Mary",
      instruction: "On the second bead",
      text: "Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.",
      durationSeconds: 24,
    },
    {
      id: "apostles-creed",
      section: "opening",
      title: "The Apostles’ Creed",
      instruction: "On the third bead",
      text: "I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, His only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; He descended into hell; on the third day He rose again from the dead; He ascended into heaven, and is seated at the right hand of God the Father almighty; from there He will come to judge the living and the dead. I believe in the Holy Spirit, the holy Catholic Church, the Communion of Saints, the forgiveness of sins, the Resurrection of the body, and life everlasting. Amen.",
      durationSeconds: 48,
    },
  ];

  for (let decade = 1; decade <= 5; decade += 1) {
    steps.push({
      id: `decade-${decade}-eternal-father`,
      section: "decade",
      decade,
      bead: 0,
      title: `Decade ${decade} of 5`,
      instruction: "On the large bead",
      text: "Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your Dearly Beloved Son, Our Lord, Jesus Christ, in atonement for our sins and those of the whole world.",
      durationSeconds: 22,
    });

    for (let bead = 1; bead <= 10; bead += 1) {
      steps.push({
        id: `decade-${decade}-passion-${bead}`,
        section: "decade",
        decade,
        bead,
        title: `Decade ${decade} of 5`,
        instruction: `Bead ${bead} of 10`,
        text: "For the sake of His sorrowful Passion, have mercy on us and on the whole world.",
        durationSeconds: 10,
      });
    }
  }

  for (let repeat = 1; repeat <= 3; repeat += 1) {
    steps.push({
      id: `holy-god-${repeat}`,
      section: "conclusion",
      title: "Holy God",
      instruction: "Conclude by praying three times",
      text: "Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world.",
      repeat: { current: repeat, total: 3 },
      durationSeconds: 12,
    });
  }

  steps.push(
    {
      id: "optional-closing",
      section: "conclusion",
      title: "Optional Closing Prayer",
      instruction: "Entrust yourself to God’s merciful will",
      text: "Eternal God, in whom mercy is endless and the treasury of compassion inexhaustible, look kindly upon us and increase Your mercy in us, that in difficult moments we might not despair nor become despondent, but with great confidence submit ourselves to Your holy will, which is Love and Mercy itself.",
      durationSeconds: 32,
    },
    {
      id: "final-sign-of-cross",
      section: "conclusion",
      title: "Sign of the Cross",
      instruction: "Close in the name of the Holy Trinity",
      text: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen.",
      durationSeconds: 8,
    },
  );

  return steps;
}

export const DIVINE_MERCY_CHAPLET_STEPS = buildDivineMercyChapletSteps();
