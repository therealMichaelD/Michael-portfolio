import React, { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

// Worker setup (Vite/Cra compatible)
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString()

/**
 * PdfEmbed — desktop uses native <iframe>, mobile/tablets use react-pdf.
 * Keeps your existing API: <PdfEmbed url className title />
 */
export default function PdfEmbed({ url, className = '', title = 'PDF viewer' }) {
  const [usePdfJs, setUsePdfJs] = useState(false)
  const [numPages, setNumPages] = useState(null)
  const [scale, setScale] = useState(1)
  const containerRef = useRef(null)
  const [width, setWidth] = useState(900)

  // Decide when to use react-pdf (iOS/iPadOS or small screens)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const ua = navigator.userAgent || ''
    const isiOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) // iPadOS reports as Mac
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

  if (!url) return null

  // Desktop: native PDF viewer in iframe (fastest path)
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

  // Mobile/tablets: react-pdf scroller (works on iOS/iPadOS)
  return (
    <div className={`rounded-[28px] border border-black/10 overflow-hidden bg-white ${className}`}>
      {/* Toolbar */}
      <div className="flex items-center justify-between p-2 sm:p-3 border-b bg-zinc-50">
        <div className="text-sm text-zinc-700">
          {numPages ? `${numPages} pages` : 'Loading…'}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScale(s => Math.max(0.6, s - 0.1))}
            className="px-2 py-1 rounded border hover:bg-white"
            aria-label="Zoom out"
          >
            −
          </button>
          <button
            onClick={() => setScale(s => Math.min(2, s + 0.1))}
            className="px-2 py-1 rounded border hover:bg-white"
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            onClick={() => setScale(1)}
            className="px-2 py-1 rounded border hover:bg-white"
            aria-label="Reset zoom"
            title="Fit"
          >
            Fit
          </button>
        </div>
      </div>

      {/* Scroll container */}
      <div
        ref={containerRef}
        className="max-h-[82vh] overflow-auto p-3 sm:p-4"
        style={{ WebkitOverflowScrolling: 'touch' }} // smooth momentum scroll on iOS
      >
        <Document
          file={url}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={<div className="p-6 text-sm text-zinc-600">Loading PDF…</div>}
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
      </div>
    </div>
  )
}