import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import MovieCard from "@/components/movieCard"
import { formatDate } from "@/lib/utils"
import { describe, it, expect } from "vitest"
import type { MovieListType } from "@/schema/movie"


describe("MovieCard", () => {
  const mockMovie = {
    id: 123,
    title: "Homem de Ferro",
    vote_average: 7.8,
    release_date: "2008-05-02",
    poster_path: "/ironman.jpg"
  }

  it("renders movie info correctly", () => {
    render(
      <MemoryRouter>
        <MovieCard movie={mockMovie as MovieListType} />
      </MemoryRouter>
    )

    // título
    expect(screen.getByText("Homem de Ferro")).toBeInTheDocument()
    // data formatada
    expect(screen.getByText(formatDate(mockMovie.release_date))).toBeInTheDocument()
    // nota
    expect(screen.getByText("7.8")).toBeInTheDocument()
    // imagem
    expect(screen.getByRole("img")).toHaveAttribute("src", expect.stringContaining("ironman.jpg"))
  })

  it("links to correct route", () => {
    render(
      <MemoryRouter>
        <MovieCard movie={mockMovie as MovieListType} />
      </MemoryRouter>
    )
    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("href", expect.stringContaining("/movie/homem-de-ferro/123"))
  })
})