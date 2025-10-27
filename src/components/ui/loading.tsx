import { cn } from "@/lib/utils"
import { CircleDashedIcon } from "lucide-react"

type LoadingProps = {
  size?: number,
  className?: string
}
export default function LoadingCircular({size = 24, className}: LoadingProps) {
  return <CircleDashedIcon className={cn("animate-spin", className)} size={size} />
}
  