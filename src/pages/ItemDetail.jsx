// src/pages/ItemDetail.jsx
import React, { useState } from 'react'
import PdfEmbed from '../components/common/PdfEmbed'
import PptxEmbed from '../components/common/PptxEmbed'
import VideoEmbed from '../components/common/VideoEmbed'
import RepoPreview from '../components/common/RepoPreview'
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
              const hasPdf = !!B.pdfUrl
              const hasPpt = !!B.pptUrl
              const hasVideo = !!B.youtubeId
              const hasRepo = !!B.repo

              const [tab, setTab] = useState(
                hasGallery
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

              if (!hasGallery && !hasPdf && !hasPpt && !hasVideo && !hasRepo)
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

              {/* LINK SECTION (common for products + projects) */}
              {B.links?.length > 0 && (
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

              {/* PRODUCT-SPECIFIC SECTIONS — unchanged, just full-width now */}
              {isProducts && (
                <>
                  {B.problemAudience?.length > 0 && (
                    <SectionCard title="Problem & Audience">
                      <KeyValue items={B.problemAudience} />
                    </SectionCard>
                  )}

                  {B.features?.length > 0 && (
                    <SectionCard title="Key Features">
                      <ul className="list-disc pl-5 space-y-1">
                        {B.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </SectionCard>
                  )}

                  {B.howItWorks?.length > 0 && (
                    <SectionCard title="How it Works">
                      <KeyValue items={B.howItWorks} />
                    </SectionCard>
                  )}

                  {B.kpis?.length > 0 && (
                    <div className="grid sm:grid-cols-3 gap-3">
                      {B.kpis.map((s, i) => (
                        <Stat key={i} {...s} />
                      ))}
                    </div>
                  )}

                  {B.adoptionMetrics?.length > 0 && (
                    <SectionCard title="Adoption & Metrics">
                      <dl className="grid grid-cols-2 gap-3">
                        {B.adoptionMetrics.map((m, i) => (
                          <Stat key={i} {...m} />
                        ))}
                      </dl>
                    </SectionCard>
                  )}

                  {B.reviews?.length > 0 && (
                    <SectionCard title="User Reviews">
                      <div className="grid sm:grid-cols-2 gap-3">
                        {B.reviews.map((r, i) => (
                          <ReviewCard
                            key={i}
                            quote={r.quote}
                            author={r.author}
                          />
                        ))}
                      </div>
                    </SectionCard>
                  )}

                  {B.changelog?.length > 0 && (
                    <SectionCard title="Changelog">
                      <ul className="text-sm space-y-1">
                        {B.changelog.map((c, i) => (
                          <li key={i}>• {c}</li>
                        ))}
                      </ul>
                    </SectionCard>
                  )}
                </>
              )}

              {/* PROJECTS (unchanged) */}
              {isProjects && (
                <>
                  {B.skillsTools?.length > 0 && (
                    <SectionCard title="Skills & Tools">
                      <KeyValue items={B.skillsTools} />
                    </SectionCard>
                  )}

                  {B.problem && (
                    <SectionCard title="Problem">
                      <p className="whitespace-pre-line">{B.problem}</p>
                    </SectionCard>
                  )}

                  {B.approach && (
                    <SectionCard title="Approach">
                      <p className="whitespace-pre-line">{B.approach}</p>
                    </SectionCard>
                  )}

                  {B.keyWork?.length > 0 && (
                    <SectionCard title="Key Work">
                      <ul className="list-disc pl-5 space-y-1">
                        {B.keyWork.map((n, i) => (
                          <li key={i}>{n}</li>
                        ))}
                      </ul>
                    </SectionCard>
                  )}

                  {B.architectureNotes?.length > 0 && (
                    <SectionCard title="Architecture Notes">
                      <ul className="list-disc pl-5 space-y-1">
                        {B.architectureNotes.map((n, i) => (
                          <li key={i}>{n}</li>
                        ))}
                      </ul>
                    </SectionCard>
                  )}

                  {B.performance?.length > 0 && (
                    <SectionCard title="Performance">
                      <ul className="list-disc pl-5 space-y-1">
                        {B.performance.map((n, i) => (
                          <li key={i}>{n}</li>
                        ))}
                      </ul>
                    </SectionCard>
                  )}

                  {B.results?.length > 0 && (
                    <SectionCard title="Results">
                      <ul className="list-disc pl-5 space-y-1">
                        {B.results.map((n, i) => (
                          <li key={i}>{n}</li>
                        ))}
                      </ul>
                    </SectionCard>
                  )}

                  {B.benchmarks?.length > 0 && (
                    <SectionCard title="Benchmarks">
                      <KeyValue items={B.benchmarks} />
                    </SectionCard>
                  )}

                  {B.timeline?.length > 0 && (
                    <SectionCard title="Build Timeline">
                      <ol className="list-decimal pl-5 space-y-1">
                        {B.timeline.map((t, i) => (
                          <li key={i}>{t}</li>
                        ))}
                      </ol>
                    </SectionCard>
                  )}

                  {B.bom?.length > 0 && (
                    <SectionCard title="Bill of Materials (BOM)">
                      <ul className="list-disc pl-5 space-y-1">
                        {B.bom.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </SectionCard>
                  )}

                  {B.risks?.length > 0 && (
                    <SectionCard title="Next Steps">
                      <ul className="list-disc pl-5 space-y-1">
                        {B.risks.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </SectionCard>
                  )}

                  {B.collaborators?.length > 0 && (
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
                    </SectionCard>
                  )}
                </>
              )}

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

export default ItemDetail
