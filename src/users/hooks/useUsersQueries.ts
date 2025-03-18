import { useQuery } from '@tanstack/react-query'
import { getMyUser } from '../service/userService'
import { User } from '../tUser'
import { AppUseQueryProps } from '../../common/types/tQueries'

export const USER_ME_KEY = 'me'

export const useGetMyUserQuery = (props?: AppUseQueryProps<User>) =>
  useQuery({
    ...props,
    queryKey: [USER_ME_KEY],
    queryFn: getMyUser,
    select: (data) => data.data.data,
    retry: 1,
  })
