import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import Home from './pages/Home.tsx'
import Layout from './layout.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode, Suspense } from 'react'
import Search from './pages/Search.tsx'
import HomeSkeleton from './skeleton/pages/HomeSkeleton.tsx'
import SearchSkeleton from './skeleton/pages/SearchSkeleton.tsx'
import MovieDetails from './pages/MovieDetails.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import MovieDetailsSkeleton from './skeleton/pages/MovieDetailsSkeleton.tsx'

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<HomeSkeleton />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        ),
      },
      {
        path: "/movie/:slug/:id",
        element: (
          <Suspense fallback={<MovieDetailsSkeleton />}>
            <MovieDetails />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)
