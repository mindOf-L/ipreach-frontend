import { Route, Routes } from 'react-router'
import { Main } from './common/components/HTML/Main'
import { AppFooter } from './footer/AppFooter'
import { Login, LOGIN_ROUTE } from './login/components/Login'
import { Home, HOME_ROUTE } from './home/components/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main className='min-h-[90vh] p-6'>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={LOGIN_ROUTE} element={<Login />} />
        </Routes>
      </Main>
      <AppFooter />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
