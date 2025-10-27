import { render, screen, fireEvent, act } from "@testing-library/react"
import { MemoryRouter, useNavigate, useSearchParams } from "react-router"
import Search from "@/components/navbar/search"
import { describe, it, expect, vi, beforeEach } from "vitest"


vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router")
  return {
    ...actual,
    useNavigate: vi.fn(),
    useSearchParams: vi.fn()
  }
})

const mockNavigate = vi.fn()
const mockSetShowInput = vi.fn()

describe("Search component", () => {
  beforeEach(() => {
    vi.mocked(useNavigate).mockReturnValue(mockNavigate)
    vi.mocked(useSearchParams).mockReturnValue([
      new URLSearchParams(""),
      vi.fn()
    ])
  })

  it("renders input hidden by default", () => {
    render(
      <MemoryRouter>
        <Search showInput={false} setShowInput={mockSetShowInput} />
      </MemoryRouter>
    )
    const input = screen.getByPlaceholderText(/busque pelo título/i)
    expect(input).toHaveClass("opacity-0")
  })

  it("shows input and navigates when typing", async () => {
    render(
      <MemoryRouter>
        <Search showInput={true} setShowInput={mockSetShowInput} />
      </MemoryRouter>
    )

    const input = screen.getByPlaceholderText(/busque pelo título/i)

    await act(async () => {
      fireEvent.change(input, { target: { value: "Matrix" } })
      await new Promise(r => setTimeout(r, 1100))
    })

    expect(mockNavigate).toHaveBeenCalledWith("/search?q=Matrix")
  })
})