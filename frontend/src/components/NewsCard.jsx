function NewsCard({ image, textColor }) {
  const deskripsi = "Kondisi geografis yang subur menjadikan Sendowo Lor sebagai salah satu wilayah penghasil pertanian yang potensial. Para petani memanfaatkan sistem ...";

  return (
    /* Ubah flexDirection menjadi column agar teks pindah ke bawah */
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '350px' }}>
      <img 
        src={image} 
        alt="Thumbnail" 
        /* width: '100%' supaya gambar mengikuti lebar container div */
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} 
      />
      <div>
        <h3 style={{ 
          color: textColor, 
          fontSize: '1rem', 
          lineHeight: '1.5', 
          margin: 0,
          textAlign: 'justify' // Opsional: supaya teks rata kiri-kanan seperti di koran
        }}>
          {deskripsi}
        </h3>
      </div>
    </div>
  )
}

export default NewsCard;