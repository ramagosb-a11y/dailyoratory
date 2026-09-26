/* This file is mechanically generated from the reviewed 280-entry source. */
import type { LifeOfJesusChapter, LifeOfJesusEra, LifeOfJesusRecord, LifeOfJesusStop } from "@/types/lifeOfJesus";

export const lifeOfJesusGeneratorHash = "8194599cd5efc98addfcbd3efb40e9d2e43cd92033f4ed484d056514cdeeb2a2";
export const lifeOfJesusSourceHash = "c0f29b81640168619381c1cb68b5e1757c760e95efad608cef13c03d20e66722";
const eraMetadata = [
  {
    "id": "life-jesus-era-1",
    "partNumber": 1,
    "romanNumeral": "I",
    "title": "THE INCARNATION AND THE COMING OF THE MESSIAH",
    "theme": "The eternal Son of God enters human history.",
    "approximatePeriod": "Before Jesus' birth"
  },
  {
    "id": "life-jesus-era-2",
    "partNumber": 2,
    "romanNumeral": "II",
    "title": "THE ANNUNCIATION AND THE BIRTH OF JESUS",
    "theme": "God fulfills His promises through the Incarnation."
  },
  {
    "id": "life-jesus-era-3",
    "partNumber": 3,
    "romanNumeral": "III",
    "title": "THE HIDDEN LIFE OF JESUS",
    "theme": "The Son of God sanctifies ordinary human life.",
    "approximatePeriod": "Childhood through approximately age 30"
  },
  {
    "id": "life-jesus-era-4",
    "partNumber": 4,
    "romanNumeral": "IV",
    "title": "PREPARATION FOR PUBLIC MINISTRY",
    "theme": "The Messiah is revealed and prepares for His mission.",
    "approximatePeriod": "Beginning around age 30"
  },
  {
    "id": "life-jesus-era-5",
    "partNumber": 5,
    "romanNumeral": "V",
    "title": "THE BEGINNING OF JESUS' PUBLIC MINISTRY",
    "theme": "Jesus reveals Himself as the promised Messiah."
  },
  {
    "id": "life-jesus-era-6",
    "partNumber": 6,
    "romanNumeral": "VI",
    "title": "THE GALILEAN MINISTRY",
    "theme": "Jesus proclaims the Kingdom of God through His words and miracles."
  },
  {
    "id": "life-jesus-era-7",
    "partNumber": 7,
    "romanNumeral": "VII",
    "title": "THE TEACHINGS AND MIRACLES OF JESUS",
    "theme": "Jesus reveals the nature of God's Kingdom."
  },
  {
    "id": "life-jesus-era-8",
    "partNumber": 8,
    "romanNumeral": "VIII",
    "title": "THE REVELATION OF JESUS' IDENTITY",
    "theme": "Jesus reveals Himself as the Messiah and prepares His disciples for His Passion."
  },
  {
    "id": "life-jesus-era-9",
    "partNumber": 9,
    "romanNumeral": "IX",
    "title": "THE JOURNEY TOWARD JERUSALEM",
    "theme": "Jesus prepares His disciples for the fulfillment of His mission."
  },
  {
    "id": "life-jesus-era-10",
    "partNumber": 10,
    "romanNumeral": "X",
    "title": "HOLY WEEK",
    "theme": "Jesus willingly approaches His Passion."
  },
  {
    "id": "life-jesus-era-11",
    "partNumber": 11,
    "romanNumeral": "XI",
    "title": "THE LAST SUPPER AND THE AGONY IN THE GARDEN",
    "theme": "Jesus gives Himself completely to the Father and to His disciples."
  },
  {
    "id": "life-jesus-era-12",
    "partNumber": 12,
    "romanNumeral": "XII",
    "title": "THE PASSION AND DEATH OF JESUS",
    "theme": "Jesus offers Himself for the salvation of humanity."
  },
  {
    "id": "life-jesus-era-13",
    "partNumber": 13,
    "romanNumeral": "XIII",
    "title": "HOLY SATURDAY",
    "theme": "Christ's victory over death."
  },
  {
    "id": "life-jesus-era-14",
    "partNumber": 14,
    "romanNumeral": "XIV",
    "title": "THE RESURRECTION OF JESUS CHRIST",
    "theme": "Jesus conquers sin and death."
  },
  {
    "id": "life-jesus-era-15",
    "partNumber": 15,
    "romanNumeral": "XV",
    "title": "THE FORTY DAYS AND THE ASCENSION",
    "theme": "The risen Christ commissions His Church and ascends to the Father."
  }
] as const;
const chapterMetadata = [
  {
    "id": "life-jesus-chapter-1",
    "chapterNumber": 1,
    "title": "The Eternal Word and the Promise of Salvation",
    "eraId": "life-jesus-era-1"
  },
  {
    "id": "life-jesus-chapter-2",
    "chapterNumber": 2,
    "title": "The Annunciation and Preparation for Christ's Birth",
    "eraId": "life-jesus-era-2"
  },
  {
    "id": "life-jesus-chapter-3",
    "chapterNumber": 3,
    "title": "The Nativity",
    "eraId": "life-jesus-era-2"
  },
  {
    "id": "life-jesus-chapter-4",
    "chapterNumber": 4,
    "title": "Childhood, Adolescence, and Hidden Years",
    "eraId": "life-jesus-era-3"
  },
  {
    "id": "life-jesus-chapter-5",
    "chapterNumber": 5,
    "title": "John the Baptist and the Baptism of Jesus",
    "eraId": "life-jesus-era-4"
  },
  {
    "id": "life-jesus-chapter-6",
    "chapterNumber": 6,
    "title": "The First Disciples and Early Ministry",
    "eraId": "life-jesus-era-5"
  },
  {
    "id": "life-jesus-chapter-7",
    "chapterNumber": 7,
    "title": "Jesus Establishes His Ministry in Galilee",
    "eraId": "life-jesus-era-6"
  },
  {
    "id": "life-jesus-chapter-8",
    "chapterNumber": 8,
    "title": "The Teachings of Jesus",
    "eraId": "life-jesus-era-7"
  },
  {
    "id": "life-jesus-chapter-9",
    "chapterNumber": 9,
    "title": "Further Miracles and Parables",
    "eraId": "life-jesus-era-7"
  },
  {
    "id": "life-jesus-chapter-10",
    "chapterNumber": 10,
    "title": "The Messiah Revealed",
    "eraId": "life-jesus-era-8"
  },
  {
    "id": "life-jesus-chapter-11",
    "chapterNumber": 11,
    "title": "The Final Period of Public Ministry",
    "eraId": "life-jesus-era-9"
  },
  {
    "id": "life-jesus-chapter-12",
    "chapterNumber": 12,
    "title": "Jesus' Final Signs and Encounters",
    "eraId": "life-jesus-era-9"
  },
  {
    "id": "life-jesus-chapter-13",
    "chapterNumber": 13,
    "title": "The Entry into Jerusalem and Final Teaching",
    "eraId": "life-jesus-era-10"
  },
  {
    "id": "life-jesus-chapter-14",
    "chapterNumber": 14,
    "title": "Holy Thursday",
    "eraId": "life-jesus-era-11"
  },
  {
    "id": "life-jesus-chapter-15",
    "chapterNumber": 15,
    "title": "Good Friday",
    "eraId": "life-jesus-era-12"
  },
  {
    "id": "life-jesus-chapter-16",
    "chapterNumber": 16,
    "title": "Christ in the Tomb",
    "eraId": "life-jesus-era-13"
  },
  {
    "id": "life-jesus-chapter-17",
    "chapterNumber": 17,
    "title": "Easter Sunday",
    "eraId": "life-jesus-era-14"
  },
  {
    "id": "life-jesus-chapter-18",
    "chapterNumber": 18,
    "title": "The Risen Christ Prepares His Apostles",
    "eraId": "life-jesus-era-15"
  }
] as const;

export const lifeOfJesusRecords: LifeOfJesusRecord[] = [
  {
    "id": "life-jesus-0001",
    "sourceEntryNumber": 1,
    "eraId": "life-jesus-era-1",
    "chapterId": "life-jesus-chapter-1",
    "title": "The Eternal Word",
    "summary": "Jesus Christ, the eternal Son of God, exists before all creation.",
    "kind": "theological-prologue",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "doctrine"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 1:1–5",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 1,
        "verses": "1–5",
        "href": "https://bible.usccb.org/bible/john/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "traditional-sacred-art",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 1
  },
  {
    "id": "life-jesus-0002",
    "sourceEntryNumber": 2,
    "eraId": "life-jesus-era-1",
    "chapterId": "life-jesus-chapter-1",
    "title": "The Word Through Whom Everything Was Created",
    "summary": "All things were created through the eternal Word.",
    "kind": "theological-prologue",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "doctrine"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 1:1–3",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 1,
        "verses": "1–3",
        "href": "https://bible.usccb.org/bible/john/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Colossians 1:15–17",
        "role": "supporting",
        "book": "Colossians",
        "bookSlug": "colossians",
        "chapter": 1,
        "verses": "15–17",
        "href": "https://bible.usccb.org/bible/colossians/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "traditional-sacred-art",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 2
  },
  {
    "id": "life-jesus-0003",
    "sourceEntryNumber": 3,
    "eraId": "life-jesus-era-1",
    "chapterId": "life-jesus-chapter-1",
    "title": "The Promise of a Redeemer",
    "summary": "Following the fall of Adam and Eve, God announces the conflict between the serpent and the woman's offspring.",
    "kind": "theological-prologue",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "The placement follows a traditional Gospel harmony or Catholic presentation.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "typology",
      "doctrine"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Genesis 3:14–15",
        "role": "typological",
        "book": "Genesis",
        "bookSlug": "genesis",
        "chapter": 3,
        "verses": "14–15",
        "href": "https://bible.usccb.org/bible/genesis/3",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Genesis 3:15",
        "role": "typological",
        "book": "Genesis",
        "bookSlug": "genesis",
        "chapter": 3,
        "verses": "15",
        "href": "https://bible.usccb.org/bible/genesis/3",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "traditional-sacred-art",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 3
  },
  {
    "id": "life-jesus-0004",
    "sourceEntryNumber": 4,
    "eraId": "life-jesus-era-1",
    "chapterId": "life-jesus-chapter-1",
    "title": "God's Covenant with Abraham",
    "summary": "God promises that all nations will be blessed through Abraham's descendants.",
    "kind": "theological-prologue",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "The placement follows a traditional Gospel harmony or Catholic presentation.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "typology",
      "doctrine"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Genesis 12:1–3",
        "role": "typological",
        "book": "Genesis",
        "bookSlug": "genesis",
        "chapter": 12,
        "verses": "1–3",
        "href": "https://bible.usccb.org/bible/genesis/12",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "traditional-sacred-art",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 4
  },
  {
    "id": "life-jesus-0005",
    "sourceEntryNumber": 5,
    "eraId": "life-jesus-era-1",
    "chapterId": "life-jesus-chapter-1",
    "title": "The Promise of an Everlasting Davidic Kingdom",
    "summary": "God promises David a royal dynasty whose ultimate fulfillment Christians recognize in Jesus Christ.",
    "kind": "theological-prologue",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "The placement follows a traditional Gospel harmony or Catholic presentation.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "typology",
      "doctrine"
    ],
    "scripturePassages": [
      {
        "displayLabel": "2 Samuel 7:12–16",
        "role": "typological",
        "book": "2 Samuel",
        "bookSlug": "2samuel",
        "chapter": 7,
        "verses": "12–16",
        "href": "https://bible.usccb.org/bible/2samuel/7",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "traditional-sacred-art",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 5
  },
  {
    "id": "life-jesus-0006",
    "sourceEntryNumber": 6,
    "eraId": "life-jesus-era-1",
    "chapterId": "life-jesus-chapter-1",
    "title": "Isaiah's Prophecy of Emmanuel",
    "summary": "The prophet Isaiah announces the sign of Emmanuel.",
    "kind": "theological-prologue",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "The placement follows a traditional Gospel harmony or Catholic presentation.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "typology",
      "doctrine"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Isaiah 7:14",
        "role": "typological",
        "book": "Isaiah",
        "bookSlug": "isaiah",
        "chapter": 7,
        "verses": "14",
        "href": "https://bible.usccb.org/bible/isaiah/7",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 1:22–23",
        "role": "supporting",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 1,
        "verses": "22–23",
        "href": "https://bible.usccb.org/bible/matthew/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "traditional-sacred-art",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 6
  },
  {
    "id": "life-jesus-0007",
    "sourceEntryNumber": 7,
    "eraId": "life-jesus-era-1",
    "chapterId": "life-jesus-chapter-1",
    "title": "The Prophecy of the Messiah's Birthplace",
    "summary": "The prophet Micah identifies Bethlehem in his prophecy of a future ruler.",
    "kind": "theological-prologue",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "The placement follows a traditional Gospel harmony or Catholic presentation.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "typology",
      "doctrine"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Micah 5:1–4",
        "role": "typological",
        "book": "Micah",
        "bookSlug": "micah",
        "chapter": 5,
        "verses": "1–4",
        "href": "https://bible.usccb.org/bible/micah/5",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "traditional-sacred-art",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 7
  },
  {
    "id": "life-jesus-0008",
    "sourceEntryNumber": 8,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-2",
    "title": "The Angel Gabriel Appears to Zechariah",
    "summary": "Gabriel announces that Zechariah and Elizabeth will have a son, John, who will prepare the people for the Lord.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 1:5–25",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 1,
        "verses": "5–25",
        "href": "https://bible.usccb.org/bible/luke/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 8
  },
  {
    "id": "life-jesus-0009",
    "sourceEntryNumber": 9,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-2",
    "title": "The Annunciation to the Blessed Virgin Mary",
    "summary": "Gabriel announces that Mary will conceive Jesus, the Son of God, through the Holy Spirit.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history",
      "devotional-tradition"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 1:26–38",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 1,
        "verses": "26–38",
        "href": "https://bible.usccb.org/bible/luke/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 9
  },
  {
    "id": "life-jesus-0010",
    "sourceEntryNumber": 10,
    "parentStopId": "life-jesus-0009",
    "localOrder": 1,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-2",
    "title": "The Incarnation",
    "summary": "By the Holy Spirit, the eternal Son assumes human nature in Mary’s womb; Mary freely gives her fiat.",
    "kind": "doctrinal-mystery",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "The placement follows a traditional Gospel harmony or Catholic presentation.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history",
      "doctrine"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 1:35–38",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 1,
        "verses": "35–38",
        "href": "https://bible.usccb.org/bible/luke/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "John 1:14",
        "role": "supporting",
        "book": "John",
        "bookSlug": "john",
        "chapter": 1,
        "verses": "14",
        "href": "https://bible.usccb.org/bible/john/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [
      {
        "title": "Catechism of the Catholic Church",
        "locator": "456–483",
        "url": "https://www.vatican.va/archive/ENG0015/__P1J.HTM",
        "verificationStatus": "unresolved",
        "sourceNotes": [
          "Requires final human theological/source approval before publication."
        ]
      }
    ],
    "mediaTreatment": "traditional-sacred-art",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0011",
    "sourceEntryNumber": 11,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-2",
    "title": "Mary's Visitation to Elizabeth",
    "summary": "Mary journeys to visit her relative Elizabeth.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history",
      "devotional-tradition"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 1:39–45",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 1,
        "verses": "39–45",
        "href": "https://bible.usccb.org/bible/luke/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 1:36",
        "role": "supporting",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 1,
        "verses": "36",
        "href": "https://bible.usccb.org/bible/luke/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 10
  },
  {
    "id": "life-jesus-0012",
    "sourceEntryNumber": 12,
    "parentStopId": "life-jesus-0011",
    "localOrder": 1,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-2",
    "title": "The Magnificat",
    "summary": "Mary praises God for His mercy and faithfulness.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 1:46–56",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 1,
        "verses": "46–56",
        "href": "https://bible.usccb.org/bible/luke/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0013",
    "sourceEntryNumber": 13,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-2",
    "title": "The Birth of John the Baptist",
    "summary": "Elizabeth gives birth to John, the future forerunner of Christ.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 1:57–66",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 1,
        "verses": "57–66",
        "href": "https://bible.usccb.org/bible/luke/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 11
  },
  {
    "id": "life-jesus-0014",
    "sourceEntryNumber": 14,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-2",
    "title": "Zechariah's Prophecy",
    "summary": "Zechariah proclaims the Benedictus, blessing God for His promise of salvation.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 1:67–79",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 1,
        "verses": "67–79",
        "href": "https://bible.usccb.org/bible/luke/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 12
  },
  {
    "id": "life-jesus-0015",
    "sourceEntryNumber": 15,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-2",
    "title": "An Angel Appears to Joseph",
    "summary": "Joseph learns in a dream that Mary's child was conceived through the Holy Spirit.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The canonical sources do not establish a single exact inter-Gospel date or sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 1:18–25",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 1,
        "verses": "18–25",
        "href": "https://bible.usccb.org/bible/matthew/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 13
  },
  {
    "id": "life-jesus-0016",
    "sourceEntryNumber": 16,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-3",
    "title": "The Journey to Bethlehem",
    "summary": "Joseph travels with Mary to Bethlehem in connection with the census.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 2:1–5",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 2,
        "verses": "1–5",
        "href": "https://bible.usccb.org/bible/luke/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 14
  },
  {
    "id": "life-jesus-0017",
    "sourceEntryNumber": 17,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-3",
    "title": "The Birth of Jesus Christ",
    "summary": "Jesus is born in Bethlehem.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "The placement follows a traditional Gospel harmony or Catholic presentation.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history",
      "devotional-tradition"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 2:6–7",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 2,
        "verses": "6–7",
        "href": "https://bible.usccb.org/bible/luke/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 1:24–25",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 1,
        "verses": "24–25",
        "href": "https://bible.usccb.org/bible/matthew/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 15
  },
  {
    "id": "life-jesus-0018",
    "sourceEntryNumber": 18,
    "parentStopId": "life-jesus-0017",
    "localOrder": 1,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-3",
    "title": "The Angel Announces the Savior's Birth to the Shepherds",
    "summary": "An angel announces the birth of Christ the Lord.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 2:8–12",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 2,
        "verses": "8–12",
        "href": "https://bible.usccb.org/bible/luke/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0019",
    "sourceEntryNumber": 19,
    "parentStopId": "life-jesus-0017",
    "localOrder": 2,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-3",
    "title": "The Heavenly Host Praises God",
    "summary": "The shepherds witness the angelic proclamation of glory to God and peace on earth.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 2:13–14",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 2,
        "verses": "13–14",
        "href": "https://bible.usccb.org/bible/luke/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0020",
    "sourceEntryNumber": 20,
    "parentStopId": "life-jesus-0017",
    "localOrder": 3,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-3",
    "title": "The Shepherds Visit the Infant Jesus",
    "summary": "The shepherds travel to Bethlehem and find Mary, Joseph, and the infant Jesus.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 2:15–20",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 2,
        "verses": "15–20",
        "href": "https://bible.usccb.org/bible/luke/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0021",
    "sourceEntryNumber": 21,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-3",
    "title": "The Circumcision and Naming of Jesus",
    "summary": "Eight days after His birth, Jesus is circumcised and receives the name announced by Gabriel.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 2:21",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 2,
        "verses": "21",
        "href": "https://bible.usccb.org/bible/luke/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 16
  },
  {
    "id": "life-jesus-0022",
    "sourceEntryNumber": 22,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-3",
    "title": "The Presentation of Jesus in the Temple",
    "summary": "Mary and Joseph bring Jesus to Jerusalem in accordance with the Law.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "The visible order of the Presentation, Magi, flight into Egypt, return, and Nazareth material is a traditional harmony; the Gospels do not state every interval or a single combined sequence.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history",
      "devotional-tradition"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 2:22–24",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 2,
        "verses": "22–24",
        "href": "https://bible.usccb.org/bible/luke/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "infancy-harmony",
    "stopNumber": 17
  },
  {
    "id": "life-jesus-0023",
    "sourceEntryNumber": 23,
    "parentStopId": "life-jesus-0022",
    "localOrder": 1,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-3",
    "title": "Simeon Recognizes the Messiah",
    "summary": "Simeon takes Jesus into his arms and proclaims Him a light for the nations.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "The visible order of the Presentation, Magi, flight into Egypt, return, and Nazareth material is a traditional harmony; the Gospels do not state every interval or a single combined sequence.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 2:25–32",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 2,
        "verses": "25–32",
        "href": "https://bible.usccb.org/bible/luke/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "infancy-harmony"
  },
  {
    "id": "life-jesus-0024",
    "sourceEntryNumber": 24,
    "parentStopId": "life-jesus-0022",
    "localOrder": 2,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-3",
    "title": "Simeon's Prophecy to Mary",
    "summary": "Simeon foretells that Jesus will be a sign of contradiction and that a sword will pierce Mary's soul.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "The visible order of the Presentation, Magi, flight into Egypt, return, and Nazareth material is a traditional harmony; the Gospels do not state every interval or a single combined sequence.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history",
      "devotional-tradition"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 2:33–35",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 2,
        "verses": "33–35",
        "href": "https://bible.usccb.org/bible/luke/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "infancy-harmony"
  },
  {
    "id": "life-jesus-0025",
    "sourceEntryNumber": 25,
    "parentStopId": "life-jesus-0022",
    "localOrder": 3,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-3",
    "title": "Anna the Prophetess Recognizes Jesus",
    "summary": "Anna gives thanks to God and speaks about Jesus to those awaiting Jerusalem's redemption.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "The visible order of the Presentation, Magi, flight into Egypt, return, and Nazareth material is a traditional harmony; the Gospels do not state every interval or a single combined sequence.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 2:36–38",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 2,
        "verses": "36–38",
        "href": "https://bible.usccb.org/bible/luke/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "infancy-harmony"
  },
  {
    "id": "life-jesus-0026",
    "sourceEntryNumber": 26,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-3",
    "title": "The Magi Seek the Newborn King",
    "summary": "Wise men from the East arrive in Jerusalem seeking the newborn King of the Jews.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "The visible order of the Presentation, Magi, flight into Egypt, return, and Nazareth material is a traditional harmony; the Gospels do not state every interval or a single combined sequence.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 2:1–8",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 2,
        "verses": "1–8",
        "href": "https://bible.usccb.org/bible/matthew/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "infancy-harmony",
    "stopNumber": 18
  },
  {
    "id": "life-jesus-0027",
    "sourceEntryNumber": 27,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-3",
    "title": "The Adoration of the Magi",
    "summary": "The Magi find Jesus with Mary and offer gifts of gold, frankincense, and myrrh.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "The visible order of the Presentation, Magi, flight into Egypt, return, and Nazareth material is a traditional harmony; the Gospels do not state every interval or a single combined sequence.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 2:9–12",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 2,
        "verses": "9–12",
        "href": "https://bible.usccb.org/bible/matthew/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "infancy-harmony",
    "stopNumber": 19
  },
  {
    "id": "life-jesus-0028",
    "sourceEntryNumber": 28,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-3",
    "title": "Joseph Is Warned to Flee to Egypt",
    "summary": "An angel warns Joseph that Herod intends to kill Jesus.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "The visible order of the Presentation, Magi, flight into Egypt, return, and Nazareth material is a traditional harmony; the Gospels do not state every interval or a single combined sequence.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 2:13",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 2,
        "verses": "13",
        "href": "https://bible.usccb.org/bible/matthew/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "infancy-harmony",
    "stopNumber": 20
  },
  {
    "id": "life-jesus-0029",
    "sourceEntryNumber": 29,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-3",
    "title": "The Flight into Egypt",
    "summary": "Joseph takes Mary and Jesus into Egypt.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "The visible order of the Presentation, Magi, flight into Egypt, return, and Nazareth material is a traditional harmony; the Gospels do not state every interval or a single combined sequence.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history",
      "devotional-tradition"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 2:14–15",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 2,
        "verses": "14–15",
        "href": "https://bible.usccb.org/bible/matthew/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "infancy-harmony",
    "stopNumber": 21
  },
  {
    "id": "life-jesus-0030",
    "sourceEntryNumber": 30,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-3",
    "title": "The Massacre of the Innocents",
    "summary": "Herod orders the killing of young boys in Bethlehem and its vicinity.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "The visible order of the Presentation, Magi, flight into Egypt, return, and Nazareth material is a traditional harmony; the Gospels do not state every interval or a single combined sequence.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 2:16–18",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 2,
        "verses": "16–18",
        "href": "https://bible.usccb.org/bible/matthew/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "infancy-harmony",
    "stopNumber": 22
  },
  {
    "id": "life-jesus-0031",
    "sourceEntryNumber": 31,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-3",
    "title": "The Holy Family Returns from Egypt",
    "summary": "Following Herod's death, Joseph receives instructions to return to Israel.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "The visible order of the Presentation, Magi, flight into Egypt, return, and Nazareth material is a traditional harmony; the Gospels do not state every interval or a single combined sequence.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 2:19–21",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 2,
        "verses": "19–21",
        "href": "https://bible.usccb.org/bible/matthew/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "infancy-harmony",
    "stopNumber": 23
  },
  {
    "id": "life-jesus-0032",
    "sourceEntryNumber": 32,
    "eraId": "life-jesus-era-2",
    "chapterId": "life-jesus-chapter-3",
    "title": "The Holy Family Settles in Nazareth",
    "summary": "Matthew recounts the Holy Family settling in Nazareth after the return from Egypt; Luke summarizes their return after the Presentation.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Matthew’s return-from-Egypt sequence and Luke’s post-Presentation summary are traditionally harmonized.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 2:22–23",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 2,
        "verses": "22–23",
        "href": "https://bible.usccb.org/bible/matthew/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 2:39",
        "role": "supporting",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 2,
        "verses": "39",
        "href": "https://bible.usccb.org/bible/luke/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "infancy-harmony",
    "stopNumber": 24
  },
  {
    "id": "life-jesus-0033",
    "sourceEntryNumber": 33,
    "eraId": "life-jesus-era-3",
    "chapterId": "life-jesus-chapter-4",
    "title": "Jesus Grows in Nazareth",
    "summary": "Jesus grows physically and spiritually in the care of Mary and Joseph.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "The visible order of the Presentation, Magi, flight into Egypt, return, and Nazareth material is a traditional harmony; the Gospels do not state every interval or a single combined sequence.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 2:39–40",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 2,
        "verses": "39–40",
        "href": "https://bible.usccb.org/bible/luke/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "infancy-harmony",
    "stopNumber": 25
  },
  {
    "id": "life-jesus-0034",
    "sourceEntryNumber": 34,
    "eraId": "life-jesus-era-3",
    "chapterId": "life-jesus-chapter-4",
    "title": "The Holy Family Makes Its Annual Pilgrimage to Jerusalem",
    "summary": "Mary and Joseph travel to Jerusalem for Passover.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 2:41–42",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 2,
        "verses": "41–42",
        "href": "https://bible.usccb.org/bible/luke/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 26
  },
  {
    "id": "life-jesus-0035",
    "sourceEntryNumber": 35,
    "parentStopId": "life-jesus-0034",
    "localOrder": 1,
    "eraId": "life-jesus-era-3",
    "chapterId": "life-jesus-chapter-4",
    "title": "The Twelve-Year-Old Jesus Remains in Jerusalem",
    "summary": "Following the feast, Jesus remains behind without His parents' knowledge.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 2:43–45",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 2,
        "verses": "43–45",
        "href": "https://bible.usccb.org/bible/luke/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0036",
    "sourceEntryNumber": 36,
    "parentStopId": "life-jesus-0034",
    "localOrder": 2,
    "eraId": "life-jesus-era-3",
    "chapterId": "life-jesus-chapter-4",
    "title": "Mary and Joseph Find Jesus in the Temple",
    "summary": "After searching for Him, Mary and Joseph find Jesus among the teachers in the Temple.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history",
      "devotional-tradition"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 2:46–47",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 2,
        "verses": "46–47",
        "href": "https://bible.usccb.org/bible/luke/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0037",
    "sourceEntryNumber": 37,
    "parentStopId": "life-jesus-0034",
    "localOrder": 3,
    "eraId": "life-jesus-era-3",
    "chapterId": "life-jesus-chapter-4",
    "title": "Jesus Reveals His Special Relationship with the Father",
    "summary": "Jesus explains His presence in the Temple in relation to His Father's concerns.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 2:48–50",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 2,
        "verses": "48–50",
        "href": "https://bible.usccb.org/bible/luke/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0038",
    "sourceEntryNumber": 38,
    "parentStopId": "life-jesus-0034",
    "localOrder": 4,
    "eraId": "life-jesus-era-3",
    "chapterId": "life-jesus-chapter-4",
    "title": "Jesus Returns to Nazareth and Lives in Obedience",
    "summary": "Jesus returns home and remains obedient to Mary and Joseph.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 2:51–52",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 2,
        "verses": "51–52",
        "href": "https://bible.usccb.org/bible/luke/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0039",
    "sourceEntryNumber": 39,
    "eraId": "life-jesus-era-3",
    "chapterId": "life-jesus-chapter-4",
    "title": "The Hidden Years in Nazareth",
    "summary": "Jesus lives His ordinary human life, growing in wisdom and maturity.",
    "kind": "editorial-summary",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "The placement follows a traditional Gospel harmony or Catholic presentation.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 2:51–52",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 2,
        "verses": "51–52",
        "href": "https://bible.usccb.org/bible/luke/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 13:54–56",
        "role": "supporting",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 13,
        "verses": "54–56",
        "href": "https://bible.usccb.org/bible/matthew/13",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 6:1–3",
        "role": "supporting",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 6,
        "verses": "1–3",
        "href": "https://bible.usccb.org/bible/mark/6",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "no-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 27
  },
  {
    "id": "life-jesus-0040",
    "sourceEntryNumber": 40,
    "eraId": "life-jesus-era-4",
    "chapterId": "life-jesus-chapter-5",
    "title": "John the Baptist Begins His Public Ministry",
    "summary": "John preaches repentance and prepares Israel for the Messiah.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 3:1–6",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 3,
        "verses": "1–6",
        "href": "https://bible.usccb.org/bible/luke/3",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 3:1–6",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 3,
        "verses": "1–6",
        "href": "https://bible.usccb.org/bible/matthew/3",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 1:1–6",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 1,
        "verses": "1–6",
        "href": "https://bible.usccb.org/bible/mark/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 28
  },
  {
    "id": "life-jesus-0041",
    "sourceEntryNumber": 41,
    "eraId": "life-jesus-era-4",
    "chapterId": "life-jesus-chapter-5",
    "title": "John Calls the People to Repentance",
    "summary": "John instructs the crowds to produce good fruits as evidence of repentance.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 3:7–14",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 3,
        "verses": "7–14",
        "href": "https://bible.usccb.org/bible/luke/3",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 29
  },
  {
    "id": "life-jesus-0042",
    "sourceEntryNumber": 42,
    "eraId": "life-jesus-era-4",
    "chapterId": "life-jesus-chapter-5",
    "title": "John Announces the Coming Messiah",
    "summary": "John explains that someone greater than himself is coming.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 3:15–18",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 3,
        "verses": "15–18",
        "href": "https://bible.usccb.org/bible/luke/3",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 3:11–12",
        "role": "supporting",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 3,
        "verses": "11–12",
        "href": "https://bible.usccb.org/bible/matthew/3",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 1:7–8",
        "role": "supporting",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 1,
        "verses": "7–8",
        "href": "https://bible.usccb.org/bible/mark/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 30
  },
  {
    "id": "life-jesus-0043",
    "sourceEntryNumber": 43,
    "eraId": "life-jesus-era-4",
    "chapterId": "life-jesus-chapter-5",
    "title": "Jesus Comes to the Jordan River",
    "summary": "Jesus approaches John to receive baptism.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 3:13–15",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 3,
        "verses": "13–15",
        "href": "https://bible.usccb.org/bible/matthew/3",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 31
  },
  {
    "id": "life-jesus-0044",
    "sourceEntryNumber": 44,
    "eraId": "life-jesus-era-4",
    "chapterId": "life-jesus-chapter-5",
    "title": "The Baptism of Jesus",
    "summary": "John baptizes Jesus in the Jordan.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history",
      "devotional-tradition"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 3:13–17",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 3,
        "verses": "13–17",
        "href": "https://bible.usccb.org/bible/matthew/3",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 1:9–11",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 1,
        "verses": "9–11",
        "href": "https://bible.usccb.org/bible/mark/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 3:21–22",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 3,
        "verses": "21–22",
        "href": "https://bible.usccb.org/bible/luke/3",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 32
  },
  {
    "id": "life-jesus-0045",
    "sourceEntryNumber": 45,
    "parentStopId": "life-jesus-0044",
    "localOrder": 1,
    "eraId": "life-jesus-era-4",
    "chapterId": "life-jesus-chapter-5",
    "title": "The Holy Trinity Is Manifested at Jesus' Baptism",
    "summary": "At Jesus’ baptism, the Spirit descends and the Father’s voice identifies the beloved Son—a revelation the Church receives as Trinitarian.",
    "kind": "doctrinal-mystery",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "The placement follows a traditional Gospel harmony or Catholic presentation.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history",
      "doctrine"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 3:16–17",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 3,
        "verses": "16–17",
        "href": "https://bible.usccb.org/bible/matthew/3",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [
      {
        "title": "Catechism of the Catholic Church",
        "locator": "535–537",
        "url": "https://www.vatican.va/archive/ENG0015/_P1L.HTM",
        "verificationStatus": "unresolved",
        "sourceNotes": [
          "Requires final human theological/source approval before publication."
        ]
      }
    ],
    "mediaTreatment": "traditional-sacred-art",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0046",
    "sourceEntryNumber": 46,
    "eraId": "life-jesus-era-4",
    "chapterId": "life-jesus-chapter-5",
    "title": "Jesus Is Led into the Wilderness",
    "summary": "Following His baptism, Jesus enters the wilderness.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 1:12–13",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 1,
        "verses": "12–13",
        "href": "https://bible.usccb.org/bible/mark/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 4:1",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 4,
        "verses": "1",
        "href": "https://bible.usccb.org/bible/matthew/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 4:1",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 4,
        "verses": "1",
        "href": "https://bible.usccb.org/bible/luke/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 33
  },
  {
    "id": "life-jesus-0047",
    "sourceEntryNumber": 47,
    "parentStopId": "life-jesus-0046",
    "localOrder": 1,
    "eraId": "life-jesus-era-4",
    "chapterId": "life-jesus-chapter-5",
    "title": "Jesus Fasts for Forty Days",
    "summary": "Jesus fasts in the desert before beginning His public ministry.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 4:1–2",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 4,
        "verses": "1–2",
        "href": "https://bible.usccb.org/bible/matthew/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 4:1–2",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 4,
        "verses": "1–2",
        "href": "https://bible.usccb.org/bible/luke/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0048",
    "sourceEntryNumber": 48,
    "parentStopId": "life-jesus-0046",
    "localOrder": 2,
    "eraId": "life-jesus-era-4",
    "chapterId": "life-jesus-chapter-5",
    "title": "The First Temptation: Turning Stones into Bread",
    "summary": "Jesus refuses the devil's temptation and affirms dependence upon God's Word.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The display follows Matthew’s temptation sequence; Luke reverses the order of the kingdom and Temple temptations.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 4:3–4",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 4,
        "verses": "3–4",
        "href": "https://bible.usccb.org/bible/matthew/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 4:3–4",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 4,
        "verses": "3–4",
        "href": "https://bible.usccb.org/bible/luke/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection.",
      "The temptation sequence is displayed in Matthew’s order; Luke presents the kingdom and Temple temptations in the opposite order."
    ],
    "unresolvedCluster": "temptation-order"
  },
  {
    "id": "life-jesus-0049",
    "sourceEntryNumber": 49,
    "parentStopId": "life-jesus-0046",
    "localOrder": 3,
    "eraId": "life-jesus-era-4",
    "chapterId": "life-jesus-chapter-5",
    "title": "The Second Temptation: Testing God",
    "summary": "Jesus refuses to put God to the test.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The display follows Matthew’s temptation sequence; Luke reverses the order of the kingdom and Temple temptations.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 4:5–7",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 4,
        "verses": "5–7",
        "href": "https://bible.usccb.org/bible/matthew/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 4:9–12",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 4,
        "verses": "9–12",
        "href": "https://bible.usccb.org/bible/luke/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection.",
      "The temptation sequence is displayed in Matthew’s order; Luke presents the kingdom and Temple temptations in the opposite order."
    ],
    "unresolvedCluster": "temptation-order"
  },
  {
    "id": "life-jesus-0050",
    "sourceEntryNumber": 50,
    "parentStopId": "life-jesus-0046",
    "localOrder": 4,
    "eraId": "life-jesus-era-4",
    "chapterId": "life-jesus-chapter-5",
    "title": "The Third Temptation: Worshiping Satan",
    "summary": "Jesus rejects worldly power obtained through false worship.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The display follows Matthew’s temptation sequence; Luke reverses the order of the kingdom and Temple temptations.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 4:8–10",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 4,
        "verses": "8–10",
        "href": "https://bible.usccb.org/bible/matthew/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 4:5–8",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 4,
        "verses": "5–8",
        "href": "https://bible.usccb.org/bible/luke/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection.",
      "The temptation sequence is displayed in Matthew’s order; Luke presents the kingdom and Temple temptations in the opposite order."
    ],
    "unresolvedCluster": "temptation-order"
  },
  {
    "id": "life-jesus-0051",
    "sourceEntryNumber": 51,
    "parentStopId": "life-jesus-0046",
    "localOrder": 5,
    "eraId": "life-jesus-era-4",
    "chapterId": "life-jesus-chapter-5",
    "title": "Angels Minister to Jesus",
    "summary": "Following the temptations, angels minister to Him.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 4:11",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 4,
        "verses": "11",
        "href": "https://bible.usccb.org/bible/matthew/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 1:13",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 1,
        "verses": "13",
        "href": "https://bible.usccb.org/bible/mark/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0052",
    "sourceEntryNumber": 52,
    "eraId": "life-jesus-era-5",
    "chapterId": "life-jesus-chapter-6",
    "title": "John the Baptist Identifies Jesus as the Lamb of God",
    "summary": "John publicly identifies Jesus as the Lamb of God.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "Placement of John 1:29–51 after the temptations and before the Synoptic Galilean proclamation follows a traditional Gospel harmony.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 1:29–34",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 1,
        "verses": "29–34",
        "href": "https://bible.usccb.org/bible/john/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection.",
      "Placement after the temptations and before the Synoptic Galilean proclamation follows a traditional harmony; John does not synchronize these days with the Synoptic sequence."
    ],
    "unresolvedCluster": "early-johannine-ministry",
    "stopNumber": 34
  },
  {
    "id": "life-jesus-0053",
    "sourceEntryNumber": 53,
    "eraId": "life-jesus-era-5",
    "chapterId": "life-jesus-chapter-6",
    "title": "The First Disciples Begin Following Jesus",
    "summary": "Two of John's disciples begin following Jesus.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "Placement of John 1:29–51 after the temptations and before the Synoptic Galilean proclamation follows a traditional Gospel harmony.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 1:35–39",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 1,
        "verses": "35–39",
        "href": "https://bible.usccb.org/bible/john/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection.",
      "Placement after the temptations and before the Synoptic Galilean proclamation follows a traditional harmony; John does not synchronize these days with the Synoptic sequence."
    ],
    "unresolvedCluster": "early-johannine-ministry",
    "stopNumber": 35
  },
  {
    "id": "life-jesus-0054",
    "sourceEntryNumber": 54,
    "eraId": "life-jesus-era-5",
    "chapterId": "life-jesus-chapter-6",
    "title": "Andrew Brings Simon Peter to Jesus",
    "summary": "Andrew introduces his brother Simon to Jesus.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "Placement of John 1:29–51 after the temptations and before the Synoptic Galilean proclamation follows a traditional Gospel harmony.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 1:40–42",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 1,
        "verses": "40–42",
        "href": "https://bible.usccb.org/bible/john/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection.",
      "Placement after the temptations and before the Synoptic Galilean proclamation follows a traditional harmony; John does not synchronize these days with the Synoptic sequence."
    ],
    "unresolvedCluster": "early-johannine-ministry",
    "stopNumber": 36
  },
  {
    "id": "life-jesus-0055",
    "sourceEntryNumber": 55,
    "eraId": "life-jesus-era-5",
    "chapterId": "life-jesus-chapter-6",
    "title": "Jesus Calls Philip",
    "summary": "Jesus invites Philip to follow Him.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "Placement of John 1:29–51 after the temptations and before the Synoptic Galilean proclamation follows a traditional Gospel harmony.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 1:43–44",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 1,
        "verses": "43–44",
        "href": "https://bible.usccb.org/bible/john/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection.",
      "Placement after the temptations and before the Synoptic Galilean proclamation follows a traditional harmony; John does not synchronize these days with the Synoptic sequence."
    ],
    "unresolvedCluster": "early-johannine-ministry",
    "stopNumber": 37
  },
  {
    "id": "life-jesus-0056",
    "sourceEntryNumber": 56,
    "eraId": "life-jesus-era-5",
    "chapterId": "life-jesus-chapter-6",
    "title": "Philip Introduces Nathanael to Jesus",
    "summary": "Nathanael encounters Jesus and professes faith.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "Placement of John 1:29–51 after the temptations and before the Synoptic Galilean proclamation follows a traditional Gospel harmony.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 1:45–51",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 1,
        "verses": "45–51",
        "href": "https://bible.usccb.org/bible/john/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection.",
      "Placement after the temptations and before the Synoptic Galilean proclamation follows a traditional harmony; John does not synchronize these days with the Synoptic sequence."
    ],
    "unresolvedCluster": "early-johannine-ministry",
    "stopNumber": 38
  },
  {
    "id": "life-jesus-0057",
    "sourceEntryNumber": 57,
    "eraId": "life-jesus-era-5",
    "chapterId": "life-jesus-chapter-6",
    "title": "The Wedding Feast at Cana",
    "summary": "Jesus, Mary, and the disciples attend a wedding.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 2:1–5",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 2,
        "verses": "1–5",
        "href": "https://bible.usccb.org/bible/john/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 39
  },
  {
    "id": "life-jesus-0058",
    "sourceEntryNumber": 58,
    "parentStopId": "life-jesus-0057",
    "localOrder": 1,
    "eraId": "life-jesus-era-5",
    "chapterId": "life-jesus-chapter-6",
    "title": "Jesus Performs His First Sign",
    "summary": "Jesus changes water into wine, revealing His glory.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history",
      "devotional-tradition"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 2:6–11",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 2,
        "verses": "6–11",
        "href": "https://bible.usccb.org/bible/john/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0059",
    "sourceEntryNumber": 59,
    "eraId": "life-jesus-era-5",
    "chapterId": "life-jesus-chapter-6",
    "title": "Jesus Travels to Capernaum",
    "summary": "Jesus goes to Capernaum with His mother, brothers, and disciples.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 2:12",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 2,
        "verses": "12",
        "href": "https://bible.usccb.org/bible/john/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 40
  },
  {
    "id": "life-jesus-0060",
    "sourceEntryNumber": 60,
    "eraId": "life-jesus-era-5",
    "chapterId": "life-jesus-chapter-6",
    "title": "The Temple Cleansing in John’s Narrative",
    "summary": "John places Jesus’ expulsion of merchants and money changers during an early Passover visit.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "John’s early Temple cleansing may be the same event as the Synoptic Holy Week cleansing or a distinct event.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 2:13–22",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 2,
        "verses": "13–22",
        "href": "https://bible.usccb.org/bible/john/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [
      {
        "targetRecordId": "life-jesus-0178",
        "kind": "disputed",
        "note": "John and the Synoptics may narrate one cleansing in different literary positions or two distinct cleansings."
      }
    ],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "temple-cleansing-identity",
    "stopNumber": 41
  },
  {
    "id": "life-jesus-0061",
    "sourceEntryNumber": 61,
    "eraId": "life-jesus-era-5",
    "chapterId": "life-jesus-chapter-6",
    "title": "Jesus Performs Signs in Jerusalem",
    "summary": "Many respond to Jesus’ signs with belief, though the evangelist immediately qualifies the depth of that response.",
    "kind": "editorial-summary",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 2:23–25",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 2,
        "verses": "23–25",
        "href": "https://bible.usccb.org/bible/john/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "no-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 42
  },
  {
    "id": "life-jesus-0062",
    "sourceEntryNumber": 62,
    "eraId": "life-jesus-era-5",
    "chapterId": "life-jesus-chapter-6",
    "title": "Nicodemus Visits Jesus",
    "summary": "Nicodemus, a Pharisee, approaches Jesus at night.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 3:1–15",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 3,
        "verses": "1–15",
        "href": "https://bible.usccb.org/bible/john/3",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 43
  },
  {
    "id": "life-jesus-0063",
    "sourceEntryNumber": 63,
    "parentStopId": "life-jesus-0062",
    "localOrder": 1,
    "eraId": "life-jesus-era-5",
    "chapterId": "life-jesus-chapter-6",
    "title": "God’s Love and Salvation Revealed",
    "summary": "Jesus’ discourse and the evangelist’s reflection reveal the Father’s saving love in sending the Son.",
    "kind": "editorial-summary",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The canonical sources do not establish a single exact inter-Gospel date or sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 3:16–21",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 3,
        "verses": "16–21",
        "href": "https://bible.usccb.org/bible/john/3",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "no-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0064",
    "sourceEntryNumber": 64,
    "eraId": "life-jesus-era-5",
    "chapterId": "life-jesus-chapter-6",
    "title": "Jesus Ministers in Judea",
    "summary": "Jesus and His disciples spend time in the Judean countryside.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 3:22–24",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 3,
        "verses": "22–24",
        "href": "https://bible.usccb.org/bible/john/3",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 44
  },
  {
    "id": "life-jesus-0065",
    "sourceEntryNumber": 65,
    "eraId": "life-jesus-era-5",
    "chapterId": "life-jesus-chapter-6",
    "title": "John the Baptist’s Final Explicit Testimony",
    "summary": "John identifies Jesus as the bridegroom and declares that Christ must increase; the following verses may be evangelist reflection.",
    "kind": "editorial-summary",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The canonical sources do not establish a single exact inter-Gospel date or sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 3:25–30",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 3,
        "verses": "25–30",
        "href": "https://bible.usccb.org/bible/john/3",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "John 3:31–36",
        "role": "supporting",
        "book": "John",
        "bookSlug": "john",
        "chapter": 3,
        "verses": "31–36",
        "href": "https://bible.usccb.org/bible/john/3",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "no-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 45
  },
  {
    "id": "life-jesus-0066",
    "sourceEntryNumber": 66,
    "eraId": "life-jesus-era-5",
    "chapterId": "life-jesus-chapter-6",
    "title": "Jesus Encounters the Samaritan Woman",
    "summary": "Jesus speaks with a Samaritan woman at Jacob's well.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 4:1–26",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 4,
        "verses": "1–26",
        "href": "https://bible.usccb.org/bible/john/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 46
  },
  {
    "id": "life-jesus-0067",
    "sourceEntryNumber": 67,
    "eraId": "life-jesus-era-5",
    "chapterId": "life-jesus-chapter-6",
    "title": "Jesus Reveals His Mission in Samaria",
    "summary": "Jesus teaches His disciples about accomplishing the Father's will.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 4:27–38",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 4,
        "verses": "27–38",
        "href": "https://bible.usccb.org/bible/john/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 47
  },
  {
    "id": "life-jesus-0068",
    "sourceEntryNumber": 68,
    "parentStopId": "life-jesus-0066",
    "localOrder": 1,
    "eraId": "life-jesus-era-5",
    "chapterId": "life-jesus-chapter-6",
    "title": "Many Samaritans Believe in Jesus",
    "summary": "The Samaritan woman's testimony leads others to Jesus.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 4:39–42",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 4,
        "verses": "39–42",
        "href": "https://bible.usccb.org/bible/john/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0069",
    "sourceEntryNumber": 69,
    "eraId": "life-jesus-era-5",
    "chapterId": "life-jesus-chapter-6",
    "title": "Jesus Returns to Galilee",
    "summary": "Jesus travels from Samaria into Galilee.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 4:43–45",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 4,
        "verses": "43–45",
        "href": "https://bible.usccb.org/bible/john/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 48
  },
  {
    "id": "life-jesus-0070",
    "sourceEntryNumber": 70,
    "eraId": "life-jesus-era-5",
    "chapterId": "life-jesus-chapter-6",
    "title": "Jesus Heals a Royal Official's Son",
    "summary": "Jesus heals the official's child from a distance.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 4:46–54",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 4,
        "verses": "46–54",
        "href": "https://bible.usccb.org/bible/john/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 49
  },
  {
    "id": "life-jesus-0071",
    "sourceEntryNumber": 71,
    "eraId": "life-jesus-era-6",
    "chapterId": "life-jesus-chapter-7",
    "title": "Jesus Proclaims the Kingdom of God",
    "summary": "After John the Baptist has been arrested, Jesus begins proclaiming the gospel of God and calling people to repentance and faith.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "This marks the Synoptic transition after John the Baptist’s arrest; the arrest is presupposed here rather than separately narrated earlier in the timeline.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 1:14–15",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 1,
        "verses": "14–15",
        "href": "https://bible.usccb.org/bible/mark/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection.",
      "This record marks the Synoptic transition after John the Baptist’s arrest; the arrest itself is not separately narrated in this timeline before Mark 1:14."
    ],
    "stopNumber": 50
  },
  {
    "id": "life-jesus-0072",
    "sourceEntryNumber": 72,
    "eraId": "life-jesus-era-6",
    "chapterId": "life-jesus-chapter-7",
    "title": "Jesus Teaches in the Synagogue at Nazareth",
    "summary": "Jesus reads Isaiah and announces the fulfillment of Scripture.",
    "kind": "teaching-segment",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s early Nazareth rejection may relate to the later-positioned Matthew/Mark account.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 4:16–22",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 4,
        "verses": "16–22",
        "href": "https://bible.usccb.org/bible/luke/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [
      {
        "targetRecordId": "life-jesus-0119",
        "kind": "possibly-parallel",
        "note": "The Nazareth rejection accounts may describe one event arranged differently or more than one visit."
      }
    ],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "nazareth-rejection-identity",
    "stopNumber": 51
  },
  {
    "id": "life-jesus-0073",
    "sourceEntryNumber": 73,
    "parentStopId": "life-jesus-0072",
    "localOrder": 1,
    "eraId": "life-jesus-era-6",
    "chapterId": "life-jesus-chapter-7",
    "title": "Jesus Is Rejected at Nazareth",
    "summary": "The people react negatively to His teaching.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s early Nazareth rejection may relate to the later-positioned Matthew and Mark account.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 4:23–30",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 4,
        "verses": "23–30",
        "href": "https://bible.usccb.org/bible/luke/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [
      {
        "targetRecordId": "life-jesus-0119",
        "kind": "possibly-parallel",
        "note": "The Nazareth rejection accounts may describe one event arranged differently or more than one visit."
      }
    ],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "nazareth-rejection-identity"
  },
  {
    "id": "life-jesus-0074",
    "sourceEntryNumber": 74,
    "eraId": "life-jesus-era-6",
    "chapterId": "life-jesus-chapter-7",
    "title": "Jesus Makes His Home in Capernaum and Begins Proclaiming",
    "summary": "Jesus makes his home in Capernaum and begins proclaiming the nearness of the kingdom of heaven.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 4:12–17",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 4,
        "verses": "12–17",
        "href": "https://bible.usccb.org/bible/matthew/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 52
  },
  {
    "id": "life-jesus-0075",
    "sourceEntryNumber": 75,
    "eraId": "life-jesus-era-6",
    "chapterId": "life-jesus-chapter-7",
    "title": "The Miraculous Catch of Fish",
    "summary": "Simon Peter witnesses a miraculous catch.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s miraculous catch is traditionally associated with the fishermen’s call but is not demonstrably the identical scene.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 5:1–11",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 5,
        "verses": "1–11",
        "href": "https://bible.usccb.org/bible/luke/5",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [
      {
        "targetRecordId": "life-jesus-0076",
        "kind": "possibly-parallel",
        "note": "Traditional association does not prove that Luke’s catch and the Synoptic shoreline call are one scene."
      }
    ],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "first-disciples-harmony",
    "stopNumber": 53
  },
  {
    "id": "life-jesus-0076",
    "sourceEntryNumber": 76,
    "eraId": "life-jesus-era-6",
    "chapterId": "life-jesus-chapter-7",
    "title": "Jesus Calls Simon Peter, Andrew, James, and John",
    "summary": "Jesus calls the fishermen to become His disciples.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s miraculous catch is traditionally associated with the fishermen’s call but is not demonstrably the identical scene.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 4:18–22",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 4,
        "verses": "18–22",
        "href": "https://bible.usccb.org/bible/matthew/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 1:16–20",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 1,
        "verses": "16–20",
        "href": "https://bible.usccb.org/bible/mark/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [
      {
        "targetRecordId": "life-jesus-0075",
        "kind": "possibly-parallel",
        "note": "Traditional association does not prove that Luke’s catch and the Synoptic shoreline call are one scene."
      }
    ],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "first-disciples-harmony",
    "stopNumber": 54
  },
  {
    "id": "life-jesus-0077",
    "sourceEntryNumber": 77,
    "eraId": "life-jesus-era-6",
    "chapterId": "life-jesus-chapter-7",
    "title": "Jesus Expels an Unclean Spirit in Capernaum",
    "summary": "Jesus demonstrates authority over evil spirits.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 1:21–28",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 1,
        "verses": "21–28",
        "href": "https://bible.usccb.org/bible/mark/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 4:31–37",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 4,
        "verses": "31–37",
        "href": "https://bible.usccb.org/bible/luke/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 55
  },
  {
    "id": "life-jesus-0078",
    "sourceEntryNumber": 78,
    "eraId": "life-jesus-era-6",
    "chapterId": "life-jesus-chapter-7",
    "title": "Jesus Heals Peter's Mother-in-Law",
    "summary": "Jesus heals Simon Peter's mother-in-law.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 1:29–31",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 1,
        "verses": "29–31",
        "href": "https://bible.usccb.org/bible/mark/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 8:14–15",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 8,
        "verses": "14–15",
        "href": "https://bible.usccb.org/bible/matthew/8",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 4:38–39",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 4,
        "verses": "38–39",
        "href": "https://bible.usccb.org/bible/luke/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 56
  },
  {
    "id": "life-jesus-0079",
    "sourceEntryNumber": 79,
    "eraId": "life-jesus-era-6",
    "chapterId": "life-jesus-chapter-7",
    "title": "Jesus Heals Many Who Are Sick",
    "summary": "Crowds bring the sick and possessed to Jesus.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 1:32–34",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 1,
        "verses": "32–34",
        "href": "https://bible.usccb.org/bible/mark/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 8:16–17",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 8,
        "verses": "16–17",
        "href": "https://bible.usccb.org/bible/matthew/8",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 4:40–41",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 4,
        "verses": "40–41",
        "href": "https://bible.usccb.org/bible/luke/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 57
  },
  {
    "id": "life-jesus-0080",
    "sourceEntryNumber": 80,
    "eraId": "life-jesus-era-6",
    "chapterId": "life-jesus-chapter-7",
    "title": "Jesus Withdraws to Pray",
    "summary": "Jesus rises early and withdraws to a deserted place.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 1:35–39",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 1,
        "verses": "35–39",
        "href": "https://bible.usccb.org/bible/mark/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 4:42–44",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 4,
        "verses": "42–44",
        "href": "https://bible.usccb.org/bible/luke/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 58
  },
  {
    "id": "life-jesus-0081",
    "sourceEntryNumber": 81,
    "eraId": "life-jesus-era-6",
    "chapterId": "life-jesus-chapter-7",
    "title": "Jesus Cleanses a Leper",
    "summary": "Jesus heals a man suffering from leprosy.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 1:40–45",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 1,
        "verses": "40–45",
        "href": "https://bible.usccb.org/bible/mark/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 8:1–4",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 8,
        "verses": "1–4",
        "href": "https://bible.usccb.org/bible/matthew/8",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 5:12–16",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 5,
        "verses": "12–16",
        "href": "https://bible.usccb.org/bible/luke/5",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 59
  },
  {
    "id": "life-jesus-0082",
    "sourceEntryNumber": 82,
    "eraId": "life-jesus-era-6",
    "chapterId": "life-jesus-chapter-7",
    "title": "Jesus Heals a Paralytic Lowered Through a Roof",
    "summary": "Jesus forgives and heals a paralyzed man.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 2:1–12",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 2,
        "verses": "1–12",
        "href": "https://bible.usccb.org/bible/mark/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 9:1–8",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 9,
        "verses": "1–8",
        "href": "https://bible.usccb.org/bible/matthew/9",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 5:17–26",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 5,
        "verses": "17–26",
        "href": "https://bible.usccb.org/bible/luke/5",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 60
  },
  {
    "id": "life-jesus-0083",
    "sourceEntryNumber": 83,
    "eraId": "life-jesus-era-6",
    "chapterId": "life-jesus-chapter-7",
    "title": "Jesus Calls Matthew",
    "summary": "Jesus calls Matthew, the tax collector, to follow Him.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 9:9–13",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 9,
        "verses": "9–13",
        "href": "https://bible.usccb.org/bible/matthew/9",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 2:13–17",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 2,
        "verses": "13–17",
        "href": "https://bible.usccb.org/bible/mark/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 5:27–32",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 5,
        "verses": "27–32",
        "href": "https://bible.usccb.org/bible/luke/5",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 61
  },
  {
    "id": "life-jesus-0084",
    "sourceEntryNumber": 84,
    "eraId": "life-jesus-era-6",
    "chapterId": "life-jesus-chapter-7",
    "title": "Jesus Teaches About Fasting",
    "summary": "Jesus answers questions about why His disciples do not fast in the same manner as others.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 2:18–22",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 2,
        "verses": "18–22",
        "href": "https://bible.usccb.org/bible/mark/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 9:14–17",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 9,
        "verses": "14–17",
        "href": "https://bible.usccb.org/bible/matthew/9",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 5:33–39",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 5,
        "verses": "33–39",
        "href": "https://bible.usccb.org/bible/luke/5",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 62
  },
  {
    "id": "life-jesus-0085",
    "sourceEntryNumber": 85,
    "eraId": "life-jesus-era-6",
    "chapterId": "life-jesus-chapter-7",
    "title": "Jesus Teaches About the Sabbath",
    "summary": "Jesus explains the true purpose of the Sabbath.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 2:23–28",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 2,
        "verses": "23–28",
        "href": "https://bible.usccb.org/bible/mark/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 12:1–8",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 12,
        "verses": "1–8",
        "href": "https://bible.usccb.org/bible/matthew/12",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 6:1–5",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 6,
        "verses": "1–5",
        "href": "https://bible.usccb.org/bible/luke/6",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 63
  },
  {
    "id": "life-jesus-0086",
    "sourceEntryNumber": 86,
    "eraId": "life-jesus-era-6",
    "chapterId": "life-jesus-chapter-7",
    "title": "Jesus Heals a Man with a Withered Hand",
    "summary": "Jesus heals on the Sabbath.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 3:1–6",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 3,
        "verses": "1–6",
        "href": "https://bible.usccb.org/bible/mark/3",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 12:9–14",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 12,
        "verses": "9–14",
        "href": "https://bible.usccb.org/bible/matthew/12",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 6:6–11",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 6,
        "verses": "6–11",
        "href": "https://bible.usccb.org/bible/luke/6",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 64
  },
  {
    "id": "life-jesus-0087",
    "sourceEntryNumber": 87,
    "eraId": "life-jesus-era-6",
    "chapterId": "life-jesus-chapter-7",
    "title": "Large Crowds Follow Jesus",
    "summary": "People come from different regions to hear Him and seek healing.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 3:7–12",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 3,
        "verses": "7–12",
        "href": "https://bible.usccb.org/bible/mark/3",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 65
  },
  {
    "id": "life-jesus-0088",
    "sourceEntryNumber": 88,
    "eraId": "life-jesus-era-6",
    "chapterId": "life-jesus-chapter-7",
    "title": "Jesus Chooses the Twelve Apostles",
    "summary": "Jesus appoints twelve apostles after spending the night in prayer.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 6:12–16",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 6,
        "verses": "12–16",
        "href": "https://bible.usccb.org/bible/luke/6",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 3:13–19",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 3,
        "verses": "13–19",
        "href": "https://bible.usccb.org/bible/mark/3",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 10:1–4",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 10,
        "verses": "1–4",
        "href": "https://bible.usccb.org/bible/matthew/10",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 66
  },
  {
    "id": "life-jesus-0089",
    "sourceEntryNumber": 89,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-8",
    "title": "Jesus Preaches the Beatitudes",
    "summary": "Jesus reveals the attitudes and virtues that characterize the blessed life.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 5:1–12",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 5,
        "verses": "1–12",
        "href": "https://bible.usccb.org/bible/matthew/5",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 67
  },
  {
    "id": "life-jesus-0090",
    "sourceEntryNumber": 90,
    "parentStopId": "life-jesus-0089",
    "localOrder": 1,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-8",
    "title": "Jesus Teaches About Salt and Light",
    "summary": "Jesus describes His disciples' responsibility to illuminate the world.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 5:13–16",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 5,
        "verses": "13–16",
        "href": "https://bible.usccb.org/bible/matthew/5",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0091",
    "sourceEntryNumber": 91,
    "parentStopId": "life-jesus-0089",
    "localOrder": 2,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-8",
    "title": "Jesus Teaches About the Fulfillment of the Law",
    "summary": "Jesus explains His relationship to the Law and the Prophets.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 5:17–20",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 5,
        "verses": "17–20",
        "href": "https://bible.usccb.org/bible/matthew/5",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0092",
    "sourceEntryNumber": 92,
    "parentStopId": "life-jesus-0089",
    "localOrder": 3,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-8",
    "title": "Jesus Teaches About Anger and Reconciliation",
    "summary": "Jesus teaches the importance of interior righteousness.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 5:21–26",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 5,
        "verses": "21–26",
        "href": "https://bible.usccb.org/bible/matthew/5",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0093",
    "sourceEntryNumber": 93,
    "parentStopId": "life-jesus-0089",
    "localOrder": 4,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-8",
    "title": "Jesus Teaches About Purity of Heart",
    "summary": "Jesus addresses adultery, lust, and marriage.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 5:27–32",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 5,
        "verses": "27–32",
        "href": "https://bible.usccb.org/bible/matthew/5",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0094",
    "sourceEntryNumber": 94,
    "parentStopId": "life-jesus-0089",
    "localOrder": 5,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-8",
    "title": "Jesus Teaches About Truthfulness and Loving Enemies",
    "summary": "Jesus calls His disciples to truthful speech and love extending even to enemies.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 5:33–48",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 5,
        "verses": "33–48",
        "href": "https://bible.usccb.org/bible/matthew/5",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0095",
    "sourceEntryNumber": 95,
    "parentStopId": "life-jesus-0089",
    "localOrder": 6,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-8",
    "title": "Jesus Teaches About Prayer, Fasting, and Almsgiving",
    "summary": "Jesus explains how these practices should be undertaken.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 6:1–18",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 6,
        "verses": "1–18",
        "href": "https://bible.usccb.org/bible/matthew/6",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0096",
    "sourceEntryNumber": 96,
    "parentStopId": "life-jesus-0089",
    "localOrder": 7,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-8",
    "title": "Jesus Teaches the Our Father",
    "summary": "Jesus gives His disciples the Lord's Prayer.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 6:9–13",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 6,
        "verses": "9–13",
        "href": "https://bible.usccb.org/bible/matthew/6",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 11:1–4",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 11,
        "verses": "1–4",
        "href": "https://bible.usccb.org/bible/luke/11",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [
      {
        "targetRecordId": "life-jesus-0148",
        "kind": "parallel",
        "note": "Matthew and Luke transmit related forms of the Lord’s Prayer in different literary settings."
      }
    ],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0097",
    "sourceEntryNumber": 97,
    "parentStopId": "life-jesus-0089",
    "localOrder": 8,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-8",
    "title": "Jesus Teaches About Heavenly Treasure",
    "summary": "Jesus warns against attachment to worldly possessions.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 6:19–24",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 6,
        "verses": "19–24",
        "href": "https://bible.usccb.org/bible/matthew/6",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0098",
    "sourceEntryNumber": 98,
    "parentStopId": "life-jesus-0089",
    "localOrder": 9,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-8",
    "title": "Jesus Teaches About Trust in Divine Providence",
    "summary": "Jesus instructs His followers not to be consumed by anxiety.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 6:25–34",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 6,
        "verses": "25–34",
        "href": "https://bible.usccb.org/bible/matthew/6",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0099",
    "sourceEntryNumber": 99,
    "parentStopId": "life-jesus-0089",
    "localOrder": 10,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-8",
    "title": "Jesus Teaches About Judgment and Charity",
    "summary": "Jesus warns against hypocritical judgment.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 7:1–6",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 7,
        "verses": "1–6",
        "href": "https://bible.usccb.org/bible/matthew/7",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0100",
    "sourceEntryNumber": 100,
    "parentStopId": "life-jesus-0089",
    "localOrder": 11,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-8",
    "title": "Jesus Teaches About Perseverance in Prayer",
    "summary": "Jesus encourages His followers to ask, seek, and knock.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 7:7–11",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 7,
        "verses": "7–11",
        "href": "https://bible.usccb.org/bible/matthew/7",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0101",
    "sourceEntryNumber": 101,
    "parentStopId": "life-jesus-0089",
    "localOrder": 12,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-8",
    "title": "Jesus Teaches the Golden Rule",
    "summary": "Jesus teaches His followers to treat others as they wish to be treated.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 7:12",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 7,
        "verses": "12",
        "href": "https://bible.usccb.org/bible/matthew/7",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0102",
    "sourceEntryNumber": 102,
    "parentStopId": "life-jesus-0089",
    "localOrder": 13,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-8",
    "title": "Jesus Teaches About the Narrow Gate",
    "summary": "Jesus describes the demanding path that leads to life.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 7:13–14",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 7,
        "verses": "13–14",
        "href": "https://bible.usccb.org/bible/matthew/7",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0103",
    "sourceEntryNumber": 103,
    "parentStopId": "life-jesus-0089",
    "localOrder": 14,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-8",
    "title": "Jesus Teaches About True Discipleship",
    "summary": "Jesus teaches that doing the Father's will matters more than merely professing faith.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 7:21–23",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 7,
        "verses": "21–23",
        "href": "https://bible.usccb.org/bible/matthew/7",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0104",
    "sourceEntryNumber": 104,
    "parentStopId": "life-jesus-0089",
    "localOrder": 15,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-8",
    "title": "The Parable of the Wise and Foolish Builders",
    "summary": "Jesus emphasizes the necessity of putting His words into practice.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 7:24–27",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 7,
        "verses": "24–27",
        "href": "https://bible.usccb.org/bible/matthew/7",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0105",
    "sourceEntryNumber": 105,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "Jesus Heals the Centurion's Servant",
    "summary": "Jesus praises the faith associated with the centurion's request.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 8:5–13",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 8,
        "verses": "5–13",
        "href": "https://bible.usccb.org/bible/matthew/8",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 7:1–10",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 7,
        "verses": "1–10",
        "href": "https://bible.usccb.org/bible/luke/7",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 68
  },
  {
    "id": "life-jesus-0106",
    "sourceEntryNumber": 106,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "Jesus Raises the Widow's Son at Nain",
    "summary": "Jesus restores a widow's only son to life.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 7:11–17",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 7,
        "verses": "11–17",
        "href": "https://bible.usccb.org/bible/luke/7",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 69
  },
  {
    "id": "life-jesus-0107",
    "sourceEntryNumber": 107,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "John the Baptist Sends Messengers to Jesus",
    "summary": "Jesus responds by pointing to His works.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 11:2–6",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 11,
        "verses": "2–6",
        "href": "https://bible.usccb.org/bible/matthew/11",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 7:18–23",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 7,
        "verses": "18–23",
        "href": "https://bible.usccb.org/bible/luke/7",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 70
  },
  {
    "id": "life-jesus-0108",
    "sourceEntryNumber": 108,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "Jesus Praises John the Baptist",
    "summary": "Jesus identifies John's prophetic importance.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 11:7–19",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 11,
        "verses": "7–19",
        "href": "https://bible.usccb.org/bible/matthew/11",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 7:24–35",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 7,
        "verses": "24–35",
        "href": "https://bible.usccb.org/bible/luke/7",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 71
  },
  {
    "id": "life-jesus-0109",
    "sourceEntryNumber": 109,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "A Sinful Woman Anoints Jesus' Feet",
    "summary": "Jesus teaches about forgiveness and love.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 7:36–50",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 7,
        "verses": "36–50",
        "href": "https://bible.usccb.org/bible/luke/7",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [
      {
        "targetRecordId": "life-jesus-0172",
        "kind": "distinct",
        "note": "Do not identify Luke’s sinful woman with Mary of Bethany or Mary Magdalene."
      }
    ],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 72
  },
  {
    "id": "life-jesus-0110",
    "sourceEntryNumber": 110,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "Women Accompany and Support Jesus' Ministry",
    "summary": "Luke identifies women who accompany Jesus and His disciples.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 8:1–3",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 8,
        "verses": "1–3",
        "href": "https://bible.usccb.org/bible/luke/8",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 73
  },
  {
    "id": "life-jesus-0111",
    "sourceEntryNumber": 111,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "Jesus Teaches the Parable of the Sower",
    "summary": "Jesus teaches about receiving the Word of God.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 13:1–23",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 13,
        "verses": "1–23",
        "href": "https://bible.usccb.org/bible/matthew/13",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 4:1–20",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 4,
        "verses": "1–20",
        "href": "https://bible.usccb.org/bible/mark/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 8:4–15",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 8,
        "verses": "4–15",
        "href": "https://bible.usccb.org/bible/luke/8",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 74
  },
  {
    "id": "life-jesus-0112",
    "sourceEntryNumber": 112,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "Jesus Teaches the Parable of the Weeds",
    "summary": "Jesus explains the coexistence of good and evil before final judgment.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 13:24–30, 36–43",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 13,
        "verses": "24–30, 36–43",
        "href": "https://bible.usccb.org/bible/matthew/13",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 75
  },
  {
    "id": "life-jesus-0113",
    "sourceEntryNumber": 113,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "The Parables of the Mustard Seed and the Yeast",
    "summary": "Jesus describes the mysterious growth of God's Kingdom.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 13:31–35",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 13,
        "verses": "31–35",
        "href": "https://bible.usccb.org/bible/matthew/13",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 4:30–34",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 4,
        "verses": "30–34",
        "href": "https://bible.usccb.org/bible/mark/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 13:18–21",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 13,
        "verses": "18–21",
        "href": "https://bible.usccb.org/bible/luke/13",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 76
  },
  {
    "id": "life-jesus-0114",
    "sourceEntryNumber": 114,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "The Parables of the Hidden Treasure and Pearl",
    "summary": "Jesus illustrates the incomparable value of the Kingdom.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 13:44–46",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 13,
        "verses": "44–46",
        "href": "https://bible.usccb.org/bible/matthew/13",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 77
  },
  {
    "id": "life-jesus-0115",
    "sourceEntryNumber": 115,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "Jesus Calms the Storm",
    "summary": "Jesus demonstrates His authority over the forces of nature.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 4:35–41",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 4,
        "verses": "35–41",
        "href": "https://bible.usccb.org/bible/mark/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 8:23–27",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 8,
        "verses": "23–27",
        "href": "https://bible.usccb.org/bible/matthew/8",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 8:22–25",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 8,
        "verses": "22–25",
        "href": "https://bible.usccb.org/bible/luke/8",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 78
  },
  {
    "id": "life-jesus-0116",
    "sourceEntryNumber": 116,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "Jesus Delivers the Gerasene Demoniac",
    "summary": "Jesus frees a man possessed by demons.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 5:1–20",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 5,
        "verses": "1–20",
        "href": "https://bible.usccb.org/bible/mark/5",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 8:28–34",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 8,
        "verses": "28–34",
        "href": "https://bible.usccb.org/bible/matthew/8",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 8:26–39",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 8,
        "verses": "26–39",
        "href": "https://bible.usccb.org/bible/luke/8",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 79
  },
  {
    "id": "life-jesus-0117",
    "sourceEntryNumber": 117,
    "parentStopId": "life-jesus-0118",
    "localOrder": 1,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "Jesus Heals the Woman with a Hemorrhage",
    "summary": "A woman is healed after touching Jesus' clothing.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 5:25–34",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 5,
        "verses": "25–34",
        "href": "https://bible.usccb.org/bible/mark/5",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 9:20–22",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 9,
        "verses": "20–22",
        "href": "https://bible.usccb.org/bible/matthew/9",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 8:43–48",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 8,
        "verses": "43–48",
        "href": "https://bible.usccb.org/bible/luke/8",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [
      {
        "targetRecordId": "life-jesus-0118",
        "kind": "interleaved",
        "note": "The woman’s healing interrupts and is nested inside Jairus’s story."
      }
    ],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0118",
    "sourceEntryNumber": 118,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "Jesus Raises Jairus' Daughter",
    "summary": "Jesus restores a young girl to life.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 5:21–24, 35–43",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 5,
        "verses": "21–24, 35–43",
        "href": "https://bible.usccb.org/bible/mark/5",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 9:18–26",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 9,
        "verses": "18–26",
        "href": "https://bible.usccb.org/bible/matthew/9",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 8:40–56",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 8,
        "verses": "40–56",
        "href": "https://bible.usccb.org/bible/luke/8",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [
      {
        "targetRecordId": "life-jesus-0117",
        "kind": "interleaved",
        "note": "The woman’s healing interrupts and is nested inside Jairus’s story."
      }
    ],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 80
  },
  {
    "id": "life-jesus-0119",
    "sourceEntryNumber": 119,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "Jesus Experiences Rejection in Nazareth",
    "summary": "Mark and Matthew recount Jesus' rejection in His hometown.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s early Nazareth rejection may relate to the later-positioned Matthew and Mark account.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 6:1–6",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 6,
        "verses": "1–6",
        "href": "https://bible.usccb.org/bible/mark/6",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 13:53–58",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 13,
        "verses": "53–58",
        "href": "https://bible.usccb.org/bible/matthew/13",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [
      {
        "targetRecordId": "life-jesus-0072",
        "kind": "possibly-parallel",
        "note": "The Nazareth rejection accounts may describe one event arranged differently or more than one visit."
      },
      {
        "targetRecordId": "life-jesus-0073",
        "kind": "possibly-parallel",
        "note": "The Nazareth rejection accounts may describe one event arranged differently or more than one visit."
      }
    ],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "nazareth-rejection-identity",
    "stopNumber": 81
  },
  {
    "id": "life-jesus-0120",
    "sourceEntryNumber": 120,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "Jesus Sends Out the Twelve Apostles",
    "summary": "Jesus commissions the Twelve to preach repentance and heal.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 6:7–13",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 6,
        "verses": "7–13",
        "href": "https://bible.usccb.org/bible/mark/6",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 10:1–15",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 10,
        "verses": "1–15",
        "href": "https://bible.usccb.org/bible/matthew/10",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 9:1–6",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 9,
        "verses": "1–6",
        "href": "https://bible.usccb.org/bible/luke/9",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 82
  },
  {
    "id": "life-jesus-0121",
    "sourceEntryNumber": 121,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "The Death of John the Baptist",
    "summary": "Mark recounts John’s execution as a flashback after Herod hears reports about Jesus.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "John’s death is narrated retrospectively; this location does not establish its precise date.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 6:14–29",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 6,
        "verses": "14–29",
        "href": "https://bible.usccb.org/bible/mark/6",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 14:1–12",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 14,
        "verses": "1–12",
        "href": "https://bible.usccb.org/bible/matthew/14",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 83
  },
  {
    "id": "life-jesus-0122",
    "sourceEntryNumber": 122,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "Jesus Feeds the Five Thousand",
    "summary": "Jesus multiplies five loaves and two fish.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 6:1–15",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 6,
        "verses": "1–15",
        "href": "https://bible.usccb.org/bible/john/6",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 14:13–21",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 14,
        "verses": "13–21",
        "href": "https://bible.usccb.org/bible/matthew/14",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 6:30–44",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 6,
        "verses": "30–44",
        "href": "https://bible.usccb.org/bible/mark/6",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 9:10–17",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 9,
        "verses": "10–17",
        "href": "https://bible.usccb.org/bible/luke/9",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 84
  },
  {
    "id": "life-jesus-0123",
    "sourceEntryNumber": 123,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "Jesus Walks on Water",
    "summary": "Jesus approaches the disciples' boat during a storm.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 14:22–33",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 14,
        "verses": "22–33",
        "href": "https://bible.usccb.org/bible/matthew/14",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "John 6:16–21",
        "role": "parallel",
        "book": "John",
        "bookSlug": "john",
        "chapter": 6,
        "verses": "16–21",
        "href": "https://bible.usccb.org/bible/john/6",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 6:45–52",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 6,
        "verses": "45–52",
        "href": "https://bible.usccb.org/bible/mark/6",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 85
  },
  {
    "id": "life-jesus-0124",
    "sourceEntryNumber": 124,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "Jesus Delivers the Bread of Life Discourse",
    "summary": "Jesus teaches that He is the Bread of Life.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 6:22–59",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 6,
        "verses": "22–59",
        "href": "https://bible.usccb.org/bible/john/6",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 86
  },
  {
    "id": "life-jesus-0125",
    "sourceEntryNumber": 125,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "Many Disciples Leave Jesus",
    "summary": "Some disciples find His teaching difficult and no longer follow Him.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 6:60–66",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 6,
        "verses": "60–66",
        "href": "https://bible.usccb.org/bible/john/6",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 87
  },
  {
    "id": "life-jesus-0126",
    "sourceEntryNumber": 126,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "Peter Confesses Faith in Jesus",
    "summary": "Peter declares that Jesus has the words of eternal life.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 6:67–69",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 6,
        "verses": "67–69",
        "href": "https://bible.usccb.org/bible/john/6",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 88
  },
  {
    "id": "life-jesus-0127",
    "sourceEntryNumber": 127,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "Jesus Teaches About Interior Purity",
    "summary": "Jesus explains that evil comes from the human heart.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 7:1–23",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 7,
        "verses": "1–23",
        "href": "https://bible.usccb.org/bible/mark/7",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 15:1–20",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 15,
        "verses": "1–20",
        "href": "https://bible.usccb.org/bible/matthew/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 89
  },
  {
    "id": "life-jesus-0128",
    "sourceEntryNumber": 128,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "Jesus Heals the Syrophoenician Woman's Daughter",
    "summary": "Jesus responds to the woman's persistent faith.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 7:24–30",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 7,
        "verses": "24–30",
        "href": "https://bible.usccb.org/bible/mark/7",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 15:21–28",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 15,
        "verses": "21–28",
        "href": "https://bible.usccb.org/bible/matthew/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 90
  },
  {
    "id": "life-jesus-0129",
    "sourceEntryNumber": 129,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "Jesus Heals a Deaf Man",
    "summary": "Jesus restores hearing and speech.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 7:31–37",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 7,
        "verses": "31–37",
        "href": "https://bible.usccb.org/bible/mark/7",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 91
  },
  {
    "id": "life-jesus-0130",
    "sourceEntryNumber": 130,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "Jesus Feeds the Four Thousand",
    "summary": "Jesus miraculously feeds another large crowd.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 8:1–10",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 8,
        "verses": "1–10",
        "href": "https://bible.usccb.org/bible/mark/8",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 15:32–39",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 15,
        "verses": "32–39",
        "href": "https://bible.usccb.org/bible/matthew/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 92
  },
  {
    "id": "life-jesus-0131",
    "sourceEntryNumber": 131,
    "eraId": "life-jesus-era-7",
    "chapterId": "life-jesus-chapter-9",
    "title": "Jesus Heals a Blind Man at Bethsaida",
    "summary": "Jesus restores the man's sight.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 8:22–26",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 8,
        "verses": "22–26",
        "href": "https://bible.usccb.org/bible/mark/8",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 93
  },
  {
    "id": "life-jesus-0132",
    "sourceEntryNumber": 132,
    "eraId": "life-jesus-era-8",
    "chapterId": "life-jesus-chapter-10",
    "title": "Peter Confesses Jesus as the Messiah",
    "summary": "Peter identifies Jesus as the Christ.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 16:13–16",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 16,
        "verses": "13–16",
        "href": "https://bible.usccb.org/bible/matthew/16",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 8:27–30",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 8,
        "verses": "27–30",
        "href": "https://bible.usccb.org/bible/mark/8",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 9:18–21",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 9,
        "verses": "18–21",
        "href": "https://bible.usccb.org/bible/luke/9",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 94
  },
  {
    "id": "life-jesus-0133",
    "sourceEntryNumber": 133,
    "parentStopId": "life-jesus-0132",
    "localOrder": 1,
    "eraId": "life-jesus-era-8",
    "chapterId": "life-jesus-chapter-10",
    "title": "Jesus Gives Peter the Keys of the Kingdom",
    "summary": "Jesus speaks about building His Church and entrusting Peter with the keys.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 16:17–19",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 16,
        "verses": "17–19",
        "href": "https://bible.usccb.org/bible/matthew/16",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0134",
    "sourceEntryNumber": 134,
    "parentStopId": "life-jesus-0132",
    "localOrder": 2,
    "eraId": "life-jesus-era-8",
    "chapterId": "life-jesus-chapter-10",
    "title": "Jesus Predicts His Passion for the First Time",
    "summary": "Jesus announces His coming suffering, death, and Resurrection.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 16:21–23",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 16,
        "verses": "21–23",
        "href": "https://bible.usccb.org/bible/matthew/16",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 8:31–33",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 8,
        "verses": "31–33",
        "href": "https://bible.usccb.org/bible/mark/8",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 9:22",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 9,
        "verses": "22",
        "href": "https://bible.usccb.org/bible/luke/9",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0135",
    "sourceEntryNumber": 135,
    "parentStopId": "life-jesus-0132",
    "localOrder": 3,
    "eraId": "life-jesus-era-8",
    "chapterId": "life-jesus-chapter-10",
    "title": "Jesus Teaches About Carrying the Cross",
    "summary": "Jesus explains the demands of discipleship.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 16:24–28",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 16,
        "verses": "24–28",
        "href": "https://bible.usccb.org/bible/matthew/16",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 8:34–9:1",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 8,
        "verses": "34–9:1",
        "href": "https://bible.usccb.org/bible/mark/8",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 9:23–27",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 9,
        "verses": "23–27",
        "href": "https://bible.usccb.org/bible/luke/9",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0136",
    "sourceEntryNumber": 136,
    "eraId": "life-jesus-era-8",
    "chapterId": "life-jesus-chapter-10",
    "title": "The Transfiguration",
    "summary": "Jesus is transfigured before Peter, James, and John.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history",
      "devotional-tradition"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 17:1–8",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 17,
        "verses": "1–8",
        "href": "https://bible.usccb.org/bible/matthew/17",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 9:2–8",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 9,
        "verses": "2–8",
        "href": "https://bible.usccb.org/bible/mark/9",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 9:28–36",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 9,
        "verses": "28–36",
        "href": "https://bible.usccb.org/bible/luke/9",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 95
  },
  {
    "id": "life-jesus-0137",
    "sourceEntryNumber": 137,
    "parentStopId": "life-jesus-0136",
    "localOrder": 1,
    "eraId": "life-jesus-era-8",
    "chapterId": "life-jesus-chapter-10",
    "title": "Jesus Teaches About Elijah's Coming",
    "summary": "Jesus explains the relationship between John the Baptist and Elijah.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 17:9–13",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 17,
        "verses": "9–13",
        "href": "https://bible.usccb.org/bible/matthew/17",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0138",
    "sourceEntryNumber": 138,
    "eraId": "life-jesus-era-8",
    "chapterId": "life-jesus-chapter-10",
    "title": "Jesus Heals a Boy with a Demon",
    "summary": "Jesus heals a boy whom the disciples could not heal.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 9:14–29",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 9,
        "verses": "14–29",
        "href": "https://bible.usccb.org/bible/mark/9",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 17:14–20",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 17,
        "verses": "14–20",
        "href": "https://bible.usccb.org/bible/matthew/17",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 9:37–43",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 9,
        "verses": "37–43",
        "href": "https://bible.usccb.org/bible/luke/9",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 96
  },
  {
    "id": "life-jesus-0139",
    "sourceEntryNumber": 139,
    "eraId": "life-jesus-era-8",
    "chapterId": "life-jesus-chapter-10",
    "title": "Jesus Predicts His Passion Again",
    "summary": "Jesus once more prepares the disciples for His death and Resurrection.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 17:22–23",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 17,
        "verses": "22–23",
        "href": "https://bible.usccb.org/bible/matthew/17",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 97
  },
  {
    "id": "life-jesus-0140",
    "sourceEntryNumber": 140,
    "eraId": "life-jesus-era-8",
    "chapterId": "life-jesus-chapter-10",
    "title": "Jesus Teaches About Humility and Greatness",
    "summary": "Jesus places a child among the disciples as an example.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 18:1–5",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 18,
        "verses": "1–5",
        "href": "https://bible.usccb.org/bible/matthew/18",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 98
  },
  {
    "id": "life-jesus-0141",
    "sourceEntryNumber": 141,
    "parentStopId": "life-jesus-0140",
    "localOrder": 1,
    "eraId": "life-jesus-era-8",
    "chapterId": "life-jesus-chapter-10",
    "title": "Jesus Teaches About Forgiveness",
    "summary": "Jesus instructs Peter about the necessity of forgiving others.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 18:21–22",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 18,
        "verses": "21–22",
        "href": "https://bible.usccb.org/bible/matthew/18",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0142",
    "sourceEntryNumber": 142,
    "parentStopId": "life-jesus-0140",
    "localOrder": 2,
    "eraId": "life-jesus-era-8",
    "chapterId": "life-jesus-chapter-10",
    "title": "The Parable of the Unforgiving Servant",
    "summary": "Jesus teaches the obligation to forgive as we have been forgiven.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 18:23–35",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 18,
        "verses": "23–35",
        "href": "https://bible.usccb.org/bible/matthew/18",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0143",
    "sourceEntryNumber": 143,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-11",
    "title": "Jesus Sets His Face Toward Jerusalem",
    "summary": "Jesus begins His decisive journey toward the city.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 9:51–56",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 9,
        "verses": "51–56",
        "href": "https://bible.usccb.org/bible/luke/9",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order",
    "stopNumber": 99
  },
  {
    "id": "life-jesus-0144",
    "sourceEntryNumber": 144,
    "parentStopId": "life-jesus-0143",
    "localOrder": 1,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-11",
    "title": "Jesus Teaches the Cost of Discipleship",
    "summary": "Jesus explains the sacrifices required of those who follow Him.",
    "kind": "teaching-segment",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 9:57–62",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 9,
        "verses": "57–62",
        "href": "https://bible.usccb.org/bible/luke/9",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0145",
    "sourceEntryNumber": 145,
    "parentStopId": "life-jesus-0143",
    "localOrder": 2,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-11",
    "title": "Jesus Sends Out the Seventy-Two Disciples",
    "summary": "Jesus sends disciples ahead to proclaim the Kingdom.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 10:1–20",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 10,
        "verses": "1–20",
        "href": "https://bible.usccb.org/bible/luke/10",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": [
          "The ancient textual tradition varies between seventy and seventy-two; NABRE/USCCB should control the displayed wording."
        ]
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection.",
      "The ancient textual tradition varies between seventy and seventy-two; NABRE/USCCB should control the displayed wording."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0146",
    "sourceEntryNumber": 146,
    "parentStopId": "life-jesus-0143",
    "localOrder": 3,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-11",
    "title": "The Parable of the Good Samaritan",
    "summary": "Jesus teaches the meaning of loving one's neighbor.",
    "kind": "teaching-segment",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 10:25–37",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 10,
        "verses": "25–37",
        "href": "https://bible.usccb.org/bible/luke/10",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0147",
    "sourceEntryNumber": 147,
    "parentStopId": "life-jesus-0143",
    "localOrder": 4,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-11",
    "title": "Jesus Visits Martha and Mary",
    "summary": "Jesus teaches about the importance of attentive listening.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 10:38–42",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 10,
        "verses": "38–42",
        "href": "https://bible.usccb.org/bible/luke/10",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0148",
    "sourceEntryNumber": 148,
    "parentStopId": "life-jesus-0143",
    "localOrder": 5,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-11",
    "title": "Jesus Teaches His Disciples to Pray",
    "summary": "Jesus teaches the Lord's Prayer and perseverance in prayer.",
    "kind": "teaching-segment",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 11:1–13",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 11,
        "verses": "1–13",
        "href": "https://bible.usccb.org/bible/luke/11",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [
      {
        "targetRecordId": "life-jesus-0096",
        "kind": "parallel",
        "note": "Matthew and Luke transmit related forms of the Lord’s Prayer in different literary settings."
      }
    ],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0149",
    "sourceEntryNumber": 149,
    "parentStopId": "life-jesus-0143",
    "localOrder": 6,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-11",
    "title": "Jesus Teaches About Watchfulness",
    "summary": "Jesus instructs His disciples to remain prepared.",
    "kind": "teaching-segment",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 12:35–48",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 12,
        "verses": "35–48",
        "href": "https://bible.usccb.org/bible/luke/12",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0150",
    "sourceEntryNumber": 150,
    "parentStopId": "life-jesus-0143",
    "localOrder": 7,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-11",
    "title": "Jesus Teaches About Repentance",
    "summary": "Jesus calls people to repentance.",
    "kind": "teaching-segment",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 13:1–9",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 13,
        "verses": "1–9",
        "href": "https://bible.usccb.org/bible/luke/13",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0151",
    "sourceEntryNumber": 151,
    "parentStopId": "life-jesus-0143",
    "localOrder": 8,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-11",
    "title": "Jesus Heals a Woman on the Sabbath",
    "summary": "Jesus frees a woman who has been afflicted for eighteen years.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 13:10–17",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 13,
        "verses": "10–17",
        "href": "https://bible.usccb.org/bible/luke/13",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0152",
    "sourceEntryNumber": 152,
    "parentStopId": "life-jesus-0143",
    "localOrder": 9,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-11",
    "title": "Jesus Teaches the Parable of the Great Banquet",
    "summary": "Jesus illustrates the invitation to God's Kingdom.",
    "kind": "teaching-segment",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 14:15–24",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 14,
        "verses": "15–24",
        "href": "https://bible.usccb.org/bible/luke/14",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0153",
    "sourceEntryNumber": 153,
    "parentStopId": "life-jesus-0143",
    "localOrder": 10,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-11",
    "title": "The Parable of the Lost Sheep",
    "summary": "Jesus reveals God's concern for sinners.",
    "kind": "teaching-segment",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 15:1–7",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 15,
        "verses": "1–7",
        "href": "https://bible.usccb.org/bible/luke/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0154",
    "sourceEntryNumber": 154,
    "parentStopId": "life-jesus-0143",
    "localOrder": 11,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-11",
    "title": "The Parable of the Lost Coin",
    "summary": "Jesus illustrates heavenly joy over repentance.",
    "kind": "teaching-segment",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 15:8–10",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 15,
        "verses": "8–10",
        "href": "https://bible.usccb.org/bible/luke/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0155",
    "sourceEntryNumber": 155,
    "parentStopId": "life-jesus-0143",
    "localOrder": 12,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-11",
    "title": "The Parable of the Prodigal Son",
    "summary": "Jesus reveals the Father's mercy and the invitation to reconciliation.",
    "kind": "teaching-segment",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 15:11–32",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 15,
        "verses": "11–32",
        "href": "https://bible.usccb.org/bible/luke/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0156",
    "sourceEntryNumber": 156,
    "parentStopId": "life-jesus-0143",
    "localOrder": 13,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-11",
    "title": "The Parable of the Rich Man and Lazarus",
    "summary": "Jesus teaches about wealth, moral responsibility, and the consequences of one's choices.",
    "kind": "teaching-segment",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 16:19–31",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 16,
        "verses": "19–31",
        "href": "https://bible.usccb.org/bible/luke/16",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0157",
    "sourceEntryNumber": 157,
    "parentStopId": "life-jesus-0143",
    "localOrder": 14,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-11",
    "title": "Jesus Heals Ten Lepers",
    "summary": "Jesus heals ten lepers, but only one returns to give thanks.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 17:11–19",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 17,
        "verses": "11–19",
        "href": "https://bible.usccb.org/bible/luke/17",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0158",
    "sourceEntryNumber": 158,
    "parentStopId": "life-jesus-0143",
    "localOrder": 15,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-11",
    "title": "The Parable of the Persistent Widow",
    "summary": "Jesus encourages perseverance in prayer.",
    "kind": "teaching-segment",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 18:1–8",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 18,
        "verses": "1–8",
        "href": "https://bible.usccb.org/bible/luke/18",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0159",
    "sourceEntryNumber": 159,
    "parentStopId": "life-jesus-0143",
    "localOrder": 16,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-11",
    "title": "The Parable of the Pharisee and the Tax Collector",
    "summary": "Jesus teaches humility and repentance.",
    "kind": "teaching-segment",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 18:9–14",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 18,
        "verses": "9–14",
        "href": "https://bible.usccb.org/bible/luke/18",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0160",
    "sourceEntryNumber": 160,
    "parentStopId": "life-jesus-0143",
    "localOrder": 17,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-11",
    "title": "Jesus Blesses the Children",
    "summary": "Jesus welcomes children and teaches about receiving the Kingdom.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 18:15–17",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 18,
        "verses": "15–17",
        "href": "https://bible.usccb.org/bible/luke/18",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 19:13–15",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 19,
        "verses": "13–15",
        "href": "https://bible.usccb.org/bible/matthew/19",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 10:13–16",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 10,
        "verses": "13–16",
        "href": "https://bible.usccb.org/bible/mark/10",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0161",
    "sourceEntryNumber": 161,
    "parentStopId": "life-jesus-0143",
    "localOrder": 18,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-11",
    "title": "Jesus Encounters the Rich Young Man",
    "summary": "Jesus teaches about detachment and the cost of discipleship.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 19:16–30",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 19,
        "verses": "16–30",
        "href": "https://bible.usccb.org/bible/matthew/19",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 18:18–30",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 18,
        "verses": "18–30",
        "href": "https://bible.usccb.org/bible/luke/18",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 10:17–31",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 10,
        "verses": "17–31",
        "href": "https://bible.usccb.org/bible/mark/10",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0162",
    "sourceEntryNumber": 162,
    "parentStopId": "life-jesus-0143",
    "localOrder": 19,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-11",
    "title": "Jesus Predicts His Passion a Third Time",
    "summary": "Jesus announces His approaching suffering, death, and Resurrection.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 18:31–34",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 18,
        "verses": "31–34",
        "href": "https://bible.usccb.org/bible/luke/18",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 20:17–19",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 20,
        "verses": "17–19",
        "href": "https://bible.usccb.org/bible/matthew/20",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 10:32–34",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 10,
        "verses": "32–34",
        "href": "https://bible.usccb.org/bible/mark/10",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0163",
    "sourceEntryNumber": 163,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-12",
    "title": "Jesus Attends the Feast of Tabernacles",
    "summary": "Jesus teaches in Jerusalem during the feast.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 7:10–52",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 7,
        "verses": "10–52",
        "href": "https://bible.usccb.org/bible/john/7",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "John 7:1–9",
        "role": "supporting",
        "book": "John",
        "bookSlug": "john",
        "chapter": 7,
        "verses": "1–9",
        "href": "https://bible.usccb.org/bible/john/7",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order",
    "stopNumber": 100
  },
  {
    "id": "life-jesus-0164",
    "sourceEntryNumber": 164,
    "parentStopId": "life-jesus-0163",
    "localOrder": 1,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-12",
    "title": "Jesus Declares Himself the Light of the World",
    "summary": "Jesus teaches about His divine mission.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 8:12–30",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 8,
        "verses": "12–30",
        "href": "https://bible.usccb.org/bible/john/8",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0165",
    "sourceEntryNumber": 165,
    "parentStopId": "life-jesus-0163",
    "localOrder": 2,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-12",
    "title": "Jesus Heals the Man Born Blind",
    "summary": "Jesus restores sight to a man blind from birth.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 9:1–41",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 9,
        "verses": "1–41",
        "href": "https://bible.usccb.org/bible/john/9",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0166",
    "sourceEntryNumber": 166,
    "parentStopId": "life-jesus-0163",
    "localOrder": 3,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-12",
    "title": "Jesus Reveals Himself as the Good Shepherd",
    "summary": "Jesus teaches that He knows His sheep and lays down His life for them.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 10:1–21",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 10,
        "verses": "1–21",
        "href": "https://bible.usccb.org/bible/john/10",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0167",
    "sourceEntryNumber": 167,
    "parentStopId": "life-jesus-0163",
    "localOrder": 4,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-12",
    "title": "Jesus Attends the Feast of Dedication",
    "summary": "Jesus teaches in Jerusalem and speaks about His unity with the Father.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 10:22–39",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 10,
        "verses": "22–39",
        "href": "https://bible.usccb.org/bible/john/10",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0168",
    "sourceEntryNumber": 168,
    "parentStopId": "life-jesus-0163",
    "localOrder": 5,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-12",
    "title": "Jesus Raises Lazarus from the Dead",
    "summary": "Jesus raises Lazarus after four days in the tomb.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 11:1–44",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 11,
        "verses": "1–44",
        "href": "https://bible.usccb.org/bible/john/11",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0169",
    "sourceEntryNumber": 169,
    "parentStopId": "life-jesus-0163",
    "localOrder": 6,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-12",
    "title": "The Authorities Plan to Kill Jesus",
    "summary": "The chief priests and Pharisees convene the council and begin planning how to put Jesus to death.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 11:45–57",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 11,
        "verses": "45–57",
        "href": "https://bible.usccb.org/bible/john/11",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0170",
    "sourceEntryNumber": 170,
    "parentStopId": "life-jesus-0163",
    "localOrder": 8,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-12",
    "title": "Jesus Encounters Zacchaeus",
    "summary": "Jesus visits Zacchaeus and declares that salvation has come to his house.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke places the blind-man healing before Zacchaeus; Mark describes Bartimaeus as Jesus leaves Jericho.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 19:1–10",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 19,
        "verses": "1–10",
        "href": "https://bible.usccb.org/bible/luke/19",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0171",
    "sourceEntryNumber": 171,
    "parentStopId": "life-jesus-0163",
    "localOrder": 7,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-12",
    "title": "Jesus Heals Blind Bartimaeus",
    "summary": "Jesus restores the sight of Bartimaeus near Jericho.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 10:46–52",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 10,
        "verses": "46–52",
        "href": "https://bible.usccb.org/bible/mark/10",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 20:29–34",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 20,
        "verses": "29–34",
        "href": "https://bible.usccb.org/bible/matthew/20",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 18:35–43",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 18,
        "verses": "35–43",
        "href": "https://bible.usccb.org/bible/luke/18",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0172",
    "sourceEntryNumber": 172,
    "parentStopId": "life-jesus-0163",
    "localOrder": 9,
    "eraId": "life-jesus-era-9",
    "chapterId": "life-jesus-chapter-12",
    "title": "Jesus Is Anointed at Bethany",
    "summary": "Mary anoints Jesus at Bethany in anticipation of His burial.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "John’s Bethany anointing may parallel Matthew 26 and Mark 14; Luke 7 is treated as distinct.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 12:1–8",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 12,
        "verses": "1–8",
        "href": "https://bible.usccb.org/bible/john/12",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 26:6–13",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 26,
        "verses": "6–13",
        "href": "https://bible.usccb.org/bible/matthew/26",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 14:3–9",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 14,
        "verses": "3–9",
        "href": "https://bible.usccb.org/bible/mark/14",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [
      {
        "targetRecordId": "life-jesus-0109",
        "kind": "distinct",
        "note": "Do not identify Luke’s sinful woman with Mary of Bethany or Mary Magdalene."
      }
    ],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "late-ministry-order"
  },
  {
    "id": "life-jesus-0173",
    "sourceEntryNumber": 173,
    "eraId": "life-jesus-era-10",
    "chapterId": "life-jesus-chapter-13",
    "title": "Jesus Approaches Jerusalem",
    "summary": "Jesus approaches Jerusalem through the Mount of Olives.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 19:28–34",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 19,
        "verses": "28–34",
        "href": "https://bible.usccb.org/bible/luke/19",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 101
  },
  {
    "id": "life-jesus-0174",
    "sourceEntryNumber": 174,
    "parentStopId": "life-jesus-0173",
    "localOrder": 1,
    "eraId": "life-jesus-era-10",
    "chapterId": "life-jesus-chapter-13",
    "title": "The Triumphal Entry into Jerusalem",
    "summary": "Jesus enters Jerusalem riding on a donkey as crowds acclaim Him.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 21:1–11",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 21,
        "verses": "1–11",
        "href": "https://bible.usccb.org/bible/matthew/21",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 19:35–40",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 19,
        "verses": "35–40",
        "href": "https://bible.usccb.org/bible/luke/19",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 11:1–10",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 11,
        "verses": "1–10",
        "href": "https://bible.usccb.org/bible/mark/11",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "John 12:12–19",
        "role": "parallel",
        "book": "John",
        "bookSlug": "john",
        "chapter": 12,
        "verses": "12–19",
        "href": "https://bible.usccb.org/bible/john/12",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0175",
    "sourceEntryNumber": 175,
    "parentStopId": "life-jesus-0173",
    "localOrder": 2,
    "eraId": "life-jesus-era-10",
    "chapterId": "life-jesus-chapter-13",
    "title": "Jesus Weeps Over Jerusalem",
    "summary": "Jesus laments over Jerusalem and foretells its destruction.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 19:41–44",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 19,
        "verses": "41–44",
        "href": "https://bible.usccb.org/bible/luke/19",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0176",
    "sourceEntryNumber": 176,
    "eraId": "life-jesus-era-10",
    "chapterId": "life-jesus-chapter-13",
    "title": "Jesus Examines the Temple",
    "summary": "Mark records Jesus entering Jerusalem and examining the Temple.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 11:11",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 11,
        "verses": "11",
        "href": "https://bible.usccb.org/bible/mark/11",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 102
  },
  {
    "id": "life-jesus-0177",
    "sourceEntryNumber": 177,
    "eraId": "life-jesus-era-10",
    "chapterId": "life-jesus-chapter-13",
    "title": "Jesus Curses the Fig Tree",
    "summary": "Jesus curses the fig tree; after it withers, he teaches the disciples about faith and prayer.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 11:12–14, 20–25",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 11,
        "verses": "12–14, 20–25",
        "href": "https://bible.usccb.org/bible/mark/11",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [
      {
        "targetRecordId": "life-jesus-0178",
        "kind": "interleaved",
        "note": "Mark places the Temple action between the cursing and later discovery of the withered fig tree."
      }
    ],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 103
  },
  {
    "id": "life-jesus-0178",
    "sourceEntryNumber": 178,
    "eraId": "life-jesus-era-10",
    "chapterId": "life-jesus-chapter-13",
    "title": "Jesus Cleanses the Temple",
    "summary": "The Synoptic Gospels place Jesus' cleansing of the Temple during His final visit to Jerusalem.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "John’s early Temple cleansing may be the same event as the Synoptic Holy Week cleansing or a distinct event.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 11:15–19",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 11,
        "verses": "15–19",
        "href": "https://bible.usccb.org/bible/mark/11",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 21:12–17",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 21,
        "verses": "12–17",
        "href": "https://bible.usccb.org/bible/matthew/21",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 19:45–48",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 19,
        "verses": "45–48",
        "href": "https://bible.usccb.org/bible/luke/19",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [
      {
        "targetRecordId": "life-jesus-0060",
        "kind": "disputed",
        "note": "John and the Synoptics may narrate one cleansing in different literary positions or two distinct cleansings."
      },
      {
        "targetRecordId": "life-jesus-0177",
        "kind": "interleaved",
        "note": "Mark places the Temple action between the cursing and later discovery of the withered fig tree."
      }
    ],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "temple-cleansing-identity",
    "stopNumber": 104
  },
  {
    "id": "life-jesus-0179",
    "sourceEntryNumber": 179,
    "eraId": "life-jesus-era-10",
    "chapterId": "life-jesus-chapter-13",
    "title": "The Religious Authorities Question Jesus' Authority",
    "summary": "The chief priests and elders question Jesus about the authority behind his actions.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 21:23–27",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 21,
        "verses": "23–27",
        "href": "https://bible.usccb.org/bible/matthew/21",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 105
  },
  {
    "id": "life-jesus-0180",
    "sourceEntryNumber": 180,
    "eraId": "life-jesus-era-10",
    "chapterId": "life-jesus-chapter-13",
    "title": "The Parable of the Wicked Tenants",
    "summary": "Jesus teaches a parable concerning the tenants who reject the landowner's messengers and son.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 21:33–46",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 21,
        "verses": "33–46",
        "href": "https://bible.usccb.org/bible/matthew/21",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 106
  },
  {
    "id": "life-jesus-0181",
    "sourceEntryNumber": 181,
    "eraId": "life-jesus-era-10",
    "chapterId": "life-jesus-chapter-13",
    "title": "The Parable of the Wedding Feast",
    "summary": "Jesus teaches about the invitation to the Kingdom and the response it requires.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 22:1–14",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 22,
        "verses": "1–14",
        "href": "https://bible.usccb.org/bible/matthew/22",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 107
  },
  {
    "id": "life-jesus-0182",
    "sourceEntryNumber": 182,
    "eraId": "life-jesus-era-10",
    "chapterId": "life-jesus-chapter-13",
    "title": "Jesus Answers the Question About Paying Taxes",
    "summary": "Jesus responds to a question concerning Caesar.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 22:15–22",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 22,
        "verses": "15–22",
        "href": "https://bible.usccb.org/bible/matthew/22",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 108
  },
  {
    "id": "life-jesus-0183",
    "sourceEntryNumber": 183,
    "eraId": "life-jesus-era-10",
    "chapterId": "life-jesus-chapter-13",
    "title": "Jesus Teaches About the Resurrection",
    "summary": "Jesus answers the Sadducees' question about the resurrection.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 22:23–33",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 22,
        "verses": "23–33",
        "href": "https://bible.usccb.org/bible/matthew/22",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 109
  },
  {
    "id": "life-jesus-0184",
    "sourceEntryNumber": 184,
    "eraId": "life-jesus-era-10",
    "chapterId": "life-jesus-chapter-13",
    "title": "Jesus Teaches the Greatest Commandment",
    "summary": "Jesus identifies love of God and neighbor as the greatest commandments.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 22:34–40",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 22,
        "verses": "34–40",
        "href": "https://bible.usccb.org/bible/matthew/22",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 110
  },
  {
    "id": "life-jesus-0185",
    "sourceEntryNumber": 185,
    "eraId": "life-jesus-era-10",
    "chapterId": "life-jesus-chapter-13",
    "title": "Jesus Denounces Religious Hypocrisy",
    "summary": "Jesus warns against hypocrisy among particular scribes and Pharisees in the narrated controversy.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 23:1–36",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 23,
        "verses": "1–36",
        "href": "https://bible.usccb.org/bible/matthew/23",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 111
  },
  {
    "id": "life-jesus-0186",
    "sourceEntryNumber": 186,
    "eraId": "life-jesus-era-10",
    "chapterId": "life-jesus-chapter-13",
    "title": "Jesus Praises the Poor Widow's Offering",
    "summary": "Jesus observes a widow contributing two small coins.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 12:41–44",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 12,
        "verses": "41–44",
        "href": "https://bible.usccb.org/bible/mark/12",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 21:1–4",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 21,
        "verses": "1–4",
        "href": "https://bible.usccb.org/bible/luke/21",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 112
  },
  {
    "id": "life-jesus-0187",
    "sourceEntryNumber": 187,
    "eraId": "life-jesus-era-10",
    "chapterId": "life-jesus-chapter-13",
    "title": "Jesus Foretells the Destruction of the Temple",
    "summary": "Jesus announces the coming destruction of the Temple.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 24:1–2",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 24,
        "verses": "1–2",
        "href": "https://bible.usccb.org/bible/matthew/24",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 13:1–2",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 13,
        "verses": "1–2",
        "href": "https://bible.usccb.org/bible/mark/13",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 21:5–6",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 21,
        "verses": "5–6",
        "href": "https://bible.usccb.org/bible/luke/21",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 113
  },
  {
    "id": "life-jesus-0188",
    "sourceEntryNumber": 188,
    "eraId": "life-jesus-era-10",
    "chapterId": "life-jesus-chapter-13",
    "title": "Jesus Delivers the Olivet Discourse",
    "summary": "Jesus teaches about tribulation, watchfulness, and His coming.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 24:3–51",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 24,
        "verses": "3–51",
        "href": "https://bible.usccb.org/bible/matthew/24",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 13:3–37",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 13,
        "verses": "3–37",
        "href": "https://bible.usccb.org/bible/mark/13",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 21:7–36",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 21,
        "verses": "7–36",
        "href": "https://bible.usccb.org/bible/luke/21",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 114
  },
  {
    "id": "life-jesus-0189",
    "sourceEntryNumber": 189,
    "eraId": "life-jesus-era-10",
    "chapterId": "life-jesus-chapter-13",
    "title": "The Parable of the Ten Virgins",
    "summary": "Jesus teaches vigilance and preparation.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 25:1–13",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 25,
        "verses": "1–13",
        "href": "https://bible.usccb.org/bible/matthew/25",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 115
  },
  {
    "id": "life-jesus-0190",
    "sourceEntryNumber": 190,
    "eraId": "life-jesus-era-10",
    "chapterId": "life-jesus-chapter-13",
    "title": "The Parable of the Talents",
    "summary": "Jesus teaches the responsibility of faithfully using what God entrusts to us.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 25:14–30",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 25,
        "verses": "14–30",
        "href": "https://bible.usccb.org/bible/matthew/25",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 116
  },
  {
    "id": "life-jesus-0191",
    "sourceEntryNumber": 191,
    "eraId": "life-jesus-era-10",
    "chapterId": "life-jesus-chapter-13",
    "title": "Jesus Teaches About the Final Judgment",
    "summary": "Jesus describes the separation of the sheep and the goats.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 25:31–46",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 25,
        "verses": "31–46",
        "href": "https://bible.usccb.org/bible/matthew/25",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 117
  },
  {
    "id": "life-jesus-0192",
    "sourceEntryNumber": 192,
    "eraId": "life-jesus-era-10",
    "chapterId": "life-jesus-chapter-13",
    "title": "Judas Agrees to Betray Jesus",
    "summary": "Judas arranges to betray Jesus.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 26:14–16",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 26,
        "verses": "14–16",
        "href": "https://bible.usccb.org/bible/matthew/26",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 14:10–11",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 14,
        "verses": "10–11",
        "href": "https://bible.usccb.org/bible/mark/14",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 22:3–6",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 22,
        "verses": "3–6",
        "href": "https://bible.usccb.org/bible/luke/22",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 118
  },
  {
    "id": "life-jesus-0193",
    "sourceEntryNumber": 193,
    "parentStopId": "life-jesus-0194",
    "localOrder": 1,
    "eraId": "life-jesus-era-11",
    "chapterId": "life-jesus-chapter-14",
    "title": "Jesus Sends the Disciples to Prepare the Passover",
    "summary": "Jesus instructs His disciples concerning the preparation of the meal.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The traditional Holy Thursday presentation does not erase the Synoptic/John Passover chronology question.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 22:7–13",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 22,
        "verses": "7–13",
        "href": "https://bible.usccb.org/bible/luke/22",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "upper-room-order"
  },
  {
    "id": "life-jesus-0194",
    "sourceEntryNumber": 194,
    "eraId": "life-jesus-era-11",
    "chapterId": "life-jesus-chapter-14",
    "title": "Jesus Celebrates the Last Supper",
    "summary": "Jesus gathers with His apostles for His final meal before the Passion.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The traditional Holy Thursday presentation does not erase the Synoptic and Johannine Passover chronology question.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 22:14–18",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 22,
        "verses": "14–18",
        "href": "https://bible.usccb.org/bible/luke/22",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "upper-room-order",
    "stopNumber": 119
  },
  {
    "id": "life-jesus-0195",
    "sourceEntryNumber": 195,
    "parentStopId": "life-jesus-0194",
    "localOrder": 2,
    "eraId": "life-jesus-era-11",
    "chapterId": "life-jesus-chapter-14",
    "title": "Jesus Washes the Disciples' Feet",
    "summary": "Jesus gives an example of humble service.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The traditional Holy Thursday presentation does not erase the Synoptic and Johannine Passover chronology question.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 13:1–17",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 13,
        "verses": "1–17",
        "href": "https://bible.usccb.org/bible/john/13",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "upper-room-order"
  },
  {
    "id": "life-jesus-0196",
    "sourceEntryNumber": 196,
    "parentStopId": "life-jesus-0194",
    "localOrder": 3,
    "eraId": "life-jesus-era-11",
    "chapterId": "life-jesus-chapter-14",
    "title": "Jesus Institutes the Holy Eucharist",
    "summary": "Jesus gives his Body and Blood under the appearances of bread and wine, as the Church confesses in her Eucharistic doctrine.",
    "kind": "doctrinal-mystery",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The traditional Holy Thursday presentation does not erase the Synoptic and Johannine Passover chronology question.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history",
      "doctrine",
      "devotional-tradition",
      "liturgical-commemoration"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 26:26–29",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 26,
        "verses": "26–29",
        "href": "https://bible.usccb.org/bible/matthew/26",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 14:22–25",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 14,
        "verses": "22–25",
        "href": "https://bible.usccb.org/bible/mark/14",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 22:19–20",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 22,
        "verses": "19–20",
        "href": "https://bible.usccb.org/bible/luke/22",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "1 Corinthians 11:23–26",
        "role": "supporting",
        "book": "1 Corinthians",
        "bookSlug": "1corinthians",
        "chapter": 11,
        "verses": "23–26",
        "href": "https://bible.usccb.org/bible/1corinthians/11",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [
      {
        "title": "Catechism of the Catholic Church",
        "locator": "1323, 1333, 1374–1377",
        "url": "https://www.vatican.va/archive/ENG0015/_INDEX.HTM",
        "verificationStatus": "unresolved",
        "sourceNotes": [
          "Requires final human theological/source approval before publication."
        ]
      }
    ],
    "mediaTreatment": "traditional-sacred-art",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "upper-room-order"
  },
  {
    "id": "life-jesus-0197",
    "sourceEntryNumber": 197,
    "parentStopId": "life-jesus-0194",
    "localOrder": 4,
    "eraId": "life-jesus-era-11",
    "chapterId": "life-jesus-chapter-14",
    "title": "Jesus Announces His Betrayal",
    "summary": "Jesus reveals that one of the disciples will betray Him.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The traditional Holy Thursday presentation does not erase the Synoptic and Johannine Passover chronology question.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 13:18–30",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 13,
        "verses": "18–30",
        "href": "https://bible.usccb.org/bible/john/13",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 26:20–25",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 26,
        "verses": "20–25",
        "href": "https://bible.usccb.org/bible/matthew/26",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 14:17–21",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 14,
        "verses": "17–21",
        "href": "https://bible.usccb.org/bible/mark/14",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 22:21–23",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 22,
        "verses": "21–23",
        "href": "https://bible.usccb.org/bible/luke/22",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "upper-room-order"
  },
  {
    "id": "life-jesus-0198",
    "sourceEntryNumber": 198,
    "parentStopId": "life-jesus-0194",
    "localOrder": 5,
    "eraId": "life-jesus-era-11",
    "chapterId": "life-jesus-chapter-14",
    "title": "Jesus Gives the New Commandment",
    "summary": "Jesus commands His disciples to love one another as He has loved them.",
    "kind": "teaching-segment",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The traditional Holy Thursday presentation does not erase the Synoptic and Johannine Passover chronology question.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 13:31–35",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 13,
        "verses": "31–35",
        "href": "https://bible.usccb.org/bible/john/13",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "upper-room-order"
  },
  {
    "id": "life-jesus-0199",
    "sourceEntryNumber": 199,
    "parentStopId": "life-jesus-0194",
    "localOrder": 6,
    "eraId": "life-jesus-era-11",
    "chapterId": "life-jesus-chapter-14",
    "title": "Jesus Predicts Peter's Denial",
    "summary": "Jesus foretells that Peter will deny Him.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The traditional Holy Thursday presentation does not erase the Synoptic and Johannine Passover chronology question.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 13:36–38",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 13,
        "verses": "36–38",
        "href": "https://bible.usccb.org/bible/john/13",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 22:31–34",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 22,
        "verses": "31–34",
        "href": "https://bible.usccb.org/bible/luke/22",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 26:31–35",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 26,
        "verses": "31–35",
        "href": "https://bible.usccb.org/bible/matthew/26",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 14:27–31",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 14,
        "verses": "27–31",
        "href": "https://bible.usccb.org/bible/mark/14",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "upper-room-order"
  },
  {
    "id": "life-jesus-0200",
    "sourceEntryNumber": 200,
    "parentStopId": "life-jesus-0194",
    "localOrder": 7,
    "eraId": "life-jesus-era-11",
    "chapterId": "life-jesus-chapter-14",
    "title": "Jesus Promises the Father's House",
    "summary": "Jesus comforts the disciples by speaking about His Father's house.",
    "kind": "teaching-segment",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The traditional Holy Thursday presentation does not erase the Synoptic and Johannine Passover chronology question.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 14:1–4",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 14,
        "verses": "1–4",
        "href": "https://bible.usccb.org/bible/john/14",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "upper-room-order"
  },
  {
    "id": "life-jesus-0201",
    "sourceEntryNumber": 201,
    "parentStopId": "life-jesus-0194",
    "localOrder": 8,
    "eraId": "life-jesus-era-11",
    "chapterId": "life-jesus-chapter-14",
    "title": "Jesus Promises the Holy Spirit",
    "summary": "Jesus promises another Advocate who will remain with His disciples.",
    "kind": "teaching-segment",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The traditional Holy Thursday presentation does not erase the Synoptic and Johannine Passover chronology question.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 14:15–31",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 14,
        "verses": "15–31",
        "href": "https://bible.usccb.org/bible/john/14",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "upper-room-order"
  },
  {
    "id": "life-jesus-0202",
    "sourceEntryNumber": 202,
    "parentStopId": "life-jesus-0194",
    "localOrder": 9,
    "eraId": "life-jesus-era-11",
    "chapterId": "life-jesus-chapter-14",
    "title": "Jesus Teaches About the True Vine",
    "summary": "Jesus teaches that His disciples must remain united to Him.",
    "kind": "teaching-segment",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The traditional Holy Thursday presentation does not erase the Synoptic and Johannine Passover chronology question.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 15:1–17",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 15,
        "verses": "1–17",
        "href": "https://bible.usccb.org/bible/john/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "upper-room-order"
  },
  {
    "id": "life-jesus-0203",
    "sourceEntryNumber": 203,
    "parentStopId": "life-jesus-0194",
    "localOrder": 10,
    "eraId": "life-jesus-era-11",
    "chapterId": "life-jesus-chapter-14",
    "title": "Jesus Prepares the Disciples for Persecution",
    "summary": "Jesus warns His followers about the world's opposition.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The traditional Holy Thursday presentation does not erase the Synoptic and Johannine Passover chronology question.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 15:18–27",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 15,
        "verses": "18–27",
        "href": "https://bible.usccb.org/bible/john/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "John 16:1–4",
        "role": "supporting",
        "book": "John",
        "bookSlug": "john",
        "chapter": 16,
        "verses": "1–4",
        "href": "https://bible.usccb.org/bible/john/16",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "upper-room-order"
  },
  {
    "id": "life-jesus-0204",
    "sourceEntryNumber": 204,
    "parentStopId": "life-jesus-0194",
    "localOrder": 11,
    "eraId": "life-jesus-era-11",
    "chapterId": "life-jesus-chapter-14",
    "title": "Jesus Explains the Work of the Holy Spirit",
    "summary": "Jesus teaches about the Spirit of truth.",
    "kind": "teaching-segment",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The traditional Holy Thursday presentation does not erase the Synoptic and Johannine Passover chronology question.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 16:5–15",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 16,
        "verses": "5–15",
        "href": "https://bible.usccb.org/bible/john/16",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "upper-room-order"
  },
  {
    "id": "life-jesus-0205",
    "sourceEntryNumber": 205,
    "parentStopId": "life-jesus-0194",
    "localOrder": 12,
    "eraId": "life-jesus-era-11",
    "chapterId": "life-jesus-chapter-14",
    "title": "Jesus Promises That Sorrow Will Become Joy",
    "summary": "Jesus comforts His disciples and prepares them for His departure.",
    "kind": "teaching-segment",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The traditional Holy Thursday presentation does not erase the Synoptic and Johannine Passover chronology question.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 16:16–33",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 16,
        "verses": "16–33",
        "href": "https://bible.usccb.org/bible/john/16",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "upper-room-order"
  },
  {
    "id": "life-jesus-0206",
    "sourceEntryNumber": 206,
    "parentStopId": "life-jesus-0194",
    "localOrder": 13,
    "eraId": "life-jesus-era-11",
    "chapterId": "life-jesus-chapter-14",
    "title": "Jesus Offers His Priestly Prayer",
    "summary": "Jesus prays for Himself, His apostles, and those who will believe through their testimony.",
    "kind": "teaching-segment",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The traditional Holy Thursday presentation does not erase the Synoptic and Johannine Passover chronology question.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 17:1–26",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 17,
        "verses": "1–26",
        "href": "https://bible.usccb.org/bible/john/17",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "upper-room-order"
  },
  {
    "id": "life-jesus-0207",
    "sourceEntryNumber": 207,
    "eraId": "life-jesus-era-11",
    "chapterId": "life-jesus-chapter-14",
    "title": "Jesus Goes to the Mount of Olives",
    "summary": "Jesus leaves with His disciples for the place of His approaching arrest.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 26:30",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 26,
        "verses": "30",
        "href": "https://bible.usccb.org/bible/matthew/26",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 14:26",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 14,
        "verses": "26",
        "href": "https://bible.usccb.org/bible/mark/14",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 22:39",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 22,
        "verses": "39",
        "href": "https://bible.usccb.org/bible/luke/22",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 120
  },
  {
    "id": "life-jesus-0208",
    "sourceEntryNumber": 208,
    "parentStopId": "life-jesus-0207",
    "localOrder": 1,
    "eraId": "life-jesus-era-11",
    "chapterId": "life-jesus-chapter-14",
    "title": "Jesus Enters Gethsemane",
    "summary": "Jesus brings Peter, James, and John farther into the garden.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 26:36–38",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 26,
        "verses": "36–38",
        "href": "https://bible.usccb.org/bible/matthew/26",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 14:32–34",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 14,
        "verses": "32–34",
        "href": "https://bible.usccb.org/bible/mark/14",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0209",
    "sourceEntryNumber": 209,
    "parentStopId": "life-jesus-0207",
    "localOrder": 2,
    "eraId": "life-jesus-era-11",
    "chapterId": "life-jesus-chapter-14",
    "title": "The Agony in the Garden",
    "summary": "Jesus prays in anguish and submits to the Father's will.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history",
      "devotional-tradition"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 26:39–46",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 26,
        "verses": "39–46",
        "href": "https://bible.usccb.org/bible/matthew/26",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": [
          "Luke 22:43–44 has a significant manuscript note in the USCCB edition."
        ]
      },
      {
        "displayLabel": "Luke 22:39–46",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 22,
        "verses": "39–46",
        "href": "https://bible.usccb.org/bible/luke/22",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": [
          "Luke 22:43–44 has a significant manuscript note in the USCCB edition."
        ]
      },
      {
        "displayLabel": "Mark 14:35–42",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 14,
        "verses": "35–42",
        "href": "https://bible.usccb.org/bible/mark/14",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": [
          "Luke 22:43–44 has a significant manuscript note in the USCCB edition."
        ]
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection.",
      "Luke 22:43–44 has a significant manuscript note in the USCCB edition."
    ]
  },
  {
    "id": "life-jesus-0210",
    "sourceEntryNumber": 210,
    "parentStopId": "life-jesus-0207",
    "localOrder": 3,
    "eraId": "life-jesus-era-11",
    "chapterId": "life-jesus-chapter-14",
    "title": "Judas Betrays Jesus",
    "summary": "Judas arrives with an armed group sent by the chief priests and elders and identifies Jesus.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 26:47–50",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 26,
        "verses": "47–50",
        "href": "https://bible.usccb.org/bible/matthew/26",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 14:43–45",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 14,
        "verses": "43–45",
        "href": "https://bible.usccb.org/bible/mark/14",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 22:47–48",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 22,
        "verses": "47–48",
        "href": "https://bible.usccb.org/bible/luke/22",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "John 18:2–9",
        "role": "parallel",
        "book": "John",
        "bookSlug": "john",
        "chapter": 18,
        "verses": "2–9",
        "href": "https://bible.usccb.org/bible/john/18",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0211",
    "sourceEntryNumber": 211,
    "parentStopId": "life-jesus-0207",
    "localOrder": 4,
    "eraId": "life-jesus-era-11",
    "chapterId": "life-jesus-chapter-14",
    "title": "Jesus Is Arrested",
    "summary": "Jesus submits to arrest.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 18:10–12",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 18,
        "verses": "10–12",
        "href": "https://bible.usccb.org/bible/john/18",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 26:50–56",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 26,
        "verses": "50–56",
        "href": "https://bible.usccb.org/bible/matthew/26",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0212",
    "sourceEntryNumber": 212,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Jesus Is Taken Before Annas",
    "summary": "Jesus is questioned by Annas.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Peter’s denials occur interleaved with the high-priestly proceedings.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 18:12–14, 19–24",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 18,
        "verses": "12–14, 19–24",
        "href": "https://bible.usccb.org/bible/john/18",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [
      {
        "targetRecordId": "life-jesus-0214",
        "kind": "interleaved",
        "note": "Peter’s first denial occurs during John’s Annas material."
      }
    ],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "high-priestly-proceedings",
    "stopNumber": 121
  },
  {
    "id": "life-jesus-0213",
    "sourceEntryNumber": 213,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Jesus Appears Before Caiaphas and the Religious Authorities",
    "summary": "Jesus is questioned before Caiaphas, the scribes, elders, and council members gathered there.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Peter’s denials occur interleaved with the high-priestly proceedings, whose presentation differs among the Gospels.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 26:57–68",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 26,
        "verses": "57–68",
        "href": "https://bible.usccb.org/bible/matthew/26",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 14:53–65",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 14,
        "verses": "53–65",
        "href": "https://bible.usccb.org/bible/mark/14",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 22:54, 63–65",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 22,
        "verses": "54, 63–65",
        "href": "https://bible.usccb.org/bible/luke/22",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "high-priestly-proceedings",
    "stopNumber": 122
  },
  {
    "id": "life-jesus-0214",
    "sourceEntryNumber": 214,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Peter Denies Jesus",
    "summary": "Peter denies knowing Jesus three times.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Peter’s denials occur interleaved with the high-priestly proceedings, whose presentation differs among the Gospels.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 22:54–62",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 22,
        "verses": "54–62",
        "href": "https://bible.usccb.org/bible/luke/22",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "John 18:15–18, 25–27",
        "role": "parallel",
        "book": "John",
        "bookSlug": "john",
        "chapter": 18,
        "verses": "15–18, 25–27",
        "href": "https://bible.usccb.org/bible/john/18",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 26:69–75",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 26,
        "verses": "69–75",
        "href": "https://bible.usccb.org/bible/matthew/26",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 14:66–72",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 14,
        "verses": "66–72",
        "href": "https://bible.usccb.org/bible/mark/14",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [
      {
        "targetRecordId": "life-jesus-0212",
        "kind": "interleaved",
        "note": "Peter’s first denial occurs during John’s Annas material."
      }
    ],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "high-priestly-proceedings",
    "stopNumber": 123
  },
  {
    "id": "life-jesus-0215",
    "sourceEntryNumber": 215,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Jesus Appears Before the Council",
    "summary": "The council of elders, chief priests, and scribes questions Jesus after daybreak.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Peter’s denials occur interleaved with the high-priestly proceedings, whose presentation differs among the Gospels.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 22:66–71",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 22,
        "verses": "66–71",
        "href": "https://bible.usccb.org/bible/luke/22",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "high-priestly-proceedings",
    "stopNumber": 124
  },
  {
    "id": "life-jesus-0216",
    "sourceEntryNumber": 216,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Judas Experiences Remorse",
    "summary": "Judas returns the money and subsequently takes his own life.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Matthew and Acts preserve distinct accounts associated with Judas’s death; their physical details must not be flattened into an invented composite.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 27:3–10",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 27,
        "verses": "3–10",
        "href": "https://bible.usccb.org/bible/matthew/27",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Acts 1:16–20",
        "role": "supporting",
        "book": "Acts",
        "bookSlug": "acts",
        "chapter": 1,
        "verses": "16–20",
        "href": "https://bible.usccb.org/bible/acts/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection.",
      "Matthew 27:3–10 and Acts 1:16–20 preserve distinct accounts associated with Judas’s death; do not synthesize their physical details into an invented single scene."
    ],
    "unresolvedCluster": "judas-death-accounts",
    "stopNumber": 125
  },
  {
    "id": "life-jesus-0217",
    "sourceEntryNumber": 217,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Jesus Is Brought Before Pontius Pilate",
    "summary": "The chief priests and elders hand Jesus over to the Roman governor, Pontius Pilate.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 27:1–2, 11–14",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 27,
        "verses": "1–2, 11–14",
        "href": "https://bible.usccb.org/bible/matthew/27",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 15:1–5",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 15,
        "verses": "1–5",
        "href": "https://bible.usccb.org/bible/mark/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 23:1–5",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 23,
        "verses": "1–5",
        "href": "https://bible.usccb.org/bible/luke/23",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "John 18:28–38",
        "role": "parallel",
        "book": "John",
        "bookSlug": "john",
        "chapter": 18,
        "verses": "28–38",
        "href": "https://bible.usccb.org/bible/john/18",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 126
  },
  {
    "id": "life-jesus-0218",
    "sourceEntryNumber": 218,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Jesus Is Sent Before Herod Antipas",
    "summary": "Luke records Pilate sending Jesus to Herod.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 23:6–12",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 23,
        "verses": "6–12",
        "href": "https://bible.usccb.org/bible/luke/23",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 127
  },
  {
    "id": "life-jesus-0219",
    "sourceEntryNumber": 219,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Jesus Returns Before Pilate",
    "summary": "Pilate continues examining Jesus.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 23:13–16",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 23,
        "verses": "13–16",
        "href": "https://bible.usccb.org/bible/luke/23",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 128
  },
  {
    "id": "life-jesus-0220",
    "sourceEntryNumber": 220,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "The Crowd Calls for Barabbas",
    "summary": "The crowd demands Barabbas' release.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 27:15–23",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 27,
        "verses": "15–23",
        "href": "https://bible.usccb.org/bible/matthew/27",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 15:6–15",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 15,
        "verses": "6–15",
        "href": "https://bible.usccb.org/bible/mark/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 23:18–25",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 23,
        "verses": "18–25",
        "href": "https://bible.usccb.org/bible/luke/23",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "John 18:39–40",
        "role": "parallel",
        "book": "John",
        "bookSlug": "john",
        "chapter": 18,
        "verses": "39–40",
        "href": "https://bible.usccb.org/bible/john/18",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 129
  },
  {
    "id": "life-jesus-0221",
    "sourceEntryNumber": 221,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Jesus Is Scourged",
    "summary": "Jesus undergoes scourging.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Records 221–224 follow John’s order; the Synoptic scourging/handover order differs.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history",
      "devotional-tradition"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 19:1",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 19,
        "verses": "1",
        "href": "https://bible.usccb.org/bible/john/19",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 27:26",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 27,
        "verses": "26",
        "href": "https://bible.usccb.org/bible/matthew/27",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 15:15",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 15,
        "verses": "15",
        "href": "https://bible.usccb.org/bible/mark/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "pilate-sequence",
    "stopNumber": 130
  },
  {
    "id": "life-jesus-0222",
    "sourceEntryNumber": 222,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Jesus Is Crowned with Thorns",
    "summary": "Roman soldiers mock Jesus and crown Him with thorns.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Records in this group follow John’s order; the Synoptic scourging and handover order differs.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history",
      "devotional-tradition"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 19:2–3",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 19,
        "verses": "2–3",
        "href": "https://bible.usccb.org/bible/john/19",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 27:27–31",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 27,
        "verses": "27–31",
        "href": "https://bible.usccb.org/bible/matthew/27",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 15:16–20",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 15,
        "verses": "16–20",
        "href": "https://bible.usccb.org/bible/mark/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "pilate-sequence",
    "stopNumber": 131
  },
  {
    "id": "life-jesus-0223",
    "sourceEntryNumber": 223,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Pilate Presents Jesus to the Crowd",
    "summary": "Pilate brings Jesus before the crowd.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Records in this group follow John’s order; the Synoptic scourging and handover order differs.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 19:4–8",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 19,
        "verses": "4–8",
        "href": "https://bible.usccb.org/bible/john/19",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "pilate-sequence",
    "stopNumber": 132
  },
  {
    "id": "life-jesus-0224",
    "sourceEntryNumber": 224,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Jesus Is Condemned to Crucifixion",
    "summary": "Pilate hands Jesus over to be crucified.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Records in this group follow John’s order; the Synoptic scourging and handover order differs.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 19:12–16",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 19,
        "verses": "12–16",
        "href": "https://bible.usccb.org/bible/john/19",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 27:26",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 27,
        "verses": "26",
        "href": "https://bible.usccb.org/bible/matthew/27",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 15:15",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 15,
        "verses": "15",
        "href": "https://bible.usccb.org/bible/mark/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 23:24–25",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 23,
        "verses": "24–25",
        "href": "https://bible.usccb.org/bible/luke/23",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "pilate-sequence",
    "stopNumber": 133
  },
  {
    "id": "life-jesus-0225",
    "sourceEntryNumber": 225,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Jesus Carries the Cross",
    "summary": "Jesus proceeds toward the place of execution.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history",
      "devotional-tradition"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 19:17",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 19,
        "verses": "17",
        "href": "https://bible.usccb.org/bible/john/19",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 23:26",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 23,
        "verses": "26",
        "href": "https://bible.usccb.org/bible/luke/23",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 134
  },
  {
    "id": "life-jesus-0226",
    "sourceEntryNumber": 226,
    "parentStopId": "life-jesus-0225",
    "localOrder": 1,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Simon of Cyrene Helps Carry the Cross",
    "summary": "Simon is compelled to carry Jesus' cross.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 15:21",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 15,
        "verses": "21",
        "href": "https://bible.usccb.org/bible/mark/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 23:26",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 23,
        "verses": "26",
        "href": "https://bible.usccb.org/bible/luke/23",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0227",
    "sourceEntryNumber": 227,
    "parentStopId": "life-jesus-0225",
    "localOrder": 2,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Jesus Addresses the Women of Jerusalem",
    "summary": "Jesus speaks to women mourning for Him.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 23:27–31",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 23,
        "verses": "27–31",
        "href": "https://bible.usccb.org/bible/luke/23",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0228",
    "sourceEntryNumber": 228,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Jesus Arrives at Golgotha",
    "summary": "Jesus is brought to the place of crucifixion.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 27:33–34",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 27,
        "verses": "33–34",
        "href": "https://bible.usccb.org/bible/matthew/27",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 15:22",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 15,
        "verses": "22",
        "href": "https://bible.usccb.org/bible/mark/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 23:33",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 23,
        "verses": "33",
        "href": "https://bible.usccb.org/bible/luke/23",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "John 19:17",
        "role": "parallel",
        "book": "John",
        "bookSlug": "john",
        "chapter": 19,
        "verses": "17",
        "href": "https://bible.usccb.org/bible/john/19",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 135
  },
  {
    "id": "life-jesus-0229",
    "sourceEntryNumber": 229,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Jesus Is Crucified",
    "summary": "Jesus is crucified at Golgotha.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history",
      "devotional-tradition"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 15:22–27",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 15,
        "verses": "22–27",
        "href": "https://bible.usccb.org/bible/mark/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "John 20:25",
        "role": "supporting",
        "book": "John",
        "bookSlug": "john",
        "chapter": 20,
        "verses": "25",
        "href": "https://bible.usccb.org/bible/john/20",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 136
  },
  {
    "id": "life-jesus-0230",
    "sourceEntryNumber": 230,
    "parentStopId": "life-jesus-0229",
    "localOrder": 1,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Jesus Prays for His Persecutors",
    "summary": "Jesus prays for those responsible for His crucifixion.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "Gospel-internal order is explicit; the displayed cross-Gospel sequence is a traditional Passion harmony.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 23:34",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 23,
        "verses": "34",
        "href": "https://bible.usccb.org/bible/luke/23",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": [
          "Luke 23:34a has a significant manuscript variant noted by USCCB."
        ]
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection.",
      "Luke 23:34a has a significant manuscript variant noted by USCCB."
    ],
    "unresolvedCluster": "passion-harmony"
  },
  {
    "id": "life-jesus-0231",
    "sourceEntryNumber": 231,
    "parentStopId": "life-jesus-0229",
    "localOrder": 2,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "The Soldiers Divide Jesus' Garments",
    "summary": "The soldiers divide His clothing and cast lots.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "Gospel-internal order is explicit; the displayed cross-Gospel sequence is a traditional Passion harmony.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 19:23–24",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 19,
        "verses": "23–24",
        "href": "https://bible.usccb.org/bible/john/19",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "passion-harmony"
  },
  {
    "id": "life-jesus-0232",
    "sourceEntryNumber": 232,
    "parentStopId": "life-jesus-0229",
    "localOrder": 3,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Jesus Is Mocked on the Cross",
    "summary": "Jesus endures mockery while crucified.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "Gospel-internal order is explicit; the displayed cross-Gospel sequence is a traditional Passion harmony.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 27:39–44",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 27,
        "verses": "39–44",
        "href": "https://bible.usccb.org/bible/matthew/27",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 15:29–32",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 15,
        "verses": "29–32",
        "href": "https://bible.usccb.org/bible/mark/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 23:35–39",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 23,
        "verses": "35–39",
        "href": "https://bible.usccb.org/bible/luke/23",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "passion-harmony"
  },
  {
    "id": "life-jesus-0233",
    "sourceEntryNumber": 233,
    "parentStopId": "life-jesus-0229",
    "localOrder": 4,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Jesus Promises Paradise to the Repentant Criminal",
    "summary": "Jesus responds to the criminal who turns to Him.",
    "kind": "teaching-segment",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "Gospel-internal order is explicit; the displayed cross-Gospel sequence is a traditional Passion harmony.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 23:39–43",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 23,
        "verses": "39–43",
        "href": "https://bible.usccb.org/bible/luke/23",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "passion-harmony"
  },
  {
    "id": "life-jesus-0234",
    "sourceEntryNumber": 234,
    "parentStopId": "life-jesus-0229",
    "localOrder": 5,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Jesus Entrusts Mary and the Beloved Disciple to One Another",
    "summary": "Jesus speaks to His mother and the beloved disciple from the cross.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "Gospel-internal order is explicit; the displayed cross-Gospel sequence is a traditional Passion harmony.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 19:25–27",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 19,
        "verses": "25–27",
        "href": "https://bible.usccb.org/bible/john/19",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "passion-harmony"
  },
  {
    "id": "life-jesus-0235",
    "sourceEntryNumber": 235,
    "parentStopId": "life-jesus-0229",
    "localOrder": 6,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Darkness Covers the Land",
    "summary": "The Gospel narratives describe darkness during the crucifixion.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "Gospel-internal order is explicit; the displayed cross-Gospel sequence is a traditional Passion harmony.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 15:33",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 15,
        "verses": "33",
        "href": "https://bible.usccb.org/bible/mark/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 23:44–45",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 23,
        "verses": "44–45",
        "href": "https://bible.usccb.org/bible/luke/23",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 27:45",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 27,
        "verses": "45",
        "href": "https://bible.usccb.org/bible/matthew/27",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "passion-harmony"
  },
  {
    "id": "life-jesus-0236",
    "sourceEntryNumber": 236,
    "parentStopId": "life-jesus-0229",
    "localOrder": 7,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Jesus Cries Out from the Cross",
    "summary": "Jesus voices the opening words of Psalm 22.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "Gospel-internal order is explicit; the displayed cross-Gospel sequence is a traditional Passion harmony.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 27:46",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 27,
        "verses": "46",
        "href": "https://bible.usccb.org/bible/matthew/27",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 15:34",
        "role": "supporting",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 15,
        "verses": "34",
        "href": "https://bible.usccb.org/bible/mark/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Psalm 22:2",
        "role": "supporting",
        "book": "Psalm",
        "bookSlug": "psalms",
        "chapter": 22,
        "verses": "2",
        "href": "https://bible.usccb.org/bible/psalms/22",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "passion-harmony"
  },
  {
    "id": "life-jesus-0237",
    "sourceEntryNumber": 237,
    "parentStopId": "life-jesus-0229",
    "localOrder": 8,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Jesus Says He Is Thirsty",
    "summary": "Jesus expresses His thirst as His Passion approaches its conclusion.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "Gospel-internal order is explicit; the displayed cross-Gospel sequence is a traditional Passion harmony.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 19:28–29",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 19,
        "verses": "28–29",
        "href": "https://bible.usccb.org/bible/john/19",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "passion-harmony"
  },
  {
    "id": "life-jesus-0238",
    "sourceEntryNumber": 238,
    "parentStopId": "life-jesus-0229",
    "localOrder": 9,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Jesus Declares That His Work Is Finished",
    "summary": "Jesus announces the completion of His mission.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "Gospel-internal order is explicit; the displayed cross-Gospel sequence is a traditional Passion harmony.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 19:30",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 19,
        "verses": "30",
        "href": "https://bible.usccb.org/bible/john/19",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "passion-harmony"
  },
  {
    "id": "life-jesus-0239",
    "sourceEntryNumber": 239,
    "parentStopId": "life-jesus-0229",
    "localOrder": 10,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Jesus Entrusts His Spirit to the Father",
    "summary": "Luke records Jesus' final prayer of surrender.",
    "kind": "narrated-event",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "Gospel-internal order is explicit; the displayed cross-Gospel sequence is a traditional Passion harmony.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 23:46",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 23,
        "verses": "46",
        "href": "https://bible.usccb.org/bible/luke/23",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "passion-harmony"
  },
  {
    "id": "life-jesus-0240",
    "sourceEntryNumber": 240,
    "parentStopId": "life-jesus-0229",
    "localOrder": 11,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "The Death of Jesus",
    "summary": "Jesus dies upon the cross.",
    "kind": "editorial-summary",
    "chronologyConfidence": "traditional-harmony",
    "chronologyNote": "Gospel-internal order is explicit; the displayed cross-Gospel sequence is a traditional Passion harmony.",
    "sequenceBasis": "traditional-harmony",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 27:50",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 27,
        "verses": "50",
        "href": "https://bible.usccb.org/bible/matthew/27",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 15:37",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 15,
        "verses": "37",
        "href": "https://bible.usccb.org/bible/mark/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 23:46",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 23,
        "verses": "46",
        "href": "https://bible.usccb.org/bible/luke/23",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "John 19:30",
        "role": "parallel",
        "book": "John",
        "bookSlug": "john",
        "chapter": 19,
        "verses": "30",
        "href": "https://bible.usccb.org/bible/john/19",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "no-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "passion-harmony"
  },
  {
    "id": "life-jesus-0241",
    "sourceEntryNumber": 241,
    "parentStopId": "life-jesus-0229",
    "localOrder": 12,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "The Veil of the Temple Is Torn",
    "summary": "The Synoptic Gospels record the tearing of the Temple veil.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Matthew and Mark place the veil after Jesus’ death; Luke narrates it before the final prayer.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 27:51",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 27,
        "verses": "51",
        "href": "https://bible.usccb.org/bible/matthew/27",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 15:38",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 15,
        "verses": "38",
        "href": "https://bible.usccb.org/bible/mark/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 23:45",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 23,
        "verses": "45",
        "href": "https://bible.usccb.org/bible/luke/23",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0242",
    "sourceEntryNumber": 242,
    "parentStopId": "life-jesus-0229",
    "localOrder": 13,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "The Centurion Responds to Jesus' Death",
    "summary": "The centurion responds to what he has witnessed.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 27:54",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 27,
        "verses": "54",
        "href": "https://bible.usccb.org/bible/matthew/27",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 15:39",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 15,
        "verses": "39",
        "href": "https://bible.usccb.org/bible/mark/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 23:47",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 23,
        "verses": "47",
        "href": "https://bible.usccb.org/bible/luke/23",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0243",
    "sourceEntryNumber": 243,
    "parentStopId": "life-jesus-0229",
    "localOrder": 14,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "A Soldier Pierces Jesus' Side",
    "summary": "John records the piercing of Jesus' side and the flow of blood and water.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 19:31–37",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 19,
        "verses": "31–37",
        "href": "https://bible.usccb.org/bible/john/19",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0244",
    "sourceEntryNumber": 244,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Joseph of Arimathea Requests Jesus' Body",
    "summary": "Joseph receives permission to take Jesus' body for burial.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 27:57–58",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 27,
        "verses": "57–58",
        "href": "https://bible.usccb.org/bible/matthew/27",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 15:42–45",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 15,
        "verses": "42–45",
        "href": "https://bible.usccb.org/bible/mark/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 23:50–52",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 23,
        "verses": "50–52",
        "href": "https://bible.usccb.org/bible/luke/23",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "John 19:38",
        "role": "parallel",
        "book": "John",
        "bookSlug": "john",
        "chapter": 19,
        "verses": "38",
        "href": "https://bible.usccb.org/bible/john/19",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 137
  },
  {
    "id": "life-jesus-0245",
    "sourceEntryNumber": 245,
    "parentStopId": "life-jesus-0244",
    "localOrder": 1,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Jesus Is Taken Down from the Cross",
    "summary": "Jesus' body is removed from the cross.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history",
      "devotional-tradition"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 15:42–46",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 15,
        "verses": "42–46",
        "href": "https://bible.usccb.org/bible/mark/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "John 19:38",
        "role": "parallel",
        "book": "John",
        "bookSlug": "john",
        "chapter": 19,
        "verses": "38",
        "href": "https://bible.usccb.org/bible/john/19",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0246",
    "sourceEntryNumber": 246,
    "parentStopId": "life-jesus-0244",
    "localOrder": 2,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Nicodemus Helps Prepare Jesus' Body for Burial",
    "summary": "Nicodemus brings burial spices.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 19:39–40",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 19,
        "verses": "39–40",
        "href": "https://bible.usccb.org/bible/john/19",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0247",
    "sourceEntryNumber": 247,
    "parentStopId": "life-jesus-0244",
    "localOrder": 3,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "Jesus Is Laid in the Tomb",
    "summary": "Jesus is buried in a new tomb.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history",
      "devotional-tradition"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 27:59–61",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 27,
        "verses": "59–61",
        "href": "https://bible.usccb.org/bible/matthew/27",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "John 19:41–42",
        "role": "parallel",
        "book": "John",
        "bookSlug": "john",
        "chapter": 19,
        "verses": "41–42",
        "href": "https://bible.usccb.org/bible/john/19",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Mark 15:46–47",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 15,
        "verses": "46–47",
        "href": "https://bible.usccb.org/bible/mark/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 23:53–56",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 23,
        "verses": "53–56",
        "href": "https://bible.usccb.org/bible/luke/23",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  },
  {
    "id": "life-jesus-0248",
    "sourceEntryNumber": 248,
    "eraId": "life-jesus-era-12",
    "chapterId": "life-jesus-chapter-15",
    "title": "The Tomb Is Guarded",
    "summary": "The chief priests and Pharisees ask Pilate to secure the tomb, and a guard is posted.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 27:62–66",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 27,
        "verses": "62–66",
        "href": "https://bible.usccb.org/bible/matthew/27",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 138
  },
  {
    "id": "life-jesus-0249",
    "sourceEntryNumber": 249,
    "eraId": "life-jesus-era-13",
    "chapterId": "life-jesus-chapter-16",
    "title": "Jesus' Body Rests in the Tomb",
    "summary": "Jesus' body remains in the tomb.",
    "kind": "editorial-summary",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 27:59–61",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 27,
        "verses": "59–61",
        "href": "https://bible.usccb.org/bible/matthew/27",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 23:55–56",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 23,
        "verses": "55–56",
        "href": "https://bible.usccb.org/bible/luke/23",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "no-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 139
  },
  {
    "id": "life-jesus-0250",
    "sourceEntryNumber": 250,
    "eraId": "life-jesus-era-13",
    "chapterId": "life-jesus-chapter-16",
    "title": "Christ Descends to the Dead",
    "summary": "The Church professes that Christ descended to the dead; the cited passages provide the biblical foundation for this doctrine rather than narrating a visible scene.",
    "kind": "doctrinal-mystery",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The canonical sources do not establish a single exact inter-Gospel date or sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "doctrine",
      "liturgical-commemoration"
    ],
    "scripturePassages": [
      {
        "displayLabel": "1 Peter 3:18–20",
        "role": "primary",
        "book": "1 Peter",
        "bookSlug": "1peter",
        "chapter": 3,
        "verses": "18–20",
        "href": "https://bible.usccb.org/bible/1peter/3",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "1 Peter 4:6",
        "role": "supporting",
        "book": "1 Peter",
        "bookSlug": "1peter",
        "chapter": 4,
        "verses": "6",
        "href": "https://bible.usccb.org/bible/1peter/4",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Acts 2:24–31",
        "role": "supporting",
        "book": "Acts",
        "bookSlug": "acts",
        "chapter": 2,
        "verses": "24–31",
        "href": "https://bible.usccb.org/bible/acts/2",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [
      {
        "title": "Catechism of the Catholic Church",
        "locator": "631–637",
        "url": "https://www.vatican.va/archive/ENG0015/_P1R.HTM",
        "verificationStatus": "unresolved",
        "sourceNotes": [
          "Requires final human theological/source approval before publication."
        ]
      }
    ],
    "mediaTreatment": "traditional-sacred-art",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 140
  },
  {
    "id": "life-jesus-0251",
    "sourceEntryNumber": 251,
    "eraId": "life-jesus-era-14",
    "chapterId": "life-jesus-chapter-17",
    "title": "Jesus Rises from the Dead",
    "summary": "The Resurrection of Jesus is doctrinally certain. The Gospels proclaim it through the empty tomb and appearances of the risen Lord; they do not narrate the instant of Resurrection as an observed scene.",
    "kind": "doctrinal-mystery",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The Gospels proclaim the Resurrection but do not narrate its instant.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history",
      "doctrine",
      "devotional-tradition",
      "liturgical-commemoration"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 28:1–10",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 28,
        "verses": "1–10",
        "href": "https://bible.usccb.org/bible/matthew/28",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": [
          "Mark 16:9–20 is not used as a primary source here; if later used, retain the USCCB longer-ending note."
        ]
      },
      {
        "displayLabel": "Mark 16:1–8",
        "role": "parallel",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 16,
        "verses": "1–8",
        "href": "https://bible.usccb.org/bible/mark/16",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": [
          "Mark 16:9–20 is not used as a primary source here; if later used, retain the USCCB longer-ending note."
        ]
      },
      {
        "displayLabel": "Luke 24:1–12",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 24,
        "verses": "1–12",
        "href": "https://bible.usccb.org/bible/luke/24",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": [
          "Mark 16:9–20 is not used as a primary source here; if later used, retain the USCCB longer-ending note."
        ]
      },
      {
        "displayLabel": "John 20:1–18",
        "role": "parallel",
        "book": "John",
        "bookSlug": "john",
        "chapter": 20,
        "verses": "1–18",
        "href": "https://bible.usccb.org/bible/john/20",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": [
          "Mark 16:9–20 is not used as a primary source here; if later used, retain the USCCB longer-ending note."
        ]
      }
    ],
    "relationships": [],
    "churchSources": [
      {
        "title": "Catechism of the Catholic Church",
        "locator": "638–658",
        "url": "https://www.vatican.va/archive/ENG0015/_P1S.HTM",
        "verificationStatus": "unresolved",
        "sourceNotes": [
          "Requires final human theological/source approval before publication."
        ]
      }
    ],
    "mediaTreatment": "traditional-sacred-art",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection.",
      "Mark 16:9–20 is not used as a primary source here; if later used, retain the USCCB longer-ending note."
    ],
    "unresolvedCluster": "easter-morning-order",
    "stopNumber": 141
  },
  {
    "id": "life-jesus-0252",
    "sourceEntryNumber": 252,
    "parentStopId": "life-jesus-0251",
    "localOrder": 1,
    "eraId": "life-jesus-era-14",
    "chapterId": "life-jesus-chapter-17",
    "title": "The Women Visit the Tomb",
    "summary": "Women approach the tomb early on the first day of the week.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The canonical witnesses establish the empty tomb and appearances without supplying one exhaustive sequence for every Easter encounter.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 16:1–4",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 16,
        "verses": "1–4",
        "href": "https://bible.usccb.org/bible/mark/16",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "easter-morning-order"
  },
  {
    "id": "life-jesus-0253",
    "sourceEntryNumber": 253,
    "parentStopId": "life-jesus-0251",
    "localOrder": 2,
    "eraId": "life-jesus-era-14",
    "chapterId": "life-jesus-chapter-17",
    "title": "The Empty Tomb Is Discovered",
    "summary": "The women find that Jesus' body is no longer in the tomb.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The canonical witnesses establish the empty tomb and appearances without supplying one exhaustive sequence for every Easter encounter.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Mark 16:4–5",
        "role": "primary",
        "book": "Mark",
        "bookSlug": "mark",
        "chapter": 16,
        "verses": "4–5",
        "href": "https://bible.usccb.org/bible/mark/16",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 24:1–3",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 24,
        "verses": "1–3",
        "href": "https://bible.usccb.org/bible/luke/24",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "easter-morning-order"
  },
  {
    "id": "life-jesus-0254",
    "sourceEntryNumber": 254,
    "parentStopId": "life-jesus-0251",
    "localOrder": 3,
    "eraId": "life-jesus-era-14",
    "chapterId": "life-jesus-chapter-17",
    "title": "Angels Announce Jesus' Resurrection",
    "summary": "The women receive the announcement that Jesus has risen.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The canonical witnesses establish the empty tomb and appearances without supplying one exhaustive sequence for every Easter encounter.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 24:4–8",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 24,
        "verses": "4–8",
        "href": "https://bible.usccb.org/bible/luke/24",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Matthew 28:5–7",
        "role": "parallel",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 28,
        "verses": "5–7",
        "href": "https://bible.usccb.org/bible/matthew/28",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "easter-morning-order"
  },
  {
    "id": "life-jesus-0255",
    "sourceEntryNumber": 255,
    "parentStopId": "life-jesus-0251",
    "localOrder": 4,
    "eraId": "life-jesus-era-14",
    "chapterId": "life-jesus-chapter-17",
    "title": "The Women Bring News to the Apostles",
    "summary": "The women report what they have witnessed.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The canonical witnesses establish the empty tomb and appearances without supplying one exhaustive sequence for every Easter encounter.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 24:9–11",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 24,
        "verses": "9–11",
        "href": "https://bible.usccb.org/bible/luke/24",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "easter-morning-order"
  },
  {
    "id": "life-jesus-0256",
    "sourceEntryNumber": 256,
    "parentStopId": "life-jesus-0251",
    "localOrder": 5,
    "eraId": "life-jesus-era-14",
    "chapterId": "life-jesus-chapter-17",
    "title": "Peter and the Beloved Disciple Visit the Tomb",
    "summary": "Peter and the beloved disciple discover the empty tomb.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The canonical witnesses establish the empty tomb and appearances without supplying one exhaustive sequence for every Easter encounter.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 20:2–10",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 20,
        "verses": "2–10",
        "href": "https://bible.usccb.org/bible/john/20",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "John 20:1",
        "role": "supporting",
        "book": "John",
        "bookSlug": "john",
        "chapter": 20,
        "verses": "1",
        "href": "https://bible.usccb.org/bible/john/20",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "easter-morning-order"
  },
  {
    "id": "life-jesus-0257",
    "sourceEntryNumber": 257,
    "parentStopId": "life-jesus-0251",
    "localOrder": 6,
    "eraId": "life-jesus-era-14",
    "chapterId": "life-jesus-chapter-17",
    "title": "Jesus Appears to Mary Magdalene",
    "summary": "Mary Magdalene encounters the risen Christ.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The canonical witnesses establish the empty tomb and appearances without supplying one exhaustive sequence for every Easter encounter.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 20:11–18",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 20,
        "verses": "11–18",
        "href": "https://bible.usccb.org/bible/john/20",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "easter-morning-order"
  },
  {
    "id": "life-jesus-0258",
    "sourceEntryNumber": 258,
    "parentStopId": "life-jesus-0251",
    "localOrder": 7,
    "eraId": "life-jesus-era-14",
    "chapterId": "life-jesus-chapter-17",
    "title": "Jesus Appears to the Women",
    "summary": "Matthew recounts the risen Jesus meeting the women; its relationship to John’s account of Mary Magdalene is not certain.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Matthew’s appearance to the women cannot be mapped with certainty onto John’s appearance to Mary Magdalene.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 28:8–10",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 28,
        "verses": "8–10",
        "href": "https://bible.usccb.org/bible/matthew/28",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "easter-morning-order"
  },
  {
    "id": "life-jesus-0259",
    "sourceEntryNumber": 259,
    "parentStopId": "life-jesus-0251",
    "localOrder": 8,
    "eraId": "life-jesus-era-14",
    "chapterId": "life-jesus-chapter-17",
    "title": "The Guards Report What Happened",
    "summary": "The guards report to the chief priests, who arrange a false explanation of the empty tomb.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The canonical witnesses establish the empty tomb and appearances without supplying one exhaustive sequence for every Easter encounter.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 28:11–15",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 28,
        "verses": "11–15",
        "href": "https://bible.usccb.org/bible/matthew/28",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "easter-morning-order"
  },
  {
    "id": "life-jesus-0260",
    "sourceEntryNumber": 260,
    "parentStopId": "life-jesus-0251",
    "localOrder": 9,
    "eraId": "life-jesus-era-14",
    "chapterId": "life-jesus-chapter-17",
    "title": "Jesus Appears on the Road to Emmaus",
    "summary": "Two disciples encounter the risen Jesus while traveling.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The canonical witnesses establish the empty tomb and appearances without supplying one exhaustive sequence for every Easter encounter.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 24:13–27",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 24,
        "verses": "13–27",
        "href": "https://bible.usccb.org/bible/luke/24",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "easter-morning-order"
  },
  {
    "id": "life-jesus-0261",
    "sourceEntryNumber": 261,
    "parentStopId": "life-jesus-0251",
    "localOrder": 10,
    "eraId": "life-jesus-era-14",
    "chapterId": "life-jesus-chapter-17",
    "title": "Jesus Is Recognized in the Breaking of Bread",
    "summary": "The disciples recognize Jesus when He breaks bread.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The canonical witnesses establish the empty tomb and appearances without supplying one exhaustive sequence for every Easter encounter.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 24:28–35",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 24,
        "verses": "28–35",
        "href": "https://bible.usccb.org/bible/luke/24",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "easter-morning-order"
  },
  {
    "id": "life-jesus-0262",
    "sourceEntryNumber": 262,
    "parentStopId": "life-jesus-0251",
    "localOrder": 11,
    "eraId": "life-jesus-era-14",
    "chapterId": "life-jesus-chapter-17",
    "title": "The Disciples Report That Jesus Appeared to Simon Peter",
    "summary": "The disciples report that the risen Lord appeared to Simon, an appearance also attested by Paul but not narrated as a scene.",
    "kind": "editorial-summary",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The canonical witnesses establish the empty tomb and appearances without supplying one exhaustive sequence for every Easter encounter.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 24:34",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 24,
        "verses": "34",
        "href": "https://bible.usccb.org/bible/luke/24",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "1 Corinthians 15:5",
        "role": "supporting",
        "book": "1 Corinthians",
        "bookSlug": "1corinthians",
        "chapter": 15,
        "verses": "5",
        "href": "https://bible.usccb.org/bible/1corinthians/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "no-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "easter-morning-order"
  },
  {
    "id": "life-jesus-0263",
    "sourceEntryNumber": 263,
    "parentStopId": "life-jesus-0251",
    "localOrder": 12,
    "eraId": "life-jesus-era-14",
    "chapterId": "life-jesus-chapter-17",
    "title": "Jesus Appears to the Gathered Disciples",
    "summary": "Jesus appears among the disciples and shows them His wounds.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The canonical witnesses establish the empty tomb and appearances without supplying one exhaustive sequence for every Easter encounter.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 20:19–20",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 20,
        "verses": "19–20",
        "href": "https://bible.usccb.org/bible/john/20",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Luke 24:36–43",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 24,
        "verses": "36–43",
        "href": "https://bible.usccb.org/bible/luke/24",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "easter-morning-order"
  },
  {
    "id": "life-jesus-0264",
    "sourceEntryNumber": 264,
    "parentStopId": "life-jesus-0251",
    "localOrder": 13,
    "eraId": "life-jesus-era-14",
    "chapterId": "life-jesus-chapter-17",
    "title": "Jesus Entrusts the Disciples with the Ministry of Forgiveness",
    "summary": "Jesus breathes the Holy Spirit upon the gathered disciples and entrusts them with a ministry of forgiveness.",
    "kind": "doctrinal-mystery",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The canonical witnesses establish the empty tomb and appearances without supplying one exhaustive sequence for every Easter encounter.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history",
      "doctrine"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 20:21–23",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 20,
        "verses": "21–23",
        "href": "https://bible.usccb.org/bible/john/20",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [
      {
        "title": "Catechism of the Catholic Church",
        "locator": "976–987; 1441–1442",
        "url": "https://www.vatican.va/archive/ENG0015/_INDEX.HTM",
        "verificationStatus": "unresolved",
        "sourceNotes": [
          "Requires final human theological/source approval before publication."
        ]
      }
    ],
    "mediaTreatment": "traditional-sacred-art",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "easter-morning-order"
  },
  {
    "id": "life-jesus-0265",
    "sourceEntryNumber": 265,
    "eraId": "life-jesus-era-15",
    "chapterId": "life-jesus-chapter-18",
    "title": "Jesus Appears to Thomas and the Other Apostles",
    "summary": "Thomas encounters the risen Jesus and professes faith.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 20:24–29",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 20,
        "verses": "24–29",
        "href": "https://bible.usccb.org/bible/john/20",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 142
  },
  {
    "id": "life-jesus-0266",
    "sourceEntryNumber": 266,
    "eraId": "life-jesus-era-15",
    "chapterId": "life-jesus-chapter-18",
    "title": "The Evangelist Summarizes Jesus’ Further Signs",
    "summary": "John explains that Jesus performed additional signs not recorded in the Gospel; this is an evangelist’s summary, not a dated appearance.",
    "kind": "editorial-summary",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 20:30–31",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 20,
        "verses": "30–31",
        "href": "https://bible.usccb.org/bible/john/20",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "no-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 143
  },
  {
    "id": "life-jesus-0267",
    "sourceEntryNumber": 267,
    "eraId": "life-jesus-era-15",
    "chapterId": "life-jesus-chapter-18",
    "title": "Jesus Appears Beside the Sea of Tiberias",
    "summary": "The disciples encounter the risen Jesus while fishing.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 21:1–14",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 21,
        "verses": "1–14",
        "href": "https://bible.usccb.org/bible/john/21",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 144
  },
  {
    "id": "life-jesus-0268",
    "sourceEntryNumber": 268,
    "eraId": "life-jesus-era-15",
    "chapterId": "life-jesus-chapter-18",
    "title": "Jesus Restores Peter and Entrusts Him with His Sheep",
    "summary": "Jesus asks Peter three times whether he loves Him and commissions him to shepherd His flock.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 21:15–19",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 21,
        "verses": "15–19",
        "href": "https://bible.usccb.org/bible/john/21",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 145
  },
  {
    "id": "life-jesus-0269",
    "sourceEntryNumber": 269,
    "eraId": "life-jesus-era-15",
    "chapterId": "life-jesus-chapter-18",
    "title": "Jesus Speaks About the Beloved Disciple",
    "summary": "Jesus responds to Peter's question concerning the beloved disciple.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "John 21:20–23",
        "role": "primary",
        "book": "John",
        "bookSlug": "john",
        "chapter": 21,
        "verses": "20–23",
        "href": "https://bible.usccb.org/bible/john/21",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 146
  },
  {
    "id": "life-jesus-0270",
    "sourceEntryNumber": 270,
    "eraId": "life-jesus-era-15",
    "chapterId": "life-jesus-chapter-18",
    "title": "Jesus Appears to the Disciples in Galilee",
    "summary": "Matthew records Jesus meeting the eleven disciples on a mountain in Galilee.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 28:16–17",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 28,
        "verses": "16–17",
        "href": "https://bible.usccb.org/bible/matthew/28",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 147
  },
  {
    "id": "life-jesus-0271",
    "sourceEntryNumber": 271,
    "eraId": "life-jesus-era-15",
    "chapterId": "life-jesus-chapter-18",
    "title": "Jesus Gives the Great Commission",
    "summary": "Jesus commands the apostles to make disciples of all nations, baptizing and teaching them.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Matthew 28:18–20",
        "role": "primary",
        "book": "Matthew",
        "bookSlug": "matthew",
        "chapter": 28,
        "verses": "18–20",
        "href": "https://bible.usccb.org/bible/matthew/28",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 148
  },
  {
    "id": "life-jesus-0272",
    "sourceEntryNumber": 272,
    "eraId": "life-jesus-era-15",
    "chapterId": "life-jesus-chapter-18",
    "title": "Jesus Appears to More Than Five Hundred at Once",
    "summary": "Paul reports that Jesus appeared to more than five hundred at once.",
    "kind": "editorial-summary",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The canonical sources do not establish a single exact inter-Gospel date or sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "1 Corinthians 15:6",
        "role": "primary",
        "book": "1 Corinthians",
        "bookSlug": "1corinthians",
        "chapter": 15,
        "verses": "6",
        "href": "https://bible.usccb.org/bible/1corinthians/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "no-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 149
  },
  {
    "id": "life-jesus-0273",
    "sourceEntryNumber": 273,
    "eraId": "life-jesus-era-15",
    "chapterId": "life-jesus-chapter-18",
    "title": "Jesus Appears to James",
    "summary": "St. Paul reports an appearance to James.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "The canonical sources do not establish a single exact inter-Gospel date or sequence.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "1 Corinthians 15:7",
        "role": "primary",
        "book": "1 Corinthians",
        "bookSlug": "1corinthians",
        "chapter": 15,
        "verses": "7",
        "href": "https://bible.usccb.org/bible/1corinthians/15",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 150
  },
  {
    "id": "life-jesus-0274",
    "sourceEntryNumber": 274,
    "eraId": "life-jesus-era-15",
    "chapterId": "life-jesus-chapter-18",
    "title": "Jesus Continues Teaching the Apostles for Forty Days",
    "summary": "Jesus appears to the apostles and speaks about the Kingdom of God.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Acts 1:1–3",
        "role": "primary",
        "book": "Acts",
        "bookSlug": "acts",
        "chapter": 1,
        "verses": "1–3",
        "href": "https://bible.usccb.org/bible/acts/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 151
  },
  {
    "id": "life-jesus-0275",
    "sourceEntryNumber": 275,
    "eraId": "life-jesus-era-15",
    "chapterId": "life-jesus-chapter-18",
    "title": "Jesus Promises the Coming of the Holy Spirit",
    "summary": "Jesus instructs the apostles to await the Father's promise.",
    "kind": "teaching-segment",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Acts 1:4–5",
        "role": "primary",
        "book": "Acts",
        "bookSlug": "acts",
        "chapter": 1,
        "verses": "4–5",
        "href": "https://bible.usccb.org/bible/acts/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 152
  },
  {
    "id": "life-jesus-0276",
    "sourceEntryNumber": 276,
    "eraId": "life-jesus-era-15",
    "chapterId": "life-jesus-chapter-18",
    "title": "Jesus Commissions the Apostles to Become His Witnesses",
    "summary": "Jesus tells the apostles that they will receive power from the Holy Spirit and bear witness throughout the world.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Acts 1:6–8",
        "role": "primary",
        "book": "Acts",
        "bookSlug": "acts",
        "chapter": 1,
        "verses": "6–8",
        "href": "https://bible.usccb.org/bible/acts/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "stopNumber": 153
  },
  {
    "id": "life-jesus-0277",
    "sourceEntryNumber": 277,
    "parentStopId": "life-jesus-0279",
    "localOrder": 2,
    "eraId": "life-jesus-era-15",
    "chapterId": "life-jesus-chapter-18",
    "title": "Jesus Leads the Apostles Toward Bethany",
    "summary": "Luke describes Jesus leading His disciples toward Bethany.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "Luke and Acts present the blessing and Ascension with related but distinct narrative emphases.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 24:50",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 24,
        "verses": "50",
        "href": "https://bible.usccb.org/bible/luke/24",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [
      {
        "targetRecordId": "life-jesus-0279",
        "kind": "parallel",
        "note": "Luke’s movement toward Bethany is the opening segment of the Ascension scene."
      }
    ],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ],
    "unresolvedCluster": "ascension-harmony"
  },
  {
    "id": "life-jesus-0278",
    "sourceEntryNumber": 278,
    "parentStopId": "life-jesus-0279",
    "localOrder": 1,
    "eraId": "life-jesus-era-15",
    "chapterId": "life-jesus-chapter-18",
    "title": "Jesus Blesses His Apostles",
    "summary": "Jesus raises His hands and blesses the disciples.",
    "kind": "narrated-event",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke and Acts present the blessing and Ascension with related but distinct narrative emphases.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 24:50–51",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 24,
        "verses": "50–51",
        "href": "https://bible.usccb.org/bible/luke/24",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": [
          "Luke 24:51 has a textual note concerning the wording of Jesus being taken up to heaven."
        ]
      }
    ],
    "relationships": [
      {
        "targetRecordId": "life-jesus-0279",
        "kind": "parallel",
        "note": "Jesus’ blessing is the immediate setting of Luke’s Ascension account."
      }
    ],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection.",
      "Luke 24:51 has a textual note concerning the wording of Jesus being taken up to heaven."
    ],
    "unresolvedCluster": "ascension-harmony"
  },
  {
    "id": "life-jesus-0279",
    "sourceEntryNumber": 279,
    "eraId": "life-jesus-era-15",
    "chapterId": "life-jesus-chapter-18",
    "title": "THE ASCENSION OF OUR LORD JESUS CHRIST",
    "summary": "Jesus ascends into Heaven.",
    "kind": "doctrinal-mystery",
    "chronologyConfidence": "uncertain",
    "chronologyNote": "Luke and Acts present the blessing and Ascension with related but distinct narrative emphases.",
    "sequenceBasis": "editorial-grouping",
    "catholicClassifications": [
      "narrated-history",
      "doctrine",
      "devotional-tradition",
      "liturgical-commemoration"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Acts 1:9–11",
        "role": "primary",
        "book": "Acts",
        "bookSlug": "acts",
        "chapter": 1,
        "verses": "9–11",
        "href": "https://bible.usccb.org/bible/acts/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": [
          "Retain the USCCB textual note for Luke 24:51 and distinguish it from Acts 1:9–11."
        ]
      },
      {
        "displayLabel": "Luke 24:50–53",
        "role": "parallel",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 24,
        "verses": "50–53",
        "href": "https://bible.usccb.org/bible/luke/24",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": [
          "Retain the USCCB textual note for Luke 24:51 and distinguish it from Acts 1:9–11."
        ]
      }
    ],
    "relationships": [
      {
        "targetRecordId": "life-jesus-0277",
        "kind": "parallel",
        "note": "Luke’s movement toward Bethany is the opening segment of the Ascension scene."
      },
      {
        "targetRecordId": "life-jesus-0278",
        "kind": "parallel",
        "note": "Jesus’ blessing is the immediate setting of Luke’s Ascension account."
      }
    ],
    "churchSources": [
      {
        "title": "Catechism of the Catholic Church",
        "locator": "659–667",
        "url": "https://www.vatican.va/archive/ENG0015/_P1T.HTM",
        "verificationStatus": "unresolved",
        "sourceNotes": [
          "Requires final human theological/source approval before publication."
        ]
      }
    ],
    "mediaTreatment": "traditional-sacred-art",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection.",
      "Retain the USCCB textual note for Luke 24:51 and distinguish it from Acts 1:9–11."
    ],
    "unresolvedCluster": "ascension-harmony",
    "stopNumber": 154
  },
  {
    "id": "life-jesus-0280",
    "sourceEntryNumber": 280,
    "parentStopId": "life-jesus-0279",
    "localOrder": 3,
    "eraId": "life-jesus-era-15",
    "chapterId": "life-jesus-chapter-18",
    "title": "The Apostles Worship Jesus and Return to Jerusalem",
    "summary": "Following the Ascension, the disciples worship Jesus and return to Jerusalem with great joy.",
    "kind": "narrated-event",
    "chronologyConfidence": "explicit",
    "chronologyNote": "The record follows the cited passage’s narrative or literary order.",
    "sequenceBasis": "gospel-order",
    "catholicClassifications": [
      "narrated-history"
    ],
    "scripturePassages": [
      {
        "displayLabel": "Luke 24:52–53",
        "role": "primary",
        "book": "Luke",
        "bookSlug": "luke",
        "chapter": 24,
        "verses": "52–53",
        "href": "https://bible.usccb.org/bible/luke/24",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      },
      {
        "displayLabel": "Acts 1:12–14",
        "role": "parallel",
        "book": "Acts",
        "bookSlug": "acts",
        "chapter": 1,
        "verses": "12–14",
        "href": "https://bible.usccb.org/bible/acts/1",
        "edition": "NABRE / USCCB",
        "verificationStatus": "unresolved",
        "sourceNotes": []
      }
    ],
    "relationships": [],
    "churchSources": [],
    "mediaTreatment": "historical-scene",
    "sourceNotes": [
      "Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection."
    ]
  }
];

const recordById = new Map(lifeOfJesusRecords.map((record) => [record.id, record]));
export const lifeOfJesusStops: LifeOfJesusStop[] = lifeOfJesusRecords.filter((record): record is LifeOfJesusRecord & { stopNumber: number } => typeof record.stopNumber === "number").sort((a,b) => a.stopNumber-b.stopNumber).map((record) => ({ ...record, parentStopId: undefined, teachingUnits: lifeOfJesusRecords.filter((candidate) => candidate.parentStopId === record.id).sort((a,b) => (a.localOrder ?? 0)-(b.localOrder ?? 0)), unresolvedClusters: [...new Set([record.unresolvedCluster, ...lifeOfJesusRecords.filter((candidate) => candidate.parentStopId === record.id).map((candidate) => candidate.unresolvedCluster)].filter((value): value is string => Boolean(value)))] }));
export const lifeOfJesusChapters: LifeOfJesusChapter[] = chapterMetadata.map((chapter) => ({ id: chapter.id, chapterNumber: chapter.chapterNumber, title: chapter.title, stops: lifeOfJesusStops.filter((stop) => stop.chapterId === chapter.id) }));
export const lifeOfJesusEras: LifeOfJesusEra[] = eraMetadata.map((era) => ({ ...era, chapters: lifeOfJesusChapters.filter((chapter) => chapterMetadata.find((candidate) => candidate.id === chapter.id)?.eraId === era.id) }));
export const lifeOfJesusRecordById = recordById;
