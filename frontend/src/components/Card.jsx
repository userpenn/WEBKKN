import { Link } from "react-router-dom"

function NewsCard({ image, title, textColor, link }) {
  return (
    <Link to={link} className="block hover:scale-[1.02] transition">
      <div className="rounded-xl overflow-hidden shadow-md">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className={`font-semibold text-${textColor}-600`}>
            {title}
          </h3>
        </div>
      </div>
    </Link>
  )
}

export default NewsCard
