// src/components/common/TileCard.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import ImageTile from './ImageTile'

const TileCard = ({ item }) => {
  const isReading = item.href?.startsWith('/readings') // infer type from href
  return (
    <Link
      to={item.href}
      className={`group rounded-[32px] overflow-hidden border bg-white text-black border-black/10 hover:border-black/40 hover:shadow-[0_8px_24px_rgba(15,23,42,0.15)] transition-all focus:outline-none focus:ring-2 focus:ring-zinc-600 ${
        isReading ? '' : 'transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(15,23,42,0.25)]'
      }`}
      aria-label={isReading ? item.title : undefined}
    >
      {!isReading && (
        <div className="p-7 sm:p-9">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-2xl sm:text-[28px] font-semibold tracking-tight">{item.title}</h3>
          </div>
          <p className="mt-2 text-zinc-700 text-sm sm:text-base">{item.subtitle}</p>
        </div>
      )}

      {/* Use portrait aspect + contain for book covers */}
      <ImageTile
        src={item.heroImage}
        className={isReading ? 'aspect-[2/3]' : 'aspect-[5/4]'}
        fit={isReading ? 'contain' : 'cover'}
      />

    </Link>
  )
}

export default TileCard
