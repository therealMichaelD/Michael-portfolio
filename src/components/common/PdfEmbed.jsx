// src/components/common/PdfEmbed.jsx
import React, { useMemo } from 'react'

/**
 * Robust PDF embed with reliable re-mount:
 * - Encodes spaces in URL (so "My File.pdf" works)
 * - Adds a tiny cache-buster on each mount to force reload after tab toggles
 * - Uses <iframe> on desktop; <embed> on Safari/iOS for better stability
 * - Always shows Open / Download actions as fallback
 */
export default function PdfEmbed({
  url,
  className = '',
  title = 'PDF viewer',
  cacheBust = true, // set to false if you *really* want caching between tab switches
}) {
  if (!url) return null

  // Normalize/encode: turn spaces into %20 etc.
  const normalized = encodeURI(url.trim())

  // UA check for more stable renderer choice
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
  const isiOS = /\b(iPad|iPhone|iPod)\b/i.test(ua)
  const isSafari = /^((?!chrome|android).)*safari/i.test(ua)

  // Build the runtime src + a unique key so React fully remounts the embed each time
  const { src, openHref, instanceKey } = useMemo(() => {
    const now = Date.now()

    // Split existing hash if present
    const [base, hashPart] = normalized.split('#')

    // Add a very small cache-buster so browsers re-fetch when you return to the tab
    const bust = cacheBust ? (base.includes('?') ? `&r=${now}` : `?r=${now}`) : ''

    // Non-Safari gets viewer params; Safari/iOS tends to behave better without them
    const viewerHash =
      !isiOS && !isSafari
        ? (hashPart ? `#${hashPart}` : '#view=FitH&pagemode=none')
        : (hashPart ? `#${hashPart}` : '')

    return {
      src: `${base}${bust}${viewerHash}`,
      openHref: normalized,              // keep the clean URL for open/download
      instanceKey: `${now}-${normalized}` // force remount on each mount
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [normalized, cacheBust, isiOS, isSafari])

  return (
    <div className={`rounded-[28px] border border-black/10 overflow-hidden bg-white ${className}`}>
      {/* Primary embed — use <embed> on Safari/iOS; <iframe> elsewhere */}
      {(isiOS || isSafari) ? (
        <embed
          key={instanceKey}
          src={src}
          type="application/pdf"
          className="w-full"
          style={{ minHeight: '70vh' }}
        />
      ) : (
        <iframe
          key={instanceKey}
          title={title}
          src={src}
          className="w-full h-full"
          style={{ minHeight: '70vh' }}
          loading="lazy"
        />
      )}

      {/* Actions bar (always available) */}
      <div className="flex items-center gap-4 p-3 border-t bg-white text-sm">
        <a href={openHref} className="text-emerald-700 hover:underline" target="_blank" rel="noreferrer">
          Open in new tab
        </a>
        <a href={openHref} download className="text-emerald-700 hover:underline">
          Download
        </a>
      </div>
    </div>
  )
}