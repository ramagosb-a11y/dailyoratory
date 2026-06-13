export type ProphecyEpisodeStatus = "Coming Soon" | "Premieres Soon" | "Now Available";

export type ProphecyEpisode = {
  id: string;
  episodeNumber: number;
  title: string;
  description: string;
  releaseLabel: string;
  releaseDate: string;
  youtubeUrl: string;
  status: ProphecyEpisodeStatus;
  sortOrder: number;
};

export type ProphecySeriesResource = {
  id: string;
  title: string;
  description: string;
  href: string;
  type: "internal" | "external";
  sortOrder: number;
};

export type ProphecySeriesCTA = {
  id: string;
  label: string;
  href: string;
  variant: "primary" | "secondary" | "ghost";
  sortOrder: number;
};

export type ProphecySeriesOverviewCard = {
  id: string;
  title: string;
  description: string;
  sortOrder: number;
};
