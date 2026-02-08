import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

function KWT() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 pb-16 space-y-12">

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
            Kelompok Wanita Tani (KWT)
          </h1>

          <img
            src="/kwt.png"
            alt="KWT"
            className="w-full h-56 sm:h-72 md:h-96 rounded-xl shadow-md object-cover"
          />

          <p className="text-gray-700 leading-relaxed text-justify">
            KWT Dusun Sendowo Lor berperan aktif dalam pengelolaan
            pertanian, ketahanan pangan keluarga, serta pengembangan
            UMKM berbasis hasil pertanian.
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-4">Kegiatan KWT</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Budidaya tanaman pangan</li>
              <li>Pelatihan UMKM</li>
              <li>Pengolahan hasil pertanian</li>
            </ul>
          </section>

        </div>
        <Footer />
      </main>
    </>
  )
}

export default KWT
