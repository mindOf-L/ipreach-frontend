import { ThreeDots } from 'react-loader-spinner'
import { Div } from './HTML/Div'
import { useEffect, useState } from 'react'

export const AppLoading = () => {
  const [showLoading, setShowLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Div className='grid grow place-content-center'>
      {showLoading && <ThreeDots color='#95d3ed' />}
    </Div>
  )
}
