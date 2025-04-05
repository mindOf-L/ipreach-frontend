import { Navigate } from 'react-router'
import { LOGIN_ROUTE } from '../../login/components/Login'
import { cloneElement, FC, ReactElement } from 'react'
import { AppLoading } from '../../common/components/AppLoading'
import { User } from '../../users/tUser'
import { useGetMyUserState } from '../../users/state/useUsersState'
import { useGetMyUserQuery } from '../../users/hooks/useUsersQueries'

export interface ProtectedElement {
  me: User
}

interface ProtectedParent {
  element: ReactElement<ProtectedElement>
  fallback?: ReactElement
}

export const Protected: FC<ProtectedParent> = ({
  element,
  fallback = <Navigate to={LOGIN_ROUTE} />,
}) => {
  const { me } = useGetMyUserState()

  if (!me) return <ProtectedFromQuery element={element} fallback={fallback} />

  console.log('from state')
  return cloneElement(element, { me })
}

const ProtectedFromQuery: FC<ProtectedParent> = ({ element, fallback }) => {
  const { data: me, isFetching } = useGetMyUserQuery()

  if (isFetching) return <AppLoading />

  if (!me) return fallback
  console.log('from query')
  return cloneElement(element, { me })
}
