// src/components/common/Gallery.jsx
import React from 'react'
import ImageTile from './ImageTile'

const Gallery = ({ images=[] }) => {
  if (!images.length) return null
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {images.map((im, i) => (
        <div key={i}>
          <ImageTile src={im.src} alt={im.caption || `image-${i}`} className="aspect-[4/3]" />
          {im.caption ? <p className="mt-1 text-xs text-zinc-600">{im.caption}</p> : null}
        </div>
      ))}
    </div>
  )
}

export default Gallery
