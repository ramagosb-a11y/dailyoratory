"use client";

import { useState } from "react";

const calendarUrl =
  "https://calendar.google.com/calendar/u/1?cid=ODZmOGM0OGYwNjExZTA5MzA1OGE5YTdmMjhmY2E3NWM5Yjc4ODk3N2MwNzZhNWQwYTQ5Njk4OTYzM2YxNTQyZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t";

type RetreatDay = {
  id: string;
  label: string;
  theme: string;
  scripture: string;
  phrase: string;
  eveningScripture: string;
};

type IntentionTemplate = {
  category: string;
  prayer: string;
};

const retreatDays: RetreatDay[] = [
  {
    id: "day-1",
    label: "Day 1",
    theme: "Humility",
    scripture: "John 15",
    phrase: "Abide in Me",
    eveningScripture: "Matthew 5",
  },
  {
    id: "day-2",
    label: "Day 2",
    theme: "Purity",
    scripture: "John 6",
    phrase: "Jesus, Bread of Life",
    eveningScripture: "Matthew 6",
  },
  {
    id: "day-3",
    label: "Day 3",
    theme: "Charity",
    scripture: "John 17",
    phrase: "That They May Be One",
    eveningScripture: "Matthew 7",
  },
];

const navItems = [
  ["overview", "Overview"],
  ["preparation", "Preparation"],
  ["fast", "Three-Day Fast"],
  ["indulgence", "Indulgences"],
  ["intentions", "Intentions"],
  ["fighting-sin", "Fighting Sin"],
  ["closing", "Closing"],
  ["share", "Share"],
] as const;

const pillars = [
  {
    title: "Holy Mass",
    text: "Receive Christ and unite the fast to His sacrifice.",
  },
  {
    title: "Eucharistic Adoration",
    text: "Remain with Jesus in the Blessed Sacrament through praise, thanksgiving, repentance, intercession, and silent listening.",
  },
  {
    title: "Sacred Scripture",
    text: "Listen to Jesus through the Word of God, especially the Gospel of John and the Sermon on the Mount.",
  },
  {
    title: "Fasting",
    text: "Offer hunger, weakness, and sacrifice in union with Christ for conversion, healing, and holiness.",
  },
  {
    title: "Charity and Intercession",
    text: "Pray intentionally for others and perform daily works of mercy.",
  },
];

const intentionCategories = [
  "Spouse",
  "Children",
  "Parents",
  "Grandparents",
  "Siblings",
  "Extended family",
  "Friends",
  "Priests and religious",
  "The Pope and bishops",
  "Seminarians",
  "The sick",
  "The dying",
  "Souls in Purgatory",
  "Those away from the Church",
  "Those who have hurt me",
  "Those I have hurt",
  "Personal intentions",
];

const intentionTemplates: IntentionTemplate[] = [
  {
    category: "Spouse",
    prayer:
      "Lord Jesus, bless my spouse. Draw them close to Your Sacred Heart. Heal what is wounded, strengthen what is weak, protect them from temptation, and lead them in holiness, peace, and love. Amen.",
  },
  {
    category: "Children",
    prayer:
      "Lord Jesus, bless my child. Protect their soul, mind, body, vocation, friendships, purity, faith, and future. Let them know Your love and follow You all the days of their life. Amen.",
  },
  {
    category: "Parents and Grandparents",
    prayer:
      "Lord Jesus, bless my parents and grandparents. Grant them healing, peace, perseverance, forgiveness, and the grace of a holy death when their earthly pilgrimage is complete. Amen.",
  },
  {
    category: "Siblings and Extended Family",
    prayer:
      "Lord Jesus, bring unity, healing, conversion, and peace to my family. Heal divisions and restore love where there has been hurt. Amen.",
  },
  {
    category: "Friends",
    prayer:
      "Lord Jesus, bless my friends. Draw them close to You, guide their decisions, heal their wounds, and help them grow in truth and love. Amen.",
  },
  {
    category: "Priests, Bishops, Seminarians, and Religious",
    prayer:
      "Lord Jesus, make Your priests holy. Strengthen bishops, seminarians, deacons, religious sisters, brothers, monks, and missionaries. Protect them from discouragement and temptation. Fill them with zeal for souls. Amen.",
  },
  {
    category: "The Pope and the Church",
    prayer:
      "Lord Jesus, guide and protect the Holy Father, the bishops, and the whole Church. Keep Your people faithful to the Gospel, united in charity, and courageous in truth. Amen.",
  },
  {
    category: "The Sick and Suffering",
    prayer:
      "Lord Jesus, comfort the sick and suffering. Bring healing according to Your will, patience in trial, and hope in Your mercy. Amen.",
  },
  {
    category: "The Dying",
    prayer:
      "Lord Jesus, be near to the dying. Grant them repentance, trust, peace, and the grace of final perseverance. Mary, Mother of Mercy, pray for them now and at the hour of death. Amen.",
  },
  {
    category: "Souls in Purgatory",
    prayer: "Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May they rest in peace. Amen.",
  },
  {
    category: "Those Away from the Church",
    prayer:
      "Lord Jesus, seek out those who have wandered from You. Break through fear, confusion, pride, resentment, and despair. Bring them home to Your mercy and to the sacraments. Amen.",
  },
  {
    category: "Those Who Have Hurt Me",
    prayer:
      "Lord Jesus, I place this person into Your hands. Heal my heart, remove bitterness, and bless them with conversion, healing, and peace. Help me forgive as You forgive. Amen.",
  },
  {
    category: "Those I Have Hurt",
    prayer:
      "Lord Jesus, have mercy on those I have wounded by my words, actions, neglect, or sin. Heal them, bless them, and show me how to make amends according to Your will. Amen.",
  },
  {
    category: "Personal Intentions",
    prayer:
      "Lord Jesus, I surrender my intentions to You. Purify my desires, guide my decisions, and let Your holy will be done in my life. Amen.",
  },
];

const shareText = `Peace in Christ.

I would like to invite you to join a three-day Catholic prayer and fasting retreat.

Theme:
Draw Near to Jesus, Fight Sin, and Intercede for Souls.

The fast may be water and black coffee, with a simple protein shake if needed for health or strength.

Together we will pray through Scripture, Holy Mass if possible, Eucharistic Adoration, the Rosary, Divine Mercy Chaplet, examination of conscience, and intercession for our families, the Church, the sick, the dying, souls in Purgatory, and all entrusted to prayer.

You can join the retreat calendar here:
${calendarUrl}

Even if you cannot keep the full fast, you are welcome to join in prayer and offer another sacrifice according to your circumstances.

May Jesus draw us deeper into His Sacred Heart.`;

const prayerPlanText = `Three-Day Catholic Fasting and Spiritual Renewal Retreat

Day 0: Prepare with examination of conscience, Confession if available, Mass if possible, Eucharistic Adoration, retreat consecration, and written prayer intentions.

Day 1: Humility. Scripture: John 15. Phrase: Abide in Me.
Day 2: Purity. Scripture: John 6. Phrase: Jesus, Bread of Life.
Day 3: Charity. Scripture: John 17. Phrase: That They May Be One.

Daily rhythm: Psalm 63, Morning Offering, indulgence prayers, Gospel Lectio Divina, prayer for the gifts God wants to reveal, hourly recollection, Angelus, Mass or Spiritual Communion, Eucharistic Adoration, Divine Mercy Chaplet, work of mercy, Rosary, Sermon on the Mount, examination of conscience, Act of Contrition, and night surrender.`;

export function ThreeDayCatholicFastingRetreat() {
  const [activeDay, setActiveDay] = useState(retreatDays[0].id);
  const activeRetreatDay = retreatDays.find((day) => day.id === activeDay) ?? retreatDays[0];

  return (
    <>
      <article className="mt-8">
        <Hero />
        <SectionNav />
        <RetreatOverview />
        <PreparationDay />
        <ThreeDayFast activeDay={activeRetreatDay} onSelectDay={setActiveDay} />
        <IndulgencePractice />
        <PrayerIntentionTemplates />
        <FightingSin />
        <ClosingRetreat />
        <ShareRetreat />
      </article>
      <a
        href={calendarUrl}
        className="btn btn-primary focus-ring no-print fixed bottom-4 left-4 right-4 z-40 justify-center shadow-lifted md:hidden"
      >
        Join Calendar
      </a>
    </>
  );
}

function Hero() {
  return (
    <header
      className="overflow-hidden rounded-[1.75rem] border border-gold/50 border-t-4 border-t-burgundy px-5 py-10 shadow-lifted sm:px-8 lg:px-12 lg:py-14"
      style={{
        background:
          "radial-gradient(circle at 88% 10%, rgba(189, 138, 47, 0.2), transparent 18rem), radial-gradient(circle at 8% 12%, rgba(122, 37, 51, 0.32), transparent 20rem), linear-gradient(135deg, #071a2d 0%, #0d2038 54%, #641f2d 100%)",
      }}
    >
      <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.65fr)] lg:items-center">
        <div>
          <h1 className="font-display text-balance text-5xl font-semibold leading-[0.95] text-ivory drop-shadow-sm sm:text-6xl lg:text-7xl">
            Three-Day Catholic Fasting and Spiritual Renewal Retreat
          </h1>
          <p className="mt-5 max-w-3xl text-2xl font-semibold leading-9 text-gold-soft drop-shadow-sm">
            Draw Near to Jesus, Fight Sin, and Intercede for Souls
          </p>
          <blockquote className="mt-8 border-l-4 border-gold-soft pl-5 font-display text-2xl leading-9 text-ivory sm:text-3xl">
            &quot;Draw near to God, and he will draw near to you.&quot; <span className="block text-lg text-gold-soft">James 4:8</span>
          </blockquote>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-ivory/95">
            This three-day retreat is a Catholic prayer and fasting journey designed to help the soul draw closer to Jesus
            Christ, turn away from sin, receive the grace God desires to reveal, and intercede for family, friends, the
            Church, souls in Purgatory, and all entrusted to prayer.
          </p>
          <div className="no-print mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="btn btn-gold focus-ring justify-center" href={calendarUrl}>
              Join the Retreat Calendar
            </a>
            <CopyButton text={prayerPlanText} label="Download the Prayer Plan" copiedLabel="Prayer plan copied" variant="inverse" />
            <CopyButton text={shareText} label="Share with Others" copiedLabel="Invitation copied" variant="inverse" />
            <a className="btn btn-outline-inverse focus-ring justify-center" href="#preparation">
              Begin Preparation Day
            </a>
          </div>
        </div>
        <aside className="rounded-2xl border border-gold-soft/35 bg-ivory/95 p-6 shadow-oratory">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Health note</p>
          <p className="mt-4 text-base leading-8 text-navy">
            Fasting should be practiced prudently. Anyone pregnant, nursing, elderly, diabetic, medically fragile, taking
            medication, or with health concerns should modify the fast and consult a physician if needed. The spiritual
            purpose of the fast is union with Christ, not harm to the body.
          </p>
        </aside>
      </div>
    </header>
  );
}

function SectionNav() {
  return (
    <nav
      aria-label="Retreat sections"
      className="no-print sticky top-0 z-30 -mx-5 mt-6 border-y border-stone bg-ivory/95 px-5 py-3 shadow-hairline backdrop-blur sm:-mx-8 sm:px-8 lg:top-0 lg:mx-0 lg:rounded-xl lg:border"
    >
      <div className="flex gap-2 overflow-x-auto pb-1">
        {navItems.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className="focus-ring shrink-0 rounded-md border border-gold/60 bg-ivory px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.12em] text-burgundy no-underline shadow-hairline hover:bg-parchment"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function RetreatOverview() {
  return (
    <PageSection id="overview" title="Retreat Overview">
      <p className="daily-readable-muted">This retreat is built around five spiritual pillars:</p>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {pillars.map((pillar, index) => (
          <div key={pillar.title} className="content-card p-5">
            <p className="font-display text-4xl font-semibold text-gold">{index + 1}</p>
            <h3 className="mt-2 text-xl font-bold text-navy">{pillar.title}</h3>
            <p className="mt-3 text-base leading-7 text-muted">{pillar.text}</p>
          </div>
        ))}
      </div>
      <p className="mt-7 rounded-xl border border-gold/60 border-l-4 border-l-burgundy bg-ivory p-5 text-base leading-8 text-navy shadow-hairline">
        The fast may be practiced as water and black coffee only, or with one simple protein shake if needed for health,
        work, or strength.
      </p>
    </PageSection>
  );
}

function PreparationDay() {
  return (
    <PageSection id="preparation" title="Day 0: Preparation Day" subtitle="Prepare the Way of the Lord">
      <div className="grid gap-5">
        <ScheduleCard time="6:00 PM" title="Examination of Conscience">
          <PrayerBlock
            title="Prayer"
            text="Come, Holy Spirit, enlighten my mind that I may know my sins. Move my heart that I may be truly sorry for them. Help me to make a good confession and amend my life, through Jesus Christ our Lord. Amen."
          />
          <PromptList
            title="Reflection prompts"
            items={[
              "Have I loved God above all things?",
              "Have I loved my neighbor as myself?",
              "What sin do I most need Jesus to heal?",
              "What attachment do I need to surrender?",
              "Whom do I need to forgive?",
              "From whom should I seek forgiveness?",
            ]}
          />
        </ScheduleCard>

        <ScheduleCard time="6:30 PM" title="Confession and Mass if Possible">
          <p>Receive the Sacrament of Reconciliation if available. If Mass is available, attend and offer the entire retreat with the sacrifice of Christ.</p>
          <PrayerBlock
            title="Prayer after Confession"
            text="Lord Jesus, thank You for Your mercy. Help me begin again with a clean heart. Strengthen me to avoid sin and to live faithfully in Your grace. Amen."
          />
        </ScheduleCard>

        <ScheduleCard time="7:30 PM" title="Eucharistic Adoration and Retreat Consecration">
          <PrayerBlock
            title="Prayer of Presence"
            text="Jesus, my Lord and my God, I believe that You are here before me. I adore You with all the love of my heart. Help me to be still, to listen, and to rest in Your Eucharistic Heart."
          />
          <PrayerBlock
            title="Retreat Consecration"
            text="Lord Jesus Christ, I surrender these next three days entirely to You. I offer You my body, my mind, my soul, my hunger, my prayers, my sacrifices, and every moment of this retreat. Purify me through Your Precious Blood. Fill me with Your Holy Spirit. Reveal whatever You desire for my life, and give me the grace to respond with humility and obedience. May everything I do bring glory to the Father and lead me closer to You. Through the intercession of the Blessed Virgin Mary, St. Joseph, St. Michael the Archangel, my guardian angel, and all the saints, keep me faithful throughout this retreat. Amen."
          />
        </ScheduleCard>

        <ScheduleCard time="8:30 PM" title="Write Prayer Intentions">
          <PrayerBlock
            title="Prompt"
            text="Jesus, place on my heart the souls You desire me to carry during this fast. Let every sacrifice become an act of love for them. Amen."
          />
          <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {intentionCategories.map((category) => (
              <div key={category} className="rounded-lg border border-stone bg-ivory px-4 py-3 text-sm font-semibold text-navy">
                {category}
              </div>
            ))}
          </div>
        </ScheduleCard>
      </div>
    </PageSection>
  );
}

function ThreeDayFast({
  activeDay,
  onSelectDay,
}: {
  activeDay: RetreatDay;
  onSelectDay: (dayId: string) => void;
}) {
  return (
    <PageSection id="fast" title="The Three-Day Fast">
      <p className="daily-readable-muted">
        Each day follows the same rhythm of prayer, Scripture, fasting, Adoration, intercession, examination of
        conscience, and surrender.
      </p>
      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {retreatDays.map((day) => {
          const isActive = activeDay.id === day.id;
          return (
            <button
              key={day.id}
              type="button"
              aria-expanded={isActive}
              aria-controls="daily-fast-panel"
              onClick={() => onSelectDay(day.id)}
              className={`focus-ring rounded-xl border p-5 text-left transition ${
                isActive
                  ? "border-burgundy bg-burgundy text-ivory shadow-oratory"
                  : "border-stone bg-ivory text-navy hover:border-gold hover:bg-parchment"
              }`}
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em]">{day.label}</span>
              <span className="font-display mt-2 block text-3xl font-semibold">{day.theme}</span>
              <span className="mt-3 block text-base leading-7 opacity-90">
                {day.scripture}: {day.phrase}
              </span>
            </button>
          );
        })}
      </div>
      <DailyFastPanel day={activeDay} />
    </PageSection>
  );
}

function DailyFastPanel({ day }: { day: RetreatDay }) {
  return (
    <div id="daily-fast-panel" role="region" aria-label={`${day.label} fasting schedule`} className="mt-7 grid gap-5">
      <div className="rounded-xl border border-gold/60 border-l-4 border-l-burgundy bg-ivory p-5 shadow-hairline">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{day.label} Theme</p>
        <h3 className="font-display mt-2 text-4xl font-semibold text-navy">{day.theme}</h3>
        <p className="mt-2 text-lg font-semibold text-muted">Scripture: {day.scripture}</p>
        <p className="mt-1 text-lg font-semibold text-burgundy">Phrase: {day.phrase}</p>
      </div>

      <ScheduleCard time="5:30 AM" title="Wake in Silence and Psalm 63">
        <PrayerBlock
          title="Prayer"
          text="Jesus, today belongs completely to You. Every hunger, every weakness, every joy, every sacrifice, I offer to You for Your glory."
        />
        <p>Read Psalm 63 slowly.</p>
        <p className="font-semibold text-burgundy">Hourly phrase: Jesus, I hunger for You more than for bread.</p>
      </ScheduleCard>

      <ScheduleCard time="6:00 AM" title="Morning Offering and Indulgence Prayers">
        <PrayerBlock
          title="Morning Offering"
          text="O Jesus, through the Immaculate Heart of Mary, I offer You my prayers, works, joys, sufferings, hunger, and sacrifices of this day for the intentions of Your Sacred Heart, in union with the Holy Sacrifice of the Mass throughout the world, for the salvation of souls, the reparation of sin, the reunion of all Christians, and the intentions of the Holy Father. Amen."
        />
        <PrayerBlock
          title="Offering of Indulgences"
          text={`Lord Jesus, through Mary's hands,
I offer You all the indulgences I may gain today.
Please apply them, according to Your holy will,
for my soul,
or for a soul in Purgatory.

May Your mercy be glorified in all things.
Amen.`}
        />
        <PrayerBlock
          title="Detachment from Sin"
          text={`Lord Jesus,
detach my heart from all sin and every disordered attachment.
Let me choose You above all things.
Amen.`}
        />
        <p className="font-semibold text-navy">Prayer for the Holy Father&apos;s Intentions: Pray one Our Father, one Hail Mary, and one Glory Be.</p>
      </ScheduleCard>

      <ScheduleCard time="6:30 AM" title="Gospel Lectio Divina">
        <p>Read {day.scripture} slowly and reverently.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Lectio", "What does the text say?"],
            ["Meditatio", "What word or phrase stands out?"],
            ["Oratio", "Speak to Jesus about what touched your heart."],
            ["Contemplatio", "Rest silently with Him."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-lg border border-stone bg-ivory p-4">
              <p className="font-bold text-burgundy">{title}</p>
              <p className="text-base leading-7 text-muted">{text}</p>
            </div>
          ))}
        </div>
        <PromptList
          title="Journal prompts"
          items={[
            "What is Jesus saying to me?",
            "Where is He inviting conversion?",
            "What gift or virtue does He desire to reveal?",
            "Who is He asking me to pray for today?",
          ]}
        />
      </ScheduleCard>

      <ScheduleCard time="8:00 AM" title="Prayer for the Gifts God Wants to Reveal">
        <PrayerBlock
          title="Prayer"
          text="Heavenly Father, I surrender myself completely to You. Through the Holy Spirit, reveal the gifts You have placed within me from my baptism and confirmation. Increase in me the gifts of wisdom, understanding, counsel, fortitude, knowledge, piety, and fear of the Lord. If it is Your holy will, awaken every grace, virtue, and charism You desire me to use for the building up of Your Church and the salvation of souls. Remove anything that hinders Your work in me. Help me seek not extraordinary experiences, but greater holiness, humility, obedience, and love. May everything You reveal draw me closer to Jesus and bear fruit for Your glory alone. Through Christ our Lord. Amen."
        />
      </ScheduleCard>

      <ScheduleCard time="9:00 AM, 10:00 AM, 11:00 AM, 1:00 PM, 4:00 PM" title="Hourly Recollection">
        <PrayerBlock title="Prayer" text={`Jesus, have mercy on me.\nCome, Holy Spirit.\nMary, lead me closer to Jesus.`} />
        <p className="font-semibold text-navy">Intention: Jesus, I offer this moment for: ____________________.</p>
      </ScheduleCard>

      <ScheduleCard time="12:00 PM" title="Angelus and Thanksgiving">
        <PrayerBlock
          title="Angelus"
          text={`The Angel of the Lord declared unto Mary.
And she conceived of the Holy Spirit.

Hail Mary...

Behold the handmaid of the Lord.
Be it done unto me according to thy word.

Hail Mary...

And the Word was made flesh.
And dwelt among us.

Hail Mary...

Pray for us, O Holy Mother of God.
That we may be made worthy of the promises of Christ.

Let us pray:
Pour forth, we beseech Thee, O Lord, Thy grace into our hearts, that we to whom the Incarnation of Christ Thy Son was made known by the message of an angel, may by His Passion and Cross be brought to the glory of His Resurrection, through the same Christ Our Lord. Amen.`}
        />
        <p>Thank Jesus for five specific blessings.</p>
      </ScheduleCard>

      <ScheduleCard time="1:15 PM" title="Daily Mass or Spiritual Communion">
        <PrayerBlock
          title="Before Mass"
          text="Jesus, I unite this fast with Your sacrifice on the altar. Receive my hunger, my prayers, and my intentions through the hands of Mary. Amen."
        />
        <PrayerBlock
          title="After Communion"
          text="Jesus, remain in me. Purify my heart. Strengthen me against sin. Reveal the gifts You desire me to use for Your glory. Amen."
        />
        <PrayerBlock
          title="Spiritual Communion"
          text="My Jesus, I believe that You are present in the Most Holy Sacrament. I love You above all things, and I desire to receive You into my soul. Since I cannot now receive You sacramentally, come at least spiritually into my heart. I embrace You as if You were already there and unite myself wholly to You. Never permit me to be separated from You. Amen."
        />
      </ScheduleCard>

      <ScheduleCard time="2:00 PM" title="Eucharistic Adoration Holy Hour">
        <PromptList
          title="Structure"
          items={[
            "First 10 minutes: Adoration. Jesus, I believe You are truly present, Body, Blood, Soul, and Divinity, in the Most Holy Eucharist. I adore You with all my heart. Increase my faith, hope, and love.",
            "Next 10 minutes: Thanksgiving. Thank Jesus for salvation, family, mercy, trials, and blessings.",
            "Next 10 minutes: Repentance. Jesus, show me what keeps me from loving You with my whole heart.",
            "Next 20 minutes: Intercession. Slowly offer each name on your prayer list.",
            "Final 10 minutes: Silence. Speak, Lord, for Your servant is listening.",
          ]}
        />
        <PrayerBlock
          title="Closing Prayer"
          text="Jesus, thank You for this time with You. Strengthen me to carry Your Presence into the world. May I love as You love, serve as You serve, and seek only Your will. Remain with me, Lord, until I return again to adore You. Amen."
        />
      </ScheduleCard>

      <ScheduleCard time="3:00 PM" title="Divine Mercy Chaplet">
        <p>Pray the Divine Mercy Chaplet at the Hour of Mercy.</p>
        <PromptList
          title="Offer especially for"
          items={[
            "Conversion of sinners",
            "The dying",
            "Souls in Purgatory",
            "Those in mortal sin",
            "Those who feel far from God",
            "Everyone on the prayer list",
          ]}
        />
        <PrayerBlock title="Prayer" text="For the sake of His sorrowful Passion, have mercy on us and on the whole world." />
      </ScheduleCard>

      <ScheduleCard time="4:30 PM" title="Work of Mercy and Intercession">
        <PromptList
          title="Choose one"
          items={["Call someone lonely", "Give to someone in need", "Encourage someone", "Pray for someone who hurt you", "Serve quietly at home", "Offer a hidden sacrifice"]}
        />
        <PrayerBlock title="Prayer" text="Jesus, let this fast become love. Show me one person I can bless today. Amen." />
      </ScheduleCard>

      <ScheduleCard time="6:00 PM" title="Rosary for the Prayer List">
        <PrayerBlock
          title="Prayer before Rosary"
          text="Mary, Mother of Jesus, take my prayers into your Immaculate Heart and present them perfectly to your Son."
        />
        <PromptList
          title="Offer each decade for"
          items={[
            "Family and loved ones",
            "The Church, Pope, bishops, priests, and religious",
            "The sick, suffering, dying, and grieving",
            "Souls in Purgatory and those away from God",
            "Personal intentions and the gifts God wants to reveal",
          ]}
          ordered
        />
        <p className="font-semibold text-burgundy">O Mary, conceived without sin, pray for us who have recourse to thee.</p>
      </ScheduleCard>

      <ScheduleCard time="7:30 PM" title="Evening Scripture and Fighting Sin Plan">
        <p className="font-semibold text-navy">
          {day.label}: {day.eveningScripture}
        </p>
        <PromptList
          title="Fighting sin response"
          ordered
          items={[
            "Stop immediately.",
            "Say: Jesus, I belong to You.",
            "Look at a crucifix if possible.",
            "Pray one Hail Mary.",
            "Offer the temptation for another soul.",
            "Choose one concrete act of virtue.",
          ]}
        />
        <PromptList
          title="Journal prompts"
          items={[
            "What temptation appeared most often today?",
            "What virtue is Jesus asking me to practice?",
            "What near occasion of sin must I avoid tomorrow?",
          ]}
        />
      </ScheduleCard>

      <ScheduleCard time="8:00 PM" title="Examination of Conscience and Act of Contrition">
        <PromptList
          title="Review"
          items={[
            "Where did I cooperate with grace?",
            "Where did I resist Jesus?",
            "Did I fast with humility?",
            "Did I complain?",
            "Did I love others well?",
            "Did I avoid near occasions of sin?",
            "What should I confess if needed?",
          ]}
        />
        <PrayerBlock
          title="Act of Contrition"
          text="O my God, I am heartily sorry for having offended Thee, and I detest all my sins because I dread the loss of Heaven and the pains of Hell, but most of all because they offend Thee, my God, who art all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to confess my sins, to do penance, and to amend my life. Amen."
        />
      </ScheduleCard>

      <ScheduleCard time="9:00 PM" title="Night Prayer and Surrender">
        <PrayerBlock
          title="Prayer"
          text="Jesus, I surrender this day to You. Receive what was good, forgive what was sinful, heal what was wounded, and prepare me for tomorrow. Mary, Mother of Grace, pray for me. St. Joseph, guard me. St. Michael, defend me. My guardian angel, watch over me. Amen."
        />
        <p className="font-display text-2xl font-semibold text-burgundy">Jesus, I trust in You.</p>
      </ScheduleCard>
    </div>
  );
}

function IndulgencePractice() {
  return (
    <PageSection id="indulgence" title="Daily Indulgence Practice">
      <p className="daily-readable-muted">
        This retreat includes optional indulgenced acts. An indulgence is not the forgiveness of sin itself, but the
        remission before God of temporal punishment due to sins already forgiven.
      </p>
      <div className="mt-7 grid gap-5 lg:grid-cols-2">
        <div className="content-card p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Usual conditions</h3>
          <Checklist items={["Sacramental Confession", "Holy Communion", "Prayer for the Holy Father's intentions", "Complete detachment from all sin", "Perform the indulgenced act", "Intention to gain the indulgence"]} />
        </div>
        <div className="content-card p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Suggested indulgenced acts</h3>
          <Checklist items={["Thirty minutes of devout Scripture reading", "Thirty minutes of Eucharistic Adoration", "Rosary prayed in a church, family, or prayer group", "Stations of the Cross, if available"]} />
        </div>
      </div>
      <p className="mt-6 rounded-xl border border-gold/60 border-l-4 border-l-burgundy bg-ivory p-5 text-base leading-8 text-navy shadow-hairline">
        Indulgences may be applied to oneself or to the souls in Purgatory, but not directly to another living person.
      </p>
      <div className="content-card mt-6 p-6">
        <h3 className="font-display text-3xl font-semibold text-navy">Daily checklist</h3>
        <Checklist items={["Confession", "Holy Communion", "Prayer for the Holy Father", "Detachment from sin", "Indulgenced act", "Offered intentionally"]} checkboxes />
      </div>
    </PageSection>
  );
}

function PrayerIntentionTemplates() {
  return (
    <PageSection id="intentions" title="Prayer Intention Templates">
      <div className="grid gap-4">
        {intentionTemplates.map((template, index) => (
          <AccessibleDisclosure key={template.category} title={template.category} defaultOpen={index === 0}>
            <PrayerBlock title="Prayer" text={template.prayer} />
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {["Name", "Specific intention", "Spiritual need", "Healing needed", "Scripture or word received", "Sacrifice offered", "Answered prayer or grace noticed"].map((field) => (
                <label key={field} className="block">
                  <span className="form-label text-sm">{field}</span>
                  <span className="mt-2 block min-h-12 rounded-lg border border-stone bg-background px-3 py-3 text-muted">____________________</span>
                </label>
              ))}
            </div>
          </AccessibleDisclosure>
        ))}
      </div>
    </PageSection>
  );
}

function FightingSin() {
  return (
    <PageSection id="fighting-sin" title="Fighting Sin During the Fast">
      <p className="daily-readable-muted">
        Fasting reveals what is hidden in the heart. When weakness, irritation, temptation, or discouragement rises, do
        not panic. Turn immediately to Jesus.
      </p>
      <div className="mt-7 grid gap-5 lg:grid-cols-[1fr_0.8fr]">
        <div className="content-card p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Spiritual response</h3>
          <PromptList
            ordered
            items={[
              "Stop.",
              "Say: Jesus, I belong to You.",
              "Pray: Jesus, have mercy on me.",
              "Ask Mary for help.",
              "Remove yourself from the near occasion of sin.",
              "Offer the temptation for another soul.",
              "Practice the opposite virtue.",
            ]}
          />
        </div>
        <div className="content-card p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Replacement virtues</h3>
          <div className="mt-4 grid gap-2">
            {["Pride -> Humility", "Anger -> Meekness", "Lust -> Chastity", "Gluttony -> Temperance", "Greed -> Generosity", "Envy -> Gratitude", "Sloth -> Diligence"].map((item) => (
              <p key={item} className="rounded-lg border border-stone bg-ivory px-4 py-3 font-semibold text-navy">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
      <PrayerBlock
        title="Prayer Against Temptation"
        text="Lord Jesus Christ, Son of the Living God, have mercy on me, a sinner. I renounce this temptation and every lie of the enemy. I choose You above sin. Cover me with Your Precious Blood, strengthen me by Your grace, and lead me in the path of holiness. Amen."
      />
    </PageSection>
  );
}

function ClosingRetreat() {
  return (
    <PageSection id="closing" title="Closing the Retreat">
      <p className="daily-readable-muted">At the end of Day 3, spend time thanking God for every grace received, even hidden graces.</p>
      <PrayerBlock
        title="Closing Consecration"
        text="Lord Jesus Christ, I place myself entirely into Your Sacred Heart. Receive this fast, my prayers, my sacrifices, my weaknesses, and my desires. Purify me from sin, strengthen me against temptation, fill me with the Holy Spirit, and make me faithful to Your will. May I hunger more for Your Presence than for earthly comforts. Through the intercession of the Blessed Virgin Mary, St. Joseph, St. Michael the Archangel, and all the saints, grant that this time of fasting may bear lasting fruit in my life and in the lives of all for whom I have prayed. May every sacrifice offered in love bring glory to the Father and draw souls closer to You. Amen."
      />
      <div className="content-card mt-6 p-6">
        <h3 className="font-display text-3xl font-semibold text-navy">Post-retreat resolution</h3>
        <p className="mt-2 text-muted">Create a simple rule of life:</p>
        <Checklist items={["Daily Morning Offering", "Daily Scripture", "Weekly or monthly Confession", "Sunday Mass and daily Mass when possible", "Regular Eucharistic Adoration", "Rosary", "Nightly examination of conscience", "Works of mercy", "Continued prayer for the intention list"]} />
      </div>
    </PageSection>
  );
}

function ShareRetreat() {
  return (
    <PageSection id="share" title="Invite Others to Join">
      <div className="content-card p-5 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-display text-3xl font-semibold text-navy">Copyable invitation text</h3>
          <CopyButton text={shareText} label="Copy Invitation" copiedLabel="Invitation copied" />
        </div>
        <pre className="mt-5 max-h-[34rem] overflow-auto whitespace-pre-wrap rounded-xl border border-stone bg-ivory p-4 text-base leading-7 text-navy">
          {shareText}
        </pre>
      </div>
    </PageSection>
  );
}

function PageSection({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 py-10 sm:py-12">
      <div className="card-parchment !border-t-burgundy p-5 shadow-oratory sm:p-8 lg:p-10">
        <div className="max-w-4xl">
          <h2 className="font-display text-balance text-4xl font-semibold leading-tight text-navy sm:text-5xl">{title}</h2>
          {subtitle ? <p className="mt-3 text-xl font-semibold text-burgundy">{subtitle}</p> : null}
        </div>
        <div className="mt-7">{children}</div>
      </div>
    </section>
  );
}

function ScheduleCard({ time, title, children }: { time: string; title: string; children: React.ReactNode }) {
  return (
    <section className="content-card p-5 sm:p-6">
      <div className="flex flex-col gap-2 border-b border-stone pb-4 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="font-display text-3xl font-semibold leading-tight text-navy">{title}</h3>
        <p className="shrink-0 rounded-md bg-burgundy px-3 py-1 text-sm font-bold text-ivory">{time}</p>
      </div>
      <div className="mt-5 grid gap-5 text-base leading-8 text-muted">{children}</div>
    </section>
  );
}

function PrayerBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="prayer-card p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-burgundy">{title}</h4>
        <CopyButton text={text} label="Copy Prayer" copiedLabel="Prayer copied" compact />
      </div>
      <p className="daily-prayer-readable mt-4">{text}</p>
    </div>
  );
}

function PromptList({ title, items, ordered = false }: { title?: string; items: string[]; ordered?: boolean }) {
  const ListTag = ordered ? "ol" : "ul";
  return (
    <div>
      {title ? <h4 className="font-semibold text-navy">{title}</h4> : null}
      <ListTag className={`mt-3 grid gap-2 ${ordered ? "list-decimal pl-6" : ""}`}>
        {items.map((item) => (
          <li key={item} className={ordered ? "text-muted" : "rounded-lg border border-stone bg-ivory px-4 py-3 text-muted"}>
            {item}
          </li>
        ))}
      </ListTag>
    </div>
  );
}

function Checklist({ items, checkboxes = false }: { items: string[]; checkboxes?: boolean }) {
  return (
    <ul className="mt-4 grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 rounded-lg border border-stone bg-ivory p-3 text-muted">
          {checkboxes ? (
            <span aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 rounded border-2 border-burgundy bg-background" />
          ) : (
            <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function AccessibleDisclosure({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `intention-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <section className="content-card overflow-hidden">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((current) => !current)}
          className="focus-ring flex w-full items-center justify-between gap-4 p-5 text-left"
        >
          <span className="font-display text-2xl font-semibold text-navy">{title}</span>
          <span aria-hidden="true" className="text-2xl font-semibold text-burgundy">
            {open ? "-" : "+"}
          </span>
        </button>
      </h3>
      <div id={panelId} role="region" aria-label={`${title} intention template`} hidden={!open} className="border-t border-stone p-5">
        {children}
      </div>
    </section>
  );
}

function CopyButton({
  text,
  label,
  copiedLabel,
  variant = "secondary",
  compact = false,
}: {
  text: string;
  label: string;
  copiedLabel: string;
  variant?: "secondary" | "inverse";
  compact?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`${variant === "inverse" ? "btn btn-outline-inverse" : "btn btn-secondary"} focus-ring no-print justify-center ${
        compact ? "min-h-10 px-3 py-2 text-sm" : ""
      }`}
    >
      {copied ? copiedLabel : label}
    </button>
  );
}
