import { toast } from 'sonner'
import { USER_ME_KEY } from '../hooks/useUsersQueries'
import { User } from '../tUser'
import { useQueryClient } from '@tanstack/react-query'
import { useAppTranslation } from '../../translation/hooks/useAppTranslation'
import { USER_NOT_FOUND_ENTRY } from '../../translation/tTranslation'
import { LOGIN_ROUTE } from '../../login/components/Login'
import { useNavigate } from 'react-router'

export const useGetMyUserState = () => {
  const queryClient = useQueryClient()

  const me = queryClient.getQueryData<User>([USER_ME_KEY])
  return { me }
}

export const useGetMyUserProtected = () => {
  const { me } = useGetMyUserState()
  const navigate = useNavigate()
  const userNotFoundText = useAppTranslation({
    sentenceKey: USER_NOT_FOUND_ENTRY,
  })

  if (!me) {
    toast.error(userNotFoundText)
    navigate(LOGIN_ROUTE)
    throw new Error(userNotFoundText)
  }

  return { me }
}
