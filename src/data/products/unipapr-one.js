// src/data/products/unipapr-one.js
const unipaprOne = {
  id: 'unipapr-one',                      // unique so it won't collide
  title: 'UniPAPR',
  subtitle: 'Low-cost powered respirator for welders using standard helmets, batteries, and 3M filters.',
  href: '/products/unipapr-one',          // unique route for side-by-side testing
  tags: ['PAPR', 'Welding', 'Electronics', '3D Printing', 'Fluid Dynamics'],

  // Update these to match actual files in /public/unipapr/...
  heroImage: '/unipapr/hero.jpg',
  gallery: [
    { src: '/unipapr/blower-assembly.jpg', caption: 'Blower module' },
    { src: '/unipapr/helmet-ductwork.jpg', caption: 'Helmet ductwork (V3 fit)' },
    { src: '/unipapr/filters-battery.jpg', caption: '3M filters + M18 battery' },
    { src: '/unipapr/test-lab.jpg', caption: 'Bench test + flow checks' },
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

    kpis: [
      { label: 'Field Test: smell', value: 'Not noticeable vs. helmet alone' },
      { label: 'Proto revs', value: 'V1–V5' },
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