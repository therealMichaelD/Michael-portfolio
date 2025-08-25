// src/data/content.js
// =====================================================
// HOW TO EDIT CONTENT (TEXT + IMAGES) ✍️🖼️
// - All portfolio content lives here.
// - Safe to modify strings, arrays, add/remove blocks.
// - Look for:  ✅ EDIT TEXT HERE  and  🖼️ ADD/CHANGE IMAGE HERE
// =====================================================

export const PROFILE = {
    name: 'Michael Dang',
    tagline: 'Engineering Management and Electrical Engineering @ Dartmouth', // ✅ EDIT TEXT HERE
    headline: 'All-in on Tech Management',
    subhead: '', // ✅ EDIT TEXT HERE (optional short line under "About me")
    email: 'Michael.Dang3000@gmail.com',
    github: 'https://github.com/therealMichaelD',
    linkedin: 'https://www.linkedin.com/in/michaeldang1/',
    resumeUrl: '/Michael_Dang_Resume.pdf',
    headshot: '/HomePagePhoto.jpg',       // 🖼️ ADD/CHANGE IMAGE HERE (Home hero)
    aboutPhoto: '/PortfolioHeadshot.jpg', // 🖼️ ADD/CHANGE IMAGE HERE (About photo)
  }
  
  // ---------- PRODUCTS ----------
  export const PRODUCTS = [
    {
      id: 'resume-insights',
      title: 'Resume Insights', // ✅ EDIT TEXT HERE
      subtitle: 'Upload a PDF → get impact bullets, metrics, ATS tips.', // ✅
      href: '/products/resume-insights',
      tags: ['ATS', 'NLP', 'Metrics'],
      heroImage: '/images/resume-insights.png', // 🖼️ main image on detail page
      gallery: [ // 🖼️ Add as many images as you want
        { src: '/images/resume-insights-1.png', caption: 'Upload screen' },
        { src: '/images/resume-insights-2.png', caption: 'Insights view' },
      ],
      blocks: {
        overviewText:
          'Turn a resume PDF into crisp, metric-forward bullets with ATS-friendly structure in under a minute.',
  
        problemAudience: [
          { k: 'Primary user', v: 'Student / early-career applicant' },
          { k: 'JTBD', v: 'Translate experience into impact bullets faster' },
          { k: 'Pain', v: 'Hard to quantify and tailor quickly' },
          { k: 'Alternatives', v: 'Manual editing, generic templates' },
        ],
  
        features: [
          'Guided flow from input → output with sensible defaults.',
          'Metrics surfaced: success rate, coverage, quality score.',
          'Export as PDF/CSV and quick-copy of bullets.',
          'Error handling and recovery for messy PDFs.',
        ],
  
        howItWorks: [
          { k: 'Input', v: 'PDF resume → text extraction' },
          { k: 'Processing', v: 'NLP chunking, scoring, ATS heuristics' },
          { k: 'Output', v: 'Impact bullets + metrics + tips' },
          { k: 'Safeguards', v: 'Client-side pre-checks, error messaging' },
        ],
  
        kpis: [
          { label: 'Active users', value: '~120', caption: 'last 30 days' },
          { label: 'Time to value', value: '< 60s', caption: 'upload → insights' },
          { label: 'Retention', value: '38%', caption: '28-day repeat' },
        ],
  
        adoptionMetrics: [
          { label: 'CSAT', value: '4.6/5' },
          { label: 'Export rate', value: '72%' },
        ],
  
        reviews: [
          { quote: 'I shipped a better resume in one sitting. The metric prompts are clutch.', author: 'CS undergrad' },
          { quote: 'Great default suggestions; saved me ~2 hours.', author: 'PM bootcamp student' },
        ],
  
        changelog: [
          'v0.3 — Added export to CSV; improved ATS heuristics.',
          'v0.2 — Stabilized PDF parser; added metric suggestions.',
          'v0.1 — MVP with upload → bullets.',
        ],
  
        atAGlance: [
          { k: 'Status', v: 'Beta' },
          { k: 'Licensing', v: 'Free for students' },
        ],
  
        links: [
          { label: 'Demo', href: '#' },
          { label: 'Repo', href: '#' },
          { label: 'Writeup', href: '#' },
        ],
      },
    },
    {
      id: 'habit-metrics',
      title: 'Habit Metrics Dashboard',
      subtitle: 'North-star + input metrics, retention, alerts.',
      href: '/products/habit-metrics',
      tags: ['Analytics', 'Dashboards'],
      heroImage: '/images/habit-metrics.png',
      gallery: [{ src: '/images/habit-metrics-1.png', caption: 'Dashboard tiles' }],
      blocks: {
        overviewText: 'A lightweight tracker that connects habits to outcomes with real-time alerts.',
        problemAudience: [
          { k: 'Primary user', v: 'Students & indie builders' },
          { k: 'JTBD', v: 'Track inputs that lead to measurable outcomes' },
        ],
        features: ['Custom metrics', 'Streak logic', 'CSV export', 'Daily reminders'],
        howItWorks: [
          { k: 'Input', v: 'Manual or CSV import' },
          { k: 'Processing', v: 'Rolling windows + alerts' },
          { k: 'Output', v: 'Trends & retention views' },
        ],
        kpis: [
          { label: 'DAU', value: '54', caption: 'last 7 days' },
          { label: '7-day retention', value: '42%', caption: '' },
          { label: 'Exports', value: '210', caption: 'lifetime' },
        ],
        adoptionMetrics: [{ label: 'NPS', value: '58' }, { label: 'Bug rate', value: '< 1%' }],
        reviews: [{ quote: 'Finally a dashboard that nudges, not nags.', author: 'Grad student' }],
        changelog: ['v0.2 — Added retention chart', 'v0.1 — MVP'],
        atAGlance: [{ k: 'Status', v: 'Alpha' }],
        links: [{ label: 'Demo', href: '#' }],
      },
    },
  ]
  
  // ---------- PROJECTS ----------
  export const PROJECTS = [
    {
      id: 'power-meter',
      title: 'ESP32 Smart Power Meter',
      subtitle: 'Live voltage, current, energy in browser.',
      href: '/projects/power-meter',
      tags: ['ESP32', 'INA219', 'WebSerial'],
      heroImage: '/images/power-meter.png', // 🖼️
      gallery: [
        { src: '/images/power-meter-1.jpg', caption: 'Breadboard prototype' }, // 🖼️ add more
        { src: '/images/power-meter-2.jpg', caption: 'Serial UI' },
      ],
      blocks: {
        overviewText:
          'A compact meter using INA219 + ESP32 that streams measurements via WebSerial for real-time plotting.',
        skillsTools: [
          { k: 'Skills', v: 'Embedded C/C++, firmware bring-up, serial protocols' },
          { k: 'Tools', v: 'ESP-IDF / Arduino, Logic analyzer, Oscilloscope' },
          { k: 'Hardware', v: 'ESP32, INA219, level shifting, buck regulation' },
          { k: 'Interfaces', v: 'WebSerial UI, realtime plotting' },
        ],
        architectureNotes: [
          'ISR-driven sampling with ring buffer for burst capture.',
          'Backpressure strategy on serial transport.',
          'Calibration factor & temperature compensation hooks.',
        ],
        performance: [
          'Measurement error: ±1.5% @ 1 kHz.',
          'End-to-end latency: ~45 ms (p95).',
          'Uptime: 8h continuous, zero resets.',
        ],
        benchmarks: [
          { k: 'Throughput', v: '2.4k samples/s sustained' },
          { k: 'Noise floor', v: '<3 mVrms on shielded wiring' },
          { k: 'Thermal drift', v: '<0.4% across 20°C' },
          { k: 'Power', v: '~180 mW total draw' },
        ],
        timeline: [
          'Week 1 — Requirements & block diagram.',
          'Week 2 — Prototype firmware & serial link.',
          'Week 3 — Web UI plots & calibration.',
          'Week 4 — Long-run test & performance report.',
        ],
        bom: [
          'ESP32 DevKit-C',
          'INA219 current sensor',
          'IRM-05-5 PSU, relay, terminal blocks',
          'Assorted passives, wiring, headers',
        ],
        risks: [
          'Sensor saturation at high load → add shunt options.',
          'Noise coupling → ground routing rework on next PCB.',
          'Next: OTA updates + calibration wizard.',
        ],
        environment: [
          { k: 'Firmware', v: 'Arduino (ESP32) — Release 0.3' },
          { k: 'UI', v: 'Vanilla JS + WebSerial' },
        ],
        links: [
          { label: 'Demo', href: '#' },
          { label: 'Repo', href: '#' },
          { label: 'Writeup', href: '#' },
        ],
      },
    },
    {
      id: 'oscilloscope',
      title: 'Arduino Oscilloscope',
      subtitle: 'Triggering, capture, waveform rendering.',
      href: '/projects/oscilloscope',
      tags: ['Arduino', 'Signal'],
      heroImage: '/images/oscilloscope.png',
      gallery: [{ src: '/images/oscilloscope-1.jpg', caption: 'Waveform capture' }],
      blocks: {
        overviewText: 'Simple 1-ch scope using ADC sampling + Processing visualizer.',
        skillsTools: [
          { k: 'Skills', v: 'ADC, triggers, signal conditioning' },
          { k: 'Tools', v: 'Arduino IDE, Processing' },
        ],
        architectureNotes: ['Circular buffer', 'Software trigger', 'Downsampling'],
        performance: ['10-bit ADC', '~5 kS/s', 'Basic cursor measurements'],
        benchmarks: [{ k: 'Latency', v: '~60 ms' }],
        timeline: ['Week 1 — ADC tests', 'Week 2 — Trigger & draw', 'Week 3 — Export CSV'],
        bom: ['Arduino Uno', 'Breadboard + jumpers', 'USB serial'],
        risks: ['Aliasing at higher frequencies'],
        environment: [{ k: 'Firmware', v: 'Arduino UNO' }],
        links: [{ label: 'Repo', href: '#' }],
      },
    },
  ]
  
  // ---------- READINGS ----------
  export const READINGS = [
    {
      id: 'book1',
      title: 'The Innovator’s Dilemma',
      subtitle: 'Clayton Christensen — reflections on disruptive innovation.',
      href: '/readings/book1',
      tags: ['Strategy'],
      heroImage: '/images/book1.png',
      gallery: [{ src: '/images/book1-quote.jpg', caption: 'Favorite passage' }],
      blocks: {
        overviewText:
          'Christensen explains why successful companies miss disruptive tech—and how to respond with the right bets.',
        review:
          'A must-read on timing and portfolio risk. It sharpened how I evaluate early signals vs. sustaining improvements.',
        quotes: [
          'The reason that it is so difficult for existing firms to capitalize on disruptive innovations is that their processes and their business model that make them good at the existing business actually make them bad at competing in the disruption.',
          'Disruptive technologies typically underperform established products in mainstream markets.',
        ],
        keyIdeas: ['Sustaining vs. disruptive trajectories', 'Jobs-to-be-done lens', 'Small-market trap'],
        who: ['PMs shaping strategy', 'Hardware founders weighing tradeoffs', 'Students exploring tech bets'],
        rating: 5,
        bibliography: [
          { k: 'Author', v: 'Clayton M. Christensen' },
          { k: 'Published', v: '1997' },
        ],
        links: [{ label: 'Notes', href: '#' }],
      },
    },
    {
      id: 'book2',
      title: 'Inspired',
      subtitle: 'Marty Cagan — lessons on building tech products.',
      href: '/readings/book2',
      tags: ['PM'],
      heroImage: '/images/book2.png',
      gallery: [],
      blocks: {
        overviewText:
          'Patterns for empowering teams, discovering value, and shipping what matters.',
        review:
          'Great field guide to product discovery. I adopted the framing for opportunity trees and risk lists.',
        quotes: ['The role of product is to discover a product that is valuable, usable and feasible.'],
        keyIdeas: ['Dual-track discovery/delivery', 'Outcome > output', 'Empowered teams'],
        who: ['Early-career PMs', 'Tech leads partnering with PM'],
        rating: 4,
        bibliography: [{ k: 'Author', v: 'Marty Cagan' }],
        links: [{ label: 'Summary', href: '#' }],
      },
    },
  ]
  