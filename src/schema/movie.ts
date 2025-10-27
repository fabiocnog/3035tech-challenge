import {z} from  'zod';

export const GenreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const ProductionCompanySchema = z.object({
  id: z.number(),
  logo_path: z.string().nullable(),
  name: z.string(),
  origin_country: z.string(),
});

export const ProductionCountrySchema = z.object({
  iso_3166_1: z.string(),
  name: z.string(),
});

export const SpokenLanguageSchema = z.object({
  english_name: z.string(),
  iso_639_1: z.string(),
  name: z.string(),
});

export const VideoResultSchema = z.object({
  iso_639_1: z.string(),
  iso_3166_1: z.string(),
  name: z.string(),
  key: z.string(),
  site: z.string(),
  size: z.number(),
  type: z.string(),
  official: z.boolean(),
  published_at: z.string(),
  id: z.string(),
});

export const VideosSchema = z.object({
  results: z.array(VideoResultSchema),
});

export const ImageItemSchema = z.object({
  aspect_ratio: z.number(),
  height: z.number(),
  iso_3166_1: z.string().nullable(),
  iso_639_1: z.string().nullable(),
  file_path: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
  width: z.number(),
});

export const ImagesSchema = z.object({
  backdrops: z.array(ImageItemSchema),
  logos: z.array(ImageItemSchema),
  posters: z.array(ImageItemSchema),
});

export const MovieDetailsSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  budget: z.number(),
  genres: z.array(GenreSchema),
  homepage: z.url().nullable(),
  id: z.number(),
  imdb_id: z.string().nullable(),
  origin_country: z.array(z.string()),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  production_companies: z.array(ProductionCompanySchema),
  production_countries: z.array(ProductionCountrySchema),
  release_date: z.string(),
  revenue: z.number(),
  runtime: z.number().nullable(),
  spoken_languages: z.array(SpokenLanguageSchema),
  status: z.string(),
  tagline: z.string().nullable(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
  videos: VideosSchema,
  images: ImagesSchema,
});


export type MovieDetailsType = z.infer<typeof MovieDetailsSchema>;

export const MovieListSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  id: z.number(),
  title: z.string(),
  original_title: z.string(),
  overview: z.string(),
  poster_path: z.string().nullable(),
  media_type: z.string(),
  original_language: z.string(),
  genre_ids: z.array(z.number()),
  popularity: z.number(),
  release_date: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export type MovieListType = z.infer<typeof MovieListSchema>;