// src/data/projects/unipapr.js
// New project item: UniPAPR
// NOTE: Put images in /public/unipapr/... and the PPTX in /public/pptx/ (or use an external URL).
// This object follows the same shape you’re using for other projects.

const unipapr = {
    id: 'unipapr',
    title: 'UniPAPR',
    subtitle: 'Low-cost powered respirator for welders using standard helmets, batteries, and 3M filters.',
    href: '/projects/unipapr',
    tags: ['PAPR', 'Welding', 'Electronics', '3D Printing', 'Fluid Dynamics'],
  
    // 🖼️ HERO — replace with a real image path you add to /public/unipapr/
    heroImage: '/unipapr/hero.jpg',
  
    // 🖼️ GALLERY — add/remove images as you like (these are placeholders)
    gallery: [
      { src: '/unipapr/blower-assembly.jpg',   caption: 'Blower module' },
      { src: '/unipapr/helmet-ductwork.jpg',   caption: 'Helmet ductwork (V3 fit)' },
      { src: '/unipapr/filters-battery.jpg',   caption: '3M filters + M18 battery' },
      { src: '/unipapr/test-lab.jpg',          caption: 'Bench test + flow checks' },
    ],
  
    blocks: {
      // ✅ Appears in “Overview”
      overviewText:
        'UniPAPR is an affordable PAPR attachment for welders. Instead of buying an expensive all-in-one helmet, the system reuses the welder’s existing helmet and a common M18 battery, plus 3M filters. The blower+filter module routes clean, filtered air through lightweight ductwork into the helmet to improve comfort and safety at a fraction of the cost.',
  
      // ✅ Show up as full-width sections in your Projects flow
      problem:
        'Self-employed and hobbyist welders often lack respiratory protection solutions that are affordable, convenient, and comfortable. Commercial PAPR helmets can cost $1,300–$2,200+, creating a barrier to adoption despite real health risks from welding fumes.',
      approach:
        'Lower the cost by leveraging what welders already own: their helmet and common tool batteries (M18). Use widely available 3M filters, a compact dual-blower architecture, and simple ductwork that drops into the helmet. Iterate on duct geometry, filter area, and blower configuration (series/parallel) to balance flow and static pressure.',
  
      // ✅ Bulleted list
      keyWork: [
        'Iterated duct designs (V1–V3) to direct flow into the breathing zone without visual obstruction.',
        'Blower module prototypes scaling filters (2→4) and fans (1→2) in series/parallel to tune pressure/flow.',
        'Selected 3M particulate + organic vapor filters; designed for quick replacement.',
        'Integrated M18 battery with DC-DC (18V→24V) to drive blowers at the right operating point.',
        'Bench and field tests (shop environment) for smell reduction, comfort, and perceived air quality.',
      ],
  
      // ✅ Results bullets
      results: [
        'Users reported no smoke smell while UniPAPR was on vs. noticeable smell with a standard helmet.',
        'Achieved strong perceived airflow with improved comfort over long sessions.',
        'Target price point around ~$299 (without battery) to drive adoption among hobbyists/shops.',
      ],
  
      // ✅ Key/Value cards (rendered in “Skills & Tools”)
      skillsTools: [
        { k: 'Skills',   v: 'Fan curve & static pressure analysis, duct design, rapid prototyping, basic electronics, soldering, sewing' },
        { k: 'Tools',    v: 'SolidWorks (CAD), 3D printing, Multimeter, Particulate/flow checks, Hand tools' },
        { k: 'Hardware', v: 'M18 battery, DC-DC (18→24V), Dual blowers, 3M P100/organic vapor filters, helmet & ductwork' },
      ],
  
      // ✅ Architecture notes (bullets)
      architectureNotes: [
        'Dual-blower topology explored in series vs. parallel: series boosts pressure; parallel boosts free flow.',
        'Filter area increased (2→4) to reduce resistance and improve flow at operating point.',
        'Helmet duct path tuned to direct flow into breathing zone while keeping clear sight lines.',
        'Quick-swap filter design for maintenance and prolonged service life.',
      ],
  
      // ✅ Performance talking points (bullets)
      performance: [
        'Comfortable, continuous airflow with reduced perceived fumes during welding.',
        'Lower cost target versus commercial PAPRs while using standardized consumables (3M filters).',
        'Noise and weight kept reasonable via compact module and cloth routing; next revs to reduce further.',
      ],
  
      // ✅ Benchmarks as Key/Value
      benchmarks: [
        { k: 'Target Cost', v: '~$299 (w/o battery)' },
        { k: 'Battery',     v: 'M18 (user-supplied)' },
        { k: 'Filters',     v: '3M particulate + organic vapor (P100 class)' },
        { k: 'Module',      v: 'Dual-blower with DC-DC 18→24V' },
      ],
  
      // ✅ Timeline
      timeline: [
        'Concept & requirements — problem validation and cost target.',
        'Ductwork prototypes (V1–V3) — flow direction & helmet clearance.',
        'Blower module V1–V5 — filters (2→4), fans (1→2), series/parallel.',
        'Bench testing — flow & resistance checks.',
        'Field test — welder feedback and comfort evaluation.',
      ],
  
      // ✅ Risks & next steps
      risks: [
        'Overconfidence risk — clear guidance on capabilities & maintenance needs.',
        'Dirty filters reduce flow — add maintenance indicators & instructions.',
        'Noise/weight — continue optimization and enclosure damping.',
      ],
  
      // ✅ PPT tab (appears in your media tabs at top of the page)
      // Put the PPTX file in /public/pptx/ or use an external URL:
      // e.g., '/pptx/UniPAPR-Presentation.pptx'  (rename your file accordingly)
      pptUrl: '/pptx/UniPAPR-Presentation.pptx',
  
      // If you export a PDF later, you can add:
      // pdfUrl: '/docs/UniPAPR-Report.pdf',
  
      // If you publish a demo video (YouTube), add:
      // youtubeId: 'XXXXXXXXXXX',
  
      // Optional links section (renders as a “Links” card)
      links: [
        { label: 'Slide deck (PPTX)', href: '/pptx/UniPAPR-Presentation.pptx' },
        // { label: 'Repo', href: 'https://github.com/yourname/unipapr' },
      ],
  
      // ✅ Collaborators (renders at the bottom if present)
      collaborators: [
        { name: 'Andrew',  role: 'Design & Prototyping' },
        { name: 'Michael', role: 'Electronics & Testing' },
        { name: 'Mia',     role: 'CAD & Ductwork' },
        { name: 'Raylene', role: 'Testing & Operations' },
      ],
    },
  }
  
  export default unipapr