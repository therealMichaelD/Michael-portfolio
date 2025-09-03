// src/components/common/PdfEmbed.jsx
import React, { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

/**
 * PdfEmbed — desktop uses native <iframe>, mobile/tablets use react-pdf.
 * On iOS/iPadOS we DISABLE the PDF.js worker to avoid "fake worker" / module import errors.
 * We also prefetch the PDF and pass bytes to react-pdf for better reliability.
 */
export default function PdfEmbed({ url, className = '', title = 'PDF viewer' }) {
  const [usePdfJs, setUsePdfJs] = useState(false)
  const [numPages, setNumPages] = useState(null)
  const [scale, setScale] = useState(1)
  const containerRef = useRef(null)
  const [width, setWidth] = useState(900)

  // Prefetched PDF bytes (mobile/tablets path)
  const [pdfData, setPdfData] = useState(null)   // Uint8Array
  const [error, setError] = useState(null)       // string | null
  const [loading, setLoading] = useState(false)

  // Decide viewer: use react-pdf on iOS/iPadOS or small screens
  useEffect(() => {
    if (typeof window === 'undefined') return
    const ua = navigator.userAgent || ''
    const isiOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) // iPadOS
    const small = window.matchMedia('(max-width: 768px)').matches

    // ✅ Disable worker entirely on iOS/small screens to avoid module worker failures
    pdfjs.disableWorker = isiOS || small
    setUsePdfJs(isiOS || small)
  }, [])

  // Track container width for crisp rendering & zoom
  useEffect(() => {
    if (!containerRef.current) return
    const ro = new ResizeObserver(entries => {
      for (const e of entries) setWidth(Math.min(1400, e.contentRect.width))
    })
    ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  // On mobile/tablets: prefetch the PDF as bytes (fixes iOS range/CORS hiccups)
  useEffect(() => {
    if (!usePdfJs || !url) return
    let aborted = false
    ;(async () => {
      try {
        setLoading(true)
        setError(null)
        setPdfData(null)
        const absUrl = url.startsWith('http') ? url : new URL(url, window.location.origin).href

        const res = await fetch(absUrl, { cache: 'no-store', credentials: 'omit' })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const buf = await res.arrayBuffer()
        if (!aborted) setPdfData(new Uint8Array(buf))
      } catch (e) {
        if (!aborted) setError(e?.message || 'Failed to fetch PDF')
      } finally {
        if (!aborted) setLoading(false)
      }
    })()
    return () => { aborted = true }
  }, [usePdfJs, url])

  if (!url) return null

  // 🖥️ Desktop: native PDF viewer via <iframe>
  if (!usePdfJs) {
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

  // 📱 Mobile/tablets: react-pdf scroller (worker disabled)
  const gviewSrc = (() => {
    try {
      const absUrl = url.startsWith('http') ? url : new URL(url, window.location.origin).href
      return `https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(absUrl)}`
    } catch { return null }
  })()

  return (
    <div className={`rounded-[28px] border border-black/10 overflow-hidden bg-white ${className}`}>
      {/* Toolbar */}
      <div className="flex items-center justify-between p-2 sm:p-3 border-b bg-zinc-50">
        <div className="text-sm text-zinc-700">
          {numPages ? `${numPages} pages` : loading ? 'Loading…' : error ? 'Load error' : 'Ready'}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setScale(s => Math.max(0.6, s - 0.1))} className="px-2 py-1 rounded border hover:bg-white disabled:opacity-40" disabled={!pdfData}>−</button>
          <button onClick={() => setScale(s => Math.min(2, s + 0.1))} className="px-2 py-1 rounded border hover:bg-white disabled:opacity-40" disabled={!pdfData}>+</button>
          <button onClick={() => setScale(1)} className="px-2 py-1 rounded border hover:bg-white disabled:opacity-40" disabled={!pdfData}>Fit</button>
        </div>
      </div>

      {/* Error fallback */}
      {error && (
        <div className="p-4 text-sm text-red-600 space-y-3">
          <div>Failed to load PDF ({error}).</div>
          {gviewSrc ? (
            <iframe title="PDF fallback" src={gviewSrc} className="w-full h-[70vh] border-0 rounded-b-[28px]" />
          ) : null}
          <div>
            <a href={url} className="underline text-emerald-700" target="_blank" rel="noreferrer">
              Open in new tab
            </a>
          </div>
        </div>
      )}

      {/* Scroll container */}
      <div ref={containerRef} className="max-h-[82vh] overflow-auto p-3 sm:p-4" style={{ WebkitOverflowScrolling: 'touch' }}>
        {loading && !pdfData && !error && (
          <div className="p-6 text-sm text-zinc-600">Loading PDF…</div>
        )}

        {pdfData && !error && (
          <Document
            file={{ data: pdfData }}                 // 👈 pass bytes, not URL
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            onLoadError={(e) => setError(e?.message || 'Failed to parse PDF')}
            loading={<div className="p-6 text-sm text-zinc-600">Rendering…</div>}
            options={{ disableWorker: true }}         // 👈 extra safety: worker off
          >
            {Array.from({ length: numPages || 0 }, (_, i) => (
              <div key={`p_${i + 1}`} className="mb-4 flex justify-center">
                <Page
                  pageNumber={i + 1}
                  width={Math.floor(width * scale)}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </div>
            ))}
          </Document>
        )}
      </div>
    </div>
  )
}