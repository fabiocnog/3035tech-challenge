import type { MovieListType } from "@/schema/movie";
import { FlameIcon, CalendarIcon, PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { formatDate } from "@/lib/utils";
import { slugify, truncateDecimal } from "@/common/utils";
import { Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import LoadingCircular from "./ui/loading";
import { useState } from "react";

export default function HighlightRate({movie}: {movie: MovieListType}) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const bgImageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  return (
    <div className="w-full aspect-1/2 sm:aspect-4/3 lg:aspect-4/2 overflow-hidden relative flex flex-col items-start justify-end" >
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
            <LoadingCircular size={64} className="text-primary" />
          </motion.div>
        }
      </AnimatePresence>
      <div className="px-4 sm:px-8 pb-20 z-20 flex flex-col w-full">
        <h2 className="text-xl md:text-2xl text-gray-200 font-semibold mb-2">Notas máximas da semana</h2>
        <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center gap-4 mb-2"> 
          <h3 className="text-2xl sm:text-4xl text-gray-100 font-bold lg:truncate">{movie.title}</h3>
          <p className="text-xl sm:text-4xl text-white flex items-center gap-1 bg-primary/80 border-3 border-primary rounded-full pl-1 pr-2 sm:pl-3 sm:pr-4"><FlameIcon /> {truncateDecimal(movie.vote_average, 1)}</p>
        </div>
        <p className="mb-4 flex items-center gap-2">
            <CalendarIcon size={16} /> {formatDate(movie.release_date)} 
        </p>
        <p className="w-full max-w-xl text-sm text-gray-300">{movie.overview}</p>
        <div>            
          <Button variant="outline" className="mt-4 cursor-pointer" asChild>
            <Link to={`/movie/${slugify(movie.title)}/${movie.id}`}><PlusCircleIcon /> Mais informações</Link>
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-black to-transparent"></div>
    </div>
  )
}