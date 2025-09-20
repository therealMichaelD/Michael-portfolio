// src/data/projects/3d-printed-polymers.js
const threeDPrintedPolymers = {
    id: '3d-printed-polymers',
    title: '3D Printed Polymers',
    subtitle:
      'Analyzing how 3D printing parameters affect the strength and microstructure of PLA polymers.',
    href: '/projects/3d-printed-polymers',
    tags: ['Additive Manufacturing', 'Materials', 'DFAM', 'Testing'],
  
    // 🖼️ Optional cover image (put a file under /public/3d-printed-polymers/)
    heroImage: '/Eng24Hero.png',
  
    // 🖼️ Gallery (images and/or videos). Add your assets under /public/3d-printed-polymers/
    //gallery: [
      // Video is supported by your Carousel:
      // { src: '/3d-printed-polymers/tensile-test.mp4', type: 'video', poster: '/3d-printed-polymers/tensile-poster.jpg', caption: 'Tensile test clip' },
    //],
  
    blocks: {
      // ✍️ Overview
      overviewText:
        'An empirical study of common FFF materials (PLA, PETG, ABS/ASA, Nylon, TPU), exploring the interaction of print parameters (nozzle temp, bed temp, speed, cooling, layer height, infill) with mechanical performance, surface finish, and dimensional accuracy. Includes DFAM guidelines, annealing trials, and repeatability checks across printers.',
  
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
  
      // 📄 Optional — add a PDF to enable the PDF tab:
      pdfUrl: '/ENGS24FinalReport.pdf',

      pptUrl: 'PolymerShow.pptx',
  
      // 👥 Optional collaborators (renders at bottom if present)
      collaborators: [
        { name: 'Lillia Hammond'},
        { name: 'Karl-Oskar Pajus'},
        { name: 'Calista Adler'},
      ],
    },
  }
  
  export default threeDPrintedPolymers