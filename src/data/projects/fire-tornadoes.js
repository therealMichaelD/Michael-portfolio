// src/data/projects/fire-tornadoes.js
const fireTornadoes = {
    id: 'fire-tornadoes',
    title: 'Fire Tornadoes',
    subtitle: 'Visualizing buoyant convection and induced vorticity in a safe, controlled demo.',
    href: '/projects/fire-tornadoes',
    tags: ['Fluids', 'Visualization', 'Thermal', 'Controls'],
  
    // 🖼️ Cover image (optional). Put your file in public/fire-tornadoes/cover.jpg
    heroImage: '/FireTornadoHero.png',
  
    // 🖼️ Gallery images (optional). Add/remove as you like.
    gallery: [
        {
          src: '/duckcar/demo.mp4',
          type: 'video',                // 👈 tells carousel it’s a video
          poster: '/duckcar/demo-cover.jpg', // optional thumbnail while loading
          caption: 'Closed-loop demo',
          loop: true,                   // optional (default true)
          muted: true,                  // optional (default true for inline mobile)
          autoplay: false               // optional (default false)
        },
      ],
  
    blocks: {
      // ✅ High-level overview (no step-by-step or hazardous detail)
      overviewText:
        'A controlled visualization exploring how vertical buoyant plumes can be induced to rotate, forming a visible vortex. The focus is on safe demonstration, instrumentation, and measurement—not on replication directions. All tests were performed under appropriate supervision, fire-safe surfaces, and extinguishing readiness.',
  
      // ✅ Problem (full width under Skills & Tools)
      problem:
        'Create a visible, short-duration vortex column for educational visualization while maintaining strict safety constraints and measurement repeatability.',
  
      // ✅ Approach (full width)
      approach:
        'Use a controlled vertical thermal plume with gentle, symmetric inlet swirl and transparent shielding to visualize vorticity. Measure rotation qualitatively with video analysis and track flow with safe tracers. Emphasis on safety, containment, and short-duration trials.',
  
      // ✅ Key Work (bulleted)
      keyWork: [
        'Designed a symmetric swirl-inducing shroud; recorded qualitative vortex formation.',
        'Instrumented runs with video analysis; annotated rotation rate and column stability.',
        'Evaluated containment and shielding effectiveness; documented safety checklist.',
      ],
  
      // ✅ Results (bulleted)
      results: [
        'Consistent, visible vortex column under controlled conditions.',
        'Repeatable visualization suitable for brief demonstrations.',
        'Clear safety envelope and shutdown criteria documented.',
      ],
  
      // Skills & Tools (KeyValue)
      skillsTools: [
        { k: 'Skills', v: 'Experimental design, qualitative flow visualization, video analysis, safety protocols' },
        { k: 'Tools', v: 'Camera tracking, protective shielding, timing & logging' },
      ],
  
      // Optional bill of materials (keep high-level & non-hazardous)
      bom: [
        'Transparent shielding & enclosure materials',
        'Nonflammable base and containment surfaces',
        'Video capture & analysis tools',
        'Safety equipment (extinguisher, gloves, eye protection)',
      ],
  
      // Optional links (leave or remove)
      links: [
        // { label: 'Writeup', href: '#' },
        // { label: 'Dataset', href: '#' },
      ],
  
      // Optional: add a PDF to enable the PDF tab on projects
      // pdfUrl: '/docs/fire-tornadoes.pdf',
  
      // Optional collaborators (renders at the bottom if present)
      collaborators: [
        // { name: 'Teammate A', role: 'Visualization & Analysis', href: 'https://www.linkedin.com/in/teammate-a/', avatar: '/collaborators/teammate-a.jpg' },
        // { name: 'Teammate B', role: 'Enclosure & Safety', href: 'https://github.com/teammate-b' },
      ],
    },
  }
  
  export default fireTornadoes