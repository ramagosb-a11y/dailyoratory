import { LitanyData } from '../../types';
import { createDevotionalArtUrl, preciousBloodHeroImg } from '../litanyImages';

export const preciousBloodLitany: LitanyData = {
  id: 'precious-blood',
  slug: 'precious-blood',
  title: 'Litany of the Most Precious Blood of Jesus',
  subtitle: 'Price of our redemption, save us',
  shortDescription: 'Meditation on the life-giving stream of grace poured out for the salvation of the world.',
  category: 'christ',
  eyebrow: 'CONTEMPLATIVE LITANY',
  introduction: 'Approach the fountain of redemption with reverence. Meditate on the price of our salvation poured out in love for all humanity.',
  heroImage: preciousBloodHeroImg,
  heroImageAlt: 'Sacred devotional oil painting of the Eucharistic chalice of the Precious Blood with golden host and radiant beams',

  colorTheme: {
    primary: '#6B1D28', // Deep wine burgundy
    secondary: '#3B0F15',
    goldAccent: '#BD8A2F',
    responseVariant: 'burgundy',
    badgeBg: 'bg-[#6B1D28]/10',
    badgeText: 'text-[#6B1D28]',
    cardBorder: 'border-[#6B1D28]/35',
    iconBg: 'bg-[#6B1D28]/15',
  },

  silenceTitle: 'Rest in the peace of Christ’s redeeming love.',
  silenceSubtitle: 'Bathed in the ocean of divine mercy.',

  source: 'Promulgated by Pope Saint John XXIII in 1960.',
  sourceName: 'Apostolic Letter Inde a Primis',
  sourceUrl: 'https://www.vatican.va',
  copyrightStatus: 'Public domain (Traditional Roman Liturgy).',
  editorialNote: 'Promulgated for the universal Church by Pope Saint John XXIII in 1960 through his apostolic letter on promoting devotion to the Most Precious Blood.',

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
      id: 'incarnate-word-blood',
      index: 1,
      eyebrow: 'I · BLOOD OF THE INCARNATE WORD',
      title: 'The Eternal Covenant',
      reflection: 'The Blood of the only-begotten Son took flesh in the womb of Mary, uniting heaven and earth in an eternal testament of love.',
      image: createDevotionalArtUrl('Incarnate Word', '#6B1D28', 'chalice'),
      imageAlt: 'Golden altar with liturgical chalice and rays of divine light',
      invocations: [
        { prompt: 'Blood of Christ, only-begotten Son of the Eternal Father,', response: 'save us.' },
        { prompt: 'Blood of Christ, Incarnate Word of God,', response: 'save us.' },
        { prompt: 'Blood of Christ, of the New and Eternal Testament,', response: 'save us.' },
      ],
    },
    {
      id: 'gethsemane',
      index: 2,
      eyebrow: 'II · GETHSEMANE',
      title: 'Sweat of Blood and Surrender',
      reflection: 'In the darkness of the olive garden, Christ knelt in prayer, offering His whole will to the Father: ‘Not My will, but Thine be done.’',
      image: createDevotionalArtUrl('Gethsemane', '#6B1D28', 'hands'),
      imageAlt: 'Jesus kneeling in prayer in the Garden of Gethsemane under moonlight',
      invocations: [
        { prompt: 'Blood of Christ, falling upon the earth in the Agony,', response: 'save us.' },
        { prompt: 'Blood of Christ, shed in the surrender of Gethsemane,', response: 'save us.' },
      ],
    },
    {
      id: 'the-passion',
      index: 3,
      eyebrow: 'III · THE PASSION',
      title: 'Scourging and Thorns',
      reflection: 'Behold the King of Love crowned with thorns, wounded for our transgressions, and healing our infirmities by His stripes.',
      image: createDevotionalArtUrl('The Passion', '#6B1D28', 'crown'),
      imageAlt: 'Sacred crown of thorns with divine light radiating outward',
      invocations: [
        { prompt: 'Blood of Christ, flowing profusely in the Scourging,', response: 'save us.' },
        { prompt: 'Blood of Christ, flowing forth in the Crowning with Thorns,', response: 'save us.' },
        { prompt: 'Blood of Christ, poured out upon the Cross,', response: 'save us.' },
      ],
    },
    {
      id: 'calvary',
      index: 4,
      eyebrow: 'IV · CALVARY',
      title: 'The Pierced Side',
      reflection: 'From the pierced side of the Crucified Savior flowed blood and water—the fountainhead of the Sacraments and the birth of the Church.',
      image: createDevotionalArtUrl('Calvary', '#6B1D28', 'cross'),
      imageAlt: 'The holy Cross of Calvary standing against a twilight sky',
      invocations: [
        { prompt: 'Blood of Christ, price of our salvation,', response: 'save us.' },
        { prompt: 'Blood of Christ, without which there is no forgiveness,', response: 'save us.' },
        { prompt: 'Blood of Christ, Eucharistic drink and refreshment of souls,', response: 'save us.' },
      ],
    },
    {
      id: 'new-covenant',
      index: 5,
      eyebrow: 'V · BLOOD OF THE NEW COVENANT',
      title: 'Stream of Divine Mercy',
      reflection: 'In the Holy Eucharist, the Precious Blood is truly present, strengthening the faithful, empowering martyrs, and defeating the darkness.',
      image: createDevotionalArtUrl('New Covenant', '#6B1D28', 'chalice'),
      imageAlt: 'The Holy Eucharist and chalice surrounded by golden rays of mercy',
      invocations: [
        { prompt: 'Blood of Christ, stream of mercy,', response: 'save us.' },
        { prompt: 'Blood of Christ, victor over demons,', response: 'save us.' },
        { prompt: 'Blood of Christ, strength of martyrs,', response: 'save us.' },
      ],
    },
    {
      id: 'mercy-purification',
      index: 6,
      eyebrow: 'VI · MERCY AND PURIFICATION',
      title: 'Refuge of the Burdened',
      reflection: 'Bring your weariness and burdens to Christ. His Precious Blood cleanses every conscience and sustains all who are in peril.',
      image: createDevotionalArtUrl('Mercy & Purification', '#6B1D28', 'dove'),
      imageAlt: 'Dove of the Holy Spirit radiating grace and pure cleansing waters',
      invocations: [
        { prompt: 'Blood of Christ, comfort of confessors,', response: 'save us.' },
        { prompt: 'Blood of Christ, source of virgins,', response: 'save us.' },
        { prompt: 'Blood of Christ, support of the endangered,', response: 'save us.' },
        { prompt: 'Blood of Christ, relief of the burdened,', response: 'save us.' },
      ],
    },
    {
      id: 'victory-salvation',
      index: 7,
      eyebrow: 'VII · VICTORY AND SALVATION',
      title: 'Pledge of Eternal Life',
      reflection: 'Rejoice in the final victory of the Lamb: He who died is alive forevermore, offering hope in death and eternal peace in heaven.',
      image: createDevotionalArtUrl('Victory & Salvation', '#6B1D28', 'star'),
      imageAlt: 'The triumphant Lamb of God with the banner of victory and eternal light',
      invocations: [
        { prompt: 'Blood of Christ, solace in sorrow,', response: 'save us.' },
        { prompt: 'Blood of Christ, hope of the penitent,', response: 'save us.' },
        { prompt: 'Blood of Christ, consolation of the dying,', response: 'save us.' },
        { prompt: 'Blood of Christ, peace and tenderness of hearts,', response: 'save us.' },
        { prompt: 'Blood of Christ, pledge of eternal life,', response: 'save us.' },
        { prompt: 'Blood of Christ, freeing souls from purgatory,', response: 'save us.' },
        { prompt: 'Blood of Christ, most worthy of all glory and honor,', response: 'save us.' },
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
      prompt: 'V. Thou hast redeemed us, O Lord, in Thy Blood.',
      response: 'R. And made us a kingdom for our God.',
    },
    collect: {
      heading: 'LET US PRAY',
      prayer:
        'Almighty and everlasting God, who hast appointed Thine only-begotten Son to be the Redeemer of the world, and willed to be reconciled unto us by His Blood; grant us, we beseech Thee, so to venerate with solemn worship the price of our salvation, that the power thereof may here on earth defend us from all evils, and the fruit thereof may give us eternal joy in heaven: who livest and reignest forever and ever.',
      amen: 'Amen.',
    },
  },
};
