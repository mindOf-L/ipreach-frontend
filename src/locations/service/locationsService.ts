import { appAxios } from '../../api/axios'

const LOCATIONS_PATH = '/test/cookie'

export const getLocations = () => appAxios.get(LOCATIONS_PATH)
