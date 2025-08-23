import './index.css'
import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Mail, Github, Linkedin, FileDown, ArrowRight } from 'lucide-react'

// =====================================================
// ROUTED PORTFOLIO — MINIMAL HOME HERO + ABOUT PAGE
// Home: giant heading, short subhead, huge photo area.
// About: details (interests, schooling, links) + photo.
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
  { id: 'resume-insights', title: 'Resume Insights', subtitle: 'Upload a PDF → get impact bullets, metrics, ATS tips.', image: '/images/resume-insights.png', href: '#' },
  { id: 'habit-metrics', title: 'Habit Metrics Dashboard', subtitle: 'North-star + input metrics, retention, alerts.', image: '/images/habit-metrics.png', href: '#' },
  { id: 'placeholder1', title: 'Product Placeholder One', subtitle: 'This is a placeholder description for a future product.', image: '/images/placeholder1.png', href: '#' },
  { id: 'placeholder2', title: 'Product Placeholder Two', subtitle: 'Another placeholder product idea for PM impact.', image: '/images/placeholder2.png', href: '#' },
]

const PROJECTS = [
  { id: 'power-meter', title: 'ESP32 Smart Power Meter', subtitle: 'Live voltage, current, energy in browser.', image: '/images/power-meter.png', href: '#' },
  { id: 'oscilloscope', title: 'Arduino Oscilloscope', subtitle: 'Triggering, capture, waveform rendering.', image: '/images/oscilloscope.png', href: '#' },
  { id: 'ble-mesh', title: 'BLE Mesh Data Relay', subtitle: 'Low-power sensor network with hop routing.', image: '/images/ble-mesh.png', href: '#' },
  { id: 'placeholder3', title: 'Project Placeholder One', subtitle: 'This is a placeholder engineering project.', image: '/images/placeholder3.png', href: '#' },
  { id: 'placeholder4', title: 'Project Placeholder Two', subtitle: 'Another placeholder project with engineering focus.', image: '/images/placeholder4.png', href: '#' },
]

const READINGS = [
  { id: 'book1', title: 'The Innovator’s Dilemma', subtitle: 'Clayton Christensen — reflections on disruptive innovation.', image: '/images/book1.png', href: '#' },
  { id: 'book2', title: 'Inspired', subtitle: 'Marty Cagan — lessons on building tech products.', image: '/images/book2.png', href: '#' },
  { id: 'placeholder-reading1', title: 'Reading Placeholder One', subtitle: 'Placeholder for a future reading review.', image: '/images/placeholder-reading1.png', href: '#' },
  { id: 'placeholder-reading2', title: 'Reading Placeholder Two', subtitle: 'Another placeholder entry for reading/media review.', image: '/images/placeholder-reading2.png', href: '#' },
]

// ---------- UI helpers ----------
const Container = ({ children, className='' }) => (
  <div className={`max-w-[1100px] mx-auto px-4 sm:px-6 ${className}`}>{children}</div>
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
  <a
    href={item.href}
    className="group rounded-[32px] overflow-hidden border bg-white text-black border-black/10 hover:shadow-sm transition-shadow"
  >
    <div className="p-8 sm:p-10">
      <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">{item.title}</h3>
      <p className="mt-2 text-zinc-700">{item.subtitle}</p>
    </div>
    <ImageTile src={item.image} className="aspect-[16/10]" />
  </a>
)

const TileGrid = ({ items }) => (
  <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
    {items.map((p) => (
      <TileCard key={p.id} item={p} />
    ))}
  </div>
)

const Footer = () => (
  <footer className="border-t border-black/10 bg-white">
    <Container className="py-10 grid sm:grid-cols-2 gap-6 text-sm text-zinc-600">
      <div>
        <p>© {new Date().getFullYear()} {PROFILE.name}</p>
        <p>Built with React + Tailwind. Deployed on Vercel.</p>
      </div>
      <div className="flex items-center gap-3 sm:justify-end">
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
    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-5 py-2.5 font-medium hover:bg-emerald-700 transition-colors"
  >
    {children} <ArrowRight className="w-4 h-4" />
  </a>
)

const GhostButton = ({ href, children }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 rounded-full border border-emerald-300 px-5 py-2.5 hover:border-emerald-500 text-emerald-700 hover:text-emerald-800 transition-colors"
  >
    {children}
  </a>
)

// ---------- Nav ----------
const Nav = () => (
  <div className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/10">
    <Container className="h-14 flex items-center justify-between text-black">
      <NavLink to="/" className="font-semibold tracking-tight text-emerald-700">
        Michael Dang
      </NavLink>
      <div className="hidden sm:flex items-center gap-6 text-sm">
        <NavLink to="/about" className={({isActive})=>`hover:text-emerald-700 ${isActive?'text-emerald-700 underline':''}`}>About</NavLink>
        <NavLink to="/products" className={({isActive})=>`hover:text-emerald-700 ${isActive?'text-emerald-700 underline':''}`}>Products</NavLink>
        <NavLink to="/projects" className={({isActive})=>`hover:text-emerald-700 ${isActive?'text-emerald-700 underline':''}`}>Projects</NavLink>
        <NavLink to="/readings" className={({isActive})=>`hover:text-emerald-700 ${isActive?'text-emerald-700 underline':''}`}>Readings</NavLink>
        <NavLink to="/contact" className={({isActive})=>`hover:text-emerald-700 ${isActive?'text-emerald-700 underline':''}`}>Contact</NavLink>
        <a href={PROFILE.resumeUrl} className="rounded-full border border-emerald-300 px-3 py-1.5 hover:border-emerald-500 text-emerald-700">Resume</a>
      </div>
    </Container>
  </div>
)

// ---------- Pages ----------
// Minimal Home (giant heading, short desc, huge photo)
const HomePage = () => (
  <main className="bg-white text-black">
    <section className="pt-16 sm:pt-24">
      <Container>
        <div className="text-left">
          <h1 className="text-[44px] sm:text-[76px] leading-[1.05] font-semibold tracking-tight">
            Hey, I'm Michael.<br/>I build software and hardware.
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-zinc-700 max-w-3xl">
            {PROFILE.tagline}
          </p>
        </div>
      </Container>
    </section>

    <section className="py-10 sm:py-14">
      <Container>
        {/* Huge photo area */}
        <ImageTile src={PROFILE.headshot} className="aspect-[16/7]" />
      </Container>
    </section>
  </main>
)

// About page with details + photo (contacts removed, added Bio section)
const AboutPage = () => (
  <main className="bg-white text-black">
    <section className="pt-12 sm:pt-16">
      <Container>
        <div className="grid md:grid-cols-[1.15fr_.85fr] gap-10 items-start">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">About me</h1>
            <p className="mt-3 text-zinc-700 max-w-2xl">{PROFILE.subhead}</p>

            {/* Bio section replaces contact buttons */}
            <div className="mt-6 rounded-2xl border border-emerald-200 p-5 sm:p-6 bg-emerald-50/40">
              <h3 className="font-medium mb-2 text-emerald-800">Bio</h3>
              <p className="text-zinc-700">
                I’m an engineer who likes building measurable, real-world things. My focus is embedded systems, energy
                monitoring, and clean user interfaces that make hardware approachable. Recently, I’ve shipped an ESP32
                smart power meter, an Arduino-based oscilloscope, and a BLE mesh data relay. I care about translating
                ideas into reliable hardware and software with simple controls, sensible defaults, and clear metrics.
              </p>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-emerald-200 p-4 bg-emerald-50/40">
                <h3 className="font-medium mb-2 text-emerald-800">Interests</h3>
                <ul className="text-zinc-700 text-sm space-y-1">
                  <li>• Embedded systems & energy.</li>
                  <li>• 3D‑ICs & semiconductor packaging.</li>
                  <li>• Product UX for hardware tools.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-emerald-200 p-4 bg-emerald-50/40">
                <h3 className="font-medium mb-2 text-emerald-800">Schooling</h3>
                <ul className="text-zinc-700 text-sm space-y-1">
                  <li>• Dartmouth College — Engineering Management & Electrical Engineering ’27.</li>
                  <li>• Bard College at Simon’s Rock (early college).</li>
                </ul>
              </div>
            </div>

            {/* Contact buttons removed here on purpose since there's a dedicated Contact page */}
          </div>

          <div>
            <ImageTile src={PROFILE.aboutPhoto || PROFILE.headshot} className="aspect-[4/5]" />
          </div>
        </div>
      </Container>
    </section>
  </main>
)

const ProductsPage = () => (
  <main className="bg-white text-black">
    <section className="pt-12 sm:pt-16">
      <Container>
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Products</h1>
          <p className="mt-2 text-zinc-700">PM-style side projects that highlight problem framing, metrics, and outcomes.</p>
        </div>
        <TileGrid items={PRODUCTS} />
      </Container>
    </section>
  </main>
)

const ProjectsPage = () => (
  <main className="bg-white text-black">
    <section className="pt-12 sm:pt-16">
      <Container>
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Projects</h1>
          <p className="mt-2 text-zinc-700">Engineering builds aimed at rigor, performance, and reliability.</p>
        </div>
        <TileGrid items={PROJECTS} />
      </Container>
    </section>
  </main>
)

const ReadingsPage = () => (
  <main className="bg-white text-black">
    <section className="pt-12 sm:pt-16">
      <Container>
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Readings</h1>
          <p className="mt-2 text-zinc-700">Books, articles, and media reviews related to engineering, PM, and entrepreneurship.</p>
        </div>
        <TileGrid items={READINGS} />
      </Container>
    </section>
  </main>
)

const ContactPage = () => (
  <main className="bg-white text-black">
    <section className="pt-12 sm:pt-16">
      <Container>
        <div className="rounded-[32px] border border-emerald-200 p-8 sm:p-12 text-center bg-white">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Contact</h1>
          <p className="mt-2 text-zinc-700">Open to internships, research, and collaborations.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <CTAButton href={`mailto:${PROFILE.email}`}>Email Michael</CTAButton>
            <GhostButton href={PROFILE.github}>GitHub</GhostButton>
            <GhostButton href={PROFILE.linkedin}>LinkedIn</GhostButton>
            <GhostButton href={PROFILE.resumeUrl}>Resume</GhostButton>
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
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/readings" element={<ReadingsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
