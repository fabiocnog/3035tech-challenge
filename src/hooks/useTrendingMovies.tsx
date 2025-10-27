import type { MovieListType } from "@/schema/movie";
import { getTrendingMovies } from "@/services/movies";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

type TMDBResponse = {
  page: number
  total_pages: number
  results: MovieListType[]
}

export function useTrendingMovies() {
  return useSuspenseInfiniteQuery<TMDBResponse>({
    queryKey: ['trendingMovies'],
    queryFn: ({pageParam = 1}) => getTrendingMovies({page: pageParam as number, language: 'pt-BR'}),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return nextPage <= lastPage.total_pages ? nextPage : undefined;
    },
    staleTime: 300000
  })
}