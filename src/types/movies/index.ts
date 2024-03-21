export interface MovieCommon {
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_title: string;
  original_language: string;
  overview: string;
  title: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
}
export interface Movie extends MovieCommon {
  genre_ids: number[];
}

export interface MovieDetails extends MovieCommon {
  belongs_to_collection: Collection;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  popularity: number;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  video: boolean;
}

export interface WatchListMovie {
  id: string | number;
}

export type Collection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type ProductionCompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
