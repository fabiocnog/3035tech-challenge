import type { MovieDetailsType } from "@/schema/movie";
import MovieTrailer from "./movieTrailer";
import MovieInfoItem from "./movieInfoItem";
import { formatDate } from "@/lib/utils";

export default function MovieInfo({movie}: {movie: MovieDetailsType}) {
  const trailer = movie.videos.results.find(
    (v) => v.type === "Trailer" && v.site === "YouTube" && v.official
  ) || movie.videos.results.find((v) => v.site === "YouTube");
  return (
    <div className="w-full px-4 sm:px-8 mt-4">
      <h2 className="w-full border-b text-xl sm:text-3xl font-semibold pb-2">Detalhes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-8 sm:gap-16 mt-4 sm:mt-8">
        <div className="flex flex-col gap-8">
          <p className="sm:text-xl sm:text-justify">{movie.overview}</p>
          {trailer && (
            <MovieTrailer trailer={trailer} />
          )}
        </div>
        <div className="flex flex-col gap-4">
          {movie.runtime && (
            <MovieInfoItem title="Duração" value={`${movie.runtime} minutos`} />
          )}
          <MovieInfoItem title="Lançamento" value={formatDate(movie.release_date)} />
          <MovieInfoItem title="Gênero(s)" value={movie.genres.map((genre) => genre.name).join(', ')} />
          <MovieInfoItem title="Produzido por" value={movie.production_companies.map((production) => production.name).join(', ')} />
        </div>
      </div>
    </div>    
  )
}
  