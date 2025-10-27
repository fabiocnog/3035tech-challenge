import { Skeleton } from "@/components/ui/skeleton";

export default function TopRateSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 gap-4 -mt-12 relative z-30 mb-8">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex-1 rounded-sm shadow aspect-2/3 bg-gray-600 relative">
          <Skeleton className="absolute top-4 right-4 rounded-full w-11 h-11 shadow-lg" />
          <div className="absolute bottom-6 left-6 right-4 z-10 flex flex-col items-center">
            <Skeleton className="h-6 rounded-full w-56 mb-2" />
            <Skeleton className="h-4 rounded-full w-40 mb-2" />
          </div>
        </div>
      ))}
    </div>
  )
}