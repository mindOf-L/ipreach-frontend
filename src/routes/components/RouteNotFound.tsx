import { H1 } from '../../common/components/HTML/H1'
import { Main } from '../../common/components/HTML/Main'
import { HOME_ROUTE } from '../../home/components/Home'
import { useAppTranslation } from '../../translation/hooks/useAppTranslation'
import {
  GO_TO_HOME_ENTRY,
  GO_TO_LOGIN_ENTRY,
  ROUTE_NOT_FOUND_ENTRY,
} from '../../translation/tTranslation'
import { LOGIN_ROUTE } from '../../login/components/Login'
import { AppNavLink } from '../../navigation/components/AppNavLink'
import { useGetMyUserQuery } from '../../users/hooks/useUsersQueries'

export const RouteNotFound = () => {
  const routeNotFound = useAppTranslation({
    sentenceKey: ROUTE_NOT_FOUND_ENTRY,
  })
  const goToHome = useAppTranslation({ sentenceKey: GO_TO_HOME_ENTRY })
  const goToLogin = useAppTranslation({ sentenceKey: GO_TO_LOGIN_ENTRY })

  const { data: cacheUser } = useGetMyUserQuery()

  return (
    <Main className='my-20 grid w-full gap-10 text-center'>
      <H1>{routeNotFound}</H1>
      {cacheUser && <AppNavLink to={HOME_ROUTE}>{goToHome}</AppNavLink>}
      {!cacheUser && <AppNavLink to={LOGIN_ROUTE}>{goToLogin}</AppNavLink>}
    </Main>
  )
}
