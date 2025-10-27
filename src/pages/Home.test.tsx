import { render, screen } from "@testing-library/react"
import Home from "@/pages/Home"
import { describe, it, expect, vi } from "vitest"

// mock do HomeContent pra não precisar importar a árvore toda
vi.mock("@/components/content/homeContent", () => ({
  default: () => <div>HomeContent mock</div>
}))

describe("Home Page", () => {
  it("renders HomeContent", () => {
    render(<Home />)
    expect(screen.getByText("HomeContent mock")).toBeInTheDocument()
  })
})