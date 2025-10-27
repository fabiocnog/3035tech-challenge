import { slugify, truncateDecimal } from "@/common/utils";
import { formatDate } from "@/lib/utils";
import type { MovieListType } from "@/schema/movie";
import { Link } from "react-router";

export default function TopRate({movie}: {movie: MovieListType}) {
  return (
    <Link to={`/movie/${slugify(movie.title)}/${movie.id}`} className="flex-1 rounded-sm overflow-hidden relative shadow aspect-4/5 sm:aspect-2/3 border-3 border-white/5 hover:border-primary/50 hover:scale-105 transition-all duration-300">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full h-full object-cover object-top" />
      <p className="absolute top-4 right-4 rounded-full border-3 border-primary bg-primary/80 text-gray-100 p-2 w-11 h-11 shadow-lg">
        {truncateDecimal(movie.vote_average, 1)}
      </p>
      <div className="absolute bottom-6 left-6 right-4 z-10 flex flex-col">
        <p className="w-full text-white text-2xl text-center font-semibold truncate">{movie.title}</p>
        <p className="w-full text-white text-sm flex items-center justify-center gap-2">{formatDate(movie.release_date)}</p>
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-black to-transparent"></div>
    </Link>
  )
}