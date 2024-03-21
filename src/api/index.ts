import ApiSlice from "./slice";
import Movies from "./slices/movies";

export default class Api extends ApiSlice {
  static movies = Movies;
}
