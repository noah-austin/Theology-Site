/**
 * Glossary terms. Keep definitions short and plain; link to entries for depth.
 * `see` is a site path (without the base prefix) to the entry that goes deeper.
 */
export interface GlossaryTerm {
  term: string;
  definition: string;
  /** Other glossary terms worth reading alongside this one. */
  related?: string[];
  /** Site-relative path of a fuller entry, e.g. `/timelines/rapture-and-tribulation-views/`. */
  see?: string;
}

const RAPTURE = '/timelines/rapture-and-tribulation-views/';
const APPROACHES = '/views-and-positions/four-approaches-to-revelation/';
const PAROUSIA = '/word-studies/parousia-apokalypsis-epiphaneia/';
const OLIVET = '/notes/olivet-discourse-outline/';

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: 'Abomination of desolation',
    definition:
      'A desecrating act in the temple foretold in Daniel 9:27, 11:31, and 12:11 and cited by Jesus in Matthew 24:15 as the signal that the great tribulation has begun. Futurists read it as a still-future act of the Antichrist; preterists tie it to events around AD 70.',
    related: ['Great Tribulation', 'Man of Lawlessness'],
    see: OLIVET,
  },
  {
    term: 'Amillennialism',
    definition:
      'The view that the "thousand years" of Revelation 20 is symbolic of the present church age, during which Christ reigns from heaven and Satan is restrained. Christ returns once, at the end, for resurrection, judgment, and the new creation.',
    related: ['Millennium', 'Premillennialism', 'Postmillennialism'],
    see: RAPTURE,
  },
  {
    term: 'Antichrist',
    definition:
      'In 1 and 2 John, anyone who denies that Jesus is the Christ come in the flesh. In wider usage, the end-times figure who opposes Christ, usually identified with the "man of lawlessness" (2 Thessalonians 2) and the beast from the sea (Revelation 13).',
    related: ['Beast', 'Man of Lawlessness'],
  },
  {
    term: 'Apocalyptic',
    definition:
      'A genre of Jewish and Christian writing that unveils heavenly realities and the end of history through visions, symbols, and numbers. Daniel, Zechariah, and Revelation are the biblical examples; the genre shapes how their imagery should be read.',
    related: ['Idealism', 'Preterism'],
    see: APPROACHES,
  },
  {
    term: 'Beast',
    definition:
      'Revelation 13 describes two beasts: one from the sea, a political power that blasphemes and persecutes, and one from the earth (later "the false prophet") that promotes worship of the first. The number 666 belongs to the first beast.',
    related: ['Antichrist', 'Mark of the beast'],
  },
  {
    term: 'Biblical theology',
    definition:
      'The discipline that traces themes as they unfold across the storyline of Scripture, book by book and covenant by covenant, rather than arranging them by topic.',
    related: ['Systematic theology', 'Hermeneutics'],
  },
  {
    term: 'Canon',
    definition:
      'The list of books recognized as inspired Scripture. From the Greek kanōn, "measuring rod": the rule by which doctrine is measured.',
  },
  {
    term: 'Christology',
    definition:
      'The doctrine of the person and work of Christ: his deity, humanity, the union of the two natures, and what he accomplished in his life, death, resurrection, and ascension.',
    related: ['Soteriology'],
  },
  {
    term: 'Covenant theology',
    definition:
      'A framework that reads Scripture through the covenants God makes with his people, seeing one people of God across both testaments and the church as the continuation of Israel. Typically paired with amillennial or postmillennial eschatology.',
    related: ['Dispensationalism', 'Amillennialism'],
  },
  {
    term: 'Day of the Lord',
    definition:
      'A prophetic phrase for the time when God intervenes decisively in judgment and salvation. In the prophets it can describe a near historical judgment; in the New Testament it points to Christ’s return (1 Thessalonians 5:2; 2 Peter 3:10). The pre-wrath view builds heavily on it.',
    related: ['Pre-wrath rapture', 'Second Coming'],
    see: RAPTURE,
  },
  {
    term: 'Dispensationalism',
    definition:
      'A system that divides history into distinct administrations ("dispensations") and keeps Israel and the church as separate peoples with separate promises. Classically paired with a pre-tribulation rapture and a literal future millennium.',
    related: ['Covenant theology', 'Pre-tribulation rapture', 'Premillennialism'],
    see: RAPTURE,
  },
  {
    term: 'Eisegesis',
    definition:
      'Reading a meaning into a text that is not there. The opposite of exegesis.',
    related: ['Exegesis'],
  },
  {
    term: 'Ecclesiology',
    definition:
      'The doctrine of the church: its nature, marks, government, ordinances, and mission.',
  },
  {
    term: 'Eschatology',
    definition:
      'The doctrine of last things: death, the intermediate state, Christ’s return, resurrection, judgment, and the eternal state. From the Greek eschatos, "last."',
    related: ['Millennium', 'Rapture', 'Second Coming'],
  },
  {
    term: 'Exegesis',
    definition:
      'Drawing the meaning out of a text by careful attention to its words, grammar, context, and setting. From the Greek for "to lead out."',
    related: ['Eisegesis', 'Hermeneutics'],
  },
  {
    term: 'Futurism',
    definition:
      'The approach to Revelation that reads most of the book (chapters 4 onward) as describing events still to come at the end of the age. The default approach of dispensationalism and of most premillennialists.',
    related: ['Preterism', 'Historicism', 'Idealism'],
    see: APPROACHES,
  },
  {
    term: 'Great Tribulation',
    definition:
      'Jesus’ phrase in Matthew 24:21 for an unequaled time of distress. Futurists identify it with the second half of Daniel’s seventieth week (three and a half years); the rapture views differ mainly on where the church is while it happens.',
    related: ['Tribulation', 'Seventieth week', 'Abomination of desolation'],
    see: RAPTURE,
  },
  {
    term: 'Hermeneutics',
    definition:
      'The principles by which texts are interpreted. Debates over eschatology are often debates over hermeneutics: how literally to take prophecy, and how the New Testament uses the Old.',
    related: ['Exegesis'],
  },
  {
    term: 'Historicism',
    definition:
      'The approach that reads Revelation as a map of church history from the apostles to the end, with the seals, trumpets, and bowls matching successive eras. Dominant among the Reformers; rare today.',
    related: ['Futurism', 'Preterism', 'Idealism'],
    see: APPROACHES,
  },
  {
    term: 'Idealism',
    definition:
      'The approach that reads Revelation as a symbolic portrait of the ongoing conflict between Christ and evil in every age, rather than a coded sequence of specific events.',
    related: ['Futurism', 'Preterism', 'Historicism'],
    see: APPROACHES,
  },
  {
    term: 'Imminence',
    definition:
      'The teaching that Christ could return at any moment, with no prophesied event required to happen first. A central argument for the pre-tribulation rapture; other views define imminence more loosely as "soon" or "unexpected."',
    related: ['Pre-tribulation rapture', 'Rapture'],
    see: RAPTURE,
  },
  {
    term: 'Justification',
    definition:
      'God’s legal declaration that a sinner is righteous in his sight, on the basis of Christ’s work and received through faith.',
    related: ['Sanctification', 'Soteriology'],
  },
  {
    term: 'Man of Lawlessness',
    definition:
      'Paul’s title in 2 Thessalonians 2:3 for a figure who will be revealed before the day of the Lord, exalt himself in God’s temple, and be destroyed at Christ’s coming. Usually identified with the Antichrist and the beast.',
    related: ['Antichrist', 'Beast', 'Abomination of desolation'],
  },
  {
    term: 'Mark of the beast',
    definition:
      'The mark on the right hand or forehead required for buying and selling in Revelation 13:16–18, set in deliberate contrast to the seal of God on his servants (7:3). Interpretations range from a literal future mark to a symbol of allegiance.',
    related: ['Beast'],
  },
  {
    term: 'Mid-tribulation rapture',
    definition:
      'The view that the church is caught up at the midpoint of Daniel’s seventieth week, identifying the "last trumpet" of 1 Corinthians 15:52 with the seventh trumpet of Revelation 11.',
    related: ['Rapture', 'Pre-tribulation rapture', 'Post-tribulation rapture'],
    see: RAPTURE,
  },
  {
    term: 'Millennium',
    definition:
      'The "thousand years" of Revelation 20:1–6 during which Satan is bound and the saints reign with Christ. Whether it is a future earthly kingdom, the present age, or a coming golden age is the dividing line between premillennial, amillennial, and postmillennial views.',
    related: ['Premillennialism', 'Amillennialism', 'Postmillennialism'],
    see: RAPTURE,
  },
  {
    term: 'Olivet Discourse',
    definition:
      'Jesus’ teaching on the Mount of Olives about the temple’s destruction and his coming, recorded in Matthew 24–25, Mark 13, and Luke 21. The key text behind most end-times timelines.',
    related: ['Great Tribulation', 'Abomination of desolation'],
    see: OLIVET,
  },
  {
    term: 'Parousia',
    definition:
      'Greek for "presence" or "arrival," used in the New Testament for Christ’s coming (Matthew 24:3; 1 Thessalonians 4:15). One of three main words for the return, alongside apokalypsis ("unveiling") and epiphaneia ("appearing").',
    related: ['Second Coming', 'Rapture'],
    see: PAROUSIA,
  },
  {
    term: 'Pneumatology',
    definition: 'The doctrine of the Holy Spirit: his person, deity, and work.',
  },
  {
    term: 'Post-tribulation rapture',
    definition:
      'The view that the church remains on earth through the tribulation and is caught up to meet Christ as he returns, so that the rapture and the second coming are one event.',
    related: ['Rapture', 'Pre-tribulation rapture', 'Premillennialism'],
    see: RAPTURE,
  },
  {
    term: 'Postmillennialism',
    definition:
      'The view that the gospel will progressively transform the world, producing an extended age of peace and righteousness (the millennium), after which Christ returns.',
    related: ['Millennium', 'Amillennialism', 'Premillennialism'],
    see: RAPTURE,
  },
  {
    term: 'Premillennialism',
    definition:
      'The view that Christ returns before a literal thousand-year reign on earth. Its dispensational form adds a distinct rapture of the church before the tribulation; its historic form keeps the church on earth through the tribulation.',
    related: ['Millennium', 'Dispensationalism', 'Post-tribulation rapture'],
    see: RAPTURE,
  },
  {
    term: 'Preterism',
    definition:
      'The approach that reads most of Revelation (and the Olivet Discourse) as fulfilled in the first century, especially in the fall of Jerusalem in AD 70. Partial preterists still expect a future bodily return of Christ; full preterists do not, and fall outside historic orthodoxy.',
    related: ['Futurism', 'Historicism', 'Idealism'],
    see: APPROACHES,
  },
  {
    term: 'Pre-tribulation rapture',
    definition:
      'The view that the church is caught up to Christ before Daniel’s seventieth week begins, and so is absent from the entire tribulation. Rests on imminence, the promise of being kept from "the hour of trial" (Revelation 3:10), and the church’s absence from Revelation 4–18.',
    related: ['Rapture', 'Imminence', 'Dispensationalism'],
    see: RAPTURE,
  },
  {
    term: 'Pre-wrath rapture',
    definition:
      'The view that the church endures the great tribulation but is caught up before God’s wrath (the day of the Lord) falls, placing the rapture between the sixth and seventh seals of Revelation, some time in the second half of the seventieth week.',
    related: ['Rapture', 'Day of the Lord', 'Great Tribulation'],
    see: RAPTURE,
  },
  {
    term: 'Rapture',
    definition:
      'The catching up of believers to meet Christ in the air (1 Thessalonians 4:17; the Latin rapio, "to seize," gives the English word). All orthodox views affirm it; they disagree about when it happens relative to the tribulation and whether it is distinct from the second coming.',
    related: ['Pre-tribulation rapture', 'Mid-tribulation rapture', 'Pre-wrath rapture', 'Post-tribulation rapture'],
    see: RAPTURE,
  },
  {
    term: 'Sanctification',
    definition:
      'The ongoing work of God’s Spirit making a justified believer actually holy in life and character.',
    related: ['Justification'],
  },
  {
    term: 'Second Coming',
    definition:
      'Christ’s bodily, visible return in glory to judge the living and the dead. Affirmed by every creed; the debates concern what precedes it and whether the rapture is a separate, earlier stage of it.',
    related: ['Parousia', 'Rapture', 'Millennium'],
    see: PAROUSIA,
  },
  {
    term: 'Seventieth week',
    definition:
      'The final "week" of years in Daniel 9:24–27. Futurists separate it from the first sixty-nine and read it as a still-future seven-year tribulation, split in half by the abomination of desolation. This is where the rapture views place their markers.',
    related: ['Tribulation', 'Great Tribulation', 'Abomination of desolation'],
    see: RAPTURE,
  },
  {
    term: 'Soteriology',
    definition:
      'The doctrine of salvation: election, atonement, calling, regeneration, faith, justification, sanctification, and glorification, and how they fit together.',
    related: ['Justification', 'Sanctification'],
  },
  {
    term: 'Systematic theology',
    definition:
      'The discipline that gathers what all of Scripture teaches on each topic and arranges it in an orderly, coherent whole.',
    related: ['Biblical theology'],
  },
  {
    term: 'Tribulation',
    definition:
      'In futurist schemes, the seven-year period of Daniel’s seventieth week that ends with Christ’s return. More generally, the suffering Jesus promised his followers in every age (John 16:33).',
    related: ['Great Tribulation', 'Seventieth week'],
    see: RAPTURE,
  },
];

export function sortedGlossary(): GlossaryTerm[] {
  return [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term));
}
