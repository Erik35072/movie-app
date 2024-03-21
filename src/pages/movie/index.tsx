import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
// api
import Api from "../../api";
// types
import { MovieDetails } from "../../types/movies";

export default function MoviePage() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const { id } = useParams();

  const getMovie = useCallback(async () => {
    try {
      if (id) {
        const response = await Api.movies.getMovie(id);
        if (response.data) {
          setMovie(response.data);
          setLoading(false);
        }
      }
    } catch (error) {
      throw new Error(error as string);
    }
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return <div>{loading ? "Loading..." : JSON.stringify(movie, null, 2)}</div>;
}
