import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Peta from "./pages/Peta";
import Profil from "./pages/Profil";

import KegiatanKategori from "./pages/KegiatanByKategori";
import DetailKegiatan from "./pages/DetailKegiatan";
import DetailBerita from "./pages/DetailBerita";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Peta */}
        <Route path="/peta" element={<Peta />} />

        {/* Profil */}
        <Route path="/profil" element={<Profil />} />

        {/* Kegiatan (DINAMIS) */}
        <Route path="/kegiatan/kegiatan/:id" element={<KegiatanKategori />} />
        <Route path="/kegiatan/:id" element={<DetailKegiatan />} />
        <Route path="/kegiatan/detail/:id" element={<DetailKegiatan />} />

        {/* Berita */}
        <Route path="/berita/:id" element={<DetailBerita />} />



      </Routes>
    </Router>
  );
}

export default App;
