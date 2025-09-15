// src/pages/ItemDetail.jsx
import React, { useState } from 'react' 
import PdfEmbed from '../components/common/PdfEmbed'
import PptxEmbed from '../components/common/PptxEmbed'
import VideoEmbed from '../components/common/VideoEmbed' // ✅ NEW
import { Link, useParams } from 'react-router-dom'
import { PRODUCTS, PROJECTS, READINGS } from '../data/content'
import { Container, SectionHeading, AccentBar, KeyValue, Stat } from '../components/ui/Primitives'
import ImageTile from '../components/common/ImageTile'
import Gallery from '../components/common/Gallery'
import SectionCard from '../components/common/SectionCard'
import ReviewCard from '../components/common/ReviewCard'
import Stars from '../components/common/Stars'
import Carousel from '../components/common/Carousel' // ✅ NEW

// Map route type -> dataset
const datasetByType = {
  products: PRODUCTS,
  projects: PROJECTS,
  readings: READINGS,
}

function findItem(type, id) {
  const list = datasetByType[type] || []
  return list.find((x) => x.id === id)
}

export const ItemDetail = ({ type }) => {
  const { id } = useParams()
  const item = findItem(type, id)
  const B = item?.blocks || {}
  const isReadings = type === 'readings'
  const isProjects = type === 'projects'

  if (!item) {
    return (
      <main className="bg-white text-black">
        <section className="pt-10 sm:pt-16">
          <Container>
            <SectionHeading>Not found</SectionHeading>
            <p className="mt-3 text-zinc-700">We couldn’t find that entry. Try the list page.</p>
            <div className="mt-5">
              <Link to={`/${type}`} className="inline-flex items-center rounded-full border border-emerald-300 px-4 py-2 text-emerald-700 hover:border-emerald-500">
                ← Back to {type}
              </Link>
            </div>
          </Container>
        </section>
      </main>
    )
  }

  // Build a de-duplicated images array for the project carousel (hero + gallery)
  const projectCarouselImages = isProjects
    ? [
        { src: item.heroImage, caption: item.title || 'Hero' },
        ...(item.gallery || []),
      ]
        .filter(Boolean)
        .filter((im, idx, arr) => im?.src && arr.findIndex(x => x.src === im.src) === idx)
    : []

  return (
    <main className="bg-white text-black">
      <section className="pt-10 sm:pt-16">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <SectionHeading>{item.title}</SectionHeading>
            <Link to={`/${type}`} className="hidden sm:inline-flex items-center rounded-full border border-emerald-300 px-4 py-2 text-emerald-700 hover:border-emerald-500">← Back to {type}</Link>
          </div>
          <p className="mt-2 text-zinc-700">{item.subtitle}</p>
          <div className="mt-4"><AccentBar /></div>

          {/* GRID:
             - Projects: single column (full-width sections)
             - Readings: single column
             - Products: 2-column (content + sidebar) */}
          <div
            className={`mt-6 grid ${
              (isReadings || isProjects) ? 'grid-cols-1' : 'md:grid-cols-[1.2fr_.8fr]'
            } gap-6 xl:gap-8 items-start`}
          >

            {isProjects && (() => {
              // ✅ Only count real gallery images (ignore heroImage)
              const galleryImages = (item.gallery || []).filter(im => im?.src)
              const hasGallery = galleryImages.length > 0
              const hasPdf = !!B.pdfUrl
              const hasPpt = !!B.pptUrl   // ✅ NEW
              const hasVideo = !!B.youtubeId // ✅ NEW

              // Default tab: Gallery > PDF > PPT > Video (if only video exists, start with 'video')
              const [tab, setTab] = useState(
                hasGallery ? 'gallery'
                  : (hasPdf ? 'pdf'
                  : (hasPpt ? 'ppt'
                  : (hasVideo ? 'video' : 'gallery')))
              )

              // Nothing to show
              if (!hasPdf && !hasGallery && !hasPpt && !hasVideo) return null // ✅ NEW includes hasVideo

              // Build the carousel images only when we actually have gallery images
              const carouselImages = hasGallery
                ? [
                    item.heroImage ? { src: item.heroImage, caption: item.title || 'Hero' } : null,
                    ...galleryImages,
                  ].filter(Boolean)
                : []

              return (
                <div className="w-full rounded-[28px] border border-black/10 overflow-hidden bg-white">
                  {/* Tabs header */}
                  <div className="flex items-center justify-between gap-3 p-2 sm:p-3 border-b">
                    <div className="inline-flex rounded-full border border-emerald-300 overflow-hidden">
                      {hasGallery && (
                        <button
                          onClick={() => setTab('gallery')}
                          className={`px-3 py-1.5 text-sm ${tab === 'gallery' ? 'bg-emerald-600 text-white' : 'text-emerald-700 hover:bg-emerald-50'}`}
                        >
                          Gallery
                        </button>
                      )}
                      {hasPdf && (
                        <button
                          onClick={() => setTab('pdf')}
                          className={`px-3 py-1.5 text-sm ${tab === 'pdf' ? 'bg-emerald-600 text-white' : 'text-emerald-700 hover:bg-emerald-50'}`}
                        >
                          PDF
                        </button>
                      )}
                      {hasPpt && (
                        <button
                          onClick={() => setTab('ppt')}
                          className={`px-3 py-1.5 text-sm ${tab === 'ppt' ? 'bg-emerald-600 text-white' : 'text-emerald-700 hover:bg-emerald-50'}`}
                        >
                          PPT
                        </button>
                      )}
                      {hasVideo && ( // ✅ NEW
                        <button
                          onClick={() => setTab('video')}
                          className={`px-3 py-1.5 text-sm ${tab === 'video' ? 'bg-emerald-600 text-white' : 'text-emerald-700 hover:bg-emerald-50'}`}
                        >
                          Video
                        </button>
                      )}
                    </div>

                    {/* Download shortcuts */}
                    <div className="hidden sm:flex items-center gap-2">
                      {hasPdf && (
                        <a
                          href={B.pdfUrl}
                          className="inline-flex items-center rounded-full border border-emerald-300 px-3 py-1.5 text-emerald-700 hover:border-emerald-500"
                          download
                        >
                          Download PDF
                        </a>
                      )}
                      {hasPpt && (
                        <a
                          href={B.pptUrl}
                          className="inline-flex items-center rounded-full border border-emerald-300 px-3 py-1.5 text-emerald-700 hover:border-emerald-500"
                          download
                        >
                          Download PPTX
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Viewer body */}
                  <div className="p-3">
                    {tab === 'gallery' && hasGallery && (
                      <Carousel
                        images={carouselImages}
                        viewportClass="h-[56vh] sm:h-[64vh] max-h-[780px]"
                        fit="scale-down"
                        padClass="p-3 sm:p-4"
                        canvasBgClass="bg-white"
                        showCaption={true}
                        showDots={true}
                      />
                    )}

                    {tab === 'pdf' && hasPdf && (
                      <PdfEmbed url={B.pdfUrl} className="h-[78vh]" title={`${item.title} — PDF`} />
                    )}

                    {tab === 'ppt' && hasPpt && (
                      <PptxEmbed url={B.pptUrl} className="h-[78vh]" title={`${item.title} — PPTX`} />
                    )}

                    {tab === 'video' && hasVideo && ( // ✅ NEW
                      <VideoEmbed id={B.youtubeId} title={`${item.title} — Video`} />
                    )}
                  </div>
                </div>
              )
            })()}

            {/* MAIN column (projects/readings are single-column; products are the left column) */}
            <div className="space-y-4 sm:space-y-5">
              {/* 🖼️ hero / media:
                  - Projects: images handled by full-width Carousel above.
                  - Non-projects: show PDF <-> Gallery toggle when pdfUrl exists; otherwise the original gallery.
              */}
              {!isProjects && (() => {
                // Prepare gallery images (keep your Readings filtering/portrait tweaks)
                const galleryImages = isReadings
                  ? (item.gallery || []).filter(
                      im => (im.caption || '').toLowerCase() !== 'favorite passage'
                    )
                  : (item.gallery || [])

                const hasPdf = !!B.pdfUrl
                const hasGallery = galleryImages.length > 0

                // Default to PDF when present, else Gallery
                const [tab, setTab] = useState(hasPdf ? 'pdf' : 'gallery')

                if (!hasPdf) {
                  // No PDF → render the gallery exactly like before
                  return isReadings ? (
                    <Gallery
                      images={galleryImages}
                      className="max-w-[420px]"
                      columnsClass="grid-cols-3 md:grid-cols-4"
                      imageAspectClass="aspect-[3/4]"
                      fit="contain"
                    />
                  ) : (
                    <Gallery images={galleryImages} />
                  )
                }

                // PDF present → show tabs to switch between PDF and Gallery
                return (
                  <div className="rounded-[28px] border border-black/10 overflow-hidden bg-white">
                    {/* Tabs header */}
                    <div className="flex items-center justify-between gap-3 p-2 sm:p-3 border-b">
                      <div className="inline-flex rounded-full border border-emerald-300 overflow-hidden">
                        <button
                          onClick={() => setTab('pdf')}
                          className={`px-3 py-1.5 text-sm ${tab === 'pdf' ? 'bg-emerald-600 text-white' : 'text-emerald-700 hover:bg-emerald-50'}`}
                        >
                          PDF
                        </button>
                        {hasGallery && (
                          <button
                            onClick={() => setTab('gallery')}
                            className={`px-3 py-1.5 text-sm ${tab === 'gallery' ? 'bg-emerald-600 text-white' : 'text-emerald-700 hover:bg-emerald-50'}`}
                          >
                            Gallery
                          </button>
                        )}
                      </div>

                      {/* Optional: Download */}
                      {B.pdfUrl && (
                        <a
                          href={B.pdfUrl}
                          className="hidden sm:inline-flex items-center rounded-full border border-emerald-300 px-3 py-1.5 text-emerald-700 hover:border-emerald-500"
                          download
                        >
                          Download PDF
                        </a>
                      )}
                    </div>

                    {/* Viewer body */}
                    <div className="p-0">
                      {tab === 'pdf' ? (
                        <PdfEmbed url={B.pdfUrl} className="h-[78vh]" title={`${item.title} — PDF`} />
                      ) : isReadings ? (
                        <div className="p-3">
                          <Gallery
                            images={galleryImages}
                            className="max-w-[420px]"
                            columnsClass="grid-cols-3 md:grid-cols-4"
                            imageAspectClass="aspect-[3/4]"
                            fit="contain"
                          />
                        </div>
                      ) : (
                        <div className="p-3">
                          <Gallery images={galleryImages} />
                        </div>
                      )}
                    </div>
                  </div>
                )
              })()}

              {/* Overview */}
              {(B.overviewText || item.tags?.length) && (
                <SectionCard title={type === 'products' ? 'Overview' : type === 'projects' ? 'Overview' : 'Book Overview'} tone="accent">
                  {B.overviewText && <p>{B.overviewText}</p>}
                  {item.tags?.length ? (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.tags.map((t)=> <span key={t} className="inline-flex items-center rounded-full border border-emerald-300/70 bg-emerald-50 px-2.5 py-1 text-xs text-emerald-800">{t}</span>)}
                    </div>
                  ) : null}
                </SectionCard>
              )}

              {/* Projects → move Links right below Technical Overview */}
              {isProjects && B.links?.length && (
                <SectionCard title="Links">
                  <ul className="text-sm text-emerald-800 space-y-1">
                    {B.links.map((lnk, i) => (
                      <li key={i}>
                        <a className="hover:underline" href={lnk.href}>{lnk.label}</a>
                      </li>
                    ))}
                  </ul>
                </SectionCard>
              )}

              {/* PRODUCTS (unchanged) */}
              {type === 'products' && (
                <>
                  {B.problemAudience?.length && (
                    <SectionCard title="Problem & Audience">
                      <KeyValue items={B.problemAudience} />
                    </SectionCard>
                  )}
                  {B.features?.length && (
                    <SectionCard title="Key Features">
                      <ul className="list-disc pl-5 space-y-1">{B.features.map((f,i)=><li key={i}>{f}</li>)}</ul>
                    </SectionCard>
                  )}
                  {B.howItWorks?.length && (
                    <SectionCard title="How it Works">
                      <KeyValue items={B.howItWorks} />
                    </SectionCard>
                  )}
                  {B.kpis?.length && (
                    <div className="grid sm:grid-cols-3 gap-3">
                      {B.kpis.map((s,i)=><Stat key={i} {...s} />)}
                    </div>
                  )}
                  {B.adoptionMetrics?.length && (
                    <SectionCard title="Adoption & Metrics">
                      <dl className="grid grid-cols-2 gap-3">
                        {B.adoptionMetrics.map((m,i)=><Stat key={i} {...m} />)}
                      </dl>
                    </SectionCard>
                  )}
                  {B.reviews?.length && (
                    <SectionCard title="User Reviews">
                      <div className="grid sm:grid-cols-2 gap-3">
                        {B.reviews.map((r,i)=><ReviewCard key={i} quote={r.quote} author={r.author} />)}
                      </div>
                    </SectionCard>
                  )}
                  {B.changelog?.length && (
                    <SectionCard title="Changelog">
                      <ul className="text-sm space-y-1">{B.changelog.map((c,i)=><li key={i}>• {c}</li>)}</ul>
                    </SectionCard>
                  )}
                </>
              )}

              {/* PROJECTS */}
              {type === 'projects' && (
                <>
                  {/* Skills & Tools (unchanged) */}
                  {B.skillsTools?.length && (
                    <SectionCard title="Skills & Tools">
                      <KeyValue items={B.skillsTools} />
                    </SectionCard>
                  )}

                  {/* Problem (full width, directly below Skills & Tools) */}
                  {B.problem && (
                    <SectionCard title="Problem">
                      <p className="whitespace-pre-line">{B.problem}</p>
                    </SectionCard>
                  )}

                  {/* Approach (full width) */}
                  {B.approach && (
                    <SectionCard title="Approach">
                      <p className="whitespace-pre-line">{B.approach}</p>
                    </SectionCard>
                  )}

                  {/* Key Work (bulleted) */}
                  {B.keyWork?.length && (
                    <SectionCard title="Key Work">
                      <ul className="list-disc pl-5 space-y-1">
                        {B.keyWork.map((n, i) => <li key={i}>{n}</li>)}
                      </ul>
                    </SectionCard>
                  )}

                  {/* Architecture Notes (unchanged) */}
                  {B.architectureNotes?.length && (
                    <SectionCard title="Architecture Notes">
                      <ul className="list-disc pl-5 space-y-1">
                        {B.architectureNotes.map((n, i) => <li key={i}>{n}</li>)}
                      </ul>
                    </SectionCard>
                  )}

                  {/* Performance (unchanged) */}
                  {B.performance?.length && (
                    <SectionCard title="Performance">
                      <ul className="list-disc pl-5 space-y-1">
                        {B.performance.map((n, i) => <li key={i}>{n}</li>)}
                      </ul>
                    </SectionCard>
                  )}

                  {/* Results */}
                  {B.results?.length && (
                    <SectionCard title="Results">
                      <ul className="list-disc pl-5 space-y-1">
                        {B.results.map((n, i) => <li key={i}>{n}</li>)}
                      </ul>
                    </SectionCard>
                  )}

                  {/* Benchmarks (unchanged) */}
                  {B.benchmarks?.length && (
                    <SectionCard title="Benchmarks">
                      <KeyValue items={B.benchmarks} />
                    </SectionCard>
                  )}

                  {/* Build Timeline (unchanged) */}
                  {B.timeline?.length && (
                    <SectionCard title="Build Timeline">
                      <ol className="list-decimal pl-5 space-y-1">
                        {B.timeline.map((t, i) => <li key={i}>{t}</li>)}
                      </ol>
                    </SectionCard>
                  )}

                  {/* Bill of Materials (unchanged) */}
                  {B.bom?.length && (
                    <SectionCard title="Bill of Materials (BOM)">
                      <ul className="list-disc pl-5 space-y-1">
                        {B.bom.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    </SectionCard>
                  )}

                  {/* Next Steps (unchanged) */}
                  {B.risks?.length && (
                    <SectionCard title="Next Steps">
                      <ul className="list-disc pl-5 space-y-1">
                        {B.risks.map((r, i) => <li key={i}>{r}</li>)}
                      </ul>
                    </SectionCard>
                  )}

                  {/* ✅ Collaborators (bottom of projects) */}
                  {Array.isArray(B.collaborators) && B.collaborators.length > 0 && (
                    <SectionCard title="Collaborators">
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {B.collaborators.map((c, i) => (
                          <li
                            key={`${c.name}-${i}`}
                            className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white p-3"
                          >
                            {c.avatar ? (
                              <img
                                src={c.avatar}
                                alt={c.name}
                                className="w-10 h-10 rounded-full object-cover"
                                loading="lazy"
                                decoding="async"
                              />
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-sm font-medium">
                                {(c.name || '?').slice(0,1)}
                              </div>
                            )}

                            <div className="min-w-0">
                              <div className="font-medium text-black truncate">
                                {c.href ? (
                                  <a href={c.href} className="text-emerald-700 hover:underline">
                                    {c.name}
                                  </a>
                                ) : (
                                  c.name
                                )}
                              </div>
                              {c.role && (
                                <div className="text-sm text-zinc-600 truncate">
                                  {c.role}
                                </div>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </SectionCard>
                  )}
                </>
              )}

              {/* READINGS */}
              {type === 'readings' && (
                <>
                  {(B.review || B.overviewText) && (
                    <SectionCard title="My Review" tone="accent">
                      <p>{B.review || B.overviewText}</p>
                    </SectionCard>
                  )}
                  {B.quotes?.length && (
                    <SectionCard title="Interesting Quotes">
                      <ul className="list-disc pl-5 space-y-1">{B.quotes.map((q,i)=><li key={i}>“{q}”</li>)}</ul>
                    </SectionCard>
                  )}
                  {B.keyIdeas?.length && (
                    <SectionCard title="Key Ideas">
                      <ul className="list-disc pl-5 space-y-1">{B.keyIdeas.map((it,i)=><li key={i}>{it}</li>)}</ul>
                    </SectionCard>
                  )}
                  {B.who?.length && (
                    <SectionCard title="Who Should Read">
                      <ul className="list-disc pl-5 space-y-1">{B.who.map((it,i)=><li key={i}>{it}</li>)}</ul>
                    </SectionCard>
                  )}
                  {typeof B.rating === 'number' && (
                    <SectionCard title="Overall Rating">
                      <div className="flex items-center gap-2"><Stars value={B.rating} /><span className="text-sm text-zinc-700">{B.rating}/5</span></div>
                    </SectionCard>
                  )}
                </>
              )}
            </div>

            {/* RIGHT column — render ONLY for products (projects/readings use full-width main) */}
            {(!isReadings && !isProjects) && (
              <div className="space-y-4 sm:space-y-5">
                {/* Links: for products only */}
                {B.links?.length && (
                  <SectionCard title="Links">
                    <ul className="text-sm text-emerald-800 space-y-1">
                      {B.links.map((lnk,i)=><li key={i}><a className="hover:underline" href={lnk.href}>{lnk.label}</a></li>)}
                    </ul>
                  </SectionCard>
                )}

                {/* Product-only sidebar cards */}
                {type === 'products' && B.atAGlance?.length && (
                  <SectionCard title="At a Glance"><KeyValue items={B.atAGlance} /></SectionCard>
                )}

                {/* Environment appears in main stack for projects, not here */}
                {type === 'projects' && B.environment?.length && (
                  <SectionCard title="Environment"><KeyValue items={B.environment} /></SectionCard>
                )}

                {/* Mobile back link for products when sidebar is present */}
                <Link
                  to={`/${type}`}
                  className="sm:hidden inline-flex items-center rounded-full border border-emerald-300 px-4 py-2 text-emerald-700 hover:border-emerald-500"
                >
                  ← Back to {type}
                </Link>
              </div>
            )}
          </div>
        </Container>
      </section>
    </main>
  )
}

// Wrapper components for routes
export const ProductDetail = () => <ItemDetail type="products" />
export const ProjectDetail  = () => <ItemDetail type="projects" />
export const ReadingDetail  = () => <ItemDetail type="readings" />

export default ItemDetail