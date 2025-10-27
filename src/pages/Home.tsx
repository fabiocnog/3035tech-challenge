import React from "react";

const HomeContent = React.lazy(() => import("@/components/content/homeContent"));

export default function Home() {
  return (
    <HomeContent />
  )
}