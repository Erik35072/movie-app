export interface Movie {
  id: number;
  adult: boolean;
  genre_ids: number[];
  original_language: string;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
}
