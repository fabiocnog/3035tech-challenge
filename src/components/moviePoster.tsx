import type { MovieDetailsType } from "@/schema/movie";

export default function MoviePoster({movie}: {movie: MovieDetailsType}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg sm:text-2xl font-semibold">Posters:</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {movie.images.posters.map((poster) => (
          <a href={`https://image.tmdb.org/t/p/original${poster.file_path}`} target="_blank" referrerPolicy="no-referrer" key={poster.file_path}>
            <img key={`https://image.tmdb.org/t/p/w500${poster.file_path}`} src={`https://image.tmdb.org/t/p/w500${poster.file_path}`} alt={movie.title} className="object-cover object-top" />
          </a>
        ))}
      </div>
    </div>
  )
}