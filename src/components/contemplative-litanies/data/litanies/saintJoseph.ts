import { LitanyData } from '../../types';
import { saintJosephImg, createDevotionalArtUrl } from '../litanyImages';

export const saintJosephLitany: LitanyData = {
  id: 'saint-joseph',
  slug: 'saint-joseph',
  title: 'Litany of Saint Joseph',
  subtitle: 'Terror of demons, pray for us',
  shortDescription: 'A quiet journey through the virtues, titles, and silent guardianship of the Foster Father of Jesus.',
  category: 'mary-saints',
  eyebrow: 'CONTEMPLATIVE LITANY',
  introduction: 'Enter into the silence of Nazareth. Contemplate the humble strength, tender obedience, and faithful protection of Saint Joseph.',
  heroImage: saintJosephImg,
  heroImageAlt: 'Devotional icon of Saint Joseph holding the Christ Child and white lilies',

  colorTheme: {
    primary: '#3A533E', // Olive green
    secondary: '#253828',
    goldAccent: '#BD8A2F',
    responseVariant: 'olive',
    badgeBg: 'bg-[#3A533E]/10',
    badgeText: 'text-[#3A533E]',
    cardBorder: 'border-[#3A533E]/35',
    iconBg: 'bg-[#3A533E]/15',
  },

  silenceTitle: 'Remain in the quiet peace of Saint Joseph.',
  silenceSubtitle: 'Rest with the guardian of the Holy Family.',

  source: 'Approved by Pope St. Pius X in 1909.',
  sourceName: 'Congregation for Divine Worship and the Discipline of the Sacraments',
  sourceUrl: 'https://www.usccb.org/prayers/litany-saint-joseph',
  copyrightStatus: 'USCCB translation expressly states that it may be freely published; source and attribution retained.',
  editorialNote: 'Uses the 1909 litany with the seven invocations added by Pope Francis in 2021, following the USCCB freely-publishable English text.',

  opening: {
    title: 'In the Presence of God',
    kyrie: [
      { prompt: 'Lord, have mercy.', response: 'Lord, have mercy.' },
      { prompt: 'Christ, have mercy.', response: 'Christ, have mercy.' },
      { prompt: 'Lord, have mercy.', response: 'Lord, have mercy.' },
    ],
    trinity: [
      { prompt: 'God the Father of Heaven,', response: 'have mercy on us.' },
      { prompt: 'God the Son, Redeemer of the world,', response: 'have mercy on us.' },
      { prompt: 'God the Holy Spirit,', response: 'have mercy on us.' },
      { prompt: 'Holy Trinity, one God,', response: 'have mercy on us.' },
    ],
  },

  sections: [
    {
      id: 'son-of-david',
      index: 1,
      eyebrow: 'I · JOSEPH, SON OF DAVID',
      title: 'Heir of Promise',
      reflection: 'Contemplate Joseph’s place in salvation history: root of Jesse, faithful spouse of the Mother of God, and guardian of the eternal Promise.',
      image: saintJosephImg,
      imageAlt: 'Saint Joseph standing in quiet dignity with flowering staff and lily',
      invocations: [
        { prompt: 'Holy Mary,', response: 'pray for us.' },
        { prompt: 'Saint Joseph,', response: 'pray for us.' },
        { prompt: 'Noble Offspring of David,', response: 'pray for us.' },
        { prompt: 'Light of Patriarchs,', response: 'pray for us.' },
        { prompt: 'Spouse of the Mother of God,', response: 'pray for us.' },
        { prompt: 'Guardian of the Redeemer,', response: 'pray for us.' },
        { prompt: 'Chaste Guardian of the Virgin,', response: 'pray for us.' },
      ],
    },
    {
      id: 'father-guardian',
      index: 2,
      eyebrow: 'II · FATHER AND GUARDIAN',
      title: 'Tender and Devoted Father',
      reflection: 'Contemplate the fatherly heart of Joseph: feeding the Bread of Life, teaching the Word to speak, and protecting the infant Savior.',
      image: createDevotionalArtUrl('Father & Guardian', '#3A533E', 'lily'),
      imageAlt: 'Saint Joseph holding the infant Jesus with tender paternal devotion',
      invocations: [
        { prompt: 'Foster Father of the Son of God,', response: 'pray for us.' },
        { prompt: 'Zealous Defender of Christ,', response: 'pray for us.' },
        { prompt: 'Head of the Holy Family,', response: 'pray for us.' },
        { prompt: 'Joseph most just,', response: 'pray for us.' },
        { prompt: 'Joseph most chaste,', response: 'pray for us.' },
      ],
    },
    {
      id: 'just-faithful',
      index: 3,
      eyebrow: 'III · JUST AND FAITHFUL',
      title: 'Strength in Silence',
      reflection: 'Joseph spoke no recorded words in Scripture, yet his prompt obedience and steadfast faith answered every angel in the night.',
      image: createDevotionalArtUrl('Just & Faithful', '#3A533E', 'dove'),
      imageAlt: 'Saint Joseph listening attentively to the divine guidance of the angel in a dream',
      invocations: [
        { prompt: 'Joseph most prudent,', response: 'pray for us.' },
        { prompt: 'Joseph most courageous,', response: 'pray for us.' },
        { prompt: 'Joseph most obedient,', response: 'pray for us.' },
        { prompt: 'Joseph most faithful,', response: 'pray for us.' },
        { prompt: 'Mirror of patience,', response: 'pray for us.' },
      ],
    },
    {
      id: 'worker-nazareth',
      index: 4,
      eyebrow: 'IV · WORKER OF NAZARETH',
      title: 'Dignity of Hidden Labor',
      reflection: 'In the carpenter shop of Nazareth, Joseph sanctified manual labor and daily hidden service in love.',
      image: createDevotionalArtUrl('Worker of Nazareth', '#3A533E', 'basin'),
      imageAlt: 'Saint Joseph working in the Nazareth carpentry workshop beside young Jesus',
      invocations: [
        { prompt: 'Lover of poverty,', response: 'pray for us.' },
        { prompt: 'Model of workers,', response: 'pray for us.' },
        { prompt: 'Glory of home life,', response: 'pray for us.' },
        { prompt: 'Guardian of virgins,', response: 'pray for us.' },
        { prompt: 'Pillar of families,', response: 'pray for us.' },
      ],
    },
    {
      id: 'protector-christ',
      index: 5,
      eyebrow: 'V · PROTECTOR OF CHRIST',
      title: 'Defender in Danger',
      reflection: 'Awakened in the night, Joseph arose to take the Child and His Mother into Egypt. He remains the protector of the universal Church.',
      image: createDevotionalArtUrl('Protector of the Church', '#3A533E', 'cross'),
      imageAlt: 'Saint Joseph leading the Holy Family safely through the desert into Egypt',
      invocations: [
        { prompt: 'Solace of the wretched,', response: 'pray for us.' },
        { prompt: 'Hope of the sick,', response: 'pray for us.' },
        { prompt: 'Terror of demons,', response: 'pray for us.' },
        { prompt: 'Protector of the Holy Church,', response: 'pray for us.' },
        { prompt: 'Serve Christi, Servant of Christ,', response: 'pray for us.' },
        { prompt: 'Minister salutis, Minister of salvation,', response: 'pray for us.' },
        { prompt: 'Fulcimen in difficultatibus, Support in difficulties,', response: 'pray for us.' },
        { prompt: 'Patron of exiles,', response: 'pray for us.' },
        { prompt: 'Patron of the afflicted,', response: 'pray for us.' },
        { prompt: 'Patron of the poor,', response: 'pray for us.' },
      ],
    },
    {
      id: 'patron-dying',
      index: 6,
      eyebrow: 'VI · PATRON OF THE DYING',
      title: 'Holy Departure',
      reflection: 'Passing into eternity in the arms of Jesus and Mary, Joseph intercedes for our final perseverance and peaceful rest in God.',
      image: createDevotionalArtUrl('Patron of the Dying', '#3A533E', 'star'),
      imageAlt: 'Saint Joseph peacefully expiring surrounded by Jesus and Mary',
      invocations: [
        { prompt: 'Patron of the dying,', response: 'pray for us.' },
        { prompt: 'Comfort of our final hour,', response: 'pray for us.' },
        { prompt: 'Intercessor for holy souls,', response: 'pray for us.' },
      ],
    },
  ],

  closing: {
    title: 'Lamb of God',
    agnusDei: [
      {
        prompt: 'Lamb of God, who takes away the sins of the world,',
        response: 'spare us, O Lord.',
      },
      {
        prompt: 'Lamb of God, who takes away the sins of the world,',
        response: 'graciously hear us, O Lord.',
      },
      {
        prompt: 'Lamb of God, who takes away the sins of the world,',
        response: 'have mercy on us.',
      },
    ],
    versicle: {
      prompt: 'V. He made him the lord of His household.',
      response: 'R. And prince over all His possessions.',
    },
    collect: {
      heading: 'LET US PRAY',
      prayer:
        'O God, who in Thine ineffable providence didst vouchsafe to choose blessed Joseph to be the spouse of Thy most holy Mother, grant, we beseech Thee, that we may be made worthy to have him for our intercessor in heaven, whom on earth we venerate as our protector: who livest and reignest world without end.',
      amen: 'Amen.',
    },
  },
};
