// src/pages/Readings.jsx
import React from 'react'
import { READINGS } from '../data/content'
import { Container, SectionHeading, AccentBar } from '../components/ui/Primitives'
import TileGrid from '../components/common/TileGrid'

const Readings = () => (
  <main className="bg-white text-black">
    <section className="pt-10 sm:pt-16">
      <Container>
        <SectionHeading>Readings</SectionHeading>
        <p className="mt-2 text-zinc-700 text-sm sm:text-base">
          Books, articles, and media reviews related to engineering, PM, and entrepreneurship.
        </p>
        <div className="mt-4"><AccentBar /></div>
        <div className="mt-6">
          <TileGrid items={READINGS} />
        </div>
      </Container>
    </section>
  </main>
)

export default Readings
