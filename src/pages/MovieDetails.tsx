import React from "react";

const MovieDetailsContent = React.lazy(() => import("@/components/content/movieDetailsContent"));

export default function MovieDetails() {
  return (
    <MovieDetailsContent />
  )
}