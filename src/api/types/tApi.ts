interface ApiResponse {
  status: string
  code: number
  httpStatus: string
}

export interface ApiError extends ApiResponse {
  message: string
}

export interface ApiSuccess<T> extends ApiResponse {
  data: T
}
