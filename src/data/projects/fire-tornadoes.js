// src/data/projects/fire-tornadoes.js
const fireTornadoes = {
    id: 'fire-tornadoes',
    title: 'Fire Tornadoes',
    subtitle: 'A controlled experiment exploring the physics and dynamics of fire tornado formation.',
    href: '/projects/fire-tornadoes',
    tags: ['Fluids', 'Visualization', 'Thermal', 'Controls'],
  
    // 🖼️ Cover image (optional). Put your file in public/fire-tornadoes/cover.jpg
    heroImage: '/FireTornadoHero.png',
  
    // 🖼️ Gallery images (optional). Add/remove as you like.
  
    blocks: {
      // ✅ High-level overview (no step-by-step or hazardous detail)
      overviewText:
        'This project explores the physics of fire whirls (often called fire tornados) by recreating the phenomenon in a controlled lab setting. Using two offset acrylic half-cylinders around a flame source, we generated rotating convection currents that transform an ordinary flame into a spinning vortex of fire. Through particle tracking and motion analysis, we measured angular and linear velocities, finding that angular velocity decreases with increasing radius, suggesting constant linear velocity within the vortex. We also studied how varying cylinder offsets affect airflow and flame behavior, discovering a linear relationship between gap size and flow rate. While results aligned partially with theoretical scaling, environmental factors like wind, temperature, and fuel consistency limited accuracy. Overall, the experiment provided key insights into convective heat transfer, vorticity, and the dynamics of fire tornados.',
  
      youtubeId: 'https://youtu.be/zdbautSN5kc',
  
      // Optional: add a PDF to enable the PDF tab on projects
      // pdfUrl: '/docs/fire-tornadoes.pdf',
  
      // Optional collaborators (renders at the bottom if present)
      collaborators: [
        { name: 'Jacob Dresser'},
        { name: 'Eva Ferrari'},
        { name: 'Selen Kazmirici'},
        { name: 'Elaine Sarazen'},
        { name: 'Trevor Gittes-Taplin'},
      ],
    },
  }
  
  export default fireTornadoes