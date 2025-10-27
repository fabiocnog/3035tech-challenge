import type { MovieListType } from "@/schema/movie";
import type { InfiniteData } from "@tanstack/react-query";
import { useMemo } from "react";

type TMDBResponse = {
  page: number
  total_pages: number
  results: MovieListType[]
}

export function useSortedUniqueMovies(data: InfiniteData<TMDBResponse, unknown>) {
  return useMemo(() => {
    const all = data.pages.flatMap(page => page.results)
    const unique = Array.from(new Map(all.map((m) => [m.id, m])).values())
    return unique.sort((a, b) => b.vote_average - a.vote_average)
  }, [data])
}