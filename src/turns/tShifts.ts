export interface Shift {
  id: number
  dateTimeFrom: Date
  dateTimeTo: Date
  location: Location
  slotsAvailable: number
  slotsOpened: number
  overseer: string
  brothers: string[]
}
