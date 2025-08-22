import './index.css'
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import {
  Mail,
  Github,
  Linkedin,
  FileDown,
  MapPin,
  Moon,
  Sun,
  ExternalLink,
  Cpu,
  Wrench,
  BookOpen,
  GraduationCap,
  Briefcase,
} from "lucide-react";

// =============================
// QUICK-EDIT PROFILE DETAILS
// =============================
const PROFILE = {
  name: "Michael Dang",
  title: "Electrical Engineering & Physics @ Dartmouth | Product‑minded builder",
  summary:
    "I design and build useful hardware + software: embedded systems, power/energy monitors, and 3D‑IC research. I care about clean UX, measurable impact, and shipping things.",
  email: "Michael.Dang3000@gmail.com", // ← update me
  location: "Toronto, ON • Hanover, NH",
  linkedin: "https://www.linkedin.com/in/michaeldang1/", // ← update me
  github: "https://github.com/therealMichaelD", // ← update me
  resumeUrl: "/Michael_Dang_Resume.pdf", // put your PDF in the same folder
};

// =============================
// PROJECTS
// category: "Hardware" | "Software" | "Research"
// =============================
const PROJECTS = [
  {
    title: "ESP32 Smart Power Meter",
    category: "Hardware",
    period: "2025",
    blurb:
      "Wi‑Fi energy monitor using INA219 for real‑time voltage/current, on‑device dashboard, and CSV export.",
    highlights: ["ESP32", "INA219", "UI dashboard", "OTA updates"],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "Arduino Oscilloscope",
    category: "Hardware",
    period: "2025",
    blurb:
      "Low‑cost scope with signal capture, trigger, and waveform rendering in a web UI.",
    highlights: ["Arduino", "ADC", "Signal processing", "WebSerial"],
    links: { github: "#", demo: "#" },
  },
  {
    title: "BLE Mesh Data Relay",
    category: "Hardware",
    period: "2025",
    blurb:
      "Sensor nodes hop temperature/humidity data across a mesh to a central hub.",
    highlights: ["ESP32", "BLE Mesh", "Routing", "Low power"],
    links: { github: "#", demo: "#" },
  },
  {
    title: "CAN Bus Data Logger",
    category: "Hardware",
    period: "2025",
    blurb:
      "MCP2515‑based logger captures speed/RPM to SD and optional OLED visualization.",
    highlights: ["Arduino", "CAN", "SD logging", "Automotive"],
    links: { github: "#", demo: "#" },
  },
  {
    title: "3D‑IC Research Glossary",
    category: "Research",
    period: "2025",
    blurb:
      "Alphabetized 3D IC terms/acronyms with concise, citation‑ready definitions.",
    highlights: ["3D‑IC", "Through‑silicon vias", "Packaging", "DVFS"],
    links: { github: "#", demo: "#" },
  },
  {
    title: "E‑Motorcycle Conversion",
    category: "Hardware",
    period: "2023",
    blurb:
      "Converted a Suzuki motorcycle to 100% electric: battery pack, motor controller, BMS.",
    highlights: ["Battery design", "Motor control", "PCB", "Safety"],
    links: { github: "#", demo: "#" },
  },
];

// =============================
// EXPERIENCE & EDUCATION
// =============================
const EXPERIENCE = [
  {
    role: "Research Assistant, SENSE Lab (Prof. Scheideler)",
    org: "Dartmouth College",
    period: "Summer 2024",
    bullets: [
      "Built remote GUIs for instrumentation and automated data collection",
      "Collaborated on hardware characterization + analysis",
    ],
  },
  {
    role: "Founder & Lead Builder",
    org: "Bard College E‑Motorcycle Club",
    period: "2022–2023",
    bullets: [
      "Designed and assembled battery, motor, and controllers for full electric conversion",
      "Owned safety testing, documentation, and demos",
    ],
  },
  {
    role: "Co‑founder",
    org: "Student Landscaping Business",
    period: "2021–2022",
    bullets: [
      "Led client communication, quoting, and scheduling; delivered end‑to‑end services",
    ],
  },
];

const EDUCATION = [
  {
    school: "Dartmouth College",
    program: "B.E. Electrical Engineering & B.A. Physics (’27) • M.E.M. in progress",
  },
  {
    school: "Bard College at Simon’s Rock",
    program: "Early college coursework prior to transfer",
  },
];

// =============================
// UI HELPERS
// =============================
const Section = ({ id, icon: Icon, title, children }) => (
  <section id={id} className="scroll-mt-24 py-16">
    <div className="flex items-center gap-3 mb-6">
      {Icon && (
        <span className="p-2 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-white/10">
          <Icon className="w-5 h-5" />
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
    </div>
    {children}
  </section>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs md:text-sm">
    {children}
  </span>
);

const LinkIcon = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  >
    <Icon className="w-4 h-4" /> <span className="text-sm">{label}</span>
  </a>
);

// =============================
// MAIN APP
// =============================
export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [filter, setFilter] = useState("All");

  const categories = useMemo(
    () => ["All", "Hardware", "Software", "Research"],
    []
  );

  const filtered = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-slate-100 selection:bg-indigo-500/30">
        {/* NAV */}
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
          <nav className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
            <a href="#home" className="font-semibold tracking-tight">Michael Dang</a>
            <div className="flex items-center gap-2 md:gap-3">
              <a href="#projects" className="text-sm hover:opacity-80">Projects</a>
              <a href="#experience" className="text-sm hover:opacity-80">Experience</a>
              <a href="#contact" className="text-sm hover:opacity-80">Contact</a>
              <button
                aria-label="Toggle theme"
                onClick={() => setDark((d) => !d)}
                className="ml-2 rounded-xl border border-white/10 p-2 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </nav>
        </header>

        {/* HERO */}
        <main id="home" className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-14 md:pt-20"
          >
            <div className="grid md:grid-cols-[1.3fr_.7fr] gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
                  {PROFILE.name}
                </h1>
                <p className="mt-3 text-base md:text-lg text-slate-300">
                  {PROFILE.title}
                </p>
                <p className="mt-4 max-w-2xl text-slate-300/90">{PROFILE.summary}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex items-center gap-2 rounded-2xl border border-indigo-500/40 bg-indigo-500/10 px-4 py-2 hover:bg-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <Mail className="w-4 h-4" /> Email
                  </a>
                  <LinkIcon href={PROFILE.github} icon={Github} label="GitHub" />
                  <LinkIcon href={PROFILE.linkedin} icon={Linkedin} label="LinkedIn" />
                  <LinkIcon href={PROFILE.resumeUrl} icon={FileDown} label="Resume" />
                </div>

                <div className="mt-6 flex flex-wrap gap-2 text-slate-300/90">
                  <Badge><Cpu className="w-3.5 h-3.5 mr-2" /> Embedded</Badge>
                  <Badge><Wrench className="w-3.5 h-3.5 mr-2" /> Prototyping</Badge>
                  <Badge><BookOpen className="w-3.5 h-3.5 mr-2" /> Research</Badge>
                  <Badge><GraduationCap className="w-3.5 h-3.5 mr-2" /> Dartmouth ’27</Badge>
                </div>
              </div>

              {/* Profile Card */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 border border-white/10 text-lg font-semibold">
                    MD
                  </span>
                  <div>
                    <p className="font-medium">{PROFILE.name}</p>
                    <p className="text-sm text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {PROFILE.location}
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-2xl border border-white/10 p-3">
                    <p className="text-xl font-semibold">10+</p>
                    <p className="text-xs text-slate-400">Projects</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 p-3">
                    <p className="text-xl font-semibold">4</p>
                    <p className="text-xs text-slate-400">Domains</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 p-3">
                    <p className="text-xl font-semibold">∞</p>
                    <p className="text-xs text-slate-400">Curiosity</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PROJECTS */}
          <Section id="projects" icon={Briefcase} title="Selected Projects">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 text-sm text-slate-400"><Filter className="w-4 h-4"/>Filter:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`rounded-xl border px-3 py-1.5 text-sm transition ${
                    filter === cat
                      ? "border-indigo-500/50 bg-indigo-500/10"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((p, i) => (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-5 hover:border-white/20"
                >
                  <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 mb-4 flex items-center justify-center text-slate-300">
                    <span className="text-xs">Image / diagram placeholder</span>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                      <p className="text-xs text-slate-400">{p.category} • {p.period}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-slate-300/90">{p.blurb}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.highlights.map((h) => (
                      <Badge key={h}>{h}</Badge>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm hover:underline"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a
                      href={p.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" /> Demo
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </Section>

          {/* EXPERIENCE */}
          <Section id="experience" icon={Briefcase} title="Experience">
            <div className="space-y-5">
              {EXPERIENCE.map((e) => (
                <div key={e.role} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{e.role}</p>
                    <p className="text-sm text-slate-400">{e.org} • {e.period}</p>
                  </div>
                  <ul className="mt-2 list-disc pl-5 text-sm text-slate-300/90 space-y-1">
                    {e.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-medium mb-2 flex items-center gap-2"><GraduationCap className="w-4 h-4"/> Education</h3>
              <ul className="space-y-1 text-sm text-slate-300/90">
                {EDUCATION.map((ed) => (
                  <li key={ed.school}><span className="font-medium">{ed.school}</span> — {ed.program}</li>
                ))}
              </ul>
            </div>
          </Section>

          {/* CONTACT */}
          <Section id="contact" icon={Mail} title="Get in touch">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-slate-300/90">For opportunities, collaborations, or questions:</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <LinkIcon href={`mailto:${PROFILE.email}`} icon={Mail} label={PROFILE.email} />
                <LinkIcon href={PROFILE.linkedin} icon={Linkedin} label="LinkedIn" />
                <LinkIcon href={PROFILE.github} icon={Github} label="GitHub" />
              </div>
            </div>
          </Section>

          <footer className="py-10 text-center text-xs text-slate-500">
            <p>© {new Date().getFullYear()} {PROFILE.name}. Built with React + Tailwind. Last updated {new Date().toLocaleDateString()}.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
