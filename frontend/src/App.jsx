import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Peta from "./pages/Peta";
import Kegiatan from "./pages/Kegiatan/Kegiatan";
import Posyandu from "./pages/Kegiatan/Posyandu";
import Karawitan from "./pages/Kegiatan/Karawitan";
import KWT from "./pages/Kegiatan/KWT";
import KarangTaruna from "./pages/Kegiatan/KarangTaruna";
import Profil from "./pages/Profil"; // Import halaman Profil yang baru
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* 1. Halaman Beranda (Menampilkan Berita & Artikel) */}
        <Route path="/" element={<Home />} />
        
        {/* 2. Halaman Peta Dusun (Menampilkan peta.png & Daftar RT) */}
        <Route path="/peta" element={<Peta />} />

        {/* 3. Halaman Kegiatan (Menampilkan kegiatan1.png sampai kegiatan5.png) */}
        <Route path="/kegiatan" element={<Kegiatan />} />

        {/* Kegiatan detail */}
        <Route path="/kegiatan/posyandu" element={<Posyandu />} />
        <Route path="/kegiatan/karawitan" element={<Karawitan />} />
        <Route path="/kegiatan/kwt" element={<KWT />} />
        <Route path="/kegiatan/karang-taruna" element={<KarangTaruna />} />

        {/* 4. Halaman Profil (Menampilkan Sejarah & Perangkat Dusun) */}
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </Router>
  );
}

export default App;