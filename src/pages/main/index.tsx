import { useCallback, useEffect, useState } from "react";
// api
import Api from "../../api";
// types
import { Movie } from "../../types/movies";
// utils
import { useSnackbar } from "notistack";
import MovieCard from "../../components/movies/card";

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
    <section className="my-10">
      <h3 className="text-2xl text-center font-bold text-sky-950 my-8 tracking-[2px]">Upcoming Movies</h3>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-max md:auto-rows-[330px] gap-5 md:gap-10 min-h-screen pb-10">
        {movies.map(movie => (
          <MovieCard key={`movie_${movie.id}`} movie={movie} />
        ))}
      </div>
    </section>
  );
}
