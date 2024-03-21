import { useCallback, useEffect, useState } from "react";
// api
import Api from "../../api";
// types
import { Movie } from "../../types/movies";

export default function MainPage() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const getLatestMovies = useCallback(async () => {
    try {
      const response = await Api.movies.getUpcomingMovies();
      if (response?.data) {
        setMovies(response.data.results);
      }
    } catch (error) {
      throw new Error(error as string);
    }
  }, []);

  useEffect(() => {
    getLatestMovies();
  }, [getLatestMovies]);

  return (
    <div>
      <h1>{movies.length ? JSON.stringify(movies, null, 20) : "Loading..."}</h1>
    </div>
  );
}
