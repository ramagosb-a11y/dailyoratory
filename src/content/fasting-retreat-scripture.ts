export type RetreatReading = {
  reference: string;
  sourceUrl: string;
  note?: string;
  verses: { number: number; text: string }[];
};
// Public-domain Douay–Rheims, American Edition of 1899. References verified at eBible.org.
// Excerpts are explicitly identified; links open the complete chapter.
export const readings: Record<string, RetreatReading> = {
  preparation: {
    reference: "Psalm 50:3–4, 12–14",
    note: "Psalm 50 in the Douay–Rheims is Psalm 51 in many modern editions.",
    sourceUrl: "https://ebible.org/engDRA/PSA050.htm",
    verses: [
      {
        number: 3,
        text: "Have mercy on me, O God, according to thy great mercy. And according to the multitude of thy tender mercies blot out my iniquity.",
      },
      {
        number: 4,
        text: "Wash me yet more from my iniquity, and cleanse me from my sin.",
      },
      {
        number: 12,
        text: "Create a clean heart in me, O God: and renew a right spirit within my bowels.",
      },
      {
        number: 13,
        text: "Cast me not away from thy face; and take not thy holy spirit from me.",
      },
      {
        number: 14,
        text: "Restore unto me the joy of thy salvation, and strengthen me with a perfect spirit.",
      },
    ],
  },
  "day-1": {
    reference: "John 15:1–11",
    note: "Selected verses 1–5 and 9–11. Open the complete passage to continue reading.",
    sourceUrl: "https://ebible.org/engDRA/JHN15.htm",
    verses: [
      {
        number: 1,
        text: "I am the true vine; and my Father is the husbandman.",
      },
      {
        number: 2,
        text: "Every branch in me, that beareth not fruit, he will take away: and every one that beareth fruit, he will purge it, that it may bring forth more fruit.",
      },
      {
        number: 3,
        text: "Now you are clean by reason of the word, which I have spoken to you.",
      },
      {
        number: 4,
        text: "Abide in me, and I in you. As the branch cannot bear fruit of itself, unless it abide in the vine, so neither can you, unless you abide in me.",
      },
      {
        number: 5,
        text: "I am the vine: you the branches: he that abideth in me, and I in him, the same beareth much fruit: for without me you can do nothing.",
      },
      {
        number: 9,
        text: "As the Father hath loved me, I also have loved you.",
      },
      {
        number: 10,
        text: "If you keep my commandments, you shall abide in my love; as I also have kept my Father’s commandments, and do abide in his love.",
      },
      {
        number: 11,
        text: "These things I have spoken to you, that my joy may be in you, and your joy may be filled.",
      },
    ],
  },
  "day-2": {
    reference: "Luke 1:26–38",
    sourceUrl: "https://ebible.org/engDRA/LUK01.htm",
    verses: [
      {
        number: 26,
        text: "And in the sixth month, the angel Gabriel was sent from God into a city of Galilee, called Nazareth,",
      },
      {
        number: 27,
        text: "To a virgin espoused to a man whose name was Joseph, of the house of David; and the virgin’s name was Mary.",
      },
      {
        number: 28,
        text: "And the angel being come in, said unto her: Hail, full of grace, the Lord is with thee: blessed art thou among women.",
      },
      {
        number: 29,
        text: "Who having heard, was troubled at his saying, and thought with herself what manner of salutation this should be.",
      },
      {
        number: 30,
        text: "And the angel said to her: Fear not, Mary, for thou hast found grace with God.",
      },
      {
        number: 31,
        text: "Behold thou shalt conceive in thy womb, and shalt bring forth a son; and thou shalt call his name Jesus.",
      },
      {
        number: 32,
        text: "He shall be great, and shall be called the Son of the most High; and the Lord God shall give unto him the throne of David his father; and he shall reign in the house of Jacob for ever.",
      },
      { number: 33, text: "And of his kingdom there shall be no end." },
      {
        number: 34,
        text: "And Mary said to the angel: How shall this be done, because I know not man?",
      },
      {
        number: 35,
        text: "And the angel answering, said to her: The Holy Ghost shall come upon thee, and the power of the most High shall overshadow thee. And therefore also the Holy which shall be born of thee shall be called the Son of God.",
      },
      {
        number: 36,
        text: "And behold thy cousin Elizabeth, she also hath conceived a son in her old age; and this is the sixth month with her that is called barren:",
      },
      { number: 37, text: "Because no word shall be impossible with God." },
      {
        number: 38,
        text: "And Mary said: Behold the handmaid of the Lord; be it done to me according to thy word. And the angel departed from her.",
      },
    ],
  },
  "day-3": {
    reference: "Matthew 1:18–25",
    sourceUrl: "https://ebible.org/engDRA/MAT01.htm",
    verses: [
      {
        number: 18,
        text: "Now the generation of Christ was in this wise. When as his mother Mary was espoused to Joseph, before they came together, she was found with child, of the Holy Ghost.",
      },
      {
        number: 19,
        text: "Whereupon Joseph her husband, being a just man, and not willing publicly to expose her, was minded to put her away privately.",
      },
      {
        number: 20,
        text: "But while he thought on these things, behold the angel of the Lord appeared to him in his sleep, saying: Joseph, son of David, fear not to take unto thee Mary thy wife, for that which is conceived in her, is of the Holy Ghost.",
      },
      {
        number: 21,
        text: "And she shall bring forth a son: and thou shalt call his name JESUS. For he shall save his people from their sins.",
      },
      {
        number: 22,
        text: "Now all this was done that it might be fulfilled which the Lord spoke by the prophet, saying:",
      },
      {
        number: 23,
        text: "Behold a virgin shall be with child, and bring forth a son, and they shall call his name Emmanuel, which being interpreted is, God with us.",
      },
      {
        number: 24,
        text: "And Joseph rising up from sleep, did as the angel of the Lord had commanded him, and took unto him his wife.",
      },
      {
        number: 25,
        text: "And he knew her not till she brought forth her firstborn son: and he called his name JESUS.",
      },
    ],
  },
  "day-1-evening": {
    reference: "Matthew 5",
    sourceUrl: "https://ebible.org/engDRA/MAT05.htm",
    verses: [],
  },
  "day-2-evening": {
    reference: "Matthew 6",
    sourceUrl: "https://ebible.org/engDRA/MAT06.htm",
    verses: [],
  },
  "day-3-evening": {
    reference: "Matthew 7:13–14",
    sourceUrl: "https://ebible.org/engDRA/MAT07.htm",
    verses: [],
  },
};
