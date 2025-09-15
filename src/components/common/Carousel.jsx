// src/components/common/Carousel.jsx
import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Media-aware Carousel (images + videos)
 *
 * Props:
 * - images: Array<{ src: string, caption?: string, type?: 'image'|'video', poster?: string, loop?: boolean, muted?: boolean, autoplay?: boolean }>
 * - viewportClass: Tailwind class for the viewer height (e.g., "h-[56vh] sm:h-[64vh]")
 * - padClass: padding around media (e.g., "p-3 sm:p-4")
 * - canvasBgClass: background behind media (e.g., "bg-white")
 * - fit: 'contain' | 'cover' | 'scale-down'  (applies to both image & video)
 * - showCaption (bool)
 * - showDots (bool)
 */
export default function Carousel({
  images = [],
  viewportClass = 'h-[56vh] sm:h-[64vh]',
  padClass = 'p-3 sm:p-4',
  canvasBgClass = 'bg-white',
  fit = 'contain',
  showCaption = true,
  showDots = true,
}) {
  const [index, setIndex] = useState(0)

  // Detect media type by extension if not provided
  const media = useMemo(() => {
    const isVideoExt = (src = '') =>
      /\.(mp4|webm|ogg|mov)$/i.test(src.split('?')[0] || '')
    return (images || [])
      .filter(Boolean)
      .map(item => {
        const type = item.type || (isVideoExt(item.src) ? 'video' : 'image')
        return { ...item, type }
      })
  }, [images])

  const count = media.length
  const clamp = useCallback((i) => {
    if (!count) return 0
    const m = ((i % count) + count) % count
    return m
  }, [count])

  const prev = useCallback(() => setIndex(i => clamp(i - 1)), [clamp])
  const next = useCallback(() => setIndex(i => clamp(i + 1)), [clamp])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  if (!count) return null

  // Common object-fit class
  const fitClass =
    fit === 'cover' ? 'object-cover' :
    fit === 'scale-down' ? 'object-scale-down' :
    'object-contain' // default 'contain'

  const current = media[index]

  return (
    <div className="relative w-full select-none">
      {/* Viewer */}
      <div className={`relative w-full ${viewportClass} rounded-[28px] border border-black/10 overflow-hidden`}>
        <div className={`absolute inset-0 ${canvasBgClass} flex items-center justify-center ${padClass}`}>
          {/* Single visible slide (keeps it lightweight) */}
          <Slide item={current} fitClass={fitClass} />
        </div>

        {/* Nav arrows */}
        {count > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-black/10 bg-white/80 backdrop-blur px-2 py-2 hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-black/10 bg-white/80 backdrop-blur px-2 py-2 hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Caption */}
      {showCaption && current?.caption && (
        <div className="mt-2 text-sm text-zinc-600 text-center">{current.caption}</div>
      )}

      {/* Dots */}
      {showDots && count > 1 && (
        <div className="mt-2 flex items-center justify-center gap-1.5">
          {media.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-2 rounded-full ${i === index ? 'bg-emerald-600' : 'bg-emerald-200 hover:bg-emerald-300'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

/** One slide that knows how to render image OR video */
function Slide({ item, fitClass }) {
  if (!item?.src) return null

  if (item.type === 'video') {
    // Sensible defaults for inline playback on mobile
    const {
      poster,
      autoplay = false, // keep off by default to avoid blocking
      loop = true,
      muted = true,     // mobile inline playback typically requires muted
      controls = true,
    } = item

    return (
      <video
        className={`max-h-full max-w-full ${fitClass}`}
        src={item.src}
        poster={poster}
        playsInline
        controls={controls}
        muted={muted}
        loop={loop}
        autoPlay={autoplay}
        preload="metadata"
      />
    )
  }

  // Image (default)
  return (
    <img
      src={item.src}
      alt={item.caption || 'media'}
      loading="lazy"
      decoding="async"
      className={`max-h-full max-w-full ${fitClass}`}
      onError={(e) => { e.currentTarget.style.display = 'none' }}
    />
  )
}