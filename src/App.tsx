import { Route, Routes } from 'react-router'
import { AppFooter } from './footer/AppFooter'
import { Login, LOGIN_ROUTE } from './login/components/Login'
import { Home, HOME_ROUTE } from './home/components/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={LOGIN_ROUTE} element={<Login />} />
      </Routes>
      <AppFooter />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
