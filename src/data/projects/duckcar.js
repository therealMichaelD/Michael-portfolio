// src/data/projects/duckcar.js

const duckcar = {
    id: 'duckcar',
    title: 'Duck Car1',
    subtitle:
      'Closed-loop control design and hardware implementation for a self-driving duck car.',
    href: '/projects/duckcar',
    // Using your “roles” as tags so the chips render on the detail page
    tags: ['Control Design', 'Modeling', 'MATLAB', 'Circuit Prototyping'],
  
    // Pick a nice hero image from your gallery (change if you prefer another)
    heroImage: '/duckcar/DuckCar.jpeg',
  
    // Gallery (portrait + landscape supported by your carousel/gallery)
    gallery: [
      {
        src: '/duckcar/Blockdiagram.png',
        caption: 'Block Diagram of Duck Car',
      },
      {
        src: '/duckcar/RootLocus.png',
        caption: 'Root locus - Compensated System',
      },
      {
        src: '/duckcar/LeadCompensator.png',
        caption: 'Schematic of Lead Compensator',
      },
      {
        src: '/duckcar/BreadboardCompensator.png',
        caption: 'Breadboard compensator',
      },
    ],

    blocks: {
      // …existing fields…
      overviewText: 'As part of ENGS 26: Control Theory, my team and I designed, modeled, and implemented a control system for a self-driving “Duck Car.” The goal was to make the car drive forward and stop at a safe distance from a wall, while meeting strict design specifications for stability, response time, overshoot, and control effort.',
      // ✅ Problem & Approach (KeyValue layout is clean)
    
      // ✅ Key Work (bullets)
      keyWork: [
        'System Identification: Modeled motor (K = 0.875 m/s/V, τ = 0.99 s) and sensor (Ka = 13.5 V/m) using Tracker app + MATLAB.',
        'Analysis: Found uncompensated system too slow (ts ≈ 7 s) and oscillatory (overshoot >25%).',
        'Compensator Design: Built a lead compensator with stop resistor; prototyped on breadboard (R1=10kΩ, R2=6.8kΩ, R3=680Ω, C1=47µF, C2=0.22µF).',
        'Implementation & Testing: Closed-loop system achieved ts = 1.02 s, overshoot = 0%, phase margin = 51°, gain margin = 24.9 dB, effort <10 V, ess = 0.'
      ],
    
      // ✅ Results (bullets)
      results: [
        'Peak Response: 18.3% (Goal < 20%)',
        'Settling Time: 2.24 s (Goal < 3s)',
        'Control Effort: 2V (Goal < 12V)',
        'Phase Margin: 52° (Goal ≥ 30°)',
        'Gain Margin: 24.9 dB (Goal ≥ 6 dB)',
        'Input Voltage: 2.2V (Goal ≥ 5V)',
        'Voltage Into Motor: 4V (Goal < 5V)',
      ],

      // Small at-a-glance info (date/roles) — renders as a KeyValue card
      skillsTools: [
        { k: 'Skills', v: 'Control System Design (Root Locus, Bode, Time-Domain), MATLAB & Simulink (sisotools, data fitting), Circuit Implementation (lead compensator, breadboard prototyping), Experimental System Identification' },
        { k: 'Tools', v: 'MATLAB, Tracker App, Oscilloscope, Breadboard + RC Components' },
      ],

      problem: 'The ENGS 26 final project tasked us with applying control theory to a physical system — either a duck car or an inverted pendulum. My team selected the duck car, whose goal was to autonomously drive forward and stop at a precise distance from a wall. The challenge was that the uncompensated system, while stable, had poor transient performance: a settling time of nearly 7 seconds and overshoot exceeding 25%, making it too slow and oscillatory for the required demo. The project demanded that we: Model the dynamics of the motor and sensor, Analyze system stability in both time and frequency domains, Set realistic design specifications (settling time, overshoot, margins, control effort), Design, implement, and test a compensator circuit that met these specifications.',
      
      pdfUrl: '/Engs 26 Final report.pdf',

      collaborators: [
        {
          name: 'Elizabeth Kendrick',
        },
        {
          name: 'Elizabeth Price',
        },
        // add as many as you want
      ],
    }
  }
  
  export default duckcar