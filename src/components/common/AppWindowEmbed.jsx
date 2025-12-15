import React from 'react'

// Renders a live web app inside a phone-sized frame.
export default function AppWindowEmbed({ url, title = 'Live app', className = '' }) {
  if (!url) return null

  const outerClass = ['flex justify-center', className].filter(Boolean).join(' ')

  return (
    <div className={outerClass}>
      <div className="relative w-full max-w-[400px] aspect-[9/18]">
        <div className="absolute inset-0 rounded-[32px] border border-black/10 bg-gradient-to-b from-white to-zinc-50 shadow-[0_24px_80px_rgba(15,23,42,0.16)]">
          <div className="absolute inset-[10px] rounded-[26px] overflow-hidden bg-white">
            <iframe
              src={url}
              title={title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[10px] h-1.5 w-16 -translate-x-1/2 rounded-full bg-zinc-200"
          />
        </div>
      </div>
    </div>
  )
}
