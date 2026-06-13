type HomilyTopicBrowserProps = {
  topics: string[];
  activeTopic: string;
  onSelect: (topic: string) => void;
};

export function HomilyTopicBrowser({ topics, activeTopic, onSelect }: HomilyTopicBrowserProps) {
  return (
    <section>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Browse by topic</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onSelect("")}
          className={`focus-ring season-pill ${!activeTopic ? "border-gold bg-gold/15 text-navy" : ""}`}
        >
          All topics
        </button>
        {topics.map((topic) => (
          <button
            key={topic}
            type="button"
            onClick={() => onSelect(topic)}
            className={`focus-ring season-pill ${activeTopic === topic ? "border-gold bg-gold/15 text-navy" : ""}`}
          >
            {topic}
          </button>
        ))}
      </div>
    </section>
  );
}
