function Footer() {
  return (
    <footer className="bg-gray-100 mt-16 py-10">

      {/* container tengah */}
      <div className="max-w-7xl mx-auto px-4">

        {/* title */}
        <h3 className="text-center text-lg font-semibold mb-8 text-gray-800">
          Website Resmi Dusun Sendowo Lor
        </h3>

        {/* sosial media */}
        <div className="flex flex-wrap justify-center gap-10">

          {/* Instagram */}
          <a
            href="#"
            className="flex flex-col items-center hover:scale-110 transition"
          >
            <img src="/ig.png" alt="Instagram" className="w-12 mb-2" />
            <p className="text-sm text-gray-700">Instagram</p>
          </a>

          {/* Facebook */}
          <a
            href="#"
            className="flex flex-col items-center hover:scale-110 transition"
          >
            <img src="/fb.png" alt="Facebook" className="w-12 mb-2" />
            <p className="text-sm text-gray-700">Facebook</p>
          </a>

          {/* TikTok */}
          <a
            href="#"
            className="flex flex-col items-center hover:scale-110 transition"
          >
            <img src="/tiktok.png" alt="TikTok" className="w-12 mb-2" />
            <p className="text-sm text-gray-700">TikTok</p>
          </a>

        </div>

        {/* copyright */}
        <p className="text-center text-xs text-gray-500 mt-10">
          © {new Date().getFullYear()} Dusun Sendowo Lor. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer
