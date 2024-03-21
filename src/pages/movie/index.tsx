import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
// api
import Api from "../../api";
// types
import { MovieDetails } from "../../types/movies";
import { useSnackbar } from "notistack";

export default function MoviePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<MovieDetails | null>(null);

  const { enqueueSnackbar } = useSnackbar(); // useful for showing error or another kind of messages

  const getMovie = useCallback(async () => {
    try {
      if (id) {
        const response = await Api.movies.getMovie(id);
        if (response.data) {
          setMovie(response.data);
          setLoading(false);
        } else enqueueSnackbar(response?.status_message, { variant: "error", onClose: () => navigate("/") });
      }
    } catch (error) {
      throw new Error(error as string);
    }
  }, [id, enqueueSnackbar, navigate]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return <div>{loading ? "Loading..." : JSON.stringify(movie, null, 2)}</div>;
}
