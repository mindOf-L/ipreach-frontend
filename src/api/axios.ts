import axios, { AxiosError } from 'axios'
import { toast } from 'sonner'
import { LOGIN_ROUTE } from '../login/components/Login'
import queryString from 'query-string'

export const AUTH_HEADER_KEY = 'x-auth-token'
const publicUrls = ['']

export const appAxios = axios.create({
  baseURL: `${import.meta.env.VITE_API_PATH}/api/v1`,
  paramsSerializer: (params) =>
    queryString.stringify(params, { arrayFormat: 'none' }),
})

appAxios.interceptors.request.use(
  (config) => {
    console.log(document.cookie)
    config.withCredentials =
      config.url !== undefined && !publicUrls.includes(config.url)
    return config
  },
  (error: AxiosError) => {
    if (error.response === undefined) {
      toast.error('Error del servidor. Inténtelo de nuevo más tarde.')
      return
    }

    if (error.status === 403 || error.status === 401) {
      window.location.replace(LOGIN_ROUTE)
      return
    }

    return error
  }
)
