import { QueryKey, UseQueryOptions } from '@tanstack/react-query'
import { AxiosResponse, AxiosError } from 'axios'
import { ApiSuccess, ApiError } from '../../api/types/tApi'

interface AppUseQueryOptions<TData, TError>
  extends Omit<UseQueryOptions<TData, TError>, 'queryKey'> {
  queryKey?: QueryKey
}

export type AppUseQueryProps<T> = AppUseQueryOptions<
  AxiosResponse<ApiSuccess<T>>,
  AxiosError<ApiError>
>
