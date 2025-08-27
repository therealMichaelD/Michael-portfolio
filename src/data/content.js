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
      title: 'IN-PROGRESS', // ✅ EDIT TEXT HERE
      subtitle: ' ', // ✅
      href: '/products/resume-insights',
      tags: [' ', ' ', ' '],
      heroImage: '/images/resume-insights.png', // 🖼️ main image on detail page
      gallery: [ // 🖼️ Add as many images as you want
        { src: '/images/resume-insights-1.png', caption: 'Upload screen' },
        { src: '/images/resume-insights-2.png', caption: 'Insights view' },
      ],
      blocks: {
        overviewText:
          ' ',
  
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
  ]
  
  // ---------- PROJECTS ----------
  export const PROJECTS = [
    {
      id: 'power-meter',
      title: 'ESP32 Smart Power Meter',
      subtitle: 'Compact smart meter for precision current and voltage measurement.',
      href: '/projects/power-meter',
      tags: ['ESP32', 'INA219', 'WebSerial'],
      heroImage: '/images/power-meter.png', // 🖼️
      gallery: [
        { src: '/images/power-meter-1.jpg', caption: 'Breadboard prototype' }, // 🖼️ add more
        { src: '/images/power-meter-2.jpg', caption: 'Serial UI' },
      ],
      blocks: {
        overviewText:
          'A compact ESP32-based smart meter using the INA219 current/voltage sensor, streaming real-time power measurements over WebSerial for visualization and analysis.',
        skillsTools: [
          { k: 'Skills', v: 'Embedded C/C++, firmware bring-up, I2C Communication, Serial Protocols, Data Acquisition, Calibration, Error Analysis, Real-Time System Debugging' },
          { k: 'Tools', v: 'ESP-IDF/Arduino IDE, Logic Analyzer, Oscilloscope, Multimeter' },
          { k: 'Hardware', v: 'ESP32 DevKitC, INA219 current/voltage sensor, level shifting, relay switching' },
          { k: 'Interfaces', v: 'WebSerial-Based Dashboard With Real-Time Plotting, Serial Protocol For Calibration And Debug' },
        ],
        architectureNotes: [
          'I²C communication between ESP32 and INA219 for precision power sensing.',
          'ISR-driven data sampling with buffering for smooth streaming.',
          'WebSerial pipeline for real-time measurement plotting in browser.',
          'Calibration hooks for measurement accuracy and drift compensation.'
        ],
        performance: [
          'Measurement accuracy: ±1.5% (after calibration).',
          'Sampling rate: up to 1 kHz effective throughput.',
          'Latency: ~45 ms',
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
        risks: [
          'Sensor saturation at high load → add shunt options.',
          'Noise coupling → ground routing rework on next PCB.',
          'Next: OTA updates + calibration wizard.',
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
      subtitle: 'Turning Arduino into a budget-friendly signal analyzer.',
      href: '/projects/oscilloscope',
      tags: ['Arduino','Oscilloscope','Signal Processing'],
      heroImage: '/images/oscilloscope.png',
      gallery: [{ src: '/images/oscilloscope-1.jpg', caption: 'Waveform capture' }],
      blocks: {
        overviewText: 'DIY Arduino-based oscilloscope that samples analog signals via the Arduino’s ADC and streams data to a custom Processing GUI for real-time waveform visualization.',
        skillsTools: [
          { k: 'Skills', v: 'ADC sampling, software triggering, signal conditioning, real-time visualization, data buffering',},
          { k: 'Tools', v: 'Arduino IDE, Processing, Serial communication' },
          { k: 'Hardware', v: 'Arduino Uno R3, Voltage divider network, Potentiometers, USB' },
        ],
        architectureNotes: ['Circular buffer for continuous sampling', 'Software trigger for stable waveform display', 'Adjustable Volt/Div and Time/Div via potentiometers','Processing-based GUI with overlays and grid calibration','Interactive cursors for quick measurements'],
        performance: ['10-bit ADC resolution', '~5 kS/s sampling rate', 'Basic cursor measurements for amplitude and time differences','Real-time waveform plotting','Adjustable scales (Volt/Div, Time/Div)'],
        benchmarks: [{ k: 'Latency', v: '~60 ms end-to-end' },{ k: ' ', v: 'Smooth real-time display with minimal frame drops under normal load' }],
        timeline: ['Week 1 — ADC integration: Verified Arduino Uno ADC performance, buffering, and sampling rate.', 'Week 2 — Trigger &  Visualization: Implemented software trigger logic and real-time waveform drawing in Processing', 'Week 3 — Data Export: Added functionality to save captured signals as CSV for offline analysis.'],
        risks: ['Aliasing at higher frequencies: Limited by ~5 kS/s sampling; signals above ~2 kHz require external anti-aliasing filtering.', 'Planned Improvements: Add hardware front-end (op-amp conditioning), dual-channel support, and more advanced measurement tools (FFT, RMS).'],
        links: [{ label: 'Repo', href: '#' }],
      },
    },
  ]
  
  // ---------- READINGS ----------
  export const READINGS = [
    {
      id: 'book1',
      title: 'Steve Jobs',
      subtitle: 'Walter Isaacson',
      href: '/readings/book1',
      tags: ['Biography'],
      heroImage: '/SteveJobsImage.jpg',
      gallery: [{ src: '/images/book1-quote.jpg', caption: 'Favorite passage' }],
      blocks: {
        overviewText:
          'Based on over forty interviews with Jobs himself, Walter Isaacsons Steve Jobs provides a comprehensive and unflinching look at the Apple co-founders extraordinary life. It chronicles his journey from an adopted child in Silicon Valley to a visionary leader who revolutionized several industries, including personal computers, animated movies (Pixar), and mobile devices. The biography explores his unique and often-contradictory personality, characterized by a demanding perfectionism, a "reality distortion field" that pushed his teams to achieve the impossible, and a ruthless side that created friction with employees and competitors. Isaacson offers a balanced portrait of a complex figure, highlighting how Jobs passion for marrying technology with the liberal arts ultimately fueled his genius and shaped his legacy.',
        review:
          ' ',
        quotes: [
          'Picasso had a saying—‘good artists copy, great artists steal’—and we have always been shameless about stealing great ideas',
          'Some people say, ‘Give the customers what they want.’ But that’s not my approach. Our job is to figure out what they’re going to want before they do… People don’t know what they want until you show it to them.',
          'A person was either a hero or a bozo, a product was either amazing or shit.',
          'Simplicity that is the ultimate of sophistication.'
        ],
        keyIdeas: ['Innovation over market research', 'Cross-disciplinary inspiration', 'Perfectionism and intensity','Legacy of integrated ecosystems','Think different mindset'],
        who: ['Product Managers', 'Designers', 'Apple Fans','Entrepreneurs'],
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
      title: 'Play Nice But Win',
      subtitle: 'Michael Dell',
      href: '/readings/book2',
      tags: ['Autobiography'],
      heroImage: '/PlayNiceButWin.jpg',
      gallery: [],
      blocks: {
        overviewText:
          'In Play Nice But Win, Michael Dell provides a personal account of his career, from starting a computer business in his college dorm room to leading Dell Technologies through some of its most challenging moments. The book details three key battles: the launch of his company, the fight to take it private in 2013 against activist investor Carl Icahn, and the transformation of the business through the massive acquisition of EMC in 2016. Throughout his story, Dell shares lessons on leadership, the importance of a long-term vision over short-term market pressures, and how a guiding principle of "playing nice but winning" shaped his approach to building a company that would last.',
        review:
          ' ',
        quotes: ['In business you can surround yourself with the smartest people, you can plan ahead with the greatest care and intelligence, but one thing you can count on is that from time to time you’ll get smacked in the face with a flounder—aka something you’d never anticipated.','Growth covers up a lot of sins.','The way I describe this when talking with businesspeople is that the domain of technology is no longer in the IT department; the whole company is technology. I’m talking about all companies. If you’re trying to make cars or medical devices or any kind of product at all, and you want to have new customers, technology is the fulcrum of progress in everything you’re doing.','A corporation is a living organism. It has to continue to shed its skin. Methods have to change. Focus has to change. Values have to change. The sum total of those changes is transformation.'],
        keyIdeas: ['Playing nice—but winning with integrity', 'Transformation is a constant necessity', 'Balancing profit, growth, and market share','Going private to regain agility','Deep customer empathy'],
        who: ['Managers', 'Engineers','Entrepreneurs','Business and Tech Students'],
        rating: 4,
        bibliography: [{ k: 'Author', v: 'Marty Cagan' }],
        links: [{ label: 'Summary', href: '#' }],
      },
    },
    {
      id: 'book3',
      title: 'Zero to One',
      subtitle: 'Peter Theil',
      href: '/readings/book3',
      tags: ['Star-Up'],
      heroImage: '/ZeroToOne.jpg',
      gallery: [{ src: '/images/book1-quote.jpg', caption: 'Favorite passage' }],
      blocks: {
        overviewText:
          'Zero to One by Peter Thiel is a book about building unique, innovative businesses by creating something entirely new (going from 0 to 1) rather than copying or iterating on existing ideas (going from 1 to n). Thiel, a PayPal co-founder and investor, argues that true progress comes from vertical innovation and developing a monopoly in a new market, not from competition in an existing one. The book provides insights into how to achieve this, offering a framework for creating value through original thinking and identifying unique, defensible business ideas.',
        review:
          ' ',
        quotes: [
          'The biggest leaps in value come from creating something entirely new (going from 0 to 1), not by copying what already exists(1 to n)',
          'The best businesses dominate a small niche first, then expand.',
          'Technology should aim for 10x improvements, not incremental gains.',
          'The “last mover advantage” matters; build something so strong that you become the final innovator in a space.',
          'Distribution is as important as product; great tech alone doesn’t sell itself.'
        ],
        keyIdeas: ['Start small, scale later', 'Sales and distribution matter', 'Timing is everything', 'Zero to One vs. One to Many'],
        who: ['Aspiring Entrepreneurs', 'Startup Founders', 'Business Students',"Engineers"],
        rating: 5,
        bibliography: [
          { k: 'Author', v: 'Clayton M. Christensen' },
          { k: 'Published', v: '1997' },
        ],
        links: [{ label: 'Notes', href: '#' }],
      },
    },
  ]
  