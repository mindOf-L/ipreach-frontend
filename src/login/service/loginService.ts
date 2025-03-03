import { appAxios } from '../../api/axios'
import { ApiSuccess } from '../../api/types/tApi'
import { User } from '../../users/tUser'
import { LoginBody } from '../tLogin'

const LOGIN_PATH = '/auth/login'

export const login = (body: LoginBody) => {
  return appAxios.post<ApiSuccess<User>>(LOGIN_PATH, body)
}
