export type ResponseModel<T = unknown> = {
  data?: T;
  error?: {
    message: string;
    code: number;
    success: boolean;
  };
};

export type RequestOptions = null | {
  headers?: Record<string, unknown>;
};

export type TypesWithPagination<T = unknown> = {
  results: T;
  page: number;
  total_pages: number;
  total_results: number;
};
