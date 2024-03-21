import { MouseEvent, useCallback, useMemo } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { addMovieToWatchList, getWatchList, removeMovieFromWatchList } from "../../../providers/store/slices/watchlist";

type Props = {
  id: string | number;
};

export default function WatchListToggleButton({ id }: Props) {
  const dispatch = useDispatch();
  const watchList = useSelector(getWatchList);

  const isExistInWatchList = useMemo(() => Boolean(watchList.find(wMov => wMov.id == id)), [watchList, id]);

  const toggleMovieInWatchList = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      if (id) {
        isExistInWatchList ? dispatch(removeMovieFromWatchList({ id })) : dispatch(addMovieToWatchList({ id }));
      }
    },
    [isExistInWatchList, id, dispatch]
  );

  return (
    <button
      onClick={toggleMovieInWatchList}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {isExistInWatchList ? "Remove from watch list" : "Add to watch list"}
    </button>
  );
}
