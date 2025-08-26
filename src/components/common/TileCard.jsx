// src/components/common/TileCard.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ImageTile from './ImageTile'
import { Badge } from '../ui/Primitives'

const TileCard = ({ item }) => {
  const isReading = item.href?.startsWith('/readings') // infer type from href
  return (
    <Link
      to={item.href}
      className="group rounded-[32px] overflow-hidden border bg-white text-black border-black/10 hover:border-emerald-400/70 hover:shadow-[0_8px_24px_rgba(16,185,129,0.15)] transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
    >
      <div className="p-7 sm:p-9">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-2xl sm:text-[28px] font-semibold tracking-tight">{item.title}</h3>
        </div>
        <p className="mt-2 text-zinc-700 text-sm sm:text-base">{item.subtitle}</p>
        {item.tags?.length ? (
          <div className="mt-3 flex gap-2 flex-wrap">{item.tags.slice(0,3).map((t)=> <Badge key={t}>{t}</Badge>)}</div>
        ) : null}
      </div>

      {/* Use portrait aspect + contain for book covers */}
      <ImageTile
        src={item.heroImage}
        className={isReading ? 'aspect-[2/3]' : 'aspect-[16/10]'}
        fit={isReading ? 'contain' : 'cover'}
      />

      <div className="p-5 sm:p-6">
        <span className="inline-flex items-center gap-2 text-emerald-700 group-hover:text-emerald-800">
          View details <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  )
}

export default TileCard
