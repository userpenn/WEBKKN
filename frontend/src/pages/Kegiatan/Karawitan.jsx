import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

function Karawitan() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 pb-16 space-y-12">

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
            Karawitan Dusun Sendowo Lor
          </h1>

          <img
            src="/karawitan.png"
            alt="Karawitan"
            className="w-full h-56 sm:h-72 md:h-96 rounded-xl shadow-md object-cover"
          />

          <p className="text-gray-700 leading-relaxed text-justify">
            Kegiatan Karawitan merupakan upaya pelestarian budaya Jawa
            melalui seni musik tradisional gamelan yang rutin dilaksanakan
            oleh warga Dusun Sendowo Lor.
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-4">Jadwal & Aktivitas</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Latihan rutin mingguan</li>
              <li>Pentas acara dusun</li>
              <li>Pelatihan generasi muda</li>
            </ul>
          </section>

        </div>
        <Footer />
      </main>
    </>
  )
}

export default Karawitan
