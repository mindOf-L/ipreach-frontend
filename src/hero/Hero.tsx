import { H1 } from '../common/components/HTML/H1'
import { Header } from '../common/components/HTML/Header'
import { Img } from '../common/components/HTML/Img'

export const Hero = () => {
  return (
    <Header className='mt-10 w-full flex justify-center gap-5'>
      <Img src='../../public/ipreach-logo.svg' className='max-w-20'/>
      <H1 className='text-center' variant='blue'>
        iPreach
      </H1>
    </Header>
  )
}
