import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Peta() {
  const wilayahRT = [1, 2, 3, 4, 5]

  return (
    <>
      <Navbar />

      <main className="pt-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">

          {/* 🔥 Hero Section */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Peta Dusun Sendowo Lor
            </h1>
            <p className="text-gray-600 mt-3 max-w-2xl">
              Lokasi administratif Dusun Sendowo Lor, Kedung Keris,
              Kecamatan Nglipar, Kabupaten Gunungkidul.
            </p>
            <div className="mt-6 h-[2px] w-16 bg-gray-900"></div>
          </div>

          {/* 🔥 Section Peta */}
          <section className="mb-20">
            <div className="rounded-xl overflow-hidden border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7904.247826298751!2d110.59327323751015!3d-7.882101891043719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a4c140285a559%3A0x75eccb044e6c9b43!2sSendowo%20Lor%2C%20Kedung%20Keris%2C%20Kec.%20Nglipar%2C%20Kabupaten%20Gunungkidul%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1771801618601!5m2!1sid!2sid"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Dusun Sendowo Lor"
              ></iframe>
            </div>

            <div className="mt-4">
              <a
                href="https://www.google.com/maps/place/Sendowo+Lor,+Kedung+Keris,+Nglipar,+Gunungkidul"
                target="_blank"
                rel="noreferrer"
                className="text-green-600 font-medium hover:underline"
              >
                Buka di Google Maps
              </a>
            </div>
          </section>

        </div>

        <Footer />
      </main>
    </>
  )
}

export default Peta
