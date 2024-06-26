import axios, { AxiosError, Method } from "axios";
// types
import { RequestOptions, ResponseModel } from "../types/api";

const HOST = process.env.REACT_APP_BASEURL!;

export default class ApiSlice {
  static defaultAuth = true;
  static baseUrl = HOST;

  static async request<T = unknown>(
    url = "",
    method: Method = "GET",
    payload: Record<string, unknown> | FormData | null = null,
    options: RequestOptions = null
  ): Promise<ResponseModel<T>> {
    let headers: { Authorization?: string } = {};

    if (this.defaultAuth) {
      headers.Authorization = `Bearer ${process.env.REACT_APP_API_TOKEN ?? ""}`; // for most of requests;
    }

    if (options?.headers) headers = { ...headers, ...options.headers };

    try {
      const rsp =
        (await axios({
          method,
          url: this.baseUrl + url,
          headers,
          data: payload || {},
          responseType: "json"
        })) || {};

      return {
        data: rsp.data ?? null,
        status_code: null,
        status_message: null,
        success: true
      };
    } catch (err) {
      return (err as AxiosError<ResponseModel<T>>).response!.data;
    }
  }
}
