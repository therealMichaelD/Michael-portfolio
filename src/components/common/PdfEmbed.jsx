import React from 'react'

/**
 * Simple, cross-browser PDF embed using the native viewer.
 * Works best in Chrome/Edge/Firefox; on iOS Safari it will hand off to the system viewer.
 */
export default function PdfEmbed({ url, className = '', title = 'PDF viewer' }) {
  if (!url) return null
  // Query tweaks: FitH shows width-fitting pages; remove "toolbar=0" if you want native controls visible.
  const src = `${url}#view=FitH&pagemode=none`
  return (
    <div className={`rounded-[28px] border border-black/10 overflow-hidden bg-white ${className}`}>
      <iframe
        title={title}
        src={src}
        className="w-full h-full"
        style={{ minHeight: '70vh' }}
      />
    </div>
  )
}