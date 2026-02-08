import React, { useState } from "react"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-green-600 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo-dusun.jpeg"
              alt="Logo Dusun"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-white leading-tight">
              <span className="block text-sm">Dusun</span>
              <span className="block font-semibold">Sendowo Lor</span>
            </div>
          </div>

          {/* Menu Desktop */}
          <ul className="hidden md:flex items-center gap-8 text-white font-medium">
            <li><a href="/" className="hover:text-green-200">Beranda</a></li>
            <li><a href="/peta" className="hover:text-green-200">Peta Dusun</a></li>

            {/* Dropdown */}
            <li className="relative group">
              <span className="cursor-pointer hover:text-green-200">
                Kegiatan
              </span>
              <ul className="absolute left-0 mt-2 w-48 bg-white text-green-700 rounded-md shadow-lg
                             opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <li><a href="/kegiatan/posyandu" className="block px-4 py-2 hover:bg-green-100">Posyandu</a></li>
                <li><a href="/kegiatan/karawitan" className="block px-4 py-2 hover:bg-green-100">Karawitan</a></li>
                <li><a href="/kegiatan/kwt" className="block px-4 py-2 hover:bg-green-100">KWT</a></li>
                <li><a href="/kegiatan/karang-taruna" className="block px-4 py-2 hover:bg-green-100">Karang Taruna</a></li>
              </ul>
            </li>

            <li><a href="/profil" className="hover:text-green-200">Profil Dusun</a></li>
          </ul>

          {/* Burger Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        {open && (
          <div className="md:hidden bg-green-700 text-white rounded-lg mt-2 p-4 space-y-3">
            <a href="/" className="block">Beranda</a>
            <a href="/peta" className="block">Peta Dusun</a>

            <div>
              <span className="block font-semibold mb-1">Kegiatan</span>
              <div className="ml-4 space-y-1 text-sm">
                <a href="/kegiatan/posyandu" className="block">Posyandu</a>
                <a href="/kegiatan/karawitan" className="block">Karawitan</a>
                <a href="/kegiatan/kwt" className="block">KWT</a>
                <a href="/kegiatan/karang-taruna" className="block">Karang Taruna</a>
              </div>
            </div>

            <a href="/profil" className="block">Profil Dusun</a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
