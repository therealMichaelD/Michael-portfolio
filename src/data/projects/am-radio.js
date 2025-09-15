// src/data/projects/am-radio.js
const amRadio = {
    id: 'am-radio',
    title: 'AM Radio Receiver',
    subtitle:
      'ENGS 32 project — narrowband LC filter, envelope detector, variable-gain amplification, and headphone driver.',
    href: '/projects/am-radio',
    tags: ['Analog', 'RF', 'Envelope Detector', 'LC Filter'],
  
    // 🖼️ Optional cover (put a file in /public/am-radio/cover.jpg or change path)
    heroImage: '/Eng32Hero.jpeg',
  
    // 🖼️ Optional gallery (add images as you have them; leave empty if none yet)
    gallery: [
      // { src: '/am-radio/schematic.png', caption: 'Hand-drawn schematic' },
      // { src: '/am-radio/envelope-scope.png', caption: 'Envelope detector scope capture' },
    ],
  
    blocks: {
      // ✍️ Overview (concise)
      overviewText:
        'Design, simulation, and build of a working AM receiver. The chain uses a tuned LC bandpass for selectivity, an envelope detector for demodulation, AC coupling, and variable-gain op-amp stages to drive 32–64Ω headphones at audible power. Work validated in LTSpice and on bench with antenna tuning.',
  
      // 🧰 Skills & Tools (KeyValue)
      skillsTools: [
        { k: 'Skills', v: 'Analog/RF front-end, envelope detection, AC coupling, gain staging, audio drive' },
        { k: 'Tools', v: 'LTSpice, Oscilloscope, Function Generator, DMM, Breadboard' },
      ],
  
      // ✅ Problem (full width under Skills & Tools)
      problem:
        'Receive and demodulate a 1.0 MHz AM signal (≈5 mV input, ~40% modulation) with tunable gain and narrowband filtering, then drive headphones at audible levels while maintaining stability and AC coupling.',
  
      // ✅ Approach (full width)
      approach:
        'Use a resonant LC bandpass to improve selectivity near 1 MHz; bias and rectify with an envelope detector; buffer and AC-couple; add variable-gain op-amp stages (≈10–100) to set volume and headroom; verify performance in LTSpice before prototyping; iterate component values on bench; optionally add a class-B output buffer for speakers.',
  
      // ✅ Key Work (bullets)
      keyWork: [
        'Gain budgeting from antenna input → audio output; chose component ranges for R/C.',
        'Selected RC for envelope detector bandwidth; modeled and verified in LTSpice.',
        'Derived/checked filter-amp transfer function; identified poles and passband gain.',
        'Built narrowband LC resonant filter; tuned coil/capacitor to ~1 MHz on bench.',
        'Implemented variable-gain stages (10–100) with AC coupling and biasing.',
        'Bench-tested with headphone loads; scoped envelope and final outputs.',
      ],
  
      // 📈 Results (bullets)
      results: [
        'Reliable AM demodulation of ~1 MHz carrier with audible output.',
        'Repeatable selectivity improvement from LC tank near resonance.',
        'Volume control via variable gain without DC offset at the output.',
        'Successful antenna tuning in lab to lock onto a broadcast.',
      ],
  
      // (Optional) Architecture / Performance / Benchmarks / Timeline
      architectureNotes: [
        'LC tank used as input selectivity/matching stage.',
        'Envelope detector biased for diode conduction; post-rectifier buffering.',
        'AC-coupled variable-gain stage sets overall loudness.',
      ],
      performance: [
        'Gain range ~10–100 across stages, adjustable with potentiometer.',
        'Headphone drive verified for 32–64 Ω configurations.',
      ],
      benchmarks: [
        { k: 'Carrier', v: '≈ 1.0 MHz' },
        { k: 'Mod depth', v: '≈ 40%' },
        { k: 'Input level', v: '~5 mV (typ.), ±10× variation' },
      ],
      timeline: [
        'Phase I — Analysis, RC choices, envelope sim, transfer function, initial gain budget.',
        'Phase II — LC filter build, full-chain prototype, headphone driver, on-air test.',
      ],
  
      // (Optional) Next steps
      risks: [
        'Gain/offset interaction at high settings → watch headroom and saturation.',
        'Tuning sensitivity in LC tank requires careful coil handling and shielding.',
      ],
  
      // 🔗 Links (these show under your “Links” section)
      links: [
        { label: 'Phase I (PDF)', href: '/docs/AMRadio1.pdf' },
        { label: 'Phase II (PDF)', href: '/docs/AMRadio2.pdf' },
      ],
  
      // 📄 PDF viewer (enables the PDF tab). You can point to the Phase II final write-up:
      pdfUrl: '/docs/AMRadio2.pdf',
  
      // 👥 Optional collaborators (renders at bottom if present)
      collaborators: [
        // { name: 'Teammate Name', role: 'Filter & Tuning', href: 'https://www.linkedin.com/in/...' },
      ],
    },
  }
  
  export default amRadio