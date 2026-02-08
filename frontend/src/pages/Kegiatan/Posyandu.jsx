import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

function Posyandu() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/api/kegiatan/posyandu")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 pb-16 space-y-12">

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
            Posyandu Dusun Sendowo Lor
          </h1>

          <img
            src="/posyandu.png"
            alt="Posyandu"
            className="w-full h-56 sm:h-72 md:h-96 rounded-xl shadow-md object-cover"
          />

          <p className="text-gray-700 leading-relaxed text-justify">
            Posyandu Dusun Sendowo Lor merupakan kegiatan pelayanan kesehatan
            masyarakat yang rutin dilaksanakan untuk balita, ibu hamil,
            dan lansia guna memantau kesehatan secara berkala.
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-4">Kegiatan Posyandu</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Penimbangan balita</li>
              <li>Pemeriksaan kesehatan ibu & lansia</li>
              <li>Pemberian vitamin</li>
              <li>Penyuluhan kesehatan</li>
            </ul>
          </section>

        </div>
        <Footer />
      </main>
    </>
  )
}

export default Posyandu
