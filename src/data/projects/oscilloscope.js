const oscilloscope = {
    id: 'oscilloscope',
    title: 'Arduino Oscilloscope',
    subtitle: 'Turning Arduino into a budget-friendly signal analyzer.',
    href: '/projects/oscilloscope',
    tags: ['Arduino','Oscilloscope','Signal Processing'],
    heroImage: '/OWiring.jpg',
    gallery: [{ src: '/ArduinoOscilloscopeGUI.png', caption: 'Serial UI' }],
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
      repo: 'therealMichaelD/Arduino_Osciloscope',
      
    },
  }
  
  export default oscilloscope