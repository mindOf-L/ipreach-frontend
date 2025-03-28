import axios, { AxiosError } from 'axios'
import { toast } from 'sonner'
import queryString from 'query-string'
import { ApiError } from './types/tApi'

export const AUTH_HEADER_KEY = 'x-auth-token'
const publicUrls = ['']

export const appAxios = axios.create({
  baseURL: `${import.meta.env.VITE_API_PATH}/api/v1`,
  paramsSerializer: (params) =>
    queryString.stringify(params, { arrayFormat: 'none' }),
})

appAxios.interceptors.request.use((config) => {
  config.withCredentials =
    config.url !== undefined && !publicUrls.includes(config.url)
  return config
})
appAxios.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiError>) => {
    const apiError = error.response?.data

    if (!apiError) {
      toast.error('Could not connect to the server. Contact administrator.')
      return
    }

    if (apiError.code === 500) {
      toast.error('Server internal error. Contact administrator.')
      return
    }

    if (
      apiError.code === 403 ||
      apiError.code === 401 ||
      apiError.message === 'Token invalid'
    ) {
      toast.error(
        'Authentication needed to access this resource. Please login again.'
      )
      return
    }

    return error
  }
)
