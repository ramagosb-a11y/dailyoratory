import { LitanyData } from '../../types';
import { holyNameHeroImg } from '../litanyImages';

export const holyNameLitany: LitanyData = {
  id: 'holy-name',
  slug: 'holy-name',
  title: 'Litany of the Most Holy Name of Jesus',
  subtitle: 'Jesus, Son of David, have mercy on us',
  shortDescription: 'An ancient invocation honoring the salvific power, sweetness, and majesty of the Name of Christ.',
  category: 'christ',
  eyebrow: 'CONTEMPLATIVE LITANY',
  introduction: 'At the Name of Jesus, every knee shall bend. Meditate on the sacred Name that brings light to darkness, healing to sinners, and peace to the soul.',
  heroImage: holyNameHeroImg,
  heroImageAlt: 'Devotional oil painting of the IHS Christogram surrounded by rays of golden divine light',

  colorTheme: {
    primary: '#0D2038', // Deep navy
    secondary: '#1A3353',
    goldAccent: '#BD8A2F',
    responseVariant: 'navy',
    badgeBg: 'bg-[#0D2038]/10',
    badgeText: 'text-[#0D2038]',
    cardBorder: 'border-[#0D2038]/30',
    iconBg: 'bg-[#0D2038]/15',
  },

  silenceTitle: 'Rest in the holy Name of Jesus.',
  silenceSubtitle: 'Let His Name resound quietly in your heart.',

  source: 'Approved by Pope Sixtus V in 1585 and Pope Leo XIII in 1886.',
  sourceName: 'Sacred Congregation of Rites',
  sourceUrl: 'https://www.vatican.va',
  copyrightStatus: 'Public domain (Traditional Roman Liturgy).',
  editorialNote: 'Rooted in the preaching of Saint Bernard of Clairvaux and Saint Bernardino of Siena, who popularized devotion to the Holy Name and the sacred IHS monogram.',

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
      id: 'jesus-son-god',
      index: 1,
      eyebrow: 'I · JESUS',
      title: 'Light of the Father',
      reflection: 'Jesus: God Saves. He is the splendor of the Father’s glory and the brightness of eternal light.',
      image: '/images/contemplative-litanies/holy-name-light-of-the-father.png',
      imageAlt: 'Christ radiating divine light over a darkened landscape at dawn',
      invocations: [
        { prompt: 'Jesus, Son of the living God,', response: 'have mercy on us.' },
        { prompt: 'Jesus, Splendor of the Father,', response: 'have mercy on us.' },
        { prompt: 'Jesus, Brightness of eternal light,', response: 'have mercy on us.' },
      ],
    },
    {
      id: 'king-glory',
      index: 2,
      eyebrow: 'II · KING OF GLORY',
      title: 'Sun of Justice',
      reflection: 'The King of glory came in human poverty, born of the Virgin Mary to disperse the shadows of sin and death.',
      image: '/images/contemplative-litanies/holy-name-sun-of-justice.png',
      imageAlt: 'Mary and Saint Joseph adoring the Christ Child in a golden Nativity scene',
      invocations: [
        { prompt: 'Jesus, King of glory,', response: 'have mercy on us.' },
        { prompt: 'Jesus, Sun of justice,', response: 'have mercy on us.' },
        { prompt: 'Jesus, Son of the Virgin Mary,', response: 'have mercy on us.' },
      ],
    },
    {
      id: 'jesus-lovable',
      index: 3,
      eyebrow: 'III · JESUS MOST LOVABLE',
      title: 'Mighty God',
      reflection: 'In Christ, infinite power is united with infinite tenderness. He is the Father of the world to come.',
      image: '/images/contemplative-litanies/holy-name-mighty-god.png',
      imageAlt: 'Christ blessing families and people gathered around Him',
      invocations: [
        { prompt: 'Jesus most amiable,', response: 'have mercy on us.' },
        { prompt: 'Jesus most admirable,', response: 'have mercy on us.' },
        { prompt: 'Jesus, Mighty God,', response: 'have mercy on us.' },
        { prompt: 'Jesus, Father of the world to come,', response: 'have mercy on us.' },
      ],
    },
    {
      id: 'jesus-savior',
      index: 4,
      eyebrow: 'IV · JESUS OUR SAVIOR',
      title: 'Meek and Humble of Heart',
      reflection: 'Learn from Him who is meek and humble of heart, patient in suffering and obedient even unto the Cross.',
      image: '/images/contemplative-litanies/holy-name-meek-and-humble-of-heart.png',
      imageAlt: 'Christ embracing the Cross in quiet humility',
      invocations: [
        { prompt: 'Jesus, Angel of great counsel,', response: 'have mercy on us.' },
        { prompt: 'Jesus most powerful,', response: 'have mercy on us.' },
        { prompt: 'Jesus most patient,', response: 'have mercy on us.' },
        { prompt: 'Jesus most obedient,', response: 'have mercy on us.' },
        { prompt: 'Jesus, meek and humble of heart,', response: 'have mercy on us.' },
      ],
    },
    {
      id: 'lover-souls',
      index: 5,
      eyebrow: 'V · JESUS LOVER OF SOULS',
      title: 'Author of Life',
      reflection: 'Christ is the lover of chastity, the lover of our souls, and the fountainhead of all divine virtues.',
      image: '/images/contemplative-litanies/holy-name-author-of-life.png',
      imageAlt: 'Christ teaching beside living water beneath the light of the Holy Spirit',
      invocations: [
        { prompt: 'Jesus, Lover of chastity,', response: 'have mercy on us.' },
        { prompt: 'Jesus, Lover of us,', response: 'have mercy on us.' },
        { prompt: 'Jesus, God of peace,', response: 'have mercy on us.' },
        { prompt: 'Jesus, Author of life,', response: 'have mercy on us.' },
        { prompt: 'Jesus, Model of virtues,', response: 'have mercy on us.' },
      ],
    },
    {
      id: 'jesus-refuge',
      index: 6,
      eyebrow: 'VI · JESUS OUR REFUGE',
      title: 'The Good Shepherd',
      reflection: 'He leaves the ninety-nine to seek the lost lamb. He is the father of the poor and treasure of the faithful.',
      image: '/images/contemplative-litanies/holy-name-good-shepherd.png',
      imageAlt: 'Christ the Good Shepherd carrying a rescued lamb at dawn',
      invocations: [
        { prompt: 'Jesus, Father of the poor,', response: 'have mercy on us.' },
        { prompt: 'Jesus, Treasure of the faithful,', response: 'have mercy on us.' },
        { prompt: 'Jesus, Good Shepherd,', response: 'have mercy on us.' },
        { prompt: 'Jesus, True Light,', response: 'have mercy on us.' },
        { prompt: 'Jesus, Eternal Wisdom,', response: 'have mercy on us.' },
      ],
    },
    {
      id: 'jesus-glory',
      index: 7,
      eyebrow: 'VII · JESUS OUR GLORY',
      title: 'Crown of All Saints',
      reflection: 'Christ is the way, the truth, and the life—the joy of angels, strength of martyrs, and crown of all the saints.',
      image: '/images/contemplative-litanies/holy-name-crown-of-all-saints.png',
      imageAlt: 'Christ enthroned in glory above the communion of saints',
      invocations: [
        { prompt: 'Jesus, Infinite Goodness,', response: 'have mercy on us.' },
        { prompt: 'Jesus, our Way and our Life,', response: 'have mercy on us.' },
        { prompt: 'Jesus, Joy of Angels,', response: 'have mercy on us.' },
        { prompt: 'Jesus, King of Patriarchs,', response: 'have mercy on us.' },
        { prompt: 'Jesus, Master of Apostles,', response: 'have mercy on us.' },
        { prompt: 'Jesus, Teacher of Evangelists,', response: 'have mercy on us.' },
        { prompt: 'Jesus, Strength of Martyrs,', response: 'have mercy on us.' },
        { prompt: 'Jesus, Light of Confessors,', response: 'have mercy on us.' },
        { prompt: 'Jesus, Purity of Virgins,', response: 'have mercy on us.' },
        { prompt: 'Jesus, Crown of all Saints,', response: 'have mercy on us.' },
      ],
    },
  ],

  closing: {
    title: 'Lamb of God',
    agnusDei: [
      {
        prompt: 'Lamb of God, who takes away the sins of the world,',
        response: 'spare us, O Jesus.',
      },
      {
        prompt: 'Lamb of God, who takes away the sins of the world,',
        response: 'graciously hear us, O Jesus.',
      },
      {
        prompt: 'Lamb of God, who takes away the sins of the world,',
        response: 'have mercy on us, O Jesus.',
      },
    ],
    versicle: {
      prompt: 'V. May the name of the Lord be blessed.',
      response: 'R. From this time forth and forevermore.',
    },
    collect: {
      heading: 'LET US PRAY',
      prayer:
        'O Lord Jesus Christ, who hast said: Ask and ye shall receive, seek and ye shall find, knock and it shall be opened unto you; grant, we beseech Thee, to our most humble supplications, the gift of Thy most divine love, that we may ever love Thee with our whole heart, in word and deed, and never cease from praising Thee: who livest and reignest world without end.',
      amen: 'Amen.',
    },
  },
};
