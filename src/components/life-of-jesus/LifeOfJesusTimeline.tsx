import Image from "next/image";
import { Fragment } from "react";
import type {
  LifeOfJesusCatholicClassification,
  LifeOfJesusChapter,
  LifeOfJesusChronologyConfidence,
  LifeOfJesusEra,
  LifeOfJesusRecord,
  LifeOfJesusScripturePassage,
  LifeOfJesusStop,
} from "@/types/lifeOfJesus";
import { lifeOfJesusAsset, lifeOfJesusEraVisuals, lifeOfJesusVisualMilestones } from "@/data/lifeOfJesusVisuals";
import { getLifeOfJesusDouayRheims } from "@/data/lifeOfJesusDouayRheims";

const chronologyLabels: Record<LifeOfJesusChronologyConfidence, string> = {
  explicit: "Sequence stated in Scripture",
  "strong-inference": "Strong chronological inference",
  "traditional-harmony": "Traditional Gospel-harmony placement",
  uncertain: "Order remains uncertain",
};

const classificationLabels: Record<LifeOfJesusCatholicClassification, string> = {
  "narrated-history": "Narrated event",
  typology: "Biblical typology",
  doctrine: "Doctrine",
  "liturgical-commemoration": "Liturgical commemoration",
  "devotional-tradition": "Devotional tradition",
};

const relationshipLabels = {
  distinct: "Distinct episode",
  parallel: "Parallel account",
  "possibly-parallel": "Possibly parallel",
  disputed: "Placement disputed",
  interleaved: "Accounts interleaved",
} as const;

export function eraAnchorId(era: Pick<LifeOfJesusEra, "id">) {
  return `era-${era.id}`;
}

export function LifeOfJesusTimeline({ eras }: { eras: readonly LifeOfJesusEra[] }) {
  return (
    <div className="life-jesus-timeline" aria-label="Life of Jesus Pilgrim’s Path timeline">
      {eras.map((era) => (
        <Fragment key={era.id}>
          {era.partNumber === 12 ? <PassionSafeguard /> : null}
          <EraSection era={era} />
        </Fragment>
      ))}
    </div>
  );
}

function PassionSafeguard() {
  return (
    <aside className="life-jesus-passion-safeguard" aria-labelledby="life-jesus-passion-safeguard-title">
      <p className="life-jesus-note-kicker">A Catholic safeguard before the Passion</p>
      <h2 id="life-jesus-passion-safeguard-title" className="font-display">
        Read the Passion without collective blame
      </h2>
      <p>
        The Gospel accounts name particular leaders, officials, soldiers, and crowds; responsibility for Jesus’ Passion
        cannot be charged indiscriminately to Jewish people then or now. The Church also recognizes the responsibility
        of sinners in Christ’s Passion.
      </p>
      <a
        href="https://www.vatican.va/content/catechism/en/part_one/section_two/chapter_two/article_4/paragraph_2_jesus_died_crucified.html"
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring"
        aria-label="Catechism of the Catholic Church paragraphs 597 to 598, opens in a new tab"
      >
        Catechism of the Catholic Church 597–598 <span aria-hidden="true">↗</span>
      </a>
    </aside>
  );
}

function EraSection({ era }: { era: LifeOfJesusEra }) {
  const visual = lifeOfJesusEraVisuals.find((anchor) => anchor.eraId === era.id);
  const visualAsset = visual ? lifeOfJesusAsset(visual.assetId) : undefined;
  const milestones = lifeOfJesusVisualMilestones.filter((milestone) => milestone.eraId === era.id);

  return (
    <section id={eraAnchorId(era)} className="life-jesus-era" aria-labelledby={`${eraAnchorId(era)}-title`}>
      <header className="life-jesus-era-header">
        <p className="life-jesus-era-kicker">Part {era.romanNumeral}</p>
        <h2 id={`${eraAnchorId(era)}-title`} className="font-display">
          {era.title}
        </h2>
        {era.theme ? <p className="life-jesus-era-theme">{era.theme}</p> : null}
        {era.approximatePeriod ? <p className="life-jesus-era-period">Approximate period: {era.approximatePeriod}</p> : null}
      </header>

      {visualAsset ? (
        <figure className="life-jesus-era-interlude">
          <div className="life-jesus-era-image" style={{ position: "relative" }}>
            <Image
              src={visualAsset.src}
              alt={visualAsset.alt}
              fill
              sizes="(min-width: 1100px) 64rem, (min-width: 720px) 88vw, 100vw"
              className="object-cover"
              style={{ objectPosition: visualAsset.focalPosition ?? "center" }}
            />
          </div>
          <figcaption>
            <span>{visualAsset.caption}</span>
            <small>Devotional artwork from the Daily Oratory sacred-art library</small>
          </figcaption>
        </figure>
      ) : null}

      {era.partNumber === 9 ? (
        <LateMinistryCluster era={era} />
      ) : (
        <div className="life-jesus-era-track">
          <span className="life-jesus-pilgrim-rail" aria-hidden="true" />
          {era.chapters.map((chapter) => (
          <section
            key={chapter.id}
            id={`chapter-${chapter.id}`}
            className="life-jesus-chapter"
            aria-labelledby={`chapter-${chapter.id}-title`}
          >
            <header className="life-jesus-chapter-header">
              <p>Chapter {chapter.chapterNumber}</p>
              <h3 id={`chapter-${chapter.id}-title`} className="font-display">
                {chapter.title}
              </h3>
            </header>
            <ChapterStops stops={chapter.stops} />
          </section>
          ))}
        </div>
      )}

      {milestones.length ? (
        <div className="life-jesus-milestone-strip" aria-label={`${era.title} visual milestones`}>
          {milestones.map((milestone) => {
            const asset = lifeOfJesusAsset(milestone.assetId);
            if (!asset) return null;
            return (
              <figure key={milestone.id} className="life-jesus-milestone">
                <div>
                  <Image src={asset.src} alt={asset.alt} fill sizes="(min-width: 1100px) 18rem, (min-width: 720px) 30vw, 100vw" className="object-cover" />
                </div>
                <figcaption>{milestone.label}</figcaption>
              </figure>
            );
          })}
        </div>
      ) : null}

      <a href="#life-of-jesus-eras" className="life-jesus-back-to-eras focus-ring">
        Back to the eras ↑
      </a>
    </section>
  );
}

function LateMinistryCluster({ era }: { era: LifeOfJesusEra }) {
  const lukeChapter = era.chapters.find((chapter) => chapter.chapterNumber === 11);
  const johnChapter = era.chapters.find((chapter) => chapter.chapterNumber === 12);
  const lukeRoot = era.chapters.flatMap((chapter) => chapter.stops).find((stop) => stop.sourceEntryNumber === 143);
  const johnRoot = era.chapters.flatMap((chapter) => chapter.stops).find((stop) => stop.sourceEntryNumber === 163);
  if (!lukeChapter || !johnChapter || !lukeRoot || !johnRoot) return null;

  const lukeRecords: LifeOfJesusRecord[] = [lukeRoot, ...lukeRoot.teachingUnits];
  const johnFestivalRecords = johnRoot.teachingUnits.filter((record) => record.sourceEntryNumber <= 169);
  const finalApproachRecords = johnRoot.teachingUnits.filter((record) => record.sourceEntryNumber >= 170);
  const johnRecords: LifeOfJesusRecord[] = [johnRoot, ...johnFestivalRecords];

  return (
    <section className="life-jesus-late-ministry" aria-labelledby="life-jesus-late-ministry-title">
      <header>
        <p>Accounts preserved without inter-stack order</p>
        <h3 id="life-jesus-late-ministry-title" className="font-display">
          Luke’s travel narrative and John’s feast cycle
        </h3>
        <p>
          These two Gospel sequences belong to the same broad final period of ministry, but Scripture does not establish
          a single day-by-day order between them. Their position side by side is not a claim that one stack precedes the other.
        </p>
      </header>
      <div className="life-jesus-late-ministry-lanes">
        <SourceLane chapter={lukeChapter} title="Luke’s journey toward Jerusalem" records={lukeRecords} />
        <SourceLane chapter={johnChapter} title="John’s Jerusalem feast cycle" records={johnRecords} />
      </div>
      <section className="life-jesus-final-approach" aria-labelledby="life-jesus-final-approach-title">
        <h4 id="life-jesus-final-approach-title" className="font-display">The final Jericho and Bethany approach</h4>
        <p>The accounts converge on Jesus’ final approach while preserving their source-specific details and order.</p>
        <div className="life-jesus-source-panels">
          {finalApproachRecords.map((record) => <SourceRecordPanel key={record.id} record={record} />)}
        </div>
      </section>
    </section>
  );
}

function SourceLane({
  chapter,
  title,
  records,
}: {
  chapter: LifeOfJesusChapter;
  title: string;
  records: LifeOfJesusRecord[];
}) {
  return (
    <section
      id={`chapter-${chapter.id}`}
      className="life-jesus-late-ministry-lane"
      aria-labelledby={`chapter-${chapter.id}-title`}
    >
      <header className="life-jesus-late-ministry-chapter">
        <p>Chapter {chapter.chapterNumber} landmark</p>
        <h4 id={`chapter-${chapter.id}-title`} className="font-display">{chapter.title}</h4>
        <p>{title}</p>
      </header>
      <div>
        {records.map((record) => <SourceRecordPanel key={record.id} record={record} />)}
      </div>
    </section>
  );
}

function SourceRecordPanel({ record }: { record: LifeOfJesusRecord }) {
  return (
    <article id={record.id} aria-labelledby={`${record.id}-title`}>
      <p className="life-jesus-panel-source">{sourceNames(record.scripturePassages)}</p>
      <h5 id={`${record.id}-title`} className="font-display">{record.title}</h5>
      <p>{record.summary}</p>
      <RecordLabels record={record} compact />
      <PassageLinks passages={record.scripturePassages} compact />
      <ChronologyNote record={record} />
      <RecordSources record={record} />
    </article>
  );
}

function ChapterStops({ stops }: { stops: LifeOfJesusStop[] }) {
  const templeCleansing = stops.find((stop) => stop.sourceEntryNumber === 178);
  return (
    <ol className="life-jesus-stops">
      {stops.map((stop) => {
        if (stop.sourceEntryNumber === 178 && stops.some((candidate) => candidate.sourceEntryNumber === 177)) return null;
        if (stop.sourceEntryNumber === 177 && templeCleansing) {
          return <FigTreeTempleIntercalation key={stop.id} figTree={stop} temple={templeCleansing} />;
        }
        return <StopCard key={stop.id} stop={stop} />;
      })}
    </ol>
  );
}

function FigTreeTempleIntercalation({ figTree, temple }: { figTree: LifeOfJesusStop; temple: LifeOfJesusStop }) {
  return (
    <li id={figTree.id} className="life-jesus-stop life-jesus-stop--intercalation">
      <span className="life-jesus-stop-marker" aria-hidden="true" />
      <article aria-labelledby={`${figTree.id}-title`}>
        <p className="life-jesus-stop-kind">Interwoven Gospel scene</p>
        <h4 id={`${figTree.id}-title`} className="font-display">The fig tree and the Temple</h4>
        <p>Mark places the Temple action between Jesus’ curse of the fig tree and the disciples’ later discovery that it had withered.</p>
        <ol className="life-jesus-intercalation-steps">
          <li>
            <strong>1. Jesus curses the fig tree</strong>
            <span>Mark 11:12–14</span>
          </li>
          <li id={temple.id}>
            <strong>2. Jesus cleanses the Temple</strong>
            <p>{temple.summary}</p>
            <RecordLabels record={temple} compact />
            <PassageLinks passages={temple.scripturePassages} compact />
            <RecordSources record={temple} />
          </li>
          <li>
            <strong>3. The tree is found withered</strong>
            <span>Mark 11:20–25</span>
          </li>
        </ol>
        <RecordLabels record={figTree} compact />
        <PassageLinks passages={figTree.scripturePassages} compact />
        <RecordSources record={figTree} />
      </article>
    </li>
  );
}

function StopCard({ stop }: { stop: LifeOfJesusStop }) {
  if (stop.sourceEntryNumber === 118) return <JairusIntercalation stop={stop} />;
  const clusterIds = [...new Set(stop.unresolvedClusters ?? [])];
  const clusteredUnitIds = new Set(
    stop.teachingUnits.filter((unit) => unit.unresolvedCluster && clusterIds.includes(unit.unresolvedCluster)).map((unit) => unit.id),
  );
  const ordinaryTeachingUnits = stop.teachingUnits.filter((unit) => !clusteredUnitIds.has(unit.id));

  return (
    <li
      id={stop.id}
      className={`life-jesus-stop${clusterIds.length ? " life-jesus-stop--cluster" : ""}`}
    >
      <span className="life-jesus-stop-marker" aria-hidden="true" />
      <article aria-labelledby={`${stop.id}-title`}>
        <div className="life-jesus-stop-heading">
          <span className="life-jesus-stop-number" aria-label={`Pilgrimage stop ${stop.stopNumber}`}>
            {String(stop.stopNumber).padStart(3, "0")}
          </span>
          <div>
            <p className="life-jesus-stop-kind">{kindLabel(stop)}</p>
            <h4 id={`${stop.id}-title`} className="font-display">
              {stop.title}
            </h4>
          </div>
        </div>

        <p className="life-jesus-stop-summary">{stop.summary}</p>
        <RecordLabels record={stop} />
        <PassageLinks passages={stop.scripturePassages} />
        {stop.chronologyNote ? <ChronologyNote record={stop} /> : null}
        <RecordSources record={stop} />

        {ordinaryTeachingUnits.length ? (
          <section className="life-jesus-teachings" aria-labelledby={`${stop.id}-teachings`}>
            <h5 id={`${stop.id}-teachings`}>Teachings and moments within this stop</h5>
            <div>
              {ordinaryTeachingUnits.map((unit) => (
                <TeachingUnit key={unit.id} unit={unit} />
              ))}
            </div>
          </section>
        ) : null}

        {clusterIds.map((clusterId, clusterIndex) => {
          const records = stop.teachingUnits.filter((unit) => unit.unresolvedCluster === clusterId);
          if (!records.length) return null;
          return (
            <SourceCluster
              key={`${stop.id}-${clusterIndex}`}
              anchorId={`cluster-${stop.id}-${clusterIndex + 1}`}
              note={stop.chronologyNote}
              records={records}
              fallbackPassages={stop.scripturePassages}
            />
          );
        })}
      </article>
    </li>
  );
}

function JairusIntercalation({ stop }: { stop: LifeOfJesusStop }) {
  const woman = stop.teachingUnits.find((record) => record.sourceEntryNumber === 117);
  return (
    <li id={stop.id} className="life-jesus-stop life-jesus-stop--intercalation">
      <span className="life-jesus-stop-marker" aria-hidden="true" />
      <article aria-labelledby={`${stop.id}-title`}>
        <div className="life-jesus-stop-heading">
          <span className="life-jesus-stop-number" aria-label={`Pilgrimage stop ${stop.stopNumber}`}>
            {String(stop.stopNumber).padStart(3, "0")}
          </span>
          <div>
            <p className="life-jesus-stop-kind">Interwoven Gospel scene</p>
            <h4 id={`${stop.id}-title`} className="font-display">Jairus’s daughter and the woman with a hemorrhage</h4>
          </div>
        </div>
        <p>The woman’s healing interrupts and is nested inside Jairus’s story.</p>
        <ol className="life-jesus-intercalation-steps">
          <li><strong>1. Jairus asks Jesus to save his daughter</strong><span>Mark 5:21–24</span></li>
          {woman ? (
            <li id={woman.id}>
              <strong>2. Jesus heals the woman with a hemorrhage</strong>
              <p>{woman.summary}</p>
              <RecordLabels record={woman} compact />
              <PassageLinks passages={woman.scripturePassages} compact />
              <RecordSources record={woman} />
            </li>
          ) : null}
          <li>
            <strong>3. Jesus raises Jairus’s daughter</strong>
            <p>{stop.summary}</p>
            <span>Mark 5:35–43</span>
          </li>
        </ol>
        <RecordLabels record={stop} compact />
        <PassageLinks passages={stop.scripturePassages} compact />
        <RecordSources record={stop} />
      </article>
    </li>
  );
}

function TeachingUnit({ unit }: { unit: LifeOfJesusRecord }) {
  return (
    <article id={unit.id} className="life-jesus-teaching-unit" aria-labelledby={`${unit.id}-title`}>
      <p>{kindLabel(unit)}</p>
      <h6 id={`${unit.id}-title`} className="font-display">
        {unit.title}
      </h6>
      <p>{unit.summary}</p>
      <RecordLabels record={unit} compact />
      <PassageLinks passages={unit.scripturePassages} compact />
      {unit.chronologyNote ? <ChronologyNote record={unit} /> : null}
      <RecordSources record={unit} />
    </article>
  );
}

function SourceCluster({
  anchorId,
  note,
  records,
  fallbackPassages,
}: {
  anchorId: string;
  note: string;
  records: LifeOfJesusRecord[];
  fallbackPassages: LifeOfJesusScripturePassage[];
}) {
  const passageGroups = [...new Set(fallbackPassages.map((passage) => passage.book))].map((book) => ({
    book,
    passages: fallbackPassages.filter((passage) => passage.book === book),
  }));

  return (
    <section className="life-jesus-source-cluster" aria-labelledby={`${anchorId}-title`}>
      <header>
        <p>Accounts preserved side by side</p>
        <h5 id={`${anchorId}-title`} className="font-display">
          The sources do not establish one certain placement
        </h5>
        <p>{note}</p>
        <p>These sources remain distinct so a Gospel-harmony arrangement is not mistaken for a sequence explicitly stated by Scripture.</p>
      </header>
      <div className="life-jesus-source-panels">
        {records.length
          ? records.map((record) => (
              <article id={record.id} key={record.id} aria-labelledby={`${anchorId}-${record.id}`}>
                <p className="life-jesus-panel-source">{sourceNames(record.scripturePassages)}</p>
                <p className="life-jesus-panel-relationship">{relationshipNames(record)}</p>
                <h6 id={`${anchorId}-${record.id}`} className="font-display">
                  {record.title}
                </h6>
                <p>{record.summary}</p>
                <RecordLabels record={record} compact />
                <PassageLinks passages={record.scripturePassages} compact />
                {record.chronologyNote ? <ChronologyNote record={record} /> : null}
                <RecordSources record={record} />
              </article>
            ))
          : passageGroups.map((group) => (
              <article key={group.book} aria-label={`${group.book} account`}>
                <p className="life-jesus-panel-source">{group.book}</p>
                <p className="life-jesus-panel-relationship">Source account</p>
                <PassageLinks passages={group.passages} compact />
              </article>
            ))}
      </div>
    </section>
  );
}

function RecordSources({ record }: { record: LifeOfJesusRecord }) {
  const notes = [...new Set([
    ...record.sourceNotes,
    ...record.scripturePassages.flatMap((passage) => passage.sourceNotes ?? []),
  ])].filter((note) => !note.startsWith("Original editorial summary."));

  if (!record.relationships.length && !notes.length && !record.churchSources.length) return null;

  return (
    <aside className="life-jesus-record-sources" aria-label="Sources and related accounts">
      {record.relationships.length ? (
        <div>
          <strong>Related accounts</strong>
          <ul>
            {record.relationships.map((relationship) => (
              <li key={`${record.id}-${relationship.targetRecordId}`}>
                <a href={`#${relationship.targetRecordId}`} className="focus-ring">
                  Related record {Number(relationship.targetRecordId.slice(-4))}
                </a>{" "}— {relationship.note}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {notes.length ? (
        <div>
          <strong>Source note</strong>
          <ul>{notes.map((note) => <li key={note}>{note}</li>)}</ul>
        </div>
      ) : null}
      {record.churchSources.length ? (
        <div>
          <strong>Church teaching</strong>
          <ul>
            {record.churchSources.map((source) => (
              <li key={`${source.title}-${source.locator}`}>
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="focus-ring">
                  {source.title} {source.locator} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </aside>
  );
}

function RecordLabels({ record, compact = false }: { record: LifeOfJesusRecord; compact?: boolean }) {
  return (
    <div className={`life-jesus-labels${compact ? " life-jesus-labels--compact" : ""}`}>
      <span className={`life-jesus-certainty life-jesus-certainty--${record.chronologyConfidence}`}>
        {chronologyLabels[record.chronologyConfidence]}
      </span>
      {record.catholicClassifications.map((classification) => (
        <span key={classification} className="life-jesus-classification">
          {classificationLabels[classification]}
        </span>
      ))}
    </div>
  );
}

function PassageLinks({ passages, compact = false }: { passages: readonly LifeOfJesusScripturePassage[]; compact?: boolean }) {
  if (!passages.length) return null;

  return (
    <div className={`life-jesus-passages${compact ? " life-jesus-passages--compact" : ""}`}>
      <p>{compact ? "Scripture" : "Read in Sacred Scripture"}</p>
      <ul>
        {passages.map((passage) => {
          return (
            <li key={`${passage.role}-${passage.displayLabel}-${passage.href}`}>
              <span className="life-jesus-passage-reference" aria-label={`${passage.displayLabel} Scripture reference`}>
                {passage.displayLabel}
              </span>
              <span>{passage.role}</span>
              <DouayRheimsDisclosure passage={passage} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function DouayRheimsDisclosure({ passage }: { passage: LifeOfJesusScripturePassage }) {
  const localPassage = getLifeOfJesusDouayRheims(passage.displayLabel);
  const multipleChapters = new Set(localPassage.verses.map((verse) => verse.chapter)).size > 1;

  return (
    <details className="life-jesus-douay-disclosure">
      <summary className="focus-ring">
        <span className="life-jesus-douay-summary-copy">
          <span className="life-jesus-douay-summary-kicker">Sacred Scripture<span className="life-jesus-douay-summary-translation"> · Douay–Rheims</span></span>
          <strong><span className="life-jesus-douay-read-verb">Read </span>{passage.displayLabel}</strong>
        </span>
        <span className="life-jesus-douay-summary-icon" aria-hidden="true" />
      </summary>
      <div className="life-jesus-douay-text" aria-label={`${localPassage.editionReference}, Douay–Rheims Scripture text`}>
        <p className="life-jesus-douay-edition">{localPassage.edition} · Public-domain text</p>
        <p className="life-jesus-douay-reference font-display">{localPassage.editionReference}</p>
        {localPassage.numberingNote ? <p className="life-jesus-douay-numbering-note">{localPassage.numberingNote}</p> : null}
        {localPassage.verses.map((verse) => (
          <p className="life-jesus-douay-verse" key={`${localPassage.reference}-${verse.chapter}-${verse.number}`}>
            <sup aria-hidden={verse.part ? "true" : undefined} aria-label={verse.part ? undefined : `${multipleChapters ? `Chapter ${verse.chapter}, ` : ""}Verse ${verse.number}`}>
              {multipleChapters ? `${verse.chapter}:` : ""}{verse.number}{verse.part ?? ""}
            </sup>
            {verse.part ? <span className="sr-only">Verse {verse.number}, first part. </span> : null}
            <span>{verse.text}</span>
          </p>
        ))}
        <p className="life-jesus-douay-attribution">
          Source: <a href={localPassage.sourceUrl} target="_blank" rel="noopener noreferrer" className="focus-ring">eBible.org ↗</a>
        </p>
        <small className="life-jesus-douay-provenance">{localPassage.attribution}</small>
      </div>
    </details>
  );
}

function ChronologyNote({ record }: { record: LifeOfJesusRecord }) {
  return (
    <aside className="life-jesus-chronology-note" aria-label="Chronology note">
      <strong>{chronologyLabels[record.chronologyConfidence]}.</strong> {record.chronologyNote}
    </aside>
  );
}

function kindLabel(record: LifeOfJesusRecord) {
  const labels = {
    "narrated-event": "Gospel event",
    "teaching-segment": "Teaching",
    "theological-prologue": "Theological prologue",
    "doctrinal-mystery": "Mystery of faith",
    "editorial-summary": "Gospel-harmony overview",
  } as const;
  return labels[record.kind];
}

function sourceNames(passages: readonly LifeOfJesusScripturePassage[]) {
  const names = [...new Set(passages.map((passage) => passage.book))];
  return names.length ? names.join(" · ") : "Source account";
}

function relationshipNames(record: LifeOfJesusRecord) {
  const labels = [...new Set(record.relationships.map((relationship) => relationshipLabels[relationship.kind]))];
  return labels.length ? labels.join(" · ") : "Alternative placement";
}
