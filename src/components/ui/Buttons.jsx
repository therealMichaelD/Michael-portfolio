// src/components/ui/Buttons.jsx
import React from 'react'
import { ArrowRight } from 'lucide-react'

export const CTAButton = ({ href, children }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-5 py-3 text-sm sm:text-base font-medium hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
  >
    {children} <ArrowRight className="w-4 h-4" />
  </a>
)

export const GhostButton = ({ href, children }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 rounded-full border border-emerald-300 px-5 py-3 text-sm sm:text-base hover:border-emerald-500 text-emerald-700 hover:text-emerald-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
  >
    {children}
  </a>
)
