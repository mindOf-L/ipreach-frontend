import { User } from '../users/tUser'

export interface Assignment {
  id: number
  shiftId: number
  participants: User[]
}
