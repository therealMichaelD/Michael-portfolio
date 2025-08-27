// src/components/common/Carousel.jsx
// Simple carousel with arrows, dots, keyboard (←/→), and touch swipe.
// Props:
// - images:      [{ src: string, caption?: string }]
// - aspectClass: e.g., "aspect-[16/9]" (default) or "aspect-[2/3]" for books
// - fit:         "cover" | "contain" (default "cover")
// - className:   extra classes for the outer wrapper
// - startIndex:  slide to start on (default 0)
// - showDots:    show pagination dots (default true)
// - showCaption: show current slide caption (default true)

import React, { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Carousel({
  images = [],
  aspectClass = 'aspect-[16/9]',
  fit = 'cover',
  className = '',
  startIndex = 0,
  showDots = true,
  showCaption = true,
}) {
  const len = images.length
  if (!len) return null

  const [idx, setIdx] = useState(Math.min(Math.max(0, startIndex), len - 1))
  const go = (n) => setIdx((i) => (i + n + len) % len)
  const to = (n) => setIdx(((n % len) + len) % len)

  // Keyboard: ← / →
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

  const objectClass = fit === 'contain' ? 'object-contain' : 'object-cover'

  return (
    <div className={`relative w-full ${className}`} aria-roledescription="carousel">
      {/* Viewport */}
      <div
        className={`overflow-hidden rounded-[28px] ${aspectClass} bg-gradient-to-br from-emerald-50 via-zinc-100 to-zinc-200`}
      >
        {/* Track */}
        <div
          className="h-full w-full flex transition-transform duration-500"
          style={{ transform: `translateX(-${idx * 100}%)` }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {images.map((im, i) => (
            <div key={i} className="w-full shrink-0">
              <img
                src={im.src}
                alt={im.caption || `image-${i}`}
                loading="lazy"
                decoding="async"
                className={`w-full h-full ${objectClass}`}
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
        <p className="mt-2 text-sm text-zinc-600">{images[idx].caption}</p>
      )}

      {/* Dots */}
      {showDots && len > 1 && (
        <div className="mt-2 flex items-center justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => to(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? 'w-5 bg-emerald-600' : 'w-2 bg-zinc-300'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}