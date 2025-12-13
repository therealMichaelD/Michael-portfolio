// src/components/ui/Primitives.jsx
import React from 'react'

export const Container = ({ children, className='' }) => (
  <div className={`max-w-[1320px] xl:max-w-[1440px] mx-auto px-4 sm:px-8 ${className}`}>{children}</div>
)

export const SectionHeading = ({ children }) => (
  <div>
    <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-black">{children}</h1>
    <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-200 to-emerald-400" />
  </div>
)

export const AccentBar = () => (
  <div className="h-px w-full bg-gradient-to-r from-emerald-200/60 via-emerald-300/40 to-emerald-200/60" />
)

export const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-black/10 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-800">
    {children}
  </span>
)

export const Stat = ({ label, value, caption }) => (
  <div className="rounded-2xl border border-black/10 bg-white p-4">
    <p className="text-xs uppercase tracking-wide text-zinc-600">{label}</p>
    <p className="mt-1 text-xl font-semibold text-zinc-900">{value}</p>
    {caption ? <p className="text-xs text-zinc-600 mt-1">{caption}</p> : null}
  </div>
)

export const KeyValue = ({ items=[] }) => (
  <dl className="grid sm:grid-cols-2 gap-3">
    {items.map((kv, idx) => (
      <div key={idx} className="rounded-2xl border border-black/10 bg-white p-4">
        <dt className="text-xs uppercase tracking-wide text-zinc-600">{kv.k}</dt>
        <dd className="mt-1 text-sm text-zinc-900">{kv.v}</dd>
      </div>
    ))}
  </dl>
)
