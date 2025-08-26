// src/pages/ItemDetail.jsx
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { PRODUCTS, PROJECTS, READINGS } from '../data/content'
import { Container, SectionHeading, AccentBar, KeyValue, Stat } from '../components/ui/Primitives'
import ImageTile from '../components/common/ImageTile'
import Gallery from '../components/common/Gallery'
import SectionCard from '../components/common/SectionCard'
import ReviewCard from '../components/common/ReviewCard'
import Stars from '../components/common/Stars'

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

          <div
            className={`mt-6 grid ${
              isReadings ? 'grid-cols-1' : 'md:grid-cols-[1.2fr_.8fr]'
            } gap-6 xl:gap-8 items-start`}
          >

            {/* LEFT column */}
            <div className="space-y-4 sm:space-y-5">
              {/* 🖼️ hero image */}
              
              {/* 🖼️ gallery */}
              {type === 'readings' ? (
                <Gallery
                  // Remove the “Favorite passage” item by filtering it out:
                  images={(item.gallery || []).filter(
                    im => (im.caption || '').toLowerCase() !== 'favorite passage'
                  )}
                  // Make the gallery much smaller and portrait-friendly:
                  className="max-w-[420px]"             // shrink overall gallery width
                  columnsClass="grid-cols-3 md:grid-cols-4" // more, smaller thumbnails
                  imageAspectClass="aspect-[3/4]"       // bookish portrait thumbs
                  fit="contain"                         // don’t crop tall images
                />
              ) : (
                <Gallery images={item.gallery} />
              )}


              {/* Overview */}
              {(B.overviewText || item.tags?.length) && (
                <SectionCard title={type === 'products' ? 'Overview' : type === 'projects' ? 'Technical Overview' : 'Book Overview'} tone="accent">
                  {/* ✅ EDIT TEXT HERE: overviewText in content.js */}
                  {B.overviewText && <p>{B.overviewText}</p>}
                  {item.tags?.length ? (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.tags.map((t)=> <span key={t} className="inline-flex items-center rounded-full border border-emerald-300/70 bg-emerald-50 px-2.5 py-1 text-xs text-emerald-800">{t}</span>)}
                    </div>
                  ) : null}
                </SectionCard>
              )}

              {/* PRODUCTS */}
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
                  {B.skillsTools?.length && (
                    <SectionCard title="Skills & Tools"><KeyValue items={B.skillsTools} /></SectionCard>
                  )}
                  {B.architectureNotes?.length && (
                    <SectionCard title="Architecture Notes">
                      <ul className="list-disc pl-5 space-y-1">{B.architectureNotes.map((n,i)=><li key={i}>{n}</li>)}</ul>
                    </SectionCard>
                  )}
                  {B.performance?.length && (
                    <SectionCard title="Performance">
                      <ul className="list-disc pl-5 space-y-1">{B.performance.map((n,i)=><li key={i}>{n}</li>)}</ul>
                    </SectionCard>
                  )}
                  {B.benchmarks?.length && (
                    <SectionCard title="Benchmarks"><KeyValue items={B.benchmarks} /></SectionCard>
                  )}
                  {B.timeline?.length && (
                    <SectionCard title="Build Timeline">
                      <ol className="list-decimal pl-5 space-y-1">{B.timeline.map((t,i)=><li key={i}>{t}</li>)}</ol>
                    </SectionCard>
                  )}
                  {B.bom?.length && (
                    <SectionCard title="Bill of Materials (BOM)">
                      <ul className="list-disc pl-5 space-y-1">{B.bom.map((b,i)=><li key={i}>{b}</li>)}</ul>
                    </SectionCard>
                  )}
                  {B.risks?.length && (
                    <SectionCard title="Risks & Next Steps">
                      <ul className="list-disc pl-5 space-y-1">{B.risks.map((r,i)=><li key={i}>{r}</li>)}</ul>
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

            {/* RIGHT column */}
            {/* Right sidebar — hide Links & Bibliography for Readings */}
            <div className="space-y-4 sm:space-y-5">
              {/* Links: render only when NOT readings */}
              {!isReadings && B.links?.length && (
                <SectionCard title="Links">
                  <ul className="text-sm text-emerald-800 space-y-1">
                    {B.links.map((lnk,i)=><li key={i}><a className="hover:underline" href={lnk.href}>{lnk.label}</a></li>)}
                  </ul>
                </SectionCard>
              )}

              {type === 'products' && B.atAGlance?.length && (
                <SectionCard title="At a Glance"><KeyValue items={B.atAGlance} /></SectionCard>
              )}

              {type === 'projects' && B.environment?.length && (
                <SectionCard title="Environment"><KeyValue items={B.environment} /></SectionCard>
              )}

              {/* Bibliography: removed for readings (don’t render at all) */}
              {/* (Nothing here) */}

              <Link
                to={`/${type}`}
                className="sm:hidden inline-flex items-center rounded-full border border-emerald-300 px-4 py-2 text-emerald-700 hover:border-emerald-500"
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

// Wrapper components for routes
export const ProductDetail = () => <ItemDetail type="products" />
export const ProjectDetail  = () => <ItemDetail type="projects" />
export const ReadingDetail  = () => <ItemDetail type="readings" />

export default ItemDetail
