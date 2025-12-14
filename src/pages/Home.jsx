// src/pages/Home.jsx
import React, { useEffect, useState } from 'react'
import { PROFILE } from '../data/content'
import { Container, SectionHeading, AccentBar } from '../components/ui/Primitives'
import ImageTile from '../components/common/ImageTile'

const Home = () => {
  const storyGalleries = PROFILE.storyGalleries || {} // 👉 Add image paths in src/data/profile.js under PROFILE.storyGalleries

  const buildGallery = (...sources) => {
    const collected = []
    sources.forEach((source) => {
      if (!source) return
      if (Array.isArray(source)) {
        source.forEach((img) => img && collected.push(img))
      } else {
        collected.push(source)
      }
    })
    const sanitized = collected.filter((img) => img && img !== PROFILE.headshot)
    if (sanitized.length) return sanitized
    const fallback = [PROFILE.aboutPhoto].filter(Boolean)
    return fallback.length ? fallback : []
  }

  const storySections = [
    {
      id: 'intro',
      eyebrow: "",
      title: 'Passionate about technology and business management',
      copy:
        'I thrive at the intersection of deep engineering and strategic decision making, building systems, leading teams, and translating complex ideas into products that feel inevitable.',
      gallery: buildGallery(storyGalleries.intro, PROFILE.aboutPhoto, PROFILE.headshot), // add/remove paths via PROFILE.storyGalleries.intro
    },
    {
      id: 'education',
      eyebrow: '',
      title: 'MEM + BE in Electrical Engineering',
      copy:
        'My dual path at Dartmouth blends a Master of Engineering Management with a Bachelor of Engineering, giving me both the technical rigor and business intuition to lead modern product teams.',
      gallery: buildGallery(storyGalleries.education, PROFILE.aboutPhoto), // tweak PROFILE.storyGalleries.education array
    },
  ]

  const hobbies = [
    'Supporting my Toronto sports teams',
    'Long runs',
    'Reading & Podcasts',
    'Fishing + anything outdoors'
  ]
  const hobbyGallery = buildGallery(storyGalleries.hobbies, storyGalleries.location, PROFILE.headshot) // update PROFILE.storyGalleries.hobbies

  return (
    <main id="main" className="bg-white text-black">
      <section className="pt-12 sm:pt-24">
        <Container>
          <div className="text-left">
            <h1 className="text-[44px] sm:text-[92px] leading-[1.08] sm:leading-[1.05] font-semibold tracking-tight">
              Hey, I'm Michael.<br />All-In On Tech Management.
            </h1>
            <p className="mt-3 sm:mt-4 text-xl sm:text-3xl text-zinc-700 max-w-3xl">
              {PROFILE.tagline}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-6 sm:py-14">
        <Container>
          {/* Home hero image: PROFILE.headshot in content.js */}
          <ImageTile src={PROFILE.headshot} className="aspect-[16/9] sm:aspect-[16/6]" />
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <SectionHeading>About me</SectionHeading>
          <p className="mt-2 text-zinc-700 text-sm sm:text-base">
            {PROFILE.subhead || ''}
          </p>
          <div className="mt-4">
            <AccentBar />
          </div>

          <div className="mt-10 space-y-10">
            {storySections.map((section, index) => (
              <article
                key={section.id}
                className="rounded-[36px] border border-black/10 bg-white/70 shadow-[0_20px_60px_rgba(15,23,42,0.1)] overflow-hidden"
              >
                <div
                  className={`grid gap-6 xl:gap-12 p-7 sm:p-10 md:p-12 items-center ${
                    index % 2 === 0 ? 'md:grid-cols-[1.1fr_0.9fr]' : 'md:grid-cols-[0.9fr_1.1fr]'
                  }`}
                >
                  <div className={`${index % 2 !== 0 ? 'md:order-2' : ''} space-y-4`}>
                    <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">{section.eyebrow}</p>
                    <h3 className="text-3xl sm:text-4xl font-semibold text-zinc-900">{section.title}</h3>
                    <p className="text-base sm:text-lg text-zinc-700 leading-7">{section.copy}</p>
                  </div>
                  <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                    <AutoGallery images={section.gallery} alt={section.title} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[36px] border border-black/10 bg-gradient-to-br from-white via-zinc-50 to-white p-8 sm:p-12">
            <div className="grid md:grid-cols-[1.1fr_.9fr] gap-8 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500"></p>
                <h3 className="text-3xl sm:text-4xl font-semibold text-zinc-900">Hobbies</h3>
                <p className="mt-4 text-base sm:text-lg text-zinc-700">
                  Life outside of the lab keeps me energized and grounded.
                </p>
                <ul className="mt-6 grid gap-3 text-base sm:text-lg text-zinc-800">
                  {hobbies.map((hobby) => (
                    <li
                      key={hobby}
                      className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white/70 px-4 py-3 backdrop-blur-sm"
                    >
                      <span className="h-2 w-2 rounded-full bg-zinc-500" aria-hidden="true" />
                      {hobby}
                    </li>
                  ))}
                </ul>
              </div>
              <AutoGallery images={hobbyGallery} alt="Lifestyle snapshots" />
            </div>
          </div>

          <div className="mt-12">
            <article className="rounded-[36px] border border-black/10 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white p-8 sm:p-12 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
              <p className="text-sm uppercase tracking-[0.4em] text-white/70">Chapter 05</p>
              <h3 className="mt-4 text-3xl sm:text-4xl font-semibold">Currently seeking</h3>
              <p className="mt-3 text-lg sm:text-xl max-w-3xl">
                Engineering or Tech Management internship for Summer 2026. I am ready to jump into teams that want to
                experiment boldly and ship meaningful products.
              </p>
            </article>
          </div>
        </Container>
      </section>
    </main>
  )
}

const AutoGallery = ({ images = [], alt = '', aspect = 'aspect-[5/6]' }) => {
  const slides = images.filter(Boolean)
  const [index, setIndex] = useState(0)
  const count = slides.length

  useEffect(() => {
    if (count <= 1) return undefined
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % count)
    }, 3500)
    return () => clearInterval(id)
  }, [count])

  useEffect(() => {
    if (index >= count) setIndex(0)
  }, [count, index])

  if (!count) return null

  return (
    <div className={`relative w-full ${aspect}`}>
      <div className="absolute inset-0 rounded-[32px] border border-black/10 overflow-hidden bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-200 shadow-[0_15px_50px_rgba(15,23,42,0.12)]">
        {slides.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt={alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </div>
  )
}

export default Home
