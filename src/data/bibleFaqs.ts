import type { BibleFAQ } from "@/types/bible";

export const bibleFaqs: BibleFAQ[] = [
  {
    id: "bible-faq-catholic-bible",
    question: "What makes a Bible a Catholic Bible?",
    answer:
      "A Catholic Bible includes the full Catholic canon, including the deuterocanonical books, and is published in a Catholic edition suitable for Catholic reading and formation.",
    category: "Basics",
    sortOrder: 10,
  },
  {
    id: "bible-faq-mass",
    question: "Do Catholics really hear the Bible at Mass?",
    answer:
      "Yes. The Mass is filled with Scripture in the readings, psalms, Gospel, prayers, acclamations, and Eucharistic language. The Lectionary gives the readings appointed for each day.",
    category: "Mass",
    sortOrder: 20,
  },
  {
    id: "bible-faq-random-verse",
    question: "Is it okay to open the Bible at random for an answer?",
    answer:
      "It is better to read prayerfully, in context, and with humility. Scripture can console and guide us, but it should not be treated like a magic answer machine for major decisions.",
    category: "Prayer",
    sortOrder: 30,
  },
  {
    id: "bible-faq-tradition",
    question: "Why do Catholics connect Scripture with Tradition and the Church?",
    answer:
      "Catholics believe Scripture belongs within the life of the Church that received, preserved, proclaimed, and faithfully interpreted the apostolic faith across the centuries.",
    category: "Interpretation",
    sortOrder: 40,
  },
  {
    id: "bible-faq-translation",
    question: "Which Catholic translation should I choose first?",
    answer:
      "Choose a readable Catholic edition that fits your goal. Many U.S. readers begin with NABRE and the USCCB daily readings, while study-focused readers often compare several approved Catholic editions.",
    category: "Translations",
    sortOrder: 50,
  },
  {
    id: "bible-faq-starting-point",
    question: "Where should a beginner start reading?",
    answer:
      "Begin with Jesus in the Gospels, especially Luke or John, and stay close to the daily Mass readings, Psalms, and the Church's prayer rather than trying to force a cover-to-cover plan immediately.",
    category: "Beginners",
    sortOrder: 60,
  },
];
