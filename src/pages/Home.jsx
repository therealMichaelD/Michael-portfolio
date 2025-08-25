// src/pages/Home.jsx
import React from 'react'
import { PROFILE } from '../data/content'
import { Container } from '../components/ui/Primitives'
import ImageTile from '../components/common/ImageTile'

const Home = () => (
  <main id="main" className="bg-white text-black">
    <section className="pt-12 sm:pt-24">
      <Container>
        <div className="text-left">
          <h1 className="text-[44px] sm:text-[92px] leading-[1.08] sm:leading-[1.05] font-semibold tracking-tight">
            Hey, I'm Michael.<br/>All-In On Tech Management.
          </h1>
          <p className="mt-3 sm:mt-4 text-xl sm:text-3xl text-emerald-800 max-w-3xl">
            {PROFILE.tagline}
          </p>
        </div>
      </Container>
    </section>

    <section className="py-6 sm:py-14">
      <Container>
        {/* 🖼️ Home hero image: PROFILE.headshot in content.js */}
        <ImageTile src={PROFILE.headshot} className="aspect-[16/9] sm:aspect-[16/6]" />
      </Container>
    </section>
  </main>
)

export default Home
