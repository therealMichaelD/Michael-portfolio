// src/pages/About.jsx
import React from 'react'
import { PROFILE } from '../data/content'
import { Container, SectionHeading, AccentBar } from '../components/ui/Primitives'
import ImageTile from '../components/common/ImageTile'

const About = () => (
  <main className="bg-white text-black">
    <section className="pt-10 sm:pt-16">
      <Container>
        <SectionHeading>About me</SectionHeading>
        <p className="mt-2 text-zinc-700 text-sm sm:text-base">
          {PROFILE.subhead}
        </p>
        <div className="mt-4"><AccentBar /></div>

        <div className="mt-6 grid md:grid-cols-[1.2fr_.8fr] gap-6 xl:gap-8 items-start">
          {/* ✅ EDIT TEXT HERE: About paragraphs */}
          <div className="rounded-[28px] border border-emerald-200 p-5 sm:p-7 bg-emerald-50/30 space-y-4">
            <p className="text-zinc-800 text-base sm:text-lg leading-7">
              Hi, I’m Michael Dang — a Master’s in Engineering Management and Bachelor’s in Electrical Engineering student at Dartmouth College, passionate about technology management and building at the intersection of software and hardware.
            </p>
            <p className="text-zinc-800 text-base sm:text-lg leading-7">
              Originally from Toronto, Canada, I’m especially interested in semiconductors, software, and product management, where I can combine technical depth with strategic thinking to create impactful solutions.
            </p>
            <p className="text-zinc-800 text-base sm:text-lg leading-7">
              I love exploring side projects that push me to learn and build. A few of my favorite builds include a TinyML wake-word lamp, an Arduino-based oscilloscope, and an ESP32 Smart Power Meter.
            </p>
            <p className="text-zinc-800 text-base sm:text-lg leading-7">
              Outside of work and school, you’ll often find me supporting my Toronto sports teams, running, spending time outdoors, or diving into books and podcasts on tech, leadership, and innovation.
            </p>
            <p className="text-zinc-800 text-base sm:text-lg leading-7">
              I’m currently seeking an Engineering or Tech Management internship for Summer 2026, where I can contribute my skills and continue growing at the intersection of technology and business.
            </p>
          </div>

          {/* 🖼️ About image: PROFILE.aboutPhoto in content.js */}
          <div>
            <ImageTile src={PROFILE.aboutPhoto || PROFILE.headshot} className="aspect-[4/5]" />
          </div>
        </div>
      </Container>
    </section>
  </main>
)

export default About
