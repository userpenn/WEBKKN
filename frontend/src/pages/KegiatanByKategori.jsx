import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function KegiatanByKategori() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [kegiatan, setKegiatan] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const ITEMS_PER_PAGE = 6

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/kegiatan/kegiatan/${id}`)
            .then(res => res.json())
            .then(data => {
                setKegiatan(data)
                setCurrentPage(1) // reset halaman saat ganti kategori
            })
            .catch(err => console.error(err))
    }, [id])

    const totalPages = Math.ceil(kegiatan.length / ITEMS_PER_PAGE)
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const currentItems = kegiatan.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    )

    return (
        <>
            <Navbar />

            <div className="max-w-6xl mx-auto mt-24 px-4">
                <h1 className="text-2xl font-bold mb-6">
                    Kegiatan berdasarkan kategori
                </h1>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {currentItems.map(item => (
                        <div
                            key={item.id}
                            onClick={() => navigate(`/kegiatan/detail/${item.id}`)}
                            className="border rounded-lg p-4 shadow cursor-pointer
                         hover:shadow-lg transition"
                        >
                            <img
                                src={`http://127.0.0.1:8000/storage/${item.foto}`}
                                className="h-40 w-full object-cover rounded"
                            />
                            <h2 className="mt-2 font-semibold">{item.judul}</h2>
                        </div>
                    ))}
                </div>

                {/* PAGINATION */}
                {totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-4 py-2 rounded ${currentPage === page
                                        ? "bg-green-600 text-white"
                                        : "bg-gray-200 hover:bg-gray-300"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </>
    )
}

export default KegiatanByKategori
