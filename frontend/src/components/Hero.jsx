import React from "react";

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <img
        src="/homeatas.png"
        alt="Dusun Sendowo Lor"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Gradient Overlay (lebih cinematic) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      {/* Subtle Light Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_60%)]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white">

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
          Selamat Datang di
        </h1>

        <h2 className="text-4xl md:text-6xl font-extrabold mt-4 bg-gradient-to-r from-green-300 via-emerald-400 to-green-500 bg-clip-text text-transparent">
          Dusun Sendowo Lor
        </h2>

        <p className="mt-8 max-w-2xl text-lg md:text-xl text-gray-200 leading-relaxed">
          Website resmi yang menyajikan informasi, berita terbaru,
          dan kegiatan masyarakat secara transparan dan informatif.
        </p>

      </div>

      

    </section>
  );
}

export default Hero;
