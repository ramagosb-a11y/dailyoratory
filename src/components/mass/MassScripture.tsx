import scripture from "@/data/massScripture.json";
import type { MassJourneyStep } from "@/data/massJourney";

export function MassScripture({ lesson }: { lesson: MassJourneyStep }) {
  if (!lesson.scripture.length) throw new Error("Missing Mass Scripture: " + lesson.id);
  return (
    <section className="mass-scripture" aria-labelledby={"scripture-" + lesson.id}>
      <h3 id={"scripture-" + lesson.id}>Sacred Scripture</h3>
      <p className="mass-scripture-edition">{scripture.edition}</p>
      {lesson.scripture.map(({ passageId, connection }) => {
        const passage = scripture.passages[passageId as keyof typeof scripture.passages];
        if (!passage) throw new Error("Missing Mass passage: " + passageId);
        return (
          <section className="mass-scripture-passage" key={passageId} data-passage-id={passageId} aria-labelledby={lesson.id + "-" + passageId}>
            <h4 id={lesson.id + "-" + passageId}>{passage.reference}</h4>
            <div className="mass-scripture-verses">
              {passage.verses.map(verse => (
                <p key={verse.number} data-verse={verse.number}>
                  <sup aria-label={"Verse " + verse.number}>{verse.number}</sup>{" "}
                  <span>{verse.text}</span>
                </p>
              ))}
            </div>
            <a className="mass-scripture-source" href={passage.sourceUrl} target="_blank" rel="noopener noreferrer">Read this passage at eBible.org (opens a new tab)</a>
            <div className="mass-scripture-connection">
              <h5>Connection to this moment</h5>
              <p>{connection}</p>
              <small>Original teaching commentary, not a biblical or liturgical quotation.</small>
            </div>
          </section>
        );
      })}
      <a className="mass-scripture-source" href={scripture.editionUrl} target="_blank" rel="noopener noreferrer">Public-domain edition and source information (opens a new tab)</a>
    </section>
  );
}
