// src/components/common/Gallery.jsx
// Gallery with configurable sizing.
// - images: [{ src: string, caption?: string }]
// - className: optional container width limit (e.g., 'max-w-[420px]')
// - columnsClass: Tailwind grid columns (default: 'grid-cols-2 md:grid-cols-3')
// - imageAspectClass: Tailwind aspect class for tiles (default: 'aspect-[4/3]')
// - fit: 'cover' | 'contain' (forwarded to <ImageTile />)

import React from 'react'
import ImageTile from './ImageTile'

const Gallery = ({
  images = [],
  className = '',
  columnsClass = 'grid-cols-2 md:grid-cols-3',
  imageAspectClass = 'aspect-[4/3]',
  fit = 'cover',
}) => {
  if (!images.length) return null

  return (
    <div className={`grid ${columnsClass} gap-3 ${className}`}>
      {images.map((im, i) => (
        <div key={i}>
          <ImageTile
            src={im.src}
            alt={im.caption || `image-${i}`}
            className={imageAspectClass}
            fit={fit}
          />
          {im.caption ? (
            <p className="mt-1 text-xs text-zinc-600">{im.caption}</p>
          ) : null}
        </div>
      ))}
    </div>
  )
}

export default Gallery
