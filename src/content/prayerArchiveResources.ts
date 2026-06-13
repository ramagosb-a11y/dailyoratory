import type { Resource, ResourceCategory, ResourceFormat } from "./types";

const archiveItems = [
  ["/prayers/14-stations-of-the-resurrection", "14 Stations of the Resurrection"],
  ["/prayers/adoration-benediction", "Adoration & Benediction"],
  ["/prayers/adoration-benediction/adoration", "Adoration"],
  ["/prayers/adoration-benediction/holy-god-we-praise-thy-name", "Holy God, We Praise Thy Name"],
  ["/prayers/adoration-benediction/o-saving-victim", "O Saving Victim"],
  ["/prayers/adoration-benediction/tantum-ergo", "Tantum Ergo"],
  ["/prayers/blessings", "Blessings"],
  ["/prayers/boa-group-prayers", "Group Prayers"],
  ["/prayers/boa-group-prayers/3-pm-prayer-intentions", "3 PM Prayer Intentions"],
  ["/prayers/boa-group-prayers/devotional-prayer-calendar", "Devotional Prayer Calendar"],
  ["/prayers/boa-group-prayers/masscandle-intentions", "Mass and Candle Intentions"],
  ["/prayers/boa-group-prayers/souls-for-ascension", "Prayer for Souls"],
  ["/prayers/boa-group-prayers/vocal-prayer-calendar", "Vocal Prayer Calendar"],
  ["/prayers/boa-group-prayers/vocal-prayer-calendar/middle-school-vocal-prayer-calendar", "Middle School Vocal Prayer Calendar"],
  ["/prayers/confession-guide", "Confession Guide"],
  ["/prayers/confession-guide/habitual-sin", "Habitual Sin"],
  ["/prayers/confession-guide/identifying-your-predominant-fault", "Identifying Your Predominant Fault"],
  ["/prayers/confession-guide/resisting-temptation", "Resisting Temptation"],
  ["/prayers/confession-guide/sins", "Sins"],
  ["/prayers/devotions", "Devotions"],
  ["/prayers/devotions/33-day-consecration-to-st-joseph", "33-Day Consecration to St. Joseph"],
  ["/prayers/devotions/divine-mercy-chaplet", "Divine Mercy Chaplet"],
  ["/prayers/devotions/the-angelus", "The Angelus"],
  ["/prayers/devotions/the-devotion-of-the-three-hail-marys", "The Devotion of the Three Hail Marys"],
  ["/prayers/ember-days", "Ember Days"],
  ["/prayers/epiphany", "Epiphany"],
  ["/prayers/epiphany/house-blessing", "House Blessing"],
  ["/prayers/examen", "Examen"],
  ["/prayers/hail-mary", "Hail Mary"],
  ["/prayers/holy-hour", "Holy Hour"],
  ["/prayers/holy-rosary", "Holy Rosary"],
  ["/prayers/holy-rosary/glorious-mysteries", "Glorious Mysteries"],
  ["/prayers/holy-rosary/glorious-mysteries/ascension-of-our-lord", "Ascension of Our Lord"],
  ["/prayers/holy-rosary/glorious-mysteries/assumption-of-mary-into-heaven", "Assumption of Mary into Heaven"],
  ["/prayers/holy-rosary/glorious-mysteries/coronation-of-mary", "Coronation of Mary"],
  ["/prayers/holy-rosary/glorious-mysteries/descent-of-the-holy-spirit-at-pentecost", "Descent of the Holy Spirit at Pentecost"],
  ["/prayers/holy-rosary/glorious-mysteries/resurrection-of-our-lord", "Resurrection of Our Lord"],
  ["/prayers/holy-rosary/joyful-mysteries", "Joyful Mysteries"],
  ["/prayers/holy-rosary/joyful-mysteries/the-annunciation-of-gabriel-to-mary", "The Annunciation of Gabriel to Mary"],
  ["/prayers/holy-rosary/joyful-mysteries/the-annunciation-of-gabriel-to-mary/joyful-mystery-the-annunciation", "Joyful Mystery: The Annunciation"],
  ["/prayers/holy-rosary/joyful-mysteries/the-birth-of-our-lord", "The Birth of Our Lord"],
  ["/prayers/holy-rosary/joyful-mysteries/the-birth-of-our-lord/joyful-mystery-the-nativity", "Joyful Mystery: The Nativity"],
  ["/prayers/holy-rosary/joyful-mysteries/the-finding-of-our-lord-in-the-temple", "The Finding of Our Lord in the Temple"],
  ["/prayers/holy-rosary/joyful-mysteries/the-finding-of-our-lord-in-the-temple/joyful-mystery-the-finding-of-jesus-in-the-temple", "Joyful Mystery: The Finding of Jesus in the Temple"],
  ["/prayers/holy-rosary/joyful-mysteries/the-presentation-of-our-lord", "The Presentation of Our Lord"],
  ["/prayers/holy-rosary/joyful-mysteries/the-presentation-of-our-lord/joyful-mystery-the-presentation-in-the-temple", "Joyful Mystery: The Presentation in the Temple"],
  ["/prayers/holy-rosary/joyful-mysteries/the-visitation", "The Visitation"],
  ["/prayers/holy-rosary/joyful-mysteries/the-visitation/joyful-mystery-the-visitation", "Joyful Mystery: The Visitation"],
  ["/prayers/holy-rosary/little-rosary", "Little Rosary"],
  ["/prayers/holy-rosary/live-rosary-online", "Live Rosary Online"],
  ["/prayers/holy-rosary/luminous-mysteries", "Luminous Mysteries"],
  ["/prayers/holy-rosary/luminous-mysteries/the-baptism-of-our-lord", "The Baptism of Our Lord"],
  ["/prayers/holy-rosary/luminous-mysteries/the-institution-of-the-holy-eucharist", "The Institution of the Holy Eucharist"],
  ["/prayers/holy-rosary/luminous-mysteries/the-proclamation-of-the-kingdom", "The Proclamation of the Kingdom"],
  ["/prayers/holy-rosary/luminous-mysteries/the-transfiguration-of-our-lord", "The Transfiguration of Our Lord"],
  ["/prayers/holy-rosary/luminous-mysteries/the-wedding-at-cana", "The Wedding at Cana"],
  ["/prayers/holy-rosary/our-lady-of-sorrows", "Our Lady of Sorrows"],
  ["/prayers/holy-rosary/sorrowful-mysteries", "Sorrowful Mysteries"],
  ["/prayers/holy-rosary/sorrowful-mysteries/our-lord-carries-the-cross-to-calvary", "Our Lord Carries the Cross to Calvary"],
  ["/prayers/holy-rosary/sorrowful-mysteries/our-lord-is-crowned-with-thorns", "Our Lord is Crowned with Thorns"],
  ["/prayers/holy-rosary/sorrowful-mysteries/our-lord-is-scourged-at-the-pillar", "Our Lord is Scourged at the Pillar"],
  ["/prayers/holy-rosary/sorrowful-mysteries/the-agony-of-our-lord-in-the-garden", "The Agony of Our Lord in the Garden"],
  ["/prayers/holy-rosary/sorrowful-mysteries/the-crucifixion-of-our-lord", "The Crucifixion of Our Lord"],
  ["/prayers/latin-rosary", "Latin Rosary"],
  ["/prayers/lectio-divina", "Lectio Divina"],
  ["/prayers/levels-of-prayer", "Levels of Prayer"],
  ["/prayers/levels-of-prayer/acquired-recollection", "Acquired Recollection"],
  ["/prayers/levels-of-prayer/affective-prayer", "Affective Prayer"],
  ["/prayers/levels-of-prayer/dark-night-of-the-soul", "Dark Night of the Soul"],
  ["/prayers/levels-of-prayer/infused-contemplation", "Infused Contemplation"],
  ["/prayers/levels-of-prayer/meditation", "Meditation"],
  ["/prayers/levels-of-prayer/meditation/guided-meditation-embracing-gods-unconditional-love", "Guided Meditation: Embracing God's Unconditional Love"],
  ["/prayers/levels-of-prayer/meditation/guided-meditation-journey-into-the-desert", "Guided Meditation: Journey into the Desert"],
  ["/prayers/levels-of-prayer/meditation/guided-meditation-our-lady-of-sorrows", "Guided Meditation: Our Lady of Sorrows"],
  ["/prayers/levels-of-prayer/meditation/guided-meditation-way-of-the-cross", "Guided Meditation: Way of the Cross"],
  ["/prayers/levels-of-prayer/prayer-of-conforming-union", "Prayer of Conforming Union"],
  ["/prayers/levels-of-prayer/prayer-of-quiet", "Prayer of Quiet"],
  ["/prayers/levels-of-prayer/prayer-of-simple-union", "Prayer of Simple Union"],
  ["/prayers/levels-of-prayer/prayer-of-transfrming-union", "Prayer of Transforming Union"],
  ["/prayers/levels-of-prayer/vocal-prayer", "Vocal Prayer"],
  ["/prayers/liturgy-of-the-hours", "Liturgy of the Hours"],
  ["/prayers/novena", "Novena"],
  ["/prayers/novena/return-to-our-lady", "Return to Our Lady"],
  ["/prayers/o-antiphons", "O Antiphons"],
  ["/prayers/o-antiphons/december-17-o-antiphons", "December 17: O Antiphons"],
  ["/prayers/o-antiphons/december-18-o-antiphons", "December 18: O Antiphons"],
  ["/prayers/o-antiphons/december-19-o-antiphons", "December 19: O Antiphons"],
  ["/prayers/o-antiphons/december-20-o-antiphons", "December 20: O Antiphons"],
  ["/prayers/o-antiphons/december-21-o-antiphons", "December 21: O Antiphons"],
  ["/prayers/o-antiphons/december-22-o-antiphons", "December 22: O Antiphons"],
  ["/prayers/o-antiphons/december-23-o-antiphons", "December 23: O Antiphons"],
  ["/prayers/offering-prayer-at-mass", "Offering Prayer at Mass"],
  ["/prayers/our-father", "Our Father"],
  ["/prayers/plenary-indulgences", "Plenary Indulgences"],
  ["/prayers/plenary-indulgences/detachment-from-sin", "Detachment from Sin"],
  ["/prayers/plenary-indulgences/devotion-to-st-francis-of-assisi", "Devotion to St. Francis of Assisi"],
  ["/prayers/plenary-indulgences/feast-of-saints-peter-and-paul", "Feast of Saints Peter and Paul"],
  ["/prayers/plenary-indulgences/portiuncula-indulgence", "Portiuncula Indulgence"],
  ["/prayers/plenary-indulgences/reciting-in-a-solemn-manner", "Reciting in a Solemn Manner"],
  ["/prayers/rhythm-of-prayer-the-jesus-prayer-as-heartbeat", "Rhythm of Prayer: The Jesus Prayer as Heartbeat"],
  ["/prayers/saint-michael-chaplet", "Saint Michael Chaplet"],
  ["/prayers/saint-michael-chaplet/guardian-angels", "Guardian Angels"],
  ["/prayers/saint-michael-chaplet/saint-gabriel", "Saint Gabriel"],
  ["/prayers/saint-michael-chaplet/saint-michael", "Saint Michael"],
  ["/prayers/saint-michael-chaplet/saint-raphael", "Saint Raphael"],
  ["/prayers/sanctified-hours", "Sanctified Hours"],
  ["/prayers/the-14-stations-for-the-eucharist", "The 14 Stations for the Eucharist"],
  ["/prayers/the-a-r-r-r-prayer", "The A.R.R.R. Prayer"],
  ["/prayers/vigil-days", "Vigil Days"],
  ["/prayers/visio-divina", "Visio Divina"],
  ["/prayers/way-of-the-cross", "Way of the Cross"],
  ["/prayers/way-of-the-cross/st-alphonsus-liguoris-way-of-the-cross", "St. Alphonsus Liguori's Way of the Cross"],
  ["/prayers/way-of-the-cross/st-faustinas-way-of-the-cross", "St. Faustina's Way of the Cross"],
] as const;

export const prayerArchiveResources: Resource[] = archiveItems.map(([legacyPath, title]) => {
  const category = getCategory(legacyPath);
  const format = getFormat(legacyPath, title);
  const season = getSeason(legacyPath);
  const slug = `prayer-archive-${legacyPath.replace(/^\/prayers\//, "").replace(/boa-group-prayers/g, "group-prayers").replace(/\//g, "-")}`;

  return {
    slug,
    title,
    description: getDescription(title, category),
    category,
    format,
    season,
    tags: getTags(legacyPath, title, category),
    minutes: getMinutes(format),
    updatedAt: "2026-05-12",
    status: "published",
    body: [
      { type: "heading", text: title },
      {
        type: "paragraph",
        text:
          "This prayer-library entry has been organized for Daily Oratory search, filtering, and future editorial expansion.",
      },
      {
        type: "list",
        items: [
          "Use this entry as a starting point for prayer or formation.",
          "Review traditional prayer texts and public-domain sources before adding full long-form text.",
          "Keep group-specific source language out of public copy unless it belongs in private migration notes.",
        ],
      },
    ],
  };
});

function getCategory(path: string): ResourceCategory {
  if (path.includes("holy-rosary") || path.includes("latin-rosary")) return "Rosary";
  if (path.includes("confession-guide")) return "Sacraments";
  if (path.includes("devotions") || path.includes("saint-michael") || path.includes("plenary-indulgences")) return "Saints & Devotions";
  if (path.includes("levels-of-prayer") || path.includes("lectio") || path.includes("visio") || path.includes("examen")) return "Formation";
  return "Prayer";
}

function getFormat(path: string, title: string): ResourceFormat {
  const lower = `${path} ${title}`.toLowerCase();
  if (lower.includes("calendar") || lower.includes("guide") || lower.includes("levels") || lower.includes("indulgence")) return "Guide";
  if (lower.includes("chaplet") || lower.includes("rosary") || lower.includes("devotion") || lower.includes("stations") || lower.includes("novena")) return "Devotion";
  return "Prayer";
}

function getSeason(path: string): Resource["season"] {
  if (path.includes("o-antiphons")) return "Advent";
  if (path.includes("epiphany")) return "Christmas";
  if (path.includes("way-of-the-cross") || path.includes("sorrowful") || path.includes("vigil-days")) return "Lent";
  if (path.includes("resurrection") || path.includes("stations-of-the-resurrection")) return "Easter";
  if (path.includes("pentecost")) return "Pentecost";
  if (path.includes("holy-rosary") || path.includes("latin-rosary") || path.includes("our-lady")) return "Marian";
  return "All Year";
}

function getTags(path: string, title: string, category: ResourceCategory) {
  const tags = new Set<string>(["prayer archive"]);
  const lower = `${path} ${title}`.toLowerCase();
  tags.add(category.toLowerCase());
  if (lower.includes("rosary") || lower.includes("mystery")) tags.add("rosary");
  if (lower.includes("adoration") || lower.includes("eucharist") || lower.includes("benediction")) tags.add("eucharist");
  if (lower.includes("confession") || lower.includes("sin")) tags.add("confession");
  if (lower.includes("mary") || lower.includes("lady") || lower.includes("hail")) tags.add("marian");
  if (lower.includes("saint") || lower.includes("st.")) tags.add("saints");
  if (lower.includes("meditation") || lower.includes("lectio") || lower.includes("visio")) tags.add("meditation");
  if (lower.includes("calendar") || lower.includes("hours")) tags.add("daily prayer");
  return Array.from(tags);
}

function getDescription(title: string, category: ResourceCategory) {
  if (category === "Rosary") return `${title} from the migrated prayer archive, organized for Rosary prayer and meditation.`;
  if (category === "Formation") return `${title} from the migrated prayer archive, organized for Catholic prayer formation.`;
  if (category === "Sacraments") return `${title} from the migrated prayer archive, organized for sacramental preparation and prayer.`;
  if (category === "Saints & Devotions") return `${title} from the migrated prayer archive, organized for Catholic devotion.`;
  return `${title} from the migrated prayer archive, organized for the Daily Oratory prayer library.`;
}

function getMinutes(format: ResourceFormat) {
  if (format === "Guide") return 8;
  if (format === "Devotion") return 10;
  return 4;
}
