import fs from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import process from "node:process";

const ROOT = process.cwd();
const OUTPUT = path.join(ROOT, "src", "data", "lifeOfJesus.ts");
const USCCB = "https://bible.usccb.org/bible";
const GENERATOR_PATH = path.join(ROOT, "scripts", "validate-life-of-jesus.mjs");
const hash = (value) => createHash("sha256").update(value).digest("hex");

const BOOKS = {
  Genesis: "genesis", "2 Samuel": "2samuel", Isaiah: "isaiah", Micah: "micah",
  Matthew: "matthew", Mark: "mark", Luke: "luke", John: "john", Acts: "acts",
  Colossians: "colossians", "1 Corinthians": "1corinthians", "1 Peter": "1peter",
  Psalm: "psalms", Psalms: "psalms",
};
const BOOK_PATTERN = Object.keys(BOOKS).sort((a, b) => b.length - a.length).join("|");
const REF_RE = new RegExp(`(${BOOK_PATTERN})\\s+(\\d+)(?::(\\d+(?:[–-]\\d+)?(?:,\\s*\\d+(?:[–-]\\d+)?)?))?`, "g");

const TITLE_OVERRIDES = {
  60: "The Temple Cleansing in John’s Narrative",
  63: "God’s Love and Salvation Revealed",
  65: "John the Baptist’s Final Explicit Testimony",
  74: "Jesus Makes His Home in Capernaum and Begins Proclaiming",
  258: "Jesus Appears to the Women",
  262: "The Disciples Report That Jesus Appeared to Simon Peter",
  264: "Jesus Entrusts the Disciples with the Ministry of Forgiveness",
  266: "The Evangelist Summarizes Jesus’ Further Signs",
  272: "Jesus Appears to More Than Five Hundred at Once",
};
const SUMMARY_OVERRIDES = {
  10: "By the Holy Spirit, the eternal Son assumes human nature in Mary’s womb; Mary freely gives her fiat.",
  32: "Matthew recounts the Holy Family settling in Nazareth after the return from Egypt; Luke summarizes their return after the Presentation.",
  45: "At Jesus’ baptism, the Spirit descends and the Father’s voice identifies the beloved Son—a revelation the Church receives as Trinitarian.",
  60: "John places Jesus’ expulsion of merchants and money changers during an early Passover visit.",
  61: "Many respond to Jesus’ signs with belief, though the evangelist immediately qualifies the depth of that response.",
  63: "Jesus’ discourse and the evangelist’s reflection reveal the Father’s saving love in sending the Son.",
  65: "John identifies Jesus as the bridegroom and declares that Christ must increase; the following verses may be evangelist reflection.",
  71: "After John the Baptist has been arrested, Jesus begins proclaiming the gospel of God and calling people to repentance and faith.",
  74: "Jesus makes his home in Capernaum and begins proclaiming the nearness of the kingdom of heaven.",
  121: "Mark recounts John’s execution as a flashback after Herod hears reports about Jesus.",
  169: "The chief priests and Pharisees convene the council and begin planning how to put Jesus to death.",
  177: "Jesus curses the fig tree; after it withers, he teaches the disciples about faith and prayer.",
  179: "The chief priests and elders question Jesus about the authority behind his actions.",
  185: "Jesus warns against hypocrisy among particular scribes and Pharisees in the narrated controversy.",
  196: "Jesus gives his Body and Blood under the appearances of bread and wine, as the Church confesses in her Eucharistic doctrine.",
  210: "Judas arrives with an armed group sent by the chief priests and elders and identifies Jesus.",
  213: "Jesus is questioned before Caiaphas, the scribes, elders, and council members gathered there.",
  215: "The council of elders, chief priests, and scribes questions Jesus after daybreak.",
  217: "The chief priests and elders hand Jesus over to the Roman governor, Pontius Pilate.",
  229: "Jesus is crucified at Golgotha.",
  248: "The chief priests and Pharisees ask Pilate to secure the tomb, and a guard is posted.",
  250: "The Church professes that Christ descended to the dead; the cited passages provide the biblical foundation for this doctrine rather than narrating a visible scene.",
  251: "The Resurrection of Jesus is doctrinally certain. The Gospels proclaim it through the empty tomb and appearances of the risen Lord; they do not narrate the instant of Resurrection as an observed scene.",
  258: "Matthew recounts the risen Jesus meeting the women; its relationship to John’s account of Mary Magdalene is not certain.",
  259: "The guards report to the chief priests, who arrange a false explanation of the empty tomb.",
  262: "The disciples report that the risen Lord appeared to Simon, an appearance also attested by Paul but not narrated as a scene.",
  264: "Jesus breathes the Holy Spirit upon the gathered disciples and entrusts them with a ministry of forgiveness.",
  266: "John explains that Jesus performed additional signs not recorded in the Gospel; this is an evangelist’s summary, not a dated appearance.",
  272: "Paul reports that Jesus appeared to more than five hundred at once.",
};

const REPLACEMENT_PASSAGES = {
  65: ["John 3:25–30", "John 3:31–36"],
  88: ["Luke 6:12–16", "Mark 3:13–19", "Matthew 10:1–4"],
  119: ["Mark 6:1–6", "Matthew 13:53–58"],
  126: ["John 6:67–69"],
  163: ["John 7:10–52", "John 7:1–9"],
  196: ["Matthew 26:26–29", "Mark 14:22–25", "Luke 22:19–20", "1 Corinthians 11:23–26"],
  200: ["John 14:1–4"],
  207: ["Matthew 26:30", "Mark 14:26", "Luke 22:39"],
  208: ["Matthew 26:36–38", "Mark 14:32–34"],
  211: ["John 18:10–12", "Matthew 26:50–56"],
  212: ["John 18:12–14, 19–24"],
  216: ["Matthew 27:3–10", "Acts 1:16–20"],
  221: ["John 19:1", "Matthew 27:26", "Mark 15:15"],
  228: ["Matthew 27:33–34", "Mark 15:22", "Luke 23:33", "John 19:17"],
  229: ["Mark 15:22–27", "John 20:25"],
  236: ["Matthew 27:46", "Mark 15:34", "Psalm 22:2"],
  250: ["1 Peter 3:18–20", "1 Peter 4:6", "Acts 2:24–31"],
  251: ["Matthew 28:1–10", "Mark 16:1–8", "Luke 24:1–12", "John 20:1–18"],
  256: ["John 20:2–10", "John 20:1"],
  262: ["Luke 24:34", "1 Corinthians 15:5"],
  272: ["1 Corinthians 15:6"],
};
const ADDED_PASSAGES = {
  11: ["Luke 1:36"], 42: ["Matthew 3:11–12", "Mark 1:7–8"],
  46: ["Matthew 4:1", "Luke 4:1"], 47: ["Luke 4:1–2"], 48: ["Luke 4:3–4"],
  49: ["Luke 4:9–12"], 50: ["Luke 4:5–8"], 51: ["Mark 1:13"],
  77: ["Luke 4:31–37"], 78: ["Matthew 8:14–15", "Luke 4:38–39"],
  79: ["Matthew 8:16–17", "Luke 4:40–41"], 80: ["Luke 4:42–44"],
  81: ["Matthew 8:1–4", "Luke 5:12–16"], 82: ["Matthew 9:1–8", "Luke 5:17–26"],
  83: ["Luke 5:27–32"], 84: ["Matthew 9:14–17", "Luke 5:33–39"],
  85: ["Matthew 12:1–8", "Luke 6:1–5"], 86: ["Matthew 12:9–14", "Luke 6:6–11"],
  88: ["Matthew 10:1–4"], 105: ["Luke 7:1–10"], 108: ["Luke 7:24–35"],
  111: ["Mark 4:1–20", "Luke 8:4–15"], 113: ["Mark 4:30–34", "Luke 13:18–21"],
  115: ["Matthew 8:23–27", "Luke 8:22–25"],
  116: ["Matthew 8:28–34", "Luke 8:26–39"],
  117: ["Matthew 9:20–22", "Luke 8:43–48"], 118: ["Matthew 9:18–26", "Luke 8:40–56"],
  120: ["Luke 9:1–6"], 121: ["Matthew 14:1–12"],
  122: ["Matthew 14:13–21", "Mark 6:30–44", "Luke 9:10–17"],
  123: ["Mark 6:45–52"], 127: ["Matthew 15:1–20"],
  128: ["Matthew 15:21–28"], 130: ["Matthew 15:32–39"],
  132: ["Mark 8:27–30", "Luke 9:18–21"], 134: ["Mark 8:31–33", "Luke 9:22"],
  135: ["Mark 8:34–9:1", "Luke 9:23–27"], 136: ["Mark 9:2–8", "Luke 9:28–36"],
  138: ["Matthew 17:14–20", "Luke 9:37–43"],
  160: ["Matthew 19:13–15", "Mark 10:13–16"], 161: ["Mark 10:17–31"],
  162: ["Matthew 20:17–19", "Mark 10:32–34"],
  171: ["Matthew 20:29–34", "Luke 18:35–43"],
  172: ["Matthew 26:6–13", "Mark 14:3–9"],
  174: ["Mark 11:1–10", "John 12:12–19"], 178: ["Matthew 21:12–17", "Luke 19:45–48"],
  186: ["Luke 21:1–4"], 187: ["Mark 13:1–2", "Luke 21:5–6"],
  188: ["Mark 13:3–37", "Luke 21:7–36"], 192: ["Mark 14:10–11", "Luke 22:3–6"],
  197: ["Matthew 26:20–25", "Mark 14:17–21", "Luke 22:21–23"],
  199: ["Matthew 26:31–35", "Mark 14:27–31"], 209: ["Mark 14:35–42"],
  210: ["Mark 14:43–45", "Luke 22:47–48", "John 18:2–9"],
  213: ["Mark 14:53–65", "Luke 22:54, 63–65"],
  214: ["Matthew 26:69–75", "Mark 14:66–72"],
  217: ["Mark 15:1–5", "Luke 23:1–5", "John 18:28–38"],
  220: ["Mark 15:6–15", "Luke 23:18–25", "John 18:39–40"],
  222: ["Matthew 27:27–31", "Mark 15:16–20"], 224: ["Matthew 27:26", "Mark 15:15", "Luke 23:24–25"],
  232: ["Mark 15:29–32", "Luke 23:35–39"], 235: ["Matthew 27:45"],
  244: ["Mark 15:42–45", "Luke 23:50–52", "John 19:38"],
  247: ["Mark 15:46–47", "Luke 23:53–56"],
};

const PARALLEL_RECORDS = new Set([17,40,44,46,47,48,49,50,51,75,76,77,78,79,80,81,82,83,84,85,86,87,88,96,105,107,108,111,113,115,116,117,118,119,120,121,122,123,127,128,130,132,134,135,136,137,138,139,140,160,161,162,171,172,174,178,179,180,182,183,184,186,187,188,192,193,194,196,197,199,207,208,209,210,211,213,214,217,220,221,222,224,225,226,228,229,232,235,236,240,241,242,244,245,247,249,251,252,253,254,255,262,263,279,280]);
const DOCTRINAL = new Set([1,2,3,4,5,6,7,10,45,196,250,251,264,279]);
const EDITORIAL = new Set([39,61,63,65,240,249,262,266,272]);
const UNCERTAIN = new Set([15,32,48,49,50,60,63,65,72,73,75,76,119,121, ...Array.from({length: 30}, (_, i) => 143 + i), ...Array.from({length: 14}, (_, i) => 193 + i), 212,213,214,215,216,221,222,223,224,241,250,251,258,262,263,272,273,278,279]);
const TRADITIONAL = new Set([3,4,5,6,7,10,17,...Array.from({length:12},(_,i)=>22+i),39,45,...Array.from({length:5},(_,i)=>52+i),75,76,119,193,194,195,196,197,198,199,200,201,202,203,204,205,206,...Array.from({length:11},(_,i)=>230+i),250,251,263,279]);
const LITURGICAL_ALLOWLIST = new Set([196,250,251,279]);
const TEXTUAL_NOTES = {
  145: "The ancient textual tradition varies between seventy and seventy-two; NABRE/USCCB should control the displayed wording.",
  209: "Luke 22:43–44 has a significant manuscript note in the USCCB edition.",
  230: "Luke 23:34a has a significant manuscript variant noted by USCCB.",
  251: "Mark 16:9–20 is not used as a primary source here; if later used, retain the USCCB longer-ending note.",
  278: "Luke 24:51 has a textual note concerning the wording of Jesus being taken up to heaven.",
  279: "Retain the USCCB textual note for Luke 24:51 and distinguish it from Acts 1:9–11.",
};
const ADDITIONAL_SOURCE_NOTES = {
  48: "The temptation sequence is displayed in Matthew’s order; Luke presents the kingdom and Temple temptations in the opposite order.",
  49: "The temptation sequence is displayed in Matthew’s order; Luke presents the kingdom and Temple temptations in the opposite order.",
  50: "The temptation sequence is displayed in Matthew’s order; Luke presents the kingdom and Temple temptations in the opposite order.",
  52: "Placement after the temptations and before the Synoptic Galilean proclamation follows a traditional harmony; John does not synchronize these days with the Synoptic sequence.",
  53: "Placement after the temptations and before the Synoptic Galilean proclamation follows a traditional harmony; John does not synchronize these days with the Synoptic sequence.",
  54: "Placement after the temptations and before the Synoptic Galilean proclamation follows a traditional harmony; John does not synchronize these days with the Synoptic sequence.",
  55: "Placement after the temptations and before the Synoptic Galilean proclamation follows a traditional harmony; John does not synchronize these days with the Synoptic sequence.",
  56: "Placement after the temptations and before the Synoptic Galilean proclamation follows a traditional harmony; John does not synchronize these days with the Synoptic sequence.",
  71: "This record marks the Synoptic transition after John the Baptist’s arrest; the arrest itself is not separately narrated in this timeline before Mark 1:14.",
  216: "Matthew 27:3–10 and Acts 1:16–20 preserve distinct accounts associated with Judas’s death; do not synthesize their physical details into an invented single scene.",
};
const CLUSTER_NOTES = {
  32: "Matthew’s return-from-Egypt sequence and Luke’s post-Presentation summary are traditionally harmonized.",
  60: "John’s early Temple cleansing may be the same event as the Synoptic Holy Week cleansing or a distinct event.",
  71: "This marks the Synoptic transition after John the Baptist’s arrest; the arrest is presupposed here rather than separately narrated earlier in the timeline.",
  72: "Luke’s early Nazareth rejection may relate to the later-positioned Matthew/Mark account.",
  75: "Luke’s miraculous catch is traditionally associated with the fishermen’s call but is not demonstrably the identical scene.",
  121: "John’s death is narrated retrospectively; this location does not establish its precise date.",
  143: "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
  170: "Luke places the blind-man healing before Zacchaeus; Mark describes Bartimaeus as Jesus leaves Jericho.",
  172: "John’s Bethany anointing may parallel Matthew 26 and Mark 14; Luke 7 is treated as distinct.",
  193: "The traditional Holy Thursday presentation does not erase the Synoptic/John Passover chronology question.",
  212: "Peter’s denials occur interleaved with the high-priestly proceedings.",
  221: "Records 221–224 follow John’s order; the Synoptic scourging/handover order differs.",
  241: "Matthew and Mark place the veil after Jesus’ death; Luke narrates it before the final prayer.",
  251: "The Gospels proclaim the Resurrection but do not narrate its instant.",
  258: "Matthew’s appearance to the women cannot be mapped with certainty onto John’s appearance to Mary Magdalene.",
};
const CLUSTER_EXPLANATIONS = {
  "infancy-harmony": "The visible order of the Presentation, Magi, flight into Egypt, return, and Nazareth material is a traditional harmony; the Gospels do not state every interval or a single combined sequence.",
  "temptation-order": "The display follows Matthew’s temptation sequence; Luke reverses the order of the kingdom and Temple temptations.",
  "early-johannine-ministry": "Placement of John 1:29–51 after the temptations and before the Synoptic Galilean proclamation follows a traditional Gospel harmony.",
  "temple-cleansing-identity": "John’s early Temple cleansing may be the same event as the Synoptic Holy Week cleansing or a distinct event.",
  "nazareth-rejection-identity": "Luke’s early Nazareth rejection may relate to the later-positioned Matthew and Mark account.",
  "first-disciples-harmony": "Luke’s miraculous catch is traditionally associated with the fishermen’s call but is not demonstrably the identical scene.",
  "late-ministry-order": "Luke’s travel narrative and John’s festival chronology cannot be merged into an exact day-by-day sequence.",
  "upper-room-order": "The traditional Holy Thursday presentation does not erase the Synoptic and Johannine Passover chronology question.",
  "high-priestly-proceedings": "Peter’s denials occur interleaved with the high-priestly proceedings, whose presentation differs among the Gospels.",
  "pilate-sequence": "Records in this group follow John’s order; the Synoptic scourging and handover order differs.",
  "passion-harmony": "Gospel-internal order is explicit; the displayed cross-Gospel sequence is a traditional Passion harmony.",
  "easter-morning-order": "The canonical witnesses establish the empty tomb and appearances without supplying one exhaustive sequence for every Easter encounter.",
  "ascension-harmony": "Luke and Acts present the blessing and Ascension with related but distinct narrative emphases.",
  "judas-death-accounts": "Matthew and Acts preserve distinct accounts associated with Judas’s death; their physical details must not be flattened into an invented composite.",
};
function clusterIdFor(n) {
  if (n>=22&&n<=33) return "infancy-harmony";
  if (n>=48&&n<=50) return "temptation-order";
  if (n>=52&&n<=56) return "early-johannine-ministry";
  if ([60,178].includes(n)) return "temple-cleansing-identity";
  if ([72,73,119].includes(n)) return "nazareth-rejection-identity";
  if ([75,76].includes(n)) return "first-disciples-harmony";
  if (n>=143&&n<=172) return "late-ministry-order";
  if (n>=193&&n<=206) return "upper-room-order";
  if (n>=212&&n<=215) return "high-priestly-proceedings";
  if (n>=221&&n<=224) return "pilate-sequence";
  if (n>=230&&n<=240) return "passion-harmony";
  if (n>=251&&n<=264) return "easter-morning-order";
  if (n>=277&&n<=279) return "ascension-harmony";
  if (n===216) return "judas-death-accounts";
}

const PARENT = new Map([
  [10,9],[12,11],[18,17],[19,17],[20,17],[23,22],[24,22],[25,22],
  [35,34],[36,34],[37,34],[38,34],[45,44],[47,46],[48,46],[49,46],[50,46],[51,46],
  [58,57],[63,62],[68,66],[73,72], ...Array.from({length: 15}, (_, i) => [90 + i, 89]),
  [117,118],[133,132],[134,132],[135,132],[137,136],[141,140],[142,140],
  ...Array.from({length: 19}, (_, i) => [144 + i, 143]),
  ...Array.from({length: 9}, (_, i) => [164 + i, 163]),
  [174,173],[175,173],[193,194], ...Array.from({length: 12}, (_, i) => [195 + i, 194]),
  [208,207],[209,207],[210,207],[211,207],[226,225],[227,225],
  ...Array.from({length: 14}, (_, i) => [230 + i, 229]), [245,244],[246,244],[247,244],
  ...Array.from({length: 13}, (_, i) => [252 + i, 251]),
  [278,279],[277,279],[280,279],
]);

const RELATIONS = [
  [60,178,"disputed","John and the Synoptics may narrate one cleansing in different literary positions or two distinct cleansings."],
  [72,119,"possibly-parallel","The Nazareth rejection accounts may describe one event arranged differently or more than one visit."],
  [73,119,"possibly-parallel","The Nazareth rejection accounts may describe one event arranged differently or more than one visit."],
  [75,76,"possibly-parallel","Traditional association does not prove that Luke’s catch and the Synoptic shoreline call are one scene."],
  [109,172,"distinct","Do not identify Luke’s sinful woman with Mary of Bethany or Mary Magdalene."],
  [96,148,"parallel","Matthew and Luke transmit related forms of the Lord’s Prayer in different literary settings."],
  [117,118,"interleaved","The woman’s healing interrupts and is nested inside Jairus’s story."],
  [177,178,"interleaved","Mark places the Temple action between the cursing and later discovery of the withered fig tree."],
  [212,214,"interleaved","Peter’s first denial occurs during John’s Annas material."],
  [277,279,"parallel","Luke’s movement toward Bethany is the opening segment of the Ascension scene."],
  [278,279,"parallel","Jesus’ blessing is the immediate setting of Luke’s Ascension account."],
];

const CHURCH_SOURCES = {
  10: [["Catechism of the Catholic Church","456–483","https://www.vatican.va/archive/ENG0015/__P1J.HTM"]],
  45: [["Catechism of the Catholic Church","535–537","https://www.vatican.va/archive/ENG0015/_P1L.HTM"]],
  196: [["Catechism of the Catholic Church","1323, 1333, 1374–1377","https://www.vatican.va/archive/ENG0015/_INDEX.HTM"]],
  250: [["Catechism of the Catholic Church","631–637","https://www.vatican.va/archive/ENG0015/_P1R.HTM"]],
  251: [["Catechism of the Catholic Church","638–658","https://www.vatican.va/archive/ENG0015/_P1S.HTM"]],
  264: [["Catechism of the Catholic Church","976–987; 1441–1442","https://www.vatican.va/archive/ENG0015/_INDEX.HTM"]],
  279: [["Catechism of the Catholic Church","659–667","https://www.vatican.va/archive/ENG0015/_P1T.HTM"]],
};

function romanToNumber(roman) { const v={I:1,V:5,X:10}; let n=0; for(let i=0;i<roman.length;i++) n += v[roman[i]] < (v[roman[i+1]]||0) ? -v[roman[i]] : v[roman[i]]; return n; }
function recordId(n) { return `life-jesus-${String(n).padStart(4,"0")}`; }

function parseReference(label, sourceEntryNumber, index) {
  const match = new RegExp(`^(${BOOK_PATTERN})\\s+(\\d+)(?::(.+))?$`).exec(label);
  if (!match) throw new Error(`Unable to parse reference: ${label}`);
  const [, book, chapterRaw, verses] = match;
  const chapter = Number(chapterRaw);
  let role = index === 0 ? "primary" : PARALLEL_RECORDS.has(sourceEntryNumber) ? "parallel" : "supporting";
  if (sourceEntryNumber >= 3 && sourceEntryNumber <= 7) role = "typological";
  if ([6,11,163,216,229,236,250,256,262].includes(sourceEntryNumber) && index > 0) role = "supporting";
  if (sourceEntryNumber === 196 && index === 3) role = "supporting";
  return {
    displayLabel: label,
    role,
    book,
    bookSlug: BOOKS[book],
    chapter,
    ...(verses ? { verses } : {}),
    href: `${USCCB}/${BOOKS[book]}/${chapter}`,
    edition: "NABRE / USCCB",
    verificationStatus: "unresolved",
    sourceNotes: TEXTUAL_NOTES[sourceEntryNumber] ? [TEXTUAL_NOTES[sourceEntryNumber]] : [],
  };
}

function parseSource(markdown) {
  const lines = markdown.split(/\r?\n/);
  const eras=[]; const chapters=[]; const raw=[];
  let era; let chapter; let current;
  const flush=()=>{if(current){raw.push(current);current=undefined;}};
  for (const line of lines) {
    const part = /^# PART ([IVX]+): (.+)$/.exec(line);
    if (part) { flush(); era={id:`life-jesus-era-${romanToNumber(part[1])}`,partNumber:romanToNumber(part[1]),romanNumeral:part[1],title:part[2],theme:undefined,approximatePeriod:undefined}; eras.push(era); continue; }
    const period = /^\*\*Approximate period:\*\* (.+)$/.exec(line); if(period&&era){era.approximatePeriod=period[1];continue;}
    const theme = /^\*\*Central theme:\*\* (.+)$/.exec(line); if(theme&&era){era.theme=theme[1];continue;}
    const ch = /^### Chapter (\d+): (.+)$/.exec(line);
    if(ch&&era){flush();chapter={id:`life-jesus-chapter-${ch[1]}`,chapterNumber:Number(ch[1]),title:ch[2],eraId:era.id};chapters.push(chapter);continue;}
    const entry = /^\*\*(\d+)\. (.+?)\*\*$/.exec(line);
    if(entry&&era&&chapter){flush();current={sourceEntryNumber:Number(entry[1]),title:entry[2],eraId:era.id,chapterId:chapter.id,body:[]};continue;}
    if(current) current.body.push(line);
  }
  flush();
  return {eras,chapters,raw:raw.filter((r)=>r.sourceEntryNumber<=280)};
}

function extractSummary(body) {
  return body.map((s)=>s.trim()).find((s)=>s && !s.startsWith("Scripture:") && !s.startsWith("Additional Scripture:") && !s.startsWith("Parallel:") && !s.startsWith("New Testament fulfillment:") && !s.startsWith("Catholic connection:") && !s.startsWith("Catechism:") && !s.startsWith("The precise") && !s.startsWith("The relationship") && !s.startsWith("The exact") && !s.startsWith("This is a theological") && !s.startsWith("The Gospels do not")) || "";
}
function extractPassageLabels(body, n) {
  if (REPLACEMENT_PASSAGES[n]) return REPLACEMENT_PASSAGES[n];
  const labels=[];
  for(const match of body.join(" ").matchAll(REF_RE)) labels.push(match[0].replace(/-/g,"–").replace(/\s+/g," "));
  for(const label of ADDED_PASSAGES[n]||[]) labels.push(label);
  return [...new Set(labels)];
}
function inferKind(n,title) {
  if(n<=7) return "theological-prologue";
  if(DOCTRINAL.has(n)) return "doctrinal-mystery";
  if(EDITORIAL.has(n)) return "editorial-summary";
  if(/Teaches|Parable|Beatitudes|Our Father|Golden Rule|Discourse|Commandment|Priestly Prayer|Promises|Explains|Denounces/.test(title)) return "teaching-segment";
  return "narrated-event";
}
function classifications(n,body) {
  const values=[];
  if(n<=7) values.push(n<=2?"doctrine":"typology"); else if(n===250) values.push("doctrine","liturgical-commemoration"); else values.push("narrated-history");
  if(DOCTRINAL.has(n)&&!values.includes("doctrine")) values.push("doctrine");
  if(/Catholic connection:/.test(body) && /(Mystery|Sorrow)/.test(body)) values.push("devotional-tradition");
  if(LITURGICAL_ALLOWLIST.has(n)) values.push("liturgical-commemoration");
  return [...new Set(values)];
}
function chronology(n) {
  const confidence=UNCERTAIN.has(n)?"uncertain":TRADITIONAL.has(n)?"traditional-harmony":"explicit";
  const clusterId=clusterIdFor(n);
  const note=CLUSTER_NOTES[n] || (clusterId&&CLUSTER_EXPLANATIONS[clusterId]) || (confidence==="explicit"?"The record follows the cited passage’s narrative or literary order.":confidence==="traditional-harmony"?"The placement follows a traditional Gospel harmony or Catholic presentation.":"The canonical sources do not establish a single exact inter-Gospel date or sequence.");
  const sequenceBasis=confidence==="explicit"?"gospel-order":confidence==="traditional-harmony"?"traditional-harmony":"editorial-grouping";
  return {confidence,note,sequenceBasis};
}

function generate(sourcePath) {
  const sourceText=fs.readFileSync(sourcePath,"utf8");
  const {eras,chapters,raw}=parseSource(sourceText);
  if(raw.length!==280) throw new Error(`Expected 280 records, parsed ${raw.length}`);
  const relationships=new Map(raw.map((r)=>[r.sourceEntryNumber,[]]));
  for(const [a,b,kind,note] of RELATIONS){relationships.get(a).push({targetRecordId:recordId(b),kind,note});relationships.get(b).push({targetRecordId:recordId(a),kind,note});}
  const childrenByParent=new Map();
  for(const [child,parent] of PARENT){if(!childrenByParent.has(parent))childrenByParent.set(parent,[]);childrenByParent.get(parent).push(child);}
  if(childrenByParent.has(163)) childrenByParent.get(163).sort((a,b)=>{
    const key=(n)=>n===171?169.5:n===170?170.5:n;
    return key(a)-key(b);
  });
  const records=raw.map((item)=>{
    const n=item.sourceEntryNumber; const body=item.body.join(" "); const c=chronology(n); const parent=PARENT.get(n);
    const localOrder=parent ? childrenByParent.get(parent).indexOf(n)+1 : undefined;
    const passages=extractPassageLabels(item.body,n).map((label,index)=>parseReference(label,n,index));
    return {
      id:recordId(n),sourceEntryNumber:n,...(parent?{parentStopId:recordId(parent),localOrder}:{}),
      eraId:item.eraId,chapterId:item.chapterId,title:TITLE_OVERRIDES[n]||item.title,
      summary:SUMMARY_OVERRIDES[n]||extractSummary(item.body),kind:inferKind(n,TITLE_OVERRIDES[n]||item.title),
      chronologyConfidence:c.confidence,chronologyNote:c.note,sequenceBasis:c.sequenceBasis,
      catholicClassifications:classifications(n,body),scripturePassages:passages,
      relationships:relationships.get(n),
      churchSources:(CHURCH_SOURCES[n]||[]).map(([title,locator,url])=>({title,locator,url,verificationStatus:"unresolved",sourceNotes:["Requires final human theological/source approval before publication."]})),
      mediaTreatment:EDITORIAL.has(n)?"no-scene":DOCTRINAL.has(n)?"traditional-sacred-art":"historical-scene",
      sourceNotes:["Original editorial summary. Reference targets the NABRE presented by USCCB; no Scripture text is reproduced, and the official page landing still requires final inspection.",...(TEXTUAL_NOTES[n]?[TEXTUAL_NOTES[n]]:[]),...(ADDITIONAL_SOURCE_NOTES[n]?[ADDITIONAL_SOURCE_NOTES[n]]:[])],
      ...(clusterIdFor(n)?{unresolvedCluster:clusterIdFor(n)}:{}),
    };
  });
  const top=records.filter((r)=>!r.parentStopId).sort((a,b)=>{
    const aChildren=childrenByParent.get(a.sourceEntryNumber)||[]; const bChildren=childrenByParent.get(b.sourceEntryNumber)||[];
    const ak=Math.min(a.sourceEntryNumber,...aChildren); const bk=Math.min(b.sourceEntryNumber,...bChildren);
    const adjustedA=a.sourceEntryNumber===171?169.5:a.sourceEntryNumber===170?170.5:ak;
    const adjustedB=b.sourceEntryNumber===171?169.5:b.sourceEntryNumber===170?170.5:bk;
    return adjustedA-adjustedB;
  });
  top.forEach((record,index)=>{record.stopNumber=index+1;});
  const generatorHash=hash(fs.readFileSync(GENERATOR_PATH));
  const sourceHash=hash(sourceText);
  const content=`/* This file is mechanically generated from the reviewed 280-entry source. */\nimport type { LifeOfJesusChapter, LifeOfJesusEra, LifeOfJesusRecord, LifeOfJesusStop } from \"@/types/lifeOfJesus\";\n\nexport const lifeOfJesusGeneratorHash = \"${generatorHash}\";\nexport const lifeOfJesusSourceHash = \"${sourceHash}\";\nconst eraMetadata = ${JSON.stringify(eras,null,2)} as const;\nconst chapterMetadata = ${JSON.stringify(chapters,null,2)} as const;\n\nexport const lifeOfJesusRecords: LifeOfJesusRecord[] = ${JSON.stringify(records,null,2)};\n\nconst recordById = new Map(lifeOfJesusRecords.map((record) => [record.id, record]));\nexport const lifeOfJesusStops: LifeOfJesusStop[] = lifeOfJesusRecords.filter((record): record is LifeOfJesusRecord & { stopNumber: number } => typeof record.stopNumber === \"number\").sort((a,b) => a.stopNumber-b.stopNumber).map((record) => ({ ...record, parentStopId: undefined, teachingUnits: lifeOfJesusRecords.filter((candidate) => candidate.parentStopId === record.id).sort((a,b) => (a.localOrder ?? 0)-(b.localOrder ?? 0)), unresolvedClusters: [...new Set([record.unresolvedCluster, ...lifeOfJesusRecords.filter((candidate) => candidate.parentStopId === record.id).map((candidate) => candidate.unresolvedCluster)].filter((value): value is string => Boolean(value)))] }));\nexport const lifeOfJesusChapters: LifeOfJesusChapter[] = chapterMetadata.map((chapter) => ({ id: chapter.id, chapterNumber: chapter.chapterNumber, title: chapter.title, stops: lifeOfJesusStops.filter((stop) => stop.chapterId === chapter.id) }));\nexport const lifeOfJesusEras: LifeOfJesusEra[] = eraMetadata.map((era) => ({ ...era, chapters: lifeOfJesusChapters.filter((chapter) => chapterMetadata.find((candidate) => candidate.id === chapter.id)?.eraId === era.id) }));\nexport const lifeOfJesusRecordById = recordById;\n`;
  fs.writeFileSync(OUTPUT,content,"utf8");
  console.log(`Generated ${OUTPUT} with ${records.length} records and ${top.length} visible stops.`);
}

async function validate() {
  const moduleUrl=new URL(`file://${OUTPUT.replace(/\\/g,"/")}?v=${Date.now()}`);
  const {lifeOfJesusRecords,lifeOfJesusStops,lifeOfJesusChapters,lifeOfJesusEras,lifeOfJesusGeneratorHash}=await import(moduleUrl.href);
  const errors=[]; const assert=(condition,message)=>{if(!condition)errors.push(message);};
  assert(lifeOfJesusRecords.length===280,`record count is ${lifeOfJesusRecords.length}, expected 280`);
  assert(lifeOfJesusStops.length===154,`visible stop count is ${lifeOfJesusStops.length}, expected 154`);
  assert(lifeOfJesusGeneratorHash===hash(fs.readFileSync(GENERATOR_PATH)),"generated data is out of sync with its generator; rerun --generate");
  assert(lifeOfJesusEras.length===15,`era count is ${lifeOfJesusEras.length}, expected 15`);
  assert(lifeOfJesusChapters.length===18,`chapter count is ${lifeOfJesusChapters.length}, expected 18`);
  const ids=new Set(lifeOfJesusRecords.map((r)=>r.id));
  assert(ids.size===280,"record IDs are not unique");
  assert(lifeOfJesusRecords.every((r,i)=>r.sourceEntryNumber===i+1),"source entry numbers are not stable and contiguous");
  assert(lifeOfJesusRecords.every((r)=>r.summary&&r.title&&r.scripturePassages.length>0),"a record lacks title, summary, or Scripture passages");
  assert(lifeOfJesusRecords.every((r)=>r.scripturePassages.every((p)=>p.href===`${USCCB}/${p.bookSlug}/${p.chapter}`)),"a passage has a noncanonical chapter href");
  assert(lifeOfJesusRecords.every((r)=>r.scripturePassages.every((p)=>!p.href.includes("utm_"))),"a passage URL contains tracking parameters");
  assert(lifeOfJesusRecords.every((r)=>r.scripturePassages.every((p)=>p.verificationStatus==="unresolved"&&!p.reviewer&&!p.reviewedAt&&!p.accessedAt&&!p.deepLinkUrl)),"an uninspected Scripture link claims verification, review, access, or a verified deep link");
  assert(lifeOfJesusRecords.every((r)=>r.sourceNotes.every((note)=>!note.includes("NABRE text accessed through USCCB"))),"a record makes an unsupported Scripture access claim");
  assert(lifeOfJesusRecords.every((r)=>r.chronologyConfidence!=="uncertain"||r.chronologyNote.length>20),"an uncertain record lacks an explanatory chronology note");
  assert(lifeOfJesusRecords.every((r)=>r.relationships.every((rel)=>ids.has(rel.targetRecordId))),"a relationship target does not exist");
  assert(lifeOfJesusRecords.every((r)=>!r.parentStopId||ids.has(r.parentStopId)),"a child points to a missing parent stop");
  assert(lifeOfJesusRecords.every((r)=>!r.unresolvedCluster||/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(r.unresolvedCluster)),"an unresolved cluster is not a stable slug ID");
  const record=(n)=>lifeOfJesusRecords[n-1];
  assert(Array.from({length:12},(_,i)=>22+i).every((n)=>record(n).unresolvedCluster==="infancy-harmony"&&/tradition.*harmon/i.test(record(n).chronologyNote)),"the visible infancy block lacks its shared harmony qualification");
  assert(Array.from({length:3},(_,i)=>48+i).every((n)=>record(n).unresolvedCluster==="temptation-order"&&record(n).chronologyNote.includes("Matthew")),"the temptation block lacks the Matthew-order qualification");
  assert(Array.from({length:5},(_,i)=>52+i).every((n)=>record(n).unresolvedCluster==="early-johannine-ministry"&&record(n).chronologyConfidence==="traditional-harmony"),"John 1 records 52–56 lack the traditional-harmony synchronization marker");
  assert(record(71).chronologyNote.includes("John the Baptist’s arrest"),"the Baptist-arrest transition note is missing from record 71");
  assert(record(96).relationships.some((rel)=>rel.targetRecordId===recordId(148))&&record(148).relationships.some((rel)=>rel.targetRecordId===recordId(96)),"the two Lord’s Prayer records are not cross-linked");
  assert(record(216).unresolvedCluster==="judas-death-accounts"&&record(216).chronologyNote.includes("distinct accounts")&&record(216).scripturePassages.some((p)=>p.displayLabel.startsWith("Matthew 27"))&&record(216).scripturePassages.some((p)=>p.displayLabel.startsWith("Acts 1")),"record 216 does not preserve the distinct Matthew and Acts accounts");
  assert(lifeOfJesusRecords.every((r)=>!r.catholicClassifications.includes("liturgical-commemoration")||LITURGICAL_ALLOWLIST.has(r.sourceEntryNumber)),"a devotional association was automatically mislabeled as liturgical");
  assert(Array.from({length:30},(_,i)=>143+i).every((n)=>record(n).unresolvedCluster==="late-ministry-order"&&(n===143||n===163||record(n).parentStopId===recordId(n<163?143:163))),"late-ministry-order is not shared and nested under the chapter 11/12 umbrella stops");
  assert(Array.from({length:14},(_,i)=>193+i).every((n)=>record(n).unresolvedCluster==="upper-room-order"&&(n===194||record(n).parentStopId===recordId(194))),"upper-room-order is not shared and nested under record 194");
  assert(Array.from({length:11},(_,i)=>230+i).every((n)=>record(n).unresolvedCluster==="passion-harmony"&&record(n).parentStopId===recordId(229)&&record(n).chronologyConfidence==="traditional-harmony"&&record(n).sequenceBasis==="traditional-harmony"&&record(n).chronologyNote==="Gospel-internal order is explicit; the displayed cross-Gospel sequence is a traditional Passion harmony."),"records 230–240 do not preserve the required traditional Passion harmony qualification");
  assert(Array.from({length:14},(_,i)=>251+i).every((n)=>record(n).unresolvedCluster==="easter-morning-order"&&(n===251||record(n).parentStopId===recordId(251))),"easter-morning-order is not shared and nested under record 251");
  assert(record(251).summary==="The Resurrection of Jesus is doctrinally certain. The Gospels proclaim it through the empty tomb and appearances of the risen Lord; they do not narrate the instant of Resurrection as an observed scene.","record 251 does not contain the approved COPY-RESURRECTION opening");
  assert(lifeOfJesusStops.every((s,i)=>s.stopNumber===i+1),"visible stop numbers are not contiguous");
  assert(lifeOfJesusStops.every((s)=>!s.parentStopId),"a visible stop is also marked as a child");
  assert(!lifeOfJesusRecords.some((r)=>/\bthe Jews\b.{0,40}\b(killed|rejected|demanded|condemned|crucified|betrayed)\b/i.test(r.summary)),"a summary uses collective Passion-era blame language");
  if(errors.length){for(const error of errors)console.error(`- ${error}`);process.exitCode=1;return;}
  console.log(`Validated ${lifeOfJesusRecords.length} records, ${lifeOfJesusStops.length} stops, ${lifeOfJesusChapters.length} chapters, and ${lifeOfJesusEras.length} eras.`);
}

if(process.argv[2]==="--generate") {
  const source=process.argv[3]; if(!source) throw new Error("Usage: validate-life-of-jesus.mjs --generate <source-markdown>"); generate(path.resolve(source));
} else { await validate(); }
