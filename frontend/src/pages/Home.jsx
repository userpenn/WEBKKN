import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import NewsCard from "../components/NewsCard"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"


function Home() {
  const [beritaTerkini, setBeritaTerkini] = useState([])
  const [kegiatan, setKegiatan] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/berita")
      .then(res => res.json())
      .then(data => setBeritaTerkini(data))
      .catch(err => console.error(err))

    fetch("http://127.0.0.1:8000/api/kegiatan")
      .then(res => res.json())
      .then(data => setKegiatan(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <Navbar />

      <main className="pt-16 bg-gray-50">

        <Hero />

        <div className="max-w-7xl mx-auto px-6">

          {/* 🔥 Berita Terkini */}
          <section className="py-16">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Berita Terkini
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {beritaTerkini.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="transform hover:-translate-y-2 transition duration-500"
                >
                  <NewsCard
                    image={`http://127.0.0.1:8000/storage/${item.thumbnail}`}
                    title={item.judul}
                    textColor="black"
                    link={`/berita/${item.id}`}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* 🔥 Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-16"></div>

          {/* 🔥 Kegiatan */}
          <section className="py-16">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Kegiatan Warga Dusun
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {kegiatan.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="transform hover:-translate-y-2 transition duration-500"
                >
                  <NewsCard
                    image={`http://127.0.0.1:8000/storage/${item.foto}`}
                    title={item.judul}
                    textColor="blue"
                    link={`/kegiatan/detail/${item.id}`}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* 🔥 Informasi Dusun – Cinematic Banner */}
          <section className="py-20">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">

              <img
                src="/infomasidusun.png"
                alt="Informasi Dusun"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Informasi Dusun
                </h2>

                <p className="text-gray-200 max-w-xl mt-4">
                  Temukan data, potensi, dan informasi penting mengenai Dusun Sendowo Lor.
                </p>

                <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
                  Lihat Selengkapnya
                </button>
              </div>

            </div>
          </section>

        </div>

        <Footer />
      </main>

    </>
  )
}

export default Home
