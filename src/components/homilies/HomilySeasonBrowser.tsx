type HomilySeasonBrowserProps = {
  seasons: string[];
  activeSeason: string;
  onSelect: (season: string) => void;
};

export function HomilySeasonBrowser({ seasons, activeSeason, onSelect }: HomilySeasonBrowserProps) {
  return (
    <section>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Browse by liturgical season</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onSelect("")}
          className={`focus-ring season-pill ${!activeSeason ? "border-gold bg-gold/15 text-navy" : ""}`}
        >
          All seasons
        </button>
        {seasons.map((season) => (
          <button
            key={season}
            type="button"
            onClick={() => onSelect(season)}
            className={`focus-ring season-pill ${activeSeason === season ? "border-gold bg-gold/15 text-navy" : ""}`}
          >
            {season}
          </button>
        ))}
      </div>
    </section>
  );
}
