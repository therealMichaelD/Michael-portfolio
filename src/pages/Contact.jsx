// src/pages/Contact.jsx
import React from 'react'
import { PROFILE } from '../data/content'
import { Container, SectionHeading, AccentBar } from '../components/ui/Primitives'
import { CTAButton, GhostButton } from '../components/ui/Buttons'

const Contact = () => (
  <main className="bg-white text-black">
    <section className="pt-10 sm:pt-16 pb-20 sm:pb-28">
      <Container>
        <SectionHeading>Contact</SectionHeading>
        <div className="mt-4"><AccentBar /></div>

        <div className="mt-6">
          <div className="rounded-[28px] border border-black/10 p-6 sm:p-8 bg-zinc-50">
            <h3 className="text-2xl sm:text-[28px] font-semibold tracking-tight text-zinc-900">Contact Michael</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              <CTAButton href={`mailto:${PROFILE.email}`}>Email Michael</CTAButton>
              <GhostButton href={PROFILE.github}>GitHub</GhostButton>
              <GhostButton href={PROFILE.linkedin}>LinkedIn</GhostButton>
              <GhostButton href={PROFILE.resumeUrl}>Resume</GhostButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </main>
)

export default Contact
