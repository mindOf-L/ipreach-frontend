import { appAxios } from '../../api/axios'
import { ApiSuccess } from '../../api/types/tApi'
import { Location } from '../tLocations'

const LOCATIONS_PATH = '/locations'

export const getLocations = () =>
  appAxios.get<ApiSuccess<Location[]>>(LOCATIONS_PATH)
