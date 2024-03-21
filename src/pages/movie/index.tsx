import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
// api
import Api from "../../api";
// types
import { MovieDetails } from "../../types/movies";
import { useSnackbar } from "notistack";
import { FaCalendar, FaClock, FaStar } from "react-icons/fa";

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

  return (
    <section className="py-10">
      <div className="max-width-limit h-auto m-auto gap-5 flex flex-col sm:flex-row sm:space-x-10 text-gray-300">
        <div className="w-full sm:w-[80%] flex flex-col space-y-5">
          <h1 className="text-4xl text-sky-500 drop-shadow-[4px_4px_4px_rgba(12,12,12,0.5)]">{movie?.title}</h1>
          <div className="flex space-x-4">
            <FaCalendar className="text-sky-500 text-[18px]" />
            <span>{movie?.release_date.split("-").reverse().join(".")}</span>
          </div>
          <div className="flex space-x-4">
            <FaClock className="text-sky-500 text-[20px]" />
            <p>{movie?.runtime} min.</p>
          </div>
          <div className="flex space-x-4">
            <FaStar className="text-sky-500 text-[22px]" />
            <p>{movie?.vote_average.toFixed(1)}</p>
          </div>
          <p className="text-justify">{movie?.overview}</p>
        </div>
        <div className="w-full sm:w-[20%] flex justify-center sm:block -order-1 sm:order-1">
          <img
            className="w-[65%] sm:w-full rounded-md"
            src={process.env.REACT_APP_IMAGE_URL_PREFIX + movie?.poster_path}
            alt={movie?.title}
          />
        </div>
      </div>
    </section>
  );
}
