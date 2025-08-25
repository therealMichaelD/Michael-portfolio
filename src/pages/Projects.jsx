// src/pages/Projects.jsx
import React from 'react'
import { PROJECTS } from '../data/content'
import { Container, SectionHeading, AccentBar } from '../components/ui/Primitives'
import TileGrid from '../components/common/TileGrid'

const Projects = () => (
  <main className="bg-white text-black">
    <section className="pt-10 sm:pt-16">
      <Container>
        <SectionHeading>Projects</SectionHeading>
        <p className="mt-2 text-zinc-700 text-sm sm:text-base">
          Engineering builds aimed at rigor, performance, and reliability.
        </p>
        <div className="mt-4"><AccentBar /></div>
        <div className="mt-6">
          <TileGrid items={PROJECTS} />
        </div>
      </Container>
    </section>
  </main>
)

export default Projects
