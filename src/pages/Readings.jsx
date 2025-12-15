// src/pages/Readings.jsx
import React from 'react'
import { READINGS } from '../data/content'
import { Container, SectionHeading, AccentBar } from '../components/ui/Primitives'
import ImageTile from '../components/common/ImageTile'

const Readings = () => (
  <main className="bg-white text-black">
    <section className="pt-10 sm:pt-16">
      <Container>
        <SectionHeading>Readings</SectionHeading>
        <p className="mt-2 text-zinc-700 text-sm sm:text-base">
          Books I've read in my free time
        </p>
        <div className="mt-4">
          <AccentBar />
        </div>
        <div className="mt-6 grid gap-5 sm:gap-7 md:grid-cols-2 xl:grid-cols-4">
          {READINGS.map((reading) => (
            <ImageTile
              key={reading.id}
              src={reading.heroImage}
              alt={reading.title}
              className="aspect-[2/3] transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl"
              fit="contain"
            />
          ))}
        </div>
      </Container>
    </section>
  </main>
)

export default Readings
