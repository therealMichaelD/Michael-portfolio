import React, { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

// Worker setup (Vite / CRA friendly)
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString()

/**
 * PdfEmbed — desktop uses native <iframe>, mobile/tablets use react-pdf.
 * Mobile path pre-fetches PDF bytes to avoid iOS/CORS/range issues.
 */
export default function PdfEmbed({ url, className = '', title = 'PDF viewer' }) {
  const [usePdfJs, setUsePdfJs] = useState(false)
  const [numPages, setNumPages] = useState(null)
  const [scale, setScale] = useState(1)
  const containerRef = useRef(null)
  const [width, setWidth] = useState(900)

  // Pre-fetched PDF data for mobile/tablets
  const [pdfData, setPdfData] = useState(null)           // Uint8Array
  const [error, setError] = useState(null)               // string | null
  const [loading, setLoading] = useState(false)

  // Decide when to use react-pdf (iOS/iPadOS or small screens)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const ua = navigator.userAgent || ''
    const isiOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) // iPadOS as "Mac"
    const small = window.matchMedia('(max-width: 768px)').matches
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

  // On mobile/tablets: pre-fetch the PDF as bytes (fixes iOS issues)
  useEffect(() => {
    if (!usePdfJs || !url) return
    let aborted = false
    ;(async () => {
      try {
        setLoading(true)
        setError(null)
        setPdfData(null)
        // Resolve to absolute URL to avoid base/href oddities
        const absUrl = url.startsWith('http')
          ? url
          : new URL(url, window.location.origin).href

        const res = await fetch(absUrl, {
          // Same-origin PDF should work; if hosted elsewhere ensure CORS
          credentials: 'omit',
          cache: 'no-store',
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const buf = await res.arrayBuffer()
        if (!aborted) {
          setPdfData(new Uint8Array(buf))
        }
      } catch (e) {
        if (!aborted) setError(e?.message || 'Failed to fetch PDF')
      } finally {
        if (!aborted) setLoading(false)
      }
    })()
    return () => {
      aborted = true
    }
  }, [usePdfJs, url])

  if (!url) return null

  // 🖥️ Desktop: native PDF viewer in iframe (fastest path)
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

  // 📱 Mobile/tablets: react-pdf scroller (with pre-fetched bytes)
  return (
    <div className={`rounded-[28px] border border-black/10 overflow-hidden bg-white ${className}`}>
      {/* Toolbar */}
      <div className="flex items-center justify-between p-2 sm:p-3 border-b bg-zinc-50">
        <div className="text-sm text-zinc-700">
          {numPages ? `${numPages} pages` : loading ? 'Loading…' : error ? 'Load error' : 'Ready'}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScale(s => Math.max(0.6, s - 0.1))}
            className="px-2 py-1 rounded border hover:bg-white disabled:opacity-40"
            aria-label="Zoom out"
            disabled={!pdfData}
          >
            −
          </button>
          <button
            onClick={() => setScale(s => Math.min(2, s + 0.1))}
            className="px-2 py-1 rounded border hover:bg-white disabled:opacity-40"
            aria-label="Zoom in"
            disabled={!pdfData}
          >
            +
          </button>
          <button
            onClick={() => setScale(1)}
            className="px-2 py-1 rounded border hover:bg-white disabled:opacity-40"
            aria-label="Reset zoom"
            title="Fit"
            disabled={!pdfData}
          >
            Fit
          </button>
        </div>
      </div>

      {/* Errors / fallback */}
      {error && (
        <div className="p-4 text-sm text-red-600">
          Failed to load PDF ({error}).{' '}
          <a
            href={url}
            className="underline text-emerald-700"
            target="_blank"
            rel="noreferrer"
          >
            Open in new tab
          </a>
        </div>
      )}

      {/* Scroll container */}
      <div
        ref={containerRef}
        className="max-h-[82vh] overflow-auto p-3 sm:p-4"
        style={{ WebkitOverflowScrolling: 'touch' }} // smooth momentum scroll on iOS
      >
        {loading && !pdfData && !error && (
          <div className="p-6 text-sm text-zinc-600">Loading PDF…</div>
        )}

        {pdfData && !error && (
          <Document
            file={{ data: pdfData }}                 // 👈 pass bytes, not URL (fixes iOS)
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            onLoadError={(e) => setError(e?.message || 'Failed to parse PDF')}
            loading={<div className="p-6 text-sm text-zinc-600">Rendering…</div>}
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