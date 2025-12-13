// src/components/common/Stars.jsx
import React from 'react'
import { Star } from 'lucide-react'

const Stars = ({ value = 4 }) => {
  const full = Math.max(0, Math.min(5, Math.round(value)))
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < full ? 'fill-zinc-900 text-zinc-900' : 'text-zinc-300'}`} />
      ))}
    </div>
  )
}

export default Stars
