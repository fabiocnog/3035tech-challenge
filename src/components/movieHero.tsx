import type { MovieDetailsType } from "@/schema/movie";
import { AnimatePresence, motion } from "motion/react";
import LoadingCircular from "./ui/loading";
import { useState } from "react";
import { truncateDecimal } from "@/common/utils";

export default function MovieHero({movie}: {movie: MovieDetailsType}) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [logoLoaded, setLogoLoaded] = useState<boolean>(false);
  const bgImageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  return (
    <div className="w-full aspect-3/4 sm:aspect-4/3 lg:aspect-5/2 overflow-hidden flex flex-col items-start justify-end relative" >
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
            className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <LoadingCircular size={64} className="text-primary" />
          </motion.div>
        }
      </AnimatePresence>
      <div className="px-4 sm:px-8 flex flex-col w-full relative z-10">
        {movie.images.logos.length > 0 &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: logoLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img 
              src={`https://image.tmdb.org/t/p/w300${movie.images.logos[0].file_path}`} 
              alt={movie.title} 
              width={movie.images.logos[0].width} 
              height={movie.images.logos[0].height} 
              className="w-48 object-contain object-top" 
              onLoad={() => setLogoLoaded(true)}
            />
          </motion.div>
        }
        <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center gap-4 mb-4">
          <h3 className="text-2xl sm:text-4xl text-gray-100 font-bold lg:truncate">{movie.title}</h3>
          <p className="text-xl sm:text-4xl text-white flex items-center gap-1 bg-primary/80 border-3 border-primary rounded-full px-2 sm:px-4">{truncateDecimal(movie.vote_average, 1)}</p>
        </div>
        <p className="mb-4">{movie.tagline}</p>
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-zinc-800 to-transparent w-full sm:w-1/3 h-full"></div>      
      <div className="absolute inset-0 bg-linear-to-t from-zinc-800 to-transparent"></div>      
    </div>
  )
}