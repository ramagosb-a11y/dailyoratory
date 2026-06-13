import Link from "next/link";
import { getFeaturedSaints } from "@/lib/saints";
import { SaintCard } from "@/components/saints/SaintCard";

export function FeaturedSaints() {
  const featuredSaints = getFeaturedSaints();

  return (
    <section id="featured-saints" className="mt-16">
      <p className="liturgical-section-eyebrow">Featured saints</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">A strong place to begin</h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
        This starter group spans apostles, parents, contemplatives, missionaries, teachers,
        martyrs, and modern witnesses.
      </p>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {featuredSaints.map((saint) => (
          <SaintCard key={saint.id} saint={saint} />
        ))}
      </div>
    </section>
  );
}

export function SaintCategoryGrid() {
  const categories = [
    ["Apostles", "/saints?category=apostles"],
    ["Martyrs", "/saints?category=martyrs"],
    ["Doctors of the Church", "/saints/virtues"],
    ["Desert Fathers and Mothers", "/church-fathers"],
    ["Church Fathers", "/church-fathers"],
    ["Monastics", "/saints?category=monastics"],
    ["Missionaries", "/saints?category=missionaries"],
    ["Mystics", "/saints?category=mystics"],
    ["Popes", "/saints?state=pope"],
    ["Priests and deacons", "/saints?state=priest"],
    ["Religious sisters and brothers", "/saints?state=religious"],
    ["Married saints", "/saints?state=married"],
    ["Family saints", "/saints?category=family-saints"],
    ["Young saints", "/saints?category=young-saints"],
    ["Modern saints", "/saints?modern=true"],
    ["Eucharistic saints", "/saints?category=eucharistic-saints"],
    ["Marian saints", "/saints?category=marian-saints"],
    ["Saints of mercy", "/saints?category=saints-of-mercy"],
    ["Saints for workers", "/saints?patronage=workers"],
    ["Saints for students", "/saints?patronage=students"],
    ["Saints for the sick", "/saints?patronage=the-sick"],
    ["Saints for grief", "/saints?patronage=grief"],
    ["Saints for courage", "/saints/finder"],
    ["Saints for purity", "/saints/finder"],
    ["Saints for technology and media", "/saints?patronage=technology-and-media"],
    ["Saints for families", "/saints?patronage=families"],
  ];

  return (
    <section className="mt-16">
      <p className="liturgical-section-eyebrow">Browse</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">Browse Saints by Category</h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {categories.map(([title, href]) => (
          <Link key={title} href={href} className="card-parchment liturgical-card-accent block p-5 transition hover:-translate-y-0.5">
            <h3 className="font-display text-2xl font-semibold text-navy">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">Browse saints connected to this path of holiness.</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function SaintsByVirtue() {
  const virtues = [
    ["Faith", "Mary, Saint Peter, Saint John Paul II", "Make one clear act of faith before you feel certain."],
    ["Hope", "Saint Monica, Saint Faustina, Saint Teresa of Calcutta", "Bring one discouragement into prayer instead of hiding it."],
    ["Charity", "Saint Vincent de Paul, Saint Teresa of Calcutta, Saint Martin de Porres", "Do one work of mercy this week."],
    ["Humility", "Saint Francis of Assisi, Saint Therese, Our Lady", "Choose hidden service over recognition."],
    ["Patience", "Saint Monica, Saint Joseph, Saint Damien", "Pause before your next impatient reply."],
    ["Chastity", "Saint Maria Goretti, Saint Dominic Savio, Saint John Paul II", "Guard your eyes, imagination, and speech."],
    ["Courage", "Saint Maximilian Kolbe, Saint Joan of Arc, Saint Catherine of Siena", "Do one difficult good thing you have been postponing."],
    ["Perseverance", "Saint Benedict, Saint Therese, Saint Carlo Acutis", "Keep one small promise to God this week."],
    ["Forgiveness", "Saint Faustina, Saint Maria Goretti, Saint Rita", "Pray by name for someone who hurt you."],
    ["Zeal", "Saint Paul, Saint Francis Xavier, Saint Dominic", "Offer one word of witness with charity."],
  ];

  return (
    <section className="mt-16">
      <p className="liturgical-section-eyebrow">Virtues</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">Saints by Virtue</h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
        Saints are not only admired for their stories. They train us in habits of holiness that can
        be practiced this week.
      </p>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {virtues.map(([title, saints, practice]) => (
          <article key={title} className="card-parchment liturgical-card-accent p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{saints}</p>
            <p className="mt-4 rounded-md border border-stone bg-ivory px-4 py-3 text-sm leading-7 text-muted">
              <span className="font-semibold text-navy">Practice for the week:</span> {practice}
            </p>
            <Link href="/virtue-tracker" className="mt-5 inline-flex text-sm font-semibold text-navy underline decoration-gold underline-offset-4">
              Open Virtue Tracker
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
