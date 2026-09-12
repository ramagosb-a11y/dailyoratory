import scripturePlan from "./massScripturePlan.json" with { type: "json" };
export interface MassJourneyLesson {
    id: string;
    title: string;
    chapter: string;
    parts: string[];
    see: string;
    meaning: string;
    participation: string;
    prayer: string;
    notice: string;
    girm: string;
    ccc?: string;
}
export const massChapters = [
    ["before-mass", "Before Mass"], ["introductory-rites", "Introductory Rites"], ["liturgy-of-the-word", "Liturgy of the Word"], ["liturgy-of-the-eucharist", "Liturgy of the Eucharist"], ["communion-rite", "Communion Rite"], ["concluding-rites", "Concluding Rites"], ["after-mass", "After Mass"]
] as const;
export const massJourney: MassJourneyLesson[] = [
    {
        "id": "prepare",
        "title": "Prepare your heart",
        "chapter": "before-mass",
        "parts": [
            "before-mass-preparation"
        ],
        "see": "A quiet church, an altar prepared for worship, and people gathering with different stories and needs. Before anything is said aloud, there is room to become attentive.",
        "meaning": "You are not arriving at a performance. At Mass, Christ gathers His Church into His offering to the Father. Preparation does not mean producing a perfect mood: fatigue, distraction, grief, and gratitude can all be brought honestly into prayer. Notice the altar, where the Eucharistic sacrifice will be celebrated, and the ambo, where Scripture will be proclaimed. The tabernacle reserves the Blessed Sacrament; it is not simply a decorative box. These places are related, but they are not interchangeable. The building helps direct attention beyond itself toward the living God.",
        "participation": "Arrive a little early when possible. Silence your phone, find an accessible seat, and bring one intention. Ask an usher if you need help. Follow reverent local customs as your health permits; a visitor may simply sit quietly and observe.",
        "prayer": "Lord Jesus, gather my scattered attention. Receive my gratitude, my burdens, and my questions. Teach me to worship with Your Church. Amen.",
        "notice": "Notice where the altar, ambo, and tabernacle are, and how a brief silence changes your attention.",
        "girm": "27–28, 45, 295–315"
    },
    {
        "id": "entrance",
        "title": "Gathered in Christ",
        "chapter": "introductory-rites",
        "parts": [
            "entrance-chant",
            "sign-of-the-cross-and-greeting"
        ],
        "see": "The assembly stands as the ministers enter. The altar is reverenced; the priest leads the Sign of the Cross and greets the gathered people.",
        "meaning": "The entrance is more than the arrival of the person who will speak. People who came separately begin to act as one worshipping body. The Sign of the Cross places the whole celebration within the life of the Father, Son, and Holy Spirit and recalls the gift of Baptism. The priest presides in Christ's name, but the baptized are not an audience. Their listening, singing, responses, and inward offering are genuine participation. The altar receives particular reverence because of its relationship to Christ and the sacrifice celebrated there.",
        "participation": "Stand if you are able and join the entrance song rather than waiting for something more important to begin. Make the Sign of the Cross attentively. If the responses are unfamiliar, listen without embarrassment; understanding grows through returning.",
        "prayer": "Triune God, bring us together in faith and charity. Let my voice and heart join the prayer of Your people. Amen.",
        "notice": "Notice the altar being reverenced and how the opening greeting invites a response from the whole assembly.",
        "girm": "46–50, 120–124"
    },
    {
        "id": "penitential",
        "title": "Ask for mercy",
        "chapter": "introductory-rites",
        "parts": [
            "penitential-act",
            "kyrie"
        ],
        "see": "The congregation acknowledges sin and asks for mercy. Depending on the approved form used, words and gestures differ; the Kyrie may be included within the Penitential Act or follow it.",
        "meaning": "The Church approaches the holy mysteries with honesty, not self-sufficiency. Repentance recognizes our need for God's mercy without making despair the center of worship. Kyrie is Greek for Lord; the ancient invocation expresses both appeal and trust. This beginning can renew sorrow for sin, but the priest's concluding prayer here is not sacramental absolution and does not replace Confession. On some Sundays, especially in Easter Time, a sprinkling with blessed water may replace the Penitential Act as a remembrance of Baptism. The underlying invitation remains a return to God.",
        "participation": "Bring one real failure before God without dwelling anxiously on a catalogue of faults. Join the form used in your parish and avoid judging another person's gestures. If you need sacramental reconciliation, make a separate plan to seek Confession.",
        "prayer": "Merciful Lord, give me honest repentance and confidence in Your goodness. Heal what sin has wounded and lead me back to You. Amen.",
        "notice": "Listen for the different ways the Church asks for mercy and remember that mercy invites a changed life.",
        "girm": "51–52"
    },
    {
        "id": "gloria",
        "title": "Give glory to God",
        "chapter": "introductory-rites",
        "parts": [
            "gloria"
        ],
        "see": "On days when it is prescribed, the people sing or recite the Gloria. The assembly's attention turns toward praise of the Father, the Son, and the Holy Spirit.",
        "meaning": "The movement from repentance to praise is not a dismissal of sin but a recognition that God's glory and mercy are greater than our failures. Praise gives God attention for who He is, not only for what we hope to receive. This hymn belongs to the Church's prayer, not to a musical interlude between more serious actions. Its presence also teaches the rhythm of the liturgical year. It is used on Sundays outside Advent and Lent, on solemnities and feasts, and on particular more solemn celebrations. Its absence on another day is not a missing part that must be supplied.",
        "participation": "Join the words or listen attentively if you do not yet know them. Let the congregation's praise carry you when your feelings are flat. A strong singing voice is not required for sincere participation; avoid treating prayer as a performance to evaluate.",
        "prayer": "God of glory, free me from making myself the center. Teach me the joy of praising You with a grateful heart. Amen.",
        "notice": "Notice whether the Gloria is present and connect that choice with the season or celebration.",
        "girm": "53"
    },
    {
        "id": "collect",
        "title": "Let our prayers become one",
        "chapter": "introductory-rites",
        "parts": [
            "collect"
        ],
        "see": "The priest invites the people to pray. A brief silence follows before he speaks the Collect with hands extended, and the assembly answers with its Amen.",
        "meaning": "Collect is the name of the opening prayer that gathers the intentions of the faithful and expresses the character of the celebration. Its silence is not dead space or a pause while a book is found. It gives each person time to become aware of standing before God and to bring a need into the common prayer. The priest speaks on behalf of the gathered Church; the people participate by listening and making the prayer their own. Often the prayer asks for a particular grace associated with the season or saint being celebrated. It teaches us what to desire, not merely how to obtain what we already want.",
        "participation": "Use the silence to name an intention simply. Then listen to the actual request being made rather than continuing a separate private prayer. Join the Amen as your assent. You can reflect on an unfamiliar word afterward without losing the whole prayer.",
        "prayer": "Father, receive the prayers I can express and those I cannot. Shape my desires through the prayer of Your Church. Amen.",
        "notice": "Listen for the particular grace requested in the Collect and carry that request into the rest of Mass.",
        "girm": "54"
    },
    {
        "id": "readings",
        "title": "Listen, then answer",
        "chapter": "liturgy-of-the-word",
        "parts": [
            "first-reading",
            "responsorial-psalm"
        ],
        "see": "A lector proclaims the First Reading at the ambo. The Responsorial Psalm follows, usually led by a psalmist or cantor, with the assembly joining the response.",
        "meaning": "The Church receives Scripture as God's word addressed to His people, not simply as historical information. Readings come from the Church's lectionary, an ordered selection for the seasons and celebrations. The First Reading is often from the Old Testament; during Easter Time it is ordinarily from Acts. The psalm is itself Scripture and a response to the word just heard. Its language makes room for praise, sorrow, repentance, and trust. You do not have to force an immediate explanation from every sentence. Attentive listening allows a word or image to remain with you while the rest of the liturgy unfolds.",
        "participation": "Sit as you are able and listen to the proclamation. A missal or reading aid may help, but you need not keep your eyes on a screen. Join the psalm response and resist the pressure to remember everything. Bring questions to later study.",
        "prayer": "Lord, open my ears to Your word. Teach me to answer with trust, even when I do not yet understand. Amen.",
        "notice": "Notice a phrase in the psalm that gives words to something you have been carrying in your own heart.",
        "girm": "55–61"
    },
    {
        "id": "acclamation",
        "title": "Receive the apostolic witness",
        "chapter": "liturgy-of-the-word",
        "parts": [
            "second-reading",
            "gospel-acclamation"
        ],
        "see": "On Sundays and solemnities a Second Reading normally follows the psalm. Afterward the assembly rises, when able, to welcome the Gospel with the prescribed acclamation.",
        "meaning": "The Second Reading usually brings the teaching of the apostles through their letters or the Book of Revelation. It may follow a continuous sequence from one Sunday to the next, so it need not share an obvious theme with the First Reading and Gospel. The Church learns through that sustained encounter, not only through passages that immediately feel familiar. The Gospel Acclamation then changes the posture of attention: the people welcome the Lord who speaks in the Gospel. Alleluia is replaced by another prescribed acclamation during Lent. Weekday Mass usually has one reading before the Gospel; this is a normal form of the liturgy, not an incomplete version.",
        "participation": "Listen for the invitation to faith, hope, or charity in the apostolic reading. Stand for the acclamation if able and sing with the assembly. If you cannot stand, attentive listening remains real participation.",
        "prayer": "Jesus, form my mind through the apostolic faith. Make me ready to hear Your Gospel and follow where it leads. Amen.",
        "notice": "Notice how standing and singing prepare the assembly to receive the Gospel with particular reverence.",
        "girm": "57–63"
    },
    {
        "id": "gospel",
        "title": "Hear Christ in the Gospel",
        "chapter": "liturgy-of-the-word",
        "parts": [
            "gospel"
        ],
        "see": "The deacon, or the priest when there is no deacon, proclaims the Gospel. The people stand if able; candles or incense may accompany its proclamation on more solemn occasions.",
        "meaning": "The Gospel holds a distinctive place within the Liturgy of the Word because it announces the saving words and deeds of Jesus Christ. The minister is not acting a part in a drama. Through the Church's proclamation, the faithful encounter the Gospel as a living call to faith and conversion. Reverence for the book is directed toward the word it bears; the physical object is not worshipped. The small signs of the cross on forehead, lips, and breast express a desire to receive that word in thought, speech, and heart. Not every Mass uses incense or a procession with candles, and those differences do not diminish the Gospel.",
        "participation": "Turn your attention toward the ambo. Join the responses and gestures as you learn them, without anxiety about unfamiliar words. Ask what Christ reveals and what response He invites. Keep listening even when a passage challenges your expectations.",
        "prayer": "Lord Jesus, let Your Gospel shape my thoughts, my words, and my heart. Give me courage to answer Your call. Amen.",
        "notice": "Notice a word or action of Jesus that asks something concrete of you, rather than only confirming what you already think.",
        "girm": "60, 133–134"
    },
    {
        "id": "homily",
        "title": "Let the word reach your life",
        "chapter": "liturgy-of-the-word",
        "parts": [
            "homily"
        ],
        "see": "The people sit and the priest or deacon preaches. He explains some aspect of the readings or another text of the day's liturgy in relation to the mystery being celebrated.",
        "meaning": "The homily belongs to the liturgy and serves the faith of the gathered people. It is not simply a lecture added to worship or an occasion to display the preacher's personality. It connects God's word and the liturgical celebration with Christian living. The preacher's abilities vary, but your prayerful listening need not depend on finding every sentence memorable. On Sundays and holy days of obligation a homily is required, except for a grave reason; it is also strongly recommended on other occasions. If an explanation leaves you confused, you can return to the readings or ask a respectful question later. Faith can seek understanding without turning worship into an argument.",
        "participation": "Listen for one true invitation to receive, repent, serve, or hope. Avoid comparing every preacher with your favorite speaker. A short period of silence after the homily gives the teaching room to settle before the assembly responds together.",
        "prayer": "Holy Spirit, help me receive what is true and good. Give our preachers wisdom, and give me a teachable heart. Amen.",
        "notice": "Notice one connection between the proclaimed word and an ordinary decision you will face this week.",
        "girm": "65–66"
    },
    {
        "id": "creed-intercessions",
        "title": "Believe with the Church; pray for the world",
        "chapter": "liturgy-of-the-word",
        "parts": [
            "creed",
            "universal-prayer"
        ],
        "see": "On Sundays and solemnities the assembly professes the faith. In the Universal Prayer, intentions are offered for the Church, the world, people in difficulty, and the local community.",
        "meaning": "The Creed gives a shared voice to the faith received through Baptism. It is more than an individual statement about how strongly one feels at that moment. The believer stands within the Church's confession of the Father, Son, and Holy Spirit. Difficult words can become invitations to study rather than reasons to withdraw. The Universal Prayer then turns belief outward in intercession. We pray beyond our own needs because the life of the Church is ordered toward charity and the salvation of the world. Different approved forms of the Creed may be used in appropriate circumstances; the Creed is not ordinarily part of every weekday Mass.",
        "participation": "Join the profession with attention and follow the prescribed reverence during the words concerning the Incarnation. If you are still exploring Catholic faith, listen respectfully without feeling pressured to profess what you do not yet believe. Bring specific people into the petitions silently.",
        "prayer": "Father, deepen my faith and widen my love. Teach me to remember those whose suffering I might otherwise overlook. Amen.",
        "notice": "Notice how the petitions carry the assembly's attention from its own concerns to the needs of the wider world.",
        "girm": "67–71"
    },
    {
        "id": "gifts",
        "title": "Bring the gifts; offer your life",
        "chapter": "liturgy-of-the-eucharist",
        "parts": [
            "preparation-of-the-gifts",
            "prayer-over-the-offerings"
        ],
        "see": "The altar is prepared, and bread and wine are placed upon it. Members of the faithful may bring the gifts forward. The priest prepares them and prays over the offerings.",
        "meaning": "These simple gifts belong to creation and human work. They are not yet the consecrated Eucharist. Their preparation invites the baptized to bring their own lives into Christ's offering: honest work, care for family, gratitude, weakness, and freely chosen acts of love. Giving money for the Church and the poor is related to charity, but a donation does not purchase grace or make a person more worthy than another. The priest's washing of hands expresses a desire for interior purification. The Prayer over the Offerings completes this preparation and leads into the Eucharistic Prayer. Do not confuse the presentation of the gifts with the consecration that follows.",
        "participation": "Offer an ordinary part of your life rather than searching for a grand gesture. Join the assembly's response and Amen. If there is a collection, contribute freely according to your means; participation never depends on what you can afford.",
        "prayer": "Father, receive my work, my gratitude, and my need for mercy. Unite the offering of my life to Your Son. Amen.",
        "notice": "Notice how ordinary bread and wine are treated with care before the Eucharistic Prayer begins.",
        "girm": "72–77, 139–146"
    },
    {
        "id": "preface",
        "title": "Lift up your heart",
        "chapter": "liturgy-of-the-eucharist",
        "parts": [
            "preface",
            "sanctus"
        ],
        "see": "The priest begins the Eucharistic Prayer with a dialogue of thanksgiving. He proclaims the Preface; the whole assembly joins the Sanctus, the hymn of God's holiness.",
        "meaning": "Eucharist means thanksgiving. The Preface names reasons for praise connected with Christ's saving work, the season, or the celebration. It is not an introduction to the real prayer: the Eucharistic Prayer has already begun. The Sanctus joins the Church's earthly worship to the praise of heaven. This does not mean that angels must become visible or that you must feel something extraordinary. Faith receives a mystery that exceeds what the senses can show. The priest addresses the Father in the name of the whole people, and their responses and inward attention unite them to this prayer. The next teaching screens explain elements of this single continuous action, not separate rituals.",
        "participation": "Answer the opening dialogue thoughtfully and listen to the particular reason for thanksgiving. Join the Sanctus as prayer rather than as a musical interruption. Follow the posture directed by your parish, remaining seated whenever health or mobility requires it.",
        "prayer": "Holy God, raise my heart beyond distraction and self-concern. Let thanksgiving open me to the gift of Your Son. Amen.",
        "notice": "Notice what the Preface thanks God for today and how the whole congregation then joins the praise.",
        "girm": "78–79"
    },
    {
        "id": "epiclesis",
        "title": "The Church invokes the Holy Spirit",
        "chapter": "liturgy-of-the-eucharist",
        "parts": [
            "epiclesis"
        ],
        "see": "Within the Eucharistic Prayer, the priest extends his hands over the gifts. The prayer invokes God's sanctifying action; its wording and structure depend on the Eucharistic Prayer being used.",
        "meaning": "Epiclesis means invocation. The Church asks the Father to send the Holy Spirit so that the gifts become Christ's Body and Blood and those who receive them may be united in Him. The Spirit's action is not magic summoned by a gesture. The Eucharist is Christ's gift entrusted to His Church, celebrated through the ordained ministry. In the Roman Canon the invocation is expressed differently from the explicit naming of the Spirit in other Eucharistic Prayers. Do not isolate one explanatory screen from the whole prayer or imagine that each gesture operates independently. The Church worships the Father through the Son in the Holy Spirit throughout the entire celebration.",
        "participation": "Watch the gesture without trying to manufacture a special sensation. Join the prayer inwardly and ask to become more receptive to God's sanctifying work. Bodily stillness can help, but a person who needs to move or sit is not excluded from reverent prayer.",
        "prayer": "Holy Spirit, make my heart receptive to Christ. Unite us in faith and charity as the Church celebrates this holy mystery. Amen.",
        "notice": "Notice the invocation within the whole Eucharistic Prayer, not as a separate action disconnected from thanksgiving and offering.",
        "girm": "79c, 147"
    },
    {
        "id": "consecration",
        "title": "Christ gives Himself",
        "chapter": "liturgy-of-the-eucharist",
        "parts": [
            "institution-narrative-and-consecration"
        ],
        "see": "The priest recounts the Lord's institution of the Eucharist and speaks the words of consecration. He shows the consecrated Host and then the chalice to the people and genuflects in adoration.",
        "meaning": "The Church teaches that, through the consecration, the whole substance of bread and wine becomes the Body and Blood of Christ, while their appearances remain. This change is called transubstantiation. The Eucharist is not merely an aid to remembering an absent Jesus. Christ is truly present, Body, Blood, Soul, and Divinity. The Mass does not crucify Him again: His one sacrifice is made sacramentally present. The priest acts in the person of Christ the Head, not by personal holiness or a private power. A photograph cannot show the change of substance; bread's and wine's sensible appearances remain. Bells and incense may mark the moment but do not cause the sacrament.",
        "participation": "Adore with faith and follow the local posture as you are able. A simple silent act of love is enough. Do not measure your participation by emotion, and do not mistake the stillness of others for the absence of prayer.",
        "prayer": "Jesus, truly present in the Eucharist, I adore You. Increase my faith and teach me to receive Your self-giving love with reverence. Amen.",
        "notice": "Notice the priest's reverence after each elevation and allow it to direct your attention to Christ rather than to spectacle.",
        "girm": "79d, 150–151",
        "ccc": "1374–1377"
    },
    {
        "id": "memorial",
        "title": "Remember and offer with Christ",
        "chapter": "liturgy-of-the-eucharist",
        "parts": [
            "anamnesis-and-offering"
        ],
        "see": "The people make the Memorial Acclamation, and the Eucharistic Prayer continues. The Church recalls Christ's saving Passion, Resurrection, and Ascension and offers the sacrifice to the Father.",
        "meaning": "Anamnesis means memorial or remembrance. In the liturgy, this is more than recalling a distant event in the mind: the Church celebrates the memorial Christ entrusted to her and participates sacramentally in His one sacrifice. Christ is the offering, and the Church is drawn into His self-gift. The baptized unite their lives to His without taking over the priest's distinct ministry. Offering yourself does not mean seeking injury or approving abuse. It means allowing love, repentance, service, and faithful endurance to be joined to Christ. These teaching divisions help you learn, but the priest does not stop the Eucharistic Prayer between them. Continue attending to the actual words being prayed.",
        "participation": "Join the acclamation, then listen to the priest's prayer rather than continuing unrelated devotions. Bring your work, relationships, and suffering into Christ's care. Ask for the grace to act with charity where an actual change is needed in your life.",
        "prayer": "Father, unite my small offering to the perfect gift of Your Son. Teach me to live in grateful, courageous love. Amen.",
        "notice": "Notice the shift from recalling Christ's saving work to offering and interceding within one continuous prayer.",
        "girm": "79e–f, 151",
        "ccc": "1362–1372"
    },
    {
        "id": "great-amen",
        "title": "One Church, one offering",
        "chapter": "liturgy-of-the-eucharist",
        "parts": [
            "intercessions-and-doxology"
        ],
        "see": "The Eucharistic Prayer includes intercessions for the living and the dead. At its conclusion, the priest raises the paten and chalice; a deacon, when present, may raise the chalice.",
        "meaning": "The prayer embraces more than the people in the building. It expresses communion with the Pope, the local bishop, the saints, the living, and the faithful departed. The place of these intercessions differs among Eucharistic Prayers; they are not always confined to one final section. Doxology means an expression of praise. The concluding doxology glorifies the Father through Christ, with Christ, and in Christ, in the unity of the Holy Spirit. The people's Great Amen is their assent to the whole Eucharistic Prayer. It is not an applause break or a signal that the congregation has only now become involved. Their participation has continued through listening, acclamations, reverence, and interior offering.",
        "participation": "Let the intercessions expand your prayer beyond familiar faces. Entrust the dead to God's mercy without trying to settle their destiny yourself. Join the final Amen with attention, whether it is sung or spoken. It can be simple and still be wholehearted.",
        "prayer": "Father, hold Your whole Church in charity. Remember the living and the departed, and draw us into the praise of Your glory. Amen.",
        "notice": "Notice that the final Amen belongs to the people and expresses their assent to the entire Eucharistic Prayer.",
        "girm": "79g–h, 149, 151"
    },
    {
        "id": "our-father",
        "title": "Pray as children of the Father",
        "chapter": "communion-rite",
        "parts": [
            "lords-prayer"
        ],
        "see": "The priest introduces the Lord's Prayer, and the people pray together. He then continues with a prayer for deliverance, followed by the congregation's concluding acclamation.",
        "meaning": "The Communion Rite prepares the faithful to receive the sacrament. The prayer Jesus taught places us before God as children who depend on His goodness. Asking for daily bread and forgiveness becomes especially searching as Communion approaches. We cannot ask to be united to Christ while deliberately refusing every movement toward charity. Forgiveness can involve a long process; it does not require denying a wrong, abandoning necessary boundaries, or pretending that trust has already been restored. At Mass, pray the Lord's Prayer with the congregation at its common pace. Local customs about hand gestures vary, and holding hands is not a universal requirement of the Roman Rite. Do not impose a gesture on another person.",
        "participation": "Join the words attentively and respect your neighbors' space. Let the petition for forgiveness reveal where you need God's help. If you are a visitor still learning the prayer, you can listen reverently; you do not need to imitate every local custom.",
        "prayer": "Father, nourish us, forgive us, and deliver us from evil. Teach me to live as Your child and to seek peace with others. Amen.",
        "notice": "Notice how the shared prayer prepares the Church for Communion through dependence on God and the desire for reconciliation.",
        "girm": "80–81"
    },
    {
        "id": "peace",
        "title": "Receive and offer Christ's peace",
        "chapter": "communion-rite",
        "parts": [
            "sign-of-peace"
        ],
        "see": "The priest prays for peace and unity. If the invitation is given, those nearby exchange a sign of peace appropriate to local custom, then return their attention to the altar.",
        "meaning": "The peace sought here is Christ's gift to His Church, not simply a friendly feeling created by the congregation. A restrained greeting expresses communion and charity as the faithful prepare to receive the Eucharist. It is not intended to become a social interval, a procession around the church, or a chance to greet everyone you know. The invitation to exchange a sign can be omitted; its absence does not mean that the Mass is incomplete. Nor is physical contact necessary to communicate peace. Illness, disability, cultural custom, or personal boundaries may make a nod or another respectful gesture more fitting. The unity being prayed for extends beyond the person beside you.",
        "participation": "Offer a simple, sincere gesture to those nearby if invited. Respect anyone who does not shake hands. Ask Christ for the grace to seek real reconciliation where possible after Mass, without using the gesture to pressure someone into contact or conversation.",
        "prayer": "Lord Jesus, grant Your Church peace and unity. Free my heart from resentment and guide my efforts toward truthful reconciliation. Amen.",
        "notice": "Notice how the exchange remains brief and directed toward the peace Christ gives, rather than interrupting the prayer of the Church.",
        "girm": "82, 154"
    },
    {
        "id": "lamb-of-god",
        "title": "Behold the Lamb of God",
        "chapter": "communion-rite",
        "parts": [
            "fraction-rite-and-lamb-of-god",
            "invitation-to-communion"
        ],
        "see": "The priest breaks the consecrated bread while the Lamb of God is sung or spoken. He later shows the Eucharist and invites the faithful to Communion; the people respond with humility.",
        "meaning": "Fraction means breaking. This action recalls the Lord's breaking of bread and expresses the unity of those who share the one Bread of life. Breaking the Host does not divide Christ into parts: He remains wholly present under each Eucharistic species and in every part after separation. A small particle is placed in the chalice as part of the rite. The invocation of the Lamb of God turns our attention toward Christ's mercy and His self-offering. The invitation to Communion holds together the greatness of the gift and our need for healing. It should not be treated as a declaration that anyone who feels sincere may receive regardless of the Church's sacramental discipline.",
        "participation": "Join the invocation and response reverently. Let humility become trust rather than self-contempt. Prepare to receive if properly disposed, or remain in prayer if you are not receiving. Both the act of adoration and the desire for conversion matter.",
        "prayer": "Jesus, Lamb of God, have mercy on us. Heal what is wounded within me and teach me to approach You in humility and trust. Amen.",
        "notice": "Notice the breaking of the Host as a sign of unity, while remembering that Christ Himself is not divided.",
        "girm": "83–84",
        "ccc": "1377"
    },
    {
        "id": "communion",
        "title": "Receive the living Christ",
        "chapter": "communion-rite",
        "parts": [
            "holy-communion"
        ],
        "see": "The faithful who are prepared approach the minister and receive Holy Communion. The Communion chant expresses spiritual union, joy, and the shared character of the procession.",
        "meaning": "Communion is union with Christ and His Church, not simply a sign of hospitality. Catholics receiving should be properly disposed, observe the Eucharistic fast, and ordinarily receive sacramental Confession first if conscious of grave sin. The usual fast is one hour before Communion; water and medicine do not break it, and the Church provides exceptions for the sick, elderly, and their caregivers. Visitors who are not Catholic ordinarily do not receive; exceptional cases are governed by Church law, not decided through this website. Receiving under the appearance of bread alone is receiving the whole Christ. Follow approved local practice, receive reverently, and consume the Host immediately in the minister's presence.",
        "participation": "If unsure whether to receive, speak privately with a priest before Mass. You are welcome to remain in your place and pray. Do not assume every parish invites noncommunicants forward for a blessing; ask about local guidance. Those unable to approach can request assistance.",
        "prayer": "Jesus, deepen my desire for communion with You. Prepare my heart in faith, repentance, and love, and guide me in the life of Your Church. Amen.",
        "notice": "Notice the reverence of receiving a gift from the minister rather than taking the Eucharist for yourself.",
        "girm": "85–87, 160–162",
        "ccc": "1385–1390"
    },
    {
        "id": "communion-silence",
        "title": "Let thanksgiving take root",
        "chapter": "communion-rite",
        "parts": [
            "silence-after-communion",
            "prayer-after-communion"
        ],
        "see": "After Communion, the Church may remain in sacred silence or sing a psalm or hymn of praise. The priest then leads the Prayer after Communion and the assembly answers Amen.",
        "meaning": "A quiet interval allows the gift received to be welcomed in faith. It is not necessary to fill every moment with many words or to check whether you feel sufficiently moved. Gratitude may be calm, distracted, joyful, or marked by sorrow. The Prayer after Communion gathers the Church's petition that the sacrament bear fruit in the lives of the faithful. It belongs to the liturgy and is distinct from optional private prayers that may be made afterward. Those who have not received sacramentally are still invited to pray, listen, and seek Christ. The Church's common prayer does not end when the last person returns to a pew.",
        "participation": "Follow the local posture with consideration for your health. Give thanks in a few sincere words or remain quietly attentive. Join any common song and the priest's concluding prayer rather than rushing to pack up. There is no required length or emotional intensity for your private thanksgiving.",
        "prayer": "Lord Jesus, let Your grace bear fruit in me. Teach me gratitude that becomes patience, generosity, and faithful love in ordinary life. Amen.",
        "notice": "Notice the distinction between personal thanksgiving and the Church's Prayer after Communion, and make room for both.",
        "girm": "88–89"
    },
    {
        "id": "blessing",
        "title": "Receive the blessing; accept the mission",
        "chapter": "concluding-rites",
        "parts": [
            "announcements",
            "blessing-and-dismissal"
        ],
        "see": "The community prepares to leave, but first receives a blessing and a dismissal. Brief announcements may connect the celebration with parish life.",
        "meaning": "The conclusion is not an afterthought. Having been nourished by word and sacrament, the Church is sent into the world. A blessing asks God to sustain the people in the life they are called to live. The dismissal gives direction to that life: the worship celebrated here bears fruit beyond the church doors. The priest gives the blessing; a deacon, when present, ordinarily gives the dismissal. On some occasions a more solemn form of blessing or a prayer over the people is used. These variations enrich the conclusion without changing its purpose. If another liturgical action immediately follows, the concluding rites may be omitted according to the rite.",
        "participation": "Stay attentive through the dismissal. Make the Sign of the Cross with the blessing if you are able, and join the people's response. A visitor can receive this moment respectfully without feeling pressure to imitate an unfamiliar gesture. Listen for a practical opportunity to serve, while remembering that announcements are not the center of the celebration.",
        "prayer": "Lord, let Your blessing take root in my choices. Send me with a peaceful heart and the courage to serve. Amen.",
        "notice": "Notice the difference between receiving a blessing and being sent with a responsibility.",
        "girm": "90, 166–170"
    },
    {
        "id": "going-forth",
        "title": "Carry Christ's peace beyond the doors",
        "chapter": "concluding-rites",
        "parts": [
            "recessional"
        ],
        "see": "The priest and other ministers reverence the altar and leave. The congregation may sing as the ministers process out.",
        "meaning": "The formal dismissal has sent the people forth. The departing procession is a visible transition from the gathered celebration to daily life, not a second sacrifice or a separate sacrament. The ministers' reverence for the altar recalls its place in the worship just celebrated. A closing hymn is customary in many parishes, but it should not be confused with the dismissal itself or treated as a universal requirement of the Roman Missal. Parish arrangements and musical customs vary. What remains is the call to live what has been celebrated: gratitude toward God, reconciliation with our neighbors, and service to those in need. The person beside you is not simply another attendee; the celebration has called you into communion and responsibility.",
        "participation": "Leave without rushing others or blocking an accessible route. Join the customary hymn if there is one. Make room for those who remain in prayer, and welcome someone who may be alone. If caring responsibilities require you to leave promptly, act with consideration rather than anxiety. The fruit of worship is not measured by who leaves last.",
        "prayer": "Jesus, walk with me into ordinary life. Make my first words after Mass generous, and my next decision faithful. Amen.",
        "notice": "Choose one small act of welcome or patience on your way out of church.",
        "girm": "90, 169",
        "ccc": "1397"
    },
    {
        "id": "thanksgiving",
        "title": "Live the Mass",
        "chapter": "after-mass",
        "parts": [
            "after-mass-thanksgiving"
        ],
        "see": "Some people remain quietly in church; others leave for family, work, or service. Thanksgiving continues in more than one setting.",
        "meaning": "A few moments of prayer after Mass can help you receive the gift with gratitude. This is an optional devotion, not an additional rite everyone must complete. There is no required feeling, private formula, or length of time. The sacramental celebration sends us toward a life of charity, not away from the needs of other people. Eucharistic communion strengthens our union with Christ and calls us to recognize Him in those who are poor or suffering. The weekly pattern of worship gradually forms the daily pattern of living: listening, offering, receiving, thanking, and serving. When prayer feels dry, a simple act of fidelity still matters. When you leave with joy, allow that joy to become kindness rather than remain a private experience.",
        "participation": "Thank God for one gift and name one concrete response. It might be an apology, patient care for a relative, support for someone in need, or time set aside for prayer. If you did not receive Communion, give thanks for the word you heard and continue seeking Christ with trust. Bring questions to a trusted priest or parish catechist as you keep learning.",
        "prayer": "Lord Jesus, let this celebration bear fruit in my life. Help me love the people You entrust to me and return with a grateful heart. Amen.",
        "notice": "Before your next Mass, recall one way this celebration changed what you did.",
        "girm": "88, 90",
        "ccc": "1391–1397"
    }
];
export interface MassJourneyStep extends MassJourneyLesson {
    scripture: { passageId: string; connection: string }[];
    artwork: {
        src: string;
        alt: string;
        width: number;
        height: number;
        caption: string;
    };
    sources: {
        label: string;
        href: string;
    }[];
}
const artworkDescriptions = [
    "A woman kneels quietly in a pew before Mass as other people gather in a sunlit church.",
    "A cross-bearer leads the priest toward the altar while the congregation stands.",
    "Parishioners bow their heads in repentance; one woman places her hand over her heart.",
    "A diverse congregation sings the Gloria in a warm, sunlit church.",
    "The priest prays with extended hands while an altar server holds the missal.",
    "A woman lector reads from the ambo as the seated congregation listens.",
    "A cantor leads the standing congregation in the Gospel Acclamation.",
    "The priest proclaims the Gospel at the ambo to a standing congregation.",
    "The priest preaches at the ambo while the people listen from their pews.",
    "Parishioners stand together with hands joined during the profession of faith.",
    "Parishioners present bread and wine to the priest near the altar.",
    "The priest extends his hands in thanksgiving at the altar before the standing assembly.",
    "The priest holds his hands over the bread and wine during the invocation of the Holy Spirit.",
    "The priest elevates the consecrated Host above the altar as the people adore.",
    "The priest continues the Eucharistic Prayer while the congregation prays attentively.",
    "The priest raises the chalice and paten, with the Host resting flat on the paten, at the concluding doxology.",
    "The congregation stands with the priest in prayer during the Lord's Prayer.",
    "Two parishioners exchange a restrained handshake as a sign of peace.",
    "The priest breaks the consecrated Host over the paten at the altar.",
    "A woman approaches the priest to receive Holy Communion reverently.",
    "A woman kneels in quiet thanksgiving after Communion.",
    "The priest raises his right hand to bless the gathered people.",
    "A cross-bearer and priest process toward the church's open exit after the dismissal.",
    "A man remains kneeling in thanksgiving while others leave the church."
];
export const massJourneySteps: MassJourneyStep[] = massJourney.map((lesson, i) => ({
    ...lesson,
    scripture: scripturePlan.filter(p => p.step === lesson.id).map(p => ({ passageId: p.id, connection: p.connection })),
    artwork: { src: "/images/mass/journey/" + lesson.id + ".webp", alt: artworkDescriptions[i], width: 1536, height: 1024, caption: "AI-generated illustrative scene. Church arrangements, vestments, and local customs vary." },
    sources: [
        { label: "General Instruction of the Roman Missal, " + lesson.girm, href: "https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_en.html" },
        { label: "USCCB: Order of Mass", href: "https://www.usccb.org/prayer-and-worship/the-mass/order-of-mass" },
        { label: "Catechism 1326: participation in heavenly worship", href: "https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_one/article_3/i_the_eucharist_source_and_summit_of_ecclesial_life.index.html" },
        ...(["prepare", "consecration", "lamb-of-god", "communion", "thanksgiving"].includes(lesson.id) ? [
            { label: "Catechism 796: Christ and the Church, His Bride", href: "https://www.vatican.va/content/catechism/en/part_one/section_two/chapter_three/article_9/paragraph_2_the_church_-_people_of_god,_body_of_christ,_temple_of_the_holy_spirit.html" },
            { label: "Catechism 1402–1405: the Eucharist and heavenly glory", href: "https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_one/article_3/vii_the_eucharist_pledge_of_the_glory_to_come.index.html" },
            { label: "Catechism 1617: covenant love and the Eucharist", href: "https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_three/article_7/i_marriage_in_gods_plan.index.html" }
        ] : []),
        ...(lesson.ccc ? [{ label: "Catechism of the Catholic Church, " + lesson.ccc, href: "https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_one/article_3/" + (parseInt(lesson.ccc) >= 1382 ? "vi_the_paschal_banquet.html" : "v_the_sacramental_sacrifice_thanksgiving_memorial_presence.html") }] : []),
        ...(lesson.id === "communion" ? [{ label: "Code of Canon Law, canons 912–919: reception and Eucharistic fast", href: "https://www.vatican.va/archive/cod-iuris-canonici/eng/documents/cic_lib4-cann879-958_en.html" }] : [])
    ]
}));
