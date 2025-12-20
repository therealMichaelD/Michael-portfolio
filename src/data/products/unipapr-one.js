// src/data/products/unipapr-one.js
const unipaprOne = {
  id: 'unipapr-one',                      // unique so it won't collide
  title: 'UniPAPR',
  subtitle: 'Low-cost powered respirator for welders using standard helmets, batteries, and 3M filters.',
  href: '/products/unipapr-one',          // unique route for side-by-side testing
  tags: ['PAPR', 'Welding', 'Electronics', '3D Printing', 'Fluid Dynamics'],

  // Update these to match actual files in /public/unipapr/...
  heroImage: '/UnipaprLogo.png',
  gallery: [
    { src: '/UnipaprHero.png', caption: 'Welding with UniPAPR' },
    { src: '/Unipapr1.png', caption: 'In-Use Schematic' },
    { src: '/Unipapr2.png', caption: 'Helmet Assembly Schematic' },
    { src: '/Unipapr3.png', caption: 'Blower Assembly Schematic' },
    { src: '/Unipapr4.png', caption: 'Blower Assembly Schematic 2' },
    { src: '/Unipapr5.png', caption: 'Helmet Vent Solidworks' },
    { src: '/Unipapr6.png', caption: 'Blower Assembly Solidworks' },
    { src: '/Unipapr7.png', caption: 'Progression of Blower Assembly' },
  ],

  blocks: {
    overviewText:
      'UniPAPR is an affordable PAPR attachment for welders. It reuses an existing helmet and a common M18 battery with 3M filters. A compact blower+filter module routes clean air into the helmet to improve comfort and safety at a fraction of the cost.',

    // Right sidebar card for products
    atAGlance: [
      { k: 'Role', v: 'PM + HW design' },
      { k: 'Status', v: 'Prototype V5' },
      { k: 'Target Cost', v: '~$299 (w/o battery)' },
      { k: 'Filters', v: '3M particulate + organic vapor' },
    ],

    problemAudience: [
      { k: 'Problem',  v: 'Commercial PAPR helmets cost $1.3k–$2.2k+, limiting adoption despite fume risks.' },
      { k: 'Audience', v: 'Self-employed/hobbyist welders and small shops' },
    ],

    features: [
      'Drop-in blower+filter module, helmet ductwork',
      'Works with M18 batteries; quick-swap 3M filters',
      'Series/parallel blower options for pressure/flow',
      'Comfortable perceived airflow; reduced smell',
    ],

    howItWorks: [
      { k: 'Power',  v: 'M18 → DC-DC 18→24V to drive blowers' },
      { k: 'Airpath', v: 'Dual blowers → filters → helmet duct' },
      { k: 'Tuning', v: 'Filter area & blower topology tuned for pressure/flow' },
    ],

    skillsTools: [
      { k: 'Skills',   v: 'Fan curve & static pressure analysis, duct design, rapid prototyping, basic electronics, soldering, sewing' },
      { k: 'Tools',    v: 'SolidWorks (CAD), 3D printing, Multimeter, Particulate/flow checks, Hand tools' },
      { k: 'Hardware', v: 'M18 battery, DC-DC (18→24V), Dual blowers, 3M P100/organic vapor filters, helmet & ductwork' },
    ],

    architectureNotes: [
      'Dual-blower topology explored in series vs. parallel: series boosts pressure; parallel boosts free flow.',
      'Filter area increased (2→4) to reduce resistance and improve flow at operating point.',
      'Helmet duct path tuned to direct flow into breathing zone while keeping clear sight lines.',
      'Quick-swap filter design for maintenance and prolonged service life.',
    ],

    problem:
      'Self-employed and hobbyist welders often lack respiratory protection solutions that are affordable, convenient, and comfortable. Commercial PAPR helmets can cost $1,300–$2,200+, creating a barrier to adoption despite real health risks from welding fumes.',

    approach:
      'Lower the cost by leveraging what welders already own: their helmet and common tool batteries (M18). Use widely available 3M filters, a compact dual-blower architecture, and simple ductwork that drops into the helmet. Iterate on duct geometry, filter area, and blower configuration (series/parallel) to balance flow and static pressure.',

    keyWork: [
      'Iterated duct designs (V1–V3) to direct flow into the breathing zone without visual obstruction.',
      'Blower module prototypes scaling filters (2→4) and fans (1→2) in series/parallel to tune pressure/flow.',
      'Selected 3M particulate + organic vapor filters; designed for quick replacement.',
      'Integrated M18 battery with DC-DC (18V→24V) to drive blowers at the right operating point.',
      'Bench and field tests (shop environment) for smell reduction, comfort, and perceived air quality.',
    ],

    performance: [
      'Comfortable, continuous airflow with reduced perceived fumes during welding.',
      'Lower cost target versus commercial PAPRs while using standardized consumables (3M filters).',
      'Noise and weight kept reasonable via compact module and cloth routing; next revs to reduce further.',
    ],

    results: [
      'Users reported no smoke smell while UniPAPR was on vs. noticeable smell with a standard helmet.',
      'Achieved strong perceived airflow with improved comfort over long sessions.',
      'Target price point around ~$299 (without battery) to drive adoption among hobbyists/shops.',
    ],

    benchmarks: [
      { k: 'Target Cost', v: '~$299 (w/o battery)' },
      { k: 'Battery',     v: 'M18 (user-supplied)' },
      { k: 'Filters',     v: '3M particulate + organic vapor (P100 class)' },
      { k: 'Module',      v: 'Dual-blower with DC-DC 18→24V' },
    ],

    timeline: [
      'Concept & requirements — problem validation and cost target.',
      'Ductwork prototypes (V1–V3) — flow direction & helmet clearance.',
      'Blower module V1–V5 — filters (2→4), fans (1→2), series/parallel.',
      'Bench testing — flow & resistance checks.',
      'Field test — welder feedback and comfort evaluation.',
    ],

    risks: [
      'Overconfidence risk — clear guidance on capabilities & maintenance needs.',
      'Dirty filters reduce flow — add maintenance indicators & instructions.',
      'Noise/weight — continue optimization and enclosure damping.',
    ],

    collaborators: [
      { name: 'Andrew Wilson' },
      { name: 'Mia Steinberg' },
      { name: 'Raylene Guo' },
    ],

    // Media tabs supported in your setup (PDF already; you also enabled PPT tabs for products if you added that code)
    // Add a one-pager PDF if you have it:
    // pdfUrl: '/docs/UniPAPR-Overview.pdf',

    // Keep PPTX for your deck (works if your ItemDetail has PPT enabled for products):
    pptUrl: '/UniPAPR_Presentation.pptx',

    links: [
      // { href: 'https://github.com/yourname/unipapr', label: 'Repository' },
    ],
  },
}

export default unipaprOne
