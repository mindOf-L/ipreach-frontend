import { useNavigate } from 'react-router'
import { HOME_ROUTE } from '../../home/components/Home'
import { MouseEvent } from 'react'
import { useLoginMutation } from './useLoginQueries'
import { toast } from 'sonner'

export const useLogin = () => {
  const navigate = useNavigate()
  const { mutate, isPending } = useLoginMutation({
    onSuccess: () => navigate(HOME_ROUTE),
    onError: () => toast.error('Error al hacer login'),
  })

  const handleLogin = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const body = {
      email: formData.get('username') as string,
      password: formData.get('password') as string,
    }
    mutate(body)
  }

  return { handleLogin, isPending }
}
