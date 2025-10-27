import { render, screen } from "@testing-library/react"
import Home from "@/pages/Home"
import { describe, it, expect, vi } from "vitest"
import { Suspense } from "react"

// mock do HomeContent pra não precisar importar a árvore toda
vi.mock("@/components/content/homeContent", () => ({
  default: () => <div>HomeContent mock</div>
}))

describe("Home Page", () => {
  it("renders HomeContent", () => {
    render(
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    )
    expect(screen.findByText("HomeContent mock")).toBeInTheDocument()
  })
})