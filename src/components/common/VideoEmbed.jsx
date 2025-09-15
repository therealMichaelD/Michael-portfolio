// src/components/common/VideoEmbed.jsx
import React from 'react'

/** Accepts either a YouTube video ID or a full URL and renders a responsive 16:9 embed. */
function toEmbedUrl(input) {
  if (!input) return null
  // If it's already a URL, normalize it to /embed/ID
  if (/^https?:\/\//i.test(input)) {
    try {
      const u = new URL(input)
      // youtu.be/<id>
      if (u.hostname.includes('youtu.be')) {
        const id = u.pathname.replace(/^\/+/, '')
        return `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`
      }
      // youtube.com/watch?v=<id>
      const v = u.searchParams.get('v')
      if (v) {
        return `https://www.youtube-nocookie.com/embed/${v}?rel=0&modestbranding=1&playsinline=1`
      }
      // youtube.com/shorts/<id> or /embed/<id>
      const m = u.pathname.match(/\/(shorts|embed)\/([^/?]+)/)
      if (m) {
        return `https://www.youtube-nocookie.com/embed/${m[2]}?rel=0&modestbranding=1&playsinline=1`
      }
      // Fallback (may not embed correctly, but try)
      return input
    } catch {
      return null
    }
  }
  // Assume it's an ID
  return `https://www.youtube-nocookie.com/embed/${input}?rel=0&modestbranding=1&playsinline=1`
}

export default function VideoEmbed({ id, title = 'Project video', className = '' }) {
  const src = toEmbedUrl(id)
  if (!src) return null

  return (
    <div className={className}>
      {/* Intrinsic 16:9 ratio wrapper so it never collapses */}
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <iframe
          title={title}
          src={src}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  )
}