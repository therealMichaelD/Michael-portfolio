// src/components/common/TileGrid.jsx
import React from 'react'
import TileCard from './TileCard'

const TileGrid = ({ items }) => (
  <div className="grid gap-5 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
    {items.map((p) => (
      <TileCard key={p.id} item={p} />
    ))}
  </div>
)

export default TileGrid
