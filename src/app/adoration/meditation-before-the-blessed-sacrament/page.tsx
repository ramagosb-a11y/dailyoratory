import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { AdorationNav } from "@/components/adoration/AdorationNav";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

const pagePath = "/adoration/meditation-before-the-blessed-sacrament";
const pageDescription =
  "A guided Catholic meditation before the Blessed Sacrament with prayer prompts, Scripture, Catechism references, silence, repentance, intercession, and thanksgiving.";

const sections = [
  { id: "rest", label: "Come and rest" },
  { id: "intercession", label: "Pray for others" },
  { id: "mercy", label: "Ask for mercy" },
  { id: "providence", label: "Entrust your needs" },
  { id: "forgiveness", label: "Choose forgiveness" },
  { id: "communion", label: "Receive communion" },
  { id: "gratitude", label: "Give thanks" },
  { id: "conversion", label: "Begin again" },
  { id: "silence", label: "Remain in silence" },
  { id: "mission", label: "Return with Christ" },
] as const;

export const metadata: Metadata = createPageMetadata({
  title: "A Meditation Before the Blessed Sacrament | Daily Oratory",
  description: pageDescription,
  path: pagePath,
  keywords: [
    "meditation before the Blessed Sacrament",
    "Eucharistic Adoration meditation",
    "prayer before the tabernacle",
    "Catholic Adoration prayer",
  ],
});

type CitationProps = {
  href: string;
  children: ReactNode;
};

function Citation({ href, children }: CitationProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="focus-ring rounded-sm font-semibold text-burgundy underline decoration-gold/60 underline-offset-4 hover:text-navy"
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

type MeditationSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

function MeditationSection({ id, title, children }: MeditationSectionProps) {
  return (
    <section id={id} className="card-parchment scroll-mt-24 p-6 sm:p-8">
      <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">{title}</h2>
      <div className="daily-card-readable mt-5 space-y-5 text-base leading-8 text-muted sm:text-lg">{children}</div>
    </section>
  );
}

export default function MeditationBeforeTheBlessedSacramentPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "A Meditation Before the Blessed Sacrament",
              description: pageDescription,
              path: pagePath,
            }),
            buildBreadcrumbList([
              { name: "Adoration", path: "/adoration" },
              { name: "A Meditation Before the Blessed Sacrament", path: pagePath },
            ]),
          ]}
        />

        <Breadcrumbs
          items={[
            { label: "Adoration", href: "/adoration" },
            { label: "Meditation Before the Blessed Sacrament" },
          ]}
        />
        <AdorationNav />

        <header className="card-parchment p-6 sm:p-8 lg:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Eucharistic Adoration</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            A Meditation Before the Blessed Sacrament
          </h1>
          <p className="daily-readable mt-5 max-w-3xl text-lg leading-8 text-navy">
            Bring your whole life before Jesus: the people you love, the wounds you carry, the mercy you need, and
            the gratitude you have not yet spoken.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/adoration/live" className="btn btn-primary focus-ring min-h-12 justify-center">
              Enter Live Adoration
            </Link>
            <Link href="/adoration/holy-hour" className="btn btn-secondary focus-ring min-h-12 justify-center">
              Open the Holy Hour Guide
            </Link>
          </div>
        </header>

        <aside className="mt-6 rounded-md border border-gold/40 bg-ivory px-5 py-4" aria-label="Devotional note">
          <p className="text-sm leading-7 text-muted">
            <strong className="text-navy">Devotional note:</strong> This original Daily Oratory meditation uses an
            imagined prayerful dialogue with Christ to help personal prayer. It is not private revelation and does
            not claim to record words spoken directly by Jesus. Scripture and the teaching of the Church remain the
            authoritative guides for faith.
          </p>
        </aside>

        <nav className="mt-6 card-parchment p-6" aria-label="Meditation sections">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Move through the meditation</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="btn btn-secondary focus-ring min-h-10 px-4 py-2 text-sm">
                {section.label}
              </a>
            ))}
          </div>
        </nav>

        <section className="mt-8 card-parchment border-gold/50 p-6 sm:p-8">
          <p className="font-display text-2xl font-semibold text-navy">Opening prayer</p>
          <p className="daily-card-readable mt-4 text-lg leading-9 text-muted">
            Lord Jesus Christ, truly present in the Most Blessed Sacrament, I believe that You are here. I adore You
            with reverence, love, and trust. Quiet what is restless in me. Give me honesty in prayer, sorrow for sin,
            generosity toward others, and a heart ready to receive Your grace. Draw me close to Your Eucharistic
            Heart and lead me toward Heaven. Amen.
          </p>
        </section>

        <div className="mt-8 space-y-6">
          <MeditationSection id="rest" title="Come and rest">
            <p>
              My child, come as you are. You do not need eloquence to remain with Me. Speak simply, because nothing
              in your heart is hidden from Me. Let the weight you have carried become prayer. I receive the weary and
              give rest to those who come to Me (
              <Citation href="https://bible.usccb.org/bible/matthew/11">Matthew 11:28</Citation>).
            </p>
            <p>
              Look upon the Eucharist with faith. Here the Church recognizes the source and summit of Christian life
              (<Citation href="https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_one/article_3.html">CCC 1324</Citation>),
              and here Christ is truly, really, and substantially present (
              <Citation href="https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_one/article_3/v_the_sacramental_sacrifice_thanksgiving_memorial_presence.index.html">CCC 1374, 1380</Citation>).
              Be still before the mystery of His love.
            </p>
          </MeditationSection>

          <MeditationSection id="intercession" title="Place others before the Lord">
            <p>
              Tell Me whom you carry today. Name your family, friends, neighbors, coworkers, and those who have asked
              for prayer. Do not hurry over their names. Entrust each person to My wisdom, and ask boldly for what is
              good. The Church urges that prayers and intercessions be offered for everyone (
              <Citation href="https://bible.usccb.org/bible/1timothy/2">1 Timothy 2:1</Citation>), and the prayer of a
              righteous person has great power (
              <Citation href="https://bible.usccb.org/bible/james/5">James 5:16</Citation>).
            </p>
            <p>
              Remember the poor, sick, lonely, grieving, imprisoned, displaced, and forgotten. Pray for conversion,
              reconciliation, and peace. Include the person who wounded you. Love of enemies belongs to the way of
              the Gospel (<Citation href="https://bible.usccb.org/bible/matthew/5">Matthew 5:44</Citation>), while
              intercession teaches the heart to pray as Jesus prayed (
              <Citation href="https://www.vatican.va/content/catechism/en/part_four/section_one/chapter_one/article_3/iii_prayer_of_intercession.html">CCC 2634–2636</Citation>).
            </p>
          </MeditationSection>

          <MeditationSection id="mercy" title="Open what needs mercy">
            <p>
              Now speak about your own soul. Where are you tempted, discouraged, proud, resentful, afraid, distracted,
              or lukewarm? Bring the truth into My light. Do not excuse sin, but do not hide in shame. God is faithful
              and forgives those who acknowledge their sins (
              <Citation href="https://bible.usccb.org/bible/1john/1">1 John 1:9</Citation>).
            </p>
            <p>
              Ask for a contrite heart and the courage to return to Confession when needed. Conversion continues
              throughout the Christian life (
              <Citation href="https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_two/article_4/iii_the_conversion_of_the_baptized.html">CCC 1428</Citation>),
              and contrition opens the soul to the mercy of God (
              <Citation href="https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_two/article_4/vii_the_acts_of_the_penitent.html">CCC 1451–1452</Citation>).
            </p>
          </MeditationSection>

          <MeditationSection id="providence" title="Entrust your needs to Providence">
            <p>
              Tell Me what you need in body, mind, work, family, and vocation. Ask for health, wisdom, perseverance,
              peace, and daily bread. Then release your timetable. Seek first the Kingdom (
              <Citation href="https://bible.usccb.org/bible/matthew/6">Matthew 6:33</Citation>) and present every need
              to God with prayer and thanksgiving (
              <Citation href="https://bible.usccb.org/bible/philippians/4">Philippians 4:6</Citation>).
            </p>
            <p>
              Trust does not mean that every answer will look as you expect. Providence can work through waiting,
              ordinary duties, another person, or the mystery of the Cross. God guides creation toward its fulfillment
              and can bring good even from suffering (
              <Citation href="https://www.vatican.va/content/catechism/en/part_one/section_two/chapter_one/article_1/paragraph_4_the_creator.html">CCC 302, 305, 313</Citation>).
            </p>
          </MeditationSection>

          <MeditationSection id="forgiveness" title="Let Christ enter the wound">
            <p>
              Tell Me who has disappointed, ignored, corrected, rejected, or misunderstood you. Name the hurt without
              enlarging it. Forgiveness does not declare an injustice harmless; it places judgment in God&apos;s hands and
              refuses to let hatred rule the heart. Forgive as the Lord has forgiven you (
              <Citation href="https://bible.usccb.org/bible/colossians/3">Colossians 3:13</Citation>).
            </p>
            <p>
              If forgiveness feels impossible, begin by asking for the desire to desire it. The petition “forgive us
              our trespasses” binds the mercy we receive to the mercy we extend (
              <Citation href="https://www.vatican.va/content/catechism/en/part_four/section_two.html">CCC 2840–2844</Citation>).
            </p>
          </MeditationSection>

          <MeditationSection id="communion" title="Do not walk alone">
            <p>
              Bring Me your loneliness. Tell Me when you feel unseen, unwanted, or cut off. Solitude can create room
              for God, but isolation can close the heart in fear. You were made for communion: “It is not good for the
              man to be alone” (<Citation href="https://bible.usccb.org/bible/genesis/2">Genesis 2:18</Citation>).
            </p>
            <p>
              Ask for courage to seek healthy fellowship and to receive help. The first Christians shared the
              apostles&apos; teaching, fellowship, the breaking of bread, and prayer (
              <Citation href="https://bible.usccb.org/bible/acts/2">Acts 2:42</Citation>). Christians are called to
              encourage one another (
              <Citation href="https://bible.usccb.org/bible/hebrews/10">Hebrews 10:24–25</Citation>) because each
              belongs to the Body of Christ (
              <Citation href="https://bible.usccb.org/bible/1corinthians/12">1 Corinthians 12:27</Citation>). The
              Eucharist strengthens this ecclesial communion (
              <Citation href="https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_one/article_3/vi_the_paschal_banquet.html">CCC 1396</Citation>).
            </p>
          </MeditationSection>

          <MeditationSection id="gratitude" title="Remember the gifts of this day">
            <p>
              Tell Me what brought consolation: a kind word, an unexpected visit, a peaceful moment, work completed,
              a fear relieved, strength in trial, or grace in prayer. Receive these gifts without grasping them. Let
              each become a simple “Thank You.” Give thanks in every circumstance (
              <Citation href="https://bible.usccb.org/bible/1thessalonians/5">1 Thessalonians 5:18</Citation>).
            </p>
            <p>
              Thanksgiving is not denial of sorrow. It is the recognition that grace is still at work. Thanksgiving
              characterizes the prayer of the Church (
              <Citation href="https://www.vatican.va/content/catechism/en/part_four/section_one/chapter_one/article_3/iv_prayer_of_thanksgiving.html">CCC 2637–2638</Citation>).
            </p>
          </MeditationSection>

          <MeditationSection id="conversion" title="Make one faithful beginning">
            <p>
              What must change when you leave this place? Name one occasion of sin to avoid, one resentment to release,
              one duty to fulfill, or one sacramental step to take. Put on the Lord Jesus Christ and make no provision
              for sinful desire (
              <Citation href="https://bible.usccb.org/bible/romans/13">Romans 13:14</Citation>).
            </p>
            <p>
              Do not rely on emotion alone. Ask for the steady strength of virtue, a firm disposition to do the good (
              <Citation href="https://www.vatican.va/content/catechism/en/part_three/section_one/chapter_one/article_7.html">CCC 1803–1804</Citation>).
              If you have fallen, return to grace and begin again today.
            </p>
          </MeditationSection>

          <MeditationSection id="silence" title="Remain with Jesus">
            <p>
              Now let words become fewer. Do not measure the silence by feelings. Rest your attention on the Lord and
              allow yourself to be loved. Mary chose to sit at the feet of Jesus and listen (
              <Citation href="https://bible.usccb.org/bible/luke/10">Luke 10:39</Citation>). Remain in Christ, for the
              branch bears fruit only by abiding in the vine (
              <Citation href="https://bible.usccb.org/bible/john/15">John 15:4–5</Citation>).
            </p>
            <p>
              When distractions come, return gently to His presence. Contemplative prayer is a gaze of faith fixed on
              Jesus (<Citation href="https://www.vatican.va/content/catechism/en/part_four/section_one/chapter_three/article_1/iii_contemplative_prayer.html">CCC 2715–2717</Citation>).
              Remain here for a few quiet minutes.
            </p>
          </MeditationSection>

          <MeditationSection id="mission" title="Carry this presence into daily life">
            <p>
              When it is time to leave, return to your duties with Christ. Let silence become charity, truth become
              honesty, trials become patience, and small responsibilities become acts of love. Whatever you do, in
              word or deed, do everything in the name of the Lord Jesus (
              <Citation href="https://bible.usccb.org/bible/colossians/3">Colossians 3:17</Citation>).
            </p>
            <p>
              Holiness is not reserved for another life or a perfect day. Every Christian is called to holiness (
              <Citation href="https://www.vatican.va/content/catechism/en/part_three/section_one/chapter_three/article_2/iv_christian_holiness.html">CCC 2013–2015</Citation>)
              and to bear witness through a life shaped by faith (
              <Citation href="https://www.vatican.va/content/catechism/en/part_three/section_one/chapter_three/article_3/iii_moral_life_and_missionary_witness.html">CCC 2044</Citation>).
            </p>
          </MeditationSection>
        </div>

        <section className="mt-8 card-parchment border-gold/50 p-6 sm:p-8">
          <h2 className="font-display text-3xl font-semibold text-navy">Closing prayer</h2>
          <p className="daily-card-readable mt-5 text-lg leading-9 text-muted">
            Jesus, truly present in the Most Blessed Sacrament, thank You for receiving me with mercy. I place my
            family, friends, enemies, fears, sins, hopes, and whole life into Your Eucharistic Heart. Heal what is
            wounded, strengthen what is weak, purify what is sinful, and restore what is broken. Keep me united to
            Your Church, faithful to the sacraments, generous in love, and ready for eternal life. Amen.
          </p>
          <p className="font-display mt-6 text-center text-2xl font-semibold leading-9 text-navy">
            O Sacrament most holy, O Sacrament divine, all praise and all thanksgiving be every moment Thine.
          </p>
        </section>

        <section className="mt-8 card-parchment p-6 sm:p-8">
          <h2 className="font-display text-3xl font-semibold text-navy">Continue in prayer</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Live Adoration", href: "/adoration/live" },
              { label: "Holy Hour Guide", href: "/adoration/holy-hour" },
              { label: "Adoration Prayers", href: "/adoration/prayers" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="card dashboard-card focus-ring p-5 text-center">
                <span className="font-display text-2xl font-semibold text-navy">{item.label}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
