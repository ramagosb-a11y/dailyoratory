export type CandleIntentionLink = {
  id: string;
  name: string;
  href: string;
  description: string;
  location: string;
  note: string;
};

export const candleIntentionLinks: CandleIntentionLink[] = [
  {
    id: "marian-votive-candles",
    name: "Marian Fathers Votive Candles",
    href: "https://marian.org/votives",
    description: "Light a votive candle through the Marian Fathers and entrust an intention to prayer.",
    location: "National Shrine of The Divine Mercy",
    note: "Votive offerings and candle availability are managed by the Marian Fathers.",
  },
  {
    id: "atonement-friars-prayer-requests",
    name: "Atonement Friars Prayer Requests",
    href: "https://www.atonementfriars.org/prayer-requests/",
    description: "Submit prayer requests to the Franciscan Friars of the Atonement.",
    location: "Graymoor",
    note: "Follow the friars' external prayer request instructions and privacy guidance.",
  },
  {
    id: "rosary-shrine-st-jude-candles",
    name: "Rosary Shrine of Saint Jude Candles",
    href: "https://www.rosaryshrineofstjude.org/candles/",
    description: "Light a candle through the Rosary Shrine of Saint Jude for a prayer intention.",
    location: "Rosary Shrine of Saint Jude",
    note: "Candle offerings and intention handling belong to the shrine.",
  },
];

