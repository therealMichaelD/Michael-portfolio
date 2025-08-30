// src/pages/Products.jsx
import React from 'react'
import { PRODUCTS } from '../data/content'
import { Container, SectionHeading, AccentBar } from '../components/ui/Primitives'
import TileGrid from '../components/common/TileGrid'

const Products = () => (
  <main className="bg-white text-black">
    <section className="pt-10 sm:pt-16">
      <Container>
        <SectionHeading>Products-Coming Soon</SectionHeading>
        <p className="mt-2 text-zinc-700 text-sm sm:text-base">
          PM-style side projects that highlight problem framing, metrics, and outcomes.
        </p>
        <div className="mt-4"><AccentBar /></div>
        <div className="mt-6">
          <TileGrid items={PRODUCTS} />
        </div>
      </Container>
    </section>
  </main>
)

export default Products
