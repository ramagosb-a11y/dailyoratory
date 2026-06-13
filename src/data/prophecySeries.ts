import type {
  ProphecyEpisode,
  ProphecySeriesCTA,
  ProphecySeriesOverviewCard,
  ProphecySeriesResource,
} from "@/types/prophecySeries";

export const prophecySeriesSlug = "prophecy-series";
export const prophecySeriesPath = "/prophecy-series";
export const prophecySeriesPlaylistId = "PL8juc41KfKjAIBi-tuL-Zw-Ighf3Ma1Qb";
export const prophecySeriesPlaylistUrl =
  "https://www.youtube.com/playlist?list=PL8juc41KfKjAIBi-tuL-Zw-Ighf3Ma1Qb";
export const prophecySeriesPlaylistEmbedUrl =
  "https://www.youtube.com/embed/videoseries?list=PL8juc41KfKjAIBi-tuL-Zw-Ighf3Ma1Qb";
export const prophecySeriesPremiereDate = "2026-06-07T18:00:00-05:00";
export const prophecySeriesPremiereDisplayDate = "June 7";
export const prophecySeriesPremiereDisplayTime = "6:00 PM CST";
export const prophecySeriesFrequency = "Every Sunday at 6:00 PM CST";
export const prophecySeriesEpisodeCount = 12;

const weekInMs = 7 * 24 * 60 * 60 * 1000;
const premiereDate = new Date(prophecySeriesPremiereDate);

function formatEpisodeDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export const prophecySeriesHeroCtas: ProphecySeriesCTA[] = [
  {
    id: "prophecy-watch-series",
    label: "Watch the Series",
    href: prophecySeriesPlaylistUrl,
    variant: "primary",
    sortOrder: 10,
  },
  {
    id: "prophecy-subscribe-series",
    label: "Subscribe and Set Notifications",
    href: prophecySeriesPlaylistUrl,
    variant: "secondary",
    sortOrder: 20,
  },
];

export const prophecySeriesOverviewCards: ProphecySeriesOverviewCard[] = [
  {
    id: "prophecy-scripture",
    title: "Prophecy in Scripture",
    description:
      "Trace how prophecy in salvation history points toward Christ, deepens trust in the Word of God, and teaches the Church to read events in the light of Scripture.",
    sortOrder: 10,
  },
  {
    id: "prophecy-discernment",
    title: "Discernment and humility",
    description:
      "Approach future-oriented spiritual topics with humility, sober judgment, and a willingness to stay close to the Church rather than drifting into fear or speculation.",
    sortOrder: 20,
  },
  {
    id: "prophecy-prayer",
    title: "The role of prayer",
    description:
      "Let prophecy move the heart toward prayer, listening, intercession, and deeper dependence on the Holy Spirit.",
    sortOrder: 30,
  },
  {
    id: "prophecy-hope",
    title: "Hope instead of fear",
    description:
      "Receive prophecy in a way that strengthens hope in God’s providence and steady confidence in Christ rather than anxiety or sensationalism.",
    sortOrder: 40,
  },
  {
    id: "prophecy-conversion",
    title: "Conversion and repentance",
    description:
      "See how authentic calls to watchfulness always return the soul to repentance, mercy, and a renewed desire for holiness.",
    sortOrder: 50,
  },
  {
    id: "prophecy-providence",
    title: "Trust in God’s providence",
    description:
      "Remember that God governs history with wisdom and love, and that discernment begins by entrusting the future to Him.",
    sortOrder: 60,
  },
  {
    id: "prophecy-faithfulness",
    title: "Living faithfully today",
    description:
      "Learn to respond not by chasing predictions, but by living the Gospel faithfully in prayer, charity, and daily obedience.",
    sortOrder: 70,
  },
  {
    id: "prophecy-church",
    title: "Remaining close to Christ and His Church",
    description:
      "Stay rooted in Scripture, the sacraments, Church teaching, and pastoral guidance so that spiritual curiosity matures into discipleship.",
    sortOrder: 80,
  },
];

export const prophecySeriesEpisodes: ProphecyEpisode[] = Array.from(
  { length: prophecySeriesEpisodeCount },
  (_, index) => {
    const episodeNumber = index + 1;
    const releaseDate = new Date(premiereDate.getTime() + index * weekInMs);
    const status =
      episodeNumber === 1 ? "Premieres Soon" : episodeNumber === prophecySeriesEpisodeCount ? "Coming Soon" : "Coming Soon";

    return {
      id: `prophecy-episode-${episodeNumber}`,
      episodeNumber,
      title:
        episodeNumber === 1
          ? "Prophecy Series Premiere"
          : episodeNumber === prophecySeriesEpisodeCount
            ? "Series Conclusion"
            : "Coming Soon",
      description:
        episodeNumber === 1
          ? "The opening episode introduces the series and its Catholic approach to prophecy through Scripture, faith, and hope in Christ."
          : "Episode details will be updated as each Sunday release approaches.",
      releaseLabel: `${formatEpisodeDate(releaseDate)} · 6:00 PM CST`,
      releaseDate: releaseDate.toISOString(),
      youtubeUrl: prophecySeriesPlaylistUrl,
      status,
      sortOrder: episodeNumber * 10,
    };
  },
);

export const prophecySeriesFollowSteps = [
  "Open the YouTube playlist.",
  "Subscribe to the channel.",
  "Tap the notification bell.",
  "Watch each Sunday at 6:00 PM CST.",
  "Pray before and after each episode.",
  "Take notes on Scripture, questions, and insights.",
  "Share the series with someone who may benefit.",
] as const;

export const prophecySeriesPrayer = `Holy Spirit,
guide my mind and heart as I watch this series.
Keep me rooted in Jesus Christ,
faithful to truth,
free from fear,
and open to conversion.

Help me receive what is good,
discern what needs wisdom,
and grow in prayer, hope, and love.

Lead me closer to the Father,
through Jesus Christ our Lord.
Amen.`;

export const prophecySeriesReflectionPrompts = [
  "What stood out to me from this episode?",
  "What Scripture or teaching should I return to?",
  "Did this lead me toward peace, conversion, prayer, and trust in God?",
  "What question should I continue studying?",
  "What is one concrete step I can take this week?",
  "How is the Holy Spirit inviting me to grow?",
] as const;

export const prophecySeriesRelatedLinks: ProphecySeriesResource[] = [
  {
    id: "prophecy-link-bible",
    title: "The Bible",
    description: "Read Scripture with the Church and stay rooted in the Word of God.",
    href: "/bible",
    type: "internal",
    sortOrder: 10,
  },
  {
    id: "prophecy-link-scripture-prayer",
    title: "Scripture Prayer",
    description: "Pray with Scripture and deepen your listening to God’s voice.",
    href: "/library/scripture-prayer",
    type: "internal",
    sortOrder: 20,
  },
  {
    id: "prophecy-link-formation",
    title: "Formation",
    description: "Grow in doctrine, discernment, prayer, and steady discipleship.",
    href: "/formation",
    type: "internal",
    sortOrder: 30,
  },
  {
    id: "prophecy-link-catechism",
    title: "Catechism",
    description: "Study Catholic teaching with clarity and confidence.",
    href: "/catechism",
    type: "internal",
    sortOrder: 40,
  },
  {
    id: "prophecy-link-prayer",
    title: "Prayer",
    description: "Enter prayer and remain close to Christ in daily life.",
    href: "/pray",
    type: "internal",
    sortOrder: 50,
  },
  {
    id: "prophecy-link-examen",
    title: "Daily Examen",
    description: "Review the day in gratitude, mercy, and trust before God.",
    href: "/daily-examen",
    type: "internal",
    sortOrder: 60,
  },
  {
    id: "prophecy-link-confession",
    title: "Confession Guide",
    description: "Return to the Lord with repentance, peace, and sacramental mercy.",
    href: "/confession",
    type: "internal",
    sortOrder: 70,
  },
  {
    id: "prophecy-link-mass-readings",
    title: "Mass Readings Reflections",
    description: "Stay grounded in the Church’s daily Scripture rhythm.",
    href: "/reflections/mass-readings",
    type: "internal",
    sortOrder: 80,
  },
  {
    id: "prophecy-link-media",
    title: "Media",
    description: "Browse more Daily Oratory videos, playlists, and formation resources.",
    href: "/media",
    type: "internal",
    sortOrder: 90,
  },
  {
    id: "prophecy-link-news",
    title: "News and Catholic Resources",
    description: "Read current Catholic news with discernment and perspective.",
    href: "/news",
    type: "internal",
    sortOrder: 100,
  },
];

export const prophecySeriesDiscernmentNote =
  "Catholics should approach prophecy, private revelation, signs, and future-oriented spiritual topics with humility, prayer, and discernment. Authentic reflection should lead to Jesus Christ, conversion, charity, hope, and fidelity to the Church. This series is offered as a faith-building resource and should not replace Scripture, the sacraments, Church teaching, or priestly counsel.";
