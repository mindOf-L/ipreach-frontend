import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { LoginBody } from '../tLogin'
import { login } from '../service/loginService'
import { USER_ME_KEY } from '../../users/hooks/useUsersQueries'
import { User } from '../../users/tUser'
import { ApiError, ApiResponse } from '../../api/types/tApi'

export const useLoginMutation = (
  props?: UseMutationOptions<ApiResponse<User>, ApiError, LoginBody>
) =>
  useMutation({
    ...props,
    mutationKey: [USER_ME_KEY],
    mutationFn: login,
  })
