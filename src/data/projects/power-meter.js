const powerMeter = {
    id: 'power-meter',
    title: 'ESP32 Smart Power Meter',
    subtitle: 'Compact smart meter for precision current and voltage measurement.',
    href: '/projects/power-meter',
    tags: ['ESP32', 'INA219', 'WebSerial'],
    heroImage: '/ESP32SmartMeterGUI.jpg', // 🖼️
    gallery: [
      { src: '/ESP32Wiring.jpeg', caption: 'Breadboard prototype' }, // 🖼️ add more
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

      repo: 'therealMichaelD/ESP32_SmartMeter_Code',

    },
  }
  
  export default powerMeter