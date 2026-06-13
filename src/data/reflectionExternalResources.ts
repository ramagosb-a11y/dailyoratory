import type { ReflectionExternalResource } from "@/types/reflections";

export const reflectionExternalResources = [
  {
    id: "usccb-daily-readings",
    title: "USCCB Daily Readings",
    slug: "usccb-daily-readings",
    url: "https://bible.usccb.org/",
    description:
      "Official daily Mass readings, audio, video reflections, and prayers from the United States Conference of Catholic Bishops.",
    badge: "Official readings",
    sourceType: "official-church",
    official: true,
    sortOrder: 10,
  },
  {
    id: "daily-scripture-readings-and-meditations",
    title: "Daily Scripture Readings and Meditations",
    slug: "daily-scripture-readings-and-meditations",
    url: "https://www.dailyscripture.net/daily-meditation/",
    description:
      "Daily Scripture meditation and prayerful reflection to help readers enter more deeply into the Word of God.",
    badge: "Daily meditation",
    sourceType: "trusted-catholic-reflection",
    official: false,
    sortOrder: 20,
  },
  {
    id: "creighton-daily-reflections",
    title: "Creighton University Daily Reflections",
    slug: "creighton-university-daily-reflections",
    url: "https://onlineministries.creighton.edu/daily-reflections",
    description:
      "Daily reflections on the Scripture readings written by members of the Creighton University community.",
    badge: "University reflections",
    sourceType: "university",
    official: false,
    sortOrder: 30,
  },
  {
    id: "my-catholic-life-daily-reflections",
    title: "Catholic Daily Reflections / My Catholic Life",
    slug: "catholic-daily-reflections-my-catholic-life",
    url: "https://mycatholic.life/daily-reflections/",
    description:
      "Daily Catholic Gospel meditations for prayer, devotion, and preparation for Mass.",
    badge: "Gospel meditation",
    sourceType: "trusted-catholic-reflection",
    official: false,
    sortOrder: 40,
  },
  {
    id: "word-on-fire-daily-gospel-reflections",
    title: "Word on Fire Daily Gospel Reflections",
    slug: "word-on-fire-daily-gospel-reflections",
    url: "https://www.wordonfire.org/reflections/",
    description:
      "Daily Gospel reflections from Bishop Robert Barron and Word on Fire.",
    badge: "Gospel reflections",
    sourceType: "trusted-catholic-reflection",
    official: false,
    sortOrder: 50,
  },
  {
    id: "living-faith",
    title: "Living Faith",
    slug: "living-faith",
    url: "https://www.livingfaith.com/",
    description:
      "Daily Catholic devotions based on Scripture verses from the daily or Sunday Mass.",
    badge: "Daily devotion",
    sourceType: "email-devotion",
    official: false,
    sortOrder: 60,
  },
  {
    id: "faithnd-daily-gospel-reflection",
    title: "FaithND Daily Gospel Reflection",
    slug: "faithnd-daily-gospel-reflection",
    url: "https://faith.nd.edu/",
    description:
      "Daily Gospel reading, reflection, prayer, and saint content from the Notre Dame family.",
    badge: "Gospel and prayer",
    sourceType: "university",
    official: false,
    sortOrder: 70,
  },
  {
    id: "augustine-institute-daily-reflections",
    title: "Augustine Institute Catholic Daily Reflections with Dr. Tim Gray",
    slug: "augustine-institute-catholic-daily-reflections-with-dr-tim-gray",
    url: "https://www.augustineinstitute.org/podcast/catholic-daily-reflections-with-dr-tim-gray",
    description:
      "Daily Catholic Mass readings commentary with practical ideas for applying Scripture to daily life.",
    badge: "Audio reflection",
    sourceType: "audio-video",
    official: false,
    sortOrder: 80,
  },
  {
    id: "dynamic-catholic-daily-reflections",
    title: "Dynamic Catholic Daily Reflections",
    slug: "dynamic-catholic-daily-reflections",
    url: "https://www.dynamiccatholic.com/daily-reflections.html",
    description:
      "Daily Catholic inspiration and reflections available by email.",
    badge: "Email reflection",
    sourceType: "email-devotion",
    official: false,
    sortOrder: 90,
  },
] satisfies ReflectionExternalResource[];
