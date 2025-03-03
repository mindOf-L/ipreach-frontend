import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { ApiResponse } from '../../api/types/tApi'
import { Location } from '../tLocations'
import { getLocations } from '../service/locationsService'
import { AxiosResponse } from 'axios'

const LOCATIONS_KEY = 'locations'

export const useGetLocationsQuery = ({
  props,
}: {
  props?: UseQueryOptions<AxiosResponse<ApiResponse<Location[]>>>
} = {}) =>
  useQuery({
    ...props,
    queryKey: [LOCATIONS_KEY],
    queryFn: getLocations,
  })
