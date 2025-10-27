import { useTrendingMovies } from "@/hooks/useTrendingMovies";
import type { MovieListType } from "@/schema/movie";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import HighlightRate from "@/components/highlightRate";
import TopRate from "@/components/topRates";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import MovieCard from "@/components/movieCard";
import LoadingCircular from "../ui/loading";
import { useSortedUniqueMovies } from "@/hooks/useSortedUniqueMovies";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function HomeContent() {
  
  useDocumentTitle("Têndencias de filmes da semana - 3035Tech Challenge");
  const listRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(listRef, { once: true })

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useTrendingMovies()

  const filteredMovies: MovieListType[] = useSortedUniqueMovies(data);

  const highlightMovie = filteredMovies[0];

  return (
    <div className="mb-8">
      <HighlightRate movie={highlightMovie} />
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 sm:px-8 gap-4 -mt-12 relative z-30"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'tween',                   
          damping: 10,
        }}
      >
        {filteredMovies.slice(1, 5).map((movie: MovieListType) => (
          <TopRate key={movie.id} movie={movie} />
        ))}
      </motion.div>
      <h2 className="mt-8 mb-4 px-4 sm:px-8 text-xl sm:text-2xl">Filmes populares da semana</h2>
      <motion.div 
        ref={listRef}
        initial={{ y: -24, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{
          type: 'tween',                   
          damping: 10,
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 sm:px-8 z-30">
        {filteredMovies.slice(5).map((movie: MovieListType) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </motion.div>
      {hasNextPage && (
        <div className="w-full flex justify-center">
          <Button variant="default" className="mt-4 cursor-pointer" onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? <><LoadingCircular /> Carregando...</> : <><PlusCircleIcon /> Carregar mais filmes</>} 
          </Button>
        </div>
      )}
    </div>
  )
}