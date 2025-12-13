// src/components/layout/Nav.jsx
import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const NavLinks = ({ onNavigate }) => {
  const base = 'text-zinc-600 hover:text-zinc-900 transition-colors'
  const active = 'text-zinc-900 underline decoration-black/30 underline-offset-4'
  return (
    <>
      <NavLink to="/products" onClick={onNavigate} className={({ isActive }) => `${base} ${isActive ? active : ''}`}>
        Products
      </NavLink>
      <NavLink to="/projects" onClick={onNavigate} className={({ isActive }) => `${base} ${isActive ? active : ''}`}>
        Projects
      </NavLink>
      <NavLink to="/readings" onClick={onNavigate} className={({ isActive }) => `${base} ${isActive ? active : ''}`}>
        Readings
      </NavLink>
    </>
  )
}

const MobileMenu = ({ open, setOpen }) => {
  const ref = useRef(null)
  const location = useLocation()
  useEffect(() => { setOpen(false) }, [location.pathname, setOpen])
  useEffect(() => {
    function onClick(e) { if (open && ref.current && !ref.current.contains(e.target)) setOpen(false) }
    function onEsc(e) { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onEsc)
    }
  }, [open, setOpen])
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 sm:hidden" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-black/20" />
      <div ref={ref} className="absolute top-2 right-2 left-2 rounded-2xl border border-black/10 bg-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-zinc-900">Menu</span>
          <button onClick={()=>setOpen(false)} className="rounded-full px-3 py-1.5 text-sm border border-black/10 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-600" aria-label="Close menu">Close</button>
        </div>
        <nav className="mt-3 grid gap-2 text-base">
          <NavLinks onNavigate={()=>setOpen(false)} />
        </nav>
      </div>
    </div>
  )
}

const Nav = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-black/10 supports-[padding:max(0px)] pt-safe">
      <div className="h-0.5 w-full bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900" />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:m-2 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:ring-2 focus:ring-zinc-600">Skip to content</a>
      <div className="max-w-[1320px] xl:max-w-[1440px] mx-auto px-4 sm:px-8 h-14 flex items-center justify-between text-black">
        <NavLink to="/" className="font-semibold tracking-tight text-zinc-900">Michael Dang</NavLink>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <NavLinks />
        </div>
        <button className="sm:hidden rounded-full border border-black/10 px-3 py-2 text-sm hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-600" onClick={()=>setOpen(v=>!v)} aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu">
          Menu
        </button>
      </div>
      <MobileMenu open={open} setOpen={setOpen} />
    </div>
  )
}

export default Nav
