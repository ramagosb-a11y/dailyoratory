import { massParts } from "@/data/massParts";
import type { MassJourneyStep } from "@/data/massJourney";
import { MassScripture } from "./MassScripture";
export function MassLesson({ lesson }: {
    lesson: MassJourneyStep;
}) {
    const parts = lesson.parts.map(id => {
        const part = massParts.find(item => item.id === id);
        if (!part)
            throw new Error("Missing Mass part: " + id);
        return part;
    });
    return <article className="mass-lesson" aria-labelledby={"lesson-" + lesson.id}>
    <h2 className="mass-lesson-title" id={"lesson-" + lesson.id} tabIndex={-1}>{lesson.title}</h2>
    <section><h3>What you see</h3><p>{lesson.see}</p></section>
    <section><h3>What is happening</h3>{parts.map(part => <p key={part.id}>{part.whatHappens}</p>)}</section>
    <section><h3>Why it matters</h3><p>{lesson.meaning}</p></section>
    <section><h3>How to participate</h3><p>{lesson.participation}</p></section>
    <section className="mass-prayer"><h3>A prayer from the heart</h3><p>{lesson.prayer}</p><small>Original devotional prayer</small></section>
    <section className="mass-notice"><h3>Next time at Mass</h3><p>{lesson.notice}</p></section>
    <details><summary>Go deeper: explanations and sources</summary>
      {parts.map(part => <section key={part.id} data-mass-part={part.id}><h3>{part.title}</h3><p>{part.shortDescription}</p><p>{part.spiritualMeaning}</p><p>{part.howToParticipate}</p><ul>{part.relatedLinks.map(link => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul></section>)}
      <h3>Teaching sources</h3><ul>
        {lesson.sources.map(source => <li key={source.href}><a href={source.href}>{source.label}</a></li>)}
      </ul><p className="mass-small">These original teaching summaries are not liturgical texts or an official ecclesiastical publication. Follow the guidance of your parish and local bishop, particularly for posture and accessibility. Embedded biblical readings use the public-domain Douay-Rheims, Challoner revision, 1899 American Edition from eBible.org. They are study readings, not replacements for the appointed readings or approved liturgical texts at Mass.</p>
    </details>
    <MassScripture lesson={lesson} />
    <section className="mass-heavenly-liturgy" aria-labelledby={"heavenly-" + lesson.id}>
      <h3 id={"heavenly-" + lesson.id}>The Heavenly Liturgy: United with the Angels and Saints</h3>
      <p>At every Mass, the Church on earth joins the worship of heaven. Through Jesus Christ, our risen High Priest, and in the Holy Spirit, we offer praise to the Father with the angels, the Blessed Virgin Mary, and all the saints. We worship God with them; we do not worship them. Even a small parish congregation participates in a communion far greater than those we can see.</p>
      <p>The Preface and Sanctus make this union especially clear. Apocalypse (Revelation) 4:8–11 and 5:11–14 describe heavenly praise around God’s throne and the Lamb. At the Great Amen, we give our assent to the Eucharistic Prayer and its praise of the Father through Christ. This is participation in Christ’s one saving sacrifice, not another Crucifixion or a scene we must physically see.</p>
      <p>The Eucharist is a foretaste of eternal heavenly worship and of the marriage supper of the Lamb: Christ the Bridegroom unites His Bride, the Church, to Himself. We share in this mystery now by faith while awaiting its fullness in glory. When you pray at Mass, remember: you are not praying alone.</p>
      <p className="mass-small">Original teaching summary, not a Scripture quotation. The biblical references here point to the complete readings in the Preface and Great Amen moments.</p>
      <ul>
        <li><a href="https://www.vatican.va/content/catechism/en/part_one/section_two/chapter_one/article_1/paragraph_5_heaven_and_earth.html">Catechism 335: worship with the angels</a></li>
        <li><a href="https://www.vatican.va/content/catechism/en/part_two/section_one/chapter_two/article_1.html">Catechism 1137–1139: those who celebrate the heavenly liturgy</a></li>
        <li><a href="https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_one/article_3/i_the_eucharist_source_and_summit_of_ecclesial_life.index.html">Catechism 1326: sharing in the heavenly liturgy</a></li>
        <li><a href="https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_one/article_3/vii_the_eucharist_pledge_of_the_glory_to_come.index.html">Catechism 1402–1405: a foretaste of heavenly glory</a></li>
      </ul>
    </section>
  </article>;
}
