import { useQuery } from '@tanstack/react-query'
import { getLocations } from '../service/locationsService'
import { Location } from '../tLocations'
import { AppUseQueryProps } from '../../common/types/tQueries'

const LOCATIONS_KEY = 'locations'

export const useGetLocationsQuery = (props?: AppUseQueryProps<Location[]>) =>
  useQuery({
    ...props,
    queryKey: [LOCATIONS_KEY],
    queryFn: getLocations,
    select: (data) => data.data.data,
  })
