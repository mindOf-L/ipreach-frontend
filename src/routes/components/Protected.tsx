import { Navigate } from 'react-router'
import { LOGIN_ROUTE } from '../../login/components/Login'
import { useGetMyUserQuery } from '../../users/hooks/useUsersQueries'
import { cloneElement, FC, ReactElement } from 'react'
import { AppLoading } from '../../common/components/AppLoading'
import { User } from '../../users/tUser'

export interface ProtectedElement {
  user: User
}

interface ProtectedParent {
  element: ReactElement<ProtectedElement>
}

export const Protected: FC<ProtectedParent> = ({ element }) => {
  const { data: user, isLoading } = useGetMyUserQuery()

  if (isLoading) return <AppLoading />

  if (!user) return <Navigate to={LOGIN_ROUTE} />

  return cloneElement(element, { user })
}
