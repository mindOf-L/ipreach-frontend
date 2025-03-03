import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from '@tanstack/react-query'
import { LoginBody } from '../tLogin'
import { login } from '../service/loginService'
import { USER_ME_KEY } from '../../users/hooks/useUsersQueries'
import { User } from '../../users/tUser'
import { ApiError, ApiSuccess } from '../../api/types/tApi'
import { AxiosError, AxiosResponse } from 'axios'

export const useLoginMutation = (
  props?: UseMutationOptions<
    AxiosResponse<ApiSuccess<User>>,
    AxiosError<ApiError>,
    LoginBody
  >
) => {
  const queryClient = useQueryClient()
  return useMutation({
    ...props,
    mutationKey: [USER_ME_KEY],
    mutationFn: login,
    onSuccess: (data, variables, context) => {
      queryClient.setQueryData<User>([USER_ME_KEY], data.data.data)
      props?.onSuccess && props?.onSuccess(data, variables, context)
    },
  })
}
