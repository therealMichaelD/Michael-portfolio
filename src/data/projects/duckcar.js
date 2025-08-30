// src/data/projects/duckcar.js

const duckcar = {
    id: 'duckcar',
    title: 'Duck Car — Closed-Loop Control',
    subtitle:
      'ENGS 26 final: model → analyze → compensate → verify. Lead + stop-resistor controller implemented in hardware.',
    href: '/projects/duckcar',
    // Using your “roles” as tags so the chips render on the detail page
    tags: ['Control Design', 'Modeling', 'MATLAB', 'Circuit Prototyping'],
  
    // Pick a nice hero image from your gallery (change if you prefer another)
    heroImage: '/images/duckcar/comp-breadboard.jpg',
  
    // Gallery (portrait + landscape supported by your carousel/gallery)
    gallery: [
      {
        src: '/images/duckcar/tracker-velocity.png',
        caption: 'System ID from video tracking → MATLAB.',
      },
      {
        src: '/images/duckcar/root-locus.png',
        caption: 'Root locus — lead shifts poles for faster, better-damped response.',
      },
      {
        src: '/images/duckcar/bode.png',
        caption: 'Bode margins after compensation.',
      },
      {
        src: '/images/duckcar/comp-breadboard.jpg',
        caption: 'Breadboard compensator: R1/R2/R3, C1/C2.',
      },
    ],
  
    // Map your page sections into the ItemDetail blocks
    blocks: {
      // Hero subtitle goes here so it appears under “Technical Overview”
      overviewText:
        'ENGS 26 final: model → analyze → compensate → verify. Lead + stop-resistor controller implemented in hardware.',
  
      // Your “metrics” → show as key/value under Benchmarks
      benchmarks: [
        { k: 'Settling Time (exp.)', v: '1.02 s' },
        { k: 'Overshoot (exp.)', v: '0%' },
        { k: 'Gain Margin', v: '24.9 dB' },
        { k: 'Phase Margin', v: '51.4°' },
        { k: 'Control Effort (max)', v: '< 10 V' },
      ],
  
      // Small at-a-glance info (date/roles) — renders as a KeyValue card
      skillsTools: [
        { k: 'Roles', v: 'Control Design, Modeling, MATLAB, Circuit Prototyping' },
        { k: 'Date', v: 'May 2024' },
      ],
  
      // “Modeling” + “Compensator” text mapped into architecture notes
      architectureNotes: [
        'Motor ID — Velocity–time from Tracker → MATLAB fit for first-order motor model.',
        'K = 0.87481 m/s/V; τ = 0.9894 s; Gm(s) = 0.87481 / ( s (0.9894 s + 1) )',
        'Sensor Linearization — Measured distance vs voltage and linearized near 2 V operating point for wall-following.',
        'Sensor gain ≈ 13.543 V/m around 2 V',
        'Lead compensator with stop resistor to reduce Ts/Overshoot while keeping effort low.',
        'R1 = 10 kΩ, R2 = 6.8 kΩ, R3 = 680 Ω, C1 = 47 µF, C2 = 0.22 µF',
      ],
  
      // “Results” list maps cleanly to the Performance section
      performance: [
        'Closed-loop ts = 1.02 s and 0% overshoot (experimental).',
        'Gain margin 24.9 dB, phase margin 51.4° (MATLAB Bode).',
        'Control effort stayed under 10 V; steady-state error → 0.',
      ],
  
      // (Optional) If you want quick links, uncomment:
      // links: [
      //   { label: 'Repo', href: '#' },
      //   { label: 'Writeup', href: '#' },
      // ],
    },
  }
  
  export default duckcar