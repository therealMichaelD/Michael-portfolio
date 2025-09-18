// src/data/projects/final-thesis.js
const finalThesis = {
    id: 'final-thesis',
    title: '3D Integrated Circuits',
    subtitle: ' Thesis exploring 3D integrated circuits and their impact on the future of semiconductors.',
    href: '/projects/final-thesis',
    tags: ['Thesis', 'Research'],
  
    // 🖼️ Optional cover image (shows in the project carousel as “Gallery”)
    // Put a cover image at public/thesis/cover.jpg or change the path.
    heroImage: '/3DIntegratedChips.jpg',
  
    blocks: {
      // ✅ This triggers the PDF viewer/tab on the project page
      // Place your file at: public/docs/final-thesis.pdf (or change the path)
      pdfUrl: '/MyThesisPortfolio.pdf',
  
      // ——— Optional descriptive blocks (editl freely, or delete if not needed) ———
      overviewText:
        'This thesis examines three-dimensional integrated circuits (3D ICs) as a transformative paradigm for sustaining semiconductor progress in the post-Moore’s Law era. By stacking multiple layers of circuitry vertically, 3D ICs overcome scaling bottlenecks in interconnect delay, power efficiency, and functional density. The work first explores the technical foundations of 3D integration, including through-silicon vias (TSVs), wafer bonding, monolithic processes, thermal management, and emerging standards for testing and reliability. It then evaluates the economic trade-offs, showing how performance-per-watt gains, heterogeneous chiplet integration, and improved yield can outweigh higher manufacturing complexity and costs. Case studies of GPUs with high-bandwidth memory, AMD’s 3D V-Cache, Intel’s Foveros packaging, and stacked smartphone sensors demonstrate practical adoption across domains such as data centers, mobile devices, AI accelerators, and memory systems. Finally, the thesis situates 3D ICs within the strategic landscape, analyzing U.S. CHIPS Act initiatives, China’s packaging advances, and global R&D investment trends. Overall, the study concludes that 3D ICs will be central to the future of computing, simultaneously enabling technical breakthroughs, economic competitiveness, and geopolitical leadership in the semiconductor industry.',
      skillsTools: [
        { k: 'Skills', v: 'Research, Technical Writing, Data Analysis, Experiment Design' },
        { k: 'Tools', v: 'Python, MATLAB, LaTeX/Word, Git' },
      ],
      approach:
        ' ',
      keyWork: [
        ' ',
      ],
    },
  }
  
  export default finalThesis