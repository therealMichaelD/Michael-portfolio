// src/pages/ItemDetail.jsx
import React, { useState } from 'react'
import PdfEmbed from '../components/common/PdfEmbed'
import PptxEmbed from '../components/common/PptxEmbed'
import VideoEmbed from '../components/common/VideoEmbed'
import RepoPreview from '../components/common/RepoPreview'
import AppWindowEmbed from '../components/common/AppWindowEmbed'
import { Link, useParams } from 'react-router-dom'
import { PRODUCTS, PROJECTS, READINGS } from '../data/content'
import { Container, SectionHeading, AccentBar, KeyValue, Stat } from '../components/ui/Primitives'
import Gallery from '../components/common/Gallery'
import SectionCard from '../components/common/SectionCard'
import ReviewCard from '../components/common/ReviewCard'
import Stars from '../components/common/Stars'
import Carousel from '../components/common/Carousel'

const datasetByType = {
  products: PRODUCTS,
  projects: PROJECTS,
  readings: READINGS,
}

function findItem(type, id) {
  const list = datasetByType[type] || []
  return list.find((x) => x.id === id)
}

// Shared renderer to keep the grid layout consistent between projects and products
const renderSurfaceRows = (surfaces, keyPrefix = 'surface-row') => {
  if (!surfaces.length) return null
  const rows = []
  for (let i = 0; i < surfaces.length; i += 2) {
    rows.push(surfaces.slice(i, i + 2))
  }
  return rows.map((row, idx) => (
    <div key={`${keyPrefix}-${idx}`} className="grid gap-5 lg:grid-cols-2">
      {row.map((surface) => (
        <div key={surface.key} className={`${row.length === 1 ? 'lg:col-span-2' : ''} h-full`}>
          {surface.node}
        </div>
      ))}
    </div>
  ))
}

export const ItemDetail = ({ type }) => {
  const { id } = useParams()
  const item = findItem(type, id)
  const B = item?.blocks || {}

  const isReadings = type === 'readings'
  const isProjects = type === 'projects'
  const isProducts = type === 'products'

  if (!item) {
    return (
      <main className="bg-white text-black">
        <section className="pt-10 sm:pt-16">
          <Container>
            <SectionHeading>Not found</SectionHeading>
            <p className="mt-3 text-zinc-700">
              We couldn’t find that entry. Try the list page.
            </p>
            <div className="mt-5">
              <Link
                to={`/${type}`}
                className="inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-zinc-700 hover:border-black/40"
              >
                ← Back to {type}
              </Link>
            </div>
          </Container>
        </section>
      </main>
    )
  }

  // Build de-duplicated images for project/product carousel
  const carouselImages = [
    item.heroImage ? { src: item.heroImage, caption: item.title || 'Hero' } : null,
    ...(item.gallery || []),
  ]
    .filter(Boolean)
    .filter((im, idx, arr) => im?.src && arr.findIndex((x) => x.src === im.src) === idx)

  return (
    <main className="bg-white text-black">
      <section className="pt-10 sm:pt-16">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <SectionHeading>{item.title}</SectionHeading>
            <Link
              to={`/${type}`}
              className="hidden sm:inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-zinc-700 hover:border-black/40"
            >
              ← Back to {type}
            </Link>
          </div>

          <p className="mt-2 text-zinc-700">{item.subtitle}</p>
          <div className="mt-4">
            <AccentBar />
          </div>

          {/* Unified layout for ALL types (projects, readings, products) */}
          <div className={`mt-6 grid grid-cols-1 gap-6 xl:gap-8 items-start`}>
            {/* ====== UNIVERSAL MEDIA VIEWER (Projects + Products) ====== */}
            {(() => {
              const galleryImages = (item.gallery || []).filter((im) => im?.src)
              const hasGallery = galleryImages.length > 0
              const hasLiveApp = !!B.liveAppUrl
              const hasPdf = !!B.pdfUrl
              const hasPpt = !!B.pptUrl
              const hasVideo = !!B.youtubeId
              const hasRepo = !!B.repo

              const [tab, setTab] = useState(
                hasLiveApp
                  ? 'app'
                  : hasGallery
                  ? 'gallery'
                  : hasPdf
                  ? 'pdf'
                  : hasPpt
                  ? 'ppt'
                  : hasVideo
                  ? 'video'
                  : hasRepo
                  ? 'repo'
                  : 'gallery'
              )

              if (!hasLiveApp && !hasGallery && !hasPdf && !hasPpt && !hasVideo && !hasRepo)
                return null

              const imagesForCarousel = hasGallery
                ? [
                    item.heroImage
                      ? { src: item.heroImage, caption: item.title || 'Hero' }
                      : null,
                    ...galleryImages,
                  ].filter(Boolean)
                : []

              return (
                <div className="w-full rounded-[28px] border border-black/10 overflow-hidden bg-white">
                  {/* Tabs */}
                  <div className="flex items-center justify-between gap-3 p-2 sm:p-3 border-b">
                    <div className="inline-flex rounded-full border border-black/10 overflow-hidden">
                      {hasLiveApp && (
                        <button
                          onClick={() => setTab('app')}
                          className={`px-3 py-1.5 text-sm ${
                            tab === 'app'
                              ? 'bg-zinc-900 text-white'
                              : 'text-zinc-700 hover:bg-zinc-100'
                          }`}
                        >
                          Live App
                        </button>
                      )}
                      {hasGallery && (
                        <button
                          onClick={() => setTab('gallery')}
                          className={`px-3 py-1.5 text-sm ${
                            tab === 'gallery'
                              ? 'bg-zinc-900 text-white'
                              : 'text-zinc-700 hover:bg-zinc-100'
                          }`}
                        >
                          Gallery
                        </button>
                      )}
                      {hasPdf && (
                        <button
                          onClick={() => setTab('pdf')}
                          className={`px-3 py-1.5 text-sm ${
                            tab === 'pdf'
                              ? 'bg-zinc-900 text-white'
                              : 'text-zinc-700 hover:bg-zinc-100'
                          }`}
                        >
                          PDF
                        </button>
                      )}
                      {hasPpt && (
                        <button
                          onClick={() => setTab('ppt')}
                          className={`px-3 py-1.5 text-sm ${
                            tab === 'ppt'
                              ? 'bg-zinc-900 text-white'
                              : 'text-zinc-700 hover:bg-zinc-100'
                          }`}
                        >
                          PPT
                        </button>
                      )}
                      {hasVideo && (
                        <button
                          onClick={() => setTab('video')}
                          className={`px-3 py-1.5 text-sm ${
                            tab === 'video'
                              ? 'bg-zinc-900 text-white'
                              : 'text-zinc-700 hover:bg-zinc-100'
                          }`}
                        >
                          Video
                        </button>
                      )}
                      {hasRepo && (
                        <button
                          onClick={() => setTab('repo')}
                          className={`px-3 py-1.5 text-sm ${
                            tab === 'repo'
                              ? 'bg-zinc-900 text-white'
                              : 'text-zinc-700 hover:bg-zinc-100'
                          }`}
                        >
                          Repo
                        </button>
                      )}
                    </div>

                    <div className="hidden sm:flex items-center gap-2">
                      {hasPdf && (
                        <a
                          href={B.pdfUrl}
                          className="inline-flex items-center rounded-full border border-black/10 px-3 py-1.5 text-zinc-700 hover:border-black/40"
                          download
                        >
                          Download PDF
                        </a>
                      )}
                      {hasPpt && (
                        <a
                          href={B.pptUrl}
                          className="inline-flex items-center rounded-full border border-black/10 px-3 py-1.5 text-zinc-700 hover:border-black/40"
                          download
                        >
                          Download PPTX
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Viewer */}
                  <div className="p-3">
                    {tab === 'app' && hasLiveApp && (
                      <AppWindowEmbed
                        url={B.liveAppUrl}
                        title={`${item.title} — Live app`}
                      />
                    )}

                    {tab === 'gallery' && hasGallery && (
                      <Carousel
                        images={imagesForCarousel}
                        viewportClass="h-[56vh] sm:h-[64vh] max-h-[780px]"
                        fit="scale-down"
                        padClass="p-3 sm:p-4"
                        canvasBgClass="bg-white"
                        showCaption={true}
                        showDots={true}
                      />
                    )}

                    {tab === 'pdf' && hasPdf && (
                      <PdfEmbed
                        url={B.pdfUrl}
                        className="h-[78vh]"
                        title={`${item.title} — PDF`}
                      />
                    )}

                    {tab === 'ppt' && hasPpt && (
                      <PptxEmbed
                        url={B.pptUrl}
                        className="h-[78vh]"
                        title={`${item.title} — PPTX`}
                      />
                    )}

                    {tab === 'video' && hasVideo && (
                      <VideoEmbed
                        id={B.youtubeId}
                        title={`${item.title} — Video`}
                      />
                    )}

                    {tab === 'repo' && hasRepo && (
                      <RepoPreview ownerRepo={B.repo} />
                    )}
                  </div>
                </div>
              )
            })()}

            {/* MAIN STACK (Unified for Projects + Products + Readings) */}
            <div className="space-y-4 sm:space-y-5">
              {/* Overview */}
              {(B.overviewText || item.tags?.length) && (
                <SectionCard
                  title={
                    isProducts
                      ? 'Overview'
                      : isProjects
                      ? 'Overview'
                      : 'Book Overview'
                  }
                  tone="accent"
                >
                  {B.overviewText && <p>{B.overviewText}</p>}
                  {item.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center rounded-full border border-black/10 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </SectionCard>
              )}

              {/* LINK SECTION (products only) */}
              {isProducts && B.links?.length > 0 && (
                <SectionCard title="Links">
                  <ul className="text-sm text-zinc-800 space-y-1">
                    {B.links.map((lnk, i) => (
                      <li key={i}>
                        <a className="hover:underline" href={lnk.href}>
                          {lnk.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </SectionCard>
              )}

              {/* PRODUCT-SPECIFIC SECTIONS */}
              {isProducts && (
                <>
                  {(B.problemAudience?.length > 0 || B.features?.length > 0) && (
                    <div className="grid gap-5 lg:grid-cols-2">
                      {B.problemAudience?.length > 0 && (
                        <ProjectSurface eyebrow="Context" title="Problem & Audience">
                          <KeyValue items={B.problemAudience} />
                        </ProjectSurface>
                      )}
                      {B.features?.length > 0 && (
                        <ProjectSurface title="Key Features">
                          <ul className="list-disc pl-5 space-y-1">
                            {B.features.map((f, i) => (
                              <li key={i}>{f}</li>
                            ))}
                          </ul>
                        </ProjectSurface>
                      )}
                    </div>
                  )}

                  {B.howItWorks?.length > 0 && (
                    <ProjectSurface title="How it Works">
                      <KeyValue items={B.howItWorks} />
                    </ProjectSurface>
                  )}

                  {(B.kpis?.length > 0 || B.adoptionMetrics?.length > 0) && (
                    <div className="grid gap-5 lg:grid-cols-2">
                      {B.kpis?.length > 0 && (
                        <ProjectSurface title="KPIs & Success Metrics">
                          <div className="grid sm:grid-cols-3 gap-3">
                            {B.kpis.map((s, i) => (
                              <Stat key={i} {...s} />
                            ))}
                          </div>
                        </ProjectSurface>
                      )}
                      {B.adoptionMetrics?.length > 0 && (
                        <ProjectSurface title="Adoption & Usage">
                          <div className="grid grid-cols-2 gap-3">
                            {B.adoptionMetrics.map((m, i) => (
                              <Stat key={i} {...m} />
                            ))}
                          </div>
                        </ProjectSurface>
                      )}
                    </div>
                  )}

                  {B.reviews?.length > 0 && (
                    <ProjectSurface eyebrow="Signal" title="User Reviews">
                      <div className="grid sm:grid-cols-2 gap-3">
                        {B.reviews.map((r, i) => (
                          <ReviewCard
                            key={i}
                            quote={r.quote}
                            author={r.author}
                          />
                        ))}
                      </div>
                    </ProjectSurface>
                  )}

                  {B.changelog?.length > 0 && (
                    <ProjectSurface title="Changelog">
                      <ul className="text-sm space-y-1">
                        {B.changelog.map((c, i) => (
                          <li key={i}>• {c}</li>
                        ))}
                      </ul>
                    </ProjectSurface>
                  )}
                </>
              )}

              {/* PROJECT / PRODUCT SHARED SURFACES */}
              {(isProjects || isProducts) && (() => {
                const surfaces = []

                if (B.skillsTools?.length > 0) {
                  surfaces.push({
                    key: 'skills',
                    node: (
                      <ProjectSurface title="Skills & Tools">
                        <KeyValue items={B.skillsTools} />
                      </ProjectSurface>
                    ),
                  })
                }
                if (B.architectureNotes?.length > 0) {
                  surfaces.push({
                    key: 'architecture',
                    node: (
                      <ProjectSurface title="Architecture Notes">
                        <ul className="list-disc pl-5 space-y-1">
                          {B.architectureNotes.map((n, i) => (
                            <li key={i}>{n}</li>
                          ))}
                        </ul>
                      </ProjectSurface>
                    ),
                  })
                }
                if (B.problem) {
                  surfaces.push({
                    key: 'problem',
                    node: (
                      <ProjectSurface eyebrow="Challenge" title="Problem">
                        <p className="whitespace-pre-line">{B.problem}</p>
                      </ProjectSurface>
                    ),
                  })
                }
                if (B.approach) {
                  surfaces.push({
                    key: 'approach',
                    node: (
                      <ProjectSurface eyebrow="Solution" title="Approach">
                        <p className="whitespace-pre-line">{B.approach}</p>
                      </ProjectSurface>
                    ),
                  })
                }
                if (B.keyWork?.length > 0) {
                  surfaces.push({
                    key: 'keywork',
                    node: (
                      <ProjectSurface title="Key Work">
                        <ul className="list-disc pl-5 space-y-1">
                          {B.keyWork.map((n, i) => (
                            <li key={i}>{n}</li>
                          ))}
                        </ul>
                      </ProjectSurface>
                    ),
                  })
                }
                if (B.performance?.length > 0) {
                  surfaces.push({
                    key: 'performance',
                    node: (
                      <ProjectSurface title="Performance Checks">
                        <ul className="list-disc pl-5 space-y-1">
                          {B.performance.map((n, i) => (
                            <li key={i}>{n}</li>
                          ))}
                        </ul>
                      </ProjectSurface>
                    ),
                  })
                }
                if (B.results?.length > 0) {
                  surfaces.push({
                    key: 'results',
                    node: (
                      <ProjectSurface eyebrow="Impact" title="Results">
                        <ul className="list-disc pl-5 space-y-1">
                          {B.results.map((n, i) => (
                            <li key={i}>{n}</li>
                          ))}
                        </ul>
                      </ProjectSurface>
                    ),
                  })
                }
                if (B.benchmarks?.length > 0) {
                  surfaces.push({
                    key: 'benchmarks',
                    node: (
                      <ProjectSurface title="Benchmarks">
                        <KeyValue items={B.benchmarks} />
                      </ProjectSurface>
                    ),
                  })
                }
                if (B.timeline?.length > 0) {
                  surfaces.push({
                    key: 'timeline',
                    node: (
                      <ProjectSurface title="Build Timeline">
                        <ol className="list-decimal pl-5 space-y-1">
                          {B.timeline.map((t, i) => (
                            <li key={i}>{t}</li>
                          ))}
                        </ol>
                      </ProjectSurface>
                    ),
                  })
                }
                if (isProjects && B.bom?.length > 0) {
                  surfaces.push({
                    key: 'bom',
                    node: (
                      <ProjectSurface title="Bill of Materials (BOM)">
                        <ul className="list-disc pl-5 space-y-1">
                          {B.bom.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      </ProjectSurface>
                    ),
                  })
                }
                if (B.risks?.length > 0) {
                  surfaces.push({
                    key: 'risks',
                    node: (
                      <ProjectSurface title="Next Steps">
                        <ul className="list-disc pl-5 space-y-1">
                          {B.risks.map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>
                      </ProjectSurface>
                    ),
                  })
                }
                if (B.collaborators?.length > 0) {
                  surfaces.push({
                    key: 'collaborators',
                    node: (
                      <ProjectSurface title="Collaborators">
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
                                />
                              ) : (
                                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-700 text-sm font-medium">
                                  {(c.name || '?').slice(0, 1)}
                                </div>
                              )}
                              <div className="min-w-0">
                                <div className="font-medium text-black truncate">
                                  {c.href ? (
                                    <a
                                      href={c.href}
                                      className="text-zinc-700 hover:underline"
                                    >
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
                      </ProjectSurface>
                    ),
                  })
                }

                return renderSurfaceRows(surfaces, isProjects ? 'project-row' : 'product-row')
              })()}

              {/* READINGS (unchanged) */}
              {isReadings && (
                <>
                  {(B.review || B.overviewText) && (
                    <SectionCard title="My Review" tone="accent">
                      <p>{B.review || B.overviewText}</p>
                    </SectionCard>
                  )}

                  {B.quotes?.length > 0 && (
                    <SectionCard title="Interesting Quotes">
                      <ul className="list-disc pl-5 space-y-1">
                        {B.quotes.map((q, i) => (
                          <li key={i}>“{q}”</li>
                        ))}
                      </ul>
                    </SectionCard>
                  )}

                  {B.keyIdeas?.length > 0 && (
                    <SectionCard title="Key Ideas">
                      <ul className="list-disc pl-5 space-y-1">
                        {B.keyIdeas.map((it, i) => (
                          <li key={i}>{it}</li>
                        ))}
                      </ul>
                    </SectionCard>
                  )}

                  {B.who?.length > 0 && (
                    <SectionCard title="Who Should Read">
                      <ul className="list-disc pl-5 space-y-1">
                        {B.who.map((it, i) => (
                          <li key={i}>{it}</li>
                        ))}
                      </ul>
                    </SectionCard>
                  )}

                  {typeof B.rating === 'number' && (
                    <SectionCard title="Overall Rating">
                      <div className="flex items-center gap-2">
                        <Stars value={B.rating} />
                        <span className="text-sm text-zinc-700">
                          {B.rating}/5
                        </span>
                      </div>
                    </SectionCard>
                  )}
                </>
              )}

              {/* Mobile Back Link */}
              <Link
                to={`/${type}`}
                className="sm:hidden inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-zinc-700 hover:border-black/40"
              >
                ← Back to {type}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}

export const ProductDetail = () => <ItemDetail type="products" />
export const ProjectDetail = () => <ItemDetail type="projects" />
export const ReadingDetail = () => <ItemDetail type="readings" />

const ProjectSurface = ({ title, children, variant = 'light', eyebrow }) => {
  const isDark = variant === 'dark'
  return (
    <div
      className={`rounded-[32px] border ${
        isDark ? 'bg-zinc-900 text-white border-black/60' : 'bg-white/80 text-zinc-800 border-black/10'
      } p-6 sm:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.12)] h-full flex flex-col`}
    >
      {eyebrow && (
        <p className={`text-xs uppercase tracking-[0.3em] ${isDark ? 'text-white/70' : 'text-zinc-500'}`}>
          {eyebrow}
        </p>
      )}
      <h4 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>{title}</h4>
      <div className={`mt-4 space-y-3 text-sm sm:text-base ${isDark ? 'text-white/80' : 'text-zinc-700'} grow`}>
        {children}
      </div>
    </div>
  )
}

export default ItemDetail
