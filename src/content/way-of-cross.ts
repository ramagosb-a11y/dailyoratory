export type Station = {
  number: number;
  roman: string;
  title: string;
  scriptureReferences: string[];
  scriptureText?: string;
  scriptureSource?: string;
  traditionNote?: string;
  meditation: string;
  prayer: string;
  artwork: string;
  imageAlt: string;
};

export const openingPrayer =
  "Lord Jesus Christ, I desire to walk with You on the way to Calvary. Quiet my heart and draw me into the mystery of Your Passion. Let me see not only what You suffered, but the love with which You suffered it. Show me my sins without despair, Your mercy without limit, and Your Cross as the path that leads to life. Jesus, I trust in You. Lead me along the Way of the Cross. Amen.";

export const closingPrayer =
  "Lord Jesus Christ, I have walked with You from judgment to the tomb. May the memory of Your Passion remain within me. When I suffer, keep me near Your Cross. When I sin, lead me quickly back to Your mercy. When I encounter another person's suffering, teach me to love. Let Your Cross shape the way I live, forgive, serve and hope. Jesus, crucified and risen, I trust in You. Amen.";

const titles = [
  "Jesus Is Condemned to Death",
  "Jesus Takes Up His Cross",
  "Jesus Falls the First Time",
  "Jesus Meets His Blessed Mother",
  "Simon of Cyrene Helps Jesus",
  "Veronica Wipes the Face of Jesus",
  "Jesus Falls the Second Time",
  "Jesus Meets the Women of Jerusalem",
  "Jesus Falls the Third Time",
  "Jesus Is Stripped of His Garments",
  "Jesus Is Nailed to the Cross",
  "Jesus Dies on the Cross",
  "Jesus Is Taken Down from the Cross",
  "Jesus Is Laid in the Tomb",
] as const;

const dailyMeditations = [
  "Jesus stands before Pilate in silence. He is innocent, yet He accepts a sentence He does not deserve. Christ remains free because no one can take away His love. Think of the times you have been misunderstood or judged, and of the times your own judgment has wounded another. Jesus places Himself entirely into the Father's hands.",
  "The Cross is placed upon shoulders already torn by scourging. Jesus knows where this road ends, yet He embraces the next step. There are crosses we would never choose: illness, grief, disappointment, loneliness, failure and responsibilities that seem too heavy. Christian surrender does not pretend suffering is pleasant; it discovers that Christ meets us inside it.",
  "Jesus falls beneath the Cross. For a moment, the One through whom all things were created lies upon the dust. We make promises and fail, begin again and fall again. Look at Jesus on the ground. He rises. Our falls do not have to become our destination.",
  "Mary sees her Son carrying the Cross. No speech is necessary. The eyes of Mother and Son meet, and a lifetime passes between them. Mary cannot remove the Cross from Jesus. She stays. Sometimes love means remaining beside those who suffer when we have no solution.",
  "Simon did not wake expecting to carry the Cross of Jesus. He was pulled from the crowd. Many acts of love arrive as interruptions. Someone needs us. Every burden carried in love can become an encounter with Christ.",
  "One woman steps out of the crowd. She cannot stop the execution or remove the Cross, but she can offer one small act of tenderness. Love often appears insignificant beside the world's suffering: a hand held, a meal delivered, a prayer whispered. No act of genuine love offered to Christ is small.",
  "Again Jesus falls. The road has not become easier simply because He rose the first time. Some temptations return and some wounds heal slowly. Holiness is not never falling; it is continually turning toward God. Christ rises again because love compels Him forward.",
  "Women along the road weep for Jesus, and Christ turns toward them. Even while suffering, Jesus remains concerned with their souls. The Passion is not merely something we observe with sadness. Christ asks us to allow His Cross to change us.",
  "Jesus falls near the summit. The destination is close, but His strength is nearly gone. Sometimes our hardest moments arrive when we thought we were almost finished. Weakness does not mean God has abandoned the journey. Grace can carry us when strength cannot.",
  "At Calvary even Jesus' garments are taken. Nothing remains. He who possessed everything allows Himself to possess nothing. The Cross exposes the one thing that remains when everything else disappears: love.",
  "Jesus stretches His arms upon the Cross. The hands that healed the sick are pierced; the feet that walked toward sinners are fixed to the wood. Yet love remains free. At the foot of the Cross, ask Christ to loosen the grudges that have taken root in your heart.",
  "Everything becomes still. The One who spoke creation into being falls silent. Jesus has given everything. Remain here. Do not rush toward Easter. Stand beneath the Cross and let yourself simply be loved by the One who loved you unto death.",
  "The Cross becomes empty. Jesus' body is placed into the arms of those who love Him. Every human grief can find a place here. The Mother of Sorrows understands the terrible silence of loss.",
  "The stone closes. The disciples see only an ending. We do not pretend that Good Friday does not hurt. We simply know that God has not finished His work. The Christian waits differently, trusting that suffering and death do not have the final word.",
];

const dailyPrayers = [
  "Jesus, when I am misunderstood, teach me Your patience. When I am tempted to condemn another, teach me mercy. Forgive the judgments I have made without love and help me place my reputation into Your hands. Amen.",
  "Jesus, I bring You the crosses I wish I did not have to carry. Keep me from bitterness and despair. Give me strength for today's burden and grace not to carry tomorrow's before it comes. Amen.",
  "Jesus, You know my weakness. When I fall into sin, discouragement or failure, keep me from remaining on the ground. Give me humility to repent, courage to rise, and trust in Your mercy. Amen.",
  "Jesus, through the sorrowful heart of Your Mother, teach me faithful love. Mary, help me remain near Jesus when discipleship is difficult and beside those who suffer when I cannot take their suffering away. Amen.",
  "Jesus, open my eyes to the people carrying heavy crosses around me. Free me from the desire always to remain comfortable or uninvolved. Give me generosity to help carry another's burden. Amen.",
  "Jesus, give me the courage of Veronica. When others turn away from suffering, help me draw near. Impress Your image upon my heart so that I may recognize Your face in those who are forgotten or wounded. Amen.",
  "Jesus, I grow tired of fighting the same weaknesses. Teach me patient perseverance. When I fall again, help me return to You again. Let Your mercy make me humble rather than hopeless. Amen.",
  "Jesus, do not let me merely feel sorrow for Your Passion while remaining unchanged. Give me true repentance and the grace to turn back to You with my whole heart. Amen.",
  "Jesus, when I feel I cannot continue, be my strength. When prayer is difficult, keep me faithful. Carry me when I cannot carry myself. Amen.",
  "Jesus, strip from my heart everything that keeps me from You. Free me from attachment to possessions, approval, status and control. Teach me to desire You above everything that passes away. Amen.",
  "Crucified Jesus, I place before You those who have wounded me and those whom I have wounded. Give me the grace to forgive. Bind my heart to Your Cross so that hatred and revenge have no home within me. Amen.",
  "Jesus Christ, Son of the living God, You loved me unto death. I place my life beneath Your Cross—my sins, fears, wounds, family, future and death itself. May I never be separated from Your love. Amen.",
  "Jesus, remember everyone who mourns today. Comfort those who have lost someone they love. Mary, Mother of Sorrows, remain beside those whose hearts are broken. Amen.",
  "Jesus, when I cannot see what You are doing, teach me to wait with faith. Into Your hands I place everything unfinished in my life. Give me hope in darkness and trust in silence. Amen.",
];

const alphonsusMeditations = [
  "Recall how Jesus was scourged and crowned with thorns, and how He was then unjustly condemned by Pilate to die on the Cross.",
  "Recall how the heavy Cross was laid upon Jesus' bruised shoulders. He accepts it meekly, because by that Cross He wills to redeem the world.",
  "Laboring under the weight of the Cross, Jesus slowly sets forth on the way to Calvary. His strength fails Him; He falls to the ground under the Cross.",
  "Recall the meeting between Son and Mother on the way to Calvary. What a sword of anguish must have pierced Mary's maternal heart.",
  "Recall how the soldiers seized Simon of Cyrene and forced him to help Jesus carry His Cross.",
  "Recall how Veronica, seeing Jesus so afflicted, offered Him her veil and received the image of His Divine Countenance.",
  "Recall how Jesus' strength failed a second time, and He fell upon the ground again.",
  "Recall how holy women of Jerusalem wept with compassion, and Jesus said: Do not weep for Me; weep for your children.",
  "Jesus, arriving exhausted at the foot of Calvary, falls for the third time. His weakness is extreme and the cruelty of His executioners excessive.",
  "Recall how Jesus arrived at the place of His Crucifixion and the soldiers tore His clothes from His bleeding Body.",
  "Recall how Jesus lies down upon His Cross and extends His arms to offer the sacrifice of His Life for our salvation.",
  "Recall how Jesus agonized for three hours, dying upon the Cross, and then handed over His Spirit.",
  "Recall how Joseph and Nicodemus took Jesus' body down from His Cross and laid Him in the arms of His stricken Mother.",
  "The Body of the beloved Son is taken from His Mother and laid in the tomb. The tomb is closed until the hour of His glorious Resurrection.",
];

const alphonsusPrayers = [
  "Adorable Jesus, it was not Pilate; it was my own sins that condemned You to death. Assist my soul on its journey to eternity.",
  "O Jesus, by the merit of Your Cross, grant me grace to accept meekly the difficulties in my life and to take up my cross and follow You.",
  "It was for my sins, my Jesus, that You bore the heavy burden of Your Cross. Let remembrance of these sufferings make me careful lest I fall into sin.",
  "My Jesus, by the compassion which You felt for Your Mother, have compassion on me. O Mary, afflicted Mother, intercede for me with your Son.",
  "O Lord Jesus, let me also bear Your Cross. Let me not shrink from suffering, but rejoice to be counted worthy of suffering for Your Name's sake.",
  "O Jesus, may remembrance of Your suffering move me to hatred for my sins and stir up in me a more fervent love for You.",
  "O Jesus, lying prostrate under the burden of my sins, let remembrance of Your sufferings make me hate my sins more and return to You.",
  "O Lord Jesus, I grieve for Your sufferings and for my sins which caused You to suffer. Let me mourn that I may be comforted.",
  "O Lord Jesus, forgive my frequent falls into sin and my slowness to rise and return again to You.",
  "Innocent Jesus, help me to put off every inordinate attachment to earthly things, so that I may give all my love to You.",
  "My crucified Jesus, bind my heart to Your Cross, and let it remain there always, never again to forsake You.",
  "O Jesus, I devoutly honor that Holy Cross upon which You loved me even unto death. From this time forward, let me live only for You.",
  "My crucified Jesus, bind my heart to Your Cross, and let it remain there always, never again to forsake You.",
  "O Jesus, lying buried in the tomb, call me too to rise in glory on the last day, to be forever united with You.",
];

const scriptureTexts = [
  "And it was the parasceve of the pasch, about the sixth hour, and he saith to the Jews: Behold your king. But they cried out: Away with him; away with him; crucify him. Pilate saith to them: Shall I crucify your king? The chief priests answered: We have no king but Caesar. Then therefore he delivered him to them to be crucified.",
  "And bearing his own cross, he went forth to that place which is called Calvary, but in Hebrew Golgotha.",
  "Surely he hath borne our infirmities and carried our sorrows: and we have thought him as it were a leper, and as one struck by God and afflicted. But he was wounded for our iniquities, he was bruised for our sins: the chastisement of our peace was upon him, and by his bruises we are healed.",
  "And Simeon blessed them, and said to Mary his mother: Behold this child is set for the fall, and for the resurrection of many in Israel, and for a sign which shall be contradicted; and thy own soul a sword shall pierce, that, out of many hearts, thoughts may be revealed. Now there stood by the cross of Jesus, his mother.",
  "And as they led him away, they laid hold of one Simon of Cyrene, coming from the country; and they laid the cross on him to carry after Jesus.",
  "And he shall grow up as a tender plant before him, and as a root out of a thirsty ground: there is no beauty in him, nor comeliness: and we have seen him, and there was no sightliness, that we should be desirous of him: despised, and the most abject of men, a man of sorrows, and acquainted with infirmity.",
  "All we like sheep have gone astray, every one hath turned aside into his own way: and the Lord hath laid on him the iniquities of us all.",
  "And there followed him a great multitude of people, and of women, who bewailed and lamented him. But Jesus turning to them, said: Daughters of Jerusalem, weep not over me; but weep for yourselves, and for your children. For if in the green wood they do these things, what shall be done in the dry?",
  "He was offered because it was his own will, and he opened not his mouth: he shall be led as a sheep to the slaughter, and shall be dumb as a lamb before his shearer, and he shall not open his mouth.",
  "The soldiers therefore, when they had crucified Jesus, took his garments, and they made four parts, to every soldier a part, and also his coat. Now the coat was without seam, woven from the top throughout. They said then one to another: Let us not cut it, but let us cast lots for it, whose it shall be.",
  "Where they crucified him, and with him two others, one on each side, and Jesus in the midst. And when they were come to the place which is called Calvary, they crucified him there; and the robbers, one on the right hand, and the other on the left.",
  "And it was almost the sixth hour; and there was darkness over all the earth until the ninth hour. And the sun was darkened, and the veil of the temple was rent in the midst. And Jesus crying out with a loud voice, said: Father, into thy hands I commend my spirit. And saying this, he gave up the ghost.",
  "Joseph of Arimathea, because he was a disciple of Jesus, but secretly for fear of the Jews, besought Pilate that he might take away the body of Jesus. He came therefore, and took the body of Jesus. And Nicodemus also came, bringing a mixture of myrrh and aloes. They took therefore the body of Jesus, and bound it in linen cloths, with the spices, as the manner of the Jews is to bury.",
  "Now there was in the place where he was crucified, a garden; and in the garden a new sepulchre, wherein no man yet had been laid. There, therefore, because of the parasceve of the Jews, they laid Jesus, because the sepulchre was nigh at hand. And Joseph laid him in his new tomb, which he had hewn in the rock; and he rolled a great stone to the door of the tomb.",
];

export const stations: Station[] = titles.map((title, index) => ({
  number: index + 1,
  roman: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV"][index],
  title,
  scriptureReferences: [
    ["John 19:14–16", "Matthew 27:22–26"], ["John 19:17"], [], ["Luke 2:34–35", "John 19:25–27"], ["Matthew 27:32"], [], [], ["Luke 23:27–31"], [], ["John 19:23–24", "Matthew 27:35"], ["John 19:18", "Luke 23:33"], ["Matthew 27:45–50", "John 19:28–30"], ["John 19:38–40"], ["John 19:41–42", "Matthew 27:59–60"],
  ][index],
  scriptureText: scriptureTexts[index],
  scriptureSource: "Douay-Rheims Bible, 1899 American Edition",
  traditionNote: [2, 3, 5, 6, 8].includes(index) ? "Traditional devotional station; not directly narrated as a complete event in the Gospel accounts." : undefined,
  meditation: dailyMeditations[index],
  prayer: dailyPrayers[index],
  artwork: `/images/way-of-cross/station-${String(index + 1).padStart(2, "0")}-${["condemned", "carries-cross", "first-fall", "meets-mary", "simon", "veronica", "second-fall", "women", "third-fall", "stripped", "nailed", "crucifixion", "taken-down", "tomb"][index]}.png`,
  imageAlt: `${title}, sacred artwork for the Way of the Cross`,
}));

export const alphonsusStations = stations.map((station, index) => ({
  ...station,
  meditation: alphonsusMeditations[index],
  prayer: alphonsusPrayers[index],
}));
