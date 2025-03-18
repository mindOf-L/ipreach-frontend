import { User } from '../../users/tUser'

export interface ProtectedRouteParams {
  user: User
}

export interface ProtectedElementParams {
  user: User
}
