import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function DetailKegiatan() {
  const { id } = useParams()
  const [kegiatan, setKegiatan] = useState(null)

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/kegiatan/${id}`)
      .then(res => res.json())
      .then(data => setKegiatan(data))
      .catch(err => console.error(err))
  }, [id])

  if (!kegiatan) {
    return (
      <div className="pt-20 text-center text-gray-500">
        Loading...
      </div>
    )
  }

  return (
    <>
     < Navbar />
      <div className="pt-20 max-w-4xl mx-auto px-4">

        {/* {kegiatan.kategori?.nama && (
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full
          bg-green-100 text-green-700">
            {kegiatan.kategori.nama}
          </span>
        )} */}

        <h1 className="text-3xl font-bold mb-4">
          {kegiatan.judul}
        </h1>

        <img
          src={`http://127.0.0.1:8000/storage/${kegiatan.foto}`}
          alt={kegiatan.judul}
          className="w-full rounded-xl mb-6 object-cover"
        />

        <p className="text-gray-700 leading-relaxed">
          {kegiatan.deskripsi}
        </p>
      </div>
      < Footer />
    </>
  )
}

export default DetailKegiatan
