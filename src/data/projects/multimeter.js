const multimeter = {
    id: 'multimeter',
    title: 'Arduino Multimeter',
    subtitle: 'Compact Arduino-powered multimeter',
    href: '/projects/multimeter',
    tags: ['Arduino','Multimeter','Measurement','Electronics Test'],
    heroImage: '/ArduinoMultimeter.jpeg',

    gallery: [
      { src: '/ArduinoOscilloscopeGUI.png', caption: 'Processing GUI' },
      // { src: '/am-radio/envelope-scope.png', caption: 'Envelope detector scope capture' },
    ],

    blocks: {
      overviewText: 'DIY Arduino-based digital multimeter that measures DC voltage, DC current, resistance, continuity/diode, and frequency. Uses protected input networks and a high-resolution ADC, with results shown on a compact OLED UI and streamed over serial for logging.',
      skillsTools: [
        { k: 'Skills', v: 'Signal conditioning, precision referencing & calibration, input protection, ADC interfacing, interrupt timing, UI design, data logging',},
        { k: 'Tools', v: 'Arduino IDE, PlatformIO (optional), Serial Plotter/CSV logging, KiCad (schematics), Digital Calipers & reference parts for calibration' },
        { k: 'Hardware', v: 'Arduino Uno R3 (or Nano), ADS1115 16-bit ADC (I²C), INA219 (current shunt monitor) or 0.1 Ω shunt + op-amp, 0.96″ I²C OLED, rotary encoder + push button, piezo buzzer, precision resistors (0.1–1%), PTC + TVS + fusible input protection, selector relays/MOSFETs (range switching), USB/9 V supply' },
      ],
      architectureNotes: ['Protected front-end with resistive divider for voltage measurement', 'Low-side shunt resistor for current measurement', 'Resistance mode using voltage divider with reference resistor','Continuity & diode check via current-limited source and buzzer feedback','Rotary encoder for mode selection and navigation','OLED display for real-time readings','Serial output for logging and offline analysis'],
      performance: ['10-bit ADC resolution', 'up to 25 V DC, ~±2% accuracy after calibration', 'up to 1–2 A DC, ±5% typical','0–1 MΩ, ±5% typical','~5–10 readings/s on OLED'],
      timeline: ['Week 1 — Voltage, Current, and Resistance: Implemented divider network and ADC readout, verified vs bench supply. Added shunt resistor, ohmmeter mode, and buzzer for continuity.', 'Week 2 — Display and Calibration: Integrated OLED Screen and added Calibration Constants'],
      risks: ['Improve accuracy with external ADC', 'Add autoranging for voltage, current, and resistance','Expand to AC voltage measurement with RMS conversion','Add frequency counter using interrupts and timers','Enclosure with labeled jacks and protection fuses'],
      links: [{ label: 'Repo', href: '#' }],
    },
  }
  
  export default multimeter