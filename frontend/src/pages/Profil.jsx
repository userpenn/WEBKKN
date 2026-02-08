import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Profil() {
  return (
    <>
      <Navbar />

      {/* Wrapper utama */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 pb-16 space-y-20">

          {/* Section Pembuka */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src="/rumahadat.png"
              alt="Rumah Adat Sendowo Lor"
              className="w-full h-56 sm:h-72 md:h-full rounded-xl shadow-md object-cover"
            />

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
              Dusun Sendowo Lor merupakan salah satu wilayah permukiman yang berada di kawasan pedesaan 
              dengan karakter alam yang masih asri dan lingkungan yang hijau. Wilayah ini dikelilingi 
              oleh area persawahan dan perbukitan, menjadikan Sendowo Lor memiliki panorama alam yang 
              menenangkan sekaligus potensi pertanian yang cukup besar.
            </p>
          </section>

          {/* Section Sejarah */}
          <section className="space-y-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Sejarah Dusun Sendowo Lor
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img
                src="/sejarah.png"
                alt="Sejarah Dusun"
                className="w-full h-56 sm:h-72 md:h-full rounded-xl shadow-md object-cover"
              />

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
                Dusun Sendowo Lor diyakini telah terbentuk sejak puluhan tahun silam, berawal dari 
                beberapa keluarga perintis yang membuka lahan di wilayah perbukitan dan dataran subur 
                untuk dijadikan permukiman serta area pertanian.
              </p>
            </div>
          </section>

          {/* Section Perangkat Dusun */}
          <section className="space-y-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Perangkat Dusun Sendowo Lor
            </h2>

            <img
              src="/perangkatdusun.png"
              alt="Perangkat Dusun"
              className="w-full h-56 sm:h-72 md:h-96 rounded-xl shadow-md object-cover"
            />

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
              Perangkat Dusun Sendowo Lor merupakan unsur pelaksana pemerintahan di tingkat dusun yang 
              bertugas membantu Kepala Desa dalam penyelenggaraan pelayanan kepada masyarakat.
            </p>
          </section>

          {/* Section Kepala Dusun */}
          <section className="flex justify-center">
            <div className="max-w-sm bg-white rounded-xl shadow-md p-6 text-center">
              <img
                src="/kepaladusun.png"
                alt="Kepala Dusun"
                className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full object-cover mb-4"
              />

              <h3 className="font-semibold text-base sm:text-lg text-gray-800">
                Kepala Dusun Sendowo Lor <br /> Periode 2025 – ....
              </h3>

              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Keterangan tentang Pak Dukuh
              </p>
            </div>
          </section>

        </div>

        <Footer />
      </main>
    </>
  )
}

export default Profil
