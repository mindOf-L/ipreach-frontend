export const getInputFormattedDate = (date: Date = new Date()) =>
  date.toISOString().split('T')[0]

export const getDateFromInput = (date: string) =>
  getApiFormattedDate(new Date(date))

export const getApiFormattedDate = (date: Date = new Date()) =>
  date.toISOString().slice(0, 19)
