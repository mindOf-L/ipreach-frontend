import { useNavigate } from 'react-router'
import { HOME_ROUTE } from '../../home/components/Home'
import { MouseEvent } from 'react'
import { useLoginMutation } from './useLoginQueries'

export const useLogin = () => {
  const navigate = useNavigate()
  const { mutate } = useLoginMutation({ onSuccess: () => navigate(HOME_ROUTE) })

  const handleLogin = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const body = {
      email: formData.get('username') as string,
      password: formData.get('password') as string,
    }
    mutate(body)
  }

  return { handleLogin }
}
