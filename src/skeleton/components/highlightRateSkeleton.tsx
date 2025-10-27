import { Skeleton } from "@/components/ui/skeleton";

export default function HighlightRateSkeleton() {
 return (
  <div className="w-full aspect-1/2 sm:aspect-4/3 lg:aspect-4/2 overflow-hidden relative bg-gray-700">
    <div className="px-8 absolute bottom-20 left-0 z-10 flex flex-col w-full">
      <Skeleton className="h-6 rounded-full w-44 mb-4" />
      <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center gap-4 mb-2">
        <Skeleton className="h-10 rounded-full w-56 xs:w-64 sm:w-xl mb-2" />
        <Skeleton className="h-10 rounded-full w-16 mb-2" />
      </div>
      <Skeleton className="h-4 w-44 mb-4" />
      <div className="flex flex-col mb-4 w-full">
        <Skeleton className="h-4 w-full sm:w-lg mb-2" />
        <Skeleton className="h-4 w-full sm:w-lg mb-2" />
        <Skeleton className="h-4 w-full sm:w-lg mb-2" />
        <Skeleton className="h-4 w-40 mb-2" />
      </div>
      <Skeleton className="h-10 w-44 mb-2" />
    </div>
  </div>
 ) 
}