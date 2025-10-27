import type { MovieDetailsType } from "@/schema/movie";
import { getMovieDetails } from "@/services/movies";
import { useSuspenseQuery } from "@tanstack/react-query";

export function useMovieDetails({id}: {id: number}) {
  return useSuspenseQuery<MovieDetailsType>({
    queryKey: ['searchMovies', id],
    queryFn: () => getMovieDetails({id, language: 'pt-BR'}),
    staleTime: 300000
  })
}