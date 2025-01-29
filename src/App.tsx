import { H1 } from './common/components/H1'
import { Main } from './common/components/Main'
import { AppFooter } from './footer/AppFooter'

function App() {
  return (
    <>
      <Main className=''>
        <H1 className='text-center' variant='blue'>
          iPreach
        </H1>
      </Main>
      <AppFooter />
    </>
  )
}

export default App
