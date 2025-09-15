// src/data/projects/3d-printed-polymers.js
const threeDPrintedPolymers = {
    id: '3d-printed-polymers',
    title: '3D Printed Polymers',
    subtitle:
      'Material selection, print parameter tuning, and post-processing to optimize strength, surface finish, and dimensional accuracy.',
    href: '/projects/3d-printed-polymers',
    tags: ['Additive Manufacturing', 'Materials', 'DFAM', 'Testing'],
  
    // 🖼️ Optional cover image (put a file under /public/3d-printed-polymers/)
    heroImage: '/3d-printed-polymers/cover.jpg',
  
    // 🖼️ Gallery (images and/or videos). Add your assets under /public/3d-printed-polymers/
    gallery: [
      { src: '/3d-printed-polymers/dogbone.jpg', caption: 'ASTM D638 dogbone specimens' },
      { src: '/3d-printed-polymers/benchy.jpg', caption: 'Benchmark geometry for calibration' },
      // Video is supported by your Carousel:
      // { src: '/3d-printed-polymers/tensile-test.mp4', type: 'video', poster: '/3d-printed-polymers/tensile-poster.jpg', caption: 'Tensile test clip' },
    ],
  
    blocks: {
      // ✍️ Overview
      overviewText:
        'An empirical study of common FFF materials (PLA, PETG, ABS/ASA, Nylon, TPU), exploring the interaction of print parameters (nozzle temp, bed temp, speed, cooling, layer height, infill) with mechanical performance, surface finish, and dimensional accuracy. Includes DFAM guidelines, annealing trials, and repeatability checks across printers.',
  
      // 🧰 Skills & Tools (KeyValue)
      skillsTools: [
        { k: 'Skills', v: 'Design for Additive Manufacturing (DFAM), process tuning, material testing, data analysis' },
        { k: 'Tools', v: 'PrusaSlicer/Cura, Tensile tester (D638), Calipers, DSC/DMA (optional), Surface profilometer (optional)' },
      ],
  
      // ✅ Problem (full width)
      problem:
        'Identify process windows that maximize tensile strength and dimensional accuracy while maintaining reasonable print time and surface quality across multiple polymer families.',
  
      // ✅ Approach (full width)
      approach:
        'Use standardized test geometries (ASTM D638 Type V dogbones; calibration cubes; overhang bridges). Plan factorial experiments varying temperature, speed, layer height, infill pattern/percentage, and cooling. Record print outcomes, measure dimensions, and test tensile strength. Evaluate annealing and orientation effects (XY vs Z). Summarize DFAM heuristics from the dataset.',
  
      // ✅ Key Work (bulleted)
      keyWork: [
        'Set up material profiles for PLA, PETG, ABS/ASA, Nylon, and TPU; documented safe ranges and adhesion strategies.',
        'Executed parameter sweeps for nozzle temp, layer height, speed, and cooling; logged failures and successes.',
        'Measured dimensional error (X/Y/Z) and surface roughness; compiled per-material recommendations.',
        'Printed ASTM D638 dogbones in multiple orientations; performed tensile tests; compared to vendor datasheets.',
        'Ran annealing trials on PLA and Nylon; quantified warpage vs strength changes.',
      ],
  
      // 📈 Results (bulleted)
      results: [
        'Achieved ≥15–25% tensile improvement for PLA via orientation/annealing tradeoffs (with modest warpage control).',
        'Reduced XY dimensional error below ±0.1 mm on calibration cubes with tuned flow and linear advance.',
        'Improved overhang performance at 55–60° for PETG using targeted cooling + slower external perimeters.',
        'Established DFAM cheatsheet for hole sizing, thread inserts, and bridging rules per material.',
      ],
  
      // 🧱 Architecture / Notes (bulleted)
      architectureNotes: [
        'Slicer profiles versioned; notes include temp towers and retraction towers per filament brand.',
        'Common fixtures for tensile and roughness measurements; repeatability checks every N prints.',
        'Per-material adhesion notes (bed surfaces, temps, first-layer strategies).',
      ],
  
      // ⚙️ Performance (bulleted)
      performance: [
        'XY dimensional error: target ±0.1 mm; Z step banding minimized via linear advance & pressure equalization.',
        'Overhang: stable up to 55–60° on PETG; 65–70° on PLA with tuned cooling.',
        'Layer adhesion: improved in Nylon with higher chamber temps and reduced cooling.',
      ],
  
      // 📊 Benchmarks (KeyValue)
      benchmarks: [
        { k: 'Specimens', v: 'ASTM D638 Type V (PLA/PETG/Nylon/TPU)' },
        { k: 'Nozzle', v: '0.4 mm brass; 0.6 mm hardened (abrasives)' },
        { k: 'Layer heights', v: '0.12–0.28 mm' },
        { k: 'Infill', v: '20–60% (gyroid/grid)' },
      ],
  
      // 🗓️ Timeline
      timeline: [
        'Week 1 — Baseline calibration & material profiling',
        'Week 2 — Parameter sweeps & dimensional study',
        'Week 3 — Tensile testing & orientation trials',
        'Week 4 — Annealing experiments & DFAM summary',
      ],
  
      // 🧾 Bill of Materials (high level)
      bom: [
        'Filaments: PLA, PETG, ABS/ASA, Nylon, TPU (brand/lot logged)',
        'Nozzles: brass (0.4 mm), hardened (0.6 mm) for abrasives',
        'Test fixtures: dogbone grips, calibration jigs',
        'Measurement: calipers, optional profilometer; tensile tester access',
      ],
  
      // 🔜 Next steps / risks
      risks: [
        'Humidity management for Nylon/TPU (drying before print).',
        'Adhesion challenges with ABS/ASA; prefer enclosure and consistent bed surface.',
        'Annealing may introduce warp—use constrained fixtures and test small first.',
      ],
  
      // 🔗 Links (shown in “Links” section)
      links: [
        // { label: 'Dataset / Sheets', href: '#' },
        // { label: 'DFAM Cheatsheet (PDF)', href: '/docs/3d-printed-polymers.pdf' },
      ],
  
      // 📄 Optional — add a PDF to enable the PDF tab:
      // pdfUrl: '/docs/3d-printed-polymers.pdf',
  
      // 👥 Optional collaborators (renders at bottom if present)
      collaborators: [
        // { name: 'Teammate A', role: 'Testing & Analysis', href: 'https://www.linkedin.com/in/...' },
      ],
    },
  }
  
  export default threeDPrintedPolymers