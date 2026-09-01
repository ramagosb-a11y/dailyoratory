import { LitanyData } from '../../types';
import { humilityHeroImg } from '../litanyImages';

export const humilityLitany: LitanyData = {
  id: 'humility',
  slug: 'humility',
  title: 'Litany of Humility',
  subtitle: 'Deliver me, Jesus',
  shortDescription: 'A prayer for freedom from pride, vanity, and the fear of humiliation, seeking pure charity in Christ.',
  category: 'spiritual-formation',
  eyebrow: 'CONTEMPLATIVE LITANY',
  introduction: 'Contemplate the humility of Christ, who emptied Himself and took the form of a servant. Pray for the freedom to love without seeking praise.',
  heroImage: humilityHeroImg,
  heroImageAlt: 'Devotional painting of Christ kneeling humbly to wash the feet of Saint Peter with basin and towel',

  colorTheme: {
    primary: '#4A5844', // Olive stone
    secondary: '#2E382A',
    goldAccent: '#BD8A2F',
    responseVariant: 'olive',
    badgeBg: 'bg-[#4A5844]/10',
    badgeText: 'text-[#4A5844]',
    cardBorder: 'border-[#4A5844]/30',
    iconBg: 'bg-[#4A5844]/15',
  },

  silenceTitle: 'Rest in humble peace before God.',
  silenceSubtitle: 'Free from pride, resting in His pure love.',

  source: 'Composed by Cardinal Rafael Merry del Val (1865–1930).',
  sourceName: 'Traditional Catholic Devotional Treasure',
  sourceUrl: 'https://www.vatican.va',
  copyrightStatus: 'Public domain (Traditional Roman Devotion).',
  editorialNote: 'Written by Cardinal Rafael Merry del Val, Secretary of State to Pope Saint Pius X, who recited it daily after celebrating Holy Mass.',

  opening: {
    title: 'In the Presence of God',
    kyrie: [
      { prompt: 'O Jesus, meek and humble of heart,', response: 'Hear me.' },
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
      id: 'desire-esteem',
      index: 1,
      eyebrow: 'I · FROM THE DESIRE OF ESTEEM',
      title: 'Deliverance from Acclaim',
      reflection: 'Contemplate Jesus hidden in Nazareth for thirty years. Pray to be freed from the constant craving for praise, honor, and human applause.',
      image: '/images/contemplative-litanies/humility-deliverance-from-acclaim.png',
      imageAlt: 'Christ working quietly at a carpenter’s bench in Nazareth',
      invocations: [
        { prompt: 'From the desire of being esteemed,', response: 'Deliver me, Jesus.' },
        { prompt: 'From the desire of being loved,', response: 'Deliver me, Jesus.' },
        { prompt: 'From the desire of being extolled,', response: 'Deliver me, Jesus.' },
        { prompt: 'From the desire of being honored,', response: 'Deliver me, Jesus.' },
        { prompt: 'From the desire of being praised,', response: 'Deliver me, Jesus.' },
        { prompt: 'From the desire of being preferred to others,', response: 'Deliver me, Jesus.' },
        { prompt: 'From the desire of being consulted,', response: 'Deliver me, Jesus.' },
        { prompt: 'From the desire of being approved,', response: 'Deliver me, Jesus.' },
      ],
    },
    {
      id: 'fear-humiliation',
      index: 2,
      eyebrow: 'II · FROM THE FEAR OF HUMILIATION',
      title: 'Deliverance from Fear',
      reflection: 'Behold Christ silent before Pilate, bruised and ridiculed for our sake. Surrender the dread of being forgotten or misunderstood.',
      image: '/images/contemplative-litanies/humility-freedom-from-fear.png',
      imageAlt: 'Christ guiding a fearful soul from a storm into light',
      invocations: [
        { prompt: 'From the fear of being humiliated,', response: 'Deliver me, Jesus.' },
        { prompt: 'From the fear of being despised,', response: 'Deliver me, Jesus.' },
        { prompt: 'From the fear of suffering rebukes,', response: 'Deliver me, Jesus.' },
        { prompt: 'From the fear of being calumniated,', response: 'Deliver me, Jesus.' },
        { prompt: 'From the fear of being forgotten,', response: 'Deliver me, Jesus.' },
        { prompt: 'From the fear of being ridiculed,', response: 'Deliver me, Jesus.' },
        { prompt: 'From the fear of being wronged,', response: 'Deliver me, Jesus.' },
        { prompt: 'From the fear of being suspected,', response: 'Deliver me, Jesus.' },
      ],
    },
    {
      id: 'grant-grace',
      index: 3,
      eyebrow: 'III · JESUS, GRANT ME THE GRACE',
      title: 'Turning Toward Charity',
      reflection: 'Humility is not self-hatred, but freedom from self-absorption. We turn from fear of injury toward the joy of selfless charity.',
      image: '/images/contemplative-litanies/humility-grace-of-humility.png',
      imageAlt: 'Christ washing a disciple’s feet before the apostles',
      invocations: [
        { prompt: 'That others may be loved more than I,', response: 'Jesus, grant me the grace to desire it.' },
        { prompt: 'That others may be esteemed more than I,', response: 'Jesus, grant me the grace to desire it.' },
      ],
    },
    {
      id: 'others-esteemed',
      index: 4,
      eyebrow: 'IV · THAT OTHERS MAY BE LOVED MORE',
      title: 'Rejoicing in Others',
      reflection: 'Like Saint John the Baptist: ‘He must increase, but I must decrease.’ Rejoice genuinely when others are chosen, praised, and preferred.',
      image: '/images/contemplative-litanies/humility-rejoicing-in-others.png',
      imageAlt: 'Saint John the Baptist directing his disciples toward Christ across the Jordan',
      invocations: [
        { prompt: 'That, in the opinion of the world, others may increase and I may decrease,', response: 'Jesus, grant me the grace to desire it.' },
        { prompt: 'That others may be chosen and I set aside,', response: 'Jesus, grant me the grace to desire it.' },
        { prompt: 'That others may be praised and I unnoticed,', response: 'Jesus, grant me the grace to desire it.' },
        { prompt: 'That others may be preferred to me in everything,', response: 'Jesus, grant me the grace to desire it.' },
      ],
    },
    {
      id: 'become-holy',
      index: 5,
      eyebrow: 'V · THAT I MAY BECOME HOLY',
      title: 'Holiness in Truth',
      reflection: 'Pray not for comparison, but for true sanctity: that others may become holier than you, provided that you become as holy as God desires.',
      image: '/images/contemplative-litanies/humility-holiness-in-truth.png',
      imageAlt: 'Christ blessing humble souls gathered before Him',
      invocations: [
        { prompt: 'That others may become holier than I, provided that I may become as holy as I should,', response: 'Jesus, grant me the grace to desire it.' },
      ],
    },
  ],

  closing: {
    title: 'Closing Prayer',
    agnusDei: [
      {
        prompt: 'Lamb of God, who takes away the sins of the world,',
        response: 'have mercy on us.',
      },
    ],
    versicle: {
      prompt: 'V. Learn from Me, for I am meek and humble of heart.',
      response: 'R. And you will find rest for your souls.',
    },
    collect: {
      heading: 'LET US PRAY',
      prayer:
        'Lord Jesus Christ, who being in the form of God didst empty Thyself and take the form of a servant; grant that we may follow the example of Thy humility on earth, so that in heaven we may be exalted to behold Thy glory: who livest and reignest forever and ever.',
      amen: 'Amen.',
    },
  },
};
