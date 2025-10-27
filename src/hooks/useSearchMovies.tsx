import type { MovieListType } from "@/schema/movie";
import { searchMovies } from "@/services/movies";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

type TMDBResponse = {
  page: number
  total_pages: number
  results: MovieListType[]
}

export function useSearchMovies({query}: {query: string}) {
  return useSuspenseInfiniteQuery<TMDBResponse>({
    queryKey: ['searchMovies', query],
    queryFn: ({pageParam = 1}) => searchMovies({query, page: pageParam as number, language: 'pt-BR'}),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return nextPage <= lastPage.total_pages ? nextPage : undefined;
    },
    staleTime: 300000
  })
}