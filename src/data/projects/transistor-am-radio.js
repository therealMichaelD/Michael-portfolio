// src/data/projects/transistor-am-radio.js

const transistorAmRadio = {
  id: 'transistor-am-radio',
  title: 'Transistor AM Radio',
  subtitle:
    'A single-transistor AM broadcast receiver (tuned RF, diode detector, and headphone driver).',
  href: '/projects/transistor-am-radio',

  // Tags render as chips in your detail page
  tags: ['Analog', 'RF', 'Audio', 'PCB'],

  // Use an existing image in /public or swap to your own
  heroImage: '/AMbuild.jpeg',

  // Gallery (images only; your ItemDetail will handle video via the Video tab)
  gallery: [
    { src: '/AMLTSPICE.jpeg', caption: 'Schematic' },
  ],

  blocks: {
    // This text shows in the Overview card
    overviewText:
      'A compact AM receiver designed around a single BJT stage with a tuned LC input, germanium diode envelope detector, and a simple headphone output. Focus is on selectivity, stable bias, and efficient detection while keeping the parts list student-friendly.',

    // Skills & Tools card (KeyValue)
    skillsTools: [
      { k: 'Skills', v: 'Analog front-end design, LC tuning, biasing, envelope detection, EMI hygiene' },
      { k: 'Tools',  v: 'LTspice, Oscilloscope, Function Generator, Multimeter, VNA (optional)' },
    ],

    // Problem / Approach / Key Work / Results sections
    problem:
      'Build a minimal-parts AM broadcast receiver that cleanly demodulates local stations on the 530–1700 kHz band with decent selectivity and comfortable headphone volume, while running from a single 9 V battery.',
    approach:
      'Start with an LC-tuned input (f₀ ≈ 1 MHz) feeding a common-emitter BJT for RF gain. Use a low-leakage germanium or Schottky detector to recover audio, add a simple RC audio filter, and buffer/drive headphones. Iterate coil turns and capacitor values to align resonance; verify with sweep and scope.',
    keyWork: [
      'Calculated L and C for target resonance; wound air-core inductor and measured Q.',
      'Biased BJT for linear RF gain; verified stability and avoided self-oscillation.',
      'Evaluated detector diodes (1N34A vs. BAT54) for sensitivity and distortion.',
      'Characterized selectivity with swept RF input and measured -3 dB bandwidth.',
      'Packaged into a small PCB with star-grounding and short RF paths.',
    ],
    results: [
      'Tuned center frequency near 1.0 MHz with ±40 kHz usable tuning range.',
      'Clear audio on local stations with comfortable headphone level at <15 mA draw.',
      'Measured -3 dB RF bandwidth ≈ 12 kHz (with front-end loading).',
    ],

    // Optional tabs — fill these URLs when you have them
    // They automatically light up the “PDF / PPT / Video” tabs in ItemDetail
    // pdfUrl: '/docs/transistor-am-radio-schematic.pdf',
    // pptUrl: '/pptx/transistor-am-radio.pptx',
    // youtubeId: 'dQw4w9WgXcQ', // ← replace with your real YouTube ID

    // Optional project links
    links: [
      // { href: 'https://github.com/yourname/transistor-am-radio', label: 'Source on GitHub' },
    ],

    // Optional collaborators (renders at the very bottom)
    collaborators: [
      // { name: 'Jane Doe', role: 'RF Co-designer', href: 'https://linkedin.com/in/janedoe', avatar: '/avatars/jane.jpg' },
    ],
  },
}

export default transistorAmRadio