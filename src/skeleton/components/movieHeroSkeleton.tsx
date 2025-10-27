import { Skeleton } from "@/components/ui/skeleton";

export default function MovieHeroSkeleton() {
 return (
  <div className="w-full aspect-3/4 sm:aspect-4/3 lg:aspect-5/2 overflow-hidden flex flex-col items-start justify-end relative bg-gray-700">
    <div className="px-4 lg:px-8 flex flex-col w-full">
      <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center gap-4 mb-4">
        <Skeleton className="h-10 rounded-full w-56 xs:w-64 sm:w-xl mb-2" />
        <Skeleton className="h-10 rounded-full w-16 mb-2" />
      </div>
      <Skeleton className="h-4 w-44 mb-4" />
    </div>
  </div>
 ) 
}