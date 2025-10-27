import type { VideoResultSchema } from "@/schema/movie";
import type z from "zod";

type MovieVideoProps = z.infer<typeof VideoResultSchema>;
export default function MovieTrailer({trailer}: {trailer: MovieVideoProps}) {
  return (
    <div className="flex flex-col w-full 2xl:w-2/3 gap-4">
      <h3 className="text-lg sm:text-2xl font-semibold">Assista o trailer:</h3>
      <div className="aspect-video">
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${trailer.key}?rel=0&modestbranding=1&showinfo=0`}
          title={trailer.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}