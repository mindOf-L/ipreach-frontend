import { appAxios } from '../../api/axios'
import { ApiSuccess } from '../../api/types/tApi'
import { User } from '../tUser'

const USERS_PATH = '/users'

export const getMyUser = () =>
  appAxios.get<ApiSuccess<User>>(`${USERS_PATH}/me`)
