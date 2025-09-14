import React from 'react'

/**
 * Robust PDF embed:
 * - Encodes spaces in URL (so "My File.pdf" works)
 * - Uses <iframe> on desktop; falls back to <object> on iOS/Safari
 * - Offers "Open" & "Download" actions as a guaranteed fallback
 */
export default function PdfEmbed({ url, className = '', title = 'PDF viewer' }) {
  if (!url) return null

  // Normalize/encode: if the url has spaces, encodeURI will turn them into %20.
  // Keep absolute paths ("/docs/file.pdf") or https URLs intact.
  const normalized = encodeURI(url.trim())

  // Heuristic: Safari/iOS tends to behave better with <object> than <iframe>.
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
  const isiOS = /\b(iPad|iPhone|iPod)\b/i.test(ua)
  const isSafari = /^((?!chrome|android).)*safari/i.test(ua)

  // Only add the #view params for non-iOS Safari (it can sometimes mis-handle hash params)
  const viewerHash = (!isiOS && !isSafari) ? '#view=FitH&pagemode=none' : ''
  const src = normalized + (normalized.includes('#') ? '' : viewerHash)

  return (
    <div className={`rounded-[28px] border border-black/10 overflow-hidden bg-white ${className}`}>
      {/* Primary embed */}
      {isiOS || isSafari ? (
        // Safari-friendly path
        <object
          data={normalized}
          type="application/pdf"
          className="w-full"
          style={{ minHeight: '70vh' }}
        >
          {/* Fallback content for very strict devices */}
          <div className="p-4 text-sm text-zinc-700">
            This browser can’t display the PDF inline.
            <a className="ml-2 text-emerald-700 underline" href={normalized}>Open in new tab</a>
          </div>
        </object>
      ) : (
        <iframe
          title={title}
          src={src}
          className="w-full h-full"
          style={{ minHeight: '70vh' }}
          loading="lazy"
        />
      )}

      {/* Actions bar (always available) */}
      <div className="flex items-center gap-4 p-3 border-t bg-white text-sm">
        <a href={normalized} className="text-emerald-700 hover:underline">Open in new tab</a>
        <a href={normalized} download className="text-emerald-700 hover:underline">Download</a>
      </div>
    </div>
  )
}