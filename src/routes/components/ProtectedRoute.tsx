import { Navigate } from 'react-router'
import { useGetMyUserState } from '../../users/state/useUsersState'
import { LOGIN_ROUTE } from '../../login/components/Login'
import { useGetMyUserQuery } from '../../users/hooks/useUsersQueries'
import { ReactElement } from 'react'
import { AppLoading } from '../../common/components/AppLoading'

export const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const { me: cacheUser } = useGetMyUserState()

  const { data: user, isLoading } = useGetMyUserQuery({ enabled: !cacheUser })

  if (isLoading) return <AppLoading />

  if (!cacheUser && !user) return <Navigate to={LOGIN_ROUTE} />

  return children
}
