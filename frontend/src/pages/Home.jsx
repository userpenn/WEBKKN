import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import NewsCard from "../components/NewsCard"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"


function Home() {
  // const beritaTerkini = [
  //   { id: 1, img: "/berita1.png", title: "Berita Terkini 1", color: "black" },
  //   { id: 2, img: "/berita2.png", title: "Berita Terkini 2", color: "black" },
  //   { id: 3, img: "/berita3.png", title: "Berita Terkini 3", color: "black" },
  // ]

  // const artikelTerkait = [
  //   { id: 1, img: "/artikel1.png", title: "Artikel Terkait 1", color: "blue" },
  //   { id: 2, img: "/artikel2.png", title: "Artikel Terkait 2", color: "blue" },
  //   { id: 3, img: "/artikel3.png", title: "Artikel Terkait 3", color: "blue" },
  // ]

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

      {/* padding-top biar gak ketutup navbar */}
      <main className="pt-16">
        <Hero />

        {/* Container */}
        <div className="max-w-7xl mx-auto px-4 py-10">

          {/* Welcome */}
          <section className="mb-12 text-center px-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Selamat Datang Di Dusun Sendowo Lor
            </h1>
          </section>

          {/* Berita Terkini */}
          <section className="mb-16">
            <h2 className="text-lg sm:text-xl font-semibold mb-6 text-gray-800">
              Berita Terkini
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {beritaTerkini.map((item) => (
                <NewsCard
                  key={item.id}
                  image={`http://127.0.0.1:8000/storage/${item.thumbnail}`}
                  title={item.judul}
                  textColor="black"
                  link={`/berita/${item.id}`}
                />
              ))}
            </div>
          </section>

          {/* Artikel Terkait */}
          <section className="mb-16">
            <h2 className="text-lg sm:text-xl font-semibold mb-6 text-blue-600">
              Kegiatan Warga Dusun
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {kegiatan.map((item) => (
                <NewsCard
                  key={item.id}
                  image={`http://127.0.0.1:8000/storage/${item.foto}`}
                  title={item.judul}
                  textColor="blue"
                  link={`/kegiatan/detail/${item.id}`}
                />
              ))}
            </div>
          </section>

          {/* Informasi Dusun */}
          <section className="mb-10">
            <h2 className="text-lg sm:text-xl font-semibold mb-6 text-gray-800">
              Informasi Dusun
            </h2>

            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/infomasidusun.png"
                alt="Informasi Dusun"
                className="w-full h-48 sm:h-64 md:h-80 object-cover"
              />
            </div>
          </section>

        </div>

        <Footer />
      </main>
    </>
  )
}

export default Home
