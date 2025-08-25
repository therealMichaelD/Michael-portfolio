// src/components/layout/Footer.jsx
import React from 'react'
import { Mail, Github, Linkedin, FileDown } from 'lucide-react'
import { PROFILE } from '../../data/content'
import { Container } from '../ui/Primitives'

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

export default Footer
