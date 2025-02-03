import { useNavigate } from 'react-router'
import { HOME_ROUTE } from '../../home/components/Home'
import { MouseEvent } from 'react'
import { useLoginMutation } from './useLoginQueries'

export const useLogin = () => {
  const navigate = useNavigate()
  const { mutate } = useLoginMutation()

  const handleLogin = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const body = {
      user: formData.get('username') as string,
      password: formData.get('password') as string,
    }
    mutate(body)
    navigate(HOME_ROUTE)
  }

  return { handleLogin }
}
