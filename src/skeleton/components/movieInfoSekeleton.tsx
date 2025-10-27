import { Skeleton } from "@/components/ui/skeleton";

export default function MovieInfoSkeleton() {
  return (
    <div className="w-full px-4 sm:px-8 mt-4">
        <div className="border-b w-full pb-2">
          <Skeleton className="h-6 rounded-full w-40 mb-2 bg-gray-700" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-8 sm:gap-16 mt-4 sm:mt-8">
          <div className="flex flex-col gap-4">
            <Skeleton className="h-4 w-full bg-gray-700" />
            <Skeleton className="h-4 w-full bg-gray-700" />
            <Skeleton className="h-4 w-full bg-gray-700" />
            <Skeleton className="h-4 w-full bg-gray-700" />
            <Skeleton className="h-4 w-full bg-gray-700" />
            <Skeleton className="h-4 w-full bg-gray-700" />
          </div>
          <div className="flex flex-col gap-4">
            <Skeleton className="h-4 w-20 bg-gray-700" />
            <Skeleton className="h-4 w-48 bg-gray-700" />
            <Skeleton className="h-4 w-20 bg-gray-700" />
            <Skeleton className="h-4 w-48 bg-gray-700" />
            <Skeleton className="h-4 w-20 bg-gray-700" />
            <Skeleton className="h-4 w-full bg-gray-700" />
          </div>
        </div>
    </div>
  )
}