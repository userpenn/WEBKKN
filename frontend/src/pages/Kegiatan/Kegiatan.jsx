import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

function Kegiatan() {
  const listKegiatan = [
    { id: 1, img: "/kegiatan1.png", teks: "Karang taruna mengadakan kumpul ...." },
    { id: 2, img: "/kegiatan2.png", teks: "Lomba Voly Dusun Sendowo Lor ..." },
    { id: 3, img: "/kegiatan3.png", teks: "Dusun Sendowo Lor berhasil melakukan pelatihan UMKM ..." },
    { id: 4, img: "/kegiatan4.png", teks: "KWT Dusun Sendowo Lor berhasil melakukan kegiatan ...." },
    { id: 5, img: "/kegiatan5.png", teks: "KWT Dusun Sendowo Lor berhasil melakukan kegiatan ...." },
  ]

  return (
    <>
      <Navbar />

      {/* Wrapper utama */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 pb-16">

          {/* Judul Halaman */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10 text-center">
            Kegiatan Warga
          </h1>

          <div className="space-y-12">
            {listKegiatan.map((item, index) => (
              <div key={item.id}>

                {/* Label khusus */}
                {index === 3 && (
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-8">
                    Kelompok Wanita Tani
                  </h2>
                )}

                {/* Card */}
                <div className="flex flex-col md:flex-row gap-6 bg-white rounded-xl shadow-md p-4 sm:p-5">

                  {/* Image */}
                  <div className="w-full md:w-1/3">
                    <img
                      src={item.img}
                      alt={`Kegiatan ${item.id}`}
                      className="w-full h-48 sm:h-56 md:h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex items-center md:w-2/3">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {item.teks}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

        <Footer />
      </main>
    </>
  )
}

export default Kegiatan
