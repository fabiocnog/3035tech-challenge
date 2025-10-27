import { useSearchMovies } from "@/hooks/useSearchMovies";
import type { MovieListType } from "@/schema/movie";
import { motion } from "motion/react";
import { useSearchParams } from "react-router";
import MovieCard from "@/components/movieCard";
import { Button } from "@/components/ui/button";
import { FrownIcon, PlusCircleIcon } from "lucide-react";
import LoadingCircular from "../ui/loading";
import { useSortedUniqueMovies } from "@/hooks/useSortedUniqueMovies";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function SearchContent() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || "";
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useSearchMovies({query: encodeURIComponent(query)});
  
  useDocumentTitle(`Resultados para ${query} - 3035Tech Challenge`);
  
  const filteredMovies: MovieListType[] = useSortedUniqueMovies(data);
  return (
    <div className="mt-24">
      {filteredMovies.length === 0 ? (
        <>
          <p className="mt-8 text-center w-full px-4"><FrownIcon size={80} className="text-primary mx-auto" /></p>
          <h2 className="mt-4 mb-4 px-4 lg:px-8 text-2xl w-full text-center">Nenhum filme encontrado com o título {query}</h2> 
          <p className="text-sm w-full text-center px-8">Verifique se escreveu o título correto ou tente outro título.</p>
        </>
      ) : (
        <div className="mb-8">
          <h2 className="mt-0 md:mt-8 mb-4 px-4 lg:px-8 text-xl md:text-2xl">Resultados para {query}</h2> 
          <motion.div 
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'tween',                   
              damping: 10,
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 lg:px-8 z-30">
            {filteredMovies.map((movie: MovieListType) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </motion.div>
          {hasNextPage && (
            <div className="w-full flex justify-center mb-8">
              <Button variant="default" className="mt-4 cursor-pointer" onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
                {isFetchingNextPage ? <><LoadingCircular /> Carregando...</> : <><PlusCircleIcon /> Carregar mais filmes</>} 
              </Button>
            </div>
          )}            
        </div>
      )}
    </div>
  )
}