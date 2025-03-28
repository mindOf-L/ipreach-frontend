import { Assignment } from '../assignments/tAssignments'

export interface Shift {
  id: number
  dateTimeFrom: Date
  dateTimeTo: Date
  location: Location
  slotsAvailable: number
  slotsOpened: number
  overseer: string
  brothers: string[]
  assignments: Assignment
}

export const getShiftColor = (shift: Shift) => {
  if (shift.slotsAvailable === 0) return 'border-red-400'
  else if (shift.slotsAvailable !== shift.slotsOpened) return 'border-lime-400'
  return 'border-sky-200'
}
