import { slugify, truncateDecimal } from "@/common/utils";
import { cn, formatDate } from "@/lib/utils";
import type { MovieListType } from "@/schema/movie";
import { Link } from "react-router";

export default function MovieCard({movie}: {movie: MovieListType}) {
  return (
    <Link to={`/movie/${slugify(movie.title)}/${movie.id}`} key={movie.id} className={cn("overflow-hidden relative aspect-6/7 sm:aspect-4/5 group border-3 border-white/5 hover:border-primary/50 transition-all duration-300 shadow rounded-sm", movie.vote_average < 6 && "hover:border-amber-600/50")}>
      <img 
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
        alt={movie.title} 
        className="w-full h-full object-cover object-top"
      />
      <p className={cn("absolute top-4 right-4 rounded-full border-3 border-primary bg-primary/80 text-gray-100 w-11 h-11 shadow-lg flex items-center justify-center", movie.vote_average < 6 && "border-amber-600 bg-amber-600/80")}>
        {truncateDecimal(movie.vote_average, 1)}
      </p>
      <div className="absolute bottom-8 left-8 right-8 z-10 flex flex-col">
        <p className="w-full text-white text-center font-semibold truncate">{movie.title}</p>
        {movie.release_date && <p className="w-full text-white text-xs flex items-center justify-center gap-2">{formatDate(movie.release_date)}</p>}
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-black to-transparent top-0 left-0 w-full"></div>
    </Link>
  )
}