export interface ApiResponse<T> {
  message: string
  httpCode: number
  response: T
}

export interface ApiError {
  message: string
  httpCode: number
}
