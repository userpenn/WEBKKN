import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function DetailBerita() {
  const { id } = useParams()
  const [berita, setBerita] = useState(null)

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/berita/${id}`)
      .then(res => res.json())
      .then(data => setBerita(data))
  }, [id])

  if (!berita) return <p className="text-center mt-20">Loading...</p>

  return (
    <>
      <Navbar />
      <main className="pt-16 max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">{berita.judul}</h1>
        <img
          src={`http://127.0.0.1:8000/storage/${berita.thumbnail}`}
          className="w-full rounded-xl mb-6"
        />
        <div
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: berita.konten }}
        />
      </main>
      <Footer />
    </>
  )
}

export default DetailBerita
