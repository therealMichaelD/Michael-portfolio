// App.jsx
// =====================================================
// HOW TO EDIT CONTENT (TEXT + IMAGES) ✍️🖼️
// 1) Scroll down to the DATA SECTION (around line ~80).
// 2) For each item under PRODUCTS / PROJECTS / READINGS, edit:
//    - title, subtitle
//    - heroImage (main image on detail page)
//    - gallery: add more images (URLs) + optional captions
//    - blocks: you can edit each block's copy, lists, stats, reviews, etc.
// 3) Every place that says  ✅ EDIT TEXT HERE  or  🖼️ ADD/CHANGE IMAGE HERE
//    is safe to modify. These are plain strings/arrays—no code changes required.
// 4) You can also add/remove entire blocks (e.g., add a new "features" entry or
//    another "review")—the UI will render them automatically.
// =====================================================

import './index.css'
import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink, useLocation, useParams, Link } from 'react-router-dom'
import { Mail, Github, Linkedin, FileDown, ArrowRight, Star } from 'lucide-react'

// =====================================================
// PORTFOLIO — Minimal, responsive, emerald-accented
// - Mobile hamburger menu
// - Green accents (headings, dividers, hover states)
// - Detail pages adapt by section: Products / Projects / Readings
// - Modular, individually-editable blocks with image galleries
// =====================================================

const PROFILE = {
  name: 'Michael Dang',
  tagline: 'Engineering Management and Electrical Engineering @ Dartmouth',
  headline: 'All-in on Tech Management',
  subhead: '',
  email: 'Michael.Dang3000@gmail.com',
  github: 'https://github.com/therealMichaelD',
  linkedin: 'https://www.linkedin.com/in/michaeldang1/',
  resumeUrl: '/Michael_Dang_Resume.pdf',
  headshot: '/HomePagePhoto.jpg',          // 🖼️ ADD/CHANGE IMAGE HERE (Home hero)
  aboutPhoto: '/PortfolioHeadshot.jpg',    // 🖼️ ADD/CHANGE IMAGE HERE (About photo)
}

// =====================================================
// ================   D A T A   S E C T I O N  =========
// =====================================================
// ⚠️ Everything below is safe to edit. You can:
//  - change text (strings) ✅
//  - add/remove list items ✅
//  - update image paths ✅
//  - add or remove entire blocks ✅

// ---------- PRODUCTS ----------
const PRODUCTS = [
  {
    id: 'resume-insights',
    title: 'Resume Insights', // ✅ EDIT TEXT HERE
    subtitle: 'Upload a PDF → get impact bullets, metrics, ATS tips.', // ✅
    href: '/products/resume-insights',
    tags: ['ATS', 'NLP', 'Metrics'], // ✅
    heroImage: '/images/resume-insights.png', // 🖼️ ADD/CHANGE IMAGE HERE
    gallery: [ // 🖼️ Add as many images as you want
      { src: '/images/resume-insights-1.png', caption: 'Upload screen' },
      { src: '/images/resume-insights-2.png', caption: 'Insights view' },
    ],
    blocks: {
      // ✅ Overview copy shown in the accent card
      overviewText:
        'Turn a resume PDF into crisp, metric-forward bullets with ATS-friendly structure in under a minute.',

      // ✅ Problem & Audience as key-value rows
      problemAudience: [
        { k: 'Primary user', v: 'Student / early‑career applicant' },
        { k: 'JTBD', v: 'Translate experience into impact bullets faster' },
        { k: 'Pain', v: 'Hard to quantify and tailor quickly' },
        { k: 'Alternatives', v: 'Manual editing, generic templates' },
      ],

      // ✅ Features list
      features: [
        'Guided flow from input → output with sensible defaults.',
        'Metrics surfaced: success rate, coverage, quality score.',
        'Export as PDF/CSV and quick-copy of bullets.',
        'Error handling and recovery for messy PDFs.',
      ],

      // ✅ How it works key-values
      howItWorks: [
        { k: 'Input', v: 'PDF resume → text extraction' },
        { k: 'Processing', v: 'NLP chunking, scoring, ATS heuristics' },
        { k: 'Output', v: 'Impact bullets + metrics + tips' },
        { k: 'Safeguards', v: 'Client-side pre-checks, error messaging' },
      ],

      // ✅ KPI mini-stats (3 will look best)
      kpis: [
        { label: 'Active users', value: '~120', caption: 'last 30 days' },
        { label: 'Time to value', value: '< 60s', caption: 'upload → insights' },
        { label: 'Retention', value: '38%', caption: '28‑day repeat' },
      ],

      // ✅ Adoption metrics block (shown as two Stat boxes by default)
      adoptionMetrics: [
        { label: 'CSAT', value: '4.6/5' },
        { label: 'Export rate', value: '72%' },
      ],

      // ✅ User reviews
      reviews: [
        { quote: 'I shipped a better resume in one sitting. The metric prompts are clutch.', author: 'CS undergrad' },
        { quote: 'Great default suggestions; saved me ~2 hours.', author: 'PM bootcamp student' },
      ],

      // ✅ Changelog simple list
      changelog: [
        'v0.3 — Added export to CSV; improved ATS heuristics.',
        'v0.2 — Stabilized PDF parser; added metric suggestions.',
        'v0.1 — MVP with upload → bullets.',
      ],

      // ✅ Optional right-sidebar quick facts
      atAGlance: [
        { k: 'Status', v: 'Beta' },
        { k: 'Licensing', v: 'Free for students' },
      ],

      // ✅ Links on the right sidebar (replace # with real links)
      links: [
        { label: 'Demo', href: '#' },
        { label: 'Repo', href: '#' },
        { label: 'Writeup', href: '#' },
      ],
    },
  },

  // You can duplicate the object above for more products:
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
        { label: '7‑day retention', value: '42%', caption: '' },
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
const PROJECTS = [
  {
    id: 'power-meter',
    title: 'ESP32 Smart Power Meter',
    subtitle: 'Live voltage, current, energy in browser.',
    href: '/projects/power-meter',
    tags: ['ESP32', 'INA219', 'WebSerial'],
    heroImage: '/images/power-meter.png', // 🖼️ main project image
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
        'End‑to‑end latency: ~45 ms (p95).',
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
        'Week 4 — Long‑run test & performance report.',
      ],
      bom: [
        'ESP32 DevKit‑C',
        'INA219 current sensor',
        'IRM‑05‑5 PSU, relay, terminal blocks',
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
      overviewText: 'Simple 1‑ch scope using ADC sampling + Processing visualizer.',
      skillsTools: [
        { k: 'Skills', v: 'ADC, triggers, signal conditioning' },
        { k: 'Tools', v: 'Arduino IDE, Processing' },
      ],
      architectureNotes: ['Circular buffer', 'Software trigger', 'Downsampling'],
      performance: ['10‑bit ADC', '~5 kS/s', 'Basic cursor measurements'],
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
const READINGS = [
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
        '“The reason that it is so difficult for existing firms to capitalize on disruptive innovations is that their processes and their business model that make them good at the existing business actually make them bad at competing in the disruption.”',
        '“Disruptive technologies typically underperform established products in mainstream markets.”',
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
      quotes: ['“The role of product is to discover a product that is valuable, usable and feasible.”'],
      keyIdeas: ['Dual-track discovery/delivery', 'Outcome > output', 'Empowered teams'],
      who: ['Early-career PMs', 'Tech leads partnering with PM'],
      rating: 4,
      bibliography: [{ k: 'Author', v: 'Marty Cagan' }],
      links: [{ label: 'Summary', href: '#' }],
    },
  },
]

// =====================================================
// ==================  U I   H E L P E R S  ============
// =====================================================

const Container = ({ children, className='' }) => (
  <div className={`max-w-[1320px] xl:max-w-[1440px] mx-auto px-4 sm:px-8 ${className}`}>{children}</div>
)

const SectionHeading = ({ children }) => (
  <div>
    <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-black">{children}</h1>
    <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600" />
  </div>
)

const AccentBar = () => (
  <div className="h-px w-full bg-gradient-to-r from-emerald-300/60 via-emerald-500/40 to-emerald-300/60" />
)

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-emerald-300/70 bg-emerald-50 px-2.5 py-1 text-xs text-emerald-800">
    {children}
  </span>
)

const Stat = ({ label, value, caption }) => (
  <div className="rounded-2xl border border-emerald-200 bg-white p-4">
    <p className="text-xs uppercase tracking-wide text-emerald-700">{label}</p>
    <p className="mt-1 text-xl font-semibold text-zinc-900">{value}</p>
    {caption ? <p className="text-xs text-zinc-600 mt-1">{caption}</p> : null}
  </div>
)

const KeyValue = ({ items=[] }) => (
  <dl className="grid sm:grid-cols-2 gap-3">
    {items.map((kv, idx) => (
      <div key={idx} className="rounded-2xl border border-black/10 bg-white p-4">
        <dt className="text-xs uppercase tracking-wide text-zinc-600">{kv.k}</dt>
        <dd className="mt-1 text-sm text-zinc-900">{kv.v}</dd>
      </div>
    ))}
  </dl>
)

const ImageTile = ({ src, alt='', className='' }) => (
  <div className={`rounded-[28px] overflow-hidden ${className} bg-gradient-to-br from-emerald-50 via-zinc-100 to-zinc-200`}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
      onError={(e) => e.currentTarget.remove()}
      className="w-full h-full object-cover opacity-0 transition-opacity duration-300"
    />
  </div>
)

const Gallery = ({ images=[] }) => {
  if (!images.length) return null
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {images.map((im, i) => (
        <div key={i}>
          <ImageTile src={im.src} alt={im.caption || `image-${i}`} className="aspect-[4/3]" />
          {im.caption ? <p className="mt-1 text-xs text-zinc-600">{im.caption}</p> : null}
        </div>
      ))}
    </div>
  )
}

const TileCard = ({ item }) => (
  <Link
    to={item.href}
    className="group rounded-[32px] overflow-hidden border bg-white text-black border-black/10 hover:border-emerald-400/70 hover:shadow-[0_8px_24px_rgba(16,185,129,0.15)] transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
  >
    <div className="p-7 sm:p-9">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-2xl sm:text-[28px] font-semibold tracking-tight">{item.title}</h3>
      </div>
      <p className="mt-2 text-zinc-700 text-sm sm:text-base">{item.subtitle}</p>
      {item.tags?.length ? (
        <div className="mt-3 flex gap-2 flex-wrap">{item.tags.slice(0,3).map((t)=> <Badge key={t}>{t}</Badge>)}</div>
      ) : null}
    </div>
    <ImageTile src={item.heroImage} className="aspect-[16/10]" />
    <div className="p-5 sm:p-6">
      <span className="inline-flex items-center gap-2 text-emerald-700 group-hover:text-emerald-800">
        View details <ArrowRight className="w-4 h-4" />
      </span>
    </div>
  </Link>
)

const TileGrid = ({ items }) => (
  <div className="grid gap-5 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
    {items.map((p) => (
      <TileCard key={p.id} item={p} />
    ))}
  </div>
)

// Reusable cards for detail pages (individually editable)
const SectionCard = ({ title, children, tone='neutral' }) => {
  const tones = {
    neutral: 'border-black/10 bg-white',
    accent: 'border-emerald-200 bg-emerald-50/40',
  }
  return (
    <div className={`rounded-2xl p-4 sm:p-5 ${tones[tone]} border`}>
      <h4 className="font-medium text-black">{title}</h4>
      <div className="mt-2 space-y-2 text-sm sm:text-base text-zinc-700">{children}</div>
    </div>
  )
}

const ReviewCard = ({ quote, author }) => (
  <div className="rounded-2xl border border-emerald-200 bg-white p-4">
    <p className="text-sm text-zinc-800">“{quote}”</p>
    <p className="mt-2 text-xs text-emerald-700">— {author}</p>
  </div>
)

const Footer = () => (
  <footer className="border-t border-black/10 bg-white">
    <Container className="py-8 sm:py-10 grid sm:grid-cols-2 gap-6 text-sm text-zinc-600">
      <div className="space-y-1">
        <p>© {new Date().getFullYear()} {PROFILE.name}</p>
        <p>Built with React + Tailwind. Deployed on Vercel.</p>
      </div>
      <div className="flex flex-wrap items-center gap-3 sm:justify-end">
        <a href={`mailto:${PROFILE.email}`} className="hover:text-emerald-700 inline-flex items-center gap-2"><Mail className="w-4 h-4"/>Email</a>
        <a href={PROFILE.github} className="hover:text-emerald-700 inline-flex items-center gap-2"><Github className="w-4 h-4"/>GitHub</a>
        <a href={PROFILE.linkedin} className="hover:text-emerald-700 inline-flex items-center gap-2"><Linkedin className="w-4 h-4"/>LinkedIn</a>
        <a href={PROFILE.resumeUrl} className="hover:text-emerald-700 inline-flex items-center gap-2"><FileDown className="w-4 h-4"/>Resume</a>
      </div>
    </Container>
  </footer>
)

const CTAButton = ({ href, children }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-5 py-3 text-sm sm:text-base font-medium hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
  >
    {children} <ArrowRight className="w-4 h-4" />
  </a>
)

const GhostButton = ({ href, children }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 rounded-full border border-emerald-300 px-5 py-3 text-sm sm:text-base hover:border-emerald-500 text-emerald-700 hover:text-emerald-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
  >
    {children}
  </a>
)

// ---------- Nav (Desktop + Mobile) ----------
const NavLinks = ({ onNavigate }) => (
  <>
    <NavLink to="/about" onClick={onNavigate} className={({isActive})=>`hover:text-emerald-700 ${isActive?'text-emerald-700 underline decoration-emerald-500 underline-offset-4':''}`}>About</NavLink>
    <NavLink to="/products" onClick={onNavigate} className={({isActive})=>`hover:text-emerald-700 ${isActive?'text-emerald-700 underline decoration-emerald-500 underline-offset-4':''}`}>Products</NavLink>
    <NavLink to="/projects" onClick={onNavigate} className={({isActive})=>`hover:text-emerald-700 ${isActive?'text-emerald-700 underline decoration-emerald-500 underline-offset-4':''}`}>Projects</NavLink>
    <NavLink to="/readings" onClick={onNavigate} className={({isActive})=>`hover:text-emerald-700 ${isActive?'text-emerald-700 underline decoration-emerald-500 underline-offset-4':''}`}>Readings</NavLink>
    <NavLink to="/contact" onClick={onNavigate} className={({isActive})=>`hover:text-emerald-700 ${isActive?'text-emerald-700 underline decoration-emerald-500 underline-offset-4':''}`}>Contact</NavLink>
  </>
)

const MobileMenu = ({ open, setOpen }) => {
  const ref = useRef(null)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location.pathname, setOpen])
  useEffect(() => {
    function onClick(e) {
      if (open && ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    function onEsc(e) { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onEsc)
    }
  }, [open, setOpen])

  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 sm:hidden" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-black/20" />
      <div
        ref={ref}
        className="absolute top-2 right-2 left-2 rounded-2xl border border-emerald-300/60 bg-white p-4 shadow-lg"
      >
        <div className="flex items-center justify-between">
          <span className="font-semibold text-emerald-700">Menu</span>
          <button
            onClick={()=>setOpen(false)}
            className="rounded-full px-3 py-1.5 text-sm border border-black/10 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Close menu"
          >
            Close
          </button>
        </div>
        <nav className="mt-3 grid gap-2 text-base">
          <NavLinks onNavigate={()=>setOpen(false)} />
          <a href={PROFILE.resumeUrl} className="mt-2 inline-flex items-center justify-center rounded-full border border-emerald-300 px-4 py-2.5 hover:border-emerald-500 text-emerald-700">
            Resume
          </a>
        </nav>
      </div>
    </div>
  )
}

const Nav = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-black/10 supports-[padding:max(0px)] pt-safe">
      {/* Top emerald hairline */}
      <div className="h-0.5 w-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400" />
      {/* Skip link */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:m-2 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:ring-2 focus:ring-emerald-600">
        Skip to content
      </a>
      <Container className="h-14 flex items-center justify-between text-black">
        <NavLink to="/" className="font-semibold tracking-tight text-emerald-700">
          Michael Dang
        </NavLink>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <NavLinks />
          <a
            href={PROFILE.resumeUrl}
            className="rounded-full border border-emerald-300 px-3 py-1.5 hover:border-emerald-500 text-emerald-700"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden rounded-full border border-emerald-300 px-3 py-2 text-sm hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          onClick={()=>setOpen((v)=>!v)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </Container>

      <MobileMenu open={open} setOpen={setOpen} />
    </div>
  )
}

// ---------- Pages ----------
// Minimal Home (giant heading, short desc, huge photo)
const HomePage = () => (
  <main id="main" className="bg-white text-black">
    <section className="pt-12 sm:pt-24">
      <Container>
        <div className="text-left">
          <h1 className="text-[44px] sm:text-[92px] leading-[1.08] sm:leading-[1.05] font-semibold tracking-tight">
            Hey, I'm Michael.<br/>All-In On Tech Management.
          </h1>
          <p className="mt-3 sm:mt-4 text-xl sm:text-3xl text-emerald-800 max-w-3xl">
            {PROFILE.tagline}
          </p>
        </div>
      </Container>
    </section>

    <section className="py-6 sm:py-14">
      <Container>
        {/* 🖼️ Home hero image, change in PROFILE.headshot above */}
        <ImageTile src={PROFILE.headshot} className="aspect-[16/9] sm:aspect-[16/6]" />
      </Container>
    </section>
  </main>
)

// About page — clean spacing between paragraphs
const AboutPage = () => (
  <main className="bg-white text-black">
    <section className="pt-10 sm:pt-16">
      <Container>
        <SectionHeading>About me</SectionHeading>
        <p className="mt-2 text-zinc-700 text-sm sm:text-base">
          {PROFILE.subhead}
        </p>
        <div className="mt-4"><AccentBar /></div>

        <div className="mt-6 grid md:grid-cols-[1.2fr_.8fr] gap-6 xl:gap-8 items-start">
          {/* Bio block (left) */}
          <div className="rounded-[28px] border border-emerald-200 p-5 sm:p-7 bg-emerald-50/30 space-y-4">
            {/* ✅ EDIT TEXT HERE (About paragraphs) */}
            <p className="text-zinc-800 text-base sm:text-lg leading-7">
              Hi, I’m Michael Dang — a Master’s in Engineering Management and Bachelor’s in Electrical Engineering student at Dartmouth College, passionate about technology management and building at the intersection of software and hardware.
            </p>
            <p className="text-zinc-800 text-base sm:text-lg leading-7">
              Originally from Toronto, Canada, I’m especially interested in semiconductors, software, and product management, where I can combine technical depth with strategic thinking to create impactful solutions.
            </p>
            <p className="text-zinc-800 text-base sm:text-lg leading-7">
              I love exploring side projects that push me to learn and build. A few of my favorite builds include a TinyML wake-word lamp, an Arduino-based oscilloscope, and an ESP32 Smart Power Meter.
            </p>
            <p className="text-zinc-800 text-base sm:text-lg leading-7">
              Outside of work and school, you’ll often find me supporting my Toronto sports teams, running, spending time outdoors, or diving into books and podcasts on tech, leadership, and innovation.
            </p>
            <p className="text-zinc-800 text-base sm:text-lg leading-7">
              I’m currently seeking an Engineering or Tech Management internship for Summer 2026, where I can contribute my skills and continue growing at the intersection of technology and business.
            </p>
          </div>

          {/* Headshot (right) */}
          <div>
            {/* 🖼️ About image, change in PROFILE.aboutPhoto above */}
            <ImageTile src={PROFILE.aboutPhoto || PROFILE.headshot} className="aspect-[4/5]" />
          </div>
        </div>
      </Container>
    </section>
  </main>
)

// -------------- List Pages
const ProductsPage = () => (
  <main className="bg-white text-black">
    <section className="pt-10 sm:pt-16">
      <Container>
        <SectionHeading>Products</SectionHeading>
        <p className="mt-2 text-zinc-700 text-sm sm:text-base">PM‑style side projects that highlight problem framing, metrics, and outcomes.</p>
        <div className="mt-4"><AccentBar /></div>
        <div className="mt-6">
          <TileGrid items={PRODUCTS} />
        </div>
      </Container>
    </section>
  </main>
)

const ProjectsPage = () => (
  <main className="bg-white text-black">
    <section className="pt-10 sm:pt-16">
      <Container>
        <SectionHeading>Projects</SectionHeading>
        <p className="mt-2 text-zinc-700 text-sm sm:text-base">Engineering builds aimed at rigor, performance, and reliability.</p>
        <div className="mt-4"><AccentBar /></div>
        <div className="mt-6">
          <TileGrid items={PROJECTS} />
        </div>
      </Container>
    </section>
  </main>
)

const ReadingsPage = () => (
  <main className="bg-white text-black">
    <section className="pt-10 sm:pt-16">
      <Container>
        <SectionHeading>Readings</SectionHeading>
        <p className="mt-2 text-zinc-700 text-sm sm:text-base">Books, articles, and media reviews related to engineering, PM, and entrepreneurship.</p>
        <div className="mt-4"><AccentBar /></div>
        <div className="mt-6">
          <TileGrid items={READINGS} />
        </div>
      </Container>
    </section>
  </main>
)

// -------------- Detail Page Template
const datasetByType = {
  products: PRODUCTS,
  projects: PROJECTS,
  readings: READINGS,
}

function findItem(type, id) {
  const list = datasetByType[type] || []
  return list.find((x) => x.id === id)
}

// Helpers for Readings rating stars
const Stars = ({ value = 4 }) => {
  const full = Math.max(0, Math.min(5, Math.round(value)))
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < full ? 'fill-emerald-500 text-emerald-500' : 'text-zinc-300'}`} />
      ))}
    </div>
  )
}

const ItemDetail = ({ type }) => {
  const { id } = useParams()
  const item = findItem(type, id)

  if (!item) {
    return (
      <main className="bg-white text-black">
        <section className="pt-10 sm:pt-16">
          <Container>
            <SectionHeading>Not found</SectionHeading>
            <p className="mt-3 text-zinc-700">We couldn’t find that entry. Try the list page.</p>
            <div className="mt-5 flex gap-3">
              <GhostButton href={`/${type}`}>Back to {type}</GhostButton>
            </div>
          </Container>
        </section>
      </main>
    )
  }

  const B = item.blocks || {}

  return (
    <main className="bg-white text-black">
      <section className="pt-10 sm:pt-16">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <SectionHeading>{item.title}</SectionHeading>
            <Link
              to={`/${type}`}
              className="hidden sm:inline-flex items-center rounded-full border border-emerald-300 px-4 py-2 text-emerald-700 hover:border-emerald-500"
            >
              ← Back to {type}
            </Link>
          </div>
          <p className="mt-2 text-zinc-700">{item.subtitle}</p>

          <div className="mt-4"><AccentBar /></div>

          {/* Layout: main column (left) with stacked blocks, sidebar (right) */}
          <div className="mt-6 grid md:grid-cols-[1.2fr_.8fr] gap-6 xl:gap-8 items-start">
            {/* LEFT */}
            <div className="space-y-4 sm:space-y-5">
              {/* 🖼️ Detail hero image */}
              <ImageTile src={item.heroImage} className="aspect-[16/9]" />

              {/* 🖼️ Optional gallery — add images in item.gallery */}
              <Gallery images={item.gallery} />

              {/* Shared Overview */}
              {(B.overviewText || item.tags?.length) && (
                <SectionCard title={type === 'products' ? 'Overview' : type === 'projects' ? 'Technical Overview' : 'Book Overview'} tone="accent">
                  {/* ✅ EDIT TEXT HERE: overviewText in DATA SECTION */}
                  {B.overviewText && <p>{B.overviewText}</p>}
                  {item.tags?.length ? (
                    <div className="flex flex-wrap gap-2 pt-1">{item.tags.map((t)=> <Badge key={t}>{t}</Badge>)}</div>
                  ) : null}
                </SectionCard>
              )}

              {/* === PRODUCTS BLOCKS === */}
              {type === 'products' && (
                <>
                  {B.problemAudience?.length ? (
                    <SectionCard title="Problem & Audience">
                      {/* ✅ EDIT TEXT HERE: problemAudience (key-value list) */}
                      <KeyValue items={B.problemAudience} />
                    </SectionCard>
                  ) : null}

                  {B.features?.length ? (
                    <SectionCard title="Key Features">
                      {/* ✅ EDIT TEXT HERE: features (bullet list) */}
                      <ul className="list-disc pl-5 space-y-1">
                        {B.features.map((f, i) => <li key={i}>{f}</li>)}
                      </ul>
                    </SectionCard>
                  ) : null}

                  {B.howItWorks?.length ? (
                    <SectionCard title="How it Works">
                      {/* ✅ EDIT TEXT HERE: howItWorks (key-value list) */}
                      <KeyValue items={B.howItWorks} />
                    </SectionCard>
                  ) : null}

                  {B.kpis?.length ? (
                    <div className="grid sm:grid-cols-3 gap-3">
                      {/* ✅ EDIT TEXT HERE: kpis (mini-stat tiles) */}
                      {B.kpis.map((s, i) => <Stat key={i} {...s} />)}
                    </div>
                  ) : null}

                  {B.adoptionMetrics?.length ? (
                    <SectionCard title="Adoption & Metrics">
                      <dl className="grid grid-cols-2 gap-3">
                        {B.adoptionMetrics.map((m, i) => <Stat key={i} {...m} />)}
                      </dl>
                    </SectionCard>
                  ) : null}

                  {B.reviews?.length ? (
                    <SectionCard title="User Reviews">
                      <div className="grid sm:grid-cols-2 gap-3">
                        {B.reviews.map((r, i) => <ReviewCard key={i} quote={r.quote} author={r.author} />)}
                      </div>
                    </SectionCard>
                  ) : null}

                  {B.changelog?.length ? (
                    <SectionCard title="Changelog">
                      <ul className="text-sm space-y-1">
                        {B.changelog.map((c, i) => <li key={i}>• {c}</li>)}
                      </ul>
                    </SectionCard>
                  ) : null}
                </>
              )}

              {/* === PROJECTS BLOCKS === */}
              {type === 'projects' && (
                <>
                  {B.skillsTools?.length ? (
                    <SectionCard title="Skills & Tools">
                      {/* ✅ EDIT TEXT HERE: skillsTools (key-value list) */}
                      <KeyValue items={B.skillsTools} />
                    </SectionCard>
                  ) : null}

                  {B.architectureNotes?.length ? (
                    <SectionCard title="Architecture Notes">
                      {/* ✅ EDIT TEXT HERE: architectureNotes (bullets) */}
                      <ul className="list-disc pl-5 space-y-1">
                        {B.architectureNotes.map((n, i) => <li key={i}>{n}</li>)}
                      </ul>
                    </SectionCard>
                  ) : null}

                  {B.performance?.length ? (
                    <SectionCard title="Performance">
                      {/* ✅ EDIT TEXT HERE: performance (bullets) */}
                      <ul className="list-disc pl-5 space-y-1">
                        {B.performance.map((n, i) => <li key={i}>{n}</li>)}
                      </ul>
                    </SectionCard>
                  ) : null}

                  {B.benchmarks?.length ? (
                    <SectionCard title="Benchmarks">
                      {/* ✅ EDIT TEXT HERE: benchmarks (key-value list) */}
                      <KeyValue items={B.benchmarks} />
                    </SectionCard>
                  ) : null}

                  {B.timeline?.length ? (
                    <SectionCard title="Build Timeline">
                      {/* ✅ EDIT TEXT HERE: timeline (numbered list) */}
                      <ol className="list-decimal pl-5 space-y-1">
                        {B.timeline.map((t, i) => <li key={i}>{t}</li>)}
                      </ol>
                    </SectionCard>
                  ) : null}

                  {B.bom?.length ? (
                    <SectionCard title="Bill of Materials (BOM)">
                      {/* ✅ EDIT TEXT HERE: bom (bullets) */}
                      <ul className="list-disc pl-5 space-y-1">
                        {B.bom.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    </SectionCard>
                  ) : null}

                  {B.risks?.length ? (
                    <SectionCard title="Risks & Next Steps">
                      {/* ✅ EDIT TEXT HERE: risks (bullets) */}
                      <ul className="list-disc pl-5 space-y-1">
                        {B.risks.map((r, i) => <li key={i}>{r}</li>)}
                      </ul>
                    </SectionCard>
                  ) : null}
                </>
              )}

              {/* === READINGS BLOCKS === */}
              {type === 'readings' && (
                <>
                  {(B.review || B.overviewText) ? (
                    <SectionCard title="My Review" tone="accent">
                      {/* ✅ EDIT TEXT HERE: review (paragraph) */}
                      <p>{B.review || B.overviewText}</p>
                    </SectionCard>
                  ) : null}

                  {B.quotes?.length ? (
                    <SectionCard title="Interesting Quotes">
                      {/* ✅ EDIT TEXT HERE: quotes (bullets) */}
                      <ul className="list-disc pl-5 space-y-1">
                        {B.quotes.map((q, i) => <li key={i}>“{q}”</li>)}
                      </ul>
                    </SectionCard>
                  ) : null}

                  {B.keyIdeas?.length ? (
                    <SectionCard title="Key Ideas">
                      {/* ✅ EDIT TEXT HERE: keyIdeas (bullets) */}
                      <ul className="list-disc pl-5 space-y-1">
                        {B.keyIdeas.map((it, i) => <li key={i}>{it}</li>)}
                      </ul>
                    </SectionCard>
                  ) : null}

                  {B.who?.length ? (
                    <SectionCard title="Who Should Read">
                      {/* ✅ EDIT TEXT HERE: who (bullets) */}
                      <ul className="list-disc pl-5 space-y-1">
                        {B.who.map((it, i) => <li key={i}>{it}</li>)}
                      </ul>
                    </SectionCard>
                  ) : null}

                  {typeof B.rating === 'number' ? (
                    <SectionCard title="Overall Rating">
                      <div className="flex items-center gap-2">
                        <Stars value={B.rating} />
                        <span className="text-sm text-zinc-700">{B.rating}/5</span>
                      </div>
                    </SectionCard>
                  ) : null}
                </>
              )}
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="space-y-4 sm:space-y-5">
              {/* Links (all types) */}
              {B.links?.length ? (
                <SectionCard title="Links">
                  {/* ✅ EDIT TEXT HERE: links (right sidebar) */}
                  <ul className="text-sm text-emerald-800 space-y-1">
                    {B.links.map((lnk, i) => (
                      <li key={i}><a className="hover:underline" href={lnk.href}>{lnk.label}</a></li>
                    ))}
                  </ul>
                </SectionCard>
              ) : null}

              {/* Type-specific quick facts */}
              {type === 'products' && B.atAGlance?.length ? (
                <SectionCard title="At a Glance">
                  <KeyValue items={B.atAGlance} />
                </SectionCard>
              ) : null}

              {type === 'projects' && B.environment?.length ? (
                <SectionCard title="Environment">
                  <KeyValue items={B.environment} />
                </SectionCard>
              ) : null}

              {type === 'readings' && B.bibliography?.length ? (
                <SectionCard title="Bibliography">
                  <KeyValue items={B.bibliography} />
                </SectionCard>
              ) : null}

              <Link
                to={`/${type}`}
                className="sm:hidden inline-flex items-center rounded-full border border-emerald-300 px-4 py-2 text-emerald-700 hover:border-emerald-500"
              >
                ← Back to {type}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}

const ProductDetail = () => <ItemDetail type="products" />
const ProjectDetail  = () => <ItemDetail type="projects" />
const ReadingDetail  = () => <ItemDetail type="readings" />

// Expanded Contact page — consistent header + larger content to push footer down
const ContactPage = () => (
  <main className="bg-white text-black">
    <section className="pt-10 sm:pt-16 pb-20 sm:pb-28">
      <Container>
        <SectionHeading>Contact</SectionHeading>
        <div className="mt-4"><AccentBar /></div>

        <div className="mt-6">
          <div className="rounded-[28px] border border-emerald-200 p-6 sm:p-8 bg-emerald-50/30">
            <h3 className="text-2xl sm:text-[28px] font-semibold tracking-tight text-emerald-800">Contact Michael</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              <CTAButton href={`mailto:${PROFILE.email}`}>Email Michael</CTAButton>
              <GhostButton href={PROFILE.github}>GitHub</GhostButton>
              <GhostButton href={PROFILE.linkedin}>LinkedIn</GhostButton>
              <GhostButton href={PROFILE.resumeUrl}>Resume</GhostButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </main>
)

// ---------- Root App ----------
export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-white text-black min-h-screen">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetail />} />

          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />

          <Route path="/readings" element={<ReadingsPage />} />
          <Route path="/readings/:id" element={<ReadingDetail />} />

          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
