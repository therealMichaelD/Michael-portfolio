// src/components/common/ImageTile.jsx
import React from 'react'

const ImageTile = ({ src, alt='', className='', fit='cover' }) => {
  const fitClass = fit === 'contain' ? 'object-contain' : 'object-cover' // allow full cover when needed
  return (
    <div className={`rounded-[28px] overflow-hidden ${className} bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-200`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
        onError={(e) => e.currentTarget.remove()}
        className={`w-full h-full ${fitClass} opacity-0 transition-opacity duration-300`}
      />
    </div>
  )
}

export default ImageTile
