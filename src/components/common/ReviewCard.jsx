// src/components/common/ReviewCard.jsx
import React from 'react'

const ReviewCard = ({ quote, author }) => (
  <div className="rounded-2xl border border-emerald-200 bg-white p-4">
    <p className="text-sm text-zinc-800">“{quote}”</p>
    <p className="mt-2 text-xs text-emerald-700">— {author}</p>
  </div>
)

export default ReviewCard
