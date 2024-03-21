import ApiSlice from "../../slice";
// types
import { TypesWithPagination } from "../../../types/api";
import { Movie } from "../../../types/movies";

export default class Movies extends ApiSlice {
  static baseUrl = ApiSlice.baseUrl + "/movie/";

  static getUpcomingMovies = () => this.request<TypesWithPagination<Movie[]>>("upcoming", "GET");
}
