import './index.css'
import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink, useLocation, useParams, Link } from 'react-router-dom'
import { Mail, Github, Linkedin, FileDown, ArrowRight, Star } from 'lucide-react'

// =====================================================
/* PORTFOLIO — Minimal, responsive, emerald-accented
   - Mobile hamburger menu
   - Green accents (headings, dividers, hover states)
   - Detail pages adapt by section: Products / Projects / Readings
*/
// =====================================================

const PROFILE = {
  name: 'Michael Dang',
  tagline: 'Engineering Management and Electrical Engineering @ Dartmouth',
  headline: 'I build software and hardware.',
  subhead: 'Embedded systems, energy monitors, and clean UX. I ship real things.',
  email: 'your.email@dartmouth.edu',
  github: 'https://github.com/your-handle',
  linkedin: 'https://www.linkedin.com/in/your-handle/',
  resumeUrl: '/Michael_Dang_Resume.pdf',
  headshot: '/images/headshot.jpg',          // Home hero photo (big)
  aboutPhoto: '/images/about-headshot.jpg',  // Optional different photo for About
}

// ---------- Data ----------
const PRODUCTS = [
  { id: 'resume-insights', title: 'Resume Insights', subtitle: 'Upload a PDF → get impact bullets, metrics, ATS tips.', image: '/images/resume-insights.png', href: '/products/resume-insights', tags: ['ATS', 'NLP', 'Metrics'] },
  { id: 'habit-metrics', title: 'Habit Metrics Dashboard', subtitle: 'North-star + input metrics, retention, alerts.', image: '/images/habit-metrics.png', href: '/products/habit-metrics', tags: ['Analytics', 'Dashboards'] },
  { id: 'placeholder1', title: 'Product Placeholder One', subtitle: 'This is a placeholder description for a future product.', image: '/images/placeholder1.png', href: '/products/placeholder1', tags: ['Ideation'] },
  { id: 'placeholder2', title: 'Product Placeholder Two', subtitle: 'Another placeholder product idea for PM impact.', image: '/images/placeholder2.png', href: '/products/placeholder2', tags: ['Prototype'] },
]

const PROJECTS = [
  { id: 'power-meter', title: 'ESP32 Smart Power Meter', subtitle: 'Live voltage, current, energy in browser.', image: '/images/power-meter.png', href: '/projects/power-meter', tags: ['ESP32', 'INA219', 'WebSerial'] },
  { id: 'oscilloscope', title: 'Arduino Oscilloscope', subtitle: 'Triggering, capture, waveform rendering.', image: '/images/oscilloscope.png', href: '/projects/oscilloscope', tags: ['Arduino', 'Signal'] },
  { id: 'ble-mesh', title: 'BLE Mesh Data Relay', subtitle: 'Low‑power sensor network with hop routing.', image: '/images/ble-mesh.png', href: '/projects/ble-mesh', tags: ['BLE', 'Networking'] },
  { id: 'placeholder3', title: 'Project Placeholder One', subtitle: 'This is a placeholder engineering project.', image: '/images/placeholder3.png', href: '/projects/placeholder3', tags: ['WIP'] },
  { id: 'placeholder4', title: 'Project Placeholder Two', subtitle: 'Another placeholder project with engineering focus.', image: '/images/placeholder4.png', href: '/projects/placeholder4', tags: ['WIP'] },
]

const READINGS = [
  { id: 'book1', title: 'The Innovator’s Dilemma', subtitle: 'Clayton Christensen — reflections on disruptive innovation.', image: '/images/book1.png', href: '/readings/book1', tags: ['Strategy'] },
  { id: 'book2', title: 'Inspired', subtitle: 'Marty Cagan — lessons on building tech products.', image: '/images/book2.png', href: '/readings/book2', tags: ['PM'] },
  { id: 'placeholder-reading1', title: 'Reading Placeholder One', subtitle: 'Placeholder for a future reading review.', image: '/images/placeholder-reading1.png', href: '/readings/placeholder-reading1', tags: ['Notes'] },
  { id: 'placeholder-reading2', title: 'Reading Placeholder Two', subtitle: 'Another placeholder entry for reading/media review.', image: '/images/placeholder-reading2.png', href: '/readings/placeholder-reading2', tags: ['Notes'] },
]

// ---------- UI helpers ----------
const Container = ({ children, className='' }) => (
  <div className={`max-w-[1100px] mx-auto px-4 sm:px-6 ${className}`}>{children}</div>
)

const SectionHeading = ({ children }) => (
  <div>
    <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-black">{children}</h1>
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

const KeyValue = ({ items }) => (
  <dl className="grid sm:grid-cols-2 gap-3">
    {items.map((kv) => (
      <div key={kv.k} className="rounded-2xl border border-black/10 bg-white p-4">
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

const TileCard = ({ item }) => (
  <Link
    to={item.href}
    className="group rounded-[32px] overflow-hidden border bg-white text-black border-black/10 hover:border-emerald-400/70 hover:shadow-[0_8px_24px_rgba(16,185,129,0.15)] transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
  >
    <div className="p-6 sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">{item.title}</h3>
      </div>
      <p className="mt-2 text-zinc-700 text-sm sm:text-base">{item.subtitle}</p>
      {item.tags?.length ? (
        <div className="mt-3 flex gap-2 flex-wrap">{item.tags.slice(0,3).map((t)=> <Badge key={t}>{t}</Badge>)}</div>
      ) : null}
    </div>
    <ImageTile src={item.image} className="aspect-[16/10]" />
    <div className="p-4 sm:p-5">
      <span className="inline-flex items-center gap-2 text-emerald-700 group-hover:text-emerald-800">
        View details <ArrowRight className="w-4 h-4" />
      </span>
    </div>
  </Link>
)

const TileGrid = ({ items }) => (
  <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
    {items.map((p) => (
      <TileCard key={p.id} item={p} />
    ))}
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

  // Close on route change
  useEffect(() => { setOpen(false) }, [location.pathname, setOpen])

  // Close on click outside + ESC
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
          <h1 className="text-[36px] sm:text-[76px] leading-[1.08] sm:leading-[1.05] font-semibold tracking-tight">
            Hey, I'm Michael.<br/>I build software and hardware.
          </h1>
          <p className="mt-3 sm:mt-4 text-lg sm:text-2xl text-emerald-800 max-w-3xl">
            {PROFILE.tagline}
          </p>
        </div>
      </Container>
    </section>

    <section className="py-6 sm:py-14">
      <Container>
        {/* Huge photo area */}
        <ImageTile src={PROFILE.headshot} className="aspect-[16/10] sm:aspect-[16/7]" />
      </Container>
    </section>

    <section className="py-8 sm:py-12 bg-gradient-to-b from-white to-emerald-50/40">
      <Container>
        <div className="rounded-[28px] border border-emerald-200/70 p-5 sm:p-8 bg-white">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-emerald-800">What I’m building</h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-700">
            Embedded systems, power/energy tools, and simple UX for complex hardware. I focus on reliability,
            metrics, and shipping real things quickly.
          </p>
          <div className="mt-4">
            <AccentBar />
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge>ESP32</Badge><Badge>Arduino</Badge><Badge>BLE</Badge><Badge>Web UI</Badge>
          </div>
        </div>
      </Container>
    </section>
  </main>
)

// About page — matches list page layout
const AboutPage = () => (
  <main className="bg-white text-black">
    <section className="pt-10 sm:pt-16">
      <Container>
        <SectionHeading>About me</SectionHeading>
        <p className="mt-2 text-zinc-700 text-sm sm:text-base">
          {PROFILE.subhead}
        </p>
        <div className="mt-4"><AccentBar /></div>

        <div className="mt-6 grid md:grid-cols-[1.2fr_.8fr] gap-6 items-start">
          {/* Bio block (left) */}
          <div className="rounded-[28px] border border-emerald-200 p-5 sm:p-7 bg-emerald-50/30">
            <p className="text-zinc-800 text-base sm:text-lg leading-7">
              I’m an engineer who likes building measurable, real‑world things. My focus is embedded systems, energy
              monitoring, and clean user interfaces that make hardware approachable. Recently, I’ve shipped an ESP32
              smart power meter, an Arduino‑based oscilloscope, and a BLE mesh data relay. I care about translating
              ideas into reliable hardware and software with simple controls, sensible defaults, and clear metrics.
            </p>
          </div>

          {/* Headshot (right) */}
          <div>
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

  // Common header for all detail pages
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

          {/* Shared hero image + section-specific side content */}
          <div className="mt-6 grid md:grid-cols-[1.2fr_.8fr] gap-6 items-start">
            <div className="space-y-4">
              <ImageTile src={item.image} className="aspect-[16/9]" />

              {/* Overview box varies slightly per section via copy, but UI is shared */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-4">
                <h3 className="font-medium text-emerald-800">
                  {type === 'products' ? 'Overview' : type === 'projects' ? 'Technical Overview' : 'Book Overview'}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-zinc-700">
                  Replace this with a concise summary. Focus on {type === 'products'
                    ? 'problem → solution → outcomes; highlight the core user and the JTBD.'
                    : type === 'projects'
                    ? 'requirements, architecture, constraints, and measurable performance targets.'
                    : 'author’s thesis, what resonated, and the main ideas you’ll apply.'}
                </p>
                {item.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((t)=> <Badge key={t}>{t}</Badge>)}
                  </div>
                ) : null}
              </div>

              {/* Section-specific primary content */}
              {type === 'products' && (
                <>
                  {/* KPIs */}
                  <div className="grid sm:grid-cols-3 gap-3">
                    <Stat label="Active users" value="~120" caption="last 30 days" />
                    <Stat label="Time to value" value="< 60s" caption="from upload → insights" />
                    <Stat label="Retention" value="38%" caption="28‑day repeat" />
                  </div>

                  {/* Features */}
                  <div className="rounded-2xl border border-black/10 p-4">
                    <h4 className="font-medium text-black">Key Features</h4>
                    <ul className="mt-2 text-sm text-zinc-700 space-y-1">
                      <li>• Guided flow from input → output with sensible defaults.</li>
                      <li>• Metrics surfaced: success rate, coverage, and quality score.</li>
                      <li>• Shareable export (PDF/CSV) and quick copy of bullets.</li>
                    </ul>
                  </div>

                  {/* How it works / System */}
                  <div className="rounded-2xl border border-black/10 p-4">
                    <h4 className="font-medium text-black">How it works</h4>
                    <KeyValue items={[
                      { k: 'Input', v: 'PDF resume → text extraction' },
                      { k: 'Processing', v: 'NLP chunking, scoring, ATS heuristics' },
                      { k: 'Output', v: 'Impact bullets + metrics + tips' },
                      { k: 'Safeguards', v: 'Client-side pre-checks, error messaging' },
                    ]}/>
                  </div>

                  {/* Testimonials */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-emerald-200 bg-white p-4">
                      <p className="text-sm text-zinc-800">“I shipped a better resume in one sitting. The metric prompts are clutch.”</p>
                      <p className="mt-2 text-xs text-emerald-700">— CS undergrad, internship applicant</p>
                    </div>
                    <div className="rounded-2xl border border-emerald-200 bg-white p-4">
                      <p className="text-sm text-zinc-800">“Great default suggestions; saved me ~2 hours.”</p>
                      <p className="mt-2 text-xs text-emerald-700">— PM bootcamp student</p>
                    </div>
                  </div>
                </>
              )}

              {type === 'projects' && (
                <>
                  {/* Skills & Tools */}
                  <div className="rounded-2xl border border-black/10 p-4">
                    <h4 className="font-medium text-black">Skills & Tools</h4>
                    <KeyValue items={[
                      { k: 'Skills', v: 'Embedded C/C++, firmware bring-up, serial protocols' },
                      { k: 'Tools', v: 'ESP-IDF / Arduino, Logic analyzer, Oscilloscope' },
                      { k: 'Hardware', v: 'ESP32, INA219, level shifting, buck regulation' },
                      { k: 'Interfaces', v: 'WebSerial UI, realtime plotting' },
                    ]}/>
                  </div>

                  {/* Architecture / Performance */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-emerald-200 bg-white p-4">
                      <h5 className="font-medium text-emerald-800">Architecture Notes</h5>
                      <ul className="mt-2 text-sm text-zinc-700 space-y-1">
                        <li>• ISR-driven sampling; ring buffer for burst capture.</li>
                        <li>• Backpressure strategy for serial transport.</li>
                        <li>• Cal factor & temperature compensation hooks.</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-emerald-200 bg-white p-4">
                      <h5 className="font-medium text-emerald-800">Performance</h5>
                      <ul className="mt-2 text-sm text-zinc-700 space-y-1">
                        <li>• Measurement error: ±1.5% @ 1 kHz.</li>
                        <li>• End‑to‑end latency: ~45 ms (p95).</li>
                        <li>• Uptime: 8h continuous, no resets.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="rounded-2xl border border-black/10 p-4">
                    <h4 className="font-medium text-black">Build Timeline</h4>
                    <ol className="mt-2 text-sm text-zinc-700 space-y-1">
                      <li>1) Week 1 — Requirements & block diagram.</li>
                      <li>2) Week 2 — Prototype firmware & serial link.</li>
                      <li>3) Week 3 — Web UI plots & calibration.</li>
                      <li>4) Week 4 — Long‑run test & performance report.</li>
                    </ol>
                  </div>
                </>
              )}

              {type === 'readings' && (
                <>
                  {/* My Review */}
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-4">
                    <h4 className="font-medium text-emerald-800">My Review</h4>
                    <p className="mt-2 text-sm sm:text-base text-zinc-700">
                      Short summary of what the book argues, what I agreed/disagreed with, and how it changes
                      how I’ll build or evaluate products/tech.
                    </p>
                  </div>

                  {/* Interesting Quotes */}
                  <div className="rounded-2xl border border-black/10 p-4">
                    <h4 className="font-medium text-black">Interesting Quotes</h4>
                    <ul className="mt-2 text-sm text-zinc-700 space-y-1">
                      <li>• “Quote #1 that captures a key idea.”</li>
                      <li>• “Quote #2 that I’ll reference later.”</li>
                      <li>• “Quote #3 that challenges a common belief.”</li>
                    </ul>
                  </div>

                  {/* Key Ideas */}
                  <div className="rounded-2xl border border-black/10 p-4">
                    <h4 className="font-medium text-black">Key Ideas</h4>
                    <ul className="mt-2 text-sm text-zinc-700 space-y-1">
                      <li>• Idea 1 — why it matters.</li>
                      <li>• Idea 2 — where it applies.</li>
                      <li>• Idea 3 — limitations / caveats.</li>
                    </ul>
                  </div>
                </>
              )}
            </div>

            {/* Right Column — Links + Section‑specific sidebars */}
            <div className="space-y-4">
              {/* Links block shared */}
              <div className="rounded-2xl border border-black/10 p-4">
                <h4 className="font-medium text-black">Links</h4>
                <ul className="mt-2 text-sm text-emerald-800">
                  <li><a className="hover:underline" href="#">Demo (placeholder)</a></li>
                  <li><a className="hover:underline" href="#">Repo (placeholder)</a></li>
                  <li><a className="hover:underline" href="#">Writeup (placeholder)</a></li>
                </ul>
              </div>

              {type === 'products' && (
                <>
                  {/* Problem / Audience */}
                  <div className="rounded-2xl border border-black/10 p-4">
                    <h4 className="font-medium text-black">Problem / Audience</h4>
                    <KeyValue items={[
                      { k: 'Primary user', v: 'Student / early‑career applicant' },
                      { k: 'JTBD', v: 'Translate experience into impact bullets faster' },
                      { k: 'Pain', v: 'Hard to quantify and tailor quickly' },
                    ]}/>
                  </div>

                  {/* Adoption / Metrics */}
                  <div className="rounded-2xl border border-black/10 p-4">
                    <h4 className="font-medium text-black">Adoption & Metrics</h4>
                    <dl className="grid grid-cols-2 gap-3">
                      <Stat label="CSAT" value="4.6/5" />
                      <Stat label="Export rate" value="72%" />
                    </dl>
                  </div>
                </>
              )}

              {type === 'projects' && (
                <>
                  {/* BOM / Components */}
                  <div className="rounded-2xl border border-black/10 p-4">
                    <h4 className="font-medium text-black">Bill of Materials</h4>
                    <ul className="mt-2 text-sm text-zinc-700 space-y-1">
                      <li>• ESP32 DevKit‑C</li>
                      <li>• INA219 current sensor</li>
                      <li>• IRM‑05‑5 PSU, relay, terminal blocks</li>
                    </ul>
                  </div>

                  {/* Risks / Next steps */}
                  <div className="rounded-2xl border border-black/10 p-4">
                    <h4 className="font-medium text-black">Risks & Next Steps</h4>
                    <ul className="mt-2 text-sm text-zinc-700 space-y-1">
                      <li>• Sensor saturation at high load → add shunt options.</li>
                      <li>• Noise coupling → ground routing rework on next PCB.</li>
                      <li>• Next: OTA updates + calibration wizard.</li>
                    </ul>
                  </div>
                </>
              )}

              {type === 'readings' && (
                <>
                  {/* Overall Rating */}
                  <div className="rounded-2xl border border-black/10 p-4">
                    <h4 className="font-medium text-black">Overall Rating</h4>
                    <div className="mt-2 flex items-center gap-2">
                      <Stars value={5} />
                      <span className="text-sm text-zinc-700">5/5</span>
                    </div>
                  </div>

                  {/* Who should read */}
                  <div className="rounded-2xl border border-black/10 p-4">
                    <h4 className="font-medium text-black">Who should read</h4>
                    <ul className="mt-2 text-sm text-zinc-700 space-y-1">
                      <li>• PMs shaping strategy.</li>
                      <li>• Hardware founders balancing tradeoffs.</li>
                      <li>• Students building first real projects.</li>
                    </ul>
                  </div>
                </>
              )}

              {/* Back link for mobile */}
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
        <p className="mt-2 text-zinc-700 text-sm sm:text-base">
          Open to internships, research, and collaborations.
        </p>
        <div className="mt-4"><AccentBar /></div>

        <div className="mt-6 grid md:grid-cols-[1.2fr_.8fr] gap-6 items-start">
          {/* Left: Big card with message + CTAs */}
          <div className="rounded-[28px] border border-emerald-200 p-6 sm:p-8 bg-emerald-50/30">
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-emerald-800">Get in touch</h3>
            <p className="mt-2 text-zinc-700 text-sm sm:text-base leading-7">
              The fastest way to reach me is email. I’m especially excited to chat about embedded
              systems, energy tooling, and hardware‑software UX. If you have a project in mind,
              a role I might be a fit for, or just want to swap notes on builds — reach out.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <CTAButton href={`mailto:${PROFILE.email}`}>Email Michael</CTAButton>
              <GhostButton href={PROFILE.linkedin}>LinkedIn</GhostButton>
              <GhostButton href={PROFILE.github}>GitHub</GhostButton>
              <GhostButton href={PROFILE.resumeUrl}>Resume</GhostButton>
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              <div className="rounded-2xl border border-emerald-200 bg-white p-4">
                <p className="text-xs uppercase tracking-wide text-emerald-700">Response time</p>
                <p className="mt-1 text-sm text-zinc-800">Usually within 24–48h.</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-white p-4">
                <p className="text-xs uppercase tracking-wide text-emerald-700">Topics</p>
                <p className="mt-1 text-sm text-zinc-800">Embedded, energy, product UX.</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-white p-4">
                <p className="text-xs uppercase tracking-wide text-emerald-700">Location</p>
                <p className="mt-1 text-sm text-zinc-800">Toronto ↔ Hanover (remote friendly).</p>
              </div>
            </div>
          </div>

          {/* Right: Links & availability */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-black/10 p-5">
              <h4 className="font-medium text-black">Links</h4>
              <ul className="mt-2 text-sm text-emerald-800 space-y-1">
                <li><a className="hover:underline" href={`mailto:${PROFILE.email}`}>Email</a></li>
                <li><a className="hover:underline" href={PROFILE.linkedin}>LinkedIn</a></li>
                <li><a className="hover:underline" href={PROFILE.github}>GitHub</a></li>
                <li><a className="hover:underline" href={PROFILE.resumeUrl}>Resume (PDF)</a></li>
              </ul>
            </div>

            <div className="rounded-2xl border border-black/10 p-5">
              <h4 className="font-medium text-black">Availability</h4>
              <ul className="mt-2 text-sm text-zinc-700 space-y-1">
                <li>• Coffee chats (15–20 min).</li>
                <li>• Side‑project collabs (scope‑dependent).</li>
                <li>• Internship opportunities (Summer).</li>
              </ul>
            </div>

            <ImageTile src="/images/contact-cover.jpg" alt="Contact visual" className="aspect-[16/10]" />
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
