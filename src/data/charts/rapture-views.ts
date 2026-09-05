import type { Era, Guide, Row } from '@components/charts/EventTimeline.astro';
import type { SeqRow } from '@components/charts/SequenceChart.astro';

/**
 * Shared axis for the rapture-timing chart. Positions are percentages.
 * The futurist seven-year framework is used because the four main rapture
 * positions are all defined against it.
 */
export const raptureEras: Era[] = [
  { label: 'Church age', sub: 'the present age', from: 0, to: 28, tone: 'plain' },
  { label: 'Tribulation\nfirst half', sub: '3½ years', from: 28, to: 52, tone: 'trib' },
  { label: 'Great Tribulation', sub: '3½ years', from: 52, to: 76, tone: 'trib-dark' },
  { label: 'Millennium', sub: '1,000 years', from: 76, to: 92, tone: 'mill' },
  { label: 'Eternal\nstate', from: 92, to: 100, tone: 'eternal' },
];

export const raptureGuides: Guide[] = [
  { at: 28, label: 'Daniel’s 70th\nweek begins' },
  { at: 52, label: 'Midpoint:\nabomination of desolation' },
  { at: 76, label: 'Second Coming\nArmageddon' },
  { at: 92, label: 'Great white\nthrone' },
];

export const raptureRows: Row[] = [
  {
    label: 'Pre-tribulation',
    sub: 'Darby · Scofield · Walvoord · Ryrie',
    spans: [
      { from: 0, to: 28, kind: 'earth' },
      { from: 28, to: 76, kind: 'heaven', label: 'with Christ: judgment seat, marriage supper of the Lamb' },
    ],
    markers: [
      { at: 28, kind: 'rapture', label: 'Rapture' },
      { at: 76, kind: 'return', label: 'Returns with his saints' },
    ],
  },
  {
    label: 'Mid-tribulation',
    sub: 'Harrison · Archer · Buswell',
    spans: [
      { from: 0, to: 52, kind: 'earth' },
      { from: 52, to: 76, kind: 'heaven', label: 'with Christ' },
    ],
    markers: [
      { at: 52, kind: 'rapture', label: 'Rapture at the 7th trumpet' },
      { at: 76, kind: 'return', label: 'Return' },
    ],
  },
  {
    label: 'Pre-wrath',
    sub: 'Rosenthal · Van Kampen · Kurschner',
    spans: [
      { from: 0, to: 68, kind: 'earth' },
      { from: 68, to: 76, kind: 'wrath' },
    ],
    markers: [
      { at: 68, kind: 'rapture', label: 'Rapture at the 6th seal' },
      { at: 76, kind: 'return', label: 'Return' },
    ],
  },
  {
    label: 'Post-tribulation',
    sub: 'Ladd · Gundry · Moo',
    spans: [{ from: 0, to: 76, kind: 'earth', label: 'church endures the tribulation, kept through it' }],
    markers: [
      { at: 76, kind: 'rapture', label: 'Rapture' },
      { at: 76, kind: 'return', label: 'Return: one event' },
    ],
  },
  {
    label: 'Partial rapture',
    sub: 'Govett · Lang · Pember',
    spans: [
      { from: 0, to: 28, kind: 'earth' },
      { from: 28, to: 76, kind: 'earth-dashed', label: 'unwatchful believers remain to be purified' },
    ],
    markers: [
      { at: 28, kind: 'rapture', label: 'Watchful believers taken' },
      { at: 76, kind: 'return', label: 'Return' },
    ],
  },
];

/** The four millennial schemes, each carving up history its own way. */
export const millennialRows: SeqRow[] = [
  {
    label: 'Dispensational\npremillennialism',
    sub: 'Walvoord · Ryrie · Pentecost · MacArthur',
    segments: [
      { label: 'Church age', sub: 'Israel and church distinct', width: 3, tone: 'earth' },
      { label: 'Tribulation', sub: '7 years', width: 2, tone: 'trib' },
      { label: 'Millennium', sub: 'Christ reigns from Jerusalem', width: 3.5, tone: 'mill' },
      { label: 'Eternal state', width: 1.5, tone: 'eternal' },
    ],
    markers: [
      { at: 1, kind: 'rapture', label: 'Rapture' },
      { at: 2, kind: 'return', label: 'Second Coming' },
      { at: 3, kind: 'judgment', label: 'Great white throne' },
    ],
  },
  {
    label: 'Historic\npremillennialism',
    sub: 'Irenaeus · Justin · Ladd · Mounce · Piper',
    segments: [
      { label: 'Church age', sub: 'ends in tribulation; church present', width: 5, tone: 'earth' },
      { label: 'Millennium', sub: 'Christ reigns on earth', width: 3.5, tone: 'mill' },
      { label: 'Eternal state', width: 1.5, tone: 'eternal' },
    ],
    markers: [
      { at: 1, kind: 'return', label: 'Return and rapture' },
      { at: 2, kind: 'judgment', label: 'Final judgment' },
    ],
  },
  {
    label: 'Amillennialism',
    sub: 'Augustine · Hoekema · Riddlebarger · Beale',
    segments: [
      { label: 'Church age is the Millennium', sub: 'Christ reigns from heaven; Satan bound', width: 7.5, tone: 'mill' },
      { label: 'Revolt', sub: 'Satan loosed', width: 1, tone: 'trib-dark' },
      { label: 'Eternal state', width: 1.5, tone: 'eternal' },
    ],
    markers: [{ at: 2, kind: 'return', label: 'Return, resurrection, judgment' }],
  },
  {
    label: 'Postmillennialism',
    sub: 'Edwards · Warfield · Boettner · Gentry',
    segments: [
      { label: 'Church age', sub: 'gospel advances', width: 3, tone: 'earth' },
      { label: 'Golden age: the Millennium', sub: 'nations discipled, long era of peace', width: 5, tone: 'mill' },
      { label: 'Revolt', width: 0.6, tone: 'trib-dark' },
      { label: 'Eternal state', width: 1.4, tone: 'eternal' },
    ],
    markers: [{ at: 3, kind: 'return', label: 'Return and judgment' }],
  },
];
