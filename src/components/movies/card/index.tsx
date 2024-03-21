import { MouseEvent, useCallback, useMemo } from "react";
//icons
import { FaStar, FaCalendar } from "react-icons/fa";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
// types
import { Movie, WatchListMovie } from "../../../types/movies";
// components
import { Link } from "react-router-dom";
import { Image } from "../../common/assets";
// redux
import { useDispatch } from "react-redux";
import { addMovieToWatchList, removeMovieFromWatchList } from "../../../providers/store/slices/watchlist";

interface Props {
  movie: Movie;
  watchList: WatchListMovie[];
}

function MovieCard({ movie, watchList }: Props) {
  const dispatch = useDispatch();

  const isExistInWatchList = useMemo(() => Boolean(watchList.find(wMov => wMov.id === movie.id)), [watchList, movie]);

  const toggleMovieInWatchList = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      isExistInWatchList
        ? dispatch(removeMovieFromWatchList({ id: movie.id }))
        : dispatch(addMovieToWatchList({ id: movie.id }));
    },
    [isExistInWatchList, movie, dispatch]
  );

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="w-[250px] sm:w-[200px] h-[330px] m-auto relative p-3 border-2 border-solid border-sky-700 rounded-md flex flex-col space-y-2 duration-700 hover:shadow-gray-300 hover:shadow-xl hover:border-sky-900">
        <div className="h-[230px]">
          <Image className="w-full h-full rounded-md" src={movie.poster_path} alt={movie.title} />
        </div>
        <div className="h-[48px] overflow-hidden font-bold">
          <h4 className="duration-500 hover:text-sky-700">{movie.title}</h4>
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
        <button
          onClick={toggleMovieInWatchList}
          title={`Click to ${isExistInWatchList ? "remove from" : "add to"} watch list`}
        >
          <div className={`absolute right-4 top-4 text-2xl duration-500`}>
            {isExistInWatchList ? (
              <MdWatchLater className="text-red-600" />
            ) : (
              <MdOutlineWatchLater className="text-sky-700" />
            )}
          </div>
        </button>
      </div>
    </Link>
  );
}

export default MovieCard;
