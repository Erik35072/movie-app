import { useCallback, useEffect, useState } from "react";
// api
import Api from "../../api";
// types
import { Movie } from "../../types/movies";
// utils
import { useSnackbar } from "notistack";

export default function MainPage() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const { enqueueSnackbar } = useSnackbar(); // useful for showing error or another kind of messages

  const getLatestMovies = useCallback(async () => {
    try {
      const response = await Api.movies.getUpcomingMovies();
      if (response?.data) {
        setMovies(response.data.results);
      } else enqueueSnackbar(response.status_message, { variant: "error" });
    } catch (error) {
      throw new Error(error as string);
    }
  }, [enqueueSnackbar]);

  useEffect(() => {
    getLatestMovies();
  }, [getLatestMovies]);

  return (
    <div>
      <h1>{movies.length ? JSON.stringify(movies, null, 20) : "Loading..."}</h1>
    </div>
  );
}
