import { render, screen } from "@testing-library/react"
import Home from "@/pages/Home"
import { describe, it, expect, vi } from "vitest"
import { Suspense } from "react"

// mock do HomeContent pra não precisar importar a árvore toda
vi.mock("@/components/content/homeContent", () => ({
  default: () => <div>HomeContent mock</div>
}))

describe("Home Page", () => {
  it("renders HomeContent", async () => {
    render(
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    )
    const element = await screen.findByText("HomeContent mock")
    expect(element).toBeInTheDocument()
  })
})