import { slugify, truncateDecimal } from "@/common/utils";
import { cn, formatDate } from "@/lib/utils";
import type { MovieListType } from "@/schema/movie";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router";
import LoadingCircular from "./ui/loading";
import { useState } from "react";

export default function MovieCard({movie}: {movie: MovieListType}) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const bgImageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <Link to={`/movie/${slugify(movie.title)}/${movie.id}`} key={movie.id} className={cn("overflow-hidden relative aspect-6/7 sm:aspect-4/5 group border-3 border-white/5 hover:border-primary/50 transition-all duration-300 shadow rounded-sm flex flex-col items-start justify-end", movie.vote_average < 6 && "hover:border-amber-600/50")}>
      <img src={bgImageUrl} className="hidden" onLoad={() => setImageLoaded(true)} />
      <motion.div 
        className="absolute w-full h-full bg-cover bg-top"
        style={imageLoaded ? {backgroundImage: `url(${bgImageUrl})`} : {}}
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}>  
      </motion.div>
      <AnimatePresence>
        {!imageLoaded && 
          <motion.div
            key="bgLoader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <LoadingCircular size={40} className="text-primary" />
          </motion.div>
        }
      </AnimatePresence>
      {/* <img 
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
        alt={movie.title} 
        className="w-full h-full object-cover object-top"
      /> */}
      <p className={cn("absolute top-4 right-4 rounded-full border-3 border-primary bg-primary/80 text-gray-100 w-11 h-11 shadow-lg flex items-center justify-center", movie.vote_average < 6 && "border-amber-600 bg-amber-600/80")}>
        {truncateDecimal(movie.vote_average, 1)}
      </p>
      <div className="z-20 w-full flex flex-col items-center px-4 sm:px-8 pb-6">
        <p className="w-full text-white text-center font-semibold truncate">{movie.title}</p>
        {movie.release_date && <p className="w-full text-white text-xs flex items-center justify-center gap-2">{formatDate(movie.release_date)}</p>}
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-black to-transparent top-0 left-0 w-full"></div>
    </Link>
  )
}