import { Shift } from '../tShifts'

export const useExtractParticipants = (shift: Shift) => {
  const overseer = shift.assignments.participants.find(
    (p) => p.shiftUserRole === 'OVERSEER'
  )

  const auxiliar = shift.assignments.participants.find(
    (p) => p.shiftUserRole === 'AUXILIAR'
  )

  const participants = shift.assignments.participants.filter(
    (p) => p.shiftUserRole === 'PARTICIPANT'
  )

  return { overseer, auxiliar, participants }
}
