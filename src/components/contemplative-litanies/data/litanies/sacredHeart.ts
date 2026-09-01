import { LitanyData } from '../../types';
import {
  sacredHeartHeroImg,
  incarnateWordImg,
  holyTempleImg,
  furnaceCharityImg,
  kingCenterImg,
  mercyLifeImg,
  piercedHeartImg,
  consolationPeaceImg,
  hopeSaintsImg,
} from '../litanyImages';

export const sacredHeartLitany: LitanyData = {
  id: 'sacred-heart',
  slug: 'sacred-heart',
  title: 'Litany of the Sacred Heart of Jesus',
  subtitle: 'Heart of Jesus, have mercy on us',
  shortDescription: 'Eight contemplative movements through the mysteries and titles of the Heart of Christ.',
  category: 'christ',
  eyebrow: 'CONTEMPLATIVE LITANY',
  introduction: 'Move slowly. Read each invocation, rest with the image, and answer from the heart: Have mercy on us.',
  heroImage: sacredHeartHeroImg,
  heroImageAlt: 'Sacred Heart of Jesus devotional artwork',
  
  colorTheme: {
    primary: '#7A2533', // Burgundy
    secondary: '#4A121A',
    goldAccent: '#BD8A2F',
    responseVariant: 'burgundy',
    badgeBg: 'bg-[#7A2533]/10',
    badgeText: 'text-[#7A2533]',
    cardBorder: 'border-[#BD8A2F]/40',
    iconBg: 'bg-[#7A2533]/15',
  },

  silenceTitle: 'Remain with the Heart of Jesus.',
  silenceSubtitle: 'No more words are needed.',

  source: 'Promulgated for universal use by Pope Leo XIII in 1899.',
  sourceName: 'Roman Catholic Rite of Prayers',
  sourceUrl: 'https://www.vatican.va',
  copyrightStatus: 'Public domain (Traditional Roman Liturgy).',
  editorialNote: 'Composed primarily by Sister Anne Madeleine Remuzat in Marseille, approved for universal devotion by Pope Leo XIII in 1899.',

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
      id: 'incarnate-word',
      index: 1,
      eyebrow: 'I · THE INCARNATE WORD',
      title: 'The Heart of the Son',
      reflection: 'Behold the Heart of Christ: eternally from the Father, truly human through Mary, and filled with the Holy Spirit.',
      image: incarnateWordImg,
      imageAlt: 'Sacred devotional painting of Jesus with the radiant Sacred Heart, surrounded by the Holy Trinity and the Blessed Virgin Mary',
      invocations: [
        {
          prompt: 'Heart of Jesus, Son of the Eternal Father,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, formed by the Holy Spirit in the womb of the Virgin Mother,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, substantially united to the Word of God,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, of infinite majesty,',
          response: 'have mercy on us.',
        },
      ],
    },
    {
      id: 'holy-temple',
      index: 2,
      eyebrow: 'II · THE HOLY TEMPLE',
      title: 'Enter His Heart',
      reflection: 'Approach the Heart of Jesus as sanctuary, tabernacle, and doorway into the life of God.',
      image: holyTempleImg,
      imageAlt: 'Devotional image of Jesus with the Sacred Heart inside a luminous sacred temple sanctuary with altar and arches',
      invocations: [
        {
          prompt: 'Heart of Jesus, holy temple of God,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, tabernacle of the Most High,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, house of God and gate of heaven,',
          response: 'have mercy on us.',
        },
      ],
    },
    {
      id: 'furnace-charity',
      index: 3,
      eyebrow: 'III · THE FURNACE OF CHARITY',
      title: 'Rest in His Love',
      reflection: 'Let the fire of His Heart illuminate what is cold, divided, or wounded within you.',
      image: furnaceCharityImg,
      imageAlt: 'Christ with a radiant Sacred Heart surrounded by warm holy fire and golden-red light of divine charity',
      invocations: [
        {
          prompt: 'Heart of Jesus, glowing furnace of charity,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, abode of justice and love,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, full of goodness and love,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, abyss of all virtues,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, most worthy of all praise,',
          response: 'have mercy on us.',
        },
      ],
    },
    {
      id: 'king-center',
      index: 4,
      eyebrow: 'IV · KING AND CENTER',
      title: 'Turn Your Heart Toward His',
      reflection: 'All wisdom, truth, and divine fullness meet in Christ. Let Him become the center rather than one concern among many.',
      image: kingCenterImg,
      imageAlt: 'Christ enthroned peacefully in glory with the radiant Sacred Heart, wisdom, and light',
      invocations: [
        {
          prompt: 'Heart of Jesus, king and center of all hearts,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, in whom are all the treasures of wisdom and knowledge,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, in whom dwells all the fullness of the Divinity,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, in whom the Father is well pleased,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, of whose fullness we have all received,',
          response: 'have mercy on us.',
        },
      ],
    },
    {
      id: 'mercy-life',
      index: 5,
      eyebrow: 'V · MERCY AND LIFE',
      title: 'Come to the Fountain',
      reflection: 'Bring Him your need without hiding it. His patience is greater than your weakness.',
      image: mercyLifeImg,
      imageAlt: 'Jesus standing in a mountain landscape with living water of mercy and life flowing from His Sacred Heart',
      invocations: [
        {
          prompt: 'Heart of Jesus, desire of the everlasting hills,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, patient and most merciful,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, rich unto all who call upon Thee,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, fountain of life and holiness,',
          response: 'have mercy on us.',
        },
      ],
    },
    {
      id: 'pierced-heart',
      index: 6,
      eyebrow: 'VI · THE PIERCED HEART',
      title: 'Remain With Him at the Cross',
      reflection: 'Do not rush past His suffering. Receive the love revealed in His obedience, sacrifice, and pierced Heart.',
      image: piercedHeartImg,
      imageAlt: 'Sorrowful and gentle devotional depiction of Jesus with the pierced Sacred Heart crowned with thorns and the cross',
      invocations: [
        {
          prompt: 'Heart of Jesus, propitiation for our sins,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, saturated with reproaches,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, bruised for our offenses,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, made obedient unto death,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, pierced with a lance,',
          response: 'have mercy on us.',
        },
      ],
    },
    {
      id: 'consolation-peace',
      index: 7,
      eyebrow: 'VII · CONSOLATION AND PEACE',
      title: 'Receive His Peace',
      reflection: 'The wounded Heart is also the risen Heart. Let Christ meet your grief with consolation and your division with reconciliation.',
      image: consolationPeaceImg,
      imageAlt: 'The Risen Jesus with radiant Sacred Heart bringing holy peace and consolation at the dawn of resurrection',
      invocations: [
        {
          prompt: 'Heart of Jesus, source of all consolation,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, our life and resurrection,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, our peace and reconciliation,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, victim for sinners,',
          response: 'have mercy on us.',
        },
      ],
    },
    {
      id: 'hope-saints',
      index: 8,
      eyebrow: 'VIII · HOPE OF THE SAINTS',
      title: 'Place Your Trust in Him',
      reflection: 'The final movement of the litany is toward trust: in life, at death, and in the communion of the saints.',
      image: hopeSaintsImg,
      imageAlt: 'Jesus in celestial glory with the Sacred Heart, surrounded by the communion of saints in golden light',
      invocations: [
        {
          prompt: 'Heart of Jesus, salvation of those who trust in Thee,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, hope of those who die in Thee,',
          response: 'have mercy on us.',
        },
        {
          prompt: 'Heart of Jesus, delight of all the saints,',
          response: 'have mercy on us.',
        },
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
      prompt: 'V. Jesus, meek and humble of Heart.',
      response: 'R. Make our hearts like unto Thine.',
    },
    collect: {
      heading: 'LET US PRAY',
      prayer:
        'Almighty and eternal God, look upon the Heart of Thy most beloved Son and upon the praises and satisfaction which He offers Thee in the name of sinners; and to those who implore Thy mercy, in Thy great goodness, grant forgiveness in the name of the same Jesus Christ, Thy Son, who livest and reignest with Thee forever and ever.',
      amen: 'Amen.',
    },
  },
};
