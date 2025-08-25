// src/components/common/ImageTile.jsx
import React from 'react'

const ImageTile = ({ src, alt='', className='' }) => (
  <div className={`rounded-[28px] overflow-hidden ${className} bg-gradient-to-br from-emerald-50 via-zinc-100 to-zinc-200`}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
      onError={(e) => e.currentTarget.remove()}
      className="w-full h-full object-cover opacity-0 transition-opacity duration-300"
    />
  </div>
)

export default ImageTile
