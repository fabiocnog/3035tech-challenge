import type { MovieListType } from "@/schema/movie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function getTrendingMovies({page = 1, language = 'en-US'}: {page?: number, language?: string}) {
  const url = `https://api.themoviedb.org/3/trending/movie/week?language=${language}&page=${page}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
  });
  const data = await response.json();
  const result = {...data, results: data.results.filter((movie: MovieListType) => movie.vote_average > 0)}
  // await new Promise<void>(resolve => setTimeout(resolve, 1000));
  return result;
}
export async function searchMovies({query, page = 1, language = 'en-US'}: {query: string, page?: number, language?: string}) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&language=${language}&page=${page}&include_adult=false`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
  });
  const data = await response.json();
  const result = {...data, results: data.results.filter((movie: MovieListType) => movie.poster_path !== null)}
  return result;
}
export async function getMovieDetails({id, language = 'en-US'}: {id: number, language?: string}) {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=${language}&append_to_response=videos,images`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
  });
  const data = await response.json();
  return data;
}