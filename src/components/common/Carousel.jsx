// src/components/common/Carousel.jsx
// Carousel with arrows, dots, keyboard + touch and robust image sizing.
// Key differences from the previous version:
// - Height-based viewport (stable across slides)
// - Slides use flex-center
// - <img> uses w-auto h-auto + max-w/max-h + object-contain/scale-down
//   so portrait/landscape/small images all render fully without cropping.

import React, { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Carousel({
  images = [],
  viewportClass = 'h-[56vh] sm:h-[64vh] max-h-[780px]', // tweak if you want taller/shorter
  fit = 'contain',              // 'contain' (default), 'scale-down' (never upscale), or 'cover'
  className = '',
  startIndex = 0,
  showDots = true,
  showCaption = true,
  padClass = 'p-3 sm:p-4',      // whitespace frame around the image
  canvasBgClass = 'bg-white',   // background behind image (try 'bg-zinc-50' if you prefer)
}) {
  const len = images.length
  if (!len) return null

  const [idx, setIdx] = useState(Math.min(Math.max(0, startIndex), len - 1))
  const go = (n) => setIdx((i) => (i + n + len) % len)
  const to = (n) => setIdx(((n % len) + len) % len)

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [len])

  // Touch swipe
  const touchStartX = useRef(0)
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX)
  const onTouchEnd = (e) => {
    const dx = (e.changedTouches?.[0]?.clientX ?? touchStartX.current) - touchStartX.current
    if (Math.abs(dx) > 40) dx < 0 ? go(1) : go(-1)
  }

  // Fit classes
  const fitClass =
    fit === 'cover'
      ? 'object-cover'
      : fit === 'scale-down'
      ? 'object-scale-down' // never upscale
      : 'object-contain'    // default: fit inside (can upscale within bounds)

  return (
    <div className={`relative w-full ${className}`} aria-roledescription="carousel">
      {/* Viewport */}
      <div className={`overflow-hidden rounded-[28px] ${viewportClass} bg-gradient-to-br from-emerald-50 via-zinc-100 to-zinc-200`}>
        {/* Track */}
        <div
          className="h-full w-full flex transition-transform duration-500"
          style={{ transform: `translateX(-${idx * 100}%)` }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {images.map((im, i) => (
            // Each slide fills the viewport and centers its content
            <div key={i} className={`w-full h-full shrink-0 flex items-center justify-center ${canvasBgClass} ${padClass}`}>
              <img
                src={im.src}
                alt={im.caption || `image-${i}`}
                loading="lazy"
                decoding="async"
                draggable={false}
                // IMPORTANT: let the image size itself naturally, only cap it.
                className={`w-auto h-auto max-w-full max-h-full ${fitClass}`}
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      {len > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center rounded-full bg-white/70 backdrop-blur p-2 border border-black/10 hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center rounded-full bg-white/70 backdrop-blur p-2 border border-black/10 hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Caption */}
      {showCaption && images[idx]?.caption && (
        <p className="mt-2 text-sm text-zinc-600 text-center">{images[idx].caption}</p>
      )}

      {/* Dots */}
      {showDots && len > 1 && (
        <div className="mt-2 flex items-center justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => to(i)}
              className={`h-1.5 rounded-full transition-all ${i === idx ? 'w-5 bg-emerald-600' : 'w-2 bg-zinc-300'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}