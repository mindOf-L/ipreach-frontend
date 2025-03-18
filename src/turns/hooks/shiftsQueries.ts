import { useQuery } from '@tanstack/react-query'
import { Shift } from '../tShifts'
import { getShifts, GetShiftsParams } from '../service/shiftsService'
import { AppUseQueryProps } from '../../common/types/tQueries'

const SHIFTS_KEY = 'shifts'

interface ShiftsQueryProps {
  props?: AppUseQueryProps<Shift[]>
  params: GetShiftsParams
}

export const useGetShiftsQuery = ({ props, params }: ShiftsQueryProps) =>
  useQuery({
    ...props,
    queryKey: [SHIFTS_KEY, params.locationId, params.date],
    queryFn: () => getShifts(params),
    select: (data) => data.data.data,
  })
