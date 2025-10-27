import { useMovieDetails } from "@/hooks/useMovieDetails";
import { useParams } from "react-router";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import MovieHero from "../movieHero";
import MovieInfo from "../movieInfo";

export default function MovieDetailsContent() {

  const {id} = useParams();
  if(!id){
    throw new Error("Invalid movie id");
  }
  const {data: movie} = useMovieDetails({id: parseInt(id)});
  
  useDocumentTitle(`Detalhes do filme ${movie.title} - 3035Tech Challenge`);

  return (
    <div className="mb-8">
      <MovieHero movie={movie} />
      <MovieInfo movie={movie} />
    </div>
  )
}