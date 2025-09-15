import React, { useEffect, useState } from 'react'

/**
 * <RepoPreview ownerRepo="therealMichaelD/michael-portfolio" />
 * - Shows stars, last updated, top-level files/dirs, and a short README excerpt.
 * - Click "View on GitHub" to open the repo.
 *
 * NOTE: Public repos only (no token needed). Keep calls minimal for rate limits.
 */
export default function RepoPreview({ ownerRepo }) {
  const [meta, setMeta] = useState(null)
  const [files, setFiles] = useState([])
  const [readme, setReadme] = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'ok' | 'error'

  useEffect(() => {
    if (!ownerRepo) return
    const ac = new AbortController()
    const headers = { 'Accept': 'application/vnd.github.v3+json' }

    async function load() {
      try {
        setStatus('loading')

        // Repo metadata (stars, updated_at)
        const metaRes = await fetch(`https://api.github.com/repos/${ownerRepo}`, { headers, signal: ac.signal })
        if (!metaRes.ok) throw new Error('meta fetch failed')
        const metaJson = await metaRes.json()

        // Top-level contents (limit to ~12 entries)
        const contRes = await fetch(`https://api.github.com/repos/${ownerRepo}/contents/`, { headers, signal: ac.signal })
        let contents = []
        if (contRes.ok) {
          contents = await contRes.json()
          contents = Array.isArray(contents) ? contents.slice(0, 12) : []
        }

        // README (raw text, short excerpt)
        let readmeText = ''
        const readmeRes = await fetch(
          `https://api.github.com/repos/${ownerRepo}/readme`,
          { headers: { ...headers, Accept: 'application/vnd.github.v3.raw' }, signal: ac.signal }
        )
        if (readmeRes.ok) {
          readmeText = await readmeRes.text()
          // Trim to a tidy preview
          readmeText = readmeText.split('\n').slice(0, 24).join('\n') // ~first 24 lines
        }

        setMeta(metaJson)
        setFiles(contents)
        setReadme(readmeText)
        setStatus('ok')
      } catch (e) {
        if (e.name !== 'AbortError') {
          console.error('RepoPreview error:', e)
          setStatus('error')
        }
      }
    }

    load()
    return () => ac.abort()
  }, [ownerRepo])

  if (!ownerRepo) return null
  if (status === 'idle' || status === 'loading') {
    return (
      <div className="rounded-2xl border border-black/10 p-4 bg-white">
        <div className="animate-pulse text-sm text-zinc-600">Loading repository…</div>
      </div>
    )
  }
  if (status === 'error') {
    return (
      <div className="rounded-2xl border border-black/10 p-4 bg-white">
        <div className="text-sm text-zinc-600">Couldn’t load repository preview. <a className="text-emerald-700 underline" href={`https://github.com/${ownerRepo}`}>Open on GitHub</a></div>
      </div>
    )
  }

  const stars = meta?.stargazers_count ?? 0
  const updated = meta?.pushed_at ? new Date(meta.pushed_at).toLocaleDateString() : '—'

  return (
    <div className="rounded-2xl border border-black/10 bg-white overflow-hidden">
      <div className="flex items-center justify-between gap-3 p-4 border-b">
        <div className="min-w-0">
          <div className="font-medium truncate">{ownerRepo}</div>
          <div className="text-xs text-zinc-600">★ {stars} • Updated {updated}</div>
        </div>
        <a
          href={`https://github.com/${ownerRepo}`}
          className="inline-flex items-center rounded-full border border-emerald-300 px-3 py-1.5 text-emerald-700 hover:border-emerald-500"
          target="_blank" rel="noreferrer"
        >
          View on GitHub
        </a>
      </div>

      {/* Top-level files/folders */}
      {files?.length > 0 && (
        <div className="p-4">
          <div className="text-sm font-medium mb-2">Files</div>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm">
            {files.map((f) => (
              <li key={f.path} className="flex items-center justify-between gap-2 rounded-lg border border-black/5 px-3 py-2">
                <span className="truncate">{f.name}</span>
                <a
                  className="text-emerald-700 hover:underline shrink-0"
                  href={f.html_url}
                  target="_blank" rel="noreferrer"
                >
                  Open
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* README excerpt */}
      {readme && (
        <div className="p-4 border-t">
          <div className="text-sm font-medium mb-2">README</div>
          <pre className="text-xs whitespace-pre-wrap text-zinc-700 bg-emerald-50/40 rounded-lg p-3 max-h-64 overflow-auto">
            {readme}
          </pre>
        </div>
      )}
    </div>
  )
}