import { Link } from "react-router-dom";
//icons
import { FaStar, FaCalendar, FaHeart } from "react-icons/fa";
// types
import { Movie } from "../../../types/movies";

interface Props {
  movie: Movie;
}

function MovieCard({ movie }: Props) {
  return (
    <div className="w-[250px] sm:w-[200px] h-[330px] m-auto relative p-3 border-2 border-solid border-sky-700 rounded-md flex flex-col space-y-2 duration-700 hover:shadow-gray-300 hover:shadow-xl hover:border-sky-900">
      <div className="h-[230px]">
        <img
          className="w-full h-full rounded-md"
          src={process.env.REACT_APP_IMAGE_URL_PREFIX + movie.poster_path}
          alt={movie.title}
        />
      </div>
      <div className="h-[48px] overflow-hidden font-bold">
        <Link to={`/movie/${movie.id}-${movie.title.toLowerCase().split(" ").join("-")}`}>
          <h4 className="duration-500 hover:text-sky-700">{movie.title}</h4>
        </Link>
      </div>
      <div className="flex justify-between font-bold">
        <div className="flex space-x-2">
          <FaCalendar className="text-sky-700 text-[18px]" />
          <span>{movie.release_date.slice(0, 4)}</span>
        </div>
        <div className="flex space-x-2">
          <FaStar className="text-sky-700 text-[20px]" />
          <span>{movie.vote_average.toFixed(1)}</span>
        </div>
      </div>
      <button>
        <FaHeart className={`absolute right-4 top-4 text-2xl duration-500 animate-pulse`} />
      </button>
    </div>
  );
}

export default MovieCard;
