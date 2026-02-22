import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Profil() {

  const [selectedIndex, setSelectedIndex] = useState(null)

  const openImage = (index) => {
    setSelectedIndex(index)
  }

  const closeImage = () => {
    setSelectedIndex(null)
  }

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === profil.foto_dusuns.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? profil.foto_dusuns.length - 1 : prev - 1
    )
  }

  //Batas
  const [profil, setProfil] = useState(null)

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/profil-dusun")
      .then(res => res.json())
      .then(data => setProfil(data))
      .catch(err => console.error(err))
  }, [])

  if (!profil) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-gray-500 text-lg">
            Memuat profil dusun...
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />

      <main>
        <section className="relative h-screen w-full">

          <img
            src={`http://127.0.0.1:8000/storage/${profil.foto}`}
            alt={profil.nama_dusun}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay gelap cinematic */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Text Center */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              Profil {profil.nama_dusun}
            </h1>

            <p className="text-gray-200 mt-6 max-w-2xl text-lg">
              Mengenal sejarah, visi, dan potensi Dusun {profil.nama_dusun}
            </p>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 animate-bounce text-white text-2xl">
              ↓
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">

          {/* 📖 DESKRIPSI */}
          <section className="bg-white shadow-lg rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
              Tentang Dusun
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              {profil.deskripsi}
            </p>
          </section>

          {/* 📜 SEJARAH */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Sejarah {profil.nama_dusun}
            </h2>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
              <p className="text-gray-700 leading-relaxed text-justify">
                {profil.sejarah}
              </p>
            </div>
          </section>

          {/* 🎯 VISI MISI */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Visi</h2>
              <p className="leading-relaxed">{profil.visi}</p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Misi</h2>
              <p className="leading-relaxed">{profil.misi}</p>
            </div>
          </section>

          {/* 🎬 CINEMATIC GALERI */}
          {profil.foto_dusuns && profil.foto_dusuns.length > 0 && (
            <section className="relative py-24 bg-black text-white overflow-hidden">

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-95"></div>

              <div className="relative max-w-7xl mx-auto px-6 space-y-16">

                {/* Title */}
                <div className="text-center space-y-4">
                  <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide">
                    Galeri {profil.nama_dusun}
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Dokumentasi visual yang menggambarkan suasana, kegiatan,
                    dan keindahan dusun secara sinematik.
                  </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  {profil.foto_dusuns.map((item, index) => (
                    <div
                      key={item.id}
                      onClick={() => openImage(index)}
                      className="group relative cursor-pointer overflow-hidden rounded-3xl"
                    >
                      <img
                        src={`http://127.0.0.1:8000/storage/${item.foto}`}
                        alt={item.judul}
                        className="w-full h-64 object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-75"
                      />

                      {/* Overlay Text */}
                      <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <h3 className="text-lg font-semibold tracking-wide">
                          {item.judul}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>


        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">

            {/* Close */}
            <button
              onClick={closeImage}
              className="absolute top-6 right-6 text-white text-3xl hover:scale-110 transition"
            >
              ✕
            </button>

            {/* Previous */}
            <button
              onClick={prevImage}
              className="absolute left-6 text-white text-4xl hover:scale-110 transition"
            >
              ‹
            </button>

            {/* Image */}
            <div className="max-w-6xl w-full px-6 text-center">
              <img
                src={`http://127.0.0.1:8000/storage/${profil.foto_dusuns[selectedIndex].foto}`}
                alt={profil.foto_dusuns[selectedIndex].judul}
                className="w-full max-h-[80vh] object-contain rounded-3xl shadow-2xl"
              />

              <p className="text-gray-300 mt-6 text-lg tracking-wide">
                {profil.foto_dusuns[selectedIndex].judul}
              </p>
            </div>

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-6 text-white text-4xl hover:scale-110 transition"
            >
              ›
            </button>
          </div>
        )}
        <Footer />
      </main>
    </>
  )
}

export default Profil