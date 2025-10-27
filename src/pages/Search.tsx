import React from "react";

const SearchContent = React.lazy(() => import("@/components/content/searchContent"));

export default function Search() {
  return (
    <SearchContent />
  )
}