export interface User {
  approved: boolean
  email: string
  enabled: boolean
  id: number
  name: string
  refreshExpires: string
  roles: Role[]
  tokenExpires: string
  shiftUserRole: ShiftUserRole
}

type Role = 'ROLE_ADMIN' | 'ROLE_USER'

export type ShiftUserRole = 'OVERSEER' | 'AUXILIAR' | 'PARTICIPANT'

export const fallbackUser: User = {
  approved: false,
  email: '',
  enabled: false,
  id: 0,
  name: '',
  refreshExpires: '',
  roles: [],
  tokenExpires: '',
  shiftUserRole: 'PARTICIPANT',
}
