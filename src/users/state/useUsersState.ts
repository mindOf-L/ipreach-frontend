import { USER_ME_KEY } from '../hooks/useUsersQueries'
import { User } from '../tUser'
import { useQueryClient } from '@tanstack/react-query'

export const useGetMyUserState = () => {
  const queryClient = useQueryClient()

  const me = queryClient.getQueryData<User>([USER_ME_KEY])
  return { me }
}
