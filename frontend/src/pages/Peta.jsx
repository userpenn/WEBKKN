import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Peta() {
  const wilayahRT = [1, 2, 3, 4, 5]

  return (
    <>
      <Navbar />

      {/* Wrapper utama */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 pb-16">

          {/* Judul Halaman */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10 text-center">
            Peta Dusun Sendowo Lor
          </h1>

          {/* Section Peta */}
          <section className="mb-14 text-center">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/peta.png"
                alt="Peta Dusun Sendowo Lor"
                className="w-full h-56 sm:h-72 md:h-96 object-cover"
              />
            </div>

            <div className="mt-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-blue-600 font-semibold hover:underline"
              >
                Buka di Google Maps
              </a>
            </div>
          </section>

          {/* Section Daftar Wilayah RT */}
          <section>
            <h2 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-6">
              Batas Garis Wilayah RT
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {wilayahRT.map((num) => (
                <a
                  key={num}
                  href="#"
                  className="flex items-center justify-center rounded-lg border border-gray-300 py-3 text-gray-700 
                             hover:bg-green-100 hover:border-green-400 transition text-sm sm:text-base"
                >
                  Wilayah RT {num}
                </a>
              ))}
            </div>
          </section>

        </div>

        <Footer />
      </main>
    </>
  )
}

export default Peta
