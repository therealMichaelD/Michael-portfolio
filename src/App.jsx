// src/App.jsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'

import Home from './pages/Home'
import Products from './pages/Products'
import Projects from './pages/Projects'
import Readings from './pages/Readings'
import Contact from './pages/Contact'
import { ProductDetail, ProjectDetail, ReadingDetail } from './pages/ItemDetail'

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-white text-black min-h-screen">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />

          <Route path="/readings" element={<Readings />} />
          <Route path="/readings/:id" element={<ReadingDetail />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
