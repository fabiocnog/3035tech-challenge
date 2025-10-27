import { slugify, truncateDecimal } from "@/common/utils";
import { formatDate } from "@/lib/utils";
import type { MovieListType } from "@/schema/movie";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import LoadingCircular from "./ui/loading";

export default function TopRate({movie}: {movie: MovieListType}) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const bgImageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <Link to={`/movie/${slugify(movie.title)}/${movie.id}`} className="flex-1 rounded-sm overflow-hidden relative shadow aspect-4/5 sm:aspect-2/3 border-3 border-white/5 hover:border-primary/50 hover:scale-105 transition-all duration-300 flex flex-col items-start justify-end">
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
            <LoadingCircular size={56} className="text-primary" />
          </motion.div>
        }
      </AnimatePresence>
      {/* <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full h-full object-cover object-top" /> */}
      <p className="absolute top-4 right-4 rounded-full border-3 border-primary bg-primary/80 text-gray-100 p-2 w-11 h-11 shadow-lg">
        {truncateDecimal(movie.vote_average, 1)}
      </p>
      <div className="z-10 w-full flex flex-col items-center px-4 sm:px-8 pb-6">
        <p className="w-full text-white text-2xl text-center font-semibold truncate">{movie.title}</p>
        <p className="w-full text-white text-sm flex items-center justify-center gap-2">{formatDate(movie.release_date)}</p>
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-black to-transparent"></div>
    </Link>
  )
}