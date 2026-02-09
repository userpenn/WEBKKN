import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Profil() {
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
        <div className="pt-32 text-center text-gray-600">
          Memuat profil dusun...
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 pb-16 space-y-20">

          {/* Section Pembuka */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src={`http://127.0.0.1:8000/storage/${profil.foto}`}
              alt={profil.nama_dusun}
              className="w-full h-56 sm:h-72 md:h-full rounded-xl shadow-md object-cover"
            />

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
              {profil.deskripsi}
            </p>
          </section>

          {/* Section Sejarah */}
          <section className="space-y-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Sejarah {profil.nama_dusun}
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
              {profil.sejarah}
            </p>
          </section>

          {/* Section Visi */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Visi
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
              {profil.visi}
            </p>
          </section>

          {/* Section Misi */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Misi
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
              {profil.misi}
            </p>
          </section>

        </div>

        <Footer />
      </main>
    </>
  )
}

export default Profil
