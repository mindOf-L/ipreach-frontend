import { appAxios } from '../../api/axios'
import { ApiSuccess } from '../../api/types/tApi'
import { Shift } from '../tShifts'

const SHIFTS_PATH = '/shifts'

export interface GetShiftsParams {
  locationId: number
  detailed?: boolean
  month?: string
  date?: string
}

export const getShifts = (params: GetShiftsParams) =>
  appAxios.get<ApiSuccess<Shift[]>>(SHIFTS_PATH, { params })
