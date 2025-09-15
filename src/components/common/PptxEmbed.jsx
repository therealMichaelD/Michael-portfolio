// src/components/common/PptxEmbed.jsx
import React, { useMemo } from 'react'

/**
 * PowerPoint viewer with graceful fallbacks.
 * - Office Web Viewer for public HTTPS URLs.
 * - Google Viewer fallback link.
 * - Open/Download links always available.
 * - Shows a helpful message in local/dev where online viewers can't fetch `localhost`.
 */
export default function PptxEmbed({ url, className = '', title = 'PowerPoint viewer' }) {
  if (!url) return null

  // Resolve absolute URL for /public files like '/docs/deck.pptx'
  const absUrl = useMemo(() => {
    try { return url.startsWith('http') ? url : new URL(url, window.location.origin).href }
    catch { return url }
  }, [url])

  const isHttps = typeof window !== 'undefined' && window.location.protocol === 'https:'
  const isLocalhost = typeof window !== 'undefined' && /(localhost|127\.0\.0\.1)$/i.test(window.location.hostname)
  const canInlinePreview = isHttps && !isLocalhost // Office needs a publicly reachable https URL

  const officeSrc = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(absUrl)}`
  const gviewSrc  = `https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(absUrl)}`

  return (
    <div className={`rounded-[28px] border border-black/10 overflow-hidden bg-white ${className}`}>
      {canInlinePreview ? (
        // Primary: Office viewer in an iframe
        <iframe
          title={title}
          src={officeSrc}
          className="w-full h-full"
          style={{ minHeight: '70vh' }}
        />
      ) : (
        // Helpful message + actions in dev / http
        <div className="p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-black">Preview unavailable in this environment</h3>
          <p className="mt-2 text-sm text-zinc-600">
            Online viewers can’t load files from <code className="text-zinc-800">localhost</code> or non-HTTPS URLs.
            You can still open or download the deck below. Once deployed (e.g., on Vercel with HTTPS), the inline preview will work.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={absUrl}
              className="inline-flex items-center rounded-full border border-emerald-300 px-3 py-1.5 text-emerald-700 hover:border-emerald-500"
              target="_blank"
              rel="noreferrer"
            >
              Open PPTX in new tab
            </a>
            <a
              href={absUrl}
              download
              className="inline-flex items-center rounded-full border border-emerald-300 px-3 py-1.5 text-emerald-700 hover:border-emerald-500"
            >
              Download PPTX
            </a>
            <a
              href={gviewSrc}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-emerald-300 px-3 py-1.5 text-emerald-700 hover:border-emerald-500"
            >
              Try Google Viewer
            </a>
          </div>
        </div>
      )}

      {/* Footer actions always visible */}
      <div className="flex items-center gap-3 p-3 border-t bg-zinc-50">
        <a
          href={absUrl}
          className="inline-flex items-center rounded-full border border-emerald-300 px-3 py-1.5 text-emerald-700 hover:border-emerald-500"
          target="_blank"
          rel="noreferrer"
        >
          Open PPTX
        </a>
        <a
          href={absUrl}
          download
          className="inline-flex items-center rounded-full border border-emerald-300 px-3 py-1.5 text-emerald-700 hover:border-emerald-500"
        >
          Download
        </a>
        <a
          href={gviewSrc}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-emerald-300 px-3 py-1.5 text-emerald-700 hover:border-emerald-500"
        >
          Google Viewer
        </a>
      </div>
    </div>
  )
}