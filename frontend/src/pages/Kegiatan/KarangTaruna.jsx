import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

function KarangTaruna() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 pb-16 space-y-12">

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
            Karang Taruna Dusun Sendowo Lor
          </h1>

          <img
            src="/karangtaruna.png"
            alt="Karang Taruna"
            className="w-full h-56 sm:h-72 md:h-96 rounded-xl shadow-md object-cover"
          />

          <p className="text-gray-700 leading-relaxed text-justify">
            Karang Taruna merupakan wadah pengembangan generasi muda
            dalam bidang sosial, olahraga, budaya, dan kegiatan kemasyarakatan.
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-4">Program Karang Taruna</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Kegiatan olahraga</li>
              <li>Gotong royong</li>
              <li>Event kepemudaan</li>
              <li>Pengabdian masyarakat</li>
            </ul>
          </section>

        </div>
        <Footer />
      </main>
    </>
  )
}

export default KarangTaruna
