// src/components/common/SectionCard.jsx
import React from 'react'

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

export default SectionCard
