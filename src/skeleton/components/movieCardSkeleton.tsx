import { Skeleton } from "@/components/ui/skeleton";

export default function MovieCardSkeleton() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-4 lg:px-8 gap-4 relative z-30 mb-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex-1 rounded-sm shadow aspect-4/5 bg-gray-600 relative">
            <Skeleton className="absolute top-4 right-4 rounded-full w-11 h-11 shadow-lg" />
            <div className="absolute bottom-6 left-6 right-4 z-10 flex flex-col items-center">
              <Skeleton className="h-6 rounded-full w-56 mb-2" />
              <Skeleton className="h-4 rounded-full w-40 mb-2" />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}