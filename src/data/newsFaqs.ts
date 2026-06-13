import type { NewsFAQ } from "@/types/news";

export const newsFaqs: NewsFAQ[] = [
  {
    id: "news-faq-best-source",
    question: "What is the best source for official Catholic news?",
    answer: "Start with the Vatican, the Holy See Press Office, your bishops' conference, your diocese, and your parish for official statements and announcements.",
    category: "official",
    sortOrder: 10,
  },
  {
    id: "news-faq-official",
    question: "Is every Catholic news website an official Church source?",
    answer: "No. Many Catholic outlets do valuable reporting, but official Church teaching and announcements come from the Vatican, bishops, dioceses, and parishes.",
    category: "discernment",
    sortOrder: 20,
  },
  {
    id: "news-faq-anxiety",
    question: "How should I read Catholic news without anxiety?",
    answer: "Read prayerfully, limit doom-scrolling, verify major claims, and turn concern into intercession, charity, or one concrete work of mercy.",
    category: "discernment",
    sortOrder: 30,
  },
  {
    id: "news-faq-verify",
    question: "How do I verify a major Church announcement?",
    answer: "Check the Vatican, the Holy See Press Office, your bishops' conference, your diocese, or your parish before repeating the claim.",
    category: "official",
    sortOrder: 40,
  },
  {
    id: "news-faq-commentary",
    question: "What is the difference between news and commentary?",
    answer: "News reports what happened. Commentary interprets it. Both can be useful, but they are not the same thing and neither replaces official teaching.",
    category: "discernment",
    sortOrder: 50,
  },
  {
    id: "news-faq-social",
    question: "Should I share Catholic news on social media?",
    answer: "Share slowly and with charity. Verify first, avoid gossip and outrage, and ask whether sharing will help people seek truth and peace.",
    category: "discernment",
    sortOrder: 60,
  },
  {
    id: "news-faq-pray",
    question: "How can I pray with the news?",
    answer: "Pause before reacting, name one intention, and offer a short prayer for the Church, the suffering, or those affected by the story.",
    category: "prayer",
    sortOrder: 70,
  },
  {
    id: "news-faq-spiritual-sites",
    question: "Why include spiritual news sites?",
    answer: "They can help readers connect headlines to prayer and reflection, but they are not substitutes for official Church sources or careful verification.",
    category: "spiritual",
    sortOrder: 80,
  },
  {
    id: "news-faq-local",
    question: "How do I find local diocesan news?",
    answer: "Visit your diocesan website, parish website, parish bulletin, or bishops' conference for local updates and official notices.",
    category: "local",
    sortOrder: 90,
  },
  {
    id: "news-faq-troubled",
    question: "What should I do if a headline troubles me?",
    answer: "Do not spiral. Verify the claim, pray first, step away if needed, and bring serious concerns to a priest, trusted leader, or the sacraments.",
    category: "discernment",
    sortOrder: 100,
  },
];
