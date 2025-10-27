import { Skeleton } from "@/components/ui/skeleton";
import MovieCardSkeleton from "../components/movieCardSkeleton";

export default function SearchSkeleton() {
  return (
    <div className="w-full flex flex-col mt-24">
      <Skeleton className="h-6 rounded-full w-xs mb-8 mt-0 lg:mt-8 bg-gray-600 mx-4 lg:mx-8" />
      <MovieCardSkeleton />
    </div>
  )
}