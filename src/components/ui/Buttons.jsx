// src/components/ui/Buttons.jsx
import React from 'react'
import { ArrowRight } from 'lucide-react'

export const CTAButton = ({ href, children }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white px-5 py-3 text-sm sm:text-base font-medium hover:bg-black transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-600"
  >
    {children} <ArrowRight className="w-4 h-4" />
  </a>
)

export const GhostButton = ({ href, children }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm sm:text-base text-zinc-700 hover:text-zinc-900 hover:border-black/40 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-600"
  >
    {children}
  </a>
)
