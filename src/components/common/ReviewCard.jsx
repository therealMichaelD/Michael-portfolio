// src/components/common/ReviewCard.jsx
import React from 'react'

const ReviewCard = ({ quote, author }) => (
  <div className="rounded-2xl border border-black/10 bg-white p-4">
    <p className="text-sm text-zinc-800">“{quote}”</p>
    <p className="mt-2 text-xs text-zinc-600">— {author}</p>
  </div>
)

export default ReviewCard
